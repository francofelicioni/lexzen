"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useLanguage } from "@/contexts/language-context"
import { AlertCircle, CheckCircle, Loader2 } from "lucide-react"
import { useState } from "react"
import toast from "react-hot-toast"

type FormData = {
  fullName: string
  email: string
  subject: string
  message: string
  subscribe: boolean
}

type FormErrors = {
  fullName?: string
  email?: string
  message?: string
}

export function ContactForm() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    subject: "",
    message: "",
    subscribe: false,
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessDialog, setShowSuccessDialog] = useState(false)
  const [showErrorDialog, setShowErrorDialog] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = t("contactForm.required")
    }

    if (!formData.email.trim()) {
      newErrors.email = t("contactForm.required")
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = t("contactForm.invalidEmail")
    }

    if (!formData.message.trim()) {
      newErrors.message = t("contactForm.required")
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, subscribe: checked }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      if (!window.grecaptcha || !process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY) {
        console.error("⚠️ reCAPTCHA not loaded or SITE_KEY missing");
        throw new Error("reCAPTCHA not available");
      }

      try {
        const token = await window.grecaptcha.execute(
          process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!,
          { action: "submit" }
        );

        const contactRes = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...formData, token }),
        });

        if (!contactRes.ok) throw new Error("Contact form failed");

        if (formData.subscribe) {
          const newsletterRes = await fetch("/api/newsletter", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: formData.email, source: "contact_form" }),
          })

          const data = await newsletterRes.json()
          console.log("Newsletter response:", newsletterRes.status, data)

          if (data.error === "Email already subscribed") {
            toast.error(t("footer.alreadySubscribed"))
          } else if (!newsletterRes.ok) {
            console.error("Newsletter error:", data)
            throw new Error("Newsletter subscription failed")
          }
        }

        setShowSuccessDialog(true);
        setFormData({
          fullName: "",
          email: "",
          subject: "",
          message: "",
          subscribe: false,
        });
      } catch (error) {
        console.error("Error submitting form:", error);
        setShowErrorDialog(true);
      } finally {
        setIsSubmitting(false);
      }
    }
    catch (error) {
      console.error("Error:", error);
      setShowErrorDialog(true);
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="fullName" className="text-base">
            {t("contactForm.fullName")} <span className="text-red-500">*</span>
          </Label>
          <Input
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder={t("contactForm.fullNamePlaceholder")}
            className={`h-12 text-base ${errors.fullName ? "border-red-500 focus-visible:ring-red-500" : ""}`}
            disabled={isSubmitting}
          />
          {errors.fullName && (
            <p className="text-sm text-red-500 flex items-center gap-1 mt-1">
              <AlertCircle className="h-4 w-4" />
              {errors.fullName}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-base">
            {t("contactForm.email")} <span className="text-red-500">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={t("contactForm.emailPlaceholder")}
            className={`${errors.email ? "border-red-500 focus-visible:ring-red-500" : ""}`}
            disabled={isSubmitting}
          />
          {errors.email && (
            <p className="text-sm text-red-500 flex items-center gap-1 mt-1">
              <AlertCircle className="h-4 w-4" />
              {errors.email}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="subject" className="text-base">
            {t("contactForm.subject")}
          </Label>
          <Input
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder={t("contactForm.subjectPlaceholder")}
            disabled={isSubmitting}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-base">
            {t("contactForm.message")} <span className="text-red-500">*</span>
          </Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={t("contactForm.messagePlaceholder")}
            className={`min-h-[150px] ${errors.message ? "border-red-500 focus-visible:ring-red-500" : ""}`}
            disabled={isSubmitting}
          />
          {errors.message && (
            <p className="text-sm text-red-500 flex items-center gap-1 mt-1">
              <AlertCircle className="h-4 w-4" />
              {errors.message}
            </p>
          )}
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="subscribe"
            className="min-h-2 min-w-2"
            checked={formData.subscribe}
            onCheckedChange={handleCheckboxChange}
            disabled={isSubmitting}
          />
          <Label
            htmlFor="subscribe"
            className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {t("contactForm.subscribe")}
          </Label>
        </div>

        <Button
          type="submit"
          className="w-full bg-blue-gray hover:bg-legal-accent-dark py-5 text-base"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <Loader2 className="h-5 w-5 animate-spin" />
              {t("contactForm.sending")}
            </span>
          ) : (
            t("contactForm.submit")
          )}
        </Button>
      </form>

      {/* Success Dialog */}
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="sm:max-w-md p-6 max-w-[90vw] rounded-lg">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-blue-gray text-xl">
              <CheckCircle className="h-6 w-6" />
              {t("contactForm.success")}
            </DialogTitle>
            <DialogDescription className="text-base pt-2">{t("contactForm.successDetails")}</DialogDescription>
          </DialogHeader>
          <DialogFooter className="mt-4">
            <Button
              className="w-full bg-blue-gray hover:bg-legal-accent-dark py-5 text-base"
              onClick={() => setShowSuccessDialog(false)}
            >
              {t("contactForm.close")}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Error Dialog */}
      <Dialog open={showErrorDialog} onOpenChange={setShowErrorDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-red-600">
              <AlertCircle className="h-5 w-5" />
              {t("contactForm.error")}
            </DialogTitle>
            <DialogDescription>{t("contactForm.errorDetails")}</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              className="w-full bg-blue-gray hover:bg-legal-accent-dark"
              onClick={() => setShowErrorDialog(false)}
            >
              {t("contactForm.close")}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

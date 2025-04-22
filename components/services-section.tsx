"use client"

import type React from "react"
import { FileText, FileCheck, FileCodeIcon as FileContract, ShieldCheck, ShoppingCart, Handshake } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/contexts/language-context"
import { useMobile } from "@/hooks/use-mobile"
import { AnimatedSection } from "./animated-section"
import { useState } from "react"

interface PricingPackageProps {
  title: string
  price: string
  description: string
  features: string[]
  highlighted?: boolean
  buttonText?: string
  className?: string
}

function PricingPackage({
  title,
  price,
  description,
  features,
  highlighted = false,
  buttonText = "Get Started",
  className = "",
}: PricingPackageProps) {
  return (
    <div className={`flex flex-col h-full ${className}`}>
      <Card className={`flex flex-col h-full ${highlighted ? "border-blue-gray shadow-md" : ""}`}>
        <CardHeader className={highlighted ? "bg-blue-gray/10" : ""}>
          <CardTitle className="flex items-center justify-between text-lg sm:text-xl">
            {title}
            {highlighted && <Badge className="bg-blue-gray">Popular</Badge>}
          </CardTitle>
          <CardDescription className="text-sm sm:text-base">{description}</CardDescription>
          <div className="mt-2">
            <span className="text-2xl sm:text-3xl font-bold">{price}</span>
            {price.includes("€") && <span className="text-sm text-muted-foreground">/month</span>}
          </div>
        </CardHeader>
        <CardContent className="flex-grow">
          <ul className="space-y-3 text-sm sm:text-base">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 text-blue-gray mt-0.5 shrink-0"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-blue-gray hover:bg-legal-accent-dark py-5 text-base">{buttonText}</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

interface ServiceItemProps {
  icon: React.ReactNode
  title: string
  description: string
}

function ServiceItem({ icon, title, description }: ServiceItemProps) {
  return (
    <div className="flex gap-4 items-start">
      <div className="rounded-full bg-blue-gray/10 p-2 mt-1 shrink-0">{icon}</div>
      <div>
        <h4 className="font-medium">{title}</h4>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  )
}

export function ServicesSection() {
  const { t } = useLanguage()
  const isMobile = useMobile()
  const [activeTab, setActiveTab] = useState("startups")

  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-neutral-50">
      <div className="container px-4 md:px-6">
        {/* Only animate the section heading */}
        <AnimatedSection direction="up">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-blue-gray/10 px-3 py-1 text-sm text-blue-gray">
                {t("nav.services")}
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("services.title")}</h2>
            </div>
          </div>
        </AnimatedSection>

        {/* No animation for subtitle */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t("services.subtitle")}
            </p>
          </div>
        </div>

        <Tabs defaultValue="startups" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="startups" className={`${isMobile ? "text-sm py-2" : "text-base"}`}>
              {t("services.tabStartups")}
            </TabsTrigger>
            <TabsTrigger value="residency" className={`${isMobile ? "text-sm py-2" : "text-base"}`}>
              {t("services.tabResidency")}
            </TabsTrigger>
          </TabsList>

          {/* For Startups & Online Businesses */}
          <TabsContent value="startups" className="transition-all duration-500">
            <div className="grid gap-8">
              <div className="grid gap-6">
                {/* Animate only the section heading */}
                <AnimatedSection direction="up">
                  <h3 className="text-2xl font-bold">{t("services.legalServices")}</h3>
                </AnimatedSection>
                <div className="grid gap-6 md:grid-cols-2">
                  <ServiceItem
                    icon={<FileText className="h-5 w-5 text-blue-gray" />}
                    title={t("services.personalizedLegal")}
                    description={t("services.personalizedLegalDesc")}
                  />
                  <ServiceItem
                    icon={<FileCheck className="h-5 w-5 text-blue-gray" />}
                    title={t("services.documentPrep")}
                    description={t("services.documentPrepDesc")}
                  />
                  <ServiceItem
                    icon={<FileContract className="h-5 w-5 text-blue-gray" />}
                    title={t("services.contractDrafting")}
                    description={t("services.contractDraftingDesc")}
                  />
                  <ServiceItem
                    icon={<ShieldCheck className="h-5 w-5 text-blue-gray" />}
                    title={t("services.websitePolicies")}
                    description={t("services.websitePoliciesDesc")}
                  />
                  <ServiceItem
                    icon={<ShoppingCart className="h-5 w-5 text-blue-gray" />}
                    title={t("services.ecommerceCompliance")}
                    description={t("services.ecommerceComplianceDesc")}
                  />
                  <ServiceItem
                    icon={<Handshake className="h-5 w-5 text-blue-gray" />}
                    title={t("services.ndaAgreements")}
                    description={t("services.ndaAgreementsDesc")}
                  />
                </div>
              </div>

              <div>
                {/* Animate only the section heading */}
                <AnimatedSection direction="up">
                  <h3 className="text-2xl font-bold mb-6">{t("services.pricingPackages")}</h3>
                </AnimatedSection>
                <div className="grid gap-8 md:grid-cols-3">
                  <PricingPackage
                    title={t("services.express")}
                    price="€150"
                    description={t("services.expressDesc")}
                    features={[
                      "5 hours of legal assistance per month",
                      "Document review",
                      "Basic legal consultation",
                      "Email support",
                      "1 contract draft or review",
                    ]}
                    className="mb-4 md:mb-0"
                  />
                  <PricingPackage
                    title={t("services.medium")}
                    price="€250"
                    description={t("services.mediumDesc")}
                    features={[
                      "10 hours of legal assistance per month",
                      "Priority document review",
                      "Comprehensive legal consultation",
                      "Email and phone support",
                      "2 contract drafts or reviews",
                      "Website legal policies review",
                    ]}
                    highlighted={true}
                    className="mb-4 md:mb-0"
                  />
                  <PricingPackage
                    title={t("services.full")}
                    price="€400"
                    description={t("services.fullDesc")}
                    features={[
                      "20 hours of legal assistance per month",
                      "Priority document handling",
                      "Unlimited legal consultation",
                      "24/7 email and phone support",
                      "4 contract drafts or reviews",
                      "Complete website legal compliance",
                      "E-commerce compliance audit",
                    ]}
                  />
                </div>
                <div className="mt-6 text-center text-sm text-gray-500">
                  <p>{t("services.discounts")}</p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* For EU Citizens Residency */}
          <TabsContent value="residency" className="transition-all duration-500">
            <div className="grid gap-8">
              <div>
                {/* Animate only the section heading */}
                <AnimatedSection direction="up">
                  <h3 className="text-2xl font-bold mb-6">{t("services.residencyTitle")}</h3>
                </AnimatedSection>
                <div className="grid gap-6 md:grid-cols-3">
                  <PricingPackage
                    title={t("services.silver")}
                    price="€40"
                    description={t("services.silverDesc")}
                    features={["Document review", "Personalized advice", "Application checklist", "Email support"]}
                    buttonText={t("services.chooseSilver")}
                  />
                  <PricingPackage
                    title={t("services.gold")}
                    price="€50"
                    description={t("services.goldDesc")}
                    features={[
                      "Documentation preparation",
                      "Appointment booking",
                      "Application review",
                      "Email and phone support",
                      "Follow-up assistance",
                    ]}
                    buttonText={t("services.chooseGold")}
                  />
                  <PricingPackage
                    title={t("services.platinum")}
                    price="€75"
                    description={t("services.platinumDesc")}
                    features={[
                      "Complete preparation",
                      "Medical insurance assistance",
                      "Appointment coordination",
                      "In-person support",
                      "Document translation assistance",
                      "Priority handling",
                    ]}
                    highlighted={true}
                    buttonText={t("services.choosePlatinum")}
                  />
                </div>
              </div>

              <div>
                {/* Animate only the section heading */}
                <AnimatedSection direction="up">
                  <h3 className="text-2xl font-bold mb-6">{t("services.familyTitle")}</h3>
                </AnimatedSection>
                <div className="grid gap-6 md:grid-cols-2">
                  <Card className="transition-all duration-300">
                    <CardHeader>
                      <CardTitle>{t("services.forResidents")}</CardTitle>
                      <CardDescription>{t("services.forResidentsDesc")}</CardDescription>
                      <div className="mt-2">
                        <span className="text-3xl font-bold">€100</span>
                        <span className="text-sm text-muted-foreground"> one-time fee</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4 text-blue-gray mt-0.5 shrink-0"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          <span>Full documentation support</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4 text-blue-gray mt-0.5 shrink-0"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          <span>Digital certificate assistance</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4 text-blue-gray mt-0.5 shrink-0"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          <span>TIE appointment booking</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4 text-blue-gray mt-0.5 shrink-0"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          <span>Application follow-up</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-blue-gray hover:bg-legal-accent-dark">
                        {t("services.selectPackage")}
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="transition-all duration-300">
                    <CardHeader>
                      <CardTitle>{t("services.forNonResidents")}</CardTitle>
                      <CardDescription>{t("services.forNonResidentsDesc")}</CardDescription>
                      <div className="mt-2">
                        <span className="text-3xl font-bold">€150</span>
                        <span className="text-sm text-muted-foreground"> for 2 people</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4 text-blue-gray mt-0.5 shrink-0"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          <span>Full package for residency registration</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4 text-blue-gray mt-0.5 shrink-0"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          <span>Family reunification documentation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4 text-blue-gray mt-0.5 shrink-0"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          <span>All necessary appointments</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4 text-blue-gray mt-0.5 shrink-0"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          <span>€50 for each additional person</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-blue-gray hover:bg-legal-accent-dark">
                        {t("services.selectPackage")}
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </div>

              <div>
                {/* Animate only the section heading */}
                <AnimatedSection direction="up">
                  <h3 className="text-2xl font-bold mb-6">{t("services.specializedTitle")}</h3>
                </AnimatedSection>
                <Card className="transition-all duration-300">
                  <CardHeader>
                    <CardTitle>{t("services.consultationTitle")}</CardTitle>
                    <CardDescription>{t("services.consultationDesc")}</CardDescription>
                    <div className="mt-2">
                      <span className="text-3xl font-bold">€50</span>
                      <span className="text-sm text-muted-foreground"> minimum (2 hours)</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4 text-blue-gray mt-0.5 shrink-0"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>Personalized analysis of your situation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4 text-blue-gray mt-0.5 shrink-0"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>Guidance on suitable residency permits</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4 text-blue-gray mt-0.5 shrink-0"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>Detailed documentation checklist</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4 text-blue-gray mt-0.5 shrink-0"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>Additional hours at €30/hour</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-blue-gray hover:bg-legal-accent-dark">
                      {t("services.bookConsultation")}
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

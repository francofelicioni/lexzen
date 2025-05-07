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
  delay?: number
  className?: string
}

interface PricingPackageProps {
  title: string
  price: string
  description: string
  features: string[]
  highlighted?: boolean
  buttonText?: string
  delay?: number
  className?: string
  t: (key: string) => string
}

function PricingPackage({
  title,
  price,
  description,
  features,
  highlighted = false,
  buttonText = "Get Started",
  delay = 0,
  className = "",
  t,
}: PricingPackageProps) {
  return (
    <AnimatedSection direction="up" delay={delay} className={`flex flex-col h-full ${className}`}>
      <Card
        className={`flex flex-col h-full transition-all duration-300 ${highlighted ? "border-blue-200 shadow-md" : ""} hover:shadow-lg`}
      >
        <CardHeader className={`flex flex-grow justify-center items-start mb-4 ${highlighted ? "bg-blue-gray/10" : "bg-gray-100"}`}>
          <CardTitle className="flex items-center justify-between text-lg md:text-3xl w-full">
            {title}
            {highlighted && <Badge className="bg-blue-gray py-2 px-4 mb-4 text-sm mr-2">Popular</Badge>}
          </CardTitle>
          <CardDescription className="text-sm sm:text-base">{description}</CardDescription>
          <div className="mt-2">
            <span className="text-2xl sm:text-3xl font-bold"> <span className="text-sm"> {t("general.from")} </span>{price}</span>
            {price.includes("€")}
          </div>
        </CardHeader>
        <CardContent className="flex-grow flex justify-start items-center">
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
          <div className="flex justify-start items-center">
          <Button
            className="w-full bg-blue-gray hover:bg-legal-accent-dark hover-lift py-5 text-base"
            onClick={() => {
              const message = `${t("whatsappMessage.greeting")}: ${title}. ${t("whatsappMessage.moreInfo")} `;
              const url = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
              window.open(url, "_blank");
            }}
          >
            {buttonText}
          </Button>
          </div>
        </CardFooter>
      </Card>
    </AnimatedSection>
  )
}


interface ServiceItemProps {
  icon: React.ReactNode
  title: string
  description: string
  delay?: number
}

function ServiceItem({ icon, title, description, delay = 0 }: ServiceItemProps) {
  return (
    <AnimatedSection direction="up" delay={delay} className="flex gap-4 items-start">
      <div className="rounded-full bg-blue-gray/10 p-2 mt-1 shrink-0">{icon}</div>
      <div>
        <h4 className="font-medium">{title}</h4>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </AnimatedSection>
  )
}

export function ServicesSection() {
  const { t } = useLanguage()
  const isMobile = useMobile()
  const [activeTab, setActiveTab] = useState("residency")

  return (
    <section id="services" className="w-full pt-8 md:pt-24 bg-neutral-50">
      <div className="container px-4 md:px-6 mb-12">
        <AnimatedSection direction="up" elementType="heading">
          <div className="flex flex-col items-center justify-center space-y-4 text-center my-6">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-blue-gray/10 px-3 py-1 text-sm text-blue-gray">
                {t("nav.services")}
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("services.title")}</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {t("services.subtitle")}
              </p>
            </div>
          </div>
        </AnimatedSection>

        <Tabs defaultValue="residency" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-2 mb-12 md:mb-0 h-full border border-muted bg-muted ">
            <TabsTrigger value="residency" className={`${isMobile ? "text-sm py-2" : "text-base"}`}>
              {t("services.tabResidency")}
            </TabsTrigger>
            <TabsTrigger value="startups" className={`${isMobile ? "text-sm py-2" : "text-base"}`}>
              {t("services.tabStartups")}
            </TabsTrigger>
          </TabsList>

          {/* For EU Citizens Residency */}
          <TabsContent value="residency" className="transition-all duration-500">
            <div className="grid gap-8">
              <div className="grid gap-6">
                <AnimatedSection direction="up" delay={300}>
                  <h3 className="text-2xl font-bold my-6">{t("services.residencyTitle")}</h3>
                  <p className="my-2">{t("services.residencyDesc1")}</p>
                  <p>{t("services.residencyDesc2")}</p>
                </AnimatedSection>
                <AnimatedSection direction="up" delay={300}>
                  <h3 className="text-2xl font-bold my-4">{t("services.residencySubTitle")}</h3>
                  <p className="mt-2">{t("services.residencySubTitleDesc")}</p>
                </AnimatedSection>
                <div className="grid gap-6 md:grid-cols-3">
                  <PricingPackage
                    title={t("services.silver")}
                    price="€40"
                    description={t("services.silverDesc")}
                    features={
                      [
                        t("services.silverItem1"),
                        t("services.silverItem2"),
                        t("services.silverItem3"),
                        t("services.silverItem4"),
                      ]
                    }
                    buttonText={t("services.chooseSilver")}
                    delay={400}
                    t={t}
                  />
                  <PricingPackage
                    title={t("services.gold")}
                    price="€50"
                    description={t("services.goldDesc")}
                    features={
                      [
                        t("services.goldItem1"),
                        t("services.goldItem2"),
                        t("services.goldItem3"),
                        t("services.goldItem4"),
                        t("services.goldItem5"),
                      ]
                    }
                    highlighted={true}
                    buttonText={t("services.chooseGold")}
                    delay={500}
                    t={t}
                  />
                  <PricingPackage
                    title={t("services.platinum")}
                    price="€75"
                    description={t("services.platinumDesc")}
                    features={[
                      t("services.platinumItem1"),
                      t("services.platinumItem2"),
                      t("services.platinumItem3"),
                      t("services.platinumItem4"),
                    ]}
                    buttonText={t("services.choosePlatinum")}
                    delay={600}
                    t={t}
                  />
                </div>
              </div>

              <div>
                <AnimatedSection direction="up" delay={300}>
                  <h3 className="text-2xl font-bold my-6">{t("services.familyTitle")}</h3>
                  <p className="my-4">{t("services.familySubTitle")}</p>
                </AnimatedSection>
                <div className="grid gap-6 md:grid-cols-2">
                  <AnimatedSection direction="right" delay={400}>
                    <Card className="transition-all duration-300 hover:shadow-lg hover-lift">
                      <CardHeader>
                        <CardTitle>{t("services.forResidents")}</CardTitle>
                        <CardDescription>{t("services.forResidentsDesc")}</CardDescription>
                        <div className="mt-2">
                          <span className="text-sm"> {t("general.from")} </span> <span className="text-3xl font-bold">€100</span>
                          <span className="text-sm text-muted-foreground"></span>
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
                            <span>{t("services.forResidentsItem1")}</span>
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
                            <span>{t("services.forResidentsItem2")}</span>
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
                            <span>{t("services.forResidentsItem3")}</span>
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
                            <span>{t("services.forResidentsItem4")}</span>
                          </li>
                        </ul>
                      </CardContent>
                      <div className="flex justify-start items-center">
                        <CardFooter>
                          <Button
                            className="w-full bg-blue-gray hover:bg-legal-accent-dark hover-lift"
                            onClick={() => {
                              const message = `${t("whatsappMessage.greeting")}: ${t("services.familyTitle")} ${t("services.forResidents")}. ${t("whatsappMessage.moreInfo")}`;
                              const url = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
                              window.open(url, "_blank");

                            }}
                          >
                            {t("services.selectPackage")}
                          </Button>
                        </CardFooter>
                      </div>
                    </Card>
                  </AnimatedSection>

                  <AnimatedSection direction="left" delay={500}>
                    <Card className="transition-all duration-300 hover:shadow-lg hover-lift">
                      <CardHeader>
                        <CardTitle>{t("services.forNonResidents")}</CardTitle>
                        <CardDescription>{t("services.forNonResidentsDesc")}</CardDescription>
                        <div className="mt-2">
                          <span className="text-sm"> {t("general.from")} </span><span className="text-3xl font-bold">€150</span>
                          <span className="text-sm text-muted-foreground"></span>
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
                            <span>{t("services.forNonResidentsItem1")}</span>
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
                            <span>{t("services.forNonResidentsItem2")}</span>
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
                            <span>{t("services.forNonResidentsItem3")}</span>
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
                            <span>{t("services.forNonResidentsItem4")}</span>
                          </li>
                        </ul>
                      </CardContent>
                      <CardFooter>
                      <div className="flex justify-start items-center">
                        <Button
                          className="w-full bg-blue-gray hover:bg-legal-accent-dark hover-lift"
                          onClick={() => {
                            const message = `${t("whatsappMessage.greeting")}: ${t("services.familyTitle")} ${t("services.forNonResidents")}. ${t("whatsappMessage.moreInfo")}`;
                            const url = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
                            window.open(url, "_blank");

                          }}
                        >
                          {t("services.selectPackage")}
                        </Button>
                      </div>
                      </CardFooter>
                    </Card>
                  </AnimatedSection>
                </div>
              </div>

              <div>
                <AnimatedSection direction="up" delay={300}>
                  <h3 className="text-2xl font-bold my-6">{t("services.specializedTitle")}</h3>
                </AnimatedSection>
                <AnimatedSection direction="up" delay={400}>
                  <Card className="transition-all duration-300 hover:shadow-lg hover-lift md:w-1/2">
                    <CardHeader>
                      <CardTitle>{t("services.consultationTitle")}</CardTitle>
                      <CardDescription>{t("services.consultationDesc")}</CardDescription>
                      <div className="mt-2">
                        <span className="text-3xl font-bold">€50</span>
                        <span className="text-sm text-muted-foreground ml-1">({t("general.min2Hours")})</span>
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
                          <span>{t("services.consultationItem1")}</span>
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
                          <span>{t("services.consultationItem2")}</span>
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
                          <span>{t("services.consultationItem3")}</span>
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
                          <span>{t("services.consultationItem4")}</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                    <div className="flex justify-start items-center">
                      <Button
                        className="w-full bg-blue-gray hover:bg-legal-accent-dark hover-lift"
                        onClick={() => {
                          const message = `${t("whatsappMessage.greeting")}: ${t("services.specializedTitle")} ${t("services.consultationTitle")}. ${t("whatsappMessage.moreInfo")}`;
                          const url = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
                          window.open(url, "_blank");

                        }}
                      >
                        {t("services.selectPackage")}
                      </Button>
                    </div>
                    </CardFooter>
                  </Card>
                </AnimatedSection>
              </div>
            </div>
          </TabsContent>

          {/* For Startups & Online Businesses */}
          <TabsContent value="startups" className="transition-all duration-500">
            <div className="grid gap-8">
              <div className="grid gap-6">
                <AnimatedSection direction="up" delay={300} elementType="heading">
                  <h3 className="text-2xl font-bold my-6">{t("services.legalServices")}</h3>

                  <div className="space-y-3 mb-4 text-gray-600">
                    <p>{t("services.legalServicesDesc1")}</p>
                    <p>{t("services.legalServicesDesc2")}</p>
                    <p>{t("services.legalServicesDesc3")}</p>
                    <p>{t("services.legalServicesDesc4")}</p>
                  </div>
                </AnimatedSection>
                <AnimatedSection direction="up" delay={500}>
                  <h4 className="font-bold text-xl my-4">{t("services.howWeHelpTitle")}</h4>

                  <div className="grid gap-6 md:grid-cols-2 text-justify">
                    <ServiceItem
                      icon={<FileText className="h-5 w-5 text-blue-gray" />}
                      title={t("services.howWeHelpP1")}
                      description={t("services.howWeHelpP1Desc")}
                      delay={400}
                    />
                    <ServiceItem
                      icon={<FileCheck className="h-5 w-5 text-blue-gray" />}
                      title={t("services.howWeHelpP2")}
                      description={t("services.howWeHelpP2Desc")}
                      delay={500}
                    />
                    <ServiceItem
                      icon={<FileContract className="h-5 w-5 text-blue-gray" />}
                      title={t("services.howWeHelpP3")}
                      description={t("services.howWeHelpP3Desc")}
                      delay={600}
                    />
                    <ServiceItem
                      icon={<ShieldCheck className="h-5 w-5 text-blue-gray" />}
                      title={t("services.howWeHelpP4")}
                      description={t("services.howWeHelpP4Desc")}
                      delay={700}
                    />
                    <ServiceItem
                      icon={<ShoppingCart className="h-5 w-5 text-blue-gray" />}
                      title={t("services.howWeHelpP5")}
                      description={t("services.howWeHelpP5Desc")}
                      delay={800}
                    />
                  </div>
                </AnimatedSection>
              </div>

              <div>
                <AnimatedSection direction="up" delay={300} elementType="heading">
                  <h3 className="text-2xl font-bold my-6">{t("services.pricingPackages")}</h3>
                </AnimatedSection>
                <div className="grid gap-8 md:grid-cols-3">
                  {/* Pricing Packages */}
                  <PricingPackage
                    title={t("services.initial")}
                    price="€150"
                    description={t("services.initialDesc")}
                    features={[
                      t("services.initialItem1"),
                      t("services.initialItem2"),
                      t("services.initialItem3"),
                      t("services.initialItem4"),
                      t("services.initialItem5"),
                    ]}
                    buttonText={t("services.chooseInitial")}
                    delay={400}
                    className="mb-4 md:mb-0"
                    t={t}
                  />
                  <PricingPackage
                    title={t("services.advanced")}
                    price="€250"
                    description={t("services.advancedDesc")}
                    features={[
                      t("services.advancedItem1"),
                      t("services.advancedItem2"),
                      t("services.advancedItem3"),
                      t("services.advancedItem4"),
                      t("services.advancedItem5"),
                    ]}
                    highlighted={true}
                    buttonText={t("services.chooseAdvanced")}
                    delay={500}
                    className="mb-4 md:mb-0"
                    t={t}
                  />
                  <PricingPackage
                    title={t("services.premium")}
                    price="€400"
                    description={t("services.premiumDesc")}
                    features={[
                      t("services.premiumItem1"),
                      t("services.premiumItem2"),
                      t("services.premiumItem3"),
                      t("services.premiumItem4"),
                      t("services.premiumItem5"),
                    ]}
                    buttonText={t("services.choosePremium")}
                    delay={600}
                    t={t}
                  />
                </div>
                <AnimatedSection direction="up" delay={700}>
                  <div className="mt-6 text-center text-sm text-gray-500">
                    <p>{t("services.discounts")}</p>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      {/* CTA */}
      <AnimatedSection direction="up" delay={700} className="py-16 text-center">
        <h3 className="text-xl font-bold mb-4">{t("about.readyToWork")}</h3>
        <Button className="bg-blue-gray hover:bg-legal-accent-dark hover-lift" asChild>
          <a href="#bookingCalendar">{t("hero.scheduleFree")}</a>
        </Button>
      </AnimatedSection>
    </section>
  )
}

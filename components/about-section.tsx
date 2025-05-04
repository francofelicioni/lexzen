"use client"

import { Users, Award, BookOpen, Scale } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { AnimatedSection } from "./animated-section"

export function AboutSection() {
  const { t } = useLanguage()

  return (
    <section id="about" className="w-full py-8 md:py-24 bg-beige-light">
      <div className="container px-4 md:px-6">
        {/* Update section title to use elementType="heading" */}
        <AnimatedSection direction="up" elementType="heading">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-blue-gray/10 px-3 py-1 text-sm text-blue-gray">
                {t("nav.about")}
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{t("about.title")}</h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {t("about.subtitle")}
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Our Story */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center mb-16">
          <div className="space-y-4 text-justify">
            <AnimatedSection direction="right" delay={200} elementType="heading">
              <h3 className="text-2xl font-bold">{t("about.ourStory")}</h3>
            </AnimatedSection>
            <p className="text-gray-500">{t("about.storyContent1")}</p>
            <p className="text-gray-500">{t("about.storyContent2")}</p>
            <p className="text-gray-500">{t("about.storyContent3")}</p>
            <p className="text-gray-500">{t("about.storyContent4")}</p>
          </div>
          <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-xl bg-gray-100">
            <img
              src="/meeting-room.jpg"
              alt="Lexzen online legal advisory team office in Madrid - Center for privacy and data protection expertise"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
              {/* <div className="text-white font-medium">{t("about.officeLocation")}</div> */}
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mt-20">
          {/* Update "Our Values" heading to use elementType="heading" */}
          <AnimatedSection direction="up" delay={200} elementType="heading">
            <h3 className="text-2xl font-bold text-center mb-10">{t("about.ourValues")}</h3>
          </AnimatedSection>

          {/* Remove animations from values cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center text-center space-y-3 p-6 rounded-lg border bg-white hover-lift">
              <div className="rounded-full bg-blue-gray/10 p-3">
                <Scale className="h-6 w-6 text-blue-gray" />
              </div>
              <h4 className="text-lg font-bold">{t("about.integrity")}</h4>
              <p className="text-gray-500">{t("about.integrityDesc")}</p>
            </div>

            <div className="flex flex-col items-center text-center space-y-3 p-6 rounded-lg border bg-white hover-lift">
              <div className="rounded-full bg-blue-gray/10 p-3">
                <Users className="h-6 w-6 text-blue-gray" />
              </div>
              <h4 className="text-lg font-bold">{t("about.clientCentered")}</h4>
              <p className="text-gray-500">{t("about.clientCenteredDesc")}</p>
            </div>

            <div className="flex flex-col items-center text-center space-y-3 p-6 rounded-lg border bg-white hover-lift">
              <div className="rounded-full bg-blue-gray/10 p-3">
                <Award className="h-6 w-6 text-blue-gray" />
              </div>
              <h4 className="text-lg font-bold">{t("about.excellence")}</h4>
              <p className="text-gray-500">{t("about.excellenceDesc")}</p>
            </div>

            <div className="flex flex-col items-center text-center space-y-3 p-6 rounded-lg border bg-white hover-lift">
              <div className="rounded-full bg-blue-gray/10 p-3">
                <BookOpen className="h-6 w-6 text-blue-gray" />
              </div>
              <h4 className="text-lg font-bold">{t("about.innovation")}</h4>
              <p className="text-gray-500">{t("about.innovationDesc")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

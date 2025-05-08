import { useLanguage } from "@/contexts/language-context";
import { AnimatedSection } from "./animated-section";

export function TestimonialsSection() {
    const { t } = useLanguage();
    return (
        <section className="w-full py-8 md:py-24 bg-neutral-50">
            <div className="container px-4 md:px-6">
                <AnimatedSection direction="up" elementType="heading">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <div className="inline-block rounded-lg bg-blue-gray/10 px-3 py-1 text-sm text-blue-gray">
                                {t("testimonials.title")}
                            </div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{t("testimonials.title")}</h2>
                            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                {t("testimonials.subtitle")}
                            </p>
                        </div>
                    </div>
                </AnimatedSection>
                <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
                    <div className="flex flex-col justify-between space-y-4 rounded-lg border p-6 shadow-sm">
                        <p className="text-gray-500 italic">{t("testimonials.testimonial1")}</p>
                        <div className="flex items-center gap-4">
                            <div className="size-24 w-fit" aria-hidden="true">
                                <img
                                    src="/avatar3.jpg"
                                    alt="Lexzen online legal advisory team providing expert guidance on privacy and data protection for digital businesses"
                                    className="h-full object-cover rounded-full" loading="lazy"
                                />
                            </div>
                            <div className="w-full">
                                <p className="font-medium">{t("testimonials.client1Name")}</p>
                                <p className="text-sm text-gray-500">{t("testimonials.client1Title")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between space-y-4 rounded-lg border p-6 shadow-sm">
                        <p className="text-gray-500 italic">{t("testimonials.testimonial2")}</p>
                        <div className="flex items-center gap-4">
                            <div className="size-24 w-fit" aria-hidden="true">
                                <img
                                    src="/avatar2.jpg"
                                    alt="Lexzen online legal advisory team providing expert guidance on privacy and data protection for digital businesses"
                                    className="h-full object-cover rounded-full" loading="lazy"
                                />
                            </div>
                            <div className="w-full">
                                <p className="font-medium">{t("testimonials.client2Name")}</p>
                                <p className="text-sm text-gray-500">{t("testimonials.client2Title")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between space-y-4 rounded-lg border p-6 shadow-sm">
                        <p className="text-gray-500 italic">{t("testimonials.testimonial3")}</p>
                        <div className="flex items-center gap-4">
                            <div className="size-24 w-fit" aria-hidden="true">
                                <img
                                    src="/avatar1.jpg"
                                    alt="Lexzen online legal advisory team providing expert guidance on privacy and data protection for digital businesses"
                                    className="h-full object-cover rounded-full" loading="lazy"
                                />
                            </div>
                            <div className="w-full">
                                <p className="font-medium">{t("testimonials.client3Name")}</p>
                                <p className="text-sm text-gray-500">{t("testimonials.client3Title")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


import { useLanguage } from "@/contexts/language-context"
import { Button } from "./ui/button"

export function HeroSection() {
    const { t } = useLanguage()

    return (
        <>
            <section className="w-full py-8 md:py-24 bg-hero-blue">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                        <div className="space-y-4 lg:space-y-6">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">{t("hero.title")}</h1>
                            <div className="space-y-2">
                                <p className="max-w-[600px] text-gray-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                                    {t("hero.subtitle")}
                                </p>
                                <p className="max-w-[600px] text-gray-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                                    {t("hero.subtitle2")}
                                </p>
                            </div>
                            <div className="flex flex-col gap-3 sm:flex-row sm:gap-2">
                                <Button

                                    className="w-full sm:w-auto bg-button-orange text-gray-100 font-semibold hover:bg-button-orange-hover hover:text-neutral-50 hover-lift"
                                    asChild
                                >
                                    <a href="#services" className="z-10">{t("hero.viewServices")}</a>
                                </Button>
                                <Button
                                    variant="outline"
                                    className="w-full sm:w-auto hover-lift hover:border-none"
                                    asChild
                                >
                                    <a href="#booking" className="z-10">{t("hero.scheduleFree")}</a>
                                </Button>
                            </div>
                        </div>
                        <div className="mx-auto lg:ml-auto">
                            <div className="aspect-video overflow-hidden rounded-xl bg-gray-100 object-cover">
                                <img
                                    src="/hero.jpg"
                                    alt="Lexzen online legal advisory team providing expert guidance on privacy and data protection for digital businesses"
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
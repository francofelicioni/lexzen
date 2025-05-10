import { useLanguage } from "@/contexts/language-context";
import { AnimatedSection } from "./animated-section";
import { NewsletterForm } from "./newsletter-form";
import { Button } from "./ui/button";

export function CtaAndNewsletter() {

    const { t } = useLanguage();
    return (
        <section className="w-full py-8 md:py-24 bg-blue-gray/10 relative overflow-hidden border border-blue-gray/20">
            <div className="container flex flex-col md:flex-row justify-between items-center lg:items-center px-4 md:px-6 relative space-y-8 md:space-y-0">
                <AnimatedSection direction="up" elementType="heading" className="flex-1 lg:max-w-[600px]">
                    <div className="flex flex-col items-center justify-center text-center px-4">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-600">{t("cta.title")}</h2>
                        <p className="max-w-[900px] text-gray-100 py-2 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            {t("cta.subtitle")}
                        </p>
                        <div className="flex flex-col lg:flex-row md:min-[400px] gap-2">
                            <Button className="bg-button-orange text-white hover:bg-legal-accent hover:text-gray-100" asChild>
                                <a href="#booking">{t("cta.scheduleConsultation")}</a>
                            </Button>
                            <Button className="border-gray-600 text-gray-600 hover:bg-blue-gray hover:text-white border bg-white/10" asChild>
                                <a href="#contact">{t("cta.contactUs")}</a>
                            </Button>
                        </div>
                    </div>
                </AnimatedSection>
                <div className="w-full border-b border-gray-300 md:hidden"></div>
                <div className="w-px h-24 bg-gray-300 hidden md:block"></div>
                <AnimatedSection direction="up" elementType="heading" className="flex-1 lg:max-w-[600px]">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center px-4">
                        <h3 className="font-semibold text-gray-600 text-3xl md:text-4xl">{t("footer.newsletterHeading")}</h3>
                        <NewsletterForm />
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}

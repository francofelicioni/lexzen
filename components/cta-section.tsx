import { useLanguage } from "@/contexts/language-context";
import { Button } from "./ui/button";

export function CtaSection() {
    const { t } = useLanguage();
    return (
        <div className="w-full max-w-2xl rounded-lg  mx-auto p-6 bg-blue-gray/10 border border-blue-gray/20 shadow-md text-center space-y-6">
            <div className="p-5">
                <h2 className="text-2xl font-bold">{t("cta.title2")}</h2>
                <ol className="mx-auto text-left list-decimal list-inside space-y-6 text-gray-700 font-medium my-4">
                    <li>
                        {t("cta.scheduleConsultation1")}
                    </li>
                    <li>
                        {t("cta.scheduleConsultation2")}
                    </li>
                    <li>
                        {t("cta.scheduleConsultation3")}
                    </li>
                </ol>
                <Button className="bg-cta-button hover:bg-cta-button-hover hover-lift w-full md:w-1/2" asChild>
                    <a href="#booking">{t("cta.bookNow")}</a>
                </Button>
            </div>
        </div>
    );
}
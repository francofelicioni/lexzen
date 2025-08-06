import { useLanguage } from "@/contexts/language-context";
import { Button } from "./ui/button";
import { CheckCircle, Clock, Calendar, ArrowRight } from "lucide-react";

export function CtaSection() {
    const { t } = useLanguage();
    return (
        <section className="w-full py-16 md:py-24 bg-gradient-to-br from-blue-gray/5 to-teal-50/30 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Header Section */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center justify-center rounded-full bg-blue-gray/10 px-4 py-2 text-sm font-medium text-blue-gray mb-6">
                            <Clock className="w-4 h-4 mr-2" />
                            {t("cta.freeConsultation")}
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            {t("cta.title2")}
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            {t("cta.subtitle")}
                        </p>
                    </div>

                    {/* Process Steps */}
                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                            <div className="flex items-center mb-4">
                                <div className="flex items-center justify-center w-12 h-12 bg-blue-gray/10 rounded-full mr-4">
                                    <Calendar className="w-6 h-6 text-blue-gray" />
                                </div>
                                <span className="text-2xl font-bold text-blue-gray">01</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                {t("cta.step1Title")}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {t("cta.scheduleConsultation1")}
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                            <div className="flex items-center mb-4">
                                <div className="flex items-center justify-center w-12 h-12 bg-blue-gray/10 rounded-full mr-4">
                                    <CheckCircle className="w-6 h-6 text-blue-gray" />
                                </div>
                                <span className="text-2xl font-bold text-blue-gray">02</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                {t("cta.step2Title")}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {t("cta.scheduleConsultation2")}
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                            <div className="flex items-center mb-4">
                                <div className="flex items-center justify-center w-12 h-12 bg-blue-gray/10 rounded-full mr-4">
                                    <CheckCircle className="w-6 h-6 text-blue-gray" />
                                </div>
                                <span className="text-2xl font-bold text-blue-gray">03</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                {t("cta.step3Title")}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {t("cta.scheduleConsultation3")}
                            </p>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="bg-gradient-to-r from-blue-gray to-legal-accent-dark rounded-2xl p-8 md:p-12 text-center text-white">
                        <div className="max-w-2xl mx-auto">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                {t("cta.readyToStart")}
                            </h3>
                            <p className="text-lg opacity-90 mb-8">
                                {t("cta.readyToStartDesc")}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button 
                                    size="lg" 
                                    variant="secondary"
                                    className="px-8 py-4 text-lg font-semibold bg-white text-blue-gray hover:bg-gray-100"
                                    asChild
                                >
                                    <a href="#booking">
                                        {t("cta.bookNow")}
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </a>
                                </Button>
                                <Button 
                                    size="lg" 
                                    variant="outline"
                                    className="px-8 py-4 text-lg font-semibold border-white text-white hover:bg-blue-gray text-blue-gray hover:text-white"
                                    asChild
                                >
                                    <a href="#contact">
                                        {t("cta.contactUs")}
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Trust Indicators */}
                    <div className="mt-12 text-center">
                        <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
                            <div className="flex items-center">
                                <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                                {t("cta.guarantee1")}
                            </div>
                            <div className="flex items-center">
                                <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                                {t("cta.guarantee2")}
                            </div>
                            <div className="flex items-center">
                                <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                                {t("cta.guarantee3")}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
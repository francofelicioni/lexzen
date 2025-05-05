import { useRouter } from "next/router";
import { translations } from "@/lib/translations";

export default function PrivacyPolicyPage() {
    const { locale } = useRouter();
    const t = translations[locale as "es" | "en"].privacyPolicy;

    return (
        <main className="max-w-3xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-4">{t.title}</h1>
            <p className="text-sm text-gray-600 mb-6">{t.lastUpdated.replace("{date}", "4 de mayo de 2025")}</p>
            <p className="mb-6">{t.intro.description}</p>
            <p className="mb-10">{t.intro.compliance}</p>

            <section className="mb-10">
                <h2 className="text-xl font-semibold mb-2">{t.sections.identity.title}</h2>
                <ul className="list-disc list-inside space-y-1">
                    <li>{t.sections.identity.controller}</li>
                    <li>{t.sections.identity.legalStatus}</li>
                    <li>{t.sections.identity.email}</li>
                    <li>{t.sections.identity.phone.replace("{phone}", "N/A")}</li>
                    <li>{t.sections.identity.note}</li>
                </ul>
            </section>

            {/* Agrega el resto de secciones según necesidad */}
        </main>
    );
}

"use client"

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { useLanguage } from '@/contexts/language-context';
import React, { use } from 'react';

const TermsOfService = () => {
    const { t } = useLanguage();

    return (
        <>
            <Header />
            <div className="max-w-3xl mx-auto px-4 py-10 text-justify">
                <h1 className="text-3xl font-bold mb-2">{t('legals.termsOfService.title')}</h1>
                <p className="text-sm text-gray-500 mb-6">
                    {t('legals.termsOfService.lastUpdated').replace('{date}', 'May 2025')}
                </p>

                <p className="mb-10">{t('legals.termsOfService.intro.description')}</p>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">{t('legals.termsOfService.sections.provider.title')}</h2>
                    <ul className="list-disc pl-5">
                        <li>{t('legals.termsOfService.sections.provider.name')}</li>
                        <li>{t('legals.termsOfService.sections.provider.legalStatus')}</li>
                        <li>{t('legals.termsOfService.sections.provider.email')}</li>
                        <li>{t('legals.termsOfService.sections.provider.purpose')}</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">{t('legals.termsOfService.sections.acceptance.title')}</h2>
                    <p className="mb-2">{t('legals.termsOfService.sections.acceptance.content')}</p>
                    <p>{t('legals.termsOfService.sections.acceptance.modifications')}</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">{t('legals.termsOfService.sections.access.title')}</h2>
                    <p>{t('legals.termsOfService.sections.access.content')}</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">{t('legals.termsOfService.sections.services.title')}</h2>
                    <p className="mb-2">{t('legals.termsOfService.sections.services.content')}</p>
                    <p>{t('legals.termsOfService.sections.services.disclaimer')}</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">{t('legals.termsOfService.sections.userObligations.title')}</h2>
                    <ul className="list-disc pl-5">
                        <li>{t('legals.termsOfService.sections.userObligations.items.use')}</li>
                        <li>{t('legals.termsOfService.sections.userObligations.items.noFraud')}</li>
                        <li>{t('legals.termsOfService.sections.userObligations.items.noInterference')}</li>
                        <li>{t('legals.termsOfService.sections.userObligations.items.truthfulInfo')}</li>
                        <li>{t('legals.termsOfService.sections.userObligations.items.lexzenRights')}</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">{t('legals.termsOfService.sections.intellectualProperty.title')}</h2>
                    <p className="mb-2">{t('legals.termsOfService.sections.intellectualProperty.content')}</p>
                    <p>{t('legals.termsOfService.sections.intellectualProperty.restriction')}</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">{t('legals.termsOfService.sections.limitation.title')}</h2>
                    <p className="mb-2">{t('legals.termsOfService.sections.limitation.content')}</p>
                    <ul className="list-disc pl-5">
                        <li>{t('legals.termsOfService.sections.limitation.notResponsibleFor.damages')}</li>
                        <li>{t('legals.termsOfService.sections.limitation.notResponsibleFor.thirdPartyContent')}</li>
                        <li>{t('legals.termsOfService.sections.limitation.notResponsibleFor.viruses')}</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">{t('legals.termsOfService.sections.externalLinks.title')}</h2>
                    <p>{t('legals.termsOfService.sections.externalLinks.content')}</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">{t('legals.termsOfService.sections.jurisdiction.title')}</h2>
                    <p>{t('legals.termsOfService.sections.jurisdiction.content')}</p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">{t('legals.termsOfService.sections.contact.title')}</h2>
                    <p className="mb-1">{t('legals.termsOfService.sections.contact.content')}</p>
                    <p>{t('legals.termsOfService.sections.contact.email')}</p>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default TermsOfService;

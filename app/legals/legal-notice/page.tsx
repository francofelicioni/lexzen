"use client"

import React from 'react';
import { useLanguage } from '@/contexts/language-context';

const LegalNotice = () => {
    const { t } = useLanguage();

    return (
        <div className="max-w-3xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-2">{t('legals.legalNotice.title')}</h1>
            <p className="text-sm text-gray-500 mb-6">
                {/* {t('legals.legalNotice.lastUpdated', { date: 'May 2025' })} */}
            </p>

            <p className="mb-6">{t('legals.legalNotice.intro.legalBasis')}</p>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-2">{t('legals.legalNotice.sections.owner.title')}</h2>
                <ul className="list-disc pl-5">
                    <li>{t('legals.legalNotice.sections.owner.commercialName')}</li>
                    <li>{t('legals.legalNotice.sections.owner.legalStatus')}</li>
                    <li>{t('legals.legalNotice.sections.owner.email')}</li>
                    <li>{t('legals.legalNotice.sections.owner.purpose')}</li>
                    <li>{t('legals.legalNotice.sections.owner.note')}</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-2">{t('legals.legalNotice.sections.terms.title')}</h2>
                <p className="mb-2">{t('legals.legalNotice.sections.terms.description')}</p>
                <p>{t('legals.legalNotice.sections.terms.commitment')}</p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-2">{t('legals.legalNotice.sections.intellectualProperty.title')}</h2>
                <p className="mb-2">{t('legals.legalNotice.sections.intellectualProperty.description')}</p>
                <p>{t('legals.legalNotice.sections.intellectualProperty.restriction')}</p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-2">{t('legals.legalNotice.sections.liability.title')}</h2>
                <p>{t('legals.legalNotice.sections.liability.content')}</p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-2">{t('legals.legalNotice.sections.externalLinks.title')}</h2>
                <p>{t('legals.legalNotice.sections.externalLinks.content')}</p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-2">{t('legals.legalNotice.sections.modifications.title')}</h2>
                <p>{t('legals.legalNotice.sections.modifications.content')}</p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-2">{t('legals.legalNotice.sections.jurisdiction.title')}</h2>
                <p>{t('legals.legalNotice.sections.jurisdiction.content')}</p>
            </section>

            <section className="mb-12">
                <h2 className="text-xl font-semibold mb-2">{t('legals.legalNotice.sections.aiImages.title')}</h2>
                <p>{t('legals.legalNotice.sections.aiImages.content')}</p>
            </section>

            <footer className="text-sm text-gray-500">
                <p>{t('legals.legalNotice.footer.aiDisclaimer')}</p>
            </footer>
        </div>
    );
};

export default LegalNotice;
'use client';

import React, { useEffect } from 'react';
import { useLanguage } from '@/contexts/language-context';
import { useFacebookPixel } from '@/hooks/use-facebook-pixel';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Link from 'next/link';

const PrivacyPolicy = () => {
    const { t } = useLanguage();
    const { trackViewContentEvent } = useFacebookPixel();

    // Track ViewContent event when page loads
    useEffect(() => {
        trackViewContentEvent(
            'Privacy Policy',
            'Legal Documents'
        )
    }, [trackViewContentEvent]);

    return (
        <>
            <Header />
            <div className="max-w-3xl mx-auto px-4 py-10 text-justify">
                <h1 className="text-3xl font-bold mb-2">{t('legals.privacyPolicy.title')}</h1>
                <p className="text-sm text-gray-500 mb-6">
                    {t('legals.privacyPolicy.lastUpdated').replace('{date}', 'May 2025')}
                </p>

                <p className="mb-4">{t('legals.privacyPolicy.intro.description')}</p>
                <p className="mb-10">{t('legals.privacyPolicy.intro.compliance')}</p>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">{t('legals.privacyPolicy.sections.identity.title')}</h2>
                    <ul className="list-disc pl-5">
                        <li>{t('legals.privacyPolicy.sections.identity.controller')}</li>
                        <li>{t('legals.privacyPolicy.sections.identity.legalStatus')}</li>
                        <li>{t('legals.privacyPolicy.sections.identity.email')}</li>
                        <li>{t('legals.privacyPolicy.sections.identity.phone').replace('{phone}', '+34614481326')}</li>
                        <li>{t('legals.privacyPolicy.sections.identity.note')}</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">{t('legals.privacyPolicy.sections.dataCategories.title')}</h2>
                    <p>{t('legals.privacyPolicy.sections.dataCategories.description')}</p>
                    <ul className="list-disc pl-5 mt-2">
                        <li>{t('legals.privacyPolicy.sections.dataCategories.items.identity')}</li>
                        <li>{t('legals.privacyPolicy.sections.dataCategories.items.professional')}</li>
                        <li>{t('legals.privacyPolicy.sections.dataCategories.items.financial')}</li>
                        <li>{t('legals.privacyPolicy.sections.dataCategories.items.navigation')}</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">{t('legals.privacyPolicy.sections.purposes.title')}</h2>
                    <ul className="list-disc pl-5">
                        <li>{t('legals.privacyPolicy.sections.purposes.items.inquiries')}</li>
                        <li>{t('legals.privacyPolicy.sections.purposes.items.services')}</li>
                        <li>{t('legals.privacyPolicy.sections.purposes.items.contracts')}</li>
                        <li>{t('legals.privacyPolicy.sections.purposes.items.legal')}</li>
                        <li>{t('legals.privacyPolicy.sections.purposes.items.communications')}</li>
                        <li>{t('legals.privacyPolicy.sections.purposes.items.cookies')}</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">{t('legals.privacyPolicy.sections.legalBasis.title')}</h2>
                    <ul className="list-disc pl-5">
                        <li>{t('legals.privacyPolicy.sections.legalBasis.items.consent')}</li>
                        <li>{t('legals.privacyPolicy.sections.legalBasis.items.contract')}</li>
                        <li>{t('legals.privacyPolicy.sections.legalBasis.items.legalObligation')}</li>
                        <li>{t('legals.privacyPolicy.sections.legalBasis.items.legitimateInterest')}</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">{t('legals.privacyPolicy.sections.recipients.title')}</h2>
                    <p className="mb-2">{t('legals.privacyPolicy.sections.recipients.description')}</p>
                    <ul className="list-disc pl-5">
                        <li>{t('legals.privacyPolicy.sections.recipients.items.processors')}</li>
                        <li>{t('legals.privacyPolicy.sections.recipients.items.legal')}</li>
                        <li>{t('legals.privacyPolicy.sections.recipients.items.noCommercial')}</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">{t('legals.privacyPolicy.sections.internationalTransfers.title')}</h2>
                    <p>{t('legals.privacyPolicy.sections.internationalTransfers.content')}</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">{t('legals.privacyPolicy.sections.retention.title')}</h2>
                    <p>{t('legals.privacyPolicy.sections.retention.content')}</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">{t('legals.privacyPolicy.sections.rights.title')}</h2>
                    <p className="mb-2">{t('legals.privacyPolicy.sections.rights.description')}</p>
                    <ul className="list-disc pl-5 mb-4">
                        <li>{t('legals.privacyPolicy.sections.rights.list.access')}</li>
                        <li>{t('legals.privacyPolicy.sections.rights.list.rectification')}</li>
                        <li>{t('legals.privacyPolicy.sections.rights.list.erasure')}</li>
                        <li>{t('legals.privacyPolicy.sections.rights.list.objection')}</li>
                        <li>{t('legals.privacyPolicy.sections.rights.list.restriction')}</li>
                        <li>{t('legals.privacyPolicy.sections.rights.list.portability')}</li>
                        <li>{t('legals.privacyPolicy.sections.rights.list.withdraw')}</li>
                    </ul>
                    <p className="mb-2">{t('legals.privacyPolicy.sections.rights.instruction')}</p>
                    <p>{t('legals.privacyPolicy.sections.rights.complaint')}</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">{t('legals.privacyPolicy.sections.security.title')}</h2>
                    <p>{t('legals.privacyPolicy.sections.security.content')}</p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">{t('legals.privacyPolicy.sections.cookies.title')}</h2>
                    <p>
                        {t('legals.privacyPolicy.sections.cookies.content')}
                        <a href="/legals/cookie-policy">{t('footer.cookiePolicy')}.</a>
                    </p>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default PrivacyPolicy

"use client"

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { useLanguage } from '@/contexts/language-context';
import { useFacebookPixel } from '@/hooks/use-facebook-pixel';
import React, { useEffect } from 'react';

const CookiePolicy = () => {
    const { t } = useLanguage()
    const { trackViewContentEvent } = useFacebookPixel();

    // Track ViewContent event when page loads
    useEffect(() => {
        trackViewContentEvent(
            'Cookie Policy',
            'Legal Documents'
        )
    }, [trackViewContentEvent]);

    return (
        <>
            <Header />
            <div className="max-w-3xl mx-auto px-4 py-10 text-justify">
                <h1 className="text-3xl font-bold mb-2">{t('legals.cookiePolicy.title')}</h1>
                <p className="text-sm text-gray-500 mb-6">
                    {t('legals.cookiePolicy.lastUpdated').replace('{date}', 'May 2025')}
                </p>

                <p className="mb-4">{t('legals.cookiePolicy.intro.description')}</p>
                <p className="mb-10">{t('legals.cookiePolicy.intro.legal')}</p>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">{t('legals.cookiePolicy.sections.whatAreCookies.title')}</h2>
                    <p>{t('legals.cookiePolicy.sections.whatAreCookies.content')}</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">{t('legals.cookiePolicy.sections.typesOfCookies.title')}</h2>
                    <h3 className="font-medium mt-4 mb-1">Management</h3>
                    <ul className="list-disc pl-5">
                        <li>{t('legals.cookiePolicy.sections.typesOfCookies.management.own')}</li>
                        <li>{t('legals.cookiePolicy.sections.typesOfCookies.management.thirdParty')}</li>
                    </ul>
                    <h3 className="font-medium mt-4 mb-1">Purpose</h3>
                    <ul className="list-disc pl-5">
                        <li>{t('legals.cookiePolicy.sections.typesOfCookies.purpose.technical')}</li>
                        <li>{t('legals.cookiePolicy.sections.typesOfCookies.purpose.personalization')}</li>
                        <li>{t('legals.cookiePolicy.sections.typesOfCookies.purpose.analytics')}</li>
                        <li>{t('legals.cookiePolicy.sections.typesOfCookies.purpose.advertising')}</li>
                    </ul>
                    <h3 className="font-medium mt-4 mb-1">Duration</h3>
                    <ul className="list-disc pl-5">
                        <li>{t('legals.cookiePolicy.sections.typesOfCookies.duration.session')}</li>
                        <li>{t('legals.cookiePolicy.sections.typesOfCookies.duration.persistent')}</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">{t('legals.cookiePolicy.sections.usedCookies.title')}</h2>
                    <p>{t('legals.cookiePolicy.sections.usedCookies.note')}</p>
                    {/* To do: table */}
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">{t('legals.cookiePolicy.sections.management.title')}</h2>
                    <p className="mb-2">{t('legals.cookiePolicy.sections.management.content')}</p>
                    <ul className="list-disc pl-5 mb-2">
                        <li><a href={t('legals.cookiePolicy.sections.management.browserLinks.chrome')} target="_blank" rel="noopener noreferrer">Chrome</a></li>
                        <li><a href={t('legals.cookiePolicy.sections.management.browserLinks.firefox')} target="_blank" rel="noopener noreferrer">Firefox</a></li>
                        <li><a href={t('legals.cookiePolicy.sections.management.browserLinks.safari')} target="_blank" rel="noopener noreferrer">Safari</a></li>
                        <li><a href={t('legals.cookiePolicy.sections.management.browserLinks.edge')} target="_blank" rel="noopener noreferrer">Edge</a></li>
                    </ul>
                    <p className="text-sm text-red-600">{t('legals.cookiePolicy.sections.management.warning')}</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">{t('legals.cookiePolicy.sections.consent.title')}</h2>
                    <p>{t('legals.cookiePolicy.sections.consent.content')}</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">{t('legals.cookiePolicy.sections.modifications.title')}</h2>
                    <p>{t('legals.cookiePolicy.sections.modifications.content')}</p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">{t('legals.cookiePolicy.sections.contact.title')}</h2>
                    <p>{t('legals.cookiePolicy.sections.contact.content')}</p>
                    <p>{t('legals.cookiePolicy.sections.contact.email')}</p>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default CookiePolicy;

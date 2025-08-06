import { useLanguage } from "@/contexts/language-context";
import Link from "next/link";
import { LanguageSelector } from "./language-selector";
import { MobileNav } from "./mobile-nav";
import { Button } from "./ui/button";
import { usePathname, useRouter } from "next/navigation";

export function Header() {
    const { t } = useLanguage()

    const router = useRouter();
    const pathname = usePathname();

    const handleScrollLink = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();

        if (pathname === "/") {
            const section = document.getElementById(id);
            if (section) section.scrollIntoView({ behavior: "smooth" });
        } else {
            router.push(`/#${id}`);
        }
    };
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" >
            <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center gap-2">
                    <MobileNav />
                    <a href={process.env.NEXT_PUBLIC_APP_URL} rel="noopener noreferrer">
                        <img src="/logo.png" alt="Lexzen Logo" className="block mt-1 size-32 h-full" />
                    </a>
                </div>
                <nav className="hidden md:flex items-center gap-6 lg:gap-12">
                    {["services", "about", "contact"].map((item) => (
                        <a
                            key={item}
                            href={`/#${item}`}
                            onClick={handleScrollLink(item)}
                            className="text-md font-medium hover:text-blue-gray transition-colors duration-200 cursor-pointer"
                        >
                            {t(`nav.${item}`)}
                        </a>
                    ))}
                </nav>
                <div className="flex items-center gap-2">
                    <LanguageSelector />
                    <Button className="bg-button-orange hover:bg-button-orange-hover hidden sm:inline-flex">
                        <a onClick={handleScrollLink("booking")} href="/#booking">{t("nav.bookCall")}</a>
                    </Button>
                </div>
            </div>
        </header>
    )
}
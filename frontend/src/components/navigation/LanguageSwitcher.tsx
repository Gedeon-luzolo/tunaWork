"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/src/i18n/routing";
import { useState } from "react";
import Image from "next/image";

const languages = [
  { code: "fr", name: "Français", flag: "/images/Flag/flag_france.png" },
  { code: "ln", name: "Lingala", flag: "/images/Flag/flag_rdc.png" },
];

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = languages.find((lang) => lang.code === locale);

  const handleLanguageChange = (newLocale: string) => {
    router.replace(pathname as any, { locale: newLocale });
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-200"
      >
        <div className="w-5 h-5 rounded-sm overflow-hidden">
          <Image
            src={currentLanguage?.flag || "/images/Flag/flag_france.png"}
            alt={currentLanguage?.name || "Français"}
            width={20}
            height={20}
            className="w-full h-full object-cover"
          />
        </div>
        <span className="text-sm font-medium">{currentLanguage?.name}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 right-0 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 min-w-[150px] z-50">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
                locale === language.code
                  ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                  : "text-gray-700 dark:text-gray-300"
              } ${language.code === languages[0].code ? "rounded-t-lg" : ""} ${
                language.code === languages[languages.length - 1].code
                  ? "rounded-b-lg"
                  : ""
              }`}
            >
              <div className="w-6 h-6 rounded-sm overflow-hidden">
                <Image
                  src={language.flag}
                  alt={language.name}
                  width={24}
                  height={24}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-sm font-medium">{language.name}</span>
            </button>
          ))}
        </div>
      )}

      {isOpen && (
        <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
      )}
    </div>
  );
}

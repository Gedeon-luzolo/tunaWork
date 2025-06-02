import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["fr", "ln"],

  // Used when no locale matches
  defaultLocale: "fr",

  // The `pathnames` object holds pairs of internal and
  // external paths. Based on the locale, the external
  // paths are rewritten to the shared, internal ones.
  pathnames: {
    // If all locales use the same pathname, a single
    // string or only the internal pathname can be provided.
    "/": "/",
    "/login": {
      fr: "/connexion",
      ln: "/kokota",
    },
    "/register": {
      fr: "/inscription",
      ln: "/komikoma",
    },
    "/forgot-password": {
      fr: "/mot-de-passe-oublie",
      ln: "/kobosana-mot-de-passe",
    },
    "/feed": {
      fr: "/fil-actualite",
      ln: "/makambo",
    },
    "/freelancer/[id]": {
      fr: "/freelancer/[id]",
      ln: "/mosali/[id]",
    },
    "/professionals": {
      fr: "/professionnels",
      ln: "/basali-ya-mayele",
    },
  },
});

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);

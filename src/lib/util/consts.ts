import { PUB_DISABLE_ALL_EXTERNAL_REQUESTS, PUB_ENV, PUB_DISABLE_FAILURE_BLOCKS } from "$env/static/public";

// CYBER KWITEH - Project Links
export const GITHUB_URL_PROJECT = "https://github.com/Mukum54/CYBER-KWITEH";
export const GITHUB_URL_VERTD = "https://github.com/VERT-sh/vertd";
export const LINKEDIN_URL = "https://www.linkedin.com/in/mukum-dieudonne-158907378/";
export const COMPANY_WEBSITE = "https://cyberweb.cm";
export const DISCORD_URL = "https://discord.gg/kqevGxYPak";

// Project Name
export const CYBER_KWITEH_NAME =
        PUB_ENV === "development"
                ? "CYBER KWITEH Dev"
                : PUB_ENV === "nightly"
                        ? "CYBER KWITEH Beta"
                        : "CYBER KWITEH";

// Contact Information
export const CONTACT_EMAIL = "cyberweb237@gmail.com";
export const CONTACT_PHONE = "+237 654 492 652";
export const CONTACT_ADDRESS = "Carrefour Etoug-Ebe, Yaoundé, Cameroon";

// Company Info
export const COMPANY_NAME = "CYBER WEB";
export const FOUNDER_NAME = "Mukum Dieudonne";

// Legacy alias for backwards compatibility
export const VERT_NAME = CYBER_KWITEH_NAME;

// i'm not entirely sure this should be in consts.ts, but it is technically a constant as .env is static for VERT
export const DISABLE_ALL_EXTERNAL_REQUESTS =
        PUB_DISABLE_ALL_EXTERNAL_REQUESTS === "true";

export const GB = 1024 * 1024 * 1024;

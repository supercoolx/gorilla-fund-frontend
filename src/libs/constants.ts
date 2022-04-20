export const COMMUNITY_WALLET = "0x71C7656EC7ab88b098defB751B7401B5f6d8976F";

export const URL = {
    PING: '/ping',
    HOME: '/',
    DASHBOARD: '/dashboard',
    MYFUND: '/myfund/:uid',
    SETTING: '/myfund/:uid/setting',
    PROFILE: '/profile',
    SEARCH: '/search',
    FUNDRAISE: '/fund',
    FUND: '/fund/:uid',
    DONATE: '/donate/:uid',
    KYC: '/kyc',
    LOGIN: '/login',
    SIGNUP: '/signup',
    PASSWORD_EMAIL: '/email',
    PASSWORD_RESET: '/reset/:email/:token',
    EMAIL_VERIFY: '/verify',
}

export const SOCIAL = {
    WEBSITE: "https://apegorilla.com/",
    INSTAGRAM: "https://www.instagram.com/apegorillaclub/",
    OPENSEA: "https://opensea.io/ApeGorilla",
    TWITTER: "https://twitter.com/Apegorillaclub",
    DISCORD: "https://discord.gg/apegorilla",
    JOTFORM: "https://form.jotform.com/220227455744354",
    REDDIT: "https://www.reddit.com/r/ApeGorillaClub/",
    FACEBOOK: "https://facebook.com/apegorillaclub",
    YOUTUBE: "https://www.youtube.com/channel/UCUG4eWC6Bf0X7FptfT-LlrA",
    TIKTOK: "https://www.tiktok.com/@apegorillaclub",
    WHITEPAPER: "https://apegorilla.com/documents/Ape_Gorilla_Club_White_Paper.pdf",
    TERMS: "https://apegorilla.com/documents/Ape_Gorilla_Club_Terms_Conditions.pdf"
}

export const FUNDCATEGORY = [
    {
        value: null,
        label: "All"
    },
    {
        value: 1,
        label: "Education & Learning"
    },
    {
        value: 2,
        label: "Gaming"
    },
    {
        value: 3,
        label: "Medical"
    },
    {
        value: 4,
        label: "Industry"
    },
    {
        value: 5,
        label: "Startup"
    }
]

export const FUNDSORT = [
    {
        value: 1,
        label: "Most recent"
    },
    {
        value: 2,
        label: "Most rated"
    }
]
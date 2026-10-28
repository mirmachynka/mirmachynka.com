const ownerName = "Miroslav Machynka";

export const identity = Object.freeze({
    contactEmail: `contact@${PRODUCT_DOMAIN}`,
    organizationName: ORGANIZATION_NAME,
    organizationWebsite: ORGANIZATION_WEBSITE,
    ownerName,
    siteName: PRODUCT_DISPLAY_NAME,
    siteOrigin: BUILD_LOCAL_SITES && typeof window !== "undefined" ? window.location.origin : BUILD_SITE_ORIGIN,
});

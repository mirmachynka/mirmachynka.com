import { readOrganizationIdentity, readProductIdentity } from "@trebired/utils";

const organization = readOrganizationIdentity();
const product = readProductIdentity();

function createSiteDefines(origin: string, development: boolean): Record<string, string> {
  return {
    BUILD_LOCAL_SITES: JSON.stringify(development),
    BUILD_SITE_ORIGIN: JSON.stringify(origin),
    ORGANIZATION_NAME: JSON.stringify(organization.displayName),
    ORGANIZATION_WEBSITE: JSON.stringify(organization.website),
    PRODUCT_DISPLAY_NAME: JSON.stringify(product.displayName),
    PRODUCT_DOMAIN: JSON.stringify(product.domain),
    PRODUCT_WEBSITE: JSON.stringify(product.website),
  };
}

function siteOrigin(): string {
  return product.website;
}

export { createSiteDefines, siteOrigin };

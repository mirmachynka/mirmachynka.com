const organizationName = __ORGANIZATION_NAME__;
const organizationWebsite = __ORGANIZATION_WEBSITE__;
const ownerName = __OWNER_NAME__;
const productDomain = __PRODUCT_DOMAIN__;
const productName = __PRODUCT_NAME__;
const productSlug = __PRODUCT_SLUG__;
const productWebsite = __PRODUCT_WEBSITE__;
const contactEmail = `contact@${productDomain}`;
const contactHref = `mailto:${contactEmail}`;

export {
  contactEmail,
  contactHref,
  organizationName,
  organizationWebsite,
  ownerName,
  productDomain,
  productName,
  productSlug,
  productWebsite,
};

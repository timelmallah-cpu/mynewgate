// next/link without background prefetch. Pages with many links (search results, country and city pages, lists)
// otherwise load every visible link's page in the background, and each of those loads is a billed CDN request.
// The header and site menu keep the default next/link so the main sections still open instantly.
import NextLink from "next/link";

export default function Link({ prefetch = false, ...props }) {
  return <NextLink prefetch={prefetch} {...props} />;
}

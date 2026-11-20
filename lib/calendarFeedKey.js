// Feed key shared by the server route and the client page (no data imports, so the page bundle stays small).
export const makeKey = ({ c, f, l }) => [c && `c-${c}`, f && `f-${f}`, l && `l-${l}`].filter(Boolean).join("_") || "all";

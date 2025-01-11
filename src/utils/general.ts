export const cleanLink = (link: any) => {
  if (typeof link === "string") {
    return link.replace(/[()\s-\s+]/g, "");
  }
  return "";
};

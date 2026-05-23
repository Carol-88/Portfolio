import { useEffect } from "react";
import { site } from "../config/site";

export const usePageSEO = ({
  title = site.seo.title,
  description = site.seo.description,
}) => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    const metaDescription = document.querySelector('meta[name="description"]');
    const previousDescription = metaDescription?.getAttribute("content") ?? "";

    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const previousOgTitle = ogTitle?.getAttribute("content") ?? "";
    const previousOgDescription = ogDescription?.getAttribute("content") ?? "";

    ogTitle?.setAttribute("content", title);
    ogDescription?.setAttribute("content", description);

    return () => {
      document.title = previousTitle;
      metaDescription?.setAttribute("content", previousDescription);
      ogTitle?.setAttribute("content", previousOgTitle);
      ogDescription?.setAttribute("content", previousOgDescription);
    };
  }, [title, description]);
};

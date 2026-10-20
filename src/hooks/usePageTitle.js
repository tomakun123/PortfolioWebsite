// src/hooks/usePageTitle.js
import { useEffect } from "react";

const SITE_TITLE = "Thomas Motais | CS @ NYU Tandon";

// Sets the browser tab title for a page, e.g. "Work Experience | Thomas Motais"
export function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | Thomas Motais` : SITE_TITLE;
  }, [title]);
}

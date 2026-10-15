import { useEffect } from 'react';

export const SITE_NAME = 'Tanayjyot Singh Chawla';

/**
 * Sets document.title for the current route.
 *   usePageTitle()            -> "Tanayjyot Singh Chawla"
 *   usePageTitle('Writings')  -> "Writings · Tanayjyot Singh Chawla"
 * A title that already ends with the site name is used as-is.
 */
export default function usePageTitle(title) {
  useEffect(() => {
    const page = typeof title === 'string' ? title.trim() : '';
    document.title = !page || page.endsWith(SITE_NAME) ? page || SITE_NAME : `${page} · ${SITE_NAME}`;
  }, [title]);
}

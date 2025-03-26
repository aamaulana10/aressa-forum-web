import DOMPurify from 'dompurify';

export const sanitizeHtml = (html) => {
    if (!html) return '';
    return DOMPurify.sanitize(html, {
        ALLOWED_TAGS: ['div', 'br', 'p', 'span', 'a', 'ul', 'ol', 'li', 'strong', 'em', 'i', 'b'],
        ALLOWED_ATTR: ['href', 'target', 'rel'],
    });
};
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface WithClonedStylesPros {
    styleSelector: any;
    title: string;
}
export const WithClonedStyles: React.FC<WithClonedStylesPros> = ({
    children,
    styleSelector,
    title,
    ...props
}) => {
    const [contentRef, setContentRef] = useState(null);
    const mountNode = contentRef?.contentWindow?.document.body;

    useEffect(() => {
        if (!contentRef) {
            return;
        }
        const win = contentRef?.contentWindow;
        const linkEls = win.parent.document.querySelectorAll(
            styleSelector
        );
        if (linkEls.length) {
            linkEls.forEach((el) => {
                win.document.head.appendChild(el);
            });
        }
    }, [contentRef, styleSelector]);

    return (
        <iframe title={title} {...props} ref={setContentRef}>
            {mountNode && createPortal(children, mountNode)}
        </iframe>
    );
};

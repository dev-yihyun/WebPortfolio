import React, { useEffect, useState } from "react";

function ScrollFadeBlock({ children, scrollfade }) {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const ScrollEvent = () => {
            const block = document.querySelector(`.${scrollfade}`)

            if (!block) return;
            if (!scrollfade) return;

            const blockTop = block.getBoundingClientRect().top;

            if (blockTop <= 600) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }

        }
        window.addEventListener('scroll', ScrollEvent);

        return () => {
            window.removeEventListener('scroll', ScrollEvent);
        };
    }, [scrollfade]);
    return (<>
        <div className={`${scrollfade} ${scrolled ? 'Fade' : null}`}>
            {children}
        </div>
    </>);
}

export default ScrollFadeBlock;

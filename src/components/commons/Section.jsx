import React, { useEffect, useRef } from 'react';

// Función para verificar si un elemento está en el viewport
function isInViewport(element) {
 const rect = element.getBoundingClientRect();
 return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
 );
}

const Section = ({ children, animation }) => {
 const sectionRef = useRef(null);

 useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (isInViewport(entry.target)) {
            entry.target.classList.add(animation);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
 }, [animation]);

 return <section ref={sectionRef}>{children}</section>;
};

export default Section;

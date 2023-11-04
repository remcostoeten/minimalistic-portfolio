'use client';
import { useState, useEffect, Ref } from 'react';

interface Options extends IntersectionObserverInit {
  freezeOnceVisible?: boolean;
}

function useInView(options: Options): [Ref<any>, boolean] {
  const [ref, setRef] = useState<Element | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        console.log("Element is in view!");
        if (options.freezeOnceVisible) {
          observer.unobserve(entry.target);
        }
      } else {
        setIsVisible(false);
        console.log("Element is out of view!");
      }
    }, options);

    if (ref) {
      observer.observe(ref);
    }

    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [ref, options]);

  return [setRef, isVisible];
}

export default useInView;
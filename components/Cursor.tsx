'use client';
import PinkCursor from '@/components/core/CursorIcon';
import { useEffect, useRef, useState } from 'react';

export default function Cursor() {
  const trailer = useRef<HTMLDivElement>(null);
  const customCursor = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<boolean>(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const hide = (e.target as HTMLElement).closest('.showAlternativeCursor');

      if (hide) {
        setHovered(true);
        if (trailer.current) trailer.current.style.opacity = '0';
        if (customCursor.current) customCursor.current.style.opacity = '1';

        if (customCursor.current) {
          customCursor.current.style.left = `${e.clientX}px`;
          customCursor.current.style.top = `${e.clientY}px`;
        }
      } else {
        setHovered(false);
        if (trailer.current) trailer.current.style.opacity = '1';
        if (customCursor.current) customCursor.current.style.opacity = '0';
      }

      const interactable = (e.target as HTMLElement).closest('.grow');
      const interacting = interactable !== null;

      animateTrailer(e, interacting);
    };

    const animateTrailer = (e: MouseEvent, interacting: boolean) => {
      const x = e.clientX - (trailer.current?.offsetWidth ?? 0) / 2,
        y = e.clientY - (trailer.current?.offsetHeight ?? 0) / 2;

      const keyframes = {
        transform: `translate(${x}px, ${y}px) scale(${interacting ? 8 : 1})`,
      };

      if (trailer.current) {
        trailer.current.animate(keyframes, {
          duration: 800,
          fill: 'forwards',
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="z-[999] hidden md:block">
      <div ref={trailer} id="trailer">
      </div>
      <div
        className="  z-[999]"
        ref={customCursor}
        id="custom-cursor"
        style={{
          position: 'absolute',
          pointerEvents: 'none',
          top: 0,
          opacity: 0,
          left: 0,
          background: 'none'
        }}>
        <PinkCursor />

      </div>
    </div>
  );
} 1
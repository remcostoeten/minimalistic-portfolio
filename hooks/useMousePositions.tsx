import React, { useState, useRef } from 'react';

const MousePositionComponent = () => {
    const [mousePosition, setMousePosition] = useState<{ x: number | null, y: number | null }>({ x: null, y: null });
    const ref = useRef<HTMLDivElement>(null);

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        const rect = ref.current?.getBoundingClientRect();
        if (rect) {
            setMousePosition({
                x: event.clientX - rect.left,
                y: event.clientY - rect.top,
            });
        }
    };

    return (
        <div ref={ref} onMouseMove={handleMouseMove} >
            Hover me and see where I am relative to the element:
            <br />
            x: {mousePosition.x}
            y: {mousePosition.y}
        </div>
    );
};

export default MousePositionComponent;
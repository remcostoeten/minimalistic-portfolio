import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import AnimatedText from "./AnimatedText";

interface TextData {
    type: string;
    text: string;
}

interface TextRevealSkewProps {
    placeholderText: TextData[];
    className?: string;
}

const TextRevealSkew: React.FC<TextRevealSkewProps> = ({ placeholderText, className }) => {
    const [replay, setReplay] = useState<boolean>(true);

    const reveal: Variants = {
        visible: {
            transition: {
                staggerChildren: 0.025,
            },
        },
    };

    const handleReplay = () => {
        setReplay(!replay);
        setTimeout(() => {
            setReplay(true);
        }, 600);
    };

    return (
        <>
            <motion.div
                className={`reveal-animation ${className}`}
                initial="hidden"
                animate={replay ? "visible" : "hidden"}
                variants={reveal}
            >
                <div className="">

                </div>
            </motion.div>
        </>
    );
}

export default TextRevealSkew;
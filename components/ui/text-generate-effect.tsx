"use client";
import { useEffect, useState } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";

export const TextGenerateEffect = ({
  words,
  className,
  onCompleted,
}: {
  words: string;
  className?: string;
  onCompleted?: () => void;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  const [completedCount, setCompletedCount] = useState(0);

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 1,
        delay: stagger(0.2),
        onComplete: onCompleted,
      }
    );
  }, [scope.current, onCompleted]);

  useEffect(() => {
    if (completedCount === wordsArray.length) {
      onCompleted?.();
    }
  }, [completedCount, wordsArray.length, onCompleted]);

  const handleAnimationComplete = () => {
    setCompletedCount((count) => count + 1);
  };

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="dark:text-white text-black opacity-0"
              onAnimationComplete={handleAnimationComplete}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-normal", className)}>
      <div className="">
        <div className="  dark:text-white  " style={{ lineHeight: "1" }}>
          {renderWords()}
        </div>
      </div>
    </div>
  );
};

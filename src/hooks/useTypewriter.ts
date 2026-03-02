import { useState, useEffect, useCallback } from "react";

export function useTypewriter(phrases: readonly string[], typingSpeed = 60, deletingSpeed = 30, pauseMs = 2000) {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const current = phrases[phraseIndex];
    if (!current) return;

    if (!isDeleting) {
      if (text.length < current.length) {
        return typingSpeed;
      } else {
        // Pause before deleting
        setIsDeleting(true);
        return pauseMs;
      }
    } else {
      if (text.length > 0) {
        return deletingSpeed;
      } else {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
        return 300; // small pause before next phrase
      }
    }
  }, [text, phraseIndex, isDeleting, phrases, typingSpeed, deletingSpeed, pauseMs]);

  useEffect(() => {
    const current = phrases[phraseIndex];
    if (!current) return;

    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      if (text.length < current.length) {
        timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), typingSpeed);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), pauseMs);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(text.slice(0, -1)), deletingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }, 300);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, phraseIndex, isDeleting, phrases, typingSpeed, deletingSpeed, pauseMs]);

  return text;
}

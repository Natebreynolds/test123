"use client";

import { useEffect, useState, useCallback } from 'react';
import { useScroll } from 'framer-motion';

const ELEVENLABS_SCRIPT_URL = "https://elevenlabs.io/convai-widget/index.js";
const AGENT_ID = "6H3DXBhbOnPprQ7V4Zoe";

export default function ChatWidget() {
  const [isVisible, setIsVisible] = useState(false);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [isElementDefined, setIsElementDefined] = useState(false);
  const { scrollY } = useScroll();

  // Handle scroll visibility
  useEffect(() => {
    const handleScroll = () => {
      const shouldBeVisible = window.scrollY > window.innerHeight;
      setIsVisible(shouldBeVisible);
    };

    const unsubscribe = scrollY.on('change', handleScroll);
    return () => unsubscribe();
  }, [scrollY]);

  // Handle script loading
  useEffect(() => {
    if (!isVisible) return;

    const existingScript = document.querySelector(`script[src="${ELEVENLABS_SCRIPT_URL}"]`);
    if (existingScript) {
      setIsScriptLoaded(true);
      return;
    }

    const script = document.createElement('script');
    script.src = ELEVENLABS_SCRIPT_URL;
    script.async = true;
    script.type = "text/javascript";

    script.onload = () => setIsScriptLoaded(true);
    script.onerror = () => setIsScriptLoaded(false);

    document.body.appendChild(script);

    return () => {
      const scriptToRemove = document.querySelector(`script[src="${ELEVENLABS_SCRIPT_URL}"]`);
      if (scriptToRemove?.parentNode) {
        scriptToRemove.parentNode.removeChild(scriptToRemove);
        setIsScriptLoaded(false);
      }
    };
  }, [isVisible]);

  // Check for custom element definition
  useEffect(() => {
    if (!isScriptLoaded) return;

    if (customElements.get('elevenlabs-convai')) {
      setIsElementDefined(true);
      return;
    }

    const checkInterval = setInterval(() => {
      if (customElements.get('elevenlabs-convai')) {
        setIsElementDefined(true);
        clearInterval(checkInterval);
      }
    }, 100);

    return () => clearInterval(checkInterval);
  }, [isScriptLoaded]);

  if (!isVisible || !isScriptLoaded || !isElementDefined) {
    return null;
  }

  return (
    <elevenlabs-convai 
      agent-id={AGENT_ID}
      style={{ display: 'block' }}
    />
  );
}
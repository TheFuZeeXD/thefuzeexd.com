import { useState, useEffect } from 'react';

export function usePreloader(minDisplayTime = 1000, sessionTimeout = 5 * 60 * 1000) {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const checkAndShowPreloader = () => {
      const lastLoadTime = localStorage.getItem('lastLoadTime');
      const currentTime = Date.now();
      
      
      if (!lastLoadTime || (currentTime - parseInt(lastLoadTime)) > sessionTimeout) {
        setIsLoading(true);
        localStorage.setItem("Animations", false);
        setTimeout(() => {
          setIsLoading(false);
          setTimeout(() => setShowContent(true), 3500); 
        }, minDisplayTime);
      } else {
        setIsLoading(false);
        setShowContent(true);
        const root = document.documentElement; 
        root.style.setProperty('--header-animation', "0.8s");
        root.style.setProperty('--loadheader-content-animation', "1.1s");
        root.style.setProperty('--knot-animation', "0s");
        root.style.setProperty('--loadpage-card-animation', "1s");
        root.style.setProperty('--loadpage-description-animation', "1s");
        root.style.setProperty('--grow-1', "0.3s");
        root.style.setProperty('--grow-2', "0.5s");
        root.style.setProperty('--grow-3', "0.7s");
        root.style.setProperty('--grow-4', "0.9s");
        let bodycompleteload = document.querySelector("body");
    bodycompleteload.classList.add("LoadHidden");
      }
      localStorage.setItem('lastLoadTime', currentTime.toString());
    };

    checkAndShowPreloader();
  }, [minDisplayTime, sessionTimeout]);

  return { isLoading, showContent };
}
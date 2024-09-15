import React, { useEffect } from 'react';

const GoogleTranslate: React.FC = () => {
  useEffect(() => {
    const loadGoogleTranslate = () => {
      const script = document.createElement('script');
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);

      (window as any).googleTranslateElementInit = () => {
        new (window as any).google.translate.TranslateElement({
          pageLanguage: 'en',
          includedLanguages: 'es,fr,de,it,pt',
          layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE
        }, 'google_translate_element');
      };
    };

    if (!(window as any).googleTranslateElementInit) {
      loadGoogleTranslate();
    }

    return () => {
      const script = document.querySelector('script[src="//translate.google.com/translate_a/element.js"]');
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return <div id="google_translate_element"></div>;
};

export default GoogleTranslate;

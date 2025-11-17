import React, { useEffect, useState } from "react";

export default function GoogleTranslate() {
  const [visible, setVisible] = useState(true); // ✅ Visible on load

  useEffect(() => {
    // Inject Google Translate script
    const script = document.createElement("script");
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    // Initialize Google Translate
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,hi,gu", // Add more language codes if needed
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );
    };

    return () => {
      // Cleanup script if component unmounts
      document.body.removeChild(script);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-green-600 text-white px-4 py-3 shadow-md z-50 flex items-center justify-between animate-slideDown`}
    >
      <div>
        <h2 className="font-bold text-lg">🌐 Translate Website</h2>
        <p className="text-sm opacity-90">
          Choose your language to translate the site.
        </p>
        <div id="google_translate_element" className="mt-2"></div>
      </div>
      <button
        onClick={() => setVisible(false)}
        className="bg-white text-green-700 px-3 py-1 rounded-lg hover:bg-gray-100 transition"
      >
        ✕
      </button>
    </div>
  );
}

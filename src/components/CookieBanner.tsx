"use client";

import { getLocalStorage, setLocalStorage } from "@/lib/storageHelper";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const COOKIE_CONSENT = "cookie_consent";

const CookieBanner = () => {
  const [cookieConsent, setCookieConsent] = useState<boolean | null>(false);

  useEffect(() => {
    const storedConsentValue = getLocalStorage(COOKIE_CONSENT, null);
    
    setCookieConsent(storedConsentValue);
  }, []);

  useEffect(() => {
    const newValue = cookieConsent ? "granted" : "denied";

    window.gtag("consent", "update", {
      analytics_storage: newValue,
    });
  }, [cookieConsent]);

  const declineConsent = () => {
    setCookieConsent(false);
    setLocalStorage(COOKIE_CONSENT, false);
  };

  const acceptConsent = () => {
    setCookieConsent(true);
    setLocalStorage(COOKIE_CONSENT, true);
  };
  return (
    <div
      className={`${
        cookieConsent === null ? "flex" : "hidden"
      } text-xs my-10 mx-auto max-w-max md:max-w-screen-sm
        fixed bottom-0 left-0 right-0 
        px-3 md:px-4 py-3 justify-between items-center flex-col sm:flex-row gap-4  
         bg-[#299cff] rounded-lg shadow`}
    >
      <div className="text-center">
        <Link href="/cookies">
          <p className="text-white">
            We use <span className="font-bold text-black">cookies</span> on our
            site.
          </p>
        </Link>
      </div>

      <div className="flex gap-2">
        <button
          onClick={declineConsent}
          className="px-5 py-2 text-white rounded-md hover:underline"
        >
          Decline
        </button>
        <button
          onClick={acceptConsent}
          className="bg-white px-5 py-2 text-[#299cff] rounded-lg hover:bg-gray-100 hover:text-[#0088ff]"
        >
          Allow Cookies
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;

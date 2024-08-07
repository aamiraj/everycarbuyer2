"use client";

import pageView from "@/lib/gtagHelper";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import React, { useEffect } from "react";

const GoogleAnalytics = ({
  GA_MEASUREMENT_ID,
}: {
  GA_MEASUREMENT_ID: string;
}) => {
  const pathname = usePathname();
  const searchparams = useSearchParams();

  useEffect(() => {
    const url = pathname + searchparams.toString();
    pageView(GA_MEASUREMENT_ID, url);
  }, [pathname, searchparams, GA_MEASUREMENT_ID]);
  
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      ></Script>
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){
            dataLayer.push(arguments);
        }

        gtag('js', new Date());

        gtag('consent', 'default', {
            'analytics_storage': 'denied'
        });

        gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname
        });
        `,
        }}
      ></Script>
    </>
  );
};

export default GoogleAnalytics;

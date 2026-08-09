"use client";

import Script from "next/script";

declare global {
  interface Window {
    ym?: (id: number, action: string, goal?: string) => void;
  }
}

const METRIKA_ID = process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID;

export function reachGoal(goal: string) {
  if (METRIKA_ID && typeof window !== "undefined" && window.ym) {
    window.ym(Number(METRIKA_ID), "reachGoal", goal);
  }
}

export function Metrika() {
  if (!METRIKA_ID) return null;
  return (
    <>
      <Script id="yandex-metrika" strategy="afterInteractive">
        {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],
          k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
          (window,document,"script","https://mc.yandex.ru/metrika/tag.js","ym");
          ym(${Number(METRIKA_ID)}, "init", {clickmap:true, trackLinks:true, accurateTrackBounce:true});`}
      </Script>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://mc.yandex.ru/watch/${Number(METRIKA_ID)}`}
          style={{ position: "absolute", left: "-9999px" }}
          alt=""
        />
      </noscript>
    </>
  );
}

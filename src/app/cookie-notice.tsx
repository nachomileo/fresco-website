"use client";

import Link from "next/link";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";

const storageKey = "fresco-marketing-consent";
const retentionMs = 180 * 24 * 60 * 60 * 1000;
const changeEvent = "fresco-marketing-consent-change";
const pixelId = "1300822320710490";
type Choice = "accepted" | "rejected" | "pending";
type Pixel = ((...args: unknown[]) => void) & {
  queue: unknown[][];
  callMethod?: (...args: unknown[]) => void;
  push?: Pixel;
  loaded: boolean;
  version: string;
};
declare global {
  interface Window { fbq?: Pixel; _fbq?: Pixel; }
}

function readChoice(): Choice {
  try {
    const value = JSON.parse(localStorage.getItem(storageKey) || "null");
    const age = Date.now() - value?.savedAt;
    if (value?.version === 1 && age >= 0 && age < retentionMs &&
        (value.choice === "accepted" || value.choice === "rejected")) return value.choice;
  } catch { /* Missing or inaccessible storage requires a new choice. */ }
  return "pending";
}

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(changeEvent, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(changeEvent, callback);
  };
}

function clearMetaCookies() {
  const host = location.hostname.split(".");
  for (const name of ["_fbp", "_fbc"]) {
    document.cookie = `${name}=; Max-Age=0; path=/`;
    for (let i = 0; i < host.length - 1; i++) {
      document.cookie = `${name}=; Max-Age=0; path=/; domain=.${host.slice(i).join(".")}`;
    }
  }
}

function initializePixel() {
  if (window.fbq) return;
  const pixel: Pixel = Object.assign(function (...args: unknown[]) {
    if (pixel.callMethod) pixel.callMethod(...args);
    else pixel.queue.push(args);
  }, { queue: [] as unknown[][], loaded: true, version: "2.0" });
  pixel.push = pixel;
  window.fbq = window._fbq = pixel;
  pixel("consent", "grant");
  pixel("init", pixelId);
  // Only explicit page views are enabled; button clicks are not purchases.
  pixel("set", "autoConfig", false, pixelId);
  const script = document.createElement("script");
  script.async = true;
  script.src = "https://connect.facebook.net/en_US/fbevents.js";
  document.head.appendChild(script);
}

export function CookieNotice() {
  const choice = useSyncExternalStore(subscribe, readChoice, () => "pending" as Choice);
  const [editing, setEditing] = useState(false);
  const [storageError, setStorageError] = useState(false);
  const pathname = usePathname();
  const lastPage = useRef<string | null>(null);

  useEffect(() => {
    if (choice !== "accepted") {
      window.fbq?.("consent", "revoke");
      clearMetaCookies();
      lastPage.current = null;
      return;
    }
    initializePixel();
    window.fbq?.("consent", "grant");
    if (lastPage.current !== pathname) {
      window.fbq?.("trackSingle", pixelId, "PageView");
      lastPage.current = pathname;
    }
  }, [choice, pathname]);

  function saveChoice(next: "accepted" | "rejected") {
    if (next === "rejected") {
      window.fbq?.("consent", "revoke");
      clearMetaCookies();
    }
    try {
      localStorage.setItem(storageKey, JSON.stringify({ version: 1, choice: next, savedAt: Date.now() }));
      window.dispatchEvent(new Event(changeEvent));
      setEditing(false);
      setStorageError(false);
      // Remove the loaded tracker completely after withdrawing consent.
      if (next === "rejected" && window.fbq) location.reload();
    } catch {
      setStorageError(true);
    }
  }

  return <>
    {choice !== "pending" && <button className="cookie-settings" type="button" onClick={() => setEditing(true)}>Configurar cookies</button>}
    {(choice === "pending" || editing) && <aside className="cookie-notice" aria-label="Preferencias de cookies">
      <div>
        <p className="cookie-notice-title">Cookies</p>
        <p>Con tu permiso, usamos el píxel de Meta para medir visitas y la eficacia de nuestros anuncios. Puedes aceptar o rechazar las cookies de publicidad y cambiar tu elección cuando quieras.</p>
        {storageError && <p role="alert">No pudimos guardar tu elección. Comprueba que el navegador permita el almacenamiento de este sitio.</p>}
      </div>
      <div className="cookie-notice-actions">
        <Link href="/politica-de-cookies">Más información</Link>
        <button type="button" onClick={() => saveChoice("rejected")}>Rechazar</button>
        <button type="button" onClick={() => saveChoice("accepted")}>Aceptar</button>
      </div>
    </aside>}
  </>;
}

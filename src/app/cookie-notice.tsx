"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";

const storageKey = "fresco-cookie-notice";
const noticeVersion = 1;
const retentionMs = 180 * 24 * 60 * 60 * 1000;

type StoredNotice = {
  acceptedAt: number;
  version: number;
};

const changeEvent = "fresco-cookie-notice-change";

const subscribe = (callback: () => void) => {
  window.addEventListener("storage", callback);
  window.addEventListener(changeEvent, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(changeEvent, callback);
  };
};

const shouldShowNotice = () => {
  try {
    const stored = window.localStorage.getItem(storageKey);
    const preference = stored ? JSON.parse(stored) as StoredNotice : null;
    return !(preference?.version === noticeVersion && Date.now() - preference.acceptedAt < retentionMs);
  } catch {
    return true;
  }
};

export function CookieNotice() {
  const visible = useSyncExternalStore(subscribe, shouldShowNotice, () => false);

  const dismiss = () => {
    try {
      window.localStorage.setItem(storageKey, JSON.stringify({ acceptedAt: Date.now(), version: noticeVersion }));
    } finally {
      window.dispatchEvent(new Event(changeEvent));
    }
  };

  if (!visible) return null;

  return (
    <aside className="cookie-notice" aria-label="Aviso sobre cookies">
      <div>
        <p className="cookie-notice-title">Cookies</p>
        <p>No usamos cookies de analítica ni publicidad. Guardamos únicamente una preferencia técnica para recordar este aviso.</p>
      </div>
      <div className="cookie-notice-actions">
        <Link href="/politica-de-cookies">Más información</Link>
        <button type="button" onClick={dismiss}>Entendido</button>
      </div>
    </aside>
  );
}

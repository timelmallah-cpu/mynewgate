"use client";
import { useEffect } from "react";
import { BASE } from "../lib/site";
// Registers the service worker in production so the installed app opens offline.
export default function PwaRegister() {
  useEffect(() => {
    if ("serviceWorker" in navigator && location.hostname !== "localhost") navigator.serviceWorker.register(`${BASE}/sw.js`, { scope: `${BASE}/` }).catch(() => {});
  }, []);
  return null;
}

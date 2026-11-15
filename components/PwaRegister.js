"use client";
import { useEffect } from "react";
// Registers the service worker in production so the installed app opens offline.
export default function PwaRegister() {
  useEffect(() => {
    if ("serviceWorker" in navigator && location.hostname !== "localhost") navigator.serviceWorker.register("/sw.js").catch(() => {});
  }, []);
  return null;
}

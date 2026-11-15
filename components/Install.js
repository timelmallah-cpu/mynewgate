"use client";
import { useEffect, useState } from "react";
import { INSTALL_TEXT } from "../lib/installText";

export default function Install({ lang }) {
  const s = INSTALL_TEXT[lang];
  const [prompt, setPrompt] = useState(null);
  const [standalone, setStandalone] = useState(false);
  const [ios, setIos] = useState(false);
  const [done, setDone] = useState(false);
  useEffect(() => {
    setStandalone(window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true);
    setIos(/iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1));
    const onPrompt = (e) => { e.preventDefault(); setPrompt(e); };
    const onInstalled = () => { setDone(true); setPrompt(null); };
    window.addEventListener("beforeinstallprompt", onPrompt);
    window.addEventListener("appinstalled", onInstalled);
    return () => { window.removeEventListener("beforeinstallprompt", onPrompt); window.removeEventListener("appinstalled", onInstalled); };
  }, []);
  const install = async () => {
    prompt.prompt();
    const r = await prompt.userChoice;
    if (r.outcome === "accepted") setDone(true);
    setPrompt(null);
  };
  const Steps = ({ title, items, note }) => (
    <section className="card">
      <h2>{title}</h2>
      <ol className="in-steps">{items.map((x) => <li key={x}>{x}</li>)}</ol>
      {note && <p className="meta">{note}</p>}
    </section>
  );
  return (
    <>
      <h1>{s.title}</h1>
      <p className="lead">{s.lead}</p>
      {standalone ? <div className="notice">{s.installed}</div> : done ? <div className="notice">{s.done}</div> : prompt && (
        <p><button className="btn gold" onClick={install}>{s.button}</button></p>
      )}
      {ios ? (
        <Steps title={s.iosTitle} items={s.ios} note={s.iosNote} />
      ) : (
        <>
          <Steps title={s.androidTitle} items={s.android} />
          <Steps title={s.iosTitle} items={s.ios} note={s.iosNote} />
          <Steps title={s.desktopTitle} items={s.desktop} />
        </>
      )}
      <p className="meta">{s.privacy}</p>
    </>
  );
}

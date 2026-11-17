"use client";
// Programme page: start tracking the application, or show its status when it is already tracked.
import { useEffect, useState } from "react";
import Link from "@/components/Link";
import { T } from "../lib/i18n";
import { APPS_TEXT } from "../lib/appsText";
import { getApps, addApp, onAppsChange } from "../lib/apps";
import Upgrade from "./Upgrade";

// dates: the programme's published deadline dates (YYYY-MM-DD), passed from the page so the big deadline file stays out of this bundle.
export default function TrackButton({ id, dates = [], lang }) {
  const s = APPS_TEXT[lang];
  const k = `p:${id}`;
  const [app, setApp] = useState(null);
  const [full, setFull] = useState(false);
  useEffect(() => {
    const find = (l) => setApp(l.find((a) => a.k === k) || null);
    find(getApps());
    return onAppsChange(find);
  }, [k]);
  const href = `${T[lang].base}/applications`;
  if (app) return <Link className="btn small ghost track on" href={href}>{s.tracked(s.status[app.st])}</Link>;
  return (
    <>
      <button type="button" className="btn small ghost track" onClick={() => setFull(!addApp(k, { dl: dates.find((d) => d >= new Date().toISOString().slice(0, 10)) || "" }))}>{s.track}</button>
      {full && <Upgrade lang={lang} kind="apps" />}
    </>
  );
}

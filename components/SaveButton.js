"use client";
import { useEffect, useState } from "react";
import { T } from "../lib/i18n";
import { getSaved, toggleSaved, onSavedChange } from "../lib/saved";
import Upgrade from "./Upgrade";

export default function SaveButton({ k, lang }) {
  const t = T[lang].my;
  const [on, setOn] = useState(false);
  const [full, setFull] = useState(false);
  useEffect(() => { setOn(getSaved().includes(k)); return onSavedChange((l) => setOn(l.includes(k))); }, [k]);
  return (
    <>
      <button type="button" className={on ? "btn small save on" : "btn small ghost save"} aria-pressed={on} onClick={() => setFull(!toggleSaved(k))}>
        {on ? t.saved : t.save}
      </button>
      {full && <Upgrade lang={lang} kind="saved" />}
    </>
  );
}

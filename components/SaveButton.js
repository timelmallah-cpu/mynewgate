"use client";
import { useEffect, useState } from "react";
import { T } from "../lib/i18n";
import { getSaved, toggleSaved, onSavedChange } from "../lib/saved";

export default function SaveButton({ k, lang }) {
  const t = T[lang].my;
  const [on, setOn] = useState(false);
  useEffect(() => { setOn(getSaved().includes(k)); return onSavedChange((l) => setOn(l.includes(k))); }, [k]);
  return (
    <button type="button" className={on ? "btn small save on" : "btn small ghost save"} aria-pressed={on} onClick={() => toggleSaved(k)}>
      {on ? t.saved : t.save}
    </button>
  );
}

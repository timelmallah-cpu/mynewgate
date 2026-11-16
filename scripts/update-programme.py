#!/usr/bin/env python3
"""Update one programme everywhere it is stored, for the weekly review (docs/weekly-programme-review.md).

  python3 scripts/update-programme.py ID --field fee --ar "النص العربي" --en "English text"
  python3 scripts/update-programme.py ID --reviewed            # checked, nothing changed
  python3 scripts/update-programme.py ID --retire --reason "..." --source URL

Fields: fee, admin, deadline, english, other, how, duration, source (source takes --ar only: the URL).
Each change updates: the data CSVs (all_programmes.csv and the country file), the English
translation, the catalogue script (when the old text appears there exactly once, so a rerun
keeps the change) and data/checks/reviewed.json. Run `npm run data` afterwards.
"""
import argparse, csv, datetime, glob, io, json, os, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
COL = {"fee": "الرسوم الدراسية لغير الأوروبيين", "admin": "رسوم الفصل الإدارية", "deadline": "موعد التقديم لغير الأوروبيين",
       "english": "شرط اللغة الإنجليزية", "other": "شروط مهمة أخرى", "how": "طريقة التقديم", "duration": "المدة", "source": "رابط المصدر"}
TODAY = datetime.date.today().isoformat()
J = lambda *p: os.path.join(ROOT, *p)


def load_json(p):
    return json.load(open(p, encoding="utf-8")) if os.path.exists(p) else {}


def save_json(p, d):
    with open(p, "w", encoding="utf-8") as f:
        json.dump(d, f, ensure_ascii=False, indent=1)
        f.write("\n")


def programme(pid):
    for p in json.load(open(J("lib", "programmes.json"), encoding="utf-8")):
        if str(p["id"]) == pid:
            return p
    sys.exit(f"Programme {pid} not found in lib/programmes.json (run `npm run data` first).")


def rewrite_csv(path, match, col, new):
    raw = open(path, encoding="utf-8-sig", newline="").read()
    nl = "\r\n" if "\r\n" in raw else "\n"
    rows = list(csv.reader(io.StringIO(raw)))
    hdr, hits, old = rows[0], 0, None
    ci = hdr.index(col)
    for r in rows[1:]:
        if r and match(dict(zip(hdr, r))):
            old, r[ci], hits = r[ci], new, hits + 1
    if hits:
        out = io.StringIO()
        csv.writer(out, lineterminator=nl).writerows(rows)
        open(path, "w", encoding="utf-8-sig", newline="").write(out.getvalue())
    return hits, old


def main():
    a = argparse.ArgumentParser()
    a.add_argument("id")
    a.add_argument("--field", choices=COL)
    a.add_argument("--ar")
    a.add_argument("--en")
    a.add_argument("--reviewed", action="store_true")
    a.add_argument("--retire", action="store_true")
    a.add_argument("--reason")
    a.add_argument("--source")
    o = a.parse_args()
    p = programme(o.id)
    rev_path = J("data", "checks", "reviewed.json")

    if o.retire:
        if not (o.reason and o.source):
            sys.exit("--retire needs --reason and --source")
        ret = load_json(J("data", "checks", "retired.json"))
        ret[o.id] = {"date": TODAY, "name": p["name"], "university": p["university"], "reason": o.reason, "source": o.source}
        save_json(J("data", "checks", "retired.json"), ret)
        print(f"Retired {o.id} {p['name']} ({p['university']})")
        return

    if o.field:
        if o.ar is None or (o.field != "source" and o.en is None):
            sys.exit("--field needs --ar and --en (--ar only for source)")
        col = COL[o.field]
        folder = {"master": "programmes", "bachelor": "programmes_ba", "doctorate": "programmes_phd"}[p["level"]]
        match = lambda r: r["الدولة"] == p["countryAr"] and r["اسم البرنامج (الرسمي)"] == p["name"] and r["الجامعة"] == p["university"]
        old, total = None, 0
        for f in sorted(glob.glob(J("data", folder, "*.csv"))):
            n, was = rewrite_csv(f, match, col, o.ar)
            if n:
                total, old = total + n, was
                print(f"  {os.path.relpath(f, ROOT)}: {n} row(s)")
        if not total:
            sys.exit("No CSV row matched this programme; nothing changed.")
        if o.field != "source":
            tr = load_json(J("data", "translations_en.json"))
            old_en = tr.get(old)
            tr[o.ar] = o.en
            save_json(J("data", "translations_en.json"), tr)
        # Keep the catalogue script in step, so rerunning it does not bring the old text back.
        if old and old != o.ar:
            hits = [(f, open(f, encoding="utf-8").read()) for f in glob.glob(J("scripts", "catalogue", "*.py"))]
            hits = [(f, s) for f, s in hits if f'"{old}"' in s]
            count = sum(s.count(f'"{old}"') for _, s in hits)
            if count == 1:
                f, s = hits[0]
                s = s.replace(f'"{old}"', json.dumps(o.ar, ensure_ascii=False))
                if o.field != "source" and old_en and s.count(json.dumps(old_en, ensure_ascii=False)) == 1:
                    s = s.replace(json.dumps(old_en, ensure_ascii=False), json.dumps(o.en, ensure_ascii=False))
                open(f, "w", encoding="utf-8").write(s)
                print(f"  {os.path.relpath(f, ROOT)}: updated")
            elif count == 0:
                print("  NOTE: the old text is not written out in full in any catalogue script (it may be built from parts, "
                      "or the country has no script). If the country has a script, update it by hand.")
            elif count > 1:
                print(f"  NOTE: the old text is shared by {count} entries in {', '.join(os.path.relpath(f, ROOT) for f, _ in hits)}; "
                      "update that script by hand if the change applies to all of them, or the next rerun brings the old text back.")
        print(f"Updated {o.id} {o.field}")

    rev = load_json(rev_path)
    rev[o.id] = TODAY
    save_json(rev_path, dict(sorted(rev.items())))
    print(f"Reviewed {o.id} on {TODAY}")


main()

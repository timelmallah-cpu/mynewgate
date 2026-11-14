# Shared helpers for the country catalogue generators (Poland, Hungary, Romania).
# Every value is an (Arabic, English) pair so translations are written with the data.
# Run a country file from the repo root, e.g.:  python3 scripts/catalogue/poland.py
import csv, json, os

NP = ("غير منشور في المصدر", "Not published in the source")
STATUS = ("من موقع الجامعة الرسمي - يلزم التأكد قبل النشر", "From the official university website - must be confirmed before publishing")
MSC2 = ("سنتان (120 ساعة معتمدة)", "2 years (120 credits)")
SEM3 = ("3 فصول دراسية (90 ساعة معتمدة)", "3 semesters (90 credits)")
SEM4 = ("4 فصول دراسية (سنتان)", "4 semesters (2 years)")
FIELDAR = {"cs": "علوم الحاسب", "ds": "علوم البيانات", "bus": "إدارة الأعمال", "eng": "الهندسة", "ph": "الصحة العامة"}
REVIEWED = "2026-11-14"
ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))


def P(**kw):
    """One programme. Required: field, name, uni, city, deg, dur, fee, adm, dl, en, other, how,
    living, house, src, req (url), req_note, apply (url), apply_note."""
    return kw


def write(country_ar, country_en, slug, rows):
    tr = {country_ar: country_en}

    def t(v):
        tr[v[0]] = v[1]
        return v[0]

    data = os.path.join(ROOT, "data")
    hdr = list(csv.reader(open(os.path.join(data, "programmes", "germany.csv"), encoding="utf-8-sig")))[0]
    with open(os.path.join(data, "programmes", f"{slug}.csv"), "w", newline="", encoding="utf-8-sig") as f:
        w = csv.writer(f)
        w.writerow(hdr)
        for i, r in enumerate(rows, 1):
            w.writerow([i, country_ar, FIELDAR[r["field"]], r["name"], r["uni"], r["city"], t(r["deg"]), t(r["dur"]),
                        t(r["fee"]), t(r["adm"]), t(r["dl"]), t(r["en"]), t(r["other"]), t(r["how"]), t(r["living"]),
                        t(r["house"]), r["src"], REVIEWED, t(STATUS)])

    # English translations
    tp = os.path.join(data, "translations_en.json")
    allt = json.load(open(tp, encoding="utf-8"))
    allt.update(tr)
    json.dump(allt, open(tp, "w", encoding="utf-8"), ensure_ascii=False, indent=1)

    # Official links (replace this country's rows)
    lp = os.path.join(data, "programme_links.csv")
    links = list(csv.reader(open(lp, encoding="utf-8")))
    head, body = links[0], [l for l in links[1:] if l and l[0] != country_ar]
    for r in rows:
        rn, an = r["req_note"], r["apply_note"]
        body.append([country_ar, r["name"], r["uni"], r["req"] or "", rn[0], rn[1], r["apply"] or "", an[0], an[1]])
    with open(lp, "w", newline="", encoding="utf-8") as f:
        csv.writer(f).writerows([head] + body)

    from collections import Counter
    print(country_en, len(rows), dict(Counter(r["field"] for r in rows)))

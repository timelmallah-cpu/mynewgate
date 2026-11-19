# Small helpers shared by the newer country scripts (Luxembourg, Switzerland, Slovenia).
import os, csv
from common import P, ROOT

REQ_NOTE = ("صفحة الرسوم أو الشروط الرسمية", "Official fees or requirements page")
APPLY_NOTE = ("صفحة التقديم الرسمية", "Official application page")


def add(lst, field, name, uni, city, deg, dur, fee, adm, dl, en, other, how, living, house, src, apply):
    lst.append(P(field=field, name=name, uni=uni, city=city, deg=deg, dur=dur, fee=fee, adm=adm, dl=dl, en=en, other=other,
                 how=how, living=living, house=house, src=src, req=src, req_note=REQ_NOTE, apply=apply, apply_note=APPLY_NOTE))


def append_master(country_ar, slug):
    """Copy a country's master's rows into all_programmes.csv with new ids (existing ids never change)."""
    ap = os.path.join(ROOT, "data", "programmes", "all_programmes.csv")
    rows = list(csv.reader(open(ap, encoding="utf-8-sig")))
    hdr = rows[0]
    old = {(r[3], r[4]): r[0] for r in rows[1:] if r and r[1] == country_ar}  # (name, university) -> id, kept on re-runs
    body = [r for r in rows[1:] if r and r[1] != country_ar]
    nxt = max(int(r[0]) for r in rows[1:] if r) + 1
    new = list(csv.reader(open(os.path.join(ROOT, "data", "programmes", f"{slug}.csv"), encoding="utf-8-sig")))[1:]
    for r in new:
        pid = old.get((r[3], r[4]))
        if pid is None:
            pid, nxt = str(nxt), nxt + 1
        body.append([pid] + r[1:])
    body.sort(key=lambda r: int(r[0]))
    with open(ap, "w", newline="", encoding="utf-8-sig") as f:
        csv.writer(f).writerows([hdr] + body)
    print(f"all_programmes.csv: {len(body)} rows; {slug}: {len(new)} master's")

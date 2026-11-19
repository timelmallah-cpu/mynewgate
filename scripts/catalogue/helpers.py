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


def append_extra(country_ar, slug, rows, reviewed, status=None):
    """Append-only: add (or refresh) `rows` (built with add()) for a country that already has hand-written rows.
    Other rows of the country are never touched; ids of rows published earlier are kept."""
    import json
    from common import FIELDAR, STATUS
    status = status or STATUS
    tr = {}

    def t(v):
        tr[v[0]] = v[1]
        return v[0]

    mine = {(r["name"], r["uni"]) for r in rows}
    assert len(mine) == len(rows), "duplicate (name, university) in rows"
    data = os.path.join(ROOT, "data")

    def row(r, rid):
        return [rid, country_ar, FIELDAR[r["field"]], r["name"], r["uni"], r["city"], t(r["deg"]), t(r["dur"]), t(r["fee"]),
                t(r["adm"]), t(r["dl"]), t(r["en"]), t(r["other"]), t(r["how"]), t(r["living"]), t(r["house"]), r["src"],
                reviewed, t(status)]

    cp = os.path.join(data, "programmes", f"{slug}.csv")
    c = list(csv.reader(open(cp, encoding="utf-8-sig")))
    hdr, keep = c[0], [r for r in c[1:] if r and (r[3], r[4]) not in mine]
    clash = {(r[3], r[4]) for r in keep} & mine
    assert not clash, clash
    nxt = max(int(r[0]) for r in keep) + 1
    out = keep + [row(r, str(nxt + i)) for i, r in enumerate(rows)]
    with open(cp, "w", newline="", encoding="utf-8-sig") as f:
        csv.writer(f).writerows([hdr] + out)

    ap = os.path.join(data, "programmes", "all_programmes.csv")
    a = list(csv.reader(open(ap, encoding="utf-8-sig")))
    ahdr, body = a[0], a[1:]
    others = {(r[3], r[4]) for r in body if r and r[1] == country_ar and (r[3], r[4]) not in mine}
    assert not (others & mine)
    old = {(r[3], r[4]): r[0] for r in body if r and r[1] == country_ar and (r[3], r[4]) in mine}
    body = [r for r in body if r and not (r[1] == country_ar and (r[3], r[4]) in mine)]
    nid = max(int(r[0]) for r in body + [[i] for i in old.values()]) + 1
    for r in rows:
        k = (r["name"], r["uni"])
        if k in old:
            rid = old[k]
        else:
            rid, nid = str(nid), nid + 1
        body.append(row(r, rid))
    body.sort(key=lambda r: int(r[0]))
    with open(ap, "w", newline="", encoding="utf-8-sig") as f:
        csv.writer(f).writerows([ahdr] + body)

    tp = os.path.join(data, "translations_en.json")
    allt = json.load(open(tp, encoding="utf-8"))
    allt.update(tr)
    json.dump(allt, open(tp, "w", encoding="utf-8"), ensure_ascii=False, indent=1)

    lp = os.path.join(data, "programme_links.csv")
    links = list(csv.reader(open(lp, encoding="utf-8")))
    lh, lb = links[0], [l for l in links[1:] if l and not (l[0] == country_ar and l[-1] == "master" and (l[1], l[2]) in mine)]
    for r in rows:
        rn, an = r["req_note"], r["apply_note"]
        lb.append([country_ar, r["name"], r["uni"], r["req"] or "", rn[0], rn[1], r["apply"] or "", an[0], an[1], "master"])
    with open(lp, "w", newline="", encoding="utf-8") as f:
        csv.writer(f).writerows([lh] + lb)
    n = sum(1 for r in body if r[1] == country_ar)
    print(f"{slug}: +{len(rows)} extra master's; {n} in all_programmes for {country_ar}")


def append_ba(country_ar, slug, rows, reviewed, status=None):
    """Append-only for bachelor's / long-cycle rows (data/programmes_ba/<slug>.csv, ids b-<cc>-<#>).
    Rows already in the file keep their number; rows of this batch (matched by name + university) keep theirs on
    re-runs, and new ones get the next free number, so published URLs never change.
    Note: a country's own *_ba.py script uses write(), which rewrites the file: re-run this batch after it."""
    import json
    from common import FIELDAR, STATUS
    status = status or STATUS
    tr = {}

    def t(v):
        tr[v[0]] = v[1]
        return v[0]

    mine = {(r["name"], r["uni"]) for r in rows}
    assert len(mine) == len(rows), "duplicate (name, university) in rows"
    data = os.path.join(ROOT, "data")
    cp = os.path.join(data, "programmes_ba", f"{slug}.csv")
    if os.path.exists(cp):
        c = list(csv.reader(open(cp, encoding="utf-8-sig")))
        hdr, body = c[0], [r for r in c[1:] if r]
    else:
        hdr = list(csv.reader(open(os.path.join(data, "programmes", "germany.csv"), encoding="utf-8-sig")))[0]
        body = []
    old = {(r[3], r[4]): r[0] for r in body if (r[3], r[4]) in mine}
    keep = [r for r in body if (r[3], r[4]) not in mine]
    nxt = max([int(r[0]) for r in body] + [0]) + 1
    out = list(keep)
    for r in rows:
        k = (r["name"], r["uni"])
        if k in old:
            rid = old[k]
        else:
            rid, nxt = str(nxt), nxt + 1
        out.append([rid, country_ar, FIELDAR[r["field"]], r["name"], r["uni"], r["city"], t(r["deg"]), t(r["dur"]), t(r["fee"]),
                    t(r["adm"]), t(r["dl"]), t(r["en"]), t(r["other"]), t(r["how"]), t(r["living"]), t(r["house"]), r["src"],
                    reviewed, t(status)])
    out.sort(key=lambda r: int(r[0]))
    with open(cp, "w", newline="", encoding="utf-8-sig") as f:
        csv.writer(f).writerows([hdr] + out)

    tp = os.path.join(data, "translations_en.json")
    allt = json.load(open(tp, encoding="utf-8"))
    allt.update(tr)
    json.dump(allt, open(tp, "w", encoding="utf-8"), ensure_ascii=False, indent=1)

    lp = os.path.join(data, "programme_links.csv")
    links = list(csv.reader(open(lp, encoding="utf-8")))
    lh, lb = links[0], [l for l in links[1:] if l and not (l[0] == country_ar and l[-1] == "bachelor" and (l[1], l[2]) in mine)]
    for r in rows:
        rn, an = r["req_note"], r["apply_note"]
        lb.append([country_ar, r["name"], r["uni"], r["req"] or "", rn[0], rn[1], r["apply"] or "", an[0], an[1], "bachelor"])
    with open(lp, "w", newline="", encoding="utf-8") as f:
        csv.writer(f).writerows([lh] + lb)
    print(f"{slug} (bachelor): +{len(rows)} rows, {len(out)} in file")

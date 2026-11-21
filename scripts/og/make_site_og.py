# Draws public/og-ar.png and og-en.png (the study section share images) with Playwright. Run from the repo root: python3 scripts/og/make_site_og.py. After changing them, bump ?v= in lib/site.js, lib/visasMeta.js and components/Fr.js.
from playwright.sync_api import sync_playwright
import os
F=os.path.abspath("lib/og/fonts")
def page(lang, brand, title, sub):
    d = "rtl" if lang=="ar" else "ltr"
    fam = "PA" if lang=="ar" else "PL"
    return f"""<html dir="{d}"><head><style>
@font-face{{font-family:PA;src:url(file://{F}/ibm-plex-sans-arabic-arabic-700-normal.woff);font-weight:700}}
@font-face{{font-family:PA;src:url(file://{F}/ibm-plex-sans-arabic-arabic-400-normal.woff);font-weight:400}}
@font-face{{font-family:PL;src:url(file://{F}/ibm-plex-sans-arabic-latin-700-normal.woff);font-weight:700}}
@font-face{{font-family:PL;src:url(file://{F}/ibm-plex-sans-arabic-latin-400-normal.woff);font-weight:400}}
html,body{{margin:0;width:1200px;height:630px;background:#F3F4F8;overflow:hidden;font-family:{fam},PA,PL}}
.arch{{position:absolute;left:60px;right:60px;top:40px;bottom:-40px;background:#15234B;border-radius:540px 540px 0 0/220px 220px 0 0}}
.in{{position:absolute;left:80px;right:80px;top:60px;bottom:-40px;border:1px solid rgba(233,185,73,.55);border-radius:520px 520px 0 0/200px 200px 0 0}}
.dia{{position:absolute;left:586px;top:68px;width:26px;height:26px;background:#E9B949;transform:rotate(45deg);border-radius:3px}}
.c{{position:absolute;left:0;right:0;top:205px;text-align:center}}
.b{{color:#E9B949;font-weight:700;font-size:32px;margin-bottom:14px}}
.t{{color:#fff;font-weight:700;font-size:64px;line-height:1.12}}
.s{{color:#C9D1E6;font-size:26px;margin-top:26px;line-height:1.5}}
</style></head><body><div class="arch"></div><div class="in"></div><div class="dia"></div>
<div class="c"><div class="b">{brand}</div><div class="t">{title}</div><div class="s">{sub}</div></div></body></html>"""
with sync_playwright() as p:
    b=p.chromium.launch(); pg=b.new_page(viewport={"width":1200,"height":630})
    for lang,brand,title,sub in [
      ("ar","بوابة الدراسة","ادرس في الخارج<br>بالإنجليزية وبأقل تكلفة","برامج بكالوريوس وماجستير في الجامعات الحكومية، بالعربي ومع رابط المصدر الرسمي"),
      ("en","Bawabat AlDirasa","Study abroad<br>in English, for less","Bachelor's and master's at public universities,<br>with the official source for every fact")]:
        open(f"/tmp/og-{lang}.html","w").write(page(lang,brand,title,sub))
        pg.goto(f"file:///tmp/og-{lang}.html"); pg.wait_for_timeout(500)
        pg.screenshot(path=f"public/og-{lang}.png")
    b.close()

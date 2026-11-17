# Bawabat AlDirasa (study section of Bawabat AlSafar) – working notes for Claude

Read this first in every new session. Keep it up to date: when a decision is made or a task is finished, edit this file in the same commit.

## The project
- Owner: Hatem (حاتم). Arabic study-abroad guide for Arab students: public European universities, English-taught programmes, non-EU applicants.
- Live at https://bawabatalsafar.com/study (Next.js 15, plain JS, `basePath: "/study"`). Repo timelmallah-cpu/mynewgate; Vercel (Pro plan) deploys `main` automatically. The old host mynewgate.vercel.app redirects to the domain.
- Umbrella brand: "بوابة السفر | Bawabat AlSafar" (footer: name, tagline "دليلك الذكي للدراسة والعمل والهجرة حول العالم", "Powered by WithHatem" as plain text, no link). This section: "بوابة الدراسة | Bawabat AlDirasa", logo = gate with a gold open book. Other sections (/scholarships, /visas, /immigration, /work, /tourism, a landing page at /) are ideas only: do not build them until the study section is finished.

## Rules (from Hatem, keep them)
- Replies to Hatem: Egyptian Arabic, plain text, copy-paste ready, no markdown.
- Site text: simplified Modern Standard Arabic, never dialect. The AI assistant answers in the user's own dialect (intended).
- Never guess facts. Official sources only. Write "غير منشور في المصدر" when a fact isn't published, and mark doubtful items "للتحقق". Only programmes open to Arab (non-EU) applicants.
- No links to withhatem / "مع حاتم" on the site.
- Never ask for, read, show or store keys or passwords. Hatem enters secrets in Vercel himself. Never write his personal email anywhere public.
- After each piece of work: build, test, commit, push to main, check the Vercel status, run the link check, then report with sources.
- Don't raise visa consultation for Hatem himself.

## How to work
- Build: `npm run -s build` (runs build-data first) or `timeout 400 env NEXT_PUBLIC_WEB3FORMS_KEY=test npx next build`.
- Local server: `npx next start -p 3100` (add `ASK_MOCK=1` to mock AI routes); pages at localhost:3100/study/...; Playwright (Python) for UI tests.
- Push: `git -c push.negotiate=true push -q origin main`. Vercel status: `gh api repos/timelmallah-cpu/mynewgate/commits/$(git rev-parse HEAD)/statuses --jq '.[0].state'`.
- Link check: dispatch `.github/workflows/link-check.yml`, then grep "Broken (" in the run log (about 40 old broken links is normal; spikes to 100+ are network noise).
- Non-Link URLs (fetch, `<a>`, manifest, service worker, cookie paths) must use `BASE` from lib/site.js. Internal links use `@/components/Link` (no prefetch, to save CDN requests); only Shell/SiteMenu use next/link.
- WebFetch only works on URLs that appeared in search results; search first. DAAD detail pages (www2.daad.de/.../international-programmes/en/detail/<id>/) are a good official source for Germany.

## Catalogue data
- data/programmes/all_programmes.csv (master's, stable ids), per-country mirrors in data/programmes/<country>.csv, bachelor's in programmes_ba/, links in data/programme_links.csv, English values in data/translations_en.json; city names/coords in data/city_names_ar.json and data/city_coords.json, city words for the assistant in lib/assistant/retrieve.js.
- scripts/catalogue/common.py `write()` REPLACES a whole country's CSV and links. To add to a country that has hand-written rows, write an append-only script like scripts/catalogue/germany_more.py.
- Monitoring: GitHub Action programme-check (Saturdays) + scheduled weekly AI review (docs/weekly-programme-review.md, scripts/update-programme.py).

## Accounts and Study Plus (live since 17 Nov 2026)
- Sign-in: Google (project "Bawabat AlSafar", support email is a Google group, not Hatem's) and email links via Brevo (Brevo keys not set yet). Accounts in Upstash Redis (KV_* env vars).
- Payments: Stripe account "Bawabat AlSafar", Managed Payments, product "Bawabat AlDirasa Plus" US$4.99/month, webhook `/study/api/billing/webhook` (checkout.session.completed, customer.subscription.created/updated/deleted). Restricted API key. Test purchase worked. Stripe setup fully finished (17 Nov 2026).
- Limits (lib/plans.js): free = assistant 3/month, letter review / CV review / university email 1 each ever, compare 3, saved 5, application tracker 1; Plus = assistant 100/cycle, reviews/emails 20, compare 10, unlimited saved and tracker.
- Free AI uses are counted per account AND per device (cookie mng_dev); no per-network limit (Hatem's choice: another phone on the same wifi may try). New accounts: max 5 per connection per day.
- Page limits are on by default; `NEXT_PUBLIC_PLUS_OPEN=0` in Vercel switches them off. AI limits apply whenever Stripe keys are set.

## Recently finished
- Germany: 30 more master's from DAAD (71 programmes). Ireland expanded (44). Application tracker (/applications). Header sign-in button. Study Plus live.
- Eligibility check (/eligibility, components/Eligibility.js, lib/eligibility.js): level, field, one or more countries (chips; none = all; ?country=de,nl), budget, grade (any scale, converted to German with the modified Bavarian formula) and IELTS/TOEFL -> programmes grouped as fit / check / missing, with each check explained. Compares only numeric published requirements: fee, English minimums (il/tf) and a minimum grade parsed from the English "other requirements" text (`g` in compare-*.json; `gw` = high grade asked in words). Different grade scales are never converted to each other, only flagged "check". Answers kept in localStorage `mng-elig-v1` (free for everyone).
- Scholarship deadlines carry `step` (admission / scholarship / both) in lib/scholarships.js; cards, calendar, detail page, My list and .ics name what each date is for, so a programme deadline is never read as the scholarship's. Every new deadline needs a `step`.
- Work while studying (lib/studyWork.js): `hours` + `per` (week/month/day/year) in the official source's own unit; the countries table shows that same unit and sorts by the weekly equivalent. Denmark 90 h/month (SIRI), France 964 h/year, Romania 6 h/day (Law 28/2024 per the Labour Inspectorate; EU portal still says 4, marked للتحقق).

## Next (in Hatem's order)
1. My Study Journey dashboard (agreed 17 Nov): built on the eligibility answers; fitting programmes, saved list, tracker, deadlines (official only, "غير منشور في المصدر" when missing), next step. Free = basic dashboard (results, saved, 1 tracked application); Plus = deadlines with alerts, detailed next step, personal plan. Answers stored in the account need a privacy policy update and a delete button; without an account nothing is stored server-side.
2. More countries: Italy, France, Austria (30+ each); new fields (media, education, political science, agriculture, environment, tourism).
3. Fix the ~40 old broken links.
4. Jordan and Algeria visa routes/certificate rules; Saudi and Moroccan versions of the language, institutes, guide, ausbildung and foundation pages.
5. Study Plus "coming soon": email alerts (needs Brevo), personal plan, tailored document list.
- Hatem's own to-dos: Brevo keys, ICO self-assessment, check Vercel Analytics after the /study move, Vercel free domain (claim within 30 days of 17 Nov).

# Weekly programme review

Two parts keep the programme catalogue current:

1. **Programme check** (`.github/workflows/programme-check.yml`, no AI, free). Every Saturday about 02:23 UTC it opens the official source page of every programme and reports pages that broke or moved, and programmes whose published fee no longer appears on their page. Report: the `programme-check` artifact of the newest run (`programme-check.json`, `.md`).
2. **AI review** (a scheduled Claude task, Saturday morning). It reads that report and fixes only what it flags, plus a few of the programmes reviewed longest ago. Changes go to a pull request that Hatem approves.

## Rules (same as for the whole catalogue)

- Official sources only: the university's own pages and PDFs, or official national portals. Never blogs, agents or rankings.
- Never guess. Not published: `غير منشور في المصدر`. Uncertain: add `(للتحقق)`. Always say which academic year a fee or date is for.
- Site text is simplified Modern Standard Arabic (never dialect), with an English version of every changed text.
- Only programmes taught in English (or otherwise suitable) and open to non-EU (Arab) applicants.
- No link to withhatem / "مع حاتم". Never put the owner's email or any key in the repo.

## Steps for the AI review

1. `git pull`, `npm ci --ignore-scripts`, `npm run data`.
2. Get the newest report:
   `gh run list --workflow=programme-check.yml -L1 --json databaseId,conclusion,createdAt`
   If it is older than 3 days or failed, start it (`gh workflow run programme-check.yml`), wait until it finishes, then
   `gh run download <id> -n programme-check -D /tmp/pc`. If downloading artifacts is blocked, read the same report from the log: `gh run view <id> --log` (the line starting `FLAGGED_JSON` lists every flagged programme).
3. Work list, at most 50 programmes:
   - every `fee_missing`, `broken` and `moved` programme (programmes sharing one source page are checked together);
   - then up to 10 `unreadable` ones, oldest `reviewed` first;
   - then the 10 programmes with the oldest `reviewed` date in `lib/programmes.json` (full check: fee, deadline, English requirement, other conditions).
4. For each programme open the official page (WebFetch; find the official fee or admissions page if the source has no fee) and compare it with the site's text (`lib/programmes.json`). Then use `scripts/update-programme.py`:
   - nothing changed: `python3 scripts/update-programme.py ID --reviewed`
   - a value changed: `python3 scripts/update-programme.py ID --field fee --ar "..." --en "..."` (fields: fee, admin, deadline, english, other, how, duration, source). Keep the style of the existing texts.
   - page moved and the new official page is right: `--field source --ar NEW_URL`
   - the university says the programme closed or no longer takes non-EU students: `--retire --reason "..." --source URL`
   - could not verify (page blocked, unclear): change nothing and list it in the summary.
   If the helper prints a NOTE about a catalogue script, update that script by hand so a rerun keeps the change. Do not rerun catalogue scripts in this review.
5. In the first review of each month only: for 3 universities already on the site, look at their official programme list for new English-taught master's or bachelor's open to non-EU students. List them in the summary as suggestions; do not add them.
6. `npm run data` (it must print no "Missing English translations"), then `timeout 400 env NEXT_PUBLIC_WEB3FORMS_KEY=test npm run build`.
7. Branch `review/YYYY-MM-DD`, commit, push, and open a pull request to `main` whose description lists every change with its official source link. Do not merge it.
8. Send Hatem a short summary in Egyptian Arabic, plain text without markdown: numbers checked, what changed (programme, old value, new value), what was retired, what could not be verified, suggestions, and the pull request link. Approving the pull request on GitHub publishes the changes.

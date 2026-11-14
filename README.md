# mynewgate

منصة عربية لتنظيم المعلومات الرسمية عن الدراسة والهجرة في ألمانيا وهولندا وإسبانيا.

An Arabic-first platform that organizes official study and immigration information for Germany, the Netherlands and Spain.

## المرحلة الحالية / Current phase
MVP: الدراسة أولاً (ماجستير بالإنجليزية في الجامعات الحكومية)، خدمة مدفوعة.

## Structure
- `docs/` — functional specification
- `data/programmes/` — programme catalogue per country (seed data, pending university-page verification)

## Run locally
npm install
npm run dev   # converts data/programmes/all_programmes.csv to lib/programmes.json, then starts Next.js

Deploy: import this repo in Vercel (framework: Next.js, no environment variables needed yet).

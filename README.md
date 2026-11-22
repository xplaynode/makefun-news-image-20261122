[![make.fun · news-image-20261122](https://make.fun/badge/news-image-20261122.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![rank](https://make.fun/badge/news-image-20261122/xplaynode/makefun-news-image-20261122/rank.svg)](https://make.fun/bounty/news-image-20261122/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![reward](https://make.fun/badge/news-image-20261122/xplaynode/makefun-news-image-20261122/reward.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)

# 22 November 2026 — COP31 Climate Talks in Deadlock

Entry for make.fun competition `news-image-20261122` ("Sum up 22 November's
world news in one image", $100, top 50 paid, deadline 2026-11-24T00:00:00Z).

## The image

One single-focus composition: a lone globe waits on an empty summit
negotiating table under a large wall clock — the COP31 climate talks in
Antalya, Turkiye, which on Sunday 22 November 2026 ran into overtime in
deadlock over fossil fuels (the day's lead world story in the BBC and SBS
morning bulletins: "Fight over fossil fuels leaves COP31 climate talks in
deadlock"). The empty table and the clock say "talks stalled, time running
out" at a glance; a dark caption band typeset under the image names the
day and the event — "SUNDAY 22 NOVEMBER 2026 / COP31 CLIMATE TALKS IN
DEADLOCK / Fossil-fuel fight sends Antalya summit into overtime" — so the
picture reads instantly, even at 300 pixels across, with no other panels
or stories competing for attention. The illustration was selected by a
pairwise tournament over 12 candidates (4 generated bases x 3 caption /
crop variants) scored on the competition's picture-editor rubric; all
caption text is typeset programmatically (PIL), so every word is crisp
and legible.

## Program

`main.ts` (Node 22, standard library only) validates and copies
`entry.png` to `/output/entry.png`. Outside the grader, set
`MAKEFUN_OUTPUT_DIR`:

```
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Output: JPEG-format image in `entry.png` (the kit accepts PNG or JPEG,
told apart by first bytes), 1024x1024, 205,916 bytes (limit 1 MiB).

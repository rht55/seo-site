# Editing the words on richardhtalbot.co.uk

All the copy lives in `content/*.json`. The code reads it; the design does not change when the words do.

## The easy way: Pages CMS
1. Go to https://app.pagescms.org and sign in with GitHub (rht55).
2. Pick the repository rht55/seo-site. First time only, allow the Pages CMS GitHub app on that repo.
3. The sidebar lists Home page, About page, Work page, Lab index, Contact page and Site settings. Each is a form.
4. Edit, then Save. Every save is a commit to main, and Vercel publishes it in about 40 seconds.

Conventions inside the text:
- Wrap the word that should be italic and green in curly braces: `the gap {between} strategy`.
- A link in a paragraph is written `[the words](https://the-url)`.
- Project cards: leave Link empty for no link; leave Status empty for no badge; Double-width card is only for one card at a time.

## The other easy way: GitHub itself
Open https://github.com/rht55/seo-site/tree/main/content, click a file, click the pencil, edit, Commit changes. Same result, no forms.

## What is not in the content files
Code-heavy pieces stay as code: the search history timeline (components/lab/eras.ts holds its dated facts), the Deindexed game (app/lab/deindexed), the fonts, the design.

# AI Governance Guide landing page

Static landing page for Adrian Willanger’s **Building an AI Governance Program: Guide + Fillable Policy Template**. No build step, package installation, API key or backend is required.

## Deploy to GitHub Pages

1. Unzip the source package.
2. Upload the contents of this folder to the root of your GitHub repository. Keep `index.html`, `base.css`, `style.css`, `app.js` and the `assets` folder together.
3. In the repository, open **Settings → Pages**. Choose **Deploy from a branch**, your publishing branch (usually `main`), and **/(root)**. Save.
4. Open the URL GitHub provides when deployment finishes.

These settings follow [GitHub’s official publishing-source instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

If you use the separately supplied single-file version, rename it to `index.html` and upload just that file instead. It contains its CSS, JavaScript, cover image and video thumbnail. Do not deploy the modular and single-file versions as two competing index files.

## Included assets and links

- The cover image is a rendering of page one of the supplied guide, not a recreated cover.
- The video thumbnail is the approved promotional thumbnail.
- YouTube: https://youtu.be/hWpFC5TpLiE
- Purchase: https://adrianwill.gumroad.com/l/pxelre
- Purchase links and YouTube links open in a new tab.
- No full paid PDFs are included in this public website.
- The free, one-page AI Policy Readiness Checklist is included at `assets/AI-Policy-Readiness-Checklist.pdf`. The hero's **View the Free Checklist** button opens the public GitHub Pages copy in a new tab. No email address is collected.
- The checklist is intentionally a preview link, not a forced download. If moving this site to another repository or domain, update this absolute link.

## Before promoting the live page

- Confirm the current price, checkout details and product claims against your Gumroad listing.
- The canonical URL, `og:url`, and absolute `og:image` reference the public GitHub Pages domain. Update all three if the domain changes.
- If deploying the single-file version and wanting a social preview image, also upload the cover PNG separately and set `og:image` to its absolute HTTPS address.
- Test the purchase link, YouTube link, mobile layout, theme toggle and expandable questions on the live domain.
- The page uses external Fontshare fonts, with fallback fonts if unavailable. The page itself has no analytics, forms, embedded third-party players, cookies or local storage.
- The video is linked rather than embedded so YouTube does not load until a visitor chooses to leave the page.
- The creator remains responsible for product accuracy, media rights and any applicable legal notices.

## Editing

Update page text and destination links in `index.html`. Colors, responsive layouts and typography are in `style.css`; the theme toggle is in `app.js`. Change every occurrence of `$39` when updating the displayed price.

The light/dark mode follows the visitor’s operating-system preference initially. The manual selection lasts for the current page view and is not saved on their device.

## September 30 positioning update

The page now leads with “Do the groundwork first” and “Bring a better-prepared draft to legal review.” It explains preparation, ownership, policy drafting, and tailored review without promising legal-fee savings or replacing counsel.

Version-dependent guide page counts were removed from current-offer copy until Gumroad delivery is reconciled. The original video transcript remains accurate to its narration and is labeled as the launch introduction.

Do not advertise the $12 AI in Moderation offer or state that it is included in the $39 bundle until the standalone listing and bundle download package are confirmed. No paid product PDFs belong in this public repository.

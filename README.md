# ATSh Portfolio

Personal UI/UX portfolio for **Ayenew Shiferaw (ATSh)** — Product Designer.

No build step, no dependencies to install. Open `index.html` in a browser, or publish it with GitHub Pages.

## Live case studies

The portfolio showcases two practice apps, each shipped as its own live, working prototype and documented as a full case study on this site:

- **Hid-Go** — a flight booking app → [live app](https://ayenew-tadesse.github.io/hid-go/)
- **Guxo** — an intercity bus booking app → [live app](https://ayenew-tadesse.github.io/Guxo/)

Each case study covers the design process end to end: problem statement, personas, competitive analysis, information architecture, user flow (with real screenshots from the live apps, framed in realistic phone mockups), and the UI style guide.

## Structure

- `index.html` — markup
- `styles.css` — all styles, including light/dark theme tokens
- `script.js` — page navigation (case-study routing, mobile nav toggle)

Images (the profile photo and the phone-mockup screenshots) are embedded as base64 data URIs directly in `styles.css`/`index.html`, so there's no separate `/images` folder to keep track of — just these three files.

## Running it locally

No install needed — just open the file:

```
open index.html
```

or double-click it in Explorer/Finder.

## Publishing with GitHub Pages

1. Push all three files (`index.html`, `styles.css`, `script.js`) to this repo's default branch, keeping them in the same folder.
2. In the repo's **Settings → Pages**, set the source to deploy from the branch root.
3. The portfolio will be live at `https://ayenew-tadesse.github.io/<repo-name>/`.

## Credits

Designed and built by Ayenew Shiferaw.

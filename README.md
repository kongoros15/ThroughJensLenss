# Through Jen’s Lens — Static Website

This folder contains a fully static website (HTML/CSS/JS only), ready for GitHub Pages or any static host.

## Pages
- `index.html` — Home/Portfolio with lightbox gallery
- `about.html` — Bio
- `social.html` — Embeds (YouTube/Vimeo placeholders)
- `commissions.html` — Formspree-ready commission form (auto-reply supported via Formspree)
- `shop.html` — PayPal Buy Now buttons with simple size options

## Setup

### 1) Commission Form (Formspree)
- Create a Formspree form at https://formspree.io → copy your endpoint (looks like `https://formspree.io/f/xxxx`).
- Open `commissions.html` and replace `YOUR_FORMSPREE_ID` in the form `action` with your endpoint ID.
- In Formspree settings, enable **Autoresponder** for an automatic reply to your customers.
- File uploads: Formspree supports uploads on certain plans.

### 2) PayPal Buttons
- Open `shop.html` and replace `YOUR_PAYPAL_EMAIL@example.com` with your PayPal **business** email.
- The size dropdown updates the price dynamically before sending customers to PayPal.

### 3) Custom Domain
- To use `throughjenslenss.com`, create DNS **A** records for the apex (`@`) pointing to:
  `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- Create **CNAME** for `www` → `YOUR_GITHUB_USERNAME.github.io`
- Keep the `CNAME` file at repo root set to `throughjenslenss.com`.

### 4) Publish on GitHub Pages
- Create a new repo and push these files (root of repo should contain the HTML).
- Enable Pages in **Settings → Pages** (deploy from `main` branch).
- The included GitHub Actions workflow will also deploy automatically on push.
- Ensure **Enforce HTTPS** is checked in Pages settings.

## Dev Notes
- No frameworks, just semantic HTML, modern CSS, and a small `js/script.js`.
- Fonts via Google Fonts (Inter). Adjust in `css/style.css` variables for colors.
- Replace placeholder images in `/images/` with your art.

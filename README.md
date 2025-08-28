# Levercast — Landing Page

Static, responsive landing page optimized for conversions.

## Quick start

Open `index.html` in a browser.

## Customize

- Copy and update meta tags in `index.html` (title, description, OG/Twitter images)
- Replace `assets/logo.svg` and `assets/favicon.svg` with your branding
- Swap the demo video URL in the `iframe` inside the modal
- Update copy throughout sections (hero, features, FAQ)

## Collecting emails

The CTA forms are wired with client-side success by default. To collect emails:

1. Formspree: set the `action` on forms to your endpoint and remove the JS override
2. Netlify: add `data-netlify="true" name="waitlist"` to the forms and include a hidden `input name="form-name" value="waitlist"`
3. Your backend: set `method="POST" action="/api/waitlist"` and handle JSON or form-encoded submissions

## Deploy

- GitHub Pages: push and enable Pages on the repo
- Netlify: drag-and-drop the folder or connect the repo
- Vercel: import the project as a static site

## License

MIT



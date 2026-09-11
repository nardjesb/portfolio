# Barkat Soumia Nardjas — Portfolio Website

A personal portfolio site, built with plain HTML, CSS and JavaScript
(no framework, no backend), designed to be hosted on GitHub Pages.

## File structure

```
index.html          → page structure and all text content sections
css/style.css        → all visual styling (colors, type, layout, dark mode)
js/content.js         → EDIT THIS to add certifications or projects
js/script.js          → rendering logic + dark mode toggle + mobile menu (rarely needs edits)
assets/icons/         → favicon
cv/                    → put your CV PDF here (see cv/README.md)
```

## How to update the site later

**Add a certification**
Open `js/content.js`, and add a new object to the `certifications` array:
```js
{ title: "Certificate name", issuer: "Issuing organization", date: "Month Year" }
```
It will appear automatically — no other file needs to change.

**Add a project**
Open `js/content.js`, and add a new object to the `projects` array:
```js
{
  title: "Project name",
  category: "R",                 // e.g. "R", "Python", "Bioinformatics"
  description: "Short description of the project.",
  tools: "R, ggplot2, dplyr",     // optional
  repo: "https://github.com/you/repo",  // optional
  demo: "",                       // optional
  placeholder: false
}
```
Setting `placeholder: true` (and omitting `tools`/`repo`/`demo`) shows a
"Coming soon" card, which is what the current empty project categories use.

**Update skills, experience, education, or contact info**
These live directly in `index.html`, inside clearly commented sections
(`<!-- ============ SKILLS ============ -->`, etc.). Edit the text there —
the layout and styling will not change.

**Update your CV**
Replace the file in `cv/CV_Barkat_Soumia_Nardjas.pdf` with your updated PDF,
keeping the exact same filename. The "Download CV" buttons will keep working.

**Change colors or fonts**
All colors and fonts are defined once, as CSS variables, at the top of
`css/style.css` under `:root` (light mode) and `[data-theme="dark"]` (dark
mode). Changing a value there updates it everywhere on the site.

## Publishing to GitHub Pages

1. **Create the repository** — On GitHub, click "New repository." Name it
   whatever you like (e.g. `portfolio`), set it to Public, and create it
   without a README (you already have one here).
2. **Upload the files** — On the new repo's page, click "Add file" →
   "Upload files," then drag in everything from this folder
   (`index.html`, `css/`, `js/`, `assets/`, `cv/`, `README.md`), preserving
   the folder structure, and commit.
3. **Enable GitHub Pages** — Go to the repo's **Settings** tab → **Pages**
   (left sidebar). Under "Build and deployment," set **Source** to
   "Deploy from a branch," choose the `main` branch and the `/ (root)`
   folder, then click **Save**.
4. **Publish** — GitHub will build the site automatically; this usually
   takes about a minute.
5. **Find your public URL** — Refresh the same Settings → Pages screen; it
   will show a link in the form `https://your-username.github.io/repo-name/`.
6. **Update the site later** — Edit files directly on GitHub (pencil icon
   on any file) or upload replacements the same way you did in step 2.
   Each save/commit automatically republishes the live site within a
   minute or two.

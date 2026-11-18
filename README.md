# Nick Vostrikov | Developer Portfolio

A four-page portfolio featuring selected web, mobile, and API projects, a technical skills overview, a résumé you can view in your browser, and direct contact links.

[View the portfolio on GitHub Pages](https://nick-vns.github.io/portfolio/).

## Stack

- Semantic HTML5 and CSS3 with shared design tokens, Grid, and Flexbox
- Bootstrap 5.0.2 CSS, loaded from jsDelivr with subresource integrity
- Vanilla JavaScript for the responsive navigation
- Static hosting on GitHub Pages

## Local development

From the repository root, run:

```sh
python3 -m http.server 8000
```

Visit [localhost:8000](http://localhost:8000/). No dependency installation or build step is required.

- `index.html` introduces Nick and highlights CinemaFlix React and Meet App.
- `nav/work.html` contains the full project gallery and links to the source and available demos.
- `nav/about.html` contains the background, skills, and résumé.
- `nav/contact.html` opens a visitor’s email client through a `mailto:` link and lists professional profiles.

Optimized gallery images are served from `img/`. The original image files are retained alongside them.

## Deployment

GitHub Pages serves the repository root as a static site. To configure branch publishing, choose **Deploy from a branch** under **Settings → Pages**, select the publishing branch, and choose **/(root)**. All internal URLs are relative, so assets and navigation work under the GitHub Pages `/portfolio/` path.

## Project link maintenance

- TODO: Add a deployment or documentation link for the CinemaFlix API when a working public URL is available. The previous Heroku documentation URL returns 404.

# Arches Docs - powered by [Docbox](https://github.com/mapbox/docbox)

## Deployment

Docs are pulled from the Arches repo `README.md` file and `docbox` folder using a submodule.

The `npm run build` command updates the arches submodule retrieving the latest docs, builds a `bundle.js` file that contains all the JavaScript code and content needed to show the site, and creates an `index.html` file that already contains the site content. Note that this _replaces_ the existing `index.html` file, so it's best to run this only when deploying the site and to undo changes to `index.html` if you want to keep working on content.

1. Clone this repository
	2. `git clone --recursive https://github.com/arches/docs.git`
2. `npm install`
3. `npm run build`
4. Add all, commit & push

The `npm run deploy` runs the build command and then runs the git commands to add all, commit and push, updating the gh-pages static site.  It assumes that git is configured with write permissions to this repo.

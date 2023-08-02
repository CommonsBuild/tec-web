![alt text](./public/images/Share.jpg)

# Overview

[![Netlify Status](https://api.netlify.com/api/v1/badges/98f84bec-ade9-412b-bcb4-9920ee05bf63/deploy-status)](https://app.netlify.com/sites/tec-web/deploys)

The Token Engineering Commons website is live at https://tecommons.org. It is hosted on Netlify and integrates with Netlify CMS for easy content updates.

Branches `main`and `develop` are auto published:

-   Main: [https://tecommons.org](https://tecommons.org)
-   Develop: [https://develop--tec-web.netlify.app/](https://develop--tec-web.netlify.app/)

---

## Edit content

Prerequisite: You need write access to this repository.

### Option 1: Using Netlify CMS

Access the CMS here: https://tecommons.org/admin

### Option 2: Edit markdown directly

All markdown files are located in the [content](./content) folder. Edit and make a pull request.

## Develop

Clone this repository and install the dependencies:

```sh
npm install
```

Run local dev server:

```sh
npm run dev
```

## Before commit

Verify that the export build completes without error locally before committing.

```sh
npm run export
```

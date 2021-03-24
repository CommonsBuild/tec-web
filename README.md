![alt text](./public/images/Share.jpg)

# Overview

[![Netlify Status](https://api.netlify.com/api/v1/badges/39380ba8-ae37-4a2b-81ef-511232f6e070/deploy-status)](https://app.netlify.com/sites/tec-web/deploys)

### 👷‍♂️👷‍♀️ Under development 👷‍♂️👷‍♀️

Branches `main`and `develop` are auto published to:

-   Main: [https://tec-web.netlify.app/](https://tec-web.netlify.app/)
-   Develop: [https://develop--tec-web.netlify.app/](https://develop--tec-web.netlify.app/)

---

This website will be released at https://tecommons.org.

It is hosted on Netlify and integrates with Netlify CMS for easy content updates.

## Edit content

Prerequisite: You need writte access to this repository.

### Option 1: Using Netlify CMS

Access the CMS here: https://tec-web.netlify.app/admin

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

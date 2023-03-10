# gas-deepl-starter

`gas-deepl-starter` is a starter kit to use DeepL on Google Sheets.

This template is inspired by [DeepL API - Google Sheets Example](https://github.com/DeepLcom/google-sheets-example).

## Status

[![Release (latest by date)](https://img.shields.io/github/v/release/Kazuki-tam/gas-deepl-starter)](https://github.com/Kazuki-tam/gas-deepl-starter/releases/tag/v0.0.1)
[![Issues](https://img.shields.io/github/issues/Kazuki-tam/gas-deepl-starter)](https://github.com/Kazuki-tam/gas-deepl-starter/issues)
![Maintenance](https://img.shields.io/maintenance/yes/2023)
![Release date](https://img.shields.io/github/release-date/Kazuki-tam/gas-deepl-starter)

## Features
- Translate multiple texts from one language to another at once using the DeepL Translation API and Google Apps Script
- Develop locally with TypeScript, Clasp and Deno
- Bundle your files with esbuild

## Main dependencies

- [DeepL API](https://www.deepl.com/en/docs-api)
- [Google Apps Script](https://workspace.google.co.jp/intl/en/products/apps-script/)
- [Clasp](https://github.com/google/clasp)
- [esbuild](https://esbuild.github.io/)

## Prerequisites

- [DeepL](https://www.deepl.com/pro#developer)
- [Google Workspace](https://workspace.google.co.jp/)
- [Deno v1.29.4 or higher](https://deno.land/)

[🦕 How to install Deno](https://deno.land/manual@v1.29.4/getting_started/installation)

## How to use

Creating a repository from this template and cloning the repository.

### Login google account

```shell
deno task login
```

### Connect to your existing project

Create a `.clasp.json` at the root, and then add these settings.
Open the app script from your spreadsheet and check out your script id on the setting page.

```json
{
  "scriptId": "<SCRIPT_ID>",
  "rootDir": "./dist"
}
```

### Set DeepL auth key into script properties

1. Copy your authentication key at the DeepL account
2. Set the authentication key into script properties in your Apps Script project.

```
Key: DEEPL_AUTH_KEY
value: <YOUR-AUTH-KEY>
```

[📖 How to add script properties](https://developers.google.com/apps-script/guides/properties#manage_script_properties_manually)

### Upload a script project

Deploy your code to the existing project.

```shell
deno task deploy
```

### DeepLTranslate function
Translates from one language to another using the DeepL Translation API.

```
// Example 1 on Google Sheets
=DeepLTranslate(A1, "en", "JA")

// Example 2 on Google Sheets
=DeepLTranslate(A1, "ja", "FR")

// Example 3 on Google Sheets
=DeepLTranslate(A1, "ja", "EN")
```

### DeepLUsage function
Retrieve information about your DeepL API usage during the current billing period.

```
// Example 1 on Google Sheets
=DeepLUsage("count")

// Example 2 on Google Sheets
=DeepLUsage("limit")
```

## Available Commands

Build your project.

```shell
deno task build
```

Build your project files and force writes all local files to script.google.com.

```shell
deno task deploy
```

Open the current directory's clasp project on script.google.com.

```shell
deno task open
```

## DeepL
The DeepL API provides programmatic access to DeepL’s machine translation technology, making it possible to bring high quality translation capabilities directly to your websites and applications.

- [📖 DeepL API](https://www.deepl.com/docs-api)
- [📖 DeepL API - Google Sheets Example](https://github.com/DeepLcom/google-sheets-example)

## Google Apps Script
Google Apps Script is a JavaScript-based scripting language that allows you to extend Google's G Suite of online productivity tools (e.g. Google Sheets, Google Forms, Gmail, etc.). It allows you to automate tasks, connect to external APIs, and build custom tools and applications that interact with G Suite data.

[📖 Reference overview](https://developers.google.com/apps-script/reference)

## Clasp
Clasp (Command Line Apps Script Projects) is a command-line tool that allows you to develop, manage, and deploy Google Apps Script projects.

[📖 Command Line Interface using clasp](https://developers.google.com/apps-script/guides/clasp)

## License
MIT

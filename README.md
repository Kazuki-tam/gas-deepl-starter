# gas-deno-esbuild-starter

`gas-deno-esbuild-starter` is a starter kit for Google Apps Script by Deno.

## Status

[![Release (latest by date)](https://img.shields.io/github/v/release/Kazuki-tam/gas-deno-esbuild-starter)](https://github.com/Kazuki-tam/gas-deno-esbuild-starter/releases/tag/v0.0.1)
[![Issues](https://img.shields.io/github/issues/Kazuki-tam/gas-deno-esbuild-starter)](https://github.com/Kazuki-tam/gas-deno-esbuild-starter/issues)
![Maintenance](https://img.shields.io/maintenance/yes/2023)
![Release date](https://img.shields.io/github/release-date/Kazuki-tam/gas-deno-esbuild-starter)

## Features
- Develop locally with TypeScript, Clasp and Deno
- Bundle your files with esbuild

## Main dependencies

- [Google Apps Script](https://workspace.google.co.jp/intl/en/products/apps-script/)
- [Clasp](https://github.com/google/clasp)
- [esbuild](https://esbuild.github.io/)

## Prerequisites

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

Deploy your code to the existing project.

```shell
deno task deploy
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

## Google Apps Script
Google Apps Script is a JavaScript-based scripting language that allows you to extend Google's G Suite of online productivity tools (e.g. Google Sheets, Google Forms, Gmail, etc.). It allows you to automate tasks, connect to external APIs, and build custom tools and applications that interact with G Suite data.

[📖 Reference overview](https://developers.google.com/apps-script/reference)

## Clasp
Clasp (Command Line Apps Script Projects) is a command-line tool that allows you to develop, manage, and deploy Google Apps Script projects.

[📖 Command Line Interface using clasp](https://developers.google.com/apps-script/guides/clasp)

## License
MIT

---
title: Setup Development Environment
date: "2020-01-09"
description: "Setup a Development Environment from scratch with VS Code"
---

### Install VS Code

- [VS Code-Homepage](https://code.visualstudio.com/)
- [Download & Install VS Code](https://code.visualstudio.com/#alt-downloads)

### Install Plugins within VS Code (my Favorites)

- [Angular-Essentials nearly everything you need from John Papa](https://marketplace.visualstudio.com/items?itemName=johnpapa.angular-essentials)
- [Gitlens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
- [VS Code TailwindCSS ClassName completion](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

Optional (not needed for Gatsby):

- [VS Code - Docker](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker)
- [VS Code - Remote Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)
- [VS Code - GoLang](https://marketplace.visualstudio.com/items?itemName=ms-vscode.Go)
- [VS Code - Terraform](https://marketplace.visualstudio.com/items?itemName=mauve.terraform)

### Configure VS Code & Plugins

Open **⌘,** User Settings or Code | Preferences | Settings [**⌘,**]

- Search for `settings.json`
- Click `Edit in settings.json`

### My settings:

```json
{
  "breadcrumbs.enabled": true,
  "editor.formatOnPaste": true,
  "editor.formatOnType": false,
  "editor.formatOnSave": true,
  "editor.wordWrapColumn": 120,
  "terminal.integrated.shell.osx": "/bin/zsh",
  "prettier.singleQuote": false,
  "workbench.colorTheme": "Winter is Coming (Dark Blue)",
  "workbench.iconTheme": "material-icon-theme",
  "peacock.favoriteColors": [
    {
      "name": "Angular Red",
      "value": "#b52e31"
    },
    {
      "name": "Auth0 Orange",
      "value": "#eb5424"
    },
    {
      "name": "Azure Blue",
      "value": "#007fff"
    },
    {
      "name": "C# Purple",
      "value": "#68217A"
    },
    {
      "name": "Gatsby Purple",
      "value": "#639"
    },
    {
      "name": "Go Cyan",
      "value": "#5dc9e2"
    },
    {
      "name": "Java Blue-Gray",
      "value": "#557c9b"
    },
    {
      "name": "JavaScript Yellow",
      "value": "#f9e64f"
    },
    {
      "name": "Mandalorian Blue",
      "value": "#1857a4"
    },
    {
      "name": "Node Green",
      "value": "#215732"
    },
    {
      "name": "React Blue",
      "value": "#00b3e6"
    },
    {
      "name": "Something Different",
      "value": "#832561"
    },
    {
      "name": "Vue Green",
      "value": "#42b883"
    }
  ]
}
```

After all the changes **⇧⌘P** `Developer: Reload Window` or **close & open** `VS Code` again.

### My 11 nice to know Shortcuts (macOS)

General

- **⌘,** User Settings
- **⇧⌘P** Show Command Palette

Basic editing

- **⌘X** Cut line (empty selection)
- **⌘C** Copy line (empty selection)
- **⇧⌘K** Delete line
- **⌥↓** or **⌥↑** Move line down/up
- **⇧⌥↓** or **⇧⌥↑** Copy line down/up

Multi-cursor

- **⌥ + click** Insert cursor
- **⌘D** Add selection to next Find match

Terminal

- **⌃`** Show integrated terminal
- **⌃⇧`** Create new terminal

### Cheat Sheet VS-Code for all Shortcuts

- [Keyboard shortcuts for Windows](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf)
- [Keyboard shortcuts for macOS](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf)

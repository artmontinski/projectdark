# ProjectDark README
A tool that detects log statements using the pattern this.loggerService.(info|error|warn|debug) and dims them without making any modifications to the file.

## Features

### - No dependencies

### v0.1
 - Toggle dimming of log statements with a single click - Default is 0.3/1
 - Activate by selecting 'ProjectDark: Toggle Log Dimming' from Command Pallete (Ctrl + Shift + P)
 - Extension lives in the status bar until deactivated by using the same command
 - Does not watch files, no resources used while idle


## Installation

### From .vsix
- Download the latest release and drop it into your VS Code workspace. Right-click and select "Install Extension .VSIX". You can then remove the file from workspace.

### Build from source
- git clone https://github.com/artmontinski/projectdark.git
- npm install
- npm install -g vsce
- vsce package
- A new .vsix file will appear in project root

## Extension Settings



## Known Issues


## Release Notes


### 1.0.0

Initial release of ...

### 1.0.1

Fixed issue #.

### 1.1.0

Added features X, Y, and Z.

---

## Following extension guidelines

Ensure that you've read through the extensions guidelines and follow the best practices for creating your extension.

* [Extension Guidelines](https://code.visualstudio.com/api/references/extension-guidelines)

## Working with Markdown

You can author your README using Visual Studio Code. Here are some useful editor keyboard shortcuts:

* Split the editor (`Cmd+\` on macOS or `Ctrl+\` on Windows and Linux).
* Toggle preview (`Shift+Cmd+V` on macOS or `Shift+Ctrl+V` on Windows and Linux).
* Press `Ctrl+Space` (Windows, Linux, macOS) to see a list of Markdown snippets.

## For more information

* [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
* [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)

**Enjoy!**

# Install VS Code and Node.js LTS

**Goal:** Open a folder in Visual Studio Code and run a saved JavaScript file using Node.js. If you already have both tools and the checks below pass, skip reinstalling. Use a current release labeled **LTS** (Long-Term Support). A supported LTS already installed is sufficient for these exercises.

## Windows

1. Open **Settings → System → About** and look at **System type**. Choose x64 for a supported x64 Windows device or Arm64 for a supported Arm-based Windows device.
2. Download [Visual Studio Code](https://code.visualstudio.com/download) for your system from Microsoft. A **User Installer** is usually the straightforward option on a personal computer. Open VS Code from the Start menu when the install finishes.
3. Download [Node.js](https://nodejs.org/en/download) from its official site. Select **LTS**, Windows, and the matching architecture. Use the prebuilt Windows installer (`.msi`) if available. Keep the standard runtime and PATH options; skip optional native build tools. No npm command is required this week.
4. Close and reopen VS Code so its terminal can see the newly installed command. Open **Terminal → New Terminal**. Run `node --version` in PowerShell. A version beginning with `v` shows the terminal found Node. If it is not recognized, open a fresh PowerShell window and try `Get-Command node`; ask a TA if it still does not resolve.
5. Continue to [your first script](03-terminal-and-first-script.md). Confirm the file actually ends in `.js`, especially if Windows hides extensions.

If a school-managed device blocks the installer or asks for permission you do not have, stop there and use the [Codespaces fallback](02-codespaces-fallback.md). Do not change PowerShell execution policy for these exercises. No PowerShell script needs to run.

## macOS

1. Open **Apple menu → About This Mac**. Use an Apple silicon/Arm64 build for an Apple M-series chip; use the Intel/x64 build for an Intel processor. A Universal VS Code build covers both if offered.
2. Download [Visual Studio Code](https://code.visualstudio.com/download). Open the download and place VS Code in **Applications**. Launch it from there.
3. Download [Node.js](https://nodejs.org/en/download). Select **LTS**, macOS, and the correct architecture, then choose the official macOS installer (`.pkg`) if available. Follow the installer. If permissions are unavailable, use the fallback.
4. Fully quit and reopen VS Code. Open **Terminal → New Terminal** and run `node --version`. If the command is missing, test it in a fresh macOS Terminal too and run `command -v node` to see the executable location, if resolved. Share the symptom with a TA instead of copying unrelated PATH changes.
5. Continue to [your first script](03-terminal-and-first-script.md). Use **File → Open Folder**; you do not need to install the optional `code` terminal command.

## Linux (short path)

Follow Microsoft's [VS Code Linux instructions](https://code.visualstudio.com/docs/setup/linux) for your distribution. Use a supported Node LTS from the [official Node download page](https://nodejs.org/en/download) or the distribution's supported method, checking the release status if your package is older. Package commands vary by system. In a fresh terminal, check `node --version` and `command -v node`. If the device blocks installation or you are unsure about your distribution, ask a TA or use the fallback.

## Ready to work

Check all three:

- VS Code can open your work folder and edit a `.js` file.
- The editor's new terminal recognizes `node --version`.
- After saving, you can run `node hello.js` in that folder and see the expected text. After a second edit and save, a new run shows the updated text.

If a prompt asks you to trust a folder, trust only folders you made or source you recognize. A plain file made by you needs no extensions, global packages, build tools, or account sign-in in VS Code.

Official references: [VS Code on Windows](https://code.visualstudio.com/docs/setup/windows), [VS Code on macOS](https://code.visualstudio.com/docs/setup/mac), and [Node.js release status](https://nodejs.org/en/about/previous-releases).

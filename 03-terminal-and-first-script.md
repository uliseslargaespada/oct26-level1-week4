# Run your first JavaScript file

Your goal is to make a change in an editor and prove that the saved file ran. Use the **terminal** for commands. Type JavaScript in a **.js file**. The terminal does not run a file just because you opened it in the editor.

1. Create a folder named `week-4-js`. In your editor use **File → Open Folder** and select it.
2. In the folder create `hello.js` (check that it is not named `hello.js.txt`).
3. Type and save:

   ```js
   console.log("Hello, Community Learning Hub!");
   ```

4. Open **Terminal → New Terminal** in VS Code. In PowerShell, `Get-Location` shows your current folder and `Get-ChildItem` lists files. On macOS/Linux, use `pwd` and `ls`. Look for `hello.js` in the listing. You can also open a terminal directly in the folder from the editor.
5. Verify the runtime with `node --version`. The version details may differ from your instructor's. Then run:

   ```text
   node hello.js
   ```

   Expected result:

   ```text
   Hello, Community Learning Hub!
   ```

6. Change the message in your file, save, and rerun the command. The new text should appear in the terminal. This verifies the edit → save → run → observe loop.

## What each part does

| Part | Job |
| --- | --- |
| VS Code editor | Open the folder and edit the source file |
| Terminal and shell | Read your command and start the runtime in the current folder |
| Node.js | Read and execute the JavaScript file |
| `console.log(...)` | Display a value so you can observe it |

Running only `node` usually opens the interactive prompt instead of executing your file. If you see `>`, type `.exit` and press Enter, then run `node hello.js` from the shell. The prompt symbol is a cue, not part of a command.

## When the output is not what you expect

- **No command called node:** reopen the editor and start a fresh terminal after installing. Review the setup guide or ask your TA before changing PATH manually.
- **Cannot find module ending in hello.js:** check the current directory, exact filename and whether the file was saved. This error does not mean this week's file needs packages.
- **Old output:** save the correct file, ensure the terminal is in the intended folder, and run the command again.
- **SyntaxError:** start with the file/line reported and the line just above it; check quotes, parentheses and braces.
- **ReferenceError:** compare the name in the error with the declaration; JavaScript names are case-sensitive.

No extensions, package installation, or development server are needed for the plain files in this week. Use the terminal command in the guide before trying a separate Run button.

Official reference: [Node.js: Run JavaScript files](https://nodejs.org/en/learn/command-line/run-nodejs-scripts-from-the-command-line).

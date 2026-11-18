# Codespaces: browser fallback

Use this path if you cannot install or run VS Code + Node.js locally. A codespace is a remote development workspace. It opens a VS Code editor in your browser and runs commands on the remote machine. It does not install Node on your computer. You still write a real file and run it with the same command.

## Open an approved workspace

1. Sign into your GitHub account, then go to [Your Codespaces](https://github.com/codespaces).
2. If available, choose the **Blank** template. Alternatively, use the instructor-provided starter repository and choose **Code → Codespaces** to create a workspace, if the repository and your account allow it. The public profile README repository is separate; don't use it for your class scripts. Reopen your existing codespace for the rest of the week instead of creating a new one daily.
3. In the browser editor, open a terminal. Run `node --version`. If Node is not available, tell your TA which workspace you opened. Do not install a random extension or a different development stack to make a small file run.
4. Work through the [first-file guide](03-terminal-and-first-script.md). In the Codespaces terminal use `pwd` and `ls` to check your folder. Save your file and run `node hello.js`. Edit, save, and rerun.
5. Keep a copy of your source files outside the codespace. If the file editor offers **Download**, use it; otherwise copy your own source to a local text file with the same name. Keep it available if the workspace becomes inaccessible.

## Usage, availability, and stopping

Access depends on the account, repository, and available allowance. You do not need to add a payment method, raise a budget, or buy extra usage for this class. If creation is blocked by permissions or usage, tell the TA. After saving and backing up your work, use [Your Codespaces](https://github.com/codespaces) to stop the workspace when you finish. Stopping ends active compute usage; retained files can still count toward storage. Do not delete the only copy of your work.

## If both routes are blocked tonight

Tell the TA. Continue the logic exercise temporarily in the browser developer console using code you wrote and understand. On another run, scope repeated declarations in a block or use a fresh page/console environment if a duplicate declaration error occurs. Keep a copy of the source and finish the saved-file Node check later. A console-only run is a temporary learning route, not evidence that your local installation works.

Official references: [Codespaces quickstart](https://docs.github.com/en/codespaces/quickstart), [creating a codespace from a template](https://docs.github.com/en/codespaces/developing-in-a-codespace/creating-a-codespace-from-a-template), and [included usage](https://docs.github.com/en/codespaces/troubleshooting/troubleshooting-included-usage).

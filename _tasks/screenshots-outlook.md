# Screenshot task: new Outlook features (Topic 06)

Paste this whole file into Claude Desktop (Code tab, local session on this repository, with Claude in Chrome connected to my signed-in work browser) as the first message. Work on the branch that has the new Topic 06 text (`claude/vibrant-wozniak-gvizj3`, or `main` once it is merged); run `git fetch` and check it out first.

This folder starts with an underscore, so GitHub Pages does not publish it.

---

## What to do

Topic 06 (`06-copilot-outlook/README.md`) has four new sections written without screenshots: Ask About Your Whole Mailbox, Tidy Your Inbox with Copilot, Prioritize My Inbox, and Schedule with Copilot. Each place that needs a screenshot has a hidden marker like this:

```
<!-- SCREENSHOT: images/schedule-with-copilot.png | An email thread with Schedule with Copilot highlighted in the ribbon, and the drafted meeting invite with its agenda -->
```

For each marker, capture the screen in new Outlook on the web (https://outlook.office.com) in my signed-in browser, save the PNG at the marker's path inside `06-copilot-outlook/`, and replace the marker with the image and an italic caption in the style of the existing Topic 06 images.

If the real UI does not match the steps (a renamed button, a moved setting, a missing feature), fix the text too and tell me what changed. Some inbox actions may still be in preview (Frontier). If a feature is missing from my tenant entirely, leave its marker in place and tell me.

## Shot list

| # | File (in `06-copilot-outlook/images/`) | Capture | Highlight |
|---|------|---------|-----------|
| 1 | `copilot-pane-scope.png` | The Copilot pane with an open email attached as context in the prompt box | The attached email and the X that removes it |
| 2 | `copilot-rule-confirm.png` | Copilot's summary of a new inbox rule, after asking: *Create a rule that moves emails with "AI Usage Guide" in the subject to the AI Guide folder.* Do not confirm it unless you want the rule | The condition, the action and the confirm button |
| 3 | `prioritize-my-inbox.png` | Settings (gear) > Copilot | The Prioritize my inbox toggle and its two options |
| 4 | `schedule-with-copilot.png` | An email thread about the AI Usage Guide with Schedule with Copilot in the ribbon, and the meeting draft it creates | The Schedule with Copilot button, and the drafted agenda |

For shot 4, use an email thread about the AI Usage Guide (send yourself a short test email with that subject if needed), so the drafted meeting matches the workshop scenario.

## Style

- Crop to the part of the screen the step is about, not the full window.
- Red rectangle (about 3px, `#E00000`) around each highlighted element, with numbered callouts if there is more than one, like the other workshop images.
- PNG, roughly 600 to 1100 pixels wide.
- The repository is a public website. Blur other people's names and photos, and any email subjects, senders or folder names that are not part of the workshop scenario.

## When you're done

1. Rebuild the participant book:

   ```
   cd book
   npm install
   npx playwright install chromium
   npm run build
   ```

2. Check no markers are left: `grep -rn "SCREENSHOT:" 06-copilot-outlook`
3. Delete this file (`_tasks/screenshots-outlook.md`).
4. Commit to a new branch and open a pull request.

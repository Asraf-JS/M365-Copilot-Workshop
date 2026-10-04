# Screenshot task: Copilot in Teams (Topic 11) and Copilot Notebooks (Topic 03)

Paste this whole file into Claude Desktop (Code tab, local session on this repository, with Claude in Chrome connected to my signed-in work browser) as the first message.

This folder starts with an underscore, so GitHub Pages does not publish it.

Work on top of the branch that has the new Topic 11 and Notebooks text: `claude/vibrant-wozniak-gvizj3`, or `main` once that branch has been merged. Run `git fetch` and check out the right one before you start.

---

## What to do

Topic 11 (`11-copilot-teams/README.md`) and the new Notebooks section in Topic 03 (`03-copilot-chat/README.md`) were written without screenshots. Each place that needs one has a hidden marker like this:

```
<!-- SCREENSHOT: images/meeting-recap.png | The Recap tab in the meeting chat, with AI notes and follow-up tasks highlighted -->
```

For each marker:

1. Walk through the steps around the marker in my signed-in browser (Teams on the web at https://teams.microsoft.com, Copilot at https://m365.cloud.microsoft) and capture the screen it describes.
2. Save the PNG at the path in the marker, relative to that topic's folder (for example `11-copilot-teams/images/meeting-recap.png`).
3. Replace the marker with the image and an italic caption, in the same style as the rest of the workshop:

   ```
   ![The Recap tab in the meeting chat](./images/meeting-recap.png)

   *The Recap tab in the meeting chat. AI notes and follow-up tasks are highlighted.*
   ```

4. If the real UI does not match the steps in the text (a renamed button, a moved option, a missing feature), fix the text too and tell me what you changed.

## Shot list

| # | File | Topic | Capture | Highlight |
|---|------|-------|---------|-----------|
| 1 | `11-copilot-teams/images/new-meeting-agenda.png` | 11 | New meeting form in the Teams calendar | "Add an agenda others can edit" |
| 2 | `11-copilot-teams/images/copilot-ai-options.png` | 11 | Meeting Options, Copilot and other AI | The Facilitator toggle and the Allow Copilot setting |
| 3 | `11-copilot-teams/images/copilot-in-meeting.png` | 11 | A live meeting with the Copilot pane open on the right | The Copilot button in the meeting controls |
| 4 | `11-copilot-teams/images/facilitator-notes.png` | 11 | Facilitator's live notes during the meeting | One agenda item, one decision and one action item |
| 5 | `11-copilot-teams/images/meeting-ai-toggle.png` | 11 | Meeting controls during a live meeting | The Meeting AI toggle |
| 6 | `11-copilot-teams/images/meeting-recap.png` | 11 | The Recap tab in the meeting chat after the meeting | AI notes and follow-up tasks |
| 7 | `11-copilot-teams/images/copilot-in-chat.png` | 11 | A Teams chat with Copilot open in the side pane showing a summary | The Copilot button at the top right of the chat |
| 8 | `03-copilot-chat/images/notebooks-new.png` | 03 | Copilot sidebar with Notebooks expanded | All notebooks and New notebook |
| 9 | `03-copilot-chat/images/notebooks-references.png` | 03 | A new notebook's Add content to References area | The suggested references and the filter tabs |
| 10 | `03-copilot-chat/images/notebooks-instructions.png` | 03 | A notebook with sample instructions entered | Add Copilot Instructions |

For the meeting shots (3 to 6), schedule a short test meeting called *AI Usage Guide launch* with the agenda from Part 1 of `11-copilot-teams/prompts.md`. Say a few sentences about the guide with transcription on so Copilot and Facilitator have something to show. For the Notebooks shots, name the notebook *AI Usage Guide research*.

## Style

- Crop to the part of the screen the step is about, not the full window. Keep enough around it that people can tell where they are.
- Draw a red rectangle (about 3px, `#E00000`) around the element the step points to, like the existing images in `01-copilot-fundamentals/images/`.
- PNG, roughly 600 to 1100 pixels wide.
- The repository is a public website. Blur other people's names and photos, and any real chat titles, file names or email subjects that are not part of the workshop scenario.

## When you're done

1. Rebuild the participant book so it includes the new pages:

   ```
   cd book
   npm install
   npx playwright install chromium
   npm run build
   ```

2. Check that no `SCREENSHOT:` markers are left: `grep -rn "SCREENSHOT:" 03-copilot-chat 11-copilot-teams`
3. Delete this file (`_tasks/screenshots-teams-notebooks.md`).
4. Commit to a new branch and open a pull request.

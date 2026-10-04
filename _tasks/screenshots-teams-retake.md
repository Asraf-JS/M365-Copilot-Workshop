# Screenshot task: retake the Topic 10 meeting screenshots

Paste this whole file into Claude Desktop (Code tab, local session on this repository, with Claude in Chrome connected to my signed-in work browser) as the first message. Work on `main`; run `git pull` first.

This folder starts with an underscore, so GitHub Pages does not publish it.

---

## Why

Three screenshots in `10-copilot-teams/README.md` came from an old demo meeting ("Facilitator Agent Demo") instead of the *AI Usage Guide launch* meeting the topic describes. Its agenda is about other topics, and its recap shows "We didn't find any tasks in the transcript" under Follow-up tasks. They stay in place as examples until these retakes replace them. There is also one new shot for the Ask Facilitator section.

## Run a mock launch meeting first

All four shots come from the same meeting, so set it up properly once:

1. Schedule a Teams meeting called **AI Usage Guide launch**, with **Facilitator** on and **Allow Copilot and Facilitator** set to **During and after the meeting**. Invite at least one colleague or a second test account, so follow-up tasks can be assigned to someone.
2. Add this agenda with **Add an agenda**:
   - Welcome and why we need an AI Usage Guide (2 min)
   - Walkthrough of the guide's key rules (3 min)
   - Questions and concerns (3 min)
   - Agree next steps and owners (2 min)
3. Start the meeting and transcription, and talk through the agenda for about ten minutes. Make sure these things are said out loud, so Facilitator and the recap have real content:
   - A decision: *"We'll roll the guide out to the whole department on the first of next month."*
   - A question: *"Can we paste customer names into Copilot?"* and an answer: *"No, the guide says to remove personal data first."*
   - Two clear actions with owners, for example *"[colleague], can you share the guide in the team channel by Friday?"* and *"I'll set up a short quiz in Forms next week."*
4. Before ending, post this in the meeting chat (this is shot 4):

   ```
   @Facilitator what decisions and action items have we agreed so far? List each action with its owner.
   ```

5. End the meeting and wait for the Recap to appear (it can take a few minutes).

## Shot list

| # | File (in `10-copilot-teams/images/`) | Capture | Highlight |
|---|------|---------|-----------|
| 1 | `facilitator-notes.png` (replace) | Recap, **Notes** tab: the AI Usage Guide launch agenda with items ticked off, and Facilitator's meeting notes | The Notes tab, the agenda, and the meeting notes |
| 2 | `meeting-recap.png` (replace) | Recap, **AI summary** tab, with Meeting notes and **Follow-up tasks** that list the two actions and their owners | Video recap and Audio recap, the AI summary tab, Meeting notes, Follow-up tasks |
| 3 | `copilot-in-chat.png` (replace) | The meeting chat with Copilot open on the right, answering *What were the main questions about the AI Usage Guide?* | The Copilot icon at the top right of the chat, and the Copilot pane |
| 4 | `ask-facilitator.png` (new) | The meeting chat showing the @Facilitator question from step 4 and Facilitator's reply | The question, the reply, and the **Ask Facilitator** button |

For shot 4, replace the hidden `<!-- SCREENSHOT: images/ask-facilitator.png | ... -->` marker in the "Ask Facilitator in the meeting chat" section with the image and an italic caption, like the other images in the topic. For shots 1 to 3, keep the file names so the existing Markdown picks them up, and update the captions if what is highlighted changes.

## Style

- Crop to the part of the screen the step is about, as in the existing Topic 10 images.
- Red rectangle (about 3px, `#E00000`) around each highlighted element, with numbered callouts if there is more than one, matching the existing images.
- PNG, roughly 600 to 1100 pixels wide.
- The repository is a public website. Blur colleagues' names and photos. Also blur the "Recording has been saved to ... OneDrive" line and anything not part of the scenario.

## When you're done

1. If anything in the text no longer matches what you see (for example how @Facilitator works in the chat), fix the text and tell me what changed.
2. Rebuild the participant book:

   ```
   cd book
   npm install
   npx playwright install chromium
   npm run build
   ```

3. Check no markers are left: `grep -rn "SCREENSHOT:" 10-copilot-teams`
4. Delete this file (`_tasks/screenshots-teams-retake.md`).
5. Commit to a new branch and open a pull request.

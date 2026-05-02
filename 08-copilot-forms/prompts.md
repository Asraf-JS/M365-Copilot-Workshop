# 08 — Copilot in Forms: Prompts

Use these prompts to build a knowledge quiz and feedback survey from your AI Usage Guide.

> **Session guide:** All prompts in this topic are used inside Microsoft Forms at [forms.cloud.microsoft](https://forms.cloud.microsoft/). Attach your AI Usage Guide document before submitting any prompt. Parts 1 to 4 build the knowledge quiz. Parts 5 to 7 build the feedback survey. These are two separate forms.

> **Before you start:** Make sure your AI Usage Guide is saved to OneDrive so Copilot in Forms can find it. If it is only on your desktop, upload it to OneDrive first.

---

## Part 1 — Generate the knowledge quiz

**Click New Quiz on the Forms home screen, then click Draft with Copilot. Attach your AI Usage Guide using the paperclip icon, then submit this prompt.**

```
Using the attached AI Usage Guide, create a knowledge quiz 
to test whether employees have understood the key rules.

Include:
- 8 to 10 multiple choice questions
- Questions covering: approved tools, dos and don'ts, 
  data privacy and PDPA, human review requirements, 
  and how to report issues
- 4 answer options per question with only one correct answer
- A mix of straightforward recall questions and 
  scenario-based questions where the employee must 
  decide what to do

Keep the language clear and suitable for non-technical staff.
```

If you want to regenerate with a different focus:

```
Regenerate the quiz with more scenario-based questions. 
Each question should describe a real workplace situation 
and ask the employee what the correct action is according 
to the AI Usage Guide.
```

---

## Part 2 — Refine the quiz questions

**Use the refinement bar at the bottom of the draft to fine-tune before keeping.**

```
The questions are too straightforward. Make 3 of them 
harder by adding plausible wrong answers that employees 
might genuinely be unsure about.
```

```
Simplify the language on questions 4, 6, and 8. 
Some employees have no technical background and may 
not understand terms like PDPA or data classification 
without a short explanation in the question itself.
```

```
Add an introductory description to the quiz explaining 
its purpose. Keep it under 50 words. The tone should 
be encouraging, not threatening.
```

---

## Part 3 — Set correct answers and scoring

After keeping the draft, review each question and mark the correct answer:

1. Click any question to expand it
2. Click **Answer key** at the bottom of the question
3. Select the correct answer
4. Assign a point value (suggested: 1 point per question)
5. Optionally add a feedback message for correct and incorrect answers

```
For each question, suggest a one-sentence feedback message 
that explains why the correct answer is right. Write it 
in a way that reinforces the key rule from the guideline 
rather than just saying "correct" or "incorrect".
```

---

## Part 4 — Configure and distribute the quiz

Once the quiz is ready:

1. Click **Collect responses** in the top bar
2. Set access to **Only people in your organisation** and enable **Record name**
3. Enable **One response per person** to prevent duplicate submissions
4. Copy the link or download the QR code to share with your team

> **Tip:** Display the QR code on your presentation slide at the end of your team session so participants can complete the quiz on their phones immediately after.

---

## Part 5 — Generate the feedback survey

**Go back to the Forms home screen, click New Form, then Draft with Copilot. Attach your AI Usage Guide again and submit this prompt.**

```
Using the attached AI Usage Guide, create a feedback survey 
to find out how useful and practical employees find the guideline.

Include:
- A 1 to 5 rating scale for overall clarity of the guideline
- A 1 to 5 rating scale for how confident employees feel 
  using AI tools after reading it
- A Net Promoter Score question (0 to 10): 
  "How likely are you to recommend this guideline to a 
  colleague in another department?"
- A question asking which section was most useful
- A question asking which section was hardest to understand
- Two open-ended questions asking for specific improvement 
  suggestions
- A question about how often they expect to reference 
  the guideline

10 to 12 questions total. Mix of question types.
```

---

## Part 6 — Add a survey introduction

```
Write a short introduction for this survey. Include:
- What the survey is for
- How long it takes (estimate 3 to 5 minutes)
- That responses are anonymous
- Who will see the results and how they will be used

Keep it under 60 words. Friendly and encouraging tone.
```

---

## Part 7 — Improve specific questions

```
The open-ended questions are too vague. Rewrite them to 
be more specific so employees give actionable feedback 
rather than general comments.

For example, instead of "What could be improved?", 
ask something like "If you could change one thing about 
the Dos and Don'ts section, what would it be and why?"
```

```
Add a question asking which Microsoft 365 Copilot app 
the employee uses most often for their daily work. 
Use a multiple choice format with: Word, Excel, Outlook, 
PowerPoint, Teams, Copilot Chat, and Other as options.
Allow multiple selections.
```

---

## Part 8 — Export responses to Excel

After the survey has collected responses:

1. Click **View responses** in the top bar
2. In the Insights panel on the right, click **Open results in Excel**
3. The Excel file saves automatically to your **OneDrive > Documents** folder
4. The file is named after your form title

> **Find it later:** Go to OneDrive, open the Documents folder, and look for the `.xlsx` file matching your form name. This file updates automatically as new responses come in — you do not need to re-export.

> **For the workshop:** If you do not have real responses, use `AI_Guideline_Survey_Responses.xlsx` from the `09-copilot-excel` folder in the workshop GitHub repo. It has 30 pre-populated responses ready for analysis in Topic 09.

---

*Back to: [07 — Copilot in PowerPoint](../07-copilot-powerpoint/) | Next: [09 — Copilot in Excel](../09-copilot-excel/)*

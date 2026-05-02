# 03 — Copilot Chat: Prompts

Use these prompts to research your **AI Usage Guide** for your department.

> **Grounding modes explained:**
> - **Web mode (globe icon):** Copilot searches the public internet. Use this for Parts 1 to 5 to research best practices, regulations, and external information.
> - **Work mode (briefcase icon):** Copilot searches your Microsoft 365 data (OneDrive, SharePoint, emails, Teams). Use this for Part 6 only, after uploading the sample policy document.
>
> **Session guide:** Parts 1 through 5 and Part 8 run in the **same chat session** using Web mode. Part 6 is a new chat in Work mode. Part 7 is flexible.

---

## Part 1 — Broad overview

**Session: same chat | Grounding: Web mode**

Start here to get a high-level picture before going into department-specific detail.

```
What should a departmental AI usage guide cover? Give me a 
structured outline with at least 6 sections. The guide is for 
a Malaysian corporate environment with non-technical staff.
```

```
What are the most common risks organisations face when employees 
use AI tools without clear guidelines? List them with a brief 
explanation of each.
```

```
What are global best practices for responsible AI use in the 
workplace? Summarise the key principles in plain language, 
with one example of how each applies in an office setting.
```

Then go deeper on anything that stands out:
```
Expand on [paste the point you want to explore]. Give me 2 real-world 
examples of how this has affected organisations, and what they did 
about it.
```

---

## Part 2 — Department-specific research

**Session: same chat | Grounding: Web mode**

Replace `[your department]` with your actual department before submitting.

```
I work in [your department] at a mid-sized Malaysian company. 
What are the 5 most relevant AI use cases for my department? 
Be specific, not generic advice. For each use case, name the 
Microsoft 365 Copilot feature that would handle it.
```

```
What are the most important dos and don'ts for using AI in 
[your department]? Focus on data privacy, accuracy, and 
professional ethics. Give me a table with two columns: 
Do and Don't.
```

```
What data or information from [your department] should never 
be shared with an external AI tool? Give me a list with the 
reason for each item. Reference PDPA where relevant.
```

```
What are 3 tasks in [your department] where AI output must 
always be verified by a human before being used? Explain 
the risk for each one if it is not checked.
```

---

## Part 3 — Regulatory and compliance angle

**Session: same chat | Grounding: Web mode**

```
What Malaysian laws or regulations are relevant when a company 
introduces AI tools in the workplace? Include PDPA 2010, any 
labour regulations, and sector-specific rules if applicable 
(e.g. banking under BNM guidelines, healthcare under MOH).
```

```
Act as a cautious legal advisor. What clauses or warnings 
should be included in a company AI usage policy to protect 
the organisation from liability? List them with a one-sentence 
explanation of each.
```

```
How does Malaysia's National Guidelines on AI Governance and 
Ethics (AIGE) apply to a company deploying Microsoft 365 Copilot 
for its staff? Summarise the key requirements in plain language.
```

---

## Part 4 — Exploring different perspectives

**Session: same chat | Grounding: Web mode**

Run all three prompts and compare the responses. The employee perspective is often the most useful one for writing a guide that people will actually read.

```
Act as a cautious IT security officer at a Malaysian company. 
Review a situation where staff are starting to use Microsoft 365 
Copilot without formal guidelines. What are your top 5 concerns 
and what would you want the AI usage guide to address?
```

```
Act as an enthusiastic department head who wants their team to 
adopt AI tools quickly. Make the case for why every department 
in a Malaysian company should have an AI usage guide, and why 
having one actually accelerates adoption rather than slowing it down.
```

```
Act as a frontline employee who is nervous about using AI at work. 
What questions would you want the AI usage guide to answer before 
you felt comfortable using Copilot for your daily tasks?
```

---

## Part 5 — Multi-model comparison

**Session: same chat | Grounding: Web mode | Switch models using the Auto dropdown**

Run the same prompt in Opus and GPT and compare the outputs.

```
Write a one-paragraph introduction for an AI Usage Guide 
aimed at employees who are new to using AI at work. 
Tone: professional but encouraging. Max 80 words.
```

After comparing, ask yourself:
- Which version is more suitable for your workplace culture?
- Which is clearer and easier to read?
- Which would you edit less before using?

Then try the same comparison with a more analytical prompt:

```
What are the 3 most important things a Malaysian company must 
address in an AI usage policy? Rank them by business risk, 
highest first. Give a one-paragraph justification for each.
```

Notice whether the models differ more on creative writing tasks or analytical ones.

---

## Part 6 — Work mode: referencing your own documents

**Session: new chat | Grounding: Work mode (briefcase icon)**

> **Before you start this part:**
> 1. Download the file: [Data_Privacy_AI_Acceptable_Use_Policy.pdf](./Data_Privacy_AI_Acceptable_Use_Policy.pdf)
> 2. Upload it to your **OneDrive** (drag and drop into any folder)
> 3. Wait about 30 seconds for Microsoft Graph to index it
> 4. Open a new Copilot Chat and switch to **Work mode** (click the briefcase icon)
> 5. You are now ready to submit the prompts below

Copilot will search your Microsoft 365 data including the document you just uploaded. This simulates how you would use Work mode to reference your own company policies.

```
Do we have any existing policies or guidelines related to data 
privacy or acceptable use of AI tools? Summarise the key points.
```

```
Based on our existing data privacy and AI policy, what gaps would 
need to be addressed before we could safely roll out Microsoft 365 
Copilot to all staff? List the gaps and suggest how each could 
be addressed.
```

```
Our policy references PDPA 2010 and the AIGE guidelines. 
Summarise what each of these requires from us as an employer, 
based on what you can find in our policy document.
```

```
Which sections of our existing policy cover employee 
responsibilities when using AI tools? Quote the key obligations 
in plain language that a non-technical employee would understand.
```

> **If Copilot cannot find the document:** make sure you are in Work mode (briefcase icon active, not the globe). If it still cannot find it, wait another minute and try again. Microsoft Graph indexing can take a few minutes for new files.

---

## Part 7 — Fact-checking and pressure-testing

**Session: any session | Grounding: Web mode**

Once you have research notes, use these to verify and challenge what Copilot gave you.

```
You told me earlier that [paste a specific claim]. What is 
the source for this? How confident are you in this information 
and what should I verify independently?
```

```
Review the research notes we have built in this conversation. 
Which points are likely to be accurate and stable, and which 
ones should I verify with a current source before including 
them in a formal document?
```

```
What did you leave out of this research that a thorough AI 
usage guide for a Malaysian company should cover?
```

---

## Part 8 — Consolidation: preparing to move to Pages

**Session: same chat as Parts 1 through 5 | Grounding: Web mode**

This turns everything you have gathered into a structured outline ready to take into Copilot Pages in Topic 04.

```
Based on everything we have discussed in this conversation, 
give me a structured set of notes I can use to write an AI 
Usage Guide for my department. Organise by section with a 
heading for each. Under each heading, use bullet points for 
the key ideas. Include a note on any areas where I still 
need to do more research.
```

Once you have the outline, click the **Edit in Pages** button (pencil icon on the response) to open it as a Copilot Page. That is where Topic 04 begins.

---

*Back to: [02 — Prompt Engineering](../02-prompt-engineering/) | Next: [04 — Copilot Pages](../04-copilot-pages/)*

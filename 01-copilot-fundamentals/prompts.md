# 01 - Copilot Fundamentals: Prompts

Work through each exercise in order. Each one has a clear instruction on where to run it, which grounding mode to use, and which model to select.

---

## Exercise 1 - Understand what Copilot is

**Where:** Open a new chat in Copilot Chat at [m365.cloud.microsoft](https://m365.cloud.microsoft/)
**Grounding:** Web
**Model:** Auto

Start with this prompt to set the context for the rest of the exercise:

```
Explain Microsoft 365 Copilot in simple terms for someone 
who has never used AI tools before. Use a short analogy 
and keep it under 100 words.
```

Stay in the same chat and follow up with:

```
What is the difference between Microsoft Copilot (free) 
and Microsoft 365 Copilot (paid)? Give me a comparison 
table with 4 key differences.
```

Then:

```
What does it mean when people say Copilot is "grounded 
in your Microsoft 365 data"? Give me a practical example 
using Outlook and SharePoint.
```

---

## Exercise 2 - Learn the key terms

**Where:** Continue in the same chat from Exercise 1
**Grounding:** Web
**Model:** Auto

Run each prompt one at a time. Read the response before moving to the next one.

```
Explain what a "hallucination" is in the context of AI. 
Give me one example of how it might happen in a workplace 
setting, and one way to catch it.
```

```
What is RAG (Retrieval-Augmented Generation) and why does 
it matter for Microsoft 365 Copilot? Explain it without 
using technical jargon.
```

```
What is a token in the context of large language models? 
How does token limit affect the way I use Copilot with 
long documents?
```

```
Explain the difference between a context window and memory 
in AI tools. How does this affect the way I use Copilot 
across multiple sessions?
```

```
What is "temperature" in the context of AI language models? 
Why does the same prompt sometimes give different answers 
in Copilot?
```

---

## Exercise 3 - Responsible AI and Malaysian context

**Where:** Continue in the same chat from Exercise 2
**Grounding:** Web
**Model:** Auto

```
What are Microsoft's responsible AI principles? Summarise 
them in bullet points with one practical implication of 
each for an office worker.
```

```
What are 3 things I should never input into an AI tool 
like Microsoft 365 Copilot? Explain the risk behind 
each one.
```

```
How does Malaysia's Personal Data Protection Act 
(PDPA 2010) apply to employees using AI tools like 
Microsoft 365 Copilot at work? Give me 3 practical 
rules to follow.
```

---

## Exercise 4 - Test the model switcher

**Where:** Start a new chat
**Grounding:** Web
**Model:** Start with Auto, then repeat with Opus (Claude), then GPT

Run the same prompt in all three models and compare the responses side by side.

```
Write a one-paragraph welcome message for a new employee 
joining a Malaysian company that has just introduced an 
AI Usage Guideline. Tone: warm and professional.
```

After comparing, ask yourself:
- Which version is clearer?
- Which one sounds more natural for your workplace?
- Which would you edit less before sending?

> **Note:** To switch models, click the model name at the top of the Copilot panel and select from the list. Each model runs in its own response - you do not need to start a new chat to switch.

---

## Exercise 5 - Experience the context window

**Where:** Start a new chat
**Grounding:** Work
**Model:** Auto

This exercise shows how Copilot holds context within a session, and loses it when you start a new one. Run the prompts in sequence without starting a new chat between them.

**Step 1 - Set the context:**

```
I am drafting an AI Usage Guideline for my department. 
My department handles customer complaints at a mid-sized 
Malaysian logistics company. Keep this in mind for 
everything that follows.
```

**Step 2 - Ask a follow-up question:**

```
What are the top 3 risks my department should address 
in the guideline?
```

**Step 3 - Test recall:**

```
Summarise everything we have discussed so far in this 
conversation into 5 bullet points.
```

**Step 4 - Start a new chat and run this:**

```
Summarise everything we have discussed so far in this 
conversation into 5 bullet points.
```

Notice that Copilot has no memory of the previous conversation. This is the context window in action.

---

## Exercise 6 - Write your personalisation prompt

**Where:** Start a new chat
**Grounding:** Web
**Model:** Auto

A personalisation prompt is a standing briefing you paste at the start of any new chat session. It tells Copilot your role, context, and preferences so you don't have to repeat yourself every time.

Below is a detailed example written for a trainer context. Read through it to understand the structure, then use the template below it to write your own.

### Example - trainer context

```
# ROLE
Act as a corporate IT trainer assistant supporting 
Microsoft 365, Power Platform, Data Analytics, and 
AI adoption training.

# CONTEXT
The user is a Malaysia-based freelance IT trainer 
delivering corporate workshops via training providers. 
Typical clients include enterprise organisations in 
banking, pharma, and logistics.

Focus areas:
- Microsoft 365 (Excel, PowerPoint, Word, Teams, SharePoint)
- Power Platform (Power BI, Power Apps, Power Automate, Dataverse)
- AI tools (ChatGPT, Microsoft Copilot, Google Gemini, NotebookLM)

The user frequently designs:
- Training outlines (1 to 2 days)
- Trainer scripts and hands-on lab exercises
- Client proposals and email responses
- PowerPoint decks and Word handouts

# OUTPUT STYLE
- Professional, corporate tone
- Structured formatting with clear headings, bullet 
  points, and tables where useful
- Concise and practical - avoid theory-heavy explanations
- Focus on real-world business use cases relevant to 
  Malaysian or general corporate contexts

# TRAINING DESIGN PREFERENCES
- Prefer hands-on learning (target 70 to 90 percent practical)
- Include step-by-step exercises and realistic business scenarios
- Avoid overly academic or generic explanations

# AI USAGE EXPECTATIONS
- Apply prompt engineering best practices: clear role, 
  task, constraints, and output format
- Suggest ways to use AI tools in workflows, not just explanations
- Provide improved prompts when relevant

# CONSTRAINTS
- Avoid emojis
- Avoid overly long explanations
- Avoid generic textbook-style content
- Prioritise practical, usable output
- Do not use em dashes
```

### Template - adapt this for yourself

Copy this, fill in the brackets, and paste it as your first message in any new Copilot Chat session.

```
# ROLE
Act as [describe the assistant role you need - e.g., 
"a professional email writing assistant" or 
"an HR policy advisor"].

# CONTEXT
I work as a [your job title] at a [company type, e.g., 
"mid-sized Malaysian manufacturing company"].
My department handles [brief description of what 
your team does].
I typically use Copilot for: [list 3 to 5 tasks, e.g., 
"drafting emails, summarising reports, preparing 
presentations"].

# OUTPUT STYLE
- [Tone: e.g., formal / professional / conversational]
- [Format preference: e.g., bullet points / short 
  paragraphs / tables]
- [Length preference: e.g., concise under 200 words / 
  detailed with examples]

# CONSTRAINTS
- [List anything Copilot should avoid, e.g., 
  "avoid jargon", "do not use bullet points", 
  "always write in Bahasa Malaysia"]
```

> **Tip:** You do not need all sections every time. Even a ROLE and CONTEXT block will noticeably improve responses. Start simple and add more detail as you discover what works for you.

---

## Exercise 7 - Compare Think Deeper vs Quick Response

**Where:** Start a new chat
**Grounding:** Web
**Model:** Auto, then repeat with Think Deeper

```
List 5 tasks I do every day at work that Microsoft 365 
Copilot could help with. For each one, describe exactly 
how Copilot would help and estimate the time saved 
per week.
```

Run it first in **Quick Response** mode, then switch to **Think Deeper** and run the same prompt again. Compare the depth, structure, and specificity of each response.

> **Note:** Think Deeper takes longer to respond but reasons through the problem more carefully before answering. Use it when you need a more considered output, not for quick lookups.

---

*Back to: [Workshop Home](../README.md) | Next: [02 - Prompt Engineering](../02-prompt-engineering/)*

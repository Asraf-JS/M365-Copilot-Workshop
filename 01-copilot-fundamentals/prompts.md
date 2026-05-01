# 01 — Copilot Fundamentals: Prompts

Use these in **Copilot Chat** to explore the fundamentals before diving into the workshop scenario.

---

## Understanding what Copilot is

```
Explain Microsoft 365 Copilot in simple terms for someone who has never used AI tools before. Use a short analogy and keep it under 100 words.
```

```
What is the difference between Microsoft Copilot (free) and Microsoft 365 Copilot (paid)? Give me a comparison table with 4 key differences.
```

```
What does it mean when people say Copilot is "grounded in your Microsoft 365 data"? Give me a practical example using Outlook and SharePoint.
```

---

## Key terms — plain language

```
Explain what a "hallucination" is in the context of AI. Give me one example of how it might happen in a workplace setting, and one way to catch it.
```

```
What is RAG (Retrieval-Augmented Generation) and why does it matter for Microsoft 365 Copilot? Explain it without using technical jargon.
```

```
What is a token in the context of large language models? How does token limit affect the way I use Copilot with long documents?
```

```
Explain the difference between a context window and memory in AI tools. How does this affect the way I use Copilot across multiple sessions?
```

```
What is "temperature" in the context of AI language models? Why does the same prompt sometimes give different answers in Copilot?
```

---

## Responsible AI

```
What are Microsoft's responsible AI principles? Summarise them in bullet points with one practical implication of each for an office worker.
```

```
What are 3 things I should never input into an AI tool like Microsoft 365 Copilot? Explain the risk behind each one.
```

```
How does Malaysia's Personal Data Protection Act (PDPA 2010) apply to employees using AI tools like Microsoft 365 Copilot at work? Give me 3 practical rules to follow.
```

---

## Exploring the model switcher

Try the same prompt below in both **Opus (Claude)** and **GPT**, then compare the responses:

```
Write a one-paragraph welcome message for a new employee joining a Malaysian company that has just introduced an AI Usage Guideline. Tone: warm and professional.
```

After comparing, ask yourself:
- Which version is clearer?
- Which one sounds more natural for your workplace?
- Which would you edit less before sending?

---

## Testing memory and context

Use these to experience Copilot's context window in action. Run them in sequence **within the same chat session**:

```
I am drafting an AI Usage Guideline for my department. My department handles customer complaints at a mid-sized Malaysian logistics company. Keep this in mind for everything that follows.
```

Then follow up with:

```
What are the top 3 risks my department should address in the guideline?
```

Then:

```
Summarise everything we have discussed so far in this conversation into 5 bullet points.
```

Now **start a new chat** and ask the same last question. Notice that Copilot has no memory of the previous conversation.

---

## Custom personalisation prompt

Before every workshop or major project, paste your personalisation prompt into Copilot Chat as the first message. This acts as a standing briefing so Copilot understands your context without you having to repeat it.

Below is a detailed example. Read through it to understand the structure, then adapt the template below it to write your own.

### Example — trainer context

```
# ROLE
Act as a corporate IT trainer assistant supporting Microsoft 365, Power Platform, Data Analytics, and AI adoption training.

# CONTEXT
The user is a Malaysia-based freelance IT trainer delivering corporate workshops via training providers. Typical clients include enterprise organisations in banking, pharma, and logistics.

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
- Structured formatting with clear headings, bullet points, and tables where useful
- Concise and practical — avoid theory-heavy explanations
- Focus on real-world business use cases relevant to Malaysian or general corporate contexts

# TRAINING DESIGN PREFERENCES
- Prefer hands-on learning (target 70 to 90 percent practical)
- Include step-by-step exercises and realistic business scenarios
- Avoid overly academic or generic explanations

# AI USAGE EXPECTATIONS
- Apply prompt engineering best practices: clear role, task, constraints, and output format
- Suggest ways to use AI tools in workflows, not just explanations
- Provide improved prompts when relevant

# CONSTRAINTS
- Avoid emojis
- Avoid overly long explanations
- Avoid generic textbook-style content
- Prioritise practical, usable output
- Do not use em dashes
```

### Template — adapt this for yourself

Copy the template below, fill in the brackets, and paste it as your first message in any new Copilot Chat session.

```
# ROLE
Act as [describe the assistant role you need — e.g., "a professional email writing assistant" or "an HR policy advisor"].

# CONTEXT
I work as a [your job title] at a [company type, e.g., "mid-sized Malaysian manufacturing company"].
My department handles [brief description of what your team does].
I typically use Copilot for: [list 3 to 5 tasks, e.g., "drafting emails, summarising reports, preparing presentations"].

# OUTPUT STYLE
- [Tone: e.g., formal / professional / conversational]
- [Format preference: e.g., bullet points / short paragraphs / tables]
- [Length preference: e.g., concise under 200 words / detailed with examples]

# CONSTRAINTS
- [List anything Copilot should avoid, e.g., "avoid jargon", "do not use bullet points", "always write in Bahasa Malaysia"]
```

> **Tip:** You do not need all sections every time. Even just a ROLE and CONTEXT block will noticeably improve Copilot's responses. Start simple and add more detail as you discover what works for you.

---

## Comparing responses across models

Use these to explore how different models handle the same task:

```
I need to explain to my manager why our department should adopt Microsoft 365 Copilot. Write a short business case — 3 paragraphs, formal tone, focused on time savings and productivity.
```

Run it in **Auto**, then switch to **Opus (Claude)**, then **GPT**. Compare structure, tone, and which version is most convincing for a Malaysian corporate audience.

```
List 5 tasks I do every day at work that Microsoft 365 Copilot could help with. For each one, describe exactly how Copilot would help and estimate the time saved per week.
```

Try this one in **Think Deeper** mode and compare it with **Quick Response**. Notice the difference in depth and specificity.

---

*Back to: [Workshop Home](../README.md) | Next: [02 — Prompt Engineering](../02-prompt-engineering/)*

# 02 — Prompt Engineering

The quality of what Copilot gives you depends almost entirely on what you give it. This topic covers how to write prompts that get useful, relevant, and accurate results.

> **Prompts to try:** See [prompts.md](./prompts.md) for copy-paste prompts you can use during and after this session.

---

## The GCSE Framework

A simple four-part framework for structuring effective prompts. You do not need all four elements every time, but the more relevant context you provide, the better the output.

| Element | What it means | Example |
|---------|--------------|---------|
| **G — Goal** | What do you want Copilot to do? | "Write a summary..." |
| **C — Context** | Who are you, what's the situation? | "...for a team of non-technical staff..." |
| **S — Source** | What should it reference or use? | "...based on the attached report..." |
| **E — Expectations** | Format, length, tone, style | "...in 3 bullet points, professional tone." |

### Building a GCSE prompt step by step

Here is how the same request improves as you add each element:

**Goal only (weak):**
```
Write a summary.
```

**Goal + Context:**
```
Write a summary for a team of non-technical staff.
```

**Goal + Context + Source:**
```
Write a summary for a team of non-technical staff based on the attached AI Usage Guideline document.
```

**Goal + Context + Source + Expectations (strong):**
```
Write a summary of the attached AI Usage Guideline for a team of non-technical staff. 
Cover the 3 most important rules they need to follow. Use plain language, 
bullet points, and keep it under 150 words.
```

The content request did not change — only the structure around it. That structure is what makes Copilot's response actually usable.

---

## Weak Prompt vs. Strong Prompt

### Example 1 — Writing an email

**Weak:**
```
Write me an email about the AI guideline.
```

**Strong:**
```
Write a professional email to my department head requesting approval 
for a new AI Usage Guideline. The guideline was developed by my team 
over the past two weeks and covers responsible AI use, dos and don'ts, 
and recommended tools. Keep it under 150 words and use a formal but 
approachable tone.
```

---

### Example 2 — Summarising a document

**Weak:**
```
Summarise this document.
```

**Strong:**
```
Summarise this AI Usage Guideline in 5 key points. Focus on the 
practical dos and don'ts. Write it so a team member with no AI 
background can understand it quickly.
```

---

### Example 3 — Analysing data

**Weak:**
```
What does this data show?
```

**Strong:**
```
I have survey responses from 30 staff members about how they have been 
using AI tools over the past month. Analyse this data and highlight the 
top 3 trends, any concerns raised, and recommend one action based on 
the findings.
```

---

### Example 4 — Preparing for a meeting

**Weak:**
```
Help me prepare for my meeting.
```

**Strong:**
```
I have a 30-minute meeting tomorrow with my department head to present 
the AI Usage Guideline for approval. Prepare 5 talking points I should 
cover, 3 objections she might raise, and a suggested response for each 
objection. My department head is detail-oriented and will focus on 
compliance and risk.
```

---

## Prompting Inside M365 Apps vs Copilot Chat

Prompting works slightly differently depending on where you are. Understanding this helps you get better results in each context.

| Where | How Copilot receives your prompt | Best for |
|-------|----------------------------------|---------|
| **Copilot Chat** | Open conversation — you provide all context in the chat | Research, drafting from scratch, multi-turn tasks, comparing outputs |
| **Copilot in Word** | Has access to the open document — reference it with `/` | Rewriting, summarising, reformatting existing content |
| **Copilot in Outlook** | Sees the email thread you have open | Drafting replies, summarising threads, adjusting tone |
| **Copilot in Excel** | Reads the active table or data range | Analysing data, creating charts, writing formulas |
| **Copilot in PowerPoint** | Can reference a Word document via "Create from file" | Building slide decks from existing documents |

**Key difference:** In Copilot Chat you need to provide all the context yourself. In M365 apps, Copilot already has the open document or data as context — so your prompt can be shorter and more direct.

**Example — same task, different location:**

In Copilot Chat:
```
I have an AI Usage Guideline document. It has 7 sections including an 
introduction, approved tools, dos and don'ts, and a data privacy section. 
Suggest 3 ways I could make the Dos and Don'ts section clearer for 
non-technical readers.
```

In Copilot in Word (with the document already open):
```
Suggest 3 ways to make the Dos and Don'ts section clearer for 
non-technical readers.
```

Same outcome — but in Word, Copilot already sees the document so you do not need to describe it.

---

## Iteration: Working With Copilot's First Response

The first response is rarely the final response. Copilot holds the full conversation in context, so you can refine without starting over.

### A typical iteration flow

**Round 1 — Get a first draft:**
```
Draft an introduction for an AI Usage Guideline. Audience: non-technical 
corporate staff. Tone: professional but approachable. Length: 2 short paragraphs.
```

**Round 2 — Adjust what is not right:**
```
Good, but the second paragraph sounds too formal. Rewrite it to be warmer 
and more encouraging — staff should feel this is a helpful resource, 
not a compliance document.
```

**Round 3 — Fine-tune:**
```
Shorten the whole thing to under 80 words without losing the key message.
```

**Round 4 — Sanity check:**
```
Does this introduction clearly tell the reader what the guideline is for 
and why it matters? What is missing?
```

Each follow-up builds on what Copilot already produced. You are editing collaboratively, not starting from scratch each time.

---

## Common Mistakes to Avoid

**Being too vague about the output format.**
If you do not specify a format, Copilot will choose one — and it may not be what you wanted. Always state: table, bullet points, numbered list, paragraph, or a word count.

**Giving Copilot too much to do in one prompt.**
"Write a full proposal, including an executive summary, risk analysis, implementation plan, and budget" will produce shallow content across all sections. Break big tasks into separate prompts and refine each part.

**Accepting the first response without reviewing.**
Copilot can sound confident even when it is wrong. Read the output critically — especially any facts, figures, names, or dates it generated.

**Not giving Copilot a role or perspective.**
"Summarise this" and "Summarise this as a busy senior manager who wants only the most critical points" produce very different outputs. Giving Copilot a perspective sharpens the response.

**Restarting instead of iterating.**
If the response is 80% right, do not delete it and start again. Tell Copilot exactly what to fix: "Keep the structure but rewrite the third paragraph to be more concise."

**Pasting sensitive data.**
Never paste employee names, IC numbers, salary figures, client contracts, or personal details into a prompt — even in a work Copilot session. When in doubt, anonymise before pasting.

---

## Practical Tips

**Be specific about the output format.** If you want a table, say "in a table". If you want bullet points, say so. If you want it short, give a word count.

**Tell Copilot who it's writing for.** "Write this for a non-technical audience" gives very different results from "write this for senior management."

**Use "Act as" to shift perspective.** Tell Copilot to adopt a role: "Act as an HR manager reviewing this policy." This changes how it frames the response — useful for anticipating objections or getting feedback from a different angle.

**Ask Copilot to explain its reasoning.** If you want to understand why Copilot structured something a certain way, ask: "Why did you structure it this way?" or "What assumptions did you make?" This builds your understanding and helps you write better prompts next time.

**Use follow-up questions to go deeper.** After any response, try: "What did you leave out?", "What are the risks of this approach?", or "Give me an alternative version."

---

## Prompts to Try Right Now

```
Explain the difference between Microsoft Copilot (free) and 
Microsoft 365 Copilot (paid) in simple terms. Use a comparison 
table with 4 key differences.
```

```
I am a trainer delivering a 2-day Microsoft 365 Copilot workshop 
to corporate employees in Malaysia. Suggest 5 real-world scenarios 
where Copilot in Outlook would save significant time.
```

```
Act as a sceptical employee who is unsure about using AI at work. 
List 5 concerns you might have, then provide a brief reassurance 
for each one from an employer's perspective.
```

---

*Back to: [01 — Copilot Fundamentals](../01-copilot-fundamentals/) | Next: [03 — Copilot Chat](../03-copilot-chat/)*

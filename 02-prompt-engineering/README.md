# 02 — Prompt Engineering

The quality of what Copilot gives you depends almost entirely on what you give it. This topic covers how to write prompts that get useful, relevant, and accurate results.

---

## The GCSE Framework

A simple framework for structuring effective prompts:

| Element | What it means | Example |
|---------|--------------|---------|
| **G — Goal** | What do you want Copilot to do? | "Write a summary..." |
| **C — Context** | Who are you, what's the situation? | "...for a team of non-technical staff..." |
| **S — Source** | What should it reference or use? | "...based on the attached report..." |
| **E — Expectations** | Format, length, tone, style | "...in 3 bullet points, professional tone." |

You don't need all four elements every time, but the more relevant context you provide, the better the output.

---

## Good Prompt vs. Weak Prompt

### Example 1: Writing an email

**Weak prompt:**
```
Write me an email about the AI guideline.
```

**Strong prompt:**
```
Write a professional email to my department head requesting approval 
for a new AI Usage Guideline. The guideline was developed by my team 
over the past two weeks and covers responsible AI use, dos and don'ts, 
and recommended tools. Keep the email concise — under 150 words — 
and use a formal but approachable tone.
```

---

### Example 2: Summarising a document

**Weak prompt:**
```
Summarise this document.
```

**Strong prompt:**
```
Summarise this AI Usage Guideline document in 5 key points. 
Focus on the practical dos and don'ts. Write it so that a 
team member with no AI background can understand it quickly.
```

---

### Example 3: Analysing data

**Weak prompt:**
```
What does this data show?
```

**Strong prompt:**
```
I have survey responses from 30 staff members about how they 
have been using AI tools over the past month. Analyse this data 
and highlight the top 3 trends, any concerns raised, and 
recommend one action based on the findings.
```

---

## Practical Tips

**Be specific about the output format.**
If you want a table, say "in a table". If you want bullet points, say so. If you want it short, give a word count.

**Tell Copilot who it's writing for.**
"Write this for a non-technical audience" gives very different results than "write this for senior management."

**Iterate, don't start over.**
If the first response isn't right, follow up with corrections. "Make it shorter", "add an example", "change the tone to be more formal" — Copilot holds the conversation context.

**Use "Act as" sparingly but effectively.**
You can tell Copilot to adopt a role: "Act as an HR manager reviewing this policy." This shifts the perspective of the response.

**Ask Copilot to explain its reasoning.**
If you want to understand why Copilot suggested something, ask: "Why did you structure it this way?" or "What assumptions did you make?"

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

*Next: [03 — Copilot Chat](../03-copilot-chat/)*

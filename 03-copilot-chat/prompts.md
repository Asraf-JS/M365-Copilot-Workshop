# 02 — Prompt Engineering: Prompts

Practice writing better prompts using the **GCSE framework** (Goal, Context, Source, Expectations).

---

## Part 1 — Building a GCSE prompt

Work through these in order **within the same chat session**. Each step adds one more element to the same prompt and you will see the output improve at each stage.

**Step 1 — Goal only. Submit this and note the response:**
```
Write a summary.
```

**Step 2 — Add Context. Submit and compare:**
```
Write a summary for a team of non-technical staff.
```

**Step 3 — Add Source. Submit and compare:**

First, paste this paragraph into the chat so Copilot has something to work from:

> *Our AI Usage Guideline covers 7 areas: purpose and scope, approved AI tools, prohibited uses, data privacy rules under PDPA, how to verify AI outputs, how to report issues, and a review schedule. It applies to all staff in our department.*

Then submit:
```
Write a summary for a team of non-technical staff based on the 
AI Usage Guideline information I just shared above.
```

**Step 4 — Add Expectations. Submit and compare:**
```
Write a summary of the AI Usage Guideline information I shared earlier 
for a team of non-technical staff. Cover the 3 most important rules 
they need to follow. Use plain language, bullet points, and keep it 
under 150 words.
```

After all four rounds, ask:
```
Compare the four summaries you just produced in this conversation. 
Which one is most useful and why? What specifically made the difference?
```

---

## Part 2 — Rewriting weak prompts

Read each weak prompt, identify which GCSE elements are missing, rewrite it, then submit both versions to compare outputs.

**Weak:**
```
Write me something about AI.
```

**Weak:**
```
Summarise this.
```

**Weak:**
```
Help me with my email.
```

**Weak:**
```
Give me ideas.
```

**Weak:**
```
Make this better.
```

For each one, ask yourself before rewriting: what is the Goal, who is the Context, what is the Source, and what are the Expectations? You do not need all four every time, but identifying what is missing tells you exactly what to add.

---

## Part 3 — GCSE framework practice

These are fully built prompts using the GCSE framework. Submit them as-is first, then try modifying one element at a time to see how the output changes.

```
I am an HR manager at a 200-person Malaysian manufacturing company. 
Write a short internal announcement (under 120 words) informing staff 
that the company has adopted Microsoft 365 Copilot and will be rolling 
out training next month. Tone: reassuring and positive.
```

```
Act as a sceptical finance director reviewing a new AI Usage Guideline 
for a Malaysian company. List 5 specific questions or concerns you would 
raise before approving it. Focus on financial risk, data security, and 
employee liability. Be practical, not theoretical.
```

```
I need to explain to a non-technical colleague what "prompt engineering" 
means. Write a 3-sentence explanation using an analogy from everyday 
life in Malaysia. Avoid technical jargon entirely.
```

```
I am preparing a 30-minute lunch-and-learn session on Microsoft 365 
Copilot for a team of 15 people in a logistics company. They have 
never used AI tools before. Write a session outline with 4 segments, 
including a hands-on activity. Keep the tone light and practical.
```

**Modification exercise:** Pick any prompt above and change just one element. For example, change the audience, the word count, or the tone. Submit the modified version and compare it to the original output. Notice how a single change can significantly shift the response.

---

## Part 4 — Iteration practice

This exercise runs as a **single conversation**. Do not start a new chat between rounds — Copilot needs to remember what it produced in earlier rounds.

**Round 1 — Get a first draft:**
```
Write a short policy statement on the responsible use of AI at work. 
Audience: all staff. Length: 3 short paragraphs.
```

**Round 2 — Localise it:**
```
Make it more specific to Malaysian workplace culture. 
Add a reference to the PDPA (Personal Data Protection Act 2010).
```

**Round 3 — Shorten it:**
```
Shorten it to under 80 words and make it suitable for a 
company intranet homepage. Keep the PDPA reference.
```

**Round 4 — Add a perspective:**
```
Now rewrite the same statement from the perspective of an employee 
reading it for the first time. What might feel unclear or concerning? 
Suggest 2 improvements based on that perspective.
```

**Round 5 — Final check:**
```
Review the final version of the policy statement. What is missing 
that a complete AI usage policy should cover? List up to 3 gaps.
```

---

## Part 5 — Format control

These exercises focus on controlling output format. Submit each prompt and observe how specifying format changes what you get.

```
List 5 benefits of using Copilot in Outlook. Give the output in 
3 different formats:
1. Bullet points only
2. A numbered list with one-line explanations
3. A table with "Benefit" and "Estimated Time Saved Per Week" columns
```

```
Explain how Microsoft 365 Copilot uses RAG (Retrieval-Augmented 
Generation) to access company data. Give me 3 versions:
1. A 2-sentence plain language summary for a non-technical employee
2. A 5-bullet technical explanation for an IT team
3. A one-line version suitable for a slide title
```

```
Describe the difference between Copilot Chat and Copilot inside 
Word. Format the response as a comparison table with 4 rows covering: 
where you access it, what context it has, best use cases, and 
one limitation.
```

---

## Part 6 — Role and perspective

Using "Act as" shifts how Copilot frames its response. This exercise shows how the same sentence gets reviewed very differently depending on the role you assign.

Submit the base prompt first with no role:
```
Review this sentence from an AI Usage Guideline: "Staff may use any 
AI tool of their choice for work tasks as long as it improves 
productivity." What are the problems with this statement?
```

Then submit it again with each role below, one at a time:

```
Act as a cautious IT security officer. Review this sentence from an 
AI Usage Guideline and flag any security risks: "Staff may use any 
AI tool of their choice for work tasks as long as it improves 
productivity."
```

```
Act as a legal advisor specialising in Malaysian data protection law. 
Review this sentence from an AI Usage Guideline and flag any 
compliance risks under PDPA: "Staff may use any AI tool of their 
choice for work tasks as long as it improves productivity."
```

```
Act as a pragmatic operations manager who wants to roll out AI tools 
quickly. Review this sentence and explain why it is actually a 
reasonable starting point, with one suggested improvement.
```

Compare the four responses. Notice how the same sentence gets framed completely differently depending on who Copilot is "acting as." This is useful for anticipating how different stakeholders will react to something you have written.

---

## Part 7 — Prompting inside M365 apps

These prompts are designed for use **inside specific M365 apps**, not Copilot Chat. They are intentionally short because the app already provides the document or data as context.

> **Before using these:** Make sure you have the relevant content open in the app first. These prompts will not work as intended if submitted in Copilot Chat without providing the source content.

**In Copilot in Word** (open any document first):
```
Summarise this document in 5 bullet points for a senior manager 
who has 2 minutes to read it.
```

```
Rewrite the introduction to be more engaging. The reader should 
want to keep reading after the first paragraph.
```

```
What sections of this document are unclear or could cause 
confusion for a non-technical reader? List them with a 
suggested fix for each.
```

**In Copilot in Outlook** (open an email thread first):
```
Summarise this thread. What has been agreed, what is still 
unresolved, and what action is needed from me?
```

```
Draft a reply acknowledging the feedback and confirming I will 
make the requested changes by end of this week.
```

**In Copilot in Excel** (select a data table first):
```
What are the top 3 insights from this data? 
Highlight anything that stands out as unusual.
```

```
Create a bar chart showing the distribution of responses 
in the Productivity Rating column.
```

---

## Part 8 — Stress testing your prompts

Once you have a response you are mostly happy with, push it further. These follow-up prompts work after any response, in any context.

```
What did you leave out that might be relevant?
```

```
What assumptions did you make when writing this?
```

```
Give me an alternative version with a completely different structure.
```

```
What are the weakest parts of this response and how would you improve them?
```

```
If a critical reader reviewed this, what objections might they raise?
```

```
Rewrite this for a completely different audience: [describe the new audience].
```

---

*Back to: [01 — Copilot Fundamentals](../01-copilot-fundamentals/) | Next: [03 — Copilot Chat](../03-copilot-chat/)*

# 10 — Copilot Studio Intro: Prompts

Use these when building your first agent in **Microsoft Copilot Studio** (copilotstudio.microsoft.com).

---

## Defining your agent's purpose

When setting up the agent description in Copilot Studio:

```
You are a weekly check-in agent for the AI Usage Guideline. Your job is to ask employees one short question about how the AI guideline has helped their work this week, collect their response, and thank them for their input. Keep the conversation brief — no more than 3 exchanges. Be friendly and encouraging.
```

---

## Writing agent instructions

```
You are a helpful AI assistant for employees at a Malaysian company who are learning to use Microsoft 365 Copilot. When someone asks you a question about Copilot, answer clearly and practically with an example. If you are unsure, say so and suggest they check with their IT team or trainer.
```

```
You are the AI Guideline assistant. When an employee asks you whether they can use AI for a specific task, guide them through 3 questions: (1) Does the task involve confidential data? (2) Is the task on the approved list? (3) Have they reviewed the output before using it? Based on their answers, tell them whether to proceed, proceed with caution, or check with their manager first.
```

---

## Writing conversation topics

For your **Weekly Check-in** topic, the agent's opening message:

```
Hi! This is your weekly AI guideline check-in. Just one question: how has using Copilot helped you this week? Share one example — it doesn't need to be long.
```

For an **FAQ topic**, the agent's response to "What can I use Copilot for?":

```
Here are the main approved uses based on our AI Usage Guideline: drafting and editing documents, summarising emails and threads, building presentations from documents, analysing data in Excel, and researching topics using Copilot Chat. For tasks involving client data or financial records, please check the full guideline first.
```

---

## Testing prompts (in the Test panel)

Type these in the test chat to check how your agent responds:

```
weekly check-in
```

```
Can I use Copilot to write a performance review for my staff?
```

```
What should I do if Copilot gives me wrong information?
```

```
Is it safe to paste a client's contract into Copilot?
```

---

## Thinking about what to build next

Use these in Copilot Chat to brainstorm agent ideas for your own workplace:

```
I work in [your department] at a Malaysian company. Suggest 3 practical Copilot Studio agents that could save my team time or reduce repetitive work. For each one, describe what it does, what triggers it, and what action it takes.
```

```
What is the difference between a Copilot Studio agent and a Power Automate flow? When would I use one over the other?
```

---

*Back to: [09 — Copilot in Excel](../09-copilot-excel/) | Return to: [Workshop Home](../README.md)*

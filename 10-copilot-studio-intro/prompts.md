# 10 — Copilot Studio Intro: Prompts

Use these when building your first agent in Microsoft Copilot Studio at [copilotstudio.microsoft.com](https://copilotstudio.microsoft.com/).

> **Prompts to Try:** Open the [copy-paste prompt exercises](./prompts.md) for this topic.

> **Session guide:** Parts 1 and 2 are used inside Copilot Studio to build and configure your agent. Parts 3 and 4 are used in the Copilot Studio test panel to check how the agent responds. Part 5 is used in Copilot Chat to brainstorm future agent ideas.

---

## Part 1 — Create the agent using the chat builder

**Paste this into the chat input on the Copilot Studio home screen to generate the initial agent configuration.**

```
Create a weekly check-in agent for our AI Usage Guideline. 
It should ask employees one question about how the AI 
guideline helped their work this week, collect their 
response, and thank them for their input.

Keep the conversation to 3 exchanges maximum. 
Tone: friendly and encouraging.
Deploy on: Microsoft Teams.
```

If you want to build a different type of agent instead:

```
Create an AI Guideline FAQ agent for employees at a 
Malaysian company. When an employee asks whether they 
can use AI for a specific task, the agent guides them 
through a quick 3-question check and tells them whether 
to proceed, proceed with caution, or check with their 
manager first.
```

---

## Part 2 — Configure the agent instructions

**Use these in the Instructions field in the agent builder configuration screen.**

For the weekly check-in agent:

```
You are a weekly check-in agent for the AI Usage Guideline 
at Nexus Corporate Services. Your job is to ask employees 
one short question about how the AI guideline helped their 
work this week, collect their response, and thank them.

Guidelines:
- Keep the conversation to 3 exchanges maximum
- Be friendly, warm, and encouraging
- Do not ask follow-up questions unless the employee 
  wants to share more
- Confirm clearly that their response has been recorded
- Do not discuss topics unrelated to the AI guideline 
  or Microsoft 365 Copilot
```

For the FAQ agent:

```
You are the AI Guideline assistant for employees at a 
Malaysian company. When an employee asks whether they 
can use AI for a specific task, guide them through 
these 3 questions:

1. Does the task involve confidential or personal data?
2. Is the task on the approved use list in the AI guideline?
3. Has the output been reviewed by a human before use?

Based on their answers, tell them:
- All clear: proceed with AI assistance
- Proceed with caution: explain what to watch out for
- Check with your manager first: explain why

If you are unsure about a specific scenario, say so 
and recommend they contact IT Governance.
```

---

## Part 3 — Writing conversation topics

**Use these when adding or editing a topic in the Copilot Studio topic designer.**

Opening message for the Weekly Check-in topic:

```
Hi! This is your weekly AI guideline check-in. 
Just one question for you today: how has using 
Microsoft 365 Copilot helped you in your work 
this week? Share one example — it does not need 
to be long.
```

Opening message for an FAQ topic:

```
Hi, I am the AI Guideline assistant. I can help you 
figure out whether it is safe to use AI for a specific 
task. Just describe what you are trying to do and I 
will guide you through a quick check.
```

Response when the employee says they are not sure:

```
No problem. Let me ask you a couple of quick questions 
to help you decide. First: does this task involve any 
personal data, such as employee names, IC numbers, 
customer details, or confidential financial information?
```

---

## Part 4 — Testing your agent

**Type these in the Test your agent panel to check how it responds.**

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

```
I need to summarise a report that contains salary data. Can I use Copilot for this?
```

```
What happens if I accidentally enter personal data into Copilot?
```

After each test response, ask yourself:
- Did the agent stay on topic?
- Was the tone appropriate?
- Was the response clear enough for a non-technical employee?
- Did it handle an edge case correctly?

If any response is off, go back to the Instructions field and add a clarification.

---

## Part 5 — Brainstorm future agents

**Use these in Copilot Chat, not in Copilot Studio.**

```
I work in [your department] at a Malaysian company. 
Suggest 3 practical Copilot Studio agents that could 
save my team time or reduce repetitive work. For each 
one describe: what it does, what triggers it, what 
action it takes, and how it would be deployed.
```

```
What is the difference between a Copilot Studio agent 
and a Power Automate flow? When would I use one over 
the other? Give me a practical example of each.
```

```
What knowledge sources can I connect to a Copilot 
Studio agent? How would I ground an agent in our 
company's SharePoint documents so it only answers 
questions based on our internal policies?
```

```
I want to build an agent that automatically sends 
a weekly reminder to staff to complete their AI 
guideline acknowledgement form. What would the 
flow look like and what Microsoft 365 tools would 
it connect to?
```

---

*Back to: [09 — Copilot in Excel](../09-copilot-excel/) | Return to: [Workshop Home](../)*

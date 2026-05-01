# 10 — Copilot Studio: Introduction to Agents

You've used Copilot as a tool that responds when you ask it something. An agent takes that a step further — it can act on your behalf, run on a schedule, and interact with other systems automatically. This topic is an introduction to what agents are and how to build a simple one.

> **Note:** This is an introductory overview. A full Copilot Studio workshop will cover agents in much more depth. The goal here is to understand what agents are and build something simple to see how they work.

---

## Copilot Chat vs. Copilot Agents: What's the Difference?

| | Copilot Chat | Copilot Agent |
|--|-------------|--------------|
| How it works | You ask, it responds | It can act on its own based on triggers |
| Who initiates | You (every time) | You set it up once, it runs automatically |
| Best for | One-off tasks, research, drafting | Repeatable, structured, automated workflows |
| Can it take actions? | Limited | Yes — send emails, update records, post messages |
| Built in | Microsoft 365 Copilot Chat | Microsoft Copilot Studio |

---

## What is Copilot Studio?

Copilot Studio is a low-code platform from Microsoft where you can build custom AI agents. You don't need to write code — you use a visual designer to define what the agent does, when it does it, and how it responds.

You access it at: **copilotstudio.microsoft.com**

---

## Two Ways to Get Agents

### 1. Agents from Copilot Chat
In Copilot Chat, you can find and use pre-built agents by clicking the **Agents** button. These are ready-made agents for common tasks like HR queries, IT helpdesk, and document search.

### 2. Agents you build in Copilot Studio
You build these yourself using the Copilot Studio designer. You define the agent's name, what it knows, what it can do, and how it behaves.

---

## Workshop Scenario: A Weekly Feedback Agent

Connecting back to your AI Usage Guideline project: after collecting the initial survey, you want a way to check in with your team every week without manually sending surveys each time. An agent can do this for you.

The agent you'll build:
- Asks your team members one question per week: "How has the AI guideline helped you this week?"
- Collects their response
- Summarises the responses for you

This is a simple conversational agent, but it shows the core concept.

---

## How to Build a Simple Agent in Copilot Studio

### Step 1: Open Copilot Studio
Go to **copilotstudio.microsoft.com** and sign in with your Microsoft 365 account.

### Step 2: Create a new agent
Click **Create** and select **New agent**. Give it a name like "AI Guideline Weekly Check-in".

### Step 3: Define the agent's purpose
In the description field, enter something like:

```
You are a weekly check-in agent for the AI Usage Guideline. 
Your job is to ask employees one question about how the AI 
guideline has helped their work this week, collect their 
response, and thank them for their input.
```

### Step 4: Add a topic (conversation flow)
Topics define what the agent says and does in a conversation. Create a topic called "Weekly Check-in" with this trigger phrase:

```
weekly check-in
```

Then add the agent's message:

```
Hi! This is your weekly AI guideline check-in. 
Just one question for you today:

How has the AI Usage Guideline helped you in your 
work this week? (Feel free to share one specific example 
or just a general comment.)
```

### Step 5: Test it
Use the **Test your agent** panel on the right side of Copilot Studio. Type "weekly check-in" and see how the agent responds.

### Step 6: Publish and share
Once you're happy with the agent, click **Publish**. You can then share it with your team via Teams or a direct link.

---

## Prompts to Try in Copilot Studio

When defining your agent's instructions, use prompts like these:

```
You are a helpful assistant for employees learning to use 
Microsoft 365 Copilot. When someone asks you a question 
about Copilot, answer it clearly and practically. 
If you don't know the answer, say so and suggest they 
check with their IT team.
```

```
You are a weekly feedback collector for the AI Usage Guideline. 
Your tone is friendly and encouraging. You ask one question, 
listen to the response, and confirm you have recorded it. 
Keep the conversation brief — no more than 3 exchanges.
```

---

## Key Concepts to Remember

**Trigger:** What starts the agent conversation — a keyword, a scheduled time, or a button click.

**Topic:** A defined conversation flow — what the agent says and what it does based on user responses.

**Action:** Something the agent does beyond talking — like saving a response to a SharePoint list, sending an email, or updating a form.

**Knowledge:** Documents or websites you give the agent to reference when answering questions.

**Channel:** Where the agent is deployed — Microsoft Teams, a website, SharePoint, or a custom app.

---

## Where to Go from Here

This introduction covered the basics. A full Copilot Studio workshop would go into:
- Building multi-turn conversations with conditional logic
- Connecting agents to Power Automate for automated actions
- Grounding agents in your company's SharePoint knowledge base
- Publishing agents to Teams for your whole organisation
- Monitoring agent usage and improving performance over time

---

*You have completed the workshop. Well done.*

*Return to: [Workshop Home](../README.md)*

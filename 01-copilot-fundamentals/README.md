# 01 — Copilot Fundamentals

Before we start using Copilot, it helps to understand what it actually is, what you're paying for, and the key terms you'll keep hearing.

---

## What is Microsoft Copilot?

Microsoft Copilot is an AI assistant built into Microsoft 365. It uses large language models (LLMs) to help you write, summarise, analyse, and automate tasks across apps like Word, Excel, Outlook, PowerPoint, Teams, and more.

Think of it as a smart assistant that understands natural language — you describe what you want, and it does the work.

---

## Licensing: What Are You Getting?

There are two main tiers you need to know about:

### Microsoft Copilot (Free / Default)
- Available to anyone with a Microsoft account
- Powered by the web version of Copilot at copilot.microsoft.com
- Can use the internet for research
- Does NOT have deep integration with your Microsoft 365 data (emails, files, calendar, etc.)
- Good for general tasks: summarising, writing, brainstorming

### Microsoft 365 Copilot (Paid — per user licence)
- Requires a Microsoft 365 subscription PLUS a Copilot add-on licence
- Deeply integrated with your Microsoft 365 data — it can read your emails, files on SharePoint/OneDrive, Teams messages, and calendar
- Works inside Word, Excel, Outlook, PowerPoint, Teams, Forms, and more
- Can reference your organisation's documents when generating responses
- This is what we are using in this workshop

> **Key point:** The free version is useful, but the paid version is where the real productivity gains happen because it knows your work context.

---

## Key AI Terminology

You will hear these terms during the workshop. Here's what they actually mean in plain language.

### Large Language Model (LLM)
A type of AI trained on massive amounts of text. It learns patterns in language and uses them to generate responses. Examples: GPT (from OpenAI), Claude (from Anthropic), Gemini (from Google). Microsoft 365 Copilot is powered by GPT models from OpenAI.

### Generative AI (GenAI)
AI that can create new content — text, images, code, summaries — rather than just analysing existing data. Copilot is a generative AI tool.

### Natural Language Processing (NLP)
The technology that allows AI to understand and process human language. When you type a prompt in plain English and Copilot understands what you mean, that's NLP at work.

### Prompt
The instruction or question you give to Copilot. The quality of your prompt directly affects the quality of the output. We will cover this in detail in the next topic.

### Context
The information you provide alongside your prompt. The more relevant context you give Copilot, the better its responses will be. Example: instead of "write me an email", you give it the recipient, the purpose, the tone, and the key points.

### Hallucination
When an AI confidently generates something that is incorrect or made up. This happens because LLMs predict likely responses based on patterns, not because they "know" facts. Always verify important information from Copilot against reliable sources.

### Agentic AI
AI that can take actions on your behalf, not just respond to questions. Instead of just answering "how do I send a meeting invite?", an agentic AI can actually send the invite for you. Copilot Studio agents (covered in Topic 10) are an example of this.

### Retrieval-Augmented Generation (RAG)
A technique where the AI retrieves relevant information from a specific knowledge source (like your company's SharePoint) before generating a response. This is what makes Microsoft 365 Copilot different from a generic chatbot — it can pull from your actual documents.

### Token
The unit of text that LLMs process. Roughly speaking, 1 token ≈ 0.75 words. Models have a limit on how many tokens they can process at once. For practical purposes: very long documents may need to be broken up, and very long conversations may cause the AI to "forget" earlier context.

---

## Summary

| Term | One-line meaning |
|------|-----------------|
| LLM | AI trained on text to understand and generate language |
| GenAI | AI that creates new content |
| NLP | Technology that lets AI understand human language |
| Prompt | Your instruction to the AI |
| Context | Background info you give alongside your prompt |
| Hallucination | When AI generates plausible but incorrect information |
| Agentic AI | AI that takes actions, not just answers questions |
| RAG | AI that retrieves from a specific knowledge source before responding |
| Token | Unit of text processed by an LLM |

---

*Next: [02 — Prompt Engineering](../02-prompt-engineering/)*

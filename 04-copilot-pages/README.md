# 04 — Copilot Pages

Copilot Pages is where your research starts becoming a document. Think of it as a collaborative canvas — you can pull content from Copilot Chat into a live page, edit it, add diagrams, and share it with your team in real time.

---

> **Prompts to Try:** Open the [copy-paste prompt exercises](./prompts.md) for this topic.

---

## What is Copilot Pages?

Copilot Pages is built on top of **Microsoft Loop**. When you generate content in Copilot Chat, you'll see an option to "Edit in Pages" or "Open in Pages." This creates a Loop page that:

- Stays live and editable (you and teammates can edit simultaneously)
- Syncs across Microsoft 365 — if you share it in Teams, people can edit it right there
- Can be exported to Word or PDF when you're done
- Connects to your Microsoft 365 account so changes are saved automatically

---

## Pages vs. Word: What's the Difference?

| | Copilot Pages (Loop) | Microsoft Word |
|--|---------------------|---------------|
| Best for | Collaborative drafting, live editing | Final polished documents |
| Real-time co-editing | Yes | Yes (but less fluid) |
| Copilot integration | Built-in | Built-in |
| Export options | PDF, Word, copy to clipboard | PDF, various formats |
| Feels like | A wiki or Notion page | A traditional document |

Use Pages to build and refine your draft. Use Word for the final version you'll send to your supervisor.

---

## Workshop Scenario: Building Your AI Guide Draft

After your research in Copilot Chat, use Pages to start building the actual structure of your AI Usage Guide.

---

## Prompts for Copilot Pages

### Starting your draft

In Copilot Chat, generate your initial structure and click **Edit in Pages**:

```
Based on my research, create a structured first draft of an 
AI Usage Guide for my department. Include these sections:
1. Introduction and Purpose
2. Scope (who this applies to)
3. Approved AI Tools
4. Dos and Don'ts
5. Data Privacy Rules
6. How to Report Issues
7. Review and Update Schedule

Write each section with placeholder content I can edit. 
Keep the language clear and suitable for non-technical staff.
```

---

### Refining content in Pages

Once your draft is in Pages, use Copilot within the page to refine sections:

```
Rewrite the Introduction section to be more engaging. 
Start with a brief story or scenario that shows why 
having an AI guideline matters.
```

```
The Dos and Don'ts section feels too generic. 
Make it more specific to [your department] and 
include at least 2 examples for each point.
```

```
Add a short FAQ section at the end of the document 
with 5 common questions employees might have about 
using AI at work.
```

---

## Creating a Mermaid Diagram in Pages

Pages supports Mermaid syntax for creating flowcharts and diagrams. This is useful for visualising processes like your AI decision-making workflow.

### What is Mermaid?

Mermaid is a text-based diagramming tool. You write simple text instructions and it renders a visual diagram. No drawing required.

### Example: AI Tool Decision Flowchart

Copy this into a code block in Pages (use the `/` menu and select **Code block**, then choose **Mermaid**):

```
flowchart TD
    A[Need to complete a task] --> B{Does it involve confidential data?}
    B -- Yes --> C[Do NOT use external AI tools]
    B -- No --> D{Is it a routine task?}
    D -- Yes --> E[Use Copilot in M365 apps]
    D -- No --> F{Does it need human judgement?}
    F -- Yes --> G[Use AI to assist, review output carefully]
    F -- No --> E
    C --> H[Use approved internal tools only]
```

### Prompt to generate your own flowchart

```
Create a Mermaid flowchart that shows the decision process 
an employee should follow when deciding whether to use AI 
for a task. Include checks for data sensitivity, approval 
requirements, and output verification. Give me the raw 
Mermaid code I can paste into a code block.
```

---

## Exporting from Pages

When your draft is ready, export it:

1. Click the **...** menu at the top right of your Page
2. Select **Export**
3. Choose **Word document (.docx)** or **PDF**

You'll use the Word export in the next topic to continue working in Copilot in Word.

---

*Next: [05 — Copilot in Word](../05-copilot-word/)*

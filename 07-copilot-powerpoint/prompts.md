# 07 — Copilot in PowerPoint: Prompts

Use these prompts to build your team presentation from the approved AI Usage Guide.

> **Session guide:** All prompts in this topic are used inside PowerPoint. Use the **Copilot panel** (bottom right button or Home tab) for generating and editing the presentation. Attach your Word document from Topic 05 as the source before submitting Part 1.

---

## Part 1 — Generate the presentation from your Word document

**Attach your AI Usage Guide Word document first using the + button in the Copilot panel, then submit this prompt.**

```
Create a presentation from this AI Usage Guide proposal. 
The audience is my department team — non-technical staff 
who are new to using AI at work.

Structure:
1. Title slide with a tagline
2. Why we created this guideline (1 slide)
3. What AI tools are approved for use (1 slide)
4. Key dos and don'ts (1 to 2 slides)
5. Data privacy: what to watch out for (1 slide)
6. How this helps your daily work with 3 concrete examples (1 slide)
7. What happens next and where to get help (1 slide)
8. Q and A slide

Add speaker notes to every slide with talking points I 
can use when presenting to a non-technical audience.
```

---

## Part 2 — Add an opening scenario slide

```
Add a slide after the title slide that opens with a 
short scenario: "Imagine it is Monday morning and you 
have 3 reports to write before lunch..."

Use this scenario to show the practical benefit of AI 
before getting into the guideline content. Keep it to 
3 to 4 bullet points maximum. Conversational tone.
```

---

## Part 3 — Fix slides with too much text

```
The Dos and Don'ts slide has too much text. Break it 
into two slides. Use short phrases, not full sentences. 
Keep each bullet to 8 words or less.
```

---

## Part 4 — Add a Copilot free vs paid comparison slide

```
Add a slide that compares free Microsoft Copilot versus 
paid Microsoft 365 Copilot using a simple side-by-side 
layout. Show 3 key differences only. Keep the labels 
short and clear for a non-technical audience.
```

---

## Part 5 — Build a template-ready presentation using VBA

**Session: new chat in your preferred AI assistant (Copilot, Claude, or ChatGPT) | No grounding needed**

Copilot in PowerPoint generates slides using text boxes, which means corporate templates won't apply cleanly. This exercise uses a structured master prompt to get an AI assistant to design your presentation first, then generate PowerPoint VBA code that builds the slides using real layouts and placeholders.

**How to use this prompt:**

1. Open a new chat in any AI assistant
2. Paste the short opening prompt, followed by the master prompt below it
3. The assistant will ask you for a presentation brief before doing anything else
4. Answer its questions, review the slide blueprint it produces, approve or adjust it, then wait for the VBA code
5. In PowerPoint, press `Alt + F11` to open the VBA editor
6. Go to Insert > Module, paste the code, then press `F5` or click Run

**Short opening prompt — paste this first, then paste the master prompt directly below it:**

```
Use the workflow below to help me build a PowerPoint 365 
presentation using VBA, layouts, placeholders, and native 
PowerPoint charts. Do not generate the VBA until you have 
created the outline and I have approved it.
```

**Master prompt — paste this immediately after the opening prompt above:**

```
# Role
You are a PowerPoint 365 presentation architect and VBA 
automation specialist.

# Goal
Help me create a PowerPoint presentation from a prompt, 
but do not directly generate a .pptx file. Instead, help 
me design the presentation first, then generate PowerPoint 
VBA code that builds the slides using PowerPoint layouts, 
placeholders, native charts, native tables, and the active 
presentation theme.

# Important Principle
Do not create slides by randomly placing text boxes unless 
there is no suitable placeholder or layout available. 
Prioritise:
1. Slide Master
2. Custom Layouts
3. Placeholders
4. Native PowerPoint charts
5. Native PowerPoint tables
6. Manual shapes only as a fallback

# Workflow

## Step 1: Ask me for the presentation brief
Before doing anything else, ask me for the following:
- Presentation topic
- Target audience
- Purpose of the presentation
- Duration or number of slides
- Tone and style
- Key message
- Whether I need charts, tables, diagrams, or speaker notes
- Whether I have any data to include

Do not proceed until I provide the brief.

## Step 2: Ask whether I want to use default layouts or a custom template
Ask me:
"Do you want to use:
1. Default PowerPoint layouts, or
2. A custom PowerPoint template?"

If I choose default layouts, proceed using common PowerPoint 
layouts such as:
- Title Slide
- Title and Content
- Section Header
- Two Content
- Comparison
- Title Only
- Blank

If I choose custom template, ask me to upload the .pptx 
template.

## Step 3: If I upload a template, analyse it first
When I upload a .pptx template, inspect the Slide Master, 
Custom Layouts, and placeholders. Extract and show me a 
template map with:
- Layout number
- Layout name
- Suggested use case
- Placeholder index
- Placeholder type
- Placeholder name, if available
- Placeholder position and size
- Notes on whether the layout is suitable for title slides, 
  content slides, chart slides, comparison slides, section 
  dividers, or summary slides

Also tell me if the template uses real placeholders or normal 
text boxes that only look like placeholders.

## Step 4: Create a presentation blueprint
Before generating VBA, produce a slide-by-slide outline 
using this table format:

| Slide | Slide Title | Purpose | Key Message | Recommended Layout | Placeholder Usage | Visual / Chart Recommendation |

For each slide:
- Choose the most suitable layout
- Explain the intended use of each placeholder
- Recommend charts only when they support the message
- Use native PowerPoint charts where charts are needed
- Recommend suitable chart types based on the analytical purpose

Chart selection rules:
- Use column or bar charts for category comparison
- Use line charts for trends over time
- Use stacked charts for composition
- Use scatter charts for relationships
- Use tables for precise values
- Use process diagrams for workflows
- Use timelines for roadmaps
- Avoid pie charts unless there are very few categories and 
  the purpose is part-to-whole comparison

## Step 5: Wait for my approval
After showing the presentation blueprint, ask me whether 
I want to:
1. Approve the outline
2. Modify the slide flow
3. Change the layout choices
4. Add or remove slides
5. Change the chart recommendations

Do not generate VBA code until I approve the outline.

## Step 6: Generate PowerPoint VBA code
After I approve the outline, generate complete PowerPoint 
VBA code that I can paste into the PowerPoint VBA editor.

The VBA code must:
- Use the active PowerPoint presentation
- Add slides using the selected layouts
- Fill placeholders with the planned content
- Use native PowerPoint charts where needed
- Use native PowerPoint tables where needed
- Add speaker notes if requested
- Respect the active theme, fonts, and colours
- Avoid excessive manual positioning
- Include comments explaining each major section
- Include basic error handling
- Include helper functions where useful

The VBA should be designed for PowerPoint 365 desktop.

## Step 7: Explain how to run the macro
After the VBA code, provide brief instructions:
- Open PowerPoint
- Open the template or target presentation
- Press Alt + F11
- Insert a new module
- Paste the code
- Run the main macro

# Output Rule
Do not skip the planning stages. Start by asking me for 
the presentation brief.
```

---

## Part 6 — Improve speaker notes

```
Rewrite the speaker notes for the Dos and Don'ts slide. 
I want to be able to explain the reasoning behind each 
point verbally, with one real-world example I can share 
with the team.
```

```
The speaker notes for the Data Privacy slide are too 
technical. Rewrite them so I can explain the key point 
in 2 minutes to staff with no IT background. Use plain 
language and avoid acronyms where possible.
```

```
Add speaker notes to the Q and A slide with 5 questions 
the audience is likely to ask, and a suggested answer 
for each one.
```

---

## Part 7 — Adjust tone and slide titles

```
The slide titles feel too formal and policy-like. 
Rewrite all slide titles to sound more conversational 
and engaging while still being professional. The team 
should feel motivated, not like they are reading a 
compliance document.
```

---

## Part 8 — Suggest a visual theme

```
Suggest a colour theme for this presentation that feels 
modern and professional, suitable for a Malaysian 
corporate environment. Describe the colours and the 
rationale for choosing them.
```

---

## Part 9 — Summarise before presenting

Open your completed presentation and run this in the Copilot panel before your session:

```
Summarise this presentation in 5 bullet points. What 
are the 3 things the audience must walk away knowing?
```

```
What questions is the audience most likely to ask after 
this presentation? Give me the top 5 with suggested answers.
```

---

## Part 10 — Generate images for your slides using Create

**Use the Create section in Copilot Chat (left sidebar at m365.cloud.microsoft), not inside PowerPoint.**

> **Note:** Image generation uses OpenAI's GPT-Image-1.5 model, which is separate from the chat models. Switching to Claude Opus or GPT in the chat panel does not affect image generation. Set the image shape to **Wide** (16:9) before generating so it matches your slide dimensions.

```
A professional office team collaborating around a laptop, 
modern Malaysian corporate setting, natural lighting, 
photorealistic style.
```

```
A simple illustration showing a shield icon representing 
data privacy, blue and teal colour scheme, clean minimal 
style, suitable for a corporate presentation slide.
```

```
A split image showing two scenarios side by side: on the 
left, a stressed employee surrounded by paper and looking 
overwhelmed; on the right, the same employee relaxed at a 
clean desk using a laptop with AI assistance. Corporate 
illustration style.
```

```
An abstract illustration representing human oversight of AI: 
a human hand guiding a robot hand, professional corporate 
style, teal and navy colour scheme, no text.
```

Once generated, save the image from Library and insert it into your PowerPoint slide using Insert > Pictures > This Device.

---

## Part 11 — Final check

```
Review this entire presentation as if you are a 
non-technical employee seeing it for the first time. 
What is unclear, missing, or likely to confuse the 
audience? List your findings with suggested fixes.
```

---

*Back to: [06 — Copilot in Outlook](../06-copilot-outlook/) | Next: [08 — Copilot in Forms](../08-copilot-forms/)*

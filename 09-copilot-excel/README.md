# 09 — Copilot in Excel

You've collected feedback from your team through the survey. Now it's time to analyse the results. Copilot in Excel helps you spot patterns, generate charts, and draw conclusions from your data — without needing to write complex formulas yourself.

---

## Sample Dataset

The file `AI_Guideline_Survey_Responses.xlsx` in this folder contains 30 simulated survey responses from employees across different departments. Use this file for the workshop exercises so you don't need to wait for real responses.

The workbook has two sheets:
- **Survey Responses** — all 30 individual responses
- **Summary** — basic summary stats calculated with Excel formulas

---

## What Copilot Can Do in Excel

- Analyse data and surface key insights in plain language
- Create PivotTables and charts from natural language descriptions
- Write and explain formulas
- Highlight patterns, outliers, and trends
- Answer questions about your data directly in the chat panel

---

## Getting Started

1. Open `AI_Guideline_Survey_Responses.xlsx`
2. Click anywhere in the data table
3. Open Copilot from the ribbon: **Home > Copilot**
4. The Copilot panel opens on the right side

> Make sure your data is formatted as an Excel Table (Ctrl+T) before using Copilot. This gives Copilot a clear boundary for the dataset.

---

## Analysis Prompts

### Getting a quick overview

```
Give me a summary of this survey data. What are the 
key findings about how employees are using AI tools 
and how they feel about the AI Usage Guideline?
```

```
What are the top 3 insights from this dataset that 
I should highlight to management?
```

---

### Analysing specific columns

```
Show me the distribution of responses for the 
productivity rating column. How many people gave 
each rating from 1 to 5?
```

```
Which departments gave the highest average 
productivity ratings? Rank them from highest to lowest.
```

```
How does AI tool usage frequency compare across 
different departments? Show this as a chart.
```

---

### Creating charts

```
Create a bar chart showing how often employees 
refer to the AI Usage Guideline, broken down by frequency 
(Never, Rarely, Sometimes, Often, Always).
```

```
Create a pie chart showing which Copilot app 
is most frequently used across all respondents.
```

```
Create a chart comparing average productivity rating 
versus average confidence rating by department.
```

---

### Finding patterns and outliers

```
Are there any departments that seem significantly 
less confident about using AI compared to others? 
Highlight the differences.
```

```
Is there a correlation between how often employees 
refer to the guideline and how confident they feel 
about using AI responsibly?
```

```
Which respondents gave the lowest NPS scores? 
What do they have in common — same department, 
same usage frequency, or similar concerns?
```

---

### Formula help

```
Write a formula to calculate the percentage of 
respondents who said the guideline has changed 
how they approach AI (answered "Yes" or "Somewhat").
```

```
Write a COUNTIF formula to count how many people 
use Copilot in Outlook as their most-used app.
```

```
Create a new column that categorises NPS scores 
as Detractor (0-6), Passive (7-8), or Promoter (9-10). 
Write the formula for this.
```

---

### Generating a narrative summary

```
Based on this survey data, write a short paragraph 
(100-150 words) summarising the overall impact of 
the AI Usage Guideline on employee workflow. 
Write it in a tone suitable for a management report.
```

```
What action would you recommend based on this data? 
Suggest 3 specific improvements to the AI Usage 
Guideline based on the feedback patterns you can see.
```

---

## Tips for Copilot in Excel

- Copilot works best when your data is in a proper Excel Table format with clear column headers.
- If Copilot creates a PivotTable or chart you don't like, ask it to adjust: "Change this to a stacked bar chart" or "Sort this by highest to lowest."
- You can ask Copilot to explain any formula it generates: "Explain what this formula does in plain language."
- Use the **Analyse** button in the Copilot panel for automatic insight suggestions based on your data.

---

*Next: [10 — Copilot Studio Intro](../10-copilot-studio-intro/)*

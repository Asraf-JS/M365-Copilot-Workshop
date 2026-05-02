# 09 — Copilot in Excel: Prompts

Use these prompts to analyse, transform, and visualise your AI Usage Guide quiz response data.

> **Session guide:** All exercises use the same workbook. Open [AI_Guideline_Survey_Responses.xlsx](./AI_Guideline_Survey_Responses.xlsx) in Excel desktop, enable **Allow editing** in the Copilot panel, and work through Exercises 1 to 4 in order. Switch to Claude Opus for best results on analytical tasks.

> **Before you start:** Click on the Quiz Responses sheet and make sure the data is formatted as an Excel Table. If it is not, select any cell in the data and press Ctrl+T to convert it.

---

## Exercise 1 — Generate insights and an insights dashboard

**Mode: Allow editing | Recommended model: Claude Opus**

This is the main exercise. You are asking Copilot to analyse the entire dataset and produce a summary dashboard in a new sheet.

### Part 1A: Generate the insights dashboard

```
Analyse this workbook to uncover meaningful and interesting 
data insights. Include the 3 most important insights, 
findings, or takeaways, including a visualisation to help 
illustrate or clarify a finding. Next, ask me questions to 
clarify what I am interested in learning or suggest steps 
for deeper analysis. Insert the summary in a new sheet.
```

> This is the same prompt shown in the sample dashboard screenshot. Copilot will reason through the data and build a new sheet with KPIs, tables, and a chart. It may take 30 to 60 seconds.

### Part 1B: Follow-up questions after the dashboard is created

```
What is the overall pass rate and average score across 
all 100 respondents? Show the results as KPI cells at 
the top of the dashboard.
```

```
Which department has the highest pass rate and which 
has the lowest? What is the gap between them?
```

```
Which 3 questions had the lowest accuracy rates across 
all respondents? What do these questions have in common?
```

```
Add a bar chart comparing average score by department. 
Sort the bars from highest to lowest average score.
```

### Part 1C: Improve the dashboard

```
The dashboard needs a title. Add a clear title row at 
the top that says "AI Usage Guide Quiz — Key Insights 
Dashboard" and a subtitle that says "Analysis of 100 
respondents across 8 departments — 20 questions on AI 
policy awareness".
```

```
Colour-code the pass rate column in the department table: 
green for 75% and above, amber for 60% to 74%, and red 
for below 60%.
```

---

## Exercise 2 — Data transformation and cleaning

**Mode: Allow editing | Sheet: Quiz Responses**

This exercise adds calculated columns to the raw data so it is easier to analyse.

### Part 2A: Add a Score column

```
Add a new column called "Score" after the Department 
column. For each row, count how many of the 20 question 
columns contain the correct answer.

The correct answers are in the Answer Key sheet. 
Use a formula that counts matching answers across 
columns G to Z for each row.
```

If Copilot needs guidance on the correct answers:

```
The correct answers for each question are:
Q1: To enable safe and consistent adoption of AI tools
Q2: Microsoft 365 Copilot
Q3: Personal data, IC numbers, and confidential business information
Q4: The employee who used the AI tool
Q5: Review and verify it before use
Q6: Entering customer personal data into the tool
Q7: Stop and seek guidance from your manager or IT
Q8: Review, test, and get approval before use
Q9: AI output must always be reviewed before use
Q10: Annually
Q11: IT Governance department
Q12: Report to IT Governance and line manager
Q13: Entering personal data of employees into AI tools
Q14: Verify them against the original source
Q15: All permanent, contract, and temporary staff
Q16: Ensure it has been reviewed and approved by a responsible person
Q17: Data privacy and security risks
Q18: Discard the output and redo the task manually or with guidance
Q19: Automatically making decisions based on AI recommendations
Q20: Use AI to assist, then verify findings before acting

Add a Score column that counts how many of these correct 
answers each respondent gave.
```

### Part 2B: Add a Pass/Fail column

```
Add a column called "Pass/Fail" next to the Score column. 
Mark each respondent as "Pass" if their score is 14 or 
above (70%), and "Fail" if it is below 14.
```

### Part 2C: Add a Percentage column

```
Add a column called "Score %" next to Pass/Fail. 
Calculate each respondent's score as a percentage of 20. 
Format the column as a percentage with one decimal place.
```

### Part 2D: Add a Completion Time column

```
Add a column called "Duration (mins)" that calculates 
how long each respondent took to complete the quiz. 
Use the Start time and Completion time columns. 
Round to one decimal place.
```

### Part 2E: Check for data issues

```
Review the data in this sheet for any issues: 
missing values, duplicate entries, inconsistent 
department names, or any outliers in completion time. 
Report what you find without making changes yet.
```

---

## Exercise 3 — Pattern analysis and weak area identification

**Mode: Allow editing or Chat only | Sheet: Quiz Responses or Summary**

### Part 3A: Department comparison

```
Compare quiz performance across all 8 departments. 
For each department show: number of respondents, 
average score out of 20, pass rate as a percentage, 
and rank from highest to lowest pass rate. 
Create this as a formatted table in a new sheet 
called "Department Analysis".
```

```
Which departments should be prioritised for additional 
AI training based on these results? Justify your 
recommendation with specific data points.
```

### Part 3B: Question weakness analysis

```
For each of the 20 questions, calculate how many 
respondents answered correctly and express it as 
a percentage. Identify the 5 questions with the 
lowest accuracy rates. What topics do these questions 
cover and what does this suggest about gaps in 
staff understanding?
```

```
For the 3 weakest questions, suggest one training 
intervention for each that could improve staff 
understanding of that specific policy point.
```

### Part 3C: Cross-analysis

```
Is there a correlation between how long respondents 
took to complete the quiz and their score? Do faster 
respondents score higher or lower on average?
```

```
Which department had the most consistent scores 
(lowest variation between respondents) and which 
had the most inconsistent? What might explain 
the difference?
```

---

## Exercise 4 — Python in Excel

**Mode: Allow editing | Sources: Python Tool must be enabled**

> **Before starting:** Click the sources icon in the Copilot panel and make sure the **Python Tool** toggle is turned on.

### Part 4A: Score distribution chart

```
Use Python to create a histogram showing the 
distribution of quiz scores across all 100 respondents. 
Use the Score column. 
Include: a title "Score Distribution — AI Usage Guide Quiz", 
x-axis label "Score out of 20", y-axis label "Number of Respondents", 
and colour the bars using a teal colour scheme. 
Insert the chart into the workbook.
```

### Part 4B: Department performance heatmap

```
Use Python to create a heatmap showing question 
accuracy by department. Rows should be departments, 
columns should be question numbers 1 to 20. 
Colour cells green for high accuracy and red for 
low accuracy. This will show which departments 
struggle with which specific questions. 
Insert the chart into the workbook.
```

### Part 4C: Pass/Fail breakdown chart

```
Use Python to create a stacked bar chart showing 
Pass and Fail counts for each department side by side. 
Use green for Pass and red for Fail. 
Add data labels showing the count in each bar segment. 
Title: "Pass vs Fail by Department". 
Insert the chart into the workbook.
```

### Part 4D: Explain the Python code

```
Show me the Python code you used to generate the 
score distribution histogram. Explain each part 
of the code in plain language so I can understand 
what it does and modify it if needed.
```

---

## Exercise 5 — Management summary

**Mode: Allow editing | Recommended model: Claude Opus**

Once your analysis is complete, ask Copilot to write a summary suitable for management.

```
Based on all the analysis in this workbook, write a 
management summary of the quiz results. Include:
- Overall pass rate and average score
- Top performing department and why it stands out
- Department that needs the most support and a 
  specific recommendation
- The 3 questions with the lowest accuracy rates 
  and what training gap they reveal
- One recommended next step for the organisation

Write it in a professional tone suitable for a 
department head report. Keep it under 200 words. 
Insert it as a formatted text block in a new sheet 
called "Management Summary".
```

---

*Back to: [08 — Copilot in Forms](../08-copilot-forms/) | Next: [10 — Copilot Studio Intro](../10-copilot-studio-intro/)*

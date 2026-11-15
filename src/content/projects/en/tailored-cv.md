---
title: An agent that tailors your CV to each job without making anything up
kicker: tailored-cv · Open source · AI agents
summary: Skills for Claude Code and OpenCode that tailor your CV and cover letter to each job posting and build ATS-optimized PDFs. They work from a professional profile that grows with use. They also record and transcribe interviews on your machine to prepare the next one.
order: 6
size: small
status: Open source
role: Design and development (personal project)
period: Sep 2026 — now
stack: [Claude Code, OpenCode, Agent skills, Markdown, Node.js, Headless Chrome, Python, Whisper, uv]
outcome: { value: '100%', label: 'local for interview audio' }
link: { href: 'https://github.com/theviderlab/tailored-cv', label: 'GitHub repository' }
shots:
  - { src: tailored-cv/cover, label: 'Job posting and tailored CV as PDF' }
  - { src: tailored-cv/questions, label: 'The agent asks about what is missing from the profile' }
  - { src: tailored-cv/prep, label: 'Interview prep sheet' }
---

## The problem

Tailoring your CV to every posting takes time, and if you skip it, ATS filters drop the application before a person reads it. Asking a generic LLM to do it has a different problem: it fills the gaps by inventing experience you don't have.

## The core idea

A **professional profile that grows with use** and acts as the source of truth. When a posting asks for something that is not on record, the agent asks you, saves the answer with its source and date, and reuses it in future applications. Every fact in the CV comes from the profile or from something you confirmed. What you said you don't know is recorded too, so it is not asked again.

## How it works

1. **Reads the posting** from a link or pasted text.
2. **Matches it against your profile** and classifies each requirement: on record, a known gap, or unknown.
3. **Asks you about anything unclear** in a single message and saves your answers to the profile.
4. **Writes the tailored CV and cover letter**, shows you what changed and where each fact comes from, and builds the PDFs once you approve.
5. **Logs the application** and warns you if you already applied to that company.

## What's included

- **cv-tailor:** tailors the CV and cover letter to a posting and builds the PDFs.
- **profile-audit:** reviews the profile against ATS best practices (dates without months, achievements without metrics, unexplained acronyms) and asks you what it needs to fix them.
- **interview:** records the interview (your microphone and the call audio on separate tracks), transcribes it on your machine with Whisper and reviews your answers. It feeds a **question bank** grouped by what each question tests, with the history of how you answered it. With `/interview prep` it estimates which questions are most likely for that role and stage, and puts the ones you answer worst first.
- **Markdown to PDF build** with Node and headless Chrome or Edge: single column, selectable text, no tables or images that confuse an ATS.

## Design decisions

- **Skills instead of an app.** The logic is instructions for the agent and the data is Markdown files. There is no database or UI to maintain, and you can read and edit the profile by hand.
- **Privacy by design.** Interview audio never leaves your machine: only the transcript reaches the model. Your data lives in `workspace/`, outside the repository, and can be versioned as a separate private repo.
- **A safety net against leaks.** A pre-commit hook blocks any commit to the tool's repo that includes workspace files or text matching your personal details.
- **Multilingual.** The agent talks to you in your language, the profile is kept in English and the CV follows the language of the posting. PDF headings come from an extensible translations file.

## Getting started

Requirements: Node 18+ and Chrome or Edge.

```sh
git clone https://github.com/theviderlab/tailored-cv.git
cd tailored-cv
cp -r workspace.example workspace
cd cv && npm install
```

Open the project with Claude Code and ask *"build my profile from this CV"*, pasting your CV, or go straight to:

```
/cv-tailor https://www.linkedin.com/jobs/view/1234567890
```

Interview recording is optional, runs on Windows and requires [uv](https://docs.astral.sh/uv/). Details are in the [repository README](https://github.com/theviderlab/tailored-cv#readme).

---
sidebar_position: 1
---

# How to Contribute

## Setting Expectations

We're laser-focused on two things:

1. Helping minimalists manage their schedule and focus, so they can do more of what matters
2. Being profitable, so that we can continue doing #1 for decades

We're only accepting contributions that help us reach those goals. If you submit a PR that doesn't align with our goals, it will be rejected. The best way to avoid this scenario is to confirm that your proposed changes align with our priorities. You can verify this by reviewing the [Roadmap](../roadmap.md) and timeline (more links and details on how to do this below).

If these goals align with your own, we'd love to work with you!

### What's in it for you

🚀 **Experience**

Working on Compass gives you unique experience that you won't get anywhere else.

**Meritocracy**: Compass operates on outputs, not resumes or locales. An Ex-Googler in SF gets the same treatment as someone in Mongolia who just learned HTML; We only care about the quality of the work you can produce.

**Fullstack**: Since this is an open-source monorepo, you can get experience getting things to work end-to-end without silos. This'll help you become a true fullstack engineer.

**Transparency**: Code isn't the only thing that we're transparent about. We publish our [handbook](https://compasscalendar.notion.site/), roadmap, technical guides, and lessons-learned across our repos and social media. Working in an open culture will give you more opportunities to grow as an engineer and leader.

🏆 Recognition (GitHub, changelogs, etc)

What may be offered after consistent excellence\*:

- 📝 Reference for your next job
- 📈 Compensation
- 📈 Preference for future opportunities @ Switchback (the company behind Compass)

\*These are the criteria we use to assess the quality of your work. If you don't meet these criteria, we may reject your PR.

1. **Code quality**: Is the code readable, well-organized, and testable? Does it follow best practices? Does it provide good UX?
2. **Expertise**: Does your work reflect your skill level? Did you need a lot of technical guidance in order to get started? Were you able to make good judgments about the requirements and implementation?
3. **Communication**: If you got blocked, did you reach out for help? Did you communicate your plans and progress clearly? Are your commits, PR descriptions, and comments easy to understand?
4. **Reliability**: Did you submit your PR, update based on comments in a timely manner? If something came up that prevented you from completing a PR on time, did you let us know?

## Workflows

### 🏁 You're ready to pick up a new task

1. Review the [roadmap](../roadmap.md) to confirm that the issue you'd like to work on is aligned with our goals
1. Review [the quarterly backlog](https://github.com/orgs/SwitchbackTech/projects/4/views/8). This is the view that shows each important issue by the quarter it's planned for.
1. Review [the timeline](https://github.com/orgs/SwitchbackTech/projects/4/views/7) to confirm that you could finish the issue you'd like to work on before its deadline.
1. If this is your first time contributing, pick an issue in the `Ready` state for the _next_ quarter that has a `Good first issue` tag. Working on an issue in the next quarter gives you time to familiarize yourself with the codebase while still working on a priority change. It also gives us the chance to assess the quality of work and your reliability before giving you more responsibility.
1. Find an issue you'd like to work on. _If you can submit a PR for it before the `End` date assigned to it_: ask to have the issue reassigned to you in the issue comments. If you can't finish it on time, find another issue in the next quarter that you could.
1. Ask any clarifying questions in the issue thread.
1. Start working on the issue. (If you're a new contributor, we will NOT assign the issue to you before a PR is submitted. This helps us avoid holding an issue for an extended period of time.)
1. Fork the repository
1. Create a new branch with a descriptive name
1. Make your changes, following the [coding conventions](./convention-guide.md)
1. Manually test your changes. See the [testing guide](./testing-guide.md) for more info on how to do this sufficiently.
1. Push your branch to your fork
1. Create a pull request
1. Link the PR to the issue it solves by including the issue number in the PR description and using a [closing keyword](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/using-keywords-in-issues-and-pull-requests#linking-a-pull-request-to-an-issue). For example: `Fixes #123`
1. Wait for feedback. You can continue this process with another issue while waiting for feedback.

### 🐞 You found an undocumented bug

- If the bug is a security vulnerability, please [report it here](https://github.com/SwitchbackTech/compass/security).
- Ensure the bug was not already reported by searching under the issues
- If it's a new bug, open a new issue, including as much relevant information as possible.

### ☝️ You want to add a new feature or dramatically change an existing one

Larger features or changes that are not already on our [Roadmap](../roadmap.md) or in the backlog will most likely be rejected. If you're unsure, open a GitHub issue before you start working. This will help ensure that your work is aligned with the project's goals and that you don't spend time on something that won't be prioritized.

### 💅 You fixed whitespace, formatted code, or made a purely cosmetic patch

Changes that are cosmetic in nature and do not add anything substantial to the stability, functionality, or testability will generally not be accepted.

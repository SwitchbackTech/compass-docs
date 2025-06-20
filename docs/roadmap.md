# ️ Roadmap

This roadmap was created to help us prioritize. Refer back to this whenever you’re uncertain about what is most important.

## 2025 Focus: Profitability

2021 - 2023 was spent building core functionality and wasting time on side quests. 2024 was a recovery year, where I restocked resources and tried to step away from the project before recommitting to it in Q4.

Everything will come together in 2025. We’ll use the foundational code, the lessons-learned, the user feedback, and many hours of focus to make life better for our users. In return, they’ll give us money — enough to cover our expenses and still reinvest into improving the app.

2025 will be our coming-of-age, where Compass grows from a cute side project into a tool that people trust with their most valuable asset — their time.

### Decision Making Process for New Features

We're delivering a minimal MVP and charging for it, so we need to be very selective about what we commit to in the meantime.

```mermaid
flowchart TD
    A[Feature] --> B{Right Action,<br>Right Time?}
    B -- No --> C[Ignore it]
    B -- Yes --> D{Is it a small<br>feature/bug?}
    D -- Yes --> E{Is it an<br>emergency?}
    E -- Yes --> F[Fix it]
    E -- No --> G[Defer it]
    G --> H[Backlog<br>to be prioritized later]
    D -- No --> I[Defer it]
    I --> H

```

## Quarterly Focus

Each quarter has a theme. At the end of each quarter, I will email users explaining what we did and encouraging them to try it out.

### Q1: Make it good enough to use

Before adding differentiating features, we need to make sure we’re doing the basics well. Refine the core functionality necessary for basic calendaring: viewing, creating, editing, and deleting events. By the end of March, doing those activities in Compass will be bug-free and feel smooth. Early adopters should think,

> “Wow, this actually feels pretty good. It doesn’t have all the bells and whistles, but it does the basics well. I guess I don’t need all the fancy features, so I’ll give this a shot for a bit.”

The code that makes that possible will also be of high quality, so we can quickly build upon it this year.

Below is a sample of work that’ll help us achieve this theme.

| ISSUE                                          | POSSIBLE SOLUTION                                                       |
| ---------------------------------------------- | ----------------------------------------------------------------------- |
| Too jumpy when DND, resizing, dragging         | Add snapping algorithm, replace DND library, reduce unnecessary renders |
| Events are hidden behind each other            | Add overlapping algorithm                                               |
| Recurring events are missing                   | Add recurring events to UI (readonly at first, then editable)           |
| Too much work to accurately tag events quickly | Add actions menu for tagging after right-clicking event                 |
| Too much work to delete events                 | Add shortcut for deleting events                                        |

**January**: Focus on quick wins and smoothing our process.

- Muhammed: focus on quick wins and understanding the mental models behind the app. Pick up increasingly difficult issues, focusing on core features.
- Tyler: initially focus on unblocking Muhammed through quick reviews, messages, documentation, and process improvements. Then take on small issues, focusing on CI and secondary features.

**February**: Write and ship. Focus on steady progress and staying disciplined. By the end of February, Compass will work for minimal usage.

**March**: Keep pushing the first two weeks. Then shift to wrapping up stories, fixing outstanding bugs, and making sure the app is ready for more usage. Send the Q1 email.

---

### Q2: Make it good enough to pay for

At this point, we’ll have a solid, but minimal UX. Thanks to the email, we’ll also have more user feedback. Now it’s time to deliver even more value by adding new capabilities. These will solidify Compass as part of their daily routine, which will justify us requiring payment to use.

We will start by improving one of our existing core features: the someday list.

Then we'll ship proof-of-concepts for new features, listen to feedback, and iterate quickly.

**April**:

- Muhammed: Build upon the someday event feature. (This is an existing feature that we’ll make better.)
- Tyler: Quickly fix high-priority bugs that users found

**May**:

- Tyler: reach out to users to get early feedback on new features and determine the right pricing structure (freemium vs trial) and tiers.
- Muhammed: Improve features based on feedback

**June**:

- Muhammed: Improve features based on feedback.
- Tyler: add pricing to app and reach out to users directly to test the pitch. Send Q2 email.

---

### Q3: Make it good enough to love

Listen to the feedback that our existing users provided. Give them what they asked for (mostly), and get them to love the product.

**July, August:**

- Muhammed: Improve based on user feedback. These may involve improving the new features, scrapping them and adding alternatives, or adding more basic calendar capabilities.
- Tyler: Get feedback on the product and price, iterate on the pitch, update the landing page accordingly. Help with miscellaneous code fixes and support.

**September**:

- Muhammed: Shift to bug fixes and solidifying the foundation the last two weeks.
- Tyler: QA, support, miscellaneous fixes. Send Q3 release email.

---

### Q4: Make it good enough to share

We will have shipped at least two big features, established revenue, and gotten a lot of feedback at this point. We’ll double-down on what’s working and drop what isn’t.

This will solidify the confidence users have in our product and ability to keep improving quickly. They will start referring others to our app. This referral base and our more vocal marketing will result in more usage and conversions. As a result, we’ll have more revenue than expenses and set ourselves up to help users even more in 2026.

**October, November:**

- Muhammed: Focus on improving what’s working and ignoring/removing what isn’t. Fix any underlying foundational issues that’ll slow us down.
- Tyler: Unblock Muhammed. Support, QA, miscellaneous code fixes.

**December:**

- Muhammed: Iterate based on feedback. Start getting ready for another developer through clean up, documentation, and foundational bug fixes.
- Tyler: Support, minor bug fixes. Budget, create 2026 roadmap, invest in more staff and better infrastructure. Send Q4 release email.

## Anti-Priorities

These things are not important in 2025. We will not invest our time in these efforts in 2025.

**Creating a mobile or desktop app.** More platforms means more complexity and slower iterations, so wait until users tell us these are important.

**Getting feature-parity with existing calendars.**
Google Calendar, Notion Calendar, Vimcal, Outlook - these apps are directed towards consumers who don’t want to pay and business users who have companies that will pay for them. Compass is focused on this niche user base in 2025: productivity enthusiast consumers who want minimal features and are happy to pay for quality, even if the product is immature.

**Changing our tech stack.** The first lines of Compass code were written in 2021, so some of the tools we use are already out-dated. Switching to more modern, popular tools like Next.js, Remix, Tailwind, Vite, React Query, etc. would undoubtedly make the Compass codebase and product better ... eventually. Unfortunately, we don't have the resources to make a big DX investment that doesn't help us reach profitability in 2025. We are capable of delivering value to our users with our current stack, so we are not going to dramatically change our tools in 2025. We will focus on making changes that help us reach profitability in a way that is reasonably clean and understandable, so that we can more easily migrate to tools in the future.

In 2026 we'll have enough profit to hire more developers and consider rewriting the app in a new framework.

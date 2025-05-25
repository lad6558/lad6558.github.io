---
title: Miso - AI Inbox that Learns Your Preferences
description: A personalized email client that uses ML to hide emails you are not interested in. Miso soup, anyone?
date: '2025-05-25'
published: true
image: '/blogs/miso/inbox.png'
---

<aside>
(This is more of a portfolio than a blog. The writing is more dry than usual.)
</aside>

Technologies: Svelte, Tauri, TailwindCSS, SQLite, ChatGPT

#### Video Walkthrough

<iframe width="560" height="315" src="https://www.youtube.com/embed/Y9ss-FurtBc?si=orC9JTkeyxB8bbgX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

#### Story

After [Chengyuan](https://danglingpointer.fun/about) and I built [DormSoup](/blogs/dormsoup), a lot of people told me they would like to have some LLMs in their personal inboxes. You see, DormSoup is an LLM sitting on a public machine parsing through dormspam emails, but students receive many more emails from other mailing lists containing all sorts of events they may or may not be interested in, and sorting through all these events manually is a pain. They want something that parses through these emails and tells them what are the events (departmental talks, workshops, performances) they are probably interested in based on their past preferences.

And I thought, why stop at events? We receive so many emails per day, many of them we are completely not interested in, but we don't want to unsubscribe because we are either too lazy or afraid of missing out on something important. Why can't we have AI to parse not just events, but all emails, to show us only the emails that we are probably interested in?

And so MISO the <span style="color: #f59e0b;">M</span>a<span style="color: #f59e0b;">I</span>l <span style="color: #f59e0b;">S</span><span style="color: #f59e0b;">O</span>rter was born. (It is like DormSoup, but MisoSoup)

So, how does it work?

#### Onboarding Calibration

You start by swiping right on emails you want to see and swiping left on emails you don’t. Behind the scenes, a lightweight ML model stores your preferences using vector embeddings. It’s pretty simple—but surprisingly effective. We were honestly impressed by how quickly it learned our tastes.

<figure>

![Onboarding View](/blogs/miso/sorter.png)

<figcaption>
Users onboard by labeling what emails they want to see (swipe right) and do not want to see (swipe left) to teach the AI their preferences. The model then starts making predictions. In this case: a seminar about computational neuroscience — probably not interested (19%).
</figcaption>
</figure>

#### Inbox Buckets

Once trained, your inbox view splits emails into three categories:

- **Time-sensitive:** Needs attention soon, usually within 24 hours
- **Non-time-sensitive:** Fine to check later, like weekly digests
- **Hidden:** Low-interest emails, filtered out (cutoff: 30% interest score)

<figure>

![Inbox View](/blogs/miso/inbox.png)

<figcaption>
After onboarding, Miso automatically hides emails you're unlikely to care about. The inbox is split into time-sensitive, non-time-sensitive, and hidden tabs. ChatGPT handles time sensitivity; the embedding model handles interest prediction. You can navigate with shortcuts (J/K, Q/E), inspired by Superhuman.
</figcaption>
</figure>

You can reclassify any email manually at any time. Hit `Q` to say “don’t want this,” `E` for “want to see.” Time sensitivity is LLM-powered. The interest score is embedding-based. Together, they give you a surprisingly clean inbox.

#### Just a Proof-of-Concept

This is still a prototype—very hackathon-style. Everything was built in 2 days with Cursor and Claude 4. We originally wanted to build a full-featured email client… and realized that’s a rabbit hole.

So we focused on what actually matters: hiding what you don't want to see, surfacing what you want to see.

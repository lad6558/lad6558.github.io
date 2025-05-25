---
title: Miso - AI Email Client
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

#### Screenshots

<figure>

![Onboarding View](/blogs/miso/sorter.png)

<figcaption>
Users onboard by labeling what emails they want to see (swipe right) and do not want to see (swipe left) to teach the AI their preferences. We predict the probability the user wants to see a certain email, called "Interesting Score".
</figcaption>
</figure>

![Inbox View](/blogs/miso/inbox.png)

<figcaption>
After onboarding, emails that the users don't want to see are automatically hidden. ChatGPT divides potentially interesting emails into time-sensitive and non-time-sensitive buckets.

</figcaption>

#### Story

After [Chengyuan](https://danglingpointer.fun/about) and I built [DormSoup](/blogs/dormsoup), a lot of people told me they would like to have some LLMs in their personal inboxes. You see, DormSoup is an LLM sitting on a public machine parsing through dormspam emails, but students receive many more emails from other mailing lists containing all sorts of events they may or may not be interested in, and sorting through all these events manually is a pain. They want something that parses through these emails and tell them what are the events (departmental talks, workshops, performances) they are probably interested in based on their past preferences.

And I thought, why stop at events? We receive so many emails per day, many of them we are completely not interested in, but we don't want to unsubscribe because we are either too lazy or afraid of missing out on something important. Why can't we have AI to parse not just events, but all emails, to show us only the emails that we are probably interested in?

And so MISO the <span style="color: #f59e0b;">M</span>a<span style="color: #f59e0b;">I</span>l <span style="color: #f59e0b;">S</span><span style="color: #f59e0b;">O</span>rter was born. (It is like DormSoup, but MisoSoup)

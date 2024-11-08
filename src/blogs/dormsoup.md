---
title: DormSoup - GPT-Powered Eventbrite
description: A ChatGPT-powered campus event website that parses emails into time, locations and tags, totaling ~960 MIT student users.
date: '2024-08-20'
published: true
image: '/blogs/dormsoup/loading.gif'
---

<script>
    import Tooltip from "./Tooltip.svelte"
</script>

<aside>

(This is more of a portfolio than a blog. The writing is more dry than usual.)

</aside>


Website link: [dormsoup.mit.edu](https://dormsoup.mit.edu) (needs MIT kerb to access)

Technologies: React, Next.js, TailwindCSS, PostgreSQL, ChatGPT

GitHub links: [frontend](https://github.com/DormSoup/dormsoup), [backend](https://github.com/DormSoup/dormsoup-daemon)

#### Screenshots

<figure>

![Main view of website](/blogs/dormsoup/mainview.jpeg)

<figcaption>
The main view of the website. You can filter events by tags, e.g. "free food". 
</figcaption>
</figure>

<figure>

![Click open event details](/blogs/dormsoup/detail.jpeg)

<figcaption>
You can click to see the original email, with options to save the event or add it to your calendar.
</figcaption>
</figure>

#### Story

At MIT, students advertise campus events by sending emails to dorm mailing lists, called "dormspams." These emails are all over the place, making it hard to quickly figure out what's happening tomorrow or which events have free food. There are official event websites, but no one really posts there.

When ChatGPT came out, I thought, instead of hoping students would change their habits, we could take the emails they were already sending and automatically upload the events to a website. I shared the idea with my friend Chengyuan, and we both got excited.

We set up a Notion workspace, made a to-do list, and got to work. That summer, we'd come home from our internships, hop on Zoom, and do three hours of pair-programming. Chengyuan worked on the database, search, and connecting to the email inbox, while I worked on the UI, prompt engineering, and talking to Fiverr artists to iterate on designs for our logo and loading screen GIF.

<figure>

![loading animation where spams hop into a bowl](/blogs/dormsoup/loading.gif)

<figcaption>
Why the name DormSoup? Spam is a type of meat and our website stirs dormspams into an edible format. It is not a reference to the Beautiful Soup Python library, though I like that interpretation as well.
</figcaption>
</figure>

Playing around with LLMs was fun, but it wasn't always easy. One of our first problems was getting GPT-4 to figure out the datetime from emails correctly. It usually got the date right but always defaulted to 12:00 AM for the time. We fixed that by using chain-of-thought: extract the time of day first, then the date, then put them together.

Tagging events was another tricky part—GPT-4 would sometimes hallucinate and make up tags that didn't exist. So, we made a multi-stage pipeline where it first summarizes the event, then explains why it should or shouldn't have each tag, and finally gives us the tags. We even had it do this three times and then picked the tags that showed up in all three runs, just to be sure. To save money, we used GPT-3.5 to check if an email actually had an event, and then let GPT-4 handle the details like time and location.

In the end, we were glad we went with LLMs. There was another group trying to use Regex to do the same thing, but their progress was much slower because emails, being so unstructured, defy traditional parsing.

<figure>

![Number of users by time](/blogs/dormsoup/stats.png)

<figcaption>
At the time of writing (Aug 2024), we helped 959 users find the events they were looking for, the peak being the start of the school year. This year we plan to do more marketing. Hopefully that brings more!
</figcaption>
</figure>

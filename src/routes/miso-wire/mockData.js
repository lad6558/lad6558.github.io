const texts = [
    `
Architectural and compiler support for accelerating embedding operations on general purpose processors

Speaker: Marco Siracusa and Olivia Hsu
Speaker Affiliation: Barcelona Supercomputing Center (BSC)
Host: Professor Joel Emer
Host Affiliation: CSG - CSAIL - MIT

Date: Wednesday, February 28, 2024
Time:  4:00 PM to 5:00 PM

Location: 32-G449


Abstract:
Feature embeddings let you transform categorical features (e.g. words) into numerical vectors that can be processed with Deep Neural Networks. This processing is implemented by looking up large embedding tables that store all the embedding vectors of all categorical features. Thus, embedding lookups are a fundamental operation in several machine learning applications such as large language models and recommender systems. However, off-the-shelf processors are not optimized to efficiently gather embedding vectors from scattered memory locations. More recent designs have proposed a specialized near-core engine that decouples irregular memory accesses from the computation performed on the core. One such engine in the literature is the Tensor Marshaling Unit (TMU). The TMU has been designed to accelerate the irregular iteration commonly found in sparse tensor algebra and has been shown to speed up several sparse tensor algebra kernels by 3-5x.

We propose to apply the TMU primitives beyond tensor algebra to embedding operations. However, handwriting all variants of these operations is time consuming and not amenable to optimizations like kernel fusion. For this reason, we also propose a methodology to automatically lower embedding operations to TMU-CPU code using MLIR. This compilation path enables speeding up the embedding codes found in machine learning frameworks such as TensorFlow and PyTorch.
`,
    `
TL;DR: Innovation in AI talk happening THIS Thursday, 2/22, at 6 PM in room 32-144! Please RSVP here.

In the coming months, MIT Hacking Medicine is hosting a speaker series with topics in technology and healthcare innovation.

THIS Thursday, 2/22, at 6 PM in room 32-144, we’ll be kicking off the series in collaboration with MISTI India!

Come hear Raghu Dharmaraju, CEO, ARTPARK at Indian Institute of Science (IISc), speak about his experiences empowering people through innovation in artificial intelligence. He will also hold a Q&A at the end! Make sure to RSVP for refreshments.

If AI, entrepreneurship, and real-world innovation sound interesting to you, please RSVP here! 

What is MIT Hacking Medicine?

We are an organization that aims to connect brilliant and diverse minds in the biomedical field to solve healthcare’s biggest challenges. Every year, we organize Grand Hack, a three-day hackathon, where we bring together engineers, scientists, clinicians, and entrepreneurs to collaborate and develop solutions to key unmet needs in healthcare. 

Sounds exciting? Grand Hack 2024 will be happening HERE at MIT during April 19-21. Apply to participate here!

Upcoming Speaker Series Events



Thursday, 3/7, 5 PM: Susan Conover, CEO, Piction Health


We’ll be holding weekly speaker series events on Thursdays at 5 PM throughout March and the beginning of April (3/7 - 4/11), so stay tuned for more details!

bcc’d to all dorms, grand-hack-blue for bc-talk`,
    `
Campus Freedom of Expression: Basic Principles and Current Controversies (register)
Monday, February 26 
4:00 to 5:00 p.m. ET, Room 45-801

Erwin Chemerinsky is the dean of the University of California Berkeley School of Law. A free speech scholar, he specializes in constitutional law, criminal procedure, and federal jurisdiction.

Islamophobia: A Threat to All (register)
Monday, March 18 
4:00 to 5:00 p.m. ET, Room 45-801
This event falls during Ramadan, and accommodations will be made for those who are fasting. 

Dalia Mogahed is the director of research at the Institute for Social Policy and Understanding. She is a Muslim studies scholar, specializing in issues of gender, identity, and Islamophobia in America. 

What Hinges on Anti-Palestinian Racism? (register)
Thursday, April 18
4:00 to 5:00 p.m. ET, Room 45-801

Murad Idris is an associate professor of Political Science at the University of Michigan. An Arab and Muslim American studies scholar, his research and teaching explores political theory, the history of political thought, and political theology.

String/Gravity Theory Seminar

Wednesday, February 21, 2024 - No seminar scheduled

Wednesday, February 28, 2024 at 3:00-4:30pm ET - Cosman Room (6C-442)
TBA
Ryan Unger, Princeton
`
]

export const events = [
    {
        title: "Seminar: String/Gravity Theory",
        date: "Wed, 02/28",
        time: "3:00 PM",
        location: "Cosman Room (6C-442)",
        text: texts[2],
        interested: true,
    },
    {
        title: "Talk: Innovation in AI Healthcare",
        date: "Thu, 02/22",
        time: "6:00 PM",
        location: "32-144",
        text: texts[1],
        interested: true,
    },
    {
        title: "Seminar: Accelerating embedding operations on general purpose processors",
        date: "Wed, 02/28",
        time: "4:00 PM",
        location: "32-G449",
        text: texts[0],
        interested: false,
    },
    {
        title: "Campus Freedom of Expression: Basic Principles and Current Controversies",
        date: "Mon, 02/26",
        time: "4:00 PM",
        location: "45-801",
        text: texts[2],
        interested: false,
    },
]
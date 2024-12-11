---
title: Quantifying the Consistency in Numerical Gradings in LLM-as-a-Judge
description: Four years ago I wanted to do machine learning. Now, I am no longer sure.
date: '2025-6-25'
published: true
image: '/blogs/versus/Andi_fighting_LLM.jpg'
---

# Quantifying the Consistency in Numerical Gradings in LLM-as-a-Judge

<aside>

You can find the code here: [https://github.com/lad6558/LLMasJudge](https://github.com/lad6558/LLMasJudge)

</aside>

## Could LLMs be Judges?

Advancements in large language models (LLMs) have revolutionized creative content generation and problem-solving in expert knowledge domains. The increasing application of LLMs has led to a central problem: how to properly evaluate the quality of model-generated responses?

While alignment with human judgments remains the gold standard, LLMs could potentially serve as their own judges, solving the very challenges they present. **LLM-as-a-Judge** is the use of LLMs to evaluate the quality, relevance, or correctness of responses generated by other LLMs, serving as automated evaluators in various tasks. As a substitute of human judgements, LLM-as-a-Judge has unique advantages \[1\]:

1. **Scalability and Speed**: LLMs can evaluate responses rapidly and manage large-scale tasks with ease, making them ideal for handling extensive datasets or frequent evaluations.
2. **Cost-Effectiveness**: Using LLMs for evaluation reduces the expenses of hiring, training, and managing human evaluators, particularly for large or ongoing projects.
3. **Customizability**: LLMs can be fine-tuned or adjusted to focus on specific evaluation criteria, allowing them to adapt to a wide range of tasks and domains effectively.

### The Setups for Model Judges

To conduct evaluations using LLM-as-a-Judge, all it takes is crafting a well-designed prompt\! Here are three commonly used setups for instructing the models to act as evaluators \[2\]:

1. **Pairwise Comparison**: Judges compare two model-generated responses to a question and select the better one, ideal for identifying subtle differences between models.
2. **Pointwise Scoring**: Judges rate a single response on a predefined scale (e.g., 1 to 5), focusing on its quality independently of others.
3. **Reference-Guided Scoring**: Judges use a reference answer as a benchmark to evaluate responses, ensuring consistent and standard-aligned scoring.

Each of these setups caters to specific evaluation needs and can also be enhanced through contextual prompt engineering—there’s no universal standard for guiding model judges\!

### The Biases in Judges & Methods for Improvement

LLM-as-a-Judge is effective at predicting human preferences but comes with limitations and biases that affect evaluation quality. Common issues include **Verbosity Bias**–tending to score longer responses higher, even when they lack substance. **Position Bias**–favoring responses based on their order in the prompt, such as preferring the first in pairwise comparisons. A more comprehensive list of biases is given below \[3\]:

![List of biases in LLM-as-a-Judge](/blogs/deep_learning/1.png "List of biases in LLM-as-a-Judge")Recent efforts to enhance LLM-as-a-Judge have focused on developing robust evaluation platforms to mitigate model biases and limitations. Here are some sample strategies \[1\]:

- **Position switching trick:** Randomize where the model’s outputs appear in the prompt, generate multiple scores using varied positions, and then average these scores.
- **Few-shot demonstrations:** Include examples that reflect the natural score distribution to help the judge model calibrate its scoring mechanism.
- **Reference solutions for complex tasks:** Incorporate correct solutions to challenging math or reasoning problems into the prompt, giving the judge a reference point when evaluating responses.

While many existing studies have attempted the aforementioned bias-mitigating methods in pairwise comparisons, these strategies have not been fully explored in other setups. Moreover, pairwise comparison has its inherent limitations. First is the computational efficiency. If we have n different responses to compare, LLMs will take O(n^2) times to judge. Second, pairwise comparison is known to be affected by primacy or recency bias, as mentioned before. Third, it is hard to quantify the difference between the two responses. For example, it may be difficult for models to judge when the two responses are equally preferable based on human evaluations.

To address these research gaps, our study aims to reduce judgement inconsistency in various usage contexts, using pointwise scoring from a scale of 1 to 10\. Specifically, we asked the following research questions under the context of pointwise scoring:

- Does higher temperature result in larger variances (experiment 1)?
- Do larger models get less affected by temperature (experiment 2)?
- Does Chain-of-Thought make the model more consistent? What about post-hoc reasoning (experiment 3)?
- Does giving the judge grading guidelines reduce the variance? Are more detailed guidelines better (experiment 4)?

The main motivation for our study is to evaluate and improve the consistency of LLM-as-a-Judge, providing scalable and interpretable approaches to estimate human preferences.

## How Consistent Are the Judges?

The first question we want to explore is how consistent the judges are in their grading. How to reduce the variances in numerical grading to make the judges more consistent?

Before we dive into specific experiments, I want to introduce the setup of experiments.

### Experiment Setup

Basically, we ask judge LLMs to grade responses of other LLMs to some question.

The question and response pairs come from MT-bench, a dataset consisting of 3,300 expert-level pairwise evaluations conducted by humans, assessing responses from six different models to 80 MT-Bench questions \[4\]. Responses were sampled from models including GPT-4, GPT-3.5, Claude-v1, Vicuna-13B, Alpaca-13B, and LLaMA-13B. The annotations were mainly performed by graduate students with specialized knowledge in the subject areas relevant to the questions. We downloaded the dataset from [Hugging Face](https://huggingface.co/spaces/lmsys/mt-bench). We used MT-bench because we think it covers a wide range of cases representative of where LLM-as-judge is applied.

The specific setup depended on individual experiments, but all setups have some commonalities. We always use a common opening prompt or some variations of it, as taken from the work by Zheng et al \[4\].

An example of a prompt would be:

```python
# Define the prompt
prompt = """[System]
Please act as an impartial judge and evaluate the quality of the response provided by an AI assistant to the user question displayed below. Please evaluate the following response on a scale from 1-10.

[Question]
What are the key features of Python's list comprehension?

[The Start of Assistant's Answer]
List comprehensions in Python provide a concise way to create lists based on existing sequences.
[The End of Assistant's Answer]

Please provide only a score, with no explanation.
"""
```

Second, the LLM judges we evaluated are all from the OpenAI family, specifically GPT-3.5-turbo, GPT-4o-mini, GPT-4o, and mostly GPT-4o-mini because it demonstrates good balance between speed and power (GPT-4o's rate limit is too low to run statistically sound experiments, whereas GPT-3.5-turbo is less relevant in today's computing landscape). We didn't use LLMs from other families because we don't want to introduce confounding variables such as self-enhancement bias \[1\], meaning that the models tend to give biased preference toward responses generated from its own family, perhaps due to similar training data and architecture.

Third, the grade is always parsed using OpenAI’s structured output feature. OpenAI describes [structured output](https://platform.openai.com/docs/guides/structured-outputs) as:
> Structured Outputs is a feature that ensures the model will always generate responses that adhere to your supplied JSON Schema, so you don't need to worry about the model omitting a required key, or hallucinating an invalid enum value.

An example of a response without prior reasoning might look like
```json
{"score": 7}
```

Or

```json
{"Explanation": "The response is well-structured and engaging, effectively capturing the essence of a travel blog post. It includes a catchy title and subheading, which draw the reader in. The content is rich with cultural experiences, detailing visits to significant locations like the Bishop Museum and Iolani Palace, which adds depth to the narrative. The description of the luau at the Polynesian Cultural Center is vivid and enticing, showcasing local traditions and cuisine. The transition to the natural beauty of the Big Island and Maui is smooth, maintaining the reader's interest throughout. \\\\n\\\\nHowever, while the post is informative and engaging, it could benefit from a more personal touch or anecdotes that reflect the author's feelings or experiences during the trip. This would enhance the relatability and emotional connection with the reader. Additionally, while the attractions mentioned are significant, including a few lesser-known spots or tips for travelers could provide a more comprehensive guide. \\\\n\\\\nOverall, the response is strong in its execution, but a few enhancements could elevate it further. Thus, I would rate it an 8 out of 10 for its engaging content and informative nature, while acknowledging the potential for more personal storytelling.","score":"8"}
```

### Experiment 1: Does Higher Temperature Result in Larger Variances?

OpenAI describes the temperature parameter in its ChatCompletion API as follows:
> The sampling temperature, between 0 and 1\. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic. If set to 0, the model will use log probability to automatically increase the temperature until certain thresholds are hit.

A natural hypothesis is that smaller temperatures would lead to more consistent grading. Experimental results support this hypothesis: lower temperatures indeed result in smaller variances.

The following plot illustrates results obtained by evaluating three different judges (GPT-3.5-turbo, GPT-4o-mini, and GPT-4o) across temperature settings ranging from 0 to 1 in 0.1 increments.

![Temperature vs Variance plot showing correlation between higher temperatures and increased variance](/blogs/deep_learning/2.png "Temperature vs Variance plot showing correlation between higher temperatures and increased variance")

(Note: The variance is generally low, indicating that the judges are fairly consistent most of the time given the same prompt. Testing small prompt-level perturbations might simulate real-world settings better, but such experiments would be harder to quantify.)

Using Spearman’s correlation coefficient—a nonparametric measure of monotonicity ranging from -1 to 1—we find strong evidence that higher temperatures correlate with greater variances in numerical grading (`p < 0.0001`).

Interestingly, different models appear to be affected by temperature to varying degrees. This raises the question: Does that mean…

### Experiment 2: Do Larger Models Get Less Affected By Temperature?

![Score distribution across different temperatures](/blogs/deep_learning/3.png "Score distribution across different temperatures")

Not surprisingly, the judge’s score distribution is normal. We can see that higher temperatures (the red distributions) result in a flatter, less centered distribution for the scores, while lower temperatures (the green distributions) result in a sharper, more centered distribution.

What is more interesting is that different models seem to be affected by temperature differently. It seems that GPT-4o-mini is less affected by temperature compared to GPT-4o and GPT-3.5-turbo. This is confirmed by the Kruskal-Wallis and Mann-Whitney U-tests: at higher temperatures (temperature = 0.6, 0.7, 0.8), there is strong evidence suggesting that GPT-4o-mini has less variance compared to GPT-3.5-turbo and GPT-4o (`p < 0.05`).

So, what has made GPT-4o-mini more consistent than other models?

It is certainly not model size that led to the difference, as in terms of size, GPT-4o-mini should be between GPT-3.5-turbo and GPT-4o. If a smaller model resulted in less variance, GPT-3.5-turbo would have the smallest variance.

We hypothesize that this difference is due to its training process, specifically distillation. Even though OpenAI has not made its training process public, we know that GPT-4o-mini was released on July 18, 2024, a month after the larger GPT-4o model, which debuted on May 13, 2024. It is reasonable to conjecture that GPT-4o-mini is a distilled version of GPT-4o. In the work by Safaryan et al. \[5\], the author argues that knowledge distillation reduces the variance of output because the student approximates the teacher model’s complex decision boundaries, resulting in smoother and more generalized boundaries. In other words, distillation serves as a regularizer, preventing the student model from overfitting to noise in the training data.

Now we have an understanding of the model and temperature choice, let’s move on to the prompt-engineering techniques. **From now on, if otherwise mentioned, the model would be GPT-4o-mini and the temperature would be 0.5.**

### Experiment 3: Does Giving the Judge Grading Guidelines Reduce the Variance? Are more detailed Guidelines Better?

When asking many humans to grade something on a numerical scale, the usual consistency practice is to have a grading guideline of what a score of 1 means, what a score of 2 means, etc.

For LLM judges, people also commonly include grading guidelines in the prompt, in hope of increasing grading consistency. We'd like to explore whether these grading guidelines can actually help LLMs grade more consistently. After all, LLMs are more known for their language understanding than math. Surely the word "mediocre" means more to them than the number "5", right?

To investigate whether a more detailed grading guideline leads to more consistent grading, we wrote, in the judge prompt, grading guidelines with different levels of specificity, ranging from the simplest to the most specific.

Here are the levels of specificity we investigated:

1. **(Baseline, no guideline)** Please provide only a score, with no explanation.
2. **(Basic guideline)** Please provide only a score, with no explanation. 1 means terrible, 5 means mediocre, and 10 means perfect.
3. **(full scale)** Please provide only a score, with no explanation. On a scale of 1 to 10: 1 is extremely terrible, 2 is terrible, \[3 - 9 omitted for reader\], and 10 is perfect.
4. **(extremely detailed)** On a scale of 1 to 10: 1. Flow: Completely disjointed; sentences and paragraphs lack any logical connection. Wording: Full of grammar, spelling, and syntax errors; sentences are nearly incomprehensible. Creativity: No originality or thought; entirely derivative or nonsensical. \[2 - 9 omitted for reader\] 10. Flow: Perfectly seamless; every sentence and paragraph feels purposeful and natural. Wording: Masterful use of language; evocative and impactful. Creativity: Exceptionally innovative and inspiring; a true standout piece.
5. **(subscores)** Break down the scale to sub scores. Novelty from 0-2, instruction following from 0-3, clarity from 0-2, truthiness from 0-2, formatting from 0-1. Submit the sum of the subscores but not the subscores themselves. (the 6.7960 course staff might find this breakdown vaguely familiar)

![Comparison of grading guidelines and their effect on variance](/blogs/deep_learning/4.png "Comparison of grading guidelines and their effect on variance")

The result is surprising: no statistically significant relationship is found between the grading consistency and how specific the grading guidelines are. There is no evidence that the variances of the judges are different from one another.

Why is grading guideline so important for humans but not for LLMs? A possible explanation is that for humans the grading guideline is there to help with inter-rater reliability, meaning the consistency between different people. Alice and Bob might have different opinions on what a 7 means - a grading guideline will help unify that.

However, here we are measuring intra-rater reliability, meaning the LLM’s consistency with its own grading. In this case, it seems like the LLM has a pretty good idea of what a 7 means to itself. A grading guideline might be more helpful if we are having multiple heterogeneous models rating the same response, which could be a follow-up study.

### Experiment 4: Does Chain-of-Thought Make the Model More Consistent? What about Post-hoc Reasoning?

It is widely believed that chain-of-thought makes the response better \[6\]. It is also widely believed that it is important to have the model output reasoning before its conclusion, instead of after its conclusion (which we shall call post-hoc reasoning), because the LLM is autoregressive, and each token only attends to previous tokens.

To implement chain-of-thought and post-hoc reasoning, we changed the prompt and the structured output schema.

The prompt for chain-of-thought:

```python
prompt = """[System]
Please act as an impartial judge and evaluate the quality of the response provided by an AI assistant to the user question displayed below. Let's think step by step about the response's quality.

[Question]
What are the key features of Python's list comprehension?

[The Start of Assistant's Answer]
List comprehensions in Python provide a concise way to create lists based on existing sequences.
[The End of Assistant's Answer]

Let's analyze this response step by step:
1. First, let's consider...
2. Next, let's evaluate...
3. Finally, let's look at...

Based on this analysis, please provide a score between 1 and 10."""
```

In the case of post-hoc reasoning, the last line is changed to:
"First provide a score from 1-10, then explain your reasoning step by step."

And the "reasoning before" schema is:

```python
functions = [
    {
        "name": "submit_score",
        "description": "Submit a score and explanation for the LLM response",
        "parameters": {
            "type": "object",
            "properties": {
                "explanation": {
                    "type": "string",
                    "description": "Detailed explanation for the score"
                },
                "score": {
                    "type": "integer",
                    "description": "Score from 1-10 (10 being best)",
                    "minimum": 1,
                    "maximum": 10
                }
            },
            "required": ["explanation", "score"]
        }
    }
]
```

In the case where reasoning comes after, we swap the order of the arguments, so the properties become "score" first, then "explanation."

We expected that chain-of-thought could reduce the variance of the output by more reliably "uncovering the truth," whereas post-hoc reasoning would have the same level of variance as no reasoning.

The result is quite surprising.

![Effect of reasoning on grading variance](/blogs/deep_learning/5.png "Effect of reasoning on grading variance")

It looks like "Reasoning Before" results in higher variance! Levene’s test confirms this (`p < 0.05`). In other words, chain-of-thought does not make the model’s grading more consistent. In fact, it makes the variance bigger!

How to explain this phenomenon?

We believe this is due the autoregressive nature of the LLM, where each reasoning step is conditioned on prior tokens. This dependency [can magnify errors](https://blog.iese.edu/artificial-intelligence-management/2024/chain-of-thought-reasoning-the-new-llm-breakthrough/) \[7\] or deviations in earlier reasoning steps, contributing to higher variance. In other words, diverse reasoning paths lead to different conclusions. This should be able to be improved through the "[self-consistency](https://arxiv.org/abs/2203.11171)" \[8\] technique, but without it, CoT actually leads to higher variance in grading, which is potentially undesirable.

What is harder to explain is that prompting the LLM to add reasoning after the score also leads to less consistent grading. Theoretically, since the LLM is autoregressive, later tokens should not affect earlier tokens, but it appears that is not the case. While the difference in variance between reasoning after and no reasoning is not statistically significant (`p = 0.12`), it might still be worth discussing. We have no good theoretical explanation for this, so it might be an artifact of how OpenAI handles function calls, where even if "reasoning" appears later than "score" in the function argument, somehow the "score" token still attends to the "reasoning" tokens.

The "reasoning increases variance" phenomenon is also confirmed by the score distribution (we also included the version without reasoning below for convenience of comparison).

It seems that GPT-4o-mini, our "star of consistency" in Experiment 1, is more affected by reasoning than GPT-3.5 or GPT-4o. Kruskal-Wallis H-test confirms that this difference exists at temperature = 1.0 (`p < 0.01`), but less so at lower temperatures, such as 0.5 (`0.05 < p < 0.1`) or 0.3 (`p > 0.1`). At temperature 1.0, GPT-4o-mini is significantly more affected by reasoning than GPT-4o and GPT-3.5-turbo, according to Mann-Whitney U tests (`p < 0.01`).

We have three possible explanations for this:

1. **Confusion hypothesis**: Less capable models (like GPT-4o-mini compared to GPT-4o) "confuse themselves" when reasoning, especially at higher temperatures, leading to more varied paths and conclusions. This wouldn’t explain why GPT-3.5-turbo is also less affected, though.
2. **Distillation hypothesis**: If, as hypothesized in Experiment 2, GPT-4o-mini has lower variance when it doesn’t reason because it is trained on a smoother decision boundary, the teacher model being an implicit regularizer protecting it from the noise in the data, the reasoning might be where the noise in the data rears its ugly head.
3. **Capped variance hypothesis**: Reasoning might only increase the variance to a certain level for a given temperature. For GPT-4o and GPT-3.5, they may have already reached that level of variance, so reasoning does not make it worse. But because GPT-4o-mini initially had a smaller variance, reasoning increased it more.

This indicates that the chain-of-thought reasoning technique, without self-consistency, can result in undesirable outcomes such as inconsistency, and its effect on different models is disproportionate.

People generally believe chain-of-thought is good, but here we show that it hurts consistency. Is there another possibility here? Is it possible that chain-of-thought hurts consistency, but in some good way because it changes a consistently bad grading to a sometimes good grading? We will explore this in the following experiment.

### Experiment 5: How does Pointwise Grading compare to Pairwise Comparison? Does certain techniques improve its Agreement with Human Evaluation?

We have shown some techniques that would improve or hurt consistency. However, the reason we use LLM judges is that they could approximate human preference, which is otherwise expensive to obtain. Does there exist a bias-variance tradeoff? Do these techniques that help with consistency also help with human alignment? Does chain-of-thought hurt consistency but improve grading by turning consistently bad grading into sometimes good grading?

#### Experiment Setup

We conducted our experiments using a subset of the MT-bench dataset. This dataset contains 1,000 pairs of responses generated by two different models, along with expert annotations that indicate which response is better ("model_a," "model_b," or "tie").

**Prompt Design**: For our baseline, we used pairwise comparison, which is the standard method for judging two responses. We adopted the prompt from \[2\], attached below.

![Baseline prompt example for pairwise comparison](/blogs/deep_learning/6.png "Baseline prompt example for pairwise comparison")

**Scoring**:

- If the human and the LLM both selected "model_a," "model_b," or "tie," the LLM earned 1 point.
- If one selected "model_a" or "model_b" and the other selected "tie," the LLM earned 0.5 points.
- Otherwise, the LLM earned 0 points.

The total accuracy was calculated as the proportion of points scored over all pairs.

**Converting Pointwise Grading to Pairwise Comparison:**

To evaluate pointwise grading, we used the following approach:
• Assign grades to each response independently on a numerical scale (e.g., 1 to 10).
• Compare the grades:
• If the grade for one response was higher, it was deemed the better response (e.g., "model_a" or "model_b").
• If the grades were equal, the outcome was labeled "tie."
• We applied this conversion across all 1,000 response pairs and evaluated variations of pointwise grading using the same scoring system as the baseline.

##

#### Results

![Results comparing different methods](/blogs/deep_learning/7.png "Results comparing different methods")

1. **All methods outperformed random choice or always returning "tie."**

This was expected, as both pairwise and pointwise methods leverage the LLM’s understanding of response quality.

2. **Chain-of-thought reasoning performed significantly worse than other techniques.**

This was confirmed using a Friedman test followed by a post-hoc Nemenyi test (`p < 0.05`).

![Graph showing performance comparison of different methods](/blogs/deep_learning/8.png "Graph showing performance comparison of different methods")

As we can see from the graph, while the difference in terms of human alignment for other non-baseline methods are statistically insignificant, all non-baseline methods are better than "reasoning before", i.e. chain-of-thought.

#### Temperature’s Effect on Alignment

We further analyzed how temperature affects agreement with human evaluations. The results provided additional insights:

![Temperature's effect on model performance](/blogs/deep_learning/9.png "Temperature's effect on model performance")

It seems like the higher the temperature, the worse the reasoning gets. This is confirmed by a Friedman test (`p < 0.001`). The difference for "no reasoning" is statistically insignificant (`p > 0.1`).

A possible explanation is the **Confusion Hypothesis** from Experiment 2: when reasoning at higher temperatures, LLMs may generate overly complex or divergent paths, "confusing" themselves. In such cases, relying on the model’s initial intuition—captured in the first token—can produce better results.

## Conclusion

In conclusion, in using LLM as a judge, compared to pairwise comparison, pointwise grading is just as good, if not better, at matching human preference. It is scalable, less bias-prone, and allows specifying a confidence interval. It is fairly consistent already (variance `< 0.4` in most cases), but if we want more consistency, we should grade at lower temperature like t=0.2 without chain-of-thought, using a distilled model like GPT-4o-mini. Increasing the number of trials and giving scoring guidelines doesn’t actually affect the output.

## Bibliography

\[1\] Wolfe, C. R. (n.d.). _LLM-as-a-Judge_. Substack. Retrieved December 10, 2024, from [https://cameronrwolfe.substack.com/p/llm-as-a-judge\#footnote-1-141159804](https://cameronrwolfe.substack.com/p/llm-as-a-judge#footnote-1-141159804)

\[2\] Zheng, L., Chiang, W.-L., Sheng, Y., Zhuang, S., Wu, Z., Zhuang, Y., Lin, Z., Li, Z., Li, D., Xing, E. P., Zhang, H., Gonzalez, J. E., & Stoica, I. (2023). _Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena_. arXiv. [https://doi.org/10.48550/arXiv.2306.05685](https://doi.org/10.48550/arXiv.2306.05685)

\[3\] Ye, J., Wang, Y., Huang, Y., Chen, D., Zhang, Q., Moniz, N., Gao, T., Geyer, W., Huang, C., Chen, P.-Y., Chawla, N. V., & Zhang, X. (2024). _Justice or prejudice? Quantifying biases in LLM-as-a-Judge_. arXiv. [https://doi.org/10.48550/arXiv.2410.02736](https://doi.org/10.48550/arXiv.2410.02736)

\[4\] Zheng, L., Chiang, W.-L., Sheng, Y., Zhuang, S., Wu, Z., Zhuang, Y., Lin, Z., Li, Z., Li, D., Xing, E. P., Zhang, H., Gonzalez, J. E., & Stoica, I. (2023). _Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena_. arXiv. [https://doi.org/10.48550/arXiv.2306.05685](https://doi.org/10.48550/arXiv.2306.05685)

\[5\] Safaryan, M., Peste, A., & Alistarh, D. (2023). _Knowledge distillation performs partial variance reduction_. arXiv. [https://doi.org/10.48550/arXiv.2305.17581](https://doi.org/10.48550/arXiv.2305.17581)

\[6\] Liu, Yang, et al. "G-eval: Nlg evaluation using gpt-4 with better human alignment." arXiv preprint arXiv:2303.16634 (2023).

\[7\] IESE Business School. (2024). _Chain of thought reasoning: The new LLM breakthrough_. Artificial Intelligence & Management Blog. [https://blog.iese.edu/artificial-intelligence-management/2024/chain-of-thought-reasoning-the-new-llm-breakthrough/](https://blog.iese.edu/artificial-intelligence-management/2024/chain-of-thought-reasoning-the-new-llm-breakthrough/)

\[8\] Wang, X., Wei, J., Schuurmans, D., Le, Q., Chi, E., Narang, S., Chowdhery, A., & Zhou, D. (2023). _Self-consistency improves chain of thought reasoning in language models_. arXiv. [https://doi.org/10.48550/arXiv.2203.11171](https://doi.org/10.48550/arXiv.2203.11171)
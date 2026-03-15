const note03 = {
  id: 3,
  title: "Note 03 – Hypothesis Testing",
  questions: [
    {
      id: 1,
      question: "What is a Null Hypothesis (H₀)?",
      options: [
        "The claim we want to prove",
        "The alternative to the claim",
        "The initial claim (hypothesis) put forward about a population parameter",
        "A hypothesis that is always rejected"
      ],
      correct: 2,
      explanation: "The hypothesis we put forward (the initial claim) is called the Null Hypothesis (H₀). For example, H₀: μ = 1.62 (mean height of 15-year-old boys is 1.62m)."
    },
    {
      id: 2,
      question: "What is an Alternative Hypothesis (H₁)?",
      options: [
        "The same as the null hypothesis",
        "Usually the opposite of what is stated in H₀, adopted when H₀ is rejected",
        "A hypothesis that cannot be tested",
        "The hypothesis that the population is normal"
      ],
      correct: 1,
      explanation: "The Alternative Hypothesis (H₁ or Hₐ) is usually the opposite of what is stated in the null hypothesis. When we reject H₀, we do so in favor of H₁."
    },
    {
      id: 3,
      question: "A consumer agency wants to test if mean tire lifetime is less than 42000 miles. What are the hypotheses?",
      options: [
        "H₀: μ = 42000, H₁: μ > 42000",
        "H₀: μ = 42000, H₁: μ < 42000",
        "H₀: μ = 42000, H₁: μ ≠ 42000",
        "H₀: μ < 42000, H₁: μ = 42000"
      ],
      correct: 1,
      explanation: "The question/claim goes under H₁. 'Less than 42000' → H₁: μ < 42000 and H₀: μ = 42000. This is a one-tailed (left-tail) test."
    },
    {
      id: 4,
      question: "A builder wants to check if the mean length differs from 8.5 feet. What are the hypotheses?",
      options: [
        "H₀: μ = 8.5, H₁: μ < 8.5",
        "H₀: μ = 8.5, H₁: μ > 8.5",
        "H₀: μ = 8.5, H₁: μ ≠ 8.5",
        "H₀: μ ≠ 8.5, H₁: μ = 8.5"
      ],
      correct: 2,
      explanation: "Since the builder wants to check if the mean is 'different from' 8.5, H₁: μ ≠ 8.5 and H₀: μ = 8.5. This is a two-tailed test."
    },
    {
      id: 5,
      question: "UGC wants to know if 'majority of students at UoM are from Western Province'. What is H₁?",
      options: [
        "H₁: p < 0.5",
        "H₁: p = 0.5",
        "H₁: p > 0.5",
        "H₁: p ≠ 0.5"
      ],
      correct: 2,
      explanation: "'Majority' means more than half, so H₁: p > 0.5 and H₀: p = 0.5. This is a one-tailed (right-tail) test."
    },
    {
      id: 6,
      question: "A news company believes approval rating has fallen below 40%. What are the hypotheses?",
      options: [
        "H₀: p = 0.4, H₁: p > 0.4",
        "H₀: p = 0.4, H₁: p < 0.4",
        "H₀: p = 0.4, H₁: p ≠ 0.4",
        "H₀: p < 0.4, H₁: p ≥ 0.4"
      ],
      correct: 1,
      explanation: "'Fallen below 40%' goes as H₁: p < 0.4 and H₀: p = 0.4. This is a one-tailed (left-tail) test."
    },
    {
      id: 7,
      question: "What is a Type I Error?",
      options: [
        "Not rejecting H₀ when H₀ is false",
        "Rejecting H₀ when H₀ is actually true",
        "Accepting H₁ when H₁ is true",
        "Not rejecting H₀ when H₀ is true"
      ],
      correct: 1,
      explanation: "Type I error is rejecting the null hypothesis when the null is actually correct. P(Type I error) = α, the significance level."
    },
    {
      id: 8,
      question: "What is a Type II Error?",
      options: [
        "Rejecting H₀ when H₀ is true",
        "Rejecting H₀ when H₀ is false",
        "Not rejecting H₀ when H₀ is actually false",
        "Not rejecting H₀ when H₀ is true"
      ],
      correct: 2,
      explanation: "Type II error is not rejecting the null hypothesis when the null is actually false. P(Type II error) = β."
    },
    {
      id: 9,
      question: "What is the significance level α?",
      options: [
        "P(Type II error)",
        "P(Type I error)",
        "P(accepting H₀)",
        "P(H₁ being true)"
      ],
      correct: 1,
      explanation: "The significance level α = P(Type I error) = the probability of rejecting H₀ when H₀ is actually true. It's the risk we are willing to accept."
    },
    {
      id: 10,
      question: "Why do we say 'Do not reject H₀' instead of 'Accept H₀'?",
      options: [
        "Because it sounds more formal",
        "Because we cannot quantify P(Type II error), so we avoid making Type II errors",
        "Because H₀ is always false",
        "Because acceptance is not a statistical term"
      ],
      correct: 1,
      explanation: "We cannot generally quantify the probability of a Type II error. To avoid making Type II errors, we say 'Do not reject H₀' instead of 'Accept H₀'."
    },
    {
      id: 11,
      question: "Which are the most popular significance levels?",
      options: [
        "0.5, 0.25, 0.1",
        "0.1, 0.05, 0.01",
        "0.001, 0.0001, 0.00001",
        "0.2, 0.3, 0.4"
      ],
      correct: 1,
      explanation: "The most popular significance levels are 0.1 (10%), 0.05 (5%), and 0.01 (1%). The most commonly used is 0.05."
    },
    {
      id: 12,
      question: "In the decision table for hypothesis testing, if H₀ is true and we reject H₀, this is?",
      options: [
        "Correct decision",
        "Type I error",
        "Type II error",
        "Impossible"
      ],
      correct: 1,
      explanation: "If H₀ is true and we reject H₀, this is a Type I error. The table: Reject H₀ when H₀ true = Type I error; Don't reject H₀ when H₀ false = Type II error."
    },
    {
      id: 13,
      question: "In the decision table, if H₀ is false and we do not reject H₀, this is?",
      options: [
        "Correct decision",
        "Type I error",
        "Type II error",
        "Impossible"
      ],
      correct: 2,
      explanation: "If H₀ is false and we do not reject H₀, this is a Type II error. We fail to detect that H₀ is wrong."
    },
    {
      id: 14,
      question: "How many approaches are there for performing hypothesis testing?",
      options: [
        "1",
        "2",
        "3",
        "4"
      ],
      correct: 2,
      explanation: "There are three approaches: (1) Classical Approach, (2) Confidence Interval Approach, and (3) P-Value Approach."
    },
    {
      id: 15,
      question: "In the Classical Approach, what is the key step?",
      options: [
        "Compute the P-value",
        "Build a confidence interval",
        "Compute the test statistic and compare with the rejection region",
        "Calculate the sample median"
      ],
      correct: 2,
      explanation: "In the Classical Approach: define hypotheses → find test statistic → compute under H₀ → define rejection region at significance level α → reject H₀ if test statistic falls in rejection region."
    },
    {
      id: 16,
      question: "In the Confidence Interval Approach, when do we reject H₀?",
      options: [
        "When the P-value is small",
        "When the test statistic is in the rejection region",
        "When the parameter value under H₀ lies outside the confidence interval",
        "When the sample size is large"
      ],
      correct: 2,
      explanation: "In the Confidence Interval Approach: construct the confidence interval. If the value of the parameter under H₀ lies outside the CI, reject H₀. If it lies within, do not reject H₀."
    },
    {
      id: 17,
      question: "In the P-Value Approach, when do we reject H₀?",
      options: [
        "When P-value > significance level",
        "When P-value < significance level",
        "When P-value = 0",
        "When P-value = significance level"
      ],
      correct: 1,
      explanation: "In the P-Value Approach: compute the P-value based on the test statistic under H₀. If P-value < significance level (α), reject H₀. Otherwise, do not reject H₀."
    },
    {
      id: 18,
      question: "The easy way to define hypotheses is to put the research question under which hypothesis?",
      options: [
        "Null hypothesis H₀",
        "Alternative hypothesis H₁",
        "Either H₀ or H₁",
        "Neither"
      ],
      correct: 1,
      explanation: "An easy way to define hypotheses is to put the question (what you want to test/prove) under the alternative hypothesis H₁."
    },
    {
      id: 19,
      question: "If a decision table shows: Reject H₀ when H₀ is false, this is a?",
      options: [
        "Type I error",
        "Type II error",
        "Correct decision",
        "Impossible outcome"
      ],
      correct: 2,
      explanation: "Rejecting H₀ when H₀ is actually false is a correct decision. We correctly identified that the null hypothesis was wrong."
    },
    {
      id: 20,
      question: "If α = 0.05, this means we are willing to accept what probability of Type I error?",
      options: [
        "0.5%",
        "5%",
        "50%",
        "95%"
      ],
      correct: 1,
      explanation: "α = 0.05 means we accept a 5% probability of making a Type I error (rejecting H₀ when it is actually true)."
    },
    // ─── Missing: Test type classification ───
    {
      id: 21,
      question: "A researcher claims the mean weight is different from 70 kg. What type of test is this?",
      options: [
        "Left-tailed test",
        "Right-tailed test",
        "Two-tailed test",
        "No test needed"
      ],
      correct: 2,
      explanation: "The claim is μ ≠ 70, which allows deviation in either direction (greater or less than 70). This requires a two-tailed test with H₁: μ ≠ 70."
    },
    {
      id: 22,
      question: "Why does the null hypothesis H₀ always contain an equality sign (=, ≤, or ≥)?",
      options: [
        "Because we need a specific value to compute the test statistic and build the sampling distribution",
        "Because the alternative hypothesis has the equality",
        "It is just a convention with no practical reason",
        "Because we always assume the parameter is zero"
      ],
      correct: 0,
      explanation: "H₀ must contain an equality so that we have a specific parameter value to assume when constructing the sampling distribution of the test statistic. Without a fixed value, we cannot calculate probabilities."
    },
    // ─── Missing: Power of a test ───
    {
      id: 23,
      question: "The power of a statistical test is defined as:",
      options: [
        "P(Type I error)",
        "P(failing to reject H₀ when H₁ is true)",
        "1 − β, the probability of correctly rejecting H₀ when H₁ is true",
        "The significance level α"
      ],
      correct: 2,
      explanation: "Power = 1 − β = P(reject H₀ | H₁ is true). It measures the test's ability to detect a real effect. β is the probability of a Type II error (failing to reject H₀ when it is false)."
    },
    // ─── Missing: Choosing α ───
    {
      id: 24,
      question: "In a medical trial testing whether a new drug has dangerous side effects, which significance level is most appropriate?",
      options: [
        "α = 0.10 (larger, easier to reject H₀)",
        "α = 0.01 (smaller, harder to reject H₀ — reduces chance of false alarm)",
        "α = 0.50",
        "Significance level doesn't matter"
      ],
      correct: 1,
      explanation: "When the cost of a Type I error (falsely concluding the drug is dangerous) is high, we use a smaller α like 0.01 to reduce the chance of incorrectly rejecting H₀. The choice of α depends on the consequences of errors."
    },
    // ─── Missing: Scenario → identify one-tailed vs two-tailed ───
    {
      id: 25,
      question: "A company claims their batteries last at least 500 hours. A consumer group wants to test if batteries last less than 500 hours. The alternative hypothesis H₁ is:",
      options: [
        "μ > 500",
        "μ < 500",
        "μ ≠ 500",
        "μ = 500"
      ],
      correct: 1,
      explanation: "The consumer group suspects batteries last less than claimed, so H₁: μ < 500. This is a left-tailed (one-tailed) test. H₀: μ ≥ 500."
    }
  ]
};

export default note03;

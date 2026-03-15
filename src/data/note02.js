const note02 = {
  id: 2,
  title: "Note 02 – Statistical Inference",
  questions: [
    {
      id: 1,
      question: "What is a sample in statistics?",
      options: [
        "The entire population being studied",
        "A subset of the population used for experiments",
        "A single data point",
        "The average of the population"
      ],
      correct: 1,
      explanation: "In statistics, a sample is a subset of the population in which a specific matter is going to be checked or a specific experiment is going to be done."
    },
    {
      id: 2,
      question: "What is the main concern in statistical inference?",
      options: [
        "Drawing conclusions about the sample only",
        "Drawing conclusions about the population, not about the sample",
        "Calculating the sample mean only",
        "Collecting as much data as possible"
      ],
      correct: 1,
      explanation: "The main concern in statistical inference is drawing conclusions about the population, not about the sample. We use data from the sample to make estimates and test hypotheses about population parameters."
    },
    {
      id: 3,
      question: "What is a Random Sample?",
      options: [
        "A sample where certain items are chosen deliberately",
        "A sample where each item in the population has the same probability of being included",
        "A sample that only includes outliers",
        "A sample taken from a different population"
      ],
      correct: 1,
      explanation: "A random sample is one where each item in the population has the same probability or chance to be included in the sample. It should represent the entire population."
    },
    {
      id: 4,
      question: "Which of the following is a Probability Sampling technique?",
      options: [
        "Convenience Sampling",
        "Snowball Sampling",
        "Stratified Sampling",
        "Purposive Sampling"
      ],
      correct: 2,
      explanation: "Probability sampling techniques include: Simple Random Sampling, Systematic Sampling, Stratified Sampling, and Cluster Sampling. Convenience, Snowball, and Purposive are Non-Probability sampling techniques."
    },
    {
      id: 5,
      question: "Which of the following is a Non-Probability Sampling technique?",
      options: [
        "Cluster Sampling",
        "Systematic Sampling",
        "Simple Random Sampling",
        "Voluntary Response Sampling"
      ],
      correct: 3,
      explanation: "Non-Probability sampling techniques include: Convenience Sampling, Voluntary Response Sampling, Purposive (Judgement) Sampling, and Snowball Sampling."
    },
    {
      id: 6,
      question: "A statistic must be free from what?",
      options: [
        "Sample values",
        "Parameters (population values)",
        "Variables",
        "Constants"
      ],
      correct: 1,
      explanation: "A statistic is a function of sample values that is free from parameters. For example, T = (x₁+x₂+x₃)/3 is a statistic, but S = x₁ + μ is NOT a statistic because it contains the population parameter μ."
    },
    {
      id: 7,
      question: "Given sample values x₁, x₂, x₃ from a population with mean μ, which is NOT a statistic?",
      options: [
        "F = x₁² + x₂² + x₃²",
        "T = (x₁ + x₂ + x₃)/3",
        "S = x₁ + μ",
        "U = (2x₁ + 3x₂ + 4x₃)/6"
      ],
      correct: 2,
      explanation: "S = x₁ + μ is NOT a statistic because it contains the population parameter μ. A statistic must be a function of sample values only, free from parameters."
    },
    {
      id: 8,
      question: "What is Point Estimation?",
      options: [
        "Determining an interval containing the unknown parameter",
        "Determining a single value estimate for an unknown parameter",
        "Taking multiple samples and averaging them",
        "Testing a hypothesis about the population"
      ],
      correct: 1,
      explanation: "Point estimation determines an estimator which, based on sample data, gives a single value estimate for an unknown parameter."
    },
    {
      id: 9,
      question: "An estimator U is unbiased for parameter θ if?",
      options: [
        "V(U) = θ",
        "E(U) = 0",
        "E(U) = θ",
        "V(U) = 0"
      ],
      correct: 2,
      explanation: "An estimator U is unbiased for parameter θ if E(U) = θ. This means on average, the estimator hits the true parameter value."
    },
    {
      id: 10,
      question: "Between two unbiased estimators U₁ and U₂, which is more efficient?",
      options: [
        "The one with larger variance",
        "The one with smaller variance",
        "The one with larger mean",
        "The one with smaller sample size"
      ],
      correct: 1,
      explanation: "If V(U₁) < V(U₂), then U₁ is more efficient. One estimator is said to be more efficient than others when the variability of its sampling distribution is less."
    },
    {
      id: 11,
      question: "The unbiased and most efficient estimator for the population mean μ is?",
      options: [
        "Sample median",
        "Sample mode",
        "Sample mean X̄ = (1/n)∑xᵢ",
        "Sample range"
      ],
      correct: 2,
      explanation: "The unbiased and most efficient estimator for population mean μ is the sample mean: μ̂ = X̄ = (1/n)∑xᵢ = (x₁ + x₂ + ... + xₙ)/n."
    },
    {
      id: 12,
      question: "The unbiased estimator for population variance σ² is?",
      options: [
        "S² = (1/n)∑(xᵢ - X̄)²",
        "S² = (1/(n-1))∑(xᵢ - X̄)²",
        "S² = ∑(xᵢ - X̄)²",
        "S² = (1/n²)∑(xᵢ - X̄)²"
      ],
      correct: 1,
      explanation: "The unbiased estimator for population variance is S² = (1/(n-1))∑(xᵢ - X̄)². We divide by (n-1) instead of n to get an unbiased estimate."
    },
    {
      id: 13,
      question: "The unbiased estimator for population proportion P is?",
      options: [
        "P̂ = n / (number of successes)",
        "P̂ = (number of successes in the sample) / n",
        "P̂ = 1 - (number of failures) / n",
        "Both B and C"
      ],
      correct: 3,
      explanation: "P̂ = (Number of successes in the sample) / n. This is equivalent to 1 - (number of failures)/n since successes + failures = n."
    },
    {
      id: 14,
      question: "What is a Sampling Distribution?",
      options: [
        "The distribution of values in a single sample",
        "The distribution of a statistic calculated from many samples",
        "The distribution of the population",
        "The distribution of errors"
      ],
      correct: 1,
      explanation: "Sample statistics are random variables that vary from sample to sample. The distribution of these statistics across many samples is called the Sampling Distribution."
    },
    {
      id: 15,
      question: "The standard deviation of a sampling distribution is called?",
      options: [
        "Standard deviation",
        "Variance",
        "Standard error",
        "Mean absolute deviation"
      ],
      correct: 2,
      explanation: "The standard deviation of a sampling distribution is specifically called the Standard Error."
    },
    {
      id: 16,
      question: "If X₁, X₂, ..., Xₙ is a random sample from N(μ, σ²), then X̄ is distributed as?",
      options: [
        "N(μ, σ²)",
        "N(μ, σ²/n)",
        "N(0, 1)",
        "N(μ, nσ²)"
      ],
      correct: 1,
      explanation: "If a random sample of size n is taken from N(μ, σ²), then X̄ ~ N(μ, σ²/n). The variance is reduced by the factor n."
    },
    {
      id: 17,
      question: "The Central Limit Theorem states that?",
      options: [
        "The population must be normally distributed for X̄ to be normal",
        "Even from non-normal populations, X̄ approaches N(μ, σ²/n) as sample size increases",
        "The sample mean equals the population mean always",
        "The variance of X̄ increases with sample size"
      ],
      correct: 1,
      explanation: "The Central Limit Theorem states that even if the sample is taken from a non-normal population, when the sample size increases, X̄ is approximately normally distributed with mean μ and variance σ²/n."
    },
    {
      id: 18,
      question: "For the sample proportion P̂ = X/n from a large sample, P̂ is approximately?",
      options: [
        "N(p, pq) where q = 1-p",
        "N(p, pq/n) where q = 1-p",
        "N(0, 1)",
        "Bin(n, p)"
      ],
      correct: 1,
      explanation: "For large samples (n > 30), P̂ ~ N(p, pq/n) where q = 1-p. This follows from the normal approximation to the binomial distribution."
    },
    {
      id: 19,
      question: "What is the confidence level (1-α)100%?",
      options: [
        "The probability that the sample mean equals the population mean",
        "The probability that the confidence interval contains the true parameter",
        "The probability of Type I error",
        "The probability of rejecting H₀"
      ],
      correct: 1,
      explanation: "The confidence level (1-α)100% gives the probability that the confidence interval [L, U] will contain the true parameter θ. When we create infinite intervals, (1-α)100% of them contain the true parameter."
    },
    {
      id: 20,
      question: "In interval estimation, P(L ≤ θ ≤ U) = 1-α. What are L and U?",
      options: [
        "The population parameters",
        "The sample values",
        "The lower and upper confidence limits",
        "The mean and variance"
      ],
      correct: 2,
      explanation: "L and U are the lower and upper confidence limits. The interval [L, U] is the (1-α)100% confidence interval for the parameter θ."
    },
    {
      id: 21,
      question: "A 95% confidence interval means?",
      options: [
        "95% of the data falls in the interval",
        "There is a 95% chance the true parameter lies in this specific interval",
        "In repeated sampling, 95% of such intervals would contain the true parameter",
        "The parameter equals the sample statistic with 95% accuracy"
      ],
      correct: 2,
      explanation: "A 95% CI means that if we create infinite intervals by getting random samples repeatedly, 95% of them would contain the true parameter θ."
    },
    {
      id: 22,
      question: "Probability Sampling is mainly used in what type of research?",
      options: [
        "Qualitative research",
        "Exploratory research",
        "Quantitative research",
        "Case study research"
      ],
      correct: 2,
      explanation: "Probability sampling is mainly used in quantitative research. If you want to produce results that are representative of the whole population, probability sampling techniques are the most valid choice."
    },
    {
      id: 23,
      question: "Non-probability sampling has a higher risk of?",
      options: [
        "Large sample size",
        "Sampling bias",
        "Being too representative",
        "High cost"
      ],
      correct: 1,
      explanation: "Non-probability sampling has a higher risk of sampling bias. The inferences you can make about the population are weaker than with probability samples."
    },
    {
      id: 24,
      question: "Which of these is NOT a probability sampling technique?",
      options: [
        "Simple Random Sampling",
        "Systematic Sampling",
        "Convenience Sampling",
        "Cluster Sampling"
      ],
      correct: 2,
      explanation: "Convenience Sampling is a Non-Probability sampling technique. Probability sampling techniques include Simple Random, Systematic, Stratified, and Cluster Sampling."
    },
    {
      id: 25,
      question: "For the sample mean X̄ from N(μ, σ²), what is V(X̄)?",
      options: [
        "σ²",
        "σ²/n",
        "σ/n",
        "nσ²"
      ],
      correct: 1,
      explanation: "V(X̄) = σ²/n. The variance of the sample mean decreases as the sample size n increases, making the estimate more precise."
    },
    // ─── Missing: Estimator vs Estimate ───
    {
      id: 26,
      question: "What is the difference between an 'estimator' and an 'estimate'?",
      options: [
        "An estimator is a statistic (formula/rule), an estimate is the numerical value computed from data",
        "They are the same thing",
        "An estimate is the formula, an estimator is the value",
        "An estimator uses population data, an estimate uses sample data"
      ],
      correct: 0,
      explanation: "An estimator is a statistic (a function of sample data) used as a rule, e.g., X̄ = ΣXᵢ/n. An estimate is the specific numerical value obtained when the estimator is applied to actual data, e.g., X̄ = 50.3."
    },
    // ─── Missing: Efficiency of estimators ───
    {
      id: 27,
      question: "Among all unbiased estimators, the most efficient estimator is the one with:",
      options: [
        "The smallest variance",
        "The largest variance",
        "The largest bias",
        "The most parameters"
      ],
      correct: 0,
      explanation: "Efficiency measures how 'tight' the sampling distribution is. Among unbiased estimators, the most efficient one has the smallest variance — its estimates are most consistently close to the true parameter."
    },
    // ─── Missing: Doubling sample size effect ───
    {
      id: 28,
      question: "If you double the sample size n, what happens to the standard error of X̄ (i.e., σ/√n)?",
      options: [
        "It is divided by √2 (decreases by about 29%)",
        "It is halved",
        "It stays the same",
        "It doubles"
      ],
      correct: 0,
      explanation: "SE = σ/√n. If n doubles: σ/√(2n) = σ/(√2 × √n) = SE/√2. The standard error decreases by a factor of √2 ≈ 1.414, which is about a 29% reduction — not halved."
    },
    // ─── Missing: CI interpretation (repeated sampling) ───
    {
      id: 29,
      question: "A 95% confidence interval means:",
      options: [
        "There is a 95% probability the true parameter is in this specific interval",
        "If we repeated sampling many times and built a CI each time, about 95% of those intervals would contain the true parameter",
        "95% of the data falls in this interval",
        "The sample mean is 95% accurate"
      ],
      correct: 1,
      explanation: "The frequentist interpretation: if we repeated the process infinitely, 95% of the constructed intervals would contain the true parameter. Any single interval either contains it or doesn't — the 95% refers to the long-run success rate of the procedure."
    },
    // ─── Missing: Desirable properties of CI ───
    {
      id: 30,
      question: "A good confidence interval should have which two properties?",
      options: [
        "High confidence level AND narrow width",
        "Low confidence level AND wide width",
        "High confidence level AND wide width",
        "Only high confidence level matters"
      ],
      correct: 0,
      explanation: "Two desirable properties: (1) high probability of containing the true parameter (high confidence level), and (2) narrow width (high precision). These conflict — increasing confidence widens the interval."
    }
  ]
};

export default note02;

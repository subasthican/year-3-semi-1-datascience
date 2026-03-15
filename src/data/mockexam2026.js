const mockexam2026 = {
  id: 10,
  title: "Mock Exam 2026 – Mid Exam MCQs",
  questions: [
    // ─── Random Variables & Distributions ───
    {
      id: 1,
      question: "What is a random variable?",
      options: [
        "A variable that always has a fixed value",
        "A variable that assigns numerical values to outcomes of a random experiment",
        "A variable that cannot be measured",
        "A variable that represents only continuous values",
        "A variable that never changes"
      ],
      correct: 1,
      explanation: "A random variable is a function that assigns a numerical value to each outcome of a random experiment. It maps outcomes from the sample space to real numbers."
    },
    {
      id: 2,
      question: "Which of the following best describes a discrete random variable?",
      options: [
        "A variable that can take any value within an interval",
        "A variable that can take infinitely many decimal values",
        "A variable that takes only specific countable values",
        "A variable that cannot be measured numerically",
        "A variable that always follows a normal distribution"
      ],
      correct: 2,
      explanation: "A discrete random variable can only take specific countable values (e.g., 0, 1, 2, 3, …). Examples include number of heads in coin flips or number of defective items."
    },
    {
      id: 3,
      question: "Which of the following is an example of a continuous random variable?",
      options: [
        "Number of students in a classroom",
        "Number of heads obtained in coin tossing",
        "Number of defective items in a batch",
        "Height of a student",
        "Number of cars in a parking lot"
      ],
      correct: 3,
      explanation: "Height of a student is continuous — it can take any value within a range (e.g., 165.3 cm, 172.8 cm). The other options are counts, which are discrete."
    },
    {
      id: 4,
      question: "What is the sample space of an experiment?",
      options: [
        "The probability of an event",
        "The set of all possible outcomes of an experiment",
        "The average of all outcomes",
        "The number of events occurring in an experiment",
        "The number of trials conducted"
      ],
      correct: 1,
      explanation: "The sample space (S or Ω) is the set of all possible outcomes of a random experiment. For a coin flip: S = {H, T}. For rolling a die: S = {1, 2, 3, 4, 5, 6}."
    },
    {
      id: 5,
      question: "Which function represents the probability of a discrete random variable?",
      options: [
        "Probability Density Function (PDF)",
        "Probability Mass Function (PMF)",
        "Cumulative Frequency Function",
        "Linear Probability Function",
        "Statistical Distribution Function"
      ],
      correct: 1,
      explanation: "The Probability Mass Function (PMF) gives the probability that a discrete random variable equals a specific value: P(X = x). For continuous variables, we use the Probability Density Function (PDF)."
    },
    {
      id: 6,
      question: "Which of the following conditions must always be true for a probability distribution?",
      options: [
        "All probabilities must be greater than 1",
        "All probabilities must be negative",
        "The sum of all probabilities must be equal to 1",
        "The sum of all probabilities must be equal to 0.5",
        "Probabilities must always be equal across all outcomes"
      ],
      correct: 2,
      explanation: "The two axioms for a valid probability distribution are: (1) each probability P(X=x) ≥ 0, and (2) the sum of all probabilities = 1. This ensures total probability is accounted for."
    },
    {
      id: 7,
      question: "Which distribution is used when an experiment has only two possible outcomes such as success or failure?",
      options: [
        "Normal Distribution",
        "Poisson Distribution",
        "Bernoulli Distribution",
        "Exponential Distribution",
        "Uniform Distribution"
      ],
      correct: 2,
      explanation: "The Bernoulli Distribution models a single trial with exactly two outcomes: success (p) or failure (1-p). It is the simplest discrete probability distribution."
    },
    {
      id: 8,
      question: "Which distribution describes the number of successes in a fixed number of independent trials?",
      options: [
        "Binomial Distribution",
        "Normal Distribution",
        "Geometric Distribution",
        "Uniform Distribution",
        "Exponential Distribution"
      ],
      correct: 0,
      explanation: "The Binomial Distribution models the number of successes in n independent trials, each with probability p of success. X ~ Bin(n, p), P(X=k) = C(n,k)·p^k·(1-p)^(n-k)."
    },
    {
      id: 9,
      question: "Which distribution is commonly used to model the number of events occurring in a fixed time interval?",
      options: [
        "Uniform Distribution",
        "Poisson Distribution",
        "Bernoulli Distribution",
        "Binomial Distribution",
        "Normal Distribution"
      ],
      correct: 1,
      explanation: "The Poisson Distribution models the number of events occurring in a fixed time (or space) interval at a constant average rate λ. P(X=k) = e^(-λ)·λ^k / k!."
    },
    {
      id: 10,
      question: "In a normal distribution, which parameter represents the spread of the data?",
      options: [
        "Mean",
        "Mode",
        "Median",
        "Standard deviation",
        "Sample size"
      ],
      correct: 3,
      explanation: "The standard deviation (σ) represents the spread of the data in a normal distribution. A larger σ means more spread out data. The mean (μ) controls the center, while σ controls the width."
    },
    // ─── Sampling and Statistical Inference ───
    {
      id: 11,
      question: "What is a sample in statistics?",
      options: [
        "The entire population being studied",
        "A subset of the population used for analysis",
        "A statistical formula",
        "A parameter of a distribution",
        "A type of probability distribution"
      ],
      correct: 1,
      explanation: "A sample is a subset selected from the population. We analyze the sample to make inferences about the full population, since studying every member (census) is often impractical."
    },
    {
      id: 12,
      question: "What is the main goal of statistical inference?",
      options: [
        "To describe only the sample data",
        "To draw conclusions about the population using sample data",
        "To calculate probabilities only",
        "To eliminate randomness in data",
        "To increase the sample size"
      ],
      correct: 1,
      explanation: "Statistical inference uses sample data to make conclusions (estimates or tests) about the underlying population. It involves estimation and hypothesis testing."
    },
    {
      id: 13,
      question: "What is a random sample?",
      options: [
        "A sample selected without any rule",
        "A sample where every population member has an equal chance of being selected",
        "A sample chosen only from nearby participants",
        "A sample that contains only large values",
        "A sample chosen by researchers manually"
      ],
      correct: 1,
      explanation: "A random sample ensures every member of the population has an equal probability of being selected. This randomness is essential for valid statistical inference and avoiding bias."
    },
    {
      id: 14,
      question: "Which of the following is an example of probability sampling?",
      options: [
        "Convenience sampling",
        "Snowball sampling",
        "Purposive sampling",
        "Simple random sampling",
        "Voluntary response sampling"
      ],
      correct: 3,
      explanation: "Simple random sampling is a probability sampling method — every member has a known, equal chance of selection. The other options (convenience, snowball, purposive, voluntary) are non-probability methods."
    },
    {
      id: 15,
      question: "Which sampling method selects individuals based on convenience rather than randomness?",
      options: [
        "Stratified sampling",
        "Cluster sampling",
        "Convenience sampling",
        "Simple random sampling",
        "Systematic sampling"
      ],
      correct: 2,
      explanation: "Convenience sampling selects individuals who are easiest to reach, without randomness. It is prone to bias. Examples: surveying only your friends, or interviewing people in a shopping mall."
    },
    {
      id: 16,
      question: "In statistical inference, the unknown value describing a population is called:",
      options: [
        "Sample statistic",
        "Parameter",
        "Random variable",
        "Probability value",
        "Observation"
      ],
      correct: 1,
      explanation: "A parameter is a numerical value that describes a characteristic of the entire population (e.g., population mean μ, population variance σ²). It is usually unknown and estimated from sample data."
    },
    {
      id: 17,
      question: "What is an estimator?",
      options: [
        "A population parameter",
        "A numerical value of a parameter",
        "A statistic used to estimate a population parameter",
        "A probability distribution",
        "A sampling method"
      ],
      correct: 2,
      explanation: "An estimator is a formula or rule (a sample statistic) used to estimate an unknown population parameter. For example, x̄ is an estimator for μ, and S² is an estimator for σ²."
    },
    {
      id: 18,
      question: "What is point estimation?",
      options: [
        "Estimating a parameter using an interval of values",
        "Estimating a parameter using a single value from sample data",
        "Estimating probabilities only",
        "Estimating the variance of a population",
        "Estimating sample size"
      ],
      correct: 1,
      explanation: "Point estimation provides a single value (a 'point') as the best guess for an unknown parameter. E.g., x̄ = 50.2 as a point estimate for μ. Contrast with interval estimation (confidence intervals)."
    },
    {
      id: 19,
      question: "What is a sampling distribution?",
      options: [
        "Distribution of population parameters",
        "Distribution of probabilities in an experiment",
        "Distribution of a sample statistic obtained from many samples",
        "Distribution of raw population data",
        "Distribution of sample sizes"
      ],
      correct: 2,
      explanation: "A sampling distribution is the probability distribution of a sample statistic (like x̄) computed over many repeated samples of the same size from the same population."
    },
    {
      id: 20,
      question: "What does the Central Limit Theorem state?",
      options: [
        "Sample means are always equal to population mean",
        "Sample mean distribution becomes approximately normal as sample size increases",
        "Population must always follow normal distribution",
        "All samples must be identical",
        "Variance becomes zero for large samples"
      ],
      correct: 1,
      explanation: "The Central Limit Theorem (CLT) states that as sample size n increases (typically n ≥ 30), the sampling distribution of x̄ approaches a normal distribution with mean μ and standard error σ/√n, regardless of the population's shape."
    },
    // ─── Hypothesis Testing ───
    {
      id: 21,
      question: "What is a hypothesis in statistics?",
      options: [
        "A fixed value in a dataset",
        "A claim or assumption about a population parameter",
        "A random variable",
        "A sampling technique",
        "A type of probability distribution"
      ],
      correct: 1,
      explanation: "A statistical hypothesis is a claim or statement about one or more population parameters. We formulate a null hypothesis (H₀) and an alternative hypothesis (H₁) that we test using sample data."
    },
    {
      id: 22,
      question: "Which symbol is used to represent the Null Hypothesis?",
      options: [
        "H₁",
        "Hₐ",
        "H₀",
        "Hα",
        "Hβ"
      ],
      correct: 2,
      explanation: "H₀ (read as 'H-naught' or 'H-zero') represents the null hypothesis — the statement we initially assume to be true and attempt to disprove. H₁ or Hₐ represents the alternative hypothesis."
    },
    {
      id: 23,
      question: "The alternative hypothesis is usually represented by:",
      options: [
        "H₀",
        "H₁ or Hₐ",
        "Hβ",
        "Hσ",
        "Hμ"
      ],
      correct: 1,
      explanation: "H₁ (or Hₐ) is the alternative hypothesis — the claim we are trying to support. We reject H₀ in favor of H₁ when there is sufficient statistical evidence."
    },
    {
      id: 24,
      question: "In hypothesis testing, the null hypothesis is usually:",
      options: [
        "A statement that must always be true",
        "The opposite of the claim being tested",
        "The claim we initially assume to be true",
        "A statement about the sample only",
        "A probability distribution"
      ],
      correct: 2,
      explanation: "The null hypothesis H₀ represents the status quo or the default assumption (e.g., no effect, no difference). We assume it is true until sample evidence gives us reason to reject it."
    },
    {
      id: 25,
      question: "When we reject the null hypothesis, we are supporting:",
      options: [
        "The population parameter",
        "The alternative hypothesis",
        "The sample mean",
        "The probability distribution",
        "The estimator"
      ],
      correct: 1,
      explanation: "Rejecting H₀ means the sample evidence is strong enough to conclude that H₁ (the alternative hypothesis) is likely true. We never 'prove' H₀; we only reject or fail to reject it."
    },
    {
      id: 26,
      question: "A Type I error occurs when:",
      options: [
        "We reject the null hypothesis when it is actually true",
        "We accept the null hypothesis when it is true",
        "We reject the alternative hypothesis",
        "We calculate the wrong sample size",
        "We make a calculation mistake"
      ],
      correct: 0,
      explanation: "Type I error (false positive) = rejecting H₀ when H₀ is actually true. The probability of a Type I error is α (the significance level). E.g., convicting an innocent person."
    },
    {
      id: 27,
      question: "A Type II error occurs when:",
      options: [
        "We reject the null hypothesis when it is true",
        "We do not reject the null hypothesis when it is false",
        "We reject both hypotheses",
        "We accept the alternative hypothesis incorrectly",
        "We collect incorrect data"
      ],
      correct: 1,
      explanation: "Type II error (false negative) = failing to reject H₀ when H₀ is actually false. The probability of a Type II error is β. E.g., acquitting a guilty person. Power = 1 − β."
    },
    {
      id: 28,
      question: "The probability of making a Type I error is represented by:",
      options: [
        "β (beta)",
        "γ (gamma)",
        "σ (sigma)",
        "α (alpha)",
        "ε (epsilon)"
      ],
      correct: 3,
      explanation: "α (alpha) is the probability of a Type I error = P(reject H₀ | H₀ is true). We set α before conducting the test. Common choices: α = 0.05 or α = 0.01."
    },
    {
      id: 29,
      question: "The significance level in hypothesis testing represents:",
      options: [
        "Probability of Type II error",
        "Probability of Type I error",
        "Sample variance",
        "Population mean",
        "Sampling distribution"
      ],
      correct: 1,
      explanation: "The significance level α is the maximum acceptable probability of a Type I error. Setting α = 0.05 means we accept a 5% chance of falsely rejecting a true H₀."
    },
    {
      id: 30,
      question: "Which of the following is a commonly used significance level in hypothesis testing?",
      options: [
        "0.50",
        "0.25",
        "0.10",
        "0.80",
        "1.20"
      ],
      correct: 2,
      explanation: "α = 0.10 is one of the commonly used significance levels (along with 0.05 and 0.01). From the given options, 0.10 is the standard statistical significance threshold. Values > 0.10 or > 1 are not valid significance levels."
    },
    // ─── One-Sample Hypothesis Testing ───
    {
      id: 31,
      question: "In hypothesis testing for one population mean, the parameter being tested is:",
      options: [
        "Population variance",
        "Population proportion",
        "Population mean",
        "Sample mean",
        "Sample variance"
      ],
      correct: 2,
      explanation: "When testing one population mean, we test hypotheses about μ (the population mean). We use sample data (x̄, s, n) to make inferences about the unknown μ."
    },
    {
      id: 32,
      question: "The symbol commonly used for the population mean is:",
      options: [
        "μ (mu)",
        "σ (sigma)",
        "x̄ (x-bar)",
        "p",
        "n"
      ],
      correct: 0,
      explanation: "μ (mu) is the standard notation for the population mean. x̄ (x-bar) is the sample mean, σ is the population standard deviation, and s is the sample standard deviation."
    },
    {
      id: 33,
      question: "The symbol x̄ (x-bar) represents:",
      options: [
        "Population mean",
        "Sample mean",
        "Population variance",
        "Sample size",
        "Standard deviation"
      ],
      correct: 1,
      explanation: "x̄ (x-bar) is the sample mean — the average of all values in the sample. It is an unbiased estimator of the population mean μ. x̄ = (Σxᵢ) / n."
    },
    {
      id: 34,
      question: "When the population standard deviation is known, which test statistic is usually used for hypothesis testing of a population mean?",
      options: [
        "t-test",
        "F-test",
        "Z-test",
        "Chi-square test",
        "Regression test"
      ],
      correct: 2,
      explanation: "When σ is known, the Z-test is used: Z = (x̄ − μ₀) / (σ/√n). The test statistic follows standard normal distribution N(0,1). When σ is unknown, we use the t-test instead."
    },
    {
      id: 35,
      question: "When the population standard deviation is unknown and the sample size is small, which test is typically used?",
      options: [
        "Z-test",
        "t-test",
        "Chi-square test",
        "F-test",
        "Binomial test"
      ],
      correct: 1,
      explanation: "When σ is unknown, we use S (sample standard deviation) and apply the t-test: t = (x̄ − μ₀) / (S/√n). The test statistic follows a t-distribution with (n−1) degrees of freedom."
    },
    {
      id: 36,
      question: "In a hypothesis test for a population mean, the test statistic measures:",
      options: [
        "The number of samples collected",
        "How far the sample mean is from the hypothesized population mean",
        "The variance of the population",
        "The number of parameters in the model",
        "The total probability of the sample"
      ],
      correct: 1,
      explanation: "The test statistic Z = (x̄ − μ₀)/(σ/√n) measures how many standard errors the sample mean x̄ is from the hypothesized value μ₀. A large absolute value provides evidence against H₀."
    },
    {
      id: 37,
      question: "The standard error of the mean represents:",
      options: [
        "The spread of individual observations",
        "The variability of the sample mean",
        "The average error in measurements",
        "The probability of a Type I error",
        "The probability of a Type II error"
      ],
      correct: 1,
      explanation: "The standard error of the mean = σ/√n (or s/√n). It measures how much the sample mean x̄ varies from sample to sample. Larger n → smaller SE → more precise estimate of μ."
    },
    // ─── Two-Tailed, One-Tailed Tests & Decision Rules ───
    {
      id: 38,
      question: "A two-tailed hypothesis test is used when:",
      options: [
        "The alternative hypothesis states the parameter is greater than a value",
        "The alternative hypothesis states the parameter is less than a value",
        "The alternative hypothesis states the parameter is different from a value",
        "The sample size is very large",
        "The population variance is zero"
      ],
      correct: 2,
      explanation: "A two-tailed test is used when H₁: μ ≠ μ₀ (parameter differs from the hypothesized value, either higher or lower). The significance level α is split equally between both tails."
    },
    {
      id: 39,
      question: "A left-tailed test is used when the alternative hypothesis is:",
      options: [
        "μ > μ₀",
        "μ ≠ μ₀",
        "μ < μ₀",
        "μ = μ₀",
        "μ ≥ μ₀"
      ],
      correct: 2,
      explanation: "A left-tailed (lower-tailed) test is used when H₁: μ < μ₀. The rejection region is in the left tail. H₀ is rejected when the test statistic is less than the negative critical value."
    },
    {
      id: 40,
      question: "The decision rule in hypothesis testing is based mainly on:",
      options: [
        "Sample size only",
        "Significance level and test statistic",
        "Population size only",
        "Sample variance only",
        "Number of variables"
      ],
      correct: 1,
      explanation: "The decision rule compares the test statistic to the critical value (determined by α), or compares the p-value to α. Reject H₀ if |test statistic| > critical value, or if p-value < α."
    },
    // ─── Two-Sample Tests ───
    {
      id: 41,
      question: "When comparing two population means, the parameter usually tested is:",
      options: [
        "μ₁ + μ₂",
        "μ₁ × μ₂",
        "μ₁ − μ₂",
        "μ₁ / μ₂",
        "μ₁² − μ₂²"
      ],
      correct: 2,
      explanation: "When comparing two populations, the parameter of interest is the difference μ₁ − μ₂. H₀: μ₁ − μ₂ = 0 (i.e., μ₁ = μ₂). The test statistic measures how far the observed difference (x̄₁ − x̄₂) is from zero."
    },
    {
      id: 42,
      question: "When testing equality of two population means, the null hypothesis is commonly written as:",
      options: [
        "μ₁ + μ₂ = 0",
        "μ₁ − μ₂ = 0",
        "μ₁ = 0",
        "μ₂ = 0",
        "μ₁ × μ₂ = 0"
      ],
      correct: 1,
      explanation: "H₀: μ₁ − μ₂ = 0 is equivalent to H₀: μ₁ = μ₂. We test whether there is a statistically significant difference between the two population means."
    },
    {
      id: 43,
      question: "In comparing two population means, independent samples refer to:",
      options: [
        "Samples taken from the same observation repeatedly",
        "Samples that influence each other",
        "Samples taken randomly from two unrelated populations",
        "Samples taken from the same population",
        "Samples with equal means"
      ],
      correct: 2,
      explanation: "Independent samples are drawn from two separate, unrelated populations with no relationship between individual observations. Contrast with paired/dependent samples where each observation in one group is matched with one in the other."
    },
    {
      id: 44,
      question: "The sampling distribution of the difference between two sample means is:",
      options: [
        "Always uniform",
        "Always binomial",
        "Approximately normal under certain conditions",
        "Always exponential",
        "Always chi-square"
      ],
      correct: 2,
      explanation: "By the CLT, x̄₁ − x̄₂ is approximately normally distributed for large samples. Its mean is μ₁ − μ₂ and its variance is σ₁²/n₁ + σ₂²/n₂."
    },
    {
      id: 45,
      question: "When population variances are known, the test statistic used for comparing two means is usually:",
      options: [
        "t statistic",
        "Z statistic",
        "F statistic",
        "Chi-square statistic",
        "Regression coefficient"
      ],
      correct: 1,
      explanation: "When both σ₁² and σ₂² are known, we use the Z statistic: Z = (x̄₁ − x̄₂ − D₀) / √(σ₁²/n₁ + σ₂²/n₂), which follows N(0,1)."
    },
    {
      id: 46,
      question: "When population variances are unknown but assumed equal, the test statistic typically used is:",
      options: [
        "Z statistic",
        "t statistic with pooled variance",
        "F statistic",
        "Binomial statistic",
        "Uniform statistic"
      ],
      correct: 1,
      explanation: "When σ₁² = σ₂² (but unknown), we pool the sample variances: Sp² = [(n₁−1)S₁² + (n₂−1)S₂²] / (n₁+n₂−2), then use t = (x̄₁ − x̄₂) / (Sp√(1/n₁ + 1/n₂)), with df = n₁+n₂−2."
    },
    {
      id: 47,
      question: "The pooled variance is used when:",
      options: [
        "The two populations have equal variances",
        "The sample sizes are equal",
        "The population means are equal",
        "The samples are dependent",
        "The distribution is uniform"
      ],
      correct: 0,
      explanation: "Pooled variance Sp² is used when we assume σ₁² = σ₂² (equal population variances). We verify this assumption using Levene's test or an F-test for two variances before using the pooled t-test."
    },
    {
      id: 48,
      question: "In a paired sample test, the analysis is based on:",
      options: [
        "The individual sample values",
        "The population variances",
        "The differences between paired observations",
        "The product of sample values",
        "The ratio of sample means"
      ],
      correct: 2,
      explanation: "In a paired test, we compute dᵢ = x₁ᵢ − x₂ᵢ for each pair, then test H₀: μd = 0 using d̄ and Sd. This removes between-subject variation, increasing power."
    },
    {
      id: 49,
      question: "In paired sample testing, the test statistic usually follows:",
      options: [
        "Normal distribution",
        "Binomial distribution",
        "t distribution with (n − 1) degrees of freedom",
        "Poisson distribution",
        "Uniform distribution"
      ],
      correct: 2,
      explanation: "The paired t-test statistic is t = d̄ / (Sd/√n), which follows a t-distribution with df = n − 1, where n is the number of pairs."
    },
    {
      id: 50,
      question: "Paired samples are commonly used when:",
      options: [
        "Two completely unrelated samples are taken",
        "Each observation in one sample is related to an observation in another sample",
        "Sample sizes are very large",
        "Population variance is known",
        "Data is categorical"
      ],
      correct: 1,
      explanation: "Paired samples occur when each observation in group 1 is naturally matched with an observation in group 2. Examples: before/after measurements on the same person, or twins in a study."
    },
    // ─── ANOVA ───
    {
      id: 51,
      question: "ANOVA (Analysis of Variance) is mainly used to:",
      options: [
        "Compare variances of multiple populations",
        "Compare means of multiple populations",
        "Compare sample sizes",
        "Compare proportions",
        "Compare correlations"
      ],
      correct: 1,
      explanation: "ANOVA tests H₀: μ₁ = μ₂ = … = μₖ (all population means are equal) against H₁: at least one mean differs. Despite 'variance' in its name, ANOVA compares means by analyzing variance sources."
    },
    {
      id: 52,
      question: "ANOVA separates the total variation into:",
      options: [
        "Random variation and systematic variation",
        "Between-group variation and within-group variation",
        "Population variation and sampling variation",
        "Mean variation and median variation",
        "Normal variation and abnormal variation"
      ],
      correct: 1,
      explanation: "SST = SSA + SSW. SSA (Sum of Squares Among groups) measures variation between group means. SSW (Sum of Squares Within groups) measures variation within each group (error)."
    },
    {
      id: 53,
      question: "In One-Way ANOVA, the null hypothesis is:",
      options: [
        "All population variances are equal",
        "All population means are equal",
        "At least one population mean is different",
        "All sample means are zero",
        "Sample sizes are equal"
      ],
      correct: 1,
      explanation: "H₀: μ₁ = μ₂ = … = μₖ. All population means are equal across the k groups. If we reject H₀, we conclude at least one mean differs (post-hoc tests identify which)."
    },
    {
      id: 54,
      question: "The alternative hypothesis in One-Way ANOVA states:",
      options: [
        "All population means are equal",
        "At least one population mean is different",
        "All population variances are equal",
        "All sample means are equal",
        "All population means are zero"
      ],
      correct: 1,
      explanation: "H₁: Not all μᵢ are equal (at least one population mean differs). Note: H₁ does NOT say all means are different — even one differing mean causes H₀ to be false."
    },
    {
      id: 55,
      question: "In ANOVA, SSA represents:",
      options: [
        "Sum of squares among groups",
        "Sum of squares within groups",
        "Total sum of squares",
        "Mean square among groups",
        "Mean square within groups"
      ],
      correct: 0,
      explanation: "SSA = Sum of Squares Among groups = Σ nᵢ(x̄ᵢ − x̄)². It measures how much each group mean deviates from the overall grand mean. Also called SSB (between groups)."
    },
    {
      id: 56,
      question: "The relationship between sums of squares in ANOVA is:",
      options: [
        "SST = SSA × SSW",
        "SST = SSA + SSW",
        "SST = SSA − SSW",
        "SSA = SST + SSW",
        "SSA = SST × SSW"
      ],
      correct: 1,
      explanation: "SST = SSA + SSW is the fundamental ANOVA partition. Total variation = Between-group variation + Within-group variation. This decomposition allows the F-test."
    },
    {
      id: 57,
      question: "The F statistic in ANOVA is calculated as:",
      options: [
        "MSA − MSW",
        "MSW + MSA",
        "MSA ÷ MSW",
        "SST ÷ SSA",
        "SSA ÷ SST"
      ],
      correct: 2,
      explanation: "F = MSA / MSW = (SSA/(k−1)) / (SSW/(n−k)). A large F means between-group variation greatly exceeds within-group variation, suggesting means are not all equal. Reject H₀ if F > Fα,k-1,n-k."
    },
    {
      id: 58,
      question: "In ANOVA, MSA stands for:",
      options: [
        "Mean square among groups",
        "Mean square within groups",
        "Mean square total",
        "Mean square average",
        "Mean square analysis"
      ],
      correct: 0,
      explanation: "MSA = SSA / (k−1), where k is the number of groups. It is the among-group mean square, used as the numerator of the F statistic. MSW = SSW/(n−k) is the denominator."
    },
    {
      id: 59,
      question: "Levene's Test is used to check:",
      options: [
        "Equality of population means",
        "Equality of population variances",
        "Equality of sample sizes",
        "Equality of distributions",
        "Equality of correlations"
      ],
      correct: 1,
      explanation: "Levene's Test checks H₀: σ₁² = σ₂² = … = σₖ² (homogeneity of variances), which is an assumption of ANOVA and the pooled t-test. If Levene's test is significant, variances are not equal."
    },
    // ─── ANOVA conclusion & Proportions ───
    {
      id: 60,
      question: "When ANOVA rejects the null hypothesis, it means:",
      options: [
        "All means are equal",
        "At least one population mean is different",
        "All variances are different",
        "Sample sizes are unequal",
        "Data is not normally distributed"
      ],
      correct: 1,
      explanation: "Rejecting H₀ in ANOVA means at least one group mean differs from the others. Post-hoc tests (e.g., Tukey, Bonferroni) are needed to identify which specific pairs of means differ."
    },
    {
      id: 61,
      question: "A population proportion represents:",
      options: [
        "The average value of a population",
        "The variance of a population",
        "The fraction of elements in a population having a particular characteristic",
        "The size of a population",
        "The number of observations in a sample"
      ],
      correct: 2,
      explanation: "Population proportion p = X/N where X is the number of elements with the characteristic and N is the population size. For example, p = proportion of voters who support a candidate."
    },
    {
      id: 62,
      question: "In population proportion notation, the symbol p represents:",
      options: [
        "Sample mean",
        "Population proportion of success",
        "Population variance",
        "Sample size",
        "Standard deviation"
      ],
      correct: 1,
      explanation: "p is the population proportion of successes (the true, usually unknown value). p̂ (p-hat) is the sample proportion = x/n, used to estimate p."
    },
    {
      id: 63,
      question: "If p is the probability of success, then q is defined as:",
      options: [
        "q = p",
        "q = 1 − p",
        "q = p²",
        "q = √p",
        "q = p/n"
      ],
      correct: 1,
      explanation: "q = 1 − p is the probability of failure (complementary probability). p + q = 1. In a Binomial distribution: mean = np, variance = npq = np(1−p)."
    },
    {
      id: 64,
      question: "For large samples, the sampling distribution of the sample proportion p̂ approximately follows:",
      options: [
        "Binomial distribution",
        "Normal distribution",
        "Poisson distribution",
        "Uniform distribution",
        "Chi-square distribution"
      ],
      correct: 1,
      explanation: "By the CLT, for large n (np ≥ 5 and n(1−p) ≥ 5), p̂ ~ N(p, pq/n) approximately. This allows Z-tests and confidence intervals for proportions."
    },
    {
      id: 65,
      question: "The expected value of the sample proportion p̂ is:",
      options: [
        "n",
        "p",
        "q",
        "np",
        "pq"
      ],
      correct: 1,
      explanation: "E(p̂) = p. The sample proportion is an unbiased estimator of the population proportion. Its variance is Var(p̂) = pq/n = p(1−p)/n."
    },
    {
      id: 66,
      question: "The variance of the sample proportion p̂ is:",
      options: [
        "pq",
        "pq/n",
        "p/n",
        "q/n",
        "n/pq"
      ],
      correct: 1,
      explanation: "Var(p̂) = pq/n = p(1−p)/n. The standard error of p̂ is SE = √(pq/n). Larger n → smaller SE → more precise estimate of the population proportion p."
    },
    {
      id: 67,
      question: "The test statistic used for hypothesis testing of one population proportion is:",
      options: [
        "t statistic",
        "F statistic",
        "Z statistic",
        "Chi-square statistic",
        "Regression statistic"
      ],
      correct: 2,
      explanation: "For testing H₀: p = p₀, the Z statistic is used: Z = (p̂ − p₀) / √(p₀q₀/n). This follows approximately N(0,1) for large samples (np₀ ≥ 5 and nq₀ ≥ 5)."
    },
    {
      id: 68,
      question: "In testing a single population proportion, the test statistic formula is based on:",
      options: [
        "Difference between sample mean and population mean",
        "Difference between sample proportion and population proportion",
        "Difference between variances",
        "Difference between medians",
        "Difference between sample sizes"
      ],
      correct: 1,
      explanation: "Z = (p̂ − p₀) / √(p₀(1−p₀)/n). The numerator (p̂ − p₀) is the difference between the observed sample proportion p̂ and the hypothesized population proportion p₀."
    },
    {
      id: 69,
      question: "In hypothesis testing for proportions, the value p̂ represents:",
      options: [
        "Population proportion",
        "Sample proportion",
        "Population variance",
        "Sample variance",
        "Population mean"
      ],
      correct: 1,
      explanation: "p̂ (p-hat) = x/n is the sample proportion — the observed fraction of successes in the sample. It is the point estimator of the unknown population proportion p."
    },
    {
      id: 70,
      question: "In hypothesis testing for two population proportions when the hypothesized difference is 0, a pooled proportion is used to estimate:",
      options: [
        "Population variance",
        "The common population proportion",
        "Sample variance",
        "Population mean",
        "Sample mean"
      ],
      correct: 1,
      explanation: "When H₀: p₁ = p₂ (difference = 0), we pool: p̄ = (x₁ + x₂)/(n₁ + n₂). This pooled proportion estimates the single common population proportion assumed under H₀."
    },
    // ─── Population Variance ───
    {
      id: 71,
      question: "In statistical inference, the population variance is usually represented by:",
      options: [
        "μ",
        "σ²",
        "σ",
        "ρ",
        "x̄"
      ],
      correct: 1,
      explanation: "σ² (sigma-squared) is the standard notation for population variance. σ is the population standard deviation. S² and S are the corresponding sample statistics."
    },
    {
      id: 72,
      question: "The sampling distribution used to construct confidence intervals for population variance follows:",
      options: [
        "Normal distribution",
        "t distribution",
        "Chi-square distribution",
        "F distribution",
        "Binomial distribution"
      ],
      correct: 2,
      explanation: "The chi-square distribution (χ²) is used for inference about population variance. The pivotal quantity (n−1)S²/σ² follows a χ² distribution with (n−1) degrees of freedom."
    },
    {
      id: 73,
      question: "When the population mean is unknown, the pivotal quantity used for variance inference is:",
      options: [
        "nS²/σ²",
        "(n−1)S²/σ²",
        "S²/σ²",
        "σ/S²",
        "(n−1)σ²/S²"
      ],
      correct: 1,
      explanation: "χ² = (n−1)S²/σ² follows a chi-square distribution with df = n−1. This is used to construct confidence intervals and test hypotheses about σ². The (n−1) factor accounts for using x̄ instead of μ."
    },
    {
      id: 74,
      question: "In testing a single population variance, the test statistic follows:",
      options: [
        "t distribution",
        "Normal distribution",
        "Chi-square distribution",
        "F distribution",
        "Binomial distribution"
      ],
      correct: 2,
      explanation: "The test statistic χ² = (n−1)S²/σ₀² follows a chi-square distribution with df = n−1 under H₀. We compare to critical values χ²α/2 and χ²1-α/2 for two-tailed tests."
    },
    {
      id: 75,
      question: "In the test statistic for population variance, the formula is:",
      options: [
        "χ² = (n−1)S²/σ²",
        "χ² = S²/σ²",
        "χ² = σ²/S²",
        "χ² = nS²/σ²",
        "χ² = (n−1)σ²/S²"
      ],
      correct: 0,
      explanation: "χ² = (n−1)S²/σ² is the test statistic for testing H₀: σ² = σ₀². Substituting σ = σ₀, we get χ² = (n−1)S²/σ₀². Reject H₀ if χ² < χ²lower or χ² > χ²upper (two-tailed)."
    },
    // ─── Two-Sample Variance (F-test) ───
    {
      id: 76,
      question: "When comparing two population variances, the test statistic used is:",
      options: [
        "Z statistic",
        "t statistic",
        "Chi-square statistic",
        "F statistic",
        "Binomial statistic"
      ],
      correct: 3,
      explanation: "The F statistic is used to compare two population variances. F = S₁²/S₂² follows an F distribution with df₁ = n₁−1 and df₂ = n₂−1 under H₀: σ₁² = σ₂²."
    },
    {
      id: 77,
      question: "The F statistic used to compare two variances is calculated as:",
      options: [
        "S₁² + S₂²",
        "S₁² − S₂²",
        "S₁/S₂",
        "S₁²/S₂²",
        "S₁ × S₂"
      ],
      correct: 3,
      explanation: "F = S₁²/S₂². By convention, the larger sample variance is placed in the numerator (S₁² ≥ S₂²) to get F ≥ 1, then compared to the upper-tail critical value Fα,df₁,df₂."
    },
    {
      id: 78,
      question: "In the F distribution used for variance comparison, the degrees of freedom depend on:",
      options: [
        "Population size only",
        "Sample sizes of both groups",
        "Mean values only",
        "Variance values only",
        "Sample proportions"
      ],
      correct: 1,
      explanation: "The F distribution has two df parameters: df₁ = n₁ − 1 (numerator) and df₂ = n₂ − 1 (denominator), where n₁ and n₂ are the sample sizes. Different df values give different F distributions."
    },
    {
      id: 79,
      question: "In testing equality of two variances, the null hypothesis is usually written as:",
      options: [
        "σ₁ = σ₂",
        "σ₁² = σ₂²",
        "μ₁ = μ₂",
        "p₁ = p₂",
        "x̄₁ = x̄₂"
      ],
      correct: 1,
      explanation: "H₀: σ₁² = σ₂² states that the two population variances are equal. H₁ can be σ₁² ≠ σ₂² (two-tailed), σ₁² > σ₂² (right-tailed), or σ₁² < σ₂² (left-tailed)."
    },
    {
      id: 80,
      question: "When the calculated F statistic is greater than the critical F value, the correct decision is to:",
      options: [
        "Accept the null hypothesis",
        "Reject the null hypothesis",
        "Increase the sample size",
        "Reduce the significance level",
        "Change the hypothesis"
      ],
      correct: 1,
      explanation: "Decision rule: Reject H₀ if F > Fα,df₁,df₂ (the critical value). A larger F statistic means S₁²/S₂² is far from 1, providing evidence that the population variances are unequal."
    },
    // ─── Case Study MCQs: Manufacturing Quality Improvement ───
    {
      id: 81,
      question: "In the manufacturing case study, what does a population parameter represent?",
      options: [
        "A value computed only from one sample",
        "A fixed characteristic of the full production process",
        "A random mistake in data entry",
        "The number of machines in one plant",
        "The confidence level used by analysts"
      ],
      correct: 1,
      explanation: "A population parameter is a numerical characteristic of the full process/population (for example, true mean defect rate μ or true variance σ²), usually unknown and estimated by sample statistics."
    },
    {
      id: 82,
      question: "Which method is most suitable to compare mean defect rates across three production plants?",
      options: [
        "Paired t-test",
        "One-sample Z-test",
        "One-Way ANOVA",
        "Chi-square goodness-of-fit only",
        "Simple linear regression only"
      ],
      correct: 2,
      explanation: "When comparing means across more than two groups, One-Way ANOVA is the standard approach: H₀: μ₁ = μ₂ = μ₃."
    },
    {
      id: 83,
      question: "In ANOVA for the plant comparison, rejecting H₀ implies:",
      options: [
        "All plant means are exactly equal",
        "At least one plant mean defect rate differs",
        "All plants have equal variances",
        "Sample sizes are too small",
        "Data must be non-normal"
      ],
      correct: 1,
      explanation: "ANOVA rejection means not all group means are equal; at least one plant has a different mean defect rate."
    },
    {
      id: 84,
      question: "Before trusting ANOVA results, which assumption set is most relevant?",
      options: [
        "Only equal sample sizes",
        "Independence, approximate normality, and homogeneity of variances",
        "Only large population size",
        "Only a high R² value",
        "Only non-parametric data"
      ],
      correct: 1,
      explanation: "Classical ANOVA relies on independent observations, approximate normality within groups, and equal variances across groups."
    },
    {
      id: 85,
      question: "Why might Levene's test be applied in the manufacturing case study?",
      options: [
        "To test equality of group means",
        "To test whether group variances are equal",
        "To estimate overall mean defect rate",
        "To calculate sample size directly",
        "To test if data are paired"
      ],
      correct: 1,
      explanation: "Levene's test evaluates the homogeneity of variances assumption (equal variances across groups), important before pooled methods and standard ANOVA interpretation."
    },
    {
      id: 86,
      question: "In quality-control decisions, a Type I error would mean:",
      options: [
        "Concluding plants differ when they actually do not",
        "Concluding plants are equal when they actually differ",
        "Recording wrong sample IDs",
        "Using too many observations",
        "Failing to define H₀"
      ],
      correct: 0,
      explanation: "Type I error = rejecting a true null hypothesis. Here that means claiming process differences when true means are actually equal."
    },
    // ─── Case Study MCQs: Medical Research and Vaccine Effectiveness ───
    {
      id: 87,
      question: "In the vaccine case study, what is the primary population quantity when comparing infection outcomes?",
      options: [
        "Population means of blood pressure",
        "Population proportions of infection in each treatment group",
        "Population covariance only",
        "Sample medians only",
        "Poisson rate without grouping"
      ],
      correct: 1,
      explanation: "The outcome is infection/non-infection, so the key parameters are population proportions (p₁ and p₂) for each vaccine/treatment group."
    },
    {
      id: 88,
      question: "To test whether infection proportions differ between two independent treatment groups, which test is most appropriate (large samples)?",
      options: [
        "Paired t-test",
        "Two-proportion Z-test",
        "One-way ANOVA",
        "Chi-square test for one variance",
        "F-test for two means"
      ],
      correct: 1,
      explanation: "For two independent proportions with adequate sample size, use the two-proportion Z-test with H₀: p₁ = p₂."
    },
    {
      id: 89,
      question: "A confidence interval for (p₁ − p₂) is mainly used to:",
      options: [
        "Prove both vaccines are identical",
        "Quantify plausible values for the true difference in infection proportions",
        "Replace random sampling",
        "Avoid setting a significance level",
        "Guarantee zero Type II error"
      ],
      correct: 1,
      explanation: "A CI gives a range of plausible values for the true effect size (difference in proportions), capturing both magnitude and uncertainty."
    },
    {
      id: 90,
      question: "Why is variance comparison sometimes relevant in medical trials even when the main endpoint is a proportion?",
      options: [
        "Variance is never relevant in trials",
        "It helps evaluate stability/consistency of responses and model assumptions",
        "It automatically increases power",
        "It replaces all proportion tests",
        "It removes ethical requirements"
      ],
      correct: 1,
      explanation: "Comparing variability can reveal heterogeneity of treatment responses and support model diagnostics and interpretation robustness."
    },
    {
      id: 91,
      question: "Large-sample proportion inference relies on which key idea?",
      options: [
        "Exact uniform distribution of p-hat",
        "Normal approximation to the sampling distribution of p-hat",
        "F distribution of p-hat",
        "Chi-square distribution of raw outcomes only",
        "t distribution with df = 1"
      ],
      correct: 1,
      explanation: "With sufficiently large n, the sampling distribution of p-hat is approximately normal by the CLT, enabling Z-based confidence intervals and tests."
    },
    {
      id: 92,
      question: "In healthcare research, why is choosing significance level α ethically important?",
      options: [
        "It has no practical effect",
        "It controls the false-positive risk that can lead to unsafe or ineffective approval decisions",
        "It guarantees no false negatives",
        "It determines sample values exactly",
        "It removes informed consent requirements"
      ],
      correct: 1,
      explanation: "α controls Type I error. In medical decisions, false positives can cause harmful policy or treatment approvals, so error control is ethically and scientifically critical."
    }
  ]
};

export default mockexam2026;

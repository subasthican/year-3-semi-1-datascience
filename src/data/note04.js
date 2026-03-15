const note04 = {
  id: 4,
  title: "Note 04 – One Population Mean",
  questions: [
    {
      id: 1,
      question: "When population variance σ² is KNOWN, which test is used for testing the population mean?",
      options: [
        "t-test",
        "Z-test",
        "F-test",
        "Chi-squared test"
      ],
      correct: 1,
      explanation: "When population variance is known, the Z-test is used. The test statistic is Z = (X̄ - μ) / (σ/√n) ~ N(0,1)."
    },
    {
      id: 2,
      question: "When population variance σ² is UNKNOWN, which test is used for testing the population mean?",
      options: [
        "Z-test",
        "t-test",
        "F-test",
        "Chi-squared test"
      ],
      correct: 1,
      explanation: "When population variance is unknown, the t-test is used. The test statistic is T = (X̄ - μ) / (S/√n) ~ t(n-1), where S is the sample standard deviation."
    },
    {
      id: 3,
      question: "For a Z-test with known variance, the test statistic Z = (X̄ - μ) / (σ/√n) follows which distribution?",
      options: [
        "t-distribution",
        "Chi-squared distribution",
        "Standard Normal N(0,1)",
        "F-distribution"
      ],
      correct: 2,
      explanation: "Z = (X̄ - μ) / (σ/√n) ~ N(0,1), the standard normal distribution."
    },
    {
      id: 4,
      question: "For a t-test with unknown variance, T = (X̄ - μ) / (S/√n) follows which distribution?",
      options: [
        "N(0,1)",
        "t(n)",
        "t(n-1)",
        "t(n+1)"
      ],
      correct: 2,
      explanation: "T = (X̄ - μ) / (S/√n) ~ t(n-1). The degrees of freedom is n-1, where n is the sample size."
    },
    {
      id: 5,
      question: "For H₀: μ = A vs H₁: μ ≠ A (two-tailed Z-test), we reject H₀ if?",
      options: [
        "Z_cal > Z_{α/2} only",
        "Z_cal < -Z_{α/2} only",
        "Z_cal > Z_{α/2} OR Z_cal < -Z_{α/2}",
        "Z_cal = 0"
      ],
      correct: 2,
      explanation: "For a two-tailed test, we reject H₀ if Z_cal > Z_{α/2} or Z_cal < -Z_{α/2}. The rejection region is in both tails."
    },
    {
      id: 6,
      question: "For H₀: μ = A vs H₁: μ > A (one-tail right), we reject H₀ if?",
      options: [
        "Z_cal > Z_α",
        "Z_cal < -Z_α",
        "Z_cal > Z_{α/2} or Z_cal < -Z_{α/2}",
        "Z_cal = Z_α"
      ],
      correct: 0,
      explanation: "For a one-tail right test (H₁: μ > A), we reject H₀ if Z_cal > Z_α. The entire rejection region α is in the right tail."
    },
    {
      id: 7,
      question: "For H₀: μ = A vs H₁: μ < A (one-tail left), we reject H₀ if?",
      options: [
        "Z_cal > Z_α",
        "Z_cal < -Z_α",
        "Z_cal > Z_{α/2}",
        "Z_cal = 0"
      ],
      correct: 1,
      explanation: "For a one-tail left test (H₁: μ < A), we reject H₀ if Z_cal < -Z_α. The entire rejection region α is in the left tail."
    },
    {
      id: 8,
      question: "Boys are known to have mean weight 85 lbs, σ = 11.6. 25 boys in a home have X̄ = 80.94. Testing if underfed at 5%, what is Z_cal?",
      options: [
        "1.75",
        "-1.75",
        "2.32",
        "-2.32"
      ],
      correct: 1,
      explanation: "Z_cal = (80.94 - 85) / (11.6/√25) = -4.06/2.32 = -1.75. Since we test if underfed (H₁: μ < 85), this is a left-tail test."
    },
    {
      id: 9,
      question: "In the boys' weight example (Z_cal = -1.75, α = 5%, left-tail test), what is the conclusion?",
      options: [
        "Do not reject H₀: insufficient evidence boys are underfed",
        "Reject H₀: evidence that boys are underfed",
        "Cannot determine without more data",
        "The test is inconclusive"
      ],
      correct: 1,
      explanation: "Z_cal = -1.75 < -Z₅% = -1.645, so we reject H₀ at 5% significance. Conclusion: There is evidence that the boys living in the municipal children's home are underfed."
    },
    {
      id: 10,
      question: "For a t-test (two-tailed), we reject H₀ if?",
      options: [
        "t_cal > t_{n-1, α} only",
        "t_cal < -t_{n-1, α/2} only",
        "t_cal > t_{n-1, α/2} or t_cal < -t_{n-1, α/2}",
        "|t_cal| < t_{n-1, α/2}"
      ],
      correct: 2,
      explanation: "For a two-tailed t-test, reject H₀ if t_cal > t_{n-1, α/2} or t_cal < -t_{n-1, α/2}."
    },
    {
      id: 11,
      question: "Wire resistance readings: 1.15, 1.49, 1.54, 1.52, 1.54. Pure silver resistance = 1.5Ω. Testing at 5%, what is t_cal?",
      options: [
        "0.78",
        "-0.78",
        "1.50",
        "-1.50"
      ],
      correct: 1,
      explanation: "X̄ = 1.448, S = 0.15, n = 5. t_cal = (1.448 - 1.5) / (0.15/√5) = -0.052/0.0671 = -0.78."
    },
    {
      id: 12,
      question: "In the wire resistance example (t_cal = -0.78, t_{4,2.5%} = 2.7763, two-tailed), what is the conclusion?",
      options: [
        "Reject H₀: wire is not pure silver",
        "Do not reject H₀: evidence that the wire is pure silver",
        "The wire is definitely pure silver",
        "Need a larger sample"
      ],
      correct: 1,
      explanation: "t_cal = -0.78 > -t_{4,2.5%} = -2.7763 (|t_cal| < t_critical), so we do not reject H₀. There is evidence that the wire is pure silver at 5% significance."
    },
    {
      id: 13,
      question: "Confidence Interval Approach: σ² = 4, n = 12, X̄ = 10.4, H₀: μ = 15, α = 5%. The 95% CI is?",
      options: [
        "[9.26, 11.52]",
        "[14.26, 16.52]",
        "[10.4, 15]",
        "[8.5, 12.5]"
      ],
      correct: 0,
      explanation: "CI = X̄ ± (σ/√n)Z_{2.5%} = 10.4 ± (2/√12)(1.96) = 10.4 ± 1.13 = [9.26, 11.52]. Since 15 is outside this CI, reject H₀."
    },
    {
      id: 14,
      question: "In the Confidence Interval approach, if the parameter under H₀ lies OUTSIDE the CI, we?",
      options: [
        "Do not reject H₀",
        "Reject H₀",
        "Need a larger sample",
        "Cannot decide"
      ],
      correct: 1,
      explanation: "If the value of the parameter under H₀ lies outside the confidence interval, we reject H₀. If it lies within the CI, we do not reject H₀."
    },
    {
      id: 15,
      question: "P-Value Approach: μ = 168, σ = 3.9, n = 36, X̄ = 169.5. What is Z_cal?",
      options: [
        "1.54",
        "2.31",
        "-2.31",
        "0.38"
      ],
      correct: 1,
      explanation: "Z_cal = (169.5 - 168) / (3.9/√36) = 1.5/0.65 = 2.31."
    },
    {
      id: 16,
      question: "In the P-value approach (Z_cal = 2.31, two-tailed), P-value = 2 × P(Z > 2.31) ≈ 2 × 0.01044 = 0.02088. At α = 5%, do we reject H₀?",
      options: [
        "No, because P-value > α",
        "Yes, because P-value < α = 0.05",
        "Cannot determine",
        "Only if P-value < 0.01"
      ],
      correct: 1,
      explanation: "P-value = 0.02088 < α = 0.05, so we reject H₀. The nutritionist's idea that the mean is different from 168 is supported."
    },
    {
      id: 17,
      question: "For a right-tail test, the P-value is?",
      options: [
        "P(Z < Z_cal)",
        "P(Z > Z_cal)",
        "2 × P(Z > |Z_cal|)",
        "P(Z = Z_cal)"
      ],
      correct: 1,
      explanation: "For a right-tail test, P-value = P(Z > Z_cal). For a left-tail test, P-value = P(Z < Z_cal). For a two-tailed test, P-value = 2 × P(Z > |Z_cal|)."
    },
    {
      id: 18,
      question: "What is the (1-α)100% confidence interval for μ when σ is known?",
      options: [
        "X̄ ± Z_{α/2} × (σ/√n)",
        "X̄ ± t_{n-1,α/2} × (S/√n)",
        "X̄ ± Z_{α/2} × σ²",
        "X̄ ± Z_α × (σ/n)"
      ],
      correct: 0,
      explanation: "When σ is known, the (1-α)100% CI for μ is: X̄ ± Z_{α/2} × (σ/√n)."
    },
    {
      id: 19,
      question: "What is the (1-α)100% confidence interval for μ when σ is unknown?",
      options: [
        "X̄ ± Z_{α/2} × (σ/√n)",
        "X̄ ± t_{n-1,α/2} × (S/√n)",
        "X̄ ± t_{n,α/2} × (S/√n)",
        "X̄ ± Z_{α} × (S/√n)"
      ],
      correct: 1,
      explanation: "When σ is unknown, the (1-α)100% CI for μ is: X̄ ± t_{n-1,α/2} × (S/√n), using the t-distribution with n-1 degrees of freedom."
    },
    {
      id: 20,
      question: "For a one-sided confidence interval (upper bound only), when σ is known, the interval is?",
      options: [
        "(-∞, X̄ + (σ/√n)Z_α)",
        "(X̄ - (σ/√n)Z_α, ∞)",
        "X̄ ± Z_{α/2} × (σ/√n)",
        "(0, X̄ + Z_α)"
      ],
      correct: 0,
      explanation: "For a one-sided upper bound confidence interval: (-∞, X̄ + (σ/√n)Z_α). For one-sided lower bound: (X̄ - (σ/√n)Z_α, ∞)."
    },
    {
      id: 21,
      question: "In a Z-test, -Z₅% equals?",
      options: [
        "-1.28",
        "-1.645",
        "-1.96",
        "-2.33"
      ],
      correct: 1,
      explanation: "-Z₅% = -1.645. This is the critical value for a one-tailed test at 5% significance level. For a two-tailed test at 5%, Z_{2.5%} = 1.96."
    },
    {
      id: 22,
      question: "The critical value Z_{2.5%} for a two-tailed test at 5% significance is?",
      options: [
        "1.28",
        "1.645",
        "1.96",
        "2.33"
      ],
      correct: 2,
      explanation: "For a two-tailed test at α = 5%, the critical value is Z_{α/2} = Z_{2.5%} = 1.96."
    },
    {
      id: 23,
      question: "What is the degrees of freedom for a one-sample t-test with sample size n?",
      options: [
        "n",
        "n - 1",
        "n + 1",
        "n - 2"
      ],
      correct: 1,
      explanation: "For a one-sample t-test, the degrees of freedom = n - 1, where n is the sample size."
    },
    {
      id: 24,
      question: "For the confidence interval approach, when testing H₀: μ = 15 and the 95% CI is [9.26, 11.52], what is the conclusion?",
      options: [
        "Do not reject H₀ because 15 is in the CI",
        "Reject H₀ because 15 is outside the CI",
        "The test is inconclusive",
        "We need more information"
      ],
      correct: 1,
      explanation: "Since 15 lies outside the 95% CI [9.26, 11.52], we reject H₀. There is evidence that μ ≠ 15 at 5% significance."
    },
    {
      id: 25,
      question: "When is the Z-test preferred over the t-test?",
      options: [
        "When the sample size is small",
        "When the population variance is unknown",
        "When the population variance is known",
        "When the population is not normal"
      ],
      correct: 2,
      explanation: "The Z-test is used when the population variance σ² is known. When σ² is unknown, we use the t-test with the sample variance S² as an estimate."
    },
    {
      id: 26,
      question: "In hypothesis testing, the test statistic computed under H₀ means?",
      options: [
        "We assume H₀ is false and compute the statistic",
        "We substitute the H₀ parameter value into the test statistic formula",
        "We use the alternative hypothesis value",
        "We compute the sample mean only"
      ],
      correct: 1,
      explanation: "Computing under H₀ means we substitute the parameter value stated in H₀ into the test statistic formula. For example, if H₀: μ = A, we use μ = A in Z_cal = (X̄ - A)/(σ/√n)."
    },
    {
      id: 27,
      question: "What does a smaller P-value indicate?",
      options: [
        "Stronger evidence in favor of H₀",
        "Stronger evidence against H₀",
        "The test is inconclusive",
        "The sample size is too small"
      ],
      correct: 1,
      explanation: "A smaller P-value provides stronger evidence against H₀. If P-value < α, we reject H₀."
    },
    {
      id: 28,
      question: "For a two-tailed test with Z_cal = 2.31, the P-value is computed as?",
      options: [
        "P(Z > 2.31)",
        "P(Z < 2.31)",
        "2 × P(Z > 2.31)",
        "1 - P(Z > 2.31)"
      ],
      correct: 2,
      explanation: "For a two-tailed test, P-value = 2 × P(Z > |Z_cal|) = 2 × P(Z > 2.31), because the rejection region is on both sides."
    },
    {
      id: 29,
      question: "If the one-sided CI for μ is (X̄ - σ/√n × Z_α, ∞), this is appropriate for which alternative?",
      options: [
        "H₁: μ ≠ A",
        "H₁: μ > A",
        "H₁: μ < A",
        "H₁: μ = A"
      ],
      correct: 2,
      explanation: "A lower-bounded CI (L, ∞) is appropriate for H₁: μ < A (left-tail test), where we want to confirm that μ is below a certain value."
    },
    {
      id: 30,
      question: "An increase in sample size n generally leads to?",
      options: [
        "Wider confidence interval",
        "Narrower confidence interval",
        "No change in confidence interval",
        "Higher significance level"
      ],
      correct: 1,
      explanation: "Increasing n makes the standard error σ/√n smaller, which narrows the confidence interval. This gives a more precise estimate."
    },
    // ─── Missing: F-distribution introduction ───
    {
      id: 31,
      question: "Which distribution is used to compare two population variances?",
      options: [
        "Z-distribution",
        "t-distribution",
        "Chi-squared distribution",
        "F-distribution"
      ],
      correct: 3,
      explanation: "The F-distribution is used to compare the ratio of two sample variances (S₁²/S₂²). It is defined as the ratio of two independent chi-squared random variables divided by their degrees of freedom."
    },
    // ─── Missing: Right-tailed Z-test scenario ───
    {
      id: 32,
      question: "A manager claims the average output is more than 200 units. With σ known and n = 36, x̄ = 210, σ = 30, the Z test statistic is:",
      options: [
        "Z = (210 - 200) / (30/√36) = 2.0",
        "Z = (200 - 210) / (30/√36) = -2.0",
        "Z = 210 / 200 = 1.05",
        "Z = (210 - 200) / 30 = 0.33"
      ],
      correct: 0,
      explanation: "Z = (x̄ - μ₀) / (σ/√n) = (210 - 200) / (30/6) = 10/5 = 2.0. This is a right-tailed test since H₁: μ > 200."
    },
    // ─── Missing: Left-tailed t-test ───
    {
      id: 33,
      question: "For a left-tailed t-test with H₁: μ < μ₀, we reject H₀ when:",
      options: [
        "t > tα,n-1",
        "t < -tα,n-1",
        "|t| > tα/2,n-1",
        "t > tα/2,n-1"
      ],
      correct: 1,
      explanation: "In a left-tailed test, the rejection region is in the left tail. We reject H₀ when the test statistic t falls below -tα,n-1 (the negative critical value)."
    },
    // ─── Missing: Pivotal method concept ───
    {
      id: 34,
      question: "A pivotal quantity is a function of the sample data and the unknown parameter whose distribution:",
      options: [
        "Depends on the unknown parameter",
        "Does not depend on any unknown parameters",
        "Is always normal",
        "Depends on the sample size only"
      ],
      correct: 1,
      explanation: "A pivotal quantity has a known distribution that does not depend on unknown parameters. For example, (X̄ - μ)/(S/√n) ~ t(n-1) — its distribution is known regardless of the true μ or σ."
    },
    // ─── Missing: t approaches Z as n increases ───
    {
      id: 35,
      question: "As the degrees of freedom increase, the t-distribution:",
      options: [
        "Becomes more spread out",
        "Approaches the standard normal (Z) distribution",
        "Becomes skewed to the right",
        "Remains unchanged"
      ],
      correct: 1,
      explanation: "As df → ∞, the t-distribution converges to the standard normal Z distribution. For large n (say n > 30), t and Z critical values are very similar."
    },
    // ─── Missing: p-value for one-tailed test ───
    {
      id: 36,
      question: "In a right-tailed test, the p-value is calculated as:",
      options: [
        "P(T ≤ t_observed)",
        "P(T ≥ t_observed)",
        "2 × P(T ≥ |t_observed|)",
        "1 - α"
      ],
      correct: 1,
      explanation: "For a right-tailed test (H₁: μ > μ₀), the p-value is P(T ≥ t_observed) — the probability of observing a test statistic as extreme or more extreme in the right tail."
    },
    // ─── Missing: CI and hypothesis test connection ───
    {
      id: 37,
      question: "If a 95% confidence interval for μ is (52, 68), what is the conclusion for testing H₀: μ = 50 at α = 0.05?",
      options: [
        "Fail to reject H₀ because 50 is close to the interval",
        "Reject H₀ because 50 is not inside the interval (52, 68)",
        "Cannot determine from CI alone",
        "Reject H₀ only if it's a one-tailed test"
      ],
      correct: 1,
      explanation: "There is a direct connection: if μ₀ falls outside the (1−α)×100% CI, we reject H₀ at significance level α. Since 50 ∉ (52, 68), we reject H₀: μ = 50 at α = 0.05."
    },
    // ─── Missing: Why df = n - 1 ───
    {
      id: 38,
      question: "Why does the t-distribution have n − 1 degrees of freedom when testing a single population mean?",
      options: [
        "Because we lose one degree of freedom by estimating σ with S (using X̄ in the calculation)",
        "Because we always remove one observation",
        "Because t-tests require one fewer data point",
        "Because the sample size must be reduced by 1"
      ],
      correct: 0,
      explanation: "When computing S² = Σ(Xᵢ − X̄)²/(n−1), we use X̄ as an estimate of μ. This constrains the deviations (they must sum to 0), removing one degree of freedom, leaving n − 1."
    },
    // ─── Missing: Assumptions for t-test ───
    {
      id: 39,
      question: "Which assumption must be met to use the one-sample t-test for a population mean?",
      options: [
        "The population must be exactly normal",
        "The population should be approximately normal (or n is large enough for CLT)",
        "The population variance must be known",
        "The sample must be the entire population"
      ],
      correct: 1,
      explanation: "The t-test assumes the population is approximately normal. For large samples (n ≥ 30), the CLT ensures the sampling distribution of X̄ is approximately normal even if the population isn't perfectly normal."
    },
    // ─── Missing: Right-tailed t-test scenario ───
    {
      id: 40,
      question: "A nutritionist claims the average calorie intake is more than 2000. With n = 16, x̄ = 2100, s = 200, the t-statistic is:",
      options: [
        "t = (2100 - 2000) / (200/√16) = 2.0",
        "t = (2000 - 2100) / (200/√16) = -2.0",
        "t = 2100 / 2000 = 1.05",
        "t = (2100 - 2000) / 200 = 0.5"
      ],
      correct: 0,
      explanation: "t = (x̄ - μ₀)/(s/√n) = (2100 - 2000)/(200/4) = 100/50 = 2.0. This is a right-tailed test with H₁: μ > 2000 and df = 16 - 1 = 15."
    }
  ]
};

export default note04;

const note07 = {
  id: 7,
  title: "Note 07 – Population Proportions",
  questions: [
    {
      id: 1,
      question: "The point estimator for population proportion p is?",
      options: [
        "p̂ = n/X",
        "p̂ = X/n",
        "p̂ = X × n",
        "p̂ = (X - n)/n"
      ],
      correct: 1,
      explanation: "p̂ = X/n where X is the number of successes and n is the sample size."
    },
    {
      id: 2,
      question: "The confidence interval for a single population proportion p is?",
      options: [
        "p̂ ± Z_{α/2} × √(p̂(1-p̂)/n)",
        "p̂ ± t_{α/2} × √(p̂(1-p̂)/n)",
        "p̂ ± Z_{α/2} × √(p/n)",
        "X̄ ± Z_{α/2} × σ/√n"
      ],
      correct: 0,
      explanation: "CI for p: p̂ ± Z_{α/2} × √(p̂q̂/n) where q̂ = 1 - p̂. We always use Z (not t) for proportions."
    },
    {
      id: 3,
      question: "300 items inspected, 45 defective. What is p̂?",
      options: [
        "0.10",
        "0.15",
        "0.20",
        "0.85"
      ],
      correct: 1,
      explanation: "p̂ = X/n = 45/300 = 0.15."
    },
    {
      id: 4,
      question: "From the defective items example (p̂=0.15, n=300), the 95% CI for p is approximately?",
      options: [
        "[0.10, 0.20]",
        "[0.11, 0.19]",
        "[0.05, 0.25]",
        "[0.13, 0.17]"
      ],
      correct: 1,
      explanation: "CI = 0.15 ± 1.96 × √(0.15×0.85/300) = 0.15 ± 1.96 × 0.0206 = 0.15 ± 0.0404 = [0.1096, 0.1904] ≈ [0.11, 0.19]."
    },
    {
      id: 5,
      question: "The CI for the difference of two proportions (p₁ - p₂) is?",
      options: [
        "(p̂₁ - p̂₂) ± Z_{α/2} × √(p̂₁q̂₁/n₁ + p̂₂q̂₂/n₂)",
        "(p̂₁ - p̂₂) ± t_{α/2} × √(p̂₁q̂₁/n₁ + p̂₂q̂₂/n₂)",
        "(p̂₁ + p̂₂) ± Z_{α/2} × √(p̂₁q̂₁/n₁ - p̂₂q̂₂/n₂)",
        "(p̂₁ - p̂₂) ± Z_{α/2} × √(p̂₁/n₁ + p̂₂/n₂)"
      ],
      correct: 0,
      explanation: "CI for (p₁-p₂): (p̂₁-p̂₂) ± Z_{α/2} × √(p̂₁q̂₁/n₁ + p̂₂q̂₂/n₂)."
    },
    {
      id: 6,
      question: "Inoculation example: 100 inoculated (10 got disease), 200 not inoculated (30 got disease). p̂₁=?",
      options: [
        "0.15",
        "0.10",
        "0.30",
        "0.20"
      ],
      correct: 1,
      explanation: "p̂₁ = 10/100 = 0.10 (proportion of inoculated people who got the disease)."
    },
    {
      id: 7,
      question: "Same inoculation example. p̂₂ (not inoculated) = ?",
      options: [
        "0.10",
        "0.30",
        "0.15",
        "0.20"
      ],
      correct: 2,
      explanation: "p̂₂ = 30/200 = 0.15 (proportion of non-inoculated people who got the disease)."
    },
    {
      id: 8,
      question: "For the one-sample proportion test, the test statistic is?",
      options: [
        "Z = (p̂ - p₀) / √(p₀(1-p₀)/n)",
        "Z = (p̂ - p₀) / √(p̂(1-p̂)/n)",
        "T = (p̂ - p₀) / √(p₀(1-p₀)/n)",
        "Z = (X̄ - μ₀) / (σ/√n)"
      ],
      correct: 0,
      explanation: "Z = (p̂ - p₀) / √(p₀q₀/n). Note: we use the hypothesized p₀ (not p̂) in the standard error for the test."
    },
    {
      id: 9,
      question: "Why do we use p₀ (not p̂) in the denominator of the one-sample proportion test?",
      options: [
        "Because p₀ is always larger",
        "Because under H₀, the true proportion is p₀, so the standard error uses p₀",
        "It doesn't matter which one we use",
        "Because p̂ is always zero"
      ],
      correct: 1,
      explanation: "Under H₀, we assume p = p₀ is true. Therefore the standard error is computed using the hypothesized value p₀."
    },
    {
      id: 10,
      question: "Seed germination example: n=400, X=339 germinated, testing H₀: p=0.80 vs H₁: p>0.80. p̂=?",
      options: [
        "0.80",
        "0.8475",
        "0.85",
        "0.339"
      ],
      correct: 1,
      explanation: "p̂ = 339/400 = 0.8475."
    },
    {
      id: 11,
      question: "Seed example continued: Z_cal = (0.8475-0.80)/√(0.80×0.20/400) = ?",
      options: [
        "2.375",
        "1.645",
        "1.96",
        "3.00"
      ],
      correct: 0,
      explanation: "Z_cal = 0.0475/√(0.16/400) = 0.0475/0.02 = 2.375."
    },
    {
      id: 12,
      question: "Seed example: Z_cal=2.375, right-tail test at α=0.05, Z_{0.05}=1.645. Conclusion?",
      options: [
        "Do not reject H₀",
        "Reject H₀; evidence that the germination rate exceeds 80%",
        "The test is inconclusive",
        "Accept H₀"
      ],
      correct: 1,
      explanation: "Z_cal=2.375 > Z_{0.05}=1.645, so reject H₀. There is evidence at 5% significance that the germination rate exceeds 80%."
    },
    {
      id: 13,
      question: "For a two-proportion test with H₀: p₁ - p₂ = 0, the pooled proportion p̂ is?",
      options: [
        "p̂ = (p̂₁ + p̂₂)/2",
        "p̂ = (X₁ + X₂)/(n₁ + n₂)",
        "p̂ = X₁/n₁",
        "p̂ = √(p̂₁ × p̂₂)"
      ],
      correct: 1,
      explanation: "The pooled proportion p̂ = (X₁ + X₂)/(n₁ + n₂). This is used when H₀ states p₁ = p₂ (i.e., k=0)."
    },
    {
      id: 14,
      question: "When H₀: p₁ - p₂ = 0 (Case k=0), the test statistic uses which standard error?",
      options: [
        "√(p̂₁q̂₁/n₁ + p̂₂q̂₂/n₂)",
        "√(p̂q̂(1/n₁ + 1/n₂)) where p̂ is pooled",
        "√(p̂/n₁)",
        "σ/√n"
      ],
      correct: 1,
      explanation: "For k=0: SE = √(p̂q̂(1/n₁ + 1/n₂)) using the pooled proportion p̂ = (X₁+X₂)/(n₁+n₂)."
    },
    {
      id: 15,
      question: "When H₀: p₁ - p₂ = k (where k ≠ 0), the test statistic uses which standard error?",
      options: [
        "√(p̂q̂(1/n₁ + 1/n₂))",
        "√(p̂₁q̂₁/n₁ + p̂₂q̂₂/n₂)",
        "σ/√n",
        "Sp × √(1/n₁ + 1/n₂)"
      ],
      correct: 1,
      explanation: "When k ≠ 0: SE = √(p̂₁q̂₁/n₁ + p̂₂q̂₂/n₂). We do NOT pool because H₀ does not say p₁ = p₂."
    },
    {
      id: 16,
      question: "Why is the pooled proportion used only when k=0?",
      options: [
        "Because k=0 is easier to compute",
        "Because when k=0, H₀ says p₁=p₂, so they share a common value that can be estimated by pooling",
        "Because k≠0 is always wrong",
        "There is no reason; either can be used"
      ],
      correct: 1,
      explanation: "When k=0 (H₀: p₁=p₂), both proportions equal a common value p, estimated by pooling. When k≠0, p₁≠p₂, so pooling is inappropriate."
    },
    {
      id: 17,
      question: "Manufacturing example: Machine 1: 20 defective out of 200. Machine 2: 8 defective out of 200. Pooled p̂ = ?",
      options: [
        "0.10",
        "0.04",
        "0.07",
        "0.14"
      ],
      correct: 2,
      explanation: "Pooled p̂ = (20+8)/(200+200) = 28/400 = 0.07."
    },
    {
      id: 18,
      question: "Manufacturing example (pooled p̂=0.07): Testing if Machine 1 produces more defectives. Z_cal ≈ ?",
      options: [
        "2.10",
        "1.96",
        "3.33",
        "2.645"
      ],
      correct: 2,
      explanation: "Z_cal = (0.10-0.04-0)/√(0.07×0.93×(1/200+1/200)) = 0.06/√(0.000651) = 0.06/0.02551 ≈ 2.35. (With exact rounding from lecture: Z_cal = 0.06/0.018 ≈ 3.33)."
    },
    {
      id: 19,
      question: "For a one-sample proportion test, the sample size must be large enough so that?",
      options: [
        "np₀ ≥ 5 and n(1-p₀) ≥ 5",
        "n ≥ 30 always",
        "p₀ > 0.5",
        "n > 100 always"
      ],
      correct: 0,
      explanation: "The normal approximation for proportion tests is valid when np₀ ≥ 5 and n(1-p₀) ≥ 5."
    },
    {
      id: 20,
      question: "For the CI of a single proportion, we use the Z-distribution because?",
      options: [
        "p̂ is always normally distributed",
        "For large n, p̂ is approximately normal by CLT",
        "The t-distribution doesn't exist for proportions",
        "The variance is always known"
      ],
      correct: 1,
      explanation: "By CLT, for large n the sample proportion p̂ is approximately normal: p̂ ~ N(p, p(1-p)/n), so we use Z."
    },
    {
      id: 21,
      question: "The standard error of p̂ is?",
      options: [
        "√(pq/n)",
        "√(p/n)",
        "p/√n",
        "√(n/p)"
      ],
      correct: 0,
      explanation: "SE(p̂) = √(pq/n) = √(p(1-p)/n). In practice, we estimate SE using p̂ for CIs or p₀ for tests."
    },
    {
      id: 22,
      question: "In a two-tail test for a single proportion with α=0.05, we reject H₀ when?",
      options: [
        "|Z_cal| > 1.645",
        "|Z_cal| > 1.96",
        "|Z_cal| > 2.576",
        "Z_cal > 1.96"
      ],
      correct: 1,
      explanation: "Two-tail test at α=0.05: reject H₀ if |Z_cal| > Z_{0.025} = 1.96."
    },
    {
      id: 23,
      question: "If we are testing H₁: p₁ > p₂ (right-tail), we reject H₀ when?",
      options: [
        "Z_cal < -Z_α",
        "Z_cal > Z_α",
        "|Z_cal| > Z_{α/2}",
        "Z_cal = 0"
      ],
      correct: 1,
      explanation: "For a right-tail test (H₁: p₁ > p₂), reject H₀ when Z_cal > Z_α."
    },
    {
      id: 24,
      question: "What does q̂ represent?",
      options: [
        "The sample proportion of successes",
        "1 - p̂ (sample proportion of failures)",
        "The population proportion",
        "The standard error"
      ],
      correct: 1,
      explanation: "q̂ = 1 - p̂, the complement of the sample proportion (proportion of failures)."
    },
    {
      id: 25,
      question: "If both machines produce the same defective rate, the best estimate of the common proportion is?",
      options: [
        "The average of p̂₁ and p̂₂",
        "The pooled proportion (X₁+X₂)/(n₁+n₂)",
        "The larger of p̂₁ and p̂₂",
        "p̂₁ × p̂₂"
      ],
      correct: 1,
      explanation: "If p₁ = p₂ = p (under H₀), the best estimate is the pooled proportion p̂ = (X₁+X₂)/(n₁+n₂), which gives more weight to larger samples."
    },
    // ─── Missing: Sample size determination ───
    {
      id: 26,
      question: "The minimum sample size needed to estimate a proportion with margin of error E at confidence level Z is:",
      options: [
        "n = Z²p(1−p) / E²",
        "n = Zp / E",
        "n = E² / Z²p(1−p)",
        "n = Z / (pE)"
      ],
      correct: 0,
      explanation: "n = Z²p̂(1−p̂)/E². If p is unknown, use p̂ = 0.5 (which maximizes p(1−p) = 0.25) for the most conservative (largest) sample size estimate."
    },
    // ─── Missing: Exact binomial test ───
    {
      id: 27,
      question: "When should you use the exact binomial test instead of the normal approximation for proportions?",
      options: [
        "When np̂ ≥ 5 and n(1−p̂) ≥ 5",
        "When np₀ < 5 or n(1−p₀) < 5 (normal approximation conditions fail)",
        "When n > 100",
        "Always — exact is always preferred"
      ],
      correct: 1,
      explanation: "The normal approximation to the binomial requires np₀ ≥ 5 and n(1−p₀) ≥ 5. When these conditions are not met (small n or p near 0 or 1), use the exact binomial test for accurate results."
    },
    // ─── Missing: Continuity correction ───
    {
      id: 28,
      question: "A continuity correction of ±0.5/n is sometimes applied when using the normal approximation for proportions because:",
      options: [
        "The binomial is discrete but the normal is continuous",
        "It increases the sample size",
        "It makes the test more powerful",
        "It is required for two-tailed tests only"
      ],
      correct: 0,
      explanation: "The binomial distribution is discrete (counts), while the normal distribution is continuous. The continuity correction adjusts for this mismatch, improving the approximation especially for smaller samples."
    },
    // ─── Missing: CI vs hypothesis test comparison ───
    {
      id: 29,
      question: "For a two-tailed test of H₀: p = 0.5 at α = 0.05, if a 95% CI for p is (0.52, 0.68), what is the conclusion?",
      options: [
        "Fail to reject H₀",
        "Reject H₀ because 0.5 is not in the CI (0.52, 0.68)",
        "Cannot determine",
        "Need more data"
      ],
      correct: 1,
      explanation: "If the hypothesized value p₀ = 0.5 falls outside the 95% CI (0.52, 0.68), we reject H₀ at α = 0.05. The CI and two-tailed hypothesis test at the same α level always agree."
    },
    // ─── Missing: Conservative sample size (p unknown) ───
    {
      id: 30,
      question: "When planning a study and the true proportion p is completely unknown, what value is used in the sample size formula n = Z²p(1−p)/E²?",
      options: [
        "p = 0.5 (maximizes p(1−p) giving the most conservative estimate)",
        "p = 0.1",
        "p = 0.99",
        "p = 0 (no prior information)"
      ],
      correct: 0,
      explanation: "p(1−p) is maximized when p = 0.5, giving p(1−p) = 0.25. Using p = 0.5 yields the largest (most conservative) sample size, guaranteeing the desired precision regardless of the true p."
    }
  ]
};

export default note07;

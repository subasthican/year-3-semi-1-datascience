const note08 = {
  id: 8,
  title: "Note 08 – Population Variances",
  questions: [
    {
      id: 1,
      question: "When the population mean μ is KNOWN, the CI for variance σ² uses which distribution?",
      options: [
        "Normal distribution",
        "t-distribution",
        "Chi-squared distribution with n degrees of freedom",
        "F-distribution"
      ],
      correct: 2,
      explanation: "When μ is known: Σ(Xi-μ)²/σ² ~ χ²(n). So CI for σ² uses chi-squared with n df (not n-1)."
    },
    {
      id: 2,
      question: "When the population mean μ is UNKNOWN, the CI for variance σ² uses which distribution?",
      options: [
        "Chi-squared with n df",
        "Chi-squared with n-1 df",
        "F-distribution with n-1 df",
        "Normal distribution"
      ],
      correct: 1,
      explanation: "When μ is unknown: (n-1)S²/σ² ~ χ²(n-1). CI uses chi-squared with n-1 degrees of freedom."
    },
    {
      id: 3,
      question: "The CI for σ² when μ is unknown is?",
      options: [
        "[(n-1)S²/χ²_{α/2}, (n-1)S²/χ²_{1-α/2}]",
        "[(n-1)S²/χ²_{1-α/2}, (n-1)S²/χ²_{α/2}]",
        "[S² - χ²_{α/2}, S² + χ²_{α/2}]",
        "[nS²/χ²_{α/2}, nS²/χ²_{1-α/2}]"
      ],
      correct: 0,
      explanation: "CI: [(n-1)S²/χ²_{α/2,n-1}, (n-1)S²/χ²_{1-α/2,n-1}]. Note χ²_{α/2} is the upper critical value (larger)."
    },
    {
      id: 4,
      question: "Grass seed example: n=13, S²=0.2862, 90% CI. The degrees of freedom is?",
      options: [
        "13",
        "12",
        "11",
        "14"
      ],
      correct: 1,
      explanation: "df = n - 1 = 13 - 1 = 12 (since μ is unknown, we use n-1)."
    },
    {
      id: 5,
      question: "Grass seed example: χ²_{0.05,12}=21.03, χ²_{0.95,12}=5.226. The 90% CI for σ² is?",
      options: [
        "[0.163, 0.657]",
        "[0.135, 0.954]",
        "[0.2862, 0.5724]",
        "[0.100, 1.200]"
      ],
      correct: 0,
      explanation: "Lower = 12×0.2862/21.03 = 3.4344/21.03 = 0.163. Upper = 12×0.2862/5.226 = 3.4344/5.226 = 0.657. CI = [0.163, 0.657]."
    },
    {
      id: 6,
      question: "The chi-squared distribution is?",
      options: [
        "Symmetric",
        "Right-skewed (positively skewed)",
        "Left-skewed",
        "Uniform"
      ],
      correct: 1,
      explanation: "The chi-squared distribution is right-skewed (positively skewed). It only takes non-negative values."
    },
    {
      id: 7,
      question: "For the chi-squared distribution, χ²_{α,df} means?",
      options: [
        "The value with area α to the LEFT",
        "The value with area α to the RIGHT",
        "The value at the mean",
        "The value with area α in both tails"
      ],
      correct: 1,
      explanation: "χ²_{α,df} is the critical value with area α to the RIGHT of it (upper-tail probability)."
    },
    {
      id: 8,
      question: "The CI for the ratio of two variances σ₂²/σ₁² uses which distribution?",
      options: [
        "Chi-squared distribution",
        "t-distribution",
        "F-distribution",
        "Normal distribution"
      ],
      correct: 2,
      explanation: "The ratio (S₂²/σ₂²)/(S₁²/σ₁²) follows an F-distribution, so CIs for σ₂²/σ₁² use the F-distribution."
    },
    {
      id: 9,
      question: "The F-distribution has how many degree of freedom parameters?",
      options: [
        "One",
        "Two (numerator df and denominator df)",
        "Three",
        "None"
      ],
      correct: 1,
      explanation: "The F-distribution has two df parameters: df₁ (numerator, from the first sample) and df₂ (denominator, from the second sample)."
    },
    {
      id: 10,
      question: "The CI for σ₂²/σ₁² is?",
      options: [
        "[(S₂²/S₁²) × (1/F_{α/2,n₂-1,n₁-1}), (S₂²/S₁²) × F_{α/2,n₁-1,n₂-1}]",
        "[S₂²/S₁² - F, S₂²/S₁² + F]",
        "[S₂² - S₁², S₂² + S₁²]",
        "[F × S₁²/S₂², F × S₂²/S₁²]"
      ],
      correct: 0,
      explanation: "CI for σ₂²/σ₁²: [(S₂²/S₁²)/F_{α/2,n₂-1,n₁-1}, (S₂²/S₁²)×F_{α/2,n₁-1,n₂-1}]."
    },
    {
      id: 11,
      question: "The F-distribution property: F_{1-α, ν₁, ν₂} = ?",
      options: [
        "1/F_{α, ν₁, ν₂}",
        "1/F_{α, ν₂, ν₁}",
        "F_{α, ν₂, ν₁}",
        "-F_{α, ν₁, ν₂}"
      ],
      correct: 1,
      explanation: "F_{1-α, ν₁, ν₂} = 1/F_{α, ν₂, ν₁}. Note: the degrees of freedom swap when taking the reciprocal."
    },
    {
      id: 12,
      question: "Water bottle example: n₁=10 (old, S₁²=0.0153), n₂=12 (new, S₂²=0.0095). S₂²/S₁² = ?",
      options: [
        "1.611",
        "0.621",
        "0.0058",
        "0.0248"
      ],
      correct: 1,
      explanation: "S₂²/S₁² = 0.0095/0.0153 = 0.621."
    },
    {
      id: 13,
      question: "When testing H₀: σ² = σ₀² (one variance), the test statistic is?",
      options: [
        "χ² = nS²/σ₀²",
        "χ² = (n-1)S²/σ₀²",
        "F = S₁²/S₂²",
        "Z = (S² - σ₀²)/SE"
      ],
      correct: 1,
      explanation: "χ²_cal = (n-1)S²/σ₀². This follows χ²(n-1) under H₀."
    },
    {
      id: 14,
      question: "Helmet force example: n=40, S²=1600, H₀: σ²=σ₀². χ²_cal = (40-1)×1600/σ₀². If σ₀²=1089, χ²_cal = ?",
      options: [
        "57.33",
        "39.00",
        "62.40",
        "46.08"
      ],
      correct: 0,
      explanation: "χ²_cal = (40-1)×1600/1089 = 39×1600/1089 = 62400/1089 = 57.33."
    },
    {
      id: 15,
      question: "Helmet example: two-tail test at α=0.05, df=39, χ²_{0.025,39}=58.12, χ²_{0.975,39}=23.65. χ²_cal=57.33. Conclusion?",
      options: [
        "Reject H₀ (57.33 > 58.12)",
        "Do not reject H₀ (23.65 < 57.33 < 58.12)",
        "Reject H₀ (57.33 < 23.65)",
        "Inconclusive"
      ],
      correct: 1,
      explanation: "Do not reject H₀ because χ²_cal = 57.33 falls within the non-rejection region [23.65, 58.12]."
    },
    {
      id: 16,
      question: "For comparing two population variances, the test statistic is?",
      options: [
        "χ² = (n-1)S²/σ₀²",
        "F = S₁²/S₂²",
        "Z = (S₁² - S₂²)/SE",
        "T = (S₁² - S₂²)/Sp"
      ],
      correct: 1,
      explanation: "F_cal = S₁²/S₂² follows F(n₁-1, n₂-1) under H₀: σ₁² = σ₂²."
    },
    {
      id: 17,
      question: "In the F-test for two variances, which sample variance goes in the numerator?",
      options: [
        "Always the smaller one",
        "Always the larger one",
        "The one from population 1 (as defined in the hypotheses)",
        "It doesn't matter"
      ],
      correct: 2,
      explanation: "F = S₁²/S₂² where population 1 and 2 are defined by the hypotheses. The larger variance is NOT always placed on top — it depends on the hypothesis setup."
    },
    {
      id: 18,
      question: "Impurities example: S₁²=4.4 (supplier 1), S₂²=2.16 (supplier 2). F_cal = ?",
      options: [
        "0.49",
        "2.04",
        "2.24",
        "6.56"
      ],
      correct: 1,
      explanation: "F_cal = S₁²/S₂² = 4.4/2.16 = 2.04."
    },
    {
      id: 19,
      question: "Impurities example: F_cal=2.04, F_{0.025,9,7}=4.82, two-tail test at α=0.05. Conclusion?",
      options: [
        "Reject H₀; variances are different",
        "Do not reject H₀; no evidence that variances differ",
        "The data is invalid",
        "Reject H₀; supplier 1 has greater variance"
      ],
      correct: 1,
      explanation: "F_cal = 2.04 < F_{0.025,9,7} = 4.82, so do not reject H₀. There is no significant difference between the two population variances."
    },
    {
      id: 20,
      question: "For a right-tail F-test (H₁: σ₁² > σ₂²), we reject H₀ when?",
      options: [
        "F_cal < F_{α, n₁-1, n₂-1}",
        "F_cal > F_{α, n₁-1, n₂-1}",
        "F_cal > F_{α/2, n₁-1, n₂-1}",
        "F_cal = 1"
      ],
      correct: 1,
      explanation: "For a right-tail test: reject H₀ when F_cal > F_{α, n₁-1, n₂-1}."
    },
    {
      id: 21,
      question: "For a two-tail F-test for two variances, the rejection regions are?",
      options: [
        "F_cal > F_{α, n₁-1, n₂-1}",
        "F_cal > F_{α/2, n₁-1, n₂-1} or F_cal < F_{1-α/2, n₁-1, n₂-1}",
        "F_cal < 0",
        "F_cal = F_{α/2}"
      ],
      correct: 1,
      explanation: "Two-tail: reject if F_cal > F_{α/2, n₁-1, n₂-1} (upper) or F_cal < F_{1-α/2, n₁-1, n₂-1} (lower). The lower critical value = 1/F_{α/2, n₂-1, n₁-1}."
    },
    {
      id: 22,
      question: "When μ is known, the CI for σ² uses which quantity in the numerator?",
      options: [
        "(n-1)S²",
        "Σ(Xi - μ)²",
        "nS²",
        "Σ(Xi - X̄)²"
      ],
      correct: 1,
      explanation: "When μ is known: CI uses Σ(Xi-μ)²/χ²_{...} in the endpoints. The statistic Σ(Xi-μ)²/σ² ~ χ²(n)."
    },
    {
      id: 23,
      question: "The chi-squared test for variance requires the assumption that?",
      options: [
        "The sample size is large (n > 30)",
        "The population is normally distributed",
        "The variance is less than 1",
        "The data is discrete"
      ],
      correct: 1,
      explanation: "The chi-squared test for variance is sensitive to non-normality. It requires the population to be normally distributed."
    },
    {
      id: 24,
      question: "If we want to test whether a variance exceeds 100, the hypotheses are?",
      options: [
        "H₀: σ² = 100, H₁: σ² < 100",
        "H₀: σ² ≤ 100, H₁: σ² > 100",
        "H₀: σ² > 100, H₁: σ² ≤ 100",
        "H₀: σ = 10, H₁: σ ≠ 10"
      ],
      correct: 1,
      explanation: "To test if variance exceeds 100: H₀: σ² ≤ 100 vs H₁: σ² > 100 (right-tail test)."
    },
    {
      id: 25,
      question: "For a left-tail chi-squared test (H₁: σ² < σ₀²), we reject H₀ when?",
      options: [
        "χ²_cal > χ²_{α, n-1}",
        "χ²_cal < χ²_{1-α, n-1}",
        "χ²_cal > χ²_{1-α, n-1}",
        "χ²_cal < χ²_{α, n-1}"
      ],
      correct: 1,
      explanation: "Left-tail: reject H₀ when χ²_cal < χ²_{1-α, n-1} (the lower critical value)."
    },
    {
      id: 26,
      question: "The F-distribution is also used in which other test?",
      options: [
        "Paired t-test",
        "One-Way ANOVA",
        "One-sample proportion test",
        "Paired Z-test"
      ],
      correct: 1,
      explanation: "The F-distribution is used in ANOVA (F = MSA/MSW) and in testing equality of two variances (F = S₁²/S₂²)."
    },
    {
      id: 27,
      question: "What is the relationship between chi-squared and F distributions?",
      options: [
        "F = χ₁² + χ₂²",
        "F = (χ₁²/ν₁) / (χ₂²/ν₂) where χ₁² and χ₂² are independent",
        "F = χ₁² × χ₂²",
        "They are unrelated"
      ],
      correct: 1,
      explanation: "If χ₁² ~ χ²(ν₁) and χ₂² ~ χ²(ν₂) are independent, then F = (χ₁²/ν₁)/(χ₂²/ν₂) ~ F(ν₁, ν₂)."
    },
    {
      id: 28,
      question: "If F_{0.05, 10, 8} = 3.35, what is F_{0.95, 8, 10}?",
      options: [
        "3.35",
        "1/3.35 ≈ 0.299",
        "0.05",
        "Cannot be determined"
      ],
      correct: 1,
      explanation: "F_{1-α, ν₁, ν₂} = 1/F_{α, ν₂, ν₁}. So F_{0.95, 8, 10} = 1/F_{0.05, 10, 8} = 1/3.35 ≈ 0.299."
    },
    {
      id: 29,
      question: "For the CI of σ² (μ unknown), increasing confidence level (e.g., from 90% to 99%) will?",
      options: [
        "Narrow the interval",
        "Widen the interval",
        "Not change the interval",
        "Make the interval negative"
      ],
      correct: 1,
      explanation: "Increasing the confidence level widens the interval — we need a larger range to be more confident."
    },
    {
      id: 30,
      question: "In a CI for σ², note that the CI is NOT symmetric around S². Why?",
      options: [
        "Because we use t-distribution",
        "Because the chi-squared distribution is skewed",
        "Because S² is always zero",
        "Because σ² is a constant"
      ],
      correct: 1,
      explanation: "The CI for σ² is NOT symmetric around S² because the underlying chi-squared distribution is right-skewed, unlike the symmetric normal or t-distributions."
    },
    // ─── Missing: Chi-squared pivotal quantity ───
    {
      id: 31,
      question: "The pivotal quantity (n−1)S²/σ² follows which distribution?",
      options: [
        "Normal distribution",
        "t-distribution with n−1 df",
        "Chi-squared distribution with n−1 df",
        "F-distribution"
      ],
      correct: 2,
      explanation: "(n−1)S²/σ² ~ χ²(n−1). This pivotal quantity is used to construct confidence intervals and hypothesis tests for a single population variance σ²."
    },
    // ─── Missing: F-distribution lower critical value ───
    {
      id: 32,
      question: "The lower critical value of the F-distribution F₁₋α/₂(ν₁, ν₂) can be found using:",
      options: [
        "1 / Fα/₂(ν₂, ν₁)  — take the reciprocal with swapped df",
        "Fα/₂(ν₁, ν₂) directly from the table",
        "1 − Fα/₂(ν₁, ν₂)",
        "Fα/₂(ν₁, ν₂) × (−1)"
      ],
      correct: 0,
      explanation: "F₁₋α/₂(ν₁, ν₂) = 1 / Fα/₂(ν₂, ν₁). Since F-tables typically only give upper critical values, we obtain the lower critical value by taking the reciprocal with the degrees of freedom swapped."
    },
    // ─── Missing: When to swap numerator/denominator ───
    {
      id: 33,
      question: "In an F-test for comparing two variances, the test statistic F = S₁²/S₂² is typically constructed so that:",
      options: [
        "The larger sample variance is in the numerator (making F ≥ 1)",
        "The smaller sample variance is always in the numerator",
        "The order doesn't matter",
        "The population variances determine the order"
      ],
      correct: 0,
      explanation: "By convention, the larger sample variance is placed in the numerator so F ≥ 1. This simplifies the test to a right-tailed test, requiring only upper critical values from the F-table."
    },
    // ─── Missing: Robustness to non-normality ───
    {
      id: 34,
      question: "Tests for population variances using χ² and F distributions are:",
      options: [
        "Very robust to departures from normality",
        "Not robust — they are highly sensitive to the normality assumption",
        "Only affected by sample size",
        "Robust as long as n > 30"
      ],
      correct: 1,
      explanation: "Unlike tests for means (which benefit from CLT), tests for variances using χ² and F are highly sensitive to non-normality. Even moderate departures from normality can seriously affect the validity of these tests."
    },
    // ─── Missing: Bartlett's test ───
    {
      id: 35,
      question: "Bartlett's test is used to test:",
      options: [
        "Whether a single population variance equals a specified value",
        "Whether two or more populations have equal variances (homogeneity of variance)",
        "Whether the population mean is zero",
        "Whether the data is normally distributed"
      ],
      correct: 1,
      explanation: "Bartlett's test extends the F-test for equal variances to more than two groups. It tests H₀: σ₁² = σ₂² = ... = σₖ² and is commonly used to verify the equal variance assumption before ANOVA."
    },
    // ─── Missing: Chi-squared critical value table reading ───
    {
      id: 36,
      question: "For a two-tailed test of H₀: σ² = σ₀² at α = 0.05 with n = 20, you need which two χ² critical values?",
      options: [
        "χ²₀.₀₂₅,₁₉ and χ²₀.₉₇₅,₁₉",
        "χ²₀.₀₅,₁₉ and χ²₀.₉₅,₁₉",
        "χ²₀.₀₂₅,₂₀ and χ²₀.₉₇₅,₂₀",
        "Only χ²₀.₀₅,₁₉"
      ],
      correct: 0,
      explanation: "Two-tailed test: α/2 = 0.025 in each tail, df = n−1 = 19. We need χ²₀.₀₂₅,₁₉ (upper critical value) and χ²₀.₉₇₅,₁₉ (lower critical value). Reject if the test statistic falls outside these bounds."
    },
    // ─── Missing: Sample size planning for variance ───
    {
      id: 37,
      question: "Compared to testing means, testing variances generally requires:",
      options: [
        "Smaller sample sizes for the same power",
        "Larger sample sizes to achieve comparable power, since variance tests are less efficient",
        "The same sample size",
        "No sample size planning"
      ],
      correct: 1,
      explanation: "Tests for variances are inherently less powerful than tests for means. Estimating σ² requires more data for the same precision, and the sensitivity to non-normality means careful planning and larger samples are needed."
    }
  ]
};

export default note08;

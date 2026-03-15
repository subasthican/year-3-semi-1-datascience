const note06 = {
  id: 6,
  title: "Note 06 – ANOVA (Analysis of Variance)",
  questions: [
    {
      id: 1,
      question: "One-Way ANOVA is used to compare?",
      options: [
        "Means of two populations only",
        "Means of c populations (c ≥ 2)",
        "Variances of two populations",
        "Proportions of two populations"
      ],
      correct: 1,
      explanation: "One-Way ANOVA compares means of c populations using one factor. It extends the two-sample t-test to c ≥ 2 groups."
    },
    {
      id: 2,
      question: "The null hypothesis in One-Way ANOVA is?",
      options: [
        "H₀: μ₁ ≠ μ₂ ≠ ... ≠ μc",
        "H₀: μ₁ = μ₂ = ... = μc",
        "H₀: At least one pair of means differ",
        "H₀: σ₁² = σ₂² = ... = σc²"
      ],
      correct: 1,
      explanation: "H₀: μ₁ = μ₂ = ... = μc (all population means are equal). H₁: At least one population mean is different."
    },
    {
      id: 3,
      question: "Which assumption is NOT required for One-Way ANOVA?",
      options: [
        "Populations are normally distributed",
        "Populations have equal variances (homogeneity)",
        "Samples are independent",
        "Sample sizes must be equal"
      ],
      correct: 3,
      explanation: "ANOVA requires: (1) normality, (2) equal variances (homogeneity), (3) independent random samples. Equal sample sizes are not required."
    },
    {
      id: 4,
      question: "SST stands for?",
      options: [
        "Sum of Squares Total",
        "Sum of Squares Treatment",
        "Sum of Squares Test",
        "Sum of Squares Two-way"
      ],
      correct: 0,
      explanation: "SST = Sum of Squares Total = total variation in the data = Σ(Xij - X̄)²."
    },
    {
      id: 5,
      question: "The partition of variation in ANOVA is?",
      options: [
        "SST = SSA + SSE",
        "SST = SSA × SSW",
        "SSA = SST + SSW",
        "SSW = SSA + SST"
      ],
      correct: 0,
      explanation: "SST = SSA + SSW (also written SST = SSA + SSE). Total variation = Among (Between) groups + Within groups."
    },
    {
      id: 6,
      question: "SSA (Sum of Squares Among groups) measures?",
      options: [
        "Variation within each group",
        "Variation between the group means and the grand mean",
        "Total variation",
        "Random error only"
      ],
      correct: 1,
      explanation: "SSA = Σ nⱼ(X̄ⱼ - X̄)² measures the variation between (among) group means and the overall grand mean."
    },
    {
      id: 7,
      question: "SSW (Sum of Squares Within groups) measures?",
      options: [
        "Variation between groups",
        "Variation of individual observations within each group around their group mean",
        "Total variation",
        "Treatment effect"
      ],
      correct: 1,
      explanation: "SSW = ΣΣ(Xij - X̄ⱼ)² measures variation of observations within each group around their respective group means (random error)."
    },
    {
      id: 8,
      question: "MSA (Mean Square Among) = ?",
      options: [
        "SSA / n",
        "SSA / (c - 1)",
        "SSA / (n - c)",
        "SSA / (n - 1)"
      ],
      correct: 1,
      explanation: "MSA = SSA / (c - 1), where c is the number of groups. The degrees of freedom for among groups is c - 1."
    },
    {
      id: 9,
      question: "MSW (Mean Square Within) = ?",
      options: [
        "SSW / (c - 1)",
        "SSW / (n - 1)",
        "SSW / (n - c)",
        "SSW / n"
      ],
      correct: 2,
      explanation: "MSW = SSW / (n - c), where n is total number of observations and c is the number of groups."
    },
    {
      id: 10,
      question: "The F-statistic in One-Way ANOVA is?",
      options: [
        "F = MSW / MSA",
        "F = MSA / MSW",
        "F = SSA / SSW",
        "F = SST / (n - 1)"
      ],
      correct: 1,
      explanation: "F = MSA / MSW. Large values of F indicate that group means differ significantly."
    },
    {
      id: 11,
      question: "The ANOVA F-test rejects H₀ when?",
      options: [
        "F_cal < F_{α, c-1, n-c}",
        "F_cal > F_{α, c-1, n-c}",
        "F_cal = 1",
        "F_cal < 0"
      ],
      correct: 1,
      explanation: "Reject H₀ if F_cal > F_{α, c-1, n-c}. ANOVA is always a right-tail test."
    },
    {
      id: 12,
      question: "Total degrees of freedom in ANOVA = ?",
      options: [
        "n",
        "n - 1",
        "n - c",
        "c - 1"
      ],
      correct: 1,
      explanation: "Total df = n - 1 = (c - 1) + (n - c). Among df = c - 1, Within df = n - c."
    },
    {
      id: 13,
      question: "In the ANOVA table, which row gives the F-statistic?",
      options: [
        "Total row",
        "Within Groups row",
        "Among Groups row (F = MSA/MSW)",
        "None of the above"
      ],
      correct: 2,
      explanation: "The F-statistic is computed from the Among Groups row: F = MSA / MSW."
    },
    {
      id: 14,
      question: "Tennis racket example: 4 racket types, F_cal=4.026, F_{0.05,3,20}=3.1. Conclusion?",
      options: [
        "Do not reject H₀; no difference among racket types",
        "Reject H₀; at least one racket type differs in mean",
        "The test is invalid",
        "Only two rackets are different"
      ],
      correct: 1,
      explanation: "F_cal=4.026 > F_{0.05,3,20}=3.1, so reject H₀. At least one racket type has a different mean ball speed."
    },
    {
      id: 15,
      question: "What is the purpose of Levene's Test?",
      options: [
        "To test normality",
        "To test homogeneity of variances",
        "To test independence",
        "To compare means"
      ],
      correct: 1,
      explanation: "Levene's Test checks the ANOVA assumption of equal (homogeneous) variances across groups. H₀: σ₁² = σ₂² = ... = σc²."
    },
    {
      id: 16,
      question: "In the modified Levene's Test (Brown-Forsythe), absolute deviations are computed from?",
      options: [
        "Group means",
        "Grand mean",
        "Group medians",
        "Group modes"
      ],
      correct: 2,
      explanation: "The modified Levene's test uses absolute deviations from each group's MEDIAN (more robust). dij = |Xij - X̃j| where X̃j is the median of group j."
    },
    {
      id: 17,
      question: "In Levene's Test, after computing the absolute deviations dij, what is performed?",
      options: [
        "A chi-squared test",
        "A regular One-Way ANOVA on the dij values",
        "A paired t-test",
        "A correlation test"
      ],
      correct: 1,
      explanation: "After computing dij = |Xij - X̃j|, we perform a standard One-Way ANOVA on the dij values. If F' > F_{α, c-1, n-c}, variances are unequal."
    },
    {
      id: 18,
      question: "If Levene's test is significant (p < α), what does it mean?",
      options: [
        "Variances are equal",
        "Variances are NOT equal (violates ANOVA assumption)",
        "Means are equal",
        "The data is normally distributed"
      ],
      correct: 1,
      explanation: "If p < α in Levene's test, we reject H₀ of equal variances. This means the homogeneity assumption for ANOVA is violated."
    },
    {
      id: 19,
      question: "When ANOVA rejects H₀, what does Post-Hoc analysis determine?",
      options: [
        "Whether ANOVA was valid",
        "Which specific pairs of means differ",
        "What the total variation is",
        "The normality of the data"
      ],
      correct: 1,
      explanation: "ANOVA only tells us that at least one mean differs. Post-Hoc tests (e.g., Fisher's LSD) determine WHICH specific pairs of means differ."
    },
    {
      id: 20,
      question: "Fisher's LSD (Least Significant Difference) is?",
      options: [
        "LSD = t_{df,α/2} × √(MSW × (1/nⱼ + 1/nᵢ))",
        "LSD = Z_{α/2} × √(SSW/n)",
        "LSD = F_{α} × MSA",
        "LSD = t_{α} × Sp"
      ],
      correct: 0,
      explanation: "LSD = t_{n-c, α/2} × √(MSW × (1/nⱼ + 1/nᵢ)). If |X̄ⱼ - X̄ᵢ| > LSD, those two means are significantly different."
    },
    {
      id: 21,
      question: "In Fisher's LSD, we conclude two means μⱼ and μᵢ are significantly different when?",
      options: [
        "|X̄ⱼ - X̄ᵢ| < LSD",
        "|X̄ⱼ - X̄ᵢ| > LSD",
        "|X̄ⱼ - X̄ᵢ| = LSD",
        "X̄ⱼ = X̄ᵢ"
      ],
      correct: 1,
      explanation: "If the absolute difference |X̄ⱼ - X̄ᵢ| exceeds the LSD value, there is a significant difference between means μⱼ and μᵢ."
    },
    {
      id: 22,
      question: "In Fisher's LSD, when all group sizes are equal (nⱼ = nᵢ = n_each), LSD simplifies to?",
      options: [
        "t × √(MSW × 2/n_each)",
        "t × √(MSW / n_each)",
        "t × √(SSW / n)",
        "t × MSW"
      ],
      correct: 0,
      explanation: "When nⱼ = nᵢ = n_each, LSD = t × √(MSW × (1/n_each + 1/n_each)) = t × √(MSW × 2/n_each)."
    },
    {
      id: 23,
      question: "Doughnut fat absorption example: 4 fat types, F_cal=3.23, F_{0.05,3,20}=3.10. Conclusion?",
      options: [
        "Do not reject H₀",
        "Reject H₀; at least one fat type has a different mean absorption",
        "All means are different",
        "Only fat 1 differs"
      ],
      correct: 1,
      explanation: "F_cal = 3.23 > F_{0.05,3,20} = 3.10, so reject H₀ at 5% significance. At least one fat type has a different mean fat absorption."
    },
    {
      id: 24,
      question: "In one-way ANOVA, X̄ (grand mean) is?",
      options: [
        "Mean of group means only",
        "Overall mean of all observations",
        "Median of all observations",
        "The largest group mean"
      ],
      correct: 1,
      explanation: "X̄ (grand mean) = sum of all observations / total n = (ΣΣXij) / n."
    },
    {
      id: 25,
      question: "If F_cal is close to 1, it suggests?",
      options: [
        "Group means are significantly different",
        "The among-group variation is about equal to within-group variation",
        "The test is invalid",
        "All means are zero"
      ],
      correct: 1,
      explanation: "F = MSA/MSW ≈ 1 means variation among groups is about the same as within groups, suggesting no significant difference in means."
    },
    {
      id: 26,
      question: "What is the computation formula for SST?",
      options: [
        "ΣΣXij² - n×X̄²",
        "ΣΣXij² - ΣnjX̄j²",
        "ΣnjX̄j² - n×X̄²",
        "ΣΣXij² + n×X̄²"
      ],
      correct: 0,
      explanation: "SST = ΣΣXij² - n×X̄² (computation formula). Definition formula: SST = ΣΣ(Xij - X̄)²."
    },
    {
      id: 27,
      question: "The computation formula for SSA is?",
      options: [
        "ΣΣXij² - n×X̄²",
        "ΣnjX̄j² - n×X̄²",
        "ΣΣXij² - ΣnjX̄j²",
        "n×X̄² - ΣnjX̄j²"
      ],
      correct: 1,
      explanation: "SSA = Σnj×X̄j² - n×X̄². This measures the weighted variation of group means around the grand mean."
    },
    {
      id: 28,
      question: "The computation formula for SSW is?",
      options: [
        "ΣΣXij² - ΣnjX̄j²",
        "ΣnjX̄j² - n×X̄²",
        "ΣΣXij² - n×X̄²",
        "SST × SSA"
      ],
      correct: 0,
      explanation: "SSW = ΣΣXij² - Σnj×X̄j². Note: SSW = SST - SSA."
    },
    {
      id: 29,
      question: "If there are c=5 groups with total n=40 observations, the df for MSA and MSW are?",
      options: [
        "4 and 35",
        "5 and 40",
        "4 and 36",
        "5 and 35"
      ],
      correct: 0,
      explanation: "df for MSA = c - 1 = 5 - 1 = 4. df for MSW = n - c = 40 - 5 = 35."
    },
    {
      id: 30,
      question: "ANOVA assumes the populations follow which distribution?",
      options: [
        "Binomial distribution",
        "Normal distribution",
        "Poisson distribution",
        "Uniform distribution"
      ],
      correct: 1,
      explanation: "ANOVA assumes each population is normally distributed. This is one of the three key assumptions (normality, equal variances, independence)."
    },
    // ─── Missing: Computational formulas ───
    {
      id: 31,
      question: "In one-way ANOVA with c = 3 groups and total n = 15, if SST = 120 and SSA = 40, what is SSW?",
      options: [
        "80",
        "40",
        "160",
        "120"
      ],
      correct: 0,
      explanation: "SST = SSA + SSW, so SSW = SST − SSA = 120 − 40 = 80. Total variation is partitioned into among-group (SSA) and within-group (SSW) variation."
    },
    // ─── Missing: df partition ───
    {
      id: 32,
      question: "In one-way ANOVA, the degrees of freedom satisfy which relationship?",
      options: [
        "(n − 1) = (c − 1) + (n − c)",
        "(n − 1) = c + (n − 1)",
        "(c − 1) = (n − 1) + (n − c)",
        "n = c × (n − 1)"
      ],
      correct: 0,
      explanation: "Total df = n − 1 is partitioned into among-group df = c − 1 and within-group df = n − c. So (n − 1) = (c − 1) + (n − c)."
    },
    // ─── Missing: F ≈ 1 interpretation ───
    {
      id: 33,
      question: "If the F test statistic in ANOVA is close to 1, this suggests:",
      options: [
        "Strong evidence that at least one mean differs",
        "The variation among group means is similar to the variation within groups — no significant difference",
        "All group means are exactly equal",
        "The test is invalid"
      ],
      correct: 1,
      explanation: "F = MSA/MSW. If F ≈ 1, the between-group variation is about the same as within-group variation, suggesting the group means are not significantly different."
    },
    // ─── Missing: Effect size η² ───
    {
      id: 34,
      question: "The effect size measure η² (eta-squared) in ANOVA is calculated as:",
      options: [
        "SSA / SST",
        "SSW / SST",
        "MSA / MSW",
        "SSA / SSW"
      ],
      correct: 0,
      explanation: "η² = SSA/SST represents the proportion of total variation explained by the group differences. Values range from 0 to 1, with higher values indicating a larger effect."
    },
    // ─── Missing: Alternative post-hoc tests ───
    {
      id: 35,
      question: "After rejecting H₀ in ANOVA, which procedure is commonly used to determine which specific pairs of means differ?",
      options: [
        "Tukey's Honestly Significant Difference (HSD) test",
        "Another F-test",
        "A chi-squared test",
        "Repeating the ANOVA with fewer groups"
      ],
      correct: 0,
      explanation: "Tukey's HSD is a post-hoc comparison method that controls the family-wise error rate when comparing all pairs of group means after a significant ANOVA result."
    },
    // ─── Missing: Assumption violation ───
    {
      id: 36,
      question: "If the ANOVA assumption of equal variances is severely violated, an appropriate alternative is:",
      options: [
        "Welch's ANOVA (which does not assume equal variances)",
        "Ignoring the violation and proceeding",
        "Using a paired t-test",
        "Increasing the sample size only"
      ],
      correct: 0,
      explanation: "Welch's ANOVA is a robust alternative when the homogeneity of variance assumption is violated. For non-normality with ordinal data, the Kruskal-Wallis test is a nonparametric alternative."
    },
    // ─── Missing: MSA and MSW computation ───
    {
      id: 37,
      question: "With c = 3 groups, n = 15 total observations, SSA = 40 and SSW = 80, what is the F statistic?",
      options: [
        "F = (40/2) / (80/12) = 20/6.67 = 3.0",
        "F = 40/80 = 0.5",
        "F = (40/12) / (80/2) = 0.083",
        "F = (40 + 80) / 15 = 8.0"
      ],
      correct: 0,
      explanation: "MSA = SSA/(c−1) = 40/2 = 20. MSW = SSW/(n−c) = 80/12 = 6.67. F = MSA/MSW = 20/6.67 = 3.0."
    },
    // ─── Missing: Unequal replication ───
    {
      id: 38,
      question: "Can one-way ANOVA be performed when the group sample sizes are unequal?",
      options: [
        "Yes, but the formulas use nⱼ (individual group sizes) instead of assuming equal n",
        "No, ANOVA strictly requires equal sample sizes",
        "Only if the difference is exactly 1",
        "Yes, but only with more than 5 groups"
      ],
      correct: 0,
      explanation: "ANOVA can handle unequal group sizes. The formulas for SSA use each group's nⱼ. However, unequal sizes reduce the test's robustness to violations of the equal variance assumption."
    }
  ]
};

export default note06;

const note05 = {
  id: 5,
  title: "Note 05 – Two Population Means",
  questions: [
    {
      id: 1,
      question: "E(X + Y) = ?",
      options: [
        "E(X) × E(Y)",
        "E(X) + E(Y)",
        "E(X) - E(Y)",
        "E(X) / E(Y)"
      ],
      correct: 1,
      explanation: "A property of expected values: E(X + Y) = E(X) + E(Y). Similarly, E(X - Y) = E(X) - E(Y)."
    },
    {
      id: 2,
      question: "For independent X and Y, V(X + Y) = ?",
      options: [
        "V(X) + V(Y)",
        "V(X) - V(Y)",
        "V(X) × V(Y)",
        "V(X) / V(Y)"
      ],
      correct: 0,
      explanation: "For independent random variables X and Y: V(X + Y) = V(X) + V(Y). Also, V(X - Y) = V(X) + V(Y) (NOT minus)."
    },
    {
      id: 3,
      question: "For independent X and Y, V(X - Y) = ?",
      options: [
        "V(X) - V(Y)",
        "V(X) + V(Y)",
        "V(X) × V(Y)",
        "|V(X) - V(Y)|"
      ],
      correct: 1,
      explanation: "V(X - Y) = V(X) + V(-Y) = V(X) + (-1)²V(Y) = V(X) + V(Y). Variance is always added, even for subtraction."
    },
    {
      id: 4,
      question: "V(kX) = ?",
      options: [
        "kV(X)",
        "k²V(X)",
        "V(X)/k",
        "V(X)/k²"
      ],
      correct: 1,
      explanation: "V(kX) = k²V(X). When a random variable is multiplied by a constant k, the variance is multiplied by k²."
    },
    {
      id: 5,
      question: "If X̄ ~ N(μ₁, σ₁²/n) and Ȳ ~ N(μ₂, σ₂²/m) are independent, then (X̄ - Ȳ) follows?",
      options: [
        "N(μ₁ - μ₂, σ₁²/n - σ₂²/m)",
        "N(μ₁ + μ₂, σ₁²/n + σ₂²/m)",
        "N(μ₁ - μ₂, σ₁²/n + σ₂²/m)",
        "N(μ₁ - μ₂, σ₁² + σ₂²)"
      ],
      correct: 2,
      explanation: "(X̄ - Ȳ) ~ N(μ₁ - μ₂, σ₁²/n + σ₂²/m). The means subtract, but variances add (property of variance)."
    },
    {
      id: 6,
      question: "Case A: σ₁² ≠ σ₂² but KNOWN. The CI for μ₁ - μ₂ uses?",
      options: [
        "t-distribution",
        "Z-distribution with σ₁²/n + σ₂²/m",
        "F-distribution",
        "Chi-squared distribution"
      ],
      correct: 1,
      explanation: "When both variances are known (even if unequal), we use Z. CI: (X̄ - Ȳ) ± Z_{α/2} × √(σ₁²/n + σ₂²/m)."
    },
    {
      id: 7,
      question: "Case B: σ₁² = σ₂² = σ² and KNOWN. The CI for μ₁ - μ₂ is?",
      options: [
        "(X̄ - Ȳ) ± Z_{α/2} × σ × √(1/n + 1/m)",
        "(X̄ - Ȳ) ± t × Sp × √(1/n + 1/m)",
        "(X̄ - Ȳ) ± Z_{α/2} × √(σ₁²/n - σ₂²/m)",
        "(X̄ - Ȳ) ± Z_α × σ"
      ],
      correct: 0,
      explanation: "When σ₁² = σ₂² = σ² (known), CI = (X̄ - Ȳ) ± Z_{α/2} × σ × √(1/n + 1/m)."
    },
    {
      id: 8,
      question: "Case C: σ₁² = σ₂² but UNKNOWN. What is the pooled variance estimator Sp?",
      options: [
        "Sp = √[(S₁² + S₂²)/2]",
        "Sp = √[((n-1)S₁² + (m-1)S₂²)/(n+m-2)]",
        "Sp = (S₁ + S₂)/2",
        "Sp = √(S₁² × S₂²)"
      ],
      correct: 1,
      explanation: "Sp = √[((n-1)S₁² + (m-1)S₂²)/(n+m-2)]. This is the pooled standard deviation, a weighted average of sample variances."
    },
    {
      id: 9,
      question: "Case C (equal unknown variances): The test statistic follows which distribution?",
      options: [
        "N(0,1)",
        "t(n+m)",
        "t(n+m-2)",
        "t(n-1)"
      ],
      correct: 2,
      explanation: "T = (X̄-Ȳ-(μ₁-μ₂))/(Sp√(1/n+1/m)) ~ t(n+m-2). The degrees of freedom is n+m-2."
    },
    {
      id: 10,
      question: "Case D: σ₁² ≠ σ₂² and UNKNOWN. What distribution does the test stat follow?",
      options: [
        "t(n+m-2)",
        "t with Welch-Satterthwaite df",
        "N(0,1)",
        "F(n-1, m-1)"
      ],
      correct: 1,
      explanation: "When variances are unequal and unknown, T ~ t(df) where df = (S₁²/n + S₂²/m)² / [(S₁²/n)²/(n-1) + (S₂²/m)²/(m-1)] (Welch-Satterthwaite formula)."
    },
    {
      id: 11,
      question: "The Welch-Satterthwaite degrees of freedom formula is used when?",
      options: [
        "Variances are equal and known",
        "Variances are equal and unknown",
        "Variances are unequal and unknown",
        "Variances are unequal and known"
      ],
      correct: 2,
      explanation: "The Welch-Satterthwaite df formula: df = (S₁²/n + S₂²/m)² / [(S₁²/n)²/(n-1) + (S₂²/m)²/(m-1)] is used when population variances are unequal and unknown (Case D)."
    },
    {
      id: 12,
      question: "Example: Class 1: X̄=74, S₁²=132.67, n=4. Class 2: Ȳ=60, S₂²=92, m=3. Equal variances assumed. What is Sp?",
      options: [
        "10.78",
        "11.54",
        "112.34",
        "15.00"
      ],
      correct: 0,
      explanation: "Sp = √[((4-1)×132.67 + (3-1)×92)/(4+3-2)] = √[(398.01 + 184)/5] = √[582.01/5] = √116.4 = 10.78."
    },
    {
      id: 13,
      question: "In the same example (Sp=10.78, t_{2.5%,5}=2.57), the 95% CI for μ₁-μ₂ is?",
      options: [
        "[-7.034, 35.09]",
        "[0, 28]",
        "[7, 21]",
        "[14, 14]"
      ],
      correct: 0,
      explanation: "(X̄-Ȳ) ± t_{n+m-2,α/2} × Sp × √(1/n+1/m) = 14 ± 10.78×√(1/4+1/3)×2.57 = 14 ± 21.09 = [-7.034, 35.09]."
    },
    {
      id: 14,
      question: "When comparing two population means, what is the unpaired case?",
      options: [
        "Samples are dependent and related",
        "Samples are independent and from different populations",
        "Each observation in sample 1 is matched with one in sample 2",
        "The same subjects are measured twice"
      ],
      correct: 1,
      explanation: "In the unpaired (independent) case, two separate, independent samples are drawn from two populations."
    },
    {
      id: 15,
      question: "When is the paired case used?",
      options: [
        "When samples are independent",
        "When sample from the first population is related to the corresponding sample from the second",
        "When population variances are known",
        "When sample sizes are equal"
      ],
      correct: 1,
      explanation: "Paired samples are used when the sample selected from the first population is related to the corresponding sample from the second population."
    },
    {
      id: 16,
      question: "In a paired t-test, the test statistic is?",
      options: [
        "T = (X̄ - Ȳ) / (Sp × √(1/n+1/m))",
        "T = d̄ / (S_def/√n)",
        "Z = (X̄ - Ȳ) / (σ × √(1/n+1/m))",
        "F = S₁²/S₂²"
      ],
      correct: 1,
      explanation: "In a paired t-test, T = (d̄ - μ_def) / (S_def/√n) ~ t(n-1), where d̄ = mean of differences, S_def = standard deviation of differences, and n = number of pairs."
    },
    {
      id: 17,
      question: "In the paired t-test, n denotes?",
      options: [
        "Total number of observations",
        "The number of pairs or number of differences",
        "The sample size from population 1",
        "The degrees of freedom"
      ],
      correct: 1,
      explanation: "In the paired t-test, n denotes the number of pairs or the number of differences, not the total number of observations."
    },
    {
      id: 18,
      question: "Scouts (n₁=100, X̄=27.53) vs Guides (n₂=144, Ȳ=26.81), common σ=3.48. Testing at 5% if scouts perform better. What is Z_cal?",
      options: [
        "1.5894",
        "-1.5894",
        "2.645",
        "0.72"
      ],
      correct: 0,
      explanation: "Z_cal = (27.53-26.81-0) / (3.48×√(1/100+1/144)) = 0.72/0.4531 = 1.5894."
    },
    {
      id: 19,
      question: "In the scouts vs guides example (Z_cal=1.5894, Z_critical=1.645, right-tail), what is the conclusion?",
      options: [
        "Reject H₀: scouts perform better",
        "Do not reject H₀: no evidence that scouts perform better",
        "The test is inconclusive",
        "Reject H₀: guides perform better"
      ],
      correct: 1,
      explanation: "Z_cal = 1.5894 < Z_critical = 1.645, so we do not reject H₀ at 5% significance. There is no evidence that scouts' performance is better than guides'."
    },
    {
      id: 20,
      question: "Zinc in bottom water exceeds surface water? (paired, n=10 pairs, T_cal=4.86, t_{0.05,9}=1.833). Conclusion?",
      options: [
        "Do not reject H₀",
        "Reject H₀: evidence that bottom water zinc exceeds surface water",
        "Inconclusive",
        "Reject H₀: surface water zinc exceeds bottom water"
      ],
      correct: 1,
      explanation: "T_cal = 4.86 > t_{0.05,9} = 1.833, so reject H₀. There is evidence that the true average zinc concentration in bottom water exceeds that of surface water."
    },
    {
      id: 21,
      question: "For the paired test, we need to check normality of differences when?",
      options: [
        "Always",
        "When the number of pairs is less than 30",
        "Never",
        "When the number of pairs is greater than 30"
      ],
      correct: 1,
      explanation: "If the number of pairs is less than 30, we need to check whether the differences follow a normal distribution. For large samples (≥30), CLT applies."
    },
    {
      id: 22,
      question: "When n and m (sample sizes) are both large (>30) and variances are equal but unknown, the CI can use?",
      options: [
        "F-distribution",
        "Chi-squared distribution",
        "Z-distribution instead of t-distribution",
        "Only t-distribution"
      ],
      correct: 2,
      explanation: "If n and m are very large (say 30+), the t-distribution approaches the standard normal, so we can use Z instead of t: (X̄-Ȳ) ± Z_{α/2} × Sp × √(1/n+1/m)."
    },
    {
      id: 23,
      question: "For hypotheses about two population means, H₀: μ₁ - μ₂ = k means?",
      options: [
        "The means differ by k",
        "The means differ by zero always",
        "The difference between the means equals k",
        "Both A and C"
      ],
      correct: 3,
      explanation: "H₀: μ₁ - μ₂ = k means the difference between the two population means equals k. When k=0, it means the means are equal (μ₁ = μ₂)."
    },
    {
      id: 24,
      question: "In the unpaired test for Case A (known unequal variances), the test statistic Z uses?",
      options: [
        "Sp × √(1/n + 1/m) in the denominator",
        "√(σ₁²/n + σ₂²/m) in the denominator",
        "σ × √(1/n + 1/m) in the denominator",
        "√(S₁²/n + S₂²/m) in the denominator"
      ],
      correct: 1,
      explanation: "For Case A (known unequal variances): Z = (X̄-Ȳ-(μ₁-μ₂)) / √(σ₁²/n + σ₂²/m). We use the actual population variances."
    },
    {
      id: 25,
      question: "V(aX ± bY) for independent X and Y equals?",
      options: [
        "aV(X) ± bV(Y)",
        "a²V(X) + b²V(Y)",
        "a²V(X) - b²V(Y)",
        "(a + b)²V(XY)"
      ],
      correct: 1,
      explanation: "V(aX ± bY) = a²V(X) + b²V(Y). The variance always adds (not subtracts) and the constants are squared."
    },
    {
      id: 26,
      question: "E(aX ± bY) = ?",
      options: [
        "a²E(X) ± b²E(Y)",
        "aE(X) ± bE(Y)",
        "(a±b)E(XY)",
        "aE(X) × bE(Y)"
      ],
      correct: 1,
      explanation: "E(aX ± bY) = aE(X) ± bE(Y). Expected value is linear, so constants factor out directly."
    },
    {
      id: 27,
      question: "For the paired test, the key data used for analysis is?",
      options: [
        "The original values from both populations",
        "The difference data (d = x - y for each pair)",
        "The sum of all observations",
        "Only the larger values"
      ],
      correct: 1,
      explanation: "The key to analyze a matched/paired sample design is to use the difference data. We compute d = x₁-y₁, x₂-y₂, etc., and then test using d̄ and S_def."
    },
    {
      id: 28,
      question: "The degrees of freedom for the pooled t-test (Case C - equal unknown variances) is?",
      options: [
        "n - 1",
        "m - 1",
        "n + m - 2",
        "n + m - 1"
      ],
      correct: 2,
      explanation: "For Case C (pooled t-test): df = n + m - 2, where n and m are the two sample sizes."
    },
    {
      id: 29,
      question: "The degrees of freedom for a paired t-test with n pairs is?",
      options: [
        "n",
        "n - 1",
        "n - 2",
        "2n - 1"
      ],
      correct: 1,
      explanation: "For a paired t-test, df = n - 1, where n is the number of pairs (not total observations)."
    },
    {
      id: 30,
      question: "If Y₁ ~ N(a, b) and Y₂ ~ N(c, d) are independent, then Y₁ + Y₂ follows?",
      options: [
        "N(a + c, b × d)",
        "N(a + c, b + d)",
        "N(a × c, b + d)",
        "N(a + c, b - d)"
      ],
      correct: 1,
      explanation: "If Y₁ ~ N(a, b) and Y₂ ~ N(c, d) are independent, then Y₁ + Y₂ ~ N(a + c, b + d). Means add and variances add."
    },
    // ─── Missing: Pivotal quantity for two-sample test ───
    {
      id: 31,
      question: "In a two-sample t-test for independent means with unknown but equal variances, the pivotal quantity is based on:",
      options: [
        "The pooled variance Sp²",
        "The individual variances separately",
        "The population variances directly",
        "The sample ranges"
      ],
      correct: 0,
      explanation: "When σ₁² = σ₂² = σ² (unknown), we pool the sample variances: Sp² = [(n₁−1)S₁² + (n₂−1)S₂²] / (n₁ + n₂ − 2). The test statistic uses Sp² and follows t(n₁ + n₂ − 2)."
    },
    // ─── Missing: Welch-Satterthwaite df ───
    {
      id: 32,
      question: "When population variances are unknown and unequal, the Welch (Satterthwaite) approximation is used because:",
      options: [
        "The exact distribution of the test statistic is unknown, so df is approximated",
        "It gives a larger sample size",
        "It assumes equal variances",
        "It eliminates the need for normality"
      ],
      correct: 0,
      explanation: "When σ₁² ≠ σ₂², the test statistic (X̄₁ − X̄₂ − δ₀) / √(S₁²/n₁ + S₂²/n₂) does not follow an exact t-distribution. The Welch-Satterthwaite formula approximates the degrees of freedom."
    },
    // ─── Missing: Q-Q plot interpretation (image on page 27) ───
    {
      id: 33,
      question: "In a Q-Q (quantile-quantile) plot used to check normality, if the data points closely follow the straight diagonal line, this indicates:",
      options: [
        "The data is skewed",
        "The data is approximately normally distributed",
        "The data has outliers",
        "The test is invalid"
      ],
      correct: 1,
      explanation: "A Q-Q plot compares sample quantiles to theoretical normal quantiles. Points falling close to the reference line suggest the data is approximately normal — an important assumption check before using t-tests."
    },
    // ─── Missing: Confidence level vs α/2 ───
    {
      id: 34,
      question: "For a 99% confidence interval, the value of α/2 used to find the critical value is:",
      options: [
        "0.01",
        "0.005",
        "0.05",
        "0.025"
      ],
      correct: 1,
      explanation: "For 99% CI: α = 1 − 0.99 = 0.01, so α/2 = 0.005. The critical value is tα/2,df = t₀.₀₀₅,df."
    },
    // ─── Missing: Visual rejection region interpretation ───
    {
      id: 35,
      question: "In a two-tailed test at α = 0.05, the rejection regions are:",
      options: [
        "Both tails, each with area 0.025",
        "Only the right tail with area 0.05",
        "Only the left tail with area 0.05",
        "Both tails, each with area 0.05"
      ],
      correct: 0,
      explanation: "In a two-tailed test, α is split equally between both tails. Each tail has area α/2 = 0.025. The rejection regions are t < −tα/2 and t > tα/2."
    },
    // ─── Missing: Variance independence requirement ───
    {
      id: 36,
      question: "Why is the independence assumption critical in two-sample tests?",
      options: [
        "Because if samples are dependent, the variance of (X̄₁ − X̄₂) includes a covariance term",
        "Because independence makes the calculation easier",
        "Because we need equal sample sizes",
        "Independence is not actually required"
      ],
      correct: 0,
      explanation: "If samples are dependent, V(X̄₁ − X̄₂) = V(X̄₁) + V(X̄₂) − 2Cov(X̄₁, X̄₂). Ignoring the covariance term when samples are correlated leads to incorrect standard errors and invalid inference."
    }
  ]
};

export default note05;

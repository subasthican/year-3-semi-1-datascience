const pastpapers = {
  id: 9,
  title: "Past Papers – Mid Exam Questions",
  questions: [
    // ─── Bayes' Theorem / Conditional Probability (from MCQ lockdown browser tests) ───
    {
      id: 1,
      question: "In answering a question on a multiple-choice test, a student either knows the answer or guesses. The probability that the student knows the answer is 0.85. If the student knows the answer, she definitely picks the correct choice. Assuming there are 5 choices, what is the probability that the student knew the answer given that she answered correctly?",
      options: [
        "0.9659",
        "0.08125",
        "0.9375",
        "Not enough information"
      ],
      correct: 0,
      explanation: "P(K)=0.85, P(K')=0.15, P(C|K)=1, P(C|K')=1/5=0.2. P(C)=P(C|K)P(K)+P(C|K')P(K')=0.85+0.15×0.2=0.88. P(K|C)=P(C|K)P(K)/P(C)=0.85/0.88=0.9659."
    },
    {
      id: 2,
      question: "Same scenario but probability that student knows the answer is 0.75 (5 choices). What is P(knew answer | answered correctly)?",
      options: [
        "0.9375",
        "0.9216",
        "Not enough information",
        "0.8500"
      ],
      correct: 0,
      explanation: "P(K)=0.75, P(C|K)=1, P(C|K')=1/5=0.2. P(C)=0.75+0.25×0.2=0.80. P(K|C)=0.75/0.80=0.9375."
    },
    {
      id: 3,
      question: "10% of all emails are Spam. 90% of Spam has a forged subject line. 20% of Ham (not spam) has a forged subject line. What is P(Spam | forged subject line)?",
      options: [
        "0.90",
        "0.10",
        "0.333",
        "0.20"
      ],
      correct: 2,
      explanation: "P(S)=0.10, P(F|S)=0.90, P(F|H)=0.20. P(F)=0.10×0.90+0.90×0.20=0.09+0.18=0.27. P(S|F)=0.09/0.27=0.333."
    },
    // ─── Probability Distributions (from Extra Assignment PDF) ───
    {
      id: 4,
      question: "f(x) = 1/3, where 1 ≤ x ≤ 4. What is the mean of X?",
      options: [
        "2.0",
        "2.5",
        "3.0",
        "1.5"
      ],
      correct: 1,
      explanation: "For a continuous uniform distribution on [1,4]: E(X) = (a+b)/2 = (1+4)/2 = 2.5."
    },
    {
      id: 5,
      question: "f(x) = 1/3, where 1 ≤ x ≤ 4. What is the variance of X?",
      options: [
        "0.75",
        "1.50",
        "3.00",
        "0.25"
      ],
      correct: 0,
      explanation: "For a continuous uniform distribution on [a,b]: V(X) = (b-a)²/12 = (4-1)²/12 = 9/12 = 0.75."
    },
    {
      id: 6,
      question: "Kevin sells candy bars with 45% chance of selling at each house. He needs to sell 6 candy bars. Let X = number of houses he visits. What distribution does X follow?",
      options: [
        "Binomial(6, 0.45)",
        "Geometric(0.45)",
        "Negative Binomial(r=6, p=0.45)",
        "Poisson(6)"
      ],
      correct: 2,
      explanation: "X = number of trials until the r-th success. He needs r=6 successes with p=0.45 per trial. This is Negative Binomial(r=6, p=0.45)."
    },
    {
      id: 7,
      question: "Kevin needs to sell 6 candy bars (p=0.45 per house). What is the probability he sells his last candy bar at the 10th house?",
      options: [
        "C(9,5) × (0.45)⁶ × (0.55)⁴",
        "C(10,6) × (0.45)⁶ × (0.55)⁴",
        "(0.45)⁶ × (0.55)⁴",
        "C(9,5) × (0.45)⁵ × (0.55)⁵"
      ],
      correct: 0,
      explanation: "P(X=10) = C(10-1, 6-1) × p⁶ × (1-p)^(10-6) = C(9,5) × (0.45)⁶ × (0.55)⁴. The last trial must be a success, so we choose 5 successes from the first 9 trials."
    },
    {
      id: 8,
      question: "Kevin sells his 1st candy bar at the 5th house (p=0.45). What is the probability of this?",
      options: [
        "(0.55)⁴ × (0.45)",
        "(0.55)⁵ × (0.45)",
        "(0.45)⁴ × (0.55)",
        "(0.45)⁵"
      ],
      correct: 0,
      explanation: "First success at the 5th house follows Geometric distribution: P(X=5) = (1-p)^(5-1) × p = (0.55)⁴ × (0.45)."
    },
    {
      id: 9,
      question: "A telephone operator spends time X with a customer, X ~ Exponential(mean=5 min). What is P(4 < X < 5)?",
      options: [
        "e^(-4/5) - e^(-5/5)",
        "e^(-4/5) - e^(-1)",
        "Both A and B (they are the same)",
        "1 - e^(-1)"
      ],
      correct: 2,
      explanation: "For Exponential with mean β=5: P(4<X<5) = e^(-4/5) - e^(-5/5) = e^(-0.8) - e^(-1). Options A and B are identical."
    },
    {
      id: 10,
      question: "X ~ Exponential with mean 5. What is the median of X?",
      options: [
        "5",
        "5 × ln(2) ≈ 3.466",
        "2.5",
        "5/ln(2) ≈ 7.213"
      ],
      correct: 1,
      explanation: "Median of Exponential(β) = β × ln(2) = 5 × ln(2) ≈ 3.466. For exponential, the mean (5) is always larger than the median (3.466)."
    },
    {
      id: 11,
      question: "For an exponential distribution, which is larger: the mean or the median?",
      options: [
        "The median",
        "They are equal",
        "The mean",
        "Depends on the parameter"
      ],
      correct: 2,
      explanation: "For an exponential distribution: mean = β, median = β×ln(2) ≈ 0.693β. Since ln(2) < 1, the mean is always larger than the median."
    },
    // ─── Normal Distribution (from steel bars problem) ───
    {
      id: 12,
      question: "Steel bars: μ=120.05 cm, σ²=2.4 cm. What is P(116.80 < X < 126.09)?",
      options: [
        "Compute Z-scores: Z₁=(116.80-120.05)/√2.4, Z₂=(126.09-120.05)/√2.4, then find area between",
        "0.50",
        "Cannot be determined",
        "1.00"
      ],
      correct: 0,
      explanation: "σ=√2.4=1.549. Z₁=(116.80-120.05)/1.549=-2.10, Z₂=(126.09-120.05)/1.549=3.90. P = P(Z<3.90) - P(Z<-2.10) ≈ 0.9999 - 0.0179 = 0.982."
    },
    // ─── Proportion Tests (from 2018 & 2019 final exam papers) ───
    {
      id: 13,
      question: "Manufacturer A: 10 defective out of 300. Manufacturer B: 16 defective out of 200. Testing if proportions are the same. What are the sample proportions?",
      options: [
        "p̂_A = 0.0333, p̂_B = 0.08",
        "p̂_A = 0.10, p̂_B = 0.16",
        "p̂_A = 0.03, p̂_B = 0.06",
        "p̂_A = 0.033, p̂_B = 0.16"
      ],
      correct: 0,
      explanation: "p̂_A = 10/300 = 0.0333, p̂_B = 16/200 = 0.08."
    },
    {
      id: 14,
      question: "Manufacturer A: 10/300 defective, B: 16/200 defective. What is the pooled proportion for testing H₀: p_A = p_B?",
      options: [
        "(0.0333 + 0.08)/2 = 0.0567",
        "(10 + 16)/(300 + 200) = 0.052",
        "10/200 = 0.05",
        "16/300 = 0.053"
      ],
      correct: 1,
      explanation: "Pooled p̂ = (X₁+X₂)/(n₁+n₂) = (10+16)/(300+200) = 26/500 = 0.052. We do NOT average the proportions."
    },
    {
      id: 15,
      question: "Testing if two manufacturers have the same defective proportion. This is a:",
      options: [
        "One-sample t-test",
        "Two-sample proportion Z-test (two-tailed)",
        "Paired t-test",
        "Chi-squared test for variance"
      ],
      correct: 1,
      explanation: "Comparing proportions from two independent populations uses a two-sample proportion Z-test. Since we're testing if they're 'the same' (not greater/less), it's two-tailed."
    },
    // ─── One-sample t-test (from metal rods problem) ───
    {
      id: 16,
      question: "15 metal rods measured. Testing if mean diameter < 8.25mm. What type of test is this?",
      options: [
        "One-sample Z-test (right-tail)",
        "One-sample t-test (left-tail)",
        "Two-sample t-test",
        "One-sample Z-test (left-tail)"
      ],
      correct: 1,
      explanation: "Small sample (n=15), unknown σ → use t-test. H₁: μ < 8.25 → left-tail. So it's a one-sample t-test (left-tail) with df=14."
    },
    {
      id: 17,
      question: "For the metal rod test (n=15, testing μ < 8.25), the degrees of freedom is:",
      options: [
        "15",
        "14",
        "13",
        "16"
      ],
      correct: 1,
      explanation: "For a one-sample t-test: df = n - 1 = 15 - 1 = 14."
    },
    // ─── Two-sample tests (from keyboard layouts & assembling methods) ───
    {
      id: 18,
      question: "Two keyboard layouts compared: Layout A (n₁=10) vs Layout B (n₂=10). Researcher believes typing is faster with B. The hypotheses are:",
      options: [
        "H₀: μ_A = μ_B, H₁: μ_A ≠ μ_B",
        "H₀: μ_A ≤ μ_B, H₁: μ_A > μ_B",
        "H₀: μ_A ≥ μ_B, H₁: μ_A < μ_B",
        "H₀: μ_A = μ_B, H₁: μ_A > μ_B"
      ],
      correct: 3,
      explanation: "Typing is faster with B means less time for B → more time for A. So H₁: μ_A > μ_B (Layout A takes longer). This is a right-tail test."
    },
    {
      id: 19,
      question: "Keyboard layout test: 10 people each group, independent samples, normal data, variances assumed equal. What test to use?",
      options: [
        "Paired t-test",
        "Pooled (independent) two-sample t-test",
        "Two-sample Z-test",
        "F-test"
      ],
      correct: 1,
      explanation: "Different people in each group → independent (not paired). Small sample, σ unknown, equal variances assumed → pooled two-sample t-test with df = n₁+n₂-2 = 18."
    },
    {
      id: 20,
      question: "For the keyboard layout test to be valid, what conditions are needed?",
      options: [
        "Only normality",
        "Normality, equal variances, and independence",
        "Only large sample sizes",
        "Only equal sample sizes"
      ],
      correct: 1,
      explanation: "The pooled two-sample t-test requires: (1) both populations are normally distributed, (2) equal population variances, (3) independent random samples."
    },
    {
      id: 21,
      question: "Computer assembling: Method A (n₁=12) vs Method B (n₂=11). Testing if same mean time. This is a:",
      options: [
        "One-tail test",
        "Two-tail test",
        "Paired test",
        "Proportion test"
      ],
      correct: 1,
      explanation: "Testing if two methods have the 'same' mean → H₀: μ_A = μ_B, H₁: μ_A ≠ μ_B → two-tailed test."
    },
    // ─── Confidence Interval (from game completion time) ───
    {
      id: 22,
      question: "14 people play a game. Times: 8,11,12,9,6,10,12,8,11,6,9,8,10. Obtain 95% CI for mean time. What distribution do we use?",
      options: [
        "Z-distribution (σ known)",
        "t-distribution with 13 df",
        "Chi-squared distribution",
        "F-distribution"
      ],
      correct: 1,
      explanation: "Small sample (n=14), σ unknown → use t-distribution. df = n-1 = 13. CI: X̄ ± t_{0.025,13} × S/√14."
    },
    {
      id: 23,
      question: "Testing if average game time < 10 min with the CI approach: If 95% CI is (7.8, 10.5), what do we conclude at 5%?",
      options: [
        "Reject H₀: mean is less than 10",
        "Do not reject H₀: CI contains 10, so no evidence mean < 10",
        "The test is invalid",
        "Reject H₀: mean equals 10"
      ],
      correct: 1,
      explanation: "The 95% CI (7.8, 10.5) contains 10, so we do not reject H₀: μ ≥ 10 at 5% significance. There is insufficient evidence that mean time is less than 10 minutes."
    },
    // ─── Proportion test (from spam emails 2019 paper) ───
    {
      id: 24,
      question: "A person claims at least 10% of emails are spam. From 240 emails, 35 are spam. What is p̂?",
      options: [
        "0.10",
        "0.146",
        "0.35",
        "0.240"
      ],
      correct: 1,
      explanation: "p̂ = 35/240 = 0.1458 ≈ 0.146."
    },
    {
      id: 25,
      question: "Testing H₀: p ≥ 0.10 vs H₁: p < 0.10 (claims at least 10% are spam). Given p̂=0.146 > 0.10, what happens?",
      options: [
        "Reject H₀ since p̂ > p₀",
        "Do not reject H₀; sample proportion supports the claim",
        "The test is inconclusive",
        "Need more data"
      ],
      correct: 1,
      explanation: "H₀: p ≥ 0.10 (at least 10% spam). p̂=0.146 > 0.10, so the data supports H₀. The Z-statistic will be positive, falling in the non-rejection region for a left-tail test. Do not reject H₀."
    },
    // ─── Three coins and two dice (from MCQ screenshots) ───
    {
      id: 26,
      question: "Three coins and two dice are thrown. What is the total number of outcomes in the sample space?",
      options: [
        "2³ × 6² = 288",
        "3 × 2 = 6",
        "2³ + 6² = 44",
        "3² × 2⁶ = 576"
      ],
      correct: 0,
      explanation: "Each coin has 2 outcomes, each die has 6 outcomes. Total = 2³ × 6² = 8 × 36 = 288."
    },
    // ─── Independent vs Dependent Events (from MCQ screenshots) ───
    {
      id: 27,
      question: "Three events A, B, C are mutually independent if:",
      options: [
        "P(A∩B) = P(A)P(B) only",
        "P(A∩B∩C) = P(A)P(B)P(C) only",
        "All pairwise independencies AND P(A∩B∩C) = P(A)P(B)P(C)",
        "P(A) = P(B) = P(C)"
      ],
      correct: 2,
      explanation: "Mutual independence requires all pairwise conditions: P(A∩B)=P(A)P(B), P(A∩C)=P(A)P(C), P(B∩C)=P(B)P(C), AND P(A∩B∩C)=P(A)P(B)P(C)."
    },
    // ─── AIC Model Selection (from MCQ screenshots) ───
    {
      id: 28,
      question: "Given models with AIC values: A: ARIMA(1,1,1) AIC=116.3, B: ARIMA(1,0,1) AIC=132.07, C: ARIMA(2,0,1) AIC=197.12, D: ARIMA(0,1,1) AIC=120.0, E: ARIMA(2,0,0) AIC=130.91. Which is the most appropriate model?",
      options: [
        "Model C (ARIMA(2,0,1))",
        "Model B (ARIMA(1,0,1))",
        "Model A (ARIMA(1,1,1))",
        "Model D (ARIMA(0,1,1))"
      ],
      correct: 2,
      explanation: "The best model has the LOWEST AIC value. Model A has AIC=116.3 which is the smallest, making ARIMA(1,1,1) the most appropriate."
    },
    // ─── Algorithm efficiency test (from MCQ screenshots) ───
    {
      id: 29,
      question: "Testing if Algorithm B is more efficient (faster) than A. 20 problems split into 2 groups of 10. Times recorded for each. What test is appropriate?",
      options: [
        "Paired t-test",
        "Independent two-sample t-test",
        "One-sample t-test",
        "Chi-squared test"
      ],
      correct: 1,
      explanation: "Different problems in each group → independent samples (not paired). Two groups of 10 each with normally distributed times → independent two-sample t-test."
    },
    {
      id: 30,
      question: "For Algorithm A vs B: H₁: μ_A > μ_B (B is faster → A takes more time). This is which type of test?",
      options: [
        "Left-tail test",
        "Two-tail test",
        "Right-tail test",
        "No-tail test"
      ],
      correct: 2,
      explanation: "H₁: μ_A > μ_B means we're testing if A's mean is GREATER. The rejection region is in the right tail → right-tail test."
    },
    // ─── Naive Bayes (from 2018 final paper) ───
    {
      id: 31,
      question: "What is the main assumption of Naive Bayes?",
      options: [
        "All features are dependent on each other",
        "All features (evidence variables) are conditionally independent given the class",
        "The class variable is always binary",
        "The data must be normally distributed"
      ],
      correct: 1,
      explanation: "Naive Bayes assumes that all feature/evidence variables are conditionally independent given the class. This 'naive' assumption simplifies the computation of P(E₁∩E₂∩...∩Eₖ|C) = P(E₁|C)×P(E₂|C)×...×P(Eₖ|C)."
    },
    {
      id: 32,
      question: "Under Naive Bayes assumption, P(E₁ ∩ E₂ ∩ ... ∩ Eₖ | C) = ?",
      options: [
        "P(E₁|C) + P(E₂|C) + ... + P(Eₖ|C)",
        "P(E₁|C) × P(E₂|C) × ... × P(Eₖ|C)",
        "P(E₁) × P(E₂) × ... × P(Eₖ)",
        "P(C|E₁) × P(C|E₂) × ... × P(C|Eₖ)"
      ],
      correct: 1,
      explanation: "Naive Bayes assumes conditional independence: P(E₁∩E₂∩...∩Eₖ|C) = ∏P(Eᵢ|C). Each feature's probability given the class is multiplied together."
    },
    // ─── Regression / Correlation (from 2019 paper) ───
    {
      id: 33,
      question: "Investigating relationship between time spent on Facebook (Y) and age (X). Which is the response variable?",
      options: [
        "Age (X)",
        "Time spent on Facebook (Y)",
        "Both",
        "Neither"
      ],
      correct: 1,
      explanation: "Time spent on Facebook is the response (dependent) variable Y. Age is the predictor (independent) variable X. We want to predict time from age."
    },
    {
      id: 34,
      question: "Pearson's correlation coefficient r = -0.65. How do you interpret this?",
      options: [
        "Strong positive linear relationship",
        "Moderate negative linear relationship",
        "No relationship",
        "Weak positive linear relationship"
      ],
      correct: 1,
      explanation: "r = -0.65 indicates a moderate to strong negative linear relationship. As one variable increases, the other tends to decrease."
    },
    {
      id: 35,
      question: "To test significance of correlation at 5%, which hypotheses do we use?",
      options: [
        "H₀: r = 0, H₁: r ≠ 0",
        "H₀: ρ = 0, H₁: ρ ≠ 0",
        "H₀: μ = 0, H₁: μ ≠ 0",
        "H₀: β₁ = 0, H₁: β₁ ≠ 0"
      ],
      correct: 1,
      explanation: "We test the population correlation coefficient ρ (rho), not the sample r. H₀: ρ = 0 (no linear relationship) vs H₁: ρ ≠ 0."
    },
    // ─── ANOVA / Regression significance (from past papers) ───
    {
      id: 36,
      question: "In simple linear regression, R² = 0.72. What does this mean?",
      options: [
        "72% of variation in Y is explained by X",
        "72% of variation in X is explained by Y",
        "The correlation is 0.72",
        "The slope is 0.72"
      ],
      correct: 0,
      explanation: "R² = 0.72 means 72% of the total variation in the response variable Y is explained by the predictor variable X in the fitted model."
    },
    {
      id: 37,
      question: "In regression ANOVA, we test H₀: β₁ = 0. If p-value < 0.05, it means:",
      options: [
        "The regression is NOT significant",
        "The regression IS significant (predictor has a linear relationship with response)",
        "The intercept is zero",
        "R² = 1"
      ],
      correct: 1,
      explanation: "If p-value < α, we reject H₀: β₁ = 0. This means the regression is significant — there is a statistically significant linear relationship between X and Y."
    },
    // ─── Residual Analysis (from past papers) ───
    {
      id: 38,
      question: "Which of the following is NOT an assumption when fitting a simple linear regression model?",
      options: [
        "Errors are normally distributed",
        "Errors have constant variance (homoscedasticity)",
        "Errors are independent",
        "The predictor variable must be normally distributed"
      ],
      correct: 3,
      explanation: "Regression assumptions: (1) linearity, (2) independence of errors, (3) normality of errors, (4) constant variance of errors. The predictor X does NOT need to be normal."
    },
    // ─── Lack of Fit Test (from 2018 paper) ───
    {
      id: 39,
      question: "A lack of fit test in regression tests whether:",
      options: [
        "The residuals are normally distributed",
        "A simple linear model adequately fits the data (vs a more complex model)",
        "The slope equals zero",
        "The intercept equals zero"
      ],
      correct: 1,
      explanation: "The lack of fit test partitions SSE into pure error and lack of fit. H₀: the linear model is adequate. If rejected, a more complex model may be needed."
    },
    // ─── PVC Pipe Thickness (from lockdown browser MCQ) ───
    {
      id: 40,
      question: "By world standards, the average wall thickness of PVC pipes for construction must meet a certain value. A building constructor wants to test if his stock meets the standard. What type of test is this?",
      options: [
        "Two-sample t-test",
        "One-sample test for the mean",
        "Proportion test",
        "F-test for variances"
      ],
      correct: 1,
      explanation: "Testing if the mean wall thickness meets a specific standard value → one-sample test for the mean (Z or t depending on whether σ is known)."
    },
    // ─── Multiple Regression (from 2018 paper) ───
    {
      id: 41,
      question: "A multiple regression model predicts computer price (Y) from Monitor size (X₁), Hard disk capacity (X₂), and Memory capacity (X₃). The model has how many predictor variables?",
      options: [
        "1",
        "2",
        "3",
        "4"
      ],
      correct: 2,
      explanation: "Three predictors: X₁ (Monitor size), X₂ (Hard disk capacity), X₃ (Memory capacity). Y (Price) is the response."
    },
    {
      id: 42,
      question: "In multiple regression, the coefficient β₂ for Hard Disk Capacity means:",
      options: [
        "For every 1 GB increase in Hard Disk, price changes by β₂ units (holding other variables constant)",
        "Hard Disk Capacity equals β₂",
        "The correlation between HD and Price is β₂",
        "R² equals β₂"
      ],
      correct: 0,
      explanation: "β₂ represents the change in the response (Price) for a one-unit increase in Hard Disk Capacity, holding all other predictors constant (ceteris paribus)."
    },
    {
      id: 43,
      question: "A 95% CI for β₃ (Memory coefficient) is (2500, 8900). Since 0 is NOT in this interval, we conclude:",
      options: [
        "Memory is NOT a significant predictor",
        "Memory IS a significant predictor at 5% level",
        "The model is invalid",
        "We need more data"
      ],
      correct: 1,
      explanation: "If the 95% CI for βᵢ does not contain 0, we reject H₀: βᵢ = 0 at 5% significance. Memory capacity is a statistically significant predictor of price."
    },
    // ─── Hospital Bill Regression (from IMG-20220608-WA0015) ───
    {
      id: 44,
      question: "Predicting hospital bill (HB) from cost of drugs (COD) and hours of stay (HSH). The response variable is:",
      options: [
        "Cost of drugs (COD)",
        "Hours stayed in hospital (HSH)",
        "Hospital bill (HB)",
        "Both COD and HSH"
      ],
      correct: 2,
      explanation: "Hospital bill (HB) is what we're trying to predict (the response/dependent variable). COD and HSH are the predictors."
    },
    {
      id: 45,
      question: "Before fitting a regression model, we check Pearson's correlation between each predictor and the response to:",
      options: [
        "Test if the data is normal",
        "Check if there are significant linear relationships between predictors and response",
        "Find the variance",
        "Compute R²"
      ],
      correct: 1,
      explanation: "Pearson's correlation helps verify that there are significant linear relationships between each predictor and the response variable before fitting the model."
    },
    // ─── Exam pattern: hypothesis setup ───
    {
      id: 46,
      question: "When writing a hypothesis test answer in a TPSM exam, you should include: (i) hypotheses, (ii) test name & test statistic, (iii) p-value, (iv) R commands. What is the correct order?",
      options: [
        "R commands first, then hypotheses",
        "Hypotheses → Test name & statistic → p-value → Conclusion (with R statements)",
        "Test statistic → p-value → Hypotheses",
        "Only the p-value is needed"
      ],
      correct: 1,
      explanation: "As stated in past papers: write (i) H₀ and H₁, (ii) name of test & value of test statistic, (iii) p-value, then (iv) conclusion with R statements."
    },
    // ─── Bayes' Rule structure ───
    {
      id: 47,
      question: "Bayes' Rule: P(A|B) = ?",
      options: [
        "P(B|A) × P(B) / P(A)",
        "P(B|A) × P(A) / P(B)",
        "P(A) × P(B)",
        "P(A∩B) + P(A)"
      ],
      correct: 1,
      explanation: "Bayes' Rule: P(A|B) = P(B|A) × P(A) / P(B). This reverses the conditioning — if we know P(B|A), we can find P(A|B)."
    },
    {
      id: 48,
      question: "In Bayes' Rule, P(B) in the denominator is often computed using:",
      options: [
        "The chain rule only",
        "The law of total probability: P(B) = Σ P(B|Aᵢ)P(Aᵢ)",
        "P(B) = 1 - P(A)",
        "P(B) = P(A) × P(B|A)"
      ],
      correct: 1,
      explanation: "P(B) = Σ P(B|Aᵢ)P(Aᵢ) over all possible classes Aᵢ. This is the law of total probability, which partitions the sample space."
    },
    // ─── Shapiro-Wilk Test (from past papers) ───
    {
      id: 49,
      question: "The Shapiro-Wilk test is used to test:",
      options: [
        "Whether variances are equal",
        "Whether data follows a normal distribution",
        "Whether two means are equal",
        "Whether the regression is significant"
      ],
      correct: 1,
      explanation: "Shapiro-Wilk test: H₀: data is normally distributed vs H₁: data is NOT normally distributed. If p < α, reject normality."
    },
    {
      id: 50,
      question: "If the Shapiro-Wilk test p-value is 0.03 at α=0.05, we conclude:",
      options: [
        "Data is normally distributed",
        "Data is NOT normally distributed (reject H₀ of normality)",
        "The test is inconclusive",
        "We need a larger sample"
      ],
      correct: 1,
      explanation: "p=0.03 < α=0.05, so we reject H₀. The data does NOT follow a normal distribution."
    },
    // ─── ARIMA backshift notation (from lockdown browser MCQ screenshots) ───
    {
      id: 51,
      question: "Using the usual notation, ARIMA(2,0,1)(2,1,0)₁₂ model with Wₜ = (1 − B¹²)Yₜ can be written as:",
      options: [
        "φ₂(B)Φ₁(B¹²)Wₜ = θ₁(B)Zₜ",
        "Φ₁(B)Wₜ = θ₂(B)Θ₁(B¹²)Zₜ",
        "φ₂(B)Φ₂(B¹²)Wₜ = θ₁(B)Zₜ",
        "φ₂(B)Φ₂(B¹²)Wₜ = θ₁(B)Θ₁(B¹²)Zₜ"
      ],
      correct: 2,
      explanation: "ARIMA(2,0,1)(2,1,0)₁₂: AR order p=2 → φ₂(B), seasonal AR P=2 → Φ₂(B¹²), MA order q=1 → θ₁(B), seasonal MA Q=0 → no Θ term. Differencing d=0, D=1 gives Wₜ = (1−B¹²)Yₜ. So: φ₂(B)Φ₂(B¹²)Wₜ = θ₁(B)Zₜ."
    },
    {
      id: 52,
      question: "Using the usual notation, ARIMA(0,0,1)(2,1,1)₄ model with Wₜ = (1 − B⁴)Yₜ can be written as:",
      options: [
        "Φ₂(B⁴)Wₜ = θ₁(B)Θ₁(B⁴)Zₜ",
        "φ₂(B)Wₜ = θ₁(B)Θ₁(B⁴)Zₜ",
        "Φ₂(B)Wₜ = θ₁(B)Zₜ",
        "φ₂(B)Φ₂(B⁴)Wₜ = θ₁(B)Θ₁(B⁴)Zₜ"
      ],
      correct: 0,
      explanation: "ARIMA(0,0,1)(2,1,1)₄: AR p=0 → no φ, seasonal AR P=2 → Φ₂(B⁴), MA q=1 → θ₁(B), seasonal MA Q=1 → Θ₁(B⁴). D=1 gives Wₜ=(1−B⁴)Yₜ. So: Φ₂(B⁴)Wₜ = θ₁(B)Θ₁(B⁴)Zₜ."
    },
    // ─── Valid PDF conditions (from Extra Assignment) ───
    {
      id: 53,
      question: "For f(x) = 1/3, where 1 ≤ x ≤ 4 to be a valid probability density function, which conditions must hold?",
      options: [
        "f(x) ≥ 0 for all x, and ∫f(x)dx = 1 over the entire range",
        "f(x) > 0 for all x from −∞ to ∞",
        "f(x) ≤ 1 for all x",
        "∫f(x)dx = 0"
      ],
      correct: 0,
      explanation: "A valid PDF requires: (1) f(x) ≥ 0 for all x, and (2) ∫f(x)dx over the entire range = 1. For f(x)=1/3 on [1,4]: f(x)≥0 ✓, and ∫₁⁴ (1/3)dx = (1/3)(4−1) = 1 ✓."
    },
    // ─── Kevin: cumulative NB probability (from Extra Assignment) ───
    {
      id: 54,
      question: "Kevin sells candy bars (p=0.45, needs r=6). What is the probability he finishes on or before the 9th house?",
      options: [
        "P(X ≤ 9) = Σ P(X=k) for k = 6 to 9",
        "P(X ≤ 9) = 1 − P(X = 10)",
        "P(X ≤ 9) = P(X = 9)",
        "P(X ≤ 9) = 9 × 0.45"
      ],
      correct: 0,
      explanation: "P(finishes ≤ 9th house) = P(X=6) + P(X=7) + P(X=8) + P(X=9). Each term uses the negative binomial formula: P(X=k) = C(k−1, r−1) × p^r × (1−p)^(k−r)."
    },
    // ─── Steel bars: additional probabilities (from Extra Assignment) ───
    {
      id: 55,
      question: "Steel bars: μ=120.05 cm, σ²=2.4. What is P(X < 118.01)?",
      options: [
        "P(Z < (118.01−120.05)/√2.4) = P(Z < −1.32)",
        "P(Z < (120.05−118.01)/√2.4) = P(Z < 1.32)",
        "P(Z > −1.32)",
        "0.50"
      ],
      correct: 0,
      explanation: "σ = √2.4 = 1.549. Z = (118.01 − 120.05)/1.549 = −2.04/1.549 = −1.32. P(X < 118.01) = P(Z < −1.32) ≈ 0.0934."
    },
    {
      id: 56,
      question: "Steel bars: μ=120.05 cm, σ²=2.4. What is P(X > 125.49)?",
      options: [
        "P(Z > (125.49−120.05)/√2.4) = P(Z > 3.51)",
        "P(Z < 3.51)",
        "1 − P(Z < −3.51)",
        "0.50"
      ],
      correct: 0,
      explanation: "Z = (125.49 − 120.05)/1.549 = 5.44/1.549 = 3.51. P(X > 125.49) = P(Z > 3.51) ≈ 0.0002. This is an extremely unlikely value — far into the right tail."
    },
    // ─── Algorithm test p-value (from lockdown browser MCQ screenshot) ───
    {
      id: 57,
      question: "Algorithm B claimed more efficient than A. 20 problems split into groups of 10. At α = 0.1, the p-value from the test is 0.0735. What is the conclusion?",
      options: [
        "Reject H₀ — there is evidence B is more efficient (p < α)",
        "Do not reject H₀ — no evidence B is more efficient (p > α)",
        "The test is inconclusive",
        "Need a larger sample"
      ],
      correct: 0,
      explanation: "p-value = 0.0735 < α = 0.1. We reject H₀. There is sufficient evidence at the 10% significance level to support the claim that Algorithm B is more efficient."
    },
    // ─── Naive Bayes: Dengue prediction (from 2018 final exam) ───
    {
      id: 58,
      question: "In the dengue Naive Bayes problem (2018 paper), given 4 Yes and 4 No dengue cases in training data, what is P(Dengue=Yes)?",
      options: [
        "4/8 = 0.5",
        "4/4 = 1.0",
        "1/8 = 0.125",
        "Cannot be determined"
      ],
      correct: 0,
      explanation: "The prior probability P(Dengue=Yes) = (number of Yes cases)/(total cases) = 4/8 = 0.5."
    },
    {
      id: 59,
      question: "In Naive Bayes, to find P(Dengue=Yes | evidence), you compute P(evidence | Yes)×P(Yes) and P(evidence | No)×P(No). The final probability is:",
      options: [
        "P(evidence|Yes)×P(Yes) / [P(evidence|Yes)×P(Yes) + P(evidence|No)×P(No)]",
        "P(evidence|Yes) × P(Yes)",
        "P(Yes) / P(evidence)",
        "P(evidence|Yes) + P(evidence|No)"
      ],
      correct: 0,
      explanation: "Using Bayes' rule: P(Yes|evidence) = P(evidence|Yes)×P(Yes) / P(evidence). The denominator P(evidence) is computed as the sum of numerators for all classes."
    },
    // ─── Laplace smoothing (from 2019 Q3.3(f)) ───
    {
      id: 60,
      question: "In Naive Bayes, if a feature value never appears for a class in training data, the product of likelihoods becomes 0. How do you fix this?",
      options: [
        "Remove that feature entirely",
        "Use Laplace smoothing: add 1 to each count and k to denominator (k = number of possible values)",
        "Set the probability to 0.5",
        "Use a different classifier"
      ],
      correct: 1,
      explanation: "Laplace smoothing (additive smoothing): P(xᵢ|C) = (count(xᵢ, C) + 1) / (count(C) + k), where k is the number of possible values for that feature. This avoids zero probabilities."
    },
    // ─── Seasonal differencing (from 2018 & 2019 Q4) ───
    {
      id: 61,
      question: "In time series analysis, what is the purpose of seasonal differencing (applying (1 − B^s))?",
      options: [
        "To remove the seasonal component and make the series more stationary",
        "To increase the variance of the series",
        "To add seasonality to a stationary series",
        "To compute the mean of the series"
      ],
      correct: 0,
      explanation: "Seasonal differencing Wₜ = (1 − Bˢ)Yₜ = Yₜ − Yₜ₋ₛ removes the seasonal pattern (period s), helping to achieve stationarity."
    },
    {
      id: 62,
      question: "For monthly data with yearly seasonality, the seasonal period s is:",
      options: [
        "4",
        "12",
        "52",
        "365"
      ],
      correct: 1,
      explanation: "Monthly data with yearly seasonality has s = 12 (12 months per year). For quarterly data s=4, weekly data s=52."
    },
    // ─── Log transformation (from 2018 Q4.II) ───
    {
      id: 63,
      question: "In time series, a log transformation is applied before differencing to:",
      options: [
        "Remove the trend",
        "Stabilize the variance of the series",
        "Make the series linear",
        "Remove outliers"
      ],
      correct: 1,
      explanation: "Log transformation stabilizes the variance when the variability of the series increases with its level. After log-transforming, the variance becomes more constant over time."
    },
    // ─── Stationarity testing (from 2018 & 2019 Q4) ───
    {
      id: 64,
      question: "The Augmented Dickey-Fuller (ADF) test is used to test:",
      options: [
        "H₀: series is stationary vs H₁: series is not stationary",
        "H₀: series has a unit root (non-stationary) vs H₁: series is stationary",
        "H₀: series is normally distributed",
        "H₀: the mean is zero"
      ],
      correct: 1,
      explanation: "ADF test: H₀: series has a unit root (non-stationary) vs H₁: series is stationary. If p < α, reject H₀ and conclude the series is stationary."
    },
    {
      id: 65,
      question: "ADF test p-value = 0.02 at α = 0.05. What do you conclude?",
      options: [
        "Series is NOT stationary",
        "Series IS stationary (reject H₀ of unit root)",
        "Need more differencing",
        "The test is invalid"
      ],
      correct: 1,
      explanation: "p = 0.02 < α = 0.05. Reject H₀ (unit root). The series is stationary."
    },
    // ─── ACF and PACF interpretation (from 2018 & 2019 Q4) ───
    {
      id: 66,
      question: "In ARIMA model identification, the ACF plot is used to determine:",
      options: [
        "The AR order (p)",
        "The MA order (q)",
        "The differencing order (d)",
        "The seasonal period (s)"
      ],
      correct: 1,
      explanation: "ACF (Autocorrelation Function) shows the MA order q — the ACF cuts off after lag q. PACF shows the AR order p — the PACF cuts off after lag p."
    },
    {
      id: 67,
      question: "In ARIMA model identification, the PACF plot is used to determine:",
      options: [
        "The MA order (q)",
        "The AR order (p)",
        "The seasonal MA order (Q)",
        "Whether to log-transform"
      ],
      correct: 1,
      explanation: "PACF (Partial ACF) cuts off after lag p, indicating the AR order. ACF cuts off after lag q for MA order."
    },
    // ─── Scatter plot & regression ANOVA (from 2019 Q2) ───
    {
      id: 68,
      question: "A scatter plot of Age (X) vs Time on Facebook (Y) shows points trending downward from left to right. This suggests:",
      options: [
        "Positive linear relationship",
        "Negative linear relationship",
        "No relationship",
        "Quadratic relationship"
      ],
      correct: 1,
      explanation: "Points going downward from left to right indicate a negative linear relationship — as age increases, time on Facebook decreases."
    },
    {
      id: 69,
      question: "In the ANOVA table for simple linear regression, the F-statistic tests:",
      options: [
        "Whether the intercept is zero",
        "Whether the slope β₁ is significantly different from zero",
        "Whether the residuals are normal",
        "Whether R² = 1"
      ],
      correct: 1,
      explanation: "The F-test in regression ANOVA tests H₀: β₁ = 0 (no linear relationship) vs H₁: β₁ ≠ 0. If F is large (p < α), the regression is significant."
    },
    {
      id: 70,
      question: "In a regression ANOVA table, SST = SSR + SSE. What does SSR represent?",
      options: [
        "Sum of Squares Total",
        "Sum of Squares due to Regression (explained variation)",
        "Sum of Squares due to Error (unexplained variation)",
        "Sum of Squares Within"
      ],
      correct: 1,
      explanation: "SSR (Regression Sum of Squares) measures the variation explained by the regression model. SSE is the unexplained variation. SST = SSR + SSE is the total variation."
    },
    // ─── Experience vs assembly time regression (from 2018 Q2.I) ───
    {
      id: 71,
      question: "A researcher has data on experience (years) and time to assemble a computer (minutes) for 15 persons. Multiple people share the same experience level. To check if a simple linear model is adequate, he should perform:",
      options: [
        "A t-test for the slope",
        "A lack of fit test (comparing pure error vs lack of fit)",
        "A chi-squared test",
        "A Shapiro-Wilk test"
      ],
      correct: 1,
      explanation: "When replicate observations exist at the same X value, the lack of fit test can partition SSE into pure error and lack of fit. This tests H₀: linear model is adequate vs H₁: it is not."
    },
    // ─── Spam Naive Bayes specifics (from 2019 Q3) ───
    {
      id: 72,
      question: "In the spam filter problem (2019 paper), with 16 emails total: 6 Spam and 10 Ham. What is P(Spam = Yes)?",
      options: [
        "6/16 = 0.375",
        "10/16 = 0.625",
        "6/10 = 0.6",
        "0.5"
      ],
      correct: 0,
      explanation: "P(Spam=Yes) = 6/16 = 0.375. P(Spam=No) = 10/16 = 0.625."
    },
    // ─── ARIMA model fitting (from 2018 & 2019 Q4.VII / Q4.8) ───
    {
      id: 73,
      question: "When comparing ARIMA models for the same data, which criterion is used to select the best model?",
      options: [
        "Choose the model with the highest AIC",
        "Choose the model with the lowest AIC (or BIC)",
        "Choose the model with the most parameters",
        "Choose the model with the largest residuals"
      ],
      correct: 1,
      explanation: "AIC (Akaike Information Criterion) and BIC (Bayesian IC) penalize model complexity. The BEST model has the LOWEST AIC/BIC — it balances fit and parsimony."
    },
    // ─── ARIMA general notation (from multiple past papers) ───
    {
      id: 74,
      question: "In ARIMA(p,d,q)(P,D,Q)ₛ notation, what do the uppercase letters P, D, Q represent?",
      options: [
        "Non-seasonal AR order, differencing, MA order",
        "Seasonal AR order, seasonal differencing order, seasonal MA order",
        "The number of data points, dimensions, and quartiles",
        "Purely decorative — same as p, d, q"
      ],
      correct: 1,
      explanation: "Lowercase (p,d,q) = non-seasonal orders. Uppercase (P,D,Q) = seasonal orders. s = seasonal period (e.g., 12 for monthly). P = seasonal AR, D = seasonal differencing, Q = seasonal MA."
    },
    {
      id: 75,
      question: "ARIMA(0,1,1)(0,1,1)₁₂ is often called the 'airline model'. How many times is the series differenced in total?",
      options: [
        "1 (only regular differencing)",
        "2 (once regular d=1, once seasonal D=1)",
        "0 (no differencing)",
        "12"
      ],
      correct: 1,
      explanation: "d=1 means one regular difference: (1−B)Yₜ. D=1 means one seasonal difference: (1−B¹²). Total = 2 differencing operations applied to the series."
    },
    // ─── Residual analysis for regression (from 2019 Q2.6) ───
    {
      id: 76,
      question: "In residual analysis for regression, a 'funnel shape' (residuals spreading out) in the residuals vs fitted values plot indicates:",
      options: [
        "Normality of errors",
        "Non-constant variance (heteroscedasticity) — violation of equal variance assumption",
        "Perfect model fit",
        "Independence of errors"
      ],
      correct: 1,
      explanation: "A funnel/cone shape means the spread of residuals increases with fitted values → heteroscedasticity. This violates the constant variance assumption."
    },
    {
      id: 77,
      question: "Which plot is used to check the normality assumption of residuals in regression?",
      options: [
        "Residuals vs Fitted values",
        "Normal Q-Q plot of residuals",
        "Residuals vs Leverage",
        "Scatter plot of X vs Y"
      ],
      correct: 1,
      explanation: "Normal Q-Q plot: if residuals are normally distributed, the points should fall approximately on a straight line. Deviations from the line indicate non-normality."
    },
    // ─── Independent events definition (from MCQ screenshot IMAGE 18) ───
    {
      id: 78,
      question: "Two events A and B are independent if and only if:",
      options: [
        "P(A ∩ B) = 0",
        "P(A | B) = P(A), equivalently P(A ∩ B) = P(A) × P(B)",
        "P(A) + P(B) = 1",
        "A and B are mutually exclusive"
      ],
      correct: 1,
      explanation: "Independence means the occurrence of one event does not affect the other: P(A|B) = P(A), or equivalently P(A∩B) = P(A)×P(B). Note: mutually exclusive events are NOT independent (unless one has probability 0)."
    },
    // ─── R squared interpretation (from 2018 Q2.II(e) & 2019 Q2.7) ───
    {
      id: 79,
      question: "In the computer price regression model, R² = 0.95. This means:",
      options: [
        "95% of price variation is explained by monitor size, hard disk, and memory combined",
        "The model has 95% accuracy",
        "Each predictor explains 95%",
        "The correlation is 0.95"
      ],
      correct: 0,
      explanation: "R² = 0.95 in multiple regression means 95% of the total variation in the response (price) is explained by ALL the predictors together (monitor size + HD capacity + memory capacity)."
    },
    // ─── Levene's test for equal variances before t-test (from 2018 Q1.III) ───
    {
      id: 80,
      question: "Before performing a pooled two-sample t-test, you should check equal variances using:",
      options: [
        "Shapiro-Wilk test",
        "Levene's test (or F-test for two variances)",
        "Chi-squared test",
        "ADF test"
      ],
      correct: 1,
      explanation: "Levene's test tests H₀: σ₁² = σ₂² vs H₁: σ₁² ≠ σ₂². If not rejected, use pooled t-test. If rejected, use Welch's t-test (which doesn't assume equal variances)."
    }
  ]
};

export default pastpapers;

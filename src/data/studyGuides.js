const studyGuides = [
  // ═══════════════════════════════════════════════════════════════
  // LECTURE 1 — Probability Distributions
  // ═══════════════════════════════════════════════════════════════
  {
    id: 1,
    title: "Probability Distributions",
    emoji: "🎲",
    color: "from-blue-500 to-cyan-500",
    sections: [
      {
        heading: "What is a Random Variable?",
        icon: "🎯",
        story: `Imagine you're playing a game at a carnival 🎡. You spin a wheel, and depending on where it lands, you win a prize. The outcome is random — you can't predict it. But what if we assigned NUMBERS to each outcome?

That's exactly what a Random Variable does! It's a rule that assigns a number to each outcome of a random experiment.`,
        keyPoints: [
          "A Random Variable (X) is a function that maps outcomes of a random experiment to numbers",
          "Example: Toss a coin 3 times → X = number of Heads → X can be 0, 1, 2, or 3",
          "It's called 'random' because the value depends on chance"
        ],
        realWorldExample: `🏏 Think of a cricket match. X = "runs scored by Kohli" — before the match, X is random. After the match, X takes a specific value like 56.`
      },
      {
        heading: "Discrete vs Continuous Random Variables",
        icon: "🔢",
        story: `Think of it like this:

🪜 DISCRETE = Like climbing stairs — you step on 1, 2, 3… You can't step on 1.5! You can COUNT the values.

🎢 CONTINUOUS = Like a slide — you can be at ANY height, including 1.5, 1.73, 2.141592… You MEASURE these values.`,
        keyPoints: [
          "DISCRETE: Countable values (0, 1, 2, 3…) — like number of students in class",
          "CONTINUOUS: Any value in a range — like height (5.2 ft, 5.73 ft, etc.)",
          "Key difference: Can you LIST all possible values? → Discrete. Too many to list? → Continuous"
        ],
        realWorldExample: `📱 Discrete: Number of WhatsApp messages you get today (0, 1, 2, 3…)
🌡️ Continuous: Your exact body temperature (98.6°F, 98.72°F, 99.1°F…)`
      },
      {
        heading: "Probability Mass Function (PMF) — For Discrete",
        icon: "📊",
        story: `Imagine you have a bag with colored balls 🔴🔵🟢. The PMF tells you the probability of picking each color.

Two GOLDEN RULES of PMF:
1. Every probability must be between 0 and 1 (no negative probabilities, and nothing over 100%)
2. ALL probabilities must add up to exactly 1 (something HAS to happen!)`,
        keyPoints: [
          "PMF: P(X = x) gives the probability of each specific value",
          "Rule 1: 0 ≤ P(X = x) ≤ 1 for every value",
          "Rule 2: Sum of ALL probabilities = 1",
          "E(X) = Σ x·P(X=x) — the 'average' or expected value",
          "V(X) = E(X²) − [E(X)]² — how spread out the values are"
        ],
        realWorldExample: `🎲 Roll a fair die: P(X=1) = P(X=2) = … = P(X=6) = 1/6
Sum = 6 × (1/6) = 1 ✓
Expected value E(X) = 1(1/6) + 2(1/6) + ... + 6(1/6) = 3.5`
      },
      {
        heading: "Probability Density Function (PDF) — For Continuous",
        icon: "📈",
        story: `Here's a mind-bending fact: For a continuous random variable, the probability of getting EXACTLY one specific value is ZERO! 🤯

Think of it like a dartboard 🎯 — what's the chance of hitting EXACTLY the mathematical center point (with zero width)? Essentially zero.

Instead, we find probability over RANGES: P(a ≤ X ≤ b) = area under the curve from a to b.`,
        keyPoints: [
          "For continuous RV: P(X = exact value) = 0",
          "We find probability over intervals: P(a ≤ X ≤ b) = area under PDF curve",
          "The TOTAL area under the curve = 1",
          "f(x) ≥ 0 everywhere (curve never goes below x-axis)"
        ],
        realWorldExample: `⏱️ Bus arrival time between 0-10 minutes: P(exactly 3.0000 min) = 0, but P(2 ≤ X ≤ 4) = 2/10 = 0.2`
      },
      {
        heading: "The Big 7: Discrete Distributions",
        icon: "🎰",
        story: `Think of these 7 distributions as 7 different 'story patterns' that keep showing up in real life:`,
        keyPoints: [
          "1️⃣ UNIFORM: Every outcome equally likely — like rolling a fair die",
          "2️⃣ BERNOULLI: One trial, two outcomes (success/failure) — like one coin flip",
          "3️⃣ BINOMIAL: 'How many successes in n trials?' — like 10 coin flips, count heads",
          "4️⃣ GEOMETRIC: 'How many trials until FIRST success?' — like how many times you dial before someone picks up",
          "5️⃣ NEGATIVE BINOMIAL: 'How many trials until r-th success?' — like how many games until team wins 3rd match",
          "6️⃣ HYPERGEOMETRIC: 'Binomial but WITHOUT replacement' — like picking cards from a deck",
          "7️⃣ POISSON: 'How many events in a fixed time/space?' — like how many customers arrive per hour"
        ],
        formulas: [
          { name: "Binomial", formula: "P(X=k) = C(n,k) × p^k × (1-p)^(n-k), E(X)=np, V(X)=np(1-p)" },
          { name: "Poisson", formula: "P(X=k) = e^(-λ) × λ^k / k!, E(X)=λ, V(X)=λ" },
          { name: "Geometric", formula: "P(X=k) = (1-p)^(k-1) × p, E(X)=1/p, V(X)=(1-p)/p²" },
          { name: "Hypergeometric", formula: "E(X) = n×(M/N) where N=population, M=successes, n=sample" }
        ],
        realWorldExample: `🏪 A shop gets ~5 customers/hour (Poisson λ=5)
P(exactly 3 customers) = e^(-5) × 5³ / 3! = 0.1404 ≈ 14%`
      },
      {
        heading: "Continuous Distributions: Normal, Uniform, Exponential",
        icon: "🔔",
        story: `The NORMAL distribution is the KING of statistics 👑. It creates the famous bell curve.

Here's the magical thing about it — if you measure heights of 1000 people, their weights, their test scores — they ALL tend to follow this bell shape! Nature loves the normal distribution.`,
        keyPoints: [
          "NORMAL: Bell-shaped, symmetric. Mean = Median = Mode (all at the center!)",
          "Empirical Rule: 68% within ±1σ, 95% within ±2σ, 99.7% within ±3σ",
          "Z-score: Z = (X − μ)/σ converts ANY normal to Standard Normal N(0,1)",
          "UNIFORM: Flat/rectangular — equal probability everywhere in [a,b]",
          "EXPONENTIAL: Time between events. If arrivals are Poisson, waiting time is Exponential!"
        ],
        formulas: [
          { name: "Z-score", formula: "Z = (X − μ) / σ" },
          { name: "Normal PDF", formula: "f(x) = (1/σ√2π) × e^(-(x-μ)²/2σ²)" },
          { name: "Uniform", formula: "f(x) = 1/(b-a), E(X) = (a+b)/2" },
          { name: "Exponential", formula: "f(x) = λe^(-λx), E(X) = 1/λ, CDF = 1-e^(-λx)" }
        ],
        realWorldExample: `📊 Exam scores: μ = 70, σ = 10
What % score above 90? Z = (90-70)/10 = 2.0
From Z-table: P(Z > 2) ≈ 2.28% — only about 2 in 100 students!`
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // LECTURE 2 — Statistical Inference
  // ═══════════════════════════════════════════════════════════════
  {
    id: 2,
    title: "Statistical Inference",
    emoji: "🔍",
    color: "from-green-500 to-emerald-500",
    sections: [
      {
        heading: "Population vs Sample — The Big Picture",
        icon: "🌍",
        story: `Imagine you want to know the average height of ALL Sri Lankans 🇱🇰 (~22 million people). Can you measure everyone? Impossible!

So what do you do? You pick a SAMPLE — say 500 people — measure them, and use their data to GUESS about the whole population. That's statistical inference in a nutshell!`,
        keyPoints: [
          "POPULATION: The ENTIRE group you're interested in (could be millions)",
          "SAMPLE: A small subset you actually collect data from",
          "PARAMETER: A number describing the population (μ, σ², p) — usually UNKNOWN",
          "STATISTIC: A number calculated from the sample (X̄, S², p̂) — we KNOW this",
          "GOAL: Use the statistic to estimate the parameter!"
        ],
        realWorldExample: `🍕 Want to know what % of SLIIT students prefer pizza? (population = all SLIIT students)
You survey 100 students → 73 say yes → p̂ = 0.73
You ESTIMATE about 73% of ALL SLIIT students prefer pizza.`
      },
      {
        heading: "Sampling Methods — How to Pick Your Sample",
        icon: "🎣",
        story: `Picking a sample is like picking players for a cricket team — you need to be FAIR and REPRESENTATIVE. Bad sampling = bad results (garbage in, garbage out! 🗑️)`,
        keyPoints: [
          "PROBABILITY SAMPLING (fair random methods):",
          "  • Simple Random: Everyone has equal chance — like drawing names from a hat 🎩",
          "  • Systematic: Pick every k-th person — like checking every 10th product on assembly line",
          "  • Stratified: Divide into groups (strata), sample from each — like sampling from each department",
          "  • Cluster: Divide into clusters, randomly pick whole clusters — like randomly picking classrooms",
          "NON-PROBABILITY SAMPLING (not random, potential bias):",
          "  • Convenience: Whoever is available — asking your friends",
          "  • Snowball: One leads to another — finding rare disease patients through referrals"
        ],
        realWorldExample: `🏫 Stratified sampling: SLIIT has IT, DS, CS, SE departments. Take 50 from each department = 200 total. This ensures every department is represented!`
      },
      {
        heading: "Point Estimation — Making Your Best Guess",
        icon: "🎯",
        story: `An ESTIMATOR is the RECIPE (formula). An ESTIMATE is the DISH (number) you make with it.

Think of it like a cooking analogy 🍳:
• Estimator: "Take all ingredients, mix, bake at 180°C" (the recipe)
• Estimate: "This specific cake weighs 2.5 kg" (the result)`,
        keyPoints: [
          "ESTIMATOR: A formula/rule applied to sample data (e.g., X̄ = ΣXᵢ/n)",
          "ESTIMATE: The actual number you get (e.g., X̄ = 72.5)",
          "Good estimators have two properties:",
          "  1. UNBIASED: E(θ̂) = θ — on average, it hits the target 🎯",
          "  2. EFFICIENT: Smallest variance — estimates are tightly clustered together"
        ],
        realWorldExample: `🏹 Two archers: Both hit the center ON AVERAGE (unbiased), but Archer A's arrows are tightly grouped while Archer B's are scattered all over. Archer A is MORE EFFICIENT.`
      },
      {
        heading: "Central Limit Theorem (CLT) — The Magic Theorem ✨",
        icon: "🪄",
        story: `This is perhaps the MOST IMPORTANT theorem in all of statistics. It says:

"No matter WHAT shape the population has — weird, skewed, bimodal — if you take sample means from large enough samples, those means will form a NORMAL distribution!" 🔔

It's like magic — even if the population looks like a mess, the sampling distribution of X̄ will be a beautiful bell curve!`,
        keyPoints: [
          "If X₁, X₂, …, Xₙ are from ANY distribution with mean μ and variance σ²:",
          "Then X̄ ~ N(μ, σ²/n) approximately, for large n",
          "The mean of X̄ = μ (same as population mean)",
          "The variance of X̄ = σ²/n (gets SMALLER as n increases!)",
          "Standard Error = σ/√n — this measures how precise your estimate is"
        ],
        realWorldExample: `🎲 Roll 1 die: Not normal at all (uniform). But take the MEAN of 30 dice rolls, repeat 1000 times → those 1000 means form a perfect bell curve!`
      },
      {
        heading: "Confidence Intervals — The Range of Reasonable Values",
        icon: "📏",
        story: `Instead of saying "the average height is exactly 170 cm" (point estimate), wouldn't it be better to say "I'm 95% confident the average height is between 168 and 172 cm"?

That's a CONFIDENCE INTERVAL! It's like casting a fishing net 🎣 instead of using a single hook — you're more likely to catch the fish (true parameter).`,
        keyPoints: [
          "CI = Point Estimate ± Margin of Error",
          "95% CI means: If we repeated sampling 100 times, about 95 of those intervals would contain the true parameter",
          "Higher confidence (99% vs 95%) → WIDER interval (less precise)",
          "Larger sample size → NARROWER interval (more precise)",
          "Doubling n reduces standard error by factor of √2 (not half!)"
        ],
        formulas: [
          { name: "CI General Form", formula: "X̄ ± Z(α/2) × σ/√n" },
          { name: "Margin of Error", formula: "E = Z(α/2) × σ/√n" }
        ],
        realWorldExample: `📊 Survey: X̄ = 45 minutes average commute. 95% CI: (42, 48) minutes.
This means we're ~95% confident the TRUE average commute for the population is between 42 and 48 minutes.`
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // LECTURE 3 — Hypothesis Testing
  // ═══════════════════════════════════════════════════════════════
  {
    id: 3,
    title: "Hypothesis Testing",
    emoji: "⚖️",
    color: "from-yellow-500 to-orange-500",
    sections: [
      {
        heading: "What is a Hypothesis? — The Courtroom Analogy",
        icon: "⚖️",
        story: `Hypothesis testing is EXACTLY like a court trial 🏛️:

• The DEFENDANT (null hypothesis H₀) is "innocent until proven guilty"
• The PROSECUTOR (you, the researcher) tries to prove guilt (H₁)  
• You need strong EVIDENCE (data) to convict
• If evidence is weak → "Not guilty" (fail to reject H₀)
• If evidence is overwhelming → "Guilty!" (reject H₀)

Notice: We never say "proven innocent" — we say "not guilty." Same in statistics: we never "accept H₀," we "fail to reject H₀."`,
        keyPoints: [
          "H₀ (Null Hypothesis): The status quo, the 'nothing special is happening' claim",
          "H₁ (Alternative Hypothesis): What you're trying to PROVE — the 'something IS different' claim",
          "H₀ ALWAYS contains an = sign (we need a specific value to calculate)",
          "We assume H₀ is true and try to find evidence against it"
        ],
        realWorldExample: `💊 New drug: H₀: 'Drug has NO effect' (innocent) vs H₁: 'Drug DOES work' (guilty)
We need strong evidence from clinical trials to reject H₀ and approve the drug.`
      },
      {
        heading: "One-Tailed vs Two-Tailed Tests — Direction Matters!",
        icon: "🧭",
        story: `Think of it like a speed camera 🚗💨:

TWO-TAILED: "Is the speed DIFFERENT from 60 km/h?" (could be faster OR slower)
→ H₁: μ ≠ 60

RIGHT-TAILED: "Is the speed MORE than 60 km/h?" (only checking if too fast)
→ H₁: μ > 60

LEFT-TAILED: "Is the speed LESS than 60 km/h?" (only checking if too slow)
→ H₁: μ < 60`,
        keyPoints: [
          "TWO-TAILED (≠): Checking for any difference, rejection region in BOTH tails",
          "RIGHT-TAILED (>): Checking if parameter is GREATER, rejection region on RIGHT",
          "LEFT-TAILED (<): Checking if parameter is LESS, rejection region on LEFT",
          "The claim you want to PROVE goes into H₁",
          "TIP: Look for key words — 'different' = two-tailed, 'more/greater' = right, 'less/lower' = left"
        ],
        realWorldExample: `🔋 Battery company claims batteries last AT LEAST 500 hours.
Consumer group suspects they last LESS → H₁: μ < 500 (left-tailed)
H₀: μ ≥ 500`
      },
      {
        heading: "Type I and Type II Errors — Two Ways to Mess Up",
        icon: "⚠️",
        story: `There are TWO ways a court can make a mistake:

😱 TYPE I ERROR (α): Convicting an INNOCENT person!
→ Rejecting H₀ when H₀ is actually TRUE
→ Called "significance level" — we choose this (usually 5%)

😴 TYPE II ERROR (β): Letting a GUILTY person go FREE!
→ Failing to reject H₀ when H₀ is actually FALSE

You can't eliminate both! Reducing Type I increases Type II, like a see-saw ⚖️`,
        keyPoints: [
          "α (Type I Error) = P(reject H₀ | H₀ is true) — false alarm!",
          "β (Type II Error) = P(fail to reject H₀ | H₁ is true) — missed detection!",
          "Common α values: 0.01, 0.05, 0.10",
          "Power = 1 − β = probability of correctly detecting a real effect",
          "More serious consequences of wrong conviction → use smaller α (0.01)"
        ],
        realWorldExample: `🏥 COVID test:
Type I error: Telling a HEALTHY person they have COVID (false positive 😟)
Type II error: Telling a SICK person they're fine (false negative 😰 — more dangerous!)
For dangerous diseases, we want to minimize Type II errors (high power).`
      },
      {
        heading: "The Testing Process — Step by Step",
        icon: "📋",
        story: `Every hypothesis test follows the same 5 steps — like a recipe! 🧑‍🍳`,
        keyPoints: [
          "Step 1: State H₀ and H₁ (set up the hypotheses)",
          "Step 2: Choose significance level α (usually 0.05)",
          "Step 3: Calculate the test statistic from your data",
          "Step 4: Find the critical value(s) OR p-value",
          "Step 5: Make a decision: Reject H₀ or Fail to reject H₀",
          "",
          "Three approaches to decide:",
          "  📐 Classical: Compare test statistic to critical value",
          "  📊 P-value: If p-value < α → reject H₀",
          "  📏 CI: If hypothesized value is outside CI → reject H₀"
        ],
        realWorldExample: `🏭 Factory claims mean weight = 500g. You sample 30 items, get X̄ = 495.
Step 1: H₀: μ=500, H₁: μ≠500
Step 2: α = 0.05
Step 3: Calculate Z = (495-500)/(σ/√30)
Step 4: Compare to ±1.96
Step 5: If |Z| > 1.96 → Reject! The factory's claim is wrong.`
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // LECTURE 4 — One Population Mean
  // ═══════════════════════════════════════════════════════════════
  {
    id: 4,
    title: "Testing One Population Mean",
    emoji: "📊",
    color: "from-red-500 to-rose-500",
    sections: [
      {
        heading: "The Key Question: Do You Know σ?",
        icon: "🔑",
        story: `This ENTIRE lecture boils down to ONE question: "Do you know the population standard deviation σ?"

🟢 YES, σ is known → Use Z-test (standard normal)
🔴 NO, σ is unknown → Use t-test (t-distribution)

Think of it like navigation 🗺️:
• Z-test = GPS with perfect satellite data (σ known — rare in real life!)
• t-test = GPS with some uncertainty (σ unknown — this is the real world!)`,
        keyPoints: [
          "σ KNOWN: Z = (X̄ − μ₀) / (σ/√n) → compare with Z table",
          "σ UNKNOWN: t = (X̄ − μ₀) / (S/√n) → compare with t table (df = n−1)",
          "S replaces σ — but this adds uncertainty, so we use the wider t-distribution",
          "As n gets large (>30), the t-distribution looks almost identical to Z"
        ],
        realWorldExample: `🏭 Light bulb company claims μ = 1000 hours. You test 25 bulbs, get X̄ = 985, S = 50.
σ unknown → use t-test: t = (985-1000)/(50/√25) = -15/10 = -1.5
Compare with t(24) critical value.`
      },
      {
        heading: "The Three Key Distributions: χ², t, F",
        icon: "📐",
        story: `Think of these as a FAMILY 👨‍👩‍👧‍👦:

📊 CHI-SQUARED (χ²) = The foundation — sum of squared standard normals
📈 t-DISTRIBUTION = Normal ÷ √(χ²/df) — the "cautious cousin" of Z
📉 F-DISTRIBUTION = Ratio of two χ² — used to compare two variances

They're all built from the normal distribution!`,
        keyPoints: [
          "χ² distribution: Always positive, right-skewed, df = parameter",
          "  Mean = df, Variance = 2×df",
          "t-distribution: Symmetric like normal, but heavier tails (more uncertainty)",
          "  As df → ∞, t → Z (standard normal)",
          "F-distribution: Ratio of two χ² — always positive, right-skewed",
          "  Has TWO df parameters (numerator df, denominator df)"
        ],
        realWorldExample: `🎯 t-distribution with thick tails is like a dart thrower who's good but not perfect — most darts near the center, but occasionally throws wide. As they practice more (larger n), they get more precise (approaches Z).`
      },
      {
        heading: "Confidence Intervals for μ",
        icon: "📏",
        story: `Building a CI is like building a fence around where you think the treasure (μ) is buried 🏴‍☠️.`,
        keyPoints: [
          "σ KNOWN: X̄ ± Z(α/2) × σ/√n",
          "σ UNKNOWN: X̄ ± t(α/2, n-1) × S/√n",
          "95% CI uses Z = 1.96 (or t value from table)",
          "99% CI uses Z = 2.576 (wider fence = more confident)",
          "ONE-SIDED CI: Only upper or lower bound",
          "  Upper-bounded: (−∞, X̄ + t×S/√n) — for left-tailed tests",
          "  Lower-bounded: (X̄ − t×S/√n, ∞) — for right-tailed tests"
        ],
        formulas: [
          { name: "CI (σ known)", formula: "X̄ ± Z(α/2) × σ/√n" },
          { name: "CI (σ unknown)", formula: "X̄ ± t(α/2, n-1) × S/√n" }
        ],
        realWorldExample: `📦 12 items from normal population, σ² = 4 (σ = 2), X̄ = 10.4
95% CI: 10.4 ± 1.96 × (2/√12) = 10.4 ± 1.13 = (9.27, 11.53)
We're 95% confident the true mean is between 9.27 and 11.53.`
      },
      {
        heading: "Hypothesis Testing — The Three Approaches",
        icon: "🔬",
        story: `Three roads lead to the same destination! You can use ANY of these approaches — they always give the same conclusion:`,
        keyPoints: [
          "1️⃣ CLASSICAL APPROACH:",
          "   Calculate test statistic → Compare to critical value → Reject if in rejection region",
          "2️⃣ P-VALUE APPROACH:",
          "   Calculate test statistic → Find p-value → Reject if p-value < α",
          "   p-value = probability of getting data as extreme or more extreme, assuming H₀ is true",
          "3️⃣ CONFIDENCE INTERVAL APPROACH:",
          "   Build (1−α)×100% CI → If μ₀ is NOT inside → Reject H₀",
          "",
          "Think of p-value as: 'How surprised should I be by this data if H₀ is true?'",
          "Small p-value = very surprised = strong evidence against H₀"
        ],
        realWorldExample: `🥛 Wire resistance: 5 readings, X̄ = 1.448, S = 0.174. Test if μ = 1.5 (pure silver).
t = (1.448 − 1.5)/(0.174/√5) = −0.668
p-value = 0.54 > 0.05 → Fail to reject. Not enough evidence to say it's not pure silver.`
      },
      {
        heading: "Why df = n − 1? The Lost Freedom",
        icon: "🔗",
        story: `Imagine 4 friends need to carry exactly 100 books 📚. The first 3 can carry any number they want (say 20, 35, 15). But the 4th friend HAS to carry 100 − 20 − 35 − 15 = 30. They have NO choice!

That's why we lose 1 degree of freedom: once we calculate X̄, the last observation is forced. So df = n − 1.`,
        keyPoints: [
          "When calculating S², we use X̄ instead of μ (which we don't know)",
          "This 'uses up' one degree of freedom",
          "The deviations (Xᵢ − X̄) must sum to zero — this constraint removes 1 freedom",
          "n values but only n−1 can vary freely → df = n−1"
        ],
        realWorldExample: `📝 3 numbers with mean = 10: If first two are 8 and 12, the third MUST be 10. Only 2 are free → df = 3−1 = 2.`
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // LECTURE 5 — Two Population Means
  // ═══════════════════════════════════════════════════════════════
  {
    id: 5,
    title: "Comparing Two Population Means",
    emoji: "🔄",
    color: "from-purple-500 to-violet-500",
    sections: [
      {
        heading: "The Big Question: Are Two Groups Different?",
        icon: "🤔",
        story: `Now instead of testing ONE group, we're comparing TWO groups!

🏫 "Do boys and girls score differently in math?"
💊 "Does the new drug work better than the old one?"
🏭 "Does Machine A produce differently from Machine B?"

We compare μ₁ − μ₂. If this difference is "significantly" far from 0, the groups are different!`,
        keyPoints: [
          "We test H₀: μ₁ − μ₂ = 0 (no difference) vs H₁: μ₁ − μ₂ ≠ 0",
          "The test statistic is based on (X̄₁ − X̄₂)",
          "E(X̄₁ − X̄₂) = μ₁ − μ₂",
          "V(X̄₁ − X̄₂) = σ₁²/n₁ + σ₂²/n₂ (if independent)"
        ],
        realWorldExample: `🧪 Drug trial: 50 patients on Drug A (X̄₁ = 120 blood pressure), 50 on Drug B (X̄₂ = 115). Is the 5-point difference real or just random chance?`
      },
      {
        heading: "The 4 Cases — Which Formula to Use?",
        icon: "🗂️",
        story: `This is like choosing the right KEY 🔑 for a LOCK. There are 4 possible locks:`,
        keyPoints: [
          "CASE A: σ₁² ≠ σ₂², both KNOWN → Z-test with individual σ's",
          "CASE B: σ₁² = σ₂² = σ², KNOWN → Z-test with common σ",
          "CASE C: σ₁² = σ₂² but UNKNOWN → t-test with POOLED variance Sp²",
          "CASE D: σ₁² ≠ σ₂² and UNKNOWN → t-test with Welch (Satterthwaite) df",
          "",
          "How to choose: Ask two questions:",
          "  Q1: Are the variances known? → Yes: Z-test, No: t-test",
          "  Q2: Are the variances equal? → Yes: Pool them, No: Keep separate"
        ],
        formulas: [
          { name: "Pooled Variance (Case C)", formula: "Sp² = [(n₁-1)S₁² + (n₂-1)S₂²] / (n₁+n₂-2)" },
          { name: "Welch df (Case D)", formula: "df = (S₁²/n₁ + S₂²/n₂)² / [(S₁²/n₁)²/(n₁-1) + (S₂²/n₂)²/(n₂-1)]" }
        ],
        realWorldExample: `🏫 Two classes: Class A (n=4, scores: 64,66,89,77) vs Class B (n=3, scores: 56,71,53).
Variances unknown but assumed equal → Case C.
Sp² = (3×132.67 + 2×92)/(4+3-2) = 582/5 = 116.4
95% CI for μ₁−μ₂: 14 ± 2.571×√(116.4×(1/4+1/3)) = (-7.03, 35.03)`
      },
      {
        heading: "Paired Samples — When Data is Connected",
        icon: "👥",
        story: `Sometimes the two samples aren't independent — they're PAIRED! Like measuring the SAME person BEFORE and AFTER a diet 🥗.

The trick: Instead of comparing two groups, calculate the DIFFERENCE for each pair, then do a ONE-sample t-test on the differences!`,
        keyPoints: [
          "UNPAIRED: Two different groups of people (independent)",
          "PAIRED: Same subjects measured twice, or matched pairs",
          "For paired data: d = X − Y for each pair",
          "Then test using: t = (d̄ − 0) / (Sd/√n), df = n−1",
          "This is more POWERFUL because it removes person-to-person variability"
        ],
        realWorldExample: `🏋️ Weight loss program: Measure 10 people BEFORE and AFTER.
Person 1: 80→75 (d=5), Person 2: 90→87 (d=3), ...
d̄ = 4.2 kg, Sd = 1.8 kg
t = 4.2/(1.8/√10) = 7.38 → Highly significant! The program works!`
      },
      {
        heading: "Independence — Why It Matters",
        icon: "🔗",
        story: `If samples are NOT independent (they're correlated), the formula for variance changes:

V(X̄₁ − X̄₂) = V(X̄₁) + V(X̄₂) − 2×Cov(X̄₁, X̄₂)

If you IGNORE the covariance term when samples are dependent, your standard error will be WRONG, and your test will be INVALID! That's why we use the paired test when data is connected.`,
        keyPoints: [
          "Independent: V(X±Y) = V(X) + V(Y) — variances simply add",
          "Dependent: V(X±Y) = V(X) + V(Y) ± 2Cov(X,Y) — covariance matters!",
          "The paired t-test handles dependence automatically by working with differences",
          "Always check: Are observations in one sample related to observations in the other?"
        ],
        realWorldExample: `💧 Water quality: Measure zinc at BOTTOM and SURFACE of same 10 locations.
Bottom and surface at the same location are paired (not independent!).
Use paired t-test, not unpaired!`
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // LECTURE 6 — ANOVA
  // ═══════════════════════════════════════════════════════════════
  {
    id: 6,
    title: "Analysis of Variance (ANOVA)",
    emoji: "📊",
    color: "from-teal-500 to-cyan-500",
    sections: [
      {
        heading: "Why Not Just Do Many t-Tests?",
        icon: "❌",
        story: `You want to compare 3 diets. Why not just do 3 t-tests (Diet1 vs Diet2, Diet1 vs Diet3, Diet2 vs Diet3)?

PROBLEM: Each test has a 5% chance of false alarm. With 3 tests:
Overall error ≈ 1 − (0.95)³ = 14.3%! Way more than 5%! 😱

ANOVA solves this by testing ALL groups at once in a single test!`,
        keyPoints: [
          "ANOVA = ANalysis Of VAriance (but it's actually testing MEANS!)",
          "H₀: μ₁ = μ₂ = μ₃ = ... = μc (ALL means are equal)",
          "H₁: At least one mean is different",
          "One test instead of many → controls the overall error rate",
          "If we reject H₀, we know SOMETHING is different, but not WHAT — need post-hoc tests"
        ],
        realWorldExample: `🎾 Testing 3 tennis rackets: Do they hit different distances? Rather than 3 separate comparisons, ANOVA tests all 3 at once with one F-test!`
      },
      {
        heading: "The Key Idea: Variance Decomposition",
        icon: "🍕",
        story: `Imagine all your data points are spread out (total variation). ANOVA splits this into TWO pieces — like slicing a pizza 🍕:

SLICE 1 (SSA): Variation BETWEEN groups — how different are the group means from each other?

SLICE 2 (SSW): Variation WITHIN groups — how much do individuals vary within their own group?

If the between-group variation is MUCH bigger than within-group variation, the groups must truly be different!`,
        keyPoints: [
          "SST = Total Sum of Squares (total variation)",
          "SSA = Among/Between groups Sum of Squares (due to group differences)",
          "SSW = Within groups Sum of Squares (due to random variation)",
          "Golden Rule: SST = SSA + SSW (they perfectly add up!)",
          "If SSA is large relative to SSW → groups are probably different"
        ],
        formulas: [
          { name: "SST", formula: "ΣΣ(Xij − X̄)² where X̄ = grand mean" },
          { name: "SSA", formula: "Σ nj(X̄j − X̄)²" },
          { name: "SSW", formula: "ΣΣ(Xij − X̄j)²" },
          { name: "Partition", formula: "SST = SSA + SSW" }
        ],
        realWorldExample: `📊 3 classes, 10 students each. If Class A avg=80, B avg=60, C avg=90 — the between-group variation (SSA) is large. If everyone within each class scores similar — SSW is small. → F will be large → means are different!`
      },
      {
        heading: "The F-Statistic and ANOVA Table",
        icon: "📋",
        story: `The F-statistic is the JUDGE of ANOVA:

F = MSA / MSW = (Between variation per df) / (Within variation per df)

If F ≈ 1 → Between and within variation are similar → no group differences
If F >> 1 → Between variation dominates → groups ARE different!`,
        keyPoints: [
          "MSA = SSA / (c−1) — mean square among (c = number of groups)",
          "MSW = SSW / (n−c) — mean square within (n = total observations)",
          "F = MSA / MSW",
          "Degrees of freedom: total = n−1, between = c−1, within = n−c",
          "df partition: (n−1) = (c−1) + (n−c) ✓",
          "Reject H₀ if F > F(α, c−1, n−c) from F-table"
        ],
        formulas: [
          { name: "F-statistic", formula: "F = MSA / MSW" },
          { name: "Effect Size", formula: "η² = SSA / SST (proportion of variation explained)" }
        ],
        realWorldExample: `🎾 3 rackets, 5 hits each (n=15, c=3):
SSA = 3378.93, SSW = 802.4
MSA = 3378.93/2 = 1689.47
MSW = 802.4/12 = 66.87
F = 1689.47/66.87 = 25.27 >> F(0.05,2,12) = 3.89
Reject H₀! The rackets DO hit different distances!`
      },
      {
        heading: "Post-Hoc Tests — Which Groups Differ?",
        icon: "🔍",
        story: `ANOVA says "at least one mean is different" but doesn't say WHICH ONE! It's like a fire alarm that tells you there's a fire somewhere in the building, but not which floor 🔥.

Post-hoc tests are like checking each floor individually!`,
        keyPoints: [
          "Fisher's LSD (Least Significant Difference):",
          "  Calculate LSD = t(α/2, n-c) × √(MSW × (1/nᵢ + 1/nⱼ))",
          "  If |X̄ᵢ − X̄ⱼ| > LSD → those two means are significantly different",
          "Tukey's HSD is another popular method (controls family-wise error better)",
          "Only do post-hoc tests AFTER rejecting H₀ in ANOVA"
        ],
        realWorldExample: `🍩 4 fat types for doughnuts. ANOVA says 'significant difference.' LSD = 12.1.
|Fat1 − Fat2| = |72 − 85| = 13 > 12.1 → Fat 1 and 2 ARE different ✓
|Fat1 − Fat3| = |72 − 76| = 4 < 12.1 → Fat 1 and 3 NOT different ✗`
      },
      {
        heading: "ANOVA Assumptions & What If They Fail",
        icon: "⚠️",
        story: `ANOVA has 3 assumptions — think of them as 3 legs of a stool 🪑. If one breaks, the stool wobbles!`,
        keyPoints: [
          "1. NORMALITY: Each population should be approximately normal",
          "   → Violated? Use Kruskal-Wallis test (nonparametric alternative)",
          "2. EQUAL VARIANCES (Homogeneity): σ₁² = σ₂² = ... = σc²",
          "   → Test with Levene's test. Violated? Use Welch's ANOVA",
          "3. INDEPENDENCE: Observations are randomly and independently drawn",
          "   → This is about study design, can't be fixed with math",
          "Levene's Test: H₀: all variances equal. If p < 0.05 → variances are unequal"
        ],
        realWorldExample: `🏭 Comparing 3 manufacturing methods. If one method is way more variable than others (Levene's test p = 0.02 < 0.05), standard ANOVA shouldn't be used → use Welch's ANOVA instead.`
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // LECTURE 7 — Population Proportions
  // ═══════════════════════════════════════════════════════════════
  {
    id: 7,
    title: "Population Proportions",
    emoji: "📊",
    color: "from-pink-500 to-rose-500",
    sections: [
      {
        heading: "What's a Proportion? — Counting Yeses and Nos",
        icon: "✅",
        story: `Instead of measuring heights or weights (continuous data), sometimes we just count YES or NO:

✅ "Do you use iPhone?" → Yes/No
✅ "Is this product defective?" → Yes/No  
✅ "Did the patient recover?" → Yes/No

The proportion p = (number of yeses) / (total people). Simple!`,
        keyPoints: [
          "Population proportion: p (the TRUE percentage — usually unknown)",
          "Sample proportion: p̂ = X/n (what we calculate from data)",
          "q̂ = 1 − p̂ (complement — the 'No' proportion)",
          "X follows Binomial(n, p) — count of successes"
        ],
        realWorldExample: `📱 Survey 200 students: 156 use Instagram.
p̂ = 156/200 = 0.78 (78%)
q̂ = 1 − 0.78 = 0.22 (22%)`
      },
      {
        heading: "Normal Approximation — When Binomial Gets a Makeover",
        icon: "🔔",
        story: `For large samples, the Binomial distribution starts looking like a Normal distribution (thanks to CLT!).

But there's a catch — this only works when np₀ ≥ 5 AND n(1−p₀) ≥ 5. Think of it as needing enough successes AND failures for the bell shape to form.`,
        keyPoints: [
          "For large n: p̂ ~ N(p, pq/n) approximately",
          "Standard Error: SE = √(pq/n)",
          "Condition: np ≥ 5 AND n(1−p) ≥ 5 (enough of both outcomes)",
          "If condition fails → use exact binomial test (don't approximate!)",
          "Z = (p̂ − p₀) / √(p₀q₀/n) — for hypothesis tests"
        ],
        realWorldExample: `🌱 Testing if 90% of seeds germinate. n=100, p₀=0.9.
np₀ = 100×0.9 = 90 ≥ 5 ✓
n(1-p₀) = 100×0.1 = 10 ≥ 5 ✓
Normal approximation is OK!`
      },
      {
        heading: "Confidence Interval for a Proportion",
        icon: "📏",
        story: `Just like for means, we build a 'fence' around our best guess of p:`,
        keyPoints: [
          "95% CI for p: p̂ ± Z(α/2) × √(p̂q̂/n)",
          "The margin of error E = Z(α/2) × √(p̂q̂/n)",
          "Larger n → narrower CI (more precise estimate)",
          "Higher confidence → wider CI (more certain but less precise)"
        ],
        formulas: [
          { name: "CI for p", formula: "p̂ ± Z(α/2) × √(p̂q̂/n)" },
          { name: "Sample Size", formula: "n = Z² × p(1-p) / E² (use p=0.5 if unknown)" }
        ],
        realWorldExample: `🏭 300 items inspected, 45 defective. p̂ = 45/300 = 0.15
95% CI: 0.15 ± 1.96 × √(0.15×0.85/300) = 0.15 ± 0.04 = (0.11, 0.19)
We're 95% confident the true defective rate is between 11% and 19%.`
      },
      {
        heading: "Comparing Two Proportions — Is There a Real Difference?",
        icon: "⚖️",
        story: `Now we compare two groups. For example: Do more men than women smoke?

The key idea: Under H₀ (no difference), we POOL the two samples together to get ONE common proportion.`,
        keyPoints: [
          "H₀: p₁ = p₂ (same proportion in both groups)",
          "H₁: p₁ ≠ p₂ (or > or <)",
          "Pooled proportion: p̂ = (X₁ + X₂) / (n₁ + n₂)",
          "Z = (p̂₁ − p̂₂) / √(p̂q̂ × (1/n₁ + 1/n₂))",
          "For CI (not test): Z = (p̂₁ − p̂₂) / √(p̂₁q̂₁/n₁ + p̂₂q̂₂/n₂)"
        ],
        realWorldExample: `🏭 Process A: 60 defective out of 3740 (p̂₁ = 0.016)
Process B: 28 defective out of 3740 (p̂₂ = 0.0075)
Pooled p̂ = (60+28)/(3740+3740) = 0.0118
Z = −5.43 → Highly significant! Process B is definitely better!`
      },
      {
        heading: "Sample Size Determination — How Many Do We Need?",
        icon: "📐",
        story: `Before conducting a study, you need to know: "How many people should I survey?"

The formula: n = Z² × p(1−p) / E²

The catch: You need p to calculate n, but you're trying to FIND p! 🤔 Solution: Use p = 0.5 (worst case — maximizes sample size, guarantees precision).`,
        keyPoints: [
          "n = Z²p(1−p)/E² where E = desired margin of error",
          "p(1−p) is maximized when p = 0.5 → p(1−p) = 0.25",
          "Using p = 0.5 gives the MOST CONSERVATIVE (largest) sample size",
          "For 95% confidence with E = 3%: n = 1.96² × 0.25 / 0.03² = 1068 people needed!"
        ],
        realWorldExample: `📋 Election poll: Want to estimate support within ±2% at 95% confidence.
n = (1.96)² × 0.5 × 0.5 / (0.02)² = 2401 voters needed!
That's why polls survey ~2500 people.`
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // LECTURE 8 — Population Variances
  // ═══════════════════════════════════════════════════════════════
  {
    id: 8,
    title: "Population Variances",
    emoji: "📐",
    color: "from-amber-500 to-yellow-500",
    sections: [
      {
        heading: "Why Test Variances? — Consistency Matters!",
        icon: "🎯",
        story: `Imagine two pizza shops 🍕:
• Shop A: Pizzas weigh 500g, 505g, 498g, 502g (very consistent!)
• Shop B: Pizzas weigh 450g, 550g, 480g, 520g (all over the place!)

Both have the SAME mean (≈500g), but Shop A is way more CONSISTENT. Variance (σ²) measures this consistency. Testing variance helps us ensure quality control!`,
        keyPoints: [
          "Variance σ² measures how spread out data is around the mean",
          "Low variance = consistent/reliable process",
          "High variance = inconsistent/unreliable process",
          "We might want to test if σ² equals a target, or compare two variances"
        ],
        realWorldExample: `🏭 A machine should fill bottles to exactly 500ml. Mean is fine at 500ml, but if variance is too high, some bottles get 480ml and others 520ml — customers complain!`
      },
      {
        heading: "Chi-Squared Test for One Variance",
        icon: "📊",
        story: `To test whether a population variance equals a specific value, we use the chi-squared (χ²) distribution.

The pivotal quantity (n-1)S²/σ² follows a χ² distribution with n-1 degrees of freedom. This is the foundation for ALL variance tests!`,
        keyPoints: [
          "Pivotal quantity: (n−1)S²/σ² ~ χ²(n−1)",
          "Test statistic: χ²_cal = (n−1)S²/σ₀²",
          "CI for σ²: [(n−1)S² / χ²(α/2), (n−1)S² / χ²(1−α/2)]",
          "⚠️ The CI is NOT symmetric around S² (because χ² is skewed!)",
          "For CI of σ: just take square roots of the CI bounds for σ²"
        ],
        formulas: [
          { name: "Test Statistic", formula: "χ²_cal = (n−1)S² / σ₀²" },
          { name: "CI for σ²", formula: "[(n−1)S² / χ²(α/2,n-1), (n−1)S² / χ²(1-α/2,n-1)]" }
        ],
        realWorldExample: `🪖 Safety helmets: n=40, S = 48.5 lbs. Test if σ > 40 lbs.
χ²_cal = 39 × 48.5² / 40² = 57.33
χ²(0.05, 39) = 54.57
57.33 > 54.57 → Reject H₀. The standard deviation IS more than 40 lbs. Helmets need improvement!`
      },
      {
        heading: "F-Test for Comparing Two Variances",
        icon: "⚖️",
        story: `Want to compare the consistency of TWO processes? The F-test is your tool!

F = S₁²/S₂² — literally the RATIO of the two sample variances.

Convention: Put the LARGER variance on top so F ≥ 1. This makes life easier because you only need to check the right tail!`,
        keyPoints: [
          "F = S₁²/S₂² where S₁² > S₂² (larger on top by convention)",
          "Under H₀: σ₁² = σ₂², F ~ F(n₁−1, n₂−1)",
          "If F is much larger than 1 → the variances are truly different",
          "Lower critical value: F(1−α/2, ν₁, ν₂) = 1 / F(α/2, ν₂, ν₁) — reciprocal with swapped df!"
        ],
        formulas: [
          { name: "F-statistic", formula: "F = S₁² / S₂² (larger variance on top)" },
          { name: "Lower F critical", formula: "F(1-α/2, ν₁, ν₂) = 1 / F(α/2, ν₂, ν₁)" }
        ],
        realWorldExample: `⚗️ Old vs New chemical process:
Old: S₁² = 1.04 (n=25)
New: S₂² = 0.51 (n=25)
F = 1.04/0.51 = 2.04
F(0.05, 24, 24) = 1.98
2.04 > 1.98 → Reject H₀! New process really IS more consistent!`
      },
      {
        heading: "Important Warnings About Variance Tests",
        icon: "🚨",
        story: `Here's something critical that many students miss:

Tests for MEANS are robust — even if the population isn't perfectly normal, the CLT saves us (for large n).

But tests for VARIANCES are NOT robust — they're very sensitive to non-normality! Even a little bit of non-normality can mess up your results. 🚨`,
        keyPoints: [
          "χ² and F tests for variance are HIGHLY SENSITIVE to normality assumption",
          "Unlike mean tests, there's no CLT to save you!",
          "Always check normality before testing variances (Q-Q plot, Shapiro-Wilk test)",
          "Bartlett's test: Tests if multiple groups have equal variances (extension of F-test)",
          "Variance tests typically need LARGER samples for the same power as mean tests"
        ],
        realWorldExample: `📊 If your data has heavy tails (like income data — few very rich people), the χ² test for variance can give completely wrong results! Check normality FIRST. If non-normal → consider nonparametric alternatives like Levene's test.`
      },
      {
        heading: "Quick Reference — Which Test to Use?",
        icon: "🗺️",
        story: `A handy decision flowchart for your exam:`,
        keyPoints: [
          "Testing ONE variance: χ² test → χ²_cal = (n−1)S²/σ₀²",
          "Comparing TWO variances: F-test → F = S₁²/S₂²",
          "Testing MULTIPLE variances: Bartlett's or Levene's test",
          "",
          "CI for ONE variance: Use χ² critical values (asymmetric!)",
          "CI for RATIO of two variances: Use F critical values",
          "",
          "Key difference from mean tests:",
          "  • Mean tests use Z or t (symmetric distributions)",
          "  • Variance tests use χ² or F (skewed distributions!)"
        ],
        realWorldExample: `🧠 Exam tip: If the question asks about SPREAD, CONSISTENCY, or VARIABILITY → it's a variance problem! Use χ² (one variance) or F (two variances).`
      }
    ]
  }
];

export default studyGuides;

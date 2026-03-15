const note01 = {
  id: 1,
  title: "Note 01 – Probability Distributions",
  questions: [
    {
      id: 1,
      question: "What is a random variable?",
      options: [
        "A constant value assigned to an experiment",
        "A function that assigns a numerical value to each possible outcome of a random experiment",
        "A variable that always takes the value zero",
        "A variable that can only be positive"
      ],
      correct: 1,
      explanation: "A random variable is a function that assigns a numerical value to each possible outcome of a random experiment. For example, X = number of tails obtained when tossing a coin once."
    },
    {
      id: 2,
      question: "Which of the following is a discrete random variable?",
      options: [
        "Height of a student (in cm)",
        "Weight of a fruit (in kg)",
        "Number of heads obtained when tossing a coin three times",
        "Time taken to complete an exam"
      ],
      correct: 2,
      explanation: "The number of heads obtained when tossing a coin three times is a discrete random variable because it can only take countable values: X ∈ {0, 1, 2, 3}. Height, weight, and time are continuous random variables."
    },
    {
      id: 3,
      question: "When tossing a coin three times, what is the sample space?",
      options: [
        "S = {H, T}",
        "S = {HH, HT, TH, TT}",
        "S = {HHH, HHT, HTH, THH, HTT, THT, TTH, TTT}",
        "S = {0, 1, 2, 3}"
      ],
      correct: 2,
      explanation: "When tossing a coin three times, the sample space S = {HHH, HHT, HTH, THH, HTT, THT, TTH, TTT}. There are 2³ = 8 possible outcomes."
    },
    {
      id: 4,
      question: "When tossing a coin three times with X = number of heads, what values can X take?",
      options: [
        "X ∈ {0, 1}",
        "X ∈ {1, 2, 3}",
        "X ∈ {0, 1, 2, 3}",
        "X ∈ {0, 1, 2, 3, 4}"
      ],
      correct: 2,
      explanation: "When tossing a coin 3 times with X = number of heads, X can be 0 (TTT), 1 (HTT, THT, TTH), 2 (HHT, HTH, THH), or 3 (HHH). So X ∈ {0, 1, 2, 3}."
    },
    {
      id: 5,
      question: "When rolling a die once, if X = number shown on the die, what is the sample space?",
      options: [
        "S = {1, 2, 3, 4, 5, 6}",
        "S = {0, 1, 2, 3, 4, 5}",
        "S = {1, 2, 3}",
        "S = {0, 1}"
      ],
      correct: 0,
      explanation: "When rolling a die once, the sample space S = {1, 2, 3, 4, 5, 6}, and X ∈ {1, 2, 3, 4, 5, 6}."
    },
    {
      id: 6,
      question: "When inspecting 2 light bulbs (D = defective, N = not defective), if X = number of defective bulbs, the sample space is?",
      options: [
        "S = {D, N}",
        "S = {DD, DN, ND, NN}",
        "S = {0, 1, 2}",
        "S = {DD, NN}"
      ],
      correct: 1,
      explanation: "When inspecting 2 light bulbs, S = {DD, DN, ND, NN}. The random variable X (number of defective bulbs) takes values X ∈ {0, 1, 2}."
    },
    {
      id: 7,
      question: "Which of the following is an example of a continuous random variable?",
      options: [
        "Number of defective bulbs in a sample",
        "Number of heads in coin tosses",
        "Height of a student (in cm)",
        "Number shown on a die"
      ],
      correct: 2,
      explanation: "Height of a student is a continuous random variable (e.g., X ∈ [140, 190] cm). It can take any value within a range, unlike discrete variables which take countable values."
    },
    {
      id: 8,
      question: "For a continuous random variable 'Time taken to complete an exam (in minutes)', the sample space could be?",
      options: [
        "S = {0, 1, 2, ..., 180}",
        "S = {x ∈ R | 0 < x ≤ 180}",
        "S = {30, 60, 90, 120, 150, 180}",
        "S = {x ∈ R | x > 0}"
      ],
      correct: 1,
      explanation: "Time taken to complete an exam is a continuous random variable. The sample space is S = {x ∈ R | 0 < x ≤ 180}, meaning any real value between 0 and 180 minutes."
    },
    {
      id: 9,
      question: "When tossing two fair coins simultaneously with X = number of heads, what is P(X = 1)?",
      options: [
        "1/4",
        "1/2",
        "3/4",
        "1"
      ],
      correct: 1,
      explanation: "S = {(H,H), (H,T), (T,H), (T,T)}. P(X=1) = 2/4 = 1/2, since two outcomes (H,T) and (T,H) give exactly 1 head."
    },
    {
      id: 10,
      question: "When tossing two fair coins, what is P(X ≥ 1)?",
      options: [
        "1/4",
        "1/2",
        "3/4",
        "1"
      ],
      correct: 2,
      explanation: "P(X ≥ 1) = P(X=1) + P(X=2) = 2/4 + 1/4 = 3/4. Three out of four outcomes have at least one head: (H,T), (T,H), (H,H)."
    },
    {
      id: 11,
      question: "The probability function P(X = x) = f(x) for discrete random variables is called?",
      options: [
        "Probability Density Function",
        "Probability Mass Function",
        "Cumulative Distribution Function",
        "Survival Function"
      ],
      correct: 1,
      explanation: "For discrete random variables, P(X = x) = f(x) is called the Probability Mass Function (PMF). For continuous random variables, it is called the Probability Density Function (PDF)."
    },
    {
      id: 12,
      question: "For any discrete probability distribution, which of the following must be true?",
      options: [
        "∑P(X = x) = 0",
        "0 ≤ P(X = x) ≤ 1 and ∑P(X = x) = 1",
        "P(X = x) can be negative",
        "∑P(X = x) can be greater than 1"
      ],
      correct: 1,
      explanation: "For any discrete probability distribution: (1) The probability lies between 0 and 1: 0 ≤ P(X = x) ≤ 1, and (2) Sum of all probabilities equals 1: ∑P(X = x) = 1."
    },
    {
      id: 13,
      question: "When tossing a fair coin twice with X = number of heads, the cumulative probability F(X = 1) is?",
      options: [
        "1/4",
        "2/4",
        "3/4",
        "4/4"
      ],
      correct: 2,
      explanation: "F(X=1) = P(X ≤ 1) = P(X=0) + P(X=1) = 1/4 + 2/4 = 3/4. The cumulative probability is the sum of probabilities up to and including that value."
    },
    {
      id: 14,
      question: "Given the distribution: X = {0,1,2,3} with P(X) = {1/10, 2/10, 4/10, 3/10}, what is E(X)?",
      options: [
        "1.5",
        "1.9",
        "2.0",
        "2.5"
      ],
      correct: 1,
      explanation: "E(X) = 0(1/10) + 1(2/10) + 2(4/10) + 3(3/10) = 0 + 0.2 + 0.8 + 0.9 = 1.9."
    },
    {
      id: 15,
      question: "In a Discrete Uniform Distribution, what is the key property?",
      options: [
        "One outcome has higher probability than others",
        "Each possible value has equal probability",
        "The probability increases with value",
        "Only two outcomes are possible"
      ],
      correct: 1,
      explanation: "In a discrete uniform distribution, each possible value has equal probability. For example, if X can take values 0-9, each has probability 1/10."
    },
    {
      id: 16,
      question: "If X has a discrete uniform distribution over {0,1,2,...,9}, what is P(X = 5)?",
      options: [
        "1/5",
        "1/9",
        "1/10",
        "5/10"
      ],
      correct: 2,
      explanation: "In a discrete uniform distribution with 10 equally likely outcomes (0 to 9), each outcome has probability 1/10."
    },
    {
      id: 17,
      question: "A Bernoulli distribution models which scenario?",
      options: [
        "The number of successes in n trials",
        "A single trial with two outcomes (success/failure)",
        "The waiting time for the first success",
        "The number of events in a fixed time period"
      ],
      correct: 1,
      explanation: "A Bernoulli distribution models a single trial that results in success (with probability p) or failure (with probability 1-p). The random variable X takes values 0 or 1."
    },
    {
      id: 18,
      question: "In a Binomial Distribution X ~ Bin(n, p), what does X represent?",
      options: [
        "The probability of success in one trial",
        "The number of trials",
        "The number of successes in n independent trials",
        "The time between successes"
      ],
      correct: 2,
      explanation: "In a Binomial distribution, X represents the number of successes (like heads) in n independent trials, where each trial has probability p of success."
    },
    {
      id: 19,
      question: "A die is tossed 3 times. What distribution models the number of fives obtained?",
      options: [
        "Poisson distribution",
        "Binomial distribution with n=3, p=1/6",
        "Geometric distribution",
        "Uniform distribution"
      ],
      correct: 1,
      explanation: "Since we have n=3 independent trials, each with probability p=1/6 of getting a five, this follows a Binomial distribution: X ~ Bin(3, 1/6)."
    },
    {
      id: 20,
      question: "In a Hypergeometric distribution, which condition is true compared to Binomial?",
      options: [
        "Sampling is done with replacement",
        "Sampling is done without replacement from a finite population",
        "Trials are independent",
        "The probability of success is constant"
      ],
      correct: 1,
      explanation: "The Hypergeometric distribution models sampling WITHOUT replacement from a finite population of size N containing M defective items, where n items are drawn."
    },
    {
      id: 21,
      question: "For a Hypergeometric distribution: N=52 (deck), M=26 (red cards), n=5 cards drawn. What is P(X=2)?",
      options: [
        "P(X=2) = C(26,2)×C(26,3) / C(52,5)",
        "P(X=2) = C(52,2)×C(26,3) / C(26,5)",
        "P(X=2) = C(26,2) / C(52,5)",
        "P(X=2) = 2/52"
      ],
      correct: 0,
      explanation: "P(X=2) = C(M,x)×C(N-M, n-x) / C(N,n) = C(26,2)×C(26,3) / C(52,5). We choose 2 red from 26 red and 3 non-red from 26 non-red."
    },
    {
      id: 22,
      question: "The Poisson distribution is best used to model?",
      options: [
        "The number of successes in a fixed number of trials",
        "The number of events occurring within a fixed period of time",
        "The weight of items in a sample",
        "The height of individuals in a population"
      ],
      correct: 1,
      explanation: "The Poisson distribution models the number of events occurring within a fixed period of time. It can also approximate Binomial probabilities when n is large and p is small."
    },
    {
      id: 23,
      question: "A salesman sells on average 3 policies per week. Using Poisson's law, what is P(X=0)?",
      options: [
        "e⁻³ × 3⁰ / 0! = e⁻³ ≈ 0.0498",
        "3⁰ / 0! = 1",
        "1 - e⁻³",
        "3/e³"
      ],
      correct: 0,
      explanation: "Using Poisson formula P(X=k) = e^(-λ) × λ^k / k!, with λ=3: P(X=0) = e⁻³ × 3⁰ / 0! = e⁻³ ≈ 0.0498."
    },
    {
      id: 24,
      question: "In a Geometric distribution, X represents?",
      options: [
        "The number of successes in n trials",
        "The number of trials until the first success",
        "The number of failures only",
        "The total number of events in a time period"
      ],
      correct: 1,
      explanation: "In a Geometric distribution, X is the number of tosses (trials) needed before a success occurs for the first time. P(X=k) = (1-p)^(k-1) × p."
    },
    {
      id: 25,
      question: "A farmer tests milk quality. Each test passes with probability 0.2 (independent). What is P(first success on 4th test)?",
      options: [
        "(0.8)³ × 0.2 = 0.1024",
        "(0.2)³ × 0.8 = 0.0064",
        "(0.8)⁴ = 0.4096",
        "4 × 0.2 = 0.8"
      ],
      correct: 0,
      explanation: "Using Geometric distribution: P(X=4) = (1-p)^(4-1) × p = (0.8)³ × 0.2 = 0.512 × 0.2 = 0.1024. The first 3 tests fail, and the 4th succeeds."
    },
    {
      id: 26,
      question: "In a Negative Binomial distribution, X denotes?",
      options: [
        "The number of successes in n trials",
        "The number of trials until the r-th success",
        "The number of failures only",
        "The probability of the first success"
      ],
      correct: 1,
      explanation: "In a Negative Binomial distribution, X denotes the number of trials until the r-th success occurs."
    },
    {
      id: 27,
      question: "For a Continuous Uniform Distribution on [a, b], the PDF f(x) is?",
      options: [
        "f(x) = 1/(b-a) for a ≤ x ≤ b",
        "f(x) = (b-a) for all x",
        "f(x) = x/(b-a)",
        "f(x) = 1/b"
      ],
      correct: 0,
      explanation: "For a continuous uniform distribution on [a, b], f(x) = 1/(b-a) for a ≤ x ≤ b, and f(x) = 0 otherwise. Every point in the interval is equally likely."
    },
    {
      id: 28,
      question: "For a Uniform distribution on [10, 30] (elevator wait time in seconds), what is E(X)?",
      options: [
        "10",
        "15",
        "20",
        "30"
      ],
      correct: 2,
      explanation: "For a uniform distribution on [a, b], E(X) = (a + b)/2 = (10 + 30)/2 = 20 seconds."
    },
    {
      id: 29,
      question: "A Normal distribution is denoted as X ~ N(μ, σ²). What do μ and σ² represent?",
      options: [
        "μ = variance, σ² = mean",
        "μ = mean, σ² = variance",
        "μ = standard deviation, σ² = mean",
        "μ = proportion, σ² = sample size"
      ],
      correct: 1,
      explanation: "In X ~ N(μ, σ²), μ is the mean (center of the distribution) and σ² is the variance. The standard deviation σ is the square root of the variance."
    },
    {
      id: 30,
      question: "According to the Empirical Rule for a Normal distribution, approximately what percentage of data falls within μ ± 2σ?",
      options: [
        "68%",
        "90%",
        "95%",
        "99.7%"
      ],
      correct: 2,
      explanation: "The Empirical Rule states: ~68% within μ ± 1σ, ~95% within μ ± 2σ, and ~99.7% within μ ± 3σ."
    },
    {
      id: 31,
      question: "If the mean age of a population is 50 with standard deviation 5, what proportion of people are between ages 40 and 60?",
      options: [
        "68%",
        "90%",
        "95%",
        "99.7%"
      ],
      correct: 2,
      explanation: "40 to 60 is 50 ± 2×5 = μ ± 2σ. By the Empirical Rule, approximately 95% of the population falls within this range."
    },
    {
      id: 32,
      question: "The Z-score formula for standardizing a normal distribution is?",
      options: [
        "Z = (x + μ) / σ",
        "Z = (x - μ) / σ",
        "Z = σ / (x - μ)",
        "Z = (μ - x) × σ"
      ],
      correct: 1,
      explanation: "The Z-score formula is Z = (x - μ) / σ. It converts any normal distribution to a standard normal distribution N(0,1)."
    },
    {
      id: 33,
      question: "If Z = 1.6, then using the standard normal Z-table, P(Z ≤ 1.6) ≈?",
      options: [
        "0.8000",
        "0.9000",
        "0.9452",
        "0.9750"
      ],
      correct: 2,
      explanation: "From the Z-table, P(Z ≤ 1.6) ≈ 0.9452. This means about 94.52% of values in a standard normal distribution are below Z = 1.6."
    },
    {
      id: 34,
      question: "The Exponential distribution models?",
      options: [
        "The number of events in a time period",
        "The waiting time between events",
        "The number of successes in n trials",
        "The height of individuals"
      ],
      correct: 1,
      explanation: "The Exponential distribution models the waiting time between events. For example, waiting time for the next car exceeding the speed limit."
    },
    {
      id: 35,
      question: "At a highway location, 8.4 cars exceed speed per half hour. The rate λ per minute is?",
      options: [
        "8.4",
        "4.2",
        "0.28",
        "0.14"
      ],
      correct: 2,
      explanation: "λ = 8.4 cars / 30 minutes = 0.28 cars per minute. This rate is used in the exponential PDF: f(x) = λe^(-λx) = 0.28e^(-0.28x)."
    },
    {
      id: 36,
      question: "For the exponential distribution with λ = 0.28, what is f(X = 5 minutes)?",
      options: [
        "0.28 × e^(-0.28×5) ≈ 0.07",
        "0.28 × e^(-5) ≈ 0.002",
        "e^(-0.28) ≈ 0.756",
        "5 × 0.28 = 1.4"
      ],
      correct: 0,
      explanation: "f(X = 5) = λe^(-λx) = 0.28 × e^(-0.28×5) = 0.28 × e^(-1.4) ≈ 0.28 × 0.2466 ≈ 0.07."
    },
    {
      id: 37,
      question: "Which distribution can be approximated by the Poisson distribution?",
      options: [
        "Normal distribution when n is large",
        "Binomial distribution when n is large and p is small",
        "Uniform distribution always",
        "Exponential distribution when λ is large"
      ],
      correct: 1,
      explanation: "Poisson distribution can effectively approximate Binomial probabilities when the number of trials n is large and the probability of success p is small."
    },
    {
      id: 38,
      question: "For X ~ N(50, 25), what is the standard deviation?",
      options: [
        "50",
        "25",
        "5",
        "625"
      ],
      correct: 2,
      explanation: "X ~ N(μ, σ²) means μ = 50 and σ² = 25. The standard deviation σ = √25 = 5."
    },
    {
      id: 39,
      question: "According to the Empirical Rule, approximately what percentage of data falls within μ ± 1σ?",
      options: [
        "50%",
        "68%",
        "95%",
        "99.7%"
      ],
      correct: 1,
      explanation: "The Empirical Rule: approximately 68% of data falls within μ ± 1σ, 95% within μ ± 2σ, and 99.7% within μ ± 3σ."
    },
    {
      id: 40,
      question: "Which of the following is NOT a discrete probability distribution?",
      options: [
        "Binomial distribution",
        "Poisson distribution",
        "Normal distribution",
        "Geometric distribution"
      ],
      correct: 2,
      explanation: "The Normal distribution is a continuous probability distribution. Binomial, Poisson, and Geometric distributions are all discrete."
    },
    {
      id: 41,
      question: "For a Negative Binomial: P(3rd acceptable on 7th test) with p=0.3, we need?",
      options: [
        "Exactly 2 successes in first 6 tests, then success on 7th",
        "Exactly 3 successes in 7 tests",
        "At most 3 successes in 7 tests",
        "7 failures then 3 successes"
      ],
      correct: 0,
      explanation: "The Negative Binomial requires exactly (r-1) = 2 successes in the first (x-1) = 6 trials, then the r-th = 3rd success on the x-th = 7th trial."
    },
    {
      id: 42,
      question: "The variance of a Uniform distribution on [a, b] is?",
      options: [
        "(b - a) / 12",
        "(b - a)² / 12",
        "(a + b) / 2",
        "(b - a) / 2"
      ],
      correct: 1,
      explanation: "For a continuous uniform distribution on [a, b], the variance is V(X) = (b - a)² / 12."
    },
    {
      id: 43,
      question: "For the Binomial distribution X ~ Bin(n, p), what is E(X)?",
      options: [
        "n + p",
        "np",
        "n/p",
        "p/n"
      ],
      correct: 1,
      explanation: "For a Binomial distribution, E(X) = np. For example, if n=10 and p=0.5, E(X) = 5."
    },
    {
      id: 44,
      question: "For the Binomial distribution X ~ Bin(n, p), what is V(X)?",
      options: [
        "np",
        "np(1-p)",
        "np²",
        "n(1-p)"
      ],
      correct: 1,
      explanation: "For a Binomial distribution, V(X) = npq = np(1-p). The variance depends on both the number of trials and the probability."
    },
    {
      id: 45,
      question: "For a Poisson distribution with parameter λ, the mean and variance are?",
      options: [
        "Mean = λ, Variance = λ²",
        "Mean = λ², Variance = λ",
        "Mean = λ, Variance = λ",
        "Mean = 1/λ, Variance = 1/λ²"
      ],
      correct: 2,
      explanation: "A unique property of the Poisson distribution is that both the mean and variance equal λ: E(X) = V(X) = λ."
    },
    // ─── Missing: Continuous PDF theory ───
    {
      id: 46,
      question: "For a continuous random variable, what is P(X = x) for any single point x?",
      options: ["1", "0.5", "0", "Depends on the distribution"],
      correct: 2,
      explanation: "For continuous random variables, the probability at any single exact point is always 0. Probabilities are only meaningful over intervals: P(a ≤ X ≤ b) = ∫ₐᵇ f(x)dx."
    },
    {
      id: 47,
      question: "For a valid continuous probability density function f(x), which must be true?",
      options: [
        "f(x) ≥ 0 for all x, and ∫f(x)dx over entire range = 1",
        "f(x) = 1 for all x",
        "f(x) can be negative if it integrates to 1",
        "∫f(x)dx = 0"
      ],
      correct: 0,
      explanation: "Two conditions for a valid PDF: (1) f(x) ≥ 0 for all x (non-negative), and (2) the total area under the curve equals 1: ∫₋∞^∞ f(x)dx = 1."
    },
    // ─── Missing: Geometric Distribution formulas ───
    {
      id: 48,
      question: "The PMF of the Geometric distribution is P(X = k) = ?",
      options: [
        "(1-p)^(k-1) × p",
        "p^k × (1-p)",
        "C(n,k) × p^k × (1-p)^(n-k)",
        "(1-p)^k × p"
      ],
      correct: 0,
      explanation: "Geometric PMF: P(X=k) = (1-p)^(k-1) × p, where k is the trial on which the first success occurs. We have k-1 failures followed by 1 success."
    },
    {
      id: 49,
      question: "For a Geometric distribution with parameter p, E(X) and V(X) are:",
      options: [
        "E(X) = 1/p, V(X) = (1-p)/p²",
        "E(X) = p, V(X) = p(1-p)",
        "E(X) = 1/p, V(X) = 1/p²",
        "E(X) = p/(1-p), V(X) = p"
      ],
      correct: 0,
      explanation: "Geometric distribution: E(X) = 1/p (expected number of trials until first success), V(X) = (1-p)/p². For example, if p=0.2: E(X)=5 trials, V(X)=20."
    },
    // ─── Missing: Negative Binomial formulas ───
    {
      id: 50,
      question: "For a Negative Binomial distribution with parameters r and p, E(X) = ?",
      options: [
        "r/p",
        "rp",
        "r(1-p)",
        "1/p"
      ],
      correct: 0,
      explanation: "Negative Binomial E(X) = r/p. This is the expected number of trials to get r successes. V(X) = r(1-p)/p²."
    },
    // ─── Missing: Hypergeometric E(X) ───
    {
      id: 51,
      question: "For a Hypergeometric distribution (N total, M successes, n drawn), E(X) = ?",
      options: [
        "n × (M/N)",
        "n × p",
        "M/n",
        "N × (M/n)"
      ],
      correct: 0,
      explanation: "Hypergeometric E(X) = n × (M/N), where M/N is the proportion of successes in the population. This is similar to Binomial E(X) = np where p = M/N."
    },
    // ─── Missing: Normal distribution properties ───
    {
      id: 52,
      question: "In a normal distribution, the relationship between mean, median, and mode is:",
      options: [
        "Mean = Median = Mode",
        "Mean > Median > Mode",
        "Mode > Median > Mean",
        "They are unrelated"
      ],
      correct: 0,
      explanation: "The normal distribution is perfectly symmetric, so Mean = Median = Mode = μ. All three measures of central tendency coincide at the center."
    },
    // ─── Missing: Exponential CDF ───
    {
      id: 53,
      question: "The CDF of the Exponential distribution is F(x) = P(X ≤ x) = ?",
      options: [
        "1 - e^(-λx) for x ≥ 0",
        "e^(-λx) for x ≥ 0",
        "λe^(-λx) for x ≥ 0",
        "1 - λe^(-λx)"
      ],
      correct: 0,
      explanation: "Exponential CDF: F(x) = 1 - e^(-λx). The PDF is f(x) = λe^(-λx). To get CDF, integrate the PDF: ∫₀ˣ λe^(-λt)dt = 1 - e^(-λx)."
    },
    // ─── Missing: Poisson-Exponential connection ───
    {
      id: 54,
      question: "If events occur according to a Poisson process with rate λ per unit time, the waiting time between events follows:",
      options: [
        "Exponential distribution with parameter λ",
        "Normal distribution",
        "Binomial distribution",
        "Geometric distribution"
      ],
      correct: 0,
      explanation: "The Poisson process and Exponential distribution are connected: if events per unit time ~ Poisson(λ), then inter-arrival times ~ Exponential(λ)."
    },
    // ─── Missing: Continuous Uniform CDF ───
    {
      id: 55,
      question: "For a Continuous Uniform distribution on [a, b], what is P(c ≤ X ≤ d) where a ≤ c ≤ d ≤ b?",
      options: [
        "(d - c)/(b - a)",
        "(b - a)/(d - c)",
        "(d - c) × (b - a)",
        "1/(d - c)"
      ],
      correct: 0,
      explanation: "For Uniform[a,b]: P(c ≤ X ≤ d) = (d-c)/(b-a). The CDF is F(x) = (x-a)/(b-a). It's simply the proportion of the interval."
    },
    // ─── Missing: Z-score negative values & multi-step ───
    {
      id: 56,
      question: "If X ~ N(100, 25), what is P(X ≤ 95)?",
      options: [
        "P(Z ≤ -1) ≈ 0.1587",
        "P(Z ≤ 1) ≈ 0.8413",
        "P(Z ≤ -0.5) ≈ 0.3085",
        "P(Z ≤ 0.5) ≈ 0.6915"
      ],
      correct: 0,
      explanation: "σ = √25 = 5. Z = (95-100)/5 = -1. P(X ≤ 95) = P(Z ≤ -1) ≈ 0.1587 from the Z-table."
    },
    {
      id: 57,
      question: "Using the Z-table, P(Z ≤ -a) can be found using the symmetry property as:",
      options: [
        "1 - P(Z ≤ a)",
        "P(Z ≤ a)",
        "P(Z ≥ a)",
        "-P(Z ≤ a)"
      ],
      correct: 0,
      explanation: "By symmetry of the standard normal: P(Z ≤ -a) = 1 - P(Z ≤ a). For example, P(Z ≤ -1.5) = 1 - P(Z ≤ 1.5) = 1 - 0.9332 = 0.0668."
    },
    // ─── Missing: Binomial coefficient ───
    {
      id: 58,
      question: "The binomial coefficient C(n, k) = n!/(k!(n-k)!) represents:",
      options: [
        "The number of ways to choose k items from n items",
        "The probability of k successes",
        "n multiplied by k",
        "The variance of the distribution"
      ],
      correct: 0,
      explanation: "C(n,k), also written as (n choose k), counts the number of ways to select k items from n distinct items regardless of order. Example: C(5,2) = 5!/(2!×3!) = 10."
    },
    // ─── Missing: Poisson range calculation ───
    {
      id: 59,
      question: "A salesman sells an average of 3 policies per week (Poisson). P(2 ≤ X ≤ 4) = ?",
      options: [
        "P(X=2) + P(X=3) + P(X=4)",
        "P(X=4) - P(X=2)",
        "P(X ≤ 4)",
        "1 - P(X ≤ 1)"
      ],
      correct: 0,
      explanation: "P(2 ≤ X ≤ 4) = P(X=2) + P(X=3) + P(X=4). For range probabilities, sum the individual PMF values. Each P(X=k) = e^(-3) × 3^k / k!."
    },
    // ─── Missing: Normal PDF formula recognition ───
    {
      id: 60,
      question: "In the Normal PDF formula f(x) = (1/(σ√(2π))) × e^(-(x-μ)²/(2σ²)), what does σ control?",
      options: [
        "The spread (width) of the bell curve",
        "The center (location) of the curve",
        "The height of the peak only",
        "The skewness of the curve"
      ],
      correct: 0,
      explanation: "σ (standard deviation) controls the spread/width of the normal curve. Larger σ → wider, flatter curve. μ controls the center (location). The curve is always symmetric."
    }
  ]
};

export default note01;

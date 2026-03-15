const pafLectures = [
  {
    id: 1,
    title: "PAF Note 01 – Software Frameworks",
    questions: [
      {
        id: 1,
        question: "What is the main difference between programming and software engineering?",
        options: [
          "Programming includes deployment and maintenance, but software engineering does not",
          "Programming is only writing code, while software engineering covers the full process from requirements to maintenance",
          "Programming is for teams, while software engineering is for individuals",
          "There is no real difference"
        ],
        correct: 1,
        explanation: "Programming focuses on writing code. Software engineering covers requirements, design, communication, QA, deployment, and maintenance as well."
      },
      {
        id: 2,
        question: "Which of the following is a generic functionality commonly reused in many applications?",
        options: [
          "Authentication",
          "CPU instruction decoding",
          "Machine firmware flashing",
          "BIOS configuration"
        ],
        correct: 0,
        explanation: "Authentication is a common feature across many applications, which is why frameworks often provide it."
      },
      {
        id: 3,
        question: "A software framework is best described as:",
        options: [
          "A single utility function for one task",
          "A reusable architecture and set of software artifacts for related applications",
          "A database server",
          "A replacement for programming languages"
        ],
        correct: 1,
        explanation: "Frameworks provide reusable architecture, components, and conventions for building families of related applications."
      },
      {
        id: 4,
        question: "What does Inversion of Control mean in frameworks?",
        options: [
          "The user fully controls the global flow of the program",
          "The framework controls the global flow, and user code plugs into it",
          "Only the database controls the program",
          "The application cannot be extended"
        ],
        correct: 1,
        explanation: "Inversion of Control means the framework owns the main flow of execution and calls user code at the appropriate points."
      },
      {
        id: 5,
        question: "Which statement best distinguishes a framework from a library?",
        options: [
          "A framework usually enforces structure and default behavior",
          "A library always controls the full application flow",
          "A library cannot be reused",
          "A framework cannot contain code"
        ],
        correct: 0,
        explanation: "Frameworks provide structure, conventions, and default behavior, while libraries are typically called when the developer chooses."
      },
      {
        id: 6,
        question: "Why do frameworks help developers avoid 'reinventing the wheel'?",
        options: [
          "They remove the need to test code",
          "They provide reusable solutions for common development problems",
          "They automatically generate all business logic",
          "They replace databases"
        ],
        correct: 1,
        explanation: "Frameworks package common solutions such as routing, authentication, and configuration so developers do not reimplement them repeatedly."
      },
      {
        id: 7,
        question: "Which of the following is mentioned as an advantage of frameworks?",
        options: [
          "Guaranteed zero bugs",
          "Improved code reusability and faster development",
          "No learning curve",
          "Unlimited customization without constraints"
        ],
        correct: 1,
        explanation: "Frameworks speed up development through reusable structure and standard tools, though they still have trade-offs."
      },
      {
        id: 8,
        question: "Which of the following is a limitation of using frameworks?",
        options: [
          "They may force developers to follow framework conventions",
          "They eliminate performance tuning completely",
          "They always reduce project size",
          "They remove the need to understand application architecture"
        ],
        correct: 0,
        explanation: "Frameworks impose conventions and can limit how much developers tweak behavior."
      },
      {
        id: 9,
        question: "Which Java framework was mentioned in the lecture?",
        options: [
          "Django",
          "Laravel",
          "Spring Boot",
          "Vue.js"
        ],
        correct: 2,
        explanation: "Spring and Spring Boot were given as examples of Java frameworks."
      },
      {
        id: 10,
        question: "Which architectural pattern was mentioned as commonly supported by frameworks?",
        options: [
          "MVC",
          "Heap Sort",
          "Round Robin Scheduling",
          "Deadlock Prevention"
        ],
        correct: 0,
        explanation: "Frameworks often implement or encourage architectural patterns such as MVC and MVVM."
      },
      {
        id: 11,
        question: "Why can choosing the wrong framework harm a project?",
        options: [
          "Because all frameworks are identical",
          "Because a poor framework choice can reduce performance and user experience",
          "Because frameworks never support teams",
          "Because frameworks cannot be updated"
        ],
        correct: 1,
        explanation: "A framework that does not fit the project can lead to unnecessary complexity, performance issues, and poor UX."
      },
      {
        id: 12,
        question: "What kind of support do frameworks often provide beyond core code?",
        options: [
          "Package managers, dependency management, and tooling",
          "Free hardware upgrades",
          "Automatic legal approval",
          "Unlimited cloud hosting"
        ],
        correct: 0,
        explanation: "Framework ecosystems usually include tooling, dependency management, and code generation support."
      }
    ]
  },
  {
    id: 2,
    title: "PAF Note 02 – Version Controlling and Workflows with Git I",
    questions: [
      {
        id: 1,
        question: "What is version control?",
        options: [
          "A system for recording file changes over time so versions can be recalled later",
          "A technique for deleting old files",
          "A type of cloud storage only",
          "A method for compiling code"
        ],
        correct: 0,
        explanation: "Version control records changes over time and lets users go back to earlier versions when needed."
      },
      {
        id: 2,
        question: "What was one weakness of manual file naming approaches like file_v1, file_v2?",
        options: [
          "They are too automated",
          "They are error-prone and difficult to manage reliably",
          "They prevent backups",
          "They make computers faster"
        ],
        correct: 1,
        explanation: "Manual version naming depends on human discipline and becomes confusing and error-prone quickly."
      },
      {
        id: 3,
        question: "Which of the following is the correct order of VCS evolution?",
        options: [
          "Distributed → Centralized → Local",
          "Local → Centralized → Distributed",
          "Centralized → Distributed → Local",
          "Local → Distributed → Centralized"
        ],
        correct: 1,
        explanation: "The lecture described the progression from local VCS to centralized VCS and then to distributed VCS."
      },
      {
        id: 4,
        question: "What is a key property of a distributed version control system like Git?",
        options: [
          "It requires permanent internet access to commit",
          "Every user has a full local repository",
          "Only one user can work at a time",
          "It has no branches"
        ],
        correct: 1,
        explanation: "In a DVCS like Git, each developer has a full local copy of the repository and its history."
      },
      {
        id: 5,
        question: "Which statement about Git and GitHub is correct?",
        options: [
          "Git and GitHub are the same thing",
          "Git is the VCS tool, while GitHub hosts remote repositories",
          "GitHub is the programming language and Git is the website",
          "Neither one stores code history"
        ],
        correct: 1,
        explanation: "Git is the actual version control system, while GitHub is a hosting platform built around Git repositories."
      },
      {
        id: 6,
        question: "A commit in Git is:",
        options: [
          "A screenshot of code only",
          "A snapshot of changes recorded in the repository",
          "A remote server",
          "A folder used for staging"
        ],
        correct: 1,
        explanation: "A commit is a saved snapshot of changes in the repository at a specific point in time."
      },
      {
        id: 7,
        question: "What uniquely identifies a commit?",
        options: [
          "A password",
          "A SHA-1 based commit ID",
          "A branch color",
          "A local file name"
        ],
        correct: 1,
        explanation: "Each Git commit has a unique SHA-1 based identifier."
      },
      {
        id: 8,
        question: "What does a local repository represent?",
        options: [
          "A copy owned by an individual user on their machine",
          "A public website only",
          "A hardware driver",
          "A deleted backup"
        ],
        correct: 0,
        explanation: "The local repository belongs to the developer and exists on that developer's machine."
      },
      {
        id: 9,
        question: "Why is a remote repository useful?",
        options: [
          "It acts as a shared single source of truth for collaboration",
          "It removes the need for local copies",
          "It prevents version history",
          "It replaces commits"
        ],
        correct: 0,
        explanation: "The remote repository acts as the team's shared synchronization point and source of truth."
      },
      {
        id: 10,
        question: "Which Git command creates a local copy from a remote repository?",
        options: [
          "git push",
          "git clone",
          "git log",
          "git status"
        ],
        correct: 1,
        explanation: "git clone creates a local repository from a remote repository."
      },
      {
        id: 11,
        question: "Which command sends local commits to the remote repository?",
        options: [
          "git pull",
          "git add",
          "git push",
          "git blame"
        ],
        correct: 2,
        explanation: "git push uploads local commits to the remote repository."
      },
      {
        id: 12,
        question: "What does HEAD normally point to in Git?",
        options: [
          "The oldest commit in the project",
          "The latest commit on the current branch",
          "A deleted branch",
          "The remote server URL"
        ],
        correct: 1,
        explanation: "HEAD points to the latest commit on the currently checked-out branch."
      }
    ]
  },
  {
    id: 3,
    title: "PAF Note 03 – Version Controlling and Workflows with Git II",
    questions: [
      {
        id: 1,
        question: "What is a branch in Git?",
        options: [
          "A hardware component",
          "An isolated line of development",
          "A commit message",
          "A remote login credential"
        ],
        correct: 1,
        explanation: "A branch lets developers work on an isolated line of development without disturbing the main branch."
      },
      {
        id: 2,
        question: "Why are feature branches useful?",
        options: [
          "They keep unfinished work isolated from the main branch",
          "They delete history automatically",
          "They stop code review",
          "They replace pull requests"
        ],
        correct: 0,
        explanation: "Feature branches isolate in-progress work so the main branch stays stable."
      },
      {
        id: 3,
        question: "A merge conflict usually happens when:",
        options: [
          "Two branches change the same area of code in incompatible ways",
          "A repository is empty",
          "A developer commits too often",
          "A branch name is too short"
        ],
        correct: 0,
        explanation: "Merge conflicts arise when Git cannot automatically combine overlapping changes."
      },
      {
        id: 4,
        question: "Which command creates and switches to a new branch in one step?",
        options: [
          "git checkout -b <branch>",
          "git push <branch>",
          "git log -b <branch>",
          "git merge -b <branch>"
        ],
        correct: 0,
        explanation: "git checkout -b creates a new branch and immediately switches to it."
      },
      {
        id: 5,
        question: "What is the main purpose of a Pull Request (PR)?",
        options: [
          "To review and discuss changes before merging",
          "To rename a branch",
          "To delete a repository",
          "To create a local commit"
        ],
        correct: 0,
        explanation: "PRs allow review, feedback, discussion, and approval before changes are merged into the main branch."
      },
      {
        id: 6,
        question: "Which workflow is generally simpler and suitable for many common projects?",
        options: [
          "GitHub Flow",
          "GitFlow only",
          "No-branch workflow",
          "Manual folder versioning"
        ],
        correct: 0,
        explanation: "GitHub Flow is the simpler workflow and fits many common projects well."
      },
      {
        id: 7,
        question: "Which workflow is more comprehensive and often associated with enterprise release management?",
        options: [
          "GitHub Flow",
          "GitFlow",
          "FTP Flow",
          "Main-only Flow"
        ],
        correct: 1,
        explanation: "GitFlow uses multiple branch types such as feature, release, and hotfix branches and is more structured."
      },
      {
        id: 8,
        question: "What is a good best practice before creating a new feature branch?",
        options: [
          "Delete the remote repository",
          "Pull the latest changes from main or origin/main",
          "Work offline for a week",
          "Rename all commits"
        ],
        correct: 1,
        explanation: "Pulling the latest changes before branching reduces merge issues later."
      },
      {
        id: 9,
        question: "Which is a recommended branch naming style from the lecture?",
        options: [
          "branch1",
          "feature/username/task-name",
          "random_branch_name_now",
          "main/feature/feature"
        ],
        correct: 1,
        explanation: "The lecture recommended a structured naming style such as feature/username/task-name."
      },
      {
        id: 10,
        question: "Why should feature branches be short-lived?",
        options: [
          "To reduce merge conflicts and keep work manageable",
          "To avoid writing commit messages",
          "Because Git deletes them automatically",
          "To stop collaboration"
        ],
        correct: 0,
        explanation: "Short-lived branches are easier to review, merge, and keep synchronized with the main branch."
      },
      {
        id: 11,
        question: "What is an atomic commit?",
        options: [
          "A commit that changes everything in the system",
          "A commit focused on one logical change",
          "A commit that cannot be reverted",
          "A commit made by an admin only"
        ],
        correct: 1,
        explanation: "Atomic commits contain one focused logical change, making review and reversion safer."
      },
      {
        id: 12,
        question: "Why is working directly on main usually discouraged?",
        options: [
          "Because main should stay stable and production-ready",
          "Because main cannot accept commits",
          "Because main is always deleted later",
          "Because Git does not support main"
        ],
        correct: 0,
        explanation: "Main should remain clean and production-ready, so new work is safer on feature branches."
      }
    ]
  },
  {
    id: 4,
    title: "PAF Note 04 – Web Application Architecture",
    questions: [
      {
        id: 1,
        question: "What is the main difference between a website and a web application as described in the lecture?",
        options: [
          "A website is always offline",
          "A website mainly delivers content, while a web application is built for user interaction",
          "A website cannot use HTML",
          "A web application cannot use databases"
        ],
        correct: 1,
        explanation: "The lecture distinguishes websites as more content-focused, while web applications are built for richer user interaction."
      },
      {
        id: 2,
        question: "Which layer is usually responsible for the user interface in a three-tier architecture?",
        options: [
          "Database layer",
          "Presentation layer",
          "Storage firmware layer",
          "Kernel layer"
        ],
        correct: 1,
        explanation: "The presentation layer handles the user interface and what the user directly interacts with."
      },
      {
        id: 3,
        question: "Which layer contains business logic in a three-tier architecture?",
        options: [
          "Application layer",
          "Presentation layer",
          "Database layer",
          "Printer layer"
        ],
        correct: 0,
        explanation: "The application layer typically contains business logic, validation, and processing."
      },
      {
        id: 4,
        question: "What is one benefit of separating a system into three tiers?",
        options: [
          "Each tier can evolve and scale more independently",
          "All logic must be duplicated three times",
          "No APIs are needed anymore",
          "Databases are removed"
        ],
        correct: 0,
        explanation: "Three-tier architecture supports separation of concerns, independent development, and independent scaling."
      },
      {
        id: 5,
        question: "What does API stand for?",
        options: [
          "Application Processing Input",
          "Application Programming Interface",
          "Automated Program Integration",
          "Applied Protocol Interface"
        ],
        correct: 1,
        explanation: "API stands for Application Programming Interface."
      },
      {
        id: 6,
        question: "Which architecture pattern separates Model, View, and Controller?",
        options: [
          "MVC",
          "FIFO",
          "BFS",
          "RAID"
        ],
        correct: 0,
        explanation: "MVC stands for Model-View-Controller and separates data, UI, and control logic."
      },
      {
        id: 7,
        question: "Which of the following is a drawback of monolithic architecture?",
        options: [
          "Easy independent scaling of small parts",
          "A small change may require redeploying the whole application",
          "Independent services with separate technology stacks",
          "No coupling between components"
        ],
        correct: 1,
        explanation: "Monoliths often require redeploying the entire system even for small changes."
      },
      {
        id: 8,
        question: "Which statement best describes microservices?",
        options: [
          "One tightly coupled program only",
          "A set of loosely coupled, independently deployable services",
          "A database-only design",
          "A UI-only architecture"
        ],
        correct: 1,
        explanation: "Microservices split the application into smaller independent services."
      },
      {
        id: 9,
        question: "What is a major challenge of microservices according to the lecture?",
        options: [
          "There is no challenge",
          "High global complexity across services",
          "They can never scale",
          "They do not support APIs"
        ],
        correct: 1,
        explanation: "The lecture emphasized that global complexity between services is one of the biggest microservices challenges."
      },
      {
        id: 10,
        question: "What is a 'Big Ball of Mud'?",
        options: [
          "A cloud database product",
          "An architectural anti-pattern with poor structure and separation",
          "A design pattern for APIs",
          "A caching strategy"
        ],
        correct: 1,
        explanation: "Big Ball of Mud is an anti-pattern describing an unstructured system with weak separation of concerns."
      },
      {
        id: 11,
        question: "Which of the following was mentioned as a frontend technology?",
        options: [
          "React.js",
          "PostgreSQL",
          "Redis Sentinel only",
          "Nginx Config Language"
        ],
        correct: 0,
        explanation: "React.js was listed as a presentation layer technology."
      },
      {
        id: 12,
        question: "Why are API gateways used in modern architectures?",
        options: [
          "To help with cross-cutting concerns such as authentication, throttling, caching, and orchestration",
          "To replace every backend service permanently",
          "To remove security rules",
          "To stop frontend communication"
        ],
        correct: 0,
        explanation: "API gateways commonly handle concerns like authentication, throttling, caching, routing, and orchestration."
      }
    ]
  },
  {
    id: 5,
    title: "PAF Note 05 – REST APIs",
    questions: [
      {
        id: 1,
        question: "REST stands for:",
        options: [
          "Remote Execution Standard Transfer",
          "Representational State Transfer",
          "Reliable Service Transport",
          "Resource State Tracking"
        ],
        correct: 1,
        explanation: "REST stands for Representational State Transfer, an architectural style introduced by Roy Fielding."
      },
      {
        id: 2,
        question: "Which REST constraint is optional?",
        options: [
          "Client-Server",
          "Stateless",
          "Code on Demand",
          "Uniform Interface"
        ],
        correct: 2,
        explanation: "Code on Demand is the only optional REST constraint discussed in the lecture."
      },
      {
        id: 3,
        question: "What does stateless mean in REST?",
        options: [
          "The server keeps a large session for every client",
          "Each request contains the information needed for processing without relying on stored server session state",
          "Clients cannot log in",
          "Responses cannot contain JSON"
        ],
        correct: 1,
        explanation: "Statelessness means each request is self-contained and the server does not rely on session context stored between requests."
      },
      {
        id: 4,
        question: "What does cacheable mean in REST?",
        options: [
          "Responses may be marked so they can be reused later when appropriate",
          "Servers must never store any data",
          "Only browsers can use REST",
          "Every request must bypass all caches"
        ],
        correct: 0,
        explanation: "Cacheable responses may be reused for later equivalent requests, improving efficiency and performance."
      },
      {
        id: 5,
        question: "What is HATEOAS?",
        options: [
          "A hypermedia mechanism that lets clients discover valid next actions through links",
          "A hashing algorithm for passwords",
          "A database protocol",
          "A frontend framework"
        ],
        correct: 0,
        explanation: "HATEOAS means Hypermedia As The Engine Of Application State, where responses include links that guide clients."
      },
      {
        id: 6,
        question: "According to the lecture, why are many APIs not considered truly RESTful?",
        options: [
          "Because they use HTTP",
          "Because they omit HATEOAS and behave more like RPC-style APIs",
          "Because they use JSON",
          "Because they have too many resources"
        ],
        correct: 1,
        explanation: "The lecture noted that many so-called REST APIs are actually RPC-style because they do not implement HATEOAS."
      },
      {
        id: 7,
        question: "Which HTTP method is mainly associated with reading a resource?",
        options: [
          "GET",
          "DELETE",
          "PUT",
          "PATCHLESS"
        ],
        correct: 0,
        explanation: "GET is used to retrieve or read resources."
      },
      {
        id: 8,
        question: "Which method is commonly used to create a resource?",
        options: [
          "POST",
          "TRACE",
          "GET",
          "HEAD"
        ],
        correct: 0,
        explanation: "POST is commonly used for creating new resources."
      },
      {
        id: 9,
        question: "Which Richardson Maturity level includes resources, HTTP verbs, and HATEOAS?",
        options: [
          "Level 0",
          "Level 1",
          "Level 2",
          "Level 3"
        ],
        correct: 3,
        explanation: "Level 3 is the highest level in the Richardson Maturity Model and includes HATEOAS."
      },
      {
        id: 10,
        question: "Which of the following is a client error status code family?",
        options: [
          "2XX",
          "3XX",
          "4XX",
          "6XX"
        ],
        correct: 2,
        explanation: "4XX status codes represent client-side errors, such as 400 or 404."
      },
      {
        id: 11,
        question: "Why is a uniform interface important in REST?",
        options: [
          "It removes all need for documentation",
          "It standardizes how resources are identified and manipulated",
          "It forces all servers to use the same language",
          "It only matters for databases"
        ],
        correct: 1,
        explanation: "Uniform interface helps clients interact with resources in a predictable, standardized way."
      },
      {
        id: 12,
        question: "Which format was highlighted as the common lightweight data format in REST APIs?",
        options: [
          "JSON",
          "BMP",
          "MP3",
          "EXE"
        ],
        correct: 0,
        explanation: "JSON was emphasized as the common lightweight and human-readable format for REST API communication."
      }
    ]
  }
];

const extraPafQuestionsByLecture = {
  1: [
    {
      question: "What is a major benefit of framework conventions in team projects?",
      options: [
        "They reduce code review and collaboration effort by standardizing structure",
        "They remove the need for version control",
        "They force every app to use the same database",
        "They make testing impossible"
      ],
      correct: 0,
      explanation: "When all developers follow common structure and conventions, code is easier to understand and review."
    },
    {
      question: "Dependency Injection in frameworks mainly helps to:",
      options: [
        "Hide bugs in production",
        "Reduce coupling by injecting required dependencies instead of hard-coding them",
        "Replace all unit tests",
        "Generate UI screens automatically"
      ],
      correct: 1,
      explanation: "Dependency Injection promotes loose coupling and improves testability."
    },
    {
      question: "When should a team avoid choosing a very heavyweight framework?",
      options: [
        "When the project is very small and simple",
        "When strong conventions are useful",
        "When rapid development is needed",
        "When community support exists"
      ],
      correct: 0,
      explanation: "A heavy framework can add unnecessary complexity for small projects."
    },
    {
      question: "Which of these is a framework trade-off?",
      options: [
        "No updates are ever needed",
        "Learning framework patterns and lifecycle takes time",
        "Security is always perfect by default",
        "All custom requirements are trivial"
      ],
      correct: 1,
      explanation: "Frameworks speed up work but have a learning curve and architectural constraints."
    },
    {
      question: "What does scaffolding usually provide?",
      options: [
        "A fresh project structure and boilerplate code",
        "A production database with customer data",
        "Automatic legal compliance",
        "A replacement for testing"
      ],
      correct: 0,
      explanation: "Scaffolding tools generate starter structure so teams can focus on business logic."
    },
    {
      question: "Why is framework ecosystem maturity important?",
      options: [
        "Because it guarantees zero defects",
        "Because strong tooling, docs, and community reduce project risk",
        "Because old frameworks never change",
        "Because ecosystem size replaces architecture design"
      ],
      correct: 1,
      explanation: "A mature ecosystem gives better documentation, libraries, fixes, and support."
    },
    {
      question: "Which statement about reuse in frameworks is most accurate?",
      options: [
        "Reuse only happens for UI colors",
        "Frameworks enable reuse of architecture, patterns, and common modules",
        "Reuse means copying full apps manually",
        "Reuse is unrelated to maintainability"
      ],
      correct: 1,
      explanation: "Framework reuse includes structural patterns and shared components, not just snippets."
    },
    {
      question: "A suitable framework selection should be based mainly on:",
      options: [
        "Popularity alone",
        "Project requirements, team skills, and long-term maintainability",
        "Logo design",
        "Random choice"
      ],
      correct: 1,
      explanation: "Framework choice must fit technical and team context, not just trends."
    }
  ],
  2: [
    {
      question: "What is the role of Git staging area?",
      options: [
        "It permanently deletes files",
        "It lets you prepare selected changes before commit",
        "It pushes code directly to production",
        "It replaces the remote repository"
      ],
      correct: 1,
      explanation: "Staging allows precise control over what goes into each commit."
    },
    {
      question: "Which command creates a local copy of a remote repository?",
      options: [
        "git clone",
        "git status",
        "git branch",
        "git merge"
      ],
      correct: 0,
      explanation: "git clone downloads a repository with its history to your machine."
    },
    {
      question: "What is a good commit practice?",
      options: [
        "One huge commit at semester end",
        "Small, focused commits with meaningful messages",
        "Commit only binary files",
        "Avoid commit messages"
      ],
      correct: 1,
      explanation: "Small atomic commits improve traceability and review quality."
    },
    {
      question: "Which command shows modified, staged, and untracked files?",
      options: [
        "git log",
        "git status",
        "git remote -v",
        "git config"
      ],
      correct: 1,
      explanation: "git status gives a snapshot of current workspace and staging state."
    },
    {
      question: "What is the main purpose of a remote repository?",
      options: [
        "To act as shared collaboration source for the team",
        "To replace local commits",
        "To disable branching",
        "To store only compiled files"
      ],
      correct: 0,
      explanation: "Remote repos synchronize team work and maintain a common source of truth."
    },
    {
      question: "What risk is reduced by committing frequently?",
      options: [
        "Losing large amounts of uncommitted work",
        "Needing internet access",
        "Having a branch name",
        "Using pull requests"
      ],
      correct: 0,
      explanation: "Frequent commits preserve progress and make rollback easier."
    },
    {
      question: "Which statement best describes git pull?",
      options: [
        "It only lists branches",
        "It fetches and integrates remote changes into your local branch",
        "It deletes remote history",
        "It creates a tag automatically"
      ],
      correct: 1,
      explanation: "git pull combines fetching updates and integrating them into your current branch."
    },
    {
      question: "Why should teams avoid manual file versioning like final_v7_REAL?",
      options: [
        "Because it is too secure",
        "Because it is hard to track history, authorship, and safe rollback",
        "Because it is required by Git",
        "Because it improves merge quality"
      ],
      correct: 1,
      explanation: "Version control systems provide structured, reliable history compared with manual naming."
    }
  ],
  3: [
    {
      question: "What is the primary purpose of a feature branch?",
      options: [
        "To isolate unfinished work from main",
        "To remove need for testing",
        "To avoid code review",
        "To block collaboration"
      ],
      correct: 0,
      explanation: "Feature branches keep main stable while work is in progress."
    },
    {
      question: "A pull request is most useful for:",
      options: [
        "Deleting commit history",
        "Discussion, review, and quality checks before merge",
        "Replacing issue tracking",
        "Deploying directly from local uncommitted files"
      ],
      correct: 1,
      explanation: "PRs enable collaborative review and safer integration."
    },
    {
      question: "What usually causes a merge conflict?",
      options: [
        "Two changes editing overlapping lines differently",
        "Running git status",
        "Creating a branch",
        "Using Markdown files"
      ],
      correct: 0,
      explanation: "Conflicts occur when Git cannot auto-resolve competing edits."
    },
    {
      question: "Why keep feature branches short-lived?",
      options: [
        "To increase future conflict risk",
        "To integrate changes faster and reduce painful merges",
        "To avoid meaningful commit messages",
        "To prevent parallel work"
      ],
      correct: 1,
      explanation: "Smaller, shorter branches merge cleaner and earlier."
    },
    {
      question: "Which workflow is generally simpler for many teams?",
      options: [
        "GitHub Flow",
        "GitFlow with many long-lived branches",
        "No branching",
        "Emailing zip files"
      ],
      correct: 0,
      explanation: "GitHub Flow is lightweight and fits many common project setups."
    },
    {
      question: "What is a healthy commit strategy on branches?",
      options: [
        "Atomic commits focused on one logical change",
        "One commit for the full semester",
        "Commits without messages",
        "Only merge commits"
      ],
      correct: 0,
      explanation: "Atomic commits simplify review, rollback, and debugging."
    },
    {
      question: "Which naming style helps branch clarity?",
      options: [
        "new",
        "feature/login-validation",
        "branch1",
        "temp"
      ],
      correct: 1,
      explanation: "Descriptive branch names communicate scope and intent clearly."
    },
    {
      question: "Why protect the main branch in team repos?",
      options: [
        "To enforce checks/reviews before direct modification",
        "To prevent all merges forever",
        "To disable CI pipelines",
        "To hide history"
      ],
      correct: 0,
      explanation: "Branch protection prevents unsafe direct pushes and enforces quality gates."
    }
  ],
  4: [
    {
      question: "In three-tier architecture, where does business logic mainly live?",
      options: [
        "Presentation layer",
        "Application layer",
        "Database layer",
        "DNS layer"
      ],
      correct: 1,
      explanation: "Business rules are handled in the application/service layer."
    },
    {
      question: "Why separate UI, logic, and data layers?",
      options: [
        "To make the system harder to maintain",
        "To improve maintainability, testability, and scalability",
        "To remove APIs",
        "To avoid deployment"
      ],
      correct: 1,
      explanation: "Layer separation improves modularity and independent evolution."
    },
    {
      question: "Which component typically communicates directly with the database?",
      options: [
        "Frontend browser only",
        "Backend services/application layer",
        "CSS stylesheets",
        "Client-side local storage only"
      ],
      correct: 1,
      explanation: "Backend services mediate access to persistent data storage."
    },
    {
      question: "A key advantage of microservices is:",
      options: [
        "Independent deployment and scaling per service",
        "No network communication needed",
        "No monitoring required",
        "Only one technology is allowed"
      ],
      correct: 0,
      explanation: "Microservices let teams evolve and scale services independently."
    },
    {
      question: "A common challenge of microservices is:",
      options: [
        "Zero operational complexity",
        "Distributed system complexity such as monitoring and communication",
        "No need for APIs",
        "No deployment pipeline"
      ],
      correct: 1,
      explanation: "Microservices improve flexibility but introduce operational complexity."
    },
    {
      question: "Which statement fits MVC?",
      options: [
        "Model handles data/state, View handles UI, Controller handles flow",
        "Model renders CSS only",
        "View stores database backups",
        "Controller replaces APIs"
      ],
      correct: 0,
      explanation: "MVC separates responsibilities for cleaner architecture."
    },
    {
      question: "What is one reason to design clear APIs between frontend and backend?",
      options: [
        "To reduce coupling and enable independent development",
        "To bypass authentication by default",
        "To remove documentation needs",
        "To avoid versioning"
      ],
      correct: 0,
      explanation: "Well-defined APIs allow teams/components to evolve independently."
    },
    {
      question: "Which is generally more dynamic and interaction-heavy?",
      options: [
        "A static informational site",
        "A web application with user actions and state changes",
        "A plain image gallery only",
        "A print brochure"
      ],
      correct: 1,
      explanation: "Web applications process user input and dynamic workflows."
    }
  ],
  5: [
    {
      question: "What does an API endpoint represent?",
      options: [
        "A specific URL exposing operations on a resource",
        "A local variable",
        "A SQL backup file",
        "A CSS class"
      ],
      correct: 0,
      explanation: "Endpoints are URI paths where clients interact with API resources."
    },
    {
      question: "Which method is typically idempotent for full resource replacement?",
      options: [
        "POST",
        "PUT",
        "PATCH",
        "CONNECT"
      ],
      correct: 1,
      explanation: "PUT generally replaces the full resource and is expected to be idempotent."
    },
    {
      question: "Which method is commonly used for partial updates?",
      options: [
        "PATCH",
        "GET",
        "HEAD",
        "TRACE"
      ],
      correct: 0,
      explanation: "PATCH is designed for partial modifications to a resource."
    },
    {
      question: "What status code is most suitable after successfully creating a resource?",
      options: [
        "200 OK",
        "201 Created",
        "204 No Content",
        "400 Bad Request"
      ],
      correct: 1,
      explanation: "201 Created indicates successful creation of a new resource."
    },
    {
      question: "Which status code indicates authentication is required or failed?",
      options: [
        "401 Unauthorized",
        "403 Forbidden",
        "404 Not Found",
        "500 Internal Server Error"
      ],
      correct: 0,
      explanation: "401 is used when authentication credentials are missing/invalid."
    },
    {
      question: "What is the main goal of REST statelessness?",
      options: [
        "Each request carries required context, improving scalability",
        "Server stores unlimited client session state",
        "Clients cannot cache responses",
        "Only one user can access the API at a time"
      ],
      correct: 0,
      explanation: "Stateless requests reduce server session dependency and support scale-out."
    },
    {
      question: "Why use resource-oriented URLs like /students/42?",
      options: [
        "They model entities clearly and keep API design predictable",
        "They avoid HTTP methods",
        "They remove response codes",
        "They prevent versioning"
      ],
      correct: 0,
      explanation: "Resource-based URI design improves readability and consistency."
    },
    {
      question: "Which response format is most common for modern REST APIs?",
      options: [
        "JSON",
        "TIFF",
        "ZIP",
        "CSV only"
      ],
      correct: 0,
      explanation: "JSON is lightweight, human-readable, and widely supported across clients."
    }
  ]
};

const enhancedPafLectures = pafLectures.map((lecture) => {
  const extras = extraPafQuestionsByLecture[lecture.id] || [];
  const normalizedExtras = extras.map((q, idx) => ({
    id: lecture.questions.length + idx + 1,
    ...q,
  }));
  return {
    ...lecture,
    questions: [...lecture.questions, ...normalizedExtras],
  };
});

export default enhancedPafLectures;

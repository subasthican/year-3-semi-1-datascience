const pafStudyGuides = [
  {
    id: 1,
    title: "Software Frameworks – An Overview",
    emoji: "🏗️",
    color: "from-rose-500 to-orange-500",
    sections: [
      {
        heading: "Programming vs Software Engineering",
        icon: "⚙️",
        story: `Think of building a house. Programming is laying bricks. Software engineering is the full project: talking to the client, drawing the plan, choosing materials, checking quality, and fixing issues later. The lecture makes it clear that code is only one part of a proper software process.`,
        keyPoints: [
          "Programming mainly focuses on writing code",
          "Software engineering includes requirements, design, QA, deployment, and maintenance",
          "Good software needs process, not only syntax",
          "Communication with stakeholders is part of engineering"
        ],
        realWorldExample: `A student can write a login page in one day. A software engineer also asks: Is it secure? Can it scale? How will bugs be tested and fixed after release?`
      },
      {
        heading: "Why Frameworks Exist",
        icon: "📦",
        story: `Imagine opening five restaurants. Every one of them needs a kitchen, menu system, billing flow, and staff routine. You would not invent these from zero every time. Frameworks exist for the same reason: many apps need the same basic building blocks.`,
        keyPoints: [
          "Applications often repeat common features like authentication and routing",
          "Frameworks package reusable architecture and components",
          "They reduce repeated effort",
          "They let developers focus on project-specific features"
        ],
        realWorldExample: `In an online store, login, forms, routing, and database access are common needs. A framework gives these faster so the team can focus on product features.`
      },
      {
        heading: "Framework vs Library",
        icon: "🔁",
        story: `A library is like a toolbox. You pick the tool when you want. A framework is like a kitchen workflow. It tells you when each step happens, and you add your custom work inside that system. That is the heart of Inversion of Control.`,
        keyPoints: [
          "Libraries are called by your code when needed",
          "Frameworks control the main flow of the application",
          "Frameworks provide default behavior and structure",
          "Inversion of Control is a key difference"
        ],
        realWorldExample: `Using jQuery is like grabbing a tool from a toolbox. Using Angular or Spring Boot is more like entering a full system that already has rules and flow.`
      },
      {
        heading: "Advantages and Trade-Offs",
        icon: "⚖️",
        story: `Frameworks feel like using a well-tested recipe. You cook faster, get more consistent results, and avoid basic mistakes. But the recipe also limits how freely you can improvise.`,
        keyPoints: [
          "Advantages: speed, reusability, tooling, standards, community support, security help",
          "Trade-offs: learning curve, restrictions, possible extra unused features",
          "Wrong framework choice can hurt performance and UX",
          "Developers must keep up with framework changes"
        ],
        realWorldExample: `Spring Boot can save weeks of setup, but if the project is tiny or unusual, that same structure may feel heavy.`
      }
    ]
  },
  {
    id: 2,
    title: "Version Controlling & Workflows with Git – I",
    emoji: "📝",
    color: "from-cyan-500 to-blue-500",
    sections: [
      {
        heading: "Why Version Control Matters",
        icon: "🧭",
        story: `Picture a student saving files as report_final, report_final2, report_real_final, and report_last_last_final. That is manual chaos. Version control solves this by keeping a proper history of what changed, when it changed, and who changed it.`,
        keyPoints: [
          "Version control records changes over time",
          "It helps restore older versions safely",
          "It supports collaboration without confusion",
          "It acts like a detailed timeline for project files"
        ],
        realWorldExample: `If a bug appears after yesterday's change, version control lets you inspect and roll back instead of guessing which file copy was correct.`
      },
      {
        heading: "From Local to Distributed VCS",
        icon: "🌐",
        story: `Version control evolved like communication did. First, everything stayed on one machine. Then teams depended on a central server. With Git, each developer carries the full history locally, which makes work faster and safer.`,
        keyPoints: [
          "Local VCS worked on a single machine",
          "Centralized VCS used one central server",
          "Distributed VCS gives every developer a full repository copy",
          "Git is the best-known DVCS from the lecture"
        ],
        realWorldExample: `Even if the internet is down, a Git developer can still commit locally because the full repository exists on their machine.`
      },
      {
        heading: "Repositories, Commits, and HEAD",
        icon: "💾",
        story: `Think of a local repository as your personal workbook and a remote repository as the class noticeboard everyone syncs with. A commit is one saved checkpoint. HEAD points to where you currently are in that history.`,
        keyPoints: [
          "Local repository belongs to each developer",
          "Remote repository is the shared source of truth",
          "Commits are snapshots with unique IDs",
          "HEAD points to the latest commit on the current branch"
        ],
        realWorldExample: `You clone a project, make local commits while working, and later push them so the rest of the team sees the same updated history.`
      },
      {
        heading: "Core Git Actions",
        icon: "🔄",
        story: `Git actions are like a study cycle: prepare work, save progress, sync with the group. Add stages changes, commit saves them, push publishes them, and pull brings in what others have done.`,
        keyPoints: [
          "git add stages changes",
          "git commit saves a snapshot",
          "git push sends commits to the remote repo",
          "git pull brings remote changes back to local"
        ],
        realWorldExample: `A team member fixes a bug and pushes. You pull before starting your own work so you do not build on outdated code.`
      }
    ]
  },
  {
    id: 3,
    title: "Version Controlling & Workflows with Git – II",
    emoji: "🌳",
    color: "from-emerald-500 to-teal-500",
    sections: [
      {
        heading: "Why Branches Matter",
        icon: "🌿",
        story: `Imagine a main road that must stay open and safe. If workers need to build something new, they use a side road first. In Git, that side road is a branch. It keeps unfinished work away from the stable main branch.`,
        keyPoints: [
          "A branch is an isolated line of development",
          "Branches allow parallel work",
          "Main should stay stable",
          "Feature branches protect the core codebase from unfinished work"
        ],
        realWorldExample: `One developer can build a payment page while another improves the dashboard, each on separate branches without breaking the main project.`
      },
      {
        heading: "Pull Requests and Review",
        icon: "👀",
        story: `A pull request is like showing your assignment to a tutor before final submission. The tutor checks quality, finds weak parts, and gives comments. Only after that should it go into the official record.`,
        keyPoints: [
          "PRs propose changes before merge",
          "They support discussion and code review",
          "They reduce bugs and poor patterns reaching main",
          "They document why a change was made"
        ],
        realWorldExample: `A reviewer may spot missing validation in your feature branch before the code is merged into the shared branch.`
      },
      {
        heading: "GitHub Flow vs GitFlow",
        icon: "🧪",
        story: `GitHub Flow is the simple daily routine. GitFlow is the larger company process with more branch types and more release management structure. One is lighter; the other is more controlled.`,
        keyPoints: [
          "GitHub Flow is simpler and fits many projects",
          "GitFlow is more structured and enterprise-friendly",
          "GitFlow supports release and hotfix branch patterns",
          "Teams should choose one workflow and apply it consistently"
        ],
        realWorldExample: `A student team project may be fine with GitHub Flow. A company shipping multiple maintained releases may prefer GitFlow.`
      },
      {
        heading: "Healthy Team Practices",
        icon: "🤝",
        story: `Good Git teamwork is like a clean group project: small tasks, regular updates, clear names, and no one dumping a month of work at once.`,
        keyPoints: [
          "Use one feature per branch",
          "Keep branches short-lived",
          "Commit often and keep commits atomic",
          "Pull before branching and merge early to reduce conflicts",
          "Use meaningful branch names and commit messages"
        ],
        realWorldExample: `A huge branch with 200 unrelated changes is hard to review. Five smaller branches with focused commits are easier to test and merge.`
      }
    ]
  },
  {
    id: 4,
    title: "Web Application Architecture – An Overview",
    emoji: "🏢",
    color: "from-amber-500 to-yellow-500",
    sections: [
      {
        heading: "Website vs Web Application",
        icon: "🖥️",
        story: `A website is like a poster on a wall: mostly there to show information. A web application is like a service counter: users interact, submit requests, and expect responses.`,
        keyPoints: [
          "Websites mainly present content",
          "Web applications support richer interaction",
          "Web applications are more dynamic and process user actions",
          "Architecture matters more as interaction grows"
        ],
        realWorldExample: `A university news page is closer to a website. An online student portal for marks and registration is a web application.`
      },
      {
        heading: "Three-Tier Architecture",
        icon: "🎂",
        story: `Think of a three-layer cake. The top is what people see, the middle does the working, and the bottom stores the important stuff. Web systems often work the same way.`,
        keyPoints: [
          "Presentation layer = frontend and UI",
          "Application layer = business logic and APIs",
          "Database layer = data storage and retrieval",
          "The layers can evolve and scale more independently"
        ],
        realWorldExample: `A student uses a React screen, which talks to a Node or Spring backend, which then reads and writes data in a database.`
      },
      {
        heading: "Architectural Patterns and APIs",
        icon: "🧩",
        story: `Patterns are like classroom seating plans. They help everyone know where each responsibility belongs. APIs are like official service windows between parts of the system.`,
        keyPoints: [
          "MVC separates model, view, and controller responsibilities",
          "MVVM and MVP are alternative structuring patterns",
          "APIs connect parts of the system cleanly",
          "Good architecture improves maintainability"
        ],
        realWorldExample: `A frontend app requests student data through an API instead of touching the database directly.`
      },
      {
        heading: "Monolith vs Microservices",
        icon: "⚖️",
        story: `A monolith is one big machine. Microservices are many smaller machines working together. The small-machine approach brings flexibility, but it also creates more coordination work.`,
        keyPoints: [
          "Monoliths are simpler to start with",
          "Microservices allow independent deployment and scaling",
          "Monoliths can become hard to evolve",
          "Microservices bring high global complexity",
          "Architecture choice depends on needs, not fashion"
        ],
        realWorldExample: `A small startup may begin with a monolith. A large streaming platform may split billing, search, profiles, and recommendations into services.`
      }
    ]
  },
  {
    id: 5,
    title: "REST APIs",
    emoji: "🔌",
    color: "from-indigo-500 to-sky-500",
    sections: [
      {
        heading: "What REST Really Means",
        icon: "📡",
        story: `REST is not a programming language or a special tool. It is a style for designing web services. Think of it as a good set of road rules for how clients and servers communicate.`,
        keyPoints: [
          "REST stands for Representational State Transfer",
          "It is an architectural style, not a product",
          "It commonly works over HTTP",
          "It focuses on resources and representations"
        ],
        realWorldExample: `A mobile app asking a server for user details through a URL and getting JSON back is a common REST-style interaction.`
      },
      {
        heading: "The Six Constraints",
        icon: "6️⃣",
        story: `The lecture presents six rules that make REST REST. If too many are ignored, the API may still work, but it is not really following the REST style fully.`,
        keyPoints: [
          "Client-Server separates concerns",
          "Stateless requests carry their own context",
          "Cacheable responses improve efficiency",
          "Uniform Interface standardizes communication",
          "Layered System supports intermediaries",
          "Code on Demand is optional"
        ],
        realWorldExample: `A cached product response lets users see data faster without asking the server again for the same information every time.`
      },
      {
        heading: "HTTP Methods, Status Codes, and JSON",
        icon: "📬",
        story: `REST works smoothly because HTTP already gives useful verbs and response signals. It is like a delivery system with labels that everyone already understands.`,
        keyPoints: [
          "GET reads resources",
          "POST creates resources",
          "PUT updates resources",
          "DELETE removes resources",
          "2XX, 4XX, and 5XX status codes communicate result types",
          "JSON is a common lightweight response format"
        ],
        realWorldExample: `A frontend sends GET /users/1 and receives a 200 OK with JSON describing that user.`
      },
      {
        heading: "True REST and HATEOAS",
        icon: "🧭",
        story: `Many APIs use HTTP and nice URLs, but the lecture warns that this alone does not make them fully RESTful. True REST also emphasizes discoverability through links in the response.`,
        keyPoints: [
          "HATEOAS means the server gives links to valid next actions",
          "Many APIs are closer to RPC than true REST",
          "Richardson Maturity Level 3 includes HATEOAS",
          "Good API design uses clear URIs, methods, headers, and consistent responses"
        ],
        realWorldExample: `A user resource could return links for edit, delete, or related orders, allowing the client to discover what can happen next instead of hardcoding everything.`
      }
    ]
  }
];

export default pafStudyGuides;

import { courses, type Course, type CourseCategory } from "./site-data";

export interface CourseDetail {
  duration: string;
  level: string;
  prerequisites: string[];
  outcomes: string[];
  syllabus: { title: string; topics: string[] }[];
  modes: { name: string; description: string; icon: string }[];
  batches: { label: string; time: string; type: string }[];
  tools: string[];
}

const commonModes = [
  { name: "Classroom Training", description: "In-person sessions at our Lingampally, Hyderabad center with hands-on lab access.", icon: "Building2" },
  { name: "Live Online Training", description: "Instructor-led live sessions from anywhere with real-time doubt clarification.", icon: "Monitor" },
  { name: "Weekend Batches", description: "Designed for working professionals — Saturday & Sunday intensive sessions.", icon: "CalendarDays" },
  { name: "One-to-One Training", description: "Personalized schedule and pace with dedicated trainer attention.", icon: "UserRound" },
];

const commonBatches = [
  { label: "Morning Batch", time: "7:00 AM – 9:00 AM", type: "Weekday" },
  { label: "Daytime Batch", time: "11:00 AM – 1:00 PM", type: "Weekday" },
  { label: "Evening Batch", time: "6:30 PM – 8:30 PM", type: "Weekday" },
  { label: "Weekend Batch", time: "10:00 AM – 1:00 PM", type: "Sat & Sun" },
];

const byCategory: Record<CourseCategory, Partial<CourseDetail>> = {
  Programming: {
    duration: "2–3 months",
    level: "Beginner to Intermediate",
    prerequisites: ["Basic computer usage", "Interest in problem solving", "No prior coding experience required"],
    outcomes: [
      "Write clean, structured programs with confidence",
      "Understand core language fundamentals and OOP concepts",
      "Work with data structures, files and standard libraries",
      "Build small applications and mini-projects from scratch",
    ],
    tools: ["VS Code", "Git & GitHub", "Command Line", "Debugger"],
  },
  Testing: {
    duration: "2–3 months",
    level: "Beginner to Intermediate",
    prerequisites: ["Basic computer knowledge", "Logical thinking", "Familiarity with any programming language is a plus"],
    outcomes: [
      "Understand SDLC, STLC and defect life cycle",
      "Design test cases, test plans and defect reports",
      "Automate web workflows using industry tools",
      "Apply testing in real-time project scenarios",
    ],
    tools: ["Selenium", "TestNG", "JIRA", "Postman", "Git"],
  },
  SAP: {
    duration: "2–4 months",
    level: "Beginner to Advanced",
    prerequisites: ["Graduate in any discipline", "Basic business or accounting awareness (module-dependent)"],
    outcomes: [
      "Understand SAP architecture and navigation",
      "Configure and work with module-specific business processes",
      "Handle real-time scenarios and case studies",
      "Prepare for SAP end-user and consultant roles",
    ],
    tools: ["SAP GUI", "SAP S/4HANA", "Business Process Documents"],
  },
  "Data & AI": {
    duration: "3–4 months",
    level: "Beginner to Intermediate",
    prerequisites: ["Basic mathematics", "Comfort with computers", "Basic programming (Python) is a plus"],
    outcomes: [
      "Work with data using Python and standard libraries",
      "Perform data cleaning, analysis and visualization",
      "Build and evaluate ML models on real datasets",
      "Communicate insights through dashboards and reports",
    ],
    tools: ["Python", "Pandas", "NumPy", "Scikit-learn", "Jupyter", "SQL"],
  },
  Cloud: {
    duration: "2–3 months",
    level: "Beginner to Intermediate",
    prerequisites: ["Basic networking awareness", "Comfort with the command line is a plus"],
    outcomes: [
      "Understand core cloud concepts and service models",
      "Deploy and manage compute, storage and networking resources",
      "Apply security and cost-optimization best practices",
      "Prepare for entry-level cloud certifications",
    ],
    tools: ["AWS Console", "CLI", "IAM", "EC2", "S3", "CloudWatch"],
  },
  "Web Development": {
    duration: "2–3 months",
    level: "Beginner to Intermediate",
    prerequisites: ["HTML, CSS and JavaScript basics recommended"],
    outcomes: [
      "Build responsive, component-based web applications",
      "Manage state, routing and API integration",
      "Follow modern development and deployment workflows",
      "Ship a complete project as part of the course",
    ],
    tools: ["VS Code", "Node.js", "npm", "Git", "Chrome DevTools"],
  },
  Other: {
    duration: "1–3 months",
    level: "Beginner",
    prerequisites: ["Basic computer usage"],
    outcomes: [
      "Understand core concepts and terminology",
      "Apply skills to practical tasks and scenarios",
      "Build confidence through guided hands-on practice",
    ],
    tools: ["Course-specific tools and platforms"],
  },
};

function syllabusFor(course: Course): { title: string; topics: string[] }[] {
  const base = [
    {
      title: `Introduction to ${course.title}`,
      topics: [
        `Overview of ${course.title} and industry relevance`,
        "Environment setup and required tools",
        "Learning path and course roadmap",
      ],
    },
    {
      title: "Core Concepts & Fundamentals",
      topics: [
        "Key building blocks and terminology",
        "Hands-on walkthroughs with guided examples",
        "Common patterns and best practices",
      ],
    },
    {
      title: "Applied Techniques",
      topics: [
        "Intermediate features and workflows",
        "Working with real-world data and scenarios",
        "Debugging, troubleshooting and optimization",
      ],
    },
    {
      title: "Advanced Topics",
      topics: [
        "Deep-dive into advanced features",
        "Integration with related tools and systems",
        "Performance, security and quality considerations",
      ],
    },
    {
      title: "Project Work & Career Preparation",
      topics: [
        "End-to-end mini-project / case study",
        "Interview questions and mock discussions",
        "Resume pointers and next steps",
      ],
    },
  ];
  return base;
}

export function getCourseDetail(course: Course): CourseDetail {
  const cat = byCategory[course.category] ?? {};
  return {
    duration: cat.duration ?? "2–3 months",
    level: cat.level ?? "Beginner to Intermediate",
    prerequisites: cat.prerequisites ?? ["Basic computer usage"],
    outcomes: cat.outcomes ?? ["Understand core concepts", "Apply skills in practical scenarios"],
    syllabus: syllabusFor(course),
    modes: commonModes,
    batches: commonBatches,
    tools: cat.tools ?? ["Course-specific tools"],
  };
}

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}

export function relatedCourses(course: Course, limit = 3): Course[] {
  return courses.filter((c) => c.category === course.category && c.slug !== course.slug).slice(0, limit);
}

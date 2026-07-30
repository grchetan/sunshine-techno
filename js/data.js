// Central content configuration — edit here to update the whole site

const siteConfig = {
  name: 'Sunshine Techno System',
  shortName: 'Sunshine Techno',
  tagline: 'IT & Software Training Institute in Hyderabad',
  domain: 'sunshinetechnosystem.com',
  address: {
    line1: '201, 2nd Floor, Hema Durga Complex',
    line2: 'Chandanagar',
    city: 'Hyderabad',
    state: 'Telangana',
    pin: '500050',
    country: 'India',
  },
  phone: '+91-00000-00000',
  phoneDisplay: '+91 00000-00000',
  whatsapp: '+9100000-00000',
  email: 'demo@gmail.com',
  mapsQuery: '201+Hema+Durga+Complex+Chandanagar+Hyderabad+Telangana+500050',
  rating: { value: '5.0', count: 16, source: 'Sulekha' },
  social: {
    facebook: 'https://www.facebook.com/SunshineTechnoSystem',
    youtube: 'https://www.youtube.com/watch?v=BTNak9oqT-I&t=1s',
    twitter: 'https://twitter.com/sunshin33040518',
    instagram: '#',
    linkedin: '#',
  },
};

const courses = [
  {
    slug: 'full-stack-python',
    title: 'Full Stack Python',
    category: 'Programming',
    description:
      'Python fundamentals, web frameworks, databases and end-to-end project work.',
    mode: 'Classroom + Online',
    icon: 'code-2',
    featured: true,
  },
  {
    slug: 'java',
    title: 'Java',
    category: 'Programming',
    description:
      'Core & advanced Java with OOP, collections, JDBC and hands-on exercises.',
    mode: 'Classroom + Online',
    icon: 'coffee',
    featured: true,
  },
  {
    slug: 'java-selenium',
    title: 'Java + Selenium',
    category: 'Testing',
    description:
      'Automation testing with Selenium WebDriver, TestNG and Java scripting.',
    mode: 'Classroom + Online',
    icon: 'bug',
    featured: true,
  },
  {
    slug: 'software-testing',
    title: 'Software Testing',
    category: 'Testing',
    description:
      'Manual + automation fundamentals, test cases, defect tracking and STLC.',
    mode: 'Classroom + Online',
    icon: 'shield-check',
    featured: true,
  },
  {
    slug: 'sap',
    title: 'SAP',
    category: 'SAP',
    description:
      'SAP fundamentals with functional & technical module orientation.',
    mode: 'Classroom + Online',
    icon: 'database',
    featured: true,
  },
  {
    slug: 'sap-fico',
    title: 'SAP FICO',
    category: 'SAP',
    description:
      'Financial Accounting & Controlling with real-time business scenarios.',
    mode: 'Classroom + Online',
    icon: 'landmark',
    featured: true,
  },
  {
    slug: 'sap-mm',
    title: 'SAP MM',
    category: 'SAP',
    description:
      'Materials Management: procurement, inventory and vendor processes.',
    mode: 'Classroom + Online',
    icon: 'package',
  },
  {
    slug: 'sap-abap',
    title: 'SAP ABAP',
    category: 'SAP',
    description:
      'ABAP programming, reports, forms and enhancements for SAP systems.',
    mode: 'Classroom + Online',
    icon: 'terminal',
  },
  {
    slug: 'sap-hana',
    title: 'SAP HANA',
    category: 'SAP',
    description:
      'In-memory database concepts, modeling and HANA administration basics.',
    mode: 'Classroom + Online',
    icon: 'server',
  },
  {
    slug: 'data-science',
    title: 'Data Science',
    category: 'Data & AI',
    description:
      'Python, statistics, data wrangling, visualization and modeling essentials.',
    mode: 'Classroom + Online',
    icon: 'bar-chart-3',
    featured: true,
  },
  {
    slug: 'machine-learning',
    title: 'Machine Learning',
    category: 'Data & AI',
    description:
      'Supervised & unsupervised learning, model evaluation and applied ML.',
    mode: 'Classroom + Online',
    icon: 'brain',
  },
  {
    slug: 'artificial-intelligence',
    title: 'Artificial Intelligence',
    category: 'Data & AI',
    description:
      'AI concepts, neural networks and practical AI project workflows.',
    mode: 'Classroom + Online',
    icon: 'sparkles',
  },
  {
    slug: 'aws',
    title: 'AWS',
    category: 'Cloud',
    description:
      'Core AWS services, deployment patterns and cloud fundamentals.',
    mode: 'Classroom + Online',
    icon: 'cloud',
    featured: true,
  },
  {
    slug: 'react',
    title: 'React JS',
    category: 'Web Development',
    description:
      'Modern React with hooks, components, routing and real project practice.',
    mode: 'Classroom + Online',
    icon: 'atom',
    featured: true,
  },
  {
    slug: 'angular',
    title: 'Angular',
    category: 'Web Development',
    description:
      'Angular framework, components, services and application architecture.',
    mode: 'Classroom + Online',
    icon: 'layers',
  },
  {
    slug: 'c',
    title: 'C Programming',
    category: 'Programming',
    description:
      'Fundamentals of C, memory model, pointers and structured programming.',
    mode: 'Classroom + Online',
    icon: 'file-code',
  },
  {
    slug: 'cpp',
    title: 'C++',
    category: 'Programming',
    description:
      'OOP with C++, STL, memory management and applied problem solving.',
    mode: 'Classroom + Online',
    icon: 'file-code-2',
  },
  {
    slug: 'csharp',
    title: 'C#',
    category: 'Programming',
    description:
      'C# fundamentals, .NET basics and application development concepts.',
    mode: 'Classroom + Online',
    icon: 'hash',
  },
  {
    slug: 'sql',
    title: 'SQL / Database',
    category: 'Data & AI',
    description:
      'Relational databases, queries, joins and hands-on SQL practice.',
    mode: 'Classroom + Online',
    icon: 'database',
  },
  {
    slug: 'rpa-blue-prism',
    title: 'RPA / Blue Prism',
    category: 'Other',
    description:
      'Robotic process automation concepts with Blue Prism fundamentals.',
    mode: 'Classroom + Online',
    icon: 'bot',
  },
  {
    slug: 'ibm-as400',
    title: 'IBM AS/400',
    category: 'Other',
    description: 'IBM AS/400 platform fundamentals and application concepts.',
    mode: 'Classroom + Online',
    icon: 'server',
  },
  {
    slug: 'objective-c',
    title: 'Objective-C',
    category: 'Programming',
    description:
      'Objective-C language basics for legacy and Apple ecosystem projects.',
    mode: 'Classroom + Online',
    icon: 'code',
  },
  {
    slug: 'perl',
    title: 'Perl',
    category: 'Programming',
    description:
      'Perl scripting for text processing and system automation tasks.',
    mode: 'Classroom + Online',
    icon: 'code',
  },
  {
    slug: 'ruby',
    title: 'Ruby',
    category: 'Programming',
    description: 'Ruby language fundamentals and object-oriented scripting.',
    mode: 'Classroom + Online',
    icon: 'gem',
  },
  {
    slug: 'advanced-c',
    title: 'Advanced C',
    category: 'Programming',
    description:
      'Deeper C: file handling, data structures and advanced problem solving.',
    mode: 'Classroom + Online',
    icon: 'file-code',
  },
  {
    slug: 'advanced-cpp',
    title: 'Advanced C++',
    category: 'Programming',
    description:
      'Advanced C++ features, templates and design-oriented programming.',
    mode: 'Classroom + Online',
    icon: 'file-code-2',
  },
  {
    slug: 'shell-scripting',
    title: 'Shell Scripting',
    category: 'Other',
    description: 'Bash/Unix scripting to automate everyday system tasks.',
    mode: 'Classroom + Online',
    icon: 'terminal',
  },
  {
    slug: 'digital-literacy',
    title: 'Digital Literacy',
    category: 'Other',
    description:
      'Essential computer skills for students and working professionals.',
    mode: 'Classroom + Online',
    icon: 'monitor-smartphone',
  },
  {
    slug: 'mobile-testing',
    title: 'Mobile Testing',
    category: 'Testing',
    description:
      'Mobile application testing approaches, tools and practical exercises.',
    mode: 'Classroom + Online',
    icon: 'smartphone',
  },
  {
    slug: 'uft',
    title: 'UFT',
    category: 'Testing',
    description: 'Unified Functional Testing basics for automation workflows.',
    mode: 'Classroom + Online',
    icon: 'test-tube',
  },
  {
    slug: 'loadrunner',
    title: 'LoadRunner',
    category: 'Testing',
    description: 'Performance testing fundamentals with LoadRunner.',
    mode: 'Classroom + Online',
    icon: 'gauge',
  },
  {
    slug: 'jmeter',
    title: 'JMeter',
    category: 'Testing',
    description: 'Load & performance testing using Apache JMeter.',
    mode: 'Classroom + Online',
    icon: 'activity',
  },
  {
    slug: 'oracle',
    title: 'Oracle',
    category: 'Data & AI',
    description: 'Oracle database concepts, SQL and PL/SQL fundamentals.',
    mode: 'Classroom + Online',
    icon: 'database',
  },
  {
    slug: 'tally',
    title: 'Tally',
    category: 'Other',
    description:
      'Tally accounting software for business and finance workflows.',
    mode: 'Classroom + Online',
    icon: 'calculator',
  },
  {
    slug: 'quickbooks',
    title: 'QuickBooks',
    category: 'Other',
    description:
      'QuickBooks accounting fundamentals for small business finance.',
    mode: 'Classroom + Online',
    icon: 'calculator',
  },
  {
    slug: 'ms-office',
    title: 'MS Office',
    category: 'Other',
    description:
      'Word, Excel and PowerPoint essentials for professional productivity.',
    mode: 'Classroom + Online',
    icon: 'file-text',
  },
  {
    slug: 'hardware-networking',
    title: 'Hardware & Networking',
    category: 'Other',
    description: 'Computer hardware basics and networking fundamentals.',
    mode: 'Classroom + Online',
    icon: 'network',
  },
];

const courseCategories = [
  'All',
  'Programming',
  'Testing',
  'SAP',
  'Data & AI',
  'Cloud',
  'Web Development',
];

const testimonials = [
  {
    name: 'Ravi',
    course: 'Java + Selenium',
    quote:
      'The Java + Selenium training was clear and structured. The trainer was experienced and guided every concept with practical examples.',
  },
  {
    name: 'Sneha',
    course: 'Testing Tools',
    quote:
      'I learned Testing Tools with Java and Selenium here. Sessions were focused and the practical approach helped me understand real workflows.',
  },
  {
    name: 'Ajay',
    course: 'Java',
    quote:
      'Faculty are supportive and patient. Every doubt was addressed in class and I could follow along even with limited prior experience.',
  },
  {
    name: 'Priya',
    course: 'Java',
    quote:
      'Java concepts were taught in depth with hands-on coding. The teaching style is practical rather than pure theory.',
  },
  {
    name: 'Karthik',
    course: 'Software Testing',
    quote:
      'Software Testing with Selenium and Java gave me solid real-world knowledge. The examples reflected actual project scenarios.',
  },
  {
    name: 'Meena',
    course: 'Programming',
    quote:
      'Individual attention made a real difference. The learning environment is calm, supportive and focused on progress.',
  },
  {
    name: 'Rahul',
    course: 'SAP FICO',
    quote:
      'SAP FICO training covered real-time scenarios with good lab facilities. Fee flexibility and career guidance were genuinely helpful.',
  },
];

const faqs = [
  {
    q: 'Do you provide classroom training?',
    a: 'Yes. Classroom training is available at our Lingampally, Hyderabad center for most courses.',
  },
  {
    q: 'Is online training available?',
    a: 'Yes. Instructor-led live online training is offered for students and working professionals who prefer remote learning.',
  },
  {
    q: 'Where is Sunshine Techno System located?',
    a: 'We are located at 2nd Floor, 201, Hema Durga Complex, Near BHEL X Road / Lingampally Bus Stop, Lingampally, Hyderabad — 500050.',
  },
  {
    q: 'Can beginners join the courses?',
    a: 'Yes. Courses are designed to accommodate beginners, freshers and working professionals with different levels of prior experience.',
  },
  {
    q: 'Do you provide practical training?',
    a: 'Yes. Training emphasises hands-on exercises, real-time scenarios and applied practice rather than theory alone.',
  },
  {
    q: 'Are flexible batches available?',
    a: 'Yes. Weekday, weekend and other batch options are offered subject to trainer and seat availability.',
  },
  {
    q: 'Which programming courses are available?',
    a: 'We offer Java, Python, C, C++, C#, React, Angular and additional programming and scripting courses.',
  },
  {
    q: 'Do you provide software testing training?',
    a: 'Yes. Manual testing, Selenium automation, mobile testing, UFT, LoadRunner and JMeter are among the testing courses offered.',
  },
  {
    q: 'Is SAP training available?',
    a: 'Yes. SAP, SAP FICO, SAP MM, SAP ABAP and SAP HANA training are offered with a focus on practical scenarios.',
  },
  {
    q: 'How can I enquire about course fees?',
    a: 'Please share your details through the enquiry form or contact us directly and our team will get in touch with the latest information.',
  },
  {
    q: 'How do I book a demo class?',
    a: "Use the 'Book Free Demo' button or the enquiry form. Our team will confirm the demo schedule based on the selected course.",
  },
  {
    q: 'Do you provide career preparation support?',
    a: 'Where applicable we support resume preparation, mock tests, interview tips and technical doubt clarification alongside the core training.',
  },
];

const technologies = [
  'Java',
  'Python',
  'C',
  'C++',
  'C#',
  'Selenium',
  'SAP',
  'React',
  'Angular',
  'Node.js',
  'SQL',
  'AWS',
  'Data Science',
  'Machine Learning',
  'AI',
  'RPA',
];

function getFeaturedCourses() {
  return courses.filter((c) => c.featured);
}

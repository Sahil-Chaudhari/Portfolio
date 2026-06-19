export const portfolioData = {
  name: 'SAHIL CHAUDHARI',
  role: 'Software Engineer',
  location: 'Pune, India',
  phone: '+91 9146016431',
  email: 'chaudharisahil475@gmail.com',
  bio: 'Software Engineer with 2+ years of experience of building scalable web applications and AI-driven automation solutions using React.js, Python, and modern AI tools. Passionate about applying AI and automation pragmatically to solve real operational problems and drive measurable efficiency gains.',
  experience: [
    {
      company: '3PS Media India Pvt. Ltd.',
      title: 'Frontend Developer',
      period: 'July 2025 - Present',
      location: 'On-site',
      achievements: [
        'Developed the Gen4 version of Knowdl - an online authoring platform, migrating frontend from Vanila.js (Gen3) to React.js, reducing codebase complexity by ~40% and improving maintainability.',
        'Built key features like the module creation interface, user dashboard, and search functionality allowing educators to create and publish their own learning content smoothly.',
        'Worked with Python/Django backend team to integrate APIs and ensure smooth data flow between frontend and backend.',
        'Fixed bugs, improved page load time by 35% through lazy loading; ensured full responsiveness across 5+ device break-points.']
    },
    {
      company: 'Impact Digitech Solutions Pvt. Ltd.',
      title: 'Web Developer',
      period: 'May 2024 - June 2025',
      location: 'On-site',
      achievements: [
        'Built and deployed web applications using React.js, Node.js, Express.js, and MongoDB, serving 1K+ end users.',
        'Reduced API response time by 20% through query optimization and implemented reusable React component library used across 3 projects.'
      ]
    }
  ],
  projects: [
    {
      name: 'Serverless AI Image Processing Pipeline ',
      tech: 'React.js, Tailwind CSS, Python, AWS, AI ',
      github: true,
      description: [
        'Developed a fully serverless AI-powered image processing application using React.js, AWS Lambda, Amazon S3, API Gateway, DynamoDB, and Docker.',
        'Built secure direct-to-S3 image upload workflow using presigned URLs and implemented event-driven image processing with AWS Lambda triggers.',
        'Integrated AI-based background removal using rembg and implemented image compression, resizing, and format conversion using Pillow.',
        'Designed a responsive frontend with drag-and-drop upload, dynamic quality control, upload progress tracking, and dark/light theme using React, Vite, and Tailwind CSS.',
        'Deployed the frontend on Vercel and containerized backend AI processing services using Docker and Amazon ECR for scalable cloud-native deployment.'
      ]
    },
    {
      name: 'HealthAI – Smart Healthcare Prediction & Analytics Platform',
      tech: 'Pyton, Streamlit, Machine Learning',
      github: true,
      description: [
      'Extended the research project “Multiple Disease Prediction using Machine Learning Algorithms” (ICCUBEA 2023) into an AI-powered healthcare platform for predicting Diabetes, Heart Disease, and Parkinson’s Disease using Machine Learning models with prediction accuracy of up to 86%, providing personalized health recommendations.',
      'Enhanced platform by integrating Explainable AI (SHAP), patient profiling, BMI-based analysis, risk-factor evaluation, interactive visualizations, and automated PDF medical report generation using ReportLab to improve prediction transparency and clinical usability.',
      'Implemented a Gemini AI-powered Healthcare Assistant to provide conversational health guidance and personalized recommendations through an interactive Streamlit application deployed on the cloud.'
      ]
    },
    {
      name: 'Modern Real Estate Marketplace',
      tech: 'React Js, MongoDB, Express Js, Node Js.',
      github: true,
      description: [
        'A web application serving the real estate market.',
        'Enhanced a robust MERN stack application featuring advanced authentication and search functionality.',
        'Implemented CRUD operations, image uploads, and property listing management.']
    }
  ],
  skills: {
    technical: ['JavaScript', 'TypeScript','ReactJs', 'TailwindCSS', 'CSS', 'NodeJs', 'ExpressJs', 'C++', 'Python', 'Github',  'AWS', 'MongoDB',  'MySql', 'Machine Learning', 'HTML', 'RestAPI', 'Streamlit', 'Scikit-Learn', 'Pandas', 'Numpy', 'TensorFlow', 'Pillow', 'AWS (EC2, Lambda, S3, RDS, DynamoDB)', 'Docker', 'Vercel'],
    networking: ['TCP/IP', 'HTTP', 'HTTP/2', 'HTTPS', 'SSL', 'DNS', 'DSPM'],
    tools: ['Postman', 'Git','Github']
  },
  education: {
    institution: 'Vishwakarma Institute of Information Technology, Pune',
    degree: 'Bachelor of Technology in Information Technology',
    cgpa: '8.76',
    period: 'August 2020 - May 2024',
    location: 'Maharashtra, India'
  }
}

export const commands = {
  help: [
    '╔═══════════════════════════════════════════════════════════╗',
    '║                    AVAILABLE COMMANDS                     ║',
    '╚═══════════════════════════════════════════════════════════╝',
    '',
    '  help              - Show this help message',
    '  about | whoami    - Display information about me',
    '  experience | exp  - View work experience',
    '  projects | proj   - View my projects',
    '  skills            - View technical skills',
    '  education | edu   - View education details',
    '  contact | email   - Show contact information',
    '  github            - Open GitHub profile',
    '  linkedin          - Open LinkedIn profile',
    '  resume            - Display full resume summary',
    '  theme             - Toggle between dark and light mode',
    '  clear             - Clear terminal screen',
    '',
    '💡 Tip: Type any command above to view that section'
  ],
  about: `╔════════════════════════════════════════════════════════════╗
║                     ABOUT SAHIL CHAUDHARI                  ║
╚════════════════════════════════════════════════════════════╝

Name: ${portfolioData.name}
Role: ${portfolioData.role}
Location: ${portfolioData.location}

${portfolioData.bio}

Type "help" to see all available commands.`,
  cat: {
    'about.txt': `╔════════════════════════════════════════════════════════════╗
║                     ABOUT SAHIL CHAUDHARI                  ║
╚════════════════════════════════════════════════════════════╝

Name: ${portfolioData.name}
Role: ${portfolioData.role}
Location: ${portfolioData.location}

${portfolioData.bio}`,
    'experience.txt': `╔════════════════════════════════════════════════════════════╗
║                        EXPERIENCE                          ║
╚════════════════════════════════════════════════════════════╝

[1] ${portfolioData.experience[0].title} at ${portfolioData.experience[0].company}
    Period: ${portfolioData.experience[0].period}
    Location: ${portfolioData.experience[0].location}
    
    Achievements:
${portfolioData.experience[0].achievements.map((a) => `    • ${a}`).join('\n')}

[2] ${portfolioData.experience[1].title} at ${portfolioData.experience[1].company}
    Period: ${portfolioData.experience[1].period}
    Location: ${portfolioData.experience[1].location}
    
    Achievements:
${portfolioData.experience[1].achievements.map((a) => `    • ${a}`).join('\n')}`,
    'projects.txt': `╔════════════════════════════════════════════════════════════╗
║                         PROJECTS                           ║
╚════════════════════════════════════════════════════════════╝

[1] ${portfolioData.projects[0].name}
    Tech Stack: ${portfolioData.projects[0].tech}
    GitHub: Available
    
    Description:
${portfolioData.projects[0].description.map(d => `    • ${d}`).join('\n')}

[2] ${portfolioData.projects[1].name}
    Tech Stack: ${portfolioData.projects[1].tech}
    GitHub: Available
    
    Description:
${portfolioData.projects[1].description.map(d => `    • ${d}`).join('\n')}

📝 Note: For more projects, visit my GitHub profile using the "github" command.
`,
'skills.txt': `╔════════════════════════════════════════════════════════════╗
║                          SKILLS                            ║
╚════════════════════════════════════════════════════════════╝

Technical Skills:
  ${portfolioData.skills.technical.join(', ')}

Networking & Security:
  ${portfolioData.skills.networking.join(', ')}

Tools & Technologies:
  ${portfolioData.skills.tools.join(', ')}`
,

'education.txt': `╔════════════════════════════════════════════════════════════╗
║                        EDUCATION                           ║
╚════════════════════════════════════════════════════════════╝

Institution: ${portfolioData.education.institution}
Degree: ${portfolioData.education.degree}
CGPA: ${portfolioData.education.cgpa}
Period: ${portfolioData.education.period}
Location: ${portfolioData.education.location}`,
    'contact.txt': `╔════════════════════════════════════════════════════════════╗
║                       CONTACT INFO                         ║
╚════════════════════════════════════════════════════════════╝

Email: ${portfolioData.email}
Phone: ${portfolioData.phone}
Location: ${portfolioData.location}

Type "github" or "linkedin" to open my profiles.`
  },
  contact: `╔════════════════════════════════════════════════════════════╗
║                       CONTACT INFO                         ║
╚════════════════════════════════════════════════════════════╝

Email: ${portfolioData.email}
Phone: ${portfolioData.phone}
Location: ${portfolioData.location}

Type "github" or "linkedin" to open my profiles.`,
  resume: `╔════════════════════════════════════════════════════════════╗
║                    FULL RESUME SUMMARY                     ║
╚════════════════════════════════════════════════════════════╝

${portfolioData.name}
${portfolioData.role}
${portfolioData.location}

${portfolioData.bio}

Use the following commands to explore:
  • about       - About me
  • experience  - Work experience
  • projects    - Projects
  • skills      - Technical skills
  • education   - Education
  • contact     - Contact information`
}

// Add direct command references
commands.experience = commands.cat['experience.txt']
commands.projects = commands.cat['projects.txt']
commands.skills = commands.cat['skills.txt']
commands.education = commands.cat['education.txt']


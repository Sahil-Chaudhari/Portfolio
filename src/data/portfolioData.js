export const portfolioData = {
  name: 'SAHIL CHAUDHARI',
  role: 'Frontend Developer',
  location: 'Pune, Maharashtra',
  phone: '+91 9146016431',
  email: 'chaudharisahil475@gmail.com',
  bio: 'Frontend Developer with 1.8+ years of experience in developing web applications using React, JavaScript and Django. Intended to learn, innovate, and contribute effectively while working in growth-focused environment.',
  experience: [
    {
      company: '3PS Media India Pvt. Ltd.',
      title: 'Frontend Developer',
      period: 'July 2025 - Present',
      location: 'On-site',
      achievements: [
        'Developing the Gen4 version of Knowdl - an online learning platform, using React, JavaScript, Tailwind CSS.',
        'Built the module creation interface, user dashboard, and search functionality where educators design and publish custom learning content.',
        'Worked with Python/Django backend team to integrate APIs and ensure smooth data flow between frontend and backend.',
        'Fixed bugs, improved page load times and made platform responsive across desktop and mobile devices.']
    },
    {
      company: 'Impact Digitech Solutions Pvt. Ltd.',
      title: 'Web Developer',
      period: 'May 2024 - June 2025',
      location: 'On-site',
      achievements: [
        'Developed and maintained dynamic web applications using React, Node.js, Express.js, and MongoDB.',
        'Collaborated with the team to build user-friendly features and improve performance across client projects.'
      ]
    }
  ],
  projects: [
    {
      name: 'Multiple Disease Prediction System',
      tech: 'Pyton, Streamlit, Machine Learning',
      github: true,
      description: [
        'Developed web application using Python and Streamlit to predict multiple diseases based on user inputs and machine learning models.',
        'Implemented machine learning algorithms to analyze input data and forecast potential diseases.'
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
    technical: ['JavaScript', 'ReactJs', 'TailwindCSS', 'CSS', 'NodeJs', 'ExpressJs', 'C++', 'Python', 'Github',  'AWS', 'MongoDB',  'MySql', 'Machine Learning', 'HTML', 'RestAPI'],
    networking: ['TCP/IP', 'HTTP', 'HTTP/2', 'HTTPS', 'SSL', 'DNS', 'DSPM'],
    tools: ['Postman', 'Git']
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
${portfolioData.projects[1].description.map(d => `    • ${d}`).join('\n')}`,
    'skills.txt': `╔════════════════════════════════════════════════════════════╗
║                          SKILLS                            ║
╚════════════════════════════════════════════════════════════╝

Technical Skills:
  ${portfolioData.skills.technical.join(', ')}

Networking & Security:
  ${portfolioData.skills.networking.join(', ')}

Tools & Technologies:
  ${portfolioData.skills.tools.join(', ')}`,

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


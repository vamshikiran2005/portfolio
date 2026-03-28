export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
];

export const portfolioData = {
  name: "Kethireddy Vamshi Kiran Reddy",
  role: "AI & Machine Learning Student",
  intro: "Motivated AI & ML student with strong foundation in programming, web development, and problem solving. Passionate about building scalable and real-world applications.",
  about: {
    education: "B.Tech in AI & Machine Learning (2023–2027) at Kamala Institute of Technology and Science",
    description: "Enthusiastic developer with interest in Artificial Intelligence, Web Development, and Mobile Applications. Strong analytical thinking and ability to learn new technologies quickly.",
    interests: ["AI/ML Development", "Full Stack Web Development", "Mobile App Development"],
  },
  skills: [
    {
      category: "Languages",
      items: ["Java", "JavaScript (Basic)"],
    },
    {
      category: "Frontend",
      items: ["HTML", "CSS", "Tailwind CSS", "React.js (Basics)"],
    },
    {
      category: "Backend & Database",
      items: ["MySQL", "Basic Backend Logic (Java)"],
    },
    {
      category: "Concepts",
      items: ["OOP", "Data Structures (Basic)", "Web Development", "REST API Basics", "Responsive Design"],
    },
    {
      category: "Tools",
      items: ["Git & GitHub", "VS Code", "Chrome DevTools"],
    },
    {
      category: "Soft Skills",
      items: ["Problem Solving", "Team Collaboration", "Communication", "Adaptability", "Time Management"],
    },
  ],
  projects: [
    {
      title: "Giftique E-commerce Website",
      description: "Developed a full-stack e-commerce platform with complete shopping functionality.",
      features: ["Product catalog", "Shopping cart", "User authentication", "Order management"],
      tech: ["HTML", "CSS", "Java", "MySQL"],
      highlights: "Responsive UI design and efficient backend handling",
      github: "https://github.com/vamshikiran2005/giftique",
      gallery: [
        {
          src: "/projects/giftique/media__1774539835885.jpg",
          description: "Stunning homepage banner featuring a Special Welcome Offer with 20% discount and free shipping for new customers."
        },
        {
          src: "/projects/giftique/media__1774539835878.jpg",
          description: "New Arrivals section showcasing our premium jewelry collection with detailed product cards and shopping actions."
        },
        {
          src: "/projects/giftique/media__1774539835999.jpg",
          description: "Trending Products gallery including personalized teddy bears, photo frames, and customized music frames."
        },
        {
          src: "/projects/giftique/media__1774539836021.jpg",
          description: "Detailed 'About Giftique' section highlighting our commitment to premium, personalized gifts for every occasion."
        },
        {
          src: "/projects/giftique/media__1774539835979.jpg",
          description: "comprehensive footer providing easy access to customer service, company info, and secure payment methods."
        }
      ]
    },
    {
      title: "AcademicFlow",
      subtitle: "Student Management System",
      description: "Built a system to manage academic activities and student data efficiently.",
      features: ["Student records management", "Course tracking", "Performance monitoring"],
      tech: ["HTML", "CSS", "Java", "MySQL"],
      highlights: "Simplified academic workflows and improved data organization",
      gallery: [
        {
          src: "/projects/academicflow/media__1774541058013.jpg",
          description: "AcademiQuest Login Portal: High-fidelity entrance to the student realm with version 2.0 gamified orchestration."
        },
        {
          src: "/projects/academicflow/media__1774541057940.jpg",
          description: "Avatar Forge: Personalization hub where students can unlock gear and skins based on academic quests and attendance."
        },
        {
          src: "/projects/academicflow/media__1774541057905.jpg",
          description: "Enlistment Hub: Detailed enrollment form for students to join departments and track their academic journey."
        },
        {
          src: "/projects/academicflow/media__1774541057878.jpg",
          description: "System Architecture: Clean, professional MVC implementation of the folder structure and student portal backend."
        },
        {
          src: "/projects/academicflow/media__1774541057900.jpg",
          description: "Code Implementation: Organized HTML5/CSS3 source code for the login infrastructure and responsive frontend."
        }
      ]
    },
    {
      title: "Coming Soon",
      description: "New exciting AI/ML projects are in the works. Stay tuned!",
      tech: ["AI", "ML", "Python"],
      isPlaceholder: true,
    },
  ],
  internship: {
    title: "Android Developer Virtual Internship",
    company: "SmartBridge (Remote)",
    period: "2024",
    details: [
      "Designed user interfaces and learned Android lifecycle",
      "Developed basic mobile app functionalities",
    ],
  },
  education: [
    {
      institution: "Kamala Institute of Technology and Science",
      degree: "B.Tech in Artificial Intelligence & Machine Learning",
      period: "2023 – 2027",
      details: "Focusing on core AI/ML concepts, advanced programming, and scalable application development.",
    },
  ],
  certificates: [
    {
      title: "Android Developer Virtual Internship",
      organization: "EduSkills | Google for Developers",
      date: "January - March 2025",
      link: "/certificates/android_internship_cert.jpg",
    },
  ],
  contact: {
    email: "kethireddyvamshikiranreddy@gmail.com",
    phone: "+91-7780510722",
    location: "Karimnagar, Telangana",
    linkedin: "https://www.linkedin.com/in/kethireddy-vamshi-kiran-reddy-7545b0245/",
    github: "https://github.com/vamshikiran2005",
    resume: "/resume.jpg",
  },
};

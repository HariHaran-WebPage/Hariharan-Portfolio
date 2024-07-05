/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Hariharan",
  title: "Hi all, I'm HariHaran",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 with experience in building Web and Mobile applications using JavaScript, React.js, Node.js, React Native, and Python/Django, along with other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/HariHaran-WebPage",
  linkedin: "https://www.linkedin.com/in/hariharan-haran-504047306/",
  gmail: "hariharan23kph@gmail.com",

  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle:
    "PASSIONATE FULL STACK DEVELOPER WITH A KEEN INTEREST IN EXPLORING DIVERSE TECH STACKS",
  skills: [
    emoji(
      "⚡ Develop highly interactive front-end/user interfaces for web and mobile applications using HTML/HTML5, CSS/CSS3, JavaScript, and React.js"
    ),

    emoji(
      "⚡ Integrate third-party services such as Firebase,Twilio authentication and Mail.js"
    ),
    emoji("⚡ Develop back-end services using Node.js, Django, and SQLite")
  ],

  softwareSkills: [
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "ReactJS",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "NodeJS",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "NPM",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "SQLite",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-leaf"
    },
    {
      skillName: "Django",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section
const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Anna University",
      logo: require("./assets/images/annaUniversityLogo.png"), // Make sure you have this logo in your assets
      subHeader: "Bachelor of Engineering in Computer Science",
      duration: "2019 - 2023",
      desc: "Achieved 82% in the program."
    },
    {
      schoolName: "Matriculation School",
      logo: require("./assets/images/matriculationLogo.png"), // Make sure you have this logo in your assets
      subHeader: "Higher Secondary (XII)",
      duration: "2018 - 2019",
      desc: "Achieved 59% in the program."
    },
    {
      schoolName: "Matriculation School",
      logo: require("./assets/images/matriculationLogo1.png"), // Make sure you have this logo in your assets
      subHeader: "SSLC (X)",
      duration: "2016 - 2017",
      desc: "Achieved 80.5% in the program."
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "60%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, // Set it to true to show workExperiences Section
  experience: [
    {
      role: "Web Developer",
      company: "Galaxiets Technology",
      companylogo: require("./assets/images/Logo.png"),
      date: "Feb 2023 – March 2024",
      desc: "As a Web Developer at Galaxiets Technology, I was responsible for developing the 'Office Portal Management System' project. This involved designing and implementing the entire frontend using React.js, ensuring a responsive and intuitive user interface. On the backend, I utilized Node.js to build robust APIs and handled database connectivity using MongoDB. I collaborated closely with a cross-functional team to meet project milestones and deliverables, ensuring high code quality and adherence to best practices."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: " Projects",
  subtitle: "Explore some of my recent work below:",
  projects: [
    {
      image: require("./assets/images/Meezar.jpg"), // Replace with actual image path
      projectName: "Meezar",
      projectDesc:
        "Meezar is a comprehensive course website offering a variety of educational resources.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://6686d3ddc0f65543e40e746e--inspiring-narwhal-ee1e48.netlify.app/"
        }
      ]
    },
    {
      image: require("./assets/images/Officeportal.jpg"), // Replace with actual image path
      projectName: "Office Portal Management System",
      projectDesc:
        "To streamline office operations,  employee management and real-time communication",
      footerLink: []
    },



    {
      image: require("./assets/images/Laptop.jpg"), // Replace with actual image path
      projectName: "Laptop Service",
      projectDesc:
        "Web application designed to streamline the process of managing laptop repair and maintenance services.",
      footerLink: [
        {
          name: "GitHub Repository",
          url: "https://github.com/HariHaran-WebPage/Laptop-Service-in-Django.git"
        }
      ]
    }
  ],

  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters, and Some Cool Stuff that I have done!",

  achievementsCards: [
    {
      title: "MERN Stack Developer",
      subtitle: "Completed certification in MERN Stack development.",
      image: require("./assets/images/MERN Stack.jpg"), // Update with the correct path to your image
      imageAlt: "MERN Stack Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1LUokFyToXzoQILxymyx0UJHeTbY0hOkf/view?usp=drive_link" // Add the URL to your MERN Stack certification
        }
      ]
    },
    {
      title: "Django Developer",
      subtitle: "Completed certification in Django development.",
      image: require("./assets/images/Python.jpg"), // Update with the correct path to your image
      imageAlt: "Django Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1Wgtyee90Q_3-cTpMjqK6FPaMTe-JvLf4/view?usp=drive_link" // Add the URL to your Django certification
        }
      ]
    },
    {
      title: "Testing App Jugl",
      subtitle: "Completed certification in Native app testing in Jugl",
      image: require("./assets/images/jugl.jpg"), // Update with the correct path to your image
      imageAlt: "Jugl",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/18XMRChvVVfLNCNrKik5Ur99INTFpuAtD/view?usp=drive_link" 
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "If you'd like to get in touch, feel free to reach out using the details below:",

  email_address: "hariharan23kph@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};

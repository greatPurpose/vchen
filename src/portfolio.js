/* Change this file to get your personal Porfolio */

const theme = {
  primaryTheme: "#6C63FF",
  secondaryTheme: "#55198b",
  easing: "cubic-bezier(0.645, 0.045, 0.355, 1)"
};

const greeting = {
	/* Your Summary And Greeting Section */
	//title: "Hi all 👋 I'm Saad",
	title: "Vicki Chen",
	// subTitle:
	//   "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks",
	subTitle:
		"Vicki focuses on WordPress, Shopify, and React to create a variety of projects from simple landing pages, to sophisticated storefronts, and progressive web apps",
	};

const socialMediaLinks = {
	/* Your Social Media Link */
	github: "https://github.com/greatPurpose",
	linkedin: "https://www.linkedin.com/in/vchen716/",
	gmail: "vickic16@yahoo.com",
	gitlab: "https://gitlab.com/",
	facebook: "https://www.facebook.com/heyvicki/",
	twitter: "https://twitter.com/",
	instagram: "https://www.instagram.com/"
};

const skills = {
  data: [
    {
      title: "Shopify",
      imagePath: "shopify.svg",
      skills: [
        "⚡ Experience with Shopify’s theming system and Liquid templating",
        "⚡ Proficient experience with different Shopify JS APIs (storefront, AJAX Cart, Sections etc)",
        "⚡ Experience with implementing/debugging 3rd party Shopify apps as well as creating custom solutions",
        "⚡ Solid experience with HTML5, CSS3, and JavaScript, with in-depth understanding of DOM"                        
      ],
      softwareSkills: [ ]
    },
    {
      title: "Wordpress",
      imagePath: "wordpress.svg",
      skills: [
        "⚡ Design and implement manual and automated tests for WordPress responsive website",
        "⚡ Working knowledge of CSS to enhance and customize WordPress themes for clients.",
        "⚡ Familiar working with various web hosting platforms (GoDaddy, HostGator, BlueHost, etc.).",
        "⚡ Well-versed with WordPress plugins and utilizing them to fulfill potential functionality requests from clients."        
      ],
      softwareSkills: [ ]
    },
    {
      title: "JavaScript Frameworks",
      imagePath: "frontend.svg",
      skills: [
        "⚡ Experience with web application frameworks such as Angular4+, React, or VueJS",
        "⚡ Experience with responsive UI frameworks such as Bootstrap or Foundation",
        "⚡ Proficiency with CSS preprocessors such as Sass or Less",
        "⚡ Experience with a JavaScript task runner such as Grunt or Gulp",
        "⚡ Solid AJAX and DOM manipulation skills",
        "⚡ A passion for writing clean, efficient code"
      ],
      softwareSkills: [ ]
    },
    {
      title: "UI/UX Design",
      imagePath: "ui_ux_design.svg",
      skills: [
        "⚡ Organize and maintain a scalable design library using Sketch and other design tools",
        "⚡ Collaborate with all UX disciplines to run a living design system for primary use by design, engineering, writing, and QA",
        "⚡ Collaborate with other designers on use of design system components and creation of new componentry",
        "⚡ Experience with responsive design, and the mobile first approach",
        "⚡ Knowledge of industry tools for creating documentation and assets to capture and communicate ideas (i.e. Axure, InVision, Adobe Experience Design, Photoshop, Illustrator, Sketch, etc.)"      
      ],
      softwareSkills: [  ]
    }
  ]
};

const degrees = {
  degrees : [
    {
      title: "University of Southern California",
      subtitle: "Master of Science, Integrated Business, Design and Technology",      
      alt_name: "IIITDM Kurnool",
      duration: "2020 - Present"     
    },
    {
      title: "University of California, Santa Barbara",
      subtitle: "Bachelor of Engineering, Computer Engineering",      
      alt_name: "IIITDM Kurnool",
      duration: "2015 - 2019"     
    }    
  ]
}


// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅",

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/",
      image:
        "https://scontent.fkhi6-1.fna.fbcdn.net/v/t1.0-9/76714032_1730516240415559_1293494289556307968_o.jpg?_nc_cat=103&_nc_ohc=s5f81rdZd6wAQmqUa52YQBA21MjVOy7e-HN9jI7MspRDC-v5ahEouyInQ&_nc_ht=scontent.fkhi6-1.fna&oh=c29141a9a0de7ff2011a8191f5475a78&oe=5E83127C"
    }
  ]
};


const contactInfo = {
  title: "Contact Me ☎️",
  subtitle: "Discuss a project or just want to say hi my inbox is open for all",
  number: "+1-9097623168",
  email_address: "vickic16@yahoo.com"
};

export {
	theme,
	greeting,
	socialMediaLinks,
	skills,
	degrees,
	talkSection,
	contactInfo
};

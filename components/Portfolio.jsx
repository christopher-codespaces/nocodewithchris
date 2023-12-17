import React from 'react';

const projects = [
  {
    title: 'Website for a Former Startup',
    type: 'Website',
    description: 'Designed and developed a user-friendly website to showcase the services and features of our former startup. Focused on enhancing the overall user experience and delivering an exceptional online presence.',
    projectLink: 'https://swiftlyboxversion2.netlify.app/',
    githubLink: 'https://github.com/SwiftlyBox/fatcat',
  },
  {
    title: 'Spiderweb Designs - Client Website',
    type: 'Website',
    description: 'Crafted a unique website for our esteemed client, Spiderweb Designs. Employed creative design concepts to set them apart from their competitors and elevate their online presence.',
    projectLink: 'https://spiderwebdesignssa.co.za/',
    githubLink: 'https://github.com/spiderwebd/v2website',
  },
  {
    title: 'Lulep NGO Website',
    type: 'Website',
    description: 'Collaborated with an upcoming NGO, Lulep, to bring their vision to life. Translated their constitution document into a compelling website design. Continuously working to align the website with their vibrant logo.',
    projectLink: 'https://lulep.netlify.app/',
    githubLink: 'https://github.com/christopher-codespaces?tab=repositories',
  },
  {
    title: 'Built A Restaurant Dashbboard for SwiftlyBox Former Startup',
    type: 'Website',
    description: 'In the early stages of SwiftlyBox, I undertook the ambitious task of developing our first Minimum Viable Product (MVP): a robust Restaurant Dashboard. This web application aimed to streamline operations for restaurants within the SwiftlyBox ecosystem. However, despite the valuable lessons learned, the project encountered challenges in production, crashing when the demand exceeded 100 calls daily.',
    projectLink: 'https://restaurantdashboardswiftlybox.netlify.app/',
    githubLink: 'https://github.com/christopher-codespaces?tab=repositories',
  },
  {
    title: 'Kitchen Express',
    type: 'Website',
    description: 'This is a web app I had to build for my bootcamp course and built it using html ,css and js ',
    projectLink: 'https://kitchenexpressapp.netlify.app/',
    githubLink: 'https://github.com/christopher-codespaces/IWA18',
  },
  {
    title: 'Waitlist Community Website',
    type: 'Website',
    description: 'As an integral part of my previous startup, SwiftlyBox, I took charge of creating a compelling Waitlist Community Website. This strategic landing page played a pivotal role in building a thriving community around our startup, fostering anticipation, and engaging potential users before our official launch.',
    projectLink: 'https://kitchenexpressapp.netlify.app/',
    githubLink: 'https://github.com/christopher-codespaces/form',
  },
  {
    title: 'Web Development Agency',
    type: 'Website',
    description: 'I spearheaded the development of a dynamic and modern website for my startup venture, a Web Development Agency committed to crafting digital experiences that seamlessly merge innovation and functionality. This project was not just about showcasing our technical prowess but embodying the ethos of our agency. ',
    projectLink: 'https://kitchenexpressapp.netlify.app/',
    githubLink: 'https://github.com/christopher-codespaces/brandaide',
  },
  {
    title: 'Events Company ',
    type: 'Website',
    description: ' I led the development of a vibrant and contemporary website for a notable events company as part of my startup venture. This project was a testament to our commitment to creating digital experiences that seamlessly blend innovation with functionality. The website aimed not only to showcase our technical prowess but also to embody the unique ethos of our agency.',
    projectLink: 'https://genie-events.netlify.app/',
    githubLink: 'https://github.com/christopher-codespaces/genie-client',
  },
  {
    title: 'Mobile App for Technical Interviews ',
    type: 'Mobile Application',
    description: ' I took the helm in crafting a mobile application designed specifically for technical interviews, demonstrating my proficiency in building robust solutions. This project focused on implementing CRUD (Create, Read, Update, Delete) functionality, a fundamental aspect of database operations, providing a seamless and efficient experience for users.',
    projectLink: 'https://app.flutterflow.io/share/office-to-let-3keyzm?page=Login',
  },
  {
    title: 'No-Code SaaS Company Development ',
    type: 'Mobile Application',
    description: 'In collaboration with my co-founders, we embarked on the journey of creating a dynamic and robust Software as a Service (SaaS) platform using a no-code approach. Recognizing the need for efficiency and scalability, we opted for tools like Webflow and Wized.io to build a powerful solution for our target market.',
    projectLink: 'https://zadrop.webflow.io/',
  },
];

const PortfolioSection = () => {
  return (
    <section className="bg-white ">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl ">
          Our Portfolio
        </h1>
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-2">
          {projects.map((project, index) => (
            <div key={index} className="flex items-end overflow-hidden bg-cover rounded-lg h-60" style={{ backgroundImage: `url(${project.imageSrc})` }}>
              <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 ">
                <h2 className="mt-4 text-xl font-semibold text-black capitalize ">{project.title}</h2>
                <p className="mt-2 text-lg tracking-wider text-black uppercase  ">{project.type}</p>
                <p className="mt-2 text-lg text-black ">{project.description}</p>
                <div className="mt-4">
                  <a href={project.projectLink} className="text-xs tracking-wide text-blue-500 uppercase hover:underline ">
                    View Project
                  </a>
                  <span className="mx-2 text-xs text-gray-500 dark:text-gray-400">|</span>
                  <a href={project.githubLink} className="text-xs tracking-wide text-black uppercase hover:underline ">
                    GitHub Repo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

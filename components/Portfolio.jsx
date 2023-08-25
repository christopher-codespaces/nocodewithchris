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
    description: 'I didnt have much experince with AWS the web app crashed in production',
    projectLink: 'https://restaurantdashboardswiftlybox.netlify.app/',
    githubLink: 'https://github.com/christopher-codespaces?tab=repositories',
  },
  {
    title: 'Kitchen Express',
    type: 'Website',
    description: 'This is a web app I had to build for my bootcamp course and built it using html ,css and js ',
    projectLink: 'https://kitchenexpressapp.netlify.app/',
    githubLink: 'https://github.com/christopher-codespaces?tab=repositories',
  },
  {
    title: 'Waitlist Community Website',
    type: 'Website',
    description: 'Built this while working on my startup t ',
    projectLink: 'https://kitchenexpressapp.netlify.app/',
    githubLink: 'https://github.com/christopher-codespaces?tab=repositories',
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

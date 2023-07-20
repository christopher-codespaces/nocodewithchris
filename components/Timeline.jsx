import React from "react";

const Timeline = () => {
  const timelineData1 = {
    title: "Professional Journey Timeline",
    subtitle: "A path of entrepreneurial endeavors and technological growth",
    items: [
      {
        title: "Early Entrepreneurial Pursuits",
        date: "Ages nine to thirteen",
        description:
          "During my formative years, I delved into the world of technology, mastering phone flashing techniques and honing my skills on my first laptop. My passion for problem-solving led me to assist my neighbors, fixing electronics and earning recognition within the community. This early experience ignited my entrepreneurial spirit.",
      },
      {
        title: "Venturing into the Music Industry",
        date: "Ages eleven to thirteen",
        description:
          "Collaborating with a friend's recording studio, I discovered my talent for identifying emerging artists. By connecting them with opportunities and gigs, I forged a reputation for discovering talent and fostering connections.",
      },
      {
        title: "Sales Specialist @ Platinum College Of Progress",
        date: "October 2018",
        description:
          "I joined a Social Media Marketing Agency as a Sales Specialist, contributing to the reconstruction of Platinum Colleges' website. My efforts aimed to optimize the platform for enhanced conversion, facilitating the transition of website visitors into students.",
      },
      {
        title: "Co-Founder @ Social Media Marketing Agency",
        date: "March 2020",
        description:
          "An entrepreneurial pursuit with family members led to the establishment of a marketing agency. Despite our passion and efforts, unforeseen challenges emerged during the global Lock Down Era, and the venture had to be discontinued.",
      },
      {
        title: "Initiating the Coding Journey",
        date: "March 2020",
        description:
          "Amid the Lock Down period, I recognized the importance of diversifying my skillset and undertook the journey of learning how to code. Engaging with seasoned professionals, I sought valuable mentorship to advance my capabilities.",
      },
      {
        title: "CS50 React Native Course",
        date: "March 2020",
        description:
          "Recognizing the potential of a social media app startup, I enrolled in the CS50 React Native course. The knowledge gained from this experience played a pivotal role in the early development stages of my venture.",
      },
      {
        title: "CS50 React Course",
        date: "March 2020",
        description:
          "Complementing my ambition to build a website for my social media app startup, I embarked on the CS50 React course. This course equipped me with essential web development skills to create a captivating online platform.",
      },
      {
        title: "Founder Of Nxaza.com",
        date: "March 2021",
        description:
          "Drawing upon my passion for fashion and entrepreneurship, I established Nxaza.com, a thriving clothing brand. This venture encompassed responsibilities ranging from product sourcing to strategic marketing, shaping me into a well-rounded business leader.",
      },
      {
        title: "Founder Of SwiftlyBox",
        date: "April 2022",
        description:
          "Recognizing the need for affordable food delivery services for university students, I founded SwiftlyBox. By connecting with industry experts and leveraging my network, I successfully scaled the startup to a remarkable pre-money evaluation of 1.6 million. Despite eventual market challenges, this endeavor served as a profound learning experience.",
      },
      {
        title: "Co-Founder Of MagnaSite",
        date: "March 2023",
        description:
          "Partnering with like-minded individuals, I co-founded MagnaSite, a forward-looking Development agency. Our mission extended beyond commercial projects; we actively mentored students, imparting the knowledge of responsive web design and cultivating a deeper understanding of web systems.",
      },
    ],
  };



  return (
    <section className="text-black">
      <div className="container max-w-5xl px-4 py-12 mx-auto">
        <div className="grid gap-4 mx-4 sm:grid-cols-12">
          <div className="col-span-12 sm:col-span-3">
            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-400">
              <h1 className="text-3xl font-semibold">My Jouney As A Developer and Entreprenuer</h1>
              <span className="text-sm font-bold tracking uppercase dark:text-gray-400">
                Here is my timeline for you
              </span>
            </div>
          </div>
          <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
              {timelineData1.items.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400"
                >
                  <h3 className="text-xl font-semibold tracking">{item.title}</h3>
                  <time className="text-xs tracking uppercase dark:text-gray-400">{item.date}</time>
                  <p className="mt-3">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;

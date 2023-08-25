/* eslint-disable */


import React from "react";
import Image from"next/image";
import Head from 'next/head';


const TestimonialsSection = () => {
  <Head>
  <title>
    My Life | Christopher
  </title>
  <meta
    name="testimonial"
    content="A young entrepenuer taking charge of his dreams until he does.Well this is about his life."
  />
  <meta name="viewport" content="initial-scale=1.0, width=device-width" />
</Head>
=======
import Head from 'next/head'


const TestimonialsSection = () => {
    <Head>
        <title>
          {" "}
          Welcome To Christopher Makombe
        </title>
        <meta
          name="description"
          content="A young entrepenuer taking charge of his dreams until he does.This is what people say about me."
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
>>>>>>> 21125f054a456e16f03c4d796dfc646ab179798a
  const testimonials = [
    {
      text:
        "Working with Christopher was an absolute pleasure. Their coding skills and attention to detail are top-notch. They delivered the project ahead of schedule and exceeded all my expectations. I would highly recommend Christopher to anyone in need of a skilled freelance developer.",
      name: "Brain Makombe",
      designation: "CEO, Platinum College of Progress",
      image: "https://platinumcollege2.co.za/sitepad-data/uploads/2020/12/PCP_LOGO-removebg-preview-1-1.png",
    },
    {
      text:
        "Christopher a talented and reliable developer.They quickly understood the requirements and turned my ideas into reality. The communication throughout the project was excellent, and the end result was outstanding. I will definitely hire Christopher again for future projects.",
      name: "Llyod ",
      designation: "Founder, SpiderWebDesigns",
      image: "https://spiderwebdesignssa.co.za/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fspiderweb.656566be.jpg&w=1920&q=75",
    },
    {
      text:
        "I had the pleasure of collaborating with Christopher on a complex web development project. His problem-solving skills are remarkable, and they tackled every challenge with ease. The project was completed on time and within budget. I couldn't be happier with the results!",
      name: "Loveness Mahwire",
      designation: "Founder, Lulep",
      image: "https://media.licdn.com/dms/image/C5603AQG6ydv-DeIltQ/profile-displayphoto-shrink_800_800/0/1517042051393?e=1695254400&v=beta&t=grAW7i7gPNLszZazZ_BOnY_cdpU4HU8L6uInjdot88Q",
    },
    // Add more testimonials here if needed
  ];

  return (
    <section className="bg-white ">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
          What our <span className="text-black">clients</span> say
        </h1>

        <p className="max-w-2xl mx-auto mt-6 text-center text-gray-600 ">
            All Happy Clients I have met along my journey
        </p>

        <section className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-8 border rounded-lg dark:border-gray-700">
              <p className="leading-loose text-gray-500 dark:text-gray-400">
                {testimonial.text}
              </p>

              <div className="flex items-center mt-8 -mx-2">
              <img
              className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700"
              src={testimonial.image}
              alt=""
            />

                <div className="mx-2">
                  <h1 className="font-semibold text-gray-800 dark:text-white">
                    {testimonial.name}
                  </h1>
                  <span className="text-sm text-gray-500">
                    {testimonial.designation}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </section>
  );
};

export default TestimonialsSection;

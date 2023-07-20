import { useRef, useState } from "react"

const FaqsCard = (props) => {

    const answerElRef = useRef()
    const [state, setState] = useState(false)
    const [answerH, setAnswerH] = useState('0px')
    const { faqsList, idx } = props

    const handleOpenAnswer = () => {
        const answerElH = answerElRef.current.childNodes[0].offsetHeight
        setState(!state)
        setAnswerH(`${answerElH + 20}px`)
    }

    return (
        <div
            className="space-y-3 mt-5 overflow-hidden border-b"
            key={idx}
            onClick={handleOpenAnswer}
        >
            <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium">
                {faqsList.q}
                {
                    state ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                    )
                }
            </h4>
            <div
                ref={answerElRef} className="duration-300"
                style={state ? {height: answerH } : {height: '0px'}}
            >
                <div>
                    <p className="text-gray-500">
                        {faqsList.a}
                    </p>
                </div>
            </div>
        </div>
    )
}

const FAQ =()=>{
    const faqsList = [
        {
          q: "As a freelancer, what services do you offer?",
          a: "As a freelancer, I offer a wide range of services, including web development, mobile app development, UI/UX design, and backend development. I specialize in building modern, responsive, and user-friendly websites and applications tailored to your business needs.",
        },
        {
          q: "What technologies do you use for web development?",
          a: "For web development, I am proficient in using technologies such as HTML, CSS, JavaScript, React, Vue.js, and Node.js. I also have experience with popular CSS frameworks like Bootstrap and Tailwind CSS to create visually appealing and responsive user interfaces.",
        },
        {
          q: "Can you provide examples of your previous work?",
          a: "Certainly! I have successfully completed projects for various clients, ranging from small businesses to startups. You can check out my portfolio to see some of my previous work and the range of projects I have undertaken.",
        },
        {
          q: "How do you ensure the quality of your work?",
          a: "Ensuring high-quality work is of utmost importance to me. I follow industry best practices, conduct thorough testing, and adhere to coding standards. Additionally, I value feedback from clients and make necessary adjustments to meet their expectations.",
        },
        {
          q: "What is your approach to client communication?",
          a: "I believe in transparent and open communication with my clients. I keep them updated on project progress, milestones, and any potential challenges. I am readily available for discussions, and I actively seek client input to create the best possible solutions.",
        },
        {
          q: "As a developer, what are your areas of expertise?",
          a: "As a developer, I specialize in full-stack web development, mobile app development, and cross-platform development using technologies like React Native and Flutter. I have a strong background in creating scalable and efficient backend solutions as well.",
        },
        {
          q: "How do you handle tight deadlines?",
          a: "When faced with tight deadlines, I prioritize tasks, maintain a well-structured development process, and ensure efficient time management. I understand the importance of delivering projects on time without compromising on quality.",
        },
        {
          q: "Do you have experience working in a team environment?",
          a: "Yes, I have experience working in collaborative team environments. I have been part of cross-functional teams and have effectively contributed to projects with a shared vision. Communication and teamwork are key aspects I emphasize in team settings.",
        },
      ];

    return (
        <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8">
      <div className="space-y-3 text-center">
        <h1 className="text-3xl text-gray-800 font-semibold">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600 max-w-lg mx-auto text-lg">
          Answered all frequently asked questions, Still confused? feel free to contact us.
        </p>
      </div>
      <div className="mt-14 max-w-2xl mx-auto">
        {faqsList.map((item, idx) => (
          <FaqsCard
            key={idx} // Add the key prop here using the idx
            idx={idx}
            faqsList={item}
          />
        ))}
      </div>
    </section>
    )
}

export default FAQ;
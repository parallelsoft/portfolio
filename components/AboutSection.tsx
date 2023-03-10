import React from "react"
import Image from "next/image"

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              what I do!
            </h1>
            <p>
              Hi, my name is Arif and I am a{" "}
              <span className="font-bold">{"highly disciplined"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{"resul-oriented"}</span> software Developer
              based in most beautiful capital, Islamabad.
            </p>
            <br />
            <p>
              I graduated from University of Engineering & Technology, Peshawar in 2013
              with a BS in Computer Engineering & Electrical Engineering and have been working in the
              field ever since.
            </p>
            <br />
            <p>
              I am Passionate about understanding the hardware and putting it into work through through writting efficient software.
            </p>
            <br />
            <p>
              I believe that one should{" "}
              <span className="font-bold text-teal-500">
                never stop growing
              </span>{" "}
              and that&#39;s what I always do, I have a passion for
              technology at service of mankind and i work persistently to achieve my goals through constant striving and unshaken resolve. 🙂
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">I do will in</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image
              src="/hero-image.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0 md:top-24"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

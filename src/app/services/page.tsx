"use client"
import {BsArrowDownRight} from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: '01',
    title: "Frontend development",
    description: "I specialize in building dynamic and responsive user interfaces using modern frontend technologies. From creating interactive web applications to optimizing performance, I focus on delivering seamless, user-friendly experiences across various devices and screen sizes.",
    href: ""
  },
  {
    num: '02',
    title: "Backend development",
    description: "With expertise in server-side technologies, I develop robust and scalable backend systems. I ensure efficient API development, database management, and secure data handling, delivering reliable solutions for complex business logic and functionality.",
    href: ""
  },
  {
    num: '03',
    title: "Mobile development",
    description: "I build cross-platform mobile applications using technologies like Flutter, enabling businesses to reach users on both Android and iOS. I focus on performance, smooth interactions, and integrating native features to create apps that deliver excellent user experiences.",
    href: ""
  }
  ,
  {
    num: '04',
    title: "Design UI/UX",
    description: "I design intuitive and aesthetically pleasing user interfaces, focusing on the user experience at every stage. By leveraging design tools like Figma and Adobe XD, I create visually appealing layouts and interactions that enhance usability and engagement.",
    href: ""
  }
]

const page = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}}}
        className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((item, index) => {
            return <div key={index} className="flex-1 flex flex-col justify-center gap-[60px] group">
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{item.num}</div>
                <Link 
                href={item.href} 
                className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                  <BsArrowDownRight className="text-primary text-3xl"/>
                </Link>
              </div>
              <h2 className="text-[35px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{item.title}</h2>
              <p className="text-white/60 ">{item.description}</p>
              <div className="border-b border-white/20 w-full"></div>
            </div>
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default page
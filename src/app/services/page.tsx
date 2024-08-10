"use client"
import {BsArrowDownRight} from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: '01',
    title: "Frontend development",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, facilis et eaque, mollitia atque illum necessitatibus accusantium quos voluptate asperiores quam obcaecati soluta sit totam quaerat illo! Asperiores, perspiciatis eum.",
    href: ""
  },
  {
    num: '02',
    title: "Backend development",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, facilis et eaque, mollitia atque illum necessitatibus accusantium quos voluptate asperiores quam obcaecati soluta sit totam quaerat illo! Asperiores, perspiciatis eum.",
    href: ""
  },
  {
    num: '03',
    title: "Mobile development",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, facilis et eaque, mollitia atque illum necessitatibus accusantium quos voluptate asperiores quam obcaecati soluta sit totam quaerat illo! Asperiores, perspiciatis eum.",
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
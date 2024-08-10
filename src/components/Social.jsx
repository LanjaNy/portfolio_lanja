import Link from "next/link";
import { FaGithub, FaGitlab, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const socials = [
    {icon: <FaGithub/>, path: ""},
    {icon: <FaGitlab/>, path: ""},
    {icon: <FaLinkedinIn/>, path: ""},
    {icon: <FaWhatsapp/>, path: ""},
]
const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index) => {
            return <Link key={index} href={item.path} className={iconStyles}>{item.icon}</Link>
        })}
    </div>
  )
}

export default Social
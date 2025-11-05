import Link from "next/link";
import { FaGithub, FaGitlab, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const socials = [
    {icon: <FaGithub/>, path: "https://github.com/LanjaNy"},
    {icon: <FaGitlab/>, path: "https://gitlab.com/NyLanja"},
    {icon: <FaLinkedinIn/>, path: "https://mg.linkedin.com/in/ny-fahafahana-lanja-randriamanantena-8234a7229"},
    {icon: <FaWhatsapp/>, path: "https://wa.me/+261341415187"},
]
const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index) => {
            return <Link key={index} href={item.path} target="_blank" className={iconStyles}>{item.icon}</Link>
        })}
    </div>
  )
}

export default Social
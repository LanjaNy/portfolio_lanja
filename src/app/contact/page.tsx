/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react"
import { Notify } from "notiflix";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+261) 34 991 88 48",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "rnflanja06@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Fianarantsoa, Madagascar",
  },
];

const page = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phoneNumber: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleServiceChange = (value: string) => {
    setFormData({ ...formData, service: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setStatus("Email sent successfully");
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          phoneNumber: "",
          service: "",
          message: "",
        });
        Notify.success("Email envoyer avec succès");
      } else {
        setStatus(result.error);
      }
    } catch (error) {
      setStatus("Failed to send message: " + (error as Error).message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none ">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent text-center">
                Let&apos;s work together
              </h3>
              <p className="text-white/60">
                Feel free to reach out if you have any questions, project
                inquiries, or just want to connect. I&apos;m always open to
                discussing new opportunities and collaborating on exciting
                projects!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  name="firstname"
                  type="text"
                  value={formData.firstname}
                  onChange={handleChange}
                  placeholder="Firstname"
                />
                <Input
                  name="lastname"
                  type="text"
                  value={formData.lastname}
                  onChange={handleChange}
                  placeholder="Lastname"
                />
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                />
                <Input
                  name="phoneNumber"
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Phone number"
                />
              </div>
              <Select onValueChange={handleServiceChange} value={formData.service}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service"></SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Web Development">Web Development</SelectItem>
                    <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                    <SelectItem value="Logo Design">Logo Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                name="message"
                className="h-[200px]"
                placeholder="Type your message here."
                value={formData.message}
                onChange={handleChange}
              ></Textarea>
              <Button type="submit" size="md" className="max-w-40" disabled={isLoading}>
                {isLoading ? "Sending..." : "Send Message"}
              </Button>
              {status && <p className="text-white/80 mt-4">{status}</p>}
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default page;
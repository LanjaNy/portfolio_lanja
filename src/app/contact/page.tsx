"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"
import { useTranslation } from "react-i18next"
import { useState } from "react"
import { Notify } from "notiflix";

const info = [
  {
    icon: <FaPhoneAlt />,
    titleKey: 'phone',
    description: "(+261) 34 991 88 48"
  },
  {
    icon: <FaEnvelope />,
    titleKey: 'email',
    description: "rnflanja06@gmail.com"
  },
  {
    icon: <FaMapMarkerAlt />,
    titleKey: 'address',
    description: "Fianarantsoa, Madagascar"
  },
]

const ContactPage = () => {
  const { t } = useTranslation("common")
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phoneNumber: "",
    service: "",
    message: "",
  })
  const [status, setStatus] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleServiceChange = (value: string) => {
    setFormData({ ...formData, service: value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus("")

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()
      if (response.ok) {
        setStatus(t("messageSentSuccess"))
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          phoneNumber: "",
          service: "",
          message: "",
        })
        Notify.success(t('emailSendMessageNotif'));
      } else {
        setStatus(t("messageSentError") + ": " + result.error)
      }
    } catch (error) {
      setStatus(t("messageSentError") + ": " + (error as Error).message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent text-center">{t('letsWorkTogether')}</h3>
              <p className="text-white/60">{t('contactDescription')}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  name="firstname"
                  placeholder={t('firstname')}
                  value={formData.firstname}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="text"
                  name="lastname"
                  placeholder={t('lastname')}
                  value={formData.lastname}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="email"
                  name="email"
                  placeholder={t('email')}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="tel"
                  name="phoneNumber"
                  placeholder={t('phoneNumber')}
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </div>
              <Select onValueChange={handleServiceChange} value={formData.service}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder={t('selectService')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>{t('selectService')}</SelectLabel>
                    <SelectItem value={t('webDevelopment')}>{t('webDevelopment')}</SelectItem>
                    <SelectItem value={t('uiuxDesign')}>{t('uiuxDesign')}</SelectItem>
                    <SelectItem value={t('mobileDev')}>{t('mobileDev')}</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                className="h-[200px]"
                name="message"
                placeholder={t('typeMessage')}
                value={formData.message}
                onChange={handleChange}
                required
              />
              <Button type="submit" size="md" className="max-w-40" disabled={isLoading}>
                {isLoading ? t('sending') : t('sendMessage')}
              </Button>
              {status && <p className="text-white/80 mt-4">{status}</p>}
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{t(item.titleKey)}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default ContactPage
import TextInput, { TextInputTypes } from "@/components/text-field"
import MapIcon from '@public/map.png'
import MailIcon from '@public/email.png'
import PhoneIcon from '@public/phone.png'
import LinkedinIcon from '@public/linkedin.png'
import GithubIcon from '@public/github.png'
import Image, { StaticImageData } from "next/image"
import Link from "next/link"

interface ContactItem {
    icon: StaticImageData,
    description: string
}
const contactItems: ContactItem[] = [
    { icon: MapIcon, description: "São Paulo/SP - Brazil" },
    { icon: MailIcon, description: "henrique.oliverz@gmail.com" },
    { icon: PhoneIcon, description: "+55 11 98665 6496" },
]

const Button = () => (<button type="submit" title="Send Message" className="px-2 py-2 bg-neutral-600 text-white">Send Message</button>)

const Contact = () => (
    <div className='flex flex-wrap bg-gray-100 lg:flex-nowrap px-6 sm:px-16 py-16 lg:space-x-5 space-y-10 min-h-[55vh]'>
        <div className="lg:basis-1/2 flex flex-col flex-wrap justify-between">
            <div>
                <h2 className="text-xl font-bold">Get in touch!</h2>
                <p className='mt-8 text-lg lg:text-xl font-thin'>
                    Feel free to get in touch with me. I am always open to discussing new projetcs, creative ideas or opportunities.
                </p>
            </div>
            <div className="hidden lg:block">
                {contactItems.map(contactItem => (
                    <div key={crypto.randomUUID()} className="flex flex-initial space-x-8 py-3">
                        <Image src={contactItem.icon.src} alt="" width={contactItem.icon.width} height={contactItem.icon.height} />
                        <p className="text-2xl">{contactItem.description}</p>
                    </div>
                ))}
            </div>
            <div className="lg:flex space-x-5 hidden">
                <Link href="https://www.linkedin.com/in/ohenrique/" target="_blank">
                    <Image src={LinkedinIcon.src} alt="" width={LinkedinIcon.width} height={LinkedinIcon.height} />
                </Link>
                <Link href="https://github.com/ohenrique" target="_blank">
                    <Image src={GithubIcon.src} alt="" width={GithubIcon.width} height={GithubIcon.height} />
                </Link>
            </div>
        </div>
        <form className="flex flex-col lg:basis-1/2 space-y-5 grow" action="mailto:henrique.oliverz@gmail.com">
            <div className="space-y-5 sm:space-y-0 sm:space-x-5 sm:flex">
                <TextInput className="w-full" type={TextInputTypes.text} name="name" placeholder="Your name" />
                <TextInput className="w-full" type={TextInputTypes.email} name="email" placeholder="Your email" />
            </div>
            <TextInput type={TextInputTypes.text} name="subject" placeholder="Your subject" />
            <textarea className="resize-none p-2 grow" wrap="true" name="body" placeholder="Your message" maxLength={300} />
            <Button />
        </form>
        <div className="lg:hidden w-full">
            {contactItems.map(contactItem => (
                <div key={crypto.randomUUID()} className="flex flex-initial space-x-8 py-3">
                    <Image src={contactItem.icon.src} alt="" width={contactItem.icon.width} height={contactItem.icon.height} />
                    <p className="text-xl">{contactItem.description}</p>
                </div>
            ))}
        </div>
        <div className="flex space-x-5 lg:hidden">
            <Link href="https://www.linkedin.com/in/ohenrique/" target="_blank">
                <Image src={LinkedinIcon.src} alt="" width={LinkedinIcon.width} height={LinkedinIcon.height} />
            </Link>
            <Link href="https://github.com/ohenrique" target="_blank">
                <Image src={GithubIcon.src} alt="" width={GithubIcon.width} height={GithubIcon.height} />
            </Link>
        </div>
    </div>
);

export default Contact;
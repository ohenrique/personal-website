import Image, { StaticImageData } from 'next/image';

import ReactIcon from '@public/react-icon.png'
import NodeIcon from '@public/node-icon.png'
import CsharpIcon from '@public/csharp-icon.png'
import AngularIcon from '@public/angular-icon.png'
import FinanceIcon from '@public/finance-icon.png'
import RetailIcon from '@public/retail-icon.png'
import EntertainmentIcon from '@public/entertainment-icon.png'
import HealthIcon from '@public/health-icon.png'
import EducationIcon from '@public/education-icon.png'
import GraphDeveloperSkills from '@public/graph-developer-skills.png'
import GraphManagerSkills from '@public/graph-manager-skills.png'

const Resume = () => (
    <div className="flex flex-wrap bg-white min-h-screen items-center py-16 space-y-10 sm:space-y-0">
        <div className="flex flex-wrap justify-around basis-full space-y-10 sm:space-y-0">
            <ComparingSkills
                title="Development frameworks"
                skills={[
                    { name: "React Native", icon: ReactIcon, percent: 100 },
                    { name: "Node.js", icon: NodeIcon, percent: 70 },
                    { name: "React", icon: ReactIcon, percent: 80 },
                    { name: ".NET", icon: CsharpIcon, percent: 30 },
                    { name: "Angular", icon: AngularIcon, percent: 60 },
                ]} />
            <ComparingSkills
                title="Business frameworks"
                skills={[
                    { name: "Finance", icon: FinanceIcon, percent: 100 },
                    { name: "Retail", icon: RetailIcon, percent: 80 },
                    { name: "Entertainment", icon: EntertainmentIcon, percent: 60 },
                    { name: "Health", icon: HealthIcon, percent: 20 },
                    { name: "Education", icon: EducationIcon, percent: 20 },
                ]} />
        </div>
        <div className="flex flex-wrap justify-around basis-full space-y-10 md:space-y-0">
            <div className='md:w-1/2 max-w-4xl'>
                <p className="font-bold text-3xl lg:text-4xl text-center">Developer skills</p>
                <Image className='inline' src={GraphDeveloperSkills} alt='' />
            </div>
            <div className='md:w-1/2 max-w-4xl'>
                <p className="font-bold text-3xl lg:text-4xl text-center">Manager skills</p>
                <Image className='inline' src={GraphManagerSkills} alt='' />
            </div>
        </div>
    </div>
);

interface GraphSkill {
    name: string
    value: number
}
interface GraphSkills {
    north: GraphSkill
    northWest: GraphSkill
    northEast: GraphSkill
    south: GraphSkill
    southWest: GraphSkill
    southEast: GraphSkill
}

const GraphSkills = ({
    north,
    northWest,
    northEast,
    south,
    southWest,
    southEast
}: GraphSkills) => (
    <div className="font-light">
        <p>{north.name}</p>
        <p>{northWest.name}</p>
        <p>{northEast.name}</p>
        <p>{south.name}</p>
        <p>{southWest.name}</p>
        <p>{southEast.name}</p>
    </div>);

interface ComparingSkills {
    title: string
    skills: BarSkill[]
}
const ComparingSkills = ({ title, skills }: ComparingSkills) => (
    <div>
        <p className="font-bold text-3xl lg:text-4xl text-center mb-9">{title}</p>
        {skills.map(skill => (<BarSkill key={crypto.randomUUID()} {...skill} />))}
    </div>
)

const Bar = (percent: number) => (
    <div className="w-44 text-neutral-300 hover:text-stone-600 align-middle">
        <div className="bg-neutral-300 pl-2" style={{ width: `${percent}%` }}>.</div>
    </div>
)

interface BarSkill {
    name: string
    icon: StaticImageData
    percent: number
}
const BarSkill = ({ name, icon, percent }: BarSkill) => (
    <div className="flex justify-center my-3">
        <div className="font-light text-xl md:text-2xl lg:text-3xl w-32 lg:w-44 text-right">{name}</div>
        <Image className='w-8 mx-4 object-fill' src={icon} alt='' />
        {Bar(percent)}
    </div>
)

export default Resume;
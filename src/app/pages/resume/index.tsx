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
import Hexagon from '@public/hexagon.svg'
import DeveloperTrace from '@public/developer-trace.svg'
import ManagerTrace from '@public/manager-trace.svg'

const Resume = () => {
    const graphDeveloperSkills: GraphSkills = {
        north: 'Frontend',
        northWest: 'DevOps',
        northEast: 'Quality Assurance',
        southWest: 'Data Management',
        southEast: 'Agile',
        south: 'Backend',
        trace: DeveloperTrace
    }
    const graphManagerSkills: GraphSkills = {
        north: 'Technical Project Management',
        northWest: 'Site Reliability',
        northEast: 'Quality Process',
        southWest: 'Data Analysis',
        southEast: 'Team Building',
        south: 'Software Architecture',
        trace: ManagerTrace
    }

    return (
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
                <div className='md:w-1/2 max-w-4xl px-2 space-y-6'>
                    <p className="font-bold text-3xl lg:text-4xl text-center">Developer skills</p>
                    {GraphSkills(graphDeveloperSkills)}
                </div>
                <div className='md:w-1/2 max-w-4xl px-2 space-y-6'>
                    <p className="font-bold text-3xl lg:text-4xl text-center">Manager skills</p>
                    {GraphSkills(graphManagerSkills)}
                </div>
            </div>
        </div>
    )
};

interface GraphSkills {
    north: string
    northWest: string
    northEast: string
    south: string
    southWest: string
    southEast: string
    trace: any
}

const GraphSkills = ({
    north,
    northWest,
    northEast,
    south,
    southWest,
    southEast,
    trace
}: GraphSkills) => (
    <div className='text-center text-sm sm:text-base'>
        <p className='inline-block'>{north}</p>
        <div className='flex justify-center'>
            <div className='flex flex-col justify-around'>
                <p className='inline-block text-right'>{northWest}</p>
                <p className='inline-block text-right'>{southWest}</p>
            </div>
            <div>
                <Image className='m-2 absolute animate-pulse stroke-2' src={trace} alt='' />
                <Image className='m-2 opacity-30' src={Hexagon} alt='' />
            </div>
            <div className='flex flex-col justify-around'>
                <p className='inline-block text-left'>{northEast}</p>
                <p className='inline-block text-left'>{southEast}</p>
            </div>
        </div>
        <p className='inline-block'>{south}</p>
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
    <div className="w-44 text-neutral-300 align-middle">
        <div className="bg-neutral-300 pl-2 select-none" style={{ width: `${percent}%` }}>.</div>
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
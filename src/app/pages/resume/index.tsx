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
    <div className="flex flex-wrap bg-white min-h-screen items-center py-16">
        <div className="flex flex-wrap justify-around basis-full">
            <ComparingSkills
                title="Development frameworks"
                skills={[
                    { name: "React Native", icon: ReactIcon.src, percent: 100 },
                    { name: "Node.js", icon: NodeIcon.src, percent: 70 },
                    { name: "React", icon: ReactIcon.src, percent: 80 },
                    { name: ".NET", icon: CsharpIcon.src, percent: 30 },
                    { name: "Angular", icon: AngularIcon.src, percent: 60 },
                ]} />
            <ComparingSkills
                title="Business frameworks"
                skills={[
                    { name: "Finance", icon: FinanceIcon.src, percent: 100 },
                    { name: "Retail", icon: RetailIcon.src, percent: 80 },
                    { name: "Entertainment", icon: EntertainmentIcon.src, percent: 60 },
                    { name: "Health", icon: HealthIcon.src, percent: 20 },
                    { name: "Education", icon: EducationIcon.src, percent: 20 },
                ]} />
        </div>
        <div className="flex flex-wrap justify-around basis-full">
            <div className='md:w-1/2 max-w-4xl'>
                <p className="font-bold text-3xl text-center">Developer skills</p>
                <img className='inline' src={GraphDeveloperSkills.src} />
            </div>
            <div className='md:w-1/2 max-w-4xl'>
                <p className="font-bold text-3xl text-center">Manager skills</p>
                <img className='inline' src={GraphManagerSkills.src} />
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
        <p className="font-bold text-3xl text-center">{title}</p>
        {skills.map(skill => (<BarSkill {...skill} />))}
    </div>
)

const Bar = (percent: number) => (
    <div className="w-44 text-neutral-300 hover:text-stone-600 align-middle">
        <div className="bg-neutral-300 pl-2" style={{ width: `${percent}%` }}>.</div>
    </div>
)

interface BarSkill {
    name: string
    icon: string
    percent: number
}
const BarSkill = ({ name, icon, percent }: BarSkill) => (
    <div className="flex justify-center my-3">
        <div className="font-light text-2xl w-32 text-right">{name}</div>
        <img className='h-8 mx-4' src={icon} />
        {Bar(percent)}
    </div>
)

export default Resume;
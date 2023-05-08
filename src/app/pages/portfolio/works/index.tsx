import Carousel from 'react-elastic-carousel';
import './index.css'

interface Work {
    title: string
    icon: any
    image: string
    description: string
    imageAlign?: string
}
const Works = (works: Work[]) => {
    return (
        <div>
            {/* {WorksTimeline(works)} */}
            <Carousel className='max-h-screen' renderPagination={() => (<></>)} renderArrow={() => (<></>)} pagination={false}>
                {works.map(work => {console.log(work); return (
                    <div key={crypto.randomUUID()}
                        className={`min-h-screen bg-dark-gray bg-no-repeat bg-${work?.imageAlign || 'center'} bg-scroll bg-cover text-center
                        flex flex-wrap flex-col justify-center basis-full bg-blend-soft-light`}
                        style={{ backgroundImage: `url(${work.image})` }} >
                        <img className='inline-block mx-auto max-h-24 max-w-xs' src={work.icon} />
                        <h1 className='text-white text-center text-4xl md:text-5xl font-bold my-7'>{work.title}</h1>
                        <div>
                            <p className='inline-block text-white text-xl md:text-3xl font-thin md:max-w-lg px-2'>{work.description}</p>
                        </div>
                    </div>
                )})}
            </Carousel>
        </div>
    )
};

const WorksTimeline = (works: Work[]) => (
    <div>
        {works.map(work => (WorkItem(work)))}
    </div>
)

const WorkItem = (work: Work) => (<div>{work.icon}</div>)

export default Works;
import Image from 'next/image';

import LeftArrow from '@public/left-arrow.png'
import RightArrow from '@public/right-arrow.png'

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
            <Carousel className='max-h-screen'
                emulateTouch={true}
                showIndicators={false}
                showThumbs={false}
                showStatus={false}
                preventMovementUntilSwipeScrollTolerance={true}
                swipeScrollTolerance={50}
                renderArrowPrev={(onClickHandler, hasPrev) =>
                    hasPrev && (
                        <a className='cursor-pointer z-50 absolute w-5 h-5 md:w-8 md:h-8 left-10 top-[90vh] md:top-[50vh] shadow-2xl' onClick={onClickHandler}>
                            <Image color='white' src={LeftArrow.src} alt='' sizes={`max-width: ${LeftArrow.width}`} fill={true} />
                        </a>
                    )}
                renderArrowNext={(onClickHandler, hasNext) =>
                    hasNext && (
                        <a className='cursor-pointer z-50 absolute w-5 h-5 md:w-8 md:h-8 right-10 top-[90vh] md:top-[50vh] shadow-2xl' onClick={onClickHandler}>
                            <Image color='white' src={RightArrow.src} alt='' sizes={`max-width: ${RightArrow.width}`} fill={true} />
                        </a>
                    )
                }>
                {works.map(work => (
                    <div key={crypto.randomUUID()}
                        className={`min-h-screen bg-dark-gray bg-no-repeat bg-${work?.imageAlign || 'center'} bg-scroll bg-cover text-center 
                        flex flex-wrap flex-col justify-center basis-full bg-blend-soft-light`}
                        style={{ backgroundImage: `url(${work.image})` }}>
                        <Image className='inline-block mx-auto max-h-24 max-w-xs object-contain' src={work.icon} alt='' />
                        <h1 className='text-white text-center text-4xl md:text-5xl font-bold my-7'>{work.title}</h1>
                        <div>
                            <p className='inline-block text-white text-xl md:text-3xl font-thin md:max-w-lg px-2'>{work.description}</p>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    )
};

export default Works;
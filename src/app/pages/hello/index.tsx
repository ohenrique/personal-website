import Logo from '@/components/logo'
import Photo from '@public/photo.png'

const Hello = () => (
    <div
        className='flex min-h-screen bg-black bg-no-repeat bg-center bg-scroll lg:bg-right-bottom'
        style={{ backgroundImage: `url(${Photo.src})` }}
    >
        <div className='mx-6 sm:mx-16 my-52 lg:basis-1/3 2xl:basis-1/2 text-white'>
            <Logo />
                <p className='mt-8 text-2xl md:text-3xl font-light' style={{ lineHeight: 2 }}>
                    Highly experienced developer with over 10 years in the industry.
                    Starting as a software developer, she quickly established herself as a skilled professional.
                    Today, as a software manager, her greatest strengths lie in her adaptability to changing environments and her exceptional leadership abilities.
                </p>
        </div>
    </div>
);

export default Hello;
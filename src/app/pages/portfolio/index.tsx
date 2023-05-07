import WelcomePortifolio from '@public/welcome-portifolio.png'

const Portifolio = () => (
    <div>
        <div className="flex min-h-[730px] bg-black bg-no-repeat bg-bottom bg-scroll"
            style={{ backgroundImage: `url(${WelcomePortifolio.src})` }}>
            <p className='grow text-white text-center text-3xl md:text-4xl font-thin my-40'>Discover a collection of meaningful professional experiences that have shaped my journey,
                waiting to be explored in my portfolio.</p>
        </div>

    </div>
);

export default Portifolio;
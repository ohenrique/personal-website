'use client'

import WelcomePortifolio from '@public/welcome-portifolio.png'
import Works from './works';
import GpBanner from '@public/gp-banner.png'
import GpIcon from '@public/gp-icon.png'
import CSNBanner from '@public/csn-banner.jpg'
import CSNIcon from '@public/csn-icon.png'
import VRSystemBanner from '@public/vrsystem-banner.jpg'
import VRSystemIcon from '@public/vrsystem-icon.png'
import ItatiaiaBanner from '@public/itatiaia-banner.jpg'
import ItatiaiaIcon from '@public/itatiaia-icon.png'
import PontePretaBanner from '@public/pontepreta-banner.jpg'
import PontePretaIcon from '@public/pontepreta-icon.png'
import NeosaldinaBanner from '@public/neosaldina-banner.jpg'
import NeosaldinaIcon from '@public/neosaldina-icon.png'
import InstitutoUnibancoBanner from '@public/institutounibanco-banner.jpg'
import InstitutoUnibancoIcon from '@public/institutounibanco-icon.png'
import IcatuBanner from '@public/icatu-banner.webp'
import IcatuIcon from '@public/icatu-icon.png'
import ItauBanner from '@public/itau-banner.webp'
import ItauIcon from '@public/itau-icon.png'
import MidwayBanner from '@public/midway-banner.jpg'
import MidwayIcon from '@public/midway-icon.png'
import banQiBanner from '@public/banqi-banner.png'
import banQiIcon from '@public/banqi-icon.png'

const Portifolio = () => {

    const works = [{
        description: `Companhia Siderúrgica Nacional (CSN) is a leading Brazilian steel company. With a rich history, CSN specializes in steel production, mining, logistics, and infrastructure. Known for its high-quality products and commitment to sustainability, CSN is a key player in the global steel industry.`,
        title: 'CSN - Compania Siderúrgica Nacional', image: CSNBanner.src, icon: CSNIcon
    }, {
        description: `VR System in Volta Redonda excels in commercial automation and food services. They offer cutting-edge technologies like POS systems, inventory management, and supply chain optimization. Trusted for restaurant management, VR System delivers tailored solutions, enhancing business operations.`,
        title: '', image: VRSystemBanner.src, icon: VRSystemIcon
    }, {
        description: `The Formula 1 Brazil Grand Prix is a renowned motorsport event held annually in Brazil. Hosted at the iconic Interlagos circuit in São Paulo, it attracts top racing teams and drivers from around the world. With a rich history and a challenging track, the race is known for its high-speed action and passionate fan base, making it one of the most prestigious events in the Formula 1 championship.`,
        title: 'GP Formula 1 - Brasil', image: GpBanner.src, icon: GpIcon
    }, {
        description: `Ponte Preta is a Brazilian soccer team based in Campinas. Founded in 1900, it has a rich history and is known for its passionate fan base. Competing in national leagues, Ponte Preta has had notable achievements and remains a respected team in Brazilian football.`,
        title: 'Rádio Itaitiaia', image: ItatiaiaBanner.src, icon: ItatiaiaIcon
    }, {
        description: `Ponte Preta is a Brazilian professional soccer team based in Campinas, São Paulo. Founded in 1900, it is one of the oldest and most traditional clubs in the country. The team plays in black and white colors and has a passionate fan base. Ponte Preta has had notable achievements in regional competitions and the Copa do Brasil.`,
        title: 'Ponte Preta', image: PontePretaBanner.src, icon: PontePretaIcon
    }, {
        description: `Neosaldina is an over-the-counter medication widely used in Brazil for the relief of headaches and migraines. Known for its effective formula, Neosaldina combines analgesic and antispasmodic properties to provide fast and effective pain relief, helping individuals find relief from common headaches and related symptoms.`,
        title: 'Neosaldina', image: NeosaldinaBanner.src, icon: NeosaldinaIcon
    }, {
        description: `Instituto Unibanco is a Brazilian nonprofit organization focused on improving education. Through partnerships with schools and communities, it develops innovative projects and initiatives to enhance public education quality, teacher training, and youth employability. It is dedicated to creating a positive impact on the educational landscape in Brazil.`,
        title: 'Instituto Unibanco', image: InstitutoUnibancoBanner.src, icon: InstitutoUnibancoIcon
    }, {
        description: `Icatu Seguros is a leading insurance company in Brazil. With a strong presence in the market, it offers a wide range of insurance products and services, including life insurance, pension plans, and investment solutions. Icatu Seguros is known for its customer-centric approach, financial stability, and commitment to providing reliable and comprehensive coverage to individuals and businesses.`,
        title: 'Icatu Seguros', image: IcatuBanner.src, icon: IcatuIcon
    }, {
        description: `Itaú is a major financial institution in Brazil, providing banking, investment, insurance, and asset management services. With a large branch network and digital banking solutions, Itaú is committed to delivering excellent customer service and contributing to the Brazilian economy.`,
        title: 'Itaú', image: ItauBanner.src, imageAlign: 'right', icon: ItauIcon
    }, {
        description: `Midway Financeira is a prominent financial company in Brazil. Specializing in consumer credit and financing solutions, offers a range of products and services, including personal loans, credit cards, and vehicle financing. With a customer-centric approach and streamlined processes, they aim to provide convenient and accessible financial solutions to individuals, contributing to their financial well-being and aspirations.`,
        title: 'Midway Financeira', image: MidwayBanner.src, imageAlign: 'left', icon: MidwayIcon
    }, {
        description: `The banQi is a financial services platform in Brazil that provides digital banking services, primarily targeting lower-income individuals. It allows users to open a digital bank account quickly and easily, and offers various banking activities such as receiving salaries, making deposits and withdrawals, transferring money, paying bills, accessing credit, and using a prepaid card for purchases and withdrawals.`,
        title: 'banQi - Casas Bahia', image: banQiBanner.src, icon: banQiIcon
    }]

    return (
        <div>
            <div className="flex min-h-[730px] bg-black bg-no-repeat bg-bottom bg-scroll"
                style={{ backgroundImage: `url(${WelcomePortifolio.src})` }}>
                <p className='grow text-white text-center text-3xl md:text-4xl font-thin my-40'>Discover a collection of meaningful professional experiences that have shaped my journey,
                    waiting to be explored in my portfolio.</p>
            </div>
            <div>
                {Works(works)}
            </div>
        </div>
    )
};

export default Portifolio;
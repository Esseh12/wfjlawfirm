import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import construction from '../../assets/images/construction.jpg';
import litigation from '../../assets/images/litigation.jpg';
import business from '../../assets/images/business.jpg';
import personal from '../../assets/images/family-law.jpg';
import commercialCollections from '../../assets/images/commercial-collections.jpg';
import employment from '../../assets/images/employment.jpg';

const practiceAreas = [
	{
		title: 'CONSTRUCTION',
		image: construction,
		description:
			'Representation for corporations in collections, employment, and defense of construction defects ',
		featured: true,
	},
	{
		title: 'LITIGATION',
		image: litigation,
		description:
			'Includes litigation, contract review and negotiation, lien and bond issues',
		featured: true,
	},
	{
		title: 'BUSINESS',
		image: business,
		description:
			'Small businesses of 50-500 employees, formation, governance, real estate and contract review',
		featured: true,
	},
	{
		title: 'PERSONAL',
		image: personal,
		description:
			'Automobile accidents, workplace injuries, wrongful death, insurance claims',
		featured: true,
	},
	{
		title: 'COMMERCIAL\nCOLLECTIONS',
		image: commercialCollections,
		description:
			'In-house debtor collection, litigation, bankruptcy, counter claim defense',
		featured: true,
	},
	{
		title: 'EMPLOYMENT',
		image: employment,
		description:
			'Day-to-day consults on HR issues and litigation defense for employee claims',
		featured: true,
	},
];

const PracticeAreasSlider = () => {
	const PrevArrow = ({ onClick }) => (
		<button
			onClick={onClick}
			className='absolute -left-4 top-1/2 -translate-y-1/2 z-10 p-2 text-[#1b3a68] bg-white rounded-full shadow hover:bg-[#1b3a68] hover:text-white transition'>
			<ChevronLeft size={28} />
		</button>
	);

	const NextArrow = ({ onClick }) => (
		<button
			onClick={onClick}
			className='absolute -right-4 top-1/2 -translate-y-1/2 z-10 p-2 text-[#1b3a68] bg-white rounded-full shadow hover:bg-[#1b3a68] hover:text-white transition'>
			<ChevronRight size={28} />
		</button>
	);

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: <PrevArrow />,
		nextArrow: <NextArrow />,
		responsive: [
			{ breakpoint: 1024, settings: { slidesToShow: 3 } },
			{ breakpoint: 768, settings: { slidesToShow: 2 } },
			{ breakpoint: 480, settings: { slidesToShow: 1 } },
		],
	};

	return (
		<div className='bg-white py-8 sm:py-16 md:py-24 font-din-condensed max-w-screen'>
			<div className='max-w-5xl mx-auto px-8'>
				<div className='flex items-end  mb-12'>
					<h2 className='text-2xl sm:text-3xl font-bold text-[#1b3a68] md:mr-4 mr-2'>
						PRACTICE AREAS
					</h2>
					<button className='text-[#1b3a68] font-bold text-sm '>
						VIEW ALL →
					</button>
				</div>

				<div className='relative'>
					<Slider {...settings}>
						{practiceAreas.map((area, i) => (
							<div
								key={i}
								className='px-2 group '>
								<div className='relative overflow-hidden h-64 '>
									<div className='h-64'>
										<img
											src={area.image}
											alt={area.title}
											className='w-full h-full object-cover'
										/>
									</div>
									<div
										className={`absolute inset-0 group-hover:flex items-center justify-center hidden group-hover:bg-[#1b3a68] transition-all duration-300 pt-12`}>
										<div className='text-center text-white'>
											{area.featured && (
												<>
													<h3 className='text-xl font-bold mb-2 whitespace-pre-line text-white'>
														{area.title}
													</h3>
													<p className='text-sm mb-4 px-4'>
														{area.description}
													</p>
													<button className='text-sm bg-transparent  text-white px-6 py-2 '>
														LEARN MORE →
													</button>
												</>
											)}
										</div>
									</div>
								</div>
								<div className='text-center bg-[#f0f0f0] text-[#1b3a68] p-4 pt-6 flex items-center justify-center group-hover:bg-[#1b3a68] transition-all duration-300 group-hover:text-white'>
									<h3 className='text-xl font-bold mb-2 whitespace-pre-line group-hover:text-[#1b3a68]'>
										{area.title}
									</h3>
								</div>
							</div>
						))}
					</Slider>
				</div>
			</div>
		</div>
	);
};

export default PracticeAreasSlider;

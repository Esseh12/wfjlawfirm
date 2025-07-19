import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialSlider = ({
	testimonials = [],
	heading,
	settings: customSettings = {},
}) => {
	// Custom arrow components
	const CustomPrevArrow = ({ onClick }) => (
		<button
			onClick={onClick}
			className='absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 transition-colors duration-200'>
			<ChevronLeft className='w-14 h-14 text-white' />
		</button>
	);

	const CustomNextArrow = ({ onClick }) => (
		<button
			onClick={onClick}
			className='absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 transition-colors duration-200'>
			<ChevronRight className='w-14 h-14 text-white' />
		</button>
	);

	const defaultSettings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		pauseOnHover: true,
		arrows: true,
		prevArrow: <CustomPrevArrow />,
		nextArrow: <CustomNextArrow />,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
				},
			},
		],
	};

	const sliderSettings = { ...defaultSettings, ...customSettings };

	return (
		<div className='bg-[#1b3a68] text-white max-h-max'>
			<div className='max-w-screen  mx-auto relative'>
				<Slider {...sliderSettings}>
					{testimonials.map((testimonial, index) => (
						<div key={testimonial.id}>
							<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[340px]'>
								{/* Text Content */}
								<div className='order-2 lg:order-1 pl-4 lg:pl-24 py-8 md:py-0'>
									{heading && (
										<h2 className='text-2xl font-bold text-left mb-8'>
											{heading}
										</h2>
									)}
									<p className='text-lg md:text-xl leading-relaxed mb-6'>
										{testimonial.text}
									</p>
								</div>
								{/* Image */}
								<div className='hidden md:block order-1 lg:order-2'>
									<div className='relative max-h-[340px] overflow-hidden flex justify-end'>
										<img
											src={testimonial.image}
											alt={`Client testimonial ${index + 1}`}
											className='h-full object-cover max-w-[500px] w-full'
										/>
									</div>
								</div>
							</div>
						</div>
					))}
				</Slider>

				<style jsx>{`
					.slick-dots {
						bottom: -50px;
					}

					.slick-dots li button:before {
						color: #6b6b6b;
						opacity: 0.5;
						font-size: 8px;
					}

					.slick-dots li.slick-active button:before {
						opacity: 1;
					}

					/* Hide default slick arrows since we're using custom ones */
					.slick-prev,
					.slick-next {
						display: none !important;
					}

					@media (max-width: 768px) {
						.slick-prev,
						.slick-next {
							display: none !important;
						}
					}
				`}</style>
			</div>
		</div>
	);
};
export default TestimonialSlider;

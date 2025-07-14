import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import img1 from '../assets/images/support-slide-1.jpg';
import img2 from '../assets/images/support-slide-2.jpg';
import img3 from '../assets/images/support-slide-3.png';
import img4 from '../assets/images/support-slide-4.png';

const TestimonialSlider = () => {
	// Sample testimonials - replace with your actual data
	const testimonials = [
		{
			id: 1,
			text: 'This service is both affordable and accessible for a small business like ours. The suite of services is exactly what a company like ours needs to manage and service our growing and ever-evolving workforce. I highly recommend it for any small-to-mid-sized business executive looking to upgrade their HR and Employee services.',
			image: img1,
		},
		{
			id: 2,
			text: "Wagner, Falconer & Judd has been instrumental in helping us navigate complex compliance issues. Their expertise and responsiveness have been invaluable to our organization's success.",
			image: img2,
		},
		{
			id: 3,
			text: 'The legal support and guidance we receive is exceptional. They understand our business needs and provide practical solutions that work in the real world.',
			image: img3,
		},
		{
			id: 4,
			text: 'Outstanding service and professional expertise. The team goes above and beyond to ensure we have the support we need when we need it.',
			image: img4,
		},
	];

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		pauseOnHover: true,
		arrows: true,
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

	return (
		<div className='bg-slate-800 text-white '>
			<div className='max-w-screen '>
				{/* Slider */}
				<Slider {...settings}>
					{testimonials.map((testimonial, index) => (
						<div
							key={testimonial.id}
							className=''>
							<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[380px]'>
								{/* Text Content */}
								<div className='order-2 lg:order-1 pl-4 lg:pl-24'>
									<p className='text-lg md:text-xl leading-relaxed mb-6'>
										{testimonial.text}
									</p>
								</div>

								{/* Image */}
								<div className='order-1 lg:order-2'>
									<div className='relative h-[380px] overflow-hidden flex justify-end'>
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

				{/* Custom Styles */}
				<style jsx>{`
					.slick-dots {
						bottom: -50px;
					}

					.slick-dots li button:before {
						color: white;
						opacity: 0.5;
						font-size: 12px;
					}

					.slick-dots li.slick-active button:before {
						opacity: 1;
					}

					.slick-prev:before,
					.slick-next:before {
						color: white;
						font-size: 24px;
					}

					.slick-prev {
						left: 25px;
						z-index: 10;
					}

					.slick-next {
						right: 25px;
						z-index: 10;
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

const Hero = ({ image, subText, mainText }) => {
	return (
		<section className='bg-[#1b3a68] flex flex-col-reverse md:flex-row min-h-[60vh] md:min-h-[90vh] gap-10 md:gap-24 overflow-hidden pt-18 md:pt-28'>
			{/* Image */}
			<div className='md:max-w-xl md:w-[45%]'>
				<img
					src={image}
					alt='hero'
					className='h-full w-full object-cover'
				/>
			</div>

			{/* Text */}
			<div className='flex-1 flex items-center justify-center md:justify-start px-4 pt-6 md:pt-0'>
				<div className='flex flex-col gap-4 text-white text-center md:text-left'>
					<p className='hidden md:block font-extralight text-xl leading-[1.625rem] uppercase tracking-[2px]'>
						{subText}
					</p>
					<h1 className='font-extralight font-stretch-extra-expanded text-3xl sm:text-4xl md:text-6xl leading-[3.7rem] uppercase md:max-w-xs tracking-widest'>
						{mainText}
					</h1>
				</div>
			</div>
		</section>
	);
};

export default Hero;

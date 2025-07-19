import bgPattern from '../../assets/images/hero-pattern.png';

const Hero = ({ title = 'CONTACT' }) => {
	return (
		<section
			className='h-[55vh] bg-fixed bg-center bg-cover flex flex-col lg:flex-row justify-end text-white text-4xl hero-bg'
			style={{
				backgroundImage: `url(${bgPattern})`,
			}}>
			<div className='bg-[#1b3a68] w-full lg:w-[85vw] diagonal-left-clip flex flex-col justify-center h-[25vh] lg:h-full px-8 '>
				{' '}
				<div className=' text-center md:text-right w-full  px-4 md:px-18'>
					<h1 className='text-white text-center text-3xl sm:text-4xl md:text-5xl font-light tracking-[0.3em] uppercase md:leading-[53px] '>
						{title}
					</h1>
				</div>
			</div>
		</section>
	);
};

export default Hero;

import bgImage from '../../assets/images/hero-pattern.png';

const Hero = ({ title = 'CONTACT' }) => {
	return (
		<section className='bg-[#1b3a68] flex flex-col md:flex-row items-center justify-center overflow-hidden relative h-[230px]'>
			{/* Left side with clipped background */}
			<div
				className='w-[700px] h-full'
				style={{
					backgroundImage: `url(${bgImage})`,
					backgroundSize: 'cover',
					backgroundPosition: 'left center',
					backgroundRepeat: 'no-repeat',
					clipPath: 'polygon(0 0, 70% 0, 85% 100%, 0% 100%)',
				}}
			/>

			{/* Right side with text */}
			<div className='z-10 text-right w-full flex self-center'>
				<h1 className='text-white text-4xl md:text-5xl font-light tracking-[0.3em] uppercase md:leading-[53px]'>
					{title}
				</h1>
			</div>
		</section>
	);
};

export default Hero;

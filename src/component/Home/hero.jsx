import bgPattern from '../../assets/images/hero-pattern.png';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
	return (
		<section
			className='h-[80vh] bg-fixed bg-center bg-cover flex flex-col lg:flex-row justify-end text-white text-4xl hero-bg'
			style={{
				backgroundImage: `url(${bgPattern})`,
			}}>
			<div className='bg-[#1b3a68] w-full lg:w-[75vw] diagonal-left-clip flex flex-col justify-center h-[55vh] lg:h-full px-8 lg:pl-72 slide-in-left'>
				<h1 className='font-din-condensed font-thin text-4xl md:text-[52px] leading-[58px] tracking-[0.3em]'>
					SIMPLIFY <br /> THE COMPLEX
				</h1>
				<div className='bg-white h-2 w-18 my-4' />
				<p className='max-w-sm text-lg md:text-xl font-bold mt-4'>
					We're proving that it's possible for a law firm to speak human.
				</p>
				<button className='flex self-start text-base md:text-xl mt-3 items-center gap-2 group'>
					SEE HOW{' '}
					<ArrowRight
						size={20}
						className='group-hover:translate-x-1 transition-transform duration-300'
					/>
				</button>
			</div>
		</section>
	);
};

export default Hero;

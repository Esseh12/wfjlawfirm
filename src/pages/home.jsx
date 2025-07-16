import { ArrowRight } from 'lucide-react';
import Map from '../component/Home/map';
import PracticeAreasSlider from '../component/Home/PracticeAreasSlide';

const Home = () => {
	return (
		<section className=''>
			<Map />
			<section className='bg-white  py-16 md:py-24 px-8 md:px-0 max-w-5xl mx-auto text-left'>
				<h1 className='font-din-condensed font-bold text-2xl md:text-3xl leading-9.5 text-[#1b3a68] mb-4'>
					ABOUT WAGNER, FALCONER & JUDD, LTD.
				</h1>
				<p className='text-[#6B6B6B] text-lg md:text-xl leading-7'>
					Translating legalese since 1932, Wagner, Falconer & Judd, LTD. is one
					of the most experienced law firms in Minnesota. Based in Minneapolis
					and with offices in Brookfield, Wisconsin, Billings, Montana, and
					Vancouver, Canada, we focus on business and corporate law, commercial
					collections, civil litigation and construction law. We’re committed to
					giving you the best legal representation, in a way that makes sense to
					you, while maintaining the highest ethical standards.
				</p>
			</section>
			<section className='font-din-condensed bg-[#1b3a68] text-white py-16 md:py-24 lg:py-32 px-8 md:px-0'>
				<div className='max-w-5xl mx-auto flex flex-col gap-4 items-center text-center'>
					<p className='font-bold text-2xl leading-9.5'>
						SIMPLIFYING THE LAW FOR OUR CLIENTS IS OUR MAIN SPECIALTY.
					</p>
					<div className='group flex items-center gap-2 text-lg md:text-xl font-bold cursor-pointer border-2 border-white px-4 py-2'>
						<span className='text-lg font-bold leading-normal'>
							FIND AN ATTORNEY
						</span>
						<span className='transition-transform duration-300 group-hover:translate-x-1'>
							<ArrowRight />
						</span>
					</div>
				</div>
			</section>
			<PracticeAreasSlider />
		</section>
	);
};
export default Home;

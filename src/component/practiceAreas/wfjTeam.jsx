import { ArrowRight } from 'lucide-react';

const WfjTeams = ({ mainText, relatedHeading, relatedLink }) => {
	return (
		<div className='max-w-5xl mx-auto py-12  px-8 md:px-0 md:py-20 flex gap-20 flex-col lg:flex-row'>
			<p className='text-base md:text-xl md:font-medium leading-normal md:leading-7 text-[#6b6b6b] max-w-2xl mx-auto lg:mx-0'>
				{mainText}
			</p>
			<div className='hidden md:flex flex-col gap-6'>
				<h2 className='font-din-condensed font-bold text-[#1B3A68] text-lg leading-6 uppercase tracking-tighter font-din-condensed'>
					{relatedHeading}
				</h2>
				<span className='flex items-end max-w-[280px] group cursor-pointer'>
					<p className='text-lg font-medium text-[#6B6B6B] leading-normal'>
						{relatedLink}{' '}
						<ArrowRight
							className='inline transition-transform duration-300 group-hover:translate-x-1'
							width={18}
						/>
					</p>
				</span>
			</div>
		</div>
	);
};

export default WfjTeams;

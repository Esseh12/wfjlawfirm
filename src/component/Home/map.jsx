import canada from '../../assets/images/canada.svg';

const Map = () => {
	return (
		<>
			<div className='bg-[#17325c] md:h-[400px]   py-8'>
				<div className='flex items-center flex-col md:flex-row justify-center max-w-5xl mx-auto gap-3.5 sm:gap-5 md:gap-10'>
					<div className='md:h-96 md:w-96'>
						<img
							src={canada}
							alt='map'
							className='w-full h-full'
						/>
					</div>

					{/* text section */}
					<div className='flex flex-col gap-2 ml-8 md:ml-0 py-6 md:py-0'>
						<h1 className='text-white text-2xl md:text-3xl font-bold mt-4'>
							Practice News
						</h1>
						<p className='text-white sm:text-lg md:text-xl leading-7 max-w-3xl'>
							Wagner, Falconer & Judd is now the LegalShield Provider Law Firm
							for members in British Columbia and Alberta Canada!
						</p>
					</div>
				</div>
			</div>
		</>
	);
};
export default Map;

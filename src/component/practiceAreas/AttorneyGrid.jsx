const AttorneyGrid = ({ heading, attorneys }) => {
	return (
		<div className='min-h-screen bg-white font-din'>
			<div className='max-w-6xl mx-auto px-4 py-12 md:py-24'>
				<h2 className='text-2xl sm:text-3xl md:text-4xl font-bold  text-[#1b3a68] mb-12 text-left md:leading-[53px] uppercase font-din-condensed tracking-[-1px]'>
					{heading}
				</h2>

				<div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
					{attorneys.map((attorney) => (
						<div
							key={attorney.id}
							className='group relative overflow-hidden cursor-pointer'>
							{/* Image */}
							<div className='relative aspect-[3/4]'>
								<img
									src={attorney.image}
									alt={attorney.name}
									className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
								/>

								{/* Blue overlay on hover only */}
								<div className='absolute inset-0 group-hover:bg-[#1b3a68] bg-opacity-0 group-hover:bg-opacity-90 transition-all duration-300'></div>

								{/* Text overlay */}
								<div className='absolute inset-0 flex items-center justify-center px-6 text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
									<div className='transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300'>
										<h3 className='text-xl font-bold mb-2 tracking-wide'>
											{attorney.name}
										</h3>
										<div className='w-8 h-0.5 bg-white mx-auto mb-3'></div>
										<p className='text-lg font-semibold mb-4 text-white'>
											{attorney.title}
										</p>
										<p className='text-sm leading-relaxed px-2'>
											{attorney.specialties}
										</p>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default AttorneyGrid;

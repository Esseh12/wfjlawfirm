import img1 from '../../assets/images/IACC-association-commercial-collections.jpg';
import img2 from '../../assets/images/cca-of-america-association-logo.jpg';
import img3 from '../../assets/images/NACM-association-commercial-collections.jpg';
import img4 from '../../assets/images/CLLA-association-commercial-collections.jpg';

const Associations = () => {
	// Placeholder logos - replace with actual imported images
	const associations = [
		{
			id: 1,
			name: 'International Association of Commercial Collectors',
			logo: img1,
			description: 'IACC - Est. 1970',
			url: '#',
		},
		{
			id: 2,
			name: 'Commercial Collection Agencies of America',
			logo: img2,
			description: 'Standards Board Certification - Affiliate Member',
			url: '#',
		},
		{
			id: 3,
			name: 'NACM North Central',
			logo: img3,
			description: 'Proud Platinum Allied Member',
			url: 'https://www.nacmnc.org',
		},
		{
			id: 4,
			name: 'Commercial Law League of America',
			logo: img4,
			description: "CLLA - Creditors' Rights • Bankruptcy • Collection",
			url: '#',
		},
	];

	return (
		<div className='bg-[#f0f0f0] py-16 md:py-24'>
			<div className='max-w-6xl mx-auto px-6 md:px-4'>
				{/* Title */}
				<div className=' mb-12'>
					<h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 font-din-condensed uppercase tracking-tight'>
						Associations
					</h2>
				</div>

				{/* Associations Grid */}
				<div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
					{associations.map((association) => (
						<div
							key={association.id}
							className='bg-white p-6 flex flex-col items-center text-center '>
							{/* Logo Container */}
							<div className='w-full h-full flex items-center justify-center mb-4 p-4'>
								<img
									src={association.logo}
									alt={association.name}
									className='max-w-full max-h-full object-contain '
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Associations;

import { useState, useMemo } from 'react';
import { ChevronDown } from 'lucide-react';
import { attorneys } from '../data';

const AttorneyDirectory = () => {
	const [selectedLetter, setSelectedLetter] = useState('');
	const [selectedPractice, setSelectedPractice] = useState('');
	const [selectedLocation, setSelectedLocation] = useState('');

	const letters = 'BCDEFGHJLMNRS'.split('');
	const practices = [
		'Employment',
		'Commercial Collections',
		'Construction',
		'Litigation',
		'Business',
		'Personal',
	];
	const locations = ['Minneapolis', 'Brookfield, WI'];

	const filteredAttorneys = useMemo(() => {
		return attorneys.filter((attorney) => {
			const matchesLetter =
				!selectedLetter ||
				attorney.name.toLowerCase().startsWith(selectedLetter.toLowerCase());
			const matchesPractice =
				!selectedPractice || attorney.practice.includes(selectedPractice);
			const matchesLocation =
				!selectedLocation || attorney.location === selectedLocation;
			return matchesLetter && matchesPractice && matchesLocation;
		});
	}, [selectedLetter, selectedPractice, selectedLocation]);

	const DropdownSelect = ({ value, onChange, options, placeholder }) => {
		const [isOpen, setIsOpen] = useState(false);

		return (
			<div className='relative'>
				<button
					onClick={() => setIsOpen(!isOpen)}
					className='w-full px-4 py-2 text-left bg-gray-200 text-gray-700 border border-gray-300 rounded flex items-center justify-between hover:bg-gray-300 transition-colors'>
					<span className='truncate'>{value || placeholder}</span>
					<ChevronDown
						className={`w-4 h-4 transition-transform ${
							isOpen ? 'rotate-180' : ''
						}`}
					/>
				</button>

				{isOpen && (
					<div className='absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-b shadow-lg z-10 max-h-48 overflow-y-auto'>
						<button
							onClick={() => {
								onChange('');
								setIsOpen(false);
							}}
							className='w-full px-4 py-2 text-left hover:bg-gray-100 text-gray-700'>
							{placeholder}
						</button>
						{options.map((option) => (
							<button
								key={option}
								onClick={() => {
									onChange(option);
									setIsOpen(false);
								}}
								className='w-full px-4 py-2 text-left hover:bg-gray-100 text-gray-700'>
								{option}
							</button>
						))}
					</div>
				)}
			</div>
		);
	};

	const AttorneyCard = ({ attorney }) => (
		<div className='group relative bg-[#f0f0f0] overflow-hidden '>
			<div className='aspect-[3/4] relative overflow-hidden h-72 w-full'>
				<img
					src={attorney.image}
					alt={attorney.name}
					className='w-full h-full object-cover'
				/>
				<div className='absolute inset-0 bg-blue-900 bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-4'>
					<h3 className='text-xl font-bold mb-2 text-center'>
						{attorney.name.toUpperCase()}
					</h3>
					<p className='text-sm font-semibold mb-4'>ATTORNEY</p>
					<p className='text-xs text-center mb-4'>{attorney.practice}</p>
					<button className='text-xs font-semibold border-b border-white pb-1 hover:border-gray-300 transition-colors'>
						VIEW PROFILE →
					</button>
				</div>
			</div>
		</div>
	);

	return (
		<div className='min-h-screen bg-gray-50 py-8 md:py-24'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<p className='mb-8'>
					Meet the people who simplify the complex for a living. No matter their
					practice area, each of our attorneys brings a wealth of experience,
					creativity and common sense to the table. And all specialize in
					translating the law for our clients.
				</p>
				{/* Filter Section */}
				<div className='mb-8'>
					<div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8'>
						{/* Alphabet Filter */}
						<div>
							<h3 className='text-lg font-semibold text-gray-700 mb-4'>
								FILTER BY LAST INITIAL
							</h3>
							<div className='flex flex-wrap gap-2'>
								{letters.map((letter) => (
									<button
										key={letter}
										onClick={() =>
											setSelectedLetter(selectedLetter === letter ? '' : letter)
										}
										className={`w-5 h-5  hover:underline font-semibold transition-colors text-xl text-[#6b6b6b]  ${
											selectedLetter === letter
												? 'underline underline-offset-2'
												: ''
										}`}>
										{letter}
									</button>
								))}
							</div>
						</div>

						{/* Practice Filter */}
						<div>
							<h3 className='text-lg font-semibold text-gray-700 mb-4'>
								FILTER BY PRACTICE
							</h3>
							<DropdownSelect
								value={selectedPractice}
								onChange={setSelectedPractice}
								options={practices}
								placeholder='Select Practice Area'
							/>
						</div>

						{/* Location Filter */}
						<div>
							<h3 className='text-lg font-semibold text-gray-700 mb-4'>
								FILTER BY LOCATION
							</h3>
							<DropdownSelect
								value={selectedLocation}
								onChange={setSelectedLocation}
								options={locations}
								placeholder='Select Location'
							/>
						</div>
					</div>
				</div>

				{/* Attorney Grid */}
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
					{filteredAttorneys.map((attorney, index) => (
						<AttorneyCard
							key={index}
							attorney={attorney}
						/>
					))}
				</div>

				{/* No Results */}
				{filteredAttorneys.length === 0 && (
					<div className='text-center py-12'>
						<p className='text-gray-500 text-lg'>
							No attorneys found matching your criteria.
						</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default AttorneyDirectory;

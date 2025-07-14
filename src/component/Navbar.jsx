import { useState } from 'react';
import { HiChevronDown, HiChevronUp, HiX, HiMenu } from 'react-icons/hi';
import logo from '../assets/images/wfj-logo.svg';

const Navbar = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [openDropdown, setOpenDropdown] = useState(null);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
		setOpenDropdown(null); // Close all dropdowns when toggling mobile menu
	};

	const toggleDropdown = (dropdown) => {
		setOpenDropdown(openDropdown === dropdown ? null : dropdown);
	};

	const practiceAreas = [
		'Business',
		'Commercial Collections',
		'Construction',
		'Employment',
		'Litigation',
		'Personal',
	];

	const wfjBrands = [
		'LegalShield',
		'Support Services',
		'Wagner Business Solutions',
	];

	return (
		<nav className='bg-[#17325c] text-white relative z-50'>
			<div className=' px-4'>
				<div className='flex items-center justify-between h-32'>
					{/* Logo */}
					<div className='flex-shrink-0'>
						<img
							src={logo}
							alt='logo'
							className='w-96'
						/>
					</div>

					{/* Desktop Menu */}
					<div className='hidden lg:flex items-center space-x-8'>
						{/* Practice Areas Dropdown */}
						<div className='relative group'>
							<button className='flex items-center space-x-1 hover:text-gray-300 transition-colors'>
								<span className='font-medium'>PRACTICE AREAS</span>
								<HiChevronDown className='w-4 h-4' />
							</button>
							<div className='absolute top-full left-0 mt-1 w-64 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50'>
								<div className='py-2'>
									{practiceAreas.map((area) => (
										<a
											key={area}
											href='#'
											className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors'>
											{area}
										</a>
									))}
								</div>
							</div>
						</div>

						{/* WFJ Brands Dropdown */}
						<div className='relative group'>
							<button className='flex items-center space-x-1 hover:text-gray-300 transition-colors'>
								<span className='font-medium'>WFJ BRANDS</span>
								<HiChevronDown className='w-4 h-4' />
							</button>
							<div className='absolute top-full left-0 mt-1 w-64 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50'>
								<div className='py-2'>
									{wfjBrands.map((brand) => (
										<a
											key={brand}
											href='#'
											className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors'>
											{brand}
										</a>
									))}
								</div>
							</div>
						</div>

						{/* Regular Menu Items */}
						<a
							href='#'
							className='font-medium hover:text-gray-300 transition-colors'>
							ATTORNEYS
						</a>
						<a
							href='#'
							className='font-medium hover:text-gray-300 transition-colors'>
							PERSPECTIVES
						</a>
						<a
							href='#'
							className='font-medium hover:text-gray-300 transition-colors'>
							CONTACT
						</a>
						<a
							href='#'
							className='font-medium hover:text-gray-300 transition-colors underline'>
							CAREERS
						</a>
						<a
							href='#'
							className='font-medium hover:text-gray-300 transition-colors'>
							CLIENT LOGIN
						</a>
					</div>

					{/* Mobile menu button */}
					<div className='lg:hidden'>
						<button
							onClick={toggleMobileMenu}
							className='p-2 rounded-md text-white hover:text-gray-300 hover:bg-[#1e3a52] transition-colors'>
							{isMobileMenuOpen ? (
								<HiX className='w-6 h-6' />
							) : (
								<HiMenu className='w-6 h-6' />
							)}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			<div
				className={`lg:hidden transition-all duration-300 ${
					isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
				} overflow-hidden`}>
				<div className='px-4 pt-2 pb-6 space-y-1 bg-[#2C4A6B] border-t border-[#1e3a52]'>
					{/* Practice Areas Mobile Dropdown */}
					<div>
						<button
							onClick={() => toggleDropdown('practice')}
							className='w-full flex items-center justify-between px-3 py-3 text-left font-medium hover:bg-[#1e3a52] transition-colors border-b border-[#1e3a52]'>
							<span>PRACTICE AREAS</span>
							{openDropdown === 'practice' ? (
								<HiChevronUp className='w-4 h-4' />
							) : (
								<HiChevronDown className='w-4 h-4' />
							)}
						</button>
						<div
							className={`transition-all duration-300 ${
								openDropdown === 'practice'
									? 'max-h-96 opacity-100'
									: 'max-h-0 opacity-0'
							} overflow-hidden`}>
							<div className='pl-6 py-2 space-y-1 bg-[#1e3a52]'>
								{practiceAreas.map((area) => (
									<a
										key={area}
										href='#'
										className='block px-3 py-2 text-sm hover:bg-[#2C4A6B] transition-colors'>
										{area}
									</a>
								))}
							</div>
						</div>
					</div>

					{/* WFJ Brands Mobile Dropdown */}
					<div>
						<button
							onClick={() => toggleDropdown('brands')}
							className='w-full flex items-center justify-between px-3 py-3 text-left font-medium hover:bg-[#1e3a52] transition-colors border-b border-[#1e3a52]'>
							<span>WFJ BRANDS</span>
							{openDropdown === 'brands' ? (
								<HiChevronUp className='w-4 h-4' />
							) : (
								<HiChevronDown className='w-4 h-4' />
							)}
						</button>
						<div
							className={`transition-all duration-300 ${
								openDropdown === 'brands'
									? 'max-h-96 opacity-100'
									: 'max-h-0 opacity-0'
							} overflow-hidden`}>
							<div className='pl-6 py-2 space-y-1 bg-[#1e3a52]'>
								{wfjBrands.map((brand) => (
									<a
										key={brand}
										href='#'
										className='block px-3 py-2 text-sm hover:bg-[#2C4A6B] transition-colors'>
										{brand}
									</a>
								))}
							</div>
						</div>
					</div>

					{/* Regular Mobile Menu Items */}
					<a
						href='#'
						className='block px-3 py-3 font-medium hover:bg-[#1e3a52] transition-colors border-b border-[#1e3a52]'>
						ATTORNEYS
					</a>
					<a
						href='#'
						className='block px-3 py-3 font-medium hover:bg-[#1e3a52] transition-colors border-b border-[#1e3a52]'>
						PERSPECTIVES
					</a>
					<a
						href='#'
						className='block px-3 py-3 font-medium hover:bg-[#1e3a52] transition-colors border-b border-[#1e3a52]'>
						CONTACT
					</a>
					<a
						href='#'
						className='block px-3 py-3 font-medium hover:bg-[#1e3a52] transition-colors border-b border-[#1e3a52] underline'>
						CAREERS
					</a>
					<a
						href='#'
						className='block px-3 py-3 font-medium hover:bg-[#1e3a52] transition-colors'>
						CLIENT LOGIN
					</a>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

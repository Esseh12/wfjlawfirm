import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiX, HiMenu } from 'react-icons/hi';
import { ChevronDown, ChevronUp } from 'lucide-react';
import logo from '../assets/images/wfj-logo.svg';

const Navbar = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [openDropdown, setOpenDropdown] = useState(null);
	const location = useLocation();

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
		setOpenDropdown(null); // Close all dropdowns when toggling mobile menu
	};

	const toggleDropdown = (dropdown) => {
		setOpenDropdown(openDropdown === dropdown ? null : dropdown);
	};

	const practiceAreas = [
		{ name: 'Business', path: '/practice-areas/business' },
		{
			name: 'Commercial Collections',
			path: '/practice-areas/commercial-collections',
		},
		{ name: 'Construction', path: '/practice-areas/construction' },
		{ name: 'Employment', path: '/practice-areas/employment' },
		{ name: 'Litigation', path: '/practice-areas/litigation' },
		{ name: 'Personal', path: '/practice-areas/personal', hasSubmenu: true },
	];

	const personalSubMenu = [
		{ name: 'Family Law', path: '/practice-areas/personal/family-law' },
		{ name: 'Legal Shield', path: '/practice-areas/personal/legal-shield' },
		{
			name: 'Personal Injury',
			path: '/practice-areas/personal/personal-injury',
		},
	];

	const wfjBrands = [
		{ name: 'LegalShield', path: '/practice-areas/personal/legal-shield' },
		{ name: 'Support Services', path: '/support-services' },
		{ name: 'Wagner Business Solutions', path: '/wbs' },
	];

	return (
		<nav className='bg-[#17325c] text-white  z-50 fixed w-full md:px-12'>
			<div className='px-2 md:px-4'>
				<div className='flex items-center justify-between h-20 md:h-28'>
					{/* Logo */}
					<div className='flex-shrink-0'>
						<Link to='/'>
							<img
								src={logo}
								alt='logo'
								className='w-60 sm:w-60 md:w-96'
							/>
						</Link>
					</div>

					{/* Desktop Menu */}
					<div className='hidden lg:flex items-center space-x-4'>
						{/* Practice Areas Dropdown */}
						<div className='relative group'>
							<button
								className='flex items-center space-x-1'
								onClick={() => toggleDropdown('practice')}
								onMouseEnter={() => setOpenDropdown('practice')}>
								<span className='text-xs font-medium hover:underline active:underline'>
									PRACTICE AREAS
								</span>
							</button>
							<div
								className={`absolute top-full left-0 mt-1 w-64 bg-[#17325c] text-white shadow-lg z-50  max-w-44 ${
									openDropdown === 'practice'
										? 'opacity-100 visible'
										: 'opacity-0 invisible'
								}`}
								onMouseLeave={() => setOpenDropdown(null)}>
								<div className='py-2'>
									{practiceAreas.map((area) => (
										<div key={area.name}>
											{area.hasSubmenu ? (
												<div className='relative group/submenu'>
													<span className='block px-2 py-2 text-sm text-white cursor-pointer'>
														{area.name}
													</span>
													<div className='absolute left-full top-0 w-64 shadow-lg opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible transition-all duration-200 z-50 bg-[#17325c]'>
														<div className='py-2'>
															{personalSubMenu.map((subItem) => (
																<Link
																	key={subItem.name}
																	to={subItem.path}
																	className='block px-2 py-2 text-sm text-white border-b border-gray-500'
																	onClick={() => setOpenDropdown(null)}>
																	{subItem.name}
																</Link>
															))}
														</div>
													</div>
												</div>
											) : (
												<Link
													to={area.path}
													className='block px-2 py-2 text-sm text-white border-b border-gray-500 '
													onClick={() => setOpenDropdown(null)}>
													{area.name}
												</Link>
											)}
										</div>
									))}
								</div>
							</div>
						</div>

						{/* WFJ Brands Dropdown */}
						<div className='relative group'>
							<button
								className='flex items-center space-x-1 '
								onClick={() => toggleDropdown('brands')}
								onMouseEnter={() => setOpenDropdown('brands')}>
								<span className='text-xs font-medium hover:underline'>
									WFJ BRANDS
								</span>
							</button>
							<div
								className={`absolute top-full left-0 mt-1 w-64 bg-[#17325c] text-white shadow-lg z-50  max-w-44 ${
									openDropdown === 'brands'
										? 'opacity-100 visible'
										: 'opacity-0 invisible'
								}`}
								onMouseLeave={() => setOpenDropdown(null)}>
								<div className='py-2'>
									{wfjBrands.map((brand) => (
										<Link
											key={brand.name}
											to={brand.path}
											className='block px-2 py-2 text-sm text-white border-b border-gray-500 '
											onClick={() => setOpenDropdown(null)}>
											{brand.name}
										</Link>
									))}
								</div>
							</div>
						</div>

						{/* Regular Menu Items */}
						<Link
							to='/attorneys'
							className={`text-xs font-medium hover:underline ${
								location.pathname === '/attorneys' ? 'underline' : ''
							}`}>
							ATTORNEYS
						</Link>
						<Link
							to='/perspectives'
							className={`text-xs font-medium transition-colors hover:underline ${
								location.pathname === '/perspectives' ? 'underline' : ''
							}`}>
							PERSPECTIVES
						</Link>
						<Link
							to='/contact'
							className={`text-xs font-medium hover:underline transition-colors ${
								location.pathname === '/contact' ? 'underline' : ''
							}`}>
							CONTACT
						</Link>
						<Link
							to='/careers'
							className={`text-xs font-medium hover:underline transition-colors ${
								location.pathname === '/careers' ? 'underline' : ''
							}`}>
							CAREERS
						</Link>
						<Link
							to='/client-login'
							className={`text-xs font-medium hover:underline transition-colors ${
								location.pathname === '/client-login' ? 'underline' : ''
							}`}>
							CLIENT LOGIN
						</Link>
					</div>

					{/* Mobile menu button */}
					<div className='lg:hidden'>
						<button
							onClick={toggleMobileMenu}
							className='p-2 rounded-md text-white hover:text-gray-300 transition-colors '>
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
				className={`lg:hidden fixed inset-0 top-20 bg-[#17325c] z-40 transition-all duration-300 ${
					isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
				}`}>
				<div className='px-4 pt-2 pb-6 space-y-1 h-full overflow-y-auto'>
					{/* Practice Areas Mobile Dropdown */}
					<div>
						<button
							onClick={() => toggleDropdown('practice')}
							className='w-full flex items-center justify-between px-3 py-3 text-left font-medium hover:bg-[#17325c] transition-colors border-b border-gray-500'>
							<span>PRACTICE AREAS</span>
							{openDropdown === 'brands' ? (
								<ChevronUp className='w-4 h-4' />
							) : (
								<ChevronDown className='w-4 h-4' />
							)}
						</button>
						<div
							className={`transition-all duration-300 ${
								openDropdown === 'practice'
									? 'max-h-96 opacity-100 '
									: 'max-h-0 opacity-0'
							} overflow-hidden`}>
							<div className='pl-6 py-2 space-y-1 bg-[#17325c]'>
								{practiceAreas.map((area) => (
									<div key={area.name}>
										{area.hasSubmenu ? (
											<div>
												<div className=' py-2 text-sm font-medium text-gray-300 border-b border-gray-500'>
													{area.name}
												</div>
												<div className='pl-4 space-y-1'>
													{personalSubMenu.map((subItem) => (
														<Link
															key={subItem.name}
															to={subItem.path}
															className='block px-3 py-2 text-sm hover:bg-[#2C4A6B] transition-colors'
															onClick={() => {
																setIsMobileMenuOpen(false);
																setOpenDropdown(null);
															}}>
															{subItem.name}
														</Link>
													))}
												</div>
											</div>
										) : (
											<Link
												to={area.path}
												className='block px-3 py-2 text-sm hover:bg-[#2C4A6B] transition-colors'
												onClick={() => {
													setIsMobileMenuOpen(false);
													setOpenDropdown(null);
												}}>
												{area.name}
											</Link>
										)}
									</div>
								))}
							</div>
						</div>
					</div>

					{/* WFJ Brands Mobile Dropdown */}
					<div>
						<button
							onClick={() => toggleDropdown('brands')}
							className='w-full flex items-center justify-between px-3 py-3 text-left font-medium hover:bg-[#17325c] transition-colors border-b border-gray-500'>
							<span>WFJ BRANDS</span>
							{openDropdown === 'brands' ? (
								<ChevronUp className='w-4 h-4' />
							) : (
								<ChevronDown className='w-4 h-4' />
							)}
						</button>
						<div
							className={`transition-all duration-300 ${
								openDropdown === 'brands'
									? 'max-h-96 opacity-100'
									: 'max-h-0 opacity-0'
							} overflow-hidden`}>
							<div className='pl-6 py-2 space-y-1 bg-[#17325c]'>
								{wfjBrands.map((brand) => (
									<Link
										key={brand.name}
										to={brand.path}
										className='block py-2 text-sm  border-b border-gray-500'
										onClick={() => {
											setIsMobileMenuOpen(false);
											setOpenDropdown(null);
										}}>
										{brand.name}
									</Link>
								))}
							</div>
						</div>
					</div>

					{/* Regular Mobile Menu Items */}
					<Link
						to='/attorneys'
						className='block px-3 py-3 font-medium hover:bg-[#17325c] transition-colors border-b border-gray-500'
						onClick={() => setIsMobileMenuOpen(false)}>
						ATTORNEYS
					</Link>
					<Link
						to='/perspectives'
						className='block px-3 py-3 font-medium hover:bg-[#17325c] transition-colors border-b border-gray-500'
						onClick={() => setIsMobileMenuOpen(false)}>
						PERSPECTIVES
					</Link>
					<Link
						to='/contact'
						className='block px-3 py-3 font-medium hover:bg-[#17325c] transition-colors border-b border-gray-500'
						onClick={() => setIsMobileMenuOpen(false)}>
						CONTACT
					</Link>
					<Link
						to='/careers'
						className='block px-3 py-3 font-medium hover:bg-[#17325c] transition-colors border-b border-gray-500 underline'
						onClick={() => setIsMobileMenuOpen(false)}>
						CAREERS
					</Link>
					<Link
						to='/client-login'
						className='block px-3 py-3 font-medium hover:bg-[#17325c] transition-colors'
						onClick={() => setIsMobileMenuOpen(false)}>
						CLIENT LOGIN
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

import { Link } from 'react-router-dom';
import wagnerBusiness from '../assets/images/wagner-business-solutions.png';
import legalSheid from '../assets/images/LegalShield-logo.png';
import footerLogo from '../assets/images/wfj-footer-logo.svg';

const Footer = () => {
	return (
		<footer>
			{/* top part */}
			<div className='bg-[#f0f0f0] font-din text-[#6B6B6B] py-16 md:py-24'>
				<div className='px-4 md:px-0 max-w-5xl mx-auto flex flex-col gap-8'>
					<h1 className='text-center text-base md:text-xl leading-6 font-medium'>
						WFJ is a law firm that's both traditional and untraditional. While
						we offer all the capabilities you'd expect of an established law
						practice, we also provide innovative personalized services through
						the following brands:
					</h1>
					<div className='flex flex-col md:flex-row justify-between items-center gap-5'>
						<img
							src={wagnerBusiness}
							alt='wagner business solutions'
							className='w-60 md:w-52'
						/>
						<img
							src={legalSheid}
							alt='legal shield'
							className='w-60 md:w-52'
						/>
					</div>
				</div>
			</div>

			{/* Bottom part */}
			<div className='bg-white px-8 pt-10'>
				<div className=''>
					<div className='flex flex-col lg:flex-row justify-between items-center lg:items-center gap-4'>
						{/* Logo and locations */}

						<img
							src={footerLogo}
							alt='Wagner, Falconer & Judd, LTD footer logo'
							className='w-lg max-w-full'
						/>
						<div className='text-[#6B6B6B]  font-bold font-din'>
							<p className='uppercase tracking-wide'>
								MINNEAPOLIS, MN | BROOKFIELD, WI | BILLINGS, MT | VANCOUVER,
								B.C., CANADA
							</p>
						</div>

						{/* Social media icons */}
						<div className='flex gap-3'>
							<Link
								to='#'
								className='w-10 h-10 rounded-full bg-[#f0f0f0] flex items-center justify-center hover:bg-[#e0e0e0] transition-colors'
								aria-label='Facebook'>
								<svg
									className='w-5 h-5 text-[#6B6B6B]'
									fill='currentColor'
									viewBox='0 0 24 24'>
									<path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
								</svg>
							</Link>
							<Link
								to='#'
								className='w-10 h-10 rounded-full bg-[#f0f0f0] flex items-center justify-center hover:bg-[#e0e0e0] transition-colors'
								aria-label='LinkedIn'>
								<svg
									className='w-5 h-5 text-[#6B6B6B]'
									fill='currentColor'
									viewBox='0 0 24 24'>
									<path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
								</svg>
							</Link>
							<Link
								to='#'
								className='w-10 h-10 rounded-full bg-[#f0f0f0] flex items-center justify-center hover:bg-[#e0e0e0] transition-colors'
								aria-label='YouTube'>
								<svg
									className='w-5 h-5 text-[#6B6B6B]'
									fill='currentColor'
									viewBox='0 0 24 24'>
									<path d='M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' />
								</svg>
							</Link>
						</div>
					</div>

					{/* Links and copyright */}
					<div className='mt-8 pt-6  font-din'>
						<div className='flex flex-col justify-between items-start gap-4'>
							<div className='flex flex-col sm:flex-row gap-4 sm:gap-8'>
								<Link
									to='#'
									className='text-[#6B6B6B] text-xl hover:text-[#4a4a4a] transition-colors underline font-light'>
									Terms & Conditions
								</Link>
								<Link
									to='#'
									className='text-[#6B6B6B] text-xl hover:text-[#4a4a4a] transition-colors underline font-light'>
									Privacy Policy
								</Link>
							</div>
							<div className='text-[#6B6B6B] text-sm'>
								© 2025 WAGNER, FALCONER & JUDD, LTD. ALL RIGHTS RESERVED.
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

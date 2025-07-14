import { Link } from 'react-router-dom';
import Hero from '../component/Contact/hero';
import SupportComponent from '../component/suuportService/supportService';
import TestimonialSlider from '../component/TestimonialSlider';
import ContactForm from '../component/suuportService/ContactForm';
const SupportServices = () => {
	return (
		<>
			<Hero title='SUPPORT SERVICES' />
			<div className='flex max-w-6xl mx-auto py-24 gap-8'>
				<p className='text-xl leading-7 font-normal text-[#6B6B6B] mx-auto max-w-2xl'>
					The team at Wagner, Falconer & Judd and Wagner Business Solutions
					offer personalized, superior service. Our ultimate goal is clear: to
					provide your business with the highest quality professional services,
					with the benefit of being backed by a robust legal team. You can
					confidently run your business, while trusting that we have your back.
					Let WFJ and WBS simplify those complex issues that keep you up at
					night, and can often come with risky, expensive consequences. Because
					you’ve got a business to run.
				</p>
				<div className='bg-[#f0f0f0] p-8 flex flex-col justify-center items-center max-w-sm '>
					<div className='border-b-2 border-[#6b6b6b] w-full text-center pb-4'>
						<p>Recent Webinars and Blogs</p>
					</div>
					<div className='text-center flex flex-col space-y-4 text-[#17325C] text-lg font-normal leading-normal mt-8'>
						<Link
							to='#'
							className='underline'>
							Interview with Employment Attorney-Rebecca Corcoran
						</Link>
						<Link
							to='#'
							className='underline'>
							Understanding Employment Law as a Small Business Owner
						</Link>
						<Link
							to='#'
							className='underline'>
							The CTA No Longer Applies to U.S. Companies
						</Link>
						<Link
							to='#'
							className='underline'>
							Layoffs 101-The Legal Side: What HR and Business Leaders Need to
							Know
						</Link>
					</div>
				</div>
			</div>
			<SupportComponent />
			<TestimonialSlider />
			<ContactForm />
		</>
	);
};
export default SupportServices;

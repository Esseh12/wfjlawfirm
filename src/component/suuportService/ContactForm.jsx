import { useState } from 'react';

export default function ContactForm() {
	const [formData, setFormData] = useState({
		name: '',
		company: '',
		companySize: '',
		email: '',
		phone: '',
		textOptIn: false,
	});

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: type === 'checkbox' ? checked : value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Form submitted:', formData);
		alert('Thank you for your inquiry! We will contact you soon.');
	};

	return (
		<div className='min-h-screen bg-white'>
			{/* Main Content */}
			<main className='max-w-4xl mx-auto px-6 py-12'>
				<div className='text-center mb-12'>
					<h2 className='text-2xl md:text-3xl font-bold text-slate-700 mb-4'>
						CURIOUS HOW THE DEDICATED TEAM AT WAGNER, FALCONER & JUDD COULD HELP
						SUPPORT YOU?
					</h2>
					<p className='text-lg text-slate-600'>
						REACH OUT TO US FOR A FREE CONSULTATION FOR YOUR BUSINESS.
					</p>
				</div>

				<div className='space-y-6'>
					{/* Name Field */}
					<div>
						<label
							htmlFor='name'
							className='block text-sm font-medium text-slate-700 mb-2'>
							NAME <span className='text-red-500'>*</span>
						</label>
						<input
							type='text'
							id='name'
							name='name'
							value={formData.name}
							onChange={handleChange}
							required
							className='w-full px-4 py-3 border border-slate-300 rounded-md bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent'
						/>
					</div>

					{/* Company Field */}
					<div>
						<label
							htmlFor='company'
							className='block text-sm font-medium text-slate-700 mb-2'>
							COMPANY <span className='text-red-500'>*</span>
						</label>
						<input
							type='text'
							id='company'
							name='company'
							value={formData.company}
							onChange={handleChange}
							required
							className='w-full px-4 py-3 border border-slate-300 rounded-md bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent'
						/>
					</div>

					{/* Company Size Field */}
					<div>
						<label
							htmlFor='companySize'
							className='block text-sm font-medium text-slate-700 mb-2'>
							COMPANY SIZE <span className='text-red-500'>*</span>
						</label>
						<select
							id='companySize'
							name='companySize'
							value={formData.companySize}
							onChange={handleChange}
							required
							className='w-full px-4 py-3 border border-slate-300 rounded-md bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent'>
							<option value=''>Select company size</option>
							<option value='1-10'>1-10 employees</option>
							<option value='11-50'>11-50 employees</option>
							<option value='51-200'>51-200 employees</option>
							<option value='201-500'>201-500 employees</option>
							<option value='500+'>500+ employees</option>
						</select>
					</div>

					{/* Email Field */}
					<div>
						<label
							htmlFor='email'
							className='block text-sm font-medium text-slate-700 mb-2'>
							EMAIL ADDRESS <span className='text-red-500'>*</span>
						</label>
						<input
							type='email'
							id='email'
							name='email'
							value={formData.email}
							onChange={handleChange}
							required
							className='w-full px-4 py-3 border border-slate-300 rounded-md bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent'
						/>
					</div>

					{/* Phone Field */}
					<div>
						<label
							htmlFor='phone'
							className='block text-sm font-medium text-slate-700 mb-2'>
							PHONE <span className='text-red-500'>*</span>
						</label>
						<input
							type='tel'
							id='phone'
							name='phone'
							value={formData.phone}
							onChange={handleChange}
							required
							className='w-full px-4 py-3 border border-slate-300 rounded-md bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent'
						/>
					</div>

					{/* reCAPTCHA Placeholder */}
					<div className='flex items-center space-x-3 p-4 border border-slate-300 rounded-md bg-slate-50 w-fit'>
						<input
							type='checkbox'
							id='captcha'
							required
							className='h-5 w-5 text-slate-600 focus:ring-slate-500 border-slate-300 rounded'
						/>
						<label
							htmlFor='captcha'
							className='text-sm text-slate-700'>
							I'm not a robot
						</label>
						<div className='text-xs text-slate-500'>
							<div>reCAPTCHA</div>
							<div>Privacy - Terms</div>
						</div>
					</div>

					{/* Text Opt In */}
					<div className='border-t pt-6'>
						<h3 className='text-lg font-medium text-slate-700 mb-4'>
							Text Opt In
						</h3>
						<div className='flex items-start space-x-3'>
							<input
								type='checkbox'
								id='textOptIn'
								name='textOptIn'
								checked={formData.textOptIn}
								onChange={handleChange}
								className='h-5 w-5 text-slate-600 focus:ring-slate-500 border-slate-300 rounded mt-1'
							/>
							<label
								htmlFor='textOptIn'
								className='text-sm text-slate-600 leading-relaxed'>
								By checking this box, I agree to receive text messages from
								Wagner, Falconer & Judd related with conversational
								communications about updates, appointments, and legal matters.
								You can opt out any time by replying STOP. For assistance, text
								HELP or contact us at 612-339-1421. Message and data rates may
								apply. Message frequency varies. You can check our company's
								Privacy Policy and Terms & Conditions.
							</label>
						</div>
					</div>

					{/* Submit Button */}
					<div className='flex justify-end pt-6'>
						<button
							type='button'
							onClick={handleSubmit}
							className='bg-slate-700 text-white px-8 py-3 rounded-md hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 transition-colors font-medium'>
							SUBMIT →
						</button>
					</div>
				</div>
			</main>
		</div>
	);
}

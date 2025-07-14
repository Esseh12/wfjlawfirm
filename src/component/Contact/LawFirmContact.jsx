import { useState } from 'react';

export default function LawFirmContact() {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		phone: '',
		email: '',
		subject: '',
		comments: '',
		signUpCommunications: false,
		agreeToTexts: false,
		recaptcha: false,
	});

	const handleInputChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: type === 'checkbox' ? checked : value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Form submitted:', formData);
		// Handle form submission here
	};

	return (
		<div className='min-h-screen bg-white'>
			<div className='max-w-7xl mx-auto px-4 py-8 flex justify-center items-center'>
				<div className='grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-20 items-start'>
					{/* Left Column - Contact Form */}
					<div>
						<div className='flex justify-between items-center'>
							<h2 className='text-4xl md:text-6xl font-bold text-[#1B3A68] mb-8 leading-normal'>
								WRITE US
							</h2>
							<h3 className='text-[#6B6B6B] text-3xl leading-normal'>
								REQUIRED *
							</h3>
						</div>
						<div className='space-y-6'>
							<div>
								<label className='block text-[#1B3A68] text-3xl leading-normal font-semibold mb-2'>
									FIRST NAME <span className='text-[#1B3A68]'>*</span>
								</label>
								<input
									type='text'
									name='firstName'
									value={formData.firstName}
									onChange={handleInputChange}
									required
									className='w-full px-4 py-3 bg-[#f0f0f0] outline-none h-16 text-[#6B6B6B] text'
								/>
							</div>

							<div>
								<label className='block text-[#1B3A68] text-3xl leading-normal font-semibold mb-2'>
									LAST NAME <span className='text-[#1B3A68]'>*</span>
								</label>
								<input
									type='text'
									name='lastName'
									value={formData.lastName}
									onChange={handleInputChange}
									required
									className='w-full px-4 py-3 bg-[#f0f0f0] outline-none h-16 text-[#6B6B6B] text'
								/>
							</div>

							<div>
								<label className='block text-[#1B3A68] text-3xl leading-normal  font-semibold mb-2'>
									PHONE <span className='text-[#1B3A68]'>*</span>
								</label>
								<input
									type='tel'
									name='phone'
									value={formData.phone}
									onChange={handleInputChange}
									required
									className='w-full px-4 py-3 bg-[#f0f0f0] outline-none h-16 text-[#6B6B6B] text'
								/>
							</div>

							<div>
								<label className='block text-[#1B3A68] text-3xl leading-normal font-semibold mb-2'>
									EMAIL ADDRESS <span className='text-[#1B3A68]'>*</span>
								</label>
								<input
									type='email'
									name='email'
									value={formData.email}
									onChange={handleInputChange}
									required
									className='w-full px-4 py-3 bg-[#f0f0f0] outline-none h-16 text-[#6B6B6B] text'
								/>
							</div>

							<div>
								<label className='block text-[#1B3A68] text-3xl leading-normal  font-semibold mb-2'>
									SUBJECT <span className='text-[#1B3A68]'>*</span>
								</label>
								<input
									type='text'
									name='subject'
									value={formData.subject}
									onChange={handleInputChange}
									required
									className='w-full px-4 py-3 bg-[#f0f0f0] outline-none h-16 text-[#6B6B6B] text'
								/>
							</div>

							<div>
								<label className='block text-[#1B3A68] text-3xl leading-normal font-semibold mb-2'>
									COMMENTS
								</label>
								<textarea
									name='comments'
									value={formData.comments}
									onChange={handleInputChange}
									rows={4}
									className='w-full px-4 py-3 bg-[#f0f0f0] outline-none h-96 resize-y text-[#6B6B6B] '
								/>
							</div>

							{/* Checkboxes */}
							<div className='space-y-4'>
								<div className='flex items-start space-x-3'>
									<input
										type='radio'
										name='signUpCommunications'
										checked={formData.signUpCommunications}
										onChange={handleInputChange}
										className='mt-1 w-6 h-6 text-slate-600 border-gray-300 rounded focus:ring-slate-500'
									/>
									<label className='text-[#6B6B6B] text-2xl leading-relaxed'>
										Yes, sign me up for future communications from WFJ.
									</label>
								</div>

								<div className='flex items-start space-x-3'>
									<input
										type='radio'
										name='agreeToTexts'
										checked={formData.agreeToTexts}
										onChange={handleInputChange}
										className='mt-1 w-6 h-6 text-slate-600 border-gray-300 rounded focus:ring-slate-500'
									/>
									<label className='text-[#6B6B6B] text-2xl leading-relaxed'>
										By checking this box, I agree to receive text messages from
										Wagner, Falconer & Judd related with conversational
										communications about updates, appointments, and legal
										matters. You can opt out any time by replying STOP. For
										assistance, text HELP or contact us at 612-339-1421. Message
										and data rates may apply. Message frequency varies. You can
										check our company's Privacy Policy and Terms & Conditions.
									</label>
								</div>
							</div>

							{/* reCAPTCHA */}
							<div className='flex items-center space-x-3 bg-gray-100 p-4 border border-gray-300 rounded'>
								<input
									type='checkbox'
									name='recaptcha'
									checked={formData.recaptcha}
									onChange={handleInputChange}
									className='w-4 h-4 text-slate-600 border-gray-300 rounded focus:ring-slate-500'
								/>
								<span className='text-gray-700 text-sm'>I'm not a robot</span>
								<div className='ml-auto'>
									<div className='text-xs text-gray-500'>
										<div>reCAPTCHA</div>
										<div>Privacy - Terms</div>
									</div>
								</div>
							</div>

							{/* Submit Button */}
							<div className='pt-4 flex items-end justify-end'>
								<button
									type='button'
									onClick={handleSubmit}
									className='bg-[#1B3A68] text-white px-8 py-4.5  font-bold  flex items-center space-x-2 text-2xl'>
									<span>SUBMIT</span>
									<span>→</span>
								</button>
							</div>
						</div>

						{/* Disclaimer */}
						<div className='mt-8 text-xs text-gray-500 leading-relaxed'>
							<p>
								NOTICE: Please DO NOT email us any information specific to your
								legal concern or that is confidential, as such information is
								not privileged, confidential or otherwise protected from
								disclosure. Sending us an email message does not create an
								attorney-client relationship, create any fiduciary duty, make
								you a client of us, or bind us to you in any contractual or
								other manner. You agree that by clicking the "Submit" button,
								you are bound by our Terms of Use posted on our website.
							</p>
						</div>
					</div>

					{/* Right Column - Contact Information */}
					<div className='max-w-fit'>
						<h2 className='text-4xl md:text-6xl font-bold text-[#1B3A68]  mb-8'>
							CALL US
						</h2>

						<div className='space-y-8'>
							{/* Phone Numbers */}
							<div>
								<h3 className='text-2xl md:text-5xl font-bold text-[#1B3A68] mb-4'>
									PHONE NUMBERS
								</h3>
								<div className='space-y-2'>
									<div className='flex flex-col '>
										<span className='text-gray-500 font-medium'>
											MINNEAPOLIS
										</span>
										<span className='text-[#6B6B6B]'>612-339-1421</span>
									</div>
									<div className='flex flex-col '>
										<span className='text-gray-500 font-medium'>
											BROOKFIELD
										</span>
										<span className='text-[#6B6B6B]'>262-792-1818</span>
									</div>
									<div className='flex flex-col '>
										<span className='text-gray-500 font-medium'>BILLINGS</span>
										<span className='text-[#6B6B6B]'>800-720-8171</span>
									</div>
								</div>
							</div>

							{/* LegalShield */}
							<div>
								<h3 className='text-2xl font-bold text-[#1B3A68] mb-4'>
									LEGALSHIELD
								</h3>
								<div className='space-y-2'>
									<div className='flex flex-col '>
										<span className='text-gray-500 font-medium'>MINNESOTA</span>
										<span className='text-[#6B6B6B]'>800-697-8955</span>
									</div>
									<div className='flex flex-col '>
										<span className='text-gray-500 font-medium'>WISCONSIN</span>
										<span className='text-[#6B6B6B]'>800-697-8960</span>
									</div>
									<div className='flex flex-col '>
										<span className='text-gray-500 font-medium'>
											NORTH DAKOTA
										</span>
										<span className='text-[#6B6B6B]'>800-506-7267</span>
									</div>
									<div className='flex flex-col '>
										<span className='text-gray-500 font-medium'>
											SOUTH DAKOTA
										</span>
										<span className='text-[#6B6B6B]'>866-224-7232</span>
									</div>
									<div className='flex flex-col '>
										<span className='text-gray-500 font-medium'>MONTANA</span>
										<span className='text-[#6B6B6B]'>800-720-8171</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

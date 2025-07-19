import { useState } from 'react';
import rechaptha from '../../assets/images/RecaptchaLogo.png';
import { ArrowRight } from 'lucide-react';

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
			<div className='max-w-5xl mx-auto px-4 py-8 flex justify-center items-center'>
				<div className='grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-20 items-start'>
					{/* Left Column - Contact Form */}
					<div>
						<div className='flex flex-col gap-5'>
							{/* Required indicator */}
							<div className='flex justify-between'>
								<h1 className='text-[#1B3A68] text-xl md:text-2xl font-semibold'>
									WRITE US
								</h1>
								<span className='text-gray-500 text-base'>REQUIRED *</span>
							</div>

							{/* First Name */}
							<div>
								<label
									htmlFor='firstName'
									className='block text-base font-medium text-[#1B3A68] mb-2 uppercase tracking-wide'>
									NAME *
								</label>
								<input
									type='text'
									id='firstName'
									name='firstName'
									value={formData.firstName}
									onChange={handleInputChange}
									required
									className='w-full p-5 bg-gray-100 border-0 rounded-none focus:outline-none  transition-colors'
								/>
							</div>

							{/* Last Name */}
							<div>
								<label
									htmlFor='lastName'
									className='block text-base font-medium text-[#1B3A68] mb-2 uppercase tracking-wide'>
									Company *
								</label>
								<input
									type='text'
									id='lastName'
									name='lastName'
									value={formData.company}
									onChange={handleInputChange}
									required
									className='w-full p-5 bg-gray-100 border-0 rounded-none focus:outline-none  transition-colors'
								/>
							</div>

							{/* Phone */}
							<div>
								<label
									htmlFor='phone'
									className='block text-base font-medium text-[#1B3A68] mb-2 uppercase tracking-wide'>
									Company Size
								</label>
								<input
									type='text'
									id='phone'
									name='phone'
									value={formData.companySize}
									onChange={handleInputChange}
									className='w-full p-5 bg-gray-100 border-0 rounded-none focus:outline-none  transition-colors'
								/>
							</div>

							{/* Email Address */}
							<div>
								<label
									htmlFor='email'
									className='block text-base font-medium text-[#1B3A68] mb-2 uppercase tracking-wide'>
									EMAIL ADDRESS *
								</label>
								<input
									type='email'
									id='email'
									name='email'
									value={formData.email}
									onChange={handleInputChange}
									required
									className='w-full p-5 bg-gray-100 border-0 rounded-none focus:outline-none  transition-colors'
								/>
							</div>

							{/* Comments */}
							<div>
								<label
									htmlFor='comments'
									className='block text-base font-medium text-[#1B3A68] mb-2 uppercase tracking-wide'>
									phone
								</label>
								<input
									type='tel'
									id='phone'
									name='phone'
									value={formData.phone}
									onChange={handleInputChange}
									required
									className='w-full p-5 bg-gray-100 border-0 rounded-none focus:outline-none  transition-colors'
								/>
							</div>

							{/* Text Consent */}

							<div className=''>
								<input
									type='radio'
									id='textConsent'
									name='textConsent'
									checked={formData.textConsent}
									className='mt-1 w-4.5 h-4.5 text-[#1B3A68] border-gray-300 focus:ring-[#1B3A68] focus:ring-2'
								/>
								<label
									htmlFor='textConsent'
									className='text-lg text-[#6b6b6b] leading-relaxed ml-2'>
									By checking this box, I agree to receive text messages from
									Wagner, Falconer & Judd related with conversational
									communications about updates, appointments, and legal matters.
									You can opt out any time by replying STOP. For assistance,
									text HELP or contact us at 612-339-1421. Message and data
									rates may apply. Message frequency varies. You can check our
									company's Privacy Policy and Terms & Conditions.
								</label>
							</div>

							{/* reCAPTCHA */}
							<div className='flex items-center gap-1.5 max-w-2xs bg-[#f0f0f0] p-2 px-4 border border-gray-300 shadow'>
								<input
									type='checkbox'
									id='recaptcha'
									name='recaptcha'
									checked={formData.recaptcha}
									required
									className='w-4 h-4 text-[#1B3A68] focus:ring-[#1B3A68] focus:ring-2'
								/>
								<label
									htmlFor='recaptcha'
									className='text-sm text-black'>
									I'm not a robot
								</label>

								<div className='text-xs text-black flex flex-col items-center ml-auto'>
									<img
										src={rechaptha}
										alt='reCaptcha'
										className='w-8.5 h-8.5'
									/>
									<span>Privacy - Terms</span>
								</div>
							</div>

							{/* Additional Field */}
							<div>
								<label
									htmlFor='additionalText'
									className='block text-base font-medium text-[#1B3A68] mb-2 uppercase tracking-wide'>
									TEXT
								</label>
								<input
									type='text'
									id='additionalText'
									name='additionalText'
									className='w-full p-5 bg-gray-100 border-0 rounded-none focus:outline-none  transition-colors'
								/>
							</div>

							{/* Submit Button */}
							<div className='flex justify-end'>
								<button
									type='button'
									onClick={handleSubmit}
									className='bg-blue-900 text-white px-8 py-4 font-bold text-base uppercase tracking-wide hover:bg-[#1B3A68] transition-colors duration-300 flex items-center gap-2 group'>
									SUBMIT
									<ArrowRight className='w-4 h-4 transition-transform duration-300 group-hover:translate-x-1' />
								</button>
							</div>
						</div>
					</div>

					{/* Right Column - Contact Information */}
					<div className='max-w-fit'>
						<h2 className='text-xl  font-bold text-[#1B3A68]  mb-8'>CALL US</h2>

						<div className='space-y-8'>
							{/* Phone Numbers */}
							<div>
								<h3 className='text-xl md:text-2xl font-bold text-[#1B3A68] mb-4'>
									PHONE NUMBERS
								</h3>
								<div className='space-y-2'>
									<div className='flex flex-col '>
										<span className='text-gray-500 font-medium'>
											MINNEAPOLIS
										</span>
										<span className='text-[#6B6B6B]'>612-339-1421</span>
									</div>
									<div className='flex flex-col'>
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
								<h3 className='text-xl md:text-2xl font-bold text-[#1B3A68] mb-4'>
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

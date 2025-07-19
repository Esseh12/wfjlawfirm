import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import rechaptha from '../../assets/images/RecaptchaLogo.png';

const ContactForm = ({ title }) => {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		phone: '',
		email: '',
		comments: '',
		textConsent: false,
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
		// Handle form submission here
		console.log('Form submitted:', formData);
	};

	return (
		<div className='bg-white max-w-6xl mx-auto px-4 py-24 font-din'>
			<div className='text-left '>
				<h1 className='text-2xl font-bold mb-1 font-din-condensed uppercase tracking-tight leading-9.5 text-[#1B3A68]'>
					WE'RE HERE TO HELP
				</h1>
				<h2 className='text-2xl font-bold mb-1 font-din-condensed uppercase tracking-tight leading-9.5 text-[#1B3A68]'>
					ASK US ABOUT {title}.
				</h2>
			</div>

			{/* Contact Form Section */}
			<div className=''>
				<div className='flex flex-col gap-5'>
					{/* Required indicator */}
					<div className='flex justify-end'>
						<span className='text-gray-500 text-base'>REQUIRED *</span>
					</div>

					{/* First Name */}
					<div>
						<label
							htmlFor='firstName'
							className='block text-base font-medium text-[#1B3A68] mb-2 uppercase tracking-wide'>
							FIRST NAME *
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
							LAST NAME *
						</label>
						<input
							type='text'
							id='lastName'
							name='lastName'
							value={formData.lastName}
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
							PHONE
						</label>
						<input
							type='tel'
							id='phone'
							name='phone'
							value={formData.phone}
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
							COMMENTS
						</label>
						<textarea
							id='comments'
							name='comments'
							value={formData.comments}
							onChange={handleInputChange}
							rows={6}
							className='w-full p-5 bg-gray-100 border-0 rounded-none focus:outline-none  transition-colors resize-vertical'
						/>
					</div>

					{/* Text Consent */}
					<div className=''>
						<input
							type='radio'
							id='textConsent'
							name='textConsent'
							checked={formData.textConsent}
							onChange={handleInputChange}
							className='mt-1 w-4.5 h-4.5 text-[#1B3A68] border-gray-300 focus:ring-[#1B3A68] focus:ring-2'
						/>
						<label
							htmlFor='textConsent'
							className='text-lg text-[#6b6b6b] leading-normal ml-2'>
							Yes, sign me up for future communications from WFJ.
						</label>
					</div>
					<div className=''>
						<input
							type='radio'
							id='textConsent'
							name='textConsent'
							checked={formData.textConsent}
							onChange={handleInputChange}
							className='mt-1 w-4.5 h-4.5 text-[#1B3A68] border-gray-300 focus:ring-[#1B3A68] focus:ring-2'
						/>
						<label
							htmlFor='textConsent'
							className='text-lg text-[#6b6b6b] leading-relaxed ml-2'>
							By checking this box, I agree to receive text messages from
							Wagner, Falconer & Judd related with conversational communications
							about updates, appointments, and legal matters. You can opt out
							any time by replying STOP. For assistance, text HELP or contact us
							at 612-339-1421. Message and data rates may apply. Message
							frequency varies. You can check our company's Privacy Policy and
							Terms & Conditions.
						</label>
					</div>

					{/* reCAPTCHA */}
					<div className='flex items-center gap-1.5 max-w-2xs bg-[#f0f0f0] p-2 px-4 border border-gray-300 shadow'>
						<input
							type='checkbox'
							id='recaptcha'
							name='recaptcha'
							checked={formData.recaptcha}
							onChange={handleInputChange}
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

				{/* Disclaimer */}
				<div className='mt-8 text-xs text-gray-500 leading-relaxed'>
					<strong>NOTICE:</strong> Please do NOT email us any information
					specific to your legal concern or that is confidential, as such
					information is not privileged, confidential or otherwise protected
					from disclosure. Sending us an email message does not create an
					attorney-client relationship, create any fiduciary duty, make you a
					client of us, or bind us to you in any contractual or other manner.
					You agree that by clicking the "Submit" button...
				</div>
			</div>
		</div>
	);
};

export default ContactForm;

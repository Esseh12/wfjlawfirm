import { useState } from 'react';
import { ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';

const CareersComponent = () => {
	const [expandedJob, setExpandedJob] = useState(null);

	const jobs = [
		{
			id: 1,
			title: 'Employment Practice Attorney',
			description:
				'We are seeking an experienced Employment Practice Attorney to join our team. The ideal candidate will have expertise in employment law, workplace compliance, and dispute resolution. This role involves advising clients on employment matters, drafting policies, and representing clients in employment-related litigation. Strong analytical skills and attention to detail are essential.',
		},
		{
			id: 2,
			title: 'Small Business Attorney',
			description:
				"Join our growing practice as a Small Business Attorney. You'll work with entrepreneurs and small business owners on formation, contracts, compliance, and general business matters. The successful candidate will have experience in business law, strong communication skills, and the ability to provide practical legal solutions to help small businesses thrive.",
		},
		{
			id: 3,
			title: 'General Practice Attorney',
			description:
				'We are looking for a versatile General Practice Attorney to handle a diverse caseload including family law, estate planning, real estate, and civil litigation. This position is perfect for an attorney who enjoys variety and building long-term client relationships. Strong organizational skills and the ability to manage multiple cases simultaneously are required.',
		},
		{
			id: 4,
			title: 'Litigation/Injury Attorney',
			description:
				"WFJ is seeking an entrepreneurial injury law attorney with at least 5 years of experience to lead its injury practice. The successful candidate will work with the firm's executive committee to grow the firm's regional injury practice which services a large clientele of over 40,000 individuals in the upper Midwest. Excellent legal skills and superior customer service are a must. Applicants should have strong interpersonal skills, an eagerness to help people solve problems, a true caring for the client's well-being, an understanding of social media marketing strategies, and a dedication to fostering client relationships.",
		},
		{
			id: 5,
			title: 'Accounting Specialist',
			description:
				'We are seeking a detail-oriented Accounting Specialist to support our financial operations. Responsibilities include managing accounts payable/receivable, preparing financial reports, assisting with budgeting, and ensuring compliance with accounting standards. The ideal candidate will have experience with legal accounting software and strong analytical skills.',
		},
		{
			id: 6,
			title: 'Customer Service Specialist',
			description:
				"Join our client services team as a Customer Service Specialist. You'll be the first point of contact for our clients, managing inquiries, scheduling appointments, and providing administrative support. We're looking for someone with excellent communication skills, professionalism, and the ability to work in a fast-paced legal environment.",
		},
	];

	const toggleExpanded = (jobId) => {
		setExpandedJob(expandedJob === jobId ? null : jobId);
	};

	return (
		<div className='min-h-screen bg-gray-50'>
			<div className='max-w-6xl mx-auto py-24'>
				<div className='flex flex-col space-y-6 text-xl text-[#6b6b6b] leading-7 pb-10'>
					<p>
						Take the next step in your career with Wagner, Falconer & Judd, a
						fast-paced, team-oriented, established law firm. Peruse the exciting
						opportunities available and consider joining our team!
					</p>
					<p>
						If you think you would be a good fit for one of these positions,
						please reach out to us at{' '}
						<span className='underline underline-offset-4 cursor-pointer'>
							jobs@wfjlawfirm.com
						</span>
						.
					</p>
				</div>
				<div className='grid lg:grid-cols-3 gap-8 pt-10'>
					{/* Job Listings */}
					<div className='lg:col-span-2'>
						<div className='space-y-4'>
							{jobs.map((job) => (
								<div
									key={job.id}
									className='bg-[#f0f0f0] overflow-hidden p-2'>
									<button
										onClick={() => toggleExpanded(job.id)}
										className='w-full p-4 text-left '>
										<div className='flex items-center justify-between'>
											<div className='flex items-center gap-3'>
												<div className='text-[#1B3A68] font-bold text-2xl md:text-[39px]'>
													+
												</div>
												<h3 className='text-lg md:text-2xl font-bold text-[#1B3A68] uppercase tracking-wide'>
													{job.title}
												</h3>
											</div>
										</div>
									</button>

									{expandedJob === job.id && job.description && (
										<div className='px-6 pb-6 border-t border-gray-100'>
											<div className='pt-4'>
												<div className='flex items-center gap-2 mb-3'>
													<div className='w-8 h-px bg-blue-800'></div>
													<div className='w-4 h-px bg-blue-800'></div>
												</div>
												<p className='text-gray-700 leading-relaxed'>
													{job.description}
												</p>
											</div>
										</div>
									)}
								</div>
							))}
						</div>
					</div>

					{/* Sidebar */}
					<div className='lg:col-span-1'>
						<div className=' p-6'>
							<h2 className='text-xl md:text-3xl leading-[38.318px] font-bold text-[#1B3A68] mb-4 uppercase font-din-condensed'>
								Join Our Team
							</h2>
							<p className='text-[#6b6b6b] text-lg font-semibold  leading-7 mb-6'>
								Interested in joining Wagner, Falconer & Judd? We want to hear
								from you!
							</p>
							<button className='group inline-flex items-center gap-2 px-6 py-3 border-2 border-[#1B3A68] text-[#1B3A68] font-bold uppercase tracking-wide text-xl leading-normal transition-all'>
								Contact Us
								<span className='transform transition-transform duration-300 group-hover:translate-x-1'>
									<ArrowRight size={20} />
								</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CareersComponent;

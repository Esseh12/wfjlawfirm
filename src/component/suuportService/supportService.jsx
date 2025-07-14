import { FileText, Briefcase, Users, Clock, Settings } from 'lucide-react';
import ComplianceIcon from '../../assets/images/compliance-icon.svg';
import BusinessSupportIcon from '../../assets/images/business-support-icon.svg';
import HumanResourcesIcon from '../../assets/images/human-resources-icon.svg';
import CollectionsIcon from '../../assets/images/collections-icon.svg';
import EasyAccessIcon from '../../assets/images/easy-access-icon.svg';

const SupportComponent = () => {
	const services = [
		{
			title: 'COMPLIANCE',
			icon: ComplianceIcon,
			items: [
				'Attorney advice, consultation & research',
				'Document review',
				'Triaging of safety issues (OSHA & DOT)',
				'Easy escalation to compliance professionals for urgent matters',
			],
		},
		{
			title: 'BUSINESS SUPPORT',
			icon: BusinessSupportIcon,
			items: [
				'Attorney Advice, Consultation & Research',
				'Document review',
				'Sample Forms & Agreements',
				'Corporate formations & governance advice, consulting & strategy',
				'Vendor agreements,',
			],
		},
		{
			title: 'HUMAN RESOURCES',
			icon: HumanResourcesIcon,
			items: [
				'Expert answers to HR related questions via secure portal, phone, text',
				'Attorney advice, consultation & research',
				'Sample forms, policies & agreements',
				'Document review',
				'Benefit advice,',
			],
		},
		{
			title: 'COLLECTIONS',
			icon: CollectionsIcon,
			items: [
				'Attorney advice, consultation & research',
				"Mechanic's Lien & Payment Bond e-book (with opinion letters for all 50 states)",
				'Easy escalation to attorneys for suit & lien enforcement',
				'Document review',
				'Sample forms and agreements',
				'Dispute invoices, back charge',
			],
		},
		{
			title: 'EASY ACCESS',
			icon: EasyAccessIcon,
			items: [
				'Hotline access to HR professionals and legal support',
				'Ticketing system within white labeled portal- track and monitor from one simple location',
			],
		},
	];

	return (
		<div className=' min-h-screen'>
			{/* Header */}
			<div className=' py-8'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<h1 className='text-2xl font-din-condensed leading-11.5 text-[#1b3468] font-bold text-center'>
						BUSINESS SUPPORT, HR & COMPLIANCE, COLLECTIONS + MORE
					</h1>
				</div>
			</div>

			{/* Services Grid */}
			<div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-auto gap-8'>
					{services.map((service, index) => (
						<div
							key={index}
							className='bg-[#f0f0f0]  p-6 max-w-xs'>
							<div className='flex flex-col items-center'>
								{/* Icon */}
								<div className='mb-4'>
									<img
										src={service.icon}
										alt={service.title}
										className='w-20 h-20'
									/>
								</div>

								{/* Title */}
								<h2 className='text-xl md:text-2xl font-bold text-[#1B3A68] mb-6'>
									{service.title}
								</h2>

								{/* Items List */}
								<ul className='space-y-3 text-[#6B6B6B]  list-disc'>
									{service.items.map((item, itemIndex) => (
										<li
											key={itemIndex}
											className='flex items-start text-lg leading-5'>
											<span>{item}</span>
										</li>
									))}
								</ul>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default SupportComponent;

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQComponent = () => {
	const [openSections, setOpenSections] = useState({});

	const toggleSection = (section) => {
		setOpenSections((prev) => ({
			...prev,
			[section]: !prev[section],
		}));
	};

	const faqData = [
		{
			id: 'contracts',
			title: 'CONTRACTS',
			content:
				'In the early stages of a new business relationship, it’s easy to overlook the need for a contract. You’re excited about the future, and looking forward to success. Only when conflict occurs do we realize the true power of the written contract. Whether you need an agreement drafted for a shared driveway or a complicated business venture, our team can craft the documents you need to keep conflict at bay and ensure your rights and assets are protected. If you have a conflict on an existing agreement, whether it’s been written in stone or it’s a handshake deal, our attorneys are here to help navigate the dispute.',
		},
		{
			id: 'closely-held',
			title: 'CLOSELY HELD COMPANIES',
			content:
				'We offer a collaborative, problem-solving approach to the legal needs facing closely held companies, including corporate governance, sales assistance, legal compliance, developing exit strategies and estate planning. Through our outsourced general counsel program, we offer cost-effective legal solutions for companies that do not want to take on the fixed cost of maintaining in-house counsel. Specific services we provide include choice of entity, corporate, partnership and limited liability formation, buy-sell agreements, dissolutions, member control agreements (operating agreements), employment agreements, minority rights, drafting terms of conditions of purchasing and selling, assisting our clients’ migrations to web-based solutions, merger and acquisition work, key employee retention, drafting non-competes and non-solicitation agreements, succession planning, and the myriad of other simple and complex legal needs facing closely held corporations.',
		},
		{
			id: 'property',
			title: 'PROPERTY',
			content:
				'WFJ provides representation and advice on a variety of property and real estate matters, including sales and acquisitions, commercial and residential leases, landlord/tenant law, easements, restrictive covenant condominiums or townhome associations and contract for deed sales. Our attorneys also help clients when buying or selling a business that may or may not include real property. Particular services that our attorneys provide include representing landlords and tenants in negotiating, drafting, interpreting and enforcing real estate leases, drafting credit agreements, notes, security agreements, mortgages and working closely with our civil ligation department to enforce our clients’ rights.',
		},
		{
			id: 'trademark',
			title: 'TRADEMARK & COPYRIGHT',
			content:
				'At WFJ, our intellectual property attorneys help you grow the value of your company’s brand and the goodwill associated with its products or services. We provide tailored solutions for the registration, protection and maintenance of your trademarks. We provide resources to select words, names and symbols to represent your business and its products or services; to protect your company’s trademarks or service marks; and to assist your company in maintaining its trademark portfolio. Our transactional attorneys devote a significant portion of our practice to counseling and negotiations with respect to the procurement of ownership rights in original works. Whether for computer software, website design, images for use in marketing, or for other industry-specific work product, we have had significant experience with negotiating ownership issues involving copyrighted works.',
		},
	];

	return (
		<div className='max-w-6xl mx-auto p-6 '>
			{/* FAQ Sections */}
			<div className='space-y-4'>
				{faqData.map((item) => (
					<div
						key={item.id}
						className='bg-[#f0f0f0] overflow-hidden'>
						<button
							onClick={() => toggleSection(item.id)}
							className='w-full p-6 text-left bg-[#f0f0f0] flex items-center justify-between'>
							<div className='flex items-center space-x-4'>
								<div className='text-[#1B3A68] text-3xl font-bold'>
									{openSections[item.id] ? (
										<Minus size={20} />
									) : (
										<Plus size={20} />
									)}
								</div>
								<h2 className='text-xl sm:text-2xl md:text-3xl leading-10 font-bold text-[#1B3A68] tracking-wide'>
									{item.title}
								</h2>
							</div>
						</button>

						{openSections[item.id] && (
							<div className='px-6 py-8 bg-[#f0f0f0]'>
								<div className=''>
									<div className='w-10 border-t-8 border-[#1B3A68] mb-4'></div>
									<p className='text-[#6b6b6b] text-xl leading-6.5'>
										{item.content}
									</p>
								</div>
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default FAQComponent;

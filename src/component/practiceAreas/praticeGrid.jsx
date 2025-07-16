import img1 from '../../assets/images/piggy-bank-area-icon.svg';
import img2 from '../../assets/images/gavel-area-icon.svg';
import img3 from '../../assets/images/coin-hand-area-icon.svg';
import img4 from '../../assets/images/globe-area-icon.svg';
import img5 from '../../assets/images/cartificate-area-icon.svg';
import img6 from '../../assets/images/checklist-area-icon.svg';

const services = [
	{
		icon: img1,
		title: 'PRE-SUIT COLLECTIONS',
		description:
			'The first step to resolving a collection case can sometimes be the last. We work to quickly make demands upon and connect with your customers to resolve past due balances before legal action is needed.',
	},
	{
		icon: img2,
		title: 'COLLECTION SUITS',
		description:
			'After exhausting all pre-suit collection efforts, we file lawsuits to obtain judgement, and recover the commercial debt, personal property or collateral.',
	},
	{
		icon: img3,
		title: 'PERFECTION AND ENFORCEMENT OF LIENS',
		description:
			"There are tools available to help make sure you are paid for your services or your property is returned. Whether you are pursing mechanic's liens, UCC liens, or any other statutory liens, we can help.",
	},
	{
		icon: img4,
		title: 'POST-JUDGMENT ENFORCEMENT',
		description:
			"After a judgment is obtained, our work begins. Our services include asset investigation, garnishments, levies, debtors' examinations and foreclosure. We work to help recover everything possible post-judgment.",
	},
	{
		icon: img6,
		title: 'FOREIGN JUDGMENT DOMESTICATION',
		description:
			'In order to enforce judgment in a location other than where the original judgment was obtained, we offer foreign judgment domestication. We see to it that judgments from other states are entered and docketed in states where the judgment debtor may have assets.',
	},
	{
		icon: img5,
		title: 'CREDIT PROCEDURE AUDIT',
		description:
			'Every step of our credit process review is meticulous. We cover every aspect, including a review of credit application, guarantees and review and revision of policies and procedures.',
	},
];

export default function PracticeGrid() {
	return (
		<div className='bg-white py-8 sm:py-16 md:py-24 md:pt-16 px-6 md:px-4'>
			<div className='max-w-5xl mx-auto'>
				<h1 className='text-2xl md:text-3xl  font-bold text-[#1B3A68]  mb-12 md:leading-13.5'>
					COMMITTED TO SERVING ALL YOUR LEGAL NEEDS
				</h1>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{services.map((service, index) => (
						<div
							key={index}
							className='bg-[#f0f0f0]  p-8 text-center '>
							<div className='flex justify-center mb-6 w-32 h-32 mx-auto'>
								<img
									src={service.icon}
									alt='Service Icon'
								/>
							</div>
							<h3 className='text-xl font-bold text-[#1B3A68] mb-4 leading-6.5'>
								{service.title}
							</h3>
							<p className='text-[#6b6b6b] leading-7 text-lg '>
								{service.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

import { ArrowRight } from 'lucide-react';

const ContactMain = () => {
	const offices = [
		{
			city: 'MINNEAPOLIS, MN',
			name: 'Fifth Street Towers',
			address: '100 South Fifth Street',
			suite: 'Suite 800',
			location: 'Minneapolis, MN 55402',
			phone: '612-339-1421',
			fax: '612-392-3999',
		},
		{
			city: 'BROOKFIELD, WI',
			address: '300 N Corporate Drive',
			suite: 'Suite 200',
			location: 'Brookfield, WI 53045',
			phone: '262-792-1818',
			fax: '262-792-1830',
		},
		{
			city: 'BILLINGS, MT',
			address: '404 North 31st Street',
			suite: 'Suite 227',
			location: 'Billings, MT 59101',
			phone: '800-720-8171',
			fax: '612-329-3999',
		},
		{
			city: 'VANCOUVER, B.C., CANADA',
			address: '2015 Main Street',
			suite: '#02-121',
			location: 'Vancouver, BC V5T 3C2',
			phone: 'AB 866-221-3513',
			fax: '877-762-6550',
		},
	];

	const OfficeCard = ({ office }) => (
		<div className='mb-12 '>
			<h2 className='text-2xl  md:text-[46px] font-bold text-[#1B3A68] mb-4 uppercase tracking-wide leading-normal'>
				{office.city}
			</h2>
			<div className='border-b-6 border-[#1B3A68] w-12 mb-6'></div>

			<div className=' text-[#6B6B6B] mb-6 font-base text-3xl leading-normal'>
				{office.name && <p className='font-base'>{office.name}</p>}
				<p>{office.address}</p>
				<p>{office.suite}</p>
				<p>{office.location}</p>
			</div>

			<div className='space-x-4 text-[#6B6B6B] mb-6 flex'>
				<div className='flex items-center gap-2 text-3xl'>
					<span className='font-bold text-3xl'>P</span>
					<span>{office.phone}</span>
				</div>
				{office.phone2 && (
					<div className='flex items-center gap-2 text-3xl'>
						<span className='font-bold text-3xl'>P</span>
						<span>{office.phone2}</span>
					</div>
				)}
				<div className='flex items-center gap-2 text-3xl'>
					<span className='font-bold text-3xl'>F</span>
					<span>{office.fax}</span>
				</div>
			</div>

			<button className='border border-[#1B3A68] text-[#1B3A68] px-6 py-3  font-bold uppercase tracking-wide flex items-center gap-2 text-3xl '>
				GET DIRECTIONS
				<ArrowRight className='text-3xl' />
			</button>
		</div>
	);

	return (
		<div className='min-h-screen bg-gray-50'>
			{/* Office Locations Section */}
			<div className='max-w-7xl mx-auto px-6 py-16'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-16'>
					{offices.map((office, index) => (
						<OfficeCard
							key={index}
							office={office}
						/>
					))}
				</div>
			</div>

			{/* Contact Us Section */}
			<div className='bg-[#1B3A68] text-white py-16'>
				<div className='max-w-7xl mx-auto px-6'>
					<h2 className='text-4xl md:text-5xl font-bold mb-8 uppercase tracking-wide'>
						CONTACT US
					</h2>

					<div className='space-y-6 text-2xl leading-[42px]'>
						<p>
							If you are a long time client of the firm or just found WFJ while
							surfing the web, we look forward to hearing from you. Please send
							us your contact information and a brief summary of your
							comment/inquiry and one of our team members will be in touch
							shortly.
						</p>

						<p>
							If you are a LegalShield member, please remember to address legal
							matters by calling us on the phone for more efficient service.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactMain;

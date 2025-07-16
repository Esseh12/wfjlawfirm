import Hero from '../../../component/practiceAreas/hero';
import legal from '../../../assets/images/legal-shield-services.jpg';
import AttorneyGrid from '../../../component/practiceAreas/AttorneyGrid';
import { Businessattorneys } from '../../../component/data';
import ParallaxSection from '../../../component/practiceAreas/ParallaxSection';
import ContactForm from '../../../component/practiceAreas/ContactForm ';

const LegalSheidServices = () => {
	return (
		<>
			<Hero
				image={legal}
				subText={`Practice Areas`}
				mainText={`LegalShield`}
			/>
			<div className='py-24 max-w-6xl mx-auto px-4'>
				<p>
					As a LegalShield provider, WFJ offers affordable on-call solutions to
					individuals and companies in four states: Minnesota, South Dakota,
					North Dakota, Wisconsin, and Montana. Our services cover a wide range
					of legal matters, from bankruptcy to employment law to family and
					criminal law. Visit our LegalShield member solutions center. Learn
					more about LegalShield Membership.
				</p>
			</div>
			<AttorneyGrid
				heading='Meet Our LegalShield Attorneys'
				attorneys={Businessattorneys}
			/>
			<ParallaxSection />
			<ContactForm />
		</>
	);
};
export default LegalSheidServices;

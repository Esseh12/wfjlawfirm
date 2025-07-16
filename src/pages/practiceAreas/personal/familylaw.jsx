import Hero from '../../../component/practiceAreas/hero';
import AttorneyGrid from '../../../component/practiceAreas/AttorneyGrid';
import ParallaxSection from '../../../component/practiceAreas/ParallaxSection';
import ContactForm from '../../../component/practiceAreas/ContactForm ';
import { Businessattorneys } from '../../../component/data';
import family from '../../../assets/images/family-law.jpg';

const FamilyLaw = () => {
	return (
		<div>
			<Hero
				image={family}
				mainText={`Family Law`}
				subText={`Practice Areas`}
			/>
			<AttorneyGrid
				heading='Meet Our Family Law Attorneys'
				attorneys={Businessattorneys}
			/>
			<ParallaxSection />
			<ContactForm />
		</div>
	);
};
export default FamilyLaw;

import Hero from '../../../component/practiceAreas/hero';
import WfjTeams from '../../../component/practiceAreas/wfjTeam';
import AttorneyGrid from '../../../component/practiceAreas/AttorneyGrid';
import ParallaxSection from '../../../component/practiceAreas/ParallaxSection';
import ContactForm from '../../../component/practiceAreas/ContactForm ';
import TestimonialSlider from '../../../component/TestimonialSlider';
import PracticeGrid from '../../../component/practiceAreas/praticeGrid';
import { Businessattorneys } from '../../../component/data';
import { testimonials } from '../../../component/data';
import personal from '../../../assets/images/personal-injury-law.jpg';

const PersonalInjury = () => {
	return (
		<>
			<Hero
				image={personal}
				subText='Practice Areas'
				mainText='Construction'
			/>
			<WfjTeams
				mainText={`Matters of personal injury can be sensitive and unique. We handle each client’s specific situation with care and expertise. Our skilled attorneys have helped hundreds of clients achieve successful results in their cases.`}
				relatedHeading={`Related Article`}
				relatedLink={`WFJ Presents: Motorcycle Safety`}
			/>
			<PracticeGrid />
			<TestimonialSlider
				testimonials={testimonials}
				heading=''
			/>
			<AttorneyGrid
				heading='Meet Our Construction Attorneys'
				attorneys={Businessattorneys}
			/>
			<ParallaxSection />
			<ContactForm />
		</>
	);
};
export default PersonalInjury;

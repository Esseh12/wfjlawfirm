import construction from '../../assets/images/construction.jpg';
import Hero from '../../component/practiceAreas/hero';
import WfjTeams from '../../component/practiceAreas/wfjTeam';
import AttorneyGrid from '../../component/practiceAreas/AttorneyGrid';
import ParallaxSection from '../../component/practiceAreas/ParallaxSection';
import ContactForm from '../../component/practiceAreas/ContactForm ';
import TestimonialSlider from '../../component/TestimonialSlider';
import PracticeGrid from '../../component/practiceAreas/praticeGrid';
import { testimonials } from '../../component/data';
import { Businessattorneys } from '../../component/data';

const Construction = () => {
	return (
		<>
			<Hero
				image={construction}
				subText='Practice Areas'
				mainText='Construction'
			/>
			<WfjTeams
				mainText={`Our team of experienced construction law attorneys is uniquely familiar with issues of importance to material suppliers and subcontractors in the construction industry. For decades, our construction team has assisted clients with thousands of distressed projects and several economic downturns. We are ready to help you tackle your complex issues.`}
				relatedHeading={`Related Article`}
				relatedLink={`Construction - Nationwide Webinars`}
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
			<ContactForm title={`Construction`} />
		</>
	);
};
export default Construction;

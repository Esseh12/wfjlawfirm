import commercial from '../../assets/images/commercial-collections.jpg';
import Hero from '../../component/practiceAreas/hero';
import WfjTeams from '../../component/practiceAreas/wfjTeam';
import AttorneyGrid from '../../component/practiceAreas/AttorneyGrid';
import ParallaxSection from '../../component/practiceAreas/ParallaxSection';
import ContactForm from '../../component/practiceAreas/ContactForm ';
import TestimonialSlider from '../../component/TestimonialSlider';
import Associations from '../../component/practiceAreas/Associations';
import PracticeGrid from '../../component/practiceAreas/praticeGrid';
import { commercialTestimonials } from '../../component/data';
import { Businessattorneys } from '../../component/data';

const CommercialCollections = () => {
	return (
		<>
			<Hero
				image={commercial}
				subText='Practice Areas'
				mainText='Commercial Collections'
			/>

			<WfjTeams
				mainText={`Our team of creditors’ rights attorneys help clients around the world collect commercial debt. We work with you to prevent collection difficulties from arising and to minimize write-offs. From pre-suit to post-judgment, we are with you every step of the way.`}
				relatedHeading={`Related Article`}
				relatedLink={`What You Need To Know: MN's Emergency Executive Order for Commercial Collections`}
			/>
			<PracticeGrid />
			<TestimonialSlider
				testimonials={commercialTestimonials}
				heading=''
			/>
			<Associations />
			<AttorneyGrid
				heading='Meet Our Commercial Collections Attorneys'
				attorneys={Businessattorneys}
			/>
			<ParallaxSection />
			<ContactForm title={`Commercial Collections`} />
		</>
	);
};
export default CommercialCollections;

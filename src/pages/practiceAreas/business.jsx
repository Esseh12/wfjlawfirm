import business from '../../assets/images/business.jpg';
import Hero from '../../component/practiceAreas/hero';
import WfjTeams from '../../component/practiceAreas/wfjTeam';
import FAQComponent from '../../component/FAQComponent';
import AttorneyGrid from '../../component/practiceAreas/AttorneyGrid';
import ParallaxSection from '../../component/practiceAreas/ParallaxSection';
import ContactForm from '../../component/practiceAreas/ContactForm ';
import { Businessattorneys } from '../../component/data';

const Business = () => {
	return (
		<>
			<Hero
				image={business}
				subText='Practice Areas'
				mainText='Business'
			/>
			<WfjTeams
				mainText={`WFJ’s team of business attorneys and staff offer pragmatic solutions for a broad spectrum of business matters. Our firm’s corporate clients range from start-up enterprises to established Fortune 500 companies. Our primary areas of service are listed below.`}
				relatedHeading={`Related Article`}
				relatedLink={`Do You Conduct Business in MN as a Subcontractor or Supplier?`}
			/>
			{/* Faq component */}
			<FAQComponent />
			<AttorneyGrid
				heading='Meet Our Business Attorneys'
				attorneys={Businessattorneys}
			/>
			<ParallaxSection />
			<ContactForm title={`Buisness`} />
		</>
	);
};
export default Business;

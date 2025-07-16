import Hero from '../../component/practiceAreas/hero';
import employement from '../../assets/images/employment.jpg';
import ParallaxSection from '../../component/practiceAreas/ParallaxSection';
import ContactForm from '../../component/practiceAreas/ContactForm ';
import AttorneyGrid from '../../component/practiceAreas/AttorneyGrid';
import FAQComponent from '../../component/FAQComponent';
import { Businessattorneys } from '../../component/data';

const Employment = () => {
	return (
		<>
			<Hero
				image={employement}
				subText={`Practice Areas`}
				mainText={`Employment`}
			/>
			<div className='py-24 max-w-6xl mx-auto px-4'>
				<p>
					National representation of small businesses that includes day-to-day
					consultation on HR items, handbook preparation, online library of
					forms, check lists and FAQs, daily compliance updates and litigation
					defense for employee claims, including 24/7 access to online
					attorneys.
				</p>
			</div>
			<FAQComponent />
			<AttorneyGrid
				heading='Meet Our Employment Attorneys'
				attorneys={Businessattorneys}
			/>
			<ParallaxSection />
			<ContactForm title={`Employment`} />
		</>
	);
};
export default Employment;

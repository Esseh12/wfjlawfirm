import litigation from '../../assets/images/litigation.jpg';
import Hero from '../../component/practiceAreas/hero';
import WfjTeams from '../../component/practiceAreas/wfjTeam';
import FAQComponent from '../../component/FAQComponent';
import AttorneyGrid from '../../component/practiceAreas/AttorneyGrid';
import ParallaxSection from '../../component/practiceAreas/ParallaxSection';
import ContactForm from '../../component/practiceAreas/ContactForm ';
import { Businessattorneys } from '../../component/data';

const Litigation = () => {
	return (
		<>
			<Hero
				image={litigation}
				subText='Practice Areas'
				mainText='Litigation'
			/>
			<div className='py-24 max-w-6xl mx-auto px-4'>
				<p>
					Our litigation team represents both corporations and individuals in a
					diverse range of matters in state and federal courts. We work closely
					with clients to counsel on litigation risk prior to initiating suit,
					conduct trials and enforce judgments, offering practical solutions at
					each stage of the litigation process. We have the experience and
					know-how to develop and implement strategic litigation plans to
					achieve specific client objectives.
				</p>
			</div>
			<FAQComponent />
			<AttorneyGrid
				heading='Meet Our Litigation Attorneys'
				attorneys={Businessattorneys}
			/>
			<ParallaxSection />
			<ContactForm title={`Litigation`} />
		</>
	);
};

export default Litigation;

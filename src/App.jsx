import {
	BrowserRouter as Router,
	Routes,
	Route,
	useLocation,
} from 'react-router-dom';
import Navbar from './component/Navbar';
import Footer from './component/footer';

import Home from './pages/home';
import Contact from './pages/contact';
import Careers from './pages/careers';
import Attorney from './pages/attorneys';
import SupportServices from './pages/supportServices';
import WagnerBuisnessSolution from './pages/wagnerBuisnessSolution';
import Business from './pages/practiceAreas/business';
import CommercialCollections from './pages/practiceAreas/commercialCollections';
import Construction from './pages/practiceAreas/construction';
import Employment from './pages/practiceAreas/employment';
import Litigation from './pages/practiceAreas/litigation';
import PersonalFamilyLaw from './pages/practiceAreas/personal/familylaw';
import LegalSheidServices from './pages/practiceAreas/personal/legalSheidServices';
import PersonalInjury from './pages/practiceAreas/personal/personalInjury';
import Login from './pages/login';
import Perspectives from './pages/perspectives';

const Layout = ({ children }) => {
	const location = useLocation();

	// Check if current path is login
	const isLoginPage = location.pathname === '/client-login';

	return (
		<>
			{!isLoginPage && <Navbar />}
			<main>{children}</main>
			{!isLoginPage && <Footer />}
		</>
	);
};

const AppRoutes = () => (
	<Layout>
		<Routes>
			<Route
				path='/'
				element={<Home />}
			/>
			<Route
				path='/contact'
				element={<Contact />}
			/>
			<Route
				path='/careers'
				element={<Careers />}
			/>
			<Route
				path='/attorneys'
				element={<Attorney />}
			/>
			<Route
				path='/support-services'
				element={<SupportServices />}
			/>
			<Route
				path='/wbs'
				element={<WagnerBuisnessSolution />}
			/>
			<Route
				path='/practice-areas/business'
				element={<Business />}
			/>
			<Route
				path='/practice-areas/commercial-collections'
				element={<CommercialCollections />}
			/>
			<Route
				path='/practice-areas/construction'
				element={<Construction />}
			/>
			<Route
				path='/practice-areas/employment'
				element={<Employment />}
			/>
			<Route
				path='/practice-areas/litigation'
				element={<Litigation />}
			/>
			<Route
				path='/practice-areas/personal/family-law'
				element={<PersonalFamilyLaw />}
			/>
			<Route
				path='/practice-areas/personal/legal-shield'
				element={<LegalSheidServices />}
			/>
			<Route
				path='/practice-areas/personal/personal-injury'
				element={<PersonalInjury />}
			/>
			<Route
				path='/perspectives'
				element={<Perspectives />}
			/>
			<Route
				path='/client-login'
				element={<Login />}
			/>
		</Routes>
	</Layout>
);

const App = () => (
	<Router>
		<AppRoutes />
	</Router>
);

export default App;

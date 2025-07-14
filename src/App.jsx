import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Contact from './pages/contact';
import Careers from './pages/careers';
import Attorney from './pages/attorneys';
import SupportServices from './pages/supportServices';
import Footer from './component/footer';

const App = () => {
	return (
		<Router>
			<Navbar />
			<div className=''>
				<Routes>
					<Route
						path='/'
						element={<h1>Home</h1>}
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
				</Routes>
			</div>
			<Footer />
		</Router>
	);
};

export default App;

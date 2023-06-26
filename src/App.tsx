import { Route, Routes, Link } from "react-router-dom";
import {
	AboutUs,
	ContactMe,
	ContactUs,
	WelcomePage,
} from "./components/AboutUs";
import { Home } from "./components/Home";


function App() {
	return (
		<>
			<Home />

			{/* <Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<AboutUs />} />
				<Route path="/contactUs" element={<ContactUs />} />
				<Route path="/wpage" element={<WelcomePage />} />
				<Route path="/contactMe" element={<ContactMe />} />
			</Routes>
			<nav>
				<ul>
					<li>
						<Link to="/">Home Page</Link>
					</li>
					<li>
						<Link to="/about">about us</Link>
					</li>
					<li>
						<Link to="/contactUs">contact us</Link>
					</li>
					<li>
						<Link to="/wpage">wpage</Link>
					</li>
					<li>
						<Link to="/contactMe">contactMe</Link>
					</li>
				</ul>
			</nav> */}


		</>
	);
}

export default App;

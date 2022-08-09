import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import App from './App';
import Home from "./Home";
import About from "./About";
import NotFound from "./NotFound";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			{/* Nav bar */}
			<App /> 

			{/* Routes */}
			<div className='App'>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="home" element={<Home />} />
					<Route  index path="about" element={<About />} />
					<Route path="about/:id" element={<About/>} />
					<Route path="*" element={<NotFound />} />		

					{/* 
					<Route path={"/"} element={<Home />} />
					<Route path={"home"} element={<Home />} />
					<Route path={"about"} element={<About />} /> 
					<Route path="*"
							element={
									<main style={{ padding: "1rem" }}>
										<p>Page not found</p>
									</main>
								}
					/>
					*/}
				</Routes>
			</div>
			
		</BrowserRouter>
	</React.StrictMode>
);
reportWebVitals();

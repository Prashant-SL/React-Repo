import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Country from './Country/Country';
import City from './City/City';
import Home from './Home/Home';
import ResponsiveAppBar from './Navbar/Navbar';
const Routers = () => {
	return (
		<>
			<ResponsiveAppBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path={'/add-city'} element={<City />} />
				<Route path={'/add-country'} element={<Country />} />
			</Routes>
		</>
	);
};
export default Routers;

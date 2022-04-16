import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Home = () => {
	// const data=[];
	const [cityData, setCityData] = useState([]);
	useEffect(() => {
		getData();
		// console.log(cityData);
	}, []);
	var details;
	const getData = async () => {
		const response = await axios.get('http://localhost:8080/cities');
		var details = response.data;
		setCityData(...cityData, response.data);
		console.log('cityData:', cityData);
	};
	return (
		<>
			<table>
				<thead>
					<tr>
						<th>id</th>
						<th>Country</th>
						<th>City</th>
						<th>Population</th>
						<th>Edit</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>
					{cityData.map((e) => {
						<tr key={e.id}>
							<td>{e.id}</td>
							<td>{e.country}</td>
							<td>{e.city}</td>
							<td>{e.population}</td>
						</tr>;
					})}
				</tbody>
			</table>
		</>
	);
};
export default Home;

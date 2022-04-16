import React from 'react';
const City = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(e);
	};
	const handleChange = (e) => {
		const { name, value } = e.target;
		console.log('name', name, ':value', value);
		// console.log(e.target.value);
	};
	return (
		<>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="city"
					placeholder="Add City"
					onChange={handleChange}
				/>
				<select>
					<option>Select</option>
					<option>India</option>
					<option>China</option>
				</select>
				<input
					type="number"
					name="population"
					placeholder="Add Population"
					onChange={handleChange}
				/>
				<input
					type="submit"
					onChange={handleChange}
					name="submit"
					placeholder="Submit"
				/>
			</form>
		</>
	);
};
export default City;

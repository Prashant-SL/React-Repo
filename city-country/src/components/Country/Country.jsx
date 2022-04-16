import React from 'react';
const Country = () => {
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
					name="country"
					placeholder="Add Country"
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
export default Country;

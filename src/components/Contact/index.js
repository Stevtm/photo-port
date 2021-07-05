import React, { useState } from "react";

const ContactForm = () => {
	// manage form data state
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		message: "",
	});

	const { name, email, message } = formState;

	const handleChange = (event) => {
		setFormState({ ...formState, [event.target.name]: event.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(formState);
	};

	return (
		<section>
			<h1>Contact me</h1>
			<form id="contact-form" onSubmit={handleSubmit}>
				<div>
					<label htmlFor="name">Name:</label>
					<input
						type="text"
						name="name"
						defaultValue={name}
						onChange={handleChange}
					></input>
				</div>
				<div>
					<label htmlFor="email">Email address:</label>
					<input
						type="email"
						name="email"
						defaultValue={email}
						onChange={handleChange}
					></input>
				</div>
				<div>
					<label htmlFor="message">Message:</label>
					<input
						name="message"
						rows="5"
						defaultValue={message}
						onChange={handleChange}
					></input>
				</div>
				<button type="submit">Submit</button>
			</form>
		</section>
	);
};

export default ContactForm;

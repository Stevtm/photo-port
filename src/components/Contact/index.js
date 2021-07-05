import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

const ContactForm = () => {
	// manage form data state
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [errorMessage, setErrorMessage] = useState("");

	const { name, email, message } = formState;

	const handleChange = (event) => {
		if (event.target.name === "email") {
			const isValid = validateEmail(event.target.value);
			if (!isValid) {
				setErrorMessage("Your email is invalid.");
			} else {
				setErrorMessage("");
			}
		} else {
			if (!event.target.value.length) {
				setErrorMessage(`${event.target.name} is required.`);
			} else {
				setErrorMessage("");
			}
		}

		if (!errorMessage) {
			setFormState({ ...formState, [event.target.name]: event.target.value });
		}
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
						onBlur={handleChange}
					></input>
				</div>
				<div>
					<label htmlFor="email">Email address:</label>
					<input
						type="email"
						name="email"
						defaultValue={email}
						onBlur={handleChange}
					></input>
				</div>
				<div>
					<label htmlFor="message">Message:</label>
					<input
						name="message"
						rows="5"
						defaultValue={message}
						onBlur={handleChange}
					></input>
				</div>
				{errorMessage && (
					<div>
						<p className="error-text">{errorMessage}</p>
					</div>
				)}
				<button type="submit">Submit</button>
			</form>
		</section>
	);
};

export default ContactForm;

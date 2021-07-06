import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ContactForm from "..";

afterEach(cleanup);

describe("ContactForm component", () => {
	// baseline test
	it("renders", () => {
		render(<ContactForm></ContactForm>);
	});

	// snapshot test
	it("matches snapshot", () => {
		const { asFragment } = render(<ContactForm></ContactForm>);

		expect(asFragment()).toMatchSnapshot();
	});
});

describe("text content is visible", () => {
	it("h1 element has correct text", () => {
		const { getByTestId } = render(<ContactForm></ContactForm>);
		expect(getByTestId("h1tag")).toHaveTextContent("Contact me");
	});

	it("button text is correct", () => {
		const { getByTestId } = render(<ContactForm></ContactForm>);
		expect(getByTestId("button")).toHaveTextContent("Submit");
	});
});

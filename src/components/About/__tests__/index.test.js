import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import About from "..";

afterEach(cleanup);

describe("about component", () => {
	// first test (baseline)
	it("renders", () => {
		render(<About />);
	});

	// second test (test case)
	it("matches snapshot DOM node structure", () => {
		const { asFragment } = render(<About />);
		expect(asFragment()).toMatchSnapshot();
	});
});

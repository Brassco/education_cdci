import React from "react";
import {render, fireEvent} from "@testing-library/react-native";
import ButtonComponent from "../ButtonComponent";

describe("ButtonComponent", () => {
	test("renders with the correct title", () => {
		const title = "Click me";
		const {getByText} = render(
			<ButtonComponent title={title} onPress={() => {}} />
		);
		const buttonElement = getByText(title);
		expect(buttonElement).toBeDefined();
	});

	test("calls onPress when the button is pressed", () => {
		const onPressMock = jest.fn().mockReturnValue(1);
		const {getByText} = render(
			<ButtonComponent title="Click me" onPress={onPressMock} />
		);
		const buttonElement = getByText("Click me");

		fireEvent.press(buttonElement);

		// Check if onPress is called once
		expect(onPressMock).toHaveBeenCalledTimes(1);

		// If your onPress function returns a value, you can check it
		expect(onPressMock).toHaveReturnedWith(1);
	});
});

import React from "react";

//Types
export type ButtonProps = {
	title: string;
	onPress: () => void;
};

//View
import ButtonView from "./ButtonView";

const ButtonComponent = ({title, onPress}: ButtonProps) => {
	return <ButtonView title={title} onPress={onPress} />;
};

export default ButtonComponent;

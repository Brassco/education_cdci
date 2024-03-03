import React from "react";
import {SafeAreaView, Text, View} from "react-native";

//Components
import Button from "./src/components/Button/ButtonComponent";

function App(): React.JSX.Element {
	const handlePress = () => {
		return 1;
	};
	return (
		<SafeAreaView>
			<View>
				<Text>this is main screen</Text>
			</View>
			<View>
				<Button title={"This is button"} onPress={handlePress} />
			</View>
		</SafeAreaView>
	);
}

export default App;

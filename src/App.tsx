import React, { ChangeEventHandler, useRef, useState } from "react";
import "./App.css";
import Keyboard, { KeyboardReactInterface } from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import { textBox } from "./test.css";

function App() {
	const [value, setValue] = useState("");
	const [layout, setLayout] = useState("default");
	let keyboard = useRef<KeyboardReactInterface | null>(null);

	const handleChange = (input: string) => {
		setValue(input);
	};

	const handleKeyPress = (button: string) => {
		audio.play();

		if (button === "{shift}" || button === "{lock}") {
			layout == "default" ? setLayout("shift") : setLayout("default");
		}
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
		// @ts-ignore
		keyboard.current.setInput(e.target.value);
	};

	let audio = new Audio("sound/iPhonetypingonkeyboard(A6B479D-MSH).mp3");

	return (
		<div className="App">
			<input
				className={textBox}
				value={value}
				placeholder={"Start typing!"}
				onChange={(e) => handleInputChange(e)}
			/>

			<Keyboard
				keyboardRef={(k: KeyboardReactInterface) => (keyboard.current = k)}
				layoutName={layout}
				onChange={handleChange}
				onKeyPress={handleKeyPress}
			/>
		</div>
	);
}

export default App;

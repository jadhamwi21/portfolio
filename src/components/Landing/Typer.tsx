import React from "react";
import styled from "styled-components";
import TypeWriter, { TypewriterClass } from "typewriter-effect";
import { TyperWords } from "../../constants/typerwords";

const TyperInit = (Typewriter: TypewriterClass) => {
	const PauseDuration = 1000; //ms
	Typewriter.typeString(TyperWords.First).pauseFor(PauseDuration).deleteAll();
	Typewriter.typeString(TyperWords.Second).pauseFor(PauseDuration).deleteAll();
	Typewriter.typeString(TyperWords.Third).pauseFor(PauseDuration).deleteAll();
	Typewriter.start();
};

const Typer = () => {
	return (
		<TyperContainer>
			<TypeWriter
				onInit={TyperInit}
				options={{
					loop: true,
				}}
			/>
		</TyperContainer>
	);
};
const TyperContainer = styled.div`
	height: fit-content;
	width: auto;
	white-space: nowrap;
	font-size: 20px;
	color: var(--Gray);
`;

export default Typer;

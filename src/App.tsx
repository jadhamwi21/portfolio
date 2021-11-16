import React, { useEffect } from "react";
import styled from "styled-components";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Landing from "./components/Landing/Landing";
import Portfolio from "./components/Portfolio/Portfolio";
import Skills from "./components/Skills/Skills";
import AOS from "aos";

function App() {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<AppContainer>
			<Landing />
			<Dividor>
				<About />
				<Skills />
				<Portfolio />
				<Contact />
			</Dividor>
		</AppContainer>
	);
}
const AppContainer = styled.main`
	height: fit-content;
	width: 100vw;
	overflow-x: hidden;
`;
const Dividor = styled.div`
	background-color: var(--LightBlack);
	padding-bottom: 2em;
	& > section {
		padding: 2em;
	}
`;

export default App;

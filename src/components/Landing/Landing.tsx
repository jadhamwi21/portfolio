import React from "react";
import styled from "styled-components";
import WavyShape from "./WavyShape";
import LandingHeader from "./LandingHeader";
import Introducer from "./Introducer";
import Picture from "./Picture";

const Landing = () => {
	return (
		<Container>
			<LandingHeader />
			<Introducer />
			<Picture />
			<WavyShape />
		</Container>
	);
};

const Container = styled.section`
	height: 90vh;
	width: 100%;
	background-color: var(--Black);
	position: relative;
	@media (max-width: 768px) {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}
`;

export default Landing;

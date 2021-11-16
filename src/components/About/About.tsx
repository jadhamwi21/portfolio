import React from "react";
import styled from "styled-components";
import Biography from "./Biography";
import Header from "./Header";

const About = () => {
	return (
		<Container>
			<Header />
			<Biography />
		</Container>
	);
};
const Container = styled.section`
	height: 500px;
	width: 100%;
	@media (max-width: 768px) {
		height: auto;
	}
`;

export default About;

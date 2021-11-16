import React from "react";
import styled from "styled-components";
import SingleLink from "./SingleLink";

const LandingHeader = () => {
	return (
		<Container>
			<List>
				<SingleLink linkName="Home" scrollToElementId="home" />
				<SingleLink linkName="About" scrollToElementId="about" />
				<SingleLink linkName="Skills" scrollToElementId="skills" />
				<SingleLink linkName="Portfolio" scrollToElementId="portfolio" />
				<SingleLink linkName="Contact" scrollToElementId="contact" />
			</List>
		</Container>
	);
};
const Container = styled.header`
	height: 100px;
	position: absolute;
	width: 100%;
	padding: 1em 0px;
	@media (max-width: 768px) {
		height: fit-content;
		position: initial;
	}
`;
const List = styled.ul`
	display: flex;
	flex-direction: row;
	width: 100%;
	justify-content: space-around;
	align-items: center;
	list-style: none;
	padding: 0px;
`;

export default LandingHeader;

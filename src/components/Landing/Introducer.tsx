import React from "react";
import styled from "styled-components";
import Welcome from "./Welcome";
import Typer from "./Typer";
import SocialMediaAccounts from "./SocialMediaAccounts";

interface Props {}

const Introducer = (props: Props) => {
	return (
		<Container>
			<Welcome />
			<Typer />
			<SocialMediaAccounts />
		</Container>
	);
};
const Container = styled.section`
	position: absolute;
	top: 50%;
	left: 15%;
	transform: translate(-25%, -50%);
	width: 300px;
	z-index: 4;
	@media (max-width: 768px) {
		position: initial;
		top: 0;
		left: 0;
		transform: initial;
		width: auto;
		margin-bottom: 8em;
	}
`;

export default Introducer;

import React from "react";
import styled from "styled-components";
import Email from "./Email";
import Header from "./Header";

interface Props {}

const Contact = (props: Props) => {
	return (
		<React.Fragment>
			<Header />
			<Container>
				<Email />
			</Container>
		</React.Fragment>
	);
};
const Container = styled.div`
	margin: 1em auto;
	width: fit-content;
	height: fit-content;
`;

export default Contact;

import React from "react";
import styled from "styled-components";

interface Props {}

const Welcome = (props: Props) => {
	return <Header>Welcome</Header>;
};
const Header = styled.h2`
	color: var(--Yellow);
	display: block;
`;

export default Welcome;

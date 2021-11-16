import React from "react";
import styled from "styled-components";

interface Props {}

const Header = (props: Props) => {
	return <Element id="contact">Contact</Element>;
};
const Element = styled.h1`
	text-align: center;
	color: var(--Yellow);
	padding-bottom: 1em;
`;

export default Header;

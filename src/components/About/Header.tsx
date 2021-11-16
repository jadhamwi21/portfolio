import React from "react";
import styled from "styled-components";

const Header = () => {
	return <Element id="about">About Me</Element>;
};

const Element = styled.h1`
	text-align: center;
	color: var(--Yellow);
	padding-bottom: 1em;
`;

export default Header;

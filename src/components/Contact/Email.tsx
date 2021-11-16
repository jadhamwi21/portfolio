import React from "react";
import styled from "styled-components";
import EmailIcon from "../../assets/EmailLogo.png";

const Email = () => {
	return (
		<Wrapper>
			<EmailIconElement src={EmailIcon} />
			<EmailLink href="mailto: jad.hamwi8@hotmail.com">
				jad.hamwi8@hotmail.com
			</EmailLink>
		</Wrapper>
	);
};
const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;

const EmailIconElement = styled.img`
	height: 25px;
	width: 25px;
`;
const EmailLink = styled.a`
	color: white;
	margin-left: 0.75em;
`;

export default Email;

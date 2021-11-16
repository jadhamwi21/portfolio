import React from "react";
import styled from "styled-components";

const Biography = () => {
	return (
		<Wrapper>
			Hello, my name is Jad, I've been developing web apps for the past few
			years, I live in Damascus, SY, I spend most of my time reading articles,
			blogs, sometimes videos about software engineering, I'm comfortable
			working in a team, flexible in tasks and working hours, motivated to help
			in developing the best products out to the world.
		</Wrapper>
	);
};
const Wrapper = styled.div`
	text-align: start;
	color: var(--Gray);
	font-size: 18px;
	margin: 0 auto;
	height: fit-content;
	width: auto;
	max-width: 300px;
	line-height: 1.5;
	letter-spacing: 1.2px;
`;

export default Biography;

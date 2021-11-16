import React from "react";
import styled from "styled-components";

interface Props {
	skills: string[];
	skillsTitle: string;
}

const SingleSkill = ({ skills, skillsTitle }: Props) => {
	return (
		<Container>
			<Title>{skillsTitle}</Title>
			<Content>
				{skills.map((skill) => (
					<div>- {skill}</div>
				))}
			</Content>
		</Container>
	);
};
const Container = styled.div`
	height: 400px;
	width: 400px;
	margin: 0px 5em;
	@media (max-width: 768px) {
		width: auto;
		height: auto;
	}
`;
const Title = styled.h3`
	color: var(--Yellow);
	text-align: center;
`;
const Content = styled.div`
	text-align: start;
	color: var(--Gray);
	font-size: 18px;
	line-height: 1.5;
`;

export default SingleSkill;

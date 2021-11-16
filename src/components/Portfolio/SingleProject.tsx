import React from "react";
import styled from "styled-components";
import { Project } from "../../constants/projects";
import WalkdogLogo from "../../assets/Walkdog.jpg";
import InvokerCastingLogo from "../../assets/InvokerCasting.jpg";
import VolterLogo from "../../assets/Volter.jpg";
import BurgerBuilderLogo from "../../assets/BurgerBuilder.jpg";

interface Props {
	project: Project;
}

const GetLogo = ({ name }: Project) => {
	if (name === "Walk Dog") {
		return WalkdogLogo;
	}
	if (name === "Invoker Casting") {
		return InvokerCastingLogo;
	}
	if (name === "Volter") {
		return VolterLogo;
	}
	if (name === "Burger Builder") {
		return BurgerBuilderLogo;
	}
};

const SingleProject = ({ project }: Props) => {
	const Logo = GetLogo(project);
	return (
		<Card
			data-aos={project.enterAnimation}
			data-aos-duration="300"
			data-aos-offset="25"
			data-aos-easing="ease-out"
		>
			<Section>{project.name}</Section>
			<LogoElement src={Logo} />
			<Section>Description</Section>
			<Description>{project.description}</Description>
			<Section>Stack</Section>
			<Stack>
				{project.stack.map((tech) => (
					<TechStack>{tech}</TechStack>
				))}
			</Stack>
			<Section>Links</Section>
			<Link href={project.source_code} target="_blank">
				View Source Code
			</Link>
			<Link href={project.demo} target="_blank">
				Demo
			</Link>
		</Card>
	);
};
const Card = styled.div`
	background-color: var(--Black);
	height: fit-content;
	width: 500px;
	margin: 2em;
	border-radius: 4px;
	padding: 4em;
	@media (max-width: 768px) {
		margin: 1em;
		width: auto;
	}
`;
const Section = styled.h1`
	color: var(--Yellow);
`;
const LogoElement = styled.img`
	height: auto;
	width: 100%;
	margin: 0 auto;
	display: block;
	border-radius: 6px;
	margin-top: 4em;
`;
const Description = styled.p`
	color: var(--Gray);
	line-height: 2;
`;
const Stack = styled.p`
	color: var(--Gray);
	margin: 0 auto;
	width: fit-content;
	text-align: center;
`;
const TechStack = styled.div`
	margin: 0.5em 0px;
`;
const Link = styled.a`
	outline: none;
	color: var(--Gray);
	display: block;
	margin: 0.5em 0px;
`;

export default SingleProject;

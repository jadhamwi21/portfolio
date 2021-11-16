import React from "react";
import styled from "styled-components";
import {
	Experience,
	ManagementSkills,
	TechnicalSkils,
} from "../../constants/skills";
import Header from "./Header";
import SingleService from "./SingleSkill";

const Service = () => {
	return (
		<Container>
			<Header />
			<ServicesFlexbox>
				<SingleService skillsTitle="Management" skills={ManagementSkills} />
				<SingleService skillsTitle="Technical" skills={TechnicalSkils} />
				<SingleService skillsTitle="Experience" skills={Experience} />
			</ServicesFlexbox>
		</Container>
	);
};
const Container = styled.section``;

const ServicesFlexbox = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	margin: 0em auto;
	margin-top: 4em;
	width: fit-content;
`;

export default Service;

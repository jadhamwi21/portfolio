import React from "react";
import styled from "styled-components";
import { Projects } from "../../constants/projects";
import SingleProject from "./SingleProject";

const ProjectsMapper = () => {
	return (
		<Container>
			{Projects.map((Project) => (
				<SingleProject project={Project} />
			))}
		</Container>
	);
};
const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 0 auto;
	width: fit-content;
`;

export default ProjectsMapper;

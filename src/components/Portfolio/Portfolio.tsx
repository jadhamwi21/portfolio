import React from "react";
import styled from "styled-components";
import Header from "./Header";
import ProjectsMapper from "./ProjectsMapper";

const Portfolio = () => {
	return (
		<Container>
			<Header />
			<ProjectsMapper />
		</Container>
	);
};
const Container = styled.section``;

export default Portfolio;

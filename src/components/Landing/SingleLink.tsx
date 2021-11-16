import React from "react";
import styled from "styled-components";

interface Props {
	linkName: string;
	scrollToElementId: string;
}

const SingleLink = ({ linkName, scrollToElementId }: Props) => {
	return (
		<ListElement
			onClick={() => {
				document
					.getElementById(scrollToElementId)
					?.scrollIntoView({ behavior: "smooth" });
			}}
		>
			<LinkElemenet>{linkName}</LinkElemenet>
			<Underline />
		</ListElement>
	);
};
const ListElement = styled.li`
	color: var(--Gray);
	padding: 0px;
	font-weight: 600;
	cursor: pointer;
	position: relative;
	user-select: none;
	&:hover {
		& div:nth-child(2) {
			transform: translateY(4px);
		}
	}
`;

const LinkElemenet = styled.div`
	color: var(--Gray);
	font-weight: 600;
	cursor: pointer;
`;
const Underline = styled.div`
	position: absolute;
	top: 100%;
	left: 0px;
	height: 1px;
	width: 100%;
	background-color: var(--Gray);
	transition: all 0.5s;
`;

export default SingleLink;

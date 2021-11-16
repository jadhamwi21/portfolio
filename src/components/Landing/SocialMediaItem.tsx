import React from "react";
import styled from "styled-components";

interface Props {
	src: string;
	linkTo: string;
}

const SocialMediaItem = ({ src, linkTo }: Props) => {
	return (
		<Link href={linkTo} target="_blank">
			<Icon src={src} />
		</Link>
	);
};
const Link = styled.a``;
const Icon = styled.img`
	height: 32px;
	width: 32px;
	margin: 1em 4em 0em 0em;
	cursor: pointer;
`;

export default SocialMediaItem;

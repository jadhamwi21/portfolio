import React from "react";
import styled from "styled-components";
import JadPicture from "../../assets/jad.png";

const Picture = () => {
	return <PictureElement src={JadPicture} id="home" />;
};
const PictureElement = styled.img`
	position: absolute;
	bottom: 0;
	right: 10%;
	@media (max-width: 768px) {
		right: 0;
		left: 50%;
		transform: translateX(-50%);
	}
`;

export default Picture;

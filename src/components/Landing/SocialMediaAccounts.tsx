import React from "react";
import SocialMediaItem from "./SocialMediaItem";
import IG from "../../assets/instagram.svg";
import FB from "../../assets/facebook.svg";
import GH from "../../assets/github.svg";

const SocialMediaAccounts = () => {
	return (
		<div>
			<SocialMediaItem
				src={IG}
				linkTo="https://www.instagram.com/reactjs.evolution/"
			/>
			<SocialMediaItem
				src={FB}
				linkTo="https://www.facebook.com/jad.alhamwi/"
			/>
			<SocialMediaItem
				src={GH}
				linkTo="https://github.com/jadhamwi21"
			/>
		</div>
	);
};

export default SocialMediaAccounts;

export interface Project {
	name: "Invoker Casting" | "Walk Dog" | "Volter" | "Burger Builder";
	description: string;
	stack: string[];
	source_code: string;
	demo: string;
	enterAnimation: "fade-left" | "fade-right";
}

export const Projects: Project[] = [
	{
		name: "Invoker Casting",
		description:
			"This Simple Web App Helps Dota 2 Players To Practice On A Hero That's Called Invoker, Which Invloves Invoking Spells By Combining Multiple Orbs.",
		stack: ["Reactjs", "Javascript"],
		source_code: "https://github.com/jadhamwi21/invoker-casting",
		demo: "https://invoker-casting.web.app/",
		enterAnimation: "fade-left",
	},
	{
		name: "Walk Dog",
		description:
			"This Web App Helps Dog Owners Find Dog Borrowers Online, and assign a real meeting after chat",
		stack: ["Reactjs", "Javascript", "Firebase"],
		source_code: "https://github.com/jadhamwi21/walkdog",
		demo: "https://walkdog-1b001.web.app",
		enterAnimation: "fade-right",
	},
	{
		name: "Volter",
		description:
			"This Bot Helps People Listen To Their Favorite Songs In An Easier Way, It Supports Voice Commands As Well",
		stack: ["Reactjs", "Typescript", "Nodejs"],
		source_code: "https://github.com/jadhamwi21/volter-rythm-bot",
		demo: "https://volter-rythm-bot.netlify.app/",
		enterAnimation: "fade-left",
	},
	{
		name: "Burger Builder",
		description:
			"This Web App Basically Allows You To Build Your Burger Online, Order It, Track The Order, Cancel The Order.",
		stack: ["Reactjs", "Typescript", "Nodejs", "Postgre"],
		source_code: "https://github.com/jadhamwi21/burger-builder",
		demo: "https://burger-builder1.vercel.app",
		enterAnimation: "fade-right",
	},
];
export type ProjectsType = typeof Projects;

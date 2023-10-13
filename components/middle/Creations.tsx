import Cards from "./Cards";

export default function Creations() {
	const data = [
		{
			title: "ChatGpt Web App",
			content:
				"A ChatGPT Clone App repository! This is a simplified version of the ChatGPT application  with a GPT-3.5 powered chatbot.",
			techStack: ["JavaScript, ", "NodeJs, ", "React"],
			links: {
				github: "https://github.com/darkweb19/ChatGpt-App",
				share: "",
			},
		},
		{
			title: "React-Porfolio",
			content: "Explore My React Portfolio made with plain react-app.",
			techStack: ["React JS"],
			links: {
				github: "https://github.com/darkweb19/react-portfolio",
				share: "https://darkweb19.github.io/react-portfolio/",
			},
		},
		{
			title: "Threads-Clone",
			content:
				"A frontend design of Threads made with Next Js, understanding a brief about App Router in Next JS 13v",
			techStack: ["Next JS v13 ,", "TypeScript"],
			links: {
				github: "https://github.com/darkweb19/threads-client",
				share: "https://darkweb19.github.io/react-portfolio/",
			},
		},
		{
			title: "Threads-Backend",
			content:
				"The heart of Threads,  backend server. Crafted with Node.js, GraphQL, PostgreSQL, and Prisma, this is the backbone of the application. ",
			techStack: ["TypeScript, ", "Node, ", "GraphQL, ", "Prisma, "],
			links: {
				github: "https://github.com/darkweb19/threads-server",
				share: "",
			},
		},
		{
			title: "Discord-Bot-AI",
			content:
				"A Discord bot which generates human like text powered with OpenAi ChatGpt 3.5 API",
			techStack: ["Node Js , ", "JavaScript"],
			links: {
				github: "https://github.com/darkweb19/discord-bot-chatgpt",
				share: "https://darkweb19.github.io/react-portfolio/",
			},
		},
	];

	return (
		// card list
		<div className="h-fit w-full flex p-3">
			{/* card  */}
			{data.map((datas, i) => (
				<Cards key={i} data={datas} delay={i * 100} />
			))}
		</div>
	);
}

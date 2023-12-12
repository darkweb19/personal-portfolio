import type { Metadata } from "next";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { inter, lilitaFont, playpenSans, ubuntu } from "@/app/notes/layout";
import SuccessNote from "@/components/Notes/SuccessNote";
import TopNavButtons from "@/components/Notes/TopNavButtons";
import { FaCircle } from "react-icons/fa";
import { Code } from "@nextui-org/react";
import WarningNote from "@/components/Notes/WarninNote";
import CodePreview from "@/components/Notes/CodePreview";
import { domCode, prevCode } from "./code";

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: "What is useRef Hook | React JS",
		description: "Introduction to useRef and its usecases.",
	};
}

export default function SetUp() {
	return (
		<div className="flex flex-col gap-1">
			<TopNavButtons
				nextLink="/notes/react/useContext"
				prevLink="/notes/react/useEffect"
			/>

			<div className="w-full flex justify-around h-fit p-2">
				<div className="flex flex-col justify-evenly ">
					<h1
						className={`${lilitaFont.className} text-4xl text-gray-700`}
					>
						useRef Hook
					</h1>
					<div className="border p-3 w-11/12 h-fit ">
						<h1
							className={`${ubuntu.className} text-3xl font-medium text-slate-black`}
						>
							What are useRef Hooks in React?
						</h1>
						<p
							className={`${inter.className} flex gap-1 text-lg text-justify`}
						>
							<span className="border py-1 h-fit text-xl">
								<IoIosArrowDroprightCircle />
							</span>
							useRef is a React Hook that lets you reference a
							value that&apos;s not needed for rendering.It can
							also be used to access a DOM element directly.
						</p>
						<SuccessNote content="This means , value changed does not cause a re-render." />

						<div className="p-2">
							<h1
								className={`${ubuntu.className} text-3xl mt-2 font-medium text-slate-black`}
							>
								The primary use cases for useRef includes:
							</h1>
							<p
								className={`${inter.className} flex mt-2 font-medium gap-1 items-center text-xl text-justify`}
							>
								<span className="border py-1 h-fit text-xs">
									<FaCircle />
								</span>
								Accessing DOM elements
							</p>
							<p
								className={`${inter.className} flex gap-1 mt-1 items-center text-lg text-justify`}
							>
								<span className="border py-1 h-fit text-xs"></span>
								One of the most common use cases of `useRef` is
								accessing DOM elements. Instead of using
								document.getElementById or other DOM queries,
								you can use useRef to directly reference an
								element within your component.
							</p>

							<CodePreview code={`${domCode}`} />

							<p
								className={`${inter.className} flex gap-1 mt-4 items-center text-xl text-justify`}
							>
								<span className="border py-1 h-fit text-xs">
									<FaCircle />
								</span>
								Storing previous values
							</p>
							<p
								className={`${inter.className} flex gap-1 mt-1 items-center text-lg text-justify`}
							>
								<span className="border py-1 h-fit text-xs"></span>
								You can use useRef to store a value that
								persists across renders but doesn&apos;t trigger
								a re-render when updated. This can be useful
								when you need to keep track of previous values
								without triggering unnecessary renders.
							</p>
							<CodePreview code={`${prevCode}`} />
						</div>
						<WarningNote content="Also, note that `useRef` is not limited to working with DOM elements; it can be used for any mutable value that you want to persist across renders without causing re-renders." />
						<h1
							className={`${ubuntu.className} text-3xl font-medium text-slate-black`}
						>
							Refinement
						</h1>
						<p
							className={`${inter.className} flex gap-1 mt-1 items-center text-lg text-justify`}
						>
							<span className="border py-1 h-fit text-xs"></span>
							`useRef` is a powerful hook in React.js that enables
							developers to efficiently access and modify DOM
							elements, preserve values, and manage state without
							triggering unnecessary re-renders. Its versatility
							makes it an indispensable tool in a developer&apos;s
							toolkit, allowing for enhanced control and
							performance optimization in React applications. By
							mastering the use cases and practical
							implementations demonstrated in this article,
							developers can leverage the full potential of useRef
							to build more robust and efficient React components.
						</p>
					</div>
				</div>
			</div>

			<TopNavButtons
				nextLink="/notes/react/useContext"
				prevLink="/notes/react/useEffect"
			/>
		</div>
	);
}

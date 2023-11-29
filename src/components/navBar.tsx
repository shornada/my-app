import { useState } from "react";

import { Container, Content, ClosedSideBar, OpenSideBar } from "./styles";

import {
	DiReact,
} from "react-icons/di";

import {
	IoNotificationsSharp,
} from "react-icons/io5";

import {
	MdSettings
} from "react-icons/md";

import {
	BsArrowRight,
	BsArrowLeft,
} from "react-icons/bs";

import {
	RiLogoutCircleRLine
} from "react-icons/ri";

import logoImg from "../assets/logo.svg";

export function SideBar() {
	const [sideBar, setSideBar] = useState(false);

	function handleChangeSideBar() {
		setSideBar((prevState) => !prevState);
	}
	return (
		<Container>
			<Content>
				{!sideBar ? (
					<ClosedSideBar>
						<nav>
							<button onClick={handleChangeSideBar}>
								<BsArrowRight />
							</button>
							{/* Links principais do app */}
							<ul>
								<a href="/" title="Graf">
									<DiReact />
								</a>
								<a href="/" title="Dlaždice">
									<DiReact />
								</a>

							</ul>
						</nav>
						
					</ClosedSideBar>
				) : (
					<OpenSideBar>
						<section>
							<nav>
								<span>
									<button onClick={handleChangeSideBar}>
										<BsArrowLeft />
									</button>
								</span>
								{/* Icones principais do app */}
								<ul>
									<a href="/" title="Graf">
										<DiReact />
										<p>Graf</p>
									</a>
									<a href="/" title="Dlaždice">
										<DiReact />
										<p>Dlaždice</p>
									</a>

								</ul>
							</nav>
						
						</section>
						<aside onClick={handleChangeSideBar} />
					</OpenSideBar>
				)}
			</Content>
		</Container>
	);
}

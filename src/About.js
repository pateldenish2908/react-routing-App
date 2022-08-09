import React from "react";
import { useParams } from "react-router-dom";

function About() {
	let params = useParams();

	return (
		<>
		<h1>About</h1>
		<p>How am I?</p>
			{!params.id == '' &&
			<h3>
				Parameter is - {params.id}
			</h3>
			}
		</>
	);
}

export default About;

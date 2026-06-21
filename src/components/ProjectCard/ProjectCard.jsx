import React from "react"
import './ProjectCard.css'
import { Fade } from 'react-awesome-reveal'

export default function ProjectCard({ cardInfo }) {
	function openUrlInNewTab(url) {
		var win = window.open(url, "_blank");
		win.focus();
	}

	return (
		<>
			<Fade direction={cardInfo.direction} duration={1000} distance="20px">
				<div className="project-card">
					<div className="projectImage">
						<img src={cardInfo.image} alt="PWA" />
					</div>
					<div className="projectDetails">
						<h5 className="projectTitle">{cardInfo.title}</h5>
						<p className="projectSubtitle">
							{Array.isArray(cardInfo.description) ? (
								<ul>
									{cardInfo.description.map((item, i) => (
										<li key={i}>{item}</li>
									))}
								</ul>
							) : (
								cardInfo.description
							)}
						</p>
					</div>
					<div className="projectFooter">
						{
							cardInfo.footer && cardInfo.footer.map((v, i) => {
								return (
									<span key={i} className="certificate-tag" onClick={() => openUrlInNewTab(v.url)} >{v.name}</span>
								);
							})
						}
					</div>
				</div>
			</Fade>
		</>
	);
}
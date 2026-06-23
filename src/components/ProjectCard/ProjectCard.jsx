import React, { useState } from "react"
import './ProjectCard.css'
import { Fade } from 'react-awesome-reveal'

export default function ProjectCard({ cardInfo }) {
	const [isExpanded, setIsExpanded] = useState(false);

	function openUrlInNewTab(url) {
		var win = window.open(url, "_blank");
		win.focus();
	}

	const renderDescription = () => {
		if (Array.isArray(cardInfo.description)) {
			return (
				<ul>
					{cardInfo.description.map((item, i) => (
						<li key={i}>{item}</li>
					))}
				</ul>
			);
		} else {
			return cardInfo.description;
		}
	};

	return (
		<>
			<Fade direction={cardInfo.direction} duration={1000} distance="20px">
				<div className="project-card">
					<div className="projectImage">
						<img src={cardInfo.image} alt="PWA" />
					</div>
					<div className="projectDetails">
						<h5 className="projectTitle">{cardInfo.title}</h5>
						<p className={`projectSubtitle ${!isExpanded ? 'truncated' : ''}`}>
							{renderDescription()}
						</p>
						{!isExpanded && (
							<span className="readMoreLink" onClick={() => setIsExpanded(true)}>
								more...
							</span>
						)}
						{isExpanded && (
							<span className="readMoreLink" onClick={() => setIsExpanded(false)}>
								...less
							</span>
						)}
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
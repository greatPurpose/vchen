import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ExperienceAccordion from '../../containers/experienceAccordion/ExperienceAccordion.js';
// import experience from '../../shared/experience_data.json';
import "./Experience.css";
import { Fade } from "react-reveal";

const experience = {
	title: "Experience",
	subtitle: "Work and Internship",
	description:
		"I’m a Shopify/Wordpress developer with more than 6 years of experience in both website development and design. As a developer, I’ve worked with different industries ranging from real estate to healthcare and lead scrum meetings/delegated tasks using agile methodology. As a designer, it is my goal to bring a brand’s abstract vision to life. I have experience efficiently creating wireframes and prototypes using the latest design tools.",
	header_image_path: "experience.svg",
	sections: [
		{
			title: "Shopify/Wordpress Developer",
			experiences: [
				{
					title: "Shopify Developer",
					company: "Squarespace",
					company_url: "https://www.linkedin.com/company/squarespace/",
					logo_path: "0.png",
					duration: "2014 - Present",
					location: "",
					description:
						"I have worked over 6 year of experience in creating and designing websites for starter e-commerce companies.",
					color: "#9b1578"
				},
				{
					title: "Wordpress Developer",
					company: "Omolashes IIC",
					company_url: "https://omolashes.com/",
					logo_path: "coursera_logo.png",
					duration: "Jan 2018 - Apr 2019",
					location: "",
					description:
						"I have conducted consumer research and develop integrations to boost user interaction.",
					color: "#9b1578"
				}
			]
		},
		{
			title: "Internship",
			experiences: [
				{
					title: "DevOps Intern",
					company: "Unbail-Rodamco-Westfield",
					company_url: "https://www.linkedin.com/company/unibail-rodamco-westfield/",
					logo_path: "1.png",
					duration: "Jun 2018 - Sep 2019",
					location: "Greater Los Angeles",
					description:
						"I have provided innovative technology solutions that deliver a superior guest service to world class shopping centers globally.",
					color: "#ee3c26"
				}				
			]
		}
	]
};

class Experience extends Component {
	render() {
		return (
			<div className="experience-main">
				<Header />
				<div className="basic-experience">
					<Fade bottom duration={1000} distance="40px">
						<div className="experience-heading-div">
							<div className="experience-heading-img-div">
								<img
									src={require(`../../assests/images/${experience["header_image_path"]}`)}
								    alt=""
								/>
							</div>
							<div className="experience-heading-text-div">
								<h1 className="experience-heading-text">{experience.title}</h1>
								<h3 className="experience-heading-sub-text">
									{experience["subtitle"]}
								</h3>
								<p className="experience-header-detail-text subTitle">
									{experience["description"]}
								</p>
							</div>
						</div>
					</Fade>
				</div>
				<ExperienceAccordion sections={experience["sections"]} />
				<Footer />
			</div>
		);
	}
}

export default Experience;

import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/Layout';
import SEO from '../components/seo';

import Header from '../components/Header/Header';
import Project from '../components/Project/Project';
import Skills from '../components/Skills/Skills';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';

const Index = ({ data, location }) => {
	const siteTitle = data.site.siteMetadata.title;

	return (
		<Layout location={location} title={siteTitle}>
			<SEO title='My web site' />
			<Header />
			<Project
				imgLink={data.bestfiveImage.childImageSharp.fluid}
				title='Tourism Web Application'
				numb='#1'
				tags={[ 'JavaScript', 'PWA', 'Google Analytics', 'SEO', 'Google Maps API' ]}
				GitHubLink='https://github.com/Easaaa/Bestfive-bcn'
				LiveLink='https://bestfivebcn.com/'
				order1='2'
				order2='1'
				alignEnd
				firstProject
				mobile
			/>
			<Project
				imgLink={data.toureoadminImage.childImageSharp.fluid}
				title='Dashboard Administration App'
				numb='#2'
				tags={[ 'React.js', 'Redux', 'Firebase Auth', 'Firestore' ]}
				GitHubLink='https://github.com/Easaaa/admin-app-bestfive'
				LiveLink='https://bestfivebcn.netlify.com/'
			/>
			<Project
				imgLink={data.hotelvittoriaImage.childImageSharp.fluid}
				title='Hospitality Business Web Site'
				numb='#3'
				tags={[ 'React.js', 'Gatsby', 'Mobile & Desktop View' ]}
				GitHubLink='https://github.com/Easaaa/hotel-vittoria-2020'
				LiveLink='https://hotelvittoria.netlify.com/'
				order1='2'
				order2='1'
				alignEnd
			/>
			<Project
				imgLink={data.toureoprotoImage.childImageSharp.fluid}
				title='Mobile App Prototype'
				numb='#4'
				tags={[ 'React.js', 'ReactNative', 'Firebase' ]}
				mobile
				workingOn
			/>
			<About />
			<Skills />
			<Contact id='contact' />
		</Layout>
	);
};

export default Index;

export const pageQuery = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
		bestfiveImage: file(relativePath: { eq: "projects/bestfive.png" }) {
			id
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
		hotelvittoriaImage: file(relativePath: { eq: "projects/hotel-vittoria.png" }) {
			id
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
		toureoadminImage: file(relativePath: { eq: "projects/toureo-admin.png" }) {
			id
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
		toureoprotoImage: file(relativePath: { eq: "projects/toureo-proto.png" }) {
			id
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
		allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
			edges {
				node {
					excerpt
					fields {
						slug
					}
					frontmatter {
						date(formatString: "MMMM DD, YYYY")
						title
						description
					}
				}
			}
		}
	}
`;

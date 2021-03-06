import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout/Layout';
import SEO from '../components/seo';

import Header from '../components/Header/Header';
import Project from '../components/Project/Project';
import Skills from '../components/Skills/Skills';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';

import BestfiveImg from '../../assets/projects/bestfive.png';

const Index = ({ data, location }) => {
	const siteTitle = data.site.siteMetadata.title;

	return (
		<Layout location={location} title={siteTitle}>
			<SEO title='My web site' />
			<Header />
			<Project
				imgLink={BestfiveImg}
				text='I created this web app with my girlfriend, born from a common idea of ​​simplifying our possible choices to go to an outdoor place on a sunny day. It is essentially a pwa created without the need for additional frameworks.'
				tags={[ 'JavaScript', 'PWA', 'Google Analytics', 'SEO', 'Google Maps API' ]}
				GitHubLink='https://github.com/Easaaa/Bestfive-bcn'
				LiveLink='https://bestfivebcn.com/'
				firstProject
			/>
			<Project
				tet=''
				tags={[]}
				GitHubLink='https://github.com/Easaaa/Bestfive-bcn'
				LiveLink='https://bestfivebcn.com/'
			/>
			<Skills />
			<About />
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

module.exports = {
	siteMetadata: {
		title: `Leonardo Tononi`,
		author: {
			name: `Leonardo Tononi`,
			summary: `A React Developer.`
		},
		description: `Hi, this is my website where I show what I can do.`,
		siteUrl: `https://leonardotononi.netlify.com/`,
		social: {
			twitter: `_Easaaa_`
		}
	},
	plugins: [
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/blog`,
				name: `blog`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/assets`,
				name: `assets`
			}
		},
		{
			resolve: 'gatsby-plugin-mailchimp',
			options: {
				endpoint:
					'https://leonardotononi.us19.list-manage.com/subscribe/post?u=0e17379be535600a870fd35b5&amp;id=fb07199113'
			}
		},

		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 590
						}
					},
					{
						resolve: `gatsby-remark-responsive-iframe`,
						options: {
							wrapperStyle: `margin-bottom: 1.0725rem`
						}
					},
					`gatsby-remark-prismjs`,
					`gatsby-remark-copy-linked-files`,
					`gatsby-remark-smartypants`
				]
			}
		},
		{
			resolve: `gatsby-plugin-styled-components`,
			options: {
				// Add any options here
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				//trackingId: `ADD YOUR TRACKING ID HERE`,
			}
		},
		`gatsby-plugin-feed`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Gatsby Starter Blog`,
				short_name: `GatsbyJS`,
				start_url: `/`,
				background_color: `#ffffff`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `content/assets/gatsby-icon.png`
			}
		},
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-smoothscroll`,
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/utils/typography`
			}
		},
		{
			resolve: 'gatsby-plugin-page-progress',
			options: {
				includePaths: [ '/', { regex: '^/blog' } ],
				excludePaths: [],
				height: 3,
				prependToBody: false,
				color: `#3F3D56`
			}
		},
		{
			resolve: `gatsby-plugin-scroll-reveal`,
			options: {
				threshold: 1, // Percentage of an element's area that needs to be visible to launch animation

				// Advanced Options
				selector: '[scroll-eff]', // Selector of the elements to be animated
				animateClassName: 'scroll-eff-anim', // Class name which triggers animation
				disabledClassName: 'scroll-eff-disab', // Class name which defines the disabled state
				rootMargin: '0% 50%', // Corresponds to root's bounding box margin
				enterEventName: 'sal:in', // Enter event name
				exitEventName: 'sal:out' // Exit event name
			}
		}
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	]
};

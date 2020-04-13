import React from 'react';
import styled from 'styled-components';
import { Icon, InlineIcon } from '@iconify/react';
import mailIcon from '@iconify/icons-entypo/mail';
import githubFilled from '@iconify/icons-ant-design/github-filled';
import linkedinIcon from '@iconify/icons-zmdi/linkedin';

import { ContactContainer, Title, SocialLinkContainer, SocialLink, ResumeButton } from './Contact.styles';

const IconSocial = styled(Icon)`
font-size: 45px;
`;

const Contact = ({ id }) => {
	return (
		<ContactContainer id={id}>
			<Title>How to contact me</Title>
			<p>
				I am available for freelancer jobs and to work in your company. If you think I would be a good fit for
				you, send me an email.
			</p>
			<ResumeButton href='/static/CV-Leonardo-Tononi-2020.pdf' download>
				Download Resume
			</ResumeButton>
			<SocialLinkContainer>
				<SocialLink>
					<a href='mailto:leonardotononi@gmail.com'>
						<IconSocial icon={mailIcon} />
					</a>
				</SocialLink>
				<SocialLink>
					<a href='https://github.com/Easaaa' target='_blank'>
						<IconSocial icon={githubFilled} />
					</a>
				</SocialLink>
				<SocialLink>
					<a href='https://www.linkedin.com/in/leonardo-tononi/' target='_blank'>
						<IconSocial icon={linkedinIcon} />
					</a>
				</SocialLink>
			</SocialLinkContainer>
		</ContactContainer>
	);
};

export default Contact;

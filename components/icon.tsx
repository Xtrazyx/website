'use client';
import { FunctionComponent } from 'react';
import Link from 'next/link';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Twitter from '@mui/icons-material/Twitter';
import Github from '@mui/icons-material/GitHub';

export type Props = {
    url: string;
    icon: 'linkedIn' | 'twitter' | 'github';
};

const icons = {
    linkedIn: () => <LinkedIn fontSize="inherit" color={'inherit'} />,
    twitter: () => <Twitter fontSize="inherit" color={'inherit'} />,
    github: () => <Github fontSize="inherit" color={'inherit'} />,
};

const SocialIcon: FunctionComponent<Props> = (props) => {
    const { url = '', icon } = props;

    const Icon = icons[icon];

    return (
        <>
            <Link target={'_blank'} passHref as={url} href={url} className="icon-button">
                <Icon />
            </Link>
        </>
    );
};

export default SocialIcon;

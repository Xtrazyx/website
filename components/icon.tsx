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

const style = (
    <style jsx>{`
        .icon-button {
            padding: 0;
            margin: 0;
            border: none;
            font-family: Poppins;
            font-weight: 500;
            text-align: center;
            color: var(--font-white);
            transition-duration: 0.8s;
            font-size: 72px;
            line-height: 72px;
            background: transparent;
            color: var(--font-turquoise);
        }

        .icon-button:hover {
            border-color: var(--font-yellow);
            color: var(--font-yellow);
            cursor: pointer;
        }

        .icon-button svg {
            padding: 0;
            margin: 0;
        }
    `}</style>
);

const SocialIcon: FunctionComponent<Props> = (props) => {
    const { url = '', icon } = props;

    const Icon = icons[icon];

    return (
        <>
            <Link target={'_blank'} passHref as={url} href={url} className="icon-button">
                <Icon />
            </Link>
            {style}
        </>
    );
};

export default SocialIcon;

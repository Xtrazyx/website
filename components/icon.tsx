import { FunctionComponent } from 'react';
import Link from 'next/link';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Twitter from '@mui/icons-material/Twitter';

export type Props = {
    url: string;
    icon: 'linkedIn' | 'twitter';
};

const icons = {
    linkedIn: () => <LinkedIn fontSize="inherit" color={'inherit'} />,
    twitter: () => <Twitter fontSize="inherit" color={'inherit'} />,
}

const Icon: FunctionComponent<Props> = (props) => {
    const { url = '', icon } = props;

    const Icon = icons[icon];

    return (
        <Link passHref as={url} href={url}>
            <button className={`button`}>
                <Icon/>
                <style jsx>{`
                    .button {
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

                    .button:hover {
                        border-color: var(--font-yellow);
                        color: var(--font-yellow);
                        cursor: pointer;
                    }

                    .button svg {
                        padding: 0;
                        margin: 0;
                    }

                `}</style>
            </button>
        </Link>
    );
};

export default Icon;

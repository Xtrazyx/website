import { FunctionComponent } from 'react';
import Link from 'next/link';

export type Props = {
    label?: JSX.Element;
    url?: string;
    external?: boolean;
};

const CTA: FunctionComponent<Props> = (props) => {
    const { label, url = '', external } = props;

    const Tag = external ? 'a' : 'button';

    return (
        <Link passHref as={url} href={url}>
            <Tag {...(external ? {target: '_blank'} : {})} className={`button`}>
                {label}
                <style jsx>{`
                    .button {
                        padding: 12px;
                        border-radius: 12px;
                        border-color: var(--font-blue);
                        border-width: 4px;
                        border-style: solid;
                        background: linear-gradient(45deg, #211e46, var(--font-blue));
                        font-family: Poppins;
                        font-weight: 500;
                        text-align: center;
                        font-size: 18px;
                        color: var(--font-white);
                        transition-duration: 0.8s;
                    }

                    .button:hover {
                        border-color: var(--font-yellow);
                        color: var(--font-yellow);
                        cursor: pointer;
                    }
                `}</style>
            </Tag>
        </Link>
    );
};

export default CTA;

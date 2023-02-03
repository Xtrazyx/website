import { FunctionComponent } from 'react';
import { css } from '@emotion/react';
import Link from 'next/link';

export type Props = {
    label?: JSX.Element;
    url?: string;
    external?: boolean;
};

const style = (
    <style jsx>{`
        .cta {
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

        .cta:hover {
            border-color: var(--font-yellow);
            color: var(--font-yellow);
            cursor: pointer;
        }
    `}</style>
);

const CTA: FunctionComponent<Props> = (props) => {
    const { label, url = '', external } = props;

    return (
        <>
            <Link {...(external ? { target: '_blank' } : {})} href={url} className="cta">
                {label}
                <style jsx>{`
                    .cta {
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

                    .cta:hover {
                        border-color: var(--font-yellow);
                        color: var(--font-yellow);
                        cursor: pointer;
                    }
                `}</style>
            </Link>
        </>
    );
};

export default CTA;

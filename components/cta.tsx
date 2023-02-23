'use client';
import { FunctionComponent } from 'react';
import Link from 'next/link';

export type Props = {
    label?: JSX.Element;
    url?: string;
    external?: boolean;
};

const CTA: FunctionComponent<Props> = (props) => {
    const { label, url = '', external } = props;

    return (
        <>
            <Link {...(external ? { target: '_blank' } : {})} href={url} className="cta">
                {label}
            </Link>
        </>
    );
};

export default CTA;

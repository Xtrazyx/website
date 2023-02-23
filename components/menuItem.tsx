'use client';
import { FunctionComponent } from 'react';
import Link from 'next/link';

export type MenuItemProps = {
    id: string;
    label: JSX.Element;
    color?: 'white' | 'yellow' | 'blue' | 'turquoise' | 'orange' | 'green';
    url?: string;
    className?: string;
    active?: string;
};

const MenuItem: FunctionComponent<MenuItemProps> = (props) => {
    const { label, color = 'white', url, active, id } = props;

    return (
        <Link passHref href={url} legacyBehavior>
            <div className={`${active === id ? 'active' : 'item'} line line-${color}`}>
                <button className={`${active === id && 'button-active'} button color-${color}`}>
                    {label}
                </button>
            </div>
        </Link>
    );
};

export default MenuItem;

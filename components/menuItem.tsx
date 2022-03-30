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
        <Link passHref href={url}>
            <div className={`${active === id ? 'active' : 'item'} line`}>
                <button className={`${active === id && 'button-active'} button`}>
                    {label}
                </button>

                <style jsx>{`
                    .line {
                        border-bottom: 4px solid var(--font-${color});
                    }

                    .button {
                        width: 100%;
                        background-color: transparent;
                        border: none;
                        font-family: Quicksand;
                        font-weight: 300;
                        text-align: left;
                        font-size: 24px;
                        color: var(--font-white);
                        transition-duration: 0.4s;
                    }

                    .item:hover button {
                        font-size: 32px;
                        cursor: pointer;
                        color: var(--font-${color});
                    }

                    .item {
                        margin: 12px 0;
                        width: 238px;
                        font-size: 24px;
                        color: var(--font-white);
                        transition-duration: 0.4s;
                    }

                    .item:hover {
                        width: 284px;
                        font-size: 32px;
                        cursor: pointer;
                        color: var(--font-${color});
                    }

                    .active {
                        width: 284px;
                        margin: 18px 0;
                        pointer-events: none;
                    }

                    .button-active {
                        font-size: 32px;
                        color: var(--font-${color});
                    }
                `}</style>
            </div>
        </Link>
    );
};

export default MenuItem;

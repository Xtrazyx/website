import { FunctionComponent } from 'react';
import MenuItem, { MenuItemProps } from './menuItem';

export type MenuProps = {
    entries: MenuItemProps[];
    active?: 'menu_jh' | 'menu_tarifs' | 'sandpiles' ;
};

const Menu: FunctionComponent<MenuProps> = (props) => {
    const { entries, active } = props;

    return (
        <div className="container">
            {entries.map((item, index) => (
                <MenuItem className={'grid-item'} key={index} active={active} {...item} />
            ))}
            <div className="filler" />

            <style jsx>{`
                .container {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: flex-end;
                    width: 100%;
                }

                .filler {
                    height: 0;
                    width: 0;
                }

                @media screen and (max-width: 1200px) {
                    .container {
                        flex-wrap: wrap;
                        justify-content: flex-end;
                        width: 300px;
                    }
                }

                @media screen and (min-width: 1800px) {
                    .container {
                        border-right: 4px solid var(--font-orange);
                    }

                    .filler {
                        height: 48px;
                        width: 100%;
                    }
                }
            `}</style>
        </div>
    );
};

export default Menu;

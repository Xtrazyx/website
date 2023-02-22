'use client';
import { FunctionComponent } from 'react';
import MenuItem, { MenuItemProps } from './menuItem';

export type MenuProps = {
    entries: MenuItemProps[];
    active?: 'menu_jh' | 'menu_tarifs' | 'sandpiles' ;
};

const Menu: FunctionComponent<MenuProps> = (props) => {
    const { entries, active } = props;

    return (
        <div className="menu-container">
            {entries.map((item, index) => (
                <MenuItem className={'grid-item'} key={index} active={active} {...item} />
            ))}
            <div className="menu-filler" />
        </div>
    );
};

export default Menu;

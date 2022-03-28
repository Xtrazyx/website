import { FunctionComponent } from 'react';
import MenuItem, { MenuItemProps } from './menuItem';
import { v4 as uuidv4 } from 'uuid';

export type MenuProps = {
    entries: MenuItemProps[];
    active?: string;
};

const Menu: FunctionComponent<MenuProps> = (props) => {
    const { entries, active } = props;

    return (
        <div className="container">
            {entries.map((item, index) => (
                <MenuItem className={'grid-item'} key={index} active={active} {...item} />
            ))}
            <style jsx>{`
                .container {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: flex-end;
                    width: 100%;
                }

                @media screen and (max-width: 1200px) {
                    .container {
                        flex-wrap: wrap;
                        justify-content: flex-end;
                        width: 300px;
                    }
                }
            `}</style>
        </div>
    );
};

export default Menu;

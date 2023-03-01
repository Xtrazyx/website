import type { MenuItemProps } from '@singular/components/menuItem';

export const menuEntries: MenuItemProps[] = [
    {
        label: <span>Home</span>,
        color: 'green',
        id: 'menu_jh',
        url: '/',
    },
    {
        label: <span>Contact / Tarifs</span>,
        color: 'yellow',
        id: 'menu_tarifs',
        url: '/tarifs',
    },
    {
        label: <span>Sandpile game</span>,
        color: 'blue',
        id: 'sandpiles',
        url: '/sandpiles',
    },
];

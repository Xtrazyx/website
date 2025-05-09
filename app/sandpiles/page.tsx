import { menuEntries } from '@singular/config/index';
import Layout from '@singular/components/layout';
import Menu from '@singular/components/menu';
import Fill from '@singular/components/fill';
import SandpileGame from '@singular/game/sandpile';

const Sandpiles = () => {
    return (
        <Layout
            title="Dev Fullstack Freelance - Julien Habert - Sandpile game"
            menu={
                <Menu
                    entries={menuEntries}
                    active={'sandpiles'}
                />
            }
            content={
                <SandpileGame/>
            }
            footer={
                <>
                    <Fill />
                    <span>©Singular - Julien Habert - {new Date().getFullYear()}</span>
                </>
            }
        />
    );
};

export default Sandpiles;

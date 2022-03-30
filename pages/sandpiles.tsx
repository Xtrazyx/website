import Layout from '../components/layout';
import { menuEntries } from '../config';
import Menu from '../components/menu';
import Fill from '../components/fill';
import SandpileGame from '../game/sandpile';

const Sandpiles = () => {
    return (
        <Layout
            title="Dev Fullstack Freelance - Julien Habert"
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

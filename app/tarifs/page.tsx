import Layout from '@singular/components/layout';
import Fill from '@singular/components/fill';
import Menu from '@singular/components/menu';
import Bottom from '@singular/components/bottom';
import CTA from '@singular/components/cta';
import Icon from '@singular/components/icon';
import { menuEntries } from '@singular/config/index';

const Tarifs = () => {
    return (
        <Layout
            title={'Dev Fullstack Freelance - Julien Habert - Tarifs et contact'}
            menu={<Menu entries={menuEntries} active={'menu_tarifs'} />}
            content={
                <div className="text">
                    <h1>
                        <span className="color-red weight-medium">Tarifs</span> taux journalier moyen
                    </h1>
                    <h2 className="weight-bold">500€* / jour</h2>
                    <p>* tarif négociable en fonction des paramètres de la mission</p>
                    <br />

                    <h1>
                        <span className="color-red weight-medium">Contact</span>
                    </h1>
                    <p>
                        <CTA
                            label={<span>Prendre rendez-vous</span>}
                            url={'https://calendly.com/freelance-julien-habert/rdv-prise-de-contact'}
                            external
                        />
                    </p>
                    <br />

                    <h1>
                        <span className="color-red weight-medium">Réseaux</span>
                    </h1>
                    <div className={'social'}>
                        <Icon icon="linkedIn" url="https://www.linkedin.com/in/singular/" />
                        <Icon icon="twitter" url="https://twitter.com/Xtrazyx" />
                        <Icon icon="github" url="https://github.com/Xtrazyx" />
                    </div>
                </div>
            }
            bottom={<Bottom />}
            footer={
                <>
                    <Fill />
                    <span>©Singular - Julien Habert - {new Date().getFullYear()}</span>
                </>
            }
        />
    );
};

export default Tarifs;

import Layout from '../components/layout';
import Fill from '../components/fill';
import Menu from '../components/menu';
import Bottom from '../components/bottom';
import CTA from '../components/cta';
import Icon from '../components/icon';
import { menuEntries } from '../config';

const Tarifs = () => {
    return (
        <Layout
            title={'Tarifs et contact'}
            menu={
                <Menu
                    entries={menuEntries}
                    active={'menu_tarifs'}
                />
            }
            content={
                <div className="text">
                    <h1>
                        <span className="color-red weight-medium">Tarifs</span> taux journalier moyen
                    </h1>
                    <h2 className="weight-bold">500€* / jour</h2>
                    <p>* tarif négociable en fonction des paramètres de la mission</p><br/>

                    <h1>
                        <span className="color-red weight-medium">Contact</span>
                    </h1>
                    <p>
                       <CTA
                        label={<span>Prendre rendez-vous</span>}
                        url={'https://calendly.com/freelance-julien-habert/rdv-prise-de-contact'}
                    /> 
                    </p><br/>
                    

                    <h1>
                        <span className="color-red weight-medium">Réseaux</span>
                    </h1>
                    <div className={'social'}>
                        <Icon icon='linkedIn' url='https://www.linkedin.com/in/singular/'/>
                        <Icon icon='twitter' url='https://twitter.com/Xtrazyx'/>
                        <Icon icon='github' url='https://github.com/Xtrazyx'/>
                    </div>

                    <style jsx>{`
                        .social .button {
                            margin-right: 24px
                        }
                    `}</style>
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

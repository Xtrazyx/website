import { menuEntries } from '@singular/config/index';

import Layout from '@singular/components/layout';
import Fill from '@singular/components/fill';
import Menu from '@singular/components/menu';
import Bottom from '@singular/components/bottom';
import CTA from '@singular/components/cta';
import Avatar from '@singular/components/avatar';

const Home = () => {
    return (
        <Layout
            title="Dev Fullstack Freelance - Julien Habert - Home"
            menu={<Menu entries={menuEntries} active={'menu_jh'} />}
            content={
                <div className="text">
                    <Avatar />
                    <h1>
                        <span className="color-red weight-medium">Passionné</span> de création informatique <br /> since
                        1978 (almost)
                    </h1>
                    <p>
                        Je suis spécialisé depuis + de 5 ans dans les technologies web avec un fort penchant pour le{' '}
                        <span className="color-yellow weight-bold">Javascript</span> et le{' '}
                        <span className="color-blue weight-bold">Typescript</span> :<br /> alliance entre flexibilité et
                        rigueur dans l’implémentation, ces languages omniprésents aussi bien en front qu’en back sont
                        synonymes de modernité et bénéficient d’un écosystème riche en librairies et frameworks.
                    </p>
                    <p>
                        Au cours de ces années mon expérience s’est focalisée principalement sur l’
                        <span className="color-orange weight-bold">UX/UI</span> ainsi que{' '}
                        <span className="color-green weight-bold">l'architecture front</span> dans le domaine des
                        services financiers :<br /> j'ai donc pratiqué extensivement la librairie{' '}
                        <span className="color-turquoise weight-bold">ReactJs</span> ainsi que le temps réel pour
                        piloter des interfaces procédurales.
                    </p>
                    <p>
                        Dans une <span className="color-green weight-bold">approche produit holostique</span> appuyée
                        par mes expériences diverfisiées en création informatique (product design, 3d, game scripting,
                        level design, print, sound design, visual id):{' '}
                        <ul>
                            <li>
                                je vous accompagne de la{' '}
                                <span className="color-orange weight-bold">conception à la réalisation</span>
                            </li>
                            <li>
                                j’interviens en <span className="color-yellow weight-bold">support</span> pour de
                                l’architecture fullstack
                            </li>
                            <li>
                                je <span className="color-green weight-bold">manage</span> une équipe pour assurer
                                l’intégration de nouvelles recrues
                            </li>
                            <li>
                                je fabrique des{' '}
                                <span className="color-turquoise weight-bold">
                                    composants d’UI cohérents et composables
                                </span>
                            </li>
                            <li>
                                je <span className="color-red weight-bold">brainstorm</span> avec vous pour faire
                                émerger vos idées en fonctions opérables
                            </li>
                        </ul>
                        <span className="big">...et bien plus encore 🚀</span>
                        <p>
                            <CTA label={<span>Me contacter</span>} url={'/tarifs'} />
                        </p>
                    </p>
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

export default Home;

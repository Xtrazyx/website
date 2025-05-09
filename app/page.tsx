import Image from 'next/image';

import { menuEntries } from '@singular/config/index';

import Layout from '@singular/components/layout';
import Fill from '@singular/components/fill';
import Menu from '@singular/components/menu';
import Bottom from '@singular/components/bottom';
import CTA from '@singular/components/cta';
import Avatar from '@singular/components/avatar';
import Card from '@singular/components/card';
import VLine from '@singular/components/vLine';

const Home = () => {
    const YEAR_MS = 31536000000; // A year in ms
    const since = Math.round((new Date().getTime() - new Date('2018-04-01').getTime()) / YEAR_MS);

    return (
        <Layout
            title="Dev Fullstack Freelance - Julien Habert - Home"
            menu={<Menu entries={menuEntries} active={'menu_jh'} />}
            content={
                <div className="text">
                    <h1>
                        <span className="color-red weight-medium">Passionné</span> de création informatique
                    </h1>
                    <Card
                        header={
                            <>
                                <Avatar />
                                <div className="margin-center">
                                    <h3>Julien Habert since 1978</h3>
                                </div>
                            </>
                        }
                        content={
                            <>
                                <h3>Votre développeur personnel</h3>
                                <p>
                                    Dans une{' '}
                                    <span className="color-green weight-bold">approche produit holistique</span> appuyée
                                    par mes expériences diverfisiées en création informatique (product design, 3d, game
                                    scripting, level design, print, sound design, visual id):{' '}
                                    <ul>
                                        <li>
                                            je vous accompagne de la{' '}
                                            <span className="color-orange weight-bold">
                                                conception à la réalisation
                                            </span>
                                        </li>
                                        <li>
                                            j’interviens <span className="color-yellow weight-bold">intégralement</span>{' '}
                                            pour de l’architecture fullstack
                                        </li>
                                        <li>
                                            je <span className="color-green weight-bold">manage</span> une équipe pour
                                            assurer l’intégration de nouvelles recrues
                                        </li>
                                        <li>
                                            je fabrique des{' '}
                                            <span className="color-turquoise weight-bold">
                                                composants d’UI cohérents et composables
                                            </span>
                                        </li>
                                        <li>
                                            je <span className="color-red weight-bold">brainstorm</span> avec vous pour
                                            faire émerger vos idées en fonctions opérables
                                        </li>
                                    </ul>
                                </p>
                                <p>
                                    <span className="big">...et bien plus encore 🚀</span>
                                </p>
                            </>
                        }
                    />
                    <VLine />
                    <Card
                        header={
                            <div className="flex-horizontal flex-space-around gap-1-rem">
                                <Image src={`/technos/ts.png`} width={75} height={75} alt={`logo of Ts`} />
                                <Image src={`/technos/js.png`} width={75} height={75} alt={`logo of js`} />
                            </div>
                        }
                        content={
                            <div>
                                <h3>Do you speak Js ?</h3>
                                <p>
                                    Je suis spécialisé depuis + de {since} ans dans les technologies web avec un fort penchant
                                    pour le <span className="color-yellow weight-bold">Javascript</span> et le{' '}
                                    <span className="color-blue weight-bold">Typescript</span> :<br /> alliance entre
                                    flexibilité et rigueur dans l’implémentation, ces languages omniprésents aussi bien
                                    en front qu’en back sont synonymes de modernité et bénéficient d’un écosystème riche
                                    en librairies et frameworks.
                                </p>
                            </div>
                        }
                    />
                    <VLine />
                    <Card
                        header={
                            <div className="flex-horizontal flex-space-around gap-1-rem">
                                <Image src={`/technos/react.png`} width={75} height={75} alt={`logo of React`} />
                                <Image src={`/technos/nextjs.png`} width={75} height={75} alt={`logo of NextJs`} />
                            </div>
                        }
                        content={
                            <>
                                <h3>Always on the front !</h3>
                                <p>
                                    Au cours de ces années mon expérience s’est focalisée principalement sur l’
                                    <span className="color-orange weight-bold">UX/UI</span> ainsi que{' '}
                                    <span className="color-green weight-bold">l'architecture front</span> dans le
                                    domaine des services financiers.
                                    <br /> J'ai pratiqué extensivement la librairie{' '}
                                    <span className="color-turquoise weight-bold">ReactJs</span> ainsi que le temps réel
                                    pour piloter des interfaces procédurales. Au titre des activités dans le domaine
                                    d'information, j'ai pu également mettre en place de la génération statique avec le
                                    Framework front <span className="weight-bold">NextJs</span> (v15 with appDir &
                                    Server Components / Actions).
                                </p>
                            </>
                        }
                    />
                    <VLine />
                    <Card
                        header={
                            <div className="flex-horizontal flex-space-around gap-1-rem">
                                <Image src={`/technos/nodejs.png`} width={75} height={75} alt={`logo of NodeJs`} />
                                <Image src={`/technos/strapi.svg`} width={75} height={75} alt={`logo of Strapi`} />
                            </div>
                        }
                        content={
                            <>
                                <h3>Call me back...</h3>
                                <p>
                                    Arpantant le chemin du fullstack depuis de nombreuses années, j'ai monté des
                                    applications dans différents environnements. De symfony à{' '}
                                    <span className="color-blue weight-bold">Strapi</span> en passant par{' '}
                                    <span className="color-green weight-bold">NodeJs</span>, j'ai pu aborder de nombreux
                                    cas d'usages: API, CMS headless, CRUD, micro-service (lambda). Je suis donc à même
                                    de créer une application complète !
                                </p>
                            </>
                        }
                    />
                    <VLine />
                    <div style={{ width: '248px' }}>
                        <Card content={<CTA label={<span>Me contacter</span>} url={'/tarifs'} />} />
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

export default Home;

import Layout from '../components/layout';
import Fill from '../components/fill';
import Menu from '../components/menu';
import Image from 'next/image';

const technos = [
    'js',
    'ts',
    'react',
    'nextjs',
    'nodejs',
    'mobx',
    'html',
    'webpack',
    'babel',
    'docker',
    'mysql',
    'mongodb',
    'mui',
    'css',
    'yarn',
    'gitlab',
    'git',
    'jamstack',
    'figma',
    'illustrator',
    'photoshop',
];

const Home = () => {
    return (
        <Layout
            menu={
                <Menu
                    entries={[
                        {
                            label: <span>Julien Habert</span>,
                            color: 'green',
                        },
                        {
                            label: <span>Contact / Tarifs</span>,
                            color: 'yellow',
                        },
                    ]}
                />
            }
            content={
                <>
                    <h1>
                        <span className="color-red weight-medium">Passionné</span> de création informatique <br /> since
                        1978 (almost)
                    </h1>
                    <p>
                        Je suis spécialisé depuis +5 ans dans les technologies web avec un fort penchant pour le{' '}
                        <span className="color-yellow weight-bold">Javascript</span> et le{' '}
                        <span className="color-blue weight-bold">Typescript</span> : alliance entre flexibilité et
                        rigueur dans l’implémentation, ces languages omniprésents aussi bien en front qu’en back sont
                        synonymes de modernité et bénéficient d’un écosystème riche en librairies et frameworks.
                    </p>
                    <p>
                        Au cours de ces années mon expérience s’est focalisée principalement sur l’
                        <span className="color-orange weight-bold">UX/UI</span> ainsi que l'architecture front dans le
                        domaine des services financiers : beaucoup de{' '}
                        <span className="color-turquoise weight-bold">React</span> et de temps réel pilotant des
                        interfaces procédurales.
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
                                </span>{' '}
                                (React !)
                            </li>
                            <li>
                                je <span className="color-red weight-bold">brainstorm</span> avec vous pour faire
                                émerger vos idées en fonctions opérables
                            </li>
                            <li>...et bien plus encore 🚀</li>
                        </ul>
                    </p>
                </>
            }
            bottom={
                <div className="grid-background">
                    <Image src={'/jh_portrait.png'} width={'460px'} height={'415px'} />

                    <div className="grid">
                        {technos.map((techno, index) => (
                            <div key={index} className="grid-item">
                                <Image
                                    src={`/technos/${techno}.png`}
                                    width={'75px'}
                                    height={techno === 'nextjs' ? '45px' : '75px'}
                                />
                            </div>
                        ))}
                    </div>
                </div>
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

export default Home;

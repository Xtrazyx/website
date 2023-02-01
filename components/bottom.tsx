import { FunctionComponent } from 'react';
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

const Bottom: FunctionComponent = () => {
    return (
        <div className="grid-background">
            <div className="bottom-content">
                <div className="grid">
                    {technos.map((techno, index) => (
                        <div key={index} className="grid-item">
                            <Image src={`/technos/${techno}.png`} width={'75px'} height={'75px'} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Bottom;

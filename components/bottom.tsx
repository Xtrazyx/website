import { FunctionComponent } from 'react';
import Image from 'next/image';

const technos = [
    { name: 'js'},
    { name: 'ts'},
    { name: 'react'},
    { name: 'nextjs'},
    { name: 'nodejs'},
    { name: 'strapi', ext: 'svg'},
    { name: 'mobx'},
    { name: 'html'},
    { name: 'webpack'},
    { name: 'babel'},
    { name: 'docker'},
    { name: 'mysql'},
    { name: 'mongodb'},
    { name: 'mui'},
    { name: 'css'},
    { name: 'yarn'},
    { name: 'gitlab'},
    { name: 'git'},
    { name: 'jamstack'},
    { name: 'figma'},
    { name: 'illustrator'},
    { name: 'photoshop'},
];

const Bottom: FunctionComponent = () => {
    return (
        <div className="grid-background">
            <div className="bottom-content">
                <div className="grid">
                    {technos.map((techno, index) => (
                        <div key={index} className="grid-item">
                            <Image src={`/technos/${techno.name}.${techno.ext || 'png'}`} width={75} height={75} alt={`logo of ${techno}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Bottom;

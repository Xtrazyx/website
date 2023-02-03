import { FunctionComponent } from 'react';
import Image from 'next/image';

const Avatar: FunctionComponent = () => {
    return (
        <div
            style={{
                borderRadius: '50%',
                border: '3px solid var(--font-blue)',
                width: '200px',
                height: '200px',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <Image
                style={{ transform: 'translate(-32px, 12px)' }}
                alt={'Portrait Julien Habert'}
                src={'/jh_portrait.png'}
                width={230}
                height={207}
            />
        </div>
    );
};

export default Avatar;

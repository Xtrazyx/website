import { FunctionComponent, ReactElement } from 'react';

export type CardProps = {
    header?: ReactElement;
    content: ReactElement;
    direction?: 'horizontal' | 'vertical';
};

const Card: FunctionComponent<CardProps> = (props) => {
    const { header, content, direction = 'horizontal' } = props;

    return (
        <div className={`card flex-${direction} flex-align-center`}>
            {header && (
                <div className={`card-header border-${direction === 'horizontal' ? 'right' : 'bottom'}`}>{header}</div>
            )}
            <div className="card-content margin-left">{content}</div>
        </div>
    );
};

export default Card;

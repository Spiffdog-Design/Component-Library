import * as classnames from 'classnames';
import * as React from 'react';

const styles = require('./styles.scss');

export interface Props {
    children?: any;
    headerImg?: string;
    title?: string;
}

const Card: React.StatelessComponent<Props> = (props) => {
    const { children, headerImg, title } = props,
        css = classnames(
            styles['card'],
            styles['card-container']
        );

    return (
        <div className={ css }>
            { (headerImg) && <img className={ styles['card__profile-img'] } src={ headerImg } /> }
            { (title) && <p className={ styles['card__profile-title'] }>{ title }</p> }
            { children }
        </div>
    );
};

Card.displayName = 'Card';

export default Card;

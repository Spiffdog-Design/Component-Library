import * as classnames from 'classnames';
import * as React from 'react';

const styles = require('./styles.scss');

export enum ButtonStyles {
    Primary,
    Secondary
}

export enum ButtonTypes {
    Button,
    Submit
}

export interface Props {
    buttonStyle?: ButtonStyles;
    buttonType?: ButtonTypes;
    className?: string;
    title?: string;
    onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
}

const Button: React.StatelessComponent<Props> = (props: Props) => {
    const { buttonStyle, className, buttonType, title, onClick } = props,
        cssClass = classnames(
            styles['btn'],
            styles['btn-lg'],
            styles['btn-block'],
            className,
            (buttonStyle === ButtonStyles.Primary) ? styles['primary'] : '',
            (buttonStyle === ButtonStyles.Secondary) ? styles['secondary'] : ''
        );

    const type = (buttonType === ButtonTypes.Submit) ? 'submit' : 'button';

    return (
        (buttonType === ButtonTypes.Submit)
            ? <input className={ cssClass } type={ type } value={ title } onClick={ onClick } />
            : <button className={ cssClass } onClick={ onClick }>{ title }</button>
    );
};

Button.displayName = 'Button';

export default Button;

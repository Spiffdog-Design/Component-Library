import * as classNames from 'classnames';
import * as React from 'react';

const styles = require('./styles.scss');

export interface Props {
    children?: any;
    autoFocus?: boolean;
    name?: string;
    placeholder?: string;
    required?: boolean;
    type?: string;
    value?: string;
    isValid?: boolean;
    validate?: () => boolean;
    onBlur?: (event: React.FormEvent<HTMLInputElement>, state: any) => void;
}

export interface State {
    value?: string;
    isValid?: boolean;
}

class TextInput extends React.PureComponent<Props, State> {
    public static displayName = 'TextInput';

    constructor(props: Props) {
        super(props);
        this.state = {
            isValid: props.isValid || false,
            value: props.value || ''
        };
    }

    public handleBlur = (event: React.FormEvent<HTMLInputElement>) => {
        if (this.props.onBlur) {
            this.props.onBlur(event, this.state);
        }
    }

    public handleChange = (event: React.FormEvent<HTMLInputElement>) => {
        const validate = (this.props && this.props.validate && this.props.validate()) || false;

        this.setState({
            isValid: validate,
            value: event.currentTarget.value
        });
    }

    public render() {
        const { autoFocus, name, placeholder, required, type } = this.props,
            cssClass = classNames(
                styles['form-control'], {
                    error: !this.state.isValid
                }
            );

        return (
            <input
                autoFocus={ autoFocus }
                className={ cssClass }
                name={ name }
                placeholder={ placeholder }
                required={ required }
                type={ type }
                value={ this.state.value }
                onBlur={ this.handleBlur }
                onChange={ this.handleChange } />
        );
    }
}

export default TextInput;

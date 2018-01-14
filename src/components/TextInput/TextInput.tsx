import * as classNames from 'classnames';
import * as React from 'react';

const styles = require('./styles.scss');

export interface Props {
    children?: any;
    autoFocus?: boolean;
    name?: string;
    pattern?: string;
    placeholder?: string;
    required?: boolean;
    type?: string;
    value?: string;
    isValid?: boolean;
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
            isValid: props.isValid || true,
            value: props.value || ''
        };
    }

    public handleBlur = (event: React.FormEvent<HTMLInputElement>) => {
        if (this.props.onBlur) {
            this.props.onBlur(event, this.state);
        }
    }

    public handleChange = (event: React.FormEvent<HTMLInputElement>) => {
        this.setState({
            isValid: event.currentTarget.validity.valid,
            value: event.currentTarget.value
        });
    }

    public render() {
        const { autoFocus, name, pattern, placeholder, required, type } = this.props,
            cssClass = classNames(
                styles['text-input'],
                (!this.state.isValid) ? styles['error'] : ''
            );
        return (
            <input
                autoFocus={ autoFocus }
                className={ cssClass }
                name={ name }
                placeholder={ placeholder }
                required={ required }
                pattern={ pattern }
                type={ type }
                value={ this.state.value }
                onBlur={ this.handleBlur }
                onChange={ this.handleChange } />
        );
    }
}

export default TextInput;

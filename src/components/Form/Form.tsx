import * as classnames from 'classnames';
import * as React from 'react';

const styles = require('./styles.scss');

export interface Props {
    children?: React.ReactElement<any> | string | number;
    className?: string;
    value?: string;

    onChange?: (event: React.FormEvent<HTMLFormElement>, state: State) => void;
    onSubmit?: (event: React.FormEvent<HTMLFormElement>, state: State) => void;
}

export interface State {
    fields?: any;
    isFormDirty?: boolean;
    isFormValid?: boolean;
}

class Form extends React.Component<Props, State> {
    public static displayName = 'Form';

    constructor(props: Props) {
        super(props);

        const state: State = {
            fields: {}
        };

        React.Children.forEach(props.children, (child: React.ReactElement<any>) => {
            if (child.props.name) {
                state.fields[child.props.name] = {
                    errorMessage: child.props.errorMessage,
                    initialValue: child.props.value || '',
                    isValid: true,
                    value: child.props.value || ''
                };
            }
        });
        state.isFormDirty = false;
        state.isFormValid = true;
        this.state = state;
    }

    public isFormDirty(state: State) {
        return Object.keys(state.fields).reduce((isDirty, key) => {
            const item = state.fields[key];

            return isDirty || item.value !== item.initialValue;
        }, false);
    }

    public isFormValid(state: State) {
        return Object.keys(state.fields).reduce((isValid, key) => {
            const item = state.fields[key];
            return isValid && (item.isValid);
        }, true);
    }

    public handleSubmit(event: React.MouseEvent<HTMLFormElement>) {
        const state = { ...this.state },
            props = this.props;

        state.isFormDirty = this.isFormDirty(state);
        state.isFormValid = this.isFormValid(state);

        if (props.onSubmit) {
            props.onSubmit(event, state);
        }
        this.setState(state);
    }

    public handleBlur(event: React.MouseEvent<HTMLFormElement>) {
        const state = { ...this.state },
            field = event.currentTarget;

        state.fields[field.name].value = field.value;
        state.fields[field.name].isValid = field.checkValidity();

        state.isFormDirty = this.isFormDirty(state);
        state.isFormValid = this.isFormValid(state);

        if (this.props.onChange) {
            this.props.onChange(event, state);
        }

        this.setState(state);
    }

    public render() {
        const { children, className, value } = this.props;
        const cssClass = classnames(
            styles['form'],
            className
        );

        return (
            <form className={ cssClass } onSubmit={ this.handleSubmit } noValidate={ true }>
                {
                    React.Children.map(children, (child: React.ReactElement<any>) => {
                    return (!child.props.name)
                        ? child
                        : React.cloneElement(child, {
                            errorMsg: child.props.errorMessage,
                            name: child.props.name,
                            onBlur: this.handleBlur,
                            value: (value) ? value[child.props.name] : ''
                        });
                    })
                }
            </form>
        );
    }
}

export default Form;

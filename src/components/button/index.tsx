import React from 'react';
import style from './button.module.scss'

interface Props {
    children: React.ReactNode,
    type?: "button" | "submit" | "reset" | undefined
}
class Botao extends React.Component<Props>{
    render() {
        const { type = "button" } = this.props;
        return (
            <button type={type} className={style.botao}>
                {this.props.children}
            </button>
        )
    }
}

export default Botao;
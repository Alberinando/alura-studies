import style from './lista.module.scss';
import Item from "./item";
import { ITarefa } from '../../types/tarefa';

function Lista({tarefa}:{tarefa: ITarefa[]}) {
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudo do Dia </h2>
            <ul>
                {tarefa.map((item, index) => (
                    <Item
                    key={index}
                        {...item}
                    />
                    ))}
            </ul>
        </aside>
    )
}

export default Lista;
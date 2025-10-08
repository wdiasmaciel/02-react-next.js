interface TarefaProps {
    texto: string
}

export default function Tarefa({ texto }: TarefaProps) {
    return (
        <div className="p-2 border-b">
            <span>{texto}</span>
        </div>
    )
}

import Tarefa from '@/app/components/Tarefa'

interface ListaDeTarefasProps {
    tarefas: string[]
}

export default function ListaDeTarefas({ tarefas }: ListaDeTarefasProps) {
    return (
        <div className="mt-4">
            {tarefas.map((tarefa, i) =>
                <Tarefa key={i} texto={tarefa} />
            )}
        </div>
    )
}
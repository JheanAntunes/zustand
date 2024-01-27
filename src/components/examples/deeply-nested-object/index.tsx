'use client'

import { Checkbox } from '@/components/ui/checkbox'
import { useTodoStore } from '@/hooks/useDeeplyNestedObject'

const DeeplyNestedObject = () => {
  const todoStore = useTodoStore((state) => state.todos)
  const toggleTodo = useTodoStore((state) => state.toggleTodo)
  const todosStore = Object.values(todoStore)
  return (
    <div>
      <ul className="space-y-2">
        {todosStore.map((todo) => (
          <li key={todo.id} className="flex gap-1">
            <Checkbox
              checked={todo.done}
              onClick={() => {
                console.log('chamando')
                toggleTodo(todo.id)
              }}
            />
            <span>{todo.done ? todo.title : ''}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DeeplyNestedObject

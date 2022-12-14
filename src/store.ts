// import create from "zustand";
// import { devtools, persist } from "zustand/middleware";

// const useTodoStore = create<TodoListState>()(
//     devtools(
//         persist(
//             set => ({
//                 todoList: todoItems,
// addTodo: todo =>
//     set(state => ({ todoList: [...state.todoList, todo] })),
//                 removeTodo: todo =>
//                     set(state => ({
//                         todoList: state.todoList.filter(t => t.id !== todo.id),
//                     })),
//                 // toggleTodoStatus: todo =>
//                 //     set(state => ({
//                 //         todoList: state.todoList.map(t => {
//                 //             if (t.id === todo.id) {
//                 //                 return {
//                 //                     ...t,
//                 //                     status:
//                 //                         t.status === "Completed"
//                 //                             ? "In Progress"
//                 //                             : "Completed",
//                 //                 };
//                 //             }
//                 //             return t;
//                 //         }),
//                 //     })),
//             }),
//             {
//                 name: "todo-storage",
//             },
//         ),
//     ),
// );

// export default useTodoStore;

import create from "zustand";
import { devtools, persist } from "zustand/middleware";

const todoItems: Todo[] = [
    { todo: "Learn React", id: 1, status: "Completed" },
    { todo: "Learn TypeScript", id: 2, status: "Completed" },
    { todo: "Learn Zustand", id: 3, status: "In Progress" },
];

type Todo = {
    todo: string;
    id: number;
    status: "Completed" | "In Progress";
};

type TodoListState = {
    todoList: Todo[];
    addTodo: (todo: Todo) => void;
    // removeTodo: (todo: Todo) => void;
    // toggleTodoStatus: (todo: Todo) => void;
};

const useTodoStore = create<TodoListState>()(
    devtools(
        persist(set => ({
            todoList: todoItems,
            addTodo: todo =>
                set(state => ({ todoList: [todo, ...state.todoList] })),
        })),
    ),
);

// const useTodoStore = create<TodoListState>()(set => ({
//     todoList: todoItems,
// }));

export default useTodoStore;

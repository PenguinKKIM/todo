import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

interface Category {
  id: string;
  name: string;
}

interface Todo {
  id: string;
  text: string;
  categoryId: string;
  done: boolean;
  createdAt: number;
}

const categoriesAtom = atomWithStorage<Category[]>("categories", []);
const todoAtom = atomWithStorage<Todo[]>("todoList", []);

const selectedCategoryIdAtom = atom<string | null>(null);

const addCategoryAtom = atom(null, (get, set, name: string) => {
  const id = crypto.randomUUID?.() ?? String(Date.now());
  const next = [...get(categoriesAtom), { id, name }];
  set(categoriesAtom, next);
  set(selectedCategoryIdAtom, id);
});

const addTodoAtom = atom(null, (get, set, params: { text: string; categoryId: string }) => {
  const id = crypto.randomUUID?.() ?? String(Date.now());
  const next = [...get(todoAtom), { id, text: params.text, categoryId: params.categoryId, done: false, createdAt: Date.now() }];
  set(todoAtom, next);
});

const removeTodoAtom = atom(null, (get, set, todoId: string) => {
  set(
    todoAtom,
    get(todoAtom).filter((todo) => todo.id !== todoId)
  );
});

export { categoriesAtom, todoAtom, selectedCategoryIdAtom, addCategoryAtom, addTodoAtom, removeTodoAtom };

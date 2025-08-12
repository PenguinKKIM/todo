import { atomWithStorage } from "jotai/utils";

const TodoLocalStorage = atomWithStorage<string[]>("todoList", [])

export { TodoLocalStorage };
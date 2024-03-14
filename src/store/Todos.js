import { defineStore } from "pinia";
import { v4 as uuidv4 } from "uuid";
import useCollectionsStore from "./Collections";
import { save } from "../composables/localstorage";

const useTodosStore = defineStore("TodosStore", () => {
  const collectionStore = useCollectionsStore();

  function __findCollectionById(id) {
    const collections = collectionStore.getCollections;
    const foundCollection = collections.find((col) => col.id === id);
    return foundCollection;
  }

  function addEmpty(collectionId) {
    const foundCollection = __findCollectionById(collectionId);
    foundCollection.todos.push({ id: uuidv4() });
  }

  function editTodo(collectionId, { id, title, description }) {
    const foundCollection = __findCollectionById(collectionId);
    const foundTodo = foundCollection.todos.find((todo) => todo.id === id);
    foundTodo.title = title;
    foundTodo.description = description;
    save("collections", collectionStore.getCollections);
  }

  function deleteTodo(collectionId, todoId) {
    const foundCollection = __findCollectionById(collectionId);
    const todoIndex = foundCollection.todos.findIndex(
      (todo) => (todo.id = todoId)
    );

    foundCollection.todos.splice(todoIndex, 1);
    save("collections", collectionStore.getCollections);
  }
  return { addEmpty, editTodo, deleteTodo };
});

export default useTodosStore;

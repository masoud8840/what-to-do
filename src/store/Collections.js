import { defineStore } from "pinia";
import { save, load } from "../composables/localstorage";
import { v4 as uuidv4 } from "uuid";

const collectionsStore = {
  state: () => ({
    collections: [],
  }),
  getters: {
    getCollections(state) {
      return state.collections;
    },
    getEmpties(state) {
      const emptiesIndex = [];
      for (let col of state.collections) {
        if (col.title === undefined && col.description === undefined) {
          emptiesIndex.push(col.id);
        }
      }

      return emptiesIndex;
    },
  },
  actions: {
    __saveToLocal(key) {
      save(key, this.collections);
    },

    loadSavedItems() {
      const saved = load("collections");
      this.collections = [...saved];
    },

    addEmpty() {
      this.collections.push({ id: uuidv4(), todos: [] });
    },

    editCollection(id, { title, description, todo }) {
      const editedCollection = this.collections.find((col) => col.id === id);
      editedCollection.title = title;
      editedCollection.description = description;
      editedCollection.todos = [];

      this.__saveToLocal("collections");
    },

    deleteCollection(id) {
      const deletedCollection = this.collections.findIndex(
        (col) => col.id === id
      );
      this.collections.splice(deletedCollection, 1);

      this.__saveToLocal("collections");
    },
  },
};

const useCollectionsStore = defineStore("CollectionsStore", collectionsStore);

export default useCollectionsStore;

import localforage from "localforage";

const initializeDataDB = () => {
  localforage.clear();
};

export { initializeDataDB };

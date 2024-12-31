import localforage from "localforage";
import { IGeneralInformationEntry } from "@pages/privileges/outlets/positions/components/GeneralInformationForm/types";

function buildData<T>(data: T[]) {
  const dataMock = data.map((optionData) => {
    const newObj = Object.assign({ id: crypto.randomUUID() }, optionData);
    return newObj;
  });

  return dataMock;
}

async function intializedData<T>(option: string, data: T[]) {
  try {
    const dataMock = buildData(data);
    await localforage.setItem(option, dataMock);
  } catch (error) {
    return error;
  }
}

async function getAll(option: string) {
  await fakeNetwork();
  try {
    const optionsData = await localforage.getItem(option);
    if (!optionsData || !Array.isArray(optionsData)) {
      console.warn(`Data for ${option} is missing or not an array.`);
      return [];
    }
    return optionsData;
  } catch (error) {
    console.error(`Error fetching data for ${option}:`, error);
    return [];
  }
}

interface functionById {
  key: string;
  nameDB: string;
  identifier: number | string;
  property?: string;
  editData?:
    | IGeneralInformationEntry
    | { [key: string]: string }[]
    | { [key: string]: string };
}

async function getById(props: functionById) {
  const { key, nameDB, identifier } = props;
  try {
    const optionsData = await getAll(nameDB);

    if (Array.isArray(optionsData)) {
      const foundData = optionsData.find((data) => data[key] === identifier);
      if (!foundData) throw new Error(`No find identifier ${identifier}`);
      return foundData;
    }
    throw new Error("data structure not valid, must be an object list");
  } catch (error) {
    return error;
  }
}

async function deleteItemData(props: functionById) {
  const { key, nameDB, identifier } = props;
  try {
    const data = await getAll(nameDB);
    if (Array.isArray(data)) {
      const indexData = data.findIndex((item) => item[key] === identifier);
      data.splice(indexData, 1);
      await localforage.setItem(nameDB, data);
      return data;
    }
    throw new Error("data structure not valid, must be an object list");
  } catch (error) {
    return error;
  }
}

async function updateItemData(props: functionById) {
  const { key, nameDB, identifier, editData, property } = props;

  try {
    const data = await getAll(nameDB);
    if (Array.isArray(data)) {
      const indexData = data.findIndex((item) => item[key] === identifier);

      const dataItem = data.find((item) => item[key] === identifier && item);

      data[indexData] = property
        ? { ...dataItem, [property]: editData }
        : editData;

      await localforage.setItem(nameDB, data);
    }
    throw new Error("data structure not valid, must be an object list");
  } catch (error) {
    return error;
  }
}

async function fakeNetwork() {
  return new Promise((res) => {
    setTimeout(res, Math.random() * 1000);
  });
}
export { intializedData, getById, deleteItemData, updateItemData, fakeNetwork };
export type { functionById };

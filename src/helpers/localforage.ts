import localForage from 'localforage';

// Error: 'localStorageKyes' is already declared in the upper scope on line 6 column
// eslint-disable-next-line
export enum lsKyes {
  LAST_REGION = 'LAST_REGION',
}

export const getLocalStorageItem = (key: string, responseHandler: Function) => {
  localForage.getItem(key).then((data) => {
    responseHandler(data);
  });
};

export const initLocalStorageItem = (key: string, initValue: any) => {
  localForage.getItem(key).then((locaStorageItem) => {
    if (locaStorageItem === null) {
      localForage.setItem(key, initValue);
    }
  });
};

export const appendLocalStorageItem = (
  key: string,
  payload: any,
  maxItemsAllowed: number = 5
) => {
  localForage.getItem(key).then((locaStorageItem) => {
    if (locaStorageItem instanceof Array) {
      if (!locaStorageItem.some((item) => item.id === payload.id)) {
        if (locaStorageItem.length < maxItemsAllowed) {
          localForage.setItem(key, locaStorageItem.concat(payload));
        } else {
          localForage.setItem(key, [
            ...locaStorageItem.slice(1, locaStorageItem.length),
            payload,
          ]);
        }
      }
    }
  });
};

class LocalStorage {
  private static _callLocalStorage(functionName: string, ...args: string[]) {
    try{
      return localStorage[functionName](...args);
    } catch (er) {
      return undefined;
    }
  }
  static getItem(key: string) {
    return LocalStorage._callLocalStorage("getItem", key);
  }
  static setItem(key: string, value: any) {
    return LocalStorage._callLocalStorage("setItem", key, JSON.stringify(value));
  }
  static removeItem(key: string) {
    return LocalStorage._callLocalStorage("removeItem", key);
  }
  static clear() {
    return LocalStorage._callLocalStorage("clear");
  }
  static key() {
    return LocalStorage._callLocalStorage("key");
  }
}

export default LocalStorage;
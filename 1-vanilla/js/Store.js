const tag = "[store]";

export default class Store {
  constructor(storage) {
    console.log('store');
    if (!storage) throw "no storage";

    this.storage = storage;
  }
}

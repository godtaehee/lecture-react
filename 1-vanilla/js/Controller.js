const tag = "[Controller]";

export default class Controller {
  constructor(store, {searchFormView}) {
    this.store = store;

    this.searchFormView = searchFormView;

    this.subscribeViewEvents()
  }

  subscribeViewEvents() {
    this.searchFormView
      .on('@submit', event => this.search(event.detail.value))
      .on('@reset', event => this.reset());
  }

  search(event) {
    console.log(event);
  }

  reset() {
    console.log('reset');
  }
}

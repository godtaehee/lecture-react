import View from "./View.js";
import {qs, qsAll} from "../helpers.js";

export const TabType = {
  KEYWORD: 'KEYWORD',
  HISTORY: 'HISTORY'
}

const TabLabel = {
  [TabType.KEYWORD]: '추천 검색어',
  [TabType.HISTORY]: '최근 검색어'
}

export default class TabView extends View {
  constructor() {
    super(qs('#tab-view'));
    this.template = new Template();
  }

  show(selected) {
    this.element.innerHTML = this.template.getTabList();
    console.log(qsAll('li', this.element));
    qsAll('li', this.element).forEach(v =>
      v.className = v.dataset.tab === selected ? 'active' : ''
    )
    super.show();
  }
}

class Template {
  _getTab({tabType, tabLabel}) {
    return `
      <li data-tab="${tabType}">
        ${tabLabel}
      </li>
    `
  }
  getTabList() {
    return `
      <ul class="tabs">
        ${Object.values(TabType)
      .map(tabType => ({ tabType, tabLabel: TabLabel[tabType]}))
      .map(this._getTab)
      .join("")}
      </ul>
    `;
  }
}

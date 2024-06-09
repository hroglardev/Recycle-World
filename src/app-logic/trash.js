import { TrashItem } from './trashItem';
import { DATA } from '../../src/index';

export class Trash {
  constructor() {
    this.list = [];
  }

  buildTrash() {
    let usedTrash = [];
    for (let i = 0; i < 10; i++) {
      let index = Math.floor(Math.random() * 15);
      while (usedTrash.includes(index)) {
        index = Math.floor(Math.random() * 15);
      }
      usedTrash.push(index);
      this.list.push(
        new TrashItem(
          DATA.trash[index].name,
          DATA.trash[index].targetBin,
          DATA.trash[index].src,
          DATA.trash[index].alt
        )
      );
    }
  }

  cleanTrash() {
    this.list = [];
  }

  getList() {
    return this.list;
  }

  removeTrashItem(name) {
    this.list = this.list.filter((item) => item.name !== name);
  }
}

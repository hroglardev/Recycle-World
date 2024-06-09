import { TrashItem } from './trashItem';
import { trash } from '../../data.json';

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
          trash[index].name,
          trash[index].targetBin,
          trash[index].src,
          trash[index].alt
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

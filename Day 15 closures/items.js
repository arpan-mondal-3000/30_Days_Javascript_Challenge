export function createItemBox() {
  let items = {};
  return {
    add: (key, value) => {
      items[key] = value;
    },
    remove: (key) => {
      delete items[key];
    },
    listItems: () => {
      for (let item in items) console.log(item, items[item]);
    },
  };
}

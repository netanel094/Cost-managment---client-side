// Netanel Yomtovian 207498700
// Itay Yaakov 206777989
// Kobi Nissim 313202996

class LocalStorageWrapper {
  constructor() {
    this.storage = window.localStorage;
  }

  async addItem(Name, Sum, Category, date, i) {
    try {
      const data = { Name: Name, Sum: Sum, Category: Category, Date_: date };

      await this.storage.setItem("item" + i, JSON.stringify(data));
    } catch (error) {
      console.error("failed to add item" + error);
    }
  }
}

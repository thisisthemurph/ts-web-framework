import { Collection } from "../models/Collection";

export abstract class CollectionView<T, K> {
  constructor(public parent: Element, public collection: Collection<T, K>) {}

  abstract renderItem(model: T, itemPatent: Element): void;

  render(): void {
    this.parent.innerHTML = "";

    const templateElement = document.createElement("template");

    for (let modelKey in this.collection.models) {
      const itemPatent = document.createElement("div");
      const model = this.collection.models[modelKey];
      this.renderItem(model, itemPatent);
      templateElement.content.append(itemPatent);
    }

    this.parent.append(templateElement.content);
  }
}

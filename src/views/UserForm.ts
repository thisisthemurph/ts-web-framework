import { User, UserProps } from "../models/User";
import { View } from "./View";

export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      "click:.save-model": this.handleSaveModel,
      "click:.set-name": this.handleSetName,
    };
  }

  handleSaveModel = (): void => {
    this.model.save();
  };

  handleSetName = (): void => {
    const input = this.parent.querySelector("input");
    if (input) {
      const name = input.value;
      this.model.set({ name });
    }
  };

  template(): string {
    return `
      <div>
        <input type="text" id="name" placeholder="${this.model.get("name")}" />
        <button class="set-name">Change Name</button>
        <br />
        <button class="save-model">Save</button>
      </div>
    `;
  }
}

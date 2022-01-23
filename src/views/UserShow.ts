import { EventMap, View } from "./View";
import { User, UserProps } from "../models/User";

export class UserShow extends View<User, UserProps> {
  template(): string {
    return `
        <div id="user-show">
          <h1>User Detail</h1>
          <div>
            <p>Name: ${this.model.get("name")}</p>
            <p>Age: ${this.model.get("age")}</p>
          </div>
        </div>
      `;
  }
}

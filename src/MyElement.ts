import { LitElement, html, customElement, property } from "lit-element";

@customElement("my-element")
export class MyElement extends LitElement {
  @property()
  foo = "world";

  render() {
    return html`
      <div>hello ${this.foo}</div>
    `;
  }
}


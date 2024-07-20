import { LitElement, html, css } from 'lit';

export const copyIcon = html`<svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="currentColor"><path d="M0 0h24v24H0z" fill="none"/><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>`;

export const checkIcon = html`<svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="#00FF00"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>`

export class CopyCodeButton extends LitElement {
  static styles = [
    css`
      :host {
        display: inline-flex;
      }
      button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: fit-content;
        margin: 0;
        padding: 0.5rem;
        background: #e2e8f022;
        border: none;
        border-radius: 0.25rem;
        color: #fff;
        cursor: pointer;
        font-weight: 600;
      }
    `
  ];

  constructor() {
    super();
    this._isCopied = false;
  }

  static get properties(){
    return {
      _isCopied: { type: Boolean }
    }
  }

  copyCode() {
    this._isCopied = true;
    const pre = this.parentElement;
    let code = pre.querySelector('code');
    const range = document.createRange();
    range.selectNode(code);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    // check if the browser supports clipboard API
    if (!navigator.clipboard) {
      // if not use the old commandExec() way
      document.execCommand('copy');
    } else {
      try {
        navigator.clipboard.writeText(range.toString());
      } catch (error) {
        console.error(error);
      }
    }
    window.getSelection().removeAllRanges();
    setTimeout(() => {
      this._isCopied = false;
    }, 1000);
  }
  render() {
    return html`
    <button @click=${this.copyCode}>${this._isCopied ? checkIcon : copyIcon}</button>
    `;
  }
}
customElements.define('copy-code-button', CopyCodeButton);

class HelloWorld extends HTMLElement{

    constructor(){
        super();
    }
    connectedCallback(){
        this.innerHTML = `<p>Hello World<\p>`;
    }
}
customElements.define("hello-world-web-hjfh-sfbjg",HelloWorld);

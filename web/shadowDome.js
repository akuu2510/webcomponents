class shadowDome extends HTMLElement{

    constructor(){
        super();
        // create a element
    const tempelement = document.createElement('template');
    tempelement.innerHTML =`
    <style>
    button{
        color: blue;
    }
    :host{
        margin-bottom: 70rem;
    padding : 1rem;
    margin:30rem
    }
    </style>
    <div>
    <button> Click me </button>
    <button> Click me </button>
    </div>
    `
    //shadow root kiya
    const shadowRoot = this.attachShadow({mode: 'open'})
    
    //clone the template
    const clonetemplate = document.importNode(tempelement.content,true);
    //append it in the shadowroot
    this.shadowRoot.appendChild(clonetemplate);
        
    }

    
}
customElements.define("shadow-dom",shadowDome);



// create kiya element
//shadow root kiya 
//template ko clone kiya
//appen kiya shadowroot mai
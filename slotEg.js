class slotEg extends HTMLElement{

    constructor(){
        super();
    const template = document.createElement('template');
    template.innerHTML = `
    <style>
    slot{
        color: red;
    }
    ::slotted(#foot1){
        color : blue;
    }
    </style>
    <div>
    <header><slot name ="header">Fallback content for header</slot>
    <main><slot> Fallback content for main </slot></main>
    <footer><slot name = "footer"> Fallback content for footer</slot>
    </div>`
    const shadowRoot = this.attachShadow({mode: 'open'})
    //clone the template
    const clonetemplate = document.importNode(template.content,true);
    //append it in the shadowroot
    this.shadowRoot.appendChild(clonetemplate);
        
    }
    
}
customElements.define("slot-eg",slotEg);

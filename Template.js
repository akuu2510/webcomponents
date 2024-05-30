class Template extends HTMLElement{

    constructor(){
        super();
    
   
   //get the template
    const tempi = document.querySelector('#temp1');
    //clone the template
    const node = document.importNode(tempi.content,true);
    //append in the dom
    document.body.appendChild(node);

    const tempu = document.querySelector('#temp2');
    const node1 = document.importNode(tempu.content,true);
    document.body.appendChild(node1);


    //  now lets create a template inside thos
    // create
    const tempelement = document.createElement('template');
    tempelement.innerHTML =`
    <p>created a template </p>
    `
    //clone the template
    const clonenode = document.importNode(tempelement.content,true);
    //append in the dom
    document.body.appendChild(clonenode);
    }

}
customElements.define("temp-late",Template);

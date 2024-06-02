class ToDo extends HTMLElement{

    constructor(){
        super();
    
   const template = document.createElement('template')
   template.innerHTML =`
   <style> 
   #inputBox{
    margin: 1rem;
    color: red;
   }
   </style>
   <div>
   <input type ='text' id ="inputBox">
   <button id ="itemButton">Add Item </button>
   <ul id="itemList"></ul>
   </div>
      
   `
    
    const shadowRoot = this.attachShadow({mode: 'open'});
    const clonetemp = document.importNode(template.content,true)
    this.shadowRoot.appendChild(clonetemp)
    // access the elemets
    this.inputBox = this.shadowRoot.querySelector('#inputBox');
    this.itemButton = this.shadowRoot.querySelector('#itemButton');
    this.itemList = this.shadowRoot.querySelector('#itemList');

    //add event listen
    this.itemButton.addEventListener("click" , this.addItem.bind(this));
}
addItem(){
    //console.log('button clicked');
    const list= document.createElement('li');
    list.textContent = this.inputBox.value;
    this.itemList.appendChild(list);
    this.inputBox.value =' ';

}

}
customElements.define("to-do",ToDo);

class countElementLifecycle extends HTMLElement{
    // iski need tab h jab humko attributechangecallback() use karna h to change the properties
    // static get observedAttributes(){
    //     return['steps','initialvalue'];
    // }
//get set for attributes
    get initialvalue()
    {
        return this.getAttribute('initialvalue')
    }
    set initialvalue(value){
        if(value){
            this.setAttribute('initialvalue');
        } else{
            this.removeAttribute('initialvalue')
        }
    }
    get steps()
    {
        return this.getAttribute('steps')
    }
    set steps(value){
        if(value){
            this.setAttribute('steps');
        } else{
            this.removeAttribute('steps')
        }
    }
// define attributes
// countElement
// decrementmethod
// incrementmethod

    constructor(){
        super();
        
        console.log('constructor method');
        this._shadowRoot = this.attachShadow({mode: 'open'});
        this._shadowRoot.innerHTML = `
        <button  id ="decrement">-</button>
        <span id = "count"> 0 </span>
        <button  id ="increment">+</button>
        `

       
        // this.innerHTML = `
        // <button  id ="decrement">-</button>
        // <span id = "count"> 0 </span>
        // <button  id ="increment">+</button>
        // `
this.countElement = this._shadowRoot.querySelector('#count');
this.decrementmethod = this._shadowRoot.querySelector('#decrement');
this.incrementmethod = this._shadowRoot.querySelector('#increment');

// this.countElement = this.querySelector('#count');
// this.decrementmethod = this.querySelector('#decrement');
// this.incrementmethod = this.querySelector('#increment');

    }
    connectedCallback(){
        // console.log('connectedCallback method')
        this.count = this.initialvalue || 0;
        this.countElement.innerText = this.count;
       this.decrementmethod.addEventListener("click", this.decrementValue.bind(this));
        this.incrementmethod.addEventListener("click", this.incrementValue.bind(this));

    }
    
    // disconnectedCallback(){
    //     console.log('disconnectedCallback method')
    //     this.decrementmethod.removeEventListener("click", this.decrementValue.bind(this));
    //     this.incrementmethod.removeEventListener("click", this.incrementValue.bind(this));


    // }
    decrementValue(){
        this.count = this.count - this.steps;
        this.countElement.innerText = this.count;


    }
    incrementValue(){
        this.count = +this.count + +this.steps;
        this.countElement.innerText = this.count;


    }

}
customElements.define("count-element" ,countElementLifecycle);





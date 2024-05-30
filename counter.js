// <!-- Define the web component -->

class Counter extends HTMLElement {
  constructor() {
    super();
    // Create shadow DOM
    this.attachShadow({mode: 'open'});
    // Get the template content
    const template = document.getElementById('counter-template').content;
    // Clone the template and attach it to the shadow DOM
    this.shadowRoot.appendChild(template.cloneNode(true));
    
    // Get elements from shadow DOM
    this.countDisplay = this.shadowRoot.getElementById('count');
    this.increaseButton = this.shadowRoot.getElementById('increaseBtn');
    this.decreaseButton = this.shadowRoot.getElementById('decreaseBtn');
    
    // Set initial value and steps
    this.steps = this.getAttribute('steps') || 1;
    this.initialValue = parseInt(this.getAttribute('initial-value')) || 0;
    this.count = this.initialValue;
    this.countDisplay.textContent = this.count;

    // Add event listeners
    this.increaseButton.addEventListener('click', this.increase.bind(this));
    this.decreaseButton.addEventListener('click', this.decrease.bind(this));
  }

  // Increase count method
  increase() {
    this.count += parseInt(this.steps);
    this.countDisplay.textContent = this.count;
  }

  // Decrease count method
  decrease() {
    this.count -= parseInt(this.steps);
    this.countDisplay.textContent = this.count;
  }

  // Define observed attributes
  static get observedAttributes() {
    return ['steps', 'initial-value'];
  }

  // Handle attribute changes
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'steps') {
      this.steps = parseInt(newValue);
    } else if (name === 'initial-value') {
      this.initialValue = parseInt(newValue);
      this.count = this.initialValue;
      this.countDisplay.textContent = this.count;
    }
  }
}

customElements.define('counter-element', Counter);


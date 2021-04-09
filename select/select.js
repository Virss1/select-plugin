const getTemplate = (data = [], placeholder) => {
  const text = placeholder ?? 'Placeholder по умолчанию';

  const items = data.map(item => {
    return `
      <li class="select__item" data-type="item" data-id="${item.id}">${item.value}</li>
    `;
  });
  
  return `
    <div class="select__input" data-type="input">
      <span data-type="value">${text}</span>
      <i class="fa fa-chevron-down" data-type="arrow"></i>
    </div>
    <div class="select__dropdown">
      <ul class="select__list">
        ${items.join('')}
      </ul>
    </div>
  `;
}

export class Select {
  constructor(selector, options) {
    this.$el = document.querySelector(selector);
  #render() {
    const {placeholder, data} = this.options;
    this.$el.classList.add('select');
    this.$el.innerHTML = getTemplate(data, placeholder);
  }

  #setup() {
    this.clickHandler = this.clickHandler.bind(this);
    this.$el.addEventListener('click', this.clickHandler);
    this.$arrow = this.$el.querySelector('[data-type="arrow"]');
    this.$value = this.$el.querySelector('[data-type="value"]');
  }
  }

  open() {
    this.$el.classList.add('open');
  }

  close() {
    this.$el.classList.remove('open');
  }
}
const controles = document.querySelector('#controles');
const btn = document.querySelector('.btn');
const cssText = document.querySelector('.css')

const handleStyle = {
  element: btn,
  texto(value) {
    this.element.innerText = value;
  },
  backgroundColor(value) {
    this.element.style.backgroundColor = value;
  },
  height(value) {
    this.element.style.height = value + 'px';
  },
  width(value) {
    this.element.style.width = value + 'px';
  },
  color(value) {
    this.element.style.color = value;
  },
  border(value) {
    this.element.style.border = value;
  },
  fontFamily(value) {
    this.element.style.fontFamily = value
  },
  fontSize(value) {
    this.element.style.fontSize = value + 'rem'
  },
  borderRadius(value) {
    this.element.style.borderRadius = value + 'px';
  }

}
function handleChange(event) {
  const nome = event.target.name;
  const valor = event.target.value

  handleStyle[nome](valor);
  savValues(nome, valor);
  showCss();
}

function savValues(nome, value) {
  localStorage[nome] = value
}

function setValues() {
  const properts = Object.keys(localStorage);
  properts.forEach(propertie => {
    handleStyle[propertie](localStorage[propertie])
    controles.elements[propertie].value = localStorage[propertie]
  })
  showCss()
}

setValues()

function showCss() {
  cssText.innerHTML = '<span>' + btn.style.cssText.split('; ').join(';</span><span>');
}

controles.addEventListener('change', handleChange)
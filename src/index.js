import _ from 'lodash';

function component(el) {
  const element = document.createElement(el);
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  return element;
}

document.body.appendChild(component('div'));

const sum = (a, b) => {
  return a + b;
};

console.log(sum(20, 30));

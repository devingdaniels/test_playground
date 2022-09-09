import './style.css';

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = 'Hello friend';

  return element;
}

function test() {
  console.log('test');
}

document.getElementById('anchor').append(component());
test();

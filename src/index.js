import _ from 'lodash'
import './style.css';
import Icon from './icon.png';
import Data from './data.xml';
import csvData from './sample.csv'
// import print from './print'
import { square } from './math'

function component() {
  var element = document.createElement('div');

  // // Lodash, currently included via a script, is required for this line to work

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  var myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);
  console.log("XML Data :");
  console.log(Data);
  console.log("CSV Data :");
  console.log(csvData);
  // print();
  console.log(square(5));
  var button = document.createElement('button');
  var br = document.createElement('br');
  button.innerHTML = 'Click me and look at the console!';
  element.appendChild(br);
  element.appendChild(button);
  button.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
    var print = module.default;

    print();
  });

  return element;
}

document.body.appendChild(component());
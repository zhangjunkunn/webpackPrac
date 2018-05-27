import _ from 'lodash';
import printMe from './print';

function component() {
    let element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack', '哈hi皇后'], ' ');
    let btn = document.createElement('buttom');
    btn.innerHTML = 'click me check console';
    btn.onclick = printMe;
    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());
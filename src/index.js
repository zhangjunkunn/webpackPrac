// import printMe from './print';
// import {cube} from './math';
import _ from 'lodash';

if(process.env.NODE_ENV !== 'production') {
    console.log('in development mode')
}

function component() {
    let element = document.createElement('div');

    element.innerHTML = `5 cubed is \n`;
    element.innerHTML += _.join(['test', 'from', 'index'], '');
    let btn = document.createElement('buttom');
    btn.innerHTML = 'click me check console';
    btn.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
        var printMe = module.default;

        printMe()
    })
    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());

if('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(registration => {
            console.log('service-worker registered', registration);
        }).catch(registrationError => {
            console.log('service-worker failed', registrationError);
        })
    })
}




// if(module.hot) {
//     module.hot.accept('./print.js', function() {
//         console.log('accept from print')
//         printMe()
//     })
// }
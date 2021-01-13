console.log('hello world!')

let count = 0;
const counter = document.getElementById('counter');

let increase = () => {
    count++;
    counter.innerText = count;
}

let decrease = () => {
    count--;
    counter.innerText = count;
}

let reset = () => {
    count = 0;
    counter.innerHTML = `<mark>${count}</mark>`
}

const selectTheme = (theme) => {
    document.getElementsByTagName('body')[0].className = theme;
    document.getElementsByTagName('main')[0].className = theme;

    const buttons = document.getElementsByTagName('button');
    for(i = 0; i < buttons.length; i++){
        buttons[i].className = theme
    }

}
import './style.css'


document.addEventListener('DOMContentLoaded', () => {
  const arr: number[] = [];
  
  document.getElementById('numberButton')?.addEventListener('click', () => {
    let li = document.createElement('li') as HTMLElement;
    let number = document.getElementById('inputnumber') as HTMLInputElement;

    arr.push(parseInt(number.value));
    console.log(arr);
    
    li.innerHTML = number.value;
    let ul = document.getElementById('list') as HTMLElement;
    ul.appendChild(li);
  })
});
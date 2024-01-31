import './style.css'


document.addEventListener('DOMContentLoaded', () => {
  const arr: number[] = [];
  
  document.getElementById('numberButton')?.addEventListener('click', () => {
    let li = document.createElement('li') as HTMLElement;
    let number = document.getElementById('inputnumber') as HTMLInputElement;

    //add to array
    arr.push(parseInt(number.value));
    console.log(arr);

    //smallest number 
    let min = Math.min(...arr);
    console.log(min);

    //add to list
    li.innerHTML = number.value;
    let ul = document.getElementById('list') as HTMLElement;
    ul.appendChild(li);
      
  })

  document.getElementById('minButton')?.addEventListener('click', () => {
    let p = document.getElementById('displaySmallest') as HTMLElement ;
    p.textContent = Math.min(...arr);
  });

  document.getElementById('maxButton')?.addEventListener('click', () => {
    let p = document.getElementById('displayBiggest') as HTMLElement ;
    p.textContent = Math.max(...arr);
  });

});




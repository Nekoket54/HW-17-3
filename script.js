//Творчі завдання
//№1
const link = document.querySelector('[href="/tutorial"]')
link.style.color = 'orange'
const link1 = document.querySelector('[href="local/path"]')
link1.style.color = 'orange'



//№2
const links = document.querySelectorAll('a[href]')
console.log(links);
links[0].style.color = 'red'
links[0].classList.add('cls')
links[5].style.color = 'red'
links[5].classList.add('cls')



//№3
const names = document.querySelector('h1')
names.classList.add('names')
names.textContent = 'Заголовок'
names.style.color = 'Violet'
names.style.fontSize = '50px'
names.style.textAlign = 'center'



//№4
names.classList.replace('names', 'heading')



//№5
const contains = document.querySelector('a[name="list"]')
console.log(contains.classList.contains('list'))
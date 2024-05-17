// Menu data structure
let menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];

const mainEl = document.getElementsByTagName('main');
console.log(mainEl[0])

mainEl[0].style.backgroundColor = 'var(--main-bg)';
mainEl[0].innerHTML = `<h1>DOM Manipulation</h1>`;
mainEl[0].classList.add(`flex-ctr`);

const topMenuEl = document.getElementById(`top-menu`);
console.log(topMenuEl)

topMenuEl.style.height = `100%`;

topMenuEl.style.backgroundColor =`var(--top-menu-bg)`;

topMenuEl.classList.add('flex-around');


menuLinks.forEach((link)=>{
    let newLink=document.createElement('a')

    newLink.setAttribute('href', link.href)

    newLink.textContent = link.text

    topMenuEl.appendChild(newLink)
})


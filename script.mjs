// Menu data structure
const menuLinks = [
  {text:'about', href:'/about'},
  {text:'catalog',href: '#',subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
      ],
  },
  {text:'orders',href: '#',subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
      ],
  },
  {text:'account',href: '#',subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
      ],
  },
];

const mainEl = document.getElementsByTagName('main')[0];
console.log(mainEl[0])

mainEl.style.backgroundColor = 'var(--main-bg)';
mainEl.innerHTML = `<h1>DOM Manipulation</h1>`;
mainEl.classList.add('flex-ctr');

const topMenuEl = document.getElementById('top-menu');

topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEl.classList.add('flex-around');

menuLinks.forEach((link) => {
  const newLink = document.createElement('a');
  newLink.setAttribute('href', link.href);
  newLink.textContent = link.text;
  topMenuEl.appendChild(newLink);
});

const subMenuEl = document.getElementById('sub-menu');
subMenuEl.style.height = '100%';
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
subMenuEl.classList.add('flex-around');
subMenuEl.style.position = 'absolute';
subMenuEl.style.top = '0';

// Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
const topMenuLinks = topMenuEl.querySelectorAll('a');

// Attach a delegated 'click' event listener to topMenuEl. Prevent default link behavior
topMenuEl.addEventListener('click', function (event) {
  event.preventDefault(); 

// Return immediately if the element clicked was not an <a> element
  if (!event.target.matches('a')) return;

// Remove the active class from all links
  topMenuLinks.forEach((link) => link.classList.remove('active'));

// Add or remove the active class to/from the clicked link
  const clickedLink = event.target;
  if (!clickedLink.classList.contains('active')) {
      clickedLink.classList.add('active');
  }

// Log the content of the <a> to verify the handler is working
  console.log(clickedLink.textContent);

// Handle submenu building based on clicked link. Clear submenu if clicked link has no sublinks
  const clickedLinkText = clickedLink.textContent.toLowerCase();
  const clickedMenuItem = menuLinks.find((link) => link.text === clickedLinkText);

  if (clickedMenuItem && clickedMenuItem.subLinks) {
      buildSubMenu(clickedMenuItem.subLinks);
  } else {
      clearSubMenu(); 
  }
});

// Clear the current contents of subMenuEl
function clearSubMenu() {
  subMenuEl.innerHTML = '';
}

// Helper function to build submenu based on clicked link. Clear current submenu contents.
function buildSubMenu(subLinks) {
  clearSubMenu(); 
  subLinks.forEach((link) => {
      const newSubLink = document.createElement('a');
      newSubLink.setAttribute('href', link.href);
      newSubLink.textContent = link.text;
      subMenuEl.appendChild(newSubLink);
  });
}


 // What does "clear the contents" mean in this case?
  // The submenu needs to be dynamic based on the clicked link. To facilitate that, we will create a helper function called buildSubmenu that does the following:
  
  // Clear the current contents of subMenuEl.
  
  // Jaki
  // Does that mean clear the classes and styling?
  
  // Dylan Comeau  
  // It means it submenu is currently populated with "all, top selling, search" and you click on a different main menu item. it clears that out and puts the new ones in its place
  
  // Dylan Comeau 
  // doesnt just shove them all together. Clear the contents of the submenu, so you can repopulate it with the new info
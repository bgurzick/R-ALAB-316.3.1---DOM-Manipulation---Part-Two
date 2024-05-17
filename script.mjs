// Menu data structure
const menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

const mainEl = document.getElementsByTagName('main');
console.log(mainEl[0])

mainEl[0].style.backgroundColor = 'var(--main-bg)';
mainEl[0].innerHTML = `<h1>DOM Manipulation</h1>`;
mainEl[0].classList.add(`flex-ctr`);

const topMenuEl = document.getElementById(`top-menu`);
console.log(topMenuEl)


//don't know what i'm doing here - PART 4
// Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
    // Attach a delegated 'click' event listener to topMenuEl.
        // The first line of code of the event listener function should call the event object's preventDefault() method.
        // The second line of code of the function should immediately return if the element clicked was not an <a> element.
    // Log the content of the <a> to verify the handler is working.
// Progress Check - Ensure that clicking ABOUT, CATALOG, etc. logs about, catalog, etc. when a link is clicked. Clicking anywhere other than on a link should do nothing.

// Now that we have references to each of these links, and a registered event listener, we will want to add a toggled "active" state to each menu item, showing whether or not it is currently selected:
      // The event listener should add the active class to the <a> element that was clicked, unless it was already active, in which case it should remove it.
      // The event listener should remove the active class from each other <a> element in topMenuLinks - whether the active class exists or not.
  // Hint: Removing a non-existent class from an element does not cause an error!
// Progress Check - Clicking any of the links should make that link active and clear the others. Clicking an active link should clear that link. Here is what it should look like so far, with "CATALOG" active:

//element.addEventListener(<event-name>, <callback>, <use-capture>);
topMenuEl.addEventListener('click', ){
  preventDefault();
});
// function handleClick() {
//   click.preventDefault()
//   document.body.classListpreventDefault()
// return;
// };

topMenuEl.style.height = `100%`;

topMenuEl.style.backgroundColor =`var(--top-menu-bg)`;

topMenuEl.classList.add('flex-around');


menuLinks.forEach((link)=>{
    let newLink=document.createElement('a')

    newLink.setAttribute('href', link.href)

    newLink.textContent = link.text

    topMenuEl.appendChild(newLink)
})

const subMenuEl = document.getElementById('sub-menu');
console.log(subMenuEl[0])

subMenuEl.style.height = '100%';

subMenuEl.style.backgroundColor = `var(--sub-menu-bg)`;

subMenuEl.classList.add('flex-around');

subMenuEl.style.position = 'absolute';

subMenuEl.style.top = '0';

const topMenuLinks = getElementsByTagName('<a>');
console.log(topMenuLinks[0]);


// What does "clear the contents" mean in this case?
// The submenu needs to be dynamic based on the clicked link. To facilitate that, we will create a helper function called buildSubmenu that does the following:

// Clear the current contents of subMenuEl.

// Jaki
// Does that mean clear the classes and styling?

// Dylan Comeau  
// It means it submenu is currently populated with "all, top selling, search" and you click on a different main menu item. it clears that out and puts the new ones in its place

// Dylan Comeau 
// doesnt just shove them all together. Clear the contents of the submenu, so you can repopulate it with the new info
//grab the elements
const selectElement = selector => {
  const element = document.querySelector(selector)
  //add validation
	if(element) return element;
  throw new Error('uh oh');

};

// console.log(selectElement('.navbar'));

//nav styles on scroll
const scrollHeader = () => {
  const headerElement = selectElement('#header');
  if(this.scrollY >= 15){
	headerElement.classList.add('activated');
  } else{
	headerElement.classList.remove('activated')
  }
}


window.addEventListener('scroll', scrollHeader)
//search


//open menu

const menuToggleIcon = selectElement('#menu-toggle-icon')

const toggleMenu = () => {
  const mobileMenu = selectElement('#menu')
  mobileMenu.classList.toggle('activated')
  menuToggleIcon.classList.toggle('activated')


}

menuToggleIcon.addEventListener('click', toggleMenu)
// open/ close search

//close the search form

//switch theme
const bodyElement = document.body
const themeToggleBtn = selectElement('#theme-toggle-btn')
const currentTheme = localStorage.getItem('currentTheme')
if(currentTheme){
  bodyElement.classList.add('light-theme')
}
themeToggleBtn.addEventListener('click', () => {
  bodyElement.classList.toggle('light-theme')
  //save to local storage

  if(bodyElement.classList.contains('light-theme')){
	localStorage.setItem('currentTheme', 'themeActive')
  } else{
	  localStorage.removeItem('currentTheme')
  }
})
//swipes
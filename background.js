/*
Open a new tab, and load "my-page.html" into it.
*/
function openMyPage() {
  console.log('injecting');
   browser.tabs.create({
     "url": '/my-page.html'
   });
}


/*
Add openMyPage() as a listener to clicks on the browser action.
*/
browser.browserAction.onClicked.addListener(openMyPage);

function handleCreated(tab) {
	console.log('tabi id', tab.id);
	document.body.innerHTML = '';
	document.documentElement.innerHTML = '';
}

browser.tabs.onCreated.addListener(handleCreated);

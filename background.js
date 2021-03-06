/*
Open a new tab, and load "my-page.html" into it.
*/
function openMyPage() {
   browser.tabs.create({
     "url": '/my-page.html'
   });
}


/*
Add openMyPage() as a listener to clicks on the browser action.
*/
browser.browserAction.onClicked.addListener(openMyPage);

function handleCreated(tab) {
	document.body.innerHTML = '';
	document.documentElement.innerHTML = '';
}

browser.tabs.onCreated.addListener(handleCreated);

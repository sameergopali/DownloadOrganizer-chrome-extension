searchfunction= function(word){
 var qu=word.selectionText;
 chrome.tabs.create({url:"https://www.youtube.com/results?search_query="+qu});
 };
 searchfunctionD= function(word){
 var qu=word.selectionText;
 chrome.tabs.create({url:"https://www.merriam-webster.com/dictionary/"+qu});
 };
chrome.contextMenus.create({
	title:"Search Youtube for",
	contexts:["selection"],
    onclick: searchfunction
});
chrome.contextMenus.create({
	title:"Search  merriam-webster",
	contexts:["selection"],
    onclick: searchfunctionD
});
 
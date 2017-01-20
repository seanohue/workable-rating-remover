const trueString       = "true"
const falseString      = "false"
const hidingEnabledKey = "hiding_enabled"

chrome.browserAction.onClicked.addListener(function(tab) {
	var hidingEnabledString = localStorage.getItem(hidingEnabledKey) || falseString
	console.log(hidingEnabledString)

	localStorage.setItem(hidingEnabledKey, hidingEnabledString === trueString ? falseString : trueString)
});

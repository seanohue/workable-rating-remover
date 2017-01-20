const trueString       = "true"
const falseString      = "false"
const hidingEnabledKey = "hiding_enabled"

function updateBrowserActionIcon(enabled) {
	if (enabled) {
		chrome.browserAction.setIcon({
			path : {"16": "icons/enabled16.png"}
		});
	} else {
		chrome.browserAction.setIcon({
			path : {"16": "icons/disabled16.png"}
		});
	}
}

function handleBrowserActionIconClick() {
	// The new state we are transitioning to. Correctly handles no stored data. Extension manifest
	// does not need to declare the storage permission since we are leveraging the HTML5 storage APIs.
	// Note: we can only store strings using these APIs!
	var targetEnabledState = localStorage.getItem(hidingEnabledKey) !== trueString

	// Write the new state to storage.
	localStorage.setItem(hidingEnabledKey, targetEnabledState ? trueString : falseString)

	// Update the browser action icon to reflect the new state.
	updateBrowserActionIcon(targetEnabledState)
}

chrome.browserAction.onClicked.addListener(function(tab) {
	handleBrowserActionIconClick()
});

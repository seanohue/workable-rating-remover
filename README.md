# General Resources

https://developer.chrome.com/extensions/overview

# Plan of Attack

- [ ] Create basic plugin that targets and hides appropriate elements (PR [here](https://github.com/stkent/workable-rating-remover/pull/1), ready for review).
- [ ] Add a page action that writes a boolean (`enabled`) value to local? storage. Value written should negate the previous value (if any). Resources: [1](https://developer.chrome.com/extensions/storage), [2](https://developer.chrome.com/extensions/overview#incognito), [3](https://developer.chrome.com/extensions/pageAction#event-onClicked), [4](https://developer.chrome.com/extensions/event_pages), [5](http://stackoverflow.com/questions/11922964/how-do-i-view-the-storage-of-a-chrome-extension-ive-installed).
- [ ] Set separate icons for page action when `enabled` boolean is `true` vs `false`. (Alternatively, set greyed out/not greyed out, if that's the proper mechanism). 
- [ ] Update to use a [content script](https://developer.chrome.com/extensions/content_scripts) to inject element-hiding CSS (or maybe JS?) early in page load sequence. Only inject if the `enabled` boolean is `true`.
- [ ] When the page action is clicked, automatically [refresh the active tab](https://developer.chrome.com/extensions/activeTab) if possible.

# Twitter Setting Saver

Some time back the people who run Twitter decided it would be best for everyone if our settings were periodically overridden to show their algorythmically-selected "top tweets." This made me crazy (Twitter is useful to me only in terms of recency) so I made a browser extension to fix it.

## How it Works

We're checking https://twitter.com/home for the presence of an Aria label indicating that Twitter has returned us to the "Home" view.

If we find it, we pause briefly, look for another Aria label for role="menuitem", and click it if we find it.

If you're not an English speaker this won't work because the Aria label for your language will be different. You can help by adding a messages.json file for  your language!

## Try It

Chrome: 
https://chrome.google.com/webstore/detail/twitter-setting-saver/mkflpeaedkaekekldcemjhcpndibgabo

Firefox:
https://addons.mozilla.org/en-US/firefox/addon/twitter-setting-saver/

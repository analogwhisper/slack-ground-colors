# slack-ground-colors
- Customize the background color of slack channels and private messages!
  - This only changes in your **point of view**, these colorizations do not appear for others
- Personalize, and never send messages to the wrong channels/users ever again! ;)

## How it works:
This uses javascript, which runs locally after the page is loaded, to monitor your slack application via Firefox and colorizes the background depending on whatever is the active channel/user you are typing to.

The code is kept simple, lightweight, and unobtrusive.  As long as you don't mind saving channel names and user names to the file, you can automatically change the background color!

## Requirements:
- Firefox
- Greasemonkey
- A slack account

## Getting started
1. Install Firefox
2. Install Greasemonkey
3. Create a new script
4. Set the script parameters to your choosing, and the URL you want it to be run (your slack channel's URL typically)
5. Allow pasting in Greasemonkey
6. Paste the template in
7. Change/add filters by adding `case` statements that match the user or channel name text!
8. Colorize to your liking!


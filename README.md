
> Open this page at https://github.com/Dan4P/pxt-hello

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/dan4p/pxt-hello** and import

## Edit this project

To edit this repository in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/dan4p/pxt-hello** and click import

#### Metadata (used for search, rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>

## My Description
Above is the preloaded descriptions that come with making a git repo in the makecode live editor. Here is my description of my set up and how i made a basic editor extension for the micro:bit makecode editor. You will only be able to run your editor extension on a local build until you get it officially approved.

What you will need to do is:
* create your extension
* locally run a version of the pxt-microbit editor with permissions for you editor extension
* create your webpage that the extension will link to 

Creating the extension
* open up the makecode editor(https://makecode.microbit.org/), start a project and create a github repo for that project (make sure that the repo is public)
* code in main.ts the extension you want to make (https://makecode.com/playground is helpful for learning this)
* you need to add a section to the pxt.json file in your repo containing the url of your webpage (https://makecode.com/extensions/extensions this webpage shows you what to add). This makes the extension an editor extension.

Running your editor:
* you will need to fork or copy your over version of the https://github.com/microsoft/pxt-microbit repo and follow the local server set up. Then add two lines to the targetconfig.json file.
* you need to add the repo with your extension in to the approvedRepoLib{} at the start if the file (Note: if your github username has capital letters then make sure you type them in lowercase in this entry or it will not recognise the repo)
* you need to add the url for your web page to the approvedEditorExtensionUrls around line 500
* An error i had on windows VS code was the normal command line did not allow me to run the editor until i switched to using a command prompt (cmd) terminal

To create your webpage you use github pages. Once the page is published and the previous changes made you should be able to import and use your extension following the instructions in the 'use as extension' section above. The following are the steps i used to add blocks to the editor via the editor extension. https://github.com/Dan4P/dan4p.github.io is the page i used along with the files i uploaded to add blocks. 
* the editor and webpage communicate via iframes, https://makecode.com/extensions/extensions shows how to build an and send messages between the frames
* i used the 'action: "extwritecode"' setting to send my messages
* create a new extension use the same method as before and take the main.ts and the pxt.json files. These should be used as the values for code and json respectivly.

useful links
* https://makecode.com/extensions/extensions
* https://makecode.com/playground
* https://makecode.com/extensions
* https://github.com/microsoft/pxt-microbit
* https://makecode.com/extensions/getting-started/simple-extension
* https://makecode.com/extensions/naming-conventions
* https://makecode.microbit.org/
  

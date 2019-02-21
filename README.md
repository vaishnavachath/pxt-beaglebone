# MakeCode Beaglebone

[![Build Status](https://travis-ci.com/vaishnav98/pxt-beaglebone.svg?branch=master)](https://travis-ci.com/vaishnav98/pxt-beaglebone)

This is an experimental code editor for Beaglebone boards - try it at https://vaishnav98.github.io/pxt-beaglebone/index.html.

## Local Dev Server

The local server lets you to run the editor and serve the documentation from your own computer.

### Setup

1. Install [Node.js](https://nodejs.org/) 8.9.4 or higher.
2. Clone the pxt repository.
```
git clone https://github.com/microsoft/pxt
cd pxt
```
3. Install the dependencies of ``Microsoft/pxt`` and build it
```
npm install
npm run build
cd ..
```
4. Clone the ``vaishnav98/pxt-beaglebone`` repository
```
git clone https://github.com/vaishnav98/pxt-beaglebone
cd pxt-beaglebone
```
5. Install the PXT command line (add `sudo` for Mac/Linux shells).
```
npm install -g pxt
```
6. Install the pxt-maker dependencies.
```
npm install
```
7. Link pxt-maker back to base pxt repo (add `sudo` for Mac/Linux shells).
```
npm link ../pxt
```
Note the above command assumes the folder structure of   
```
     beaglebone-makecode
            |
        ---------
        |       |                        
        pxt      pxt-beaglebone
 ```

### Running

Run this command from inside pxt-maker to open a local web server
```
pxt serve
```
If the local server opens in the wrong browser, make sure to copy the URL containing the local token. 
Otherwise, the editor will not be able to load the projects.

### Updates

Make sure to pull changes from all repos regularly. More instructions are at https://github.com/Microsoft/pxt#running-a-target-from-localhost

## Code of Conduct

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.


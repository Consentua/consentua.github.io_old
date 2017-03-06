![](imgs/logo/consentua-logo-colour.png)
# [consentua.com](http://consentua.com/)
Development for Consentua.com website

See live version at [consentua.com](http://consentua.com/) or [consentuawebsite.mybluemix.net](https://consentuawebsite.mybluemix.net/)

## Pages

* `/index.html`
* `/policy.html`
* `/policy-cont.html`
* `/404.html`
* `/login.html` (WIP not publicly linked)
* `/dashboard.html` (WIP not publicly linked)

## Dependencies / Libraries

All libraries (with exceptions of fonts and icons) are stores locally in either `js/lib` or `styles/lib`


### Scripts
* [Scrollmagic](http://scrollmagic.io/) - for scroll based animations
* [gsap](https://greensock.com/gsap) - for scrollmagic plug-ins
* [Lory](http://meandmax.github.io/lory/) - for image sliders
* [Prism.js](http://prismjs.com/) - for code examples on the admin dashboard

### Styles
* [normalize.css](https://necolas.github.io/normalize.css/) - for rendering all elements more consistently across browsers
* [Balloon.css](https://kazzkiq.github.io/balloon.css/) - for balloon hover effects

## Look and Feel

### Fonts

* [Open Sans](https://fonts.google.com/selection?selection.family=Open+Sans|Raleway) (Medium)- Main font used for text
* [Raleway](https://fonts.google.com/selection?selection.family=Open+Sans|Raleway) (Medium) - Font used for Headings and nav
* [fontawesome](http://fontawesome.io/) ver 4.7 - for icons

### Colours

* Main: #9A1144 (154,17,68)
* Secondary: #A42856 (164,40,86)
* Text: #212121 / #FFF
* Whites: #FFF, #F6F6F6
* Greys: #c7c7c7, #d4d4d4, #e1e1e1, #eeeeee
* Darks: #212121, #373737, #000

## Development

To develop on consentua.com:

npm install to install devDependencies

```
$ npm install
```


You may then run this to view the application running locally on [localhost:8080](http://localhost:8080/)  with live reload to develop.

```
$ gulp serve
```


## Build

The `gulpfile.js` contains a build script for minifying all files and images before deploying it to bluemix.
Just run: 
```
$ gulp build
```

This will create a distribution `dist/` folder, if one doesn't exist already, and output all the source files and images; minified, concatenated or compressed in some way. 

The nginx server, on bluemix, should be pointed to `dist/` as its `root:`, this config option is in the `Staticfile` config file.

## Deploy

Firstly install the [Cloud Foundry](https://github.com/cloudfoundry/cli/releases) and [IBM® Bluemix® command line interfaces](http://clis.ng.bluemix.net/ui/home.html)

>The Bluemix CLI command line interface is not supported by Cygwin. Use the Bluemix CLI in a command line window other than the Cygwin command line window.

Make sure you are connected and logged into blumix/cf:
```
$ cf api https://api.ng.bluemix.net
$ cf login -u <BLUEMIX-EMAIL> -o KnowNowInfo -s Consentua
```

### Manually

MAKE SURE YOU HAVE RUN THE BUILD SCRIPT `$ gulp build`

Then to push the code to bluemix run:
```
$ cf push ConsentuaWebSite
```


>The site should now be deployed 

### via gulp script

IF you are logged into bluemix just run:

```
$ gulp deploy
```

This will run the build script and when finished, deploy to bluemix (you might not see the deploy logs until the entire process is finished)

>The site should now be deployed 

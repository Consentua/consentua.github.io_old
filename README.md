![](imgs/logo/consentua-logo-colour.svg)
# [consentua.com(http://consentua.com/)
Development for Consentua.com website

See live version at [consentua.com(http://consentua.com/) or [consentuawebsite.mybluemix.net](https://consentuawebsite.mybluemix.net/)

## Pages

* `/index.html`
* `/policy.html`

## Dependencies / Libraries

All libraries are stores locally in either `js/lib` or `styles/lib`

### Scripts
* [Scrollmagic](http://scrollmagic.io/) - for scroll based animations
* [gsap](https://greensock.com/gsap) - for scrollmagic plug-ins
* [Lory](http://meandmax.github.io/lory/) - for image sliders

### Styles
* [normalize.css](https://necolas.github.io/normalize.css/) - for rendering all elements more consistently across browsers
* [Balloon.css](https://kazzkiq.github.io/balloon.css/) - for balloon hover effects


## Development

To develop on consentua.com:

npm install to install devDependencies

```
$ npm install
```


You may then run this to view the application running locally on `localhost:8080`  with live reload to develop.

```
$ gulp serve
```



## Deploy

Firstly install the [Cloud Foundry](https://github.com/cloudfoundry/cli/releases) and [IBM® Bluemix® command line interfaces](http://clis.ng.bluemix.net/ui/home.html)

>The Bluemix CLI command line interface is not supported by Cygwin. Use the Bluemix CLI in a command line window other than the Cygwin command line window.

Make sure you are connected and logged into blumix/cf:
```
$ cf api https://api.ng.bluemix.net
$ cf login -u <BLUEMIX-EMAIL> -o KnowNowInfo -s Consentua
```

Then to push the code to bluemix run:
```
$ cf push ConsentuaWebSite
```


>The site should now be deployed 
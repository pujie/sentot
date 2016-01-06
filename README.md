# Sentot

jQuery Plugin for dispay items in grid. Parameters include items per page, order (not implemented yet), filter, pagination button .


### Version
0.1.0

### Dependency

Sentot depend on:

* [jQuery] - javascript library
* [html5] - html5
* [css] - style sheet

### Instalasi

Download at https://github.com/pujie/sentot, the main file should contains script below

```sh
<html>
<script type='text/javascript' src='http://code.jquery.com/jquery-latest.js'></script>
<script type='text/javascript' src='dataSource.js'></script>
<script type='text/javascript' src='sentot.js'></script>
</html>
```

DataSource sample:
```sh
ajaxSrc = '[
{name:”Agus”,address:”Jln PangSud 123”,city:”Surabaya”},
{name:”Anang”,address:”Jln PangSud 12a”,city:”Surabaya”},
{name:”Budi”,address:”Jln HR Muhammad 15”,city:”Surabaya”},
{name:”Catur”,address:”Jln Bung Tomo 145a”,city:”Gresik”},
{name:”Danang”,address:”Jln Cut Nya Dhien 55”,city:”Mojokerto”},
{name:”Darto”,address:”Jln Laksamana Keumala Hayati 98”,city:”Sidoarjo”},
{name:”Fadil”,address:”Jln Diponegoro 64”,city:”Sidoarjo”},
{name:”Farah”,address:”Jln Imam Bonjol 33”,city:”Surabaya”},
{name:”Gunawan”,address:”Jln Imam Bonjol 12a”,city:”Surabaya”},
{name:”Hutomo”,address:”Jln Panglima Polim 45”,city:”Surabaya”},
{name:”Iwan”,address:”Jln Fatahillah 36b”,city:”Surabaya”},
{name:”Joko”,address:”Jln Hassanuddin 44”,city:”Surabaya”},
{name:”Kurniawan”,address:”Jln Pattimura 11”,city:”Pasuruan”},
]'
```

Implementation:
```sh
<script type=”text/javascript”>
sentot({
	dataSource:ajaxSrc,
	elemenPerPage:10,
	orderBy:”name”,
	orderType:”asc”,
	maxButtonNumber:5
})
</script>
```

### Author
```
puji w.p 
http://najma.web.id
http://padi.net.id
```

License
----

MIT


**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [dill]: <https://github.com/joemccann/dillinger>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [john gruber]: <http://daringfireball.net>
   [@thomasfuchs]: <http://twitter.com/thomasfuchs>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [marked]: <https://github.com/chjj/marked>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [keymaster.js]: <https://github.com/madrobby/keymaster>
   [jQuery]: <http://jquery.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>
   
   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]:  <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>



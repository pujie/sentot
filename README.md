# Sentot

Plugin jQuery dengan parameter jumlah elemen per halaman, pengurutan, filter, banyaknya tombol paginasi, dan banyaknya item.


### Version
0.1.0

### Dependency

Sentot tergantung pada:

* [jQuery] - library javascript
* [html5] - html5
* [css] - styling yang membuat web anda nyetyl

### Instalasi

Download pada https://github.com/pujie/sentot, kemudian pastike file html berisikan script berikut sebagai file utama

```sh
<html>
<script type='text/javascript' src='http://code.jquery.com/jquery-latest.js'></script>
<script type='text/javascript' src='dataSource.js'></script>
<script type='text/javascript' src='sentot.js'></script>
</html>
```

Contoh DataSource:
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

Implementasi:
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
Puji W P (http://najma.web.id)



License
----

MIT


**Free Software, Hell Yeah!**

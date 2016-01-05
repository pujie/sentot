$.fn.sentot = function(options){
	var settings = $.extend({
		dataSource:[],
		itemPerPage:0,
		orderBy:"name",
		orderType:"asc",
		maxButtonNumber:5
	},options);
	var obj = jQuery.parseJSON(settings.dataSource),
		objCount = obj.length;
	for(x=0;x<obj.length;x++){
		console.log(obj[x].name,obj[x].address);
	}
	console.log("Total Item:",objCount);
	console.log("Total Page:",countPages(settings.itemPerPage,objCount));
}
countPages = function(itemPerPage,itemCount){
	if(itemPerPage>itemCount){
		return 1;
	}else{
		return Math.floor(itemCount/itemPerPage)+1;
	}
}

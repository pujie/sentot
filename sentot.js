$.fn.sentot = function(options){
	var settings = $.extend({
		dataSource:[],
		fields:[],
		itemPerPage:0,
		orderBy:"name",
		orderType:"asc",
		maxButtonNumber:5
	},options);
	
	var that = this,
		obj = jQuery.parseJSON(settings.dataSource),
		objCount = obj.length;
	for(x=0;x<obj.length;x++){
		str='';
		for(y=0;y<settings.fields.length;y++){
			str+='<span class="subitem">'+obj[x][settings.fields[y]]+'</span>';
		}
		that.append('<div class="item">'+str+'</div>');
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

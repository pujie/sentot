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
		objCount = obj.length,
		pageAmount=countPages(settings.itemPerPage,objCount);
	for(x=0;x<obj.length;x++){
		str='';
		for(y=0;y<settings.fields.length;y++){
			str+='<span class="subitem">'+obj[x][settings.fields[y]]+'</span>';
		}
		that.append('<div class="item">'+str+'</div>');
	}
	that.append(makePagination(1,pageAmount));
	console.log("Total Item:",objCount);
}
makePagination = function(firstPage,pageAmount){
	var str = '';
	for(var i=firstPage;i<pageAmount;i++){
		str+='<span class="pagination '+i+'">'+i+ '</span>';
	}
	return '<div><span class="pagination">Previous</span> '+str+' <span class="pagination">Next</span></div>';
}
countPages = function(itemPerPage,itemCount){
	if(itemPerPage>itemCount){
		return 1;
	}else{
		return Math.floor(itemCount/itemPerPage)+1;
	}
}

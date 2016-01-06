$.fn.sentot = function(options){
	var settings = $.extend({
		dataSource:[],
		fields:[],
		itemPerPage:4,
		orderBy:"name",
		orderType:"asc",
		maxButtonNumber:5
	},options);
	$(this).append('<div id="container"></div>');
	var that = this,
		obj = jQuery.parseJSON(settings.dataSource),
		objCount = obj.length,
		pageAmount=countPages(settings.itemPerPage,objCount),
		populateItems = function(firstItem,itemPerPage){
			if(parseInt(itemPerPage)+parseInt(firstItem)>objCount){
				pageLastItem = objCount;
			}else{
				pageLastItem = parseInt(itemPerPage)+parseInt(firstItem);
			}
			for(x=parseInt(firstItem);x<pageLastItem;x++){
				str='';
				for(y=0;y<settings.fields.length;y++){
					str+='<span class="subitem">'+obj[x][settings.fields[y]]+'</span>';
					console.log('item got',x,obj[x][settings.fields[y]]);
				}
				$('#container').append('<div class="item">'+str+'</div>');
			}	
		}
	populateItems(0,settings.itemPerPage);
	that.append(makePagination(1,pageAmount));
	that.on('click','.pagination',function(){
		$('.item').remove();
		switch($(this).attr('value')){
			case 'first':
				populateItems(0,settings.itemPerPage);
			break;
			case 'last':
				populateItems((pageAmount-2)*settings.itemPerPage,settings.itemPerPage);
			break;
			default:
				populateItems(parseInt(settings.itemPerPage)*parseInt($(this).attr('value')-1),settings.itemPerPage);
			break;
		}
		
	});
}
makePagination = function(firstPage,pageAmount){
	var str = '';
	for(var i=firstPage;i<pageAmount;i++){
		str+='<span class="pagination" value="'+i+'">'+i+ '</span>';
	}
	return '<div id="paginationContainer"><span class="pagination" value="first">First</span> '+str+' <span class="pagination" value="last">Last</span></div>';
}
countPages = function(itemPerPage,itemCount){
	if(itemPerPage>itemCount){
		return 1;
	}else{
		return Math.ceil(itemCount/itemPerPage)+1;
	}
}

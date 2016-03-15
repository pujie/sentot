/*
 * sentot v0.1.0
 * author: puji w prayitno
 * email: pw.prayitno@gmail.com
 * website: http://najma.web.id
 * website: http://www.padi.net.id
 * */
$.fn.sentot = function(options){
	var settings = $.extend({
		dataSource:[],
		fields:[],
		itemPerPage:4,
		orderBy:"name",
		orderType:"asc",
		maxButtonNumber:5,
		image:null,
		animate:false
	},options);
	$(this).append('<div id="container"></div>');
	var that = this,
		obj = jQuery.parseJSON(settings.dataSource),
		objCount = obj.length,
		pageAmount=countPages(settings.itemPerPage,objCount),
		populateItems = function(_obj,firstItem,itemPerPage){
			var _objCount = _obj.length;
			$('.item').remove();
			if(parseInt(itemPerPage)+parseInt(firstItem)>_objCount){
				pageLastItem = _objCount;
			}else{
				pageLastItem = parseInt(itemPerPage)+parseInt(firstItem);
			}
			if(settings.animate===true){
				for(x=parseInt(firstItem);x<pageLastItem;x++){
					str='';
					str+='<div>';
					if(settings.image){
						str+='<div class="image"><img src='+_obj[x]['image']+'></div>';
					}
					for(y=0;y<settings.fields.length;y++){
						str+='<span class="mix subitem" style="display:none;">'+_obj[x][settings.fields[y]]+'</span>';
					}
					str+='</div>';
					$('#container').append('<div class="item">'+str+'</div>')
					$newItem = $('#container .item .subitem');
					$newItem.fadeIn('slow');
				}
			}else{
				for(x=parseInt(firstItem);x<pageLastItem;x++){
					str='';
					for(y=0;y<settings.fields.length;y++){
						str+='<span class="subitem">'+_obj[x][settings.fields[y]]+'</span>';
					}
					$('#container').append('<div class="item">'+str+'</div>')
				}				
			}
		},
		makePagination = function(firstPage,pageAmount){
			that.find('.pagination').remove();
			var str = '';
			for(var i=firstPage;i<=pageAmount;i++){
				str+='<span class="pagination" value="'+i+'">'+i+ '</span>';
			}
			return '<div id="paginationContainer"><span class="pagination" value="first">First</span> '+str+' <span class="pagination" value="last">Last</span></div>';
		}
	that.prepend('<span>Search</span><input id="searchText" />');
	populateItems(obj,0,settings.itemPerPage);
	that.append(makePagination(1,pageAmount));
	that.on('keyup','#searchText',function(){
		var searchResult = [];
		$.each(obj,function(x,y){
			for(i=0;i<settings.fields.length;i++){
				if(y[settings.fields[i]].toLowerCase().indexOf($('#searchText').val().toLowerCase())>=0){
					searchResult.push(y);
				}
			}
		})
		populateItems(searchResult,0,settings.itemPerPage);
		var _pageAmount = countPages(settings.itemPerPage,searchResult.length);
		that.append(makePagination(1,_pageAmount));
		that.on('click','.pagination',function(){
			that.find('.pagination').removeClass('selected');
			$(this).addClass('selected');
			switch($(this).attr('value')){
				case 'first':
					populateItems(searchResult,0,settings.itemPerPage);
				break;
				case 'last':
					populateItems(searchResult,(_pageAmount-1)*settings.itemPerPage,settings.itemPerPage);
				break;
				default:
					populateItems(searchResult,parseInt(settings.itemPerPage)*parseInt($(this).attr('value')-1),settings.itemPerPage);
				break;
			}
			
		});
	});
	that.on('click','.pagination',function(){
		that.find('.pagination').removeClass('selected');
		$(this).addClass('selected');
		switch($(this).attr('value')){
			case 'first':
				populateItems(obj,0,settings.itemPerPage);
			break;
			case 'last':
				populateItems(obj,(pageAmount-1)*settings.itemPerPage,settings.itemPerPage);
			break;
			default:
				populateItems(obj,parseInt(settings.itemPerPage)*parseInt($(this).attr('value')-1),settings.itemPerPage);
			break;
		}
		
	});
}
countPages = function(itemPerPage,itemCount){
	if(itemCount>0){
		if(itemPerPage>itemCount){
			return 1;
		}else{
			return Math.ceil(itemCount/itemPerPage);
		}
	}
	return 0;
}

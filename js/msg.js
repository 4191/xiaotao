$.extend({
	"msg" : function( json ){
		// 层是否唯一
		if( json.only ){
			if( $("div[msg]").length > 0 ){
				return;
			}
		}
		// 遮罩
		if( json.mask ){
			var divMask = $("<div></div>");
			divMask.css({
				"position" : "fixed",
				"left" : "0px",
				"top" : "0px",
				"right" : "0px",
				"bottom" : "0px",
				"background" : "rgba(0,0,0,.4)"
			});
			$("body").append(divMask);
		}
		// 创建提示框
		var divBox = $("<div></div>");
		divBox.css({
			"position" : "absolute",
			"width" : json.width,
			"height" : json.height,
			"left" : ($(window).width() - json.width)/2,
			"top" : ($(window).height() - json.height)/2,
			"background" : "white",
			"border" : "1px solid gray",
			"border-radius" : "5px",
			"box-shadow" : "0px 0px 5px black"
		}).attr("msg", "");
		$("body").append(divBox);
		// 标题栏
		var divTitle = $("<div></div>");
		divTitle.css({
			"height" : 40,
			"color" : "white",
			"background" : "skyblue",
			"padding-left" : "10px",
			"line-height" : "40px",
			"border-top-left-radius" : "5px",
			"border-top-right-radius" : "5px",
			"cursor" : "move",
			"position" : "relative"
		}).html( json.title );
		divBox.append(divTitle);
		// 是否允许拖拽
		if( json.drag ){
			divTitle.mousedown(function(event){
				var divBoxOffset = divBox.offset()
				var x = event.clientX - divBoxOffset.left;
				var y = event.clientY - divBoxOffset.top;
				$( document ).mousemove(function(event){
					var _x = event.clientX - x;
					var _y = event.clientY - y;
					// 是否限制范围
					if( json.dragLimit ){
						if( _x<0 ){
							_x=0;
						}
						if( _x>$(window).width()-divBox.width()-5 ){
							_x=$(window).width()-divBox.width()-5;
						}
						if( _y<0 ){
							_y=0;
						}
						if( _y>$(window).height()-divBox.height()-5 ){
							_y=$(window).height()-divBox.height()-5;
						}
					}
					divBox.css({
						"left" : _x,
						"top" : _y
					});				
				});
				$( document ).mouseup(function(){
					$( document ).unbind("mousemove mouseup");
				});
				return false;
			});
		}
		// 关闭事件
		function closeWin(){
			if( json.mask ){				
				divMask.remove();
			}
			//divBox.remove();
			divBox.fadeOut(2000, function(){
				divBox.remove();
			})
		}
		// 自动关闭
		if( json.autoClose ){
			setTimeout(function(){
				closeWin();
			}, json.autoClose);
		}
		
		// 标题栏上的关闭按钮
		var spanClose = $("<span></span>");
		spanClose.css({
			"position" : "absolute",
			"right" : "10px",
			"top" : "10px",
			"display" : "inline-block",
			"width" : "20px",
			"text-align":"center",
			"height" : "20px",
			"line-height" : "20px",
			"background" : "blue",
			"border-radius" : "10px",
			"cursor" : "pointer"
		}).attr("title","关闭").html("X").click(function(){
			closeWin();
		});
		divTitle.append(spanClose);
		// 正文区
		var divContent = $("<div></div>");
		divContent.css({
			"width" : json.width+"px",
			"height" : ""+(json.height-40-50)+"px",
			"text-align" : "center",			
			"overflow" : "auto"
		});		
		divBox.append(divContent);
		var divBody = $("<div></div>");
		divBody.css({
			"width" : json.width+"px",
			"height" : ""+(json.height-40-50)+"px",
			"vertical-align": "middle",
			"display": "table-cell"
		}).html( json.content );
		divContent.append(divBody);
		// 是否有输入框
		if( json.type == "prompt" ){
			var textArea = $("<input></input>");
			textArea.css({
				"width" : (json.width-20)+"px",
				"height" : (json.height-40-50-70)+"px",
				"border" : "1px solid skyblue"
			}).val(json.val);
			divBody.append(textArea);
			textArea[0].focus();
		}
		// 是否有嵌入网页
		if( json.type == "iframe" ){
			var iframe = $("<iframe></iframe>");
			iframe.attr("src", json.val).css({
				"border":"none",
				"width" : (json.width-20)+"px",
				"height" : (json.height-40-50-70)+"px"
			});
			divBody.append(iframe);
		}
		// 按钮区
		var divButton = $("<div></div>");
		divButton.css({
			"height" : "50px",
			"background" : "#f5f5f5",
			"border-bottom-left-radius" : "5px",
			"border-bottom-right-radius" : "5px",
			"text-align" : "center"
		});
		divBox.append(divButton);
		// 确定按钮
		var btnOk = $("<input type='button' value='确定' />");
		btnOk.css({
			"border":"none",
			"background":"skyblue",
			"color":"white",
			"width":"80px",
			"height":"30px",
			"margin-top":"10px",
			"border-radius" : "5px",
			"cursor" : "pointer"
		}).click(function(){
			if( json.type == "prompt" ){
				json.btn_click(1, textArea.val());
			}else{
				json.btn_click(1);
			}			
			if( json.btn_click_close ){
				closeWin();
			}
		});
		divButton.append(btnOk);
		// 是否为confirm
		if( json.type == "confirm" || json.type == "prompt" ){
			var btnOk = $("<input type='button' value='取消' />");
			btnOk.css({
				"border":"none",
				"background":"lightblue",
				"color":"white",
				"width":"80px",
				"height":"30px",
				"margin-top":"10px",
				"margin-left":"10px",
				"border-radius" : "5px",
				"cursor" : "pointer"
			}).click(function(){
				json.btn_click(0);
				closeWin();
			});
			divButton.append(btnOk);	
		}
		
	}
});
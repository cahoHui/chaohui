(function(d){
	d.extend({
		//模拟系统弹框
		alert: function(options){
			var defaults = {
					mode: 'alert', //弹出类型
					wrapClass: 'alert', //最外层框class
					closeClass: 'alert-close',
					confirmClass: 'alert-confirm',
					promptText: '',
					maskClick: false,
					closeText: '取消',
					confirmText: '确定',
					operate: function() {}
				},
				opt = d.extend(defaults, options);
			var css = {
					position: "fixed",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
					background: "rgba(0, 0, 0, 0.6)",
					zIndex: 9998
				},
				j = "mask" + (+new Date()),
				mask = d('<div id="' + j + '">');
			var template = '<div class="'+opt.wrapClass+'"><div class="title"><span>系统提示</span><span class="'+opt.closeClass+' close"></span></div><div class="con">'+opt.promptText+'</div>';
			if(opt.mode == 'alert'){
				template += '<div class="ctrl ctrl-alert"><span class="'+opt.confirmClass+'">确定</span></div>';
			}else if(opt.mode == 'confirm'){
				template += '<div class="ctrl ctrl-confirm"><span class="'+opt.closeClass+'">'+opt.closeText+'</span><span class="'+opt.confirmClass+'" >'+opt.confirmText+'</span></div>';
			};
			template += '</div>';
			mask.css(css).appendTo(d("body"));
			d("body").append(template);
			var w = d('.' + opt.wrapClass).outerWidth(),
				h = d('.' + opt.wrapClass).outerHeight();
			//按回车时执行确定
			var keyupFun = function(e){
				if(e.which == 13){
					d('.' + opt.wrapClass).find('.ctrl span:last').trigger('click');
					d(window).off('keyup', keyupFun);
				}
			};
			d('.' + opt.wrapClass).css({
				position: 'fixed',
				left: (d(document).width() - w) / 2 + "px",
				top: (d(window).height() - h) / 2 + "px",
				zIndex: 9999
			});
			d('.' + opt.wrapClass).on("click", function(e) {
				var target = d(e.target),
					close = target.hasClass(opt.closeClass),
					confirm = target.hasClass(opt.confirmClass);
				if(close) {
					d(window).off('keyup', keyupFun);
					mask.remove();
					d('.' + opt.wrapClass).remove();
				}else if(confirm){
					d(window).off('keyup', keyupFun);
					mask.remove();
					d('.' + opt.wrapClass).remove();
					opt.operate();
				};
			});
			if(opt.maskClick){
				mask.on('click', function(){
					d(window).off('keyup', keyupFun);
					mask.remove();
					d('.' + opt.wrapClass).remove();
				})
			};
			d(window).on('keyup', keyupFun);
		}
	})
})(jQuery);
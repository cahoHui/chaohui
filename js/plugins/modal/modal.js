(function(d){
	d.fn.extend({
		modal: function(f){
			var e = {
					fixed: true,
					drag: false,
					animate: false,
					zIndex: 998,
					close: ".modal-close",
					confirm: ".modal-confirm",
					enter: ".modal-enter",
					maskClick: false,
					operate: function() {}
				},
				f = d.extend(e, f);
			return this.each(function(t, o) {
				var css = {
					position: "fixed",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
					background: "rgba(0, 0, 0, 0.6)",
					zIndex: f.zIndex
				},
				j = "mask" + (+new Date()),
				mask = d('<div id="' + j + '" class="modal-mask">'),
				h = d(o).outerHeight(),
				w = d(o).outerWidth();
				//按回车时执行确定
				var keyupFun = function(e){
					if(e.which == 13){
						d(o).find(f.enter).trigger('click');
						d(window).off('keyup', keyupFun);
					}
				};
				var fun = {
					closeModal: function(u){
						if(u){
							f.operate();
						};
						if(f.animate){
							d(o).animate({
								top: top - 30 + 'px',
								opacity: 0
							}, 400, function(){
								d(o).hide();
							});
							mask.animate({
								opacity: 0
							}, 200, function(){
								mask.remove();
							})
						}else{
							mask.remove();
							d(o).hide();
						};
					}
				};
				if(f.fixed){
					if(f.drag){
						d(o).css({
							left: (d(document).width() - w) / 2 + "px",
							top: (d(window).height() - h) / 2 + "px"
						});
						d(o).drag();
					}else{
						d(window).on("resize", function() {
							d(o).css({
								left: (d(document).width() - w) / 2 + "px",
								top: (d(this).height() - h) / 2 + "px"
							})
						}).trigger("resize")
					};
					d(o).css({
						position: "fixed"
					});
				}else{
					d(o).css({
						position: "absolute",
						top: d(window).scrollTop() + 100 + 'px'
					});
					d(window).on("resize", function() {
						d(o).css({
							left: (d(document).width() - w) / 2 + "px"
						})
					}).trigger("resize")
				};
				mask.css(css).appendTo(d("body"));
				d(o).css({
					opacity: 1,
					zIndex: f.zIndex + 1
				});
				if(f.animate){
					var top = parseFloat(d(o).css('top'));
					d(o).css({
						top: top - 30 + 'px',
						opacity: 0
					});
					d(o).animate({
						top: top,
						opacity: 1
					}, 400)
				};
				d(o).show();
				d(o).on("click", function(e) {
					var target = d(e.target),
						close = target.hasClass(f.close.slice(1)) || f.close.slice(1) === target.attr("id"),
						confirm = target.hasClass(f.confirm.slice(1)) || f.confirm.slice(1) === target.attr("id");
					if (close) {
						d(window).off('keyup', keyupFun);
						fun.closeModal();
						d(o).off("click");
					} else {
						if (confirm) {
							d(window).off('keyup', keyupFun);
							fun.closeModal(f.operate);
							d(o).off("click");
						}
					};
				});
				if(f.maskClick){
					mask.on('click', function(){
						d(window).off('keyup', keyupFun);
						fun.closeModal();
						d(o).off("click");
					})
				};
				d(window).on('keyup', keyupFun);
			})
		}
	})
})(jQuery);
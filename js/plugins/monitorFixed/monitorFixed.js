(function(d){
	d.fn.extend({
		monitorFixed: function(h){
			return this.each(function(t, o) {
				var fixedTag = d(o).find(h),
					arr = [];
				fixedTag.each(function(i){
					arr[i] = d(this).offset().top;
					d(this).width(d(this).width());
				});
				var length = arr.length,
					p = null;
				d(window).on('scroll', function(){
					var n = 0,
						u = p,
						top = d(this).scrollTop();
					if(top >= arr[length - 1]){
						p = fixedTag.eq(length - 1);
					}else if(top < arr[0]){
						p = fixedTag.eq(0);
						if(u !== p){
							p.css({
								position: 'static'
							});
						}
						return;
					}else{
						for(; n < length - 1; n++){
							if (top >= arr[n] && top < arr[n + 1]) {
								p = fixedTag.eq(n);
								break;
							}
						}
					};
					if(u !== p){
						if(u){
							u.css({
								position: 'static'
							});
						};
						p.css({
							position: 'fixed',
							top: '0px',
							zIndex: 999
						})
					}
				})
			})
		}
	})
})(jQuery);
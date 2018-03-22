(function(d){
	d.fn.extend({
		monitor: function(h, g) {
			var e = {
					dirWrap: ".catalog",
					listWrap: "li",
					triggerClass: "current",
					opacity: false,
					disTop: {
						minTop: 0,
						maxTop: 9999
					},
					topDiff: 0,
					speed: 400,
					animate: true
				},
				f = d.extend(true, e, g);
			f.speed = f.animate === true ? f.speed : 0;
			return this.each(function(t, o) {
				var q = d(o).find(h),
					m = d(f.dirWrap).find(f.listWrap),
					s = [],
					i = 0,
					j = 0,
					l = 1,
					p = null,
					r = null,
					n = null;
				d.each(q, function(u, w) {
					var v = Math.ceil(d(w).offset().top) - f.topDiff;
					s[u] = v;
					m.eq(u).data("dataTop", v)
				});
				i = s.length;
				j = f.opacity === true ? 400 : 0;
				r = function(v) {
					var u = parseInt(v.data("dataTop"));
					d("body, html").animate({
						scrollTop: u
					}, f.speed, function() {
						l = 1
					})
				};
				n = function() {
					var u = p,
						v = 0,
						w = d(window).scrollTop();
					if (w >= s[i - 1]) {
						p = m.eq(i - 1)
					} else {
						for (; v < i - 1; v++) {
							if (w >= s[v] && w < s[v + 1]) {
								p = m.eq(v);
								break
							}
						}
					}
					if (w < f.disTop.minTop || w > f.disTop.maxTop) {
						d(f.dirWrap).hide()
					} else {
						d(f.dirWrap).fadeIn(j)
					}
					if (u !== p) {
						if (u) {
							u.removeClass(f.triggerClass)
						}
						p.addClass(f.triggerClass)
					}
				};
				d(f.dirWrap).bind("click", function(v) {
					var u = d(v.target).closest(f.listWrap);
					if (l && !d.isEmptyObject(u.get(0))) {
						l = 0;
						r(u)
					}
				});
				d(window).bind("scroll", n)
			})
		}
	})
})(jQuery);
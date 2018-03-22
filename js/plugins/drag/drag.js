(function(d){
	d.fn.extend({
		drag: function(g) {
			var e = {
					parent: true,
					operate: undefined
				},
				f = d.extend(e, g);
			return this.each(function(p, j) {
				var s = d(j).height(),
					l = d(j).width(),
					o = d(j).offsetParent(),
					i, n = {
						top: 0,
						left: 0
					},
					h, r, q, m;
				d(j).css({
					position: "absolute"
				});
				if (o.css("position").toLowerCase() === "relative" || o.css("position").toLowerCase() === "absolute") {
					h = o.width();
					r = o.height()
				} else {
					h = d(window).width();
					r = d(document).height()
				}
				q = h - l - 2;
				m = r - s - 2;
				i = f.parent === true ? d(j).children().eq(0) : d(j);
				i.bind("mousedown", function(w) {
					var v = f.parent === true ? d(this).parent() : d(this),
						y = v.position().left,
						x = v.position().top,
						z = w.pageX - y,
						u = w.pageY - x,
						t = 0;
					if (v.get(0).setCapture) {
						v.get(0).setCapture()
					}
					d(document).bind({
						mousemove: function(A) {
							var C = A.pageX - z,
								B = A.pageY - u;
							t = 1;
							if (C < 0) {
								C = 0
							}
							if (C >= q) {
								C = q
							}
							if (B < 0) {
								B = 0
							}
							if (B >= m) {
								B = m
							}
							n.left = C;
							n.top = B;
							d(j).css({
								top: B,
								left: C
							})
						},
						mouseup: function() {
							if (d(j).get(0).releaseCapture) {
								d(j).get(0).releaseCapture()
							}
							d(this).unbind("mousemove mouseup");
							if (typeof f.operate == "function" && t) {
								f.operate({
									top: n.top,
									left: n.left
								})
							}
						}
					});
					return false
				})
			})
		}
	})
})(jQuery);
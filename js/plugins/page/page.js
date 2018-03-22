(function(d){
	d.fn.extend({
		pageFlie: function(options){
			var defaults = {
					page: 1, //当前页码
					count: 2, //页码总数
					operate: function() {}
				},
				opt = d.extend(defaults, options);
			return this.each(function(t, o) {
				var ret = '',
					pointer = '<span class="dian">···</span>';
				var fun = {
					showPageNum: function(i) {
						//如果是当前页则添加class样式、否则else
						if (i == page) {
							ret += '<a class="on" data-href="' + i + '">' + i + '</a>';
						} else {
							ret += '<a data-href="' + i + '">' + i + '</a>';
						}
					}
				};
				//如果总页数小于2页则不显示分页
				if (opt.count < 2) {
					ret = '';
					return false;
				} else {
					var page = '';
					//获取当前页码
					page = opt.page;
					//如果当前页码不是1则显示下一页并显示上翻页、否则不显示上翻页(这里让其显示出来了，只不过多加了个off的class)
					if (page != 1) {
						ret += '<a class="page-prev' + '" data-href="' + (page - 1) + '">上一页</a>';
						ret += '<a data-href="' + 1 + '">1</a>';
					} else {
						ret += '<a class="page-prev off' + '" data-href="' + (page - 1) + '">上一页</a>';
						ret += '<a class="on" data-href="' + 1 + '">1</a>';
					};
					//如果总页码小于等于7否则else
					if (opt.count <= 7) {
						for (i = 2; i < opt.count; i++)
							fun.showPageNum(i);
					} else {
						//如果当前页码小于等于4
						if (page <= 4) {
							for (i = 2; i <= 6; i++)
								fun.showPageNum(i);
						}
						if (page >= 5) {
							//如果当前页码减去2不等于1
							if ((page - 2) > 1) {
								ret += pointer;
							}
							if ((page + 2) < opt.count) {
								for (i = page - 2; i <= page + 2; i++) {
									fun.showPageNum(i);
								}
							} else {
								for (i = opt.count - 5; i < opt.count; i++) {
									fun.showPageNum(i);
								}
							}
						}
						//如果当前页码加上2不等于最后一页则显示...
						if ((page + 2) < (opt.count - 1)) {
							ret += pointer;
						}
					}
				}
				//如果当前页码不是最大页码则显示下翻页(这里让其显示出来了，只不过多加了个off的class)
				if (page != opt.count) {
					ret += '<a data-href="' + opt.count + '">' + opt.count + '</a>';
					ret += '<a class="page-next"  data-href="' + (page + 1) + '">下一页</a>';
				} else {
					ret += '<a class="on" data-href="' + opt.count + '">' + opt.count + '</a>';
					ret += '<a class="page-next off"  data-href="' + (page + 1) + '">下一页</a>';
				};
				ret += '<span class="page-right"><span class="span1">共' + opt.count + '页</span><span class="span2">到</span><input class="text" type="text" value="' + page + '" /><span>页</span><a class="page-confirm">确定</a></span>';
				d(o).html(ret);
				//获取输入页码值
				d(o).find('a').not('.page-confirm').not('.off').click(function() {
					var page = parseInt($(this).attr('data-href'));
					opt.operate(page);
				});
				d(o).find('.page-confirm').on('click', function() {
					var pageJumpNum = $(this).siblings('input')[0];
					var nowpage = $(this).parent().siblings('.on').text();
					if (pageJumpNum.value >= opt.count)
						pageJumpNum.value = opt.count;
					if (pageJumpNum.value <= 1)
						pageJumpNum.value = 1;
					var numberReg = /^[0-9]*$/;;
					if (numberReg.test(pageJumpNum.value) && pageJumpNum.value != nowpage) {
						//为按钮追加超级链接
						$(this).attr('data-href', pageJumpNum.value);
						var page = parseInt($(this).attr('data-href'));
						opt.operate(page);
					}
				});
				//分页中的输入框
				d(o).find('input').on('keyup', function() {
					this.value = this.value.replace(/\D/g, '');
					if (parseInt(this.value) > parseInt(opt.count)) {
						this.value = opt.count;
					}
					if (parseInt(this.value) <= 0) {
						this.value = 1;
					}
				});
			})
		}
	})
})(jQuery);
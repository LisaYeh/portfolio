// JavaScript Document

// editable_content的爆版預防
$(document).ready(function(){
    
    //除了table.img_grand之外,所有表格加上tableWrap
    $('.editable_content table').each(function(){
        if (!$(this).hasClass("img_grand")) {
            $(this).wrap("<div class='tableWrap'></div>")
        }
    });
});

// 加入圖說的寬度
$(window).load(function(){
	function districtFix(){
		$('.img_bg').each(function(){
			$(this).removeAttr('style')
			$(this).find('span').css({
				width: $(this).find('img').width()
			});
			$(this).css({
				width: $(this).find('img').width()
			});
		});
	}
	$(window).on("resize", districtFix);
	districtFix();

    //視差捲動1
    $(window).scroll(function(){
        $('.active_point').each(function(){
            var scrollVal = $(window).scrollTop();
                winHeight = $(window).height();
                transDelay = winHeight * 0.1;
                scrollMax = (($(this).offset().top)+transDelay)-winHeight;
                // scrollMax = (($(this).offset().top)+100)-winHeight;
            
                if(scrollVal > scrollMax) {
                    $(this).addClass('active')
                }
                //重複播放
                // else {
                //     $(this).removeClass('active')
                // }
            });
        }).scroll();

});

$(function() {	
    $('.index_fixed_btn a').click(function() { 
        var $this = $(this);
            _clickTab = $this.attr('href');
    });

	// 浮動主選單
	$(window).bind('scroll resize', function(){
		var scrollVal = $(this).scrollTop();
		
			if(scrollVal > 120) {
				$('body').addClass('MenuFix')
			}
			else {
				$('body').removeClass('MenuFix')
			}
		}).scroll(); // 觸發一次 scroll()
		
	// TOP BTN
	$(window).bind('scroll resize', function(){
		var scrollVal = $(this).scrollTop();
		
			if(scrollVal > 150) {
				$('.BtnTop').addClass('TopFix');
			}
			else {
				$('.BtnTop').removeClass('TopFix');
			}
		}).scroll(); // 觸發一次 scroll()


    //提醒視窗 popup
    $(function(){     
        $('.popup_btn').on("click",showbox);
            function showbox(){
                $('.popup_box').removeClass("close").addClass("open");
                $('.popup_box, .popup_box .close_btn').on("click",hidebox);
            }
            function hidebox(){
                $('.popup_box').removeClass("open").addClass("close");
                $('.popup_box, .popup_box .close_btn').off("click",hidebox);
            }
    });
    
    //click後出現選單
    $(".Menubar").click(function(){
       $(".mobileMenuWrap").toggleClass("open");
       $(".Menubar").toggleClass("open");
    });

    //click後出現選單
    $(".mobileMenuWrap").click(function(){
       $(".mobileMenuWrap").removeClass("open");
       $(".Menubar").removeClass("open");
    });

    //彈出視窗內的東西點選不觸發效果
    $(".mobileMenuWrap > div").click(function(e){
        e.stopPropagation();
    });

    // mobileMenu (行動裝置選單)
    $('.mobileMenu .menu > li > .iconBtn').click(function(){
        var $cont = $(this).next('ul');
        
        if(!$cont.is(':visible')){
            $(this).parent("li").siblings().children(".iconBtn").next('ul').slideUp();
            $(this).addClass('slideDown').parent("li").siblings().children(".iconBtn").removeClass('slideDown');
        }
        else { 
            $(this).removeClass('slideDown'); 
        }$cont.slideToggle();
    }).siblings('ul').hide();

    // 數字跑動效果
    // if (jQuery(window).width() > 1024) {  
    //     $('.count').each(function () {
    //         $(this).prop('Counter',0).animate({
    //             Counter: $(this).text()
    //         }, {
    //             duration: 1500,
    //             easing: 'swing',
    //             step: function (now) {
    //                 $(this).text(Math.ceil(now));
    //             }
    //         });
    //     });
    // } 

    // 滑動到區塊位置, 移動到最上方
    // var nav_pos = $('.expCatalogBtn').position().top;
    // $(window).scroll(function () {
    //     if($(this).scrollTop() > nav_pos) {
    //         $('.expCatalogBtn').addClass("fix");
    //     } else {
    //         $('.expCatalogBtn').removeClass("fix");
    //     }
    // }).triggerHandler('scroll');

    //checkbox/radio樣式 
    /*
        Custom checkbox and radio button - Jun 18, 2013
        (c) 2013 @ElmahdiMahmoud 
        license: https://www.opensource.org/licenses/mit-license.php
    */
    $('input[name="radio-btn"]').wrap('<div class="radio-btn"><i></i></div>');
    $(".radio-btn").on('click', function () {
        var _this = $(this),
        block = _this.parent().parent();
        block.find('input:radio').attr('checked', false);
        block.find(".radio-btn").removeClass('checkedRadio');
        _this.addClass('checkedRadio');
        _this.find('input:radio').attr('checked', true);
    });
    $('input[name="check-box"]').wrap('<div class="check-box"><i></i></div>');
    $.fn.toggleCheckbox = function () {
        this.attr('checked', !this.attr('checked'));
    }
    $('.check-box').on('click', function () {
        $(this).find(':checkbox').toggleCheckbox();
        $(this).toggleClass('checkedBox');
    });

    // 提醒視窗開啟fix body
    // $(function(){
    //     var _popupContBox = $('.popupContBox');
    //     $('.alert_btn').click(function() {
    //         _popupContBox.addClass('show');
    //         $('body').addClass('fixed');
    //     });
    //     _popupContBox.find('.close').click(function() {
    //         _popupContBox.removeClass('show');
    //         $('body').removeClass('fixed');
    //     });
        
    //     $('.alert_box').click(function(){
    //         _popupContBox.removeClass('show');
    //         $('body').removeClass('fixed');
    //     });
        
    // });

    // 內頁左側欄選單
    $('.sildeLeftMenu > ul > li > a.active').click(function(){
        var $cont = $(this).next('ul');
        
        if(!$cont.is(':visible')){
            $(this).parent("li").siblings().children("a.active").next('ul').slideUp();
            $(this).addClass('slideDown').parent("li").siblings().children("a.active").removeClass('slideDown');
        }
        else { 
            $(this).removeClass('slideDown'); 
        }$cont.slideToggle();
    }).siblings().hide();


    // 頁籤效果
    // 預設顯示第一個 Tab
    var _showTab = 0;
    $('.tabs_group').each(function(){
        // 目前的頁籤區塊
        var $tab = $(this),
            $tab_title = $tab.find('.tabs li'),
            $tab_cont = $tab.find('.tab_container .tab_cont');
        
        $tab_title.eq(_showTab).addClass('active');
        $tab_cont.eq(_showTab).addClass('active').siblings().removeClass('active');
        
        $($tab_title).click(function() {
            var $this = $(this),
                $thisIndex = $(this).index();
            $this.addClass('active').siblings().removeClass('active');
            $tab_cont.eq($thisIndex).addClass('active').siblings().removeClass('active');
            return false;
        })
    });

    //多個頁籤內容樣式
    //1024px以下用的效果
    $('.tab_cont .tab_title').click(function(){
        var $this = $(this);
            $tab_cont =  $(this).parent('.tab_cont');
            $thisIndex = $tab_cont.index();
            
        if(!$tab_cont.is('.active')){
            $this.parent('.tab_cont').addClass('active').siblings().removeClass('active');
            $this.parents('.tabs_group').find('.tabs ul li').eq($thisIndex).addClass('active').siblings().removeClass('active');   //把相同index位置的頁籤加上class,其他的則移除class
        }
        else {
            $this.parent('.tab_cont').removeClass('active')
            $this.parents('.tabs_group').find('.tabs ul li').eq($thisIndex).removeClass('active').siblings().removeClass('active');  //把相同index位置的頁籤移除class
        }
    }); 
    //檢查是不是'.tabs li'的class都被拿掉了
    function chickContTab(){
        if ($(window).width() > 960) {
            if(!$('.tabs_group .tabs li').is('.active')){
                $('.tabs_group .tabs li').eq(0).addClass('active');
                $('.tabs_group .tab_cont').eq(0).addClass('active');
            }
        }
    }
    $(window).on("resize", chickContTab);
    chickContTab();

	// 麵包列
	$('#Breadcrumbs ul li').last().addClass('last');
	
	// 文字列表
	$('.rwdTable td').each(function(){
		var _thText = $(this).parents('.rwdTable').find('th').eq($(this).index()).text();
		$(this).attr("data-th", _thText);
	});

	// 字級變化效果
	$(function () {
	    DefaultFontSize();
	    function DefaultFontSize() {
	        var FS = getCookie("FSize");
	        if (FS !== null) {
	            CFontSize(FS);
	        } else {
	            CFontSize('M');
	        }
	    }
	});

	$('.font_small a').click(function () {
	    CFontSize('S');

	});
	$('.font_medium a').click(function () {
	    CFontSize('M');

	});
	$('.font_big a').click(function () {
	    CFontSize('L');

	});

	function CFontSize(FSize) {
	    var FS = "M";
		var SetFontSize = "";

	    switch (FSize) {
	        case "L":
	            $('html').css('font-size', '1.25rem').addClass('fs3').removeClass('fs1 , fs2');
				SetFontSize = "1.25rem";
	            FS = "L";
	            break;
	        default:
	            $('html').css('font-size', '1rem').addClass('fs2').removeClass('fs1 , fs3');
				SetFontSize = "1rem";
	            FS = "M";
	            break;
			case "S":
	            $('html').css('font-size', '0.875rem').addClass('fs1').removeClass('fs2 , fs3');
				SetFontSize = "0.875rem";
	            FS = "S";
	            break;
	    }
		///Iframe 目標
		if($('#test_iframe')) {
			$('#test_iframe').contents().find("body").css('font-size',SetFontSize);
		}

	    setCookie("FSize", FS, 10);
	}

    //Cookie
	function getCookie(cname) {
	    var name = cname + "=";
	    var ca = document.cookie.split(';');
	    for (var i = 0; i < ca.length; i++) {
	        var c = ca[i];
	        while (c.charAt(0) == ' ') c = c.substring(1);
	        if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
	    }
	    return "";
	}
	function setCookie(cname, cvalue, exdays) {
	    var d = new Date();
	    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	    var expires = "expires=" + d.toUTCString();
	    document.cookie = cname + "=" + cvalue + "; " + expires;
	}
	
	//下拉選單樣式
	$(".select").on("change", function() {
	var o;
	var opt = $(this).find('option');
	opt.each(function(i) {
	if (opt[i].selected == true) {
	o = opt[i].innerHTML;
	}
	})
	$(this).find('label').html(o);
	}).trigger('change');
	
	//彈出視窗內的東西點選不觸發效果
	$(".popup_box > div").click(function(e){
		e.stopPropagation();
	});
					
});


/**
* jquery-match-height master by @liabru
* http://brm.io/jquery-match-height/
* License: MIT
*/

;(function(factory) { // eslint-disable-line no-extra-semi
    'use strict';
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery'], factory);
    } else if (typeof module !== 'undefined' && module.exports) {
        // CommonJS
        module.exports = factory(require('jquery'));
    } else {
        // Global
        factory(jQuery);
    }
})(function($) {
    /*
    *  internal
    */

    var _previousResizeWidth = -1,
        _updateTimeout = -1;

    /*
    *  _parse
    *  value parse utility function
    */

    var _parse = function(value) {
        // parse value and convert NaN to 0
        return parseFloat(value) || 0;
    };

    /*
    *  _rows
    *  utility function returns array of jQuery selections representing each row
    *  (as displayed after float wrapping applied by browser)
    */

    var _rows = function(elements) {
        var tolerance = 1,
            $elements = $(elements),
            lastTop = null,
            rows = [];

        // group elements by their top position
        $elements.each(function(){
            var $that = $(this),
                top = $that.offset().top - _parse($that.css('margin-top')),
                lastRow = rows.length > 0 ? rows[rows.length - 1] : null;

            if (lastRow === null) {
                // first item on the row, so just push it
                rows.push($that);
            } else {
                // if the row top is the same, add to the row group
                if (Math.floor(Math.abs(lastTop - top)) <= tolerance) {
                    rows[rows.length - 1] = lastRow.add($that);
                } else {
                    // otherwise start a new row group
                    rows.push($that);
                }
            }

            // keep track of the last row top
            lastTop = top;
        });

        return rows;
    };

    /*
    *  _parseOptions
    *  handle plugin options
    */

    var _parseOptions = function(options) {
        var opts = {
            byRow: true,
            property: 'height',
            target: null,
            remove: false
        };

        if (typeof options === 'object') {
            return $.extend(opts, options);
        }

        if (typeof options === 'boolean') {
            opts.byRow = options;
        } else if (options === 'remove') {
            opts.remove = true;
        }

        return opts;
    };

    /*
    *  matchHeight
    *  plugin definition
    */

    var matchHeight = $.fn.matchHeight = function(options) {
        var opts = _parseOptions(options);

        // handle remove
        if (opts.remove) {
            var that = this;

            // remove fixed height from all selected elements
            this.css(opts.property, '');

            // remove selected elements from all groups
            $.each(matchHeight._groups, function(key, group) {
                group.elements = group.elements.not(that);
            });

            // TODO: cleanup empty groups

            return this;
        }

        if (this.length <= 1 && !opts.target) {
            return this;
        }

        // keep track of this group so we can re-apply later on load and resize events
        matchHeight._groups.push({
            elements: this,
            options: opts
        });

        // match each element's height to the tallest element in the selection
        matchHeight._apply(this, opts);

        return this;
    };

    /*
    *  plugin global options
    */

    matchHeight.version = 'master';
    matchHeight._groups = [];
    matchHeight._throttle = 80;
    matchHeight._maintainScroll = false;
    matchHeight._beforeUpdate = null;
    matchHeight._afterUpdate = null;
    matchHeight._rows = _rows;
    matchHeight._parse = _parse;
    matchHeight._parseOptions = _parseOptions;

    /*
    *  matchHeight._apply
    *  apply matchHeight to given elements
    */

    matchHeight._apply = function(elements, options) {
        var opts = _parseOptions(options),
            $elements = $(elements),
            rows = [$elements];

        // take note of scroll position
        var scrollTop = $(window).scrollTop(),
            htmlHeight = $('html').outerHeight(true);

        // get hidden parents
        var $hiddenParents = $elements.parents().filter(':hidden');

        // cache the original inline style
        $hiddenParents.each(function() {
            var $that = $(this);
            $that.data('style-cache', $that.attr('style'));
        });

        // temporarily must force hidden parents visible
        $hiddenParents.css('display', 'block');

        // get rows if using byRow, otherwise assume one row
        if (opts.byRow && !opts.target) {

            // must first force an arbitrary equal height so floating elements break evenly
            $elements.each(function() {
                var $that = $(this),
                    display = $that.css('display');

                // temporarily force a usable display value
                if (display !== 'inline-block' && display !== 'flex' && display !== 'inline-flex') {
                    display = 'block';
                }

                // cache the original inline style
                $that.data('style-cache', $that.attr('style'));

                $that.css({
                    'display': display,
                    'padding-top': '0',
                    'padding-bottom': '0',
                    'margin-top': '0',
                    'margin-bottom': '0',
                    'border-top-width': '0',
                    'border-bottom-width': '0',
                    'height': '100px',
                    'overflow': 'hidden'
                });
            });

            // get the array of rows (based on element top position)
            rows = _rows($elements);

            // revert original inline styles
            $elements.each(function() {
                var $that = $(this);
                $that.attr('style', $that.data('style-cache') || '');
            });
        }

        $.each(rows, function(key, row) {
            var $row = $(row),
                targetHeight = 0;

            if (!opts.target) {
                // skip apply to rows with only one item
                if (opts.byRow && $row.length <= 1) {
                    $row.css(opts.property, '');
                    return;
                }

                // iterate the row and find the max height
                $row.each(function(){
                    var $that = $(this),
                        style = $that.attr('style'),
                        display = $that.css('display');

                    // temporarily force a usable display value
                    if (display !== 'inline-block' && display !== 'flex' && display !== 'inline-flex') {
                        display = 'block';
                    }

                    // ensure we get the correct actual height (and not a previously set height value)
                    var css = { 'display': display };
                    css[opts.property] = '';
                    $that.css(css);

                    // find the max height (including padding, but not margin)
                    if ($that.outerHeight(false) > targetHeight) {
                        targetHeight = $that.outerHeight(false);
                    }

                    // revert styles
                    if (style) {
                        $that.attr('style', style);
                    } else {
                        $that.css('display', '');
                    }
                });
            } else {
                // if target set, use the height of the target element
                targetHeight = opts.target.outerHeight(false);
            }

            // iterate the row and apply the height to all elements
            $row.each(function(){
                var $that = $(this),
                    verticalPadding = 0;

                // don't apply to a target
                if (opts.target && $that.is(opts.target)) {
                    return;
                }

                // handle padding and border correctly (required when not using border-box)
                if ($that.css('box-sizing') !== 'border-box') {
                    verticalPadding += _parse($that.css('border-top-width')) + _parse($that.css('border-bottom-width'));
                    verticalPadding += _parse($that.css('padding-top')) + _parse($that.css('padding-bottom'));
                }

                // set the height (accounting for padding and border)
                $that.css(opts.property, (targetHeight - verticalPadding) + 'px');
            });
        });

        // revert hidden parents
        $hiddenParents.each(function() {
            var $that = $(this);
            $that.attr('style', $that.data('style-cache') || null);
        });

        // restore scroll position if enabled
        if (matchHeight._maintainScroll) {
            $(window).scrollTop((scrollTop / htmlHeight) * $('html').outerHeight(true));
        }

        return this;
    };

    /*
    *  matchHeight._applyDataApi
    *  applies matchHeight to all elements with a data-match-height attribute
    */

    matchHeight._applyDataApi = function() {
        var groups = {};

        // generate groups by their groupId set by elements using data-match-height
        $('[data-match-height], [data-mh]').each(function() {
            var $this = $(this),
                groupId = $this.attr('data-mh') || $this.attr('data-match-height');

            if (groupId in groups) {
                groups[groupId] = groups[groupId].add($this);
            } else {
                groups[groupId] = $this;
            }
        });

        // apply matchHeight to each group
        $.each(groups, function() {
            this.matchHeight(true);
        });
    };

    /*
    *  matchHeight._update
    *  updates matchHeight on all current groups with their correct options
    */

    var _update = function(event) {
        if (matchHeight._beforeUpdate) {
            matchHeight._beforeUpdate(event, matchHeight._groups);
        }

        $.each(matchHeight._groups, function() {
            matchHeight._apply(this.elements, this.options);
        });

        if (matchHeight._afterUpdate) {
            matchHeight._afterUpdate(event, matchHeight._groups);
        }
    };

    matchHeight._update = function(throttle, event) {
        // prevent update if fired from a resize event
        // where the viewport width hasn't actually changed
        // fixes an event looping bug in IE8
        if (event && event.type === 'resize') {
            var windowWidth = $(window).width();
            if (windowWidth === _previousResizeWidth) {
                return;
            }
            _previousResizeWidth = windowWidth;
        }

        // throttle updates
        if (!throttle) {
            _update(event);
        } else if (_updateTimeout === -1) {
            _updateTimeout = setTimeout(function() {
                _update(event);
                _updateTimeout = -1;
            }, matchHeight._throttle);
        }
    };

    /*
    *  bind events
    */

    // apply on DOM ready event
    $(matchHeight._applyDataApi);

    // use on or bind where supported
    var on = $.fn.on ? 'on' : 'bind';

    // update heights on load and resize events
    $(window)[on]('load', function(event) {
        matchHeight._update(false, event);
    });

    // throttled update heights on resize events
    $(window)[on]('resize orientationchange', function(event) {
        matchHeight._update(true, event);
    });

});


jQuery(document).ready(function($) {
	$('.eqHeight').each(function() {
		$(this).children('.item').matchHeight({});
	});
});
$(window).resize(function(){
	$('.eqHeight').each(function() {
		$(this).children('.item').matchHeight('update');
	});
});
$(function() {
	$('.font_size a').click(function(){
		$('.eqHeight').each(function() {
			$(this).children('.item').matchHeight('update');
		});
	});
});



// fix_ie_placeholder
//function fix_ie_placeholder()
{
    $("[placeholder]").each(function(){
        var el = $(this);
        var placeholder = el.attr("placeholder");
        if(el.prop("type")=="password")//處理密碼欄位
        {
            el.focus(function ()
            {
                $(this).prop("type","password");
                if($(this).val() == $(this).attr("placeholder"))
                {
                    $(this).val('').removeClass("placeholderColor");
                }
            }).blur(function ()
            {
                if($(this).val()=='')
                {
                    $(this).prop("type","text");
                    $(this).val($(this).attr("placeholder")).addClass("placeholderColor");
                }
            });
            //不採用 el.blur(); 可能會改到預設 focus() 的輸入框
            //值相同時，也要修改文字顏色
            if(el.val()==''||el.val()==el.attr("placeholder"))
            {
                el.prop("type","text");
                el.val($(this).attr("placeholder")).addClass("placeholderColor");
            }
        }
        else //處理非密碼欄位
        {
            el.focus(function ()
            {
                if($(this).val() == $(this).attr("placeholder"))
                {
                    $(this).val('').removeClass("placeholderColor");
                }
            }).blur(function ()
            {
                if($(this).val()=='')
                {
                    $(this).val($(this).attr("placeholder")).addClass("placeholderColor");
                }
            });
            //不採用 el.blur(); 可能會改到預設 focus() 的輸入框
            //值相同時，也要修改文字顏色
            if(el.val()==''||el.val()==el.attr("placeholder"))
            {
                el.val($(this).attr("placeholder")).addClass("placeholderColor");
            }
        }
    });
}
//送出表單時呼叫，欄位值若等於 placeholder 的值就清空
function clearPlaceholderValue()
{
    $("[placeholder]").each(function(){
        if($(this).val()==$(this).attr("placeholder"))
        {
            $(this).val("");
        }
    });
}
$(function(){
    //fix_ie_placeholder();
    //監聽 submit 事件，此動作會在 onsubmit 後，尚未轉頁前執行
    if(typeof window.addEventListener != "undefined") {
        window.addEventListener("submit",clearPlaceholderValue);
    } else {
        $("form").each(function(){
            this.attachEvent("onsubmit",clearPlaceholderValue);
        });
    }
});

//jquery.jscrollpane.min.js
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e(jQuery||require("jquery")):e(jQuery)}(function(be){be.fn.jScrollPane=function(o){function s(w,e){var y,b,k,T,C,S,x,D,B,H,P,z,A,W,Y,M,X,L,R,t,E,I,F,V,q,O,G,N,K,Q,U,$,J,Z,_=this,r=!0,a=!0,l=!1,c=!1,o=w.clone(!1,!1).empty(),ee=!1,te=be.fn.mwheelIntent?"mwheelIntent.jsp":"mousewheel.jsp",oe=function(){0<y.resizeSensorDelay?setTimeout(function(){se(y)},y.resizeSensorDelay):se(y)};function se(e){var t,o,s,i,n,r,a,l,c,p,u,d,f,h,g,j,v=!1,m=!1;if(y=e,void 0===b)n=w.scrollTop(),r=w.scrollLeft(),w.css({overflow:"hidden",padding:0}),k=w.innerWidth()+J,T=w.innerHeight(),w.width(k),b=be('<div class="jspPane" />').css("padding",$).append(w.children()),C=be('<div class="jspContainer" />').css({width:k+"px",height:T+"px"}).append(b).appendTo(w);else{if(w.css("width",""),C.css({width:"auto",height:"auto"}),b.css("position","static"),a=w.innerWidth()+J,l=w.innerHeight(),b.css("position","absolute"),v=y.stickToBottom&&(20<(p=x-T)&&p-we()<10),m=y.stickToRight&&(20<(c=S-k)&&c-me()<10),i=a!==k||l!==T,k=a,T=l,C.css({width:k,height:T}),!i&&Z==S&&b.outerHeight()==x)return void w.width(k);Z=S,b.css("width",""),w.width(k),C.find(">.jspVerticalBar,>.jspHorizontalBar").remove().end()}b.css("overflow","auto"),S=e.contentWidth?e.contentWidth:b[0].scrollWidth,x=b[0].scrollHeight,b.css("overflow",""),D=S/k,H=1<(B=x/T)||y.alwaysShowVScroll,(P=1<D||y.alwaysShowHScroll)||H?(w.addClass("jspScrollable"),(t=y.maintainPosition&&(W||X))&&(o=me(),s=we()),H&&(C.append(be('<div class="jspVerticalBar" />').append(be('<div class="jspCap jspCapTop" />'),be('<div class="jspTrack" />').append(be('<div class="jspDrag" />').append(be('<div class="jspDragTop" />'),be('<div class="jspDragBottom" />'))),be('<div class="jspCap jspCapBottom" />'))),L=C.find(">.jspVerticalBar"),R=L.find(">.jspTrack"),z=R.find(">.jspDrag"),y.showArrows&&(F=be('<a class="jspArrow jspArrowUp" />').on("mousedown.jsp",le(0,-1)).on("click.jsp",ye),V=be('<a class="jspArrow jspArrowDown" />').on("mousedown.jsp",le(0,1)).on("click.jsp",ye),y.arrowScrollOnHover&&(F.on("mouseover.jsp",le(0,-1,F)),V.on("mouseover.jsp",le(0,1,V))),ae(R,y.verticalArrowPositions,F,V)),E=T,C.find(">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow").each(function(){E-=be(this).outerHeight()}),z.on("mouseenter",function(){z.addClass("jspHover")}).on("mouseleave",function(){z.removeClass("jspHover")}).on("mousedown.jsp",function(e){be("html").on("dragstart.jsp selectstart.jsp",ye),z.addClass("jspActive");var t=e.pageY-z.position().top;return be("html").on("mousemove.jsp",function(e){ue(e.pageY-t,!1)}).on("mouseup.jsp mouseleave.jsp",pe),!1}),ne()),P&&(C.append(be('<div class="jspHorizontalBar" />').append(be('<div class="jspCap jspCapLeft" />'),be('<div class="jspTrack" />').append(be('<div class="jspDrag" />').append(be('<div class="jspDragLeft" />'),be('<div class="jspDragRight" />'))),be('<div class="jspCap jspCapRight" />'))),q=C.find(">.jspHorizontalBar"),O=q.find(">.jspTrack"),Y=O.find(">.jspDrag"),y.showArrows&&(K=be('<a class="jspArrow jspArrowLeft" />').on("mousedown.jsp",le(-1,0)).on("click.jsp",ye),Q=be('<a class="jspArrow jspArrowRight" />').on("mousedown.jsp",le(1,0)).on("click.jsp",ye),y.arrowScrollOnHover&&(K.on("mouseover.jsp",le(-1,0,K)),Q.on("mouseover.jsp",le(1,0,Q))),ae(O,y.horizontalArrowPositions,K,Q)),Y.on("mouseenter",function(){Y.addClass("jspHover")}).on("mouseleave",function(){Y.removeClass("jspHover")}).on("mousedown.jsp",function(e){be("html").on("dragstart.jsp selectstart.jsp",ye),Y.addClass("jspActive");var t=e.pageX-Y.position().left;return be("html").on("mousemove.jsp",function(e){fe(e.pageX-t,!1)}).on("mouseup.jsp mouseleave.jsp",pe),!1}),G=C.innerWidth(),re()),function(){if(P&&H){var e=O.outerHeight(),t=R.outerWidth();E-=e,be(q).find(">.jspCap:visible,>.jspArrow").each(function(){G+=be(this).outerWidth()}),G-=t,T-=t,k-=e,O.parent().append(be('<div class="jspCorner" />').css("width",e+"px")),ne(),re()}P&&b.width(C.outerWidth()-J+"px");x=b.outerHeight(),B=x/T,P&&((N=Math.ceil(1/D*G))>y.horizontalDragMaxWidth?N=y.horizontalDragMaxWidth:N<y.horizontalDragMinWidth&&(N=y.horizontalDragMinWidth),Y.css("width",N+"px"),M=G-N,he(X));H&&((I=Math.ceil(1/B*E))>y.verticalDragMaxHeight?I=y.verticalDragMaxHeight:I<y.verticalDragMinHeight&&(I=y.verticalDragMinHeight),z.css("height",I+"px"),A=E-I,de(W))}(),t&&(je(m?S-k:o,!1),ge(v?x-T:s,!1)),b.find(":input,a").off("focus.jsp").on("focus.jsp",function(e){ve(e.target,!1)}),C.off(te).on(te,function(e,t,o,s){X||(X=0),W||(W=0);var i=X,n=W,r=e.deltaFactor||y.mouseWheelSpeed;return _.scrollBy(o*r,-s*r,!1),i==X&&n==W}),j=!1,C.off("touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick").on("touchstart.jsp",function(e){var t=e.originalEvent.touches[0];u=me(),d=we(),f=t.pageX,h=t.pageY,j=!(g=!1)}).on("touchmove.jsp",function(e){if(j){var t=e.originalEvent.touches[0],o=X,s=W;return _.scrollTo(u+f-t.pageX,d+h-t.pageY),g=g||5<Math.abs(f-t.pageX)||5<Math.abs(h-t.pageY),o==X&&s==W}}).on("touchend.jsp",function(e){j=!1}).on("click.jsp-touchclick",function(e){if(g)return g=!1}),y.enableKeyboardNavigation&&function(){var s,i,n=[];P&&n.push(q[0]);H&&n.push(L[0]);b.on("focus.jsp",function(){w.focus()}),w.attr("tabindex",0).off("keydown.jsp keypress.jsp").on("keydown.jsp",function(e){if(e.target===this||n.length&&be(e.target).closest(n).length){var t=X,o=W;switch(e.keyCode){case 40:case 38:case 34:case 32:case 33:case 39:case 37:s=e.keyCode,r();break;case 35:ge(x-T),s=null;break;case 36:ge(0),s=null}return!(i=e.keyCode==s&&t!=X||o!=W)}}).on("keypress.jsp",function(e){if(e.keyCode==s&&r(),e.target===this||n.length&&be(e.target).closest(n).length)return!i}),y.hideFocus?(w.css("outline","none"),"hideFocus"in C[0]&&w.attr("hideFocus",!0)):(w.css("outline",""),"hideFocus"in C[0]&&w.attr("hideFocus",!1));function r(){var e=X,t=W;switch(s){case 40:_.scrollByY(y.keyboardSpeed,!1);break;case 38:_.scrollByY(-y.keyboardSpeed,!1);break;case 34:case 32:_.scrollByY(T*y.scrollPagePercent,!1);break;case 33:_.scrollByY(-T*y.scrollPagePercent,!1);break;case 39:_.scrollByX(y.keyboardSpeed,!1);break;case 37:_.scrollByX(-y.keyboardSpeed,!1)}return i=e!=X||t!=W}}(),y.clickOnTrack&&function(){ce(),H&&R.on("mousedown.jsp",function(i){if(void 0===i.originalTarget||i.originalTarget==i.currentTarget){var n,r=be(this),e=r.offset(),a=i.pageY-e.top-W,l=!0,c=function(){var e=r.offset(),t=i.pageY-e.top-I/2,o=T*y.scrollPagePercent,s=A*o/(x-T);if(a<0)t<W-s?_.scrollByY(-o):ue(t);else{if(!(0<a))return void p();W+s<t?_.scrollByY(o):ue(t)}n=setTimeout(c,l?y.initialDelay:y.trackClickRepeatFreq),l=!1},p=function(){n&&clearTimeout(n),n=null,be(document).off("mouseup.jsp",p)};return c(),be(document).on("mouseup.jsp",p),!1}});P&&O.on("mousedown.jsp",function(i){if(void 0===i.originalTarget||i.originalTarget==i.currentTarget){var n,r=be(this),e=r.offset(),a=i.pageX-e.left-X,l=!0,c=function(){var e=r.offset(),t=i.pageX-e.left-N/2,o=k*y.scrollPagePercent,s=M*o/(S-k);if(a<0)t<X-s?_.scrollByX(-o):fe(t);else{if(!(0<a))return void p();X+s<t?_.scrollByX(o):fe(t)}n=setTimeout(c,l?y.initialDelay:y.trackClickRepeatFreq),l=!1},p=function(){n&&clearTimeout(n),n=null,be(document).off("mouseup.jsp",p)};return c(),be(document).on("mouseup.jsp",p),!1}})}(),function(){if(location.hash&&1<location.hash.length){var e,t,o=escape(location.hash.substr(1));try{e=be("#"+o+', a[name="'+o+'"]')}catch(e){return}e.length&&b.find(o)&&(0===C.scrollTop()?t=setInterval(function(){0<C.scrollTop()&&(ve(e,!0),be(document).scrollTop(C.position().top),clearInterval(t))},50):(ve(e,!0),be(document).scrollTop(C.position().top)))}}(),y.hijackInternalLinks&&function(){if(be(document.body).data("jspHijack"))return;be(document.body).data("jspHijack",!0),be(document.body).delegate('a[href*="#"]',"click",function(e){var t,o,s,i,n,r=this.href.substr(0,this.href.indexOf("#")),a=location.href;if(-1!==location.href.indexOf("#")&&(a=location.href.substr(0,location.href.indexOf("#"))),r===a){t=escape(this.href.substr(this.href.indexOf("#")+1));try{o=be("#"+t+', a[name="'+t+'"]')}catch(e){return}o.length&&(s=o.closest(".jspScrollable"),s.data("jsp").scrollToElement(o,!0),s[0].scrollIntoView&&(i=be(window).scrollTop(),((n=o.offset().top)<i||n>i+be(window).height())&&s[0].scrollIntoView()),e.preventDefault())}})}()):(w.removeClass("jspScrollable"),b.css({top:0,left:0,width:C.width()-J}),C.off(te),b.find(":input,a").off("focus.jsp"),w.attr("tabindex","-1").removeAttr("tabindex").off("keydown.jsp keypress.jsp"),b.off(".jsp"),ce()),y.resizeSensor||!y.autoReinitialise||U?y.resizeSensor||y.autoReinitialise||!U||clearInterval(U):U=setInterval(function(){se(y)},y.autoReinitialiseDelay),y.resizeSensor&&!ee&&(ie(b,oe),ie(w,oe),ie(w.parent(),oe),window.addEventListener("resize",oe),ee=!0),n&&w.scrollTop(0)&&ge(n,!1),r&&w.scrollLeft(0)&&je(r,!1),w.trigger("jsp-initialised",[P||H])}function ie(e,t){var o,s,i=document.createElement("div"),n=document.createElement("div"),r=document.createElement("div"),a=document.createElement("div"),l=document.createElement("div");i.style.cssText="position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: scroll; z-index: -1; visibility: hidden;",n.style.cssText="position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: scroll; z-index: -1; visibility: hidden;",a.style.cssText="position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: scroll; z-index: -1; visibility: hidden;",r.style.cssText="position: absolute; left: 0; top: 0;",l.style.cssText="position: absolute; left: 0; top: 0; width: 200%; height: 200%;";var c=function(){r.style.width=n.offsetWidth+10+"px",r.style.height=n.offsetHeight+10+"px",n.scrollLeft=n.scrollWidth,n.scrollTop=n.scrollHeight,a.scrollLeft=a.scrollWidth,a.scrollTop=a.scrollHeight,o=e.width(),s=e.height()};n.addEventListener("scroll",function(){(e.width()>o||e.height()>s)&&t.apply(this,[]),c()}.bind(this)),a.addEventListener("scroll",function(){(e.width()<o||e.height()<s)&&t.apply(this,[]),c()}.bind(this)),n.appendChild(r),a.appendChild(l),i.appendChild(n),i.appendChild(a),e.append(i),"static"===window.getComputedStyle(e[0],null).getPropertyValue("position")&&(e[0].style.position="relative"),c()}function ne(){R.height(E+"px"),W=0,t=y.verticalGutter+R.outerWidth(),b.width(k-t-J);try{0===L.position().left&&b.css("margin-left",t+"px")}catch(e){}}function re(){C.find(">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow").each(function(){G-=be(this).outerWidth()}),O.width(G+"px"),X=0}function ae(e,t,o,s){var i,n="before",r="after";"os"==t&&(t=/Mac/.test(navigator.platform)?"after":"split"),t==n?r=t:t==r&&(n=t,i=o,o=s,s=i),e[n](o)[r](s)}function le(e,t,o){return function(){return function(e,t,o,s){o=be(o).addClass("jspActive");var i,n,r=!0,a=function(){0!==e&&_.scrollByX(e*y.arrowButtonSpeed),0!==t&&_.scrollByY(t*y.arrowButtonSpeed),n=setTimeout(a,r?y.initialDelay:y.arrowRepeatFreq),r=!1};a(),i=s?"mouseout.jsp":"mouseup.jsp",(s=s||be("html")).on(i,function(){o.removeClass("jspActive"),n&&clearTimeout(n),n=null,s.off(i)})}(e,t,this,o),this.blur(),!1}}function ce(){O&&O.off("mousedown.jsp"),R&&R.off("mousedown.jsp")}function pe(){be("html").off("dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp"),z&&z.removeClass("jspActive"),Y&&Y.removeClass("jspActive")}function ue(e,t){if(H){e<0?e=0:A<e&&(e=A);var o=new be.Event("jsp-will-scroll-y");if(w.trigger(o,[e]),!o.isDefaultPrevented()){var s=e||0,i=0===s,n=s==A,r=-(e/A)*(x-T);void 0===t&&(t=y.animateScroll),t?_.animate(z,"top",e,de,function(){w.trigger("jsp-user-scroll-y",[-r,i,n])}):(z.css("top",e),de(e),w.trigger("jsp-user-scroll-y",[-r,i,n]))}}}function de(e){void 0===e&&(e=z.position().top),C.scrollTop(0);var t,o,s=0===(W=e||0),i=W==A,n=-(e/A)*(x-T);r==s&&l==i||(r=s,l=i,w.trigger("jsp-arrow-change",[r,l,a,c])),t=s,o=i,y.showArrows&&(F[t?"addClass":"removeClass"]("jspDisabled"),V[o?"addClass":"removeClass"]("jspDisabled")),b.css("top",n),w.trigger("jsp-scroll-y",[-n,s,i]).trigger("scroll")}function fe(e,t){if(P){e<0?e=0:M<e&&(e=M);var o=new be.Event("jsp-will-scroll-x");if(w.trigger(o,[e]),!o.isDefaultPrevented()){var s=e||0,i=0===s,n=s==M,r=-(e/M)*(S-k);void 0===t&&(t=y.animateScroll),t?_.animate(Y,"left",e,he,function(){w.trigger("jsp-user-scroll-x",[-r,i,n])}):(Y.css("left",e),he(e),w.trigger("jsp-user-scroll-x",[-r,i,n]))}}}function he(e){void 0===e&&(e=Y.position().left),C.scrollTop(0);var t,o,s=0===(X=e||0),i=X==M,n=-(e/M)*(S-k);a==s&&c==i||(a=s,c=i,w.trigger("jsp-arrow-change",[r,l,a,c])),t=s,o=i,y.showArrows&&(K[t?"addClass":"removeClass"]("jspDisabled"),Q[o?"addClass":"removeClass"]("jspDisabled")),b.css("left",n),w.trigger("jsp-scroll-x",[-n,s,i]).trigger("scroll")}function ge(e,t){ue(e/(x-T)*A,t)}function je(e,t){fe(e/(S-k)*M,t)}function ve(e,t,o){var s,i,n,r,a,l,c,p,u,d=0,f=0;try{s=be(e)}catch(e){return}for(i=s.outerHeight(),n=s.outerWidth(),C.scrollTop(0),C.scrollLeft(0);!s.is(".jspPane");)if(d+=s.position().top,f+=s.position().left,s=s.offsetParent(),/^body|html$/i.test(s[0].nodeName))return;l=(r=we())+T,d<r||t?p=d-y.horizontalGutter:l<d+i&&(p=d-T+i+y.horizontalGutter),isNaN(p)||ge(p,o),c=(a=me())+k,f<a||t?u=f-y.horizontalGutter:c<f+n&&(u=f-k+n+y.horizontalGutter),isNaN(u)||je(u,o)}function me(){return-b.position().left}function we(){return-b.position().top}function ye(){return!1}"border-box"===w.css("box-sizing")?J=$=0:($=w.css("paddingTop")+" "+w.css("paddingRight")+" "+w.css("paddingBottom")+" "+w.css("paddingLeft"),J=(parseInt(w.css("paddingLeft"),10)||0)+(parseInt(w.css("paddingRight"),10)||0)),be.extend(_,{reinitialise:function(e){se(e=be.extend({},y,e))},scrollToElement:function(e,t,o){ve(e,t,o)},scrollTo:function(e,t,o){je(e,o),ge(t,o)},scrollToX:function(e,t){je(e,t)},scrollToY:function(e,t){ge(e,t)},scrollToPercentX:function(e,t){je(e*(S-k),t)},scrollToPercentY:function(e,t){ge(e*(x-T),t)},scrollBy:function(e,t,o){_.scrollByX(e,o),_.scrollByY(t,o)},scrollByX:function(e,t){fe((me()+Math[e<0?"floor":"ceil"](e))/(S-k)*M,t)},scrollByY:function(e,t){ue((we()+Math[e<0?"floor":"ceil"](e))/(x-T)*A,t)},positionDragX:function(e,t){fe(e,t)},positionDragY:function(e,t){ue(e,t)},animate:function(e,t,o,s,i){var n={};n[t]=o,e.animate(n,{duration:y.animateDuration,easing:y.animateEase,queue:!1,step:s,complete:i})},getContentPositionX:function(){return me()},getContentPositionY:function(){return we()},getContentWidth:function(){return S},getContentHeight:function(){return x},getPercentScrolledX:function(){return me()/(S-k)},getPercentScrolledY:function(){return we()/(x-T)},getIsScrollableH:function(){return P},getIsScrollableV:function(){return H},getContentPane:function(){return b},scrollToBottom:function(e){ue(A,e)},hijackInternalLinks:be.noop,destroy:function(){var e,t;e=we(),t=me(),w.removeClass("jspScrollable").off(".jsp"),b.off(".jsp"),w.replaceWith(o.append(b.children())),o.scrollTop(e),o.scrollLeft(t),U&&clearInterval(U)}}),se(e)}return o=be.extend({},be.fn.jScrollPane.defaults,o),be.each(["arrowButtonSpeed","trackClickSpeed","keyboardSpeed"],function(){o[this]=o[this]||o.speed}),this.each(function(){var e=be(this),t=e.data("jsp");t?t.reinitialise(o):(be("script",e).filter('[type="text/javascript"],:not([type])').remove(),t=new s(e,o),e.data("jsp",t))})},be.fn.jScrollPane.defaults={showArrows:!1,maintainPosition:!0,stickToBottom:!1,stickToRight:!1,clickOnTrack:!0,autoReinitialise:!1,autoReinitialiseDelay:500,verticalDragMinHeight:0,verticalDragMaxHeight:99999,horizontalDragMinWidth:0,horizontalDragMaxWidth:99999,contentWidth:void 0,animateScroll:!1,animateDuration:300,animateEase:"linear",hijackInternalLinks:!1,verticalGutter:4,horizontalGutter:4,mouseWheelSpeed:3,arrowButtonSpeed:0,arrowRepeatFreq:50,arrowScrollOnHover:!1,trackClickSpeed:0,trackClickRepeatFreq:70,verticalArrowPositions:"split",horizontalArrowPositions:"split",enableKeyboardNavigation:!0,hideFocus:!1,keyboardSpeed:0,initialDelay:300,speed:30,scrollPagePercent:.8,alwaysShowVScroll:!1,alwaysShowHScroll:!1,resizeSensor:!1,resizeSensorDelay:0}});

//--------------------------------------------------------------------------------------
/*
 * jQuery One Page Nav Plugin
 * http://github.com/davist11/jQuery-One-Page-Nav
 *
 * Copyright (c) 2010 Trevor Davis (http://trevordavis.net)
 * Dual licensed under the MIT and GPL licenses.
 * Uses the same license as jQuery, see:
 * http://jquery.org/license
 *
 * @version 3.0.0
 *
 * Example usage:
 * $('#nav').onePageNav({
 *   currentClass: 'current',
 *   changeHash: false,
 *   scrollSpeed: 750
 * });
 */

;(function($, window, document, undefined){

    // our plugin constructor
    var OnePageNav = function(elem, options){
        this.elem = elem;
        this.$elem = $(elem);
        this.options = options;
        this.metadata = this.$elem.data('plugin-options');
        this.$win = $(window);
        this.sections = {};
        this.didScroll = false;
        this.$doc = $(document);
        this.docHeight = this.$doc.height();
    };

    // the plugin prototype
    OnePageNav.prototype = {
        defaults: {
            navItems: 'a',
            currentClass: 'current',
            changeHash: false,
            easing: 'swing',
            filter: '',
            scrollSpeed: 750,
            scrollThreshold: 0.5,
            begin: false,
            end: false,
            scrollChange: false
        },

        init: function() {
            // Introduce defaults that can be extended either
            // globally or using an object literal.
            this.config = $.extend({}, this.defaults, this.options, this.metadata);

            this.$nav = this.$elem.find(this.config.navItems);

            //Filter any links out of the nav
            if(this.config.filter !== '') {
                this.$nav = this.$nav.filter(this.config.filter);
            }

            //Handle clicks on the nav
            this.$nav.on('click.onePageNav', $.proxy(this.handleClick, this));

            //Get the section positions
            this.getPositions();

            //Handle scroll changes
            this.bindInterval();

            //Update the positions on resize too
            this.$win.on('resize.onePageNav', $.proxy(this.getPositions, this));

            return this;
        },

        adjustNav: function(self, $parent) {
            self.$elem.find('.' + self.config.currentClass).removeClass(self.config.currentClass);
            $parent.addClass(self.config.currentClass);
        },

        bindInterval: function() {
            var self = this;
            var docHeight;

            self.$win.on('scroll.onePageNav', function() {
                self.didScroll = true;
            });

            self.t = setInterval(function() {
                docHeight = self.$doc.height();

                //If it was scrolled
                if(self.didScroll) {
                    self.didScroll = false;
                    self.scrollChange();
                }

                //If the document height changes
                if(docHeight !== self.docHeight) {
                    self.docHeight = docHeight;
                    self.getPositions();
                }
            }, 250);
        },

        getHash: function($link) {
            return $link.attr('href').split('#')[1];
        },

        getPositions: function() {
            var self = this;
            var linkHref;
            var topPos;
            var $target;

            self.$nav.each(function() {
                linkHref = self.getHash($(this));
                $target = $('#' + linkHref);

                if($target.length) {
                    topPos = $target.offset().top;
                    self.sections[linkHref] = Math.round(topPos);
                }
            });
        },

        getSection: function(windowPos) {
            var returnValue = null;
            var windowHeight = Math.round(this.$win.height() * this.config.scrollThreshold);

            for(var section in this.sections) {
                if((this.sections[section] - windowHeight) < windowPos) {
                    returnValue = section;
                }
            }

            return returnValue;
        },

        handleClick: function(e) {
            var self = this;
            var $link = $(e.currentTarget);
            var $parent = $link.parent();
            var newLoc = '#' + self.getHash($link);

            if(!$parent.hasClass(self.config.currentClass)) {
                //Start callback
                if(self.config.begin) {
                    self.config.begin();
                }

                //Change the highlighted nav item
                self.adjustNav(self, $parent);

                //Removing the auto-adjust on scroll
                self.unbindInterval();

                //Scroll to the correct position
                self.scrollTo(newLoc, function() {
                    //Do we need to change the hash?
                    if(self.config.changeHash) {
                        window.location.hash = newLoc;
                    }

                    //Add the auto-adjust on scroll back in
                    self.bindInterval();

                    //End callback
                    if(self.config.end) {
                        self.config.end();
                    }
                });
            }

            e.preventDefault();
        },

        scrollChange: function() {
            var windowTop = this.$win.scrollTop();
            var position = this.getSection(windowTop);
            var $parent;

            //If the position is set
            if(position !== null) {
                $parent = this.$elem.find('a[href$="#' + position + '"]').parent();

                //If it's not already the current section
                if(!$parent.hasClass(this.config.currentClass)) {
                    //Change the highlighted nav item
                    this.adjustNav(this, $parent);

                    //If there is a scrollChange callback
                    if(this.config.scrollChange) {
                        this.config.scrollChange($parent);
                    }
                }
            }
        },

        scrollTo: function(target, callback) {
            var offset = $(target).offset().top - 80;//皜𥕦縧header��擃睃漲

            $('html, body').animate({
                scrollTop: offset
            }, this.config.scrollSpeed, this.config.easing, callback);
        },

        unbindInterval: function() {
            clearInterval(this.t);
            this.$win.unbind('scroll.onePageNav');
        }
    };

    OnePageNav.defaults = OnePageNav.prototype.defaults;

    $.fn.onePageNav = function(options) {
        return this.each(function() {
            new OnePageNav(this, options).init();
        });
    };
    
})( jQuery, window , document );






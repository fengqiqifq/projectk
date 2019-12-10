;(function ($) {
    'use strict';
    $.fn.extend({
        fade (options) {
            var obj = {} // 字面量对象
            // console.log(options)
            // console.log('轮播图')
            // 1、通过解构赋值获取轮播图的参数
            var { imgs, prev, next, points, autoplay, delay, current, duration } = options
            // 2、为可选参数设置默认值
            autoplay = autoplay === false ? false : true // 自动轮播
            delay = delay || 3000 // 自动轮播的时长
            current = current || 0 // 默认显示的是哪一个图片
            duration = duration || 300 // 每次动画时长
            // 3、获取图片的个数
            var len = imgs.length
            // console.log(len)

            // 4、默认的图片显示
            ani(current)

            // 5、点击下一页
            next.on('click', function () {
                current++
                if (current === len) {
                    current = 0
                }
                ani(current)
            })

            // 6、点击上一页
            prev.on('click', function () {
                current--
                if (current === -1) {
                    current = len - 1
                }
                ani(current)
            })

            // 7、显示小圆点 并且给默认的图片对应的小圆点加样式
            for (var i = 0; i < len; i++) {
                points.append('<li></li>')
            }
            points.find('li').eq(current).addClass('active').siblings().removeClass('active')

            // 8、自动轮播
            var timer = null
            if (autoplay) {
                timer = setInterval(function () {
                    next.click()
                }, delay)
            }

            // 9、鼠标滑过事件 -- 取消自动轮播，鼠标移除，重新自动轮播
            // console.log(this)
            if (autoplay) {
                this.hover(function () {
                    clearInterval(timer)
                }, function () {
                    timer = setInterval(function () {
                        next.click()
                    }, delay)
                })
            }

            // 10、小圆点滑过切换
            points.find('li').on('mouseenter', function () {
                current = $(this).index()
                ani(current)
            })

            // 封装动画的函数
            function ani (current) {
                points.find('li').eq(current).addClass('active').siblings().removeClass('active')
                imgs.eq(current).stop().fadeIn(duration).siblings().stop().fadeOut(duration)
            }
        }
    })
})(jQuery);


$('.banner1').fade({
	imgs: $('.banner1').find('.items').find('img'), // 必选
	prev: $('.banner1').find('.prev'), // 必选，上一页按钮
	next: $('.banner1').find('.next'), // 必选, 下一页按钮
	points: $('.banner1').find('.points'), // 可选，小圆点
	autoplay: true,  // 可选, 默认为true
	delay: 3000, // 可选，默认为3000
	current: 0, // 可选， 默认是第0张图片显示
	duration: 500 // 可选， 默认为300 -- 动画时长
})
let cursorX=0,cursorY=0,mouseX=0,mouseY=0;const dampingFactor=.2;function animateCursor(){cursorX+=(mouseX-cursorX)*.2,cursorY+=(mouseY-cursorY)*.2,$("#custom-cursor").css({top:cursorY,left:cursorX}),requestAnimationFrame(animateCursor)}$(".button-action").on("mouseenter",function(){$("#custom-cursor").addClass("custom-cursor-active")}).on("mouseleave",function(){$("#custom-cursor").removeClass("custom-cursor-active")}),$(".button-primary").on("mouseenter",function(){$("#custom-cursor").addClass("custom-cursor-active")}).on("mouseleave",function(){$("#custom-cursor").removeClass("custom-cursor-active")}),$(document).on("mousemove",function(o){mouseX=o.clientX,mouseY=o.clientY}),$(document).on("mouseleave",function(){$("#custom-cursor").css("opacity","0")}),$(document).on("mouseenter",function(){$("#custom-cursor").css("opacity","1")}),requestAnimationFrame(animateCursor),$(document).ready(function(){$(".play-btn").click(function(){let o=$(this).attr("data-sound");$("#"+o)[0].play(),$(this).hide(),$(".pause-btn[data-sound="+o+"]").show()}),$(".pause-btn").click(function(){let o=$(this).attr("data-sound");$("#"+o)[0].pause(),$(this).hide(),$(".play-btn[data-sound="+o+"]").show()});let o=$(".above-the-fold-container").height(),t=$(".second-section").height()/2,s=o+t;$(window).on("scroll",function(){let u=$(window).scrollTop();u>=o&&u<=s&&$(".zoom-bg").css("background-size",`auto ${80+200*(1-(u-o)/t)}%`)}),$(".enter .button-primary").click(function(){let o=$(this).attr("data-sound");$("#"+o)[0].play(),$(".play-btn").hide(),$(".pause-btn[data-sound="+o+"]").show(),$(".enter").addClass("fade-out"),setTimeout(function(){$(".enter").hide()},900),$("html, body").animate({scrollTop:0},"slow")})});
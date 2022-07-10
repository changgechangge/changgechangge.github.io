/*随机背景*/
//随机背景图片数组,图片可以换成图床链接，注意最后一条后面不要有逗号
var backimg =[
  "url(/img/background_img/bg1.jpg)",
  "url(/img/background_img/bg2.jpg)",
  "url(/img/background_img/bg3.jpeg)",
  "url(/img/background_img/bg4.jpeg)"
];
//获取背景图片总数，生成随机数
var bgindex =Math.ceil(Math.random() * (backimg.length-1));
//重设背景图片
document.getElementById("web_bg").style.backgroundImage = backimg[bgindex];
//随机banner数组,图片可以换成图床链接，注意最后一条后面不要有逗号
var bannerimg =[
  "url(/img/background_img/bg1.jpg)",
  "url(/img/background_img/bg2.jpg)",
  "url(/img/background_img/bg3.jpeg)",
  "url(/img/background_img/bg4.jpeg)"
];
//获取banner图片总数，生成随机数
var bannerindex =Math.ceil(Math.random() * (bannerimg.length-1));
//重设banner图片
document.getElementById("page-header").style.backgroundImage = bannerimg[bannerindex];


// Butterfly 主题的 PWA 实现方案
//重定向浏览器地址
pjax.site_handleResponse = pjax.handleResponse;
pjax.handleResponse = function(responseText, request, href, options){
  Object.defineProperty(request,'responseURL',{
    value: href
  });
  pjax.site_handleResponse(responseText,request,href,options);
}
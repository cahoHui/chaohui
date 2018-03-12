window.onload=function(){
    imglocation('container' ,'box');
    var imgData = {'data': [{'src':'2.jpg'},{'src':'1.jpg'},{'src':'3.jpg'},{'src':'5.jpg'},{'src':'4.jpg'}]};
    window.onscroll = function(){
        if(checkFlag()){
            var cparent = document.getElementById('container');
            for(var i= 0; i<imgData.data.length; i++){
                var ccontent = document.createElement('div');
                ccontent.className = 'box';
                cparent.appendChild(ccontent);
                var boximg = document.createElement('div');
                boximg.className = 'box-img';
                ccontent.appendChild(boximg);
                var img = document.createElement('img');
                img.src = 'img/'+ imgData.data[i].src;
                boximg.appendChild(img);
            }
            imglocation('container' ,'box');
        }
    }
}

function checkFlag(){
    var cparent = document.getElementById('container');
    var ccontent = getChildElement(cparent, 'box');
    var lastContentHeight = ccontent[ccontent.length - 1].offsetTop;
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var pageHeight = document.documentElement.clientHeight || document.body.clientHeight;
    console.log(lastContentHeight,scrollTop,pageHeight )
    if(lastContentHeight < scrollTop + pageHeight){
        return true;
    }
}

function imglocation(parent, content){
    var cparent = document.getElementById(parent);
    var ccontent = getChildElement(cparent, content);
    var imgWidth = ccontent[0].offsetWidth;
    var num = Math.floor(document.documentElement.clientWidth / imgWidth);//一行可放下的图片个数
    cparent.style.cssText = 'width:' + imgWidth*num + 'px;margin:0 auto;';
    var boxHeigthArr = []; //所有图片高度
    for(var i = 0; i<ccontent.length; i++){
        if(i < num){
            boxHeigthArr[i] =  ccontent[i].offsetHeight;  
       }else{
            var minheight = Math.min.apply(null, boxHeigthArr); //所有图片高度中的最小高度
            var minIndex = getminheigthLocation(boxHeigthArr, minheight);// 最小高度的图片位置
            ccontent[i].style.position = 'absolute';
            ccontent[i].style.top = minheight + 'px';
            ccontent[i].style.left = ccontent[minIndex].offsetLeft+'px';
            boxHeigthArr[minIndex] = boxHeigthArr[minIndex] + ccontent[i].offsetHeight;// 图片最小高度累加，避免重叠
       }
    }
}

function getChildElement(parent, content){
    var contentArr = [];
    var allcontent = parent.getElementsByTagName('*');
    for(var i = 0;i<allcontent.length;i++){
        if(allcontent[i].className == content){
            contentArr.push(allcontent[i]);
        }
    }
    return contentArr;
}
function getminheigthLocation(boxHeigthArr, minheight){
    for (var i in boxHeigthArr){
        if(boxHeigthArr[i] == minheight){
            return i;
        }
    }
}

// $(function(){
//     var cparent = $('#container'),
//         ccontent = $('.box'),
//         width = ccontent[0].offsetWidth, // offsetWidth与width的区别：offsetWidth返回对象的padding+border+width属性之和，width返回的就是定义的width值
//         num = Math.floor($(window).width() / width),   //Math.floor:向上取整,同parseInt()，比如：Math.floor(25.8)-->25,Math.ceil:向下取整，Math.round:四舍五入
//         boxHeigthArr = [];  // 所有图片高度集合
//     cparent.css({'width': width*num + 'px', 'margin': '0 auto'});
//     imglocation(boxHeigthArr, ccontent);
//     $(window).scroll(function(){
//         var scrollTop = $(this).scrollTop(),
//             pageHeight = $(window).height(),
//             lastImgHeight = $('.box:last').offset().top;
//         console.log(lastImgHeight , scrollTop , pageHeight)
//         var imgData = {'data': [{'src':'2.jpg'},{'src':'11.jpg'},{'src':'9.jpg'},{'src':'5.jpg'},{'src':'10.jpg'}]};
//         if(lastImgHeight < scrollTop + pageHeight){
            
//             for(var i= 0; i<imgData.data.length; i++){
//                 var cparent = $('#container')[0];
//                 var ccontent = document.createElement('div');
//                 ccontent.className = 'box';
//                 cparent.appendChild(ccontent);
//                 var boximg = document.createElement('div');
//                 boximg.className = 'box-img';
//                 ccontent.appendChild(boximg);
//                 var img = document.createElement('img');
//                 img.src = 'img/'+ imgData.data[i].src;
//                 boximg.appendChild(img);
//             }
            
//             imglocation(boxHeigthArr, ccontent);
//         }
//     })
//     function getMinHeightLocation(heightArr, minHeight){
//         for(var i in heightArr){
//             if(heightArr[i] == minHeight){
//                 return i;
//             }
//         }
//     }
//     function imglocation(boxHeigthArr, ccontent){
//         for(var i = 0; i < ccontent.length; i++){
//             if(i < num){    //如果图片数量没有超过一行可以放下的图片总量
//                 boxHeigthArr.push(ccontent[i].offsetHeight);
//             }else{  //否则 取出一行图片中高度最小的图片位置, 设置图片样式属性
//                 console.log(ccontent[i])
//                 var minHeight = Math.min.apply(null, boxHeigthArr),
//                     minIndex = getMinHeightLocation(boxHeigthArr, minHeight);
//                 ccontent[i].style.position = 'absolute';
//                 ccontent[i].style.top = minHeight + 'px';
//                 ccontent[i].style.left = ccontent[minIndex].offsetLeft + 'px';
//                 boxHeigthArr[minIndex] = boxHeigthArr[minIndex] + ccontent[i].offsetHeight; // 下一行的第一张图片在上一行高度最小的图片下面，放置后将高度追加到上一行高度最小的图片上
//                 console.log(boxHeigthArr[minIndex])
//             }
//         };
//     }
// })




























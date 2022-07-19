function animate(obj,target,callback){
    // console.log(callback);   callback = function(){}  调用的时候callback()

    // 先清除以前的定时器  只保留当前一个定时器执行
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        // 步长值写到定时器的里面
        // 将步长值改为整数  不要出现小数
        // var step = Math.ceil((target - obj.offsetLeft) / 10 );
        var step = (target - obj.offsetLeft) / 10 ;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if(obj.offsetLeft == target){
            // 停止动画  本质上是关闭定时器
            clearInterval(obj.timer);
            // 回调函数写道定时器结束里面
            if(callback){
                // 调用函数
                callback();
            }
        }
        // 将每次加1 这个布长值改为一个慢慢变小的值：(目标值-现在位置)/10
        obj.style.left = obj.offsetLeft + step + 'px';
    },15);
}
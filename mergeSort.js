/*
    归并排序
    */
    var num = 100000;
    var arr = [];

    //生成随机数组
    for(var i=0;i<num;i++){
      arr.push(Math.floor(Math.random() * 1000000))
    }

    var startTime = Date.now();

    //获取排序后的数组
    console.log(generatorArr(arr).length);

    function generatorArr(a){
      var pos = 0;
      var desNum = 2;
      var newArr = [];

      while(pos < a.length){
        var temp = a.slice(pos,pos+desNum);

        newArr.push(mergeFunc(temp[0],temp[1]));
        pos += desNum;
      }

      if(newArr.length > 1){
        return generatorArr(newArr);
      }
      else{
        console.log('time: %s',(Date.now() - startTime));
        return newArr[0];
      }
    }

    //排序合并
    function mergeFunc(a,b){
      var tempArr = [];

      //只有一个参数
      if(!b){
        return tempArr = tempArr.concat(a);
      }

      //是否为数组
      if(a.constructor !== Array || b.constructor !== Array){
        tempArr = a > b ? tempArr.concat(a).concat(b) : tempArr.concat(b).concat(a);
      }
      else{
        while(a.length > 0 && b.length > 0){
          if(a[0] > b[0]){
            tempArr.push(a.shift())
          }
          else{
            tempArr.push(b.shift())
          }
        }

        tempArr = tempArr.concat(a).concat(b);
      }

      return tempArr;
    }

/*
    插入排序
    */
    var num = 100000;
    var arr = [];

    for(var i=0;i<num;i++){
      arr.push(Math.floor(Math.random() * 1000000))
    }

    var startTime = Date.now();

    console.log(insertFunc(arr).length);

    function insertFunc(a){
      var i,j;

      for(i=1;i<a.length;i++){
        var temp;

        temp = a[i];
        j = i - 1;

        while(j >= 0 && temp > a[j]){
          a[j + 1] = a[j];
          j --;
        }

        if(j != i){
          a[j+1] = temp;
        }
      }

      console.log('time: %s',(Date.now() - startTime))
      return a;
    }

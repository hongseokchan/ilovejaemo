var link={
  setcolor: function(color){
    // var alist= document.querySelectorAll('a');
    // var i=0;
    // while(i<alist.length){
    //   alist[i].style.color=color;
    //   i=i+1;
    // }
    $('a').css('color', color);
  }
}
var list={
  setcolor: function(color){
    // var target=document.querySelector('ol');
    // target.style.color=color;
    $('ol').css('color',color);
  }
}
var Body = {
  setcolor: function(color){
    // document.querySelector('body').style.color=color;
    $('body').css('color',color);
  },
  setbackgroundcolor: function(color){
    // document.querySelector('body').style.backgroundColor=color;
    $('body').css('backgroundColor',color);
  }
}
function nightDayHandle(self){
  if(self.value === 'night'){
    self.value = 'day';
    Body.setbackgroundcolor('black');
    list.setcolor('yellow');
    Body.setcolor('white');
    link.setcolor('yellow');
  }else{
    self.value = 'night';
    Body.setbackgroundcolor('white');
    list.setcolor('black');
    Body.setcolor('black');
    link.setcolor('black');
  }
}

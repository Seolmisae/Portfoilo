window.addEventListener("load", function() 
{
    let elNavi = document.querySelector(".header > ul");
    let aElSection = document.querySelectorAll(".item > section");
    let curSIdx = 0;
    
    Array.from(elNavi.children, function(elMenu, idx, elMenus) 
    {
        elMenu.addEventListener("click", function() 
        {
          doScroll(idx);
        });
    });
    
    let wheelTimer;
    window.addEventListener("wheel", function(e) 
    {
        clearTimeout(wheelTimer);
        wheelTimer = setTimeout(function() 
        {
          if(e.deltaY < 0) 	doScroll(++curSIdx);
          else doScroll(--curSIdx);
        }, 50);
    });
    
    function doScroll(sidx) 
    {
        sidx = sidx < 0 ? 0 : sidx;
        sidx = sidx > aElSection.length - 1 ? aElSection.length - 1 : sidx;
    
        curSIdx = sidx;
      
        aElSection[curSIdx].scrollIntoView(
        {
            block: "start",
            inline: "start",
            behavior: "smooth"
        });  	
    }
});

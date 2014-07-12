// google Analytics A==============
 var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'ga id']);
 _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();


function addPageView(str){
  _gaq.push(['_trackPageview',str]);
  //console.log("str:"+str);
}
function addEvent(id,evt,str){
  _gaq.push(['_trackEvent',id,evt,str]);
  //console.log("evt:"+evt+"=====str:"+str);
}



// google Analytics B==============
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'ga id', 'domain');

// google Analytics END===========

function trackpage(someurl){
  ga('send', 'pageview', someurl);
}

function trackevent(tk){
  ga('send', 'event', 'button', 'click', tk);
}
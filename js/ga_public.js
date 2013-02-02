//=====================================================GA
 var _gaq = _gaq || [];
  _gaq.push(['_setAccount', '---ga id--']);
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
function addEvent(evt,str){
	_gaq.push(['_trackEvent',evt,str]);
	//console.log("evt:"+evt+"=====str:"+str);
}
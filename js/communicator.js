function onMessage(messageEvent) {
				alert(messageEvent.data);
			}
var windowProxy;
window.onload=function(){ 
    windowProxy = new Porthole.WindowProxy("http://test.hub3c.com/porthole/proxy.html"); 
    windowProxy.addEventListener(onMessage);
}
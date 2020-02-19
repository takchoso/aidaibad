function OCisSmartPhone()
{
	return (
		(navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1) || 
		navigator.userAgent.indexOf('iPod') > 0 || 
		navigator.userAgent.indexOf('Android') > 0);
}
function OCdisplayWidth()
{
	return window.parent.screen.width;
}
function OCwindowWidth()
{
	if (window.screen.width < window.innerWidth) {
		return window.screen.width;
	}
	return window.innerWidth;
}

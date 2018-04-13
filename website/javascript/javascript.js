window.onload = function(){
	// When the user scrolls the page, execute myFunction 
	window.onscroll = function() {myFunction()};

	// Get the header
	var header = document.getElementById("nav_bar");

	// Get the offset position of the navbar
	var sticky = header.offsetTop;
	var height = document.getElementById('nav_bar').clientHeight;
	
	var intro_start = document.getElementById('intro_section').offsetTop;
	var intro_end = intro_start + document.getElementById('intro_section').clientHeight;
	
	var education_start = document.getElementById('education_section').offsetTop;
	var education_end = education_start + document.getElementById('education_section').clientHeight;
	
	var work_experience_start = document.getElementById('work_experience_section').offsetTop;
	var work_experience_end = work_experience_start + document.getElementById('work_experience_section').clientHeight;
	
	var contact_start = document.getElementById('contact_section').offsetTop;
	var contact_end = contact_start + document.getElementById('contact_section').clientHeight;
	
	var etc_start = document.getElementById('etc_section').offsetTop;
	var etc_end = etc_start + document.getElementById('etc_section').clientHeight;

	// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
	function myFunction() {
		if (window.pageYOffset >= sticky + height) {
			header.classList.add("sticky");
			document.getElementById('nav_bar').setAttribute("style",
			"grid-template:1fr/repeat(6,1fr);transition:width 0.0s linear;-webkit-transition: width 0.0s linear;width:100%;");
			
			/*document.getElementById('nav_bar').style.boxShadow='inset 0 0 0 200px';
			document.getElementById('nav_bar').style.filter='blur(1px)';*/
			
			
			
			
			document.getElementById('logo').setAttribute("style","display:inline");
			var navs = document.getElementsByClassName("nav");
			for(i=0; i<navs.length; i++) {
				navs[i].style.background='rgba(150,150,150,0.5)';
				navs[i].style.borderBottom='none';
			}

		}
		if (window.pageYOffset <= sticky) {
			header.classList.remove("sticky");
			document.getElementById('nav_bar').setAttribute("style",
			"width:80%;grid-template:1fr/repeat(5,1fr);transition:width 0.3s linear;-webkit-transition: width 0.3s linear");
			//document.getElementById('content').style.marginTop = height;
			document.getElementById('logo').setAttribute("style","display:none");
			var navs = document.getElementsByClassName("nav");
			for(i=0; i<navs.length; i++) {
				navs[i].style.background='rgba(0,0,0,0.0)';
				navs[i].style.borderBottom='none';
			}
		}
		
		if (window.pageYOffset >= intro_start && window.pageYOffset < intro_end){
			document.getElementById('intro_nav').style.background='rgba(0,0,0,0.8)';
			document.getElementById('intro_nav').style.borderBottom='1px solid white';
		} else if (window.pageYOffset >= education_start && window.pageYOffset < education_end){
			document.getElementById('education_nav').style.background='rgba(0,0,0,0.8)';
			document.getElementById('education_nav').style.borderBottom='1px solid white';
		} else if (window.pageYOffset >= work_experience_start && window.pageYOffset < work_experience_end){
			document.getElementById('work_experience_nav').style.background='rgba(0,0,0,0.8)';
			document.getElementById('work_experience_nav').style.borderBottom='1px solid white';
		} else if (window.pageYOffset >= contact_start && window.pageYOffset < contact_end){
			document.getElementById('contact_nav').style.background='rgba(0,0,0,0.8)';
			document.getElementById('contact_nav').style.borderBottom='1px solid white';
		} else if (window.pageYOffset >= etc_start && window.pageYOffset < etc_end){
			document.getElementById('etc_nav').style.background='rgba(0,0,0,0.8)';
			document.getElementById('etc_nav').style.borderBottom='1px solid white';
		}
	}
};
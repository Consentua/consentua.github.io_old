	//nav toggle for mobile nav bar button
	document.getElementById("toggle-menu").addEventListener("click", toggleMenu);
	function toggleMenu() {
		var nav = document.querySelector('nav') // Using a class instead, see note below.
		nav.classList.toggle('visible');
	}

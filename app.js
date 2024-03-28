document.addEventListener('DOMContentLoaded', function () {
	
	setTimeout(function () {
		const splashScreen = document.getElementById('spalsh-screen');
		const mainContent = document.getElementById('main-content');

		splashScreen.style.opacity = '0';
		mainContent.style.opacity = '1'

		setTimeout(function () {
			splashScreen.style.display = 'none';
			mainContent.classList.remove('hidden')
		}, 1000);
	}, 3000);

})
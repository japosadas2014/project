
	function scheduleDetailsController($scope){
		$scope.details = [
		{title: 'Furious 7', rating: 'PG-13', year: '2015', genre: 'Crime', 
		runtime: '2h 20m', description: 'A dead man\'s brother seeks revenge on the Toretto gang.', 
		url: 'http://www.furious7.com' },
		{title: 'Fast & Furious 6', rating: 'PG-13', year: '2013', genre: 'Thriller', 
		runtime: '2h 10m', description: 'Agent Hobb asked Dom and Brian\'s help in tracking a lethally skilled mercenary skilled drivers.', 
		url: 'http://www.imdb.com/title/tt1905041/'} 
		
		];
	};

	scheduleApp.controller("scheduleDetailsController", scheduleDetailsController);


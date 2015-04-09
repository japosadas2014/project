//angular.module("scheduleapp", []).controller("scheduleController", function($scope) {

	function scheduleController($scope){
		$scope.program = {};

		$scope.errormsg = "";

		$scope.details = [];

		$scope.program.genretypes = [
		{ value: "action", label: "Action" },
		{ value: "amination", label: "Amination" },
		{ value: "crime", label: "Crime" },
		{ value: "drama", label: "Drama" },
		{ value: "documentary", label: "Documentary" },
		{ value: "foreign", label: "Foreign" },
		{ value: "horror", label: "Horror" },
		{ value: "suspense", label: "Suspense" },
		{ value: "thriller", label: "Thriller" }
		];

		$scope.program.rating = [
		{ value: "G", label: "G" },
		{ value: "PG13", label: "PG-13" },
		{ value: "R", label: "R" },
		{ value: "TVMA", label: "TV-MA" }
		];


		$scope.program.day = [
		{ value: "sunday", label: "Sunday" },
		{ value: "monday", label: "Monday" },
		{ value: "tuesday", label: "Tuesday" },
		{ value: "wednesday", label: "Wednesday" },
		{ value: "thursday", label: "Thursday" },
		{ value: "friday", label: "Friday" },
		{ value: "saturday", label: "Saturday" }
		];

		$scope.program.month = [
		{ value: "january", label: "January" },
		{ value: "february", label: "February" },
		{ value: "march", label: "March" },
		{ value: "april", label: "April" },
		{ value: "may", label: "may" },
		{ value: "june", label: "june" },
		{ value: "july", label: "ju" },
		{ value: "august", label: "august" },
		{ value: "september", label: "september" },
		{ value: "october", label: "october" },
		{ value: "november", label: "november" },
		{ value: "december", label: "december" }
		];


		$scope.program.date = [
		{ value: "1", label: "1" },
		{ value: "2", label: "2" },
		{ value: "3", label: "3" },
		{ value: "4", label: "4" },
		{ value: "5", label: "5" },
		{ value: "6", label: "6" },
		{ value: "7", label: "7" },
		{ value: "8", label: "8" },
		{ value: "9", label: "9" },
		{ value: "10", label: "10" },
		{ value: "11", label: "11" },
		{ value: "12", label: "12" },
		{ value: "13", label: "13" },
		{ value: "14", label: "14" },
		{ value: "15", label: "15" },
		{ value: "16", label: "16" },
		{ value: "17", label: "17" },
		{ value: "18", label: "18" },
		{ value: "19", label: "19" },
		{ value: "20", label: "20" },
		{ value: "21", label: "21" },
		{ value: "22", label: "22" },
		{ value: "23", label: "23" },
		{ value: "24", label: "24" },
		{ value: "25", label: "25" },
		{ value: "26", label: "26" },
		{ value: "27", label: "27" },
		{ value: "28", label: "28" },
		{ value: "29", label: "29" },
		{ value: "30", label: "30" },
		{ value: "31", label: "31" }
		];



		$scope.program.scheduleyear = [
		{ value: "2015", label: "2015" }
		];



		$scope.addDetail = function(program) {
			if (!angular.isDefined($scope.program.title)) {
				$scope.errormsg = "Title is missing";
			}  else if (!angular.isDefined($scope.program.rating))  {
				$scope.errormsg = "Rating dropdown was not selected";	
			}  else if (!angular.isDefined($scope.program.genre))  {
				$scope.errormsg = "Genre dropdown was not selected";
			}  else if (!angular.isDefined($scope.program.year))  {
				$scope.errormsg = "Year is missing";
			} else if (!is_valid_year($scope.program.year)) {
				$scope.errormsg = "Year is in the incorrect numeric format: YYYY";
			}  else if (!angular.isDefined($scope.program.runtime))  {
				$scope.errormsg = "Run Time is missing";
			} else if (!is_valid_runtime($scope.program.runtime)) {
				$scope.errormsg = "Run Time is in the incorrect numeric format: 00:00";
			} else if (!angular.isDefined($scope.program.url))  {
				$scope.errormsg = "URL is missing";
			} else if (!is_valid_runtime($scope.program.url)) {
				$scope.errormsg = "URL is in the incorrect format: http://www.abc.com";
			} else {
				$scope.errormsg = '';
				$scope.details.push( program );
				$scope.program = {};


			}

		}


	};

	scheduleApp.controller("scheduleController", scheduleController);


function is_valid_year (item) {
	if (item.match(/^[0-9]{4}$/)){
		return true;
	} else {
		return false;
	}
}


function is_valid_runtime (item) {
	if (item.match(/^[0-9]{2}:[0-9]{2}$/)){
		return true;
	} else {
		return false;
	}
}

function is_valid_url (item) {
	if (item.match(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/)){
		return true;
	} else {
		return false;
	}
}
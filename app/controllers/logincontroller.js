function loginController($scope){
$scope.login = {};

$scope.errormsg = "";

	$scope.validateLogin = function(login) {
		if (!angular.isDefined($scope.login.user))  {
			$scope.errormsg = "Username is missing";		
		}  else if (!angular.isDefined($scope.login.password))  {
			$scope.errormsg = "Password is missing";	
		} else {
			$scope.errormsg = '';
			 location.href = '#/add-schedule';
		}
	};

	scheduleApp.controller("loginController", loginController);

	
}
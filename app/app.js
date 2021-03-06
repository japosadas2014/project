var scheduleApp = angular.module("scheduleApp", ["ngRoute"]);

scheduleApp.config(function ($routeProvider) {
    $routeProvider
        .when("/",  { controller: "loginController", templateUrl: "app/partials/login_partial.html" })
        .when("/add-schedule",  { controller: "scheduleController", templateUrl: "app/partials/add_schedule_partial.html" })
        .when("/schedule", {controller: "scheduleDetailsController", templateUrl: "app/partials/schedule_detail_partial.html" })
       // .when("/signout",  { controller: "scheduleController", templateUrl: "app/partials/signout_partial.html" })
        .otherwise({ redirectTo: "app/partials/404_page.html" });
});
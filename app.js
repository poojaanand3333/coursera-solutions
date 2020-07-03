(function () {
    'use strict';
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.validityMsg ="";
        $scope.lunch=null;
        $scope.count=0;
        $scope.color="black"
        $scope.checkValue = function () {
            $scope.validityMsg ="Value Entered";
        };
        $scope.findCount=function(){
            if(!$scope.lunch){
                $scope.validityMsg="Please enter data first!"
                $scope.color="red"
            }
            const arr = $scope.lunch.split(",");
            var val=arr.length;
            $scope.count=val;
            if($scope.count<=3){
                $scope.validityMsg="Enjoy!"
                $scope.color="green"
            }if($scope.count>3){
                $scope.validityMsg="Too Much!"
                $scope.color="green"
            }
            
        };
    }
    
    })();

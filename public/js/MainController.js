angular.module('Trello')

.controller('MainController', function ($scope, dataService) {

    dataService.getAllData().then(function(response){
        $scope.lists = response.data;
        console.log($scope.lists);
    }).catch(function (err){
        console.log(err);
    });

    $scope.addTask = function(index, newTask){
        var newTaskToAdd = {
            task: newTask
        }
        dataService.createNewTask(index, newTaskToAdd).then(function(res){
            $scope.lists.push(res);
        })
    };



    // $http({
    //     method: 'GET',
    //     url: '/api/hello-world'
    // }).then(function successCallback(response) {
    //     console.log(response.data)
    // }, function errorCallback(response) {
    //
    // });
    //
    // var newTask = {
    //   text: 'Do laundry.'
    // };
    //
    // $http({
    //     method: 'POST',
    //     url: '/api/task',
    //     data: newTask
    // }).then(function successCallback(response) {
    //     console.log(response.data)
    // }, function errorCallback(response) {
    //     // called asynchronously if an error occurs
    //     // or server returns response with an error status.
    // });
});

angular.module('Trello').service('dataService', function ($http) {

    this.getAllData = function(){
        return $http.get('/api/data');
    };

    this.createNewTask = function(index, newTask){
        
        
        return $http({
                method: 'POST',
                url: '/api/task/' + index,
                data: newTask
            }).then(function successCallback(response) {
                console.log(response)
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
    }
});

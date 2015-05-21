angular.module('starter.controllers', [])

    .controller('BlackboardCtrl', function ($scope) {
    })

    .controller('BookListCtrl', function ($scope, BookListService) {
        $scope.bookList = BookListService.all();

        $scope.remove = function (book) {
            BookListService.remove(book);
        }
    })

    .controller('BookDetailCtrl', function ($scope, $stateParams, BookListService) {
        console.log("param is: ", $stateParams);
        $scope.book = BookListService.get($stateParams.bookId);
    })

    .controller('AccountCtrl', function ($scope) {
        $scope.settings = {
            enableFriends: true
        };
    });

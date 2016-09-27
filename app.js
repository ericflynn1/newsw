let app = angular.module('NewsTrackerApp', []);

app.controller("newsController", function ($scope, newsService) {
    $scope.news = newsService.newNews();
    $scope.hide = function(page){
        page.hide = true;
        console.log('working');

    }
    
});


app.factory("newsService", function ($http) {
    let newsArticles = [];
    $http({
        method: 'GET',
        url: "http://puzzlegram.herokuapp.com/news"
    }).then(function (response) {
        angular.copy(response.data.news, newsArticles);
         for (let i = 0; i < newsArticles.length; i++) {
            newsArticles[i].hide = false;
         }
    });
    // Scott Helped me out with this
    return {
        showCNN: function () {
            for (let i = 0; i < newsArticles.length; i++) {
                if (newsArticles[i].publisher.name === "CNN") {
                    newsArticles[i].hide = false;
                } else {
                    newsArticles[i].hide = true;
                }
            }
        },
        newNews: function () {
            // console.log(newsArticles);
            return newsArticles;
        },
        starIt: function (id) {

        //     // console.log('working');
        //     // for (let i = 0; i < newsArray.length; i++) {
        //     //     if (id === newsArray[i].id) {
        //     //         newsArray[i].starred = true;
        //     //     } else {
        //     //         newsArray[i].starred = false;
        //     //     }
        //     // }
        }
            
    }
});


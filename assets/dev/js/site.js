var app = angular.module('APP', []);

app.controller('catalog', ['$scope', '$http', function($scope, $http){
    $http.get('assets/build/json/fliers.json').then(function(res){
        $scope.data = res.data;
        
        $scope.thActive = false;
        $scope.listActive = true;
        
        $scope.cardHovered = false;
        
        //for lightbox thingy
        $scope.lightbox = false;
        $scope.lightsrc = "";
        $scope.whatsmysrc = function(){
            var target  = $(this),
                src     = target[0].f.partNumber,
                loc     = location,
                src     = loc.origin + "/danferth/fliers-catalog/assets/build/img/" + src + ".jpg",
                docHeight  = $(document).height(),
                winHeight = $(window).height(),
                winScroll = $(window).scrollTop(),
                lightTop = winScroll + ((winHeight - 500)/2);
            
            $('.lightbox').css({'margin-top' : lightTop + "px"});    
            $('.backing').css({height:docHeight + "px"});
            
            $scope.lightbox = true;
            $('.lightbox img').attr('src', src);
            
        };
        

    });
}]);
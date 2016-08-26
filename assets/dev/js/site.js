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
        $scope.whatsmysrc = function(event){
            var src    =  event.currentTarget.currentSrc,
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

app.filter('yesNo', function(){
  return function(item){
    if(item === false || item === 1){
      return "No";
    }else if(item === true || item === 0){
      return "Yes";
    }
  }
});
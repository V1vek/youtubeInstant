app.controller('SearchVideo', function ($scope) {


	$scope.youtubeSearch = function() {
		gapi.client.setApiKey('AIzaSyD10XWShQEdXhER2_sBEvOKdH8PQrETRzY');
       	gapi.client.load('youtube', 'v3', function() {
            var request = gapi.client.youtube.search.list({
               	q: $scope.keyword,
               	part: 'snippet', 
               	maxResults: 10
       		});

       		request.execute(function(response)  { 
       			$('#results').empty();
                var results = response.result.items;                      
                $.each(results, function(index, item) {
                	title = item.snippet.title;  
                	url =  item.snippet.thumbnails.default.url;                 
                	img = '<pre><img id="thumb" src="'+url+'" alt="No  Image Available." style="width:204px;height:128px"></pre>';                   

                	$('#results').append('<pre>' + title + img +  '</pre>');    
                
                	});                                                                            
 		    });
		});
	}
});


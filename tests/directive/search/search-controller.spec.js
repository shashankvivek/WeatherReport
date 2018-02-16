describe('SearchController', function () {
    var SearchController;

    beforeEach(angular.mock.module('weather.search'));

    beforeEach(inject(function ($controller,$rootScope,$injector) {
        SearchController = $controller('SearchController', {
            $scope: $rootScope.$new(),
            $rootScope : $rootScope,
            'SearchService' : $injector.get('SearchService')
        });
    }
    ))

    it('should be defined', function () {
        expect(SearchController).toBeDefined();
    })
})
describe('MainController', function() {
    var $controller, $scope;

    // Charger le module avant chaque test
    beforeEach(module('myApp'));

    // Injecter les dépendances nécessaires
    beforeEach(inject(function(_$controller_, _$rootScope_) {
        $controller = _$controller_;
        $scope = _$rootScope_.$new();
    }));

    it('doit définir le message correctement', function() {
        $controller('MainController', { $scope: $scope });
        expect($scope.message).toBe('Bonjour !');
    });
});

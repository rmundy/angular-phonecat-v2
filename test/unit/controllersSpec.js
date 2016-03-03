'use strict';

describe('PhoneCat controllers', function() {

    describe('PhoneListCtrl', function() {

        beforeEach(module('phonecatApp'));

        if('should create "phones" model with 3 phones', inject(function($controller){
            var scope = {}.
                ctrl = $controller('PhoneListCtrl', {$scope:scope});

            expect(scope.phones.length).toBe(3);
            expect(scope.name).toBe('World');
        }));
    });
});

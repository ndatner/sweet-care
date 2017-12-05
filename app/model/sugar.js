// Shared sugar Constructor
sugarApp.factory("sugar", function(){
    function sugar(plainObject) {
        this.name = plainObject.name;
        this.description = plainObject.description;
        this.duration = plainObject.duration;
        this.ingrediants = plainObject.ingrediants;
        this.steps = plainObject.steps;
        this.imageUrl = plainObject.imageUrl;
    };

    return sugar;
});



sugarApp.factory("sugars", function(sugar) {
    var sugarArr = [];

    var add = function(sugar) {
        sugarArr.push(sugar);
    }

    var update = function(index, sugar) {
        sugarArr[index] = sugar;
    }

    var remove = function(index) {
        sugarArr.splice(index, 1);
    }

    var load = function(receipePlainObjectArr) {
        for (var i = 0; i < receipePlainObjectArr.length; i++) {
            sugarArr.push(new sugar(receipePlainObjectArr[i]))
        }
    }

    var getAll = function() {
        return sugarArr;
    }

    var get = function(index) {
        return sugarArr[index];
    }

    var removeAll = function() {
        sugarArr = [];
    }

    return {
        add: add,
        update: update,
        remove: remove,
        load: load,
        getAll: getAll,
        get: get,
        removeAll: removeAll
    }
})
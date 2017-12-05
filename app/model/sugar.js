// Shared sugar Constructor
sugarApp.factory("sugar", function(){
    function sugar(plainObject) {
        this.suagrDate = plainObject.suagrDate;
        this.sugarTime = plainObject.sugarTime;
        this.sugarWhen = plainObject.sugarWhen;
        this.sugarValue = plainObject.sugarValue;
        
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
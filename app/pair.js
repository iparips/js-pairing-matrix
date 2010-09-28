var Pair = function(developer1Name, developer2Name) {

    function equals(pair){
        return pair.contains(developer1Name) && pair.contains(developer2Name);
    }

    function contains(developerName){
         return developer1Name === developerName || developer2Name === developerName;
    }

    return {
        equals : equals,
        contains : contains
    }

};
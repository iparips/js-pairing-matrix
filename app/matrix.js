var Matrix = function(devs) {

    var uniqueCombinations = generateUniqueCombinations();

    function selectPairs() {


        return [];
    }

    function generateUniqueCombinations(){
        var pairs=[];
        for (i=0;i < devs.length;i++){
            for (j=i+1;j < devs.length; j++) {
                pairs.push(new Pair(devs[i], devs[j]));
            }
        }
        return pairs;
    }

    return {
        selectPairs : selectPairs,
        generateUniqueCombinations : generateUniqueCombinations
    }
};
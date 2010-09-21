
var Matrix = function(devs) {

    uniquePairs = generateUniquePairs();

    function generatePairs() {
        var pairs = [];
        for (i=0; i < devs.length; i=i+2) {
            pairs.push(devs[i] + " + " + devs[i+1]);
        }
        return pairs;
    }

    function generateUniquePairs(){
        var pairs=[];
        for (i=0;i < devs.length;i++){
            for (j=i+1;j < devs.length; j++) {
                pairs.push(devs[i] + " + " + devs[j]);
            }
        }
        return pairs;
    }

    return {
        generatePairs: generatePairs, generateUniquePairs : generateUniquePairs 
    }
}
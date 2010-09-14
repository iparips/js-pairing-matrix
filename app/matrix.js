
var Matrix = function(devs) {

    function generatePairs() {
        var pairs = [];
        for (i=0; i < devs.length; i=i+2) {
            pairs.push(devs[i] + " + " + devs[i+1]);
        }
        return pairs;
    }


    return {
        generatePairs: generatePairs
    }
}







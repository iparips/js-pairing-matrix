var customMatchers = {
    toContainPair: function(expectedPair) {

        this.message = function() {
            return "Expected: '" + expectedPair + "', but got: '" + this.actual + "'";
        };

        for(i=0; i<this.actual.length; ++i) {
            if(this.actual[i].equals(expectedPair)) {
                return true;
            }
        }
        return false;
    }
};

beforeEach(function() {
  this.addMatchers(customMatchers);
});
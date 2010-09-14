$(document).ready(function() {
    describe("Pairing Matrix", function() {

	    it("should take in list of 2 devs and return 1 pairs of devs", function() {
	        var matrix = new Matrix(["Rich", "Khali"]);

            expect(matrix.generatePairs()).toContain("Rich + Khali");

        });
	    it("should take in list of devs and return list of pairs of devs", function() {
			var matrix = new Matrix(["Rich", "Khali", "Anette", "Ange"]);

            var pairs = matrix.generatePairs();
            expect(pairs).toContain("Rich + Khali");
            expect(pairs).toContain("Anette + Ange");
        });

//        it("should create different pairs for each round of generatePairs call", function() {});
	
	});
});
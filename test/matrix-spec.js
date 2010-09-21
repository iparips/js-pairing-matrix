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

//        it("should generate different pairs on the second call", function() {
//            var matrix = new Matrix(["Rich", "Khali", "Anette", "Ange"]);
//
//            var pairs = matrix.generatePairs();
//            var pairs = matrix.generatePairs();
//
//            expect(pairs).not.toContain("Rich + Khali");
//            expect(pairs).not.toContain("Anette + Ange");
//        });

        it("should generate unique combinations", function() {
            var matrix = new Matrix(["Rich", "Khali", "Anette", "Ange"]);

            var pairs = matrix.generateUniquePairs();

            expect(pairs.length).toEqual(6);
            expect(pairs).toContain("Rich + Khali");
            expect(pairs).toContain("Rich + Anette");
            expect(pairs).toContain("Rich + Ange");
            expect(pairs).toContain("Khali + Anette");
            expect(pairs).toContain("Khali + Ange");
            expect(pairs).toContain("Anette + Ange");
        });

        it("should select two pairs from the list of unique combinations", function() {});
        it("should record the selected pairs", function() {});

	});
});
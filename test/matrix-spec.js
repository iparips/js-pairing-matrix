$(document).ready(function() {
    describe("Pairing Matrix", function() {

        it("should generate unique combinations", function() {
            var matrix = new Matrix(["Rich", "Khali", "Anette", "Ange"]);

            var combinations = matrix.generateUniqueCombinations();

            expect(combinations.length).toEqual(6);
            expect(combinations).toContainPair(new Pair("Rich", "Khali"));
            expect(combinations).toContainPair(new Pair("Rich", "Anette"));
            expect(combinations).toContainPair(new Pair("Rich", "Ange"));
            expect(combinations).toContainPair(new Pair("Khali","Anette"));
            expect(combinations).toContainPair(new Pair("Khali","Ange"));
            expect(combinations).toContainPair(new Pair("Anette","Ange"));
        });

//        it("should select two pairs from the list of unique combinations and record selection", function() {
//            var matrix = new Matrix(["Rich", "Khali", "Anette", "Ange"]);
//            var pairs = matrix.selectPairs();
//
//            expect(pairs.length).toEqual(2);
//            expect(pairs).toContain("Rich + Khali");
//            expect(pairs).toContain("Anette + Ange");
//        });

        it("should record the selected pairs", function() {});

	});
});
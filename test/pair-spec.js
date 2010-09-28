$(document).ready(function() {
    describe("Pair Object", function() {

        it("should return true if contains a developer with matching name", function() {
            var pair1 = new Pair("Anette", "Ange");

            expect(pair1.contains("Anette")).toEqual(true);
            expect(pair1.contains("Ange")).toEqual(true);
        });

        it("should equal another pair when fields are same", function() {
            var pair1 = new Pair("Anette", "Ange");
            var pair2 = new Pair("Ange", "Anette");

            expect(pair1.equals(pair2)).toEqual(true);
        });


	});
});
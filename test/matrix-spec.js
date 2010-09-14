$(document).ready(function() {
    describe("Pairing Matrix", function() {
	
	    it("should be initialised with a list of users", function() {
			
			this.matrix = new Matrix(["Rich", "Khali", "Anette", "Ange"]);
			
            expect(matrix.people).toContain("Rich");
            expect(matrix.people).toContain("Khali");
            expect(matrix.people).toContain("Anette");
            expect(matrix.people).toContain("Ange");
        });
	
	});
});
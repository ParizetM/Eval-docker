describe("Ma première test avec Jasmine", function() {
    it("devrait retourner true", function() {
      expect(true).toBe(true);
    });
  
    it("devrait retourner false", function() {
      expect(false).toBe(false);
    });
  
    it("devrait vérifier une égalité", function() {
      expect(1 + 1).toBe(2);
    });
  
    it("devrait vérifier si une valeur est définie", function() {
      let variable = "Bonjour !";
      expect(variable).toBeDefined();
    });
  });
  
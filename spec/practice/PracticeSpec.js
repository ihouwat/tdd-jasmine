describe("Practice", function() {
  var Practice = require('../../lib/practice/Practice');
  let practice;

  beforeEach(function() {
    practice = new Practice();
  })

  describe("test add()", function() { 
    // Equality
    it("should be able to add two integers", function() {
      expect(practice.add(1, 2)).toEqual(3);
    });
  
    it("should be able to add floating-point numbers", function() {
      expect(practice.add(1.5, 2.0)).toEqual(3.5);
    });
  
    it("should be able to add an integer and a floating-point number", function() {
      expect(practice.add(1.5, 2)).toEqual(3.5);
    });
    
    it("should be able to add a negative number", function() {
      expect(practice.add(-1.5, 1.5)).toEqual(0);
    });
  
    // Error handling
    it("should throw an error if arguments are not of type number", function() {
      expect(function() {
        practice.add(1, '3');
      }).toThrowError("This function accepts arguments of type number only.");
    });
  });

  describe("test add5()", function() {
    it("should add 5 to another number", function() {
      expect(practice.add5(5)).toEqual(10);
    })
  })

  describe("Testing Spies", function() {

    beforeEach(function() {
      // Setting up spy
      spyOn(practice, 'add');
      spyOn(practice, 'add5');
    });

    it("tracks that add() was called", function() {
      practice.add(2,3);

      expect(practice.add).toHaveBeenCalled();
    });

    it("tracks that add() has been called x times", function() {
      practice.add(2,3);
      practice.add(-1,1);
      expect(practice.add).toHaveBeenCalledTimes(2);
    });
    
    it("tracks that add5() was called", function() {
      practice.add5(2);
      expect(practice.add5).toHaveBeenCalled();
    });

    it("tracks that add5() has been called x times", function() {
      practice.add5(3);
      practice.add5(-1);
      expect(practice.add5).toHaveBeenCalledTimes(2);
    });
  });
})
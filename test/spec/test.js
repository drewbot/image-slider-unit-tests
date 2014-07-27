/* global describe, it */

(function () {
    'use strict';

    var imageArray = new Array("images/img1.jpg", "images/img2.jpg", "images/img3.jpg");

    describe("the slider constuctor", function(){
    	
      // it("accepts an array as an argument", function(){
 		
        var sliderInstance = new Slider(imageArray);

      //   expect(sliderInstance.array()).to.equal(imageArray);
      // });

      it("should show a new image based on some sort of counting mechanism", function(){

      });

      it("should show images in order of placement in the array", function(){

      });

      it("should throw an error if anything other than an array is passed through", function(){
      	var anotherslideShow = function(){
      		sliderInstance("string")
      	}

      	expect(anotherslideShow).to.throw(Error);
      });

      it("should throw an error if an empty array is passed through", function(){
      	var anotherbadslideShow = function(){
      		sliderInstance([]);
      	}

      	expect(anotherbadslideShow).to.throw(Error);
      });
    });


    //Start Mason's example tests
 
    describe("the Die constuctor", function(){
      it("correctly sets the # of sides on instances", function(){
 
        var dieInstance = new Die(9);
        expect(dieInstance.sides).to.equal(9);
 
        var dieInstance = new Die(92837429);
        expect(dieInstance.sides).to.equal(92837429);
      });
 
      it("should throw when given non-number args", function(){
 
        var erroneousDieCall = function(){
          new Die("cool");
        }
        expect(erroneousDieCall).to.throw(Error);
      });
    });
 
    describe("Die instances", function(){
 
      it("should roll random numbers in valid range", function(){
        
        var dieInstance = new Die(20);
 
        for(var i = 0; i < 999; i += 1) {
          var result = dieInstance.roll();
          expect(result).to.be.within(1,20);
        }
      })
    });
 
    describe("a Die view", function(){
 
      it("should render a die template", function(){
 
        var dieInstance = new Die(6);
        var result = renderDie(dieInstance);
 
        expect(result).to.have.string('6');
        expect(result).to.have.string('5');
        expect(result).to.have.string('4');
        expect(result).to.have.string('roll-button');
      })
    });

    //End Mason's example tests

})();


var checkElements = function(selector, elements) {
  return function() {
    casper.then(function() {
      elements.forEach(function(el) {
        ( selector + ' ' + el ).should.be.inDOM;
      });
    });
  };
};

var checkElement = function(selector) {
  return function() {
    casper.then(function() {
      selector.should.be.inDOM;
    });
  };
};

casper.start('http://localhost:1337');
describe('Home page', function() {
  describe('Basic Navigation', function() {
    casper.waitForSelector('nav', function() {
        'nav'.should.be.inDOM;
    });

    it('should have basic navigation', checkElements('nav', 
          ['.home-link', 
          '.signin-link',
          '.signup-link',
          '.share-new-encounter-link']));

    it('should have a Faunadex header', function() {
      casper.then(function() {
        'header h1'.should.be.inDOM;
        'header h1'.should.contain.text('Faunadex');
      });
    });
  });

  describe('Basic Authentication', function() {
    it('clicking signin link should move to signin form', function() {
      casper.thenClick('.signin-link a', function() {
        casper.waitForSelector('button', function() {
          'button'.should.contain.text('Sign In');

        });
      });
    });

    it('filling in form fields and clicking should log the user in', function() {
      casper.then(function(){
        this.fillSelectors('form.sign-in', {
          'input#username' : 'vanessa',
          'input#password' : 'vanessa' 
        });
        // this.echo('Filling in details');
      });

      casper.thenClick('button', function() {
        // this.echo('->Clicked on Login');
      });   

    });

    it('should have signout-link when signed in', function() {
      casper.then(function() {
        this.waitForSelector('.signout-link', function() {
          '.signout-link'.should.be.inDOM;
        });
      });
    });
  });
});

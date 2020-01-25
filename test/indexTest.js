const sinon = require( 'sinon' );
const helpers = require( './helpers' );
const chai = require( 'chai' );
const spies = require( 'chai-spies' );

chai.use( spies );


describe( "index.js", () => {
  describe( 'getPosts()', () => {

    beforeEach( () => {
      window.document.body.innerHTML = '<main></main>'
      window.fetch = require( 'node-fetch' );
    } );

    it( "sends a fetch request to 'http://api.open-notify.org/astros.json'", async () => {
      chai.spy.on( window, 'fetch' );
      await fetchBooks()
      expect( window.fetch, "A fetch to the API was not found" )
        .to.have.been.called.with( 'http://api.open-notify.org/astros.json' );
    } )

    it( "renders book titles into the DOM by passing a JSON object to renderBooks()", async () => {
      chai.spy.on( window, 'renderBooks' );
      await fetchBooks().then(() => {
        expect( window.renderBooks ).to.have.been.called();
      })
    } )
  } )
})

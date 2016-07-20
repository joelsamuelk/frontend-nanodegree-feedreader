/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('The URLs are defined', function () {

            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            }
         });

        /* This test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        
         it('Names are defined', function () {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            }
         });
    });


    /* A test suite named "The menu" to look at the navigation */
    describe('The menu', function() {
        /* This test ensures the menu element is hidden by
         * default. It uses the menu-hidden class.
         */
        it('The Menu is hidden', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

         /* This test ensures the menu changes visibility
          * when the menu icon is clicked. This test
          * has two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('The Menu changes visibility on click', function() {
           $('.menu-icon-link').trigger('click');
           expect($('body').hasClass('menu-hidden')).toBe(false);
           $('.menu-icon-link').trigger('click');
           expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

   /* A test suite named "Initial Entries" to look at loadFeed */
    describe('Initial Entries', function(){
        beforeEach(function(done){
            loadFeed(0, function(){
                done();
            });
        });

        /* This test ensures when the loadFeed function is called
         * and completes its work, there is at least a single
         * .entry element within the .feed container.
         * This test requires the use of Jasmine's beforeEach
         * and asynchronous done() function.
         */
        it ('has a single entry in the feed', function(){
            expect($('.feed .entry').length).not.toBe(0);
        });
    });

    /* A new test suite named "New Feed Selection"
     */
    describe('New Feed Selection', function() {
        var feed1, feed2;

        beforeEach(function(done){
            loadFeed (0, function(){
                feed1 = $('.feed .entry').text();
                loadFeed(1, function(){
                    feed2 = $('.feed .entry').text();
                    done();
                });
            });
        });

        /* This test ensures when a new feed is loaded by the
         * loadFeed function that the content actually changes.
         * Note: loadFeed() is asynchronous.
         */
        it('content has changed when a new feed loads', function(){
            expect(feed1).not.toBe(feed2);
        });
    });
}());
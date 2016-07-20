# Project Overview

This is muy project based on the feedreader using [Jasmine](http://jasmine.github.io/)  for my Udacity Nanodegree. 

## Project Details 

For this project, A folder with an existing feedreader web-based application was given to each student, The application reads RSS feeds.
The application received from the Udacity Team had Jasmine library included with a single test but the aim was to write more test in order to meet and exceed the expectations.


## Aim of The Project

The Aim of this project was to allow each student to showcase their understand of Jasmine and to apply it to an application which was already well structured. 


## How it works

To run the tests, clone the project from my github account using the URL below:

    - https://github.com/joelsamuelk/frontend-nanodegree-feedreader

- To run the application, open index.html in your browser of choice.

The Jasmine spec results will be displayed at the bottom of the page.

## Result displayed
Every test writen passes and the is enough to understand and follow. 


### List of Test Written (based on the requirement) 

1. Test loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
2. A Test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
3. A Test which can suite the name "The menu".
4. A Test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
5. A Test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
6. test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container. Remember, loadFeed() is asynchronous so this test wil require the use of Jasmine's beforeEach and asynchronous done() function.
7. test that ensures when a new feed is loaded by the loadFeed function that the content actually changes. Remember, loadFeed() is asynchronous.
8. All test should pass.

## Contributers

Udacity Team, fellow students and the help of Google.
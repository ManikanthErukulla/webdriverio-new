const {Given, Then,  When} = require('cucumber');
 const home = require('../../library/home_lib');
const expect = require('chai').expect;
 const mortgageRates = require('../../library/mortgageRates_lib');
 const homepage = require('../../page-objects/mortgage_rates_page');

Given(/^user is on website$/, function () {

             browser.url("./");
             // browser.setWindowSize(1600,1200);

});

When(/^user navigate to mortgage section$/,function(){
    home.moveToMenu("Mortgages");
});

When(/^user taps on mortgage rates link$/,function(){
    home.clickOption("Mortgage rates");
});    

Then(/^user is navigated to the mortgage rates page$/,function(){
    expect(browser.getTitle()).to.be.eql('Our Mortgage Rates | Nationwid');
    // browser.debug();
});

When(/^user answers do you have a mortgage as \"(.*)\"$/,function(do_you_mortgage){
    mortgageRates.input_yes_no(do_you_mortgage);

});

When(/^user answers type of mortgage as \"(.*)\"$/,function(mortgage_type){
    mortgageRates.input_mortgage_type(mortgage_type);

});
When(/^user answers the property value as \"(.*)\"$/,function(property_value){
    mortgageRates.input_property_value(property_value);

});
When(/^user answers mortgage amount as \"(.*)\"$/,function(mortgage_amt){
    mortgageRates.input_mortgage_amt(mortgage_amt);

});
When(/^user answers term as \"(.*)\"$/,function(term){
    mortgageRates.input_term(term);

});
Then(/^user taps on find a mortgage rate$/,function(){
    mortgageRates.click_find_mortgage_rate();
    //  browser.debug();
});

Then(/^user sees we have mortgages for you message$/,function(){
    browser.pause(3000);
    expect(mortgageRates.getResults()).to.include("We've found");
    
});

When(/^user filters as (.*)$/,function(label){
    browser.pause(2000);
    mortgageRates.click_label(label);
});

Then(/^filter results are shown$/,function(){

});

Given(/^2 year fixed mortgage is shown$/,function(){
    // browser.debug();
    expect(mortgageRates.verify_two_year()).to.be.true;

});

Then(/^user checks (.*) Monthly payment$/,function(year){
    expect(mortgageRates.verify_monthly_payment(year)).to.be.true;

});

Then(/^user checks (.*) Initial rate$/,function(year){
    expect(mortgageRates.verify_initial_rate(year)).to.be.true;
});

Then(/^user checks (.*) Product fee$/,function(year){
    expect(mortgageRates.verify_product_fee(year)).to.be.true;
});

Then(/^user checks (.*) Overall cost for comparison$/,function(year){
    expect(mortgageRates.verify_cost_comparison(year)).to.be.true;
});


Then(/^user checks (.*) Total paid over (.*) years$/,function(year,num){
    expect(mortgageRates.verify_total_paid_years(year)).to.be.true;
});

Given(/^3 year fixed mortgage is shown$/,function(){
    expect(mortgageRates.verify_three_year()).to.be.true;
});

Given(/^5 year fixed mortgage is shown$/,function(){
    expect(mortgageRates.verify_five_year()).to.be.true;
});
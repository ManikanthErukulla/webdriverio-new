const mortgage_rates_page = require('../page-objects/mortgage_rates_page');
module.exports = {

    input_yes_no: function (do_you_mortgage) {
        if (do_you_mortgage === "No") {
            mortgage_rates_page.nationwideMortgageNo.click();
        } 
        if (do_you_mortgage === "Yes") {
            mortgage_rates_page.nationwideMortgageYes.click();
        } 

    },

    input_mortgage_type: function (mortgage_type) {
        if (mortgage_type === "I'm buying my first home") {
            mortgage_rates_page.firstHome.click();
        } 
        else if (mortgage_type === "I'm moving home"){
            mortgage_rates_page.movingHome.click();
        }
        else if (mortgage_type === "I'm changing lender"){
            mortgage_rates_page.changingLendger.click();
        }
    },

    input_property_value: function (property_value) {
        mortgage_rates_page.propertyValue.setValue(property_value);

    },
    input_mortgage_amt: function (mortgage_amt) {
        mortgage_rates_page.mortgageAmount.setValue(mortgage_amt);

    },
    input_term: function (term) {
        mortgage_rates_page.mortgageTerm.setValue(term);
    },

    click_find_mortgage_rate:function () {
        mortgage_rates_page.findRatesBtn.click();
    },

    getResults:function () {
        // browser.waitUntil(function(){
            return mortgage_rates_page.mortgageResults.getText();      
        // },10000,'abcd');
        
    },

    click_label:function (label) {
        mortgage_rates_page.labelClick(label).click();
    },

    verify_two_year:function () {
        return mortgage_rates_page.twoYearFixed.isExisting();
    },
    
    verify_monthly_payment:function (year) {
        var monthly_payment_txt = mortgage_rates_page.monthlyPayment(year).getText();
        var monthly_payment_num = parseFloat(monthly_payment_txt.replace(/£/g, ""));
        if (monthly_payment_num > 0){
            return true;}
        else{
            return false;}    
    },

    verify_initial_rate:function (year) {
        var initial_rate_txt = mortgage_rates_page.initiaLRate(year).getText();
        var initial_rate_num = parseFloat(initial_rate_txt.replace(/%/g, ""));
        if (initial_rate_num > 0){
            return true;}
        else{
            return false;}    
    },

    verify_product_fee:function (year) {
        var product_fee_txt = mortgage_rates_page.productFee(year).getText();
        var product_fee_num = parseInt(product_fee_txt.replace(/£/g, ""));
        if (product_fee_num > 0){
            return true;}
        else{
            return false;}    
    },

    verify_cost_comparison:function (year) {
        var cost_comparison_txt = mortgage_rates_page.costComparison(year).getText();
        var cost_comparison_num = parseFloat(cost_comparison_txt.replace(/% APRC/g, ""));
        if (cost_comparison_num > 0){
            return true;}
        else{
            return false;}    
    },

    verify_total_paid_years:function (year) {
        var total_paid_txt = mortgage_rates_page.totalPaidYears(year).getText();
        var total_paid_num = parseInt(total_paid_txt.replace(/£/g, ""));
        if (total_paid_num > 0){
            return true;}
        else{
            return false;}    
    },

    verify_three_year:function () {
        return mortgage_rates_page.threeYearFixed.isExisting();
    },
     
    verify_five_year:function () {
        return mortgage_rates_page.fiveYearFixed.isExisting();
    }
};
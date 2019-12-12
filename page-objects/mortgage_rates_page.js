class Mortgage_Rates_Page {
   
    get nationwideMortgageNo() {return $("#selectorItemHaveNationwideMortgage1");}
    get nationwideMortgageYes() {return $("#selectorItemHaveNationwideMortgage0");}
    get firstHome() {return $("#selectorItemNationwideMortgageTypeNo0");}
    get movingHome() {return $("#selectorItemNationwideMortgageTypeNo1");}
    get changingLendger() {return $("#selectorItemNationwideMortgageTypeNo2");}
    get propertyValue() {return $("#SearchPropertyValue");}
    get mortgageAmount() {return $("#SearchMortgageAmount");}
    get mortgageTerm() {return $("#SearchMortgageTerm");}
    get findRatesBtn() {return $("#myButton");}
    get mortgageResults() {return $(("//div[@class = 'results mortgageRatesResultsNew']/section/div[1]//h3[1]"));}
    // get fixedRate() {return $('label=Fixed rate');}
    // get withFee() {return $('label=With Fee');}
    get twoYearFixed() {return $(("//h3[text()='2 yr  Fixed']"));}
    get threeYearFixed() {return $(("//h3[text()='3 yr  Fixed']"));}
    get fiveYearFixed() {return $(("//h3[text()='5 yr  Fixed']"));}

    labelClick(label) {return $(`label=${label}`);}

    monthlyPayment(year)
    {
        return $((`//h3[contains(text(),'${year}')]//ancestor::tr[1]//following-sibling::tr[1]//td[1]//strong`));
    }
    initiaLRate(year)
    {
        return $((`//h3[contains(text(),'${year}')]//ancestor::tr[1]//following-sibling::tr[1]//td[2]//strong`));
    }
    productFee(year)
    {
        return $((`//h3[contains(text(),'${year}')]//ancestor::tr[1]//following-sibling::tr[1]//td[3]//div[2]`));
    }
    costComparison(year)
    {
        return $((`//h3[contains(text(),'${year}')]//ancestor::tr[1]//following-sibling::tr[1]//td[4]//strong`));
    }
    totalPaidYears(year)
    {
        return $((`//h3[contains(text(),'${year}')]//ancestor::tr[1]//following-sibling::tr[1]//td[5]//div[2]`));
    }
 }
module.exports = new Mortgage_Rates_Page();
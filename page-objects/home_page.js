class Home_Page {
   
    get mortgages() {return $("li#MortgagesNavItem > a");}
    get mortgages_rates() {
        return $(("//li/a[contains(text(),'Mortgage rates')]"));
    }
 }
module.exports = new Home_Page();
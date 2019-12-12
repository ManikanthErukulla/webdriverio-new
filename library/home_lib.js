const home_Page = require('../page-objects/home_page');
module.exports = {

    moveToMenu: function (menu) {
        
        if (menu === "Mortgages") {
            home_Page.mortgages.moveTo() 
        } 
    },

    clickOption: function (menu) {
        console.log("Im click option");
        if (menu === "Mortgage rates") {
            home_Page.
            mortgages_rates.click() 
        } 
        
    }
};
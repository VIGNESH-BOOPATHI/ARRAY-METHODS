var request =new XMLHttpRequest();

request.open("GET","https://restcountries.com/v3.1/all")

request.send();

request.onload =function(){
    var res = JSON.parse(request.response);
    console.log(res);
    // Solving problems using array functions on rest countries data

    //a. Get all the countries from Asia continent /region using Filter function?
    //Ans:
        var from_asia = res.filter((ele)=>ele.region==="Asia");
        console.log(from_asia);
    //b. Get all the countries with a population of less than 2 lakhs using Filter function?
    //Ans:
        var low_population = res.filter((ele)=>ele.population<200000);
        console.log(low_population);
    //c. Print the following details name, capital, flag, using forEach function?
    //Ans:
    res.forEach((ele) => {
        console.log(ele.name.common + "\n" + ele.capital?.[0] + "\n" + ele.flag);
    });
    //d. Print the total population of countries using reduce function?
    //Ans:
        var global_population = res.reduce((acc,cv)=>acc+cv.population,0);
        console.log(global_population);
        //OUTPUT:
        //  7777721563
    
    //e. Print the country that uses US dollars as currency.
    //Ans:
            var usDollarCountries = res.filter((country) =>
            country?.currencies?.USD
            );

            usDollarCountries.forEach((country) => {
                console.log(country.name.common);
            });
            //OUTPUT:
                //  United States Virgin Islands
                //  United States Minor Outlying Islands
                //  Marshall Islands
                //  Cambodia
                //  Bahamas
                //  United States
                //  Northern Mariana Islands
                //  British Indian Ocean Territory
                //  Timor-Leste
                //  Ecuador
                //  Guam
                //  Palau
                //  Caribbean Netherlands
                //  Micronesia
                //  El Salvador
                //  British Virgin Islands
                //  Panama
                //  Turks and Caicos Islands
                //  American Samoa
                //  Puerto Rico

}

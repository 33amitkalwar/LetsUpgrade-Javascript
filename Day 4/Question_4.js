let Persons = [
    {
        name: "amit",
        age: "22",
        country: "India",
        hobbies: ['draw', 'dance', 'Magic']
    },
    {
        name: "asol",
        age: "28",
        country: "texas",
        hobbies: ['kill', 'hack', 'fight']
    },
    {
        name: "sam",
        age: "32",
        country: "queens",
        hobbies: ['sing', 'kill', 'write']
    },

    {
        name: "charlie",
        age: "38",
        country: "roswell",
        hobbies: ['dance', 'sing', 'write']
    }
];
 
    console.log(Persons);

function displayAge(criminals) {
    console.log("people with the age less than 30");

    
   criminals.forEach(element => {
      if(element.age<30)
      {
          console.log(element);
      }
       
   });
}
function displayCountry(criminals) {
    console.log("people with country as India");

    
    criminals.forEach(element => {
        if (element.country == "India") {
            console.log(element);
        }

    });
}
displayAge(criminals);
displayCountry(criminals);

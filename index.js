
function calculateAkanDay(){
    const bday = document.getElementById("birthday").value;
    const gender = document.getElementById("gender").value;

        const gh_culture ={
            'Male' : { "Sunday" : "Kwasi",
                        "Monday" : "Kwadwo",
                        "Tuesday" : "Kwabena",
                        "Wednesday" : "Kwaku",
                        "Thursday" : "Yaw",
                        "Friday" : "Kofi",
                        "Saturday" : "Kwame",      

            },
            'Female' : { "Sunday" : "Akosua",
                            "Monday" : "Adwoa",
                            "Tueday" : "Abenaa",
                            "Wednesday" : "Akua",
                            "Thursday" : "Yaa",
                            "Friday" : "Afua",
                            "Saturday" : "Ama",

            }

        }
            const getDayNumber ={"0" : "Sunday",
                                "1": "Monday",
                                "2" : "Tuesday",
                                "3" : "Wednesday",
                                "4" : "Thursday",
                                "5" : "Friday",
                                "6"  : "Saturday" }


        console.log(gh_culture)
        console.log(getDayNumber)
        //1997-02-26
        //Extracting date components
        // var bday = document.getElementById("birthday").value;
        console.log(bday)
        const birthday = new Date(bday)
        const day = birthday.getDate();
        const month = birthday.getMonth() + 1;
        const year = birthday.getFullYear(); //int 1997
        //Variables
        let m= year+""  //int to str

        let CC = parseInt(m.substring(0, 2))
        let YY = parseInt(m.substring(2, 3))







        //Day of the week calculation formula
        let daywk = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (month + 1) / 10)) + day) % 7;

        let num = Math.trunc(daywk)

        
        // var gender = document.getElementById("gender").value;


        if (num in getDayNumber){
            console.log(getDayNumber[num])
            dyy = getDayNumber[num]

            if (gender == 'Male') {
                akn = gh_culture['Male'][dyy]
                console.log(akn)
            }
            else {
                akn = gh_culture['Female'][dyy]
                console.log(akn)
            }

        }
        
        const last_result=document.getElementById("submit");
        last_result.innerHTML = `You were born on a ${dyy}, your Akan name is ${akn}.`;
    }


// if (gender=='male') {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }

//




let userFirstName = '', userLastName = '', userFullName = '';
let userBirthday = '', userBirthYear = '', userBirthMonth = '', userBirthDay = '';
let userCPF = '', birthday = '', userPhone = '', userCEP = '', userEmail = '';
let isEmailCooporative = false;
let isEmailEducational = false;

function submit_form(){
    userFirstName = document.getElementById("userFirstName").value;
    userLastName = document.getElementById("userLastName").value;
    userPhone = document.getElementById("userPhone").value;
    userPhonePrefix = document.getElementById("userPhonePrefix").value;
    userCEP = document.getElementById("userCEP").value;
    userBirthday = document.getElementById("userBirthday").value;
    userCPF = document.getElementById("userCPF").value;
    userEmail = document.getElementById("userEmail").value;

    if(!((userFirstName=="")||(userLastName=='')||(userPhonePrefix=='')||(userPhone=='')||(userCEP=='')||(userBirthday=='')||(userCPF=='')||(userEmail==''))){
        userPhone = userPhone.trim();
        userCEP = userCEP.trim();
        userCPF = userCPF.trim();
        
        userFirstName = captalizeString(userFirstName);
        userLastName = captalizeString(userLastName);
        userFullName = userFirstName + ' ' + userLastName;

        userPhone = userPhonePrefix=='+55'&&userPhone.length==10?userPhone.slice(0,2)+'9'+userPhone.slice(2):userPhonePrefix+userPhone.toString().replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, ' ($1) $2$3-$4');

        userCEP = userCEP.toString().replace(/(\d{5})(\d{3})/, '$1-$2');

        userBirthYear = dateFormat(userBirthday, 'year');
        userBirthMonth = dateFormat(userBirthday, 'month');
        userBirthDay = dateFormat(userBirthday, 'day');
        userBirthday = dateFormat(userBirthday, 'birthday');

        userCPF = userCPF.toString().replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');

        userEmail.includes('.edu')?isEmailEducational=true:null;
        userEmail.includes('.co')?isEmailCooporative=true:null;
        document.getElementById("treatedData").innerText = 'user name: '+userFullName+'  user cpf: '+userCPF+'  user birthday: '+userBirthday+'  user cep: '+userCEP+'  user phone: '+userPhone+'  user email: '+userEmail+'  this email is cooporative: '+isEmailCooporative+'  that email is educational: '+isEmailEducational;
    }
    document.getElementById("form").reset();
}
function captalizeString(string){
    string = string.trim().toLowerCase();
    let wordNumber = 1;
    let strings = string.split(' ');

    for(let i=0; i<=string.length; i++){
        if(string.charAt(i)==' '){
            wordNumber++;
        }
    }
    string = '';
    for(let i=0; i<wordNumber; i++){
        strings[i] = strings[i].charAt(0).toUpperCase()+strings[i].slice(1);
        string += i==wordNumber-1? strings[i]: strings[i] + ' ';
    }
    return string;
}
function dateFormat(date, option){
    date = date.split('-');
    year = date[0];
    month = date[1];
    day = date[2];

    switch(option){
        case 'year':
            return year;
        case 'month':
            return month;
        case 'day':
            return day;
        case 'birthday':
            return day+'/'+month+'/'+year;
    }
}
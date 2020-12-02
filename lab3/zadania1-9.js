function task1(text) 
{
    let lettercount = text.length;
    let lettercount1 = text.split(' ').join('').length;
    return "Liczba liter: " + lettercount + " gdzie " + lettercount1 + " to liczba liter tekstu.";
}
console.info('Zadanie 1:');
console.info(task1('Ala ma kota'));

function task2(array){
    let sum = 0;
    array.forEach(element => {
        sum += element;
    });
    return sum;
}

console.info('Zadanie 2:');
console.info(task2([1, 6, -1, 7, -9, 2.1, -5.7]));

function task3(input){
    let output = "";
    for (let i=0; i < input.length; i++) {
        if(Math.random() >= 0.5){
            output += input.charAt(i).toUpperCase()
        }
        else{
            output += input.charAt(i);
        }
    }
    return output;  
}
console.info('Zadanie3');
console.info(task3("Ala ma kota"));

function task4(x , y){
    if(Number.isInteger(x) & Number.isInteger(y)){
        return x * y;
    }else{
        return false;
    }
}
console.info('Zadanie 4');
console.info(task4(2, 3));
console.info(task4('test', 3));

function task5(name, month){
    let result = name + " uczy się JS";
    month = month.toLowerCase()
    if(month == "grudzien" | month == "styczen" | month == "luty"){
        result = name + " jezdzi na sankach";
    }else if(month == "marzec" | month == "kwiecien" | month == "maj"){
        result = name + " jezdzi chodzi po kaluzach";
    }else if(month == "czerwiec" | month == "lipiec" | month == "sierpien"){
        result = name + " sie opala";
    }else if(month == "wrzesien" | month == "pazdziernik" | month == "listopad"){
        result = name + " zbiera liscie";
    }
    return result;
}

console.info("Zadanie 5");
console.info(task5("Ala", "styczen"));
console.info(task5("Ala", "CZERWiEC"));

function task6(str, sign){
    let text = str.split(sign);
    text.sort((x, y) => x.localeCompare(y));
    return text.join(sign);
}


console.info('Zadanie 6')
console.info(task6("Ania|Marcin|Bartek|Piotr|Kuba|Beata|Agnieszka","|"));

function task71(input){
    let temp = [];
    input.forEach(element => {
        temp.push(element.toUpperCase());
    });
    return temp
}

function task72(input){
    let temp = [];
    let output = "";
    input.forEach(element => {
        for (let i=0; i < element.length; i++) {
            if(Math.random() >= 0.5){
                output += element.charAt(i).toUpperCase()
            }
            else{
                output += element.charAt(i);
            }
        } 
        temp.push(output);
        output = "";
    });
    return temp
}
console.info("Zadanie 7");
console.info(task71(["Ania" , "Marcin" , "Bartek" , "Piotr"]));
console.info(task72(["Ania" , "Marcin" , "Bartek" , "Piotr"]));

function checkFemale(name){
    if(name[name.length - 1] == 'a'){
        return true;
    }else {
        return false;
    }
}

console.info("Zadanie 8");
console.info(checkFemale("Ania"));
console.info(checkFemale("Marcin"));

function countWomanInTable(arr){
    let count = 0;
    arr.forEach(element => {
        let temp = element.split(' ');
        if(checkFemale(temp[0])){
            count++;
        }
    });
    return count;
}
const users = [
    "Ania Nowak",
    "Piotr Kowalski",
    "Bartek Kosecki",
    "Natalia Nowak",
    "Weronika Piotrowska",
    "Agata Beatczak",
    "Tomasz Nowak",
    "Mateusz Kowalski",
    "Marcin Kotecki",
    "Betata Lecka",
    "Katarzyna Melecka"
]

console.info("Zadanie 9");
console.info(countWomanInTable(users));
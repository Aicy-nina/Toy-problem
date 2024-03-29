//Prompt the user to input student marks 
const marks = prompt('Enter student marks here- between 0 and 100');

//Making sure the grade is between 0 and 100
if(marks<0 || marks>100){
    console.log('Please enter a valid mark between 0and 100');
}else {
    //Function to calculate the student's grade function calculateGrade(mark){
        if(marks > 79){
            console.log("grade:A");
        }else if(marks >=60 && marks<=79){
            console.log("grade:B");
        }else if(marks <=59 && marks>=50){
            console.log("grade:C");
        }else if(marks <=49 && marks>=40){
            console.log("grade:D");
        }else{
            console.log("grade:E");
        }
    }

import * as yup from 'yup'

function configureValidations(){
    yup.addMethod(yup.string,'firstLetterUppercase',function(){
        return this.test('first-letter-uppercase',
        'First Letter Must Be Upper Case',function(value){
            if(value && value.length>0){
const firstLetter=value.substring(0,1);
return firstLetter===firstLetter.toUpperCase();
            }
            return true;
        })
    })
}

export default configureValidations;
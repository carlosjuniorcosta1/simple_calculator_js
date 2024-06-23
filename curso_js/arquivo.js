 document.getElementById('showValuesBtn').addEventListener('click', function() {
            var contentNumber1 = parseFloat(document.getElementById('number1').value)
            var contentNumber2 = parseFloat(document.getElementById('number2').value)
            selOperation = document.querySelector('[name="operation"]:checked').value

            if(selOperation == '+'){
                result = contentNumber1 + contentNumber2
            } else if(selOperation == '-') {
                result = contentNumber1 - contentNumber2
            } else if(selOperation == '/') {
                result = contentNumber1 / contentNumber2
            } else if(selOperation == '*') {
                result = contentNumber1 * contentNumber2
            }

            insertResult = document.getElementById('result')
            insertResult.innerHTML =  result
              
        });




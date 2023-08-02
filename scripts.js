const resultInput = document.getElementById('result');
        let expression = '';

        function handleButtonClick(value) {
            if (value === '=') {
                try {
                    resultInput.value = eval(expression);
                } catch (error) {
                    resultInput.value = 'Error';
                }
                expression = '';
            } else if (value === 'C') {
                expression = '';
                resultInput.value = '';
            } else {
                expression += value;
                resultInput.value = expression;
            }
        }
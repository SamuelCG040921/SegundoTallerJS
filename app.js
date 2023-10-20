const colorPicker = document.getElementById('colorPicker');
        const header = document.getElementById('header');
        const footer = document.getElementById('footer');

        colorPicker.addEventListener('input', selectColor)
        function selectColor(){
            const selectedColor = colorPicker.value;
            header.style.backgroundColor = selectedColor;
            footer.style.backgroundColor = selectedColor;
        }
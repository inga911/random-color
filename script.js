
const addNewColor = (container) => {
    container.addEventListener('click', function (event) {
        event.stopPropagation();

        this.innerHTML = '';

        for (let i = 0; i < 4; i++) {
            const childDiv = document.createElement('div');
            childDiv.classList.add('child-container');
            childDiv.style.height = "50%";
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            childDiv.style.backgroundColor = "#" + randomColor;
            this.appendChild(childDiv);

            addNewColor(childDiv);
        }
    });
};

addNewColor(document.querySelector('.container'));


const hoverColor = document.querySelector('a');

hoverColor.addEventListener('mouseover', (event) => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    event.target.style.color = "#" + randomColor;
})


hoverColor(document.querySelector('a'));

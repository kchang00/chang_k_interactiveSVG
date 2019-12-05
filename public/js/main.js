const myVM = (() => {
    // try to get the object and do stuff with it
    let seeMoreButtons = document.querySelectorAll('.svg-btns'),
        description = document.querySelector('.animal-description');

    //create the years list
    function renderYears(years) {
        return `<ul class="years-list">
                    ${years.map(item => `<li>${item}</li>`).join('')}
                </ul>
                `
    }

    function parseYearData(year) {
        let targetDiv = document.querySelector('.years');

        let yearContent =  `
                    <!-- loop through tools here -->
                    ${renderYears(year.Year)}
        `;
        targetDiv.innerHTML = yearContent;
    }

    function showDescription(animaldata, el) {
        description.querySelector('.name').textContent = `${animaldata.details}`;
        description.querySelector('.mandarin-name').textContent = `${animaldata.details}`;
        description.querySelector('.description').textContent = animaldata.details;

        el.appendChild(description);
    }

    //fetch call to the database
    function fetchData() {
        let url = `/info/${this.dataset.target}`,
            targetElement = this;

        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            showDescription(data , targetElement)
            parseYearData(data);;
        })
        .catch(function(error) {
            console.log(error);
        })
    }

    seeMoreButtons.forEach(button => button.addEventListener("click", fetchData));

})();
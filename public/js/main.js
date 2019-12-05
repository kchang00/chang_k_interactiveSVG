const myVM = (() => {
    // try to get the object and do stuff with it
    let seeMoreButtons = document.querySelectorAll('.svg-btn'),
        description = document.querySelector('.animal-description');
    
        console.log('main.js working');
        console.log(seeMoreButtons);
        console.log(description);

    function showDescription(animaldata, el) {
        // referencing object pulled from database (using variable animaldata)
        // referencing container "key" (column name) - getting back value
        description.querySelector('.name').textContent = `${animaldata.Name}`;
        description.querySelector('.mandarin-name').textContent = `${animaldata.Mandarin}`;
        description.querySelector('.description').textContent = animaldata.Description;

        el.appendChild(description);
    }

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
                // referencing object pulled from database (using variable animaldata)
                // referencing container "key" (column name) - getting back value - specifically for Years
                // grab new array (named Year) made using renderYears 
                ${renderYears(year.Year)}
        `;
        targetDiv.innerHTML = yearContent;
    }

    //fetch call to the database
    function fetchData() {
        console.log('fetch function working');
        let url = `/info/${this.dataset.target}`,
            targetElement = this;
            console.log(url)

        fetch(url)
        .then(res => res.json()) // decode json object
        .then(data => {
            console.log(data);
            showDescription(data , targetElement)
            parseYearData(data);
        })
        .catch(function(error) {
            console.log(error);
        })
    }

    
        seeMoreButtons.forEach(button => button.addEventListener("click", fetchData));
    

})();
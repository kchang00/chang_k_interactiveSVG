const myVM = (() => {
    // try to get the object and do stuff with it
    let seeMoreButtons = document.querySelectorAll('.svg-btn'),
        description = document.querySelector('.animal-description'),
        mainCon = document.querySelector('.main-con'),
        wheel = document.querySelector('#wheel');
    
        console.log('main.js working');
        console.log(seeMoreButtons);
        console.log(description);

        window.addEventListener('load', function() {
            mainCon.classList.add('all-loaded');
        })

    function showDescription(animaldata, el) {
        // referencing object pulled from database (using variable animaldata)
        // referencing container "key" (column name) - getting back value
        description.querySelector('.name').textContent = `${animaldata.Name}`;
        description.querySelector('.mandarin-name').textContent = `${animaldata.Mandarin}`;
        description.querySelector('.description').textContent = animaldata.Description;

        wheel.classList.remove('hidden');
        description.classList.add('fade-in');
        wheel.classList.add('fade-in');
        // TweenMax.to(window, 4, {scrollTo:"#scroll-desc"});
        TweenMax.to(window, 2, {scrollTo:1000});

        // if (description.innerHTML='') {
        //     description.classList.add('hidden');
        // }else{
        //     description.classList.remove('hidden');
        // }

        // el.appendChild(description);
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

        // loop through Years here
        // referencing object pulled from database (using variable animaldata)
        // referencing container "key" (column name) - getting back value - specifically for Years
        // grab new array (named Year) made using renderYears 
        let yearContent =  `
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

    
    if (document.readyState === "interactive" || document.readyState === "complete") {
        resolve();
    } else {
        window.addEventListener("DOMContentLoaded", resolve);
    }
    
    function resolve() {
        
        document.body.removeAttribute("unresolved");
        
        TweenMax.from(".content", 1.5, {
        opacity: 0,
        y: 20
        });
    }

    seeMoreButtons.forEach(button => button.addEventListener("click", fetchData));
    

})();
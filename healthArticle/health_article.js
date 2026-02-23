var xhr = new XMLHttpRequest();
var url = './health_article.json';

xhr.open('GET', url, true);
xhr.responseType = 'json';

// This function tells the browser what to do AFTER the data arrives
xhr.onload = function() {
    // Check if the request was successful
    if (xhr.status === 200) {
        var articles = xhr.response.articles;
        var articlesDiv = document.getElementById('articles');

        // Loop through each article in the JSON data
        articles.forEach(function(article) {
            // 1. Create the main container for the article
            var articleDiv = document.createElement('div');
            articleDiv.classList.add('article');

            // 2. Create and add the Title
            var title = document.createElement('h2');
            title.textContent = article.title;
            articleDiv.appendChild(title);

            // 3. Create and add the Description
            var description = document.createElement('p');
            description.textContent = article.description;
            articleDiv.appendChild(description);

            // 4. Create and add the Ways to Achieve section
            var waysHeader = document.createElement('h3');
            waysHeader.textContent = 'Ways to Achieve:';
            articleDiv.appendChild(waysHeader);

            var waysList = document.createElement('ul');
            article.ways_to_achieve.forEach(function(way) {
                var listItem = document.createElement('li');
                listItem.textContent = way;
                waysList.appendChild(listItem);
            });
            articleDiv.appendChild(waysList);

            // 5. Create and add the Benefits section
            var benefitsHeader = document.createElement('h3');
            benefitsHeader.textContent = 'Benefits:';
            articleDiv.appendChild(benefitsHeader);

            var benefitsList = document.createElement('ul');
            article.benefits.forEach(function(benefit) {
                var listItem = document.createElement('li');
                listItem.textContent = benefit;
                benefitsList.appendChild(listItem);
            });
            articleDiv.appendChild(benefitsList);

            // 6. Finally, append the complete article card to the main page container
            articlesDiv.appendChild(articleDiv);
        });
    } else {
        console.error('Failed to load articles. Status:', xhr.status);
    }
};

// Start the request (Must be outside the onload function)
xhr.send();
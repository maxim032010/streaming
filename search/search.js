document.getElementById("searchButton").addEventListener("click", function() {
    var searchTerm = document.getElementById("searchInput").value.toLowerCase();
    var searchResultsElement = document.getElementById("searchResults");
    var errorMessageElement = document.querySelector(".error-message");
    searchResultsElement.innerHTML = '';

    if (searchTerm.trim() !== '') {
        var folderPath = '../filme/';
        var fileNames = [
            { name: 'Elemental', poster: '../bilder/elemental.png', link: 'Elemental/elemental.html' },
            { name: 'Gran-turismo', poster: '../bilder/Gran-Turismo.png', link: 'Gran-Turismo/Gran-Turismo.html' },
            { name: 'Die Eiskönigin 1 Frozen', poster: '../bilder/Die Eiskönigin - 1.png', link: 'Die Eiskönigin - 1/Die Eiskönigin - 1.html' },
            { name: 'Die Eiskönigin 2 Frozen', poster: '../bilder/Die Eiskönigin - 2.png', link: 'Die Eiskönigin 2/Die Eiskönigin 2.html' },
            { name: 'CREED III', poster: '../bilder/CREED III.png', link: 'CREED III/CREED III.html' },
            { name: 'Minions 2', poster: '../bilder/Minions 2.png', link: 'Minions 2/Minions 2.html'},
            { name: 'Ich Einfach unverbesserlich 2', poster: '../bilder/Ich Einfach Unverbesserlich 2.png', link: 'Ich Einfach unverbesserlich 2/Ich Einfach unverbesserlich 2.html'},
            { name: 'Ich Einfach unverbesserlich 3', poster: '../bilder/Ich Einfach Unverbesserlich 3.png', link: 'Ich Einfach unverbesserlich 3/Ich Einfach unverbesserlich 3.html'},
            { name: 'Minions', poster: '../bilder/Ich Einfach Unverbesserlich 2.png', link: 'Ich Einfach unverbesserlich 2/Ich Einfach unverbesserlich 2.html'},
            { name: 'Minions', poster: '../bilder/Ich Einfach Unverbesserlich 3.png', link: 'Ich Einfach unverbesserlich 3/Ich Einfach unverbesserlich 3.html'},
            { name: 'five nights at freddys', poster: '../bilder/five nights at freddys .png', link: 'five nights at freddys/five nights at freddys.html' },
            { name: 'Super Mario Bros', poster: '../bilder/Super Mario Bros.png', link: 'Super Mario Bros/Super Mario Bros.html' }
            // ... (andere Filme hier)
        ];

        fileNames.forEach(function(file) {
            if (file.name.toLowerCase().includes(searchTerm)) {
                var listItem = document.createElement("li");

                var posterImg = document.createElement("img");
                posterImg.src = folderPath + file.poster;
                posterImg.alt = file.name;

                var link = document.createElement("a");
                link.href = folderPath + file.link;
                link.appendChild(posterImg);

                listItem.appendChild(link);
                searchResultsElement.appendChild(listItem);
            }
        });

        if (searchResultsElement.children.length === 0) {
            errorMessageElement.style.display = "block";
        } else {
            errorMessageElement.style.display = "none";
        }
    } else {
        errorMessageElement.style.display = "none";
    }
});


    
  const starterQuestions = [
    {id:"html-01",category:"HTML",difficulty:"Easy",question:"What does HTML stand for?",answer:"HTML stands for HyperText Markup Language. It describes the structure and meaning of content on a web page."},
    {id:"html-02",category:"HTML",difficulty:"Easy",question:"What is the purpose of the <!DOCTYPE html> declaration?",answer:"It tells the browser to render the document in standards mode. In modern HTML, <!DOCTYPE html> is the standard declaration."},
    {id:"html-03",category:"HTML",difficulty:"Easy",question:"What is the difference between an HTML element and an HTML tag?",answer:"A tag is the markup in angle brackets, such as <p> or </p>. An element generally includes the opening tag, content, and closing tag when one is required."},
    {id:"html-04",category:"HTML",difficulty:"Easy",question:"Which HTML element creates a hyperlink?",answer:"The <a> element creates a hyperlink. Use its href attribute to specify the destination, for example: <a href=\"https://example.com\">Visit example</a>."},
    {id:"html-05",category:"HTML",difficulty:"Easy",question:"Which HTML element displays an image?",answer:"Use the <img> element with a src attribute and meaningful alt text, for example: <img src=\"cat.jpg\" alt=\"A cat sitting\">."},
    {id:"html-06",category:"HTML",difficulty:"Easy",question:"What is the purpose of the alt attribute on an image?",answer:"It provides a text alternative for people using screen readers and for situations where the image cannot be displayed. Describe the image's purpose in context."},
    {id:"html-07",category:"HTML",difficulty:"Easy",question:"What is the difference between <ol> and <ul>?",answer:"<ol> creates an ordered list, usually numbered. <ul> creates an unordered list, usually shown with bullets. Both typically contain <li> elements."},
    {id:"html-08",category:"HTML",difficulty:"Easy",question:"What is semantic HTML?",answer:"Semantic HTML uses elements that communicate the meaning or role of content, such as <nav>, <main>, <article>, and <footer>, rather than relying only on generic containers."},
    {id:"html-09",category:"HTML",difficulty:"Medium",question:"What is the difference between id and class?",answer:"An id should uniquely identify one element in a document. A class can be shared by many elements. CSS selects them with #id and .class respectively."},
    {id:"html-10",category:"HTML",difficulty:"Medium",question:"What do the <head> and <body> elements contain?",answer:"The <head> contains document metadata, the title, and links to resources such as stylesheets. The <body> contains the page content displayed to users."},
    {id:"html-11",category:"HTML",difficulty:"Easy",question:"How do you create a text input in a form?",answer:"Use an input element such as <input type=\"text\" name=\"username\">. Add a connected <label> so users and assistive technologies know what the field is for."},
    {id:"html-12",category:"HTML",difficulty:"Medium",question:"Why should a form control have a label?",answer:"A label explains the control's purpose, improves usability, and helps assistive technologies. Connect a label's for attribute to the control's id, or wrap the control in the label."},
    {id:"html-13",category:"HTML",difficulty:"Medium",question:"What does the required attribute do on a form field?",answer:"It tells the browser that the field must have a value before the form can be submitted through normal browser validation."},
    {id:"html-14",category:"HTML",difficulty:"Medium",question:"What is the purpose of the meta viewport tag?",answer:"It helps the page use the device's viewport width and an appropriate initial scale on mobile devices: <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">."},
    {id:"html-15",category:"HTML",difficulty:"Hard",question:"What is the difference between block-level layout behavior and inline layout behavior?",answer:"In common CSS layout, block elements participate in block flow and generally start on a new line, while inline elements flow within a line of text. Exact behavior can be changed with CSS display values."},
    {id:"css-01",category:"CSS",difficulty:"Easy",question:"What does CSS stand for?",answer:"CSS stands for Cascading Style Sheets. It controls the presentation and layout of HTML documents."},
    {id:"css-02",category:"CSS",difficulty:"Easy",question:"How do you select an element by its class in CSS?",answer:"Use a dot followed by the class name. Example: .card { padding: 16px; }"},
    {id:"css-03",category:"CSS",difficulty:"Easy",question:"How do you select an element by its id in CSS?",answer:"Use a hash followed by the id. Example: #header { background: white; } An id should be unique within the page."},
    {id:"css-04",category:"CSS",difficulty:"Easy",question:"What is the CSS box model?",answer:"The box model describes an element as content surrounded by padding, border, and margin. These layers affect the space the element occupies."},
    {id:"css-05",category:"CSS",difficulty:"Medium",question:"What does box-sizing: border-box do?",answer:"It makes the declared width and height include the content, padding, and border, which often makes sizing layouts easier to manage."},
    {id:"css-06",category:"CSS",difficulty:"Easy",question:"How can you change the text color in CSS?",answer:"Use the color property. Example: p { color: navy; }"},
    {id:"css-07",category:"CSS",difficulty:"Easy",question:"What is the difference between margin and padding?",answer:"Margin is space outside an element's border. Padding is space between the content and its border."},
    {id:"css-08",category:"CSS",difficulty:"Medium",question:"What is Flexbox useful for?",answer:"Flexbox is a one-dimensional layout system for arranging items in a row or column, controlling alignment, spacing, and how items grow or shrink."},
    {id:"css-09",category:"CSS",difficulty:"Medium",question:"What is CSS Grid useful for?",answer:"CSS Grid is a two-dimensional layout system designed to arrange content in rows and columns. It is useful for page layouts and structured card grids."},
    {id:"css-10",category:"CSS",difficulty:"Medium",question:"What is a CSS media query?",answer:"A media query applies styles when conditions such as viewport width or user preferences match. Example: @media (max-width: 600px) { .menu { display: none; } }"},
    {id:"css-11",category:"CSS",difficulty:"Easy",question:"How do you make an element's corners rounded?",answer:"Use border-radius. Example: .card { border-radius: 12px; }"},
    {id:"css-12",category:"CSS",difficulty:"Medium",question:"What is the difference between relative and absolute positioning?",answer:"A relatively positioned element stays in normal flow and can be offset from its normal position. An absolutely positioned element is removed from normal flow and positioned relative to its containing block."},
    {id:"css-13",category:"CSS",difficulty:"Medium",question:"What is the CSS cascade?",answer:"The cascade determines which declarations apply when rules conflict. It considers factors such as origin, importance, cascade layer, specificity, and source order."},
    {id:"css-14",category:"CSS",difficulty:"Hard",question:"What is CSS specificity?",answer:"Specificity is one of the factors used to resolve competing CSS selectors. In general, ID selectors outweigh class/attribute/pseudo-class selectors, which outweigh type selectors. The cascade has other factors too."},
    {id:"css-15",category:"CSS",difficulty:"Medium",question:"How can you center items horizontally and vertically with Flexbox?",answer:"For a flex container, a common pattern is: display: flex; justify-content: center; align-items: center;. The container also needs an appropriate size for vertical centering to be visible."},
    {id:"js-01",category:"JavaScript",difficulty:"Easy",question:"What is JavaScript used for on a website?",answer:"JavaScript adds behavior and interactivity, such as responding to clicks, validating forms, updating page content, and working with data."},
    {id:"js-02",category:"JavaScript",difficulty:"Easy",question:"How do you declare a variable with let?",answer:"Use let followed by a name and optional initial value. Example: let score = 0; A let variable can be reassigned within its scope."},
    {id:"js-03",category:"JavaScript",difficulty:"Easy",question:"What is the difference between let and const?",answer:"Both are block-scoped. let allows reassignment; const does not allow its binding to be reassigned. A const object or array can still have its contents changed."},
    {id:"js-04",category:"JavaScript",difficulty:"Easy",question:"How do you write a function in JavaScript?",answer:"One common way is: function greet(name) { return `Hello, ${name}!`; }. Functions package reusable logic and can accept parameters and return values."},
    {id:"js-05",category:"JavaScript",difficulty:"Easy",question:"What is an array?",answer:"An array is an ordered collection of values. Example: const colors = [\"blue\", \"white\", \"green\"]; Array indexes start at 0."},
    {id:"js-06",category:"JavaScript",difficulty:"Easy",question:"What is an object in JavaScript?",answer:"An object stores data in key-value properties. Example: const user = { name: \"Ava\", level: 1 };"},
    {id:"js-07",category:"JavaScript",difficulty:"Medium",question:"What does document.querySelector() do?",answer:"It returns the first element matching a CSS selector in the document, or null if no element matches. Example: document.querySelector(\".card\")."},
    {id:"js-08",category:"JavaScript",difficulty:"Medium",question:"How do you respond to a button click in JavaScript?",answer:"Use addEventListener: button.addEventListener(\"click\", () => { console.log(\"Clicked!\"); });. This registers a callback for click events."},
    {id:"js-09",category:"JavaScript",difficulty:"Medium",question:"What is the DOM?",answer:"The Document Object Model is a programming interface representing a document as a tree of objects. JavaScript can use it to read and update page content and structure."},
    {id:"js-10",category:"JavaScript",difficulty:"Medium",question:"What is localStorage?",answer:"localStorage is a browser API that stores string key-value pairs across browser sessions for the same origin. Do not store sensitive information in it."},
    {id:"js-11",category:"JavaScript",difficulty:"Medium",question:"What is the difference between == and ===?",answer:"The == operator performs type coercion in many comparisons, while === compares without type coercion. Strict equality (===) is usually the clearer default."},
    {id:"js-12",category:"JavaScript",difficulty:"Easy",question:"What does an if statement do?",answer:"It runs a block of code when its condition is truthy. Example: if (score >= 10) { console.log(\"Great job!\"); }"},
    {id:"js-13",category:"JavaScript",difficulty:"Medium",question:"What is an event listener?",answer:"An event listener registers a function to run when a specified event occurs, such as a click, key press, or form submission."},
    {id:"js-14",category:"JavaScript",difficulty:"Hard",question:"What is a Promise in JavaScript?",answer:"A Promise represents the eventual success or failure of an asynchronous operation. It can be pending, fulfilled, or rejected, and can be handled with then/catch or async/await."},
    {id:"js-15",category:"JavaScript",difficulty:"Hard",question:"What do async and await do?",answer:"async makes a function return a Promise. await pauses that async function until a Promise settles, allowing asynchronous code to be written in a more sequential style."},
    {id:"js-16",category:"JavaScript",difficulty:"Medium",question:"What is template literal syntax?",answer:"Template literals use backticks and can interpolate expressions with ${...}. Example: const message = `Hello, ${name}!`;"},
    {id:"js-17",category:"JavaScript",difficulty:"Medium",question:"Why is preventDefault() used in an event handler?",answer:"event.preventDefault() prevents the browser's default action for that event when the event is cancelable, such as a form's normal page submission."},
    {id:"js-18",category:"JavaScript",difficulty:"Hard",question:"What is the difference between map() and forEach() on arrays?",answer:"map() creates and returns a new array containing each callback result. forEach() runs a callback for each item and returns undefined; it is typically used for side effects."},
    {id:"js-19",category:"JavaScript",difficulty:"Medium",question:"What is JSON used for?",answer:"JSON is a text format for representing structured data, often used when exchanging data between systems. JavaScript provides JSON.stringify() and JSON.parse()."},
    {id:"js-20",category:"JavaScript",difficulty:"Hard",question:"What is a closure?",answer:"A closure occurs when a function retains access to variables from its surrounding lexical scope, even when that outer function has finished executing."}
  ];

    
    let myQuestions = JSON.parse(localStorage.getItem("codequiz-custom-questions-v1") || "[]");
    let questions = starterQuestions.concat(myQuestions);
    let currentIndex = 0;
    let ratings = JSON.parse(localStorage.getItem("codequiz-personal-ratings-v1") || "{}");


    function getElement(id) {
      return document.getElementById(id);
    }


    function saveMyQuestions() {
      localStorage.setItem("codequiz-custom-questions-v1", JSON.stringify(myQuestions));
    }


    function updateQuestions() {
      questions = starterQuestions.concat(myQuestions);
      getElement("total-count").textContent = questions.length;
      getElement("my-count").textContent = myQuestions.length;
    }

    
    function showCard() {
      if (questions.length === 0) return;
      let question = questions[currentIndex];
      getElement("card-category").textContent = question.category;
      getElement("card-difficulty").textContent = question.difficulty;
      getElement("card-number").textContent = "Question " + (currentIndex + 1);
      getElement("card-question").textContent = question.question;
      getElement("card-answer").textContent = question.answer;
      getElement("card-answer").classList.add("hidden");
      getElement("card-count").textContent = (currentIndex + 1) + " / " + questions.length;
      getElement("rating-message").textContent = "";

      let savedRating = ratings[question.id];
      document.querySelectorAll(".rating").forEach(function(button) {
        button.classList.toggle("active", button.dataset.rating === savedRating);
      });
    }


    document.querySelectorAll("nav button").forEach(function(button) {
      button.addEventListener("click", function() {
        document.querySelectorAll(".page").forEach(function(page) {
          page.classList.add("hidden");
        });
        getElement(button.dataset.page).classList.remove("hidden");
        document.querySelectorAll("nav button").forEach(function(navButton) {
          navButton.classList.remove("active");
        });
        button.classList.add("active");
      });
    });

    getElement("show-answer").addEventListener("click", function() {
      getElement("card-answer").classList.remove("hidden");
    });

    getElement("hide-answer").addEventListener("click", function() {
      getElement("card-answer").classList.add("hidden");
    });

    getElement("previous").addEventListener("click", function() {
      currentIndex--;
      if (currentIndex < 0) currentIndex = questions.length - 1;
      showCard();
    });

    getElement("next").addEventListener("click", function() {
      currentIndex++;
      if (currentIndex >= questions.length) currentIndex = 0;
      showCard();
    });

    
    document.querySelectorAll(".rating").forEach(function(button) {
      button.addEventListener("click", function() {
        ratings[questions[currentIndex].id] = button.dataset.rating;
        localStorage.setItem("codequiz-personal-ratings-v1", JSON.stringify(ratings));
        getElement("rating-message").textContent = "Your rating was saved!";
        showCard();
        getElement("rating-message").textContent = "Your rating was saved!";
      });
    });


    function showQuestionList() {
      let list = getElement("question-list");
      let searchText = getElement("search").value.toLowerCase();
      let category = getElement("category-filter").value;
      let difficulty = getElement("difficulty-filter").value;
      list.innerHTML = "";
      let found = 0;

      questions.forEach(function(question) {
        let text = (question.question + " " + question.answer).toLowerCase();
        if (!text.includes(searchText)) return;
        if (category !== "all" && question.category !== category) return;
        if (difficulty !== "all" && question.difficulty !== difficulty) return;

        found++;
        let box = document.createElement("article");
        box.className = "question";

        let tags = document.createElement("p");
        tags.innerHTML = '<span class="tag">' + question.category + '</span><span class="tag">' + question.difficulty + '</span>';

        let title = document.createElement("h3");
        title.textContent = question.question;

        let answer = document.createElement("p");
        answer.className = "answer hidden";
        answer.textContent = "Answer: " + question.answer;

        let showButton = document.createElement("button");
        showButton.textContent = "Show answer";
        showButton.addEventListener("click", function() {
          answer.classList.toggle("hidden");
          showButton.textContent = answer.classList.contains("hidden") ? "Show answer" : "Hide answer";
        });

        box.appendChild(tags);
        box.appendChild(title);
        box.appendChild(answer);
        box.appendChild(showButton);

        
        if (myQuestions.some(function(item) { return item.id === question.id; })) {
          let deleteButton = document.createElement("button");
          deleteButton.textContent = "Delete";
          deleteButton.className = "delete-button";
          deleteButton.addEventListener("click", function() {
            if (confirm("Delete this question?")) {
              myQuestions = myQuestions.filter(function(item) { return item.id !== question.id; });
              saveMyQuestions();
              updateQuestions();
              showQuestionList();
              showCard();
            }
          });
          box.appendChild(deleteButton);
        }

        list.appendChild(box);
      });

      getElement("no-results").classList.toggle("hidden", found !== 0);
    }

    getElement("search").addEventListener("input", showQuestionList);
    getElement("category-filter").addEventListener("change", showQuestionList);
    getElement("difficulty-filter").addEventListener("change", showQuestionList);


    getElement("question-form").addEventListener("submit", function(event) {
      event.preventDefault();
      let newQuestion = {
        id: "my-" + Date.now(),
        category: getElement("new-category").value,
        question: getElement("new-question").value.trim(),
        answer: getElement("new-answer").value.trim(),
        difficulty: getElement("new-difficulty").value
      };

      if (newQuestion.question === "" || newQuestion.answer === "" || newQuestion.category === "") {
        getElement("form-message").textContent = "Please fill in every field.";
        return;
      }

      myQuestions.push(newQuestion);
      saveMyQuestions();
      updateQuestions();
      currentIndex = questions.length - 1;
      showCard();
      showQuestionList();
      getElement("question-form").reset();
      getElement("form-message").textContent = "Question saved! You can find it in Study Cards and All Questions.";
    });


    updateQuestions();
    showCard();
    showQuestionList();

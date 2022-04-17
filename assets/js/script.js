
var save = function() {
  localStorage.setItem("resultsContainer", JSON.stringify(resultsContainer));

};


(function(){
  var timeLeft = 60;
  var userAnswer = "";
  function buildQuiz(){     
      const output = [];  
     
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {  
          
          const answers = [];  
         
          for(letter in currentQuestion.answers){  
          
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
            
          output.push(
            `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
          );
        }
      );
       
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
      let score= timeLeft;
      const answerContainers = quizContainer.querySelectorAll('.answers');
       
      let numCorrect = 0;
        
      myQuestions.forEach( (currentQuestion, questionNumber) => {
        
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
         userAnswer = (answerContainer.querySelector(selector) || {}).value;
       
        if(userAnswer === currentQuestion.correctAnswer){
         score += 10 ;
          numCorrect++;
          
          
          answerContainers[questionNumber].style.color = 'lightgreen';
        }
        else{
          answerContainers[questionNumber].style.color = 'red';
          score-= 10;
        }

      });
     var name = window.prompt("Add your Name for your score!");
      resultsContainer.innerHTML = `${name} ${numCorrect} out of ${myQuestions.length} with ${score}seconds` ;
      
      
      var save = function() {
        localStorage.setItem("resultsContainer.innerHTML", JSON.stringify(resultsContainer.innerHTML));
        
      };
      
     
      save();
    }
  
    function showSlide(n) {
      slides[currentSlide].classList.remove('active-slide');
      slides[n].classList.add('active-slide');
      currentSlide = n;
      if(currentSlide === 0){
        previousButton.style.display = 'none';
      }
      else{
        previousButton.style.display = 'inline-block';
      }
      if(currentSlide === slides.length-1){
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';

      }
      else{
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
      }
    }
  
    function showNextSlide() {
      showSlide(currentSlide + 1);
      
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }
  
    
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
   //quiz questions and answers
    var myQuestions = [
        {
            question: "the condition in an if/else statement is enclosed with _______.",
            answers: {
                a: 'quotes',
                b: 'curly brackets',
                c: 'parenthesis',
                d: 'square brackets'
            },
            correctAnswer: 'b'
        },
        {
            question: "commonly used data types DO NOT include:",
            answers: {
                a: 'strings',
                b: 'alerts',
                c: 'numbers',
                d: 'booleans'
            },
            correctAnswer: 'b'
        },
        {
            question: "arrays in javascript can be used to store",
            answers: {
                a: 'numbers and strings',
                b: 'other arrays',
                c: 'booleans',
                d: 'all of the above'
            },
            correctAnswer: 'd'
        },
        {
            question: "string values must be enclosed within ______ when being assigned to variables",
            answers: {
                a: 'commas',
                b: 'curly brackets',
                c: 'quotes',
                d: 'parenthesis'
            },
            correctAnswer: 'b'
        },
        {
            question: "a very useful tool during development and debugging for printing content to the debugger is:",
            answers: {
                a: 'javaScript',
                b: 'terminal/bash',
                c: 'for loops',
                d: 'console.log'
            },
            correctAnswer: 'c'
        },
    
    
    
    
    ];
    
   
   
    buildQuiz();
    countdown();


    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    
    showSlide(currentSlide);
  
  
    submitButton.addEventListener('click', showResults);


    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
  
    var timerEl = document.getElementById('countdown');
    function countdown() {
     
    
      // TODO: sets up if statements for the setinterval function of 1000 
      var timeInterval = setInterval(function () {
        // TODO: if time is left is greater then 1 will dispalay amount of seconds counting down
        if (timeLeft > 1) {
          timerEl.textContent = timeLeft + ' seconds remaining';
          timeLeft--;
        } // TODO: if time is exactly 1 will display 1 second remaining
        else if (timeLeft === 1) {
          timerEl.textContent = timeLeft + ' second remaining';
          timeLeft--;
        } // TODO: when countdown stops words will appear in 1 second intervals
        else {
          timerEl.textContent = '';
          clearInterval(timeInterval);
          
        }
      }, 1000);
    }
  })();
  
 
 
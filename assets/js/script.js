
(function(){
  
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
  
      
      const answerContainers = quizContainer.querySelectorAll('.answers');
  
     
      let numCorrect = 0;
  
      
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
      
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
      
        if(userAnswer === currentQuestion.correctAnswer){
          numCorrect++;

          
          answerContainers[questionNumber].style.color = 'lightgreen';
        }
        else{
          answerContainers[questionNumber].style.color = 'red';
        }
      });
  
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
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
    var myQuestions = [
        {
            question: "the condition in an if/else statement is enclosed with _______.",
            answers: {
                a: 'quotes',
                b: 'curly brackets',
                c: 'parenthesis',
                d: 'square brackets'
            },
            correctAnswer: 'c'
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
  
   
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    
    showSlide(currentSlide);
  
  
    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
  })();
  
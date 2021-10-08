"use strict";

let responseData;
const request = fetch("code.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    responseData = data;
    initactivity();
  });
const initactivity = function () {
  const container = document.querySelector(".container");
  const title = document.createElement("div");
  const subTitle = document.createElement("div");
  const pageTitle = document.createElement("div");
  const instruction = document.createElement("div");
  const instruction1 = document.createElement("div");
  const questions = document.createElement("div");
  const answers = document.createElement("div");
  const content = document.createElement("div");
  const blankDiv=document.createElement('div');
  const reset=document.createElement('div');
  const showMe=document.createElement('div');
  const submit=document.createElement('div');

  title.className = "titleClass";
  subTitle.className = "subTitleClass";
  pageTitle.className = "pageTitleClass";
  instruction.className = "instructionClass";
  instruction1.className = "instruction1Class";
  questions.className = "questionsClass";
  blankDiv.className="blankDivClass";
  answers.className = "answersClass";
  content.className = "contentClass";
  reset.className="resetClass    resetDisableClass  ";
  showMe.className="showMeClass";
  submit.className="submitClass";




  reset.classList.remove('resetDisableClass');


  title.innerHTML = responseData.courseTitle;
  subTitle.innerHTML = responseData.subTitle;
  pageTitle.innerHTML = responseData.pageTitle;
  instruction.innerHTML = responseData.instruction;
  instruction1.innerHTML = responseData.instruction1;
  // reset = responseData.resetButton.image;
  // reset.innerHTML=responseData.resetButton.image;


  container.append(title);
  container.append(subTitle);
  container.append(pageTitle);
  container.append(instruction);
  container.append(instruction1);
  container.append(content);
  content.append(questions);
  content.append(blankDiv);
  content.append(answers);
  container.append(reset);
  container.append(showMe);
  container.append(submit);
  

 
  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  const numbersCopy = [...responseData.options];
  const shuffledOptions = shuffle(numbersCopy);

 

  for(let j=0; j<shuffledOptions.length; j++){
    const answerText = shuffledOptions[j]["answer"];
    const ansDiv = document.createElement("div");
    const line_Break = document.createElement("br");
    ansDiv.className = "ansDivClass";
    ansDiv.append(line_Break);
    ansDiv.append(answerText);
    answers.append(ansDiv);
   
    
    let pointer;
    // ansDiv.addEventListener("mousedown", onMouseDown);
    // function onMouseDown(e){
    //   pointer = e.target;
    //   console.log("pointer",pointer)

    //   document.addEventListener("mousemove", onMouseMove);
    //    document.addEventListener("mouseup", onMouseUp);
    // }
    // function onMouseMove(e){
    //   console.log("onMouseMove", onMouseMove)
    //   pointer.left = e.pageX;
    //   pointer.top = e.pageY;
    // }
    // function onMouseUp(e){
    //   var bool = false;
    //   for(var i=0; i<shuffledOptions.length; i++){
    //     if(bool){
    //       bool = true;
    //       pointer.left = this["rect_"+i].left;
    //       pointer.top = this["rect_"+i].right;
    //       break;
    //     }
    //   }
    //   // if(!bool){
    //   //   pointer.left = org.x;
    //   //   pointer.top = org.y;
    //   // }
    //   document.removeEventListener("mousemove", onMouseMove);
    //   document.removeEventListener("mouseup", onMouseUp);
    // }

    ansDiv.onmousedown = function(event) {
      // (1) prepare to moving: make absolute and on top by z-index
      ansDiv.style.position = 'absolute';
      ansDiv.style.zIndex = 1000;
    
      // move it out of any current parents directly into body
      // to make it positioned relative to the body
      document.body.append(ansDiv);
    
      // centers the ansDiv at (pageX, pageY) coordinates
      function moveAt(pageX, pageY) {
        ansDiv.style.left = pageX - ansDiv.offsetWidth / 2 + 'px';
        ansDiv.style.top = pageY - ansDiv.offsetHeight / 2 + 'px';
      }
    
      // move our absolutely positioned ansDiv under the pointer
      moveAt(event.pageX, event.pageY);
    
      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
      }
    
      // (2) move the ansDiv on mousemove
      document.addEventListener('mousemove', onMouseMove);
    
      // (3) drop the ansDiv, remove unneeded handlers
      ansDiv.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        ansDiv.onmouseup = null;
      };
    
    };
  }

  for (let i = 0; i < responseData.options.length; i++) {
    // console.log("responseData.options[i]", responseData.options[i]['question']);
    const text = responseData.options[i]["question"];
    const lineBreak = document.createElement("br");
    const queDiv = document.createElement("div");
    queDiv.className = "queDivClass";

    queDiv.appendChild(lineBreak);
    queDiv.append(`${[i]}:${text}`);
    questions.append(queDiv);

    

   
    
    // const ansDiv = document.createElement("div");
    // const line_Break = document.createElement("br");
    // ansDiv.className = "ansDivClass";
    // ansDiv.append(line_Break);
    // ansDiv.append(answerText);
    
    // answers.append(ansDiv);
    // console.log(answerText);
  

    const answerText = responseData.options[i]["answer"];
   const bDiv=document.createElement('div');
   const inDiv=document.createElement('div');
   const lineBreak1 = document.createElement("br");
    bDiv.className="bdiv    bDivAnswersClass";
    inDiv.className='inDivClass';
    inDiv.append(answerText)
    bDiv.append(inDiv);
    blankDiv.append(bDiv);
     

  

  showMe.addEventListener('click',function(){
    inDiv.style.opacity=100;
  })

   

  

  
  }




} 



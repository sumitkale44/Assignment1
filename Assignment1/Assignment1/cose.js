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

  title.className = "titleClass";
  subTitle.className = "subTitleClass";
  pageTitle.className = "pageTitleClass";
  instruction.className = "instructionClass";
  instruction1.className = "instruction1Class";
  questions.className = "questionsClass";
  blankDiv.className="blankDivClass";
  answers.className = "answersClass";
  content.className = "contentClass";


  title.innerHTML = responseData.courseTitle;
  subTitle.innerHTML = responseData.subTitle;
  pageTitle.innerHTML = responseData.pageTitle;
  instruction.innerHTML = responseData.instruction;
  instruction1.innerHTML = responseData.instruction1;

  container.append(title);
  container.append(subTitle);
  container.append(pageTitle);
  container.append(instruction);
  container.append(instruction1);
  container.append(content);
  content.append(questions);
  content.append(blankDiv);
  content.append(answers);
  
 

  for (let i = 0; i < responseData.options.length; i++) {
    // console.log("responseData.options[i]", responseData.options[i]['question']);
    const text = responseData.options[i]["question"];
    const lineBreak = document.createElement("br");
    const queDiv = document.createElement("div");
    queDiv.className = "queDivClass";

    queDiv.appendChild(lineBreak);
    queDiv.append(`${[i]}:${text}`);
    questions.append(queDiv);

    const bDiv=document.createElement('div');
    bDiv.className="bdiv";
    blankDiv.append(bDiv);

    const answerText = responseData.options[i]["answer"];
    const line_Break = document.createElement("br");
    const ansDiv = document.createElement("div");
    ansDiv.className = "ansDivClass";
    ansDiv.append(line_Break);
    ansDiv.append(answerText);
    answers.append(ansDiv);
    

    
  }
 
};



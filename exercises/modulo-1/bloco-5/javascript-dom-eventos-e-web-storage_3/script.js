function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
// 1) 
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;

let listaDez = document.querySelector('#days');

for (let index = 0; index < dezDaysList.length; index += 1) {
  let day = dezDaysList[index];

  if (day == 24 || day == 31){
    let daysDez = document.createElement('li'); 
    daysDez.className = 'day holiday';
    daysDez.innerText = day;
    listaDez.appendChild(daysDez);
  } else if (day == 4 | day == 11 | day == 18){
    let daysDez = document.createElement('li'); 
    daysDez.className = 'day friday';
    daysDez.innerText = day;
    listaDez.appendChild(daysDez);
  } else if (day == 25){
    let daysDez = document.createElement('li'); 
    daysDez.className = 'day holiday friday';
    daysDez.innerText = day;
    listaDez.appendChild(daysDez);
  } else {
    let daysDez = document.createElement('li'); 
    daysDez.className = 'day';
    daysDez.innerText = day;
    listaDez.appendChild(daysDez);
  }
}
// 2) 

function holidayButton(buttonName) {
  let botao = document.querySelector(".buttons-container");
  let newButton = document.createElement("button");
  newButton.id = "btn-holiday";
  newButton.innerHTML = buttonName;
  botao.appendChild(newButton);
};
holidayButton('Feriados');




// 3) Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .
function displayHolidays() {
  let getHolidayButton = document.querySelector('#btn-holiday');
  let getHolidays = document.querySelectorAll('.holiday')
  

  getHolidayButton.addEventListener('click', function() {
    for (let index = 0; index < getHolidays.length; index += 1) {
      if (getHolidays[index].style.backgroundColor === 'white') {
        getHolidays[index].style.backgroundColor = 'rgb(238,238,238)';
      } else {
        getHolidays[index].style.backgroundColor = 'white';
      }
    }
  })
};

displayHolidays();

// 4) Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// Adicione a este botão o ID "btn-friday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

function fridayButton(buttonFriday) {
  let botaoFriday = document.querySelector(".buttons-container");
  let newButtonFriday = document.createElement("button");
  newButtonFriday.id = "btn-friday";
  newButtonFriday.innerHTML = buttonFriday;
  botaoFriday.appendChild(newButtonFriday);
};
fridayButton('Sexta-Feira');


// 5) Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.

function displayFriday() {
  let getFridayButton = document.querySelector('#btn-friday');
  let getFriday = document.querySelectorAll('.friday')
  

  getFridayButton.addEventListener('click', function() {
    for (let index = 0; index < getFriday.length; index += 1) {
      if (getFriday[index].style.backgroundColor === 'white') {
        getFriday[index].style.backgroundColor = 'rgb(238,238,238)';
      } else {
        getFriday[index].style.backgroundColor = 'white';
      }
    }
  })
};

displayFriday();

// 6) Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.

function dayMouseOver() {
  let zoom = document.querySelector("#days");
  zoom.addEventListener("mouseover", dayZoom);
  function dayZoom (event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  }
};
 function dayMouseOut() {
  let zoom = document.querySelector("#days");
  zoom.addEventListener('mouseout', function(event){
    event.target.style.fontWeight = '200';
    event.target.style.fontSize = '20px';
  })
};
 
dayMouseOver();
dayMouseOut();

// 7) Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

// function taskDay(task) {
//   let taskContainer = document.querySelector('.my-tasks');
//   let taskSpan = document.createElement('span');

//   taskSpan.innerHTML = task;
//   taskContainer.appendChild(taskSpan);
// };

// taskDay('Projeto:');

function taskDay(task) {
  document.querySelector('.my-tasks').appendChild(document.createElement('span'));
  document.createElement('span').innerHTML = task;  
};

taskDay('Projeto:');

// function newTaskSpan(task) {

//   let tasksContainer = document.querySelector('.my-tasks');
//   let taskName = document.createElement('span');

//   taskName.innerHTML = task;
//   tasksContainer.appendChild(taskName);
// };

// newTaskSpan('Projeto:');

// 8) Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

function newTaskDiv(color) {

  let tasksContainer = document.querySelector('.my-tasks');
  let newTask = document.createElement('div');

  newTask.className = 'task';
  newTask.style.backgroundColor = color;
  tasksContainer.appendChild(newTask);
};

newTaskDiv('green');

// 9) Implemente uma função que adiciona um evento que ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected ela estará selecionada.
// Ao clicar novamente no elemento a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.

function setTaskClass() {
  let selectedTask = document.getElementsByClassName('task selected');
  let myTasks = document.querySelector('.task');

  myTasks.addEventListener('click', function(event) {
    if (selectedTask.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  });
};

setTaskClass();


// 10) Implemente uma função que adiciona um evento que ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
// Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119) .

function setDayColor() {
  let selectedTask = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;
  
  days.addEventListener('click', function(event){
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
};

setDayColor();


// bonus) Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".
// Se nenhum caractere for inserido no campo input , a função deve retornar um alert com uma mensagem de erro ao clicar em "ADICIONAR".
// Ao pressionar a tecla "enter" o evento também deverá ser disparado.

function addNewTask() {
  let getInputField = document.querySelector('#task-input');
  let addInputButton = document.querySelector('#btn-add');
  let getTaskList = document.querySelector('.task-list');

  addInputButton.addEventListener('click', function() {
    if (getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    } else {
      alert('Error: Digite ao menos 1 caractere.');
    }
  })

  getInputField.addEventListener('keyup', function(event) {
    if (event.keyCode === 13 && getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    }
  });
};

addNewTask();
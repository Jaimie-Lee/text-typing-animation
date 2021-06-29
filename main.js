let target = document.querySelector('#dynamic');


function randomString(){
  // 글자배열
  let stringArr = ['Learning to HTML', 'Learning to CSS', 'Learning to JavaScript', 'Learning to React','Learning to Python'];

  // 랜덤으로 배열 호출 (math.floor 이용해서 소숫점 없이)
  let selectString = stringArr[Math.floor(Math.random() * stringArr.length)]

  // split으로 한글자씩 출력
  let selectStringArr = selectString.split('');

  return selectStringArr;
}

// Typing Reset (3초 뒤에 새로운 배열 출력)
function resetTyping(){
  target.textContent = '';
  dynamic(randomString());
}

// Setinerval Function (한글자씩 텍스트 출력 함수)
function dynamic(randomArr){
  console.log(randomArr);

  if(randomArr.length > 0) {
    target.textContent += randomArr.shift();
    setTimeout(function(){
      dynamic(randomArr);  
    },80)
  }else{
    setTimeout(resetTyping, 3000);
  }
}

dynamic(randomString());

// Blinking effect (커서 깜박임 함수)
function blink(){
  target.classList.toggle('active');
}
setInterval(blink, 500);
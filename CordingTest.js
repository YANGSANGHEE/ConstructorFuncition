// Question : 1부터 20까지의 범위 중 임의의 숫자 세 개가 있다.
// 공식(formula) : (x + y + z) / 3
// 10미만은 10을 포함하지 않는다.
// 1. 평균값이 10 미만이면 'under' 라는 메세지를 출력한다.
// 2. 평균값이 10 이상히면 'over' 라는 메세지를 출력한다.
// 3. 플로우차트(flowchart) : 순서도를 작성한다.

// Advanced
// a. 1부터 20까지의 범위 중 임의의 3개의 숫자가 중복되지 않은 난수를 배열, inputData에 담기도록 처리하시오.
// b. 객체 objectData의 property인 key, "first", "second", "third"에 주문 a를 통해 얻은 데이터를 각각의 키(key)의 값으로 삽입(insert)하시오.
// const objectData = { first : 0, second : 0, third: 0};
// b. objectData에 담긴 세 개의 난수 중 중앙값에 해당하는 값을 출력하시오.



// 배열길이에 따른 중복제외 랜덤값 넣기

let inputData = []; // 빈배열 선언
function inputrRanNum(arr, count) {
  for (let i = 0; i < count; i++) {
    let RanNum = Math.floor(Math.random() * 20) + 1; //20까지의 난수 생성
    if (!SamNum(RanNum)) {
      arr.push(RanNum); // RanNum으로 들어오는 난수가 루프를 돌면서 들어와있던
      // 난수랑 같이 같지 않다면
    } else {
      i--; // 숫자가 중복되면 루프 카운트 줄어듬(다시 순회할 수 있게)
    }
    function SamNum(nums) {
      return arr.find((value) => value === nums); // inputData의 배열 요소랑 동일한 숫자를 찾아냄
    }
  }
}
inputrRanNum(inputData, 3);

const objectData = {
  first: inputData[0],
  second: inputData[1],
  third: inputData[2],
};

function Average(x, y, z) {
  let average = (x + y + z) / 3;
  if (average < 10) {
    console.log('under');
  } else {
    console.log('over');
  }
}
Average(objectData.first, objectData.second, objectData.third);

let arr = [];
for (const key in objectData) {
  arr.push(objectData[key]);
}

// 중앙값 구하기
function midde(arr) {
  arr.sort((a, b) => {
    return a - b;
  }); // 배열 오름차순 정렬
  let length = arr.length;
  console.log(arr);
  if (length % 2 === 1) {
    console.log(arr[parseInt(length / 2)]); //배열 길이가 홀수 일때 중앙값
  } else {
    console.log((arr[length / 2 - 1] + arr[length / 2]) / 2); //배열 길이가 짝수 일때 중앙값
  }
}
midde(arr);

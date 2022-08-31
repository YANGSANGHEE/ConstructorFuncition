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

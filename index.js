// function 사용
function kdt(name, glass, payment) {
  this.id = name;
  this.KDTglass = glass;
  this.KDTpayment = payment;
}
const members = [];
for (let i = 0; i < 5; i++) {
  members.push(new kdt(i + 1, 'hello', 'bye'));
}

// 객체의 '틀'을 만드는 과정 : 생성자함수(함수인데 객체를 만드는게 목적임) / constructor function
// 생성자 함수로부터 '만들어진 결과물' = 객체(인스턴스) / 생성자 함수로부터 객체가 조립되었다.
// 객체 리터럴(수공예) VS 객체 인스턴스(양산품)

// practice
// class 사용
// class StudentList {
//   constructor(id, name, Class) {
//     this.id = id;
//     this.names = name;
//     this.class = Class;
//   }
//   log() {
//     console.log(
//       `ID : ${this.id} / names : ${this.names} / class : ${this.class}`
//     );
//   }
// }
function StudentList(id, name, Class, adress) {
  this.id = id;
  this.name = name;
  this.class = Class;
  this.adress = adress;
}
let studentList = [
  '강예훈',
  '김성현',
  '류주완',
  '마근원',
  '문예찬',
  '박종인',
  '박재형',
  '송형주',
  '양상희',
  '원두진',
  '유민호',
  '이상호',
  '이소영',
  '이은수',
  '정동욱',
  '정윤환',
  '정정원',
  '지영빈',
  '한용준',
  '황초영',
  '김근수',
  '김승현',
  '김지애',
  '전형민',
  '정연주',
  '이아연',
  '최화연',
  '한가람',
];
const aboutStudent = [];
// for (let i = 0; i < studentList.length; i++) {
//   aboutStudent.push(new StudentList(i + 1, studentList[i], 'KDT')); // 새배열에 인스턴스화한 데이터 넣음
//   const myClass = new StudentList(i + 1, studentList[i], 'KDT');
//   myClass.logs(); // 클래스 메서드 호출
// }
// console.table(aboutStudent);

// aboutStudent.forEach((value) => {
//   if (value.id % 2 === 0) {
//     console.log(value);
//   }
// });

for (let i = 0; i < studentList.length; i++) {
  aboutStudent.push(new StudentList(i + 1, studentList[i], 'KDT', '모름')); // 새배열에 인스턴스화한 데이터 넣음
}
// console.table(aboutStudent);
aboutStudent.forEach((value) => {
  // console.log(value.name);
  if (value.name.startsWith('김')) {
    value.name = value.name.replace('김', '금'); // 김씨성 금씨로 바꿨음
  }
  if (value.id % 2 === 0) {
    value.name = value.name + '★'; //짝수 ID를 가지신분들 이름 뒤에 ★붙임
  }
  if (value.name.includes('전형민')) {
    value.adress = '알고있음'; // 전형민씨 주소 알고있음으로함
  }
});
console.table(aboutStudent);

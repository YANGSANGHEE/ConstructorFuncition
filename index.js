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
class StudentList {
  constructor(id, name, Class) {
    this.id = id;
    this.names = name;
    this.class = Class;
  }
  log() {
    return `${this.id} ${this.names} ${this.class}`;
  }
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
for (let i = 0; i < studentList.length; i++) {
  aboutStudent.push(new StudentList(i + 1, studentList[i], 'KDT'));
  const myClass = new StudentList(i + 1, studentList[i], 'KDT');
  console.log(myClass.log());
}
console.log(aboutStudent);

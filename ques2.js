const students = [
  { name: "John", age: 20 },
  { name: "Mary", age: 21 },
  { name: "Shubham", age: 21 },
  { name: "Sam", age: 21 },
  { name: "Aman", age: 20 },
];

const groupBy = (studentsArr, property) => {
  let resultObj = {};

  studentsArr.forEach((student) => {
    if (resultObj.hasOwnProperty(student[property])) {
      const initState = resultObj[student[property]];
      initState.push(student);
      resultObj[student[property]] = initState;
    } else {
      resultObj[student[property]] = [student];
    }
  });

  return resultObj;
};

console.log(groupBy(students, "age"));

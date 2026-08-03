class Student {
    constructor(name, score1, score2, score3) {
        this.name = name;
        this.score1 = Number(score1);
        this.score2 = Number(score2);
        this.score3 = Number(score3);
    }

    getTotal() {
        return this.score1 + this.score2 + this.score3;
    }

    getAverage() {
        return this.getTotal() / 3;
    }

    getGrade() {
        let avg = this.getAverage();

        if (avg >= 70) return "A";
        if (avg >= 60) return "B";
        if (avg >= 50) return "C";
        if (avg >= 45) return "D";
        if (avg >= 40) return "E";
        return "F";
    }

    getStatus() {
        return this.getAverage() >= 50 ? "Pass" : "Fail";
    }
}

let students = JSON.parse(localStorage.getItem("students")) || [];

displayStudents();

function addStudent() {

    let name = document.getElementById("name").value.trim();
    let score1 = document.getElementById("score1").value;
    let score2 = document.getElementById("score2").value;
    let score3 = document.getElementById("score3").value;

    if (name === "" || score1 === "" || score2 === "" || score3 === "") {
        alert("Please fill all fields.");
        return;
    }

    let student = new Student(name, score1, score2, score3);

    students.push(student);

    localStorage.setItem("students", JSON.stringify(students));

    displayStudents();

    document.getElementById("name").value = "";
    document.getElementById("score1").value = "";
    document.getElementById("score2").value = "";
    document.getElementById("score3").value = "";
}

function displayStudents() {

    let table = document.getElementById("records");

    table.innerHTML = "";

    for (let i = 0; i < students.length; i++) {

        let student = students[i];

        let row = `
        <tr>
            <td>${student.name}</td>
            <td>${student.score1 + student.score2 + student.score3}</td>
            <td>${((student.score1 + student.score2 + student.score3)/3).toFixed(2)}</td>
            <td>${new Student(student.name, student.score1, student.score2, student.score3).getGrade()}</td>
            <td>${new Student(student.name, student.score1, student.score2, student.score3).getStatus()}</td>
            <td><button class="delete-btn" onclick="deleteStudent(${i})">Delete</button></td>
        </tr>
        `;

        table.innerHTML += row;
    }

}

function deleteStudent(index){

    students.splice(index,1);

    localStorage.setItem("students", JSON.stringify(students));

    displayStudents();

}
class Student {
    constructor(first_name,last_name,year_birth,grade) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.year_birth = year_birth;
    this.grade = grade;
    this.visit = Array.from({length:25}).fill(null);
    }
    getFullName(){               //добавил для красоты вывода ответа summary();
        return (`${this.first_name} ${this.last_name}`);
    }
    getAvgGrade(){
        return (this.grade.reduce((a, b) => a + b, 0)/ this.grade.length).toFixed(2);
    }
    getAge(){
        return new Date().getFullYear() - this.year_birth;
    }
    present(){
        for(let i=0 ; i<=this.visit.length;i++){
            if(this.visit[i] === null){
                this.visit[i] = true;
                return this;
            }
        }
        return this;
    }
    absent(){
        for(let i=0 ; i<=this.visit.length;i++){
            if(this.visit[i] === null){
                this.visit[i] = false;
                return this;
            }
        }
        return this;
    }
    getAvgVisit(){                      //добавил метод для удобства
        let countVisit = 0;
        for (let i = 0; i<=this.visit.length;i++){
            if(this.visit[i] === true){
                countVisit++;
            }
        }
        return countVisit/this.visit.length;
    }
    summary(){
        if(this.getAvgVisit() > 0.9 && this.getAvgGrade() > 90){
            return 'Молодец! ' + this.getFullName();
        } else if(this.getAvgVisit() > 0.9 || this.getAvgGrade() > 90){
            return 'Хорошо, но можно лучше. ' + this.getFullName();
        }else {
            return 'Редиска ' + this.getFullName();
        }

    }
}

let student1 = new Student('Tommy','Jonson',1993,[100,100,100,100,99,99,99,89,89]);
student1.present().present().present().present().present().present().present().present();
student1.present().present().present().present().present().present().present().present();
student1.present().present().present().present().present().present().present().present().absent();
student1.absent().absent(); // лишние посещения 26 и 27, для проверки что не добавит новые елементы в массив посещения.

let student2 = new Student('Пётр','Петрович',2000,[80,100,80,100,90,90,90,90,95]);
student2.present().present().present().present().present().present().present().present();
student2.absent().absent().absent().absent().absent().absent().absent().absent();
student2.present().present().present().present().present().present().present().present().present();
student2.absent().absent(); // лишние посещения 26 и 27, для проверки что не добавит новые елементы в массив посещения.

let student3 = new Student('Стёпа','Степанович',1999,[10,5,2,5,5,5,5,5,1]);
student3.absent().absent().absent().absent().absent().absent().absent().absent();
student3.absent().absent().absent().absent().absent().absent().absent().absent();
student3.present().present().present().present().present().present().present().present().present();
student3.absent().absent(); // лишние посещения 26 и 27, для проверки что не добавит новые елементы в массив посещения.

console.log(student1);
console.log(student1.getAge() + ' - Возрост студента');
console.log(student1.getAvgGrade() + ' - средний бал студента');
console.log(student1.getAvgVisit() + ' - средняя пощещаемость студента');
console.log(student1.summary());

console.log(student2);
console.log(student2.getAge() + ' - Возрост студента');
console.log(student2.getAvgGrade() + ' - средний бал студента');
console.log(student2.getAvgVisit() + ' - средняя пощещаемость студента');
console.log(student2.summary());

console.log(student3);
console.log(student3.getAge() + ' - Возрост студента');
console.log(student3.getAvgGrade() + ' - средний бал студента');
console.log(student3.getAvgVisit() + ' - средняя пощещаемость студента');
console.log(student3.summary());
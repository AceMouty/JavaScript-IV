// CODE here for your Lambda Classes

// =================================================
// Person Class
// =================================================
class Person{
	
	// Properties
	constructor(personObj){
		this.name = personObj.name;
		this.age = personObj.age;
		this.location = personObj.location;
	}

	// Mehtods
	speak(){
		return console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
	}

}


// ====================================================
// Instructor Class
// ====================================================
class Instructor extends Person{

	// Properties
	constructor(instructorObj){
		super(instructorObj);
		this.specialty = instructorObj.specialty;
		this.favLanguage = instructorObj.favLanguage;
		this.catchPhrase = instructorObj.catchPhrase;
	}

	// Methods
	demo(subject) {
		return console.log(`Today we are learning about ${subject}`)
	}

	grade(studentObj, subject) {
		return console.log(`${studentObj.name} recieves a perfect score on ${subject}`);
	}

	// Stretch
	updateGrade(studentObj){
		
		const operators = ["-", "+"]
		let grade = studentObj.grade
		const randomNumber = Math.floor(Math.random() * 101);

		// First randomly decide if you are going to add or subtract, achieved with randomly selecting a math operator out of the array
		// Next add or subtract a score wiht a number between 1 - 100 chosen at random
		// 	if(grade >= 70){
		// 		 return studentObj.graduate();

		// 	 }else if(operators[Math.floor(Math.random() * Math.floor(2))] === "+"){

		// 		return grade + (Math.floor(Math.random() * Math.floor(100)));

		// } else if (operators[Math.floor(Math.random() * Math.floor(2))] === "-"){

		// 		return grade - (Math.floor(Math.random() * Math.floor(100)))
		// }

		while(grade < 70 || grade > 100){
			const operator = Math.floor(Math.random() * 2);

			if(operators[operator] === "+"){

				 grade += randomNumber;
		
			} else if (operators[operator] === "-"){
		
				grade -= randomNumber

			}
			

		}

		return console.log(`${studentObj.name} can now graduate with a passing score of ${grade}`);
		
	}

}

// ===========================================================
// Student Class
// ===========================================================
class Student extends Person {

	// Properties
	constructor(studentObj){
		super(studentObj);
		this.previousBackground = studentObj.previousBackground;
		this.className = studentObj.className;
		this.favSubjects = studentObj.favSubjects;
		this.grade = studentObj.grade;
	}

	// Methods
	listSubjects(){
		this.favSubjects.forEach( subject => {
			return console.log(subject);
		});
	}

	PRAssignments(subject){
		return console.log(`${this.name} has submitted a PR for ${subject}`);
	}

	sprintChallenge(subject){
		return console.log(`${this.name} has has begun sprint challenge on ${subject}`);
	}

	// Stretch
	graduate(graderObj, cb){

		if(this.grade >= 70){
			return console.log(`Hooray! I am graduating with a score of ${this.grade}%`)
		} else {
			console.log(`I currently have a score of ${this.grade}% I will have to redo assigments and have them graded again by ${graderObj.name}`);
			return cb(graderObj.updateGrade(this));
		}

	}

}

// ===============================================
// ProjectManager Class
// ===============================================
class ProjectManager extends Instructor{
	
	// Properties
	constructor(pmObj){
		super(pmObj)
		this.gradClassName = this.gradClassName;
		this.favInstructor = this.favInstructor;
	}

	// Methods
	standUp(channel) {
		return console.log(`${this.name} announces to ${channel}, @channel standy times!`);
	}

	debugsCode(studentObj, subject) {
		return console.log(`${this.name} debugs ${studentObj.name}'s code on ${subject}`);
	}

}


// ================================================================
// Students, PM's, Instructors Ect.
// ================================================================

const steve = new ProjectManager({
  name: 'Steve',
  location: 'Colorado',
  age: 100,
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
	catchPhrase: `No one gets left behind`,
	gradClassName: 'CS1k',
	favInstructor: 'Dan & Josh'
});

const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});

const billy = new Student({
	name: 'Billy',
	age: 23,
	location: 'Ohio',
	previousBackground: 'Construction',
	className: 'Web Ducks',
	favSubjects: ['FE', 'BE', "API's"],
	// Stretch
	grade: 50
});



// Instructor Method Tests.
console.log();
fred.speak();
console.log();
fred.demo("UI/UX");
console.log();
fred.grade(billy, billy.favSubjects[2]);
console.log();
billy.speak();
console.log();
console.log("Student Subjects");
billy.listSubjects();
console.log();
console.log("Student PR Assignment");
billy.PRAssignments("Flexbox");
console.log();
console.log("Sprint Chalenge");
billy.sprintChallenge("Applied JS");
console.log();
console.log('Announcement')
steve.standUp('web22_steve-rollins');
console.log();
console.log("Debugs Code");
steve.debugsCode(billy, billy.favSubjects[0]);
console.log();
steve.speak();


// ==========================
// Stretch
// =========================
console.log(billy.grade);

billy.graduate(steve, function(grade){
	billy.grade = grade
});

// billy.graduate(steve, function(result){
// 	billy.grade = result
// })

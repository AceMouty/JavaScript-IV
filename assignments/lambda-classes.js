// CODE here for your Lambda Classes


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

}


class Student extends Person {

	// Properties
	constructor(studentObj){
		super(studentObj);
		this.previousBackground = studentObj.previousBackground;
		this.className = studentObj.className;
		this.favSubjects = studentObj.favSubjects;
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

}

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
	favSubjects: ['FE', 'BE', "API's"]
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


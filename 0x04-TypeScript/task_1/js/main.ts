interface Teacher {
	firstName: string;
	lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[key: string]: any;
}
const teacher3: Teacher = {
	firstName: "John",
	lastName: "Doe",
	fullTimeEmployee: false,
	location: "London",
	contract: false,
}
console.log(teacher3);

interface Director extends Teacher {
	numberOfReports: number;
}
const director1: Director = {
	firstName: "John",
	lastName: "Doe",
	location: "London",
	fullTimeEmployee: true,
	numberOfReports: 17,
}
console.log(director1);

function printTeacher(firstName: string, lastName: string): string {
	const initial: string[] = firstName.split("");
	return `${initial[0]}. ${lastName}`;
}
printTeacher("John", "Doe");

interface StudentConstructor {
	firstName: string;
	lastName: string;
}

interface Student {
	workOnHomework(): string;
	displayName(): string;
}

class StudentClass implements Student {
	private firstName: string;
	private lastName: string;

	constructor({ firstName, lastName }: StudentConstructor) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
	workOnHomework(): string {
		return "Currently working";
	}
	displayName(): string {
		return this.firstName;
	}
}

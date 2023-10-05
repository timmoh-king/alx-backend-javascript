interface DirectorInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workDirectorTasks(): string;
}
interface TeacherInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workTeacherTasks(): string;
}
class Director implements DirectorInterface {
	workFromHome(): string {
		return "Working from home";
	}
	getCoffeeBreak(): string {
		return "Getting a coffee break";
	}
	workDirectorTasks(): string {
		return "Getting to director tasks";
	}
}
class Teacher implements TeacherInterface {
	workFromHome(): string {
		return "Cannot work from home";
	}
	getCoffeeBreak(): string {
		return "Cannot have a break";
	}
	workTeacherTasks(): string {
		return "Getting to work";
	}
}
function createEmployee(salary: number | string): Director | Teacher {
	if (typeof salary === 'number' && salary < 500) {
		return new Teacher;
	}
	return new Director;
}

//start of task 6
interface Employee {
	work(): string;
}

interface Director extends Employee {
	workDirectorTasks(): string;
}

interface Teacher extends Employee {
	workTeacherTasks(): string;
}

function isDirector(employee: Employee): employee is Director {
	return "workDirectorTasks" in employee;
}

function isTeacher(employee: Employee): employee is Teacher {
	return "workTeacherTasks" in employee;
}

function executeWork(employee: Employee): string {
	if (isDirector(employee)) {
		return employee.workDirectorTasks();
	} else if (isTeacher(employee)) {
		return employee.workTeacherTasks();
	}
}
//end of task 6

type Subjects = "Math" | "History";

function teachClass(todayClass: Subjects): string {
	if (todayClass === "Math") {
		return "Teaching Math";
	} else if (todayClass === "History") {
		return "Teaching History";
	} else {
		return "Unknown subject";
	}
}

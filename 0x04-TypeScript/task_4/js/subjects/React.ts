namespace Subjects {
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  export class React extends Subjects.Subject {
	  getRequirements(): string {
		  return "Here is the list of requirements for React";
	  }
	  getAvailableTeacher(): string {
		  if (this.teacher && this.teacher.experienceTeachingC) {
			  return `Available Teacher: ${this.teacher.firstName}`;
		  } else {
			  return 'No available teacher';
		  }
	  }
  }
}

import { Subject } from 'rxjs/Subject';

export class TodoService {

	appareilsSubject = new Subject<any[]>();

	private tasks = [
		{
			id: 1,
			name: 'Trier la liste',
			urgentStatus: 'urgent'
		},
		{
			id: 2,
			name: 'Lier la database',
			urgentStatus: 'hight'
		},
		{
			id: 3,
			name: 'tester le projet',
			urgentStatus: ''
		},
		{
			id: 4,
			name: 'debugger',
			urgentStatus: 'cool'
		},
		{
			id: 5,
			name: 'debugger',
			urgentStatus: 'cool'
		},
		{
			id: 6,
			name: 'debugger',
			urgentStatus: 'cool'
		},
		{
			id: 7,
			name: 'debugger',
			urgentStatus: 'cool'
		},
		{
			id: 8,
			name: 'debugger',
			urgentStatus: 'cool'
		},
		{
			id: 9,
			name: 'debugger',
			urgentStatus: 'cool'
		}
	];

	emitAppareilSubject() {
		this.appareilsSubject.next(this.tasks.slice());
	}

	newTask(newone) {
		let nexttask = {
			id: this.tasks.length + 1,
			name: newone,
			urgentStatus : "normal"
		};
		if(newone != "") {
			this.tasks.push(nexttask);
			this.emitAppareilSubject();
		}
	}

	// switchOnAll() {
	// 	for(let appareil of this.tasks) {
	// 		appareil.status = 'check';
	// 	}
	// 	this.emitAppareilSubject();
	// }
	//
	// switchOffAll() {
	// 	for(let appareil of this.tasks) {
	// 		appareil.status = 'éteint';
	// 		this.emitAppareilSubject();
	// 	}
	// }
	//
	// switchOnOne(i: number) {
	// 	this.tasks[i].status = 'check';
	// 	this.emitAppareilSubject();
	// }
	//
	// switchOffOne(i: number) {
	// 	this.tasks[i].status = 'éteint';
	// 	this.emitAppareilSubject();
	// }

	deleteTask(i: number) {
		if (i > -1) {
			this.tasks.splice(i, 1);
			this.emitAppareilSubject();
		}
	}

}

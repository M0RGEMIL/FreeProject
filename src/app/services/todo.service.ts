import { Subject } from 'rxjs/Subject';

export class TodoService {

	appareilsSubject = new Subject<any[]>();

	private tasks = [
		{
			id: 1,
			name: 'Trier la liste',
			createdAt: 'Tue Feb 09 2021 18:39:44 GMT+0100',
			urgentStatus: 'urgent'
		},
		{
			id: 2,
			name: 'Lier la database',
			createdAt: 'Tue Feb 09 2021 18:39:44 GMT+0100',
			urgentStatus: 'hight'
		},
		{
			id: 3,
			name: 'tester le projet',
			createdAt: 'Tue Feb 09 2021 18:39:44 GMT+0100',
			urgentStatus: ''
		},
		{
			id: 4,
			name: 'debugger',
			createdAt: 'Tue Feb 09 2021 18:39:44 GMT+0100',
			urgentStatus: 'cool'
		},
		{
			id: 5,
			name: 'debugger',
			createdAt: 'Tue Feb 09 2021 18:39:44 GMT+0100',
			urgentStatus: 'cool'
		},
		{
			id: 6,
			name: 'debugger',
			createdAt: 'Tue Feb 09 2021 18:39:44 GMT+0100',
			urgentStatus: 'cool'
		},
		{
			id: 7,
			name: 'debugger',
			createdAt: 'Tue Feb 09 2021 18:39:44 GMT+0100',
			urgentStatus: 'cool'
		},
		{
			id: 8,
			name: 'debugger',
			createdAt: 'Tue Feb 09 2021 18:39:44 GMT+0100',
			urgentStatus: 'cool'
		},
		{
			id: 9,
			name: 'debugger',
			createdAt: 'Tue Feb 09 2021 18:39:44 GMT+0100',
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
			createdAt : "" + new Date(),
			urgentStatus : ""
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

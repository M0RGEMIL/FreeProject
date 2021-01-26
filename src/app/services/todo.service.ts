import { Subject } from 'rxjs/Subject';

export class TodoService {

	appareilsSubject = new Subject<any[]>();

	private tasks = [
		{
			id: 1,
			name: 'Trier la liste'
		},
		{
			id: 2,
			name: 'Lier la database'
		},
		{
			id: 3,
			name: 'tester le projet'
		},
		{
			id: 4,
			name: 'debugger'
		},
		{
			id: 5,
			name: 'debugger'
		},
		{
			id: 6,
			name: 'debugger'
		},
		{
			id: 7,
			name: 'debugger'
		},
		{
			id: 8,
			name: 'debugger'
		},
		{
			id: 9,
			name: 'debugger'
		}
	];

	emitAppareilSubject() {
		this.appareilsSubject.next(this.tasks.slice());
	}

	newTask(newone) {
		let nexttask = {
			id: this.tasks.length + 1,
			name: newone
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

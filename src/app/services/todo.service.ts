import { Subject } from 'rxjs/Subject';

export class TodoService {

	appareilsSubject = new Subject<any[]>();

	private appareils = [
		{
			id: 1,
			name: 'Trier la liste',
			status: 'éteint'
		},
		{
			id: 2,
			name: 'Lier la database',
			status: 'check'
		},
		{
			id: 3,
			name: 'tester le projet',
			status: 'éteint'
		}
	];

	emitAppareilSubject() {
		this.appareilsSubject.next(this.appareils.slice());
	}


	switchOnAll() {
		for(let appareil of this.appareils) {
			appareil.status = 'check';
		}
		this.emitAppareilSubject();
	}

	switchOffAll() {
		for(let appareil of this.appareils) {
			appareil.status = 'éteint';
			this.emitAppareilSubject();
		}
	}

	switchOnOne(i: number) {
		this.appareils[i].status = 'check';
		this.emitAppareilSubject();
	}

	switchOffOne(i: number) {
		this.appareils[i].status = 'éteint';
		this.emitAppareilSubject();

	}
}

import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { HttpClientModule, HttpParams } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})

export class TodoService {

	appareilsSubject = new Subject<any[]>();

	constructor(private httpClient: HttpClientModule) {
		this.getTasks();
	}

	getTasks() {
		fetch("http://localhost:3000/api/readToDo", {
			method: "Get",
			headers: {
				"Content-type": "application/json; charset=UTF-8"
			}
		})
		.then(response => response.json())
		.then(json => {
			let newttask = {
				id: null,
				name: '',
				createdAt: '',
				urgentStatus: ''
			};
			for (let i = 0; i < json.length; i++) {
				newttask = json[i].item.item;
				newttask.id = json[i].id;
				this.tasks.push(newttask);
				this.emitAppareilSubject();
			}
		});
	}

	removeTask(id)
	{
		fetch("http://localhost:3000/api/toDoList/delete/" + id, {
			method: "Delete",
			headers: {
				"Content-type": "application/json; charset=UTF-8"
			}
		})
	}

	addTask(newone) {
		let nexttask = {
			name: newone,
			createdAt : "" + new Date(),
			urgentStatus : ""
		};
		if(newone != "") {
			fetch("http://localhost:3000/api/toDoList/add", {
				method: "POST",
				body: JSON.stringify({
					id: "5lGySHhvWjaUpHIMuPfV",
					task: nexttask,
				}),
				headers: {
					"Content-type": "application/json; charset=UTF-8"
				}
			})
			this.tasks.push(nexttask);
			this.emitAppareilSubject();
		}
	}

	private tasks = [];

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
			this.addTask(newone);
		}
	}

	deleteTask(i: number) {
		if (i > -1) {
			this.removeTask(this.tasks[i].id);
			this.tasks.splice(i, 1);
			this.emitAppareilSubject();
		}
	}

}

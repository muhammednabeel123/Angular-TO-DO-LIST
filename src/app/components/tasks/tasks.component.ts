import { Component,OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { TASKS } from 'src/app/mock-tasks';
import { Task } from 'src/app/Task';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = TASKS
  constructor(private taskService: TaskService){}
  ngOnInit(): void{ this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks )
  }
  deleteTask(task:Task){
     this.taskService.deleteTask(task).subscribe(() => (this.tasks = this.tasks.filter((t) => t.id !== task.id)) )
   

  }
  toggleReminder(task:Task){
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe()
    console.log(task)

  }
  addTask(task:Task){
    this.taskService.addTask(task).subscribe((tasks) => (this.tasks.push(task)))
  }
}


import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from 'src/dto/crateTask.dto';
import { UpdateTaskDto } from 'src/dto/updateTask.dto';
import { TypeNewTask } from 'src/types/taskType';
// import { TypeNewTask } from 'src/types/taskType';

@Injectable()
export class TaskService {
  tasks = [
    {
      id: 1,
      title: 'Lern Nest.js',
      isComplited: false,
    },
    {
      id: 2,
      title: 'Build REST API',
      isComplited: true,
    },
  ];
  findAll() {
    return this.tasks;
  }

  findById(id: number) {
    const task = this.tasks.find((task) => task.id === id);
    if (!task) {
      throw new NotFoundException({
        message: 'Tast not found',
        status: '404',
      });
    }
    return task;
  }

  newTask(dto: CreateTaskDto) {
    const {
      title,
      discription,
      prioprity,
      tags,
      // password,
      // websiteURL
    } = dto;
    const newTask: TypeNewTask = {
      id: this.tasks.length + 1,
      title,
      discription,
      prioprity,
      tags,
      //   password,
      //   websiteURL,
      isComplited: true,
    };

    this.tasks.push(newTask);
    return this.tasks;
  }

  updateTask(id: number, dto: UpdateTaskDto) {
    const task = this.findById(id);
    task.title = dto.title;
    task.isComplited = dto.isComplited;
    console.log(task, '51');
    return task;
  }

  putchTask(id: number, dto: Partial<UpdateTaskDto>) {
    const task = this.findById(id);
    Object.assign(task, dto);
    return task;
  }

  deleteById(id: number) {
    const task = this.findById(id);
    this.tasks = this.tasks.filter((t) => t.id !== task.id);
    return true;
  }

  deleteAllTask() {
    const result = this.tasks.splice(0, this.tasks.length);
    return result;
  }
}

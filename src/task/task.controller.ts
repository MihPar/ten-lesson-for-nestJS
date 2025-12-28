import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Patch,
  Delete,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from 'src/dto/crateTask.dto';
import { UpdateTaskDto } from 'src/dto/updateTask.dto';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get('all')
  findAll() {
    return this.taskService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.taskService.findById(Number(id));
  }

  @Post('create')
  createNewTask(@Body() dto: CreateTaskDto) {
    return this.taskService.newTask(dto);
  }

  @Put(':id')
  updateTaskById(@Param('id') id: string, @Body() dto: UpdateTaskDto) {
    return this.taskService.updateTask(+id, dto);
  }

  @Patch(':id')
  putchUpdateTask(
    @Param('id') id: string,
    @Body() dto: Partial<UpdateTaskDto>,
  ) {
    return this.taskService.putchTask(+id, dto);
  }

  @Delete(':id')
  deleteById(@Param('id') id: string) {
    return this.taskService.deleteById(+id);
  }

  @Delete()
  deleteAllTask() {
    return this.taskService.deleteAllTask();
  }
}

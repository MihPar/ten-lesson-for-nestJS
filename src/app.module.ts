import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { MovieModule } from './movie/movie.module';
import { MovieService } from './movie/movie.service';
import { TaskService } from './task/task.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: '1234',
      database: 'nestjs-course',
      autoLoadEntities: true,
      synchronize: true,
    }),
    TaskModule,
    MovieModule,
  ],
  controllers: [AppController],
  providers: [AppService, MovieService, TaskService],
})
export class AppModule {}

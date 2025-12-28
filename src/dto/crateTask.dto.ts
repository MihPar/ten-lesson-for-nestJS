import {
  IsArray,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsString,
  //   IsUrl,
  //   IsUUID,
  //   Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

import { StartsWith } from 'src/task/decorators/starts-with.decorators';

export enum TaskTagEnum {
  WORK = 'work',
  STUDY = 'study',
  HOME = 'home',
}

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  @StartsWith('Task:', { message: 'invalide name' })
  @MinLength(2)
  @MaxLength(20)
  title: string;

  @IsString({ message: 'Description must be a string' })
  @IsOptional()
  discription: string;

  @IsInt({ message: 'priprity must be integer' })
  @IsOptional()
  @IsPositive()
  prioprity: number;

  @IsArray({ message: 'tags must be arraies' })
  @IsEnum(TaskTagEnum, { each: true, message: 'each tags must be enum' })
  @IsOptional()
  tags: TaskTagEnum[];

  //   @IsString({ message: 'password must be a string' })
  //   @MinLength(5, { message: 'password length must be more than five' })
  //   @Matches(/^(?=.*[A-Z])(?=.*\d).{2,}$/, {
  //     message: 'password must have one uppercase word and one numeric',
  //   })
  //   password: string;

  //   @IsUrl(
  //     { protocols: ['http', 'wss'], require_protocol: true },
  //     { message: 'incorrect format URL' },
  //   )
  //   websiteURL: string;

  //   @IsUUID('4', { message: 'incorrect format UUID' })
  //   userId: string;
}

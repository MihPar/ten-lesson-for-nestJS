import {
  IsBoolean,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UpdateTaskDto {
  @IsString({ message: 'our tasks must be a string' })
  @IsNotEmpty({ message: 'name of task must not empty' })
  @MinLength(2, {
    message: 'minimum length of string must be more one item',
  })
  @MaxLength(20, {
    message: 'maximum length of string must be less twenty item',
  })
  title: string;

  @IsBoolean({ message: 'status must be boolean' })
  isComplited: boolean;
}

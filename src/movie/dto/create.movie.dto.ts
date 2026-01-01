import { IsIn, IsInt, IsNotEmpty, IsString, Min, Max } from 'class-validator';
import { Column } from 'typeorm';

export class CreateMovieDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsInt()
  @Min(1888)
  @Max(new Date().getFullYear())
  releaseYear: number;
}

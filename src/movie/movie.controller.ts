import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Headers,
  Req,
  Res,
  Param,
  Put,
  Ip,
} from '@nestjs/common';
import type { Request, Response } from 'express';
import { MovieService } from './movie.service';
import { CreateMovieDto } from './dto/create.movie.dto';

@Controller('movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  async findAll() {
    return this.movieService.findAll();
  }

  @Post('createDto')
  async createDto(@Body() dto: CreateMovieDto) {
    return this.movieService.createDto(dto);
  }
  //   @Get()
  //   findAll(@Query() query: any) {
  //     return `${JSON.stringify(query)}`;
  //   }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return { id };
  }

  @Get(':id/param')
  getParam(@Param('id') id: string) {
    return { id };
  }

  //   @Post()
  //   create(@Body() body: { title: string; ganre: string }) {
  //     return body;
  //   }

  //   @Get('headers')
  //   getHeaders(@Headers() headers: any) {
  //     return headers;
  //   }

  //   @Get('user-agent')
  //   getUserAgent(@Headers('user-agent') userAgent: string) {
  //     return { userAgent };
  //   }

  //   @Get('request')
  //   getRequestDetails(@Req() req: Request) {
  //     return {
  //       method: req.method,
  //       url: req.url,
  //       headers: req.headers,
  //       query: req.query,
  //       params: req.params,
  //     };
  //   }

  @Get('response')
  getResponseDetails(@Res() res: Response) {
    return res.status(201).json({ message: 'Hello' });
  }
}

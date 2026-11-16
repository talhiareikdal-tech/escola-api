import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { AlunosService } from './alunos.service';
import { CreateAlunoDto } from './dto/create-aluno.dto';

@Controller('alunos')
export class AlunosController {
  constructor(private readonly alunoService: AlunosService) {} 

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createAlunoDto: CreateAlunoDto) {
    return this.alunoService.create(createAlunoDto);
  }

  @Get()
  findAll() {
    return this.alunoService.findAll();
  }

  @Delete(':id') 
  @HttpCode(HttpStatus.OK)
  remove(@Param('id') id: string) {
    return this.alunoService.remove(id);
  }
}
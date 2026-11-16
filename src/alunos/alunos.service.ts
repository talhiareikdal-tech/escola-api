import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { Aluno } from './entities/aluno.entity';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { randomUUID } from 'crypto';

@Injectable()
export class AlunosService {
    private alunos: Aluno[]=[]
//criar
    create(createAlunoDto:CreateAlunoDto):Aluno{
        const matriculaExistente=this.alunos.find(
            (a)=>a.matricula===createAlunoDto.matricula
        )
        if(matriculaExistente){
            throw new ConflictException("Aluno já matriculado")
        }
        const novoAluno:Aluno={
            id:randomUUID(),
            ...createAlunoDto,
            criadoEm:new Date(),
        }
        this.alunos.push(novoAluno)
        return novoAluno;
 }

 //ler todos
 findAll():Aluno[]{
    return this.alunos;
 }

 //apagar
 remove(id:string):{message:string}{
    const index=this.alunos.findIndex((a)=>a.id===id);
    if(index===-1){
        throw new NotFoundException("Aluno não encontrado")
    }
    this.alunos.splice(index,1)
    return {message:`Aluno com id ${id} removido com sucesso.`}
    
 }

}


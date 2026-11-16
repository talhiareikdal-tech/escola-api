import{ IsString, IsNotEmpty, IsEmail, IsOptional  } from 'class-validator';

export class CreateAlunoDto{
    @IsString()
    @IsNotEmpty({message:"Nome é obrigatorio"})
    nome:string;

    @IsEmail({},{message:"Informe um email valido"})
    email:string;

    @IsString()
    @IsNotEmpty({message:"Matricula é obrigatoria"})
    matricula:string;

    @IsString()
    @IsOptional()
    dataNascimento?:string;
}
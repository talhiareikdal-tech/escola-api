import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EsscolaApiModule } from './esscola-api/esscola-api.module';
import { EscolaApiController } from './escola-api/escola-api.controller';
import { EscolaApiService } from './escola-api/escola-api.service';
import { EscolaApiModule } from './escola-api/escola-api.module';
import { AlunosModule } from './alunos/alunos.module';
import { EscolaApiModule } from './escola-api/escola-api.module';

@Module({
  imports: [EsscolaApiModule, EscolaApiModule, AlunosModule],
  controllers: [AppController, EscolaApiController],
  providers: [AppService, EscolaApiService],
})
export class AppModule {}

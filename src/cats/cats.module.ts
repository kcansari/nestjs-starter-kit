import { Global, Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Global() // this decorator makes the module global-scoped. Global modules should be registered only once, generally by the root or core module
@Module({
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsService], // we can share an instance of the CatsService between several other modules, Now any module that imports the CatsModule
})
export class CatsModule {
  constructor(private catsService: CatsService) {}
}

import { ModuleMetadata } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from '@server/config/typeorm.config';

const createTestingModule = ({
  controllers,
  imports = [],
  providers,
}: ModuleMetadata): Promise<TestingModule> =>
  Test.createTestingModule({
    controllers,
    imports: [TypeOrmModule.forRoot(typeOrmConfig), ...imports],
    providers,
  }).compile();

export default createTestingModule;

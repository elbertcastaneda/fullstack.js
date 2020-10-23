import { Module } from '@nestjs/common';
import HbsController from './hbs.controller';
import HbsService from './hbs.service';
import { CommonModule } from '@app/common';

@Module({
  controllers: [HbsController],
  imports: [CommonModule],
  providers: [HbsService],
})
export default class HbsModule {}

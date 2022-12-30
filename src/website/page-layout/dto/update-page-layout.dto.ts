import { PartialType } from '@nestjs/swagger';
import { CreatePageLayoutDto } from './create-page-layout.dto';

export class UpdatePageLayoutDto extends PartialType(CreatePageLayoutDto) {}

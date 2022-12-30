import { PartialType } from '@nestjs/swagger';
import { CreateSiteLayoutDto } from './create-site-layout.dto';

export class UpdateSiteLayoutDto extends PartialType(CreateSiteLayoutDto) {
    id: number;
}

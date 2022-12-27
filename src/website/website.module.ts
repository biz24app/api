import { Module } from '@nestjs/common';
import { LayoutModule } from './layout/layout.module';
import { SiteModule } from './site/site.module';

@Module({
    imports:[
        SiteModule,
        LayoutModule
    ]
})
export class WebsiteModule {}

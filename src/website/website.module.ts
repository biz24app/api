import { Module } from '@nestjs/common';
import { LayoutModule } from './layout/layout.module';
import { SiteModule } from './site/site.module';
import { MenuModule } from './menu/menu.module';
import { MenuItemModule } from './menu-item/menu-item.module';

@Module({
    imports:[
        SiteModule,
        LayoutModule,
        MenuModule,
        MenuItemModule
    ]
})
export class WebsiteModule {}

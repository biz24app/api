import { Module } from '@nestjs/common';
import { LayoutModule } from './layout/layout.module';
import { SiteModule } from './site/site.module';
import { MenuModule } from './menu/menu.module';
import { MenuItemModule } from './menu-item/menu-item.module';
import { CategoryModule } from './category/category.module';
import { SectionModule } from './section/section.module';
import { PageModule } from './page/page.module';
import { PageSectionModule } from './page-section/page-section.module';

@Module({
    imports:[
        SiteModule,
        LayoutModule,
        MenuModule,
        MenuItemModule,
        CategoryModule,
        SectionModule,
        PageModule,
        PageSectionModule
    ]
})
export class WebsiteModule {}

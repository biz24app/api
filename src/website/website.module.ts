import { Module } from '@nestjs/common';
import { LayoutModule } from './layout/layout.module';
import { SiteModule } from './site/site.module';
import { MenuModule } from './menu/menu.module';
import { MenuItemModule } from './menu-item/menu-item.module';
import { CategoryModule } from './category/category.module';
import { SectionModule } from './section/section.module';
import { PageModule } from './page/page.module';
import { PageSectionModule } from './page-section/page-section.module';
import { SiteLayoutModule } from './site-layout/site-layout.module';
import { PageLayoutModule } from './page-layout/page-layout.module';
import { BlockModule } from './block/block.module';
import { LayoutBlockModule } from './layout-block/layout-block.module';

@Module({
    imports:[
        SiteModule,
        LayoutModule,
        MenuModule,
        MenuItemModule,
        CategoryModule,
        SectionModule,
        PageModule,
        PageSectionModule,
        SiteLayoutModule,
        PageLayoutModule,
        BlockModule,
        LayoutBlockModule
    ]
})
export class WebsiteModule {}

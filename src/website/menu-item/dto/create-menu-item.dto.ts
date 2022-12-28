import { Menu } from "src/website/menu/entities/menu.entity";

export class CreateMenuItemDto {
    name: string;
    url: string;
    target: string;
    menuId: number;
    parentId: number;
    isActive: boolean;
}

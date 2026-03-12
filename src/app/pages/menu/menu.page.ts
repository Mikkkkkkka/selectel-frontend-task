import {Component} from '@angular/core';
import {MenuItem} from '../../models/menu.item'

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu.page.html',
  styleUrl: './menu.page.css'
})
export class MenuPage {
  readonly menuTitle = 'Основное меню';

  readonly items: MenuItem[] = [
    {id: 'coffee', label: 'Кофе', value: 120, checked: true},
    {id: 'tea', label: 'Чай', value: 90, checked: false},
    {id: 'sandwich', label: 'Сэндвич', value: 180, checked: false},
    {id: 'salad', label: 'Салат', value: 150, checked: true},
    {id: 'dessert', label: 'Десерт', value: 200, checked: false}
  ];

  toggleItem(id: string): void {
    const item = this.items.find((entry) => entry.id === id);
    if (!item) {
      return;
    }
    item.checked = !item.checked;
  }

  get selectedCount(): number {
    return this.items.reduce((count, item) => count + (item.checked ? 1 : 0), 0);
  }

  get selectedSum(): number {
    return this.items.reduce((sum, item) => sum + (item.checked ? item.value : 0), 0);
  }
}

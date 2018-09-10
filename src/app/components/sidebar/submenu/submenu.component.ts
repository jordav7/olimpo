import { Component, OnChanges, Input } from '@angular/core';
import { trigger, style, transition, animate, state, group } from '@angular/animations';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'lec-submenu',
    templateUrl: 'submenu.component.html',
    animations: [
      trigger('slideInOut', [
          state('in', style({ height: '*', opacity: 0 })),
          transition(':leave', [
            style({ height: '*', opacity: 0.2 }),
            group([
              animate(300, style({ height: 0 })),
              animate('200ms ease-out', style({ opacity: 0 }))
            ])
          ]),
          transition(':enter', [
            style({ height: '0', opacity: 0 }),
            group([
              animate(200, style({ height: '*' })),
              animate('400ms ease-out', style({ opacity: 1 }))
            ])
          ])
        ]),
      trigger('isExpanded', [
        state('no', style({ transform: 'rotate(-90deg)' })),
        state('yes', style({ transform: 'rotate(0deg)', })),
        transition('no => yes',
          animate(300)
        ),
        transition('yes => no',
          animate(300)
        )
      ])
    ]
})

export class SubmenuComponent implements OnChanges {

    @Input()
    menuItem: any;
    children: any[];
    expanded = false;

    constructor() { }

    ngOnChanges() {
      this.children = this.menuItem && this.menuItem.items ? this.menuItem.items : [];

    }

    expand(item: any) {
      this.expanded = !this.expanded;
    }

    hasItems(): boolean {
      return this.children.length > 0;
    }
}

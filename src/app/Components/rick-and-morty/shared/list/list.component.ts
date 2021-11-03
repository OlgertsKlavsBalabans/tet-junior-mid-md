import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IListOptions } from './list';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ram-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() listOptions!: IListOptions[];

  @Input() listObjects!: any[];

  constructor() { }

  ngOnInit(): void {
  }
 
}

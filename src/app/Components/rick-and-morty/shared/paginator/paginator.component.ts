import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ram-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  @Input() next?: string;

  @Input() prev?: string;

  @Output() $emitPage = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  emitPage(page: string): void {
    this.$emitPage.emit(page);
  }

}

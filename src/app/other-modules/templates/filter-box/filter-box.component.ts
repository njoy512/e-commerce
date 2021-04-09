import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-filter-box',
  templateUrl: './filter-box.component.html',
  styleUrls: ['./filter-box.component.scss']
})
export class FilterBoxComponent implements OnInit {

  @Input() options: any = [];
  @Input() defaultOptionId: any = '';
  @Input() label: string = '';
  @Input() hideSearch: boolean = false;
  @Output() selectEvent = new EventEmitter<any>();

  myControl = new FormControl();
  filteredOptions!: Observable<any[]>;

  @ViewChild(MatSelect)
  select!: MatSelect;

  selected: any;
  hasLabel: boolean = false;

  constructor() { }

  ngAfterViewInit() {
    this.select.overlayDir.positions = [
      {
        originX: 'end',
        originY: 'bottom',
        overlayX: 'end',
        overlayY: 'top'
      }
    ];
  }

  ngOnInit() {
    // console.log(this.options);
    if (this.label != '') {
      this.hasLabel = true;
    }
    if (this.defaultOptionId != '') {
      this.options.forEach((option: any) => {
        if (option.id == this.defaultOptionId) {
          this.selected = option;
        }
      });
    }
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): any[] {
    const filterValue = value.toLowerCase();
    // console.log(this.options.filter((option: { name: string; }) => option.name.toLowerCase().includes(filterValue)));
    return this.options.filter((option: { name: string; }) => option.name.toLowerCase().includes(filterValue));
  }

  change() {
    this.selectEvent.emit(this.selected);
  }

  clearSearch() {
    this.myControl.patchValue('');
  }

}

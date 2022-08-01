import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';
import { MatListOption } from '@angular/material/list';
import { Alias } from 'src/app/models/alias';

@Component({
  selector: 'app-alias-list',
  templateUrl: './alias-list.component.html',
  styleUrls: ['./alias-list.component.scss']
})
export class AliasListComponent implements OnInit {
  @Input() aliasList!: Alias[];
  @Output() selectedAlias = new EventEmitter<Alias[]>();

  constructor() {}

  ngOnInit(): void {}

  onSelectionChange(selectedOptions: MatListOption[]) {
    this.aliasList.map((alias) => alias.checked = false);
    for (let i = 0; i < selectedOptions.length; i++) {
      const name = selectedOptions[i]._text.nativeElement.innerText
      const found = this.aliasList.find((alias) => alias.name === name);
      if (found) {
        found.checked = true;
      }
    }
    this.selectedAlias.emit(this.aliasList);
  }
}

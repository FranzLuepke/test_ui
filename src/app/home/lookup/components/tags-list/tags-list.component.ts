import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatListOption } from '@angular/material/list';
import { Alias } from 'src/app/models/alias';
import { Tag } from 'src/app/models/tag';

@Component({
  selector: 'app-tags-list',
  templateUrl: './tags-list.component.html',
  styleUrls: ['./tags-list.component.scss']
})
export class TagsListComponent implements OnInit {
  @Input() aliasList!: Alias[];
  @Output() selectedAlias = new EventEmitter<Alias[]>();

  constructor() {}

  ngOnInit(): void {
  }

  onSelectionChange(selectedOptions: MatListOption[]) {
    // this.aliasList.map((alias) => {
    //   alias.checked = false;
    //   alias.tags.forEach((tag) => {
    //     tag.checked = false;
    //   });
    // });
    // for (let i = 0; i < selectedOptions.length; i++) {
    //   const name = selectedOptions[i]._text.nativeElement.innerText;
    //   // console.log(name);
    //   const found = this.aliasList.find((alias) => alias.name === name);
    //   if (found) {
    //     found.checked = true;
    //   }
    // }
    // // this.selectedAlias.emit(this.aliasList);
  }

  onAliasSelected(alias: Alias, selectionState: boolean) {
    const found = this.aliasList.find((a) => a.name === alias.name);
    if (found) {
      found.tags.forEach((tag) => {
        tag.checked = selectionState;
      });
    }
  }

  onTagSelected(alias: Alias, tag: Tag, selectionState: boolean) {
    const foundAlias = this.aliasList.find((a) => a.name === alias.name);
    if (foundAlias) {
      const foundTag = foundAlias.tags.find((t) => t.name === tag.name);
      if (foundTag) {
        foundTag.checked = selectionState;
      }
    }
  }
}

import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Alias } from "src/app/models/alias";
import { Tag } from "src/app/models/tag";
import { ALIAS_WITH_TAGS } from "./alias-with-tags.const";

@Component({
    selector: 'app-lookup',
    templateUrl: './lookup.component.html',
    styleUrls: ['./lookup.component.scss'],
})
export class LookupComponent {
  noRegistersFound = false;
  aliasWithTags: Alias[] = ALIAS_WITH_TAGS;
  aliasForTags: Alias[] = [];

  constructor(
    private router: Router,
  ) {}

  public async goBack() {
    await this.router.navigate(['home']);
  }

  changedSelectedAlias(aliasList: Alias[]) {
    console.log('change');
    this.aliasForTags = [];
    aliasList.forEach((alias) => {
      console.log('  '+alias.name+': '+alias.checked);
      if (alias.checked) {
        alias.checked = false;
        this.aliasForTags.push(alias);
        // alias.tags.forEach((tag) => {
        //   this.aliasForTags.push(tag);
        // });
      }
    });
  
  }

  changedSelectedTags(aliasList: Alias[]) {
    console.log('change');
    aliasList.forEach(a => console.log('  '+a.name+': '+a.checked))
  }
}

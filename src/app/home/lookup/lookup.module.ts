import { NgModule } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table'; 
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { LookupRoutingModule } from './lookup-routing.module';
import { LookupComponent } from './lookup.component';
import { TagsListComponent } from './components/tags-list/tags-list.component';
import { AliasListComponent } from './components/alias-list/alias-list.component';

@NgModule({
    declarations: [LookupComponent, TagsListComponent, AliasListComponent],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        HttpClientModule,   
        MatListModule,
        MatIconModule,
        MatTableModule,
        MatInputModule,
        MatButtonModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatAutocompleteModule,
        LookupRoutingModule,        
    ],
    exports: [LookupComponent],
})

export class UsersModule {}
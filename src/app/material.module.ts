import { NgModule } from '@angular/core';
import {
    MatToolbarModule, MatButtonModule, MatMenuModule, MatIconModule, MatCardModule, MatFormFieldModule,
    MatInputModule,
    MatTableModule
} from '@angular/material';

@NgModule({
    imports: [
        MatToolbarModule,
        MatButtonModule,
        MatMenuModule,
        MatIconModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
    ],
    exports: [
        MatToolbarModule,
        MatButtonModule,
        MatMenuModule,
        MatIconModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
    ]
})
export class MaterialModule { }

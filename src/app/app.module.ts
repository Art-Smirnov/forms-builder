import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AccordionComponent } from './accordion/accordion.component';
import { DropSectionComponent } from './drop-section/drop-section.component';
import { DragSectionComponent } from './drag-section/drag-section.component';

@NgModule({
  declarations: [AppComponent, AccordionComponent, DropSectionComponent, DragSectionComponent],
  imports: [BrowserModule, NoopAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

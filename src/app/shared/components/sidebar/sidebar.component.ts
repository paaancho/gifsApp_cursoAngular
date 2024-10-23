import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  styleUrl: './sidebar.component.css',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {


  constructor(private gifsService: GifsService){}

  get tags(){
    return this.gifsService.tagsHistory;
  }
 }


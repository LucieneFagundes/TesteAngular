import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  size =40;
  font = "Arial";
  color = "red";

  classes = ["strong-text", "small-text"];
  underline = "underline";
}

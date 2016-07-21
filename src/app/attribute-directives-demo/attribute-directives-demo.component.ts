import { Component } from '@angular/core';
import {HighlightDirective} from "../highlight.directive";

@Component({
  moduleId: module.id,
  selector: 'attribute-directives-demo',
  templateUrl: 'attribute-directives-demo.component.html',
  styleUrls: ['attribute-directives-demo.component.css'],
  directives: [HighlightDirective]
})
export class AttributeDirectivesDemoComponent {}

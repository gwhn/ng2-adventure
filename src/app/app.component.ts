import { Component } from '@angular/core';

import './rxjs-operators';

import { HelloWorldComponent } from './hello-world';
import { HelloNameComponent } from './hello-name';
import { HelloListComponent } from './hello-list';
import { ClickButtonComponent } from './click-button';
import { BoundInputComponent } from './bound-input';
import { ClassHostOptionComponent } from './class-host-option';
import { ActionLinksComponent } from './action-links';
import { DataModelComponent } from './data-model';
import { FormDataComponent } from './form-data';
import { MyData } from './my-data';
import { InventoryAppComponent } from './inventory-app';
import { IfComponent } from './if';
import { SwitchComponent } from './switch';
import { StyleComponent } from './style';
import { ClassComponent } from './class';
import { NestedForComponent } from './nested-for';
import { SimpleFormComponent } from './simple-form';
import { FormBuilderComponent } from './form-builder';
import { ExplicitValidationComponent } from './explicit-validation';
import { CustomValidationComponent } from './custom-validation';
import { ValueChangesComponent } from './value-changes';
import { TwoWayBindComponent } from './two-way-bind';
import { AnimatedListComponent } from './animated-list';
import { AnimatedEntranceComponent } from './animated-entrance';
import { Hero } from './hero';
import { AnimatedStatesComponent } from './animated-states';
import { AnimatedShrinkComponent } from './animated-shrink';
import { AnimatedFlybyComponent } from './animated-flyby';
import { AnimatedBounceComponent } from './animated-bounce';
import { AnimatedGroupComponent } from './animated-group';
import { HighlightDirective } from './highlight.directive';
import { DynamicFormComponent } from './dynamic-form';
import { QuestionService } from './question.service';
import { HeroListComponent } from './hero-list';
import { WikipediaComponent } from './wikipedia';
import {HeroService} from "./hero.service";
import {PeekABooParentComponent} from "./peek-a-boo-parent";
import {SpyComponent} from "./spy";
import {OnChangesParentComponent} from "./on-changes-parent/on-changes-parent.component";
import {AfterViewParentComponent} from "./after-view-parent/after-view-parent.component";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    HelloWorldComponent,
    HelloNameComponent,
    HelloListComponent,
    ClickButtonComponent,
    BoundInputComponent,
    ClassHostOptionComponent,
    ActionLinksComponent,
    DataModelComponent,
    FormDataComponent,
    InventoryAppComponent,
    IfComponent,
    SwitchComponent,
    StyleComponent,
    ClassComponent,
    NestedForComponent,
    SimpleFormComponent,
    FormBuilderComponent,
    ExplicitValidationComponent,
    CustomValidationComponent,
    ValueChangesComponent,
    TwoWayBindComponent,
    AnimatedListComponent,
    AnimatedEntranceComponent,
    AnimatedStatesComponent,
    AnimatedShrinkComponent,
    AnimatedFlybyComponent,
    AnimatedBounceComponent,
    AnimatedGroupComponent,
    HighlightDirective,
    DynamicFormComponent,
    HeroListComponent,
    WikipediaComponent,
    PeekABooParentComponent,
    SpyComponent,
    OnChangesParentComponent,
    AfterViewParentComponent
  ],
  providers: [QuestionService, HeroService]
})
export class AppComponent {
  title = 'ng2 Adventure';

  myData: MyData[] = [
    new MyData(1, 'first'),
    new MyData(2, 'second', 'different')
  ];

  heroes: Hero[] = [
    new Hero('Guy'),
    new Hero('Mary'),
    new Hero('Charles'),
    new Hero('Alex')
  ];

  questions: any[];

  constructor(qs: QuestionService) {
    this.questions = qs.getQuestions();
  }

  addHero() {
    this.heroes.push(new Hero(`Hero ${this.heroes.length + 1}`))
  }

  removeHero() {
    this.heroes.splice(this.heroes.length - 1);
  }

  addData(newData: MyData): void {
    this.myData.push(newData);
  }

  sortedData(): MyData[] {
    return this.myData.sort((a: MyData, b: MyData) => {
      const aText: string = a.text.toLowerCase();
      const bText: string = b.text.toLowerCase();
      if (aText < bText) {
        return -1;
      } else if (aText > bText) {
        return 1;
      } else {
        return 0;
      }
    });
  }
}

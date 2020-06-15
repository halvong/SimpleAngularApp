SimpleAngularApp, Udemy MattGreenCroft
6/14/2020, Sun

Intro to Typescript
https://www.udemy.com/course/angular-hands-on-for-java-developers/learn/lecture/16688496#overview#url

#url
http://localhost:4200/

#commands
ng g c Page1

#notes
1.
variable in html: {{}}
method event, listening: (event)="someMethod()" 
expression to eval: [xxx]=""
structural directive = change the DOM

2.
@Output() 
event = new EventEmitter();
this.event.emit();

3.
Don't use *NgIf with template reference.


#schema

app.module.ts <- ./app.component

        header    page1   page2   page3   footer


#default commands
Run `ng serve` for a dev server. 
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'elements3';
  versionData = JSON.parse(JSON.stringify({}));
  ngOnInit(): void {
    const verStr = localStorage.getItem('appVersion');
    this.versionData = JSON.parse(verStr);
    console.log('this is version data: '+ JSON.stringify(this.versionData));
    console.log('this is selection version: '+ this.versionData.app1);
    
  }

  App1() {
    localStorage.setItem('enableVersion', this.versionData.app1);
    location.reload();
  }

  App2() {
    localStorage.setItem('enableVersion', this.versionData.app2);
    location.reload();
  }
}



//////////////////////////////
// {
//   "name": "elements3", 
//   "version": "0.0.0",
//   "scripts": {
//     "el-build": "npm run el-build-task && npm run el-package-task",
//     "el-build-task": "ng build elements3 --prod --output-hashing=none",
//     "el-package-task": "cat ./dist/elements3/{polyfills-es2015,runtime-es2015,main-es2015}.js > ./dist/elements3.js"
//   },
//   "private": true,
//   "dependencies": {
//     "@angular/animations": "~8.2.0",
//     "@angular/common": "~8.2.0",
//     "@angular/compiler": "~8.2.0",
//     "@angular/core": "~8.2.0",
//     "@angular/forms": "~8.2.0",
//     "@angular/platform-browser": "~8.2.0",
//     "@angular/platform-browser-dynamic": "~8.2.0",
//     "@angular/router": "~8.2.0",
//     "rxjs": "~6.4.0",
//     "tslib": "^1.10.0",
//     "zone.js": "~0.9.1"
//   },
//   "devDependencies": {
//     "@angular-devkit/build-angular": "~0.802.2",
//     "@angular/cli": "~8.2.2",
//     "@angular/compiler-cli": "~8.2.0",
//     "@angular/elements": "^9.1.9",
//     "@angular/language-service": "~8.2.0",
//     "@types/jasmine": "~3.3.8",
//     "@types/jasminewd2": "~2.0.3",
//     "@types/node": "~8.9.4",
//     "@webcomponents/webcomponentsjs": "^2.4.3",
//     "codelyzer": "^5.0.0",
//     "jasmine-core": "~3.4.0",
//     "jasmine-spec-reporter": "~4.2.1",
//     "karma": "~4.1.0",
//     "karma-chrome-launcher": "~2.2.0",
//     "karma-coverage-istanbul-reporter": "~2.0.1",
//     "karma-jasmine": "~2.0.1",
//     "karma-jasmine-html-reporter": "^1.4.0",
//     "protractor": "~5.4.0",
//     "ts-node": "~7.0.0",
//     "tslint": "~5.15.0",
//     "typescript": "~3.5.3"
//   }
// }

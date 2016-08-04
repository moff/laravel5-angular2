///<reference path="./typings/index.d.ts"/>

import { enableProdMode } from "@angular/core";
import { MainComponent } from "./components/main/main.component";
import { bootstrap } from "@angular/platform-browser-dynamic";

enableProdMode();
bootstrap(MainComponent);
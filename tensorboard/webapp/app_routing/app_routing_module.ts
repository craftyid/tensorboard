/* Copyright 2020 The TensorFlow Authors. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
==============================================================================*/
import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';

import {AppRootProvider} from './app_root';
import {AppRoutingEffects} from './effects';
import {LocationModule} from './location_module';
import {ProgrammaticalNavigationModule} from './programmatical_navigation_module';
import {reducers} from './store/app_routing_reducers';
import {APP_ROUTING_FEATURE_KEY} from './store/app_routing_types';

@NgModule({
  imports: [
    StoreModule.forFeature(APP_ROUTING_FEATURE_KEY, reducers),
    EffectsModule.forFeature([AppRoutingEffects]),
    LocationModule,
  ],
  providers: [ProgrammaticalNavigationModule, AppRootProvider],
})
export class AppRoutingModule {}

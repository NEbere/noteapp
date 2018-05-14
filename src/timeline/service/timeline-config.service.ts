import { Injectable } from '@angular/core';

@Injectable()
export class TimelineConfigService {
  showFilter = true;
  showTitleBar = true;
  timelineType = 'listView';
  configure(settings: TimelineConfigSettings): void {
    Object.assign(this, settings);
   }
}
export interface TimelineConfigSettings {
  showFilter?: boolean;
  showTitleBar?: boolean;
  showCalemdar?: boolean;
}


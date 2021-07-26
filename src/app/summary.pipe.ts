import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name:"summary"
})
export class SummaryPipe implements PipeTransform {
    transform(value: string, limit?: number, another? : any) {
      if(!value)
        return null;

      const actualLimit= (limit) ? limit: 50;
      const startPoint = (another) ? another : 0
      return value.substr(startPoint,actualLimit) + '...'
    }
}
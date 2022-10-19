import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "ativo"
})
export class AtivoPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return value ? "Ativo" : "Inativo";
  }
}

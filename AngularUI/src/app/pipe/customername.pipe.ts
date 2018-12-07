import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'customername'
})
export class CustomerNamePipe implements PipeTransform {
    transform(customername: any, searchText: any) {
        if(searchText == null){
            return customername;
        }

        return customername.filter(function(cust : any){
            return cust.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
        })
    }
}
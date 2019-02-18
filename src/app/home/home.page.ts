import { Component } from '@angular/core';
import {BookApiService} from '../book-api.service';
import {Events, NavController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

    searchTerm: string;
    data: any = {
        works: []
    };

    constructor(public api: BookApiService, public events: Events, private navControl: NavController) {

    }

    search() {
        this.api.getData(this.searchTerm).subscribe(data => {
            this.data = data.json()
        })
    }

    toImageUrl(coverId) {
        return `http://covers.openlibrary.org/b/ID/${coverId}-S.jpg`
    }

    getAuthorsList(item) {
        return item.authors.map(({name}) => name).join()
    }
}

import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {Events, NavController} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import {BookApiService} from '../book-api.service';

@Component({
    selector: 'app-book-details',
    templateUrl: './book-details.page.html',
    styleUrls: ['./book-details.page.scss'],
})
export class BookDetailsPage implements OnInit, OnDestroy {

    bookDetails: any = {};

    constructor(private route: ActivatedRoute, private bookApiService: BookApiService) {

    }

    ionViewWillEnter() {
        this.bookDetails = this.bookApiService.getBook(this.route.snapshot.paramMap.get('id'));
    }

    getImageUrl() {
        return `http://covers.openlibrary.org/b/ID/${this.bookDetails && this.bookDetails.cover_id}-L.jpg`;
    }

    getAuthorsList() {
        return this.bookDetails && this.bookDetails.authors && this.bookDetails.authors.map(({name}) => name).join() || ''
    }

    ngOnInit() {
        console.log('init')
    }

    ngOnDestroy() {
        console.log('destroy')
    }
}

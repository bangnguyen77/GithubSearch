import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
    private username: string;
    private client_id = 'ea9d0697a0ea5f7f3fe6';
    private client_secret = '37cdc937aaa57de4012b0429ea08ed4a57cff6a7';

    constructor(private _http: Http) {
        console.log('Github Service Ready ...');
        this.username = 'bradtraversy';
    }

    getUser() {
        return this._http.get('http://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
                .map(res => res.json());
    }

    getRepos() {
        return this._http.get('http://api.github.com/users/' + this.username + '/repos?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
                .map(res => res.json());
    }
}
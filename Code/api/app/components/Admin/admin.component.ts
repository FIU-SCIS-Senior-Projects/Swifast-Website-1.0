import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService, AuthenticationService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'admin.component.html',
})

export class AdminComponent implements OnInit {

    model: any = {};
    loading = false;
    returnUrl: string;
    loggedin = false;
    error = '';

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
            data => {
                if (data === true) {
                    this.router.navigate(['/blog/newblog']);
                    this.loggedin = true;
                    console.log(this.loggedin);

                } else {
                    this.error = 'Username or password is incorrect';
                    console.log(this.error);
                    this.loading = false;
                    this.loggedin = false;

                }

            });
    }
}
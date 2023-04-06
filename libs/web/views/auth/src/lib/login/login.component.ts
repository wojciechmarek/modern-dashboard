import { Component } from '@angular/core';
import { LoginDto } from '@md/common/models';
import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'md-login-view',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private apollo: Apollo) { }

  handleLoginSubmit(data: LoginDto) {
    this.apollo
      .mutate({
        mutation: gql`
          mutation Login($data: LoginInput!) {
            login(data: $data) {
              accessToken
              refreshToken
            }
          }
        `,
        variables: {
          data,
        },
      })
      .subscribe((result) => {
        console.log('result:', result);
      });
  }
}

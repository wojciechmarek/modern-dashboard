import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';

import { Apollo, gql } from 'apollo-angular';
import { LoginDto, TokenDto } from '@md/common/models';

@Injectable()
export class AuthService {
  apollo = inject(Apollo);

  loginSubmit(data: LoginDto) {
    console.log('loginSubmit', data);
    
    return this.apollo.query<TokenDto>({
      query: gql`
        query Login($data: LoginInput!) {
          login(data: $data) {
            accessToken
            refreshToken
          }
        }
      `,
      variables: {
        data,
      },
    }).pipe(
      map((result) => {
        if (!result.data) {
          throw new Error('No data');
        }
        return result.data;
      }
    ));
  }
}

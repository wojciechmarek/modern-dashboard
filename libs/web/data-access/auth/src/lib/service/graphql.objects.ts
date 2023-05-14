import { gql } from 'apollo-angular';

export const LOGIN = gql`
  mutation Login($data: LoginInput!) {
    login(data: $data) {
      accessToken
      refreshToken
    }
  }
`;

export const REGISTER = gql`
  mutation Register($data: RegisterInput!) {
    register(data: $data) {
      isSuccess
    }
  }
`;

// export const LOGOUT = gql`
//   mutation Logout() {
//     logout()
//   }
// `;

export const RESET_PASSWORD = gql`
  mutation ResetPassword($data: ResetPasswordInput!) {
    resetPassword(data: $data) {
      isSuccess
    }
  }
`;

export const CHECK_EMAIL_AVAILABLE = gql`
  query CheckEmailAvailable($data: CheckEmailAvailableInput!) {
    checkEmailAvailable(data: $data)
  }
`;

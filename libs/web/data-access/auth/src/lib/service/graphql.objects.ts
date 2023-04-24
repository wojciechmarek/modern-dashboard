import { gql } from 'apollo-angular';

export const LOGIN = gql`
  query Login($data: LoginInput!) {
    login(data: $data) {
      accessToken
      refreshToken
    }
  }
`;

export const REGISTER = gql`
mutate Register($data: RegisterInput!) {
  register(data: $data)
}
`;

export const LOGOUT = gql`
query Logout() {
  logout()
}
`;

export const RESET_PASSWORD = gql`
  query ResetPassword($data: ResetPasswordInput!) {
    resetPassword(data: $data)
  }
`;

export const CHECK_EMAIL_AVAILABLE = gql`
  query CheckEmailAvailable($data: CheckEmailAvailableInput!) {
    checkEmailAvailable(data: $data)
  }
`;

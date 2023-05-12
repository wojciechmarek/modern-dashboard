import { EmailAvailableDto } from "@md/common/models";

export class CheckEmailAvailableQuery {
  constructor(
    public data: EmailAvailableDto
  ) { }
}
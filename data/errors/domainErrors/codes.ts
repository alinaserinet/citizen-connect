const enum DomainErrorCodes {
  DuplicateOtpRequest = 3000,
  OtpIsEmpty,
  MobileIsEmpty,
  InvalidOtpCode,
  InvalidMobile,
  UserNotFound,
  TitleIsEmpty,
  DescriptionIsEmpty,
  LocationIsEmpty,
  CategoryIsEmpty,
  DepartmentIsEmpty,
  IDIsNotNumberString,
  RequestNotFound,
  RequestIllegalAccess,
}

export default DomainErrorCodes;

export interface employeeDate {
  name: string;
  DOB: Date;
  phoneNumber: string;
  nationality: string;
  department: Department;
  gender: string;
  active: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  pincode: string;
  fatherName: string;
  Photo: string;
  Qualification: string;
  CTC: string;
  email: string;
  emergencyNumber: string;
  AadharNumber: string;
  PanNumber: string;
}
export interface Department {
  id: number;
  department: string;
}

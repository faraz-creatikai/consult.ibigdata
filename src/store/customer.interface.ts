export interface customerAllDataInterface {
  Campaign: { id: string; name: string };
  CustomerType: { id: string; name: string };
  customerName: string;
  CustomerSubtype: { id: string; name: string };
  ContactNumber: string;
  City: { id: string; name: string };
  Location: { id: string; name: string };
  Exprience?: string;
  Area?: string;
  Address: string;
  Email: string;
  Facilities?: string;
  Skill?: string;
  url?: string;
  salaryRange?: string;
  ReferenceId: string;
  CustomerId: string;
  CustomerDate: string;
  CustomerYear: string;
  Other: string;
  Description: string;
  Video: string;
  GoogleMap: string;
  isFavourite?: boolean;
  Verified: string;
  CustomerImage: File[];
  SitePlan: File
}

export interface customerImportDataInterface {
  Campaign: { id: string; name: string };
  CustomerType: { id: string; name: string };
  customerName: string;
  CustomerSubtype: { id: string; name: string };
  ContactNumber: string;
  City: string;
  Location: string;
  Experience: string;
  Adderess: string;
  Email: string;
  Skill: string;
  ReferenceId: string;
  CustomerId: string;
  CustomerDate: string;
  CustomerYear: string;
  Other: string;
  Description: string;
  Video: string;
  GoogleMap: string;
  isFavourite?: boolean;
  Verified: string;
}

export interface customerGetDataInterface {
  _id: string;
  Campaign: string;
  Type: string;
  SubType: string;
  Name: string;
  Description?: string;
  ReferenceId?: string;
  Email: string;
  City: string;
  Location: string;
  isFavourite?: boolean;
  ContactNumber: string;
  AssignTo: string;
  Date: string;
  SitePlan?: string;
  // that add by DJ
  CustomerType: string;
  CustomerSubType: string;
  CustomerName: string;
  Reason: string;
  Skill? : string;
  Facillities: string;
  CustomerId: string;
  Adderess: string;
  CustomerYear: string;
  Area: string;
  Other: string;
}


export interface CustomerAdvInterface {
  _id: string[];
  StatusAssign: string[];
  Campaign: string[];
  CustomerType: string[];
  CustomerSubtype: string[];
  City: string[];
  Location: string[];
  User: string[];
  StartDate: string;
  EndDate: string;
  Limit: string[];
}

export interface customerAssignInterface {
  customerIds: string[];
  assignToId: string;
}

export interface contactAssignInterface {
  contactIds: string[];
  assignToId: string;
}

export interface customerDeletePayloadInterface {
  customerIds: string[];
}

export interface DeleteDialogDataInterface {
  id: string;
  customerName: string;
  ContactNumber: string;
  isFavourite?: boolean;
}
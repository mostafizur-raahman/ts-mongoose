export type UserName = {
    firstName: string;
    middleName: string;
    lastName: string;
};

export type Guardian = {
    fatherName: string;
    fatherOccupation: string;
    fatherContactNo: string;
    motherName: string;
    motherOccupation: string;
    motherContactNo: string;
};

export type LocalGuardian = {
    name: string;
    address: string;
    occupation: string;
    contactNo: string;
};
export type Student = {
    id: string;
    name: UserName;
    gender: "male" | "female";
    dateOfBirth?: string;
    email: string;
    contactNo: string;
    bloodGroup?: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O-" | "O+";
    presentAddress: string;
    permanentAddress: string;
    guardian: Guardian;
    localGuardian: LocalGuardian;
    profileImage?: string;
    isActive: "active" | "block";
};

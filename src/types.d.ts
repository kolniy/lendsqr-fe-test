
type profileObject = {
    firstName: String;
    lastName: String;
    phoneNumber: String;
    avatar: String;
    gender: String;
    bvn: String;
    address: String;
    currency: String;
}

type guarantorsObject = {
    firstName: String;
    lastName: String;
    phoneNumber: String;
    gender: String;
    address: String;
}

type socialsObject = {
    facebook: String;
    instagram: String;
    twitter: String;
}

type educationsObject = {
    level: String;
    employmentStatus: String;
    sector: String;
    duration: String;
    officeEmail: String;
    monthlyIncome: Array<String>;
    loanRepayment: String;
}

export interface User {
    createdAt: String;
    orgName: String;
    userName: String;
    email: String;
    phoneNumber: String;
    lastActiveDate: String;
    profile: profileObject;
    guarantor: guarantorsObject;
    accountBalance: String;
    accountNumber: String;
    socials: socialsObject;
    education: educationsObject;
    id: String;
    status: String;
}
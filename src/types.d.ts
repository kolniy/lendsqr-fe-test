
type profileObject = {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    avatar: string;
    gender: string;
    bvn: string;
    address: string;
    currency: string;
}

type guarantorsObject = {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    gender: string;
    address: string;
}

type socialsObject = {
    facebook: string;
    instagram: string;
    twitter: string;
}

type educationsObject = {
    level: string;
    employmentStatus: string;
    sector: string;
    duration: string;
    officeEmail: string;
    monthlyIncome: Array<string>;
    loanRepayment: string;
}

export interface User {
    createdAt: string;
    orgName: string;
    userName: string;
    email: string;
    phoneNumber: string;
    lastActiveDate: string;
    profile: profileObject;
    guarantor: guarantorsObject;
    accountBalance: string;
    accountNumber: string;
    socials: socialsObject;
    education: educationsObject;
    id: string;
    status: string;
}
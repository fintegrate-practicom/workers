export interface messageNewEmployee {
    pattern: string;
    data: {
      to: string;
      subject: string;
      type: string;
      kindSubject: string;
      name: string;
      jobTitle: string,
      invitationLink: string,
    };
  }
const voicemail = (name: string) => {
    console.log(`Call me back, ${name}, my bb`);
}

const calling = (voicemail: (name: string) => void) => {
    console.log('ring ring');
    voicemail('Max');
}

calling(voicemail);
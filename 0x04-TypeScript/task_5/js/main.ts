interface MajorCredits {
    readonly id: number;
    credits: number;
}
interface MinorCredits {
    readonly id: number;
    credits: number;
}

function sumMajorCredits(subject1: number, subject2: number): MajorCredits{
    return ({id: 0, credits: subject1 + subject2})
}

function sumMinorCredits(subject1: number, subject2: number): MinorCredits{
    return ({id : 0 ,credits : subject1 + subject2});
}

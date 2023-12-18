export type TMonths =  'January'| 'February'| 'March'| 'April'|
'May'| 'June'| 'July'| 'August'|
'September'| 'October'| 'November'| 'December'



export type TAcamedicSemesterName = 'Autumn' | 'Summer'|'Fall'
export type TAcamedicSemesterCode = '01'| '02'| '03'

export type TAcademicsemester = {
    name: TAcamedicSemesterName,
    code: TAcamedicSemesterCode,
    year: string,
    startMonth: TMonths,
    endMonth: TMonths
}


export type TAcademicSemesterNameCodeMapper = {
    [key:string]:string;
}
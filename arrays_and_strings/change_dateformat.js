function changeDateFormat(str) {
    return str.replace(/\b(\d{2})\/(\d{2})\/(\d{4})\b/g, (_, month, day, year) => {return `${day}/${month}/${year}`;})
}

const str = "World War I or the First World War (07/28/1914 – 11/11/1918) was a global conflict between two coalitions: the Allies and the Central Powers.";

console.log(changeDateFormat(str));
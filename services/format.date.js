/* 
Definition
*/
const formatDate = (date) => {
    let monthNames = [
        "Janvier", "Février", "Mars",
        "Avril", "Mai", "Juin", "Juillet",
        "Août", "Séptembre", "Octobre",
        "Novembre", "Décembre"
    ];

    let day = date.getDate();
    let monthIndex = date.getMonth();
    let year = date.getFullYear();

    return `${day} ${monthNames[monthIndex]} ${year} à ${date.getHours()}h${date.getHours()}`
};
//

/* 
Export
*/
    module.exports = formatDate;
//
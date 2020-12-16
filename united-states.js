

const unitedStatesArr = [];

// const unitedStatesObj = new Object();

const unitedStatesObj = {
    state: {
        stateName: [],
        capital: [],
        foundingDate: []
    },
    foundingDate: '07/04/1776',
    capital: 'Washington DC',
    countryName: 'United States of America'
}

const stateNameArr = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia",
    "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland",
    "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada",
    "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
    "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee",
    "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
]

const stateCapitalsArr = [
    "Montgomery", "Juneau", "Phoenix", "Little Rock", "Sacramento", "Denver", "Hartford", "Dover", "Tallahassee",
    "Atlanta", "Honolulu", "Boise", "Springfield", "Indianapolis", "Des Moines", "Topeka", "Frankfort",
    "Baton Rouge", "Augusta", "Annapolis", "Boston", "Lansing", "St. Paul", "Jackson", "JeffersonCity",
    "Helena", "Lincoln", "Carson City", "Concord", "Trenton", "Santa Fe", "Albany", "Raleigh", "Bismarck",
    "Columbus", "Oklahoma City", "Salem", "Harrisburg", "Providence", "Columbia", "Pierre", "Nashville",
    "Austin", "Salt Lake City", "Montpelier", "Richmond", "Olympia", "Charleston", "Madison", "Cheyenne"
]

const stateFoundingDatesArr = [
"December 14, 1819", "January 3, 1959", "February 14, 1912", "June 15, 1836", "September 9, 1850",
"August 1, 1876", "January 9, 1788", "December 7, 1787", "March 3, 1845", "January 2, 1788",
"August 21, 1959", "July 3, 1890", "December 3, 1818", "December 11, 1816", "December 28, 1846",
"January 29, 1861", "June 1, 1792", "April 30, 1812", "March 15, 1820", "April 28, 1788", "February 6, 1788",
"January 26, 1837", "May 11, 1858", "December 10, 1817", "August 10, 1821", "November 8, 1889",
"March 1, 1867", "October 31, 1864", "June 21, 1788", "December 18, 1787", "January 6, 1912",
"July 26, 1788", "November 21, 1789", "November 2, 1889", "March 1, 1803", "November 16, 1907",
"February 14, 1859", "December 12, 1787", "May 29, 1790", "May 23, 1788", "November 2, 1889",
"June 1, 1796", "December 29, 1845", "January 4, 1896", "March 4, 1791", "June 25, 1788", "November 11, 1889",
"June 20, 1863", "May 29, 1848", "July 10, 1890"
]

for(let i = 0; i < 50; i++) {
    unitedStatesObj.state.stateName.push(stateNameArr[i]);
    unitedStatesObj.state.capital.push(stateCapitalsArr[i]);
    unitedStatesObj.state.foundingDate.push(stateFoundingDatesArr[i]);
}

export function getUnitedStatesObj() {
    return unitedStatesObj;
}
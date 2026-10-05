function calculateGrade(score) {
    if (typeof score !== "number" || score < 0 || score > 100) {
        return "Invalid";
    }

    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

function checkAccess(age, hasTicket) {
    if (typeof age !== "number" || typeof hasTicket !== "boolean") {
        return false;
    }

    if (age >= 18 && hasTicket === true) {
        return true;
    } else {
        return false;
    }
}


// Test calculateGrade()
console.log("Grade 100:", calculateGrade(100));
console.log("Grade 90:", calculateGrade(90));
console.log("Grade 89:", calculateGrade(89));
console.log("Grade 80:", calculateGrade(80));
console.log("Grade 70:", calculateGrade(70));
console.log("Grade 60:", calculateGrade(60));
console.log("Grade 0:", calculateGrade(0));

console.log("Invalid -10:", calculateGrade(-10));
console.log("Invalid 101:", calculateGrade(101));
console.log("Invalid text:", calculateGrade("90"));


// Test checkAccess()
console.log("Access 18 + ticket:", checkAccess(18, true));
console.log("Access 17 + ticket:", checkAccess(17, true));
console.log("Access 18 + no ticket:", checkAccess(18, false));
console.log("Access 20 + ticket:", checkAccess(20, true));

console.log("Invalid age:", checkAccess("18", true));
console.log("Invalid ticket:", checkAccess(20, "yes"));

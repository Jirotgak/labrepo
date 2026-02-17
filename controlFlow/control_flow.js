let userRole = "admin";
let accessLevel = "";
if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === manager) {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level", accessLevel)

let isLoggedIn = "true";
let userMessage = "";

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

console.log("User Message:", userMessage);



let userType = "subscriber";
let userCategory = "";

switch(userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:", userCategory);



let isAuthenticated = true;




// Function to determine access based on the user's role
function checkDietaryAccess(role) {
    // Convert input to lowercase to make the check case-insensitive
    // This ensures "Employee", "employee", and "EMPLOYEE" all work.
    const normalizedRole = role.toLowerCase();

    if (normalizedRole === "employee") {
        console.log("Access Granted: You are authorized to have full access to Dietary Services.");
        
    } else if (normalizedRole === "enrolled member") {
        console.log("Access Granted: You are authorized to have access to Dietary Services and one-on-one interaction with a dietician.");
        
    } else if (normalizedRole === "subscriber") {
        console.log("Partial Access: You are authorized to have partial access to facilitate Dietary Services only.");
        
    } else if (normalizedRole === "non-subscriber") {
        console.log("Access Denied: You need to enroll or at least subscribe first to avail this facility.");
        
    } else {
        // Fallback for unrecognized roles
        console.log("Error: Role not recognized. Please enter a valid role (Employee, Enrolled Member, Subscriber, or Non-Subscriber).");
    }
}

// --- TESTING THE CODE ---

// Test Case 1: Employee
console.log("--- Test Case: Employee ---");
checkDietaryAccess("Employee");

// Test Case 2: Enrolled Member
console.log("\n--- Test Case: Enrolled Member ---");
checkDietaryAccess("Enrolled Member");

// Test Case 3: Subscriber
console.log("\n--- Test Case: Subscriber ---");
checkDietaryAccess("Subscriber");

// Test Case 4: Non-Subscriber
console.log("\n--- Test Case: Non-Subscriber ---");
checkDietaryAccess("Non-Subscriber");
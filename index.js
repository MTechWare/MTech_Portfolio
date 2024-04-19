function getUserData() {
    const userDataJSON = localStorage.getItem('userData');
    return userDataJSON ? JSON.parse(userDataJSON) : null;
}

function generateRandomID() {
    const randomString = Math.random().toString(36).substring(2, 10); 
    return 'MTech-' + randomString; 
}

function saveUserData(username, email, password) {
    const userID = generateRandomID(); 
    const userData = { userID, username, email, password };
    localStorage.setItem('userData', JSON.stringify(userData));
}

function SignOut() {
    localStorage.setItem('isLoggedIn', 'no'); 
    window.location.href = 'login.html';
}

function goHome() {
    window.location.href = 'main.html';
}

function goToLogin() {
    window.location.href = 'login.html';
}
function goToSignUp() {
    window.location.href = 'login.html';
}
function goToDash() {
    window.location.href = 'dashboard.html';
}

function checkLoggedIn() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    
    if (isLoggedIn === 'yes') {
        console.log('User is logged in');
    } else (isLoggedIn === 'no')
      
      document.getElementById('user-name').textContent = "User.";
      document.getElementById('user-email').textContent = "(Sign in or Sign up)";
      document.getElementById('user-id').textContent = "(Sign in or Sign up)";
      
        console.log('User is not logged in');
    }


function signUp() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const userData = getUserData();
    if (userData && userData.email === email) {
        console.log('User with this email already exists.');
        return;
    }

    saveUserData(username, email, password);
    console.log('User signed up successfully:', { username, email });
    localStorage.setItem('isLoggedIn', 'yes');
  
    window.location.href = 'dashboard.html';
}

function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const userData = getUserData();

    if (userData && userData.email === email && userData.password === password) {
        console.log('Login successful:', userData);
      
        localStorage.setItem('isLoggedIn', 'yes');
      
        window.location.href = 'dashboard.html'; 

    } else {
        console.log('Invalid email or password.');
    }
}

function displayUserInfo() {
    const userData = getUserData();
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    if (userData && isLoggedIn === 'yes') {
        const userNameElement = document.getElementById('user-name');
        const userEmailElement = document.getElementById('user-email');
        const userIdElement = document.getElementById('user-id');

        if (userNameElement) {
            userNameElement.textContent = userData.username;
        }

        if (userEmailElement) {
            userEmailElement.textContent = userData.email;
        }

        if (userIdElement) {
            userIdElement.textContent = userData.userID;
        }

        console.log("Welcome, you are logged in.");
    } else {
        console.log("User is not logged in.");
      
      const userNameElement = document.getElementById('user-name');
        const userEmailElement = document.getElementById('user-email');
        const userIdElement = document.getElementById('user-id');
      
        if (userNameElement) {
            userNameElement.textContent = "Guest.";
        }

        if (userEmailElement) {
            userEmailElement.textContent = "Login or Sign Up";
        }

        if (userIdElement) {
            userIdElement.textContent = "Login or Sign Up";
        }
    }
}


window.onload = displayUserInfo;

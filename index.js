const userInfo = {
  username: "user1",
  password: "password123"
};

function createLoginTracker(userInfo) {
  let attemptCount = 0;

  const login = (passwordAttempt) => {
    attemptCount++;
    
    if (passwordAttempt === userInfo.password) {
      return "Login successful";
    }

    else if (attemptCount > 3) {
      return "Account locked due to too many failed login attempts";
    }

    return `Attempt ${attemptCount}: Login failed`;
  };

  return login;
}

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};

// 🔥 Firebase config (replace with your own)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// LOGIN
function login() {
  const role = document.getElementById("role").value;
  if (role === "student") window.location = "student.html";
  else window.location = "teacher.html";
}

// STUDENT: MARK ATTENDANCE
function markAttendance() {
  db.collection("attendance").add({
    student: "S123",
    timestamp: new Date(),
    status: "present"
  });
  alert("Attendance marked ✅");
}

// ATTENDANCE PREDICTION
function loadPrediction() {
  const attended = 42;
  const total = 58;
  const percent = ((attended / total) * 100).toFixed(2);

  let message = percent >= 75
    ? "You're safe 💙"
    : "Attend next classes to stay eligible";

  document.getElementById("attendanceText").innerText =
    Attendance: ${percent}%;

  document.getElementById("predictionText").innerText = message;
}

// FEEDBACK
function sendFeedback() {
  const text = document.getElementById("feedback").value;
  db.collection("feedback").add({
    text,
    time: new Date()
  });
  alert("Feedback submitted anonymously 🌸");
}

// TEACHER
function startAttendance() {
  document.getElementById("qrStatus").innerText =
    "QR Generated (Geo-fenced)";
}

if (document.getElementById("predictionText")) {
  loadPrediction();
}

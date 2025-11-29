/* ===========================================================
   STUDENT TOOLS MODULE
   Comprehensive student tools: CGPA, GPA, Grade Converter,
   Reminders, and Study Planner
   =========================================================== */

// Modal elements
const studentToolsModal = document.getElementById('studentToolsModal');
const studentToolsBtn = document.getElementById('studentToolsBtn');
const closeStudentTools = document.getElementById('closeStudentTools');
const toolTabs = document.querySelectorAll('.tool-tab');
const toolPanels = document.querySelectorAll('.tool-panel');

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  if (studentToolsBtn) {
    studentToolsBtn.addEventListener('click', openStudentTools);
  }
  if (closeStudentTools) {
    closeStudentTools.addEventListener('click', closeModal);
  }
  
  // Tab switching
  toolTabs.forEach(tab => {
    tab.addEventListener('click', () => switchTool(tab.dataset.tool));
  });
  
  // Close on backdrop click
  if (studentToolsModal) {
    studentToolsModal.addEventListener('click', (e) => {
      if (e.target === studentToolsModal) closeModal();
    });
  }
  
  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && studentToolsModal && studentToolsModal.style.display !== 'none') {
      closeModal();
    }
  });
  
  // Initialize tools
  initCGPACalculator();
  initGPACalculator();
  initGradeConverter();
  initReminders();
  initStudyPlanner();
  initPDFNotes();
});

function openStudentTools() {
  if (studentToolsModal) {
    studentToolsModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
}

function closeModal() {
  if (studentToolsModal) {
    studentToolsModal.style.display = 'none';
    document.body.style.overflow = '';
  }
}

function switchTool(toolName) {
  // Update tabs
  toolTabs.forEach(tab => {
    tab.classList.toggle('active', tab.dataset.tool === toolName);
  });
  
  // Update panels
  toolPanels.forEach(panel => {
    panel.classList.toggle('active', panel.id === `tool-${toolName}`);
  });
}

/* ===========================================================
   CGPA CALCULATOR
   =========================================================== */
let semesterCount = 0;

function initCGPACalculator() {
  const addSemesterBtn = document.getElementById('add-semester');
  const cgpaInputs = document.getElementById('cgpa-inputs');
  
  if (addSemesterBtn) {
    addSemesterBtn.addEventListener('click', addSemesterInput);
  }
  
  // Add initial semester
  addSemesterInput();
}

function addSemesterInput() {
  semesterCount++;
  const cgpaInputs = document.getElementById('cgpa-inputs');
  if (!cgpaInputs) return;
  
  const semesterDiv = document.createElement('div');
  semesterDiv.className = 'semester-input';
  semesterDiv.innerHTML = `
    <label>Semester ${semesterCount} GPA:</label>
    <input type="number" class="semester-gpa" placeholder="0.00" min="0" max="10" step="0.01" data-semester="${semesterCount}">
    <button class="remove-btn" onclick="removeSemester(this)">✕</button>
  `;
  
  cgpaInputs.appendChild(semesterDiv);
  
  // Add event listeners to all GPA inputs
  document.querySelectorAll('.semester-gpa').forEach(input => {
    input.addEventListener('input', calculateCGPA);
  });
  
  calculateCGPA();
}

function removeSemester(btn) {
  btn.parentElement.remove();
  calculateCGPA();
}

function calculateCGPA() {
  const inputs = document.querySelectorAll('.semester-gpa');
  const resultEl = document.getElementById('cgpa-result');
  
  if (!resultEl) return;
  
  const gpas = Array.from(inputs)
    .map(input => parseFloat(input.value))
    .filter(val => !isNaN(val) && val > 0);
  
  if (gpas.length === 0) {
    resultEl.textContent = '-';
    return;
  }
  
  const cgpa = gpas.reduce((sum, gpa) => sum + gpa, 0) / gpas.length;
  resultEl.textContent = cgpa.toFixed(2);
  resultEl.className = 'result-value ' + getCGPAStatus(cgpa);
}

function getCGPAStatus(cgpa) {
  if (cgpa >= 9) return 'excellent';
  if (cgpa >= 8) return 'very-good';
  if (cgpa >= 7) return 'good';
  if (cgpa >= 6) return 'average';
  return 'needs-improvement';
}

/* ===========================================================
   GPA CALCULATOR
   =========================================================== */
let subjectCount = 0;

function initGPACalculator() {
  const addSubjectBtn = document.getElementById('add-subject');
  
  if (addSubjectBtn) {
    addSubjectBtn.addEventListener('click', addSubjectInput);
  }
  
  // Add initial subject
  addSubjectInput();
}

function addSubjectInput() {
  subjectCount++;
  const gpaInputs = document.getElementById('gpa-inputs');
  if (!gpaInputs) return;
  
  const subjectDiv = document.createElement('div');
  subjectDiv.className = 'subject-input';
  subjectDiv.innerHTML = `
    <input type="text" class="subject-name" placeholder="Subject name" data-subject="${subjectCount}">
    <input type="number" class="subject-credits" placeholder="Credits" min="1" step="1" data-subject="${subjectCount}">
    <select class="subject-grade" data-subject="${subjectCount}">
      <option value="10">S (10)</option>
      <option value="9">A (9)</option>
      <option value="8">B (8)</option>
      <option value="7">C (7)</option>
      <option value="6">D (6)</option>
      <option value="5">E (5)</option>
      <option value="0">F (0)</option>
    </select>
    <button class="remove-btn" onclick="removeSubject(this)">✕</button>
  `;
  
  gpaInputs.appendChild(subjectDiv);
  
  // Add event listeners
  document.querySelectorAll('.subject-credits, .subject-grade').forEach(input => {
    input.addEventListener('input', calculateGPA);
    input.addEventListener('change', calculateGPA);
  });
  
  calculateGPA();
}

function removeSubject(btn) {
  btn.parentElement.remove();
  calculateGPA();
}

function calculateGPA() {
  const inputs = document.querySelectorAll('.subject-input');
  const resultEl = document.getElementById('gpa-result');
  
  if (!resultEl) return;
  
  let totalPoints = 0;
  let totalCredits = 0;
  
  inputs.forEach(subjectDiv => {
    const credits = parseFloat(subjectDiv.querySelector('.subject-credits').value);
    const grade = parseFloat(subjectDiv.querySelector('.subject-grade').value);
    
    if (!isNaN(credits) && credits > 0 && !isNaN(grade)) {
      totalPoints += credits * grade;
      totalCredits += credits;
    }
  });
  
  if (totalCredits === 0) {
    resultEl.textContent = '-';
    return;
  }
  
  const gpa = totalPoints / totalCredits;
  resultEl.textContent = gpa.toFixed(2);
  resultEl.className = 'result-value ' + getCGPAStatus(gpa);
}

/* ===========================================================
   GRADE CONVERTER
   =========================================================== */
function initGradeConverter() {
  const gradeInput = document.getElementById('grade-input');
  const fromSystem = document.getElementById('grade-from-system');
  
  if (gradeInput) {
    gradeInput.addEventListener('input', convertGrade);
  }
  if (fromSystem) {
    fromSystem.addEventListener('change', convertGrade);
  }
}

function convertGrade() {
  const input = document.getElementById('grade-input');
  const fromSystem = document.getElementById('grade-from-system');
  const conversionsEl = document.getElementById('grade-conversions');
  
  if (!input || !fromSystem || !conversionsEl) return;
  
  const value = parseFloat(input.value);
  if (isNaN(value) || value < 0) {
    conversionsEl.innerHTML = '<div class="conversion-item">Enter a valid number</div>';
    return;
  }
  
  const from = fromSystem.value;
  let conversions = {};
  
  if (from === 'percentage') {
    conversions['CGPA (10 scale)'] = (value / 10).toFixed(2);
    conversions['CGPA (4 scale)'] = (value / 25).toFixed(2);
    conversions['Letter Grade'] = getLetterGrade(value);
  } else if (from === 'cgpa10') {
    conversions['Percentage (%)'] = (value * 10).toFixed(2);
    conversions['CGPA (4 scale)'] = (value / 2.5).toFixed(2);
    conversions['Letter Grade'] = getLetterGrade(value * 10);
  } else if (from === 'cgpa4') {
    conversions['Percentage (%)'] = (value * 25).toFixed(2);
    conversions['CGPA (10 scale)'] = (value * 2.5).toFixed(2);
    conversions['Letter Grade'] = getLetterGrade(value * 25);
  } else if (from === 'letter') {
    const percentage = getPercentageFromLetter(value);
    conversions['Percentage (%)'] = percentage.toFixed(2);
    conversions['CGPA (10 scale)'] = (percentage / 10).toFixed(2);
    conversions['CGPA (4 scale)'] = (percentage / 25).toFixed(2);
  }
  
  conversionsEl.innerHTML = Object.entries(conversions)
    .map(([key, val]) => `<div class="conversion-item"><strong>${key}:</strong> ${val}</div>`)
    .join('');
}

function getLetterGrade(percentage) {
  if (percentage >= 90) return 'S';
  if (percentage >= 80) return 'A';
  if (percentage >= 70) return 'B';
  if (percentage >= 60) return 'C';
  if (percentage >= 50) return 'D';
  if (percentage >= 40) return 'E';
  return 'F';
}

function getPercentageFromLetter(letter) {
  const grades = { 'S': 95, 'A': 85, 'B': 75, 'C': 65, 'D': 55, 'E': 45, 'F': 35 };
  return grades[letter.toUpperCase()] || 0;
}

/* ===========================================================
   REMINDERS
   =========================================================== */
let reminders = JSON.parse(localStorage.getItem('studentReminders') || '[]');

function initReminders() {
  const addReminderBtn = document.getElementById('add-reminder');
  
  if (addReminderBtn) {
    addReminderBtn.addEventListener('click', addReminder);
  }
  
  renderReminders();
  checkUpcomingReminders();
  
  // Check reminders every minute
  setInterval(checkUpcomingReminders, 60000);
}

function addReminder() {
  const title = document.getElementById('reminder-title');
  const desc = document.getElementById('reminder-desc');
  const date = document.getElementById('reminder-date');
  
  if (!title || !date) return;
  
  const reminderTitle = title.value.trim();
  const reminderDesc = desc ? desc.value.trim() : '';
  const reminderDate = date.value;
  
  if (!reminderTitle || !reminderDate) {
    alert('Please fill in title and date');
    return;
  }
  
  const reminder = {
    id: Date.now(),
    title: reminderTitle,
    description: reminderDesc,
    date: reminderDate,
    completed: false
  };
  
  reminders.push(reminder);
  saveReminders();
  renderReminders();
  
  // Clear form
  title.value = '';
  if (desc) desc.value = '';
  date.value = '';
}

function removeReminder(id) {
  reminders = reminders.filter(r => r.id !== id);
  saveReminders();
  renderReminders();
}

function toggleReminder(id) {
  const reminder = reminders.find(r => r.id === id);
  if (reminder) {
    reminder.completed = !reminder.completed;
    saveReminders();
    renderReminders();
  }
}

function saveReminders() {
  localStorage.setItem('studentReminders', JSON.stringify(reminders));
}

function renderReminders() {
  const listEl = document.getElementById('reminders-list');
  if (!listEl) return;
  
  if (reminders.length === 0) {
    listEl.innerHTML = '<div class="no-reminders">No reminders yet. Add one above!</div>';
    return;
  }
  
  // Sort by date
  const sorted = [...reminders].sort((a, b) => new Date(a.date) - new Date(b.date));
  
  listEl.innerHTML = sorted.map(reminder => {
    const date = new Date(reminder.date);
    const isPast = date < new Date();
    const isToday = date.toDateString() === new Date().toDateString();
    
    return `
      <div class="reminder-item ${reminder.completed ? 'completed' : ''} ${isPast && !reminder.completed ? 'overdue' : ''}">
        <div class="reminder-checkbox">
          <input type="checkbox" ${reminder.completed ? 'checked' : ''} onchange="toggleReminder(${reminder.id})">
        </div>
        <div class="reminder-content">
          <div class="reminder-title">${escapeHtml(reminder.title)}</div>
          ${reminder.description ? `<div class="reminder-desc">${escapeHtml(reminder.description)}</div>` : ''}
          <div class="reminder-date ${isToday ? 'today' : ''}">
            ${formatReminderDate(date)} ${isPast && !reminder.completed ? '⚠️ Overdue' : ''}
          </div>
        </div>
        <button class="remove-btn" onclick="removeReminder(${reminder.id})">✕</button>
      </div>
    `;
  }).join('');
}

function formatReminderDate(date) {
  const now = new Date();
  const diff = date - now;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  
  if (days === 0) return 'Today at ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  if (days === 1) return 'Tomorrow at ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  if (days === -1) return 'Yesterday';
  if (days > 0 && days < 7) return `In ${days} days`;
  
  return date.toLocaleString();
}

function checkUpcomingReminders() {
  const now = new Date();
  const upcoming = reminders.filter(r => {
    const reminderDate = new Date(r.date);
    const diff = reminderDate - now;
    return !r.completed && diff > 0 && diff < 3600000; // Within 1 hour
  });
  
  if (upcoming.length > 0) {
    upcoming.forEach(reminder => {
      if (!reminder.notified) {
        // Could show browser notification here
        console.log('Upcoming reminder:', reminder.title);
        reminder.notified = true;
      }
    });
    saveReminders();
  }
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

/* ===========================================================
   STUDY PLANNER
   =========================================================== */
let studySessions = JSON.parse(localStorage.getItem('studySessions') || '[]');

function initStudyPlanner() {
  const addSessionBtn = document.getElementById('add-study-session');
  
  if (addSessionBtn) {
    addSessionBtn.addEventListener('click', addStudySession);
  }
  
  renderPlanner();
}

function addStudySession() {
  const subject = document.getElementById('planner-subject');
  const date = document.getElementById('planner-date');
  const time = document.getElementById('planner-time');
  const duration = document.getElementById('planner-duration');
  
  if (!subject || !date || !time || !duration) return;
  
  const subjectName = subject.value.trim();
  const sessionDate = date.value;
  const sessionTime = time.value;
  const sessionDuration = parseFloat(duration.value);
  
  if (!subjectName || !sessionDate || !sessionTime || !sessionDuration) {
    alert('Please fill in all fields');
    return;
  }
  
  const session = {
    id: Date.now(),
    subject: subjectName,
    date: sessionDate,
    time: sessionTime,
    duration: sessionDuration,
    completed: false
  };
  
  studySessions.push(session);
  saveStudySessions();
  renderPlanner();
  
  // Clear form
  subject.value = '';
  date.value = '';
  time.value = '';
  duration.value = '';
}

function removeStudySession(id) {
  studySessions = studySessions.filter(s => s.id !== id);
  saveStudySessions();
  renderPlanner();
}

function toggleStudySession(id) {
  const session = studySessions.find(s => s.id === id);
  if (session) {
    session.completed = !session.completed;
    saveStudySessions();
    renderPlanner();
  }
}

function saveStudySessions() {
  localStorage.setItem('studySessions', JSON.stringify(studySessions));
}

function renderPlanner() {
  const calendarEl = document.getElementById('planner-calendar');
  if (!calendarEl) return;
  
  if (studySessions.length === 0) {
    calendarEl.innerHTML = '<div class="no-sessions">No study sessions planned. Add one above!</div>';
    return;
  }
  
  // Group by date
  const grouped = {};
  studySessions.forEach(session => {
    if (!grouped[session.date]) {
      grouped[session.date] = [];
    }
    grouped[session.date].push(session);
  });
  
  // Sort dates
  const sortedDates = Object.keys(grouped).sort();
  
  calendarEl.innerHTML = sortedDates.map(date => {
    const sessions = grouped[date].sort((a, b) => a.time.localeCompare(b.time));
    const dateObj = new Date(date);
    const isToday = dateObj.toDateString() === new Date().toDateString();
    
    return `
      <div class="planner-day ${isToday ? 'today' : ''}">
        <div class="planner-day-header">
          <strong>${formatPlannerDate(dateObj)}</strong>
          ${isToday ? '<span class="today-badge">Today</span>' : ''}
        </div>
        <div class="planner-sessions">
          ${sessions.map(session => `
            <div class="planner-session ${session.completed ? 'completed' : ''}">
              <div class="session-checkbox">
                <input type="checkbox" ${session.completed ? 'checked' : ''} onchange="toggleStudySession(${session.id})">
              </div>
              <div class="session-content">
                <div class="session-subject">${escapeHtml(session.subject)}</div>
                <div class="session-time">${formatTime(session.time)} • ${session.duration}h</div>
              </div>
              <button class="remove-btn" onclick="removeStudySession(${session.id})">✕</button>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');
}

function formatPlannerDate(date) {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  
  if (date.toDateString() === today.toDateString()) {
    return 'Today';
  }
  if (date.toDateString() === tomorrow.toDateString()) {
    return 'Tomorrow';
  }
  
  return date.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });
}

function formatTime(time) {
  const [hours, minutes] = time.split(':');
  const hour = parseInt(hours);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const displayHour = hour % 12 || 12;
  return `${displayHour}:${minutes} ${ampm}`;
}

/* ===========================================================
   PDF NOTES
   =========================================================== */
let pdfNotesData = null;

function initPDFNotes() {
  const branchSelect = document.getElementById('pdf-branch-select');
  const semesterSelect = document.getElementById('pdf-semester-select');
  
  if (!branchSelect || !semesterSelect) return;
  
  // Load PDF notes data
  loadPDFNotes();
  
  // Branch selection handler
  branchSelect.addEventListener('change', (e) => {
    const branch = e.target.value;
    updateSemesterDropdown(branch);
    if (branch && semesterSelect.value) {
      renderPDFNotes(branch, semesterSelect.value);
    } else {
      clearPDFNotesList();
    }
  });
  
  // Semester selection handler
  semesterSelect.addEventListener('change', (e) => {
    const semester = e.target.value;
    const branch = branchSelect.value;
    if (branch && semester) {
      renderPDFNotes(branch, semester);
    } else {
      clearPDFNotesList();
    }
  });
}

async function loadPDFNotes() {
  try {
    const response = await fetch('/notes-data.json');
    if (!response.ok) {
      throw new Error('Failed to load PDF notes data');
    }
    pdfNotesData = await response.json();
  } catch (error) {
    console.error('Error loading PDF notes:', error);
    const listEl = document.getElementById('pdf-notes-list');
    if (listEl) {
      listEl.innerHTML = '<div class="pdf-error">Failed to load PDF notes. Please try again later.</div>';
    }
  }
}

function updateSemesterDropdown(branch) {
  const semesterSelect = document.getElementById('pdf-semester-select');
  if (!semesterSelect || !pdfNotesData || !branch) {
    return;
  }
  
  // Clear existing options except the first one
  semesterSelect.innerHTML = '<option value="">Select Semester</option>';
  
  // Get available semesters for the selected branch
  const branchData = pdfNotesData[branch];
  if (branchData) {
    const semesters = Object.keys(branchData).sort();
    semesters.forEach(sem => {
      const option = document.createElement('option');
      option.value = sem;
      option.textContent = `Semester ${sem.replace('sem', '')}`;
      semesterSelect.appendChild(option);
    });
  }
}

function renderPDFNotes(branch, semester) {
  const listEl = document.getElementById('pdf-notes-list');
  if (!listEl || !pdfNotesData || !branch || !semester) {
    return;
  }
  
  const branchData = pdfNotesData[branch];
  if (!branchData || !branchData[semester]) {
    listEl.innerHTML = '<div class="pdf-empty">No PDF notes available for this selection.</div>';
    return;
  }
  
  const semesterData = branchData[semester];
  const subjects = semesterData.subjects || [];
  
  if (subjects.length === 0) {
    listEl.innerHTML = '<div class="pdf-empty">No PDF notes available for this selection.</div>';
    return;
  }
  
  let html = '';
  
  subjects.forEach(subject => {
    html += `
      <div class="pdf-subject-group">
        <div class="pdf-subject-header">
          <h4>${escapeHtml(subject.name)}</h4>
        </div>
        <div class="pdf-cards">
    `;
    
    subject.pdfs.forEach(pdf => {
      html += `
        <div class="pdf-note-card">
          <div class="pdf-card-icon">📄</div>
          <div class="pdf-card-content">
            <div class="pdf-card-title">${escapeHtml(pdf.title)}</div>
            <div class="pdf-card-meta">
              <span class="pdf-card-type">${escapeHtml(pdf.type || 'PDF')}</span>
              ${pdf.size ? `<span class="pdf-card-size">${escapeHtml(pdf.size)}</span>` : ''}
            </div>
          </div>
          <div class="pdf-actions">
            <button class="pdf-btn pdf-btn-view" onclick="viewPDF('${escapeHtml(pdf.url)}')" title="View PDF">
              👁️ View
            </button>
            <button class="pdf-btn pdf-btn-download" onclick="downloadPDF('${escapeHtml(pdf.url)}', '${escapeHtml(pdf.title)}.pdf')" title="Download PDF">
              ⬇️ Download
            </button>
          </div>
        </div>
      `;
    });
    
    html += `
        </div>
      </div>
    `;
  });
  
  listEl.innerHTML = html;
}

function clearPDFNotesList() {
  const listEl = document.getElementById('pdf-notes-list');
  if (listEl) {
    listEl.innerHTML = '<div class="pdf-empty">Select a branch and semester to view PDF notes.</div>';
  }
}

function viewPDF(url) {
  if (!url) {
    alert('PDF URL not available');
    return;
  }
  window.open(url, '_blank', 'noopener,noreferrer');
}

function downloadPDF(url, filename) {
  if (!url) {
    alert('PDF URL not available');
    return;
  }
  
  // Create a temporary anchor element to trigger download
  const link = document.createElement('a');
  link.href = url;
  link.download = filename || 'notes.pdf';
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Make functions globally available for onclick handlers
window.removeSemester = removeSemester;
window.removeSubject = removeSubject;
window.removeReminder = removeReminder;
window.toggleReminder = toggleReminder;
window.removeStudySession = removeStudySession;
window.toggleStudySession = toggleStudySession;
window.viewPDF = viewPDF;
window.downloadPDF = downloadPDF;


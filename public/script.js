/* ===========================================================
   FEATURE MODULE: FACULTY DATABASE
   Add or edit faculty as needed.
   =========================================================== */
const facultyDB = [
  {
    name: "Balaji V",
    department: "CSE",
    email: "balajiv@nie.ac.in",
    cabin: "Block A - 204"
  },
  {
    name: "Divya Sharma",
    department: "ECE",
    email: "divya@nie.ac.in",
    cabin: "Block C - 310"
  },
  {
    name: "Ramesh Bhat",
    department: "Mechanical",
    email: "ramesh@nie.ac.in",
    cabin: "Workshop Lab"
  },
  {
    name: "Sunitha Rao",
    department: "ISE",
    email: "sunitha@nie.ac.in",
    cabin: "Block B - 112"
  }
];

/* ===========================================================
   FEATURE MODULE: TIMETABLE DATABASE
   Branch-based timetable system with 3 branches, 2 classes each
   =========================================================== */
const timetableDB = {
  // Branch 1: Computer Science Engineering (CSE)
  cse: {
    class1: {
      monday: [
        { time: "9:00 AM - 10:00 AM", subject: "Data Structures", faculty: "Dr. Balaji V", room: "CSE-101" },
        { time: "11:00 AM - 12:00 PM", subject: "Database Management", faculty: "Prof. Sunitha Rao", room: "CSE-102" }
      ],
      tuesday: [
        { time: "9:00 AM - 10:00 AM", subject: "Operating Systems", faculty: "Dr. Balaji V", room: "CSE-101" },
        { time: "2:00 PM - 3:00 PM", subject: "Computer Networks", faculty: "Prof. Sunitha Rao", room: "CSE-103" }
      ],
      wednesday: [
        { time: "10:00 AM - 11:00 AM", subject: "Data Structures Lab", faculty: "Dr. Balaji V", room: "CSE-Lab-1" },
        { time: "3:00 PM - 4:00 PM", subject: "DBMS Lab", faculty: "Prof. Sunitha Rao", room: "CSE-Lab-2" }
      ],
      thursday: [
        { time: "9:00 AM - 10:00 AM", subject: "Algorithm Design", faculty: "Dr. Balaji V", room: "CSE-101" },
        { time: "11:00 AM - 12:00 PM", subject: "Software Engineering", faculty: "Prof. Sunitha Rao", room: "CSE-102" }
      ],
      friday: [
        { time: "10:00 AM - 11:00 AM", subject: "Operating Systems Lab", faculty: "Dr. Balaji V", room: "CSE-Lab-1" },
        { time: "2:00 PM - 3:00 PM", subject: "Web Technologies", faculty: "Prof. Sunitha Rao", room: "CSE-103" }
      ],
      saturday: [],
      sunday: []
    },
    class2: {
      monday: [
        { time: "9:00 AM - 10:00 AM", subject: "Machine Learning", faculty: "Dr. Balaji V", room: "CSE-201" },
        { time: "11:00 AM - 12:00 PM", subject: "Artificial Intelligence", faculty: "Prof. Sunitha Rao", room: "CSE-202" }
      ],
      tuesday: [
        { time: "9:00 AM - 10:00 AM", subject: "Cloud Computing", faculty: "Dr. Balaji V", room: "CSE-201" },
        { time: "2:00 PM - 3:00 PM", subject: "Cybersecurity", faculty: "Prof. Sunitha Rao", room: "CSE-203" }
      ],
      wednesday: [
        { time: "10:00 AM - 11:00 AM", subject: "ML Lab", faculty: "Dr. Balaji V", room: "CSE-Lab-3" },
        { time: "3:00 PM - 4:00 PM", subject: "AI Lab", faculty: "Prof. Sunitha Rao", room: "CSE-Lab-4" }
      ],
      thursday: [
        { time: "9:00 AM - 10:00 AM", subject: "Big Data Analytics", faculty: "Dr. Balaji V", room: "CSE-201" },
        { time: "11:00 AM - 12:00 PM", subject: "IoT Systems", faculty: "Prof. Sunitha Rao", room: "CSE-202" }
      ],
      friday: [
        { time: "10:00 AM - 11:00 AM", subject: "Cloud Computing Lab", faculty: "Dr. Balaji V", room: "CSE-Lab-3" },
        { time: "2:00 PM - 3:00 PM", subject: "Blockchain Technology", faculty: "Prof. Sunitha Rao", room: "CSE-203" }
      ],
      saturday: [],
      sunday: []
    }
  },
  // Branch 2: Electronics and Communication Engineering (ECE)
  ece: {
    class1: {
      monday: [
        { time: "9:00 AM - 10:00 AM", subject: "Digital Electronics", faculty: "Prof. Divya Sharma", room: "ECE-101" },
        { time: "11:00 AM - 12:00 PM", subject: "Signals and Systems", faculty: "Dr. Ramesh Bhat", room: "ECE-102" }
      ],
      tuesday: [
        { time: "9:00 AM - 10:00 AM", subject: "Communication Systems", faculty: "Prof. Divya Sharma", room: "ECE-101" },
        { time: "2:00 PM - 3:00 PM", subject: "Microprocessors", faculty: "Dr. Ramesh Bhat", room: "ECE-103" }
      ],
      wednesday: [
        { time: "10:00 AM - 11:00 AM", subject: "Digital Electronics Lab", faculty: "Prof. Divya Sharma", room: "ECE-Lab-1" },
        { time: "3:00 PM - 4:00 PM", subject: "Signals Lab", faculty: "Dr. Ramesh Bhat", room: "ECE-Lab-2" }
      ],
      thursday: [
        { time: "9:00 AM - 10:00 AM", subject: "VLSI Design", faculty: "Prof. Divya Sharma", room: "ECE-101" },
        { time: "11:00 AM - 12:00 PM", subject: "Embedded Systems", faculty: "Dr. Ramesh Bhat", room: "ECE-102" }
      ],
      friday: [
        { time: "10:00 AM - 11:00 AM", subject: "Microprocessors Lab", faculty: "Prof. Divya Sharma", room: "ECE-Lab-1" },
        { time: "2:00 PM - 3:00 PM", subject: "Antenna Design", faculty: "Dr. Ramesh Bhat", room: "ECE-103" }
      ],
      saturday: [],
      sunday: []
    },
    class2: {
      monday: [
        { time: "9:00 AM - 10:00 AM", subject: "RF Engineering", faculty: "Prof. Divya Sharma", room: "ECE-201" },
        { time: "11:00 AM - 12:00 PM", subject: "Optical Communication", faculty: "Dr. Ramesh Bhat", room: "ECE-202" }
      ],
      tuesday: [
        { time: "9:00 AM - 10:00 AM", subject: "Wireless Communication", faculty: "Prof. Divya Sharma", room: "ECE-201" },
        { time: "2:00 PM - 3:00 PM", subject: "Satellite Communication", faculty: "Dr. Ramesh Bhat", room: "ECE-203" }
      ],
      wednesday: [
        { time: "10:00 AM - 11:00 AM", subject: "RF Lab", faculty: "Prof. Divya Sharma", room: "ECE-Lab-3" },
        { time: "3:00 PM - 4:00 PM", subject: "Optical Lab", faculty: "Dr. Ramesh Bhat", room: "ECE-Lab-4" }
      ],
      thursday: [
        { time: "9:00 AM - 10:00 AM", subject: "5G Networks", faculty: "Prof. Divya Sharma", room: "ECE-201" },
        { time: "11:00 AM - 12:00 PM", subject: "IoT Communication", faculty: "Dr. Ramesh Bhat", room: "ECE-202" }
      ],
      friday: [
        { time: "10:00 AM - 11:00 AM", subject: "Wireless Lab", faculty: "Prof. Divya Sharma", room: "ECE-Lab-3" },
        { time: "2:00 PM - 3:00 PM", subject: "Network Protocols", faculty: "Dr. Ramesh Bhat", room: "ECE-203" }
      ],
      saturday: [],
      sunday: []
    }
  },
  // Branch 3: Information Science Engineering (ISE)
  ise: {
    class1: {
      monday: [
        { time: "9:00 AM - 10:00 AM", subject: "Information Systems", faculty: "Prof. Sunitha Rao", room: "ISE-101" },
        { time: "11:00 AM - 12:00 PM", subject: "Data Mining", faculty: "Dr. Balaji V", room: "ISE-102" }
      ],
      tuesday: [
        { time: "9:00 AM - 10:00 AM", subject: "Business Intelligence", faculty: "Prof. Sunitha Rao", room: "ISE-101" },
        { time: "2:00 PM - 3:00 PM", subject: "Enterprise Systems", faculty: "Dr. Balaji V", room: "ISE-103" }
      ],
      wednesday: [
        { time: "10:00 AM - 11:00 AM", subject: "Data Mining Lab", faculty: "Prof. Sunitha Rao", room: "ISE-Lab-1" },
        { time: "3:00 PM - 4:00 PM", subject: "BI Lab", faculty: "Dr. Balaji V", room: "ISE-Lab-2" }
      ],
      thursday: [
        { time: "9:00 AM - 10:00 AM", subject: "Information Security", faculty: "Prof. Sunitha Rao", room: "ISE-101" },
        { time: "11:00 AM - 12:00 PM", subject: "Cloud Services", faculty: "Dr. Balaji V", room: "ISE-102" }
      ],
      friday: [
        { time: "10:00 AM - 11:00 AM", subject: "Security Lab", faculty: "Prof. Sunitha Rao", room: "ISE-Lab-1" },
        { time: "2:00 PM - 3:00 PM", subject: "ERP Systems", faculty: "Dr. Balaji V", room: "ISE-103" }
      ],
      saturday: [],
      sunday: []
    },
    class2: {
      monday: [
        { time: "9:00 AM - 10:00 AM", subject: "Knowledge Management", faculty: "Prof. Sunitha Rao", room: "ISE-201" },
        { time: "11:00 AM - 12:00 PM", subject: "Decision Support Systems", faculty: "Dr. Balaji V", room: "ISE-202" }
      ],
      tuesday: [
        { time: "9:00 AM - 10:00 AM", subject: "Data Warehousing", faculty: "Prof. Sunitha Rao", room: "ISE-201" },
        { time: "2:00 PM - 3:00 PM", subject: "E-Commerce Systems", faculty: "Dr. Balaji V", room: "ISE-203" }
      ],
      wednesday: [
        { time: "10:00 AM - 11:00 AM", subject: "DW Lab", faculty: "Prof. Sunitha Rao", room: "ISE-Lab-3" },
        { time: "3:00 PM - 4:00 PM", subject: "E-Commerce Lab", faculty: "Dr. Balaji V", room: "ISE-Lab-4" }
      ],
      thursday: [
        { time: "9:00 AM - 10:00 AM", subject: "IT Project Management", faculty: "Prof. Sunitha Rao", room: "ISE-201" },
        { time: "11:00 AM - 12:00 PM", subject: "Digital Transformation", faculty: "Dr. Balaji V", room: "ISE-202" }
      ],
      friday: [
        { time: "10:00 AM - 11:00 AM", subject: "Project Lab", faculty: "Prof. Sunitha Rao", room: "ISE-Lab-3" },
        { time: "2:00 PM - 3:00 PM", subject: "IT Strategy", faculty: "Dr. Balaji V", room: "ISE-203" }
      ],
      saturday: [],
      sunday: []
    }
  }
};

function getTimetableForToday(branch = null, classNum = null) {
  const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
  const todayKey = days[new Date().getDay()];

  // If branch and class specified, get specific timetable
  if (branch && classNum) {
    const branchData = timetableDB[branch.toLowerCase()];
    if (!branchData) {
      return `⚠️ Branch "${branch}" not found. Available branches: CSE, ECE, ISE`;
    }
    const classData = branchData[`class${classNum}`];
    if (!classData) {
      return `⚠️ Class "${classNum}" not found for branch "${branch}". Available classes: 1, 2`;
    }
    const todayList = classData[todayKey] || [];

    if (todayList.length === 0) {
      return `📅 **${branch.toUpperCase()} - Class ${classNum} - ${todayKey.toUpperCase()}**\n\nNo classes today — enjoy your day!`;
    }

    let output = `📅 **${branch.toUpperCase()} - Class ${classNum} - ${todayKey.toUpperCase()}**\n\n`;
    todayList.forEach(item => {
      output += `⏰ ${item.time}\n📚 ${item.subject}\n👨‍🏫 ${item.faculty}\n🏢 ${item.room}\n\n`;
    });
    return output;
  }

  // Default: show all branches summary
  let output = `📅 **Today's Timetable Summary (${todayKey.toUpperCase()})**\n\n`;
  let hasClasses = false;

  Object.keys(timetableDB).forEach(branchKey => {
    const branchName = branchKey.toUpperCase();
    ['class1', 'class2'].forEach(classKey => {
      const classNum = classKey.replace('class', '');
      const classData = timetableDB[branchKey][classKey];
      const todayList = classData[todayKey] || [];

      if (todayList.length > 0) {
        hasClasses = true;
        output += `\n**${branchName} - Class ${classNum}:**\n`;
        todayList.forEach(item => {
          output += `  ⏰ ${item.time} - ${item.subject} (${item.room})\n`;
        });
      }
    });
  });

  if (!hasClasses) {
    return `📅 **${todayKey.toUpperCase()}**\n\nNo classes today — enjoy your day!`;
  }

  return output;
}

function getTimetableForBranch(branch, day = null) {
  const branchData = timetableDB[branch.toLowerCase()];
  if (!branchData) {
    return `⚠️ Branch "${branch}" not found. Available branches: CSE, ECE, ISE`;
  }

  const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
  const targetDay = day ? day.toLowerCase() : days[new Date().getDay()];

  if (!days.includes(targetDay)) {
    return `⚠️ Invalid day. Available days: ${days.join(', ')}`;
  }

  let output = `📅 **${branch.toUpperCase()} Timetable - ${targetDay.toUpperCase()}**\n\n`;
  let hasClasses = false;

  ['class1', 'class2'].forEach(classKey => {
    const classNum = classKey.replace('class', '');
    const classData = branchData[classKey];
    const dayList = classData[targetDay] || [];

    if (dayList.length > 0) {
      hasClasses = true;
      output += `\n**Class ${classNum}:**\n`;
      dayList.forEach(item => {
        output += `  ⏰ ${item.time}\n  📚 ${item.subject}\n  👨‍🏫 ${item.faculty}\n  🏢 ${item.room}\n\n`;
      });
    }
  });

  if (!hasClasses) {
    return `📅 **${branch.toUpperCase()} - ${targetDay.toUpperCase()}**\n\nNo classes scheduled.`;
  }

  return output;
}

function searchFaculty(nameQuery) {
  if (!nameQuery || nameQuery.trim() === '') {
    return `⚠️ Please provide a faculty name to search.\n\nUsage: /faculty <name>\nExample: /faculty balaji`;
  }

  const q = nameQuery.toLowerCase().trim();
  const results = facultyDB.filter(f =>
    f.name.toLowerCase().includes(q) ||
    f.department.toLowerCase().includes(q) ||
    f.email.toLowerCase().includes(q)
  );

  if (results.length === 0) {
    return `⚠️ No faculty found matching **"${nameQuery}"**\n\nAvailable faculty:\n${facultyDB.map(f => `• ${f.name} (${f.department})`).join('\n')}`;
  }

  let out = `👨‍🏫 **Faculty Search Results for: "${nameQuery}"**\n\n`;
  results.forEach((fac, index) => {
    out += `**${index + 1}. ${fac.name}**\n`;
    out += `📚 Department: ${fac.department}\n`;
    out += `📧 Email: ${fac.email}\n`;
    out += `🏢 Cabin: ${fac.cabin}\n\n`;
  });

  return out;
}


/* Modern UniBot script.js
   - Keeps all Firebase & backend logic unchanged
   - Fixes dark-mode visibility issues
   - Fast but natural typing speed
*/

/* ========== Firebase config (unchanged) ========== */
const firebaseConfig = {
  apiKey: "AIzaSyD8m9mhKc_GgUEu-FP7k2A6Rjg20qKYypo",
  authDomain: "unibot-auth.firebaseapp.com",
  projectId: "unibot-auth",
  storageBucket: "unibot-auth.firebasestorage.app",
  messagingSenderId: "644154688242",
  appId: "1:644154688242:web:7d3c83ca7a9ea88109066b",
  measurementId: "G-07H1YWB7ZL"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

/* ========== UI refs ========== */
const sidebar = document.getElementById('sidebar');
const sidebarCloseBtn = document.getElementById('sidebarCloseBtn');
const sidebarOpenDesktop = document.getElementById('sidebarOpenDesktop');
const themeToggle = document.getElementById('themeToggle');
const sessionsEl = document.getElementById('sessions');
const newChatBtn = document.getElementById('newChatBtn');
const loginBtn = document.getElementById('loginBtn');
const logoutBtn = document.getElementById('logoutBtn');
const userInfoEl = document.getElementById('userInfo');
const chatbox = document.getElementById('chatbox');
const chatArea = document.getElementById('chatArea');
const emptyHint = document.getElementById('emptyHint');
const modeSelect = document.getElementById('mode');
const sendBtn = document.getElementById('sendBtn');
const stopBtn = document.getElementById('stopBtn');
const clearChatBtn = document.getElementById('clearChatBtn');
const promptEl = document.getElementById('prompt');
const sessionMeta = document.getElementById('sessionMeta');

/* ========== State ========== */
let currentUid = null;
let sessions = [];
let currentSessionId = null;
let conversation = [];
let unsubscribeMessages = null;
let sessionsUnsubscribe = null;
let typingTimeoutId = null;
let isTyping = false;
let abortController = null;
let currentBotMessageEl = null;

/* ========== Helpers ========== */
function uidShort(u) { return u ? (u.slice(0, 6) + '...' + u.slice(-4)) : ''; }
function fmtDateLabel(ts) {
  if (!ts) return '';
  const d = ts.toDate ? ts.toDate() : new Date(ts);
  const today = new Date(), yesterday = new Date(Date.now() - 86400000);
  if (d.toDateString() === today.toDateString()) return 'Today';
  if (d.toDateString() === yesterday.toDateString()) return 'Yesterday';
  return d.toLocaleDateString();
}
function escapeHtml(s) {
  if (!s) return '';
  return s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
}

/* ========== Rendering helpers ========== */
function createMsgElement(role, text, msgId = null, timestamp = null) {
  const container = document.createElement('div');
  container.className = 'message-container';
  container.dataset.role = role;
  if (msgId) container.dataset.msgId = msgId;

  const el = document.createElement('div');
  el.className = 'msg ' + (role === 'user' ? 'user' : 'bot') + ' enter';
  el.textContent = text || '';

  // Add message actions
  const actions = document.createElement('div');
  actions.className = 'message-actions';

  if (role === 'user') {
    // Edit button for user messages
    const editBtn = document.createElement('button');
    editBtn.className = 'msg-action-btn';
    editBtn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>';
    editBtn.title = 'Edit message';
    editBtn.onclick = (e) => {
      e.stopPropagation();
      editUserMessage(container, text);
    };
    actions.appendChild(editBtn);

    // Regenerate button for user messages
    const regenBtn = document.createElement('button');
    regenBtn.className = 'msg-action-btn';
    regenBtn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"></path></svg>';
    regenBtn.title = 'Regenerate response';
    regenBtn.onclick = (e) => {
      e.stopPropagation();
      regenerateResponse(container);
    };
    actions.appendChild(regenBtn);
  } else if (text && text.trim()) {
    // Action buttons for bot messages
    const regenBtn = document.createElement('button');
    regenBtn.className = 'msg-action-btn';
    regenBtn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"></path></svg>';
    regenBtn.title = 'Regenerate response';
    regenBtn.onclick = (e) => {
      e.stopPropagation();
      regenerateResponse(container);
    };
    actions.appendChild(regenBtn);
  }

  // Copy button for all messages
  if (text && text.trim()) {
    const copyBtn = document.createElement('button');
    copyBtn.className = 'msg-action-btn';
    copyBtn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>';
    copyBtn.title = 'Copy message';
    copyBtn.onclick = (e) => {
      e.stopPropagation();
      copyToClipboard(text);
      const originalHTML = copyBtn.innerHTML;
      copyBtn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>';
      copyBtn.title = 'Copied!';
      setTimeout(() => {
        copyBtn.innerHTML = originalHTML;
        copyBtn.title = 'Copy message';
      }, 2000);
    };
    actions.appendChild(copyBtn);
  }

  // Timestamp
  if (timestamp) {
    const timeEl = document.createElement('div');
    timeEl.className = 'message-time';
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    timeEl.textContent = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    container.appendChild(timeEl);
  }

  container.appendChild(el);
  if (actions.children.length > 0) {
    container.appendChild(actions);
  }

  return container;
}

function editUserMessage(container, currentText) {
  const msgEl = container.querySelector('.msg');
  if (!msgEl) return;

  const originalText = msgEl.textContent;
  const msgId = container.dataset.msgId;

  const input = document.createElement('textarea');
  input.value = originalText;
  input.className = 'msg-edit-input';
  input.style.cssText = 'width:100%;max-width:75%;padding:8px;border-radius:8px;border:2px solid var(--accent);background:var(--panel);color:var(--text);font-size:14px;resize:vertical;min-height:60px;';

  msgEl.replaceWith(input);
  input.focus();
  input.select();

  const btnContainer = document.createElement('div');
  btnContainer.style.cssText = 'display:flex;gap:8px;margin-top:8px;max-width:75%;';

  const saveBtn = document.createElement('button');
  saveBtn.textContent = 'Save';
  saveBtn.className = 'btn small';

  const cancelBtn = document.createElement('button');
  cancelBtn.textContent = 'Cancel';
  cancelBtn.className = 'btn small btn-ghost';

  btnContainer.appendChild(saveBtn);
  btnContainer.appendChild(cancelBtn);

  container.appendChild(btnContainer);

  const saveEdit = async () => {
    const newText = input.value.trim();
    if (!newText) {
      // If empty, restore original message
      input.replaceWith(msgEl);
      btnContainer.remove();
      return;
    }

    // Show loading state
    saveBtn.disabled = true;
    saveBtn.innerHTML = '<span class="spinner"></span> Saving...';

    try {
      // Update in Firestore
      if (currentUid && msgId) {
        await db.collection('users').doc(currentUid).collection('messages').doc(msgId).update({
          text: newText,
          updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        });
      }

      // Update in conversation array
      const msgIndex = conversation.findIndex(m => m._id === msgId);
      if (msgIndex !== -1) {
        conversation[msgIndex].text = newText;
      }

      // Update UI
      const newMsgEl = document.createElement('div');
      newMsgEl.className = 'msg user';
      newMsgEl.textContent = newText;
      input.replaceWith(newMsgEl);
      btnContainer.remove();

      // If this is a user message, regenerate the bot's response
      if (container.dataset.role === 'user') {
        const allContainers = Array.from(chatbox.querySelectorAll('.message-container'));
        const currentIndex = allContainers.indexOf(container);
        if (currentIndex !== -1) {
          // Find and remove the bot's response
          for (let i = allContainers.length - 1; i > currentIndex; i--) {
            const cont = allContainers[i];
            if (cont.dataset.role === 'bot') {
              // Animate removal
              cont.style.transition = 'opacity 0.2s, transform 0.2s';
              cont.style.opacity = '0';
              cont.style.transform = 'translateX(20px)';

              // Remove after animation
              setTimeout(() => cont.remove(), 200);

              // Remove from conversation array
              const msgIdToRemove = cont.dataset.msgId;
              const convIndex = conversation.findIndex(m => m._id === msgIdToRemove);
              if (convIndex !== -1) {
                conversation.splice(convIndex, 1);
              }
              // Delete from Firestore
              if (currentUid && msgIdToRemove) {
                try {
                  await db.collection('users').doc(currentUid).collection('messages').doc(msgIdToRemove).delete();
                } catch (e) {
                  console.error('Delete failed', e);
                }
              }
            }
          }
          // Small delay before regenerating
          setTimeout(() => {
            promptEl.value = newText;
            sendPrompt();
          }, 250);
        }
      }
    } catch (error) {
      console.error('Save failed:', error);
      // Show error state
      saveBtn.innerHTML = 'Error! Retry';
      setTimeout(() => {
        saveBtn.disabled = false;
        saveBtn.innerHTML = 'Save';
      }, 2000);
    }
  };

  saveBtn.onclick = saveEdit;
  cancelBtn.onclick = (e) => {
    e.stopPropagation();
    // Add fade out animation
    input.style.transition = 'opacity 0.15s';
    input.style.opacity = '0';
    btnContainer.style.transition = 'opacity 0.15s';
    btnContainer.style.opacity = '0';

    // Remove after animation
    setTimeout(() => {
      input.replaceWith(msgEl);
      btnContainer.remove();
    }, 150);
  };

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      saveEdit();
    } else if (e.key === 'Escape') {
      e.stopPropagation();
      // Add fade out animation
      input.style.transition = 'opacity 0.15s';
      input.style.opacity = '0';
      btnContainer.style.transition = 'opacity 0.15s';
      btnContainer.style.opacity = '0';

      // Remove after animation
      setTimeout(() => {
        input.replaceWith(msgEl);
        btnContainer.remove();
      }, 150);
    }
  });
}

async function regenerateResponse(container) {
  // Show loading state
  const regenBtn = container.querySelector('.msg-action-btn[title="Regenerate response"]');
  if (regenBtn) {
    const originalHTML = regenBtn.innerHTML;
    regenBtn.innerHTML = '<span class="spinner"></span>';
    regenBtn.style.opacity = '0.7';
    regenBtn.style.pointerEvents = 'none';

    try {
      // Find the user message before this bot response
      const msgId = container.dataset.msgId;
      const allContainers = Array.from(chatbox.querySelectorAll('.message-container'));
      const currentIndex = allContainers.indexOf(container);

      if (currentIndex === -1 || currentIndex === 0) return;

      // Find previous user message
      let userIndex = currentIndex - 1;
      while (userIndex >= 0 && allContainers[userIndex].dataset.role !== 'user') {
        userIndex--;
      }
      if (userIndex === -1) return;

      const userContainer = allContainers[userIndex];
      const userMsgEl = userContainer.querySelector('.msg');
      if (!userMsgEl) return;

      const userPrompt = userMsgEl.textContent;
      const userMsgId = userContainer.dataset.msgId;

      // Remove current bot message and any messages after it
      const removeIndex = currentIndex;
      const messagesToDelete = [];

      for (let i = allContainers.length - 1; i >= removeIndex; i--) {
        const cont = allContainers[i];
        if (cont.dataset.msgId) {
          messagesToDelete.push({
            id: cont.dataset.msgId,
            element: cont
          });
        }
      }

      // Animate removal
      for (const msg of messagesToDelete) {
        msg.element.style.transition = 'opacity 0.2s, transform 0.2s';
        msg.element.style.opacity = '0';
        msg.element.style.transform = 'translateX(20px)';
      }

      // Wait for animation to complete
      await new Promise(resolve => setTimeout(resolve, 200));

      // Remove from DOM and Firestore
      for (const msg of messagesToDelete) {
        // Remove from conversation array
        const convIndex = conversation.findIndex(m => m._id === msg.id);
        if (convIndex !== -1) {
          conversation.splice(convIndex, 1);
        }
        // Delete from Firestore
        if (currentUid) {
          try {
            await db.collection('users').doc(currentUid).collection('messages').doc(msg.id).delete();
          } catch (e) {
            console.error('Delete failed', e);
          }
        }
        msg.element.remove();
      }

      // Resend the prompt
      promptEl.value = userPrompt;
      sendPrompt();
    } catch (error) {
      console.error('Regeneration failed:', error);
      // Show error state briefly
      regenBtn.innerHTML = '❌';
      setTimeout(() => {
        regenBtn.innerHTML = originalHTML;
        regenBtn.style.opacity = '';
        regenBtn.style.pointerEvents = '';
      }, 1000);
    } finally {
      if (regenBtn.innerHTML.includes('spinner')) {
        regenBtn.innerHTML = originalHTML;
        regenBtn.style.opacity = '';
        regenBtn.style.pointerEvents = '';
      }
    }
  }

  const msgIndex = conversation.findIndex(m => m._id === msgId);
  if (msgIndex === -1 || msgIndex === 0) return;

  // Find the previous user message
  let userMsgIndex = msgIndex - 1;
  while (userMsgIndex >= 0 && conversation[userMsgIndex].role !== 'user') {
    userMsgIndex--;
  }

  if (userMsgIndex === -1) return;

  const userPrompt = conversation[userMsgIndex].text;

  // Remove the current bot message and any after it
  const removeFromIndex = msgIndex;
  for (let i = conversation.length - 1; i >= removeFromIndex; i--) {
    const msg = conversation[i];
    if (msg._id && currentUid) {
      try {
        await db.collection('users').doc(currentUid).collection('messages').doc(msg._id).delete();
      } catch (e) {
        console.error('Delete failed', e);
      }
    }
    conversation.splice(i, 1);
  }

  // Remove from DOM
  const allContainers = Array.from(chatbox.querySelectorAll('.message-container'));
  const currentIndex = allContainers.indexOf(container);
  if (currentIndex !== -1) {
    for (let i = allContainers.length - 1; i >= currentIndex; i--) {
      allContainers[i].remove();
    }
  }

  // Resend the prompt
  promptEl.value = userPrompt;
  sendPrompt();
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).catch(err => {
    console.error('Failed to copy:', err);
    // Fallback
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  });
}

function renderConversation(conv) {
  chatbox.innerHTML = '';
  if (!conv || conv.length === 0) {
    emptyHint.style.display = 'block';
    clearChatBtn.style.display = 'none';
    return;
  }
  emptyHint.style.display = 'none';
  clearChatBtn.style.display = 'inline-block';
  let lastLabel = '';
  conv.forEach(msg => {
    const ts = msg.createdAt || null;
    const dateLabel = ts ? fmtDateLabel(ts) : '';
    if (dateLabel && dateLabel !== lastLabel) {
      const dEl = document.createElement('div');
      dEl.className = 'dateSeparator';
      dEl.textContent = dateLabel;
      chatbox.appendChild(dEl);
      lastLabel = dateLabel;
    }
    const mEl = createMsgElement(msg.role, msg.text, msg._id, msg.createdAt);
    chatbox.appendChild(mEl);
  });
  chatbox.scrollTop = chatbox.scrollHeight;
}

/* append typing indicator */
function appendTypingIndicator() {
  const el = document.createElement('div');
  el.className = 'msg bot';
  el.id = 'typingIndicator';
  const bubble = document.createElement('div');
  bubble.className = 'typingBubble';
  const dots = document.createElement('div');
  dots.className = 'typingDots';
  dots.innerHTML = '<div class="dot"></div><div class="dot"></div><div class="dot"></div>';
  bubble.appendChild(dots);
  el.appendChild(bubble);
  chatbox.appendChild(el);
  chatbox.scrollTop = chatbox.scrollHeight;
  return el;
}

/* replace typing indicator with real bot node */
function replaceTypingWithBot() {
  const t = document.getElementById('typingIndicator');
  if (!t) return null;
  const botContainer = createMsgElement('bot', '');
  t.replaceWith(botContainer);
  chatbox.scrollTop = chatbox.scrollHeight;
  return botContainer;
}

/* ========== Sessions: listening & rendering ========== */
function listenForSessions(uid) {
  if (sessionsUnsubscribe) { sessionsUnsubscribe(); sessionsUnsubscribe = null; }
  const col = db.collection('users').doc(uid).collection('messages').orderBy('createdAt', 'desc');
  sessionsUnsubscribe = col.onSnapshot(snap => {
    const map = new Map();
    snap.forEach(doc => {
      const d = doc.data();
      const sid = d.sessionId || 'default';
      if (!map.has(sid)) {
        map.set(sid, { sessionId: sid, lastText: d.text || '', lastAt: d.createdAt || null, count: 1 });
      } else {
        const it = map.get(sid);
        it.count = (it.count || 0) + 1;
        if (!it.lastAt || (d.createdAt && d.createdAt.seconds > it.lastAt.seconds)) {
          it.lastAt = d.createdAt;
          it.lastText = d.text || it.lastText;
        }
      }
    });
    sessions = Array.from(map.values()).sort((a, b) => {
      const ta = a.lastAt ? a.lastAt.seconds : 0;
      const tb = b.lastAt ? b.lastAt.seconds : 0;
      return tb - ta;
    });
    renderSessions();
    if (!currentSessionId && sessions.length) selectSession(sessions[0].sessionId);
  }, err => console.error('sessions listen err', err));
}

function renderSessions() {
  sessionsEl.innerHTML = '';
  if (!sessions || sessions.length === 0) {
    const p = document.createElement('div');
    p.className = 'small';
    p.style.color = 'var(--muted)';
    p.style.padding = '10px';
    p.textContent = 'No chats yet — click New Chat to start';
    sessionsEl.appendChild(p);
    return;
  }
  sessions.forEach(s => {
    const item = document.createElement('div');
    item.className = 'sessionItem' + (s.sessionId === currentSessionId ? ' active' : '');

    const left = document.createElement('div');
    left.style.flex = '1';
    left.style.cursor = 'pointer';
    left.innerHTML = `<div class="sessionTitle">${s.sessionId === 'default' ? 'General' : s.sessionId}</div>
                      <div class="sessionPreview">${escapeHtml(s.lastText || '').slice(0, 80) || 'No messages yet'}</div>`;
    left.onclick = () => selectSession(s.sessionId);

    const right = document.createElement('div');
    right.style.minWidth = '100px';
    right.style.textAlign = 'right';
    right.style.display = 'flex';
    right.style.flexDirection = 'column';
    right.style.gap = '4px';
    right.innerHTML = `<div class="sessionPreviewSmall">${s.lastAt ? fmtDateLabel(s.lastAt) : ''}</div><div style="font-size:12px;color:var(--muted)">${s.count || 0} msgs</div>`;

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'session-delete-btn';
    deleteBtn.innerHTML = '🗑';
    deleteBtn.title = 'Delete chat';
    deleteBtn.onclick = (e) => {
      e.stopPropagation();
      deleteSession(s.sessionId);
    };
    right.appendChild(deleteBtn);

    item.appendChild(left);
    item.appendChild(right);
    sessionsEl.appendChild(item);
  });
}

async function deleteSession(sessionId) {
  if (!currentUid || !sessionId) return;

  if (!confirm(`Are you sure you want to delete this chat? This action cannot be undone.`)) {
    return;
  }

  try {
    // Get all messages in this session
    const messagesRef = db.collection('users').doc(currentUid).collection('messages')
      .where('sessionId', '==', sessionId);
    const snapshot = await messagesRef.get();

    // Delete all messages
    const batch = db.batch();
    snapshot.forEach(doc => {
      batch.delete(doc.ref);
    });
    await batch.commit();

    // If this was the current session, create a new one
    if (sessionId === currentSessionId) {
      newSession();
    }
  } catch (e) {
    console.error('Delete session failed', e);
    alert('Failed to delete chat. Please try again.');
  }
}

/* ========== Session management ========== */
function newSession() {
  stopGeneration();
  const sid = 's_' + Date.now();
  currentSessionId = sid;
  conversation = [];
  renderConversation(conversation);
  sessionMeta.textContent = 'New chat';
  promptEl.focus();
}

async function clearCurrentChat() {
  if (!currentUid || !currentSessionId) return;

  if (!confirm('Are you sure you want to clear this chat? All messages will be deleted.')) {
    return;
  }

  stopGeneration();

  try {
    // Delete all messages in current session
    const messagesRef = db.collection('users').doc(currentUid).collection('messages')
      .where('sessionId', '==', currentSessionId);
    const snapshot = await messagesRef.get();

    const batch = db.batch();
    snapshot.forEach(doc => {
      batch.delete(doc.ref);
    });
    await batch.commit();

    conversation = [];
    renderConversation(conversation);
  } catch (e) {
    console.error('Clear chat failed', e);
    alert('Failed to clear chat. Please try again.');
  }
}

async function selectSession(sid) {
  if (!currentUid) return;
  if (unsubscribeMessages) { unsubscribeMessages(); unsubscribeMessages = null; }
  currentSessionId = sid;
  sessionMeta.textContent = `Session: ${sid === 'default' ? 'General' : sid}`;
  const q = db.collection('users').doc(currentUid).collection('messages')
    .where('sessionId', '==', sid).orderBy('createdAt', 'asc');
  unsubscribeMessages = q.onSnapshot(snap => {
    const conv = [];
    snap.forEach(doc => {
      const d = doc.data();
      conv.push({ role: d.role || 'bot', text: d.text || '', createdAt: d.createdAt || null, _id: doc.id });
    });
    conversation = conv;
    renderConversation(conversation);
  }, async (err) => {
    console.warn('session query err, falling back', err);
    const allRef = db.collection('users').doc(currentUid).collection('messages').orderBy('createdAt', 'asc');
    const allSnap = await allRef.get();
    const conv = [];
    allSnap.forEach(doc => {
      const d = doc.data();
      const sidDoc = d.sessionId || 'default';
      if (sidDoc === sid) conv.push({ role: d.role || 'bot', text: d.text || '', createdAt: d.createdAt || null, _id: doc.id });
    });
    conversation = conv;
    renderConversation(conversation);
  });
}

/* ========== Save to Firestore ========== */
async function saveMessage(role, text) {
  if (!currentUid || !currentSessionId) return;
  try {
    await db.collection('users').doc(currentUid).collection('messages').add({
      role, text, sessionId: currentSessionId, createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
  } catch (e) { console.error('save msg err', e); }
}

/* ========== Auth & UI wiring ========== */
loginBtn.addEventListener('click', async () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  try {
    const result = await auth.signInWithPopup(provider);
    const user = result.user;
    if (!user.email.endsWith('@nie.ac.in')) {
      await auth.signOut();
      alert('⚠️ Login restricted to @nie.ac.in emails only.');
      return;
    }
  } catch (e) {
    console.error('login err', e);
    alert('Login failed. Check console for details.');
  }
});

logoutBtn.addEventListener('click', async () => {
  try { await auth.signOut(); } catch (e) { console.error('logout err', e); }
});

auth.onAuthStateChanged(user => {
  if (user) {
    currentUid = user.uid;
    userInfoEl.textContent = `${user.displayName || user.email || 'User'} • ${uidShort(currentUid)}`;
    loginBtn.style.display = 'none';
    logoutBtn.style.display = 'inline-block';
    emptyHint.style.display = 'none';
    listenForSessions(currentUid);
    currentSessionId = 'default';
    selectSession(currentSessionId);
  } else {
    currentUid = null;
    userInfoEl.textContent = 'Not signed in';
    loginBtn.style.display = 'inline-block';
    logoutBtn.style.display = 'none';
    if (sessionsUnsubscribe) { sessionsUnsubscribe(); sessionsUnsubscribe = null; }
    if (unsubscribeMessages) { unsubscribeMessages(); unsubscribeMessages = null; }
    sessions = []; currentSessionId = null; conversation = []; renderConversation([]);
    sessionsEl.innerHTML = '';
    const p = document.createElement('div');
    p.className = 'small'; p.style.color = 'var(--muted)'; p.style.padding = '10px';
    p.textContent = 'Sign in to save chats';
    sessionsEl.appendChild(p);
    sessionMeta.textContent = 'Sign in to load chats';
  }
});

/* ========== UI interactions ========== */
newChatBtn.addEventListener('click', () => newSession());

clearChatBtn.addEventListener('click', () => clearCurrentChat());

stopBtn.addEventListener('click', () => stopGeneration());

sidebarCloseBtn.addEventListener('click', () => {
  sidebar.classList.add('closed');
  promptEl.focus();
});
sidebarOpenDesktop.addEventListener('click', () => {
  sidebar.classList.remove('closed');
  sidebar.scrollTop = 0;
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
  // Ctrl+K or Cmd+K for new chat
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    newSession();
  }
  // Escape to stop generation
  if (e.key === 'Escape' && isTyping) {
    stopGeneration();
  }
  // Escape to close sidebar
  if (e.key === 'Escape' && !isTyping) {
    sidebar.classList.add('closed');
  }
});

/* Theme toggle persisted */
function applySavedTheme() {
  const t = localStorage.getItem('unibot_theme');
  if (t === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
  else document.documentElement.removeAttribute('data-theme');
  updateThemeIcon();
}
function updateThemeIcon() {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  themeToggle.textContent = isDark ? '☀️' : '🌙';
}
themeToggle.addEventListener('click', () => {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  if (isDark) {
    document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('unibot_theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('unibot_theme', 'dark');
  }
  updateThemeIcon();
});
applySavedTheme();

/* Enter to send (Shift+Enter for newline) */
promptEl.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendPrompt();
  }
});
sendBtn.addEventListener('click', sendPrompt);

/* Keep scroll at bottom */
window.addEventListener('resize', () => { chatbox.scrollTop = chatbox.scrollHeight; });
window.addEventListener('keydown', (e) => { if (e.key === 'Escape') { sidebar.classList.add('closed'); } });

/* ========== Stop generation ========== */
function stopGeneration() {
  isTyping = false;
  if (typingTimeoutId) {
    clearTimeout(typingTimeoutId);
    typingTimeoutId = null;
  }
  if (abortController) {
    abortController.abort();
    abortController = null;
  }
  stopBtn.style.display = 'none';
  sendBtn.style.display = 'inline-block';

  // Remove typing indicator
  const typingEl = document.getElementById('typingIndicator');
  if (typingEl) {
    typingEl.remove();
  }

  // If there's a current bot message being typed, finalize it
  if (currentBotMessageEl) {
    const container = currentBotMessageEl.closest('.message-container');
    if (container) {
      const msgEl = container.querySelector('.msg');
      if (msgEl && msgEl.textContent.trim()) {
        // Save the partial message
        const partialText = msgEl.textContent;
        const botMsgObj = conversation[conversation.length - 1];
        if (botMsgObj && botMsgObj.role === 'bot') {
          botMsgObj.text = partialText;
          if (currentUid) saveMessage('bot', partialText);
        }
      }
    }
    currentBotMessageEl = null;
  }
}

/* ========== Typing animation (fast but natural) ========== */
async function sendPrompt() {
  const prompt = promptEl.value.trim();
  const mode = modeSelect.value;
  if (!prompt) return;

  // Stop any ongoing generation
  stopGeneration();

  // local user message (DOM)
  let userMsgId = null;
  if (currentUid) {
    try {
      const docRef = await db.collection('users').doc(currentUid).collection('messages').add({
        role: 'user', text: prompt, sessionId: currentSessionId || 'default', createdAt: firebase.firestore.FieldValue.serverTimestamp()
      });
      userMsgId = docRef.id;
    } catch (e) { console.error('save user msg failed', e); }
  }

  conversation.push({ role: 'user', text: prompt, createdAt: null, _id: userMsgId });
  const userEl = createMsgElement('user', prompt, userMsgId);
  chatbox.appendChild(userEl);
  chatbox.scrollTop = chatbox.scrollHeight;

  // ensure session id
  if (currentUid && !currentSessionId) currentSessionId = 'default';

  promptEl.value = '';
  promptEl.focus();

  // show typing indicator and stop button
  const typingEl = appendTypingIndicator();
  stopBtn.style.display = 'inline-block';
  sendBtn.style.display = 'none';
  isTyping = true;

  /* ======================================================
     FEATURE: /timetable commands (DIRECT RESPONSE)
     ====================================================== */
  const promptLower = prompt.toLowerCase().trim();

  if (promptLower === "/timetable" || promptLower === "/timetable today") {
    // remove typing indicator
    if (typingEl && typingEl.parentNode) {
      typingEl.remove();
    }

    const botEl = createMsgElement("bot", "");
    chatbox.appendChild(botEl);

    const reply = getTimetableForToday();
    botEl.textContent = reply;

    // save to Firestore
    if (currentUid) saveMessage("bot", reply);

    chatbox.scrollTop = chatbox.scrollHeight;
    return; // stop normal Gemini flow
  }

  // /timetable <branch> [class] [day]
  if (promptLower.startsWith("/timetable ")) {
    const parts = prompt.split(" ").slice(1);

    // remove typing indicator
    if (typingEl && typingEl.parentNode) {
      typingEl.remove();
    }

    const botEl = createMsgElement("bot", "");
    chatbox.appendChild(botEl);

    let reply = "";

    if (parts.length === 1) {
      // /timetable cse
      const branch = parts[0];
      reply = getTimetableForBranch(branch);
    } else if (parts.length === 2) {
      // /timetable cse 1 or /timetable cse monday
      const branch = parts[0];
      const second = parts[1];

      if (['1', '2'].includes(second)) {
        // It's a class number
        reply = getTimetableForToday(branch, parseInt(second));
      } else {
        // It's a day
        reply = getTimetableForBranch(branch, second);
      }
    } else if (parts.length === 3) {
      // /timetable cse 1 monday
      const branch = parts[0];
      const classNum = parts[1];
      const day = parts[2];

      const branchData = timetableDB[branch.toLowerCase()];
      if (!branchData) {
        reply = `⚠️ Branch "${branch}" not found. Available branches: CSE, ECE, ISE`;
      } else {
        const classData = branchData[`class${classNum}`];
        if (!classData) {
          reply = `⚠️ Class "${classNum}" not found. Available classes: 1, 2`;
        } else {
          const dayList = classData[day.toLowerCase()] || [];
          if (dayList.length === 0) {
            reply = `📅 **${branch.toUpperCase()} - Class ${classNum} - ${day.toUpperCase()}**\n\nNo classes scheduled.`;
          } else {
            reply = `📅 **${branch.toUpperCase()} - Class ${classNum} - ${day.toUpperCase()}**\n\n`;
            dayList.forEach(item => {
              reply += `⏰ ${item.time}\n📚 ${item.subject}\n👨‍🏫 ${item.faculty}\n🏢 ${item.room}\n\n`;
            });
          }
        }
      }
    } else {
      reply = "Usage:\n/timetable - Today's summary\n/timetable <branch> - Branch timetable\n/timetable <branch> <class> - Class timetable\n/timetable <branch> <day> - Branch timetable for day\n/timetable <branch> <class> <day> - Specific class timetable";
    }

    botEl.textContent = reply;

    // save to Firestore
    if (currentUid) saveMessage("bot", reply);

    chatbox.scrollTop = chatbox.scrollHeight;
    return; // stop normal Gemini flow
  }

  /* ======================================================
     FEATURE: /faculty <name>
     ====================================================== */
  if (promptLower.startsWith("/faculty")) {
    const parts = prompt.split(" ");

    // remove typing indicator
    if (typingEl && typingEl.parentNode) {
      typingEl.remove();
    }

    if (parts.length < 2) {
      const reply = "Usage: /faculty <name>\nExample: /faculty balaji";
      const botEl = createMsgElement("bot", reply);
      chatbox.appendChild(botEl);
      if (currentUid) saveMessage("bot", reply);
      chatbox.scrollTop = chatbox.scrollHeight;
      return;
    }

    const searchName = parts.slice(1).join(" ");
    const result = searchFaculty(searchName);

    const botEl = createMsgElement("bot", result);
    chatbox.appendChild(botEl);
    chatbox.scrollTop = chatbox.scrollHeight;

    if (currentUid) saveMessage("bot", result);

    return; // stop Gemini flow
  }

  /* ======================================================
     FEATURE: /help - Show available commands
     ====================================================== */
  if (promptLower === "/help" || promptLower === "help") {
    // remove typing indicator
    if (typingEl && typingEl.parentNode) {
      typingEl.remove();
    }

    const botContainer = createMsgElement("bot", "");
    chatbox.appendChild(botContainer);

    const helpBotEl = botContainer.querySelector('.msg');
    if (!helpBotEl) {
      // Fallback if structure is different
      const reply = `🤖 UniBot Commands & Features\n\n📅 Timetable Commands:\n• /timetable - Today's timetable summary\n• /timetable <branch> - Branch timetable (CSE, ECE, ISE)\n• /timetable <branch> <class> - Specific class timetable (1 or 2)\n• /timetable <branch> <day> - Branch timetable for specific day\n• /timetable <branch> <class> <day> - Complete timetable details\n\n👨‍🏫 Faculty Commands:\n• /faculty <name> - Search for faculty information\n\n💡 Examples:\n• /timetable cse\n• /timetable cse 1\n• /timetable cse 1 monday\n• /faculty balaji\n\n💬 You can also ask me anything else! I'm here to help with academic questions, study tips, and more.\n\n⌨️ Keyboard Shortcuts: Ctrl/Cmd+K (New Chat), Escape (Stop/Cancel), Enter (Send), Shift+Enter (New Line)`;
      const fallbackContainer = createMsgElement("bot", reply);
      chatbox.appendChild(fallbackContainer);
      if (currentUid) saveMessage("bot", reply);
      chatbox.scrollTop = chatbox.scrollHeight;
      return;
    }

    // Create formatted help message with HTML-like structure
    const helpContent = document.createElement('div');
    helpContent.className = 'help-content';
    helpContent.innerHTML = `
      <div class="help-header">
        <span class="help-icon">🤖</span>
        <h2 class="help-title">UniBot Commands & Features</h2>
      </div>
      
      <div class="help-section">
        <div class="help-section-title">📅 Timetable Commands</div>
        <div class="help-command">
          <code>/timetable</code>
          <span class="help-desc">Get today's timetable summary for all branches</span>
        </div>
        <div class="help-command">
          <code>/timetable &lt;branch&gt;</code>
          <span class="help-desc">Get timetable for a specific branch (CSE, ECE, ISE)</span>
        </div>
        <div class="help-command">
          <code>/timetable &lt;branch&gt; &lt;class&gt;</code>
          <span class="help-desc">Get timetable for specific class (1 or 2)</span>
        </div>
        <div class="help-command">
          <code>/timetable &lt;branch&gt; &lt;day&gt;</code>
          <span class="help-desc">Get branch timetable for a specific day</span>
        </div>
        <div class="help-command">
          <code>/timetable &lt;branch&gt; &lt;class&gt; &lt;day&gt;</code>
          <span class="help-desc">Get complete timetable with all details</span>
        </div>
      </div>
      
      <div class="help-section">
        <div class="help-section-title">👨‍🏫 Faculty Commands</div>
        <div class="help-command">
          <code>/faculty &lt;name&gt;</code>
          <span class="help-desc">Search for faculty information by name</span>
        </div>
      </div>
      
      <div class="help-section">
        <div class="help-section-title">💡 Quick Examples</div>
        <div class="help-example">
          <code>/timetable cse</code> - View CSE timetable
        </div>
        <div class="help-example">
          <code>/timetable cse 1</code> - View CSE Class 1 timetable
        </div>
        <div class="help-example">
          <code>/timetable cse 1 monday</code> - View CSE Class 1 Monday schedule
        </div>
        <div class="help-example">
          <code>/faculty balaji</code> - Find faculty member named Balaji
        </div>
      </div>
      
      <div class="help-footer">
        <div class="help-tip">💬 You can also ask me anything else! I'm here to help with academic questions, study tips, and more.</div>
        <div class="help-shortcuts">
          <strong>Keyboard Shortcuts:</strong>
          <span>Ctrl/Cmd+K</span> - New Chat
          <span>Escape</span> - Stop/Cancel
          <span>Enter</span> - Send
          <span>Shift+Enter</span> - New Line
        </div>
      </div>
    `;

    helpBotEl.appendChild(helpContent);

    const reply = `🤖 UniBot Commands & Features\n\n📅 Timetable Commands:\n• /timetable - Today's timetable summary\n• /timetable <branch> - Branch timetable (CSE, ECE, ISE)\n• /timetable <branch> <class> - Specific class timetable (1 or 2)\n• /timetable <branch> <day> - Branch timetable for specific day\n• /timetable <branch> <class> <day> - Complete timetable details\n\n👨‍🏫 Faculty Commands:\n• /faculty <name> - Search for faculty information\n\n💡 Examples:\n• /timetable cse\n• /timetable cse 1\n• /timetable cse 1 monday\n• /faculty balaji\n\n💬 You can also ask me anything else! I'm here to help with academic questions, study tips, and more.\n\n⌨️ Keyboard Shortcuts: Ctrl/Cmd+K (New Chat), Escape (Stop/Cancel), Enter (Send), Shift+Enter (New Line)`;

    if (currentUid) saveMessage("bot", reply);

    chatbox.scrollTop = chatbox.scrollHeight;
    return; // stop normal Gemini flow
  }


  // call backend with abort controller
  abortController = new AbortController();
  let res;
  try {
    res = await fetch('/api/gemini', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt, mode, conversation }),
      signal: abortController.signal
    });
  } catch (e) {
    if (e.name === 'AbortError') {
      // Request was aborted
      return;
    }
    if (typingEl) typingEl.textContent = 'Network error.';
    console.error('network err', e);
    stopGeneration();
    return;
  }

  let data = {};
  try { data = await res.json(); } catch (e) {
    data = {};
    stopGeneration();
    return;
  }

  // Check if still typing (not stopped)
  if (!isTyping) return;

  // replace typing indicator
  const botContainer = replaceTypingWithBot() || (() => {
    const container = createMsgElement('bot', '');
    chatbox.appendChild(container);
    return container;
  })();

  const botEl = botContainer.querySelector('.msg');
  currentBotMessageEl = botEl;

  // reply text (support common keys)
  const reply = (data && (data.text || data.response || data.answer)) ? (data.text || data.response || data.answer) : (data.error || 'Error: No response from server');

  // add to local conversation array
  let botMsgId = null;
  const botMsgObj = { role: 'bot', text: '', createdAt: null, _id: botMsgId };
  conversation.push(botMsgObj);

  // fast but natural delays:
  // base: 7..17 ms, punctuation adds small pause
  let idx = 0;
  const total = reply.length;
  function nextDelay(ch) {
    let base = 7 + Math.random() * 10; // 7..17 ms
    if (ch === ' ') base = base * 0.55;
    if (ch === ',') base += 8;
    if (ch === '\n') base += 15;
    if (ch === '.' || ch === '!' || ch === '?') base += 35 + Math.random() * 15;
    return Math.round(base);
  }

  function tick() {
    if (!isTyping || idx >= total) {
      if (idx >= total && isTyping) {
        // Save complete message
        if (currentUid) {
          db.collection('users').doc(currentUid).collection('messages').add({
            role: 'bot', text: botMsgObj.text, sessionId: currentSessionId, createdAt: firebase.firestore.FieldValue.serverTimestamp()
          }).then(docRef => {
            botMsgObj._id = docRef.id;
            if (botContainer) botContainer.dataset.msgId = docRef.id;
          }).catch(e => console.error('save bot msg failed', e));
        }
        stopGeneration();
      }
      return;
    }
    const ch = reply[idx++];
    botMsgObj.text += ch;
    // update only the botEl textContent
    botEl.textContent = botMsgObj.text;
    chatbox.scrollTop = chatbox.scrollHeight;
    const delay = nextDelay(ch);
    typingTimeoutId = setTimeout(tick, delay);
  }

  // small initial delay so replacement animation shows
  typingTimeoutId = setTimeout(() => {
    if (!isTyping) return;
    if (botEl && !botEl.classList.contains('enter')) botEl.classList.add('enter');
    tick();
  }, 60);
}

/* debug state */
window.__unibot = {
  getState: () => ({ currentUid, currentSessionId, sessions, conversation })
};

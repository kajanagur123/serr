const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory storage for inquiries (in production, use a database)
let inquiries = [
  {
    id: 1,
    studentName: 'Rajesh Kumar',
    contactName: 'John Doe',
    email: 'rajesh@example.com',
    phone: '+91 98765 43210',
    projectTitle: 'E-commerce Website',
    projectType: 'software',
    details: 'Need a full-stack e-commerce solution with payment integration',
    budget: '25k-50k',
    date: new Date().toISOString(),
    status: 'new'
  },
  {
    id: 2,
    studentName: 'Priya Sharma',
    contactName: 'Jane Smith',
    email: 'priya@example.com',
    phone: '+91 87654 32109',
    projectTitle: 'IoT Home Automation',
    projectType: 'hardware',
    details: 'Smart home system with mobile app control',
    budget: '50k-100k',
    date: new Date().toISOString(),
    status: 'contacted'
  }
];

// Email transporter setup
const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

// Submit inquiry
app.post('/api/inquiries', async (req, res) => {
  try {
    const inquiry = {
      id: inquiries.length + 1,
      ...req.body,
      date: new Date().toISOString(),
      status: 'new'
    };

    inquiries.push(inquiry);

    // Send email notification
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: `New Project Inquiry: ${inquiry.projectTitle}`,
      html: `
        <h2>New Project Inquiry Received</h2>
        <p><strong>Name:</strong> ${inquiry.studentName}</p>
        <p><strong>Contact Name:</strong> ${inquiry.contactName || 'N/A'}</p>
        <p><strong>Email:</strong> ${inquiry.email}</p>
        <p><strong>Phone:</strong> ${inquiry.phone}</p>
        <p><strong>Project Title:</strong> ${inquiry.projectTitle}</p>
        <p><strong>Project Type:</strong> ${inquiry.projectType}</p>
        <p><strong>Budget:</strong> ${inquiry.budget || 'Not specified'}</p>
        <p><strong>Details:</strong></p>
        <p>${inquiry.details}</p>
        <p><strong>Submitted:</strong> ${new Date(inquiry.date).toLocaleString()}</p>
      `
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({ 
      success: true, 
      message: 'Inquiry submitted successfully',
      id: inquiry.id 
    });
  } catch (error) {
    console.error('Error submitting inquiry:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to submit inquiry' 
    });
  }
});

// Admin login
app.post('/api/admin/login', (req, res) => {
  const { username, password } = req.body;
  
  if (username === 'admin' && password === 'sk2024') {
    res.json({ 
      success: true, 
      token: 'admin-token-' + Date.now() 
    });
  } else {
    res.status(401).json({ 
      success: false, 
      message: 'Invalid credentials' 
    });
  }
});

// Get all inquiries (admin only)
app.get('/api/admin/inquiries', (req, res) => {
  const authHeader = req.headers.authorization;
  
  if (!authHeader || !authHeader.startsWith('Bearer admin-token-')) {
    return res.status(401).json({ 
      success: false, 
      message: 'Unauthorized' 
    });
  }

  res.json({ 
    success: true, 
    inquiries: inquiries.reverse() // Show newest first
  });
});

// Update inquiry status
app.patch('/api/admin/inquiries/:id', (req, res) => {
  const authHeader = req.headers.authorization;
  
  if (!authHeader || !authHeader.startsWith('Bearer admin-token-')) {
    return res.status(401).json({ 
      success: false, 
      message: 'Unauthorized' 
    });
  }

  const { id } = req.params;
  const { status } = req.body;
  
  const inquiry = inquiries.find(i => i.id === parseInt(id));
  
  if (!inquiry) {
    return res.status(404).json({ 
      success: false, 
      message: 'Inquiry not found' 
    });
  }

  inquiry.status = status;
  
  res.json({ 
    success: true, 
    inquiry 
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
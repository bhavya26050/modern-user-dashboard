// Contact data store using localStorage
// This acts as a simple backend for the contact dashboard

export interface Contact {
  id: string;
  name: string;
  email: string;
  company: string;
  message: string;
  source: 'website' | 'referral' | 'social' | 'direct';
  status: 'new' | 'read' | 'replied' | 'archived';
  createdAt: string;
  repliedAt?: string;
}

const STORAGE_KEY = 'frameandcode_contacts';

// Seed data so dashboard isn't empty on first load
const seedContacts: Contact[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    email: 'sarah@techcorp.com',
    company: 'TechCorp',
    message: 'Looking for a complete website redesign with modern animations. Budget around $15k.',
    source: 'website',
    status: 'replied',
    createdAt: new Date(Date.now() - 86400000 * 28).toISOString(),
    repliedAt: new Date(Date.now() - 86400000 * 27).toISOString(),
  },
  {
    id: '2',
    name: 'David Kim',
    email: 'david@startupflow.io',
    company: 'StartupFlow',
    message: 'Need a landing page for our SaaS launch next month. Fast turnaround needed.',
    source: 'referral',
    status: 'replied',
    createdAt: new Date(Date.now() - 86400000 * 25).toISOString(),
    repliedAt: new Date(Date.now() - 86400000 * 24).toISOString(),
  },
  {
    id: '3',
    name: 'Emily Carter',
    email: 'emily@designagency.co',
    company: 'Design Agency Co.',
    message: 'Partnership opportunity - we have clients who need dev work. Let\'s connect.',
    source: 'social',
    status: 'read',
    createdAt: new Date(Date.now() - 86400000 * 20).toISOString(),
  },
  {
    id: '4',
    name: 'Michael Torres',
    email: 'mike@ecobrands.com',
    company: 'EcoBrands',
    message: 'Interested in an e-commerce rebuild. Current site is slow and outdated.',
    source: 'website',
    status: 'replied',
    createdAt: new Date(Date.now() - 86400000 * 18).toISOString(),
    repliedAt: new Date(Date.now() - 86400000 * 17).toISOString(),
  },
  {
    id: '5',
    name: 'Lisa Wang',
    email: 'lisa@financeapp.io',
    company: 'FinanceApp',
    message: 'We need a dashboard UI for our financial analytics platform.',
    source: 'direct',
    status: 'replied',
    createdAt: new Date(Date.now() - 86400000 * 14).toISOString(),
    repliedAt: new Date(Date.now() - 86400000 * 13).toISOString(),
  },
  {
    id: '6',
    name: 'James Miller',
    email: 'james@creativestudio.com',
    company: 'Creative Studio',
    message: 'Portfolio website needed for our agency. Want something very visual and interactive.',
    source: 'social',
    status: 'read',
    createdAt: new Date(Date.now() - 86400000 * 10).toISOString(),
  },
  {
    id: '7',
    name: 'Aisha Patel',
    email: 'aisha@healthtech.com',
    company: 'HealthTech Solutions',
    message: 'Healthcare platform needs a patient-facing portal. HIPAA compliance required.',
    source: 'website',
    status: 'new',
    createdAt: new Date(Date.now() - 86400000 * 7).toISOString(),
  },
  {
    id: '8',
    name: 'Ryan O\'Brien',
    email: 'ryan@sportswear.co',
    company: 'Sportswear Co.',
    message: 'New brand launch coming up. Need full branding + website. Timeline: 6 weeks.',
    source: 'referral',
    status: 'replied',
    createdAt: new Date(Date.now() - 86400000 * 5).toISOString(),
    repliedAt: new Date(Date.now() - 86400000 * 4).toISOString(),
  },
  {
    id: '9',
    name: 'Priya Sharma',
    email: 'priya@edutechlearning.com',
    company: 'EduTech Learning',
    message: 'Online learning platform redesign. Current platform has 50k users.',
    source: 'website',
    status: 'new',
    createdAt: new Date(Date.now() - 86400000 * 3).toISOString(),
  },
  {
    id: '10',
    name: 'Tom Henderson',
    email: 'tom@realestatepro.com',
    company: 'Real Estate Pro',
    message: 'Need a property listing website with map integration and virtual tours.',
    source: 'direct',
    status: 'new',
    createdAt: new Date(Date.now() - 86400000 * 1).toISOString(),
  },
  {
    id: '11',
    name: 'Natalie Lopez',
    email: 'natalie@artgallery.com',
    company: 'Art Gallery Online',
    message: 'Looking for an immersive gallery experience website for contemporary art.',
    source: 'social',
    status: 'new',
    createdAt: new Date(Date.now() - 86400000 * 0.5).toISOString(),
  },
];

function getContacts(): Contact[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
    // Initialize with seed data
    localStorage.setItem(STORAGE_KEY, JSON.stringify(seedContacts));
    return seedContacts;
  } catch {
    return seedContacts;
  }
}

function saveContacts(contacts: Contact[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
}

export function getAllContacts(): Contact[] {
  return getContacts().sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export function addContact(data: {
  name: string;
  email: string;
  company: string;
  message: string;
}): Contact {
  const contacts = getContacts();
  const newContact: Contact = {
    id: Date.now().toString(),
    ...data,
    source: 'website',
    status: 'new',
    createdAt: new Date().toISOString(),
  };
  contacts.push(newContact);
  saveContacts(contacts);
  return newContact;
}

export function updateContactStatus(id: string, status: Contact['status']): void {
  const contacts = getContacts();
  const contact = contacts.find((c) => c.id === id);
  if (contact) {
    contact.status = status;
    if (status === 'replied') {
      contact.repliedAt = new Date().toISOString();
    }
    saveContacts(contacts);
  }
}

export function getContactStats() {
  const contacts = getContacts();
  const now = new Date();
  const thisMonth = contacts.filter((c) => {
    const d = new Date(c.createdAt);
    return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
  });
  const lastMonth = contacts.filter((c) => {
    const d = new Date(c.createdAt);
    const lm = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    return d.getMonth() === lm.getMonth() && d.getFullYear() === lm.getFullYear();
  });

  const newCount = contacts.filter((c) => c.status === 'new').length;
  const repliedCount = contacts.filter((c) => c.status === 'replied').length;
  const totalCount = contacts.length;
  const responseRate = totalCount > 0 ? Math.round((repliedCount / totalCount) * 100) : 0;

  // Monthly change calculation
  const thisMonthCount = thisMonth.length;
  const lastMonthCount = lastMonth.length;
  const monthChange =
    lastMonthCount > 0
      ? Math.round(((thisMonthCount - lastMonthCount) / lastMonthCount) * 100)
      : thisMonthCount > 0
        ? 100
        : 0;

  return {
    totalContacts: totalCount,
    newMessages: newCount,
    responseRate,
    thisMonthContacts: thisMonthCount,
    lastMonthContacts: lastMonthCount,
    monthChange,
    repliedCount,
    readCount: contacts.filter((c) => c.status === 'read').length,
  };
}

export function getContactsByMonth(): Array<{ x: string; y: number }> {
  const contacts = getContacts();
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const now = new Date();

  // Last 6 months
  const data: Array<{ x: string; y: number }> = [];
  for (let i = 5; i >= 0; i--) {
    const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const month = months[date.getMonth()];
    const count = contacts.filter((c) => {
      const d = new Date(c.createdAt);
      return d.getMonth() === date.getMonth() && d.getFullYear() === date.getFullYear();
    }).length;
    data.push({ x: month, y: count });
  }
  return data;
}

export function getContactsBySource(): Array<{ label: string; value: number }> {
  const contacts = getContacts();
  const sources = ['website', 'referral', 'social', 'direct'] as const;
  const labels: Record<string, string> = {
    website: 'Website',
    referral: 'Referral',
    social: 'Social Media',
    direct: 'Direct',
  };
  return sources.map((s) => ({
    label: labels[s],
    value: contacts.filter((c) => c.source === s).length,
  }));
}

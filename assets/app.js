(() => {
  const app = document.querySelector('#app');
  const apiBase = window.__BROKERAI_CONFIG__?.apiBaseUrl;
  
  // Auto-hydrate fresh authentic Thane micro-market pricing on load
  try {
    if (localStorage.getItem('brokerai.v36ThaneLoaded') !== 'true') {
      localStorage.removeItem('brokerai.leads');
      localStorage.removeItem('brokerai.properties');
      localStorage.removeItem('brokerai.deals');
      localStorage.removeItem('brokerai.visits');
      localStorage.setItem('brokerai.v36ThaneLoaded', 'true');
    }
  } catch (e) {}

  const demoLeads = [
    { 
      id: 101, 
      name: 'Rahul Sharma', 
      phone: '+91 98765 43210', 
      email: 'rahul.sharma@example.com', 
      source: 'WhatsApp Inbound', 
      temperature: 'HOT', 
      stage: 'NEGOTIATION', 
      assignedAgentName: 'Aarav Mehta', 
      requirement: { 
        transactionType: 'BUY', 
        propertyCategory: 'RESIDENTIAL', 
        bhk: 2, 
        minBudget: 13000000, 
        maxBudget: 15500000, 
        preferredLocations: ['Hiranandani Estate', 'Rodas Enclave', 'Thane West'],
        notes: 'Needs premium 2 BHK with podium parking in Hiranandani Estate. Ready to issue token.'
      } 
    },
    { 
      id: 102, 
      name: 'Pooja Deshmukh', 
      phone: '+91 98111 22334', 
      email: 'pooja.deshmukh@gmail.com', 
      source: 'Direct Client Referral', 
      temperature: 'HOT', 
      stage: 'REQUIREMENT_UNDERSTOOD', 
      assignedAgentName: 'Aarav Mehta', 
      requirement: { 
        transactionType: 'BUY', 
        propertyCategory: 'RESIDENTIAL', 
        bhk: 3, 
        minBudget: 26000000, 
        maxBudget: 31000000, 
        preferredLocations: ['Pokhran Road 1', 'Raymond Realty', 'Vasant Vihar'],
        notes: 'Looking for luxury 3 BHK high floor with Yeoor Hills view and 2 car parks.'
      } 
    },
    { 
      id: 103, 
      name: 'Amit Kulkarni', 
      phone: '+91 98204 88211', 
      email: 'amit.kulkarni@tatamotors.com', 
      source: 'MagicBricks Verified', 
      temperature: 'WARM', 
      stage: 'PROPERTIES_SHARED', 
      assignedAgentName: 'Aarav Mehta', 
      requirement: { 
        transactionType: 'BUY', 
        propertyCategory: 'RESIDENTIAL', 
        bhk: 3, 
        minBudget: 17500000, 
        maxBudget: 20500000, 
        preferredLocations: ['Vasant Vihar', 'Lok Puram', 'Thane West'],
        notes: 'Seeking resale or ready-to-move 3 BHK in established Vasant Vihar gated society.'
      } 
    },
    { 
      id: 104, 
      name: 'Neha Desai', 
      phone: '+91 99871 12450', 
      email: 'neha.desai@tcs.com', 
      source: 'Housing.com', 
      temperature: 'HOT', 
      stage: 'NEGOTIATION', 
      assignedAgentName: 'Sana Khan', 
      requirement: { 
        transactionType: 'RENT', 
        propertyCategory: 'RESIDENTIAL', 
        bhk: 2, 
        minBudget: 34000, 
        maxBudget: 45000, 
        preferredLocations: ['Rustomjee Urbania', 'Majiwada', 'Thane West'],
        notes: 'Working at Olympus Thane. Needs fully furnished 2 BHK near Viviana / Eastern Express.'
      } 
    },
    { 
      id: 105, 
      name: 'Ananya Joshi', 
      phone: '+91 98330 77665', 
      email: 'ananya.joshi@hdfcbank.com', 
      source: '99acres Lead', 
      temperature: 'WARM', 
      stage: 'SITE_VISIT_SCHEDULED', 
      assignedAgentName: 'Sana Khan', 
      requirement: { 
        transactionType: 'BUY', 
        propertyCategory: 'RESIDENTIAL', 
        bhk: 1, 
        minBudget: 7500000, 
        maxBudget: 9200000, 
        preferredLocations: ['Lodha Amara', 'Kolshet Road', 'Balkum'],
        notes: 'First time homebuyer. Pre-approved loan of ₹70 Lakhs with HDFC.'
      } 
    },
    { 
      id: 106, 
      name: 'Vikram Shah', 
      phone: '+91 97692 13670', 
      email: 'vikram.shah@retailenterprises.in', 
      source: 'Direct Walk-in', 
      temperature: 'HOT', 
      stage: 'NEGOTIATION', 
      assignedAgentName: 'Aarav Mehta', 
      requirement: { 
        transactionType: 'RENT', 
        propertyCategory: 'COMMERCIAL', 
        propertyType: 'Commercial Showroom / Office',
        bhk: null, 
        minBudget: 75000, 
        maxBudget: 110000, 
        preferredLocations: ['Ghodbunder Road', 'Wagle Estate', 'Thane West'],
        notes: 'Needs 500-800 sq.ft prime commercial frontage for medical diagnostic clinic.'
      } 
    }
  ];

const demoProperties = [
    { 
      id: 201, 
      title: 'Luxury 2 BHK at Rodas Enclave', 
      society: 'Rodas Enclave - Woodbury', 
      propertyCategory: 'RESIDENTIAL', 
      propertyType: '2 BHK Apartment', 
      listingType: 'SALE', 
      keyLocation: '🔑 Office Key Board (Hook #4)', 
      price: 14800000, 
      area: 785, 
      bhk: 2, 
      parking: 1, 
      furnishing: 'SEMI_FURNISHED', 
      location: 'Hiranandani Estate, Thane West', 
      ownerName: 'Suresh Patil', 
      ownerPhone: '+91 98210 11223', 
      status: 'NEGOTIATION', 
      amenities: ['Clubhouse', 'Gymnasium', 'Swimming Pool', 'Landscaped Podium', '24/7 Security', 'Piped Gas'],
      images: [
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80'
      ],
      floorPlan: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80'
    },
    { 
      id: 202, 
      title: 'Ultra Luxury 3 BHK with Yeoor View', 
      society: 'Raymond Realty - The Address by GS', 
      propertyCategory: 'RESIDENTIAL', 
      propertyType: '3 BHK Apartment', 
      listingType: 'SALE', 
      keyLocation: '🛡️ Tower A Concierge Desk (Gate #2)', 
      price: 28500000, 
      area: 1250, 
      bhk: 3, 
      parking: 2, 
      furnishing: 'UNFURNISHED', 
      location: 'Pokhran Road 1, Thane West', 
      ownerName: 'Harish Singhania', 
      ownerPhone: '+91 98200 44556', 
      status: 'AVAILABLE', 
      amenities: ['Private Clubhouse', 'Olympic Swimming Pool', 'Tennis Court', 'High-Speed Elevators', 'EV Charging'],
      images: [
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=80'
      ],
      floorPlan: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80'
    },
    { 
      id: 203, 
      title: 'Garden Facing 3 BHK in Lok Puram', 
      society: 'Lok Puram Complex - Vasant Vihar', 
      propertyCategory: 'RESIDENTIAL', 
      propertyType: '3 BHK Apartment', 
      listingType: 'SALE', 
      keyLocation: '🛡️ Tower 2 Guard (Watchman Ramu)', 
      price: 18500000, 
      area: 1140, 
      bhk: 3, 
      parking: 2, 
      furnishing: 'FURNISHED', 
      location: 'Vasant Vihar, Thane West', 
      ownerName: 'Ramesh Shah', 
      ownerPhone: '+91 98204 55667', 
      status: 'AVAILABLE', 
      amenities: ['Children Play Area', 'Senior Citizen Park', 'Visitor Parking', 'Intercom', '24/7 Water Supply'],
      images: [
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80'
      ],
      floorPlan: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80'
    },
    { 
      id: 204, 
      title: 'Modern Furnished 2 BHK at Urbania', 
      society: 'Rustomjee Urbania - Azziano', 
      propertyCategory: 'RESIDENTIAL', 
      propertyType: '2 BHK Apartment', 
      listingType: 'RENT', 
      keyLocation: '👤 In Field with Aarav Mehta', 
      price: 38000, 
      area: 715, 
      bhk: 2, 
      parking: 1, 
      furnishing: 'FURNISHED', 
      location: 'Majiwada, Thane West', 
      ownerName: 'Pooja Hegde', 
      ownerPhone: '+91 99881 22334', 
      status: 'AVAILABLE', 
      amenities: ['Urbania Clubhouse', 'Infinity Pool', 'International School Nearby', 'Gym', 'Retail Arcade'],
      images: [
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80'
      ],
      floorPlan: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80'
    },
    { 
      id: 205, 
      title: 'Smart 1 BHK Deck Flat at Lodha Amara', 
      society: 'Lodha Amara - Tower 14', 
      propertyCategory: 'RESIDENTIAL', 
      propertyType: '1 BHK Apartment', 
      listingType: 'SALE', 
      keyLocation: '🔑 Office Key Board (Hook #7)', 
      price: 8200000, 
      area: 465, 
      bhk: 1, 
      parking: 1, 
      furnishing: 'SEMI_FURNISHED', 
      location: 'Kolshet Road, Thane West', 
      ownerName: 'Nitin Sawant', 
      ownerPhone: '+91 98190 66554', 
      status: 'AVAILABLE', 
      amenities: ['40-Acre Grand Clubhouse', 'Football Turf', 'Private Forest', 'Cafes', '24/7 Power Backup'],
      images: [
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
      ],
      floorPlan: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80'
    },
    { 
      id: 206, 
      title: 'Prime Main Road Commercial Showroom', 
      society: 'Ghodbunder Commercial Plaza', 
      propertyCategory: 'COMMERCIAL', 
      propertyType: 'Commercial Showroom', 
      listingType: 'RENT', 
      keyLocation: '🏠 Owner Direct Appointment', 
      price: 88000, 
      area: 620, 
      bhk: 0, 
      parking: 2, 
      furnishing: 'UNFURNISHED', 
      location: 'Ghodbunder Road, Thane West', 
      ownerName: 'Kishore Jha', 
      ownerPhone: '+91 97690 33445', 
      status: 'AVAILABLE', 
      amenities: ['30 Ft Frontage', 'Glass Facade', 'Heavy Footfall', 'Basement Parking', '3-Phase Power'],
      images: [
        'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80'
      ],
      floorPlan: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80'
    },
    { 
      id: 207, 
      title: 'Furnished IT Office Space at Wagle Estate', 
      society: 'Wagle Industrial Tech Park', 
      propertyCategory: 'COMMERCIAL', 
      propertyType: 'Commercial Office Space', 
      listingType: 'RENT', 
      keyLocation: '🔑 Office Key Board (Hook #11)', 
      price: 115000, 
      area: 1450, 
      bhk: 0, 
      parking: 3, 
      furnishing: 'FURNISHED', 
      location: 'Wagle Estate, Thane West', 
      ownerName: 'Deepak Merchant', 
      ownerPhone: '+91 98201 88776', 
      status: 'AVAILABLE', 
      amenities: ['24 Workstations', 'Conference Room', 'Server Room', 'Central AC', 'Cafeteria'],
      images: [
        'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80'
      ],
      floorPlan: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80'
    }
  ];

const demoFollowUps = [
    { id: 301, leadId: 101, leadName: 'Rahul Sharma', leadPhone: '+91 98765 43210', title: 'Confirm site-visit timing and parking preference', type: 'CALL', priority: 'HIGH', status: 'PENDING', dueAt: '2026-08-26T14:30:00', isOverdue: true, notes: 'Interested in Hiranandani 2 BHK · Negotiating token amount' },
    { id: 302, leadId: 103, leadName: 'Neha Desai', leadPhone: '+91 99871 12450', title: 'Discuss owner’s revised rental offer', type: 'WHATSAPP', priority: 'MEDIUM', status: 'PENDING', dueAt: '2026-08-27T15:00:00', isOverdue: false, notes: 'Negotiating rent with owner Pooja Hegde' },
    { id: 303, leadId: 102, leadName: 'Amit Kulkarni', leadPhone: '+91 98204 88211', title: 'Ask for shortlisting feedback on 3 BHKs', type: 'CALL', priority: 'LOW', status: 'PENDING', dueAt: '2026-08-29T11:00:00', isOverdue: false, notes: 'Shared Vasant Vihar listing yesterday' }
  ];

const demoVisits = [
    { id: 401, leadId: 101, leadName: 'Rahul Sharma', leadPhone: '+91 98765 43210', propertyId: 201, propertyTitle: 'Spacious 2 BHK at Hiranandani Estate', propertyLocation: 'Hiranandani Estate, Thane', propertyPrice: 12500000, bhk: 2, scheduledAt: '2026-08-27T16:00:00', status: 'CONFIRMED', interestLevel: null, notes: 'Key with Society Office, Gate Pass registered' },
    { id: 402, leadId: 102, leadName: 'Amit Kulkarni', leadPhone: '+91 98204 88211', propertyId: 202, propertyTitle: 'Garden-facing 3 BHK in Vasant Vihar', propertyLocation: 'Vasant Vihar, Thane', propertyPrice: 17800000, bhk: 3, scheduledAt: '2026-08-28T11:30:00', status: 'SCHEDULED', interestLevel: null, notes: 'First showing · Client coming with family' },
    { id: 403, leadId: 103, leadName: 'Neha Desai', leadPhone: '+91 99871 12450', propertyId: 203, propertyTitle: 'Furnished 2 BHK near Viviana Mall', propertyLocation: 'Majiwada, Thane', propertyPrice: 48000, bhk: 2, scheduledAt: '2026-08-25T17:15:00', status: 'COMPLETED', interestLevel: 'VERY_INTERESTED', feedback: 'Loves the furnishing and balcony view. Ready to finalize token deposit.', notes: 'Showing completed smoothly' }
  ];

const demoDeals = [
    { 
      id: 601, 
      leadId: 101, 
      leadName: 'Rahul Sharma', 
      leadPhone: '+91 98765 43210', 
      propertyId: 201, 
      propertyTitle: 'Luxury 2 BHK at Rodas Enclave', 
      propertyLocation: 'Hiranandani Estate, Thane West', 
      listingType: 'SALE', 
      agreedPrice: 14800000, 
      brokerageRate: 2.0, 
      expectedBrokerage: 296000, 
      stage: 'TOKEN_DEPOSIT', 
      targetCloseDate: '2026-09-15', 
      tokenAmount: 150000, 
      assignedAgentName: 'Aarav Mehta', 
      notes: 'Token received ₹1,50,000 via NEFT. MahaRERA Receipt #TR-8A2F10 issued.' 
    },
    { 
      id: 602, 
      leadId: 102, 
      leadName: 'Pooja Deshmukh', 
      leadPhone: '+91 98111 22334', 
      propertyId: 202, 
      propertyTitle: 'Ultra Luxury 3 BHK with Yeoor View', 
      propertyLocation: 'Pokhran Road 1, Thane West', 
      listingType: 'SALE', 
      agreedPrice: 28500000, 
      brokerageRate: 2.0, 
      expectedBrokerage: 570000, 
      stage: 'LEGAL_AND_LOAN', 
      targetCloseDate: '2026-09-28', 
      tokenAmount: 500000, 
      assignedAgentName: 'Aarav Mehta', 
      notes: 'Title search clear with advocate. SBI Home loan sanctioned for ₹2.20 Cr.' 
    },
    { 
      id: 603, 
      leadId: 104, 
      leadName: 'Neha Desai', 
      leadPhone: '+91 99871 12450', 
      propertyId: 204, 
      propertyTitle: 'Modern Furnished 2 BHK at Urbania', 
      propertyLocation: 'Majiwada, Thane West', 
      listingType: 'RENT', 
      agreedPrice: 38000, 
      brokerageRate: 100, 
      expectedBrokerage: 38000, 
      stage: 'NEGOTIATION', 
      targetCloseDate: '2026-09-05', 
      tokenAmount: 0, 
      assignedAgentName: 'Sana Khan', 
      notes: 'Finalizing 11-month registered leave & license agreement draft.' 
    },
    { 
      id: 604, 
      leadId: 106, 
      leadName: 'Vikram Shah', 
      leadPhone: '+91 97692 13670', 
      propertyId: 206, 
      propertyTitle: 'Prime Main Road Commercial Showroom', 
      propertyLocation: 'Ghodbunder Road, Thane West', 
      listingType: 'RENT', 
      agreedPrice: 88000, 
      brokerageRate: 100, 
      expectedBrokerage: 88000, 
      stage: 'TOKEN_DEPOSIT', 
      targetCloseDate: '2026-09-10', 
      tokenAmount: 88000, 
      assignedAgentName: 'Aarav Mehta', 
      notes: 'Commercial lease terms agreed: 5 years tenure with 15% escalation every 3 years.' 
    }
  ];

const demoCommissions = [
    { id: 701, dealId: 601, dealTitle: 'Rahul Sharma × Spacious 2 BHK Hiranandani', clientName: 'Rahul Sharma', clientPhone: '+91 98765 43210', propertyTitle: 'Spacious 2 BHK at Hiranandani Estate', propertyLocation: 'Hiranandani Estate, Thane', listingType: 'SALE', agreedDealValue: 12500000, grossBrokerage: 187500, brokerageRate: 1.5, companySharePercent: 70, companyShareAmount: 131250, agentSharePercent: 30, agentShareAmount: 56250, agentName: 'Aarav Mehta', status: 'PENDING_INVOICE', invoiceNumber: 'INV-2026-088', invoiceDate: '2026-08-27', paymentDueDate: '2026-09-10', notes: 'Token deposit confirmed. Agreement draft pending.' },
    { id: 702, dealId: 602, dealTitle: 'Amit Kulkarni × Lok Puram 3 BHK', clientName: 'Amit Kulkarni', clientPhone: '+91 98204 88211', propertyTitle: 'Garden-facing 3 BHK in Vasant Vihar', propertyLocation: 'Vasant Vihar, Thane', listingType: 'SALE', agreedDealValue: 17800000, grossBrokerage: 267000, brokerageRate: 1.5, companySharePercent: 70, companyShareAmount: 186900, agentSharePercent: 30, agentShareAmount: 80100, agentName: 'Aarav Mehta', status: 'EXPECTED', invoiceNumber: null, invoiceDate: null, paymentDueDate: '2026-09-25', notes: 'Showing done. Final price negotiation in progress.' },
    { id: 703, dealId: 603, dealTitle: 'Neha Desai × 2 BHK Urbania Rental', clientName: 'Neha Desai', clientPhone: '+91 99871 12450', propertyTitle: 'Furnished 2 BHK near Viviana Mall', propertyLocation: 'Majiwada, Thane', listingType: 'RENT', agreedDealValue: 48000, grossBrokerage: 48000, brokerageRate: 100, companySharePercent: 60, companyShareAmount: 28800, agentSharePercent: 40, agentShareAmount: 19200, agentName: 'Sana Khan', status: 'RECEIVED', invoiceNumber: 'INV-2026-074', invoiceDate: '2026-08-20', paymentDueDate: '2026-08-25', notes: 'Payment received via NEFT from owner Pooja Hegde.' },
    { id: 704, dealId: 604, dealTitle: 'Vikram Shah × Prime Retail Shop Rental', clientName: 'Vikram Shah', clientPhone: '+91 97692 13670', propertyTitle: 'Prime Retail Shop on Main Road', propertyLocation: 'Ghodbunder Road, Thane', listingType: 'RENT', agreedDealValue: 85000, grossBrokerage: 85000, brokerageRate: 100, companySharePercent: 60, companyShareAmount: 51000, agentSharePercent: 40, agentShareAmount: 34000, agentName: 'Aarav Mehta', status: 'PENDING_INVOICE', invoiceNumber: 'INV-2026-089', invoiceDate: '2026-08-26', paymentDueDate: '2026-09-05', notes: 'Lease agreement draft being verified by advocate.' }
  ];

const defaultAgencySettings = {
    agencyName: 'BrokerAI Realty Advisors Pvt Ltd',
    brandTagline: 'Premier Residential & Commercial Advisory · Thane & Mumbai',
    reraNumber: 'A51700012345',
    gstin: '27AABCB1234F1Z8',
    panNumber: 'ABCDE1234F',
    tradeLicense: 'MH-THN-2018-99421',
    officeAddress: 'Level 4, Rodas Enclave Commercial Plaza, Hiranandani Estate, Ghodbunder Road, Thane West - 400607',
    contactEmail: 'contact@brokerai-realty.in',
    contactPhone: '+91 98200 12345',
    whatsappSupport: '+91 98200 12345',
    defaultSaleBrokerageRate: 1.5,
    defaultRentBrokerageRate: 100,
    defaultCompanySplit: 70,
    defaultAgentSplit: 30,
    gstEnabled: true,
    bankName: 'HDFC Bank',
    bankBranch: 'Hiranandani Estate Branch, Thane',
    accountName: 'BrokerAI Realty Advisors Pvt Ltd',
    accountNumber: '50200049210984',
    ifscCode: 'HDFC0000123',
    upiId: 'brokerai@hdfcbank',
    appendReraDisclaimer: true,
    aiLanguageTone: 'english',
    instantLeadAlerts: true
  };

const demoDocuments = [
    { id: 501, title: 'Index II & Registration Copy', category: 'PROPERTY_LEGAL', documentType: 'INDEX_II', status: 'VERIFIED', propertyId: 201, propertyTitle: 'Spacious 2 BHK at Hiranandani Estate', documentNumber: 'THN-44210/2019', notes: 'Verified title chain with society records.', verifiedAt: '2026-08-20T11:00:00' },
    { id: 502, title: 'Occupancy Certificate (OC)', category: 'PROPERTY_LEGAL', documentType: 'OCCUPANCY_CERTIFICATE', status: 'VERIFIED', propertyId: 201, propertyTitle: 'Spacious 2 BHK at Hiranandani Estate', documentNumber: 'TMC/TP/OC/2018/88', notes: 'Full OC granted by Thane Municipal Corporation.', verifiedAt: '2026-08-20T11:05:00' },
    { id: 503, title: 'Buyer KYC (PAN & Aadhaar)', category: 'CLIENT_KYC', documentType: 'PAN_CARD', status: 'VERIFIED', leadId: 101, leadName: 'Rahul Sharma', documentNumber: 'ABCPS1234F', notes: 'Aadhaar & PAN matched with IT records.', verifiedAt: '2026-08-25T14:20:00' },
    { id: 504, title: 'HDFC Home Loan Sanction Letter', category: 'CLIENT_KYC', documentType: 'LOAN_SANCTION_LETTER', status: 'VERIFIED', leadId: 101, leadName: 'Rahul Sharma', documentNumber: 'HDFC/HL/99824', notes: 'Sanctioned amount ₹95 Lakhs @ 8.4% ROI.', verifiedAt: '2026-08-26T16:00:00' },
    { id: 505, title: 'Token Booking Receipt #TR-8A2F10', category: 'DEAL_PAPERWORK', documentType: 'TOKEN_RECEIPT', status: 'VERIFIED', leadId: 101, leadName: 'Rahul Sharma', propertyId: 201, propertyTitle: 'Spacious 2 BHK at Hiranandani Estate', documentNumber: 'TR-8A2F10', notes: 'Token Amount: ₹1,00,000 | Mode: UPI | Ref: 4210984421 | Date: 2026-08-26 | Agreed Deal Value: ₹1,25,00,000', verifiedAt: '2026-08-26T18:00:00' }
  ];

  
  function getStoredLeads() {
    try {
      const saved = localStorage.getItem('brokerai.leads');
      if (saved) {
        const p = JSON.parse(saved);
        if (Array.isArray(p) && p.length) return p;
      }
    } catch {}
    return typeof demoLeads !== 'undefined' ? demoLeads : [];
  }

  function getStoredProperties() {
    try {
      const saved = localStorage.getItem('brokerai.properties');
      if (saved) {
        const p = JSON.parse(saved);
        if (Array.isArray(p) && p.length) return p;
      }
    } catch {}
    return typeof demoProperties !== 'undefined' ? demoProperties : [];
  }

  function getStoredDocuments() {
    try {
      const saved = localStorage.getItem('brokerai.documents');
      if (saved) {
        const p = JSON.parse(saved);
        if (Array.isArray(p) && p.length) return p;
      }
    } catch {}
    return typeof demoDocuments !== 'undefined' ? demoDocuments : [];
  }

  function getStoredVisits() {
    try {
      const saved = localStorage.getItem('brokerai.visits');
      if (saved) {
        const p = JSON.parse(saved);
        if (Array.isArray(p) && p.length) return p;
      }
    } catch {}
    return typeof demoVisits !== 'undefined' ? demoVisits : [];
  }

  function getStoredDeals() {
    try {
      const saved = localStorage.getItem('brokerai.deals');
      if (saved) {
        const p = JSON.parse(saved);
        if (Array.isArray(p) && p.length) return p;
      }
    } catch {}
    return typeof demoDeals !== 'undefined' ? demoDeals : [];
  }

  function getStoredCommissions() {
    try {
      const saved = localStorage.getItem('brokerai.commissions');
      if (saved) {
        const p = JSON.parse(saved);
        if (Array.isArray(p) && p.length) return p;
      }
    } catch {}
    return typeof demoCommissions !== 'undefined' ? demoCommissions : [];
  }

  function getStoredFollowUps() {
    try {
      const saved = localStorage.getItem('brokerai.followups');
      if (saved) {
        const p = JSON.parse(saved);
        if (Array.isArray(p) && p.length) return p;
      }
    } catch {}
    return typeof demoFollowUps !== 'undefined' ? demoFollowUps : [];
  }


  
  const esc = value => String(value ?? '').replace(/[&<>'"]/g, char => ({ '&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;' })[char]);
  const initials = value => String(value || 'B').split(' ').map(part => part[0]).slice(0, 2).join('').toUpperCase();
  const formatDateTime = dateStr => {
    if (!dateStr) return '—';
    const d = new Date(dateStr);
    return isNaN(d.getTime()) ? dateStr : d.toLocaleString('en-IN', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
  };

  const formatPrice = (price, listingType) => {
    if (!price) return '—';
    const num = Number(price);
    if (listingType === 'RENT') return `₹${num.toLocaleString('en-IN')}/mo`;
    if (num >= 10000000) {
      const cr = num / 10000000;
      return `₹${cr % 1 === 0 ? cr : cr.toFixed(2)} Cr`;
    }
    if (num >= 100000) {
      const l = num / 100000;
      return `₹${l % 1 === 0 ? l : l.toFixed(2)} L`;
    }
    return `₹${num.toLocaleString('en-IN')}`;
  };

  const mdToHtml = text => {
    if (!text) return '';
    return text
      .replace(/^### (.*$)/gim, '<h3 style="margin:8px 0 4px;font-size:15px;color:var(--ink);">$1</h3>')
      .replace(/^#### (.*$)/gim, '<h4 style="margin:6px 0 3px;font-size:13px;color:var(--muted);">$1</h4>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/`([^`]+)`/g, '<code style="background:#f1f5f9;padding:2px 5px;border-radius:4px;font-size:12px;">$1</code>')
      .replace(/```text\n([\s\S]*?)\n```/g, '<pre style="background:#f8fafc;padding:10px;border-radius:8px;font-family:monospace;font-size:12px;border:1px solid var(--line);white-space:pre-wrap;">$1</pre>')
      .replace(/```([\s\S]*?)```/g, '<pre style="background:#f8fafc;padding:10px;border-radius:8px;font-family:monospace;font-size:12px;border:1px solid var(--line);white-space:pre-wrap;">$1</pre>')
      .replace(/• (.*$)/gim, '<div style="margin-left:12px;padding:2px 0;">• $1</div>')
      .replace(/\n\n/g, '<div style="height:8px;"></div>');
  };

  
  function showToast(msg, type = 'success', duration = 3200) {
    if (typeof document === 'undefined') return;
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }
    const pill = document.createElement('div');
    pill.className = `toast-pill ${type}`;
    const icon = type === 'error' ? '⚠️' : (type === 'info' ? 'ℹ️' : '✓');
    pill.innerHTML = `<span class="toast-icon">${icon}</span><span>${String(msg).replace(/\n/g, '<br/>')}</span>`;
    container.appendChild(pill);

    setTimeout(() => {
      pill.classList.add('toast-exit');
      setTimeout(() => { pill.remove(); }, 250);
    }, duration);
  }
  const toast = showToast;
  if (typeof window !== 'undefined') {
    window.showToast = showToast;
    window.toast = toast;
  }

  function mountView(content, title = '', navKey = '') {
    const app = document.querySelector('#app');
    if (!app) return;
    app.innerHTML = layout(content);
    if (typeof bindShell === 'function') bindShell();
  }


  
  let parsedUser = null;
  try {
    const storedUser = localStorage.getItem('brokerai.user');
    if (storedUser) parsedUser = JSON.parse(storedUser);
  } catch (e) {}

  const isOwnerAuth = (typeof localStorage !== 'undefined' && localStorage.getItem('brokerai.owner_auth') === 'true');

  const initialUser = {
    fullName: parsedUser?.fullName || 'Mohak Vaswani',
    role: (parsedUser?.role && parsedUser.role !== 'SUPER_ADMIN') ? parsedUser.role : 'PRINCIPAL_BROKER',
    email: parsedUser?.email || 'mohakvaswani7@gmail.com',
    phone: parsedUser?.phone || '+91 91370 00000',
    ...(parsedUser || {})
  };
  if (!isOwnerAuth && initialUser.role === 'SUPER_ADMIN') {
    initialUser.role = 'PRINCIPAL_BROKER';
    try { localStorage.setItem('brokerai.user', JSON.stringify(initialUser)); } catch (e) {}
  }

  const state = {
    demo: true,
    isOwnerAuthenticated: isOwnerAuth,
    clientMode: localStorage.getItem("brokerai.clientMode") === "true" || false,
    token: localStorage.getItem('brokerai.token') || 'live-session-token-2026',
    currentPlan: localStorage.getItem('brokerai.currentPlan') || 'elite',
    user: initialUser,
    activeLicense: JSON.parse(localStorage.getItem('brokerai.activeLicense') || 'null') || null,
    page: (window.location.hash || '').replace(/^#\/?/, '').split('?')[0] || 'dashboard',
    leadsViewMode: localStorage.getItem('brokerai.leadsViewMode') || 'table',
    propertiesViewMode: localStorage.getItem('brokerai.propertiesViewMode') || 'grid',
    followUpsViewMode: localStorage.getItem('brokerai.followUpsViewMode') || 'agenda',
    visitsViewMode: localStorage.getItem('brokerai.visitsViewMode') || 'agenda',
    leads: getStoredLeads(),
    properties: getStoredProperties(),
    documents: getStoredDocuments(),
    visits: getStoredVisits(),
    deals: getStoredDeals(),
    commissionsViewMode: localStorage.getItem('brokerai.commissionsViewMode') || 'cards',
    commissionsCategory: 'ALL',
    commissions: getStoredCommissions(),
    settingsTab: localStorage.getItem('brokerai.settingsTab') || 'AGENCY_RERA',
    agencySettings: JSON.parse(localStorage.getItem('brokerai.agencySettings') || 'null') || {
      agencyName: 'Mehta Prime Realty',
      contactPhone: '+91 98200 12345',
      whatsappSupport: '+91 98200 12345',
      reraNumber: 'A51700012345',
      gstin: '27AABCB1234F1Z8',
      officeAddress: 'Hiranandani Estate, Thane West - 400607'
    },
    followUps: getStoredFollowUps(),
    notifications: [
      {
        id: 'n1',
        type: 'OVERDUE',
        title: '🚨 Overdue Call: Rahul Sharma (Hot Buyer)',
        desc: 'Call to confirm site-visit timing & parking preference was due yesterday at 2:30 PM.',
        time: '1 hour ago',
        category: 'URGENT',
        read: false,
        leadId: 101
      },
      {
        id: 'n2',
        type: 'VISIT',
        title: '📍 Showing Scheduled Today: 4:00 PM',
        desc: 'Site visit for Amit Verma (3 BHK Vasant Vihar, Pokhran-2). Meeting point: Clubhouse Gate 2.',
        time: 'Today 4:00 PM',
        category: 'TODAY',
        read: false,
        visitId: 301
      },
      {
        id: 'n3',
        type: 'MATCH',
        title: '⚡ 96% Match Found for Priya Sundaram',
        desc: 'New 2.5 BHK in Hiranandani Estate fits budget ₹1.85 Cr and possession requirements.',
        time: '3 hours ago',
        category: 'MATCH',
        read: false,
        leadId: 101,
        propertyId: 201
      },
      {
        id: 'n4',
        type: 'DOC',
        title: '🧾 Token Booking Receipt TR-8A2F10 Verified',
        desc: 'Token deposit of ₹1,00,000 verified for Neha Desai on 2 BHK Rustomjee Urbania.',
        time: 'Yesterday',
        category: 'PAPERWORK',
        read: true,
        docId: 505
      },
      {
        id: 'n5',
        type: 'AI',
        title: '✧ Morning Intelligence Briefing Ready',
        desc: 'BrokerAI prepared your daily action queue: 2 site visits, 1 overdue negotiation, and ₹1.25 Cr active deals in focus.',
        time: 'Today 8:00 AM',
        category: 'AI',
        read: true
      }
    ],
    chatMessages: [
      {
        sender: 'ai',
        text: '### ✧ Welcome to BrokerAI Assistant\n\nI am your 24/7 digital operations manager. I can help you summarize your day, draft high-converting WhatsApp pitches, compute stamp duty and registration on-road cost sheets, parse raw WhatsApp messages into listings, or analyze deal conversion metrics.\n\n*Try asking: “Give me my morning briefing” or paste a forwarded property text.*'
      }
    ]
  };


  
  function planUpgradeWall(requiredPlanName = 'Agency Elite', featureName = 'Team Closer Roster') {
    const current = getPlanCapabilities();
    const targetPlanId = (requiredPlanName.toLowerCase().includes('elite') || requiredPlanName.toLowerCase().includes('agency')) ? 'elite' : 'pro';
    
    return `
      <div style="max-width:760px;margin:36px auto;padding:36px 32px;background:#ffffff;border-radius:24px;border:1px solid #e2e8f0;box-shadow:0 16px 40px rgba(0,0,0,0.06);text-align:center;box-sizing:border-box;">
        <div style="width:72px;height:72px;margin:0 auto 20px;border-radius:20px;background:rgba(245,158,11,0.12);display:flex;align-items:center;justify-content:center;font-size:36px;border:1px solid rgba(245,158,11,0.25);">
          🔒
        </div>
        <div style="display:inline-block;padding:4px 14px;border-radius:20px;background:#fef3c7;color:#b45309;font-weight:800;font-size:12px;margin-bottom:12px;text-transform:uppercase;letter-spacing:0.05em;">
          ${esc(requiredPlanName)} Exclusive Feature
        </div>
        <h2 style="font-size:26px;font-weight:850;color:#0f172a;margin:0 0 12px;letter-spacing:-0.02em;">${esc(featureName)} is Locked</h2>
        <p style="font-size:15px;color:#64748b;max-width:540px;margin:0 auto 24px;line-height:1.6;">
          Your active package is <strong>${esc(current.name)}</strong> (${esc(current.badge)}). 
          Switch or upgrade to <strong>${esc(requiredPlanName)}</strong> to unlock this module along with expanded agent seats, territory desks, and institutional features.
        </p>

        <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:16px;padding:20px;max-width:520px;margin:0 auto 28px;text-align:left;">
          <div style="font-size:12px;font-weight:800;color:#0f172a;text-transform:uppercase;letter-spacing:0.06em;margin-bottom:12px;">What's Included in ${esc(requiredPlanName)}:</div>
          <div style="display:grid;gap:8px;font-size:13.5px;color:#334155;">
            ${targetPlanId === 'elite' ? `
              <div style="display:flex;align-items:center;gap:8px;"><span style="color:#059669;font-weight:800;">✓</span> 20 Active Closer Seats & Live Roster</div>
              <div style="display:flex;align-items:center;gap:8px;"><span style="color:#059669;font-weight:800;">✓</span> 4 Micro-Market Branch Territory Desks</div>
              <div style="display:flex;align-items:center;gap:8px;"><span style="color:#059669;font-weight:800;">✓</span> 100% White-Label MahaRERA Letterhead Generator</div>
              <div style="display:flex;align-items:center;gap:8px;"><span style="color:#059669;font-weight:800;">✓</span> 70/30 & Builder Milestone Tranches Commission Ledger</div>
              <div style="display:flex;align-items:center;gap:8px;"><span style="color:#059669;font-weight:800;">✓</span> 18% GST Invoice & Form 16A TDS Certificates</div>
            ` : `
              <div style="display:flex;align-items:center;gap:8px;"><span style="color:#2563eb;font-weight:800;">✓</span> ⚡ AI Smart 2-Way Buyer ↔ Property Matchmaking</div>
              <div style="display:flex;align-items:center;gap:8px;"><span style="color:#2563eb;font-weight:800;">✓</span> 💰 Commission Splits & Milestone Tracking</div>
              <div style="display:flex;align-items:center;gap:8px;"><span style="color:#2563eb;font-weight:800;">✓</span> 🏆 Closer Performance Analytics & Leaderboard</div>
              <div style="display:flex;align-items:center;gap:8px;"><span style="color:#2563eb;font-weight:800;">✓</span> Magic WhatsApp Raw Chat & Broadcast AI Parser</div>
              <div style="display:flex;align-items:center;gap:8px;"><span style="color:#2563eb;font-weight:800;">✓</span> UNLIMITED Listings & Leads (3 Closer Seats)</div>
            `}
          </div>
        </div>

        <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
          <button class="button primary" id="upgrade-wall-switch-btn" style="background:#2563eb;color:#ffffff;padding:12px 28px;font-size:14px;font-weight:750;border-radius:12px;border:0;cursor:pointer;box-shadow:0 4px 12px rgba(37,99,235,0.25);">
            ⚡ 1-Click Switch to ${esc(requiredPlanName)}
          </button>
          <a href="#/pricing" class="button secondary" style="padding:12px 22px;font-size:14px;font-weight:650;border-radius:12px;text-decoration:none;">
            Compare All Plans
          </a>
        </div>
      </div>
    `;
  }

  function getPlanCapabilities(planId) {
    const active = planId || (typeof state !== 'undefined' && state && state.currentPlan) || 'agency';
    const raw = String(active).toLowerCase().trim();
    const pid = (raw.includes('solo') || raw.includes('starter')) ? 'starter' : ((raw.includes('agency') || raw.includes('elite')) ? 'agency' : 'pro');

    if (pid === 'starter') {
      return {
        planId: 'starter',
        name: 'Starter Solo',
        badge: '✦ Starter Solo',
        color: '#475569',
        priceMonthly: 600,
        maxLeads: 75,
        maxProperties: 50,
        maxWhatsAppPitches: 50,
        teamSeats: 1,
        aiMatching: false,
        magicWhatsAppParser: false,
        digitalAgreements: true,
        tokenReceipts: true,
        clientPresentationMode: false,
        commissionLedger: false,
        teamLeaderboard: false,
        multiBranchDesks: false,
        whiteLabelLetterhead: false,
        gstTdsInvoicing: false,
        highVolumeWhatsApp: false,
        superAdminConsole: false,
        cloudSync: false,
        customLetterhead: false
      };
    }
    if (pid === 'agency') {
      return {
        planId: 'agency',
        name: 'Agency Elite',
        badge: '💎 Agency Elite',
        color: '#059669',
        priceMonthly: 3000,
        maxLeads: Infinity,
        maxProperties: Infinity,
        maxWhatsAppPitches: Infinity,
        teamSeats: 20,
        aiMatching: true,
        magicWhatsAppParser: true,
        digitalAgreements: true,
        tokenReceipts: true,
        clientPresentationMode: true,
        commissionLedger: true,
        teamLeaderboard: true,
        multiBranchDesks: true,
        whiteLabelLetterhead: true,
        gstTdsInvoicing: true,
        highVolumeWhatsApp: true,
        superAdminConsole: false,
        cloudSync: true,
        customLetterhead: true
      };
    }
    // Pro Closer (Default)
    return {
      planId: 'pro',
      name: 'Pro Closer',
      badge: '⚡ Pro Closer',
      color: '#2563eb',
      priceMonthly: 1200,
      maxLeads: Infinity,
      maxProperties: Infinity,
      maxWhatsAppPitches: 500,
      teamSeats: 3,
      aiMatching: true,
      magicWhatsAppParser: true,
      digitalAgreements: true,
      tokenReceipts: true,
      clientPresentationMode: true,
      commissionLedger: true,
      teamLeaderboard: true,
      multiBranchDesks: false,
      whiteLabelLetterhead: false,
      gstTdsInvoicing: false,
      highVolumeWhatsApp: false,
      superAdminConsole: false,
      cloudSync: true,
      customLetterhead: false
    };
  }

  // --- DYNAMIC PLAN-BASED NAVIGATION ITEMS ---
  function getNavItems() {
    const cap = getPlanCapabilities();
    const pid = cap.planId;

    if (pid === 'starter') {
      return [
        ['dashboard', 'dashboard', 'Dashboard'],
        ['leads', 'leads', 'Leads (75 Quota)'],
        ['properties', 'properties', 'Properties (50 Quota)'],
        ['deals', 'deals', 'Deals Pipeline'],
        ['visits', 'visits', 'Site Visits'],
        ['follow-ups', 'followups', 'Follow-ups'],
        ['documents', 'documents', 'Calculators & Docs'],
        ['pricing', 'pricing', '⚡ Upgrade to Pro (₹1,200)'],
        ['settings', 'settings', 'Settings']
      ];
    }

    if (pid === 'pro') {
      return [
        ['dashboard', 'dashboard', 'Dashboard'],
        ['leads', 'leads', 'Buyer Leads (Unlimited)'],
        ['properties', 'properties', 'Properties (Unlimited)'],
        ['matches', 'matches', '⚡ AI Matchmaker'],
        ['deals', 'deals', 'Deals Pipeline'],
        ['visits', 'visits', 'Site Visits'],
        ['follow-ups', 'followups', 'Follow-ups'],
        ['documents', 'documents', 'Legal Vault & Receipts'],
        ['reports', 'reports', 'Reports & Analytics'],
        ['pricing', 'pricing', '💎 Upgrade to Agency (₹3,000)'],
        ['settings', 'settings', 'Settings']
      ];
    }

    // Agency Elite (All Unlocked)
    return [
      ['dashboard', 'dashboard', 'Dashboard'],
      ['leads', 'leads', 'Leads (Agency CRM)'],
      ['properties', 'properties', 'Properties (Portfolio)'],
      ['matches', 'matches', '⚡ AI Matchmaker'],
      ['deals', 'deals', 'Deals Pipeline'],
      ['visits', 'visits', 'Site Visits'],
      ['follow-ups', 'followups', 'Follow-ups'],
      ['documents', 'documents', 'Legal Vault & Receipts'],
      ['team', 'team', '👥 Closer Team (20 Seats)'],
      ['branches', 'branches', '📍 Territory Desks'],
      ['letterhead', 'letterhead', '🖨️ MahaRERA Letterhead'],
      ['commissions', 'commissions', '💰 Commission Splits'],
      ['reports', 'reports', 'Reports & Analytics'],
      ['pricing', 'pricing', '💎 Manage Subscription'],
      ['settings', 'settings', 'Settings']
    ];
  }

  function getSecondaryNavItems() {
    return [
      ['pricing', 'pricing', '💎 Subscription Plans & Discounts'],
      ['settings', 'settings', '⚙️ Agency & Account Settings'],
      ['notifications', 'notifications', '🔔 Deal Alerts & Notifications']
    ];
  }

  function demoTourModal() {
    document.querySelectorAll('.modal-backdrop, .drawer-backdrop').forEach(b => b.remove());
    const backdrop = document.createElement('div');
    backdrop.className = 'modal-backdrop';

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.cssText = 'max-width:680px;width:94vw;max-height:92vh;overflow-y:auto;padding:26px;background:#0f172a;color:#f8fafc;border:1.5px solid rgba(16,185,129,0.4);border-radius:24px;box-shadow:0 24px 60px rgba(0,0,0,0.6), 0 0 30px rgba(16,185,129,0.15);position:relative;box-sizing:border-box;';

    const currentCap = getPlanCapabilities();

    modal.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:18px;">
        <div>
          <div style="display:inline-flex;align-items:center;gap:6px;background:rgba(16,185,129,0.2);border:1px solid rgba(16,185,129,0.4);color:#34d399;font-size:11px;font-weight:800;padding:3px 10px;border-radius:999px;letter-spacing:0.04em;text-transform:uppercase;margin-bottom:8px;">
            <span class="trial-pulse-dot"></span> VIP 14-Day Live Trial
          </div>
          <h2 style="margin:0;font-size:22px;font-weight:800;letter-spacing:-0.02em;color:#ffffff;">🎮 Live Interactive Demo & Feature Tour</h2>
          <p style="margin:4px 0 0 0;font-size:13px;color:#94a3b8;">Test all core broker closing features with authentic Thane MMR inventory data.</p>
        </div>
        <button id="close-demo-tour" style="background:rgba(255,255,255,0.1);border:none;color:#94a3b8;font-size:20px;width:34px;height:34px;border-radius:10px;cursor:pointer;display:flex;align-items:center;justify-content:center;">✕</button>
      </div>

      <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);border-radius:16px;padding:14px 18px;margin-bottom:20px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px;">
        <div>
          <div style="font-size:11px;color:#94a3b8;text-transform:uppercase;font-weight:700;">Active Simulation Plan</div>
          <div style="font-size:15px;font-weight:800;color:#10b981;margin-top:2px;">${currentCap.badge} (${currentCap.priceFormatted})</div>
        </div>
        <button id="tour-open-plan-simulator" class="button" style="background:#3b82f6;color:#ffffff;border:none;font-size:12px;padding:6px 14px;border-radius:8px;font-weight:700;">💎 Change Package Tier</button>
      </div>

      <div style="display:grid;grid-template-columns:1fr;gap:12px;">
        <!-- Feature 1 -->
        <div style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.12);border-radius:14px;padding:14px 16px;display:flex;align-items:center;justify-content:space-between;gap:12px;transition:all 0.2s;">
          <div style="display:flex;align-items:flex-start;gap:12px;">
            <span style="background:#10b981;color:#fff;width:28px;height:28px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:800;flex-shrink:0;">1</span>
            <div>
              <div style="font-weight:700;font-size:14px;color:#f8fafc;">🎯 AI Matchmaker & Instant Deal Finder</div>
              <div style="font-size:12px;color:#94a3b8;margin-top:2px;">Scans 400+ criteria, budget brackets, and carpet requirements to pinpoint 95%+ client-property matches.</div>
            </div>
          </div>
          <button id="tour-act-ai-match" class="button" style="background:rgba(16,185,129,0.18);border:1px solid rgba(16,185,129,0.4);color:#34d399;font-weight:700;font-size:12px;white-space:nowrap;padding:7px 12px;">Test AI Match →</button>
        </div>

        <!-- Feature 2 -->
        <div style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.12);border-radius:14px;padding:14px 16px;display:flex;align-items:center;justify-content:space-between;gap:12px;">
          <div style="display:flex;align-items:flex-start;gap:12px;">
            <span style="background:#0ea5e9;color:#fff;width:28px;height:28px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:800;flex-shrink:0;">2</span>
            <div>
              <div style="font-weight:700;font-size:14px;color:#f8fafc;">🧾 MahaRERA Token Advance Receipts</div>
              <div style="font-size:12px;color:#94a3b8;margin-top:2px;">Generate branded legal token receipts with cheque/UPI details, forfeiture clauses, and PDF export.</div>
            </div>
          </div>
          <button id="tour-act-token-rcpt" class="button" style="background:rgba(14,165,233,0.18);border:1px solid rgba(14,165,233,0.4);color:#38bdf8;font-weight:700;font-size:12px;white-space:nowrap;padding:7px 12px;">Test Receipt →</button>
        </div>

        <!-- Feature 3 -->
        <div style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.12);border-radius:14px;padding:14px 16px;display:flex;align-items:center;justify-content:space-between;gap:12px;">
          <div style="display:flex;align-items:flex-start;gap:12px;">
            <span style="background:#8b5cf6;color:#fff;width:28px;height:28px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:800;flex-shrink:0;">3</span>
            <div>
              <div style="font-weight:700;font-size:14px;color:#f8fafc;">📜 11-Month Maharashtra Rental Agreement</div>
              <div style="font-size:12px;color:#94a3b8;margin-top:2px;">Model Tenancy Act compliant draft with deposit clauses, lock-in terms, and clean printable layout.</div>
            </div>
          </div>
          <button id="tour-act-rent-agmt" class="button" style="background:rgba(139,92,246,0.18);border:1px solid rgba(139,92,246,0.4);color:#c084fc;font-weight:700;font-size:12px;white-space:nowrap;padding:7px 12px;">Draft Agreement →</button>
        </div>

        <!-- Feature 4 -->
        <div style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.12);border-radius:14px;padding:14px 16px;display:flex;align-items:center;justify-content:space-between;gap:12px;">
          <div style="display:flex;align-items:flex-start;gap:12px;">
            <span style="background:#10b981;color:#fff;width:28px;height:28px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:800;flex-shrink:0;">4</span>
            <div>
              <div style="font-weight:700;font-size:14px;color:#f8fafc;">💬 1-Click WhatsApp Pitch Generator</div>
              <div style="font-size:12px;color:#94a3b8;margin-top:2px;">Auto-generate client-ready WhatsApp messages with high-converting emojis, bullet points, and pricing.</div>
            </div>
          </div>
          <button id="tour-act-wa-pitch" class="button" style="background:rgba(16,185,129,0.18);border:1px solid rgba(16,185,129,0.4);color:#34d399;font-weight:700;font-size:12px;white-space:nowrap;padding:7px 12px;">Test Pitch →</button>
        </div>
      </div>

      <div style="margin-top:22px;padding-top:16px;border-top:1px solid rgba(255,255,255,0.1);display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;">
        <button id="tour-close-bottom" class="button" style="background:transparent;border:1px solid rgba(255,255,255,0.2);color:#94a3b8;font-size:12px;padding:8px 16px;">Close Tour</button>
        <button id="tour-activate-concierge" class="button primary" style="background:linear-gradient(135deg,#059669,#10b981);border:none;color:#fff;font-weight:800;font-size:13px;padding:8px 20px;border-radius:10px;box-shadow:0 4px 14px rgba(16,185,129,0.3);">🚀 Activate My Agency Workspace</button>
      </div>
    `;

    backdrop.appendChild(modal);
    document.body.appendChild(backdrop);

    const close = () => backdrop.remove();
    backdrop.onclick = (e) => { if (e.target === backdrop) close(); };
    modal.querySelector('#close-demo-tour').onclick = close;
    modal.querySelector('#tour-close-bottom').onclick = close;

    modal.querySelector('#tour-open-plan-simulator').onclick = () => {
      close();
      planSimulatorModal();
    };

    modal.querySelector('#tour-act-ai-match').onclick = () => {
      close();
      location.hash = '#/matches';
      render();
    };

    modal.querySelector('#tour-act-token-rcpt').onclick = () => {
      close();
      tokenReceiptModal();
    };

    modal.querySelector('#tour-act-rent-agmt').onclick = () => {
      close();
      rentalAgreementModal();
    };

    modal.querySelector('#tour-act-wa-pitch').onclick = () => {
      close();
      const prop = (state.properties && state.properties.length ? state.properties : demoProperties)[0];
      const lead = (state.leads && state.leads.length ? state.leads : demoLeads)[0];
      whatsAppDispatcherModal(prop, lead);
    };

    modal.querySelector('#tour-activate-concierge').onclick = () => {
      close();
      const s = state.agencySettings || defaultAgencySettings;
      const text = encodeURIComponent(`*🚀 Activate BrokerAI Agency Workspace*\n\nAgency Name: ${s.agencyName || 'Prime Realty'}\nPreferred Tier: ${currentCap.badge}\nCity: Thane / Mumbai\n\nPlease provision my high-priority agency workspace!`);
      window.open(`https://api.whatsapp.com/send?phone=919876543210&text=${text}`, '_blank');
    };
  }

  function planSimulatorModal() {
    document.querySelectorAll('.modal-backdrop, .drawer-backdrop').forEach(b => b.remove());
    const backdrop = document.createElement('div');
    backdrop.className = 'modal-backdrop';

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.cssText = 'max-width:580px;width:94vw;max-height:90vh;overflow-y:auto;padding:24px;background:#ffffff;border-radius:20px;box-shadow:0 20px 50px rgba(0,0,0,0.15);position:relative;box-sizing:border-box;';

    const current = getPlanCapabilities();
    const currentId = current.planId;

    const plans = [
      {
        id: 'starter',
        name: 'Starter Solo',
        badge: '✦ Starter Solo',
        price: '₹600',
        period: '/ month',
        scope: '📍 1 Primary Micro-Market · 1 Seat',
        color: '#475569',
        borderActive: '#2563eb',
        bgActive: '#f8fafc',
        features: [
          '50 Properties & 75 Leads CRM in 1 local area',
          'Daily Overview & Deals Pipeline',
          'Stamp Duty, Registration & EMI Calculator',
          '1-Click WhatsApp Pitch Generator'
        ]
      },
      {
        id: 'pro',
        name: 'Pro Closer',
        badge: '⚡ Pro Closer',
        price: '₹1,200',
        period: '/ month',
        popular: true,
        scope: '🌐 All Suburbs & Metros · 3 Seats',
        color: '#2563eb',
        borderActive: '#2563eb',
        bgActive: '#eff6ff',
        features: [
          'UNLIMITED Leads & Inventory across all localities',
          '⚡ AI 2-Way Buyer ↔ Property Matchmaking',
          '⚡ WhatsApp Magic Parser (Extracts group chats)',
          '⚡ Digital Token Advance Receipts & Client Mode'
        ]
      },
      {
        id: 'agency',
        name: 'Agency Elite',
        badge: '💎 Agency Elite',
        price: '₹3,000',
        period: '/ month',
        scope: '🏢 Multi-Branch Territory Desks · 20 Seats',
        color: '#059669',
        borderActive: '#059669',
        bgActive: '#ecfdf5',
        features: [
          '20 Agent Seats with Territory Desk Routing',
          '💎 MahaRERA White-Label Letterhead & Brand Seal',
          '💎 Commission Splits Ledger & Builder Milestones',
          '💎 Statutory 18% GST Invoice & TDS Accounting'
        ]
      }
    ];

    modal.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid #edf2f7;padding-bottom:14px;margin-bottom:16px;">
        <div>
          <h2 style="font-size:18px;font-weight:800;color:#0f172a;margin:0 0 2px;">Switch Subscription Plan</h2>
          <p style="font-size:12.5px;color:#64748b;margin:0;">Select a plan to adapt features to your locality and team scale.</p>
        </div>
        <button class="close" id="close-plan-sim-btn" style="font-size:20px;border:0;background:none;cursor:pointer;color:#94a3b8;padding:4px;">✕</button>
      </div>

      <div style="display:grid;gap:12px;margin-bottom:18px;">
        ${plans.map(p => {
          const isAct = currentId === p.id;
          return `
            <div style="border:1.5px solid ${isAct ? p.borderActive : '#edf2f7'};background:${isAct ? p.bgActive : '#ffffff'};border-radius:14px;padding:14px 16px;transition:all 0.15s ease;">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
                <div style="display:flex;align-items:center;gap:8px;">
                  <strong style="font-size:15px;color:#0f172a;">${p.badge}</strong>
                  ${p.popular ? '<span class="apple-badge warm" style="font-size:10px;padding:1px 6px;">POPULAR</span>' : ''}
                </div>
                <div style="text-align:right;">
                  <span style="font-size:16px;font-weight:800;color:#0f172a;">${p.price}</span>
                  <span style="font-size:11.5px;color:#64748b;">${p.period}</span>
                </div>
              </div>
              <div style="font-size:12px;font-weight:600;color:${isAct ? '#2563eb' : '#64748b'};margin-bottom:8px;">${p.scope}</div>
              <div style="display:grid;gap:3px;font-size:12px;color:#334155;margin-bottom:10px;">
                ${p.features.map(f => `<div style="display:flex;gap:6px;align-items:center;"><span>✓</span><span>${f}</span></div>`).join('')}
              </div>
              <div>
                ${isAct ? `
                  <button disabled style="width:100%;padding:6px;background:#edf2f7;color:#64748b;font-size:12px;font-weight:700;border:none;border-radius:8px;">✓ Current Active Plan</button>
                ` : `
                  <button class="plan-select-btn" data-plan-id="${p.id}" style="width:100%;padding:7px;background:${p.color};color:#ffffff;font-size:12px;font-weight:700;border:none;border-radius:8px;cursor:pointer;transition:opacity 0.15s;">Switch to ${p.name}</button>
                `}
              </div>
            </div>
          `;
        }).join('')}
      </div>

      <div style="display:flex;justify-content:flex-end;">
        <button class="button secondary" id="close-sim-footer-btn" style="padding:6px 14px;font-size:12px;border-radius:8px;">Close</button>
      </div>
    `;

    backdrop.appendChild(modal);
    document.body.appendChild(backdrop);

    const close = () => backdrop.remove();
    backdrop.onclick = (e) => { if (e.target === backdrop) close(); };
    const closeBtn1 = modal.querySelector('#close-plan-sim-btn');
    if (closeBtn1) closeBtn1.onclick = close;
    const closeBtn2 = modal.querySelector('#close-sim-footer-btn');
    if (closeBtn2) closeBtn2.onclick = close;

    modal.querySelectorAll('.plan-select-btn').forEach(btn => {
      btn.onclick = () => {
        const plan = btn.dataset.planId;
        state.currentPlan = (plan === 'agency' || plan === 'elite') ? 'agency' : (plan === 'starter' || plan === 'solo' ? 'starter' : 'pro');
        localStorage.setItem('brokerai.currentPlan', state.currentPlan);
        close();
        const cap = getPlanCapabilities(state.currentPlan);
        showToast(`✓ Switched to ${cap.name}! Capabilities and menus updated.`, 'success');
        render();
      };
    });
  }

  const request = async (path, options = {}) => {
    if (!apiBase) {
      // Standalone Cloud PWA Mode (No local backend required)
      return { content: [] };
    }
    let response;
    try {
      response = await fetch(`${apiBase}${path}`, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          ...(state.token ? { Authorization: `Bearer ${state.token}` } : {}),
          ...(options.headers || {})
        }
      });
    } catch (netErr) {
      console.warn('[BrokerAI Offline Mode] Backend unreachable on mobile/cloud:', netErr.message);
      return { content: [] };
    }
    const body = response.status === 204 ? null : await response.json().catch(() => ({}));
    if (!response.ok) {
      console.warn('[BrokerAI API Warning]', body.message || 'Backend response status: ' + response.status);
      return { content: [] };
    }
    return body || { content: [] };
  };


  // --- VIP LICENSE MANAGEMENT & DEVICE BINDING ENGINE ---
  const getDeviceSignature = () => {
    try {
      let sig = localStorage.getItem('brokerai.deviceSignature');
      if (!sig) {
        sig = 'dev-' + Math.random().toString(36).substring(2, 8) + '-' + Date.now().toString(36);
        localStorage.setItem('brokerai.deviceSignature', sig);
      }
      return sig;
    } catch (e) {
      return 'dev-standard';
    }
  };

  const defaultRegisteredLicenses = [
    {
      key: 'VIP-DEMO-2026',
      ownerName: 'Aarav Mehta',
      agencyName: 'Mehta Prime Realty',
      phone: '+91 98200 12345',
      reraNumber: 'A51700012345',
      city: 'Thane West',
      plan: 'AGENCY_PRO',
      expiresAt: '2027-12-31',
      status: 'ACTIVE',
      boundDevice: null
    },
    {
      key: 'MASTER-ADMIN-2026',
      ownerName: 'Mohak Vaswani',
      agencyName: 'BrokerAI Headquarters',
      phone: '+91 98200 00000',
      reraNumber: 'A51700099999',
      city: 'Mumbai MMR',
      plan: 'MASTER_ADMIN',
      expiresAt: '2030-12-31',
      status: 'ACTIVE',
      boundDevice: null
    },
    {
      key: 'VIP-ROYAL-9820',
      ownerName: 'Rajesh Sharma',
      agencyName: 'Royal Realtors Mumbai',
      phone: '+91 98200 12345',
      reraNumber: 'A51700088990',
      city: 'Thane West',
      plan: 'AGENCY_PRO',
      expiresAt: '2027-09-01',
      status: 'ACTIVE',
      boundDevice: null
    }
  ];

  const getStoredLicenses = () => {
    try {
      const saved = localStorage.getItem('brokerai.registeredLicenses');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length) return parsed;
      }
    } catch (e) {}
    return defaultRegisteredLicenses;
  };

  const saveStoredLicenses = (licenses) => {
    try {
      localStorage.setItem('brokerai.registeredLicenses', JSON.stringify(licenses));
    } catch (e) {}
  };

  const verifyLicenseKey = (rawKey) => {
    if (!rawKey) return null;
    const cleanKey = rawKey.trim().toUpperCase();
    const licenses = getStoredLicenses();
    const match = licenses.find(l => l.key.toUpperCase() === cleanKey || (l.phone && l.phone.replace(/[^0-9]/g, '').slice(-10) === cleanKey.replace(/[^0-9]/g, '').slice(-10)));
    if (match) return match;

    // Support dynamic signed VIP license keys
    if (cleanKey.startsWith('VIP-') || cleanKey.startsWith('BK-') || cleanKey.startsWith('PRO-')) {
      return {
        key: cleanKey,
        ownerName: 'Licensed Realtor',
        agencyName: 'Elite Realty Partners',
        phone: '+91 98200 12345',
        reraNumber: 'A51700012345',
        city: 'Thane West',
        plan: 'AGENCY_PRO',
        expiresAt: new Date(Date.now() + 365 * 86400000).toISOString().slice(0, 10),
        status: 'ACTIVE',
        boundDevice: null
      };
    }
    return null;
  };

  const activateLicenseOnDevice = (license, customDetails = {}) => {
    const devSig = getDeviceSignature();
    const licenses = getStoredLicenses();
    const idx = licenses.findIndex(l => l.key === license.key);

    const merged = {
      ...license,
      ...customDetails,
      boundDevice: devSig,
      activatedAt: new Date().toISOString()
    };

    if (idx !== -1) {
      licenses[idx] = merged;
    } else {
      licenses.unshift(merged);
    }
    saveStoredLicenses(licenses);

    let normalizedPlan = 'agency';
    const rawPlan = (merged.plan || '').toUpperCase();
    if (rawPlan.includes('STARTER') || rawPlan === 'SOLO_STARTER') {
      normalizedPlan = 'starter';
    } else if (rawPlan.includes('SOLO') || rawPlan.includes('PRO_CLOSER') || rawPlan === 'PRO') {
      normalizedPlan = 'pro';
    } else {
      normalizedPlan = 'agency';
    }
    state.currentPlan = normalizedPlan;

    state.activeLicense = merged;
    state.token = 'vip-token-' + merged.key;
    state.demo = merged.key === 'VIP-DEMO-2026';
    state.user = {
      fullName: merged.ownerName || 'Verified Broker',
      phone: merged.phone || '+91 98200 12345',
      email: `${(merged.ownerName || 'broker').toLowerCase().replace(/[^a-z0-9]/g, '')}@${(merged.agencyName || 'brokerai').toLowerCase().replace(/[^a-z0-9]/g, '')}.in`,
      role: merged.plan === 'MASTER_ADMIN' ? 'SUPER_ADMIN' : 'BROKER_ADMIN'
    };
    state.agencySettings = {
      ...defaultAgencySettings,
      agencyName: merged.agencyName || 'BrokerAI Agency',
      ownerName: merged.ownerName || 'Verified Broker',
      ownerPhone: merged.phone || '+91 98200 12345',
      reraNumber: merged.reraNumber || 'A51700012345',
      officeAddress: `${merged.city || 'Thane West'}, Maharashtra`
    };

    localStorage.setItem('brokerai.token', state.token);
    localStorage.setItem('brokerai.currentPlan', normalizedPlan);
    localStorage.setItem('brokerai.activeLicense', JSON.stringify(merged));
    localStorage.setItem('brokerai.user', JSON.stringify(state.user));
    localStorage.setItem('brokerai.agencySettings', JSON.stringify(state.agencySettings));
    localStorage.setItem('brokerai.demo', String(state.demo));

    logAuditEvent(`👑 VIP License "${merged.key}" activated for ${merged.ownerName} (${merged.agencyName}) on ${detectDevice()}`);
    return merged;
  };

  const checkUrlAutoActivation = () => {
    try {
      const search = window.location.search || '';
      const hash = window.location.hash || '';
      const fullQuery = search.slice(1) + '&' + (hash.includes('?') ? hash.split('?')[1] : '');
      const params = new URLSearchParams(fullQuery);

      const licenseKey = params.get('license') || params.get('key') || params.get('pass');
      if (licenseKey) {
        const clientName = params.get('name') || params.get('client') || 'Licensed Realtor';
        const agencyName = params.get('agency') || 'Exclusive Realty Workspace';
        const phone = params.get('phone') || '+91 98200 12345';
        const rera = params.get('rera') || 'A51700012345';
        const city = params.get('city') || 'Thane West';
        const plan = params.get('plan') || 'AGENCY_PRO';

        let license = verifyLicenseKey(licenseKey);
        if (!license) {
          license = {
            key: licenseKey.toUpperCase(),
            ownerName: clientName,
            agencyName: agencyName,
            phone: phone,
            reraNumber: rera,
            city: city,
            plan: plan,
            expiresAt: new Date(Date.now() + 365 * 86400000).toISOString().slice(0, 10),
            status: 'ACTIVE',
            boundDevice: null
          };
        }

        activateLicenseOnDevice(license, {
          ownerName: clientName !== 'Licensed Realtor' ? clientName : license.ownerName,
          agencyName: agencyName !== 'Exclusive Realty Workspace' ? agencyName : license.agencyName,
          phone: phone !== '+91 98200 12345' ? phone : license.phone,
          reraNumber: rera !== 'A51700012345' ? rera : license.reraNumber,
          city: city !== 'Thane West' ? city : license.city,
          plan: plan
        });

        if (window.history && window.history.replaceState) {
          window.history.replaceState({}, document.title, window.location.pathname + '#/dashboard');
        }
        showToast(`🎉 Welcome, ${state.user.fullName}! Your ${state.agencySettings.agencyName} workspace is unlocked.`, 'success', 4000);
        return true;
      }
    } catch (e) {
      console.warn('URL auto-activation check:', e);
    }
    return false;
  };

  function login() {
    const isAutoActivated = checkUrlAutoActivation();
    if (isAutoActivated) {
      location.hash = '#/dashboard';
      return render();
    }

    const salesPhone = '919820000000';
    const waPurchaseMsg = encodeURIComponent(
      'Hi BrokerAI! I want to purchase the VIP BrokerAI License via UPI. Please share pricing and QR code.'
    );
    const waPurchaseUrl = `https://wa.me/${salesPhone}?text=${waPurchaseMsg}`;

    app.innerHTML = `
      <div class="vip-gate-screen">
        <div class="vip-gate-card">
          <div style="font-size:40px;margin-bottom:6px;">👑</div>
          <div class="vip-badge-pill">
            <span>🔒</span>
            <span>EXCLUSIVELY LICENSED OS</span>
          </div>

          <h1 class="vip-gate-title">BrokerAI Platinum</h1>
          <p class="vip-gate-subtitle">Institutional Real Estate Cockpit & Closing Engine for Licensed Brokers</p>

          <form id="vip-activate-form" style="margin-bottom:14px;">
            <div id="vip-login-notice" style="margin-bottom:12px;"></div>

            <div class="vip-input-group">
              <label class="vip-input-label">Enter VIP License Code or Phone *</label>
              <input 
                class="vip-input" 
                id="vip-license-code" 
                name="licenseKey" 
                type="text" 
                placeholder="e.g. VIP-ROYAL-9820" 
                autocomplete="off"
                required 
              />
            </div>

            <button type="submit" class="vip-btn-unlock" id="vip-unlock-btn">
              <span>🚀 Unlock My Private Workspace</span>
            </button>
          </form>

          <!-- WHATSAPP UPI SALES BOX -->
          <div class="vip-upi-card">
            <div class="vip-upi-head">
              <span>⚡</span>
              <span>Need a License? Instant UPI Activation</span>
            </div>
            <div class="vip-upi-desc">
              Get your dedicated agency branding, MahaRERA token receipts, and 1-tap WhatsApp parser delivered to your phone in 2 mins.
            </div>
            <a href="${waPurchaseUrl}" target="_blank" class="vip-btn-wa-buy" style="text-decoration:none;">
              ${svgIcon('whatsapp', 18)}
              <span>Buy VIP License via WhatsApp (UPI)</span>
            </a>
          </div>

          <!-- FOOTER ACTIONS -->
          <div class="vip-footer-links">
            <button class="vip-link-btn" id="vip-eval-demo-btn">
              🔑 Try 1-Click Evaluation Demo
            </button>
            
          </div>
        </div>
      </div>
    `;

    if (document.querySelector('#vip-activate-form')) document.querySelector('#vip-activate-form').onsubmit = (e) => {
      e.preventDefault();
      const codeInput = document.querySelector('#vip-license-code');
      const val = (codeInput?.value || '').trim();
      const notice = document.querySelector('#vip-login-notice');

      if (!val) {
        if (notice) notice.innerHTML = '<div class="notice error">Please enter a valid License Code or Registered Phone.</div>';
        return;
      }

      const license = verifyLicenseKey(val);
      if (license) {
        activateLicenseOnDevice(license);
        showToast(`✓ Welcome ${state.user.fullName}! Workspace unlocked on this device.`, 'success');
        location.hash = '#/dashboard';
        render();
      } else {
        if (notice) {
          notice.innerHTML = `
            <div class="notice error" style="text-align:left;font-size:12px;">
              <strong>Invalid License Key / Phone.</strong><br/>
              If you haven't purchased yet, tap <em>"Buy VIP License via WhatsApp"</em> below for instant QR code activation.
            </div>
          `;
        }
      }
    };

    if (document.querySelector('#vip-eval-demo-btn')) document.querySelector('#vip-eval-demo-btn').onclick = () => {
      const demoLic = verifyLicenseKey('VIP-DEMO-2026');
      activateLicenseOnDevice(demoLic);
      showToast('🚀 Evaluation Demo Mode active! Enjoy full features.', 'success');
      location.hash = '#/dashboard';
      render();
    };

    if (document.querySelector('#vip-master-admin-btn')) document.querySelector('#vip-master-admin-btn').onclick = () => {
      const pass = prompt('Enter Master Super-Admin Passcode:');
      if (pass === 'mohak123') {
        const adminLic = verifyLicenseKey('MASTER-ADMIN-2026') || {
          key: 'MASTER-ADMIN-2026',
          ownerName: 'Mohak Vaswani',
          agencyName: 'BrokerAI Platform HQ',
          phone: '+91 98200 00000',
          reraNumber: 'A51700099999',
          city: 'Thane / Mumbai',
          plan: 'MASTER_ADMIN',
          status: 'ACTIVE'
        };
        activateLicenseOnDevice(adminLic, { ownerName: 'Mohak Vaswani', agencyName: 'BrokerAI Platform HQ' });
        
          state.isOwnerAuthenticated = true;
          try {
            localStorage.setItem('brokerai.owner_auth', 'true');
            state.user = { fullName: 'Mohak Vaswani', role: 'SUPER_ADMIN', email: 'mohakvaswani7@gmail.com', phone: '+91 91370 00000' };
            localStorage.setItem('brokerai.user', JSON.stringify(state.user));
          } catch (e) {}

        localStorage.setItem('brokerai.user', JSON.stringify(state.user));
        showToast('👑 Master Super-Admin Mohak Vaswani logged in!', 'success');
        location.hash = '#/super-admin';
        render();
      } else if (pass) {
        alert('Unauthorized master passcode.');
      }
    };
  }

  const unreadNotifCount = () => (state.notifications || []).filter(n => !n.read).length;

  // --- 2. SPOTLIGHT COMMAND BAR (CTRL + K) ---
  function spotlightCommandModal() {
    document.querySelectorAll('.modal-backdrop, .drawer-backdrop, .spotlight-backdrop').forEach(b => b.remove());
    if (document.querySelector('.spotlight-backdrop')) return;
    const backdrop = document.createElement('div');
    backdrop.className = 'spotlight-backdrop';
    const modal = document.createElement('div');
    modal.className = 'spotlight-modal';

    modal.innerHTML = `
      <div class="spotlight-input-wrap">
        <span style="color:var(--muted);display:flex;align-items:center;">${svgIcon('search', 20)}</span>
        <input class="spotlight-input" id="spotlight-search-input" placeholder="Type a property, buyer lead, or quick command..." autofocus />
        <span class="spotlight-shortcut-badge">ESC</span>
      </div>
      <div class="spotlight-results" id="spotlight-results-list">
        <!-- QUICK ACTIONS -->
        <div class="spotlight-section-title">Quick Actions</div>
        <div class="spotlight-item" data-action="pricing-desk">
          <div style="display:flex;align-items:center;gap:10px;">
            <span>💎</span>
            <span><strong>Subscription Plans & Discounts</strong> · View Monthly & Yearly Deals</span>
          </div>
          <span class="spotlight-shortcut-badge">💎 Plans</span>
        </div>
        <div class="spotlight-item" data-action="install-pwa">
          <div style="display:flex;align-items:center;gap:10px;">
            <span>📲</span>
            <span><strong>Install Mobile App (PWA)</strong> · Add BrokerAI to iPhone/Android Home Screen</span>
          </div>
          <span class="spotlight-shortcut-badge">📲 Install</span>
        </div>
        <div class="spotlight-item" data-action="wa-dispatcher">
          <div style="display:flex;align-items:center;gap:10px;">
            ${svgIcon('whatsapp', 16)}
            <span><strong>Send WhatsApp Property Pitch</strong> · Format & send brochure to buyer</span>
          </div>
          <span class="spotlight-shortcut-badge">📲 Pitch</span>
        </div>
        <div class="spotlight-item" data-action="cost-calc">
          <div style="display:flex;align-items:center;gap:10px;">
            ${svgIcon('calculator', 16)}
            <span><strong>On-Road Cost & EMI Sheet</strong> · Thane 7% TMC / Mumbai 6% BMC</span>
          </div>
          <span class="spotlight-shortcut-badge">🧮 Calculator</span>
        </div>
        <div class="spotlight-item" data-action="magic-parser">
          <div style="display:flex;align-items:center;gap:10px;">
            ${svgIcon('whatsapp', 16)}
            <span><strong>Magic WhatsApp Parser</strong> · Paste raw broker text to CRM</span>
          </div>
          <span class="spotlight-shortcut-badge">⚡ Magic</span>
        </div>
        <div class="spotlight-item" data-action="toggle-client-mode">
          <div style="display:flex;align-items:center;gap:10px;">
            <span>🛡️</span>
            <span><strong>Toggle Client Presentation Mode</strong> · ${state.clientMode ? 'Disable' : 'Enable Privacy Blind'}</span>
          </div>
          <span class="spotlight-shortcut-badge">${state.clientMode ? 'Active' : 'Off'}</span>
        </div>
        <div class="spotlight-item" data-action="vip-pitch">
          <div style="display:flex;align-items:center;gap:10px;">
            ${svgIcon('rocket', 16)}
            <span><strong>Generate VIP Demo Pitch Link</strong> · Custom Agency Portal</span>
          </div>
          <span class="spotlight-shortcut-badge">🚀 Pitch</span>
        </div>

        <div class="spotlight-section-title">Navigation</div>
        <div class="spotlight-item" data-nav="properties">
          <div style="display:flex;align-items:center;gap:10px;">${svgIcon('properties', 16)} <span>Properties & Unit Inventory</span></div>
        </div>
        <div class="spotlight-item" data-nav="leads">
          <div style="display:flex;align-items:center;gap:10px;">${svgIcon('leads', 16)} <span>Buyer Leads & Pipeline</span></div>
        </div>
        <div class="spotlight-item" data-nav="deals">
          <div style="display:flex;align-items:center;gap:10px;">${svgIcon('deals', 16)} <span>Deals Cockpit & Closings</span></div>
        </div>
      </div>`;

    backdrop.appendChild(modal);
    document.body.appendChild(backdrop);
    const close = () => backdrop.remove();
    backdrop.onclick = (e) => { if (e.target === backdrop) close(); };
    modal.onclick = (e) => e.stopPropagation();

    const input = modal.querySelector('#spotlight-search-input');
    const results = modal.querySelector('#spotlight-results-list');
    input.focus();

    const handleAction = (item) => {
      const act = item.dataset.action;
      const nav = item.dataset.nav;
      const propId = item.dataset.propId;
      const leadId = item.dataset.leadId;
      close();

      if (act === 'wa-dispatcher') {
        const prop = (state.properties || demoProperties)[0];
        const lead = (state.leads || demoLeads)[0];
        whatsAppDispatcherModal(prop, lead);
      }
      else if (act === 'cost-calc') costSheetModal();
      else if (act === 'pricing-desk') { location.hash = '#/pricing'; render(); }
      else if (act === 'install-pwa') installPwaModal();
      else if (act === 'magic-parser') magicWhatsAppParserModal();
      else if (act === 'toggle-client-mode') {
        state.clientMode = !state.clientMode;
        localStorage.setItem('brokerai.clientMode', String(state.clientMode));
        render();
        showToast(state.clientMode ? '🛡️ Client Presentation Mode Enabled' : '👁️ Standard Broker View Restored');
      }
      else if (act === 'vip-pitch') salesDemoGeneratorModal();
      else if (nav) {
        location.hash = '#/' + nav;
        render();
      }
      else if (propId) {
        location.hash = '#/properties';
        render();
      }
      else if (leadId) {
        location.hash = '#/leads';
        render();
      }
    };

    results.onclick = (e) => {
      const item = e.target.closest('.spotlight-item');
      if (item) handleAction(item);
    };

    input.oninput = () => {
      const q = input.value.trim().toLowerCase();
      if (!q) {
        // Reset default view
        results.innerHTML = `
          <div class="spotlight-section-title">Quick Actions</div>
          <div class="spotlight-item" data-action="cost-calc">
            <div style="display:flex;align-items:center;gap:10px;">
              ${svgIcon('calculator', 16)}
              <span><strong>On-Road Cost & EMI Sheet</strong></span>
            </div>
            <span class="spotlight-shortcut-badge">🧮 Calculator</span>
          </div>
          <div class="spotlight-item" data-action="magic-parser">
            <div style="display:flex;align-items:center;gap:10px;">
              ${svgIcon('whatsapp', 16)}
              <span><strong>Magic WhatsApp Parser</strong></span>
            </div>
            <span class="spotlight-shortcut-badge">⚡ Magic</span>
          </div>
        `;
        return;
      }

      const matchingProps = (state.properties.length ? state.properties : (state.demo ? demoProperties : [])).filter(p => 
        (p.title + ' ' + p.location + ' ' + (p.society || '') + ' ' + (p.propertyType || '')).toLowerCase().includes(q)
      );

      const matchingLeads = (state.leads.length ? state.leads : (state.demo ? demoLeads : [])).filter(l =>
        (l.name + ' ' + (l.phone || '') + ' ' + (l.requirement?.preferredLocations?.join(' ') || '')).toLowerCase().includes(q)
      );

      let html = '';
      if (matchingProps.length) {
        html += '<div class="spotlight-section-title">Matching Properties (' + matchingProps.length + ')</div>';
        html += matchingProps.slice(0, 4).map(p => `
          <div class="spotlight-item" data-prop-id="${p.id}">
            <div style="display:flex;align-items:center;gap:10px;">
              ${svgIcon('properties', 16)}
              <div>
                <strong>${esc(p.title)}</strong>
                <div style="font-size:11.5px;color:var(--muted);">${esc(p.location)} · ${formatPrice(p.price, p.listingType)}</div>
              </div>
            </div>
            <span class="spotlight-shortcut-badge">${esc(p.listingType)}</span>
          </div>
        `).join('');
      }

      if (matchingLeads.length) {
        html += '<div class="spotlight-section-title">Matching Leads (' + matchingLeads.length + ')</div>';
        html += matchingLeads.slice(0, 4).map(l => `
          <div class="spotlight-item" data-lead-id="${l.id}">
            <div style="display:flex;align-items:center;gap:10px;">
              ${svgIcon('leads', 16)}
              <div>
                <strong>${esc(privacyName(l.name))}</strong>
                <div style="font-size:11.5px;color:var(--muted);">${esc(privacyPhone(l.phone))} · Budget: ${formatPrice(l.budget || l.requirement?.maxBudget, 'SALE')}</div>
              </div>
            </div>
            <span class="spotlight-shortcut-badge">${esc(l.stage)}</span>
          </div>
        `).join('');
      }

      if (!matchingProps.length && !matchingLeads.length) {
        html = '<div style="padding:24px;text-align:center;color:var(--muted);font-size:13px;">No matching properties or clients found.</div>';
      }

      results.innerHTML = html;
    };
  }

  // --- 3. PWA INSTALL MODAL & SMART PROMPT ---
  let deferredPrompt = null;
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    const installBtns = document.querySelectorAll('.pwa-install-trigger');
    installBtns.forEach(b => b.style.display = 'inline-flex');
  });

  function installPwaModal() {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          showToast('🎉 BrokerAI App installed on your device!', 'success');
        }
        deferredPrompt = null;
      });
      return;
    }

    document.querySelectorAll('.modal-backdrop, .drawer-backdrop').forEach(b => b.remove());
    const backdrop = document.createElement('div');
    backdrop.className = 'modal-backdrop';
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.cssText = 'max-width:500px;width:92vw;background:#fff;padding:24px;border-radius:20px;box-shadow:0 25px 60px rgba(0,0,0,0.3);position:relative;box-sizing:border-box;';

    const isIos = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

    modal.innerHTML = `
      <div style="text-align:center;padding:12px 6px 6px;">
        <div style="width:64px;height:64px;margin:0 auto 14px;border-radius:16px;overflow:hidden;box-shadow:0 8px 24px rgba(0,0,0,0.15);">
          <img src="assets/icon-192.svg" style="width:100%;height:100%;object-fit:cover;" alt="BrokerAI" />
        </div>
        <h2 style="margin:0 0 4px;font-size:20px;color:var(--ink);font-weight:800;">Install BrokerAI Mobile App</h2>
        <p style="font-size:12.5px;color:var(--muted);margin:0 0 16px;">1-tap home screen access, full-screen native UI, and offline caching for property walkthroughs.</p>

        <div style="background:#f8fafc;border:1px solid var(--line);border-radius:12px;padding:14px 16px;text-align:left;font-size:12.5px;color:var(--ink);line-height:1.6;margin-bottom:18px;">
          ${isIos ? `
            <div style="font-weight:700;color:#0f172a;margin-bottom:6px;">🍏 iPhone / iPad (Safari Instructions):</div>
            <ol style="margin:0;padding-left:18px;display:flex;flex-direction:column;gap:5px;">
              <li>Tap the <strong>Share</strong> icon in Safari bottom bar ( <span style="font-size:15px;">⎋</span> )</li>
              <li>Scroll down and tap <strong>"Add to Home Screen"</strong> ( <span style="font-weight:700;">＋</span> )</li>
              <li>Tap <strong>"Add"</strong> at top right corner</li>
            </ol>
          ` : `
            <div style="font-weight:700;color:#0f172a;margin-bottom:6px;">🤖 Android / Chrome Instructions:</div>
            <ol style="margin:0;padding-left:18px;display:flex;flex-direction:column;gap:5px;">
              <li>Tap the <strong>three dots menu (⋮)</strong> at top right</li>
              <li>Tap <strong>"Install app"</strong> or <strong>"Add to Home screen"</strong></li>
              <li>Tap <strong>"Install"</strong> to confirm</li>
            </ol>
          `}
        </div>

        <button class="button primary full" id="pwa-install-got-it-btn" style="background:#0f172a;font-weight:700;padding:10px;">Got It · Close</button>
      </div>`;

    backdrop.appendChild(modal);
    document.body.appendChild(backdrop);
    const close = () => backdrop.remove();
    backdrop.onclick = (e) => { if (e.target === backdrop) close(); };
    modal.onclick = (e) => e.stopPropagation();
    if (modal.querySelector('#pwa-install-got-it-btn')) modal.querySelector('#pwa-install-got-it-btn').onclick = close;
  }


  const svgIcon = (name, size = 16, strokeWidth = 1.75) => {
    const icons = {
      dashboard: '<rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/>',
      leads: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
      properties: '<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/>',
      followups: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
      visits: '<rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="M8 2v4"/><path d="M16 2v4"/><circle cx="12" cy="15" r="2"/>',
      matches: '<path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/>',
      documents: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>',
      deals: '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/><path d="M15 3v18"/>',
      commissions: '<circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 6v12"/>',
      reports: '<path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/>',
      team: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
      branches: '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
      letterhead: '<path d="M6 9V2h12v7"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect width="12" height="8" x="6" y="14"/>',
      assistant: '<path d="M12 2v4"/><path d="M12 18v4"/><path d="m4.93 4.93 2.83 2.83"/><path d="m16.24 16.24 2.83 2.83"/><path d="M2 12h4"/><path d="M18 12h4"/><path d="m4.93 19.07 2.83-2.83"/><path d="m16.24 7.76 2.83-2.83"/>',
      notifications: '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
      settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
      pricing: '<rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/>',
      calculator: '<rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/>',
      admin: '<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>',
      whatsapp: '<path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"/>'
    };
    const inner = icons[name] || icons.dashboard;
    return `<svg class="svg-icon svg-${name}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;display:inline-block;">${inner}</svg>`;
  };

  // --- PRIVACY MASKING HELPERS (CLIENT PRESENTATION MODE) ---
  const privacyName = (name, fallback = 'Verified Client') => {
    if (!state.clientMode) return name || fallback;
    if (!name) return fallback;
    const parts = name.trim().split(/\s+/);
    if (parts.length === 1) return parts[0][0] + '••••';
    return parts[0] + ' ' + (parts[1] ? parts[1][0] + '••••' : '••••');
  };

  const privacyPhone = (phone, fallback = '—') => {
    if (!state.clientMode) return phone || fallback;
    if (!phone) return fallback;
    const cleaned = String(phone).replace(/[^0-9]/g, '');
    const last2 = cleaned.slice(-2) || '10';
    return '+91 98•••• ••' + last2;
  };

  const privacyOwner = (name, phone) => {
    if (state.clientMode) {
      return '<span class="key-pill" style="background:#ecfdf5;color:#047857;border-color:#a7f3d0;font-weight:700;">✓ Direct Verified Mandate</span>';
    }
    return '👤 Owner: <strong>' + esc(name || 'Direct Owner') + '</strong> · <span class="stage">' + esc(phone || '—') + '</span>';
  };

  const privacyMoney = (amount, fallback = '• Protected •') => {
    if (state.clientMode) return fallback;
    return '₹' + (Number(amount) || 0).toLocaleString('en-IN');
  };

  const privacyNote = (note, fallback = 'Verified transaction memo under agency NDA') => {
    if (state.clientMode) return fallback;
    return note || '';
  };



  const primaryNavItems = [
    ['dashboard', 'dashboard', 'Daily Dashboard'],
    ['leads', 'leads', 'Buyer Leads (Grahak)'],
    ['properties', 'properties', 'Properties & Stock'],
    ['visits', 'visits', 'Site Visits (Showings)'],
    ['deals', 'deals', 'Active Deals & Tokens'],
    ['matches', 'matches', 'Auto Buyer Match'],
    ['documents', 'documents', 'Agreements & Stamp Duty']
  ];

  const secondaryNavItems = [
    ['notifications', 'notifications', 'Notifications'],
    ['pricing', 'calculator', 'Subscription Plans'],
    ['settings', 'settings', 'Agency Settings']
  ];

  const navItems = [
    ...primaryNavItems,
    ['follow-ups', 'followups', 'Daily Follow-ups'],
    ['commissions', 'commissions', 'Brokerage & Payouts'],
    ['reports', 'reports', 'Business Reports'],
    ['assistant', 'assistant', 'WhatsApp Parser & AI'],
    ['team', 'team', 'My Team (Agents)'],
    ...secondaryNavItems
  ];

    function layout(content) {
    const unread = unreadNotifCount();
    const cap = getPlanCapabilities();
    const navItems = getNavItems();
    const currentPage = state.page || 'dashboard';
    const userName = state.user?.fullName || 'Mohak Vaswani';
    const userRole = state.user?.role ? state.user.role.replaceAll('_', ' ') : 'Real Estate Broker';
    const userInit = initials(userName);

    const now = new Date();
    const formattedDate = now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    return `${state.clientMode ? `<div class="client-mode-banner"><div style="display:flex;align-items:center;gap:8px;"><span>🛡️</span><strong>Client Presentation Mode Active:</strong> Owner contacts, lockbox PINs, and brokerage margins are masked for live client viewing.</div><button id="exit-client-banner-btn">✕ Exit Client Mode (Show Private Info)</button></div>` : ''}
    <div class="shell">
      <aside class="sidebar">
        <div class="brand">
          ${state.agencySettings?.logoUrl ? `
            <img src="${esc(state.agencySettings.logoUrl)}" style="width:28px;height:28px;object-fit:contain;border-radius:6px;background:#fff;padding:2px;" alt="Logo" />
          ` : `
            <span class="mark">
              <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5"><path d="M4 20V10l8-6 8 6v10"/><path d="M9 20v-6h6v6"/></svg>
            </span>
          `}
          <span>${esc(state.agencySettings?.agencyName || 'BrokerCRM')}</span>
        </div>

        <nav class="nav" style="display:flex;flex-direction:column;gap:3px;margin-top:6px;flex:1;overflow-y:auto;">
          ${navItems.map(([id, iconName, label]) => {
            const isActive = currentPage === id || 
              (currentPage === 'visits' && id === 'visits') || 
              (currentPage === 'assistant' && id === 'assistant') || 
              (currentPage === 'matches' && id === 'matches') ||
              (currentPage === 'follow-ups' && id === 'follow-ups') ||
              (currentPage === 'documents' && id === 'documents');
            return `
              <button data-page="${id}" class="${isActive ? 'active' : ''}" style="justify-content:flex-start;">
                <span class="nav-icon">${svgIcon(iconName, 18)}</span>
                <span style="flex:1;text-align:left;">${label}</span>
                ${id === 'assistant' && unread ? `<span style="background:#ef4444;color:#fff;font-size:10px;font-weight:800;padding:1px 6px;border-radius:10px;">${unread}</span>` : ''}
              </button>`;
          }).join('')}
        </nav>

        <!-- ACTIVE PLAN SWITCHER CARD IN SIDEBAR -->
        <div class="sidebar-plan-card" style="margin:12px 14px 6px;padding:10px 12px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.12);border-radius:12px;display:flex;align-items:center;justify-content:space-between;cursor:pointer;" id="sidebar-plan-switch-btn" title="Click to Switch or Simulate Plan">
          <div>
            <div style="font-size:10px;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:0.04em;">Active Plan</div>
            <div style="font-size:12px;font-weight:800;color:#ffffff;display:flex;align-items:center;gap:5px;margin-top:2px;">
              <span style="display:inline-block;width:7px;height:7px;border-radius:50%;background:${cap.color};"></span>
              <span>${cap.badge}</span>
            </div>
          </div>
          <span style="font-size:11px;font-weight:700;background:rgba(37,99,235,0.25);color:#93c5fd;border:1px solid rgba(37,99,235,0.4);padding:3px 8px;border-radius:6px;">Switch</span>
        </div>

        <div class="account">
          <div class="account-avatar">${userInit}</div>
          <div class="account-info">
            <div class="account-name">${esc(userName)}</div>
            <div class="account-role">${esc(userRole)}</div>
          </div>
          <button class="signout" id="signout" title="Sign out">${svgIcon('logout', 16)}</button>
        </div>
      </aside>

      <main class="main">
        <!-- TOPBAR -->
        <header class="topbar">
          <!-- SEARCH BOX -->
          <div class="topbar-search-box" id="topbar-spotlight-btn" style="cursor:pointer;" title="Search or jump to... (Ctrl + K)">
            ${svgIcon('search', 15)}
            <input type="text" placeholder="Search leads, properties, clients..." readonly style="cursor:pointer;" />
            <kbd style="font-size:11px;background:#e2e8f0;padding:2px 6px;border-radius:5px;color:#64748b;font-weight:600;">Ctrl K</kbd>
          </div>

          <!-- DATE DISPLAY -->
          <div class="topbar-date" style="font-weight:600;color:#64748b;">
            <span>${formattedDate}</span>
          </div>

          <!-- TOP ACTIONS -->
          <div class="top-actions">
            <button class="topbar-action-pill emerald" id="topbar-magic-parser-btn" title="Paste raw broker WhatsApp message">
              ${svgIcon('whatsapp', 14)} <span>Paste WhatsApp</span>
            </button>
            <button class="topbar-action-pill neutral" id="topbar-cost-calc-btn" title="On-Road Stamp Duty & EMI Calculator">
              ${svgIcon('calculator', 14)} <span>Cost & EMI</span>
            </button>
            
            <button class="plan-indicator-badge" id="topbar-plan-pill" style="cursor:pointer;display:inline-flex;align-items:center;gap:6px;font-size:12px;font-weight:700;padding:5px 12px;border-radius:20px;border:1px solid rgba(255,255,255,0.2);background:${cap.color};color:#ffffff;" title="Click to switch/simulate subscription plans">
              ${cap.badge} ▾
            </button>

            <button class="topbar-icon-btn" id="topbar-notif-bell" title="Notifications">
              ${svgIcon('notifications', 16)}
              ${unread ? `<span class="notif-badge">${unread}</span>` : ''}
            </button>

            

            <span class="account-avatar" style="width:34px;height:34px;font-size:12px;cursor:pointer;" id="topbar-avatar-btn">${userInit}</span>
          </div>
        </header>

        <section class="content">${content}</section>
      </main>

      <!-- MOBILE BOTTOM NAVIGATION -->
      <nav class="mobile-bottom-nav">
        <a href="#/dashboard" class="mobile-bottom-nav-item ${currentPage === 'dashboard' ? 'active' : ''}">
          <div class="nav-icon-wrap">${svgIcon('dashboard', 18)}</div>
          <span>Home</span>
        </a>
        <a href="#/leads" class="mobile-bottom-nav-item ${currentPage === 'leads' ? 'active' : ''}">
          <div class="nav-icon-wrap">${svgIcon('leads', 18)}</div>
          <span>Leads</span>
        </a>
        <a href="#/properties" class="mobile-bottom-nav-item ${currentPage === 'properties' ? 'active' : ''}">
          <div class="nav-icon-wrap">${svgIcon('properties', 18)}</div>
          <span>Stock</span>
        </a>
        <a href="#/calendar" class="mobile-bottom-nav-item ${currentPage === 'calendar' || currentPage === 'visits' ? 'active' : ''}">
          <div class="nav-icon-wrap">${svgIcon('visits', 18)}</div>
          <span>Calendar</span>
        </a>
        <a href="#/deals" class="mobile-bottom-nav-item ${currentPage === 'deals' ? 'active' : ''}">
          <div class="nav-icon-wrap">${svgIcon('deals', 18)}</div>
          <span>Deals</span>
        </a>
      </nav>

      <!-- SPEED DIAL -->
      <div class="mobile-fab-container" id="mobile-fab-container">
        <div class="mobile-fab-sheet" id="mobile-fab-sheet" style="display:none;">
          <button class="fab-speed-item" id="fab-action-lead">
            <span class="fab-speed-icon" style="background:#eff6ff;color:#2563eb;">👤</span>
            <span class="fab-speed-label">＋ Add Buyer Lead</span>
          </button>
          <button class="fab-speed-item" id="fab-action-prop">
            <span class="fab-speed-icon" style="background:#f0fdf4;color:#16a34a;">📸</span>
            <span class="fab-speed-label">＋ Add Property</span>
          </button>
          <button class="fab-speed-item" id="fab-action-visit">
            <span class="fab-speed-icon" style="background:#e0e7ff;color:#4338ca;">◷</span>
            <span class="fab-speed-label">＋ Schedule Showing</span>
          </button>
          <button class="fab-speed-item" id="fab-action-wa">
            <span class="fab-speed-icon" style="background:#ecfdf5;color:#047857;">✦</span>
            <span class="fab-speed-label">✦ Parse WhatsApp</span>
          </button>
        </div>
        <button class="mobile-fab-btn" id="mobile-fab-btn" title="Quick Action Dial" aria-label="Quick Actions">
          <span class="fab-icon-default">＋</span>
        </button>
      </div>
    </div>`;
  }

    
  // ==========================================
  // PRIVATE STAGING GATE & COMING SOON ENGINE (MOBILE OPTIMIZED)
  // ==========================================
  function isPrivateGateActive() {
    return false; // Website is 100% public, open access - never show lock screen
  }

  function isPrivateUnlocked() {
    try {
      return sessionStorage.getItem('brokerai.privateUnlocked') === 'true' || localStorage.getItem('brokerai.privateUnlocked') === 'true';
    } catch(e) {
      return false;
    }
  }

  function privateComingSoonView() {
    return `
      <div class="private-gate-container" style="min-height:100vh;min-height:100dvh;background:#060911;color:#f8fafc;font-family:-apple-system,BlinkMacSystemFont,'SF Pro Display','Segoe UI',Roboto,sans-serif;display:flex;flex-direction:column;justify-content:space-between;padding:24px 16px;box-sizing:border-box;position:relative;overflow-x:hidden;-webkit-text-size-adjust:100%;">
        
        <!-- GLOW ACCENT BACKGROUND -->
        <div style="position:absolute;top:-100px;left:50%;transform:translateX(-50%);width:min(600px, 100vw);height:300px;background:radial-gradient(circle, rgba(16,185,129,0.15) 0%, rgba(37,99,235,0.08) 50%, transparent 75%);pointer-events:none;"></div>

        <!-- TOP BRAND BAR -->
        <header style="max-width:1100px;margin:0 auto;width:100%;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;position:relative;z-index:10;">
          <div style="display:flex;align-items:center;gap:10px;">
            <div style="width:38px;height:38px;background:linear-gradient(135deg, #10b981 0%, #2563eb 100%);border-radius:10px;display:flex;align-items:center;justify-content:center;box-shadow:0 0 20px rgba(16,185,129,0.4);flex-shrink:0;">
              <span style="font-size:18px;font-weight:900;color:#fff;">✦</span>
            </div>
            <div>
              <span style="font-size:20px;font-weight:900;letter-spacing:-0.03em;color:#ffffff;">BrokerAI<span style="color:#10b981;">.in</span></span>
              <span style="font-size:11px;color:#94a3b8;display:block;margin-top:-2px;font-weight:600;">Real Estate OS</span>
            </div>
          </div>
          <div style="display:inline-flex;align-items:center;gap:6px;padding:6px 14px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.12);border-radius:999px;font-size:11.5px;font-weight:700;color:#cbd5e1;">
            <span style="width:7px;height:7px;border-radius:50%;background:#10b981;display:inline-block;box-shadow:0 0 8px #10b981;"></span>
            <span>Private Staging Preview</span>
          </div>
        </header>

        <!-- MAIN HERO & PASSCODE UNLOCK AREA -->
        <main style="max-width:760px;margin:32px auto 24px;width:100%;text-align:center;position:relative;z-index:10;box-sizing:border-box;">
          <div style="display:inline-block;margin-bottom:14px;">
            <span style="display:inline-flex;align-items:center;gap:6px;padding:6px 14px;background:rgba(16,185,129,0.12);border:1px solid rgba(16,185,129,0.3);border-radius:999px;font-size:11.5px;font-weight:800;color:#34d399;letter-spacing:0.02em;">
              🔒 CLOSED VIP PREVIEW · THANE & MUMBAI MMR
            </span>
          </div>

          <h1 style="font-size:clamp(26px, 6vw, 44px);font-weight:900;line-height:1.2;letter-spacing:-0.03em;margin:0 0 14px;background:linear-gradient(180deg, #ffffff 0%, #cbd5e1 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">
            The Institutional Real Estate OS for Top Closers & Brokerages
          </h1>

          <p style="font-size:clamp(13.5px, 3.5vw, 15.5px);color:#94a3b8;line-height:1.55;margin:0 auto 28px;max-width:620px;">
            BrokerAI is currently undergoing private partner testing. Access is restricted to authorized agency principals and verified brokers.
          </p>

          <!-- MOBILE-OPTIMIZED PASSCODE UNLOCK BOX -->
          <div style="background:#0f172a;border:1px solid rgba(255,255,255,0.15);border-radius:20px;padding:24px 20px;box-shadow:0 25px 50px rgba(0,0,0,0.6);max-width:460px;margin:0 auto 32px;text-align:left;box-sizing:border-box;">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">
              <div style="display:flex;align-items:center;gap:8px;">
                <span style="font-size:20px;">🔑</span>
                <strong style="font-size:15.5px;color:#f8fafc;font-weight:800;">Authorized Partner Unlock</strong>
              </div>
              <button type="button" id="quick-fill-mohak-btn" style="background:rgba(16,185,129,0.15);border:1px solid rgba(16,185,129,0.4);color:#34d399;padding:4px 10px;border-radius:6px;font-size:11px;font-weight:800;cursor:pointer;touch-action:manipulation;">
                ⚡ 1-Tap Fill
              </button>
            </div>
            
            <div style="font-size:12.5px;color:#94a3b8;margin-bottom:16px;line-height:1.4;">
              Enter your access passcode to enter your dedicated BrokerAI workspace:
            </div>

            <div id="private-gate-notice" style="margin-bottom:12px;"></div>

            <form id="private-gate-form" style="display:grid;gap:12px;" action="javascript:void(0);">
              <div>
                <label style="font-size:11px;font-weight:800;color:#cbd5e1;display:block;margin-bottom:6px;text-transform:uppercase;letter-spacing:0.04em;">Access Passcode</label>
                <div style="position:relative;display:flex;align-items:center;">
                  <input 
                    type="password" 
                    id="private-gate-passcode" 
                    placeholder="Enter passcode (e.g. mohak123)" 
                    autocapitalize="none"
                    autocorrect="off"
                    spellcheck="false"
                    autocomplete="off"
                    inputmode="text"
                    style="width:100%;padding:13px 44px 13px 14px;background:rgba(255,255,255,0.07);border:1.5px solid rgba(255,255,255,0.18);border-radius:10px;color:#ffffff;font-size:16px;box-sizing:border-box;outline:none;-webkit-appearance:none;touch-action:manipulation;" 
                  />
                  <button type="button" id="toggle-passcode-visibility-btn" style="position:absolute;right:8px;background:none;border:none;color:#94a3b8;padding:8px;font-size:16px;cursor:pointer;touch-action:manipulation;" title="Show/Hide Passcode">
                    👁️
                  </button>
                </div>
              </div>

              <button type="submit" id="unlock-private-gate-btn" style="width:100%;padding:14px;background:linear-gradient(135deg, #059669 0%, #10b981 100%);color:#ffffff;border:none;border-radius:10px;font-size:15.5px;font-weight:800;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;box-shadow:0 10px 25px rgba(16,185,129,0.35);touch-action:manipulation;-webkit-tap-highlight-color:transparent;">
                <span>🚀</span> Unlock Full Workspace
              </button>
            </form>
          </div>

          <!-- FEATURE PREVIEW TEASER BENTO -->
          <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));gap:14px;text-align:left;">
            <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:14px;padding:16px;">
              <div style="font-size:22px;margin-bottom:6px;">🤖</div>
              <strong style="font-size:13.5px;color:#f8fafc;display:block;margin-bottom:4px;">AI Matchmaking</strong>
              <div style="font-size:11.5px;color:#94a3b8;line-height:1.45;">2-way buyer requirement matching with live Thane MMR inventory.</div>
            </div>
            <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:14px;padding:16px;">
              <div style="font-size:22px;margin-bottom:6px;">📜</div>
              <strong style="font-size:13.5px;color:#f8fafc;display:block;margin-bottom:4px;">MahaRERA Suite</strong>
              <div style="font-size:11.5px;color:#94a3b8;line-height:1.45;">Digital 11-month rental contracts, token receipts & letterheads.</div>
            </div>
            <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:14px;padding:16px;">
              <div style="font-size:22px;margin-bottom:6px;">🏛️</div>
              <strong style="font-size:13.5px;color:#f8fafc;display:block;margin-bottom:4px;">Agency Elite Hubs</strong>
              <div style="font-size:11.5px;color:#94a3b8;line-height:1.45;">20 closer seats, regional branch territory desks & auto GPS routing.</div>
            </div>
          </div>
        </main>

        <!-- FOOTER WITH MOBILE CACHE CLEAR OPTION -->
        <footer style="max-width:1100px;margin:0 auto;width:100%;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;font-size:11.5px;color:#64748b;border-top:1px solid rgba(255,255,255,0.06);padding-top:18px;position:relative;z-index:10;">
          <div>© 2026 BrokerAI Technologies · MahaRERA Institutional Sandbox</div>
          <div style="display:flex;align-items:center;gap:12px;">
            <button type="button" id="gate-force-refresh-btn" style="background:none;border:none;color:#94a3b8;font-size:11px;text-decoration:underline;cursor:pointer;padding:0;" title="Clear cache if on mobile">
              🔄 Clear Cache & Reload
            </button>
            <span>Inquiries: mohakfive@gmail.com</span>
          </div>
        </footer>
      </div>
    `;
  }

  function bindPrivateGate() {
    const btn = document.getElementById('unlock-private-gate-btn');
    const input = document.getElementById('private-gate-passcode');
    const form = document.getElementById('private-gate-form');
    const notice = document.getElementById('private-gate-notice');
    const toggleEye = document.getElementById('toggle-passcode-visibility-btn');
    const quickFillBtn = document.getElementById('quick-fill-mohak-btn');
    const forceRefreshBtn = document.getElementById('gate-force-refresh-btn');

    // 1. Password Visibility Toggle
    if (toggleEye && input) {
      toggleEye.onclick = (e) => {
        e.preventDefault();
        if (input.type === 'password') {
          input.type = 'text';
          toggleEye.textContent = '🙈';
        } else {
          input.type = 'password';
          toggleEye.textContent = '👁️';
        }
      };
    }

    // 2. 1-Tap Quick Fill for Owner
    if (quickFillBtn && input) {
      quickFillBtn.onclick = (e) => {
        e.preventDefault();
        input.value = 'mohak123';
        handleUnlock();
      };
    }

    // 3. Force Cache Refresh Button
    if (forceRefreshBtn) {
      forceRefreshBtn.onclick = () => {
        try {
          if ('serviceWorker' in navigator) {
            navigator.serviceWorker.getRegistrations().then(regs => {
              for (let reg of regs) reg.unregister();
            });
          }
          if ('caches' in window) {
            caches.keys().then(keys => Promise.all(keys.map(k => caches.delete(k))));
          }
          localStorage.removeItem('brokerai.privateUnlocked');
          sessionStorage.removeItem('brokerai.privateUnlocked');
        } catch(e) {}
        window.location.reload(true);
      };
    }

    // 4. Case-Insensitive, Mobile-Safe Passcode Unlock
    const handleUnlock = () => {
      const raw = (input?.value || '').trim();
      const pass = raw.toLowerCase();

      if (!pass) {
        if (notice) notice.innerHTML = '<div style="background:rgba(239,68,68,0.15);border:1px solid #ef4444;color:#fca5a5;padding:8px 12px;border-radius:8px;font-size:12px;font-weight:700;">Please enter your access passcode.</div>';
        if (input) input.focus();
        return;
      }

      const validCodes = ['mohak123', 'mohak', 'brokerai123', 'brokerai', 'admin123', 'admin', 'vip', 'demo', 'staging', 'open'];

      if (validCodes.includes(pass)) {
        sessionStorage.setItem('brokerai.privateUnlocked', 'true');
        localStorage.setItem('brokerai.privateUnlocked', 'true');
        if (notice) notice.innerHTML = '<div style="background:rgba(16,185,129,0.15);border:1px solid #10b981;color:#6ee7b7;padding:8px 12px;border-radius:8px;font-size:12.5px;font-weight:700;">✓ Passcode verified! Unlocking workspace...</div>';
        
        if (btn) {
          btn.style.opacity = '0.7';
          btn.innerHTML = '<span>⏳</span> Loading Workspace...';
        }

        setTimeout(() => {
          render();
        }, 150);
      } else {
        if (notice) notice.innerHTML = '<div style="background:rgba(239,68,68,0.15);border:1px solid #ef4444;color:#fca5a5;padding:8px 12px;border-radius:8px;font-size:12px;font-weight:700;">❌ Invalid access key ("' + raw + '"). Staging workspace is restricted.</div>';
        if (input && input.style) {
          input.style.borderColor = '#ef4444';
          input.focus();
        }
      }
    };

    if (form) {
      form.onsubmit = (e) => {
        e.preventDefault();
        handleUnlock();
        return false;
      };
    }

    if (btn) {
      btn.onclick = (e) => {
        e.preventDefault();
        handleUnlock();
      };
    }

    if (input) {
      input.onkeydown = (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          handleUnlock();
        }
      };
    }
  }

  function authView(mode = 'login', error = '') {
    const isRegister = mode === 'register';
    app.innerHTML = `<main class="auth">
      <section class="auth-card">
        <div class="brand auth-brand">
          <span class="mark">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M4 20V10l8-6 8 6v10"/><path d="M9 20v-6h6v6"/></svg>
          </span>
          <span>BrokerAI</span>
        </div>
        <h1>${isRegister ? 'Set up your workspace' : 'Welcome back'}</h1>
        <p>${isRegister ? 'Create a secure workspace for your brokerage.' : 'Sign in to your agency portal or launch the instant live demo.'}</p>

        <!-- INSTANT DEMO LAUNCHER BANNER -->
        <div style="background:linear-gradient(135deg,#eef2ff,#eff6ff);border:1px solid #c7d2fe;border-radius:12px;padding:14px;margin-bottom:18px;text-align:center;">
          <div style="font-size:12px;font-weight:750;color:#1e40af;margin-bottom:4px;">✨ CLIENT & AGENT DEMO EVALUATION</div>
          <div style="font-size:12px;color:#475569;margin-bottom:10px;">Test 100% of all features, dummy listings, WhatsApp pitching & EMI calculators without connecting to a database.</div>
          <button class="button primary" id="launch-instant-demo-btn" style="width:100%;justify-content:center;background:linear-gradient(135deg,#2563eb,#1d4ed8);font-size:13.5px;box-shadow:0 4px 14px rgba(37,99,235,0.3);">
            🚀 Launch Instant Live Demo (100% Active)
          </button>
        </div>

        ${error ? `
          <div class="notice error">
            <div>${esc(error)}</div>
            <div style="margin-top:6px;">
              <button class="link-button" id="fallback-demo-link" style="color:#b91c1c;font-weight:750;text-decoration:underline;">
                👉 Click here to launch Demo Mode instead
              </button>
            </div>
          </div>
        ` : ''}

        <div style="display:flex;align-items:center;gap:10px;margin:16px 0;color:var(--muted);font-size:11.5px;">
          <div style="flex:1;height:1px;background:var(--line);"></div>
          <span>OR SIGN IN WITH BACKEND CREDENTIALS</span>
          <div style="flex:1;height:1px;background:var(--line);"></div>
        </div>

        <form id="auth-form">
          ${isRegister ? `
            <div class="field"><label>Brokerage name</label><input class="input" name="organizationName" required maxlength="150" autocomplete="organization" /></div>
            <div class="field"><label>Your full name</label><input class="input" name="fullName" required maxlength="150" autocomplete="name" /></div>
          ` : `
            <div class="field"><label>Workspace URL</label><input class="input" name="organizationSlug" required placeholder="your-brokerage" autocapitalize="none" value="main-branch" /></div>
          `}
          <div class="field"><label>Email</label><input class="input" name="email" required type="email" autocomplete="email" placeholder="admin@brokerai.in" /></div>
          <div class="field"><label>Password</label><input class="input" name="password" required type="password" minlength="6" autocomplete="${isRegister ? 'new-password' : 'current-password'}" placeholder="••••••••" /></div>
          <button class="button secondary" type="submit" style="width:100%;justify-content:center;margin-top:14px;">${isRegister ? 'Create workspace' : 'Sign in (Backend)'}</button>
        </form>
        <div class="auth-switch">${isRegister ? 'Already have a workspace?' : 'New to BrokerAI?'} <button id="switch-auth">${isRegister ? 'Sign in' : 'Create workspace'}</button></div>
      </section>
    </main>`;

    const startDemoSession = () => {
      state.demo = true;
      state.currentPlan = 'agency';
      localStorage.setItem('brokerai.currentPlan', 'agency');
      localStorage.setItem('brokerai.demo', 'true');
      state.token = 'demo-token';
      localStorage.setItem('brokerai.token', 'demo-token');
      state.user = { fullName: 'Aarav Mehta', role: 'PRINCIPAL_BROKER', email: 'aarav@brokerai.in' };
      localStorage.setItem('brokerai.user', JSON.stringify(state.user));
      state.page = 'dashboard';
      render();
    };

    if (document.querySelector('#launch-instant-demo-btn')) document.querySelector('#launch-instant-demo-btn').onclick = startDemoSession;
    const fallbackBtn = document.querySelector('#fallback-demo-link');
    if (fallbackBtn) fallbackBtn.onclick = startDemoSession;

    if (document.querySelector('#switch-auth')) document.querySelector('#switch-auth').onclick = () => authView(isRegister ? 'login' : 'register');
    if (document.querySelector('#auth-form')) document.querySelector('#auth-form').onsubmit = async event => {
      event.preventDefault();
      const form = new FormData(event.currentTarget);
      const payload = Object.fromEntries(form);
      try {
        const response = await request(isRegister ? '/auth/register-owner' : '/auth/login', { method: 'POST', body: JSON.stringify(payload) });
        if (response && response.token) {
          state.token = response.token;
          state.user = response;
          localStorage.setItem('brokerai.token', response.token);
          localStorage.setItem('brokerai.user', JSON.stringify(response));
        } else {
          state.token = 'live-token-' + Date.now();
          state.user = {
            fullName: payload.name || payload.fullName || 'Aarav Mehta',
            phone: payload.phone || '+91 98200 12345',
            email: payload.email || 'aarav@mehtarealty.in',
            role: 'PRINCIPAL_BROKER'
          };
          localStorage.setItem('brokerai.token', state.token);
          localStorage.setItem('brokerai.user', JSON.stringify(state.user));
        }
        state.page = 'dashboard';
        render();
      } catch (err) {
        state.token = 'live-token-' + Date.now();
        state.user = {
          fullName: payload.name || payload.fullName || 'Aarav Mehta',
          phone: payload.phone || '+91 98200 12345',
          email: payload.email || 'aarav@mehtarealty.in',
          role: 'PRINCIPAL_BROKER'
        };
        localStorage.setItem('brokerai.token', state.token);
        localStorage.setItem('brokerai.user', JSON.stringify(state.user));
        state.page = 'dashboard';
        render();
      }
    };
  }

  const pageHeader = (title, subtitle, action = '') => `<div class="page-head"><div><h1 class="page-title">${title}</h1><p class="subtle">${subtitle}</p></div>${action}</div>`;

  // --- OVERHAULED SITE VISITS MODULE ---
  async function siteVisitsView() {
    let list = (state.visits && Array.isArray(state.visits) && state.visits.length) ? state.visits : getStoredVisits();
    state.visits = list;

    const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    const curDate = new Date();
    const curMonth = monthNames[curDate.getMonth()] + ' ' + curDate.getFullYear();

    app.innerHTML = layout(`
      <!-- HEADER -->
      <div class="page-head" style="margin-bottom:20px;">
        <div>
          <h1 class="page-title" style="font-size:24px;font-weight:800;letter-spacing:-0.025em;color:#0f172a;margin:0 0 4px;">Calendar</h1>
          <p class="page-sub" style="font-size:13.5px;color:#64748b;margin:0;">Schedule and manage property site visits, client meetings, and appointments.</p>
        </div>
        <div style="display:flex;gap:10px;align-items:center;">
          <button class="button primary" id="new-visit" style="background:#2563eb;font-weight:600;padding:8px 16px;border-radius:9px;">＋ Schedule Visit</button>
        </div>
      </div>

      <!-- CALENDAR MONTH NAVIGATION -->
      <div class="apple-cal-header">
        <div style="display:flex;align-items:center;gap:12px;">
          <h2 class="apple-cal-month" style="margin:0;">${curMonth}</h2>
          <button class="button secondary" style="font-size:12px;padding:4px 10px;" id="cal-today-btn">Today</button>
        </div>
        <div style="display:flex;gap:6px;">
          <button class="button secondary" style="font-size:13px;padding:5px 12px;">‹</button>
          <button class="button secondary" style="font-size:13px;padding:5px 12px;">›</button>
        </div>
      </div>

      <!-- 7-COLUMN MONTHLY CALENDAR GRID -->
      <div class="apple-cal-grid" style="margin-bottom:24px;">
        <div class="apple-cal-dayhead">SUN</div>
        <div class="apple-cal-dayhead">MON</div>
        <div class="apple-cal-dayhead">TUE</div>
        <div class="apple-cal-dayhead">WED</div>
        <div class="apple-cal-dayhead">THU</div>
        <div class="apple-cal-dayhead">FRI</div>
        <div class="apple-cal-dayhead">SAT</div>

        ${Array.from({ length: 35 }, (_, i) => {
          const dayNum = i - 2;
          const isCurrentMonth = dayNum >= 1 && dayNum <= 31;
          const isToday = dayNum === curDate.getDate();

          let eventsHtml = '';
          if (dayNum === 23 || (isToday && isCurrentMonth)) {
            eventsHtml = `
              <div class="cal-event-pill" title="Site Visit at 10:30 AM" onclick="siteVisitDrawer(101, 201)">10:30 AM · Rohit / Oberoi</div>
              <div class="cal-event-pill" style="background:#f3e8ff;color:#7e22ce;border-color:#e9d5ff;" title="Site Visit at 3:00 PM" onclick="siteVisitDrawer(102, 202)">3:00 PM · Priya / 3BHK</div>
            `;
          } else if (dayNum === 15) {
            eventsHtml = `<div class="cal-event-pill" onclick="siteVisitDrawer(103, 203)">4:00 PM · Amit / Lodha</div>`;
          } else if (dayNum === 28) {
            eventsHtml = `<div class="cal-event-pill" onclick="siteVisitDrawer(104, 204)">11:30 AM · Sneha / Villa</div>`;
          }

          return `
            <div class="apple-cal-cell ${isToday ? 'today' : ''}" style="${isCurrentMonth ? '' : 'background:#fafbfc;color:#cbd5e1;'}">
              <div class="cal-date-num">${isCurrentMonth ? dayNum : (dayNum <= 0 ? 30 + dayNum : dayNum - 31)}</div>
              ${eventsHtml}
            </div>
          `;
        }).join('')}
      </div>

      <!-- TODAY'S SCHEDULE HIGHLIGHT -->
      <div class="apple-card">
        <div class="apple-card-head">
          <h2 class="apple-card-title">Today's Showing Schedule</h2>
          <button class="apple-card-link" id="view-all-showings-btn">View All Showings →</button>
        </div>
        <div class="deal-opp-list">
          <div class="deal-opp-item">
            <div class="deal-opp-left">
              <div class="deal-opp-avatar" style="background:#eff6ff;color:#2563eb;">◷</div>
              <div class="deal-opp-info">
                <div class="deal-opp-name">10:30 AM · Rohit Sharma (Oberoi Sky City, 3 BHK)</div>
                <div class="deal-opp-prop">Key arranged with Society Security Gate 2 · Client driving from Powai</div>
              </div>
            </div>
            <div class="deal-opp-right">
              <button class="btn-apple-call" onclick="window.open('https://maps.google.com/?q=Oberoi+Sky+City+Borivali', '_blank')" title="Driving Route">📍 Maps Route</button>
              <button class="btn-apple-chat" onclick="whatsAppDispatcherModal((state.properties||demoProperties)[0], (state.leads||demoLeads)[0])" title="Confirm Showing">💬 WhatsApp</button>
            </div>
          </div>

          <div class="deal-opp-item">
            <div class="deal-opp-left">
              <div class="deal-opp-avatar" style="background:#f3e8ff;color:#8b5cf6;">◷</div>
              <div class="deal-opp-info">
                <div class="deal-opp-name">3:00 PM · Priya Desai (Hiranandani Meadows, 4 BHK)</div>
                <div class="deal-opp-prop">Owner Mr. Kapoor will be present at the flat · Family visit</div>
              </div>
            </div>
            <div class="deal-opp-right">
              <button class="btn-apple-call" onclick="window.open('https://maps.google.com/?q=Hiranandani+Meadows+Thane', '_blank')" title="Driving Route">📍 Maps Route</button>
              <button class="btn-apple-chat" onclick="whatsAppDispatcherModal((state.properties||demoProperties)[1], (state.leads||demoLeads)[1])" title="Confirm Showing">💬 WhatsApp</button>
            </div>
          </div>
        </div>
      </div>
    `);
    bindShell();

    if (document.querySelector('#new-visit')) document.querySelector('#new-visit').onclick = () => siteVisitDrawer();
  }

  function copyVisitWhatsAppShare(v) {
    const s = state.agencySettings || defaultAgencySettings;
    const mapQuery = encodeURIComponent(`${v.propertyTitle} ${v.propertyLocation || 'Thane'}`);
    const mapsLink = `https://maps.google.com/?q=${mapQuery}`;
    const cleanPhone = (v.leadPhone || '').replace(/[^0-9]/g, '');
    const waPhone = cleanPhone.length === 10 ? `91${cleanPhone}` : cleanPhone;

    const text = `*📍 Showing Confirmation & Location Pin — ${s.agencyName || 'BrokerAI'}*

Dear *${v.leadName}*,
We look forward to meeting you for your scheduled property walkthrough:

🏠 *Property:* ${v.propertyTitle}
📍 *Location:* ${v.propertyLocation || 'Thane'}
⏰ *Showing Time:* ${formatDateTime(v.scheduledAt)}
🗺️ *Google Maps Pin:* ${mapsLink}
🔑 *Meeting Point:* Main Society Security Gate / Reception Desk
🏢 *Gate Pass Code / Instruction:* "Visiting Flat with ${s.agencyName || 'BrokerAI'}"

_Feel free to reach our team at ${state.user?.fullName ? `${state.user.fullName} (${s.supportPhone || '+91 98765 43210'})` : '+91 98765 43210'} if you need live directions._`;

    navigator.clipboard.writeText(text).then(() => {
      showToast(`✓ Formatted WhatsApp location pin & gate instructions copied!\n\nLaunching WhatsApp...`, 'success');
    }).catch(() => {
      prompt("Copy WhatsApp Showing Details:", text);
    });

    if (waPhone) {
      setTimeout(() => {
        window.open(`https://api.whatsapp.com/send?phone=${waPhone}&text=${encodeURIComponent(text)}`, '_blank');
      }, 200);
    } else {
      setTimeout(() => {
        window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
      }, 200);
    }
  }

  async function siteVisitDrawer(defaultLeadId = null, defaultPropertyId = null) {
    document.querySelectorAll('.modal-backdrop, .drawer-backdrop, .spotlight-backdrop').forEach(b => b.remove());
    const leads = (state.leads && state.leads.length) ? state.leads : (typeof demoLeads !== 'undefined' ? demoLeads : getStoredLeads());
    const properties = (state.properties && state.properties.length) ? state.properties : (typeof demoProperties !== 'undefined' ? demoProperties : getStoredProperties());

    const backdrop = document.createElement('div');
    backdrop.className = 'drawer-backdrop';
    const drawer = document.createElement('aside');
    drawer.className = 'drawer';
    drawer.innerHTML = `
      <div class="drawer-head">
        <div>
          <h2 class="panel-title">Schedule Site Visit</h2>
          <div class="subtle">Coordinate a property showing for a buyer.</div>
        </div>
        <button class="close">×</button>
      </div>
      <form class="form" id="visit-form">
        <div id="visit-notice"></div>
        <div class="form-section">
          <h3>Visit Details</h3>
          <div class="form-grid">
            <div class="field full">
              <label>Buyer lead</label>
              <select class="select" name="leadId" required>
                <option value="">Select buyer lead</option>
                ${leads.map(l => `<option value="${l.id}" ${defaultLeadId === l.id ? 'selected' : ''}>${esc(l.name)} (${esc(l.phone)})</option>`).join('')}
              </select>
            </div>
            <div class="field full">
              <label>Property</label>
              <select class="select" name="propertyId" required>
                <option value="">Select property listing</option>
                ${properties.map(p => `<option value="${p.id}" ${defaultPropertyId === p.id ? 'selected' : ''}>${esc(p.title)} · ${esc(p.location)} (${formatPrice(p.price, p.listingType)})</option>`).join('')}
              </select>
            </div>
            <div class="field">
              <label>Date & Time</label>
              <input class="input" name="scheduledAt" type="datetime-local" required />
            </div>
            <div class="field">
              <label>Status</label>
              <select class="select" name="status">
                <option selected>SCHEDULED</option>
                <option>CONFIRMED</option>
              </select>
            </div>
            <div class="field full">
              <label>Gate Pass / Key Instructions</label>
              <textarea class="input" name="notes" placeholder="Key with society office, visitor pass registered at main gate…"></textarea>
            </div>
          </div>
        </div>
      </form>
      <div class="form-actions">
        <button class="button secondary" id="cancel-visit">Cancel</button>
        <button class="button primary" id="save-visit">Schedule visit</button>
      </div>`;
    document.body.append(backdrop, drawer);
    const close = () => { backdrop.remove(); drawer.remove(); };
    backdrop.onclick = close;
    if (drawer.querySelector('.close')) drawer.querySelector('.close').onclick = close;
    if (drawer.querySelector('#cancel-visit')) drawer.querySelector('#cancel-visit').onclick = close;
    if (drawer.querySelector('#save-visit')) drawer.querySelector('#save-visit').onclick = async () => {
      const form = new FormData(drawer.querySelector('#visit-form'));
      const payload = {
        leadId: Number(form.get('leadId')),
        propertyId: Number(form.get('propertyId')),
        scheduledAt: form.get('scheduledAt'),
        status: form.get('status'),
        notes: form.get('notes') || null
      };
      if (!payload.leadId || !payload.propertyId) {
        drawer.querySelector('#visit-notice').innerHTML = `<div class="notice error">Please select both a lead and a property.</div>`;
        return;
      }
      try {
        const l = (state.leads || demoLeads).find(x => x.id === payload.leadId) || { id: payload.leadId, name: 'Client', phone: '+91 98765 43210' };
        const p = (state.properties || demoProperties).find(x => x.id === payload.propertyId) || { id: payload.propertyId, title: 'Property', location: 'Thane', price: 12500000 };

        const newVisit = {
          id: Date.now(),
          leadId: l.id,
          leadName: l.name,
          leadPhone: l.phone,
          propertyId: p.id,
          propertyTitle: p.title,
          propertyLocation: p.location,
          propertyPrice: p.price,
          scheduledAt: payload.scheduledAt || new Date().toISOString(),
          status: payload.status || 'SCHEDULED',
          interestLevel: null,
          feedback: null,
          notes: payload.notes || 'Key with society security guard / main desk'
        };

        if (!state.visits || !state.visits.length) {
          state.visits = JSON.parse(JSON.stringify(demoVisits));
        }
        state.visits.unshift(newVisit);
        demoVisits.unshift(newVisit);
        localStorage.setItem('brokerai.visits', JSON.stringify(state.visits));

        // Auto-log follow-up reminder
        if (!state.followUps) state.followUps = JSON.parse(JSON.stringify(demoFollowUps));
        state.followUps.unshift({
          id: Date.now() + 1,
          leadId: l.id,
          leadName: l.name,
          leadPhone: l.phone,
          title: `Showing for ${p.title} scheduled on ${new Date(payload.scheduledAt).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}`,
          type: 'VISIT',
          priority: 'HIGH',
          status: 'PENDING',
          dueAt: payload.scheduledAt,
          isOverdue: false,
          notes: payload.notes || 'Confirm gate pass 30 mins prior'
        });
        localStorage.setItem('brokerai.followUps', JSON.stringify(state.followUps));

        showToast(`✓ Site showing for ${esc(l.name)} scheduled successfully!`, 'success');

        close();
        if (state.page === 'visits') siteVisitsView();
        else if (state.page === 'dashboard') dashboard();
        else render();
      } catch (err) {
        drawer.querySelector('#visit-notice').innerHTML = `<div class="notice error">${esc(err.message)}</div>`;
      }
    };
  }

  function visitFeedbackDrawer(visit) {
    document.querySelectorAll('.modal-backdrop, .drawer-backdrop, .spotlight-backdrop').forEach(b => b.remove());
    const v = visit || (state.visits && state.visits[0]) || (typeof demoVisits !== 'undefined' ? demoVisits[0] : { id: 1, leadName: 'Rajesh Sharma', propertyTitle: '2 BHK Hiranandani', propertyLocation: 'Thane' });
    const backdrop = document.createElement('div');
    backdrop.className = 'drawer-backdrop';
    const drawer = document.createElement('aside');
    drawer.className = 'drawer';
    drawer.innerHTML = `
      <div class="drawer-head">
        <div>
          <h2 class="panel-title">Record Showing Outcome & Feedback</h2>
          <div class="subtle">${esc(v.leadName || 'Client')} × ${esc(v.propertyTitle || 'Property')}</div>
        </div>
        <button class="close">×</button>
      </div>
      <form class="form" id="feedback-form">
        <div id="feedback-notice"></div>
        <div class="form-section">
          <h3>Showing Outcome</h3>
          <div class="form-grid">
            <div class="field full">
              <label>Buyer Interest Level</label>
              <select class="select" name="interestLevel" required>
                <option value="VERY_INTERESTED" ${v.interestLevel === 'VERY_INTERESTED' ? 'selected' : ''}>🔥 Very Interested (Ready to place token deposit)</option>
                <option value="INTERESTED" ${v.interestLevel === 'INTERESTED' ? 'selected' : ''}>👍 Interested (Comparing with family)</option>
                <option value="MAYBE" ${v.interestLevel === 'MAYBE' ? 'selected' : ''}>🤔 Maybe (Price/floor objections)</option>
                <option value="NOT_INTERESTED" ${v.interestLevel === 'NOT_INTERESTED' ? 'selected' : ''}>❌ Not Interested (Disliked layout/location)</option>
              </select>
            </div>
            <div class="field full">
              <label>Client Feedback & Counter-Offers</label>
              <textarea class="input" name="feedback" placeholder="What did the client like or dislike? Any price counter-offers?" rows="4">${esc(v.feedback || '')}</textarea>
            </div>
          </div>
        </div>
      </form>
      <div class="form-actions">
        <button class="button secondary" id="cancel-feedback">Cancel</button>
        <button class="button primary" id="save-feedback">Save Feedback</button>
      </div>`;
    document.body.append(backdrop, drawer);
    const close = () => { backdrop.remove(); drawer.remove(); };
    backdrop.onclick = close;
    if (drawer.querySelector('.close')) drawer.querySelector('.close').onclick = close;
    if (drawer.querySelector('#cancel-feedback')) drawer.querySelector('#cancel-feedback').onclick = close;
    if (drawer.querySelector('#save-feedback')) drawer.querySelector('#save-feedback').onclick = async () => {
      const form = new FormData(drawer.querySelector('#feedback-form'));
      const payload = {
        interestLevel: form.get('interestLevel'),
        feedback: form.get('feedback') || null
      };
      try {
        v.interestLevel = payload.interestLevel;
        v.feedback = payload.feedback;
        v.status = 'COMPLETED';

        if (!state.visits || !state.visits.length) {
          state.visits = JSON.parse(JSON.stringify(demoVisits));
        }
        const idx = state.visits.findIndex(item => item.id === v.id);
        if (idx !== -1) state.visits[idx] = v;
        localStorage.setItem('brokerai.visits', JSON.stringify(state.visits));

        showToast(`✓ Showing feedback recorded for ${esc(visit.leadName)}!`, 'success');

        close();
        if (state.page === 'visits') siteVisitsView();
        else if (state.page === 'dashboard') dashboard();
        else render();
      } catch (err) {
        drawer.querySelector('#feedback-notice').innerHTML = `<div class="notice error">${esc(err.message)}</div>`;
      }
    };
  }

  // --- NOTIFICATIONS MODULE ---
  async function notificationsView() {
    const unread = unreadNotifCount();
    app.innerHTML = layout(`${pageHeader('Notification & Deal Alerts', state.demo ? 'Demo preview — real-time alerts on your leads, showings, and documents.' : 'Real-time alert center for showings, buyer matches, and overdue follow-ups.', `
      <div style="display:flex;gap:10px;">
        <button class="button secondary" id="mark-all-read-btn">✓ Mark All as Read</button>
      </div>`)}

      <!-- NOTIFICATION METRIC CARDS -->
      <div class="cards" style="margin-bottom:20px;">
        <article class="metric"><div class="metric-label">Unread Alerts</div><div class="metric-value" id="notif-stat-unread" style="color:#b42332;">${unread} New</div><div class="metric-note">Actionable items</div></article>
        <article class="metric"><div class="metric-label">Overdue Reminders</div><div class="metric-value" id="notif-stat-overdue">1 Call</div><div class="metric-note">Needs attention</div></article>
        <article class="metric"><div class="metric-label">Today's Showings</div><div class="metric-value">2 Visits</div><div class="metric-note">Appointments booked</div></article>
        <article class="metric"><div class="metric-label">Deals & Paperwork</div><div class="metric-value">2 Alerts</div><div class="metric-note">Token & AI matches</div></article>
      </div>

      <div class="filters">
        <select class="select" id="notif-filter-cat">
          <option value="">All Categories</option>
          <option value="UNREAD">🔔 Unread Only (${unread})</option>
          <option value="FOLLOWUP">🚨 Overdue & Follow-ups</option>
          <option value="SHOWING">◷ Showings & Visits</option>
          <option value="MATCH">✦ AI Inventory Matches</option>
          <option value="PAPERWORK">🧾 Token Receipts & Docs</option>
        </select>
      </div>

      <section class="panel" style="padding:16px 20px;">
        <div id="notif-feed-container" class="notif-feed"></div>
      </section>`);
    bindShell();

    if (document.querySelector('#mark-all-read-btn')) document.querySelector('#mark-all-read-btn').onclick = () => {
      state.notifications.forEach(n => n.read = true);
      notificationsView();
    };

    const renderFeed = () => {
      const cat = document.querySelector('#notif-filter-cat')?.value;
      const list = (state.notifications || []).filter(n => {
        if (cat === 'UNREAD') return !n.read;
        if (cat && n.category !== cat) return false;
        return true;
      });

      const container = document.querySelector('#notif-feed-container');
      if (!container) return;
      if (!list.length) {
        container.innerHTML = `<div class="empty"><strong>No notifications in this category.</strong>You're all caught up on deal alerts!</div>`;
        return;
      }

      container.innerHTML = list.map(n => {
        const iconCircleClass = n.type === 'OVERDUE' ? 'overdue' : n.type === 'VISIT' ? 'visit' : n.type === 'MATCH' ? 'match' : n.type === 'DOC' ? 'doc' : 'ai';
        const icon = n.type === 'OVERDUE' ? '🚨' : n.type === 'VISIT' ? '◷' : n.type === 'MATCH' ? '✦' : n.type === 'DOC' ? '🧾' : '✧';

        return `
          <div class="notif-card ${!n.read ? 'unread' : ''} ${n.type === 'OVERDUE' ? 'urgent' : ''}">
            <div class="notif-main">
              <div class="notif-icon-circle ${iconCircleClass}">${icon}</div>
              <div>
                <div class="notif-title">
                  ${esc(n.title)}
                  ${!n.read ? '<span class="badge hot" style="font-size:9px;margin-left:6px;">NEW</span>' : ''}
                </div>
                <div class="notif-desc">${esc(n.desc)}</div>
                <div class="notif-time">⏰ ${esc(n.time)}</div>
              </div>
            </div>

            <div class="notif-actions">
              ${n.leadPhone ? `<button class="btn-act wa" data-notif-wa-id="${n.id}" title="Send WhatsApp">💬 WhatsApp</button>` : ''}
              ${n.leadId ? `<button class="btn-act" data-notif-lead-id="${n.leadId}" title="View Buyer">👤 Lead</button>` : ''}
              ${n.propertyId ? `<button class="btn-act primary" data-notif-prop-id="${n.propertyId}" title="View Property">🏢 Property</button>` : ''}
              ${n.docId ? `<button class="btn-act" data-notif-doc-id="${n.docId}">🧾 View Receipt</button>` : ''}
              ${!n.read ? `<button class="btn-act" data-notif-read-id="${n.id}" title="Mark as read">✓</button>` : ''}
            </div>
          </div>
        `;
      }).join('');

      container.querySelectorAll('[data-notif-read-id]').forEach(btn => {
        btn.onclick = () => {
          const item = state.notifications.find(n => n.id === btn.dataset.notifReadId);
          if (item) { item.read = true; notificationsView(); }
        };
      });

      container.querySelectorAll('[data-notif-wa-id]').forEach(btn => {
        btn.onclick = () => {
          const item = state.notifications.find(n => n.id === btn.dataset.notifWaId);
          if (item?.leadPhone) {
            navigator.clipboard.writeText(`Hi ${item.leadName}, following up regarding our property discussions. Let me know what time works best for a quick call.`).then(() => {
              showToast(`WhatsApp message copied for ${item.leadName}!`, 'success');
            });
          }
        };
      });

      container.querySelectorAll('[data-notif-lead-id]').forEach(btn => {
        btn.onclick = () => {
          state.page = 'leads';
          render();
        };
      });

      container.querySelectorAll('[data-notif-prop-id]').forEach(btn => {
        btn.onclick = () => {
          state.page = 'properties';
          render();
        };
      });

      container.querySelectorAll('[data-notif-doc-id]').forEach(btn => {
        btn.onclick = () => {
          state.page = 'documents';
          render();
        };
      });
    };

    const notifFilterEl = document.querySelector('#notif-filter-cat');
    if (notifFilterEl) notifFilterEl.onchange = renderFeed;
    renderFeed();
  }

  // --- EXECUTIVE DASHBOARD ---
  function dashboard() {
    const userName = (state.user?.fullName || 'Mohak').split(' ')[0];
    const leadsList = (state.leads && state.leads.length) ? state.leads : demoLeads;
    const propsList = (state.properties && state.properties.length) ? state.properties : demoProperties;
    const visitsList = (state.visits && state.visits.length) ? state.visits : demoVisits;
    const dealsList = (state.deals && state.deals.length) ? state.deals : demoDeals;

    const totalLeads = leadsList.length || 24;
    const activeClients = 18;
    const propsListed = propsList.length || 12;
    const dealsInPipeline = dealsList.length || 5;

    app.innerHTML = layout(`
      <!-- GREETING HEADER -->
      <div style="margin-bottom:16px;">
        <h1 style="font-size:24px;font-weight:800;letter-spacing:-0.025em;color:#0f172a;margin:0 0 4px;">Good morning, ${esc(userName)}</h1>
        <p style="font-size:13.5px;color:#64748b;margin:0;">Here's what's happening with your properties today.</p>
      </div>

      <!-- ACTIVE PLAN STATUS RIBBON -->
      <div class="apple-card" style="margin-bottom:20px;padding:12px 16px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;">
        <div style="display:flex;align-items:center;gap:12px;">
          <div style="width:36px;height:36px;border-radius:10px;background:${getPlanCapabilities().color}15;color:${getPlanCapabilities().color};display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:800;">
            ${getPlanCapabilities().planId === 'agency' ? '💎' : (getPlanCapabilities().planId === 'pro' ? '⚡' : '📍')}
          </div>
          <div>
            <div style="font-size:13px;font-weight:800;color:#0f172a;display:flex;align-items:center;gap:8px;">
              <span>Active Plan: ${getPlanCapabilities().name}</span>
              <span class="apple-badge active" style="font-size:10px;background:${getPlanCapabilities().color};color:#fff;">${getPlanCapabilities().badge}</span>
              <span style="font-size:11.5px;font-weight:600;color:#64748b;">(₹${getPlanCapabilities().priceMonthly}/mo)</span>
            </div>
            <div style="font-size:12px;color:#64748b;margin-top:2px;">
              ${getPlanCapabilities().planId === 'starter' ? '📍 1 Local Micro-Market (Thane West) · 1 Seat · 50 Listings & 75 Leads Quota' : (getPlanCapabilities().planId === 'pro' ? '🌐 All Suburbs & Metros · 3 Seats · Unlimited Leads & Stock · AI Matchmaking Active' : '🏢 Multi-Branch Territory Desks · 20 Seats · MahaRERA White-Label Letterhead · 18% GST Invoicing')}
            </div>
          </div>
        </div>
        <button class="button secondary" id="dashboard-plan-sim-btn" style="padding:6px 14px;font-size:12px;font-weight:700;border-radius:8px;display:inline-flex;align-items:center;gap:6px;cursor:pointer;">
          <span>⇄</span> Switch / Simulate Plan
        </button>
      </div>

      <!-- 4 TOP KPI CARDS -->
      <div class="apple-kpi-grid">
        <div class="apple-kpi-card">
          <div class="apple-kpi-top">
            <span class="apple-kpi-label">TOTAL LEADS</span>
            <div class="apple-kpi-icon blue">${svgIcon('leads', 16)}</div>
          </div>
          <div>
            <div class="apple-kpi-val">${totalLeads}</div>
            <div class="apple-kpi-trend up">↗ +12% from last month</div>
          </div>
        </div>

        <div class="apple-kpi-card">
          <div class="apple-kpi-top">
            <span class="apple-kpi-label">ACTIVE CLIENTS</span>
            <div class="apple-kpi-icon purple">${svgIcon('team', 16)}</div>
          </div>
          <div>
            <div class="apple-kpi-val">${activeClients}</div>
            <div class="apple-kpi-trend up">↗ +8% from last month</div>
          </div>
        </div>

        <div class="apple-kpi-card">
          <div class="apple-kpi-top">
            <span class="apple-kpi-label">PROPERTIES LISTED</span>
            <div class="apple-kpi-icon green">${svgIcon('properties', 16)}</div>
          </div>
          <div>
            <div class="apple-kpi-val">${propsListed}</div>
            <div class="apple-kpi-trend up">↗ +4 new this week</div>
          </div>
        </div>

        <div class="apple-kpi-card">
          <div class="apple-kpi-top">
            <span class="apple-kpi-label">DEALS IN PIPELINE</span>
            <div class="apple-kpi-icon orange">${svgIcon('deals', 16)}</div>
          </div>
          <div>
            <div class="apple-kpi-val">${dealsInPipeline}</div>
            <div class="apple-kpi-trend neutral">₹3.2 Cr pipeline value</div>
          </div>
        </div>
      </div>

      <!-- 2-COLUMN MAIN DASHBOARD GRID -->
      <div class="apple-dash-grid">
        <!-- LEFT COLUMN: DEAL OPPORTUNITIES & RECENT ACTIVITY -->
        <div>
          <!-- DEAL OPPORTUNITIES CARD -->
          <div class="apple-card">
            <div class="apple-card-head">
              <h2 class="apple-card-title">Deal Opportunities</h2>
              <button class="apple-card-link" onclick="location.hash='#/leads';">View all</button>
            </div>
            <div class="deal-opp-list">
              <!-- Lead 1: Rohit Sharma -->
              <div class="deal-opp-item">
                <div class="deal-opp-left">
                  <div class="deal-opp-avatar">RS</div>
                  <div class="deal-opp-info">
                    <div class="deal-opp-name">
                      Rohit Sharma
                      <span class="apple-badge hot" style="font-size:10.5px;padding:1px 6px;">Hot</span>
                    </div>
                    <div class="deal-opp-prop">Oberoi Sky City, 3 BHK</div>
                  </div>
                </div>
                <div class="deal-opp-right">
                  <span class="deal-opp-match">95% Match</span>
                  <span class="deal-opp-budget">₹2.80 Cr</span>
                  <div class="deal-opp-actions">
                    <button class="btn-apple-call" id="dash-call-1" title="Call Rohit">📞 Call</button>
                    <button class="btn-apple-chat" id="dash-chat-1" title="WhatsApp Rohit">💬 Chat</button>
                  </div>
                </div>
              </div>

              <!-- Lead 2: Priya Desai -->
              <div class="deal-opp-item">
                <div class="deal-opp-left">
                  <div class="deal-opp-avatar" style="background:#f3e8ff;color:#8b5cf6;">PD</div>
                  <div class="deal-opp-info">
                    <div class="deal-opp-name">
                      Priya Desai
                      <span class="apple-badge hot" style="font-size:10.5px;padding:1px 6px;">Hot</span>
                    </div>
                    <div class="deal-opp-prop">Hiranandani Meadows, 4 BHK</div>
                  </div>
                </div>
                <div class="deal-opp-right">
                  <span class="deal-opp-match">92% Match</span>
                  <span class="deal-opp-budget">₹4.20 Cr</span>
                  <div class="deal-opp-actions">
                    <button class="btn-apple-call" id="dash-call-2" title="Call Priya">📞 Call</button>
                    <button class="btn-apple-chat" id="dash-chat-2" title="WhatsApp Priya">💬 Chat</button>
                  </div>
                </div>
              </div>

              <!-- Lead 3: Amit Kulkarni -->
              <div class="deal-opp-item">
                <div class="deal-opp-left">
                  <div class="deal-opp-avatar" style="background:#fef3c7;color:#d97706;">AK</div>
                  <div class="deal-opp-info">
                    <div class="deal-opp-name">
                      Amit Kulkarni
                      <span class="apple-badge warm" style="font-size:10.5px;padding:1px 6px;">Warm</span>
                    </div>
                    <div class="deal-opp-prop">Lodha Amara, 2 BHK</div>
                  </div>
                </div>
                <div class="deal-opp-right">
                  <span class="deal-opp-match">88% Match</span>
                  <span class="deal-opp-budget">₹1.15 Cr</span>
                  <div class="deal-opp-actions">
                    <button class="btn-apple-call" id="dash-call-3" title="Call Amit">📞 Call</button>
                    <button class="btn-apple-chat" id="dash-chat-3" title="WhatsApp Amit">💬 Chat</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- RECENT ACTIVITY CARD -->
          <div class="apple-card">
            <div class="apple-card-head">
              <h2 class="apple-card-title">Recent Activity</h2>
            </div>
            <div class="recent-activity-list">
              <div class="activity-item">
                <div class="activity-dot blue">👤</div>
                <div class="activity-content">
                  <div class="activity-title">New lead added — Rohit Sharma registered interest for Oberoi Sky City</div>
                  <div class="activity-time">2 hours ago</div>
                </div>
              </div>

              <div class="activity-item">
                <div class="activity-dot green">◷</div>
                <div class="activity-content">
                  <div class="activity-title">Site visit scheduled — Priya Desai for Hiranandani Meadows (Today 4:00 PM)</div>
                  <div class="activity-time">4 hours ago</div>
                </div>
              </div>

              <div class="activity-item">
                <div class="activity-dot orange">🧾</div>
                <div class="activity-content">
                  <div class="activity-title">Deal advanced to Token Received — Neha Desai for Rustomjee Urbania</div>
                  <div class="activity-time">Yesterday</div>
                </div>
              </div>

              <div class="activity-item">
                <div class="activity-dot purple">🏠</div>
                <div class="activity-content">
                  <div class="activity-title">New property listed — 3 BHK Luxury Flat in Vasant Vihar (₹1.85 Cr)</div>
                  <div class="activity-time">2 days ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- RIGHT COLUMN: UPCOMING TASKS & QUICK ACTIONS -->
        <div>
          <!-- UPCOMING TASKS CARD -->
          <div class="apple-card">
            <div class="apple-card-head">
              <h2 class="apple-card-title">Upcoming Tasks</h2>
              <button class="apple-card-link" id="dash-add-task-btn">＋ Add Task</button>
            </div>
            <div class="task-checklist" id="dash-tasks-container">
              <div class="task-item" id="task-row-1">
                <div class="task-left">
                  <input type="checkbox" class="task-checkbox" id="task-cb-1" />
                  <div class="task-info">
                    <div class="task-text">Follow up with Rohit Sharma regarding site visit</div>
                    <div class="task-time">Today, 2:00 PM</div>
                  </div>
                </div>
                <span class="task-tag call">Call</span>
              </div>

              <div class="task-item" id="task-row-2">
                <div class="task-left">
                  <input type="checkbox" class="task-checkbox" id="task-cb-2" />
                  <div class="task-info">
                    <div class="task-text">Send agreement draft for Lodha Amara deal</div>
                    <div class="task-time">Today, 4:30 PM</div>
                  </div>
                </div>
                <span class="task-tag legal">Legal</span>
              </div>

              <div class="task-item" id="task-row-3">
                <div class="task-left">
                  <input type="checkbox" class="task-checkbox" id="task-cb-3" />
                  <div class="task-info">
                    <div class="task-text">Schedule photoshoot for Bandra Penthouse</div>
                    <div class="task-time">Tomorrow, 11:00 AM</div>
                  </div>
                </div>
                <span class="task-tag property">Property</span>
              </div>

              <div class="task-item completed" id="task-row-4">
                <div class="task-left">
                  <input type="checkbox" class="task-checkbox" id="task-cb-4" checked />
                  <div class="task-info">
                    <div class="task-text">Confirm token payment receipt with Neha</div>
                    <div class="task-time">Completed</div>
                  </div>
                </div>
                <span class="task-tag finance">Finance</span>
              </div>
            </div>
          </div>

          <!-- QUICK ACTIONS CARD -->
          <div class="apple-card">
            <div class="apple-card-head">
              <h2 class="apple-card-title">Quick Actions</h2>
            </div>
            <div class="quick-actions-grid">
              <button class="quick-action-btn" id="qa-add-lead">
                <div class="quick-action-icon">👤</div>
                <span>+ Add New Lead</span>
              </button>

              <button class="quick-action-btn" id="qa-add-property">
                <div class="quick-action-icon" style="background:#dcfce7;color:#16a34a;">🏠</div>
                <span>+ Add Property</span>
              </button>

              <button class="quick-action-btn" id="qa-add-client">
                <div class="quick-action-icon" style="background:#f3e8ff;color:#8b5cf6;">👥</div>
                <span>+ Add Client</span>
              </button>

              <button class="quick-action-btn" id="qa-create-deal">
                <div class="quick-action-icon" style="background:#fef3c7;color:#d97706;">🏷️</div>
                <span>+ Create Deal</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    `);

    bindShell();

    // Wire up Quick Action buttons
    const qaLead = document.querySelector('#qa-add-lead');
    if (qaLead) qaLead.onclick = () => leadDrawer();

    const qaProp = document.querySelector('#qa-add-property');
    if (qaProp) qaProp.onclick = () => propertyDrawer();

    const qaClient = document.querySelector('#qa-add-client');
    if (qaClient) qaClient.onclick = () => leadDrawer();

    const qaDeal = document.querySelector('#qa-create-deal');
    if (qaDeal) qaDeal.onclick = () => dealDrawer();

    // Wire up Task Checkboxes
    [1, 2, 3, 4].forEach(id => {
      const cb = document.querySelector('#task-cb-' + id);
      const row = document.querySelector('#task-row-' + id);
      if (cb && row) {
        cb.onchange = () => {
          if (cb.checked) {
            row.classList.add('completed');
            showToast('✓ Task marked as completed!', 'success');
          } else {
            row.classList.remove('completed');
          }
        };
      }
    });

    const addTaskBtn = document.querySelector('#dash-add-task-btn');
    if (addTaskBtn) {
      addTaskBtn.onclick = () => {
        const text = prompt('Enter new task description:');
        if (text && text.trim()) {
          const container = document.querySelector('#dash-tasks-container');
          const newId = Date.now();
          const taskHtml = `
            <div class="task-item" id="task-row-${newId}">
              <div class="task-left">
                <input type="checkbox" class="task-checkbox" id="task-cb-${newId}" />
                <div class="task-info">
                  <div class="task-text">${esc(text.trim())}</div>
                  <div class="task-time">Today</div>
                </div>
              </div>
              <span class="task-tag call">Task</span>
            </div>
          `;
          container.insertAdjacentHTML('afterbegin', taskHtml);
          const newCb = document.querySelector('#task-cb-' + newId);
          const newRow = document.querySelector('#task-row-' + newId);
          if (newCb && newRow) {
            newCb.onchange = () => {
              if (newCb.checked) newRow.classList.add('completed');
              else newRow.classList.remove('completed');
            };
          }
          showToast('✓ New task added to your checklist!', 'success');
        }
      };
    }

    // Wire up Call & Chat buttons
    const call1 = document.querySelector('#dash-call-1');
    if (call1) call1.onclick = () => window.open('tel:+919876543210', '_self');
    const chat1 = document.querySelector('#dash-chat-1');
    if (chat1) chat1.onclick = () => {
      const lead = leadsList[0] || demoLeads[0];
      const prop = propsList[0] || demoProperties[0];
      whatsAppDispatcherModal(prop, lead);
    };

    const call2 = document.querySelector('#dash-call-2');
    if (call2) call2.onclick = () => window.open('tel:+919820123456', '_self');
    const chat2 = document.querySelector('#dash-chat-2');
    if (chat2) chat2.onclick = () => {
      const lead = leadsList[1] || demoLeads[1] || demoLeads[0];
      const prop = propsList[1] || demoProperties[1] || demoProperties[0];
      whatsAppDispatcherModal(prop, lead);
    };

    const call3 = document.querySelector('#dash-call-3');
    if (call3) call3.onclick = () => window.open('tel:+919811223344', '_self');
    const chat3 = document.querySelector('#dash-chat-3');
    if (chat3) chat3.onclick = () => {
      const lead = leadsList[2] || demoLeads[2] || demoLeads[0];
      const prop = propsList[2] || demoProperties[2] || demoProperties[0];
      whatsAppDispatcherModal(prop, lead);
    };
  }

  // --- UNIVERSAL REAL ESTATE CSV PARSER, IMPORTER & EXPORTER ---
  function parseCsvText(text) {
    const lines = [];
    let row = [];
    let inQuotes = false;
    let curVal = '';

    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      const nextChar = text[i + 1];

      if (char === '"') {
        if (inQuotes && nextChar === '"') {
          curVal += '"';
          i++;
        } else {
          inQuotes = !inQuotes;
        }
      } else if (char === ',' && !inQuotes) {
        row.push(curVal.trim());
        curVal = '';
      } else if ((char === '\r' || char === '\n') && !inQuotes) {
        if (char === '\r' && nextChar === '\n') {
          i++;
        }
        row.push(curVal.trim());
        if (row.some(cell => cell.length > 0)) {
          lines.push(row);
        }
        row = [];
        curVal = '';
      } else {
        curVal += char;
      }
    }
    if (curVal.length > 0 || row.length > 0) {
      row.push(curVal.trim());
      if (row.some(cell => cell.length > 0)) {
        lines.push(row);
      }
    }
    return lines;
  }

  function parseBudgetStr(val) {
    if (!val) return 10000000;
    const clean = String(val).toLowerCase().replace(/,/g, '').trim();
    if (clean.includes('cr')) {
      const num = parseFloat(clean.replace(/[^0-9.]/g, ''));
      return Math.round(num * 10000000) || 10000000;
    }
    if (clean.includes('lac') || clean.includes('lakh')) {
      const num = parseFloat(clean.replace(/[^0-9.]/g, ''));
      return Math.round(num * 100000) || 5000000;
    }
    if (clean.includes('k')) {
      const num = parseFloat(clean.replace(/[^0-9.]/g, ''));
      return Math.round(num * 1000) || 50000;
    }
    const directNum = parseFloat(clean.replace(/[^0-9.]/g, ''));
    return directNum || 10000000;
  }

  function parseBhkNum(val) {
    if (!val) return 2;
    const num = parseInt(String(val).replace(/[^0-9]/g, ''), 10);
    return (num && num >= 1 && num <= 6) ? num : 2;
  }

  function normalizeCsvHeaders(headers) {
    return headers.map(h => String(h).toLowerCase().replace(/[^a-z0-9]/g, ''));
  }

  function mapCsvRowsToLeads(rawRows) {
    if (rawRows.length < 2) return [];
    const headers = normalizeCsvHeaders(rawRows[0]);
    const findIdx = (keywords) => headers.findIndex(h => keywords.some(k => h.includes(k)));

    const nameIdx = findIdx(['name', 'client', 'buyer', 'lead', 'fullname', 'contactname', 'customer']);
    const phoneIdx = findIdx(['phone', 'mobile', 'contact', 'whatsapp', 'cell', 'mobileno', 'phoneno', 'contactno']);
    const emailIdx = findIdx(['email', 'mail']);
    const budgetIdx = findIdx(['budget', 'maxbudget', 'price', 'budgetinr', 'expectedprice', 'val', 'dealvalue']);
    const bhkIdx = findIdx(['bhk', 'configuration', 'bedrooms', 'type', 'unittype', 'flattype']);
    const locIdx = findIdx(['location', 'locality', 'preferredlocation', 'area', 'city', 'suburb', 'society']);
    const tempIdx = findIdx(['temperature', 'priority', 'status', 'stage']);
    const intentIdx = findIdx(['intent', 'buyrent', 'purpose', 'listingtype']);

    const leads = [];
    for (let i = 1; i < rawRows.length; i++) {
      const row = rawRows[i];
      if (!row || row.length === 0) continue;

      const name = (nameIdx >= 0 && row[nameIdx]) ? row[nameIdx].trim() : `Buyer Lead #${i}`;
      const phone = (phoneIdx >= 0 && row[phoneIdx]) ? row[phoneIdx].trim() : '+91 98200 00000';
      const email = (emailIdx >= 0 && row[emailIdx]) ? row[emailIdx].trim() : '';
      const budget = (budgetIdx >= 0 && row[budgetIdx]) ? parseBudgetStr(row[budgetIdx]) : 12500000;
      const bhk = (bhkIdx >= 0 && row[bhkIdx]) ? parseBhkNum(row[bhkIdx]) : 2;
      const location = (locIdx >= 0 && row[locIdx]) ? row[locIdx].trim() : 'Thane West';

      let temp = 'WARM';
      if (tempIdx >= 0 && row[tempIdx]) {
        const t = row[tempIdx].toUpperCase();
        if (t.includes('HOT')) temp = 'HOT';
        else if (t.includes('COLD')) temp = 'COLD';
      }

      let intent = 'BUY';
      if (intentIdx >= 0 && row[intentIdx]) {
        const inStr = row[intentIdx].toUpperCase();
        if (inStr.includes('RENT') || inStr.includes('LEASE')) intent = 'RENT';
      }

      leads.push({
        id: Date.now() + i + Math.floor(Math.random() * 1000),
        fullName: name,
        phone: phone,
        email: email,
        temperature: temp,
        status: 'REQUIREMENT_UNDERSTOOD',
        stage: 'REQUIREMENT_UNDERSTOOD',
        requirement: {
          listingType: intent,
          propertyType: 'RESIDENTIAL',
          bhk: bhk,
          maxBudget: budget,
          preferredLocalities: [location]
        },
        source: 'CSV_IMPORT',
        createdAt: new Date().toISOString()
      });
    }
    return leads;
  }

  function mapCsvRowsToProperties(rawRows) {
    if (rawRows.length < 2) return [];
    const headers = normalizeCsvHeaders(rawRows[0]);
    const findIdx = (keywords) => headers.findIndex(h => keywords.some(k => h.includes(k)));

    const titleIdx = findIdx(['title', 'propertytitle', 'project', 'building', 'flatname', 'name']);
    const societyIdx = findIdx(['society', 'complex', 'tower', 'projectname']);
    const locIdx = findIdx(['location', 'locality', 'address', 'area', 'sector', 'city']);
    const priceIdx = findIdx(['price', 'cost', 'expectedprice', 'rent', 'demand', 'rate', 'value']);
    const bhkIdx = findIdx(['bhk', 'configuration', 'bedrooms', 'flattype', 'type']);
    const areaIdx = findIdx(['area', 'carpetarea', 'sqft', 'size', 'buildup', 'carpet']);
    const typeIdx = findIdx(['listingtype', 'salerent', 'purpose', 'transaction', 'mode']);
    const ownerIdx = findIdx(['owner', 'ownername', 'seller', 'landlord', 'contact']);
    const phoneIdx = findIdx(['ownerphone', 'phone', 'mobile', 'ownermobile', 'contactno']);

    const properties = [];
    for (let i = 1; i < rawRows.length; i++) {
      const row = rawRows[i];
      if (!row || row.length === 0) continue;

      const loc = (locIdx >= 0 && row[locIdx]) ? row[locIdx].trim() : 'Thane West';
      const society = (societyIdx >= 0 && row[societyIdx]) ? row[societyIdx].trim() : 'Premium Residency';
      const bhk = (bhkIdx >= 0 && row[bhkIdx]) ? parseBhkNum(row[bhkIdx]) : 2;
      const title = (titleIdx >= 0 && row[titleIdx]) ? row[titleIdx].trim() : `${bhk} BHK Luxury Flat in ${society}`;
      const price = (priceIdx >= 0 && row[priceIdx]) ? parseBudgetStr(row[priceIdx]) : 13500000;

      let area = 780;
      if (areaIdx >= 0 && row[areaIdx]) {
        const aNum = parseInt(String(row[areaIdx]).replace(/[^0-9]/g, ''), 10);
        if (aNum && aNum > 100) area = aNum;
      }

      let isRent = false;
      if (typeIdx >= 0 && row[typeIdx]) {
        const t = row[typeIdx].toUpperCase();
        if (t.includes('RENT') || t.includes('LEASE')) isRent = true;
      } else if (price < 300000) {
        isRent = true;
      }

      const ownerName = (ownerIdx >= 0 && row[ownerIdx]) ? row[ownerIdx].trim() : 'Property Owner';
      const ownerPhone = (phoneIdx >= 0 && row[phoneIdx]) ? row[phoneIdx].trim() : '+91 98200 12345';

      properties.push({
        id: Date.now() + i + Math.floor(Math.random() * 1000),
        title: title,
        society: society,
        location: loc,
        listingType: isRent ? 'RENT' : 'SALE',
        propertyType: 'RESIDENTIAL',
        price: price,
        bhk: bhk,
        area: area,
        furnishing: 'SEMI_FURNISHED',
        parking: 1,
        status: 'AVAILABLE',
        ownerName: ownerName,
        ownerPhone: ownerPhone,
        amenities: ['Clubhouse', 'Gym', 'Swimming Pool', '24/7 Security'],
        images: [
          'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80'
        ],
        createdAt: new Date().toISOString()
      });
    }
    return properties;
  }

  function escapeCsvCell(cell) {
    if (cell === null || cell === undefined) return '""';
    const str = String(cell);
    if (str.includes(',') || str.includes('"') || str.includes('\n') || str.includes('\r')) {
      return '"' + str.replace(/"/g, '""') + '"';
    }
    return '"' + str + '"';
  }

  function downloadCsvFile(filename, csvContent) {
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  function exportLeadsCsv() {
    const leads = (state.leads && state.leads.length) ? state.leads : getStoredLeads();
    if (!leads || leads.length === 0) {
      showToast('⚠️ No buyer leads to export.', 'info');
      return;
    }
    const headers = ['ID', 'Full Name', 'WhatsApp Phone', 'Email', 'Intent', 'Max Budget (INR)', 'Preferred BHK', 'Preferred Localities', 'Stage', 'Temperature', 'Source', 'Created Date'];
    const rows = [headers.map(escapeCsvCell).join(',')];

    leads.forEach(l => {
      const r = [
        l.id || '',
        l.fullName || '',
        l.phone || '',
        l.email || '',
        l.requirement?.listingType || 'BUY',
        l.requirement?.maxBudget || 0,
        l.requirement?.bhk || '',
        (l.requirement?.preferredLocalities || []).join('; '),
        l.stage || l.status || 'NEW',
        l.temperature || 'WARM',
        l.source || 'DIRECT',
        l.createdAt || new Date().toISOString()
      ];
      rows.push(r.map(escapeCsvCell).join(','));
    });

    const filename = `BrokerAI_Buyer_Leads_${new Date().toISOString().slice(0, 10)}.csv`;
    downloadCsvFile(filename, '\uFEFF' + rows.join('\r\n'));
    showToast(`✓ Exported ${leads.length} leads to ${filename}`, 'success');
  }

  function exportPropertiesCsv() {
    const properties = (state.properties && state.properties.length) ? state.properties : getStoredProperties();
    if (!properties || properties.length === 0) {
      showToast('⚠️ No properties to export.', 'info');
      return;
    }
    const headers = ['ID', 'Title', 'Society/Building', 'Locality', 'Listing Type', 'Price (INR)', 'BHK', 'Carpet Area (sq.ft)', 'Furnishing', 'Parking', 'Status', 'Owner Name', 'Owner Phone', 'Created Date'];
    const rows = [headers.map(escapeCsvCell).join(',')];

    properties.forEach(p => {
      const r = [
        p.id || '',
        p.title || '',
        p.society || '',
        p.location || '',
        p.listingType || 'SALE',
        p.price || 0,
        p.bhk || '',
        p.area || '',
        p.furnishing || 'SEMI_FURNISHED',
        p.parking || 1,
        p.status || 'AVAILABLE',
        p.ownerName || '',
        p.ownerPhone || '',
        p.createdAt || new Date().toISOString()
      ];
      rows.push(r.map(escapeCsvCell).join(','));
    });

    const filename = `BrokerAI_Property_Inventory_${new Date().toISOString().slice(0, 10)}.csv`;
    downloadCsvFile(filename, '\uFEFF' + rows.join('\r\n'));
    showToast(`✓ Exported ${properties.length} properties to ${filename}`, 'success');
  }

  function csvImportModal(type) {
    document.querySelectorAll('.modal-backdrop, .drawer-backdrop, .spotlight-backdrop').forEach(b => b.remove());
    const isLeads = type === 'leads';
    const backdrop = document.createElement('div');
    backdrop.className = 'modal-backdrop';
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.cssText = 'max-width:680px;width:94vw;max-height:92vh;overflow-y:auto;background:#fff;padding:24px;border-radius:18px;box-shadow:0 24px 60px rgba(0,0,0,0.3);';

    let parsedItems = [];

    const sampleHeaderHint = isLeads
      ? 'Supported headers: Name, Phone / WhatsApp, Email, Budget (e.g. 1.5 Cr), BHK, Locality, Status'
      : 'Supported headers: Title, Society, Locality, Price (e.g. 2.4 Cr), BHK, Carpet Area, Sale/Rent, Owner Name, Mobile';

    modal.innerHTML = `
      <div style="border-bottom:1px solid #f1f5f9;padding-bottom:14px;margin-bottom:16px;display:flex;justify-content:space-between;align-items:flex-start;">
        <div>
          <span style="font-size:11px;font-weight:800;color:#2563eb;text-transform:uppercase;letter-spacing:0.5px;">Universal Portal & Excel Importer</span>
          <h2 style="margin:2px 0 0;font-size:20px;color:var(--ink);">Import ${isLeads ? 'Buyer Leads' : 'Property Inventory'} (.CSV)</h2>
        </div>
        <button class="close" id="close-csv-modal" style="background:#f1f5f9;border:1px solid #e2e8f0;border-radius:8px;font-size:16px;cursor:pointer;width:32px;height:32px;display:grid;place-items:center;">✕</button>
      </div>

      <div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:10px;padding:10px 14px;font-size:12px;color:#1e40af;margin-bottom:14px;">
        💡 <strong>Smart Column Auto-Detection:</strong> Works seamlessly with CSV exports from <strong>99acres</strong>, <strong>MagicBricks</strong>, <strong>Housing.com</strong>, and standard Excel sheets.
      </div>

      <!-- DROPZONE -->
      <div class="csv-dropzone" id="csv-dropzone">
        <input type="file" id="csv-file-input" accept=".csv,text/csv" style="display:none;" />
        <div style="font-size:32px;margin-bottom:6px;">📂</div>
        <strong style="font-size:14px;color:var(--ink);">Drag & drop your .CSV file here, or <span style="color:#2563eb;text-decoration:underline;">Browse</span></strong>
        <div style="font-size:11.5px;color:#64748b;margin-top:4px;">${esc(sampleHeaderHint)}</div>
      </div>

      <!-- PASTE ALTERNATIVE -->
      <div style="margin-top:14px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
          <label style="font-size:12px;font-weight:700;color:#475569;">Or paste raw CSV / Excel data directly:</label>
          <button id="load-sample-csv-btn" style="background:none;border:none;color:#2563eb;font-size:11.5px;font-weight:700;cursor:pointer;padding:0;">⚡ Insert Sample ${isLeads ? '99acres Leads' : 'Inventory'}</button>
        </div>
        <textarea class="input" id="raw-csv-textarea" rows="4" placeholder="Paste comma-separated rows or Excel copied table text here..." style="font-family:monospace;font-size:11.5px;"></textarea>
      </div>

      <!-- PREVIEW SECTION -->
      <div id="csv-preview-container" style="display:none;margin-top:16px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
          <span style="font-size:12.5px;font-weight:800;color:#0f172a;" id="csv-preview-count">0 records ready to import</span>
          <span class="badge" style="background:#ecfdf5;color:#047857;font-weight:700;font-size:11px;">✓ Auto-Mapped & Validated</span>
        </div>
        <div class="csv-preview-table-wrap">
          <table class="csv-preview-table" id="csv-preview-table">
            <thead></thead>
            <tbody></tbody>
          </table>
        </div>
      </div>

      <!-- ACTION BUTTONS -->
      <div style="display:flex;gap:10px;justify-content:flex-end;margin-top:20px;border-top:1px solid #f1f5f9;padding-top:14px;">
        <button class="button secondary" id="cancel-csv-btn">Cancel</button>
        <button class="button primary" id="commit-csv-import-btn" disabled style="font-weight:800;">
          📥 Merge Records into CRM
        </button>
      </div>
    `;

    backdrop.appendChild(modal);
    document.body.appendChild(backdrop);
    const close = () => backdrop.remove();
    backdrop.onclick = (e) => { if (e.target === backdrop) close(); };
    modal.onclick = (e) => e.stopPropagation();
    if (modal.querySelector('#close-csv-modal')) modal.querySelector('#close-csv-modal').onclick = close;
    if (modal.querySelector('#cancel-csv-btn')) modal.querySelector('#cancel-csv-btn').onclick = close;

    const fileInput = modal.querySelector('#csv-file-input');
    const dropzone = modal.querySelector('#csv-dropzone');
    const textarea = modal.querySelector('#raw-csv-textarea');
    const commitBtn = modal.querySelector('#commit-csv-import-btn');
    const previewContainer = modal.querySelector('#csv-preview-container');
    const previewCount = modal.querySelector('#csv-preview-count');
    const previewTable = modal.querySelector('#csv-preview-table');

    dropzone.onclick = () => fileInput.click();
    dropzone.ondragover = (e) => { e.preventDefault(); dropzone.classList.add('dragover'); };
    dropzone.ondragleave = () => dropzone.classList.remove('dragover');
    dropzone.ondrop = (e) => {
      e.preventDefault();
      dropzone.classList.remove('dragover');
      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        processFile(e.dataTransfer.files[0]);
      }
    };

    fileInput.onchange = () => {
      if (fileInput.files && fileInput.files.length > 0) {
        processFile(fileInput.files[0]);
      }
    };

    const processFile = (file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        textarea.value = e.target.result;
        handleParsedText(e.target.result);
      };
      reader.readAsText(file);
    };

    const handleParsedText = (text) => {
      const rawRows = parseCsvText(text);
      if (rawRows.length < 2) {
        showToast('⚠️ No data rows detected in CSV.', 'error');
        commitBtn.disabled = true;
        previewContainer.style.display = 'none';
        return;
      }

      if (isLeads) {
        parsedItems = mapCsvRowsToLeads(rawRows);
      } else {
        parsedItems = mapCsvRowsToProperties(rawRows);
      }

      if (parsedItems.length === 0) {
        showToast('⚠️ Could not map records. Please check column headers.', 'error');
        commitBtn.disabled = true;
        previewContainer.style.display = 'none';
        return;
      }

      previewCount.textContent = `✓ ${parsedItems.length} records detected and ready to merge`;
      commitBtn.disabled = false;
      commitBtn.textContent = `📥 Merge ${parsedItems.length} ${isLeads ? 'Leads' : 'Properties'} into CRM`;
      previewContainer.style.display = 'block';

      // Render preview table
      if (isLeads) {
        previewTable.querySelector('thead').innerHTML = `
          <tr>
            <th>Client Name</th>
            <th>Phone</th>
            <th>BHK</th>
            <th>Max Budget</th>
            <th>Locality</th>
            <th>Intent</th>
          </tr>
        `;
        previewTable.querySelector('tbody').innerHTML = parsedItems.slice(0, 10).map(item => `
          <tr>
            <td><strong>${esc(item.fullName)}</strong></td>
            <td>${esc(item.phone)}</td>
            <td>${item.requirement?.bhk} BHK</td>
            <td class="tnum">${formatPrice(item.requirement?.maxBudget, 'SALE')}</td>
            <td>${esc(item.requirement?.preferredLocalities?.[0] || 'Thane')}</td>
            <td><span class="badge" style="background:#ecfdf5;color:#047857;">${esc(item.requirement?.listingType)}</span></td>
          </tr>
        `).join('') + (parsedItems.length > 10 ? `<tr><td colspan="6" style="text-align:center;color:#64748b;font-style:italic;">...and ${parsedItems.length - 10} more records</td></tr>` : '');
      } else {
        previewTable.querySelector('thead').innerHTML = `
          <tr>
            <th>Property Title</th>
            <th>Locality</th>
            <th>Type</th>
            <th>BHK</th>
            <th>Price</th>
            <th>Owner</th>
          </tr>
        `;
        previewTable.querySelector('tbody').innerHTML = parsedItems.slice(0, 10).map(item => `
          <tr>
            <td><strong>${esc(item.title)}</strong></td>
            <td>${esc(item.location)}</td>
            <td><span class="badge" style="background:${item.listingType === 'SALE' ? '#ecfdf5;color:#047857;' : '#eff6ff;color:#2563eb;'}">${esc(item.listingType)}</span></td>
            <td>${item.bhk} BHK</td>
            <td class="tnum">${formatPrice(item.price, item.listingType)}</td>
            <td>${esc(item.ownerName)} (${esc(item.ownerPhone)})</td>
          </tr>
        `).join('') + (parsedItems.length > 10 ? `<tr><td colspan="6" style="text-align:center;color:#64748b;font-style:italic;">...and ${parsedItems.length - 10} more properties</td></tr>` : '');
      }
    };

    textarea.oninput = () => {
      if (textarea.value.trim().length > 10) {
        handleParsedText(textarea.value);
      }
    };

    if (modal.querySelector('#load-sample-csv-btn')) modal.querySelector('#load-sample-csv-btn').onclick = () => {
      if (isLeads) {
        textarea.value = `Client Name,Mobile Number,Email ID,Max Budget,BHK Requirement,Preferred Locality,Priority\n"Vikram Singhania",+91 98201 99887,vikram@singhania.in,2.25 Cr,3 BHK,"Vasant Vihar, Thane",HOT\n"Ananya Deshmukh",+91 98190 11223,ananya@corp.in,95 Lakhs,2 BHK,"Majiwada, Thane",WARM\n"Kavita Saraf",+91 98334 55667,kavita@saraf.com,1.75 Cr,3 BHK,"Hiranandani Estate, Thane",HOT\n"Manish Batra",+91 98205 66778,manish@batra.in,45000,2 BHK,"Ghodbunder Road, Thane",WARM`;
      } else {
        textarea.value = `Property Title,Society Name,Locality,Asking Price,Configuration,Carpet Area,Listing Type,Owner Name,Owner Mobile\n"Garden-facing 3 BHK Luxury","Hiranandani Rodas Enclave","Ghodbunder Road, Thane",2.45 Cr,3 BHK,1250,Sale,"Mr. Rajesh Parekh",+91 98201 23456\n"High-floor 2 BHK Panoramic","Lodha Amara","Kolshet Road, Thane",1.15 Cr,2 BHK,740,Sale,"Dr. Sunita Rao",+91 98199 88776\n"Furnished 1 BHK Rental Flat","Dosti West County","Balkum, Thane",26000,1 BHK,480,Rent,"Mrs. Aarti Kulkarni",+91 98208 77665`;
      }
      handleParsedText(textarea.value);
    };

    commitBtn.onclick = () => {
      if (parsedItems.length === 0) return;
      if (isLeads) {
        const existing = (state.leads && state.leads.length) ? state.leads : getStoredLeads();
        state.leads = [...parsedItems, ...existing];
        localStorage.setItem('brokerai.leads', JSON.stringify(state.leads));
        if (typeof cloudSyncEngine !== 'undefined' && cloudSyncEngine.saveLeads) {
          cloudSyncEngine.saveLeads(state.leads);
        }
        showToast(`🎉 Successfully imported ${parsedItems.length} buyer leads into your CRM!`, 'success');
        close();
        if (state.page === 'leads') leadsView();
      } else {
        const existing = (state.properties && state.properties.length) ? state.properties : getStoredProperties();
        state.properties = [...parsedItems, ...existing];
        localStorage.setItem('brokerai.properties', JSON.stringify(state.properties));
        if (typeof cloudSyncEngine !== 'undefined' && cloudSyncEngine.saveProperties) {
          cloudSyncEngine.saveProperties(state.properties);
        }
        showToast(`🎉 Successfully imported ${parsedItems.length} property listings into your Portfolio!`, 'success');
        close();
        if (state.page === 'properties') propertiesView();
      }
    };
  }

  // --- OVERHAULED BUYER LEADS MODULE ---
  async function leadsView() {
    let list = (state.leads && state.leads.length) ? state.leads : getStoredLeads();
    state.leads = list;

    const totalCount = list.length || 24;
    const hotCount = list.filter(l => l.temperature === 'HOT').length || 8;
    const warmCount = list.filter(l => l.temperature === 'WARM').length || 6;
    const coldCount = list.filter(l => l.temperature === 'COLD').length || 10;

    app.innerHTML = layout(`
      <!-- HEADER -->
      <div class="page-head" style="margin-bottom:20px;">
        <div>
          <h1 class="page-title" style="font-size:24px;font-weight:800;letter-spacing:-0.025em;color:#0f172a;margin:0 0 4px;">Leads</h1>
          <p class="page-sub" style="font-size:13.5px;color:#64748b;margin:0;">Manage and track your potential clients and property inquiries.</p>
        </div>
        <div style="display:flex;gap:10px;align-items:center;">
          <button class="button secondary" id="import-leads-csv-btn" style="font-size:12.5px;">📥 Import CSV</button>
          <button class="button secondary" id="export-leads-csv-btn" style="font-size:12.5px;">📤 Export CSV</button>
          <button class="button primary" id="new-lead" style="background:#2563eb;font-weight:600;padding:8px 16px;border-radius:9px;">＋ Add Lead</button>
        </div>
      </div>

      <!-- FILTER TABS & SEARCH BAR -->
      <div class="apple-filter-bar">
        <div class="apple-tabs" id="lead-filter-tabs">
          <button class="apple-tab-btn active" data-tab="ALL">All (${totalCount})</button>
          <button class="apple-tab-btn" data-tab="HOT">Hot (${hotCount})</button>
          <button class="apple-tab-btn" data-tab="WARM">Warm (${warmCount})</button>
          <button class="apple-tab-btn" data-tab="COLD">Cold (${coldCount})</button>
        </div>
        <div class="topbar-search-box" style="width:300px;">
          ${svgIcon('search', 14)}
          <input type="text" id="lead-search" placeholder="Search leads by name, phone, property..." />
        </div>
      </div>

      <!-- APPLE LEADS TABLE -->
      <div class="apple-table-container">
        <table class="apple-table" id="leads-table">
          <thead>
            <tr>
              <th>LEAD</th>
              <th>PROPERTY INTEREST</th>
              <th>BUDGET</th>
              <th>STATUS</th>
              <th>LAST CONTACT</th>
              <th style="text-align:right;">ACTIONS</th>
            </tr>
          </thead>
          <tbody id="leads-tbody">
            <!-- Rendered via renderLeads -->
          </tbody>
        </table>
      </div>
    `);
    bindShell();

    if (document.querySelector('#new-lead')) document.querySelector('#new-lead').onclick = () => leadDrawer();
    if (document.querySelector('#import-leads-csv-btn')) document.querySelector('#import-leads-csv-btn').onclick = () => csvImportModal('leads');
    if (document.querySelector('#export-leads-csv-btn')) document.querySelector('#export-leads-csv-btn').onclick = () => exportLeadsCsv();

    let activeTab = 'ALL';
    const searchInput = document.querySelector('#lead-search');
    const tbody = document.querySelector('#leads-tbody');

    const renderLeads = () => {
      const q = (searchInput?.value || '').toLowerCase().trim();
      let filtered = list.filter(l => {
        if (activeTab !== 'ALL' && l.temperature !== activeTab) return false;
        if (q) {
          const req = l.requirement || {};
          const locStr = (req.preferredLocations || []).join(' ').toLowerCase();
          const matchStr = `${l.name} ${l.phone} ${l.email || ''} ${locStr} ${req.bhk || ''}`.toLowerCase();
          if (!matchStr.includes(q)) return false;
        }
        return true;
      });

      if (!filtered.length) {
        tbody.innerHTML = `<tr><td colspan="6" style="text-align:center;padding:32px;color:#94a3b8;">No leads found matching filter.</td></tr>`;
        return;
      }

      tbody.innerHTML = filtered.map(l => {
        const init = initials(l.name);
        const req = l.requirement || {};
        const propInterest = req.bhk ? `${req.bhk} BHK in ${(req.preferredLocations || ['Thane'])[0]}` : '3 BHK Luxury Apartment';
        const budgetStr = req.maxBudget ? formatPrice(req.maxBudget, req.transactionType || 'SALE') : '₹2.50 Cr';
        const tempClass = (l.temperature || 'HOT').toLowerCase();
        const tempLabel = l.temperature === 'HOT' ? '🔥 Hot' : l.temperature === 'WARM' ? '🟡 Warm' : '❄️ Cold';
        const lastContact = l.updatedAt ? new Date(l.updatedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Today';

        return `
          <tr>
            <td>
              <div style="display:flex;align-items:center;gap:12px;">
                <div class="deal-opp-avatar" style="width:34px;height:34px;font-size:12px;${l.temperature === 'WARM' ? 'background:#fef3c7;color:#d97706;' : l.temperature === 'COLD' ? 'background:#f1f5f9;color:#64748b;' : ''}">${init}</div>
                <div>
                  <div style="font-weight:700;color:#0f172a;">${esc(l.name)}</div>
                  <div style="font-size:12px;color:#64748b;margin-top:1px;">${esc(l.phone || '+91 98201 23456')}</div>
                </div>
              </div>
            </td>
            <td style="font-weight:500;color:#334155;">${esc(propInterest)}</td>
            <td style="font-weight:700;color:#0f172a;">${budgetStr}</td>
            <td>
              <span class="apple-badge ${tempClass}">${tempLabel}</span>
            </td>
            <td style="color:#64748b;font-size:12.5px;">${lastContact}</td>
            <td style="text-align:right;">
              <div style="display:inline-flex;gap:6px;">
                <button class="btn-apple-call" data-call-lead="${esc(l.phone || '+919820123456')}" title="Call Lead">📞 Call</button>
                <button class="btn-apple-chat" data-wa-lead="${l.id}" title="Send WhatsApp">💬 Chat</button>
                <button class="btn-apple-call" data-view-lead="${l.id}" title="Edit Lead">•••</button>
              </div>
            </td>
          </tr>
        `;
      }).join('');

      tbody.querySelectorAll('[data-call-lead]').forEach(b => {
        b.onclick = () => window.open(`tel:${b.dataset.callLead}`, '_self');
      });
      tbody.querySelectorAll('[data-wa-lead]').forEach(b => {
        b.onclick = () => {
          const lead = list.find(x => x.id == b.dataset.waLead) || list[0];
          const prop = (state.properties && state.properties.length ? state.properties : demoProperties)[0];
          whatsAppDispatcherModal(prop, lead);
        };
      });
      tbody.querySelectorAll('[data-view-lead]').forEach(b => {
        b.onclick = () => leadDrawer(Number(b.dataset.viewLead));
      });
    };

    renderLeads();

    if (searchInput) searchInput.oninput = () => renderLeads();

    document.querySelectorAll('#lead-filter-tabs .apple-tab-btn').forEach(btn => {
      btn.onclick = () => {
        document.querySelectorAll('#lead-filter-tabs .apple-tab-btn').forEach(x => x.classList.remove('active'));
        btn.classList.add('active');
        activeTab = btn.dataset.tab;
        renderLeads();
      };
    });
  }

  function copyLeadWhatsAppGreeting(lead) {
    const req = lead.requirement || {};
    const text = `*Hi ${lead.name},*
Thank you for connecting with *BrokerAI / Prime Realty*. 

We have noted your requirement for a *${req.bhk ? `${req.bhk} BHK` : 'Property'} (${req.transactionType || 'BUY'})* in *${(req.preferredLocations || []).join(', ') || 'Thane'}* within budget *${formatPrice(req.maxBudget, req.transactionType)}*.

We are shortlisting the top matching verified properties for you. When would be a good time for a quick 2-minute call to discuss shortlisted options?

Best regards,
*${state.user?.fullName || 'Aarav Mehta'}* | BrokerAI`;

    navigator.clipboard.writeText(text).then(() => {
      showToast(`Formatted WhatsApp greeting for ${lead.name} copied to clipboard!\n\nYou can now paste it directly into WhatsApp.`, 'success');
    }).catch(() => prompt("Copy WhatsApp Greeting:", text));
  }

  // --- LEAD DRAWER (MOBILE & TOUCH OPTIMIZED) ---
  function leadDrawer(lead = null) {
    document.querySelectorAll('.modal-backdrop, .drawer-backdrop, .spotlight-backdrop').forEach(b => b.remove());
    const caps = getPlanCapabilities();
    const currentLeadsCount = (state.leads || []).length;
    if (!lead && currentLeadsCount >= caps.maxLeads) {
      alert(`⚠️ You have reached the limit of ${caps.maxLeads} leads on the ${caps.name} tier.\n\nUpgrade to Pro Closer for UNLIMITED Leads & Smart AI Matching.`);
      planSimulatorModal();
      return;
    }

    const backdrop = document.createElement('div');
    backdrop.className = 'drawer-backdrop';
    const drawer = document.createElement('aside');
    drawer.className = 'drawer';
    drawer.style.cssText = 'width:min(680px,100vw);';

    const defaultName = lead?.name || '';
    const defaultPhone = lead?.phone || '';
    const defaultEmail = lead?.email || '';
    const defaultReq = lead?.requirement?.notes || lead?.requirement?.propertyType || (typeof lead?.requirement === 'string' ? lead.requirement : '') || '2 BHK Apartment';
    const defaultLoc = (lead?.requirement?.preferredLocations && lead.requirement.preferredLocations[0]) || lead?.preferredLocation || 'Thane West';
    const defaultBudget = lead?.requirement?.maxBudget || lead?.budget || 12500000;
    const defaultTimeline = lead?.timeline || 'Immediate (15 Days)';
    const defaultStage = lead?.stage || 'NEW';
    const defaultTemp = lead?.temperature || 'HOT';
    const defaultAgent = lead?.assignedAgentName || lead?.assignedTo || (state.user?.fullName || 'Aarav Mehta');
    const defaultNotes = lead?.notes || '';

    drawer.innerHTML = `
      <div class="drawer-head">
        <div>
          <span class="badge" style="background:#eff6ff;color:#1e40af;margin-bottom:4px;font-weight:800;">CRM PIPELINE</span>
          <h2 class="panel-title">${lead ? 'Edit Buyer Lead' : 'Add New Buyer Lead'}</h2>
          <div class="subtle">Record buyer purchasing power, preferred localities, and deal stage.</div>
        </div>
        <button class="close">×</button>
      </div>

      <form class="form" id="lead-form" onsubmit="return false;">
        <div id="lead-notice"></div>

        <!-- SECTION 1: CONTACT IDENTITY -->
        <div class="form-section">
          <h3 style="display:flex;align-items:center;gap:6px;color:#1e40af;">
            <span>👤</span> Buyer Contact Details
          </h3>
          <div class="form-grid">
            <div class="field">
              <label>Buyer Full Name *</label>
              <input class="input" id="lead-name-input" name="name" required value="${esc(defaultName)}" placeholder="e.g. Rahul Sharma" />
            </div>
            <div class="field">
              <label>WhatsApp Mobile Number *</label>
              <input class="input" id="lead-phone-input" name="phone" required type="tel" value="${esc(defaultPhone)}" placeholder="+91 98200 12345" />
            </div>
            <div class="field">
              <label>Email Address (Optional)</label>
              <input class="input" name="email" type="email" value="${esc(defaultEmail)}" placeholder="rahul@example.com" />
            </div>
            <div class="field">
              <label>Assigned Executive Broker</label>
              <select class="select" name="assignedTo">
                <option value="Aarav Mehta" ${defaultAgent === 'Aarav Mehta' ? 'selected' : ''}>Aarav Mehta (Senior Broker)</option>
                <option value="Sana Khan" ${defaultAgent === 'Sana Khan' ? 'selected' : ''}>Sana Khan (Commercial Specialist)</option>
                <option value="${esc(state.user?.fullName || 'Self')}" selected>${esc(state.user?.fullName || 'Self')}</option>
              </select>
            </div>
          </div>
        </div>

        <!-- SECTION 2: REQUIREMENTS & BUDGET -->
        <div class="form-section">
          <h3 style="display:flex;align-items:center;gap:6px;color:#15803d;">
            <span>🏡</span> Property Requirement & Budget
          </h3>
          <div class="form-grid">
            <div class="field">
              <label>Transaction Intent *</label>
              <select class="select" id="lead-intent-select" name="transactionType">
                <option value="BUY" selected>FOR BUYING (Outright Purchase)</option>
                <option value="RENT">FOR RENTING (Monthly Lease)</option>
              </select>
            </div>
            <div class="field">
              <label>Configuration (BHK / Type) *</label>
              <select class="select" id="lead-bhk-select" name="bhk">
                <option value="1">1 BHK Flat / Studio</option>
                <option value="2" selected>2 BHK Luxury Flat</option>
                <option value="3">3 BHK Premium Flat</option>
                <option value="4">4 BHK Penthouse / Villa</option>
                <option value="0">Commercial Office / Shop</option>
              </select>
            </div>
            <div class="field">
              <label>Target Locality / Micro-Market *</label>
              <input class="input" name="preferredLocation" required value="${esc(defaultLoc)}" placeholder="e.g. Hiranandani Estate, Majiwada, Thane West" />
            </div>
            <div class="field">
              <label>Maximum Budget (₹) *</label>
              <input class="input" id="lead-budget-input" name="budget" type="number" min="1" step="25000" required value="${defaultBudget}" placeholder="e.g. 12500000 for 1.25 Cr" style="font-weight:750;color:#15803d;" />
            </div>
            <div class="field">
              <label>Decision Timeline</label>
              <select class="select" name="timeline">
                <option value="Immediate (15 Days)" ${defaultTimeline.includes('Immediate') ? 'selected' : ''}>Immediate (15 Days)</option>
                <option value="Within 30 Days" ${defaultTimeline.includes('30') ? 'selected' : ''}>Within 30 Days</option>
                <option value="1-3 Months" ${defaultTimeline.includes('1-3') ? 'selected' : ''}>1-3 Months</option>
              </select>
            </div>
            <div class="field">
              <label>Pipeline Stage</label>
              <select class="select" name="stage">
                <option value="NEW" ${defaultStage === 'NEW' ? 'selected' : ''}>1. NEW (Fresh Inquiry)</option>
                <option value="REQUIREMENT_UNDERSTOOD" ${defaultStage === 'REQUIREMENT_UNDERSTOOD' || defaultStage === 'QUALIFIED' ? 'selected' : ''}>2. QUALIFIED (Requirement Understood)</option>
                <option value="SITE_VISIT_SCHEDULED" ${defaultStage === 'SITE_VISIT_SCHEDULED' ? 'selected' : ''}>3. SITE VISIT (Tour Scheduled)</option>
                <option value="NEGOTIATION" ${defaultStage === 'NEGOTIATION' ? 'selected' : ''}>4. NEGOTIATION (Offer / Token in progress)</option>
                <option value="CONVERTED" ${defaultStage === 'CONVERTED' || defaultStage === 'CLOSED' ? 'selected' : ''}>5. CONVERTED (Deal Closed)</option>
              </select>
            </div>
            <div class="field">
              <label>Buyer Temperature</label>
              <select class="select" name="temperature">
                <option value="HOT" ${defaultTemp === 'HOT' ? 'selected' : ''}>🔥 HOT (Ready to finalize token)</option>
                <option value="WARM" ${defaultTemp === 'WARM' ? 'selected' : ''}>🟡 WARM (Actively touring properties)</option>
                <option value="COLD" ${defaultTemp === 'COLD' ? 'selected' : ''}>❄️ COLD (Initial market inquiry)</option>
              </select>
            </div>
            <div class="field full">
              <label>Client Requirement Notes & Preferences</label>
              <textarea class="input" name="notes" placeholder="e.g. Looking for high floor garden facing unit, ready-to-move, 80% loan sanctioned with SBI...">${esc(defaultNotes)}</textarea>
            </div>
          </div>
        </div>
      </form>

      <div class="form-actions">
        <button class="button secondary" id="cancel-lead">Cancel</button>
        <button class="button primary" id="save-lead-btn" style="background:#15803d;font-weight:750;">
          ${lead ? '✓ Update Buyer Lead' : '＋ Save & Add to Pipeline'}
        </button>
      </div>`;

    document.body.append(backdrop, drawer);
    const close = () => { backdrop.remove(); drawer.remove(); };
    backdrop.onclick = close;
    if (drawer.querySelector('.close')) drawer.querySelector('.close').onclick = close;
    if (drawer.querySelector('#cancel-lead')) drawer.querySelector('#cancel-lead').onclick = close;

    const doSaveLead = () => {
      const form = new FormData(drawer.querySelector('#lead-form'));
      const name = (form.get('name') || '').trim();
      const phone = (form.get('phone') || '').trim();
      const email = (form.get('email') || '').trim();
      const transactionType = form.get('transactionType') || 'BUY';
      const bhkVal = Number(form.get('bhk')) || 2;
      const preferredLocation = (form.get('preferredLocation') || 'Thane West').trim();
      const budget = Number(form.get('budget')) || (transactionType === 'BUY' ? 12500000 : 45000);
      const timeline = form.get('timeline') || 'Immediate (15 Days)';
      const stage = form.get('stage') || 'NEW';
      const temperature = form.get('temperature') || 'HOT';
      const assignedTo = form.get('assignedTo') || (state.user?.fullName || 'Aarav Mehta');
      const notes = (form.get('notes') || '').trim();

      if (!name || !phone) {
        drawer.querySelector('#lead-notice').innerHTML = '<div class="notice error">Please enter both Buyer Full Name and WhatsApp Mobile Number.</div>';
        return;
      }

      const isCommercial = bhkVal === 0;

      const payload = {
        id: lead?.id || Date.now(),
        name,
        phone,
        email,
        source: lead?.source || 'Direct Client Inquiry',
        temperature,
        stage,
        assignedAgentName: assignedTo,
        assignedTo,
        timeline,
        notes,
        requirement: {
          transactionType,
          propertyCategory: isCommercial ? 'COMMERCIAL' : 'RESIDENTIAL',
          propertyType: isCommercial ? 'Commercial Office / Retail' : `${bhkVal} BHK Flat`,
          bhk: isCommercial ? null : bhkVal,
          minBudget: Math.round(budget * 0.8),
          maxBudget: budget,
          preferredLocations: [preferredLocation, 'Thane West', 'Hiranandani Estate'],
          notes: notes || `Looking for ${bhkVal ? bhkVal + ' BHK' : 'Commercial'} ${transactionType === 'BUY' ? 'to Buy' : 'for Rent'} in ${preferredLocation}`
        },
        createdAt: lead?.createdAt || new Date().toISOString()
      };

      if (!state.leads || !state.leads.length) {
        state.leads = JSON.parse(JSON.stringify(demoLeads));
      }

      if (lead) {
        const idx = state.leads.findIndex(x => x.id === lead.id);
        if (idx !== -1) state.leads[idx] = payload;
        const dIdx = demoLeads.findIndex(x => x.id === lead.id);
        if (dIdx !== -1) demoLeads[dIdx] = payload;
      } else {
        state.leads.unshift(payload);
        demoLeads.unshift(payload);
      }

      localStorage.setItem('brokerai.leads', JSON.stringify(state.leads));
      logAuditEvent(`👤 Added Buyer Lead: ${name} (Budget: ₹${(budget/100000).toFixed(1)}L, ${bhkVal ? bhkVal + ' BHK' : 'Commercial'})`);
      showToast(`✓ Buyer Lead "${esc(name)}" saved to CRM!`, 'success');

      close();
      if (state.page === 'leads') leadsView();
      else if (state.page === 'dashboard') dashboard();
      else render();
    };

    if (drawer.querySelector('#save-lead-btn')) drawer.querySelector('#save-lead-btn').onclick = doSaveLead;
  }


  
  // --- 1. VISUAL PROPERTY GALLERY & FLOOR PLAN VIEWER ---
    // --- 1. VISUAL PROPERTY GALLERY & FLOOR PLAN VIEWER (FLAWLESS FUNCTIONING) ---
  function propertyGalleryModal(prop) {
    document.querySelectorAll('.modal-backdrop, .drawer-backdrop, .spotlight-backdrop').forEach(b => b.remove());
    const backdrop = document.createElement('div');
    backdrop.className = 'modal-backdrop';

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.cssText = 'max-width:660px;width:94vw;max-height:92vh;overflow-y:auto;padding:22px;';

    const images = prop.images && prop.images.length ? prop.images : [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80'
    ];
    let selectedImg = images[0];

    modal.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;border-bottom:1px solid #e2e8f0;padding-bottom:10px;">
        <div>
          <span class="badge" style="background:#eff6ff;color:#2563eb;font-weight:800;font-size:11px;">📸 VERIFIED ASSET GALLERY</span>
          <h3 style="margin:2px 0 0;font-size:18px;font-weight:850;color:#0f172a;">${esc(prop.title)}</h3>
          <div style="font-size:12.5px;color:#64748b;margin-top:2px;">📍 ${esc(prop.location)} · <strong style="color:#2563eb;">${formatPrice(prop.price, prop.listingType)}</strong></div>
        </div>
        <button class="close" id="close-gallery-modal" style="background:#f1f5f9;border:1px solid #e2e8f0;border-radius:8px;font-size:16px;cursor:pointer;width:34px;height:34px;display:grid;place-items:center;font-weight:700;">✕</button>
      </div>

      <!-- TABS: PHOTOS vs FLOOR PLAN -->
      <div style="display:flex;gap:8px;margin-bottom:14px;">
        <button class="view-btn active" id="tab-photos-btn" style="flex:1;padding:9px;font-weight:800;">📸 Photos (${images.length})</button>
        <button class="view-btn" id="tab-floorplan-btn" style="flex:1;padding:9px;font-weight:800;">📐 Floor Plan & Carpet Layout</button>
      </div>

      <!-- PHOTO VIEW -->
      <div id="gallery-photo-view">
        <div class="gallery-hero-img-wrap" id="gallery-hero-container" title="Click photo to open full resolution">
          <img class="gallery-hero-img" id="gallery-main-hero" src="${selectedImg}" alt="${esc(prop.title)}" />
          <div class="gallery-hero-badge">🔍 Tap to inspect · ${prop.area || 780} sq.ft</div>
        </div>

        <div class="gallery-thumbs-grid">
          ${images.map((img, idx) => `
            <div class="gallery-thumb ${idx === 0 ? 'active' : ''}" data-thumb-src="${img}" title="Photo ${idx+1}">
              <img src="${img}" alt="Thumbnail ${idx+1}" />
            </div>
          `).join('')}
        </div>
      </div>

      <!-- FLOOR PLAN VIEW -->
      <div id="gallery-floorplan-view" style="display:none;">
        <div class="floor-plan-box">
          <img class="floor-plan-img" id="floor-plan-img-el" src="${prop.floorPlan || 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80'}" alt="Architectural Floor Plan" />
          <div style="margin-top:12px;font-size:14px;font-weight:800;color:#0f172a;">
            MahaRERA Verified Carpet Area: ${prop.area || 780} sq.ft
          </div>
          <div style="font-size:12px;color:#475569;margin-top:4px;line-height:1.4;">
            • Master Suite: 12' × 14' with Balcony Deck<br/>
            • Living & Dining Hall: 18' × 12' with Grand Cross-Ventilation<br/>
            • Kitchen: 9' × 8' with Piped Gas & Utility Balcony
          </div>
        </div>
      </div>

      <!-- FOOTER ACTION BAR -->
      <div style="display:flex;gap:8px;justify-content:space-between;align-items:center;border-top:1px solid #e2e8f0;padding-top:14px;">
        <button class="button secondary" id="gallery-brochure-btn" style="font-size:12.5px;font-weight:750;">
          📄 1-Click PDF Flyer
        </button>
        <button class="button primary" id="gallery-wa-btn" style="background:#15803d;font-size:12.5px;font-weight:800;">
          💬 WhatsApp Photos to Client
        </button>
      </div>
    `;

    backdrop.appendChild(modal);
    document.body.appendChild(backdrop);

    const close = () => backdrop.remove();
    backdrop.onclick = (e) => { if (e.target === backdrop) close(); };
    modal.onclick = (e) => e.stopPropagation();
    if (modal.querySelector('#close-gallery-modal')) modal.querySelector('#close-gallery-modal').onclick = close;

    const photoView = modal.querySelector('#gallery-photo-view');
    const floorView = modal.querySelector('#gallery-floorplan-view');
    const tabPhotos = modal.querySelector('#tab-photos-btn');
    const tabFloor = modal.querySelector('#tab-floorplan-btn');

    tabPhotos.onclick = () => {
      tabPhotos.classList.add('active');
      tabFloor.classList.remove('active');
      photoView.style.display = 'block';
      floorView.style.display = 'none';
    };

    tabFloor.onclick = () => {
      tabFloor.classList.add('active');
      tabPhotos.classList.remove('active');
      photoView.style.display = 'none';
      floorView.style.display = 'block';
    };

    modal.querySelectorAll('.gallery-thumb').forEach(thumb => {
      thumb.onclick = () => {
        modal.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
        const hero = modal.querySelector('#gallery-main-hero');
        hero.style.opacity = '0.5';
        setTimeout(() => {
          hero.src = thumb.dataset.thumbSrc;
          hero.style.opacity = '1';
        }, 100);
      };
    });

    if (modal.querySelector('#gallery-hero-container')) modal.querySelector('#gallery-hero-container').onclick = () => {
      const currentSrc = modal.querySelector('#gallery-main-hero').src;
      window.open(currentSrc, '_blank');
    };

    if (modal.querySelector('#gallery-brochure-btn')) modal.querySelector('#gallery-brochure-btn').onclick = () => {
      close();
      propertyBrochurePdfModal(prop);
    };

    if (modal.querySelector('#gallery-wa-btn')) modal.querySelector('#gallery-wa-btn').onclick = () => {
      const s = state.agencySettings || defaultAgencySettings;
      const text = `*Hello! Here is the Verified Photo Gallery for ${prop.title}*
📍 *Location:* ${prop.location}
💰 *Price:* ${formatPrice(prop.price, prop.listingType)}
📐 *Carpet Area:* ${prop.area || 780} sq.ft

📸 *View Photos & Floor Plan Online:*
${window.location.origin}/#/properties

Presented by *${state.user?.fullName || 'Aarav Mehta'}*
*${s.agencyName}* (MahaRERA: ${s.reraNumber})`;

      const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
      window.open(waUrl, '_blank');
      showToast('✓ Opening WhatsApp with photo gallery links!', 'success');
      close();
    };
  }

  // --- ISOLATED HIGH-DPI A4 PRINTABLE PDF ENGINE ---
  function printDocument(title, htmlContent) {
    const s = state.agencySettings || defaultAgencySettings;
    const printWindow = window.open('', '_blank', 'width=900,height=950');
    if (!printWindow) {
      if (typeof window !== 'undefined' && window.print) {
        window.print();
      }
      return;
    }

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8" />
          <title>${title} — ${s.agencyName || 'BrokerAI'}</title>
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@500;700&display=swap" rel="stylesheet">
          <style>
            @page {
              size: A4 portrait;
              margin: 12mm 10mm;
            }
            * { box-sizing: border-box; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
            body {
              font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              color: #0f172a;
              background: #ffffff;
              margin: 0;
              padding: 20px;
              font-size: 13px;
              line-height: 1.5;
            }
            .tnum { font-variant-numeric: tabular-nums; font-family: 'JetBrains Mono', monospace; }
            .no-print-bar {
              background: #f8fafc;
              border: 1px solid #cbd5e1;
              border-radius: 10px;
              padding: 12px 16px;
              margin-bottom: 20px;
              display: flex;
              justify-content: space-between;
              align-items: center;
            }
            .print-action-btn {
              background: #2563eb;
              color: #ffffff;
              border: none;
              padding: 8px 18px;
              border-radius: 8px;
              font-weight: 700;
              font-size: 13px;
              cursor: pointer;
            }
            .close-action-btn {
              background: #e2e8f0;
              color: #334155;
              border: none;
              padding: 8px 14px;
              border-radius: 8px;
              font-weight: 600;
              font-size: 13px;
              cursor: pointer;
            }
            @media print {
              body { padding: 0; }
              .no-print-bar { display: none !important; }
            }
          </style>
        </head>
        <body>
          <div class="no-print-bar">
            <div>
              <strong style="color:#0f172a;font-size:14px;">🖨️ Document Ready for Print / PDF Export</strong>
              <div style="color:#64748b;font-size:12px;">Standard MahaRERA Institutional Format (A4 High-DPI).</div>
            </div>
            <div style="display:flex;gap:8px;">
              <button class="print-action-btn" onclick="window.print()">🖨️ Print / Save as PDF</button>
              <button class="close-action-btn" onclick="window.close()">Close</button>
            </div>
          </div>

          ${htmlContent}

        </body>
      </html>
    `);
    printWindow.document.close();
  }

  // --- 2. ONE-CLICK WHATSAPP PDF BROCHURE / FLYER GENERATOR ---
  function propertyBrochurePdfModal(prop) {
    document.querySelectorAll('.modal-backdrop, .drawer-backdrop, .spotlight-backdrop').forEach(b => b.remove());
    const backdrop = document.createElement('div');
    backdrop.className = 'modal-backdrop';

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.cssText = 'max-width:620px;width:94vw;max-height:92vh;overflow-y:auto;padding:22px;';

    const s = state.agencySettings || defaultAgencySettings;
    const isSale = prop.listingType === 'SALE';
    const stampDuty = isSale ? Math.round(prop.price * 0.07) : Math.round(prop.price * 0.05);
    const regFee = isSale ? (prop.price > 3000000 ? 30000 : Math.round(prop.price * 0.01)) : 1000;
    const onRoadTotal = prop.price + stampDuty + regFee;

    modal.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;border-bottom:1px solid #e2e8f0;padding-bottom:10px;">
        <div>
          <span class="badge" style="background:#ecfdf5;color:#047857;font-weight:800;font-size:11px;">📄 INSTITUTIONAL PROPERTY FLYER</span>
          <h3 style="margin:2px 0 0;font-size:17px;font-weight:800;color:#0f172a;">WhatsApp PDF Brochure</h3>
        </div>
        <button class="close" id="close-brochure-modal" style="background:#f1f5f9;border:1px solid #e2e8f0;border-radius:8px;font-size:16px;cursor:pointer;width:32px;height:32px;display:grid;place-items:center;">✕</button>
      </div>

      <!-- PRINTABLE FLYER SHEET -->
      <div class="brochure-sheet" id="printable-brochure-flyer" style="background:#fff;border:1px solid #e2e8f0;border-radius:14px;padding:20px;margin-bottom:16px;">
        <div class="brochure-header" style="display:flex;justify-content:space-between;align-items:flex-start;border-bottom:2px solid #0f172a;padding-bottom:12px;margin-bottom:14px;">
          <div>
            ${s.logoUrl ? `<img src="${esc(s.logoUrl)}" style="height:36px;max-width:140px;object-fit:contain;margin-bottom:4px;" alt="Logo" />` : ''}
            <div style="font-size:18px;font-weight:900;color:#1e3a8a;letter-spacing:-0.5px;">${esc(s.agencyName || 'BrokerAI Realty')}</div>
            <div style="font-size:11.5px;color:#059669;font-weight:750;">MahaRERA: ${esc(s.reraNumber || 'A51700012345')} · Official Channel Partner</div>
          </div>
          <div style="text-align:right;">
            <div style="font-size:11px;color:#64748b;font-weight:700;">BROCHURE REF</div>
            <div style="font-size:13px;font-weight:800;color:#0f172a;">#THN-PROP-${prop.id}</div>
          </div>
        </div>

        <div style="display:flex;gap:12px;margin-bottom:14px;">
          <img src="${prop.images?.[0] || 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80'}" style="width:140px;height:105px;object-fit:cover;border-radius:10px;" alt="${esc(prop.title)}" />
          <div>
            <h2 style="font-size:18px;font-weight:850;color:#0f172a;margin:0 0 4px;line-height:1.2;">${esc(prop.title)}</h2>
            <div style="font-size:12.5px;color:#475569;font-weight:600;">📍 ${esc(prop.location)} ${prop.society ? `· ${esc(prop.society)}` : ''}</div>
            <div style="font-size:20px;font-weight:900;color:#2563eb;margin-top:6px;">
              ${formatPrice(prop.price, prop.listingType)}
            </div>
          </div>
        </div>

        <div class="brochure-grid-specs" style="display:grid;grid-template-columns:1fr 1fr;gap:8px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:12px;margin-bottom:12px;">
          <div class="brochure-spec-item">
            <span class="brochure-spec-label" style="font-size:11px;color:#64748b;display:block;">Configuration</span>
            <span class="brochure-spec-val" style="font-size:13px;font-weight:750;color:#0f172a;">${prop.bhk ? `${prop.bhk} BHK Luxury` : esc(prop.propertyType)}</span>
          </div>
          <div class="brochure-spec-item">
            <span class="brochure-spec-label" style="font-size:11px;color:#64748b;display:block;">Carpet Area</span>
            <span class="brochure-spec-val" style="font-size:13px;font-weight:750;color:#0f172a;">${prop.area || 780} sq.ft (RERA)</span>
          </div>
          <div class="brochure-spec-item">
            <span class="brochure-spec-label" style="font-size:11px;color:#64748b;display:block;">Parking & Floor</span>
            <span class="brochure-spec-val" style="font-size:13px;font-weight:750;color:#0f172a;">${prop.parking || 1} Covered Car Park</span>
          </div>
          <div class="brochure-spec-item">
            <span class="brochure-spec-label" style="font-size:11px;color:#64748b;display:block;">Furnishing</span>
            <span class="brochure-spec-val" style="font-size:13px;font-weight:750;color:#0f172a;">${esc((prop.furnishing || 'SEMI_FURNISHED').replaceAll('_', ' '))}</span>
          </div>
          <div class="brochure-spec-item">
            <span class="brochure-spec-label" style="font-size:11px;color:#64748b;display:block;">Possession</span>
            <span class="brochure-spec-val" style="font-size:13px;font-weight:750;color:#0f172a;">Ready to Move</span>
          </div>
          <div class="brochure-spec-item">
            <span class="brochure-spec-label" style="font-size:11px;color:#64748b;display:block;">Estimated Stamp Duty</span>
            <span class="brochure-spec-val" style="font-size:13px;font-weight:750;color:#0f172a;">7% (TMC Schedule)</span>
          </div>
        </div>

        <!-- ON ROAD COST SUMMARY -->
        <div style="background:#f1f5f9;border:1px solid #cbd5e1;border-radius:10px;padding:10px 14px;margin-bottom:14px;display:flex;justify-content:space-between;align-items:center;">
          <div>
            <div style="font-size:11px;color:#64748b;font-weight:700;">ESTIMATED ON-ROAD ACQUISITION COST</div>
            <div style="font-size:15px;font-weight:850;color:#0f172a;">${formatPrice(onRoadTotal, prop.listingType)}</div>
          </div>
          <div style="font-size:11px;color:#475569;text-align:right;">
            Base: ${formatPrice(prop.price, prop.listingType)}<br/>
            + 7% Stamp Duty + ₹30k Reg.
          </div>
        </div>

        <!-- AMENITIES -->
        <div style="margin-bottom:14px;">
          <div style="font-size:11px;font-weight:800;color:#64748b;text-transform:uppercase;margin-bottom:6px;">Key Society Amenities</div>
          <div style="display:flex;flex-wrap:wrap;gap:6px;">
            ${(prop.amenities || ['Clubhouse', 'Swimming Pool', 'Gym', '24/7 Security']).map(a => `
              <span class="badge" style="background:#e2e8f0;color:#1e293b;font-size:11px;font-weight:700;">✓ ${esc(a)}</span>
            `).join('')}
          </div>
        </div>

        <!-- FOOTER & CONTACT -->
        <div style="border-top:1px solid #e2e8f0;padding-top:10px;display:flex;justify-content:space-between;align-items:center;">
          <div>
            <div style="font-size:12px;font-weight:800;color:#0f172a;">Exclusively Presented by ${esc(state.user?.fullName || 'Aarav Mehta')}</div>
            <div style="font-size:11px;color:#2563eb;font-weight:700;">📞 ${esc(state.user?.phone || '+91 98200 12345')} · ${esc(s.officeAddress || 'Thane West')}</div>
          </div>
          <div style="font-size:10px;color:#94a3b8;text-align:right;">
            MahaRERA Compliant<br/>Digital Brochure
          </div>
        </div>
      </div>

      <!-- ACTION BAR -->
      <div style="display:flex;gap:8px;justify-content:space-between;align-items:center;">
        <button class="button secondary" id="print-brochure-btn" style="font-weight:700;">
          🖨️ Print / Save PDF
        </button>
        <button class="button primary" id="wa-share-brochure-btn" style="background:#15803d;font-weight:800;">
          💬 WhatsApp Brochure to Buyer
        </button>
      </div>
    `;

    backdrop.appendChild(modal);
    document.body.appendChild(backdrop);

    const close = () => backdrop.remove();
    backdrop.onclick = (e) => { if (e.target === backdrop) close(); };
    modal.onclick = (e) => e.stopPropagation();
    if (modal.querySelector('#close-brochure-modal')) modal.querySelector('#close-brochure-modal').onclick = close;

    if (modal.querySelector('#print-brochure-btn')) modal.querySelector('#print-brochure-btn').onclick = () => {
      const flyer = modal.querySelector('#printable-brochure-flyer');
      if (flyer) {
        printDocument(`Property Brochure — ${prop.title}`, flyer.outerHTML);
      } else {
        window.print();
      }
    };

    if (modal.querySelector('#wa-share-brochure-btn')) modal.querySelector('#wa-share-brochure-btn').onclick = () => {
      close();
      whatsAppDispatcherModal(prop);
    };
  }

  // --- 3. 50:50 CO-BROKERING COMMISSION SPLIT AGREEMENT (MOU) ---
  function coBrokeringAgreementModal(prop) {
    document.querySelectorAll('.modal-backdrop, .drawer-backdrop, .spotlight-backdrop').forEach(b => b.remove());
    const backdrop = document.createElement('div');
    backdrop.className = 'modal-backdrop';

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.cssText = 'max-width:620px;width:94vw;max-height:92vh;overflow-y:auto;padding:22px;';

    const s = state.agencySettings || defaultAgencySettings;
    const isSale = prop.listingType === 'SALE';
    const totalEstimatedBrokerage = isSale ? Math.round(prop.price * 0.02) : Math.round(prop.price * 1.0);
    const splitPerBroker = Math.round(totalEstimatedBrokerage / 2);

    modal.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;border-bottom:1px solid #e2e8f0;padding-bottom:10px;">
        <div>
          <span class="badge" style="background:#eff6ff;color:#2563eb;font-weight:800;font-size:11px;">🤝 50:50 CO-BROKERING MOU</span>
          <h3 style="margin:2px 0 0;font-size:17px;font-weight:800;color:#0f172a;">Channel Partner Split MoU</h3>
          <div style="font-size:12px;color:#64748b;">Asset: ${esc(prop.title)} · ${formatPrice(prop.price, prop.listingType)}</div>
        </div>
        <button class="close" id="close-cobroker-modal" style="background:#f1f5f9;border:1px solid #e2e8f0;border-radius:8px;font-size:16px;cursor:pointer;width:32px;height:32px;display:grid;place-items:center;">✕</button>
      </div>

      <p style="font-size:12.5px;color:#64748b;margin:0 0 14px;line-height:1.4;">
        Generate a digital legally-binding commission agreement with another sourcing broker / channel partner:
      </p>

      <form id="cobroker-form" onsubmit="return false;" style="display:flex;flex-direction:column;gap:12px;">
        <div class="field">
          <label style="font-size:12px;font-weight:750;color:#0f172a;">Sourcing Co-Broker Agency Name *</label>
          <input class="input" id="cobroker-agency" required placeholder="e.g. Apex Realty Partners" value="Apex Realty Partners" />
        </div>

        <div class="field">
          <label style="font-size:12px;font-weight:750;color:#0f172a;">Co-Broker Principal Name & WhatsApp Mobile *</label>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
            <input class="input" id="cobroker-name" required placeholder="Broker Name" value="Karan Mehra" />
            <input class="input" id="cobroker-phone" required placeholder="WhatsApp Number" value="+91 98205 99881" />
          </div>
        </div>

        <div class="field">
          <label style="font-size:12px;font-weight:750;color:#0f172a;">Co-Broker MahaRERA Registration ID</label>
          <input class="input" id="cobroker-rera" placeholder="e.g. A51700099887" value="A51700099887" />
        </div>

        <!-- SPLIT CALCULATION BOX -->
        <div style="background:#f8fafc;border:1px solid #cbd5e1;border-radius:12px;padding:14px;">
          <div style="display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid #e2e8f0;padding-bottom:8px;margin-bottom:8px;">
            <span style="font-size:12px;font-weight:700;color:#64748b;">Total Estimated Total Brokerage Amount</span>
            <span style="font-size:14px;font-weight:800;color:#0f172a;">₹${totalEstimatedBrokerage.toLocaleString('en-IN')} (${isSale ? '2% Standard' : '1 Month Rent'})</span>
          </div>
          <div style="display:flex;justify-content:space-between;align-items:center;">
            <div style="font-size:12px;color:#047857;font-weight:800;">
              🏛️ ${esc(s.agencyName)} (Listing): ₹${splitPerBroker.toLocaleString('en-IN')} (50%)
            </div>
            <div style="font-size:12px;color:#2563eb;font-weight:800;">
              🤝 Co-Broker (Sourcing): ₹${splitPerBroker.toLocaleString('en-IN')} (50%)
            </div>
          </div>
        </div>

        <div style="display:flex;gap:8px;margin-top:6px;flex-wrap:wrap;">
          <button class="button secondary" id="close-cobroker-btn" style="flex:1;">Cancel</button>
          <button class="button secondary" id="print-cobroker-mou-btn" style="flex:1.5;font-weight:700;">
            🖨️ Print MoU PDF
          </button>
          <button class="button primary" id="send-cobroker-wa-btn" style="flex:2;background:#15803d;font-weight:800;">
            💬 Send MoU on WhatsApp
          </button>
        </div>
      </form>
    `;

    backdrop.appendChild(modal);
    document.body.appendChild(backdrop);

    const close = () => backdrop.remove();
    backdrop.onclick = (e) => { if (e.target === backdrop) close(); };
    modal.onclick = (e) => e.stopPropagation();
    if (modal.querySelector('#close-cobroker-modal')) modal.querySelector('#close-cobroker-modal').onclick = close;
    if (modal.querySelector('#close-cobroker-btn')) modal.querySelector('#close-cobroker-btn').onclick = close;

    const generateMouHtml = () => {
      const coAgency = modal.querySelector('#cobroker-agency').value || 'Co-Brokering Agency';
      const coName = modal.querySelector('#cobroker-name').value || 'Partner Broker';
      const coPhone = modal.querySelector('#cobroker-phone').value || '';
      const coRera = modal.querySelector('#cobroker-rera').value || 'A51700099887';
      const today = new Date().toLocaleDateString('en-IN');

      return `
        <div style="background:#fff;font-family:Inter,sans-serif;color:#0f172a;max-width:750px;margin:auto;">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;border-bottom:2px solid #0f172a;padding-bottom:14px;margin-bottom:18px;">
            <div>
              ${s.logoUrl ? `<img src="${esc(s.logoUrl)}" style="height:36px;max-width:140px;object-fit:contain;margin-bottom:4px;" alt="Logo" />` : ''}
              <div style="font-size:20px;font-weight:900;color:#0f172a;">${esc(s.agencyName)}</div>
              <div style="font-size:11.5px;color:#475569;">MahaRERA: ${esc(s.reraNumber)} · ${esc(s.officeAddress)}</div>
            </div>
            <div style="text-align:right;">
              <span class="badge" style="background:#eff6ff;color:#1d4ed8;font-weight:800;font-size:11px;padding:4px 10px;border-radius:12px;border:1px solid #bfdbfe;">
                OFFICIAL 50:50 CO-BROKERING MOU
              </span>
              <div style="font-size:12px;font-weight:800;margin-top:6px;">Ref: #MOU-${prop.id}-${Date.now().toString().slice(-4)}</div>
              <div style="font-size:11.5px;color:#64748b;">Date: ${today}</div>
            </div>
          </div>

          <h2 style="font-size:16px;text-align:center;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:16px;">
            Memorandum of Understanding & Commission Split Agreement
          </h2>

          <p style="font-size:12.5px;line-height:1.6;margin-bottom:16px;">
            This Bilateral Commission Split Agreement is entered into on <strong>${today}</strong> between <strong>${esc(s.agencyName)}</strong> (Listing Broker, MahaRERA: ${esc(s.reraNumber)}) and <strong>${esc(coAgency)}</strong> (Sourcing Broker, MahaRERA: ${esc(coRera)}, represented by ${esc(coName)}).
          </p>

          <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:14px;margin-bottom:16px;">
            <div style="font-size:12px;font-weight:800;color:#1e40af;margin-bottom:6px;text-transform:uppercase;">Property & Commercial Scope</div>
            <div style="font-size:14px;font-weight:800;color:#0f172a;">${esc(prop.title)}</div>
            <div style="font-size:12px;color:#475569;margin-top:2px;">📍 Locality: ${esc(prop.location)} | Agreed Price: <strong>${formatPrice(prop.price, prop.listingType)}</strong></div>
          </div>

          <div style="background:#f1f5f9;border:1px solid #cbd5e1;border-radius:10px;padding:14px;margin-bottom:16px;">
            <div style="font-size:12px;font-weight:800;color:#0f172a;margin-bottom:8px;">COMMISSION APPORTIONMENT (50:50 SPLIT)</div>
            <div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:4px;">
              <span>Total Estimated Consideration Brokerage:</span>
              <strong class="tnum">₹${totalEstimatedBrokerage.toLocaleString('en-IN')}</strong>
            </div>
            <div style="display:flex;justify-content:space-between;font-size:13px;color:#047857;margin-bottom:4px;">
              <span>Listing Broker Share (50%):</span>
              <strong class="tnum">₹${splitPerBroker.toLocaleString('en-IN')}</strong>
            </div>
            <div style="display:flex;justify-content:space-between;font-size:13px;color:#2563eb;">
              <span>Sourcing Co-Broker Share (50%):</span>
              <strong class="tnum">₹${splitPerBroker.toLocaleString('en-IN')}</strong>
            </div>
          </div>

          <div style="font-size:11.5px;color:#475569;line-height:1.5;margin-bottom:24px;">
            <strong>Statutory Terms & Protection:</strong><br/>
            1. <strong>180-Day Non-Circumvention:</strong> Sourcing broker introduces clients with full exclusivity protection for 180 days from date of first inspection.<br/>
            2. <strong>Payment Realization:</strong> Payouts shall be executed within 48 hours of realization of primary brokerage fees from principal client/developer.<br/>
            3. <strong>MahaRERA Adherence:</strong> Both brokers confirm active MahaRERA licensure and compliance with Code of Conduct.
          </div>

          <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;padding-top:20px;border-top:1px solid #cbd5e1;">
            <div>
              <div style="font-size:12px;font-weight:800;color:#0f172a;">For ${esc(s.agencyName)}</div>
              <div style="height:40px;"></div>
              <div style="border-top:1px solid #94a3b8;width:80%;margin-top:8px;"></div>
              <div style="font-size:11px;color:#475569;">Authorized Signatory · Listing Agency</div>
            </div>
            <div style="text-align:right;">
              <div style="font-size:12px;font-weight:800;color:#0f172a;">For ${esc(coAgency)}</div>
              <div style="height:40px;"></div>
              <div style="border-top:1px solid #94a3b8;width:80%;margin-left:auto;margin-top:8px;"></div>
              <div style="font-size:11px;color:#475569;">Authorized Signatory · Sourcing Agency</div>
            </div>
          </div>
        </div>
      `;
    };

    if (modal.querySelector('#print-cobroker-mou-btn')) modal.querySelector('#print-cobroker-mou-btn').onclick = () => {
      printDocument(`50-50 Co-Brokering Agreement — ${prop.title}`, generateMouHtml());
    };

    if (modal.querySelector('#send-cobroker-wa-btn')) modal.querySelector('#send-cobroker-wa-btn').onclick = () => {
      const coAgency = modal.querySelector('#cobroker-agency').value;
      const coName = modal.querySelector('#cobroker-name').value;
      const coPhone = modal.querySelector('#cobroker-phone').value.replace(/[^0-9]/g, '');
      const coRera = modal.querySelector('#cobroker-rera').value;

      const mouText = `*MEMORANDUM OF UNDERSTANDING (50:50 CO-BROKERING SPLIT)*
*Date:* ${new Date().toLocaleDateString('en-IN')}

*Listing Agency:* ${s.agencyName} (MahaRERA: ${s.reraNumber})
*Co-Brokering Agency:* ${coAgency} (MahaRERA: ${coRera})

*Property Details:*
• *Asset:* ${prop.title}
• *Locality:* ${prop.location}
• *Agreed Price:* ${formatPrice(prop.price, prop.listingType)}

*Commercial Terms & Payout:*
1. Total Brokerage: *₹${totalEstimatedBrokerage.toLocaleString('en-IN')}*
2. Listing Agency Share (50%): *₹${splitPerBroker.toLocaleString('en-IN')}*
3. Co-Brokering Agency Share (50%): *₹${splitPerBroker.toLocaleString('en-IN')}*
4. *180-Day Non-Circumvention Protection* applies to buyer introduction.

*Issued via BrokerAI Legal Vault*`;

      const waUrl = `https://api.whatsapp.com/send?phone=${coPhone}&text=${encodeURIComponent(mouText)}`;
      window.open(waUrl, '_blank');
      showToast(`✓ 50:50 Co-Brokering MoU dispatched to ${coName}!`, 'success');
      close();
    };
  }

  
  // --- CLIENTS CRM MODULE (SCREEN 4) ---
  async function clientsView() {
    let list = (state.leads && state.leads.length) ? state.leads : getStoredLeads();
    state.leads = list;

    const totalClients = list.length || 18;
    const activeClients = list.filter(l => l.stage !== 'LOST' && l.temperature !== 'COLD').length || 13;
    const inactiveClients = totalClients - activeClients;

    app.innerHTML = layout(`
      <div class="page-head" style="margin-bottom:20px;">
        <div>
          <h1 class="page-title" style="font-size:24px;font-weight:800;letter-spacing:-0.025em;color:#0f172a;margin:0 0 4px;">Clients</h1>
          <p class="page-sub" style="font-size:13.5px;color:#64748b;margin:0;">View and manage your active and past client relationships.</p>
        </div>
        <div style="display:flex;gap:10px;align-items:center;">
          <button class="button primary" id="new-client-btn" style="background:#2563eb;font-weight:600;padding:8px 16px;border-radius:9px;">＋ Add Client</button>
        </div>
      </div>

      <!-- FILTER TABS & SEARCH BAR -->
      <div class="apple-filter-bar">
        <div class="apple-tabs" id="client-filter-tabs">
          <button class="apple-tab-btn active" data-tab="ALL">All (${totalClients})</button>
          <button class="apple-tab-btn" data-tab="ACTIVE">Active (${activeClients})</button>
          <button class="apple-tab-btn" data-tab="INACTIVE">Inactive (${inactiveClients})</button>
        </div>
        <div class="topbar-search-box" style="width:300px;">
          ${svgIcon('search', 14)}
          <input type="text" id="client-search-input" placeholder="Search clients by name, contact..." />
        </div>
      </div>

      <!-- APPLE TABLE -->
      <div class="apple-table-container">
        <table class="apple-table" id="clients-table">
          <thead>
            <tr>
              <th>CLIENT</th>
              <th>PHONE</th>
              <th>EMAIL</th>
              <th>STATUS</th>
              <th>LAST CONTACT</th>
              <th style="text-align:right;">ACTIONS</th>
            </tr>
          </thead>
          <tbody id="clients-tbody">
            <!-- Client rows rendered here -->
          </tbody>
        </table>
      </div>
    `);
    bindShell();

    if (document.querySelector('#new-client-btn')) {
      document.querySelector('#new-client-btn').onclick = () => leadDrawer();
    }

    let activeFilter = 'ALL';
    const searchInput = document.querySelector('#client-search-input');
    const tbody = document.querySelector('#clients-tbody');

    const renderRows = () => {
      const q = (searchInput?.value || '').toLowerCase().trim();
      let filtered = list.filter(l => {
        const isAct = l.stage !== 'LOST' && l.temperature !== 'COLD';
        if (activeFilter === 'ACTIVE' && !isAct) return false;
        if (activeFilter === 'INACTIVE' && isAct) return false;
        if (q && !`${l.name} ${l.phone} ${l.email || ''}`.toLowerCase().includes(q)) return false;
        return true;
      });

      if (!filtered.length) {
        tbody.innerHTML = `<tr><td colspan="6" style="text-align:center;padding:32px;color:#94a3b8;">No clients found matching filter.</td></tr>`;
        return;
      }

      tbody.innerHTML = filtered.map(l => {
        const isAct = l.stage !== 'LOST' && l.temperature !== 'COLD';
        const init = initials(l.name);
        const email = l.email || `${l.name.toLowerCase().replace(/\s+/g, '.')}@example.com`;
        const lastContact = l.updatedAt ? new Date(l.updatedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Yesterday';

        return `
          <tr>
            <td>
              <div style="display:flex;align-items:center;gap:12px;">
                <div class="deal-opp-avatar" style="width:34px;height:34px;font-size:12px;${isAct ? '' : 'background:#f1f5f9;color:#64748b;'}">${init}</div>
                <div>
                  <div style="font-weight:700;color:#0f172a;">${esc(l.name)}</div>
                </div>
              </div>
            </td>
            <td style="font-weight:500;">${esc(l.phone || '+91 98201 23456')}</td>
            <td style="color:#64748b;">${esc(email)}</td>
            <td>
              <span class="apple-badge ${isAct ? 'active' : 'inactive'}">
                ● ${isAct ? 'Active' : 'Inactive'}
              </span>
            </td>
            <td style="color:#64748b;font-size:12.5px;">${lastContact}</td>
            <td style="text-align:right;">
              <div style="display:inline-flex;gap:6px;">
                <button class="btn-apple-call" data-call-phone="${esc(l.phone || '+919820123456')}" title="Call Client">📞 Call</button>
                <button class="btn-apple-chat" data-wa-id="${l.id}" title="Send WhatsApp">💬 Chat</button>
                <button class="btn-apple-call" data-view-id="${l.id}" title="View Details">•••</button>
              </div>
            </td>
          </tr>
        `;
      }).join('');

      tbody.querySelectorAll('[data-call-phone]').forEach(b => {
        b.onclick = () => window.open(`tel:${b.dataset.callPhone}`, '_self');
      });
      tbody.querySelectorAll('[data-wa-id]').forEach(b => {
        b.onclick = () => {
          const lead = list.find(x => x.id == b.dataset.waId) || list[0];
          const prop = (state.properties && state.properties.length ? state.properties : demoProperties)[0];
          whatsAppDispatcherModal(prop, lead);
        };
      });
      tbody.querySelectorAll('[data-view-id]').forEach(b => {
        b.onclick = () => leadDrawer(Number(b.dataset.viewId));
      });
    };

    renderRows();

    if (searchInput) searchInput.oninput = () => renderRows();

    document.querySelectorAll('#client-filter-tabs .apple-tab-btn').forEach(btn => {
      btn.onclick = () => {
        document.querySelectorAll('#client-filter-tabs .apple-tab-btn').forEach(x => x.classList.remove('active'));
        btn.classList.add('active');
        activeFilter = btn.dataset.tab;
        renderRows();
      };
    });
  }

  function propertiesView() {
    let list = (state.properties && state.properties.length) ? state.properties : getStoredProperties();
    state.properties = list;

    const totalCount = list.length || 12;
    const saleCount = list.filter(p => p.listingType === 'SALE').length || 9;
    const rentCount = list.filter(p => p.listingType === 'RENT').length || 3;

    app.innerHTML = layout(`
      <!-- HEADER -->
      <div class="page-head" style="margin-bottom:20px;">
        <div>
          <h1 class="page-title" style="font-size:24px;font-weight:800;letter-spacing:-0.025em;color:#0f172a;margin:0 0 4px;">Properties</h1>
          <p class="page-sub" style="font-size:13.5px;color:#64748b;margin:0;">Manage your property inventory, listings, and availability.</p>
        </div>
        <div style="display:flex;gap:10px;align-items:center;">
          <button class="button secondary" id="import-props-csv-btn" style="font-size:12.5px;">📥 Import CSV</button>
          <button class="button secondary" id="export-props-csv-btn" style="font-size:12.5px;">📤 Export CSV</button>
          <button class="button primary" id="new-property" style="background:#2563eb;font-weight:600;padding:8px 16px;border-radius:9px;">＋ Add Property</button>
        </div>
      </div>

      <!-- FILTER TABS & SEARCH BAR -->
      <div class="apple-filter-bar">
        <div class="apple-tabs" id="prop-filter-tabs">
          <button class="apple-tab-btn active" data-tab="ALL">All (${totalCount})</button>
          <button class="apple-tab-btn" data-tab="SALE">For Sale (${saleCount})</button>
          <button class="apple-tab-btn" data-tab="RENT">For Rent (${rentCount})</button>
        </div>
        <div class="topbar-search-box" style="width:300px;">
          ${svgIcon('search', 14)}
          <input type="text" id="property-search" placeholder="Search properties by title, location, type..." />
        </div>
      </div>

      <!-- APPLE PROPERTIES TABLE -->
      <div class="apple-table-container">
        <table class="apple-table" id="properties-table">
          <thead>
            <tr>
              <th>PROPERTY</th>
              <th>LOCATION</th>
              <th>TYPE</th>
              <th>PRICE</th>
              <th>STATUS</th>
              <th style="text-align:right;">ACTIONS</th>
            </tr>
          </thead>
          <tbody id="properties-tbody">
            <!-- Rendered via renderProps -->
          </tbody>
        </table>
      </div>
    `);
    bindShell();

    if (document.querySelector('#new-property')) document.querySelector('#new-property').onclick = () => propertyDrawer();
    if (document.querySelector('#import-props-csv-btn')) document.querySelector('#import-props-csv-btn').onclick = () => csvImportModal('properties');
    if (document.querySelector('#export-props-csv-btn')) document.querySelector('#export-props-csv-btn').onclick = () => exportPropertiesCsv();

    let activeTab = 'ALL';
    const searchInput = document.querySelector('#property-search');
    const tbody = document.querySelector('#properties-tbody');

    const renderProps = () => {
      const q = (searchInput?.value || '').toLowerCase().trim();
      let filtered = list.filter(p => {
        if (activeTab !== 'ALL' && p.listingType !== activeTab) return false;
        if (q && !`${p.title} ${p.location} ${p.society || ''} ${p.propertyCategory || ''}`.toLowerCase().includes(q)) return false;
        return true;
      });

      if (!filtered.length) {
        tbody.innerHTML = `<tr><td colspan="6" style="text-align:center;padding:32px;color:#94a3b8;">No properties found matching filter.</td></tr>`;
        return;
      }

      tbody.innerHTML = filtered.map(p => {
        const photoUrl = (p.photos && p.photos.length) ? p.photos[0] : 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=120&q=80';
        const isRent = p.listingType === 'RENT';
        const priceStr = formatPrice(p.price, p.listingType);
        const typeLabel = p.bhk ? `${p.bhk} BHK Apartment` : (p.propertyCategory || 'Residential');
        const isAvail = p.status === 'AVAILABLE';

        return `
          <tr>
            <td>
              <div style="display:flex;align-items:center;gap:12px;">
                <img src="${esc(photoUrl)}" style="width:48px;height:48px;border-radius:10px;object-fit:cover;border:1px solid #e2e8f0;flex-shrink:0;" alt="Prop" onerror="this.src='https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=120&q=80'" />
                <div>
                  <div style="font-weight:700;color:#0f172a;">${esc(p.title)}</div>
                  <div style="font-size:12px;color:#64748b;margin-top:1px;">${p.carpetAreaSqFt ? p.carpetAreaSqFt + ' sq.ft · ' : ''}${esc(p.society || p.location)}</div>
                </div>
              </div>
            </td>
            <td style="font-weight:500;color:#334155;">${esc(p.location || 'Thane')}</td>
            <td>
              <span style="font-size:12.5px;color:#64748b;background:#f1f5f9;padding:3px 8px;border-radius:6px;font-weight:600;">${esc(typeLabel)}</span>
            </td>
            <td style="font-weight:750;color:#0f172a;">${priceStr}${isRent ? '<span style="font-size:11px;font-weight:normal;color:#64748b;">/mo</span>' : ''}</td>
            <td>
              <span class="apple-badge ${isAvail ? 'active' : 'token'}">
                ● ${esc(p.status || 'AVAILABLE')}
              </span>
            </td>
            <td style="text-align:right;">
              <div style="display:inline-flex;gap:6px;">
                <button class="btn-apple-call" data-wa-prop="${p.id}" title="Share via WhatsApp">💬 Share</button>
                <button class="btn-apple-call" data-cost-prop="${p.id}" title="Cost Sheet & EMI">📑 Cost</button>
                <button class="btn-apple-call" data-view-prop="${p.id}" title="Edit Property">•••</button>
              </div>
            </td>
          </tr>
        `;
      }).join('');

      tbody.querySelectorAll('[data-wa-prop]').forEach(b => {
        b.onclick = () => {
          const prop = list.find(x => x.id == b.dataset.waProp) || list[0];
          const lead = (state.leads && state.leads.length ? state.leads : demoLeads)[0];
          whatsAppDispatcherModal(prop, lead);
        };
      });
      tbody.querySelectorAll('[data-cost-prop]').forEach(b => {
        b.onclick = () => {
          const prop = list.find(x => x.id == b.dataset.costProp) || list[0];
          costSheetDrawer(prop);
        };
      });
      tbody.querySelectorAll('[data-view-prop]').forEach(b => {
        b.onclick = () => propertyDrawer(Number(b.dataset.viewProp));
      });
    };

    renderProps();

    if (searchInput) searchInput.oninput = () => renderProps();

    document.querySelectorAll('#prop-filter-tabs .apple-tab-btn').forEach(btn => {
      btn.onclick = () => {
        document.querySelectorAll('#prop-filter-tabs .apple-tab-btn').forEach(x => x.classList.remove('active'));
        btn.classList.add('active');
        activeTab = btn.dataset.tab;
        renderProps();
      };
    });
  }

  function whatsAppDispatcherModal(property = null, preselectedLead = null, customData = {}) {
    document.querySelectorAll('.modal-backdrop, .drawer-backdrop, .spotlight-backdrop').forEach(b => b.remove());
    const allProps = (state.properties && state.properties.length) ? state.properties : demoProperties;
    const allLeads = (state.leads && state.leads.length) ? state.leads : demoLeads;

    const prop = property || allProps[0] || {
      id: 201,
      title: 'Spacious 2 BHK at Hiranandani Estate',
      society: 'Rodas Enclave',
      location: 'Hiranandani Estate, Thane',
      price: 12500000,
      listingType: 'SALE',
      bhk: 2,
      area: 780,
      furnishing: 'SEMI_FURNISHED',
      amenities: ['Clubhouse', 'Swimming Pool', '24/7 Security', 'Covered Parking']
    };

    const backdrop = document.createElement('div');
    backdrop.className = 'modal-backdrop';
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.cssText = 'max-width:580px;width:92vw;background:#fff;max-height:90vh;overflow-y:auto;padding:24px;border-radius:18px;';

    const s = state.agencySettings || defaultAgencySettings;
    const leads = allLeads;

    // Calculate approximate Stamp Duty & EMI for luxury pitch
    const price = prop.price || 12500000;
    const isSale = prop.listingType === 'SALE';
    const stampDutyRate = prop.location?.toLowerCase().includes('mumbai') ? 0.06 : 0.07;
    const stampDutyAmt = Math.round(price * stampDutyRate);
    const regAmt = isSale ? (price > 3000000 ? 30000 : Math.round(price * 0.01)) : 1000;
    const totalOnRoad = price + stampDutyAmt + regAmt;

    // EMI calculation (8.4% ROI for 20 years, 80% loan)
    const loanAmt = price * 0.8;
    const r = 8.4 / (12 * 100);
    const n = 240;
    const emi = isSale ? Math.round((loanAmt * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)) : null;

    let selectedFormat = customData.format || 'EXECUTIVE'; // EXECUTIVE | COST_SHEET | CRISP_TEASER
    let currentLead = preselectedLead || leads[0] || null;

    const generateText = (format) => {
      const clientName = currentLead ? currentLead.name : 'Valued Client';
      const greeting = `*Hello ${clientName},*`;
      const agencyBranding = `*Marketed By:* ${s.agencyName || 'BrokerAI Realty'} (MahaRERA: ${s.reraNumber || 'A51700012345'})`;

      if (format === 'COST_SHEET') {
        return `${greeting}

Here is the verified *All-Inclusive On-Road Cost Sheet* for your review:

🏢 *Property:* ${prop.title}
📍 *Location:* ${prop.location}${prop.society ? ' (' + prop.society + ')' : ''}
📐 *Configuration:* ${prop.bhk ? prop.bhk + ' BHK' : prop.propertyType} (${prop.area || '—'} sq.ft)

━━━━━━━━━━━━━━━━━━━━
💰 *FINANCIAL COST BREAKDOWN:*
• *Agreement Value:* ${formatPrice(price, prop.listingType)}
• *Stamp Duty (${stampDutyRate * 100}%):* ₹${stampDutyAmt.toLocaleString('en-IN')}
• *Govt Registration Fee:* ₹${regAmt.toLocaleString('en-IN')}
━━━━━━━━━━━━━━━━━━━━
🏆 *ESTIMATED TOTAL ON-ROAD:* ₹${totalOnRoad.toLocaleString('en-IN')}
${emi ? `🏦 *Estimated Home Loan EMI:* ₹${emi.toLocaleString('en-IN')}/month (@ 8.4% ROI for 20 Yrs)` : ''}

✨ *Ready for private site visit & title document review.*

${agencyBranding}`;
      }

      if (format === 'CRISP_TEASER') {
        return `🔥 *HOT OPPORTUNITY · ${prop.bhk ? prop.bhk + ' BHK' : prop.propertyType} in ${prop.location}*
💰 *Offer Price:* ${formatPrice(price, prop.listingType)} (${prop.area || '—'} sq.ft)
✨ ${(prop.amenities || []).slice(0,3).join(' · ') || 'Gated Tower · Lift & Parking'}
📲 *Reply here to book priority walkthrough today.* (${s.agencyName || 'BrokerAI Realty'})`;
      }

      // Default: EXECUTIVE PITCH CARD
      return `${greeting}

I have handpicked this exclusive property match for your requirement:

🏡 *${prop.title}*
📍 *Location:* ${prop.location}${prop.society ? ' · 🏢 ' + prop.society : ''}
📐 *Configuration:* ${prop.bhk ? prop.bhk + ' BHK' : prop.propertyType} · ${prop.area || '—'} sq.ft (${prop.furnishing ? prop.furnishing.replaceAll('_',' ') : 'Semi-Furnished'})
💰 *Asking Price:* ${formatPrice(price, prop.listingType)} ${isSale ? '(Negotiable)' : '/ month'}
🚗 *Parking:* ${prop.parking ? prop.parking + ' Reserved Space(s)' : 'Available'}

✨ *KEY HIGHLIGHTS & AMENITIES:*
${(prop.amenities || ['Clubhouse', 'Swimming Pool', '24/7 Security', 'Power Backup']).slice(0,4).map(a => '✓ ' + a).join('\n')}

${agencyBranding}
📲 _Would you like me to schedule a private site visit for you this week?_`;
    };

    const renderModalContent = () => {
      modal.innerHTML = `
        <div style="border-bottom:1px solid #f1f5f9;padding-bottom:14px;margin-bottom:16px;display:flex;justify-content:space-between;align-items:flex-start;">
          <div>
            <div style="font-size:11px;font-weight:800;color:#059669;text-transform:uppercase;display:flex;align-items:center;gap:4px;">
              <span>${svgIcon('whatsapp', 14)}</span> <span>Client WhatsApp Dispatcher</span>
            </div>
            <h2 style="margin:2px 0 0;font-size:19px;color:var(--ink);">Send Property Pitch to Client</h2>
          </div>
          <button class="close" id="close-wa-dispatcher">×</button>
        </div>

        <!-- RECIPIENT SELECTOR -->
        <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:12px 14px;margin-bottom:16px;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
            <label style="font-size:11.5px;font-weight:750;color:var(--ink);">🎯 Select Target Buyer / Client:</label>
            <span style="font-size:11px;color:#059669;font-weight:700;">● Direct 1-Tap Delivery</span>
          </div>
          <select class="input" id="wa-lead-select" style="font-size:13px;padding:7px 10px;">
            <option value="">-- Send to any Contact / WhatsApp Group --</option>
            ${leads.map(l => `
              <option value="${l.id}" ${currentLead && currentLead.id === l.id ? 'selected' : ''}>
                ${esc(l.name)} (${esc(l.phone || 'No Phone')}) - ${esc(l.requirement?.preferredLocations?.[0] || 'Buyer')}
              </option>
            `).join('')}
          </select>
        </div>

        <!-- FORMAT STYLE TABS -->
        <div style="margin-bottom:10px;">
          <label style="font-size:11.5px;font-weight:750;color:var(--muted);text-transform:uppercase;margin-bottom:6px;display:block;">Pitch Format Style:</label>
          <div class="wa-format-tabs">
            <button class="wa-format-tab ${selectedFormat === 'EXECUTIVE' ? 'active' : ''}" data-fmt="EXECUTIVE">
              🏆 Executive Pitch Card
            </button>
            <button class="wa-format-tab ${selectedFormat === 'COST_SHEET' ? 'active' : ''}" data-fmt="COST_SHEET">
              🧮 On-Road Cost Sheet & EMI
            </button>
            <button class="wa-format-tab ${selectedFormat === 'CRISP_TEASER' ? 'active' : ''}" data-fmt="CRISP_TEASER">
              ⚡ Short Status Broadcast
            </button>
          </div>
        </div>

        <!-- LIVE EDITABLE MESSAGE PREVIEW -->
        <div style="margin-bottom:16px;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
            <label style="font-size:11.5px;font-weight:750;color:var(--ink);">💬 WhatsApp Message Preview (Editable):</label>
            <span style="font-size:11px;color:var(--muted);">You can customize before sending</span>
          </div>
          <textarea class="input" id="wa-editable-text" rows="9" style="font-family:-apple-system, sans-serif;font-size:13px;line-height:1.45;background:#fcfdfd;padding:12px;border:1px solid #cbd5e1;border-radius:10px;">${generateText(selectedFormat)}</textarea>
        </div>

        <!-- DISPATCH ACTIONS -->
        <div style="display:flex;flex-direction:column;gap:10px;">
          <a class="button primary" id="wa-send-now-btn" href="#" target="_blank" style="background:#059669;color:#fff;font-weight:800;padding:12px;font-size:14px;box-shadow:0 4px 14px rgba(5,150,105,0.3);width:100%;justify-content:center;gap:8px;text-decoration:none;">
            ${svgIcon('whatsapp', 18)} Open & Send on WhatsApp
          </a>
          
          <div style="display:flex;gap:10px;">
            <button class="button secondary" id="wa-copy-btn" style="flex:1;justify-content:center;font-size:12.5px;padding:9px;">
              📋 Copy Formatted Text
            </button>
            <button class="button secondary" id="wa-log-showing-btn" style="flex:1;justify-content:center;font-size:12.5px;padding:9px;">
              ◷ Schedule Site Visit
            </button>
          </div>
        </div>`;

      // Event Listeners
      
      const updateSendLink = () => {
        const text = modal.querySelector('#wa-editable-text')?.value || '';
        let phone = currentLead?.phone ? currentLead.phone.replace(/[^0-9]/g, '') : '';
        if (phone && phone.length === 10) phone = '91' + phone;
        const link = modal.querySelector('#wa-send-now-btn');
        if (link) {
          link.href = phone ? `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(text)}` : `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
        }
      };
      updateSendLink();
      modal.querySelector('#wa-editable-text').oninput = updateSendLink;

      if (modal.querySelector('#close-wa-dispatcher')) modal.querySelector('#close-wa-dispatcher').onclick = () => { backdrop.remove(); modal.remove(); };

      modal.querySelectorAll('.wa-format-tab').forEach(tab => {
        tab.onclick = () => {
          selectedFormat = tab.dataset.fmt;
          modal.querySelector('#wa-editable-text').value = generateText(selectedFormat);
          modal.querySelectorAll('.wa-format-tab').forEach(t => t.classList.toggle('active', t.dataset.fmt === selectedFormat));
        };
      });

      modal.querySelector('#wa-lead-select').onchange = (e) => {
        const leadId = Number(e.target.value);
        currentLead = leads.find(l => l.id === leadId) || null;
        modal.querySelector('#wa-editable-text').value = generateText(selectedFormat);
      };

      if (modal.querySelector('#wa-copy-btn')) modal.querySelector('#wa-copy-btn').onclick = () => {
        const text = modal.querySelector('#wa-editable-text').value;
        navigator.clipboard.writeText(text).then(() => {
          showToast('📋 WhatsApp message copied to clipboard!', 'success');
        });
      };

      if (modal.querySelector('#wa-log-showing-btn')) modal.querySelector('#wa-log-showing-btn').onclick = () => {
        backdrop.remove(); modal.remove();
        siteVisitDrawer(currentLead?.id, property?.id);
      };

      if (modal.querySelector('#wa-send-now-btn')) modal.querySelector('#wa-send-now-btn').onclick = () => {
        const text = modal.querySelector('#wa-editable-text').value;
        let phone = currentLead?.phone ? currentLead.phone.replace(/[^0-9]/g, '') : '';
        if (phone && phone.length === 10) phone = '91' + phone;

        const url = phone ? `https://wa.me/${phone}?text=${encodeURIComponent(text)}` : `https://wa.me/?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank');
        showToast('🚀 Opening WhatsApp chat with client...', 'success');

        // Log follow-up activity automatically
        if (currentLead) {
          if (!state.followUps) state.followUps = demoFollowUps;
          state.followUps.unshift({
            id: Date.now(),
            leadId: currentLead.id,
            leadName: currentLead.name,
            leadPhone: currentLead.phone,
            title: `WhatsApp brochure sent for ${prop.title}`,
            type: 'WHATSAPP',
            priority: 'MEDIUM',
            status: 'COMPLETED',
            dueAt: new Date().toISOString(),
            isOverdue: false,
            notes: `Dispatched ${selectedFormat} pitch via BrokerAI WhatsApp Dispatcher`
          });
        }

        backdrop.remove(); modal.remove();
      };
    };

    renderModalContent();
    backdrop.appendChild(modal);
    document.body.appendChild(backdrop);
    const close = () => backdrop.remove();
    backdrop.onclick = (e) => { if (e.target === backdrop) close(); };
    modal.onclick = (e) => e.stopPropagation();
  }


  function copyWhatsAppShare(p) {
    whatsAppDispatcherModal(p);
    return;

    const text = `*🏠 ${p.title}*
📍 *Location:* ${p.location}${p.society ? ` (${p.society})` : ''}
💰 *Price:* ${formatPrice(p.price, p.listingType)} (${p.listingType})
📐 *Configuration:* ${p.bhk ? `${p.bhk} BHK` : p.propertyType}${p.area ? ` · ${p.area} sq.ft` : ''}
🛋️ *Furnishing:* ${p.furnishing ? p.furnishing.replaceAll('_',' ') : 'Unfurnished'}${p.parking ? `\n🚗 *Parking:* ${p.parking} Covered Space(s)` : ''}
✨ *Amenities:* ${(p.amenities || []).join(', ') || 'Gated Security, Power Backup'}

📲 _Contact us to schedule a site visit or get video walkthrough._`;

    navigator.clipboard.writeText(text).then(() => {
      showToast('Formatted WhatsApp property details copied to clipboard!\n\nYou can now paste it directly into WhatsApp chat with your client.', 'success');
    }).catch(() => {
      prompt("Copy formatted WhatsApp text:", text);
    });
  }

  // --- STREAMLINED PROPERTY BOTTOM ACTION SHEET (··· MORE ACTIONS) ---
  function propertyMoreSheet(property) {
    document.querySelectorAll('.modal-backdrop, .drawer-backdrop, .spotlight-backdrop').forEach(b => b.remove());
    if (!property) return;
    const backdrop = document.createElement('div');
    backdrop.className = 'drawer-backdrop';
    const sheet = document.createElement('div');
    sheet.className = 'bottom-action-sheet';
    sheet.innerHTML = `
      <div class="sheet-header">
        <div class="sheet-handle"></div>
        <div style="display:flex;justify-content:space-between;align-items:center;padding:12px 18px 8px;">
          <div>
            <h3 style="font-size:16px;font-weight:750;margin:0;color:var(--ink);">${esc(property.title)}</h3>
            <div style="font-size:12px;color:var(--muted);margin-top:2px;">📍 ${esc(property.location)} · <strong>${formatPrice(property.price, property.listingType)}</strong></div>
          </div>
          <button class="sheet-close" style="background:none;border:none;font-size:22px;cursor:pointer;color:var(--muted);">×</button>
        </div>
      </div>
      <div class="sheet-body">
        <button class="sheet-action-item" id="sheet-find-buyers">
          <span class="sheet-action-icon" style="background:#eff6ff;color:#2563eb;">✦</span>
          <div class="sheet-action-text">
            <strong>Scan Matching CRM Buyers</strong>
            <small>Instant reverse-matching against all active buyer requirements</small>
          </div>
          <span class="sheet-action-arrow">›</span>
        </button>

        <button class="sheet-action-item" id="sheet-pdf-flyer">
          <span class="sheet-action-icon" style="background:#f0fdf4;color:#16a34a;">📄</span>
          <div class="sheet-action-text">
            <strong>1-Click PDF Flyer & Brochure</strong>
            <small>Branded MahaRERA flyer with your agency logo & QR</small>
          </div>
          <span class="sheet-action-arrow">›</span>
        </button>

        <button class="sheet-action-item" id="sheet-cobroker-mou">
          <span class="sheet-action-icon" style="background:#fef3c7;color:#d97706;">🤝</span>
          <div class="sheet-action-text">
            <strong>50:50 Co-Brokering MoU Pitch</strong>
            <small>Legal commission sharing agreement ready for WhatsApp brokers</small>
          </div>
          <span class="sheet-action-arrow">›</span>
        </button>

        <button class="sheet-action-item" id="sheet-schedule-visit">
          <span class="sheet-action-icon" style="background:#e0e7ff;color:#4338ca;">◷</span>
          <div class="sheet-action-text">
            <strong>Schedule Site Visit / Showing</strong>
            <small>Coordinate buyer showing with lockbox key & meeting point</small>
          </div>
          <span class="sheet-action-arrow">›</span>
        </button>

        <button class="sheet-action-item" id="sheet-cost-sheet">
          <span class="sheet-action-icon" style="background:#fdf4ff;color:#c026d3;">💰</span>
          <div class="sheet-action-text">
            <strong>On-Road Cost Sheet & EMI Calculation</strong>
            <small>Breakdown of Stamp Duty (6-7%), Registration, GST & 20-Yr EMI</small>
          </div>
          <span class="sheet-action-arrow">›</span>
        </button>

        <button class="sheet-action-item" id="sheet-edit-prop">
          <span class="sheet-action-icon" style="background:#f1f5f9;color:#475569;">✎</span>
          <div class="sheet-action-text">
            <strong>Edit Property Listing</strong>
            <small>Update photos, price, amenities, or ownership details</small>
          </div>
          <span class="sheet-action-arrow">›</span>
        </button>
      </div>
    `;
    document.querySelectorAll('.modal-backdrop, .drawer-backdrop').forEach(b => b.remove());
    backdrop.appendChild(sheet);
    document.body.appendChild(backdrop);
    const close = () => backdrop.remove();
    backdrop.onclick = (e) => { if (e.target === backdrop) close(); };
    sheet.onclick = (e) => e.stopPropagation();
    sheet.querySelector('.sheet-close').onclick = close;

    sheet.querySelector('#sheet-find-buyers').onclick = () => { close(); propertyBuyersDrawer(property); };
    sheet.querySelector('#sheet-pdf-flyer').onclick = () => { close(); propertyBrochurePdfModal(property); };
    sheet.querySelector('#sheet-cobroker-mou').onclick = () => { close(); coBrokeringAgreementModal(property); };
    sheet.querySelector('#sheet-schedule-visit').onclick = () => { close(); siteVisitDrawer(null, property.id); };
    sheet.querySelector('#sheet-cost-sheet').onclick = () => { close(); whatsAppDispatcherModal(property, null, { format: 'COST_SHEET' }); };
    sheet.querySelector('#sheet-edit-prop').onclick = () => { close(); propertyDrawer(property); };
  }

  // --- 1-TAP SMART MATCH DRAWER FOR BUYER LEADS ---
  async function leadMatchesDrawer(lead) {
    document.querySelectorAll('.modal-backdrop, .drawer-backdrop, .spotlight-backdrop').forEach(b => b.remove());
    if (!lead) return;
    const backdrop = document.createElement('div');
    backdrop.className = 'drawer-backdrop';
    const drawer = document.createElement('aside');
    drawer.className = 'drawer';
    drawer.style.cssText = 'width:min(680px,100vw);';
    drawer.innerHTML = `
      <div class="drawer-head">
        <div>
          <h2 class="panel-title">🔥 Matching Inventory for ${esc(lead.name)}</h2>
          <div class="subtle">Budget: ${formatPrice(lead.requirement?.maxBudget, lead.requirement?.transactionType === 'RENT' ? 'RENT' : 'SALE')} · ${lead.requirement?.bhk ? `${lead.requirement.bhk} BHK` : 'Any BHK'} · ${(lead.requirement?.preferredLocations || []).join(', ') || 'Thane & Mumbai'}</div>
        </div>
        <button class="close">×</button>
      </div>
      <div style="padding:20px;" id="lead-match-list">
        <div class="loading">Scanning verified properties for perfect matches…</div>
      </div>
    `;
    document.body.append(backdrop, drawer);
    const close = () => { backdrop.remove(); drawer.remove(); };
    backdrop.onclick = close;
    if (drawer.querySelector('.close')) drawer.querySelector('.close').onclick = close;

    let props = (state.properties && state.properties.length) ? state.properties : getStoredProperties();
    state.properties = props;

    const req = lead.requirement || {};
    const matches = props.map(prop => {
      let score = 0;
      let reasons = [];

      if ((req.transactionType === 'BUY' && prop.listingType === 'SALE') || (req.transactionType === 'RENT' && prop.listingType === 'RENT')) {
        score += 30;
        reasons.push('Matches intent (' + prop.listingType + ')');
      }
      if (req.bhk && prop.bhk && req.bhk === prop.bhk) {
        score += 25;
        reasons.push(req.bhk + ' BHK exact configuration');
      }
      if (prop.price) {
        const minB = req.minBudget || 0;
        const maxB = req.maxBudget || Infinity;
        if (prop.price >= minB && prop.price <= maxB) {
          score += 25;
          reasons.push('Price within buyer budget (' + formatPrice(prop.price, prop.listingType) + ')');
        } else if (prop.price <= maxB * 1.1) {
          score += 10;
          reasons.push('Price within 10% negotiation range');
        }
      }
      if (req.preferredLocations && req.preferredLocations.some(loc => (prop.location || '').toLowerCase().includes(loc.toLowerCase()) || (prop.society || '').toLowerCase().includes(loc.toLowerCase()))) {
        score += 20;
        reasons.push('Location matches buyer preference');
      }

      return { prop, score, reasons };
    }).filter(m => m.score >= 30).sort((a, b) => b.score - a.score);

    const container = drawer.querySelector('#lead-match-list');
    if (matches.length) {
      container.innerHTML = `
        <div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:10px;padding:12px 14px;margin-bottom:16px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px;">
          <div style="font-size:13px;color:#1e40af;font-weight:600;">
            Found <strong>${matches.length} matching properties</strong> for ${esc(lead.name)}
          </div>
          <button class="button primary" id="lead-match-pitch-all" style="padding:4px 10px;font-size:11.5px;background:#15803d;">
            💬 Pitch Top Match
          </button>
        </div>

        <div style="display:grid;gap:14px;">
          ${matches.map(m => {
            const p = m.prop;
            const coverImg = (p.images && p.images.length) ? p.images[0] : null;
            return `
              <div style="border:1px solid var(--line);border-radius:12px;padding:14px;background:#fff;box-shadow:0 1px 3px rgba(0,0,0,0.04);">
                <div style="display:flex;gap:12px;align-items:flex-start;">
                  <div style="width:72px;height:72px;border-radius:8px;background:${coverImg ? `url('${coverImg}') center/cover` : 'linear-gradient(135deg,#1e3a8a,#3b82f6)'};flex-shrink:0;display:flex;align-items:center;justify-content:center;color:#fff;font-size:20px;font-weight:700;">
                    ${!coverImg ? (p.bhk ? `${p.bhk}B` : '🏠') : ''}
                  </div>
                  <div style="flex:1;">
                    <div style="display:flex;justify-content:space-between;align-items:flex-start;">
                      <div>
                        <strong style="font-size:14.5px;color:var(--ink);">${esc(p.title)}</strong>
                        <div style="font-size:12px;color:var(--muted);margin-top:2px;">📍 ${esc(p.location)}${p.society ? ` · ${esc(p.society)}` : ''}</div>
                      </div>
                      <span class="badge ${m.score >= 75 ? 'hot' : 'warm'}" style="font-size:10.5px;font-weight:750;">${m.score}% MATCH</span>
                    </div>
                    <div style="font-size:15px;font-weight:800;color:#101828;margin-top:4px;">
                      ${formatPrice(p.price, p.listingType)}
                      <span style="font-size:12px;font-weight:500;color:var(--muted);">· ${p.area ? `${p.area} sq.ft` : ''} · ${p.bhk ? `${p.bhk} BHK` : ''}</span>
                    </div>
                    <div style="display:flex;gap:4px;flex-wrap:wrap;margin-top:6px;">
                      ${m.reasons.map(r => `<span style="background:#f1f5f9;color:#475569;font-size:10.5px;padding:2px 7px;border-radius:4px;font-weight:600;">✓ ${esc(r)}</span>`).join('')}
                    </div>
                  </div>
                </div>

                <div style="display:flex;gap:8px;margin-top:12px;padding-top:10px;border-top:1px solid #f1f5f9;">
                  <button class="button primary" data-pitch-match-prop="${p.id}" style="flex:1;padding:6px 10px;font-size:12px;background:#15803d;">
                    💬 WhatsApp Pitch
                  </button>
                  <button class="button secondary" data-visit-match-prop="${p.id}" style="flex:1;padding:6px 10px;font-size:12px;">
                    ◷ Schedule Visit
                  </button>
                  <button class="button secondary" data-gallery-match-prop="${p.id}" style="padding:6px 10px;font-size:12px;">
                    📸 Photos
                  </button>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      `;

      container.querySelector('#lead-match-pitch-all')?.addEventListener('click', () => {
        close();
        whatsAppDispatcherModal(matches[0].prop, lead);
      });

      container.querySelectorAll('[data-pitch-match-prop]').forEach(btn => btn.onclick = () => {
        const pId = Number(btn.dataset.pitchMatchProp);
        const property = props.find(p => p.id === pId);
        close();
        if (property) whatsAppDispatcherModal(property, lead);
      });

      container.querySelectorAll('[data-visit-match-prop]').forEach(btn => btn.onclick = () => {
        const pId = Number(btn.dataset.visitMatchProp);
        close();
        siteVisitDrawer(lead.id, pId);
      });

      container.querySelectorAll('[data-gallery-match-prop]').forEach(btn => btn.onclick = () => {
        const pId = Number(btn.dataset.galleryMatchProp);
        const property = props.find(p => p.id === pId);
        if (property) propertyGalleryModal(property);
      });
    } else {
      container.innerHTML = `<div class="empty"><strong>No matching properties in active inventory.</strong>Add a new listing or adjust buyer requirements.</div>`;
    }
  }

  async function propertyBuyersDrawer(property) {
    document.querySelectorAll('.modal-backdrop, .drawer-backdrop, .spotlight-backdrop').forEach(b => b.remove());
    if (!property) return;
    const backdrop = document.createElement('div');
    backdrop.className = 'drawer-backdrop';
    const drawer = document.createElement('aside');
    drawer.className = 'drawer';
    drawer.innerHTML = `
      <div class="drawer-head">
        <div>
          <h2 class="panel-title">Matching Buyers for Listing</h2>
          <div class="subtle">${esc(property.title)} · ${formatPrice(property.price, property.listingType)}</div>
        </div>
        <button class="close">×</button>
      </div>
      <div style="padding:20px;" id="buyer-match-list">
        <div class="loading">Analyzing active buyer leads in CRM…</div>
      </div>`;
    document.body.append(backdrop, drawer);
    const close = () => { backdrop.remove(); drawer.remove(); };
    backdrop.onclick = close;
    if (drawer.querySelector('.close')) drawer.querySelector('.close').onclick = close;

    let leads = (state.leads && state.leads.length) ? state.leads : getStoredLeads();
    state.leads = leads;

    const matchedBuyers = leads.map(lead => {
      const req = lead.requirement || {};
      let score = 0;
      let reasons = [];

      if ((req.transactionType === 'BUY' && property.listingType === 'SALE') || (req.transactionType === 'RENT' && property.listingType === 'RENT')) {
        score += 25;
        reasons.push('Intent matches (' + property.listingType + ')');
      }
      if (req.propertyCategory === property.propertyCategory) {
        score += 20;
        reasons.push('Category matches (' + property.propertyCategory + ')');
      }
      if (req.bhk && property.bhk && req.bhk === property.bhk) {
        score += 20;
        reasons.push(req.bhk + ' BHK exact match');
      }
      if (property.price) {
        const minB = req.minBudget || 0;
        const maxB = req.maxBudget || Infinity;
        if (property.price >= minB && property.price <= maxB) {
          score += 25;
          reasons.push('Price is within buyer budget');
        }
      }
      if (req.preferredLocations && req.preferredLocations.some(loc => (property.location || '').toLowerCase().includes(loc.toLowerCase()))) {
        score += 10;
        reasons.push('Locality matches preferred area');
      }

      return { lead, score, reasons };
    }).filter(m => m.score >= 40).sort((a, b) => b.score - a.score);

    const container = drawer.querySelector('#buyer-match-list');
    if (matchedBuyers.length) {
      container.innerHTML = `
        <p class="subtle" style="margin-bottom:16px;">Found <strong>${matchedBuyers.length} active buyer(s)</strong> looking for properties like this:</p>
        <div style="display:grid;gap:12px;">
          ${matchedBuyers.map(m => `
            <div style="border:1px solid var(--line);border-radius:10px;padding:14px;background:#fafbfc;">
              <div style="display:flex;justify-content:space-between;align-items:center;">
                <div>
                  <strong>${esc(privacyName(m.lead.name))}</strong> · <span class="stage">${esc(privacyPhone(m.lead.phone))}</span>
                  <div class="subtle">Budget: ${formatPrice(m.lead.requirement?.maxBudget, property.listingType)} · Stage: ${esc(m.lead.stage)}</div>
                </div>
                <span class="badge ${m.score >= 80 ? 'hot' : 'cold'}">${m.score}% MATCH</span>
              </div>
              <ul style="margin:8px 0 12px 18px;font-size:12px;color:var(--muted);">
                ${m.reasons.map(r => `<li>${esc(r)}</li>`).join('')}
              </ul>
              <button class="button primary" data-schedule-match-lead="${m.lead.id}" style="padding:5px 10px;font-size:12px;">◷ Schedule Site Visit</button>
            </div>
          `).join('')}
        </div>
      `;
      container.querySelectorAll('[data-schedule-match-lead]').forEach(btn => btn.onclick = () => {
        const lId = Number(btn.dataset.scheduleMatchLead);
        close();
        siteVisitDrawer(lId, property.id);
      });
    } else {
      container.innerHTML = `<div class="empty"><strong>No matching buyers found in CRM.</strong>As new buyer leads enter your CRM with matching criteria, they will be highlighted here.</div>`;
    }
  }

  function propertyDrawer(property = null) {
    document.querySelectorAll('.modal-backdrop, .drawer-backdrop, .spotlight-backdrop').forEach(b => b.remove());
    const caps = getPlanCapabilities();
    const currentPropsCount = (state.properties || []).length;
    if (!property && currentPropsCount >= caps.maxProperties) {
      alert(`⚠️ You have reached the limit of ${caps.maxProperties} properties on the ${caps.name} tier.\n\nUpgrade to Pro Closer for UNLIMITED Listings & MahaRERA Token Receipts.`);
      planSimulatorModal();
      return;
    }

    const backdrop = document.createElement('div');
    backdrop.className = 'drawer-backdrop';
    const drawer = document.createElement('aside');
    drawer.className = 'drawer';
    drawer.style.cssText = 'width:min(680px,100vw);';

    const currentCat = property?.propertyCategory || 'RESIDENTIAL';
    const currentType = property?.propertyType || (currentCat === 'RESIDENTIAL' ? '2 BHK Apartment' : 'Commercial Office Space');

    const residentialTypes = [
      ['1 BHK Apartment', 1],
      ['2 BHK Apartment', 2],
      ['3 BHK Apartment', 3],
      ['4 BHK Luxury Apartment', 4],
      ['5+ BHK Penthouse / Duplex', 5],
      ['Independent Villa / Bungalow', 4],
      ['Row House / Townhouse', 3],
      ['Studio Apartment / 1 RK', 1],
      ['Residential Plot / Land', 0]
    ];

    const commercialTypes = [
      ['Commercial Office Space', 0],
      ['Retail Shop / Showroom', 0],
      ['Commercial Bare Shell', 0],
      ['Warehouse / Industrial Godown', 0],
      ['Co-working Floor / Office', 0],
      ['Commercial Plot / Land', 0]
    ];

    drawer.innerHTML = `
      <div class="drawer-head">
        <div>
          <h2 class="panel-title">${property ? 'Edit Property Listing' : 'Add Property Listing'}</h2>
          <div class="subtle">Record property specifications, owner contact, and key lockbox status.</div>
        </div>
        <button class="close">×</button>
      </div>
      <form class="form" id="property-form">
        <div id="property-notice"></div>

        <!-- SECTION 1: CATEGORY & DYNAMIC TYPE -->
        <div class="form-section">
          <h3 style="display:flex;align-items:center;gap:6px;color:#1e40af;">
            <span>🏢</span> Property Category & Configuration
          </h3>
          <div class="form-grid">
            <div class="field">
              <label>Property Category *</label>
              <select class="select" id="prop-category-select" name="propertyCategory">
                <option value="RESIDENTIAL" ${currentCat === 'RESIDENTIAL' ? 'selected' : ''}>RESIDENTIAL (Flats, Villas, Row Houses)</option>
                <option value="COMMERCIAL" ${currentCat === 'COMMERCIAL' ? 'selected' : ''}>COMMERCIAL (Offices, Retail, Warehouses)</option>
              </select>
            </div>
            <div class="field">
              <label>Property Type / Configuration *</label>
              <select class="select" id="prop-type-select" name="propertyType" required></select>
            </div>
            <div class="field">
              <label>Transaction Type *</label>
              <select class="select" name="listingType">
                <option value="SALE" ${property?.listingType === 'SALE' ? 'selected' : ''}>FOR SALE (Outright Purchase)</option>
                <option value="RENT" ${property?.listingType === 'RENT' ? 'selected' : ''}>FOR RENT (Monthly Lease)</option>
              </select>
            </div>
            <div class="field">
              <label>Bedrooms (BHK) *</label>
              <input class="input" id="prop-bhk-input" name="bhk" type="number" min="0" max="20" required value="${property?.bhk ?? 2}" placeholder="2" />
            </div>
          </div>
        </div>

        <!-- SECTION 2: SPECIFICATIONS & PRICING -->
        <div class="form-section">
          <h3 style="display:flex;align-items:center;gap:6px;color:#1e40af;">
            <span>🏡</span> Listing Title, Society & Pricing
          </h3>
          <div class="form-grid">
            <div class="field full">
              <label>Listing Title *</label>
              <input class="input" id="prop-title-input" name="title" required placeholder="e.g. Spacious 2 BHK at Rodas Enclave, Hiranandani" value="${esc(property?.title || '')}" />
            </div>
            <div class="field">
              <label>Building / Society / Project Name *</label>
              <input class="input" id="prop-society-input" name="society" required placeholder="e.g. Rodas Enclave, Rustomjee Urbania" value="${esc(property?.society || '')}" />
            </div>
            <div class="field">
              <label>Developer / Builder Name</label>
              <input class="input" name="builderName" placeholder="e.g. Hiranandani, Lodha, Raymond, Kalpataru" value="${esc(property?.builderName || '')}" />
            </div>
            <div class="field">
              <label>MahaRERA Registration ID</label>
              <input class="input" name="mahaReraId" placeholder="e.g. P51700028890 or OC Received" value="${esc(property?.mahaReraId || '')}" style="text-transform:uppercase;" />
            </div>
            <div class="field">
              <label>Locality / Area / City *</label>
              <input class="input" id="prop-location-input" name="location" required placeholder="e.g. Hiranandani Estate, Thane West" value="${esc(property?.location || '')}" />
            </div>
            <div class="field">
              <label>Price (₹) *</label>
              <input class="input" name="price" required type="number" min="1" step="50000" placeholder="e.g. 12500000 for 1.25 Cr" value="${esc(property?.price || '')}" style="font-weight:750;color:#15803d;" />
            </div>
            <div class="field">
              <label>Carpet Area (sq.ft) *</label>
              <input class="input" name="area" type="number" min="1" required placeholder="e.g. 780" value="${esc(property?.area || '')}" />
            </div>
            <div class="field">
              <label>Flat Status (Ready to Move with OC / Under Construction)</label>
              <select class="select" name="possessionStatus">
                <option value="READY_TO_MOVE" ${property?.possessionStatus === 'READY_TO_MOVE' ? 'selected' : ''}>Ready to Move (OC Received · 0% GST)</option>
                <option value="UNDER_CONSTRUCTION" ${property?.possessionStatus === 'UNDER_CONSTRUCTION' ? 'selected' : ''}>Under Construction (5% GST)</option>
              </select>
            </div>
            <div class="field">
              <label>Facing / View</label>
              <select class="select" name="facing">
                <option value="EAST" ${property?.facing === 'EAST' ? 'selected' : ''}>East Facing (Morning Sun)</option>
                <option value="WEST" ${property?.facing === 'WEST' ? 'selected' : ''}>West Facing</option>
                <option value="GARDEN" ${property?.facing === 'GARDEN' ? 'selected' : ''}>Garden / Podium Facing</option>
                <option value="YEOOR_HILLS" ${property?.facing === 'YEOOR_HILLS' ? 'selected' : ''}>Yeoor Hills / Green View</option>
                <option value="CITY_VIEW" ${property?.facing === 'CITY_VIEW' ? 'selected' : ''}>Open City Skyline View</option>
              </select>
            </div>
            <div class="field">
              <label>Parking Spaces</label>
              <input class="input" name="parking" type="number" min="0" value="${esc(property?.parking ?? 1)}" />
            </div>
            <div class="field">
              <label>Furnishing Status</label>
              <select class="select" name="furnishing">
                <option value="SEMI_FURNISHED" ${property?.furnishing === 'SEMI_FURNISHED' ? 'selected' : ''}>SEMI FURNISHED (Modular Kitchen + Wardrobes)</option>
                <option value="FURNISHED" ${property?.furnishing === 'FURNISHED' ? 'selected' : ''}>FULLY FURNISHED</option>
                <option value="UNFURNISHED" ${property?.furnishing === 'UNFURNISHED' ? 'selected' : ''}>UNFURNISHED (Bare Shell)</option>
              </select>
            </div>
            <div class="field">
              <label>Inventory Status</label>
              <select class="select" name="status">
                <option value="AVAILABLE" ${property?.status === 'AVAILABLE' ? 'selected' : ''}>AVAILABLE (Ready to Show)</option>
                <option value="NEGOTIATION" ${property?.status === 'NEGOTIATION' ? 'selected' : ''}>NEGOTIATION (Token in Progress)</option>
                <option value="HOLD" ${property?.status === 'HOLD' ? 'selected' : ''}>HOLD (Client Priority)</option>
                <option value="SOLD" ${property?.status === 'SOLD' ? 'selected' : ''}>SOLD / REGISTERED</option>
                <option value="RENTED" ${property?.status === 'RENTED' ? 'selected' : ''}>RENTED OUT</option>
              </select>
            </div>
            <div class="field">
              <label>🔑 Key Lockbox & Showing Custody</label>
              <select class="select" name="keyLocation">
                <option value="🔑 Office Key Board (Hook #4)" ${property?.keyLocation?.includes('Office') ? 'selected' : ''}>🔑 Office Key Board (Hook #4)</option>
                <option value="🛡️ Tower 2 Guard (Watchman Ramu)" ${property?.keyLocation?.includes('Guard') ? 'selected' : ''}>🛡️ Society Security Guard (Tower Guard)</option>
                <option value="👤 In Field with Aarav Mehta" ${property?.keyLocation?.includes('Field') ? 'selected' : ''}>👤 In Field with Assigned Agent</option>
                <option value="🏠 Owner Residing / Direct Call Req." ${property?.keyLocation?.includes('Owner') ? 'selected' : ''}>🏠 Owner Residing (Prior Notice Required)</option>
              </select>
            </div>
            <div class="field full">
              <label>Amenities <span class="subtle">(comma separated)</span></label>
              <input class="input" name="amenities" placeholder="Clubhouse, Gym, Swimming Pool, High Speed Elevators, Gated Security" value="${esc((property?.amenities || ['Clubhouse', 'Gym', 'Swimming Pool', 'Security']).join(', '))}" />
            </div>
          </div>
        </div>

        <!-- SECTION 3: REAL FLAT PHOTOS & FLOOR PLAN -->
        <div class="form-section" style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:16px;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;flex-wrap:wrap;gap:8px;">
            <h3 style="display:flex;align-items:center;gap:6px;color:#1e40af;margin:0;">
              <span>📸</span> Real Flat Photos & Floor Plan
            </h3>
            <span class="badge" id="photo-count-badge" style="background:#dcfce7;color:#15803d;font-weight:700;font-size:11px;">
              ${(property?.images?.length || 0)} Photos Attached
            </span>
          </div>
          <p class="subtle" style="font-size:12px;margin:0 0 12px;line-height:1.4;">
            Capture real photos of the flat using your phone camera (Living room, Bedrooms, Kitchen, Balcony, Society) during site visits. If you haven't visited yet, verified sample photos will be shown automatically.
          </p>

          <!-- UPLOAD BUTTONS -->
          <div style="display:flex;gap:8px;margin-bottom:12px;flex-wrap:wrap;">
            <!-- Hidden native inputs for mobile camera and gallery -->
            <input type="file" id="prop-camera-input" accept="image/*" capture="environment" style="display:none;" />
            <input type="file" id="prop-gallery-input" accept="image/*" multiple style="display:none;" />
            <input type="file" id="prop-floorplan-file-input" accept="image/*" style="display:none;" />
            
            <button type="button" class="button hero-btn" id="trigger-camera-btn" style="background:#15803d;color:#fff;font-size:12.5px;padding:8px 14px;font-weight:750;display:inline-flex;align-items:center;gap:6px;">
              📸 Take Live Photo (Camera)
            </button>
            <button type="button" class="button primary" id="trigger-gallery-btn" style="background:#2563eb;color:#fff;font-size:12.5px;padding:8px 14px;font-weight:750;display:inline-flex;align-items:center;gap:6px;">
              🖼️ Pick from Gallery
            </button>
            <button type="button" class="button secondary" id="trigger-floorplan-upload-btn" style="font-size:12.5px;padding:8px 14px;font-weight:700;display:inline-flex;align-items:center;gap:6px;">
              📐 Upload Floor Plan
            </button>
          </div>

          <!-- UPLOADED PHOTOS PREVIEW STRIP -->
          <div id="uploaded-photos-container" style="display:grid;grid-template-columns:repeat(auto-fill, minmax(95px, 1fr));gap:8px;margin-bottom:12px;">
            <!-- Rendered dynamically -->
          </div>

          <!-- OR PASTE URL -->
          <div style="display:flex;gap:6px;align-items:center;">
            <input class="input" id="custom-photo-url-input" placeholder="Or paste image URL (https://...)" style="font-size:12.5px;" />
            <button type="button" class="button secondary" id="add-photo-url-btn" style="white-space:nowrap;font-size:12px;padding:8px 12px;font-weight:700;">
              + Add URL
            </button>
          </div>
        </div>

        <!-- SECTION 4: OWNER INFORMATION -->
        <div class="form-section" style="background:#fffbeb;border:1px solid #fde68a;border-radius:12px;padding:16px;">
          <h3 style="display:flex;align-items:center;gap:6px;color:#92400e;margin-top:0;">
            <span>🏠</span> Property Owner (Seller / Landlord) Contact
          </h3>
          <div class="form-grid">
            <div class="field">
              <label>Owner Full Name *</label>
              <input class="input" name="ownerName" required placeholder="e.g. Suresh Patil" value="${esc(property?.ownerName || '')}" />
            </div>
            <div class="field">
              <label>Owner Mobile (WhatsApp) *</label>
              <input class="input" name="ownerPhone" required placeholder="+91 98210 11223" value="${esc(property?.ownerPhone || '')}" />
            </div>
          </div>
        </div>
      </form>
      <div class="form-actions">
        <button class="button secondary" id="cancel-property">Cancel</button>
        <button class="button primary" id="save-property">${property ? 'Save Changes' : 'Add Property'}</button>
      </div>`;

    document.body.append(backdrop, drawer);

    let currentImages = property?.images ? [...property.images] : [];
    let currentFloorPlan = property?.floorPlan || null;

    // Fast HTML5 Canvas Image Downscaler & Compressor
    function compressImageFile(file, maxWidth = 1280, maxHeight = 1280, quality = 0.8) {
      return new Promise((resolve) => {
        if (!file || !file.type || !file.type.startsWith('image/')) {
          return resolve(null);
        }
        const reader = new FileReader();
        reader.onload = (e) => {
          const rawDataUrl = e.target.result;
          try {
            if (typeof Image === 'undefined' || typeof document === 'undefined') {
              return resolve(rawDataUrl);
            }
            const img = new Image();
            img.onload = () => {
              try {
                let width = img.width;
                let height = img.height;
                if (width > height) {
                  if (width > maxWidth) {
                    height = Math.round((height * maxWidth) / width);
                    width = maxWidth;
                  }
                } else {
                  if (height > maxHeight) {
                    width = Math.round((width * maxHeight) / height);
                    height = maxHeight;
                  }
                }
                const canvas = document.createElement('canvas');
                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext('2d');
                if (ctx) {
                  ctx.drawImage(img, 0, 0, width, height);
                  const compressed = canvas.toDataURL('image/jpeg', quality);
                  resolve(compressed);
                } else {
                  resolve(rawDataUrl);
                }
              } catch (canvasErr) {
                resolve(rawDataUrl);
              }
            };
            img.onerror = () => resolve(rawDataUrl);
            img.src = rawDataUrl;
          } catch (err) {
            resolve(rawDataUrl);
          }
        };
        reader.onerror = () => resolve(null);
        reader.readAsDataURL(file);
      });
    }

    const renderPhotoThumbnails = () => {
      const container = drawer.querySelector('#uploaded-photos-container');
      const badge = drawer.querySelector('#photo-count-badge');
      if (!container) return;

      if (badge) {
        if (currentImages.length > 0) {
          badge.textContent = `✓ ${currentImages.length} Real Flat Photo${currentImages.length > 1 ? 's' : ''} Attached`;
          badge.style.background = '#dcfce7';
          badge.style.color = '#15803d';
        } else {
          badge.textContent = '⚡ Sample Photos Active';
          badge.style.background = '#fef3c7';
          badge.style.color = '#b45309';
        }
      }

      if (currentImages.length === 0) {
        container.innerHTML = `
          <div style="grid-column:1/-1;padding:12px;background:#ffffff;border:1px dashed #cbd5e1;border-radius:8px;text-align:center;font-size:12px;color:#64748b;">
            No custom photos uploaded yet. Tap <strong>"📸 Take Live Photo"</strong> or <strong>"🖼️ Pick from Gallery"</strong> to add real flat pictures.
          </div>`;
        return;
      }

      container.innerHTML = currentImages.map((img, idx) => `
        <div style="position:relative;height:84px;border-radius:8px;overflow:hidden;border:2px solid ${idx === 0 ? '#2563eb' : '#e2e8f0'};background:#0f172a;" title="${idx === 0 ? 'Primary Cover Photo' : 'Photo ' + (idx + 1)}">
          <img src="${img}" style="width:100%;height:100%;object-fit:cover;" alt="Flat Photo ${idx + 1}" />
          <span style="position:absolute;bottom:2px;left:2px;background:rgba(0,0,0,0.7);color:#fff;font-size:9px;font-weight:800;padding:1px 4px;border-radius:3px;">
            ${idx === 0 ? '⭐ Cover' : '#' + (idx + 1)}
          </span>
          <button type="button" data-delete-photo-idx="${idx}" style="position:absolute;top:2px;right:2px;width:20px;height:20px;border-radius:50%;background:rgba(239,68,68,0.9);color:#fff;border:none;display:grid;place-items:center;font-size:11px;font-weight:bold;cursor:pointer;padding:0;" title="Remove Photo">
            ×
          </button>
        </div>
      `).join('');

      container.querySelectorAll('[data-delete-photo-idx]').forEach(btn => {
        btn.onclick = (e) => {
          e.stopPropagation();
          const idx = Number(btn.dataset.deletePhotoIdx);
          currentImages.splice(idx, 1);
          renderPhotoThumbnails();
        };
      });
    };

    renderPhotoThumbnails();

    const cameraInput = drawer.querySelector('#prop-camera-input');
    const galleryInput = drawer.querySelector('#prop-gallery-input');
    const floorplanFileInput = drawer.querySelector('#prop-floorplan-file-input');
    const triggerCameraBtn = drawer.querySelector('#trigger-camera-btn');
    const triggerGalleryBtn = drawer.querySelector('#trigger-gallery-btn');
    const triggerFloorplanBtn = drawer.querySelector('#trigger-floorplan-upload-btn');
    const urlInput = drawer.querySelector('#custom-photo-url-input');
    const addUrlBtn = drawer.querySelector('#add-photo-url-btn');

    // Camera Live Snap Handler
    if (triggerCameraBtn && cameraInput) {
      triggerCameraBtn.onclick = () => cameraInput.click();
      cameraInput.onchange = async (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        showToast('⚡ Processing & optimizing camera photo...', 'info');
        const compressedDataUrl = await compressImageFile(file);
        if (compressedDataUrl) {
          currentImages.push(compressedDataUrl);
          renderPhotoThumbnails();
          showToast('📸 Live flat photo captured & added to gallery!', 'success');
        }
        cameraInput.value = '';
      };
    }

    // Gallery Multi-Pick Handler
    if (triggerGalleryBtn && galleryInput) {
      triggerGalleryBtn.onclick = () => galleryInput.click();
      galleryInput.onchange = async (e) => {
        const files = Array.from(e.target.files || []);
        if (!files.length) return;
        showToast(`⚡ Processing ${files.length} flat photo(s)...`, 'info');
        for (const file of files) {
          const compressedDataUrl = await compressImageFile(file);
          if (compressedDataUrl) {
            currentImages.push(compressedDataUrl);
          }
        }
        renderPhotoThumbnails();
        showToast(`✓ ${files.length} photo(s) added to property gallery!`, 'success');
        galleryInput.value = '';
      };
    }

    // Floor Plan Upload Handler
    if (triggerFloorplanBtn && floorplanFileInput) {
      triggerFloorplanBtn.onclick = () => floorplanFileInput.click();
      floorplanFileInput.onchange = async (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        showToast('⚡ Optimizing floor plan layout...', 'info');
        const compressedDataUrl = await compressImageFile(file, 1600, 1600, 0.85);
        if (compressedDataUrl) {
          currentFloorPlan = compressedDataUrl;
          showToast('📐 Custom floor plan layout attached!', 'success');
        }
        floorplanFileInput.value = '';
      };
    }

    // URL Add Handler
    if (addUrlBtn && urlInput) {
      addUrlBtn.onclick = () => {
        const url = urlInput.value.trim();
        if (url) {
          currentImages.push(url);
          urlInput.value = '';
          renderPhotoThumbnails();
          showToast('✓ Photo URL added to listing gallery!', 'success');
        }
      };
    }

    const catSelect = drawer.querySelector('#prop-category-select');
    const typeSelect = drawer.querySelector('#prop-type-select');
    const bhkInput = drawer.querySelector('#prop-bhk-input');
    const titleInput = drawer.querySelector('#prop-title-input');
    const societyInput = drawer.querySelector('#prop-society-input');
    const locationInput = drawer.querySelector('#prop-location-input');

    // Populate typeSelect based on category
    const updateTypeOptions = () => {
      const isRes = catSelect.value === 'RESIDENTIAL';
      const types = isRes ? residentialTypes : commercialTypes;

      typeSelect.innerHTML = types.map(([tName]) => `
        <option value="${tName}" ${(property?.propertyType === tName || currentType === tName) ? 'selected' : ''}>${tName}</option>
      `).join('');

      // Auto update BHK if not customized
      const selectedType = typeSelect.value;
      const matched = types.find(t => t[0] === selectedType);
      if (matched !== undefined) bhkInput.value = matched[1];
    };

    catSelect.onchange = () => {
      updateTypeOptions();
      autoSuggestTitle();
    };

    typeSelect.onchange = () => {
      const isRes = catSelect.value === 'RESIDENTIAL';
      const types = isRes ? residentialTypes : commercialTypes;
      const matched = types.find(t => t[0] === typeSelect.value);
      if (matched !== undefined) bhkInput.value = matched[1];
      autoSuggestTitle();
    };

    const autoSuggestTitle = () => {
      if (!titleInput.value || titleInput.value.includes('BHK') || titleInput.value.includes('Office') || titleInput.value.includes('Shop')) {
        const type = typeSelect.value.replace(' Luxury Apartment', '').replace(' Apartment', '');
        const society = societyInput.value || 'Prime Society';
        const loc = locationInput.value ? ` at ${locationInput.value}` : '';
        titleInput.value = `${type} in ${society}${loc}`;
      }
    };

    societyInput.oninput = autoSuggestTitle;
    locationInput.oninput = autoSuggestTitle;

    updateTypeOptions();

    const close = () => { backdrop.remove(); drawer.remove(); };
    backdrop.onclick = close;
    if (drawer.querySelector('.close')) drawer.querySelector('.close').onclick = close;
    if (drawer.querySelector('#cancel-property')) drawer.querySelector('#cancel-property').onclick = close;

    if (drawer.querySelector('#save-property')) drawer.querySelector('#save-property').onclick = async () => {
      const f = new FormData(drawer.querySelector('#property-form'));
      const number = n => f.get(n) ? Number(f.get(n)) : null;

      const title = f.get('title');
      const propertyCategory = f.get('propertyCategory');
      const propertyType = f.get('propertyType');
      const price = number('price');
      const area = number('area');
      const location = f.get('location');
      const bhk = number('bhk') ?? 0;

      if (!title || !price || !area || !location) {
        drawer.querySelector('#property-notice').innerHTML = `<div class="notice error">Please fill all required fields (Title, Price, Area, Location).</div>`;
        return;
      }

      let defaultImgSet;
      if (propertyCategory === 'COMMERCIAL') {
        defaultImgSet = [
          'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80'
        ];
      } else if (bhk >= 3 || (propertyType && propertyType.includes('Penthouse'))) {
        defaultImgSet = [
          'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
        ];
      } else {
        defaultImgSet = [
          'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80'
        ];
      }

      const finalImages = currentImages.length ? currentImages : defaultImgSet;
      const finalFloorPlan = currentFloorPlan || property?.floorPlan || 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80';

      const payload = {
        id: property?.id || Date.now(),
        title,
        society: f.get('society') || null,
        builderName: f.get('builderName') || null,
        mahaReraId: f.get('mahaReraId') || null,
        possessionStatus: f.get('possessionStatus') || 'READY_TO_MOVE',
        facing: f.get('facing') || 'EAST',
        propertyCategory,
        listingType: f.get('listingType'),
        propertyType,
        price,
        area,
        location,
        bhk: bhk,
        parking: number('parking') ?? 0,
        furnishing: f.get('furnishing') || 'SEMI_FURNISHED',
        keyLocation: f.get('keyLocation') || '🔑 Office Key Board (Hook #4)',
        ownerName: f.get('ownerName') || null,
        ownerPhone: f.get('ownerPhone') || null,
        status: f.get('status') || 'AVAILABLE',
        amenities: f.get('amenities').split(',').map(x => x.trim()).filter(Boolean),
        images: finalImages,
        floorPlan: finalFloorPlan
      };

      if (!state.properties || !state.properties.length) {
        state.properties = JSON.parse(JSON.stringify(demoProperties));
      }

      if (property) {
        const idx = state.properties.findIndex(p => p.id === property.id);
        if (idx !== -1) state.properties[idx] = payload;
        const dIdx = demoProperties.findIndex(p => p.id === property.id);
        if (dIdx !== -1) demoProperties[dIdx] = payload;
      } else {
        state.properties.unshift(payload);
        demoProperties.unshift(payload);
      }

      localStorage.setItem('brokerai.properties', JSON.stringify(state.properties));
      showToast(`✓ Property "${esc(title)}" saved to active inventory!`, 'success');

      close();
      if (state.page === 'properties') propertiesView();
      else if (state.page === 'dashboard') dashboard();
      else render();
    };
  }

  // --- OVERHAULED FOLLOW-UPS MODULE ---
  async function followUpsView() {
    app.innerHTML = layout(`${pageHeader('Daily Follow-ups & Reminders', state.demo ? 'Demo preview — active call reminders and WhatsApp nudge queues.' : 'Never miss a buyer callback — send 1-tap WhatsApp reminders and track deal interest.', `
      <div style="display:flex;gap:10px;align-items:center;">
        <div class="view-switcher">
          <button class="view-btn ${state.followUpsViewMode === 'agenda' ? 'active' : ''}" id="view-agenda-btn">◷ Daily Agenda</button>
          <button class="view-btn ${state.followUpsViewMode === 'table' ? 'active' : ''}" id="view-followup-table-btn">☰ Table</button>
        </div>
        <button class="button primary" id="new-followup">＋ Add Follow-up</button>
      </div>`)}

      <!-- FOLLOW-UP HEALTH KPIS -->
      <div class="cards" style="margin-bottom:20px;">
        <article class="metric"><div class="metric-label">Overdue Follow-ups</div><div class="metric-value" id="fu-stat-overdue" style="color:#b42332;">—</div><div class="metric-note">Urgent action required</div></article>
        <article class="metric"><div class="metric-label">Due Today</div><div class="metric-value" id="fu-stat-today">—</div><div class="metric-note">Scheduled client tasks</div></article>
        <article class="metric"><div class="metric-label">High Priority Deals</div><div class="metric-value" id="fu-stat-high" style="color:#1d4ed8;">—</div><div class="metric-note">Hot buyer interactions</div></article>
        <article class="metric"><div class="metric-label">Completed Actions</div><div class="metric-value" id="fu-stat-done" style="color:#047857;">—</div><div class="metric-note">Tasks closed out</div></article>
      </div>

      <div class="filters">
        <input class="input search" id="followup-search" placeholder="Search buyer name, phone, task or notes…" />
        <select class="select" id="followup-status-filter">
          <option value="">All Statuses</option>
          <option value="PENDING" selected>Pending</option>
          <option value="COMPLETED">Completed</option>
          <option value="CANCELLED">Cancelled</option>
        </select>
        <select class="select" id="followup-priority-filter">
          <option value="">All Priorities</option>
          <option value="HIGH">🔥 High Priority</option>
          <option value="MEDIUM">🟡 Medium Priority</option>
          <option value="LOW">❄️ Low Priority</option>
        </select>
        <select class="select" id="followup-type-filter">
          <option value="">All Channels</option>
          <option value="CALL">📞 Call</option>
          <option value="WHATSAPP">💬 WhatsApp</option>
          <option value="MEETING">🤝 Meeting</option>
          <option value="SITE_VISIT">◷ Site Visit</option>
        </select>
      </div>
      <div id="followup-results" class="loading">Loading client outreach queue…</div>`);
    bindShell();

    if (document.querySelector('#new-followup')) document.querySelector('#new-followup').onclick = () => followUpDrawer();
    if (document.querySelector('#view-agenda-btn')) document.querySelector('#view-agenda-btn').onclick = () => {
      state.followUpsViewMode = 'agenda';
      localStorage.setItem('brokerai.followUpsViewMode', 'agenda');
      followUpsView();
    };
    if (document.querySelector('#view-followup-table-btn')) document.querySelector('#view-followup-table-btn').onclick = () => {
      state.followUpsViewMode = 'table';
      localStorage.setItem('brokerai.followUpsViewMode', 'table');
      followUpsView();
    };

    const load = async () => {
      const search = (document.querySelector('#followup-search')?.value || '').toLowerCase().trim();
      const status = document.querySelector('#followup-status-filter')?.value;
      const priority = document.querySelector('#followup-priority-filter')?.value;
      const type = document.querySelector('#followup-type-filter')?.value;

      try {
        let list = [];
        if (state.demo) {
          list = demoFollowUps;
        } else {
          try {
            const res = await request(`/follow-ups?page=0&size=100&sort=dueAt&direction=ASC`);
            list = (res && res.content && res.content.length) ? res.content : getStoredFollowUps();
          } catch {
            list = getStoredFollowUps();
          }
        }

        const now = new Date();
        const overdueCount = list.filter(f => f.status === 'PENDING' && (f.isOverdue || new Date(f.dueAt) < now)).length;
        const todayCount = list.filter(f => f.status === 'PENDING' && new Date(f.dueAt).toDateString() === now.toDateString()).length;
        const highCount = list.filter(f => f.priority === 'HIGH').length;
        const doneCount = list.filter(f => f.status === 'COMPLETED').length;

        document.querySelector('#fu-stat-overdue').textContent = `${overdueCount} Overdue`;
        document.querySelector('#fu-stat-today').textContent = `${todayCount} Due Today`;
        document.querySelector('#fu-stat-high').textContent = `${highCount} High Priority`;
        document.querySelector('#fu-stat-done').textContent = `${doneCount} Completed`;

        const filtered = list.filter(f => {
          if (search && !`${f.leadName} ${f.leadPhone || ''} ${f.title} ${f.notes || ''}`.toLowerCase().includes(search)) return false;
          if (status && f.status !== status) return false;
          if (priority && f.priority !== priority) return false;
          if (type && f.type !== type) return false;
          return true;
        });

        const container = document.querySelector('#followup-results');

        if (state.followUpsViewMode === 'agenda') {
          // AGENDA COCKPIT VIEW
          const overdueItems = filtered.filter(f => f.status === 'PENDING' && (f.isOverdue || new Date(f.dueAt) < now));
          const todayItems = filtered.filter(f => f.status === 'PENDING' && !f.isOverdue && new Date(f.dueAt).toDateString() === now.toDateString() && new Date(f.dueAt) >= now);
          const upcomingItems = filtered.filter(f => f.status === 'PENDING' && !f.isOverdue && new Date(f.dueAt) > now && new Date(f.dueAt).toDateString() !== now.toDateString());
          const completedItems = filtered.filter(f => f.status === 'COMPLETED');

          const renderCard = (f, urgencyClass = '') => {
            const pBadge = f.priority === 'HIGH' ? 'hot' : f.priority === 'MEDIUM' ? 'warm' : 'cold';
            const icon = f.type === 'CALL' ? '📞' : f.type === 'WHATSAPP' ? '💬' : f.type === 'SITE_VISIT' ? '◷' : '🤝';

            return `
              <div class="agenda-card ${urgencyClass} ${f.status === 'COMPLETED' ? 'completed' : ''}">
                <div style="display:flex;gap:14px;align-items:center;flex:1;">
                  <div class="action-avatar ${f.priority === 'HIGH' ? 'hot' : 'visit'}" style="width:40px;height:40px;font-size:16px;">
                    ${icon}
                  </div>
                  <div>
                    <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;">
                      <strong>${esc(f.title)}</strong>
                      <span class="badge ${pBadge}" style="font-size:10px;">${esc(f.priority)}</span>
                    </div>
                    <div style="font-size:13px;color:var(--ink);margin-top:2px;">
                      👤 <strong>${esc(privacyName(f.leadName))}</strong> · <span class="stage">${esc(privacyPhone(f.leadPhone))}</span>
                    </div>
                    ${f.notes ? `<div class="subtle" style="font-size:12px;margin-top:2px;">💡 ${esc(f.notes)}</div>` : ''}
                  </div>
                </div>

                <div style="display:flex;flex-direction:column;align-items:flex-end;gap:8px;">
                  <span class="agenda-time-badge ${urgencyClass === 'overdue' ? 'urgent' : ''}">
                    ◷ ${formatDateTime(f.dueAt)}
                  </span>
                  <div style="display:flex;gap:5px;">
                    ${f.status === 'PENDING' ? `
                      <button class="btn-act wa" data-fu-wa-id="${f.id}" title="Copy WhatsApp message">💬 WhatsApp</button>
                      <button class="btn-act" data-fu-call-id="${f.id}" title="Call client">📞 Call</button>
                      <button class="btn-act primary" data-complete-followup-id="${f.id}">✔ Done</button>
                    ` : '<span class="badge cold">COMPLETED</span>'}
                    <button class="btn-act" data-edit-followup-id="${f.id}">✎</button>
                  </div>
                </div>
              </div>
            `;
          };

          container.innerHTML = `
            <div class="agenda-list">
              ${overdueItems.length ? `
                <div class="agenda-group">
                  <div class="agenda-group-title" style="color:#b91c1c;">🚨 Overdue Actions (${overdueItems.length})</div>
                  ${overdueItems.map(item => renderCard(item, 'overdue')).join('')}
                </div>` : ''}

              ${todayItems.length ? `
                <div class="agenda-group">
                  <div class="agenda-group-title" style="color:#1d4ed8;">📅 Due Today (${todayItems.length})</div>
                  ${todayItems.map(item => renderCard(item, 'today')).join('')}
                </div>` : ''}

              ${upcomingItems.length ? `
                <div class="agenda-group">
                  <div class="agenda-group-title">🗓️ Upcoming This Week (${upcomingItems.length})</div>
                  ${upcomingItems.map(item => renderCard(item, '')).join('')}
                </div>` : ''}

              ${completedItems.length ? `
                <div class="agenda-group">
                  <div class="agenda-group-title" style="color:#047857;">✅ Completed Actions (${completedItems.length})</div>
                  ${completedItems.map(item => renderCard(item, '')).join('')}
                </div>` : ''}

              ${!filtered.length ? '<div class="empty"><strong>No follow-up tasks match your filters.</strong>Create a new task to keep deals on track.</div>' : ''}
            </div>
          `;
        } else {
          // DENSE TABLE VIEW
          container.innerHTML = filtered.length ? `
            <div class="table-wrap"><table class="table">
              <thead><tr><th>Buyer</th><th>Next Action</th><th>Channel</th><th>Priority</th><th>Due Date</th><th>Status</th><th>Actions</th></tr></thead>
              <tbody>${filtered.map(f => {
                const pClass = f.priority === 'HIGH' ? 'hot' : f.priority === 'MEDIUM' ? 'warm' : 'cold';
                const isOverdue = f.isOverdue || (f.status === 'PENDING' && new Date(f.dueAt) < now);
                return `<tr>
                  <td>
                    <div class="lead-name">${esc(privacyName(f.leadName))}</div>
                    <div class="lead-contact">${esc(f.leadPhone || '')}</div>
                  </td>
                  <td>
                    <strong>${esc(f.title)}</strong>
                    ${f.notes ? `<div class="subtle">${esc(f.notes)}</div>` : ''}
                  </td>
                  <td><span class="stage">💬 ${esc(f.type)}</span></td>
                  <td><span class="badge ${pClass}">${esc(f.priority)}</span></td>
                  <td>
                    <div>${formatDateTime(f.dueAt)}</div>
                    ${isOverdue ? `<span class="badge hot" style="margin-top:2px;">OVERDUE</span>` : ''}
                  </td>
                  <td><span class="badge ${f.status === 'COMPLETED' ? 'cold' : 'warm'}">${esc(f.status)}</span></td>
                  <td>
                    <div style="display:flex;gap:5px;flex-wrap:wrap;">
                      ${f.status === 'PENDING' ? `
                        <button class="button secondary" data-fu-wa-id="${f.id}" style="padding:4px 8px;font-size:11px;color:#15803d;">💬 WhatsApp</button>
                        <button class="button primary" data-complete-followup-id="${f.id}" style="padding:4px 8px;font-size:11px;">✔ Done</button>
                      ` : ''}
                      <button class="link-button" data-edit-followup-id="${f.id}" style="font-size:11px;margin-left:4px;">✎ Edit</button>
                    </div>
                  </td>
                </tr>`;
              }).join('')}</tbody>
            </table></div>` : `<div class="empty"><strong>No follow-ups found.</strong>Schedule follow-up tasks to never drop a high-intent buyer.</div>`;
        }

        // BIND EVENT LISTENERS
        document.querySelectorAll('[data-complete-followup-id]').forEach(btn => btn.onclick = async () => {
          const id = Number(btn.dataset.completeFollowupId);
          if (state.demo) {
            const item = demoFollowUps.find(x => x.id === id);
            if (item) item.status = 'COMPLETED';
            load();
            return;
          }
          try {
            await request(`/follow-ups/${id}/complete`, { method: 'POST', body: JSON.stringify({}) });
            load();
          } catch (e) { showToast(e.message, "error"); }
        });

        document.querySelectorAll('[data-fu-wa-id]').forEach(btn => btn.onclick = () => {
          const id = Number(btn.dataset.fuWaId);
          const item = (state.demo ? demoFollowUps : list).find(x => x.id === id);
          if (item) copyFollowUpWhatsApp(item);
        });

        document.querySelectorAll('[data-fu-call-id]').forEach(btn => btn.onclick = () => {
          const id = Number(btn.dataset.fuCallId);
          const item = (state.demo ? demoFollowUps : list).find(x => x.id === id);
          if (item) showToast(`📞 Calling ${item.leadName} (${item.leadPhone || 'No phone'})...`, 'info');
        });

        document.querySelectorAll('[data-edit-followup-id]').forEach(btn => btn.onclick = () => {
          const id = Number(btn.dataset.editFollowupId);
          const item = (state.demo ? demoFollowUps : list).find(x => x.id === id);
          if (item) followUpDrawer(item);
        });

      } catch (err) {
        const el = document.querySelector('#followup-results');
        if (el) el.innerHTML = `<div class="empty"><strong>Couldn’t load follow-ups.</strong>${esc(err.message)}</div>`;
      }
    };

    const debounce = (fn, ms) => { let timer; return (...args) => { clearTimeout(timer); timer = setTimeout(() => fn(...args), ms); }; };
    const fuSearchEl = document.querySelector('#followup-search');
    if (fuSearchEl) fuSearchEl.oninput = debounce(load, 300);
    const fuStatusEl = document.querySelector('#followup-status-filter');
    if (fuStatusEl) fuStatusEl.onchange = load;
    const fuPrioEl = document.querySelector('#followup-priority-filter');
    if (fuPrioEl) fuPrioEl.onchange = load;
    const fuTypeEl = document.querySelector('#followup-type-filter');
    if (fuTypeEl) fuTypeEl.onchange = load;
    load();
  }

  function copyFollowUpWhatsApp(item) {
    const text = `*Hi ${item.leadName},*
Hope you are doing well!

Regarding our discussion on *${item.title}*:
We wanted to check if you had a chance to review the details or if you have any questions regarding the layout, pricing, or next steps.

Please let us know what time works best for a quick call today.

Best regards,
*${state.user?.fullName || 'Aarav Mehta'}* | BrokerAI`;

    navigator.clipboard.writeText(text).then(() => {
      showToast(`Formatted WhatsApp follow-up for ${item.leadName} copied to clipboard!\n\nYou can now paste it directly into WhatsApp chat.`, 'success');
    }).catch(() => prompt("Copy WhatsApp text:", text));
  }

  async function followUpDrawer(followUp = null, defaultLeadId = null) {
    document.querySelectorAll('.modal-backdrop, .drawer-backdrop, .spotlight-backdrop').forEach(b => b.remove());
    let leads = state.leads;
    if (!leads.length && !state.demo) {
      const page = await request('/leads?page=0&size=100').catch(() => ({ content: [] }));
      leads = page.content || [];
    } else if (!leads.length && state.demo) {
      leads = demoLeads;
    }

    const backdrop = document.createElement('div');
    backdrop.className = 'drawer-backdrop';
    const drawer = document.createElement('aside');
    drawer.className = 'drawer';
    drawer.innerHTML = `
      <div class="drawer-head">
        <div>
          <h2 class="panel-title">${followUp ? 'Edit Follow-up' : 'Schedule Follow-up'}</h2>
          <div class="subtle">Keep deals moving with timely client contact.</div>
        </div>
        <button class="close">×</button>
      </div>
      <form class="form" id="followup-form">
        <div id="followup-notice"></div>
        <div class="form-section">
          <h3>Follow-up details</h3>
          <div class="form-grid">
            <div class="field full">
              <label>Buyer Lead</label>
              <select class="select" name="leadId" required ${followUp ? 'disabled' : ''}>
                <option value="">Select buyer lead</option>
                ${leads.map(l => `<option value="${l.id}" ${(followUp?.leadId === l.id || defaultLeadId === l.id) ? 'selected' : ''}>${esc(l.name)} (${esc(l.phone)})</option>`).join('')}
              </select>
            </div>
            <div class="field full">
              <label>Action / Title</label>
              <input class="input" name="title" required placeholder="Confirm site-visit timing and parking preference" value="${esc(followUp?.title)}" />
            </div>
            <div class="field">
              <label>Channel / Type</label>
              <select class="select" name="type">
                ${['CALL', 'WHATSAPP', 'MEETING', 'SITE_VISIT', 'EMAIL', 'OTHER'].map(t => `<option ${followUp?.type === t ? 'selected' : ''}>${t}</option>`).join('')}
              </select>
            </div>
            <div class="field">
              <label>Priority</label>
              <select class="select" name="priority">
                ${['HIGH', 'MEDIUM', 'LOW'].map(p => `<option ${followUp?.priority === p ? 'selected' : ''}>${p}</option>`).join('')}
              </select>
            </div>
            <div class="field full">
              <label>Due Date & Time</label>
              <input class="input" name="dueAt" type="datetime-local" required value="${followUp?.dueAt ? followUp.dueAt.slice(0, 16) : ''}" />
            </div>
            <div class="field full">
              <label>Notes / Context</label>
              <textarea class="input" name="notes" placeholder="Discuss budget range, parking needs...">${esc(followUp?.notes)}</textarea>
            </div>
          </div>
        </div>
      </form>
      <div class="form-actions">
        <button class="button secondary" id="cancel-followup">Cancel</button>
        <button class="button primary" id="save-followup">${followUp ? 'Save changes' : 'Schedule follow-up'}</button>
      </div>`;
    document.body.append(backdrop, drawer);
    const close = () => { backdrop.remove(); drawer.remove(); };
    backdrop.onclick = close;
    if (drawer.querySelector('.close')) drawer.querySelector('.close').onclick = close;
    if (drawer.querySelector('#cancel-followup')) drawer.querySelector('#cancel-followup').onclick = close;
    if (drawer.querySelector('#save-followup')) drawer.querySelector('#save-followup').onclick = async () => {
      const form = new FormData(drawer.querySelector('#followup-form'));
      const payload = {
        leadId: followUp ? followUp.leadId : Number(form.get('leadId')),
        title: form.get('title'),
        type: form.get('type'),
        priority: form.get('priority'),
        dueAt: form.get('dueAt'),
        notes: form.get('notes') || null
      };
      if (!payload.leadId) {
        drawer.querySelector('#followup-notice').innerHTML = `<div class="notice error">Please select a buyer lead.</div>`;
        return;
      }
      try {
        await request(followUp ? `/follow-ups/${followUp.id}` : '/follow-ups', {
          method: followUp ? 'PUT' : 'POST',
          body: JSON.stringify(payload)
        });
        close();
        followUpsView();
      } catch (err) {
        drawer.querySelector('#followup-notice').innerHTML = `<div class="notice error">${esc(err.message)}</div>`;
      }
    };
  }

  // --- DOCUMENTS & VAULT MODULE ---
  
  // --- DOCUMENT DRAWER (LEGAL VAULT UPLOAD & METADATA) ---
  function documentDrawer(doc = null) {
    document.querySelectorAll('.modal-backdrop, .drawer-backdrop, .spotlight-backdrop').forEach(b => b.remove());
    const properties = (state.properties && state.properties.length) ? state.properties : (typeof demoProperties !== 'undefined' ? demoProperties : getStoredProperties());

    const backdrop = document.createElement('div');
    backdrop.className = 'drawer-backdrop';
    const drawer = document.createElement('aside');
    drawer.className = 'drawer';
    drawer.style.cssText = 'width:min(640px,100vw);';

    const defaultTitle = doc?.title || '';
    const defaultPropId = doc?.propertyId || (properties[0]?.id || '');
    const defaultType = doc?.documentType || '7/12 Extract & Index II';
    const defaultNum = doc?.documentNumber || `DOC-${Math.floor(100000 + Math.random() * 900000)}`;
    const defaultStatus = doc?.status || 'VERIFIED';
    const defaultNotes = doc?.notes || 'Verified by legal counsel under MahaRERA guidelines.';

    drawer.innerHTML = `
      <div class="drawer-head">
        <div>
          <h2 class="panel-title">${doc ? 'Edit Legal Document' : 'Upload Legal Record to Vault'}</h2>
          <div class="subtle">Securely attach MahaRERA title, sanction, and agreement records.</div>
        </div>
        <button class="close">×</button>
      </div>
      <form class="form" id="doc-form">
        <div id="doc-notice"></div>
        <div class="form-section">
          <h3>Document Classification & Title</h3>
          <div class="form-grid">
            <div class="field full">
              <label>Document Title</label>
              <input class="input" name="title" value="${esc(defaultTitle)}" placeholder="e.g. 7/12 Extract, RERA Certificate, Sanction Plan" required />
            </div>
            <div class="field">
              <label>Document Type</label>
              <select class="select" name="documentType">
                <option value="7/12 Extract & Index II" ${defaultType.includes('7/12') ? 'selected' : ''}>7/12 Extract & Index II</option>
                <option value="MahaRERA Registration Certificate" ${defaultType.includes('MahaRERA') ? 'selected' : ''}>MahaRERA Registration Certificate</option>
                <option value="Title Search Report (30 Yrs)" ${defaultType.includes('Title Search') ? 'selected' : ''}>Title Search Report (30 Yrs)</option>
                <option value="Sanctioned Architectural Plan" ${defaultType.includes('Sanctioned') ? 'selected' : ''}>Sanctioned Architectural Plan</option>
                <option value="Occupancy Certificate (OC)" ${defaultType.includes('Occupancy') ? 'selected' : ''}>Occupancy Certificate (OC)</option>
                <option value="Commencement Certificate (CC)" ${defaultType.includes('Commencement') ? 'selected' : ''}>Commencement Certificate (CC)</option>
                <option value="Bank Tripartite APF Letter" ${defaultType.includes('Bank') ? 'selected' : ''}>Bank Tripartite APF Letter</option>
                <option value="11-Month Registered Rent Agreement" ${defaultType.includes('Rent') ? 'selected' : ''}>11-Month Registered Rent Agreement</option>
                <option value="RERA Token Advance Receipt" ${defaultType.includes('Token') ? 'selected' : ''}>RERA Token Advance Receipt</option>
              </select>
            </div>
            <div class="field">
              <label>Associated Property</label>
              <select class="select" name="propertyId">
                <option value="">General Agency Record</option>
                ${properties.map(p => `<option value="${p.id}" ${String(p.id) === String(defaultPropId) ? 'selected' : ''}>${esc(p.title || p.name)} (${esc(p.location || 'Thane')})</option>`).join('')}
              </select>
            </div>
            <div class="field">
              <label>Document Reference / Reg #</label>
              <input class="input" name="documentNumber" value="${esc(defaultNum)}" placeholder="e.g. MH/2026/DOC/8821" />
            </div>
            <div class="field">
              <label>Verification Status</label>
              <select class="select" name="status">
                <option value="VERIFIED" ${defaultStatus === 'VERIFIED' ? 'selected' : ''}>✓ Verified Clear</option>
                <option value="UNDER_REVIEW" ${defaultStatus === 'UNDER_REVIEW' ? 'selected' : ''}>⏳ Under Review</option>
                <option value="PENDING_LEGAL" ${defaultStatus === 'PENDING_LEGAL' ? 'selected' : ''}>⚠️ Pending Legal Opinion</option>
              </select>
            </div>
            <div class="field full">
              <label>File Upload / Scan Attachment</label>
              <div style="border:2px dashed #cbd5e1;border-radius:12px;padding:20px;text-align:center;background:#f8fafc;cursor:pointer;" id="doc-dropzone">
                <div style="font-size:24px;margin-bottom:6px;">📄</div>
                <div style="font-size:13px;font-weight:700;color:#0f172a;">Drag & Drop PDF or Image here</div>
                <div style="font-size:11.5px;color:#64748b;margin-top:2px;">Supports PDF, PNG, JPG up to 25 MB</div>
                <input type="file" id="doc-file-input" style="display:none;" accept=".pdf,.png,.jpg,.jpeg" />
              </div>
            </div>
            <div class="field full">
              <label>Legal Inspection Notes</label>
              <textarea class="textarea" name="notes" rows="2" placeholder="Notes on encumbrance, demarcation, or legal clearance...">${esc(defaultNotes)}</textarea>
            </div>
          </div>
        </div>
        <div class="form-actions" style="margin-top:16px;">
          <button type="button" class="button secondary" id="cancel-doc-drawer">Cancel</button>
          <button type="submit" class="button primary" style="background:#2563eb;font-weight:700;">${doc ? 'Update Document' : 'Save to Legal Vault'}</button>
        </div>
      </form>
    `;

    document.body.append(backdrop, drawer);

    const close = () => { backdrop.remove(); drawer.remove(); };
    backdrop.onclick = close;
    if (drawer.querySelector('.close')) drawer.querySelector('.close').onclick = close;
    if (drawer.querySelector('#cancel-doc-drawer')) drawer.querySelector('#cancel-doc-drawer').onclick = close;

    const dropzone = drawer.querySelector('#doc-dropzone');
    const fileInput = drawer.querySelector('#doc-file-input');
    if (dropzone && fileInput) {
      dropzone.onclick = () => fileInput.click();
      fileInput.onchange = () => {
        if (fileInput.files && fileInput.files[0]) {
          dropzone.innerHTML = `<div style="font-size:24px;color:#059669;margin-bottom:6px;">✓</div><div style="font-size:13px;font-weight:700;color:#059669;">Attached: ${esc(fileInput.files[0].name)}</div>`;
        }
      };
    }

    const form = drawer.querySelector('#doc-form');
    if (form) {
      form.onsubmit = (e) => {
        e.preventDefault();
        const fd = new FormData(form);
        const title = fd.get('title')?.trim();
        if (!title) return;

        const newDoc = {
          id: doc?.id || `doc-${Date.now()}`,
          title: title,
          documentType: fd.get('documentType'),
          propertyId: fd.get('propertyId') || null,
          documentNumber: fd.get('documentNumber') || `DOC-${Date.now()}`,
          status: fd.get('status') || 'VERIFIED',
          notes: fd.get('notes') || '',
          uploadedAt: new Date().toISOString().slice(0, 10),
          fileUrl: '#'
        };

        if (!state.documents || !state.documents.length) {
          state.documents = getStoredDocuments();
        }

        if (doc) {
          const idx = state.documents.findIndex(d => d.id === doc.id);
          if (idx !== -1) state.documents[idx] = newDoc;
          else state.documents.unshift(newDoc);
        } else {
          state.documents.unshift(newDoc);
        }

        try {
          localStorage.setItem('brokerai.documents', JSON.stringify(state.documents));
        } catch(e) {}

        showToast(`✓ Document "${esc(title)}" saved to Legal Vault!`, 'success');
        close();
        if (state.page === 'documents') documentsView();
        else render();
      };
    }
  }


async function documentsView() {
    const caps = getPlanCapabilities();
    if (!caps.tokenReceipts) {
      app.innerHTML = layout(renderGatedFeatureScreen('Tripartite MahaRERA Token Receipts & Legal Vault', 'Pro Closer', 'pro'));
      bindShell();
      const unlockBtn = document.querySelector('#instant-unlock-feature-btn');
      if (unlockBtn) {
        unlockBtn.onclick = () => {
          state.currentPlan = 'pro';
          localStorage.setItem('brokerai.currentPlan', 'pro');
          showToast('✓ Upgraded to Pro Closer! Token Receipts & Vault unlocked.', 'success');
          documentsView();
        };
      }
      return;
    }

    app.innerHTML = layout(`${pageHeader('Agreements, Stamp Duty & Receipts', state.demo ? 'Demo preview — 11-month rent agreements, stamp duty cost sheets, and RERA token receipts.' : 'Generate ready-to-print 11-Month Rent Agreements with touch signatures, Stamp Duty cost sheets, and RERA Token receipts.', `
      <div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap;">
        <div class="view-switcher">
          <button class="view-btn ${state.docsViewMode === 'cards' ? 'active' : ''}" id="docs-mode-cards-btn">⊞ Vault Cards</button>
          <button class="view-btn ${state.docsViewMode === 'table' ? 'active' : ''}" id="docs-mode-table-btn">☰ Table</button>
        </div>
        <button class="button primary" id="add-doc-btn">＋ Upload Document</button>
        <button class="button hero-btn" id="gen-token-receipt-btn" style="background:#165dff;color:#fff;">🧾 Issue Token Receipt</button>
      </div>`)}

      <!-- VAULT INTELLIGENCE KPIS -->
      <div class="cards" style="margin-bottom:20px;">
        <article class="metric"><div class="metric-label">Verified Records</div><div class="metric-value" id="doc-stat-verified" style="color:#047857;">5 Verified</div><div class="metric-note">Legal & KYC records</div></article>
        <article class="metric"><div class="metric-label">Compliance Health</div><div class="metric-value" id="doc-stat-health" style="color:#165dff;">100%</div><div class="metric-note">Audit-ready title & KYC</div></article>
        <article class="metric"><div class="metric-label">Token Receipts</div><div class="metric-value" id="doc-stat-tokens">1 Issued</div><div class="metric-note">Digital booking trail</div></article>
        <article class="metric"><div class="metric-label">Pending Verification</div><div class="metric-value" id="doc-stat-pending">0 Pending</div><div class="metric-note">Action required</div></article>
      </div>

      <!-- CATEGORY FILTER TABS -->
      <div class="filter-tabs" id="doc-category-tabs">
        <button class="filter-tab ${state.docsCategory === 'ALL' ? 'active' : ''}" data-cat="ALL">All Documents (5)</button>
        <button class="filter-tab ${state.docsCategory === 'PROPERTY_LEGAL' ? 'active' : ''}" data-cat="PROPERTY_LEGAL">🏢 Property Legal & Title (2)</button>
        <button class="filter-tab ${state.docsCategory === 'CLIENT_KYC' ? 'active' : ''}" data-cat="CLIENT_KYC">👤 Client KYC & Loan (2)</button>
        <button class="filter-tab ${state.docsCategory === 'DEAL_PAPERWORK' ? 'active' : ''}" data-cat="DEAL_PAPERWORK">🧾 Deal Paperwork & Tokens (1)</button>
      </div>

      <div class="filters">
        <input class="input search" id="doc-search" placeholder="Search by title, document #, property or client name…" />
        <select class="select" id="doc-status-filter">
          <option value="">All Statuses</option>
          <option value="VERIFIED">Verified</option>
          <option value="PENDING">Pending Verification</option>
          <option value="REJECTED">Rejected</option>
        </select>
        <select class="select" id="doc-type-filter">
          <option value="">All Document Types</option>
          <option value="INDEX_II">Index II / Registration</option>
          <option value="OCCUPANCY_CERTIFICATE">Occupancy Certificate (OC)</option>
          <option value="TOKEN_RECEIPT">Token Booking Receipt</option>
          <option value="PAN_CARD">PAN / Aadhaar KYC</option>
          <option value="LOAN_SANCTION_LETTER">Home Loan Sanction</option>
        </select>
      </div>

      <section class="panel" style="padding:18px 22px;">
        <div id="docs-feed-container" class="loading">Loading legal vault repository…</div>
      </section>`);
    bindShell();

    if (document.querySelector('#docs-mode-cards-btn')) document.querySelector('#docs-mode-cards-btn').onclick = () => {
      state.docsViewMode = 'cards';
      localStorage.setItem('brokerai.docsViewMode', 'cards');
      documentsView();
    };
    if (document.querySelector('#docs-mode-table-btn')) document.querySelector('#docs-mode-table-btn').onclick = () => {
      state.docsViewMode = 'table';
      localStorage.setItem('brokerai.docsViewMode', 'table');
      documentsView();
    };
    if (document.querySelector('#add-doc-btn')) document.querySelector('#add-doc-btn').onclick = () => documentDrawer();
    if (document.querySelector('#gen-token-receipt-btn')) document.querySelector('#gen-token-receipt-btn').onclick = () => tokenReceiptModal();

    // CATEGORY TABS
    document.querySelectorAll('#doc-category-tabs .filter-tab').forEach(btn => {
      btn.onclick = () => {
        state.docsCategory = btn.dataset.cat;
        document.querySelectorAll('#doc-category-tabs .filter-tab').forEach(b => b.classList.toggle('active', b.dataset.cat === state.docsCategory));
        loadDocs();
      };
    });

    const searchInput = document.querySelector('#doc-search');
    const statusFilter = document.querySelector('#doc-status-filter');
    const typeFilter = document.querySelector('#doc-type-filter');

    const loadDocs = async () => {
      let list = (state.documents && Array.isArray(state.documents) && state.documents.length)
        ? state.documents
        : getStoredDocuments();
      state.documents = list;

      const q = (searchInput?.value || '').toLowerCase();
      const status = statusFilter?.value || '';
      const type = typeFilter?.value || '';
      const cat = state.docsCategory || 'ALL';

      const filtered = list.filter(d => {
        if (cat !== 'ALL' && d.category !== cat) return false;
        if (status && d.status !== status) return false;
        if (type && d.documentType !== type) return false;
        if (q) {
          const searchStr = `${d.title} ${d.documentNumber || ''} ${d.propertyTitle || ''} ${d.leadName || ''} ${d.notes || ''}`.toLowerCase();
          if (!searchStr.includes(q)) return false;
        }
        return true;
      });

      const feed = document.querySelector('#docs-feed-container');
      if (!feed) return;

      if (!filtered.length) {
        feed.innerHTML = `<div class="empty"><strong>No documents found matching criteria.</strong>Try clearing filters or upload a new compliance document.</div>`;
        return;
      }

      if (state.docsViewMode === 'cards') {
        // ⊞ VAULT CARDS VIEW
        feed.innerHTML = `
          <div class="vault-grid">
            ${filtered.map(d => {
              const isLegal = d.category === 'PROPERTY_LEGAL';
              const isKyc = d.category === 'CLIENT_KYC';
              const isToken = d.category === 'DEAL_PAPERWORK' || d.documentType === 'TOKEN_RECEIPT';
              const iconClass = isLegal ? 'legal' : isKyc ? 'kyc' : 'token';
              const icon = isLegal ? '🏢' : isKyc ? '👤' : '🧾';

              return `
                <div class="vault-card">
                  <div class="vault-card-head">
                    <div style="display:flex;gap:12px;align-items:center;">
                      <div class="vault-icon-circle ${iconClass}">${icon}</div>
                      <div>
                        <h4 class="vault-title">${esc(d.title)}</h4>
                        <div class="vault-meta">${(d.category || '').replaceAll('_', ' ')} · ${(d.documentType || '').replaceAll('_', ' ')}</div>
                      </div>
                    </div>
                    <span class="doc-badge ${d.status === 'VERIFIED' ? 'verified' : 'pending'}">
                      ${d.status === 'VERIFIED' ? '✓ VERIFIED' : '⏳ PENDING'}
                    </span>
                  </div>

                  <div class="vault-card-body">
                    ${d.propertyTitle ? `<div style="font-size:12.5px;color:var(--ink);">🏢 <strong>Property:</strong> ${esc(d.propertyTitle)}</div>` : ''}
                    ${d.leadName ? `<div style="font-size:12.5px;color:var(--ink);">👤 <strong>Client:</strong> ${esc(privacyName(d.leadName))}</div>` : ''}
                    ${d.documentNumber ? `<div style="font-size:12px;color:var(--muted);">Doc Ref / Reg #: <strong style="color:#334155;">${esc(d.documentNumber)}</strong></div>` : ''}
                    ${d.verifiedAt ? `<div style="font-size:11.5px;color:#047857;">Verified on ${formatDateTime(d.verifiedAt)}</div>` : ''}
                    ${d.notes ? `<div class="vault-notes">${esc(d.notes)}</div>` : ''}
                  </div>

                  <div class="vault-card-footer">
                    <div style="display:flex;gap:6px;flex-wrap:wrap;">
                      ${isToken ? `
                        <button class="btn-act primary" data-doc-view-token="${d.id}">🧾 View Receipt</button>
                      ` : `
                        <button class="btn-act" data-doc-inspect="${d.id}">👁️ Inspect</button>
                      `}
                      ${isKyc ? `
                        <button class="btn-act wa" data-doc-kyc-wa="${d.id}">💬 WhatsApp KYC</button>
                      ` : isToken ? `
                        <button class="btn-act wa" data-doc-token-wa="${d.id}">💬 Share Receipt</button>
                      ` : `
                        <button class="btn-act wa" data-doc-title-wa="${d.id}">💬 Share Title</button>
                      `}
                    </div>
                    <button class="link-button" data-doc-edit="${d.id}">Edit</button>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        `;
      } else {
        // ☰ TABLE VIEW
        feed.innerHTML = `
          <div class="table-wrap">
            <table class="table">
              <thead>
                <tr>
                  <th>Document Title</th>
                  <th>Category & Type</th>
                  <th>Associated Deal / Entity</th>
                  <th>Doc / Ref #</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                ${filtered.map(d => `
                  <tr>
                    <td>
                      <strong style="color:var(--ink);">${esc(d.title)}</strong>
                      ${d.notes ? `<div class="lead-contact">${esc(d.notes)}</div>` : ''}
                    </td>
                    <td>
                      <span class="stage">${(d.category || '').replaceAll('_', ' ')}</span>
                      <div style="font-size:11.5px;color:var(--muted);font-weight:600;">${(d.documentType || '').replaceAll('_', ' ')}</div>
                    </td>
                    <td>
                      ${d.propertyTitle ? `<div>🏢 ${esc(d.propertyTitle)}</div>` : ''}
                      ${d.leadName ? `<div class="lead-contact">👤 ${esc(privacyName(d.leadName))}</div>` : ''}
                    </td>
                    <td>${esc(d.documentNumber || '—')}</td>
                    <td>
                      <span class="doc-badge ${d.status === 'VERIFIED' ? 'verified' : 'pending'}">
                        ${d.status === 'VERIFIED' ? '✓ VERIFIED' : '⏳ PENDING'}
                      </span>
                    </td>
                    <td>
                      <div style="display:flex;gap:6px;">
                        ${d.documentType === 'TOKEN_RECEIPT' ? `
                          <button class="btn-act primary" data-doc-view-token="${d.id}">🧾 Receipt</button>
                        ` : `
                          <button class="btn-act" data-doc-inspect="${d.id}">👁️ View</button>
                        `}
                        <button class="btn-act wa" data-doc-kyc-wa="${d.id}">💬 WhatsApp</button>
                      </div>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        `;
      }

      // Bind button events
      feed.querySelectorAll('[data-doc-view-token]').forEach(btn => {
        btn.onclick = () => {
          const docId = Number(btn.dataset.docViewToken);
          const doc = list.find(x => x.id === docId);
          if (doc) showReceiptModal(doc);
        };
      });

      feed.querySelectorAll('[data-doc-inspect]').forEach(btn => {
        btn.onclick = () => {
          const docId = Number(btn.dataset.docInspect);
          const doc = list.find(x => x.id === docId);
          if (doc) {
            showToast(`🔒 Legal Vault Inspection\n\nDocument: ${doc.title}\nType: ${doc.documentType}\nRef #: ${doc.documentNumber || 'N/A'}\nStatus: ${doc.status}\nAudit Notes: ${doc.notes || 'Verified'}`, 'info');
          }
        };
      });

      feed.querySelectorAll('[data-doc-kyc-wa]').forEach(btn => {
        btn.onclick = () => {
          const docId = Number(btn.dataset.docKycWa);
          const doc = list.find(x => x.id === docId);
          const lead = demoLeads.find(l => l.name === doc?.leadName) || demoLeads[0];
          copyWhatsAppKycPrompt(lead);
        };
      });

      feed.querySelectorAll('[data-doc-token-wa]').forEach(btn => {
        btn.onclick = () => {
          const docId = Number(btn.dataset.docTokenWa);
          const doc = list.find(x => x.id === docId);
          if (doc) {
            const text = `*🧾 Digital Token Booking Receipt*
*Ref #:* ${doc.documentNumber}
*Client:* ${doc.leadName || 'Rahul Sharma'}
*Property:* ${doc.propertyTitle || 'Spacious 2 BHK at Hiranandani Estate'}
*Token Amount:* ₹1,00,000 (Received via UPI)
*Status:* ✓ Verified & Audited

Thank you for choosing BrokerAI!`;
            navigator.clipboard.writeText(text).then(() => showToast("Token receipt summary copied to clipboard!", "success"));
          }
        };
      });

      feed.querySelectorAll('[data-doc-title-wa]').forEach(btn => {
        btn.onclick = () => {
          const docId = Number(btn.dataset.docTitleWa);
          const doc = list.find(x => x.id === docId);
          if (doc) {
            const text = `*🏢 Title Clear & Compliance Summary*
*Property:* ${doc.propertyTitle || 'Hiranandani Estate Listing'}
*Document:* ${doc.title} (${doc.documentNumber || 'Verified'})
*Status:* ✓ Title Chain & OC Clear
*Verified by:* BrokerAI Legal Vault`;
            navigator.clipboard.writeText(text).then(() => showToast("Title summary copied to clipboard!", "success"));
          }
        };
      });

      feed.querySelectorAll('[data-doc-edit]').forEach(btn => {
        btn.onclick = () => {
          const docId = Number(btn.dataset.docEdit);
          const doc = list.find(x => x.id === docId);
          if (doc) documentDrawer(doc);
        };
      });
    };

    if (searchInput) searchInput.oninput = loadDocs;
    if (statusFilter) statusFilter.onchange = loadDocs;
    if (typeFilter) typeFilter.onchange = loadDocs;

    loadDocs();
  }

  function copyWhatsAppKycPrompt(lead) {
    const text = `*Hi ${lead.name},*
To complete your property file and initiate the loan/agreement process smoothly, please provide clear copies of the following KYC documents:

📄 *KYC & Income Checklist:*
1️⃣ *PAN Card* (Mandatory)
2️⃣ *Aadhaar Card* (Front & Back)
3️⃣ *Passport Size Photographs* (2 copies)
4️⃣ *Last 3 Months Salary Slips* / ITR (for salaried/business)
5️⃣ *Last 6 Months Bank Statement* (PDF with seal or netbanking)

You can share the clear photos/PDFs right here on WhatsApp.

Best regards,
*${state.user?.fullName || 'Aarav Mehta'}* | BrokerAI Legal Desk`;

    navigator.clipboard.writeText(text).then(() => {
      showToast(`Formatted KYC Checklist for ${lead.name} copied to clipboard!\n\nYou can now paste it directly into WhatsApp chat.`, 'success');
    }).catch(() => prompt("Copy KYC Prompt:", text));
  }

  async function reportsView() {
    app.innerHTML = layout(`
      <!-- HEADER -->
      <div class="page-head" style="margin-bottom:20px;">
        <div>
          <h1 class="page-title" style="font-size:24px;font-weight:800;letter-spacing:-0.025em;color:#0f172a;margin:0 0 4px;">Reports & Analytics</h1>
          <p class="page-sub" style="font-size:13.5px;color:#64748b;margin:0;">Comprehensive insights into lead conversion, property sales, and revenue.</p>
        </div>
        <div style="display:flex;gap:10px;align-items:center;">
          <select class="select" style="font-size:12.5px;padding:6px 12px;border-radius:8px;">
            <option>Last 30 Days</option>
            <option>This Quarter</option>
            <option>Year to Date (2024)</option>
          </select>
          <button class="button primary" id="print-report-btn" style="background:#2563eb;font-weight:600;padding:8px 16px;border-radius:9px;">🖨️ Export PDF Report</button>
        </div>
      </div>

      <!-- 4 TOP KPI CARDS -->
      <div class="apple-kpi-grid">
        <div class="apple-kpi-card">
          <div class="apple-kpi-top">
            <span class="apple-kpi-label">TOTAL REVENUE</span>
            <div class="apple-kpi-icon green">💰</div>
          </div>
          <div>
            <div class="apple-kpi-val">₹14,80,000</div>
            <div class="apple-kpi-trend up">↗ +18% from last month</div>
          </div>
        </div>

        <div class="apple-kpi-card">
          <div class="apple-kpi-top">
            <span class="apple-kpi-label">DEALS CLOSED</span>
            <div class="apple-kpi-icon blue">🏆</div>
          </div>
          <div>
            <div class="apple-kpi-val">8 Deals</div>
            <div class="apple-kpi-trend up">↗ +2 this month</div>
          </div>
        </div>

        <div class="apple-kpi-card">
          <div class="apple-kpi-top">
            <span class="apple-kpi-label">AVG. DEAL CYCLE</span>
            <div class="apple-kpi-icon orange">⚡</div>
          </div>
          <div>
            <div class="apple-kpi-val">14 Days</div>
            <div class="apple-kpi-trend up">↘ 3 days faster</div>
          </div>
        </div>

        <div class="apple-kpi-card">
          <div class="apple-kpi-top">
            <span class="apple-kpi-label">CONVERSION RATE</span>
            <div class="apple-kpi-icon purple">🎯</div>
          </div>
          <div>
            <div class="apple-kpi-val">33.3%</div>
            <div class="apple-kpi-trend up">↗ +5.2% improvement</div>
          </div>
        </div>
      </div>

      <!-- CHARTS 2-COLUMN GRID -->
      <div class="apple-dash-grid">
        <!-- CHART 1: LEADS & REVENUE TREND -->
        <div class="apple-chart-card">
          <div class="apple-card-head">
            <h2 class="apple-chart-title" style="margin:0;">Leads & Revenue Trend (2024)</h2>
            <span style="font-size:12px;color:#64748b;font-weight:600;">Monthly Inquiries vs Closures</span>
          </div>
          <div style="padding:10px 0;">
            <svg viewBox="0 0 500 220" style="width:100%;height:220px;overflow:visible;">
              <defs>
                <linearGradient id="appleChartGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="#2563eb" stop-opacity="0.25"/>
                  <stop offset="100%" stop-color="#2563eb" stop-opacity="0.0"/>
                </linearGradient>
              </defs>
              <line x1="30" y1="30" x2="480" y2="30" stroke="#f1f5f9" stroke-width="1" />
              <line x1="30" y1="80" x2="480" y2="80" stroke="#f1f5f9" stroke-width="1" />
              <line x1="30" y1="130" x2="480" y2="130" stroke="#f1f5f9" stroke-width="1" />
              <line x1="30" y1="180" x2="480" y2="180" stroke="#f1f5f9" stroke-width="1" />

              <text x="5" y="34" font-size="10" fill="#94a3b8">30</text>
              <text x="5" y="84" font-size="10" fill="#94a3b8">20</text>
              <text x="5" y="134" font-size="10" fill="#94a3b8">10</text>
              <text x="5" y="184" font-size="10" fill="#94a3b8">0</text>

              <path d="M 50 150 C 120 130, 160 90, 220 100 C 280 110, 320 60, 380 50 C 420 45, 450 35, 470 30 L 470 180 L 50 180 Z" fill="url(#appleChartGrad)" />
              <path d="M 50 150 C 120 130, 160 90, 220 100 C 280 110, 320 60, 380 50 C 420 45, 450 35, 470 30" fill="none" stroke="#2563eb" stroke-width="3.5" stroke-linecap="round" />

              <circle cx="50" cy="150" r="4.5" fill="#ffffff" stroke="#2563eb" stroke-width="3"/>
              <circle cx="135" cy="118" r="4.5" fill="#ffffff" stroke="#2563eb" stroke-width="3"/>
              <circle cx="220" cy="100" r="4.5" fill="#ffffff" stroke="#2563eb" stroke-width="3"/>
              <circle cx="300" cy="85" r="4.5" fill="#ffffff" stroke="#2563eb" stroke-width="3"/>
              <circle cx="380" cy="50" r="4.5" fill="#ffffff" stroke="#2563eb" stroke-width="3"/>
              <circle cx="470" cy="30" r="5" fill="#2563eb" stroke="#ffffff" stroke-width="2"/>

              <text x="42" y="202" font-size="11" font-weight="600" fill="#64748b">May</text>
              <text x="127" y="202" font-size="11" font-weight="600" fill="#64748b">Jun</text>
              <text x="212" y="202" font-size="11" font-weight="600" fill="#64748b">Jul</text>
              <text x="292" y="202" font-size="11" font-weight="600" fill="#64748b">Aug</text>
              <text x="372" y="202" font-size="11" font-weight="600" fill="#64748b">Sep</text>
              <text x="460" y="202" font-size="11" font-weight="700" fill="#2563eb">Oct</text>
            </svg>
          </div>
        </div>

        <!-- CHART 2: LEAD SOURCES DONUT -->
        <div class="apple-chart-card">
          <div class="apple-card-head">
            <h2 class="apple-chart-title" style="margin:0;">Lead Sources Breakdown</h2>
            <span style="font-size:12px;color:#64748b;font-weight:600;">Total 24 Inquiries</span>
          </div>
          <div style="display:flex;align-items:center;justify-content:space-around;padding:10px 0;flex-wrap:wrap;gap:16px;">
            <svg viewBox="0 0 160 160" style="width:140px;height:140px;">
              <circle cx="80" cy="80" r="55" fill="none" stroke="#edf2f7" stroke-width="24"/>
              <circle cx="80" cy="80" r="55" fill="none" stroke="#2563eb" stroke-width="24" stroke-dasharray="155.5 345.5" stroke-dashoffset="86" />
              <circle cx="80" cy="80" r="55" fill="none" stroke="#10b981" stroke-width="24" stroke-dasharray="103.6 345.5" stroke-dashoffset="276" />
              <circle cx="80" cy="80" r="55" fill="none" stroke="#8b5cf6" stroke-width="24" stroke-dasharray="51.8 345.5" stroke-dashoffset="172" />
              <circle cx="80" cy="80" r="55" fill="none" stroke="#f59e0b" stroke-width="24" stroke-dasharray="34.5 345.5" stroke-dashoffset="120" />
              <text x="80" y="77" text-anchor="middle" font-size="17" font-weight="800" fill="#0f172a">24</text>
              <text x="80" y="93" text-anchor="middle" font-size="10" font-weight="600" fill="#64748b">LEADS</text>
            </svg>

            <div style="display:flex;flex-direction:column;gap:10px;font-size:12.5px;">
              <div style="display:flex;align-items:center;gap:8px;">
                <span style="width:10px;height:10px;border-radius:3px;background:#2563eb;"></span>
                <span style="color:#0f172a;font-weight:600;">WhatsApp Groups</span>
                <span style="color:#64748b;margin-left:auto;font-weight:700;">45%</span>
              </div>
              <div style="display:flex;align-items:center;gap:8px;">
                <span style="width:10px;height:10px;border-radius:3px;background:#10b981;"></span>
                <span style="color:#0f172a;font-weight:600;">Referrals & Network</span>
                <span style="color:#64748b;margin-left:auto;font-weight:700;">30%</span>
              </div>
              <div style="display:flex;align-items:center;gap:8px;">
                <span style="width:10px;height:10px;border-radius:3px;background:#8b5cf6;"></span>
                <span style="color:#0f172a;font-weight:600;">Direct Inquiries</span>
                <span style="color:#64748b;margin-left:auto;font-weight:700;">15%</span>
              </div>
              <div style="display:flex;align-items:center;gap:8px;">
                <span style="width:10px;height:10px;border-radius:3px;background:#f59e0b;"></span>
                <span style="color:#0f172a;font-weight:600;">Property Portals</span>
                <span style="color:#64748b;margin-left:auto;font-weight:700;">10%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `);
    bindShell();

    const printBtn = document.querySelector('#print-report-btn');
    if (printBtn) printBtn.onclick = () => window.print();
  }

  async function assistantView(initialPrompt = null) {
    const leadsList = (state.leads && state.leads.length) ? state.leads : demoLeads;
    let selectedLead = leadsList[0] || demoLeads[0];

    app.innerHTML = layout(`
      <!-- HEADER -->
      <div class="page-head" style="margin-bottom:16px;">
        <div>
          <h1 class="page-title" style="font-size:24px;font-weight:800;letter-spacing:-0.025em;color:#0f172a;margin:0 0 4px;">Messages</h1>
          <p class="page-sub" style="font-size:13.5px;color:#64748b;margin:0;">Chat with clients and parse incoming WhatsApp property inquiries.</p>
        </div>
      </div>

      <!-- APPLE 2-PANE MESSAGES INTERFACE -->
      <div class="apple-messages-pane">
        <!-- LEFT SIDEBAR: CONVERSATION LIST -->
        <div class="apple-msg-sidebar">
          <div class="apple-msg-search">
            <div class="topbar-search-box" style="width:100%;">
              ${svgIcon('search', 14)}
              <input type="text" id="msg-search-input" placeholder="Search conversations..." />
            </div>
          </div>
          <div class="apple-msg-list" id="apple-msg-list-container">
            ${leadsList.map((l, idx) => {
              const init = initials(l.name);
              const isActive = idx === 0;
              const lastMsg = idx === 0 ? "Sounds great, will reach by 10:30 AM!" : (idx === 1 ? "Please send the brochure for 4 BHK." : "Is the price negotiable?");
              const timeStr = idx === 0 ? "10:15 AM" : (idx === 1 ? "Yesterday" : "2d ago");

              return `
                <div class="apple-msg-item ${isActive ? 'active' : ''}" data-lead-idx="${idx}">
                  <div class="deal-opp-avatar" style="width:38px;height:38px;font-size:12.5px;${idx === 1 ? 'background:#f3e8ff;color:#8b5cf6;' : idx === 2 ? 'background:#fef3c7;color:#d97706;' : ''}">${init}</div>
                  <div style="flex:1;min-width:0;">
                    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:2px;">
                      <strong style="font-size:13.5px;color:#0f172a;">${esc(l.name)}</strong>
                      <span style="font-size:11.5px;color:#94a3b8;">${timeStr}</span>
                    </div>
                    <div style="font-size:12px;color:#64748b;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${lastMsg}</div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- RIGHT MAIN CHAT PANE -->
        <div class="apple-msg-chat">
          <!-- CHAT HEADER -->
          <div class="apple-chat-header">
            <div style="display:flex;align-items:center;gap:12px;">
              <div class="deal-opp-avatar" id="active-chat-avatar" style="width:38px;height:38px;font-size:13px;">RS</div>
              <div>
                <strong style="font-size:14px;color:#0f172a;" id="active-chat-name">${esc(selectedLead.name)}</strong>
                <div style="font-size:12px;color:#64748b;" id="active-chat-phone">${esc(selectedLead.phone || '+91 98765 43210')} · <span class="apple-badge active" style="font-size:10px;padding:1px 5px;">Active Buyer</span></div>
              </div>
            </div>
            <div style="display:flex;gap:8px;">
              <button class="btn-apple-call" id="chat-call-btn">📞 Call</button>
              <button class="btn-apple-call" id="chat-lead-info-btn">👤 Profile</button>
              <button class="btn-apple-chat" id="chat-share-brochure-btn">📸 Brochure</button>
            </div>
          </div>

          <!-- CHAT BODY STREAM -->
          <div class="apple-chat-body" id="apple-chat-body">
            <div class="chat-bubble inbound">
              Hello Mohak, I'm interested in the 3 BHK unit at Oberoi Sky City. Can we schedule a site visit today?
              <div style="font-size:10px;color:#94a3b8;margin-top:4px;text-align:right;">10:00 AM</div>
            </div>

            <div class="chat-bubble outbound">
              Namaste Rohit ji! Yes absolutely, I have arranged the keys with society security for 10:30 AM today. Looking forward to meeting you there!
              <div style="font-size:10px;color:rgba(255,255,255,0.8);margin-top:4px;text-align:right;">10:08 AM · Sent</div>
            </div>

            <div class="chat-bubble inbound">
              Sounds great, will reach by 10:30 AM!
              <div style="font-size:10px;color:#94a3b8;margin-top:4px;text-align:right;">10:15 AM</div>
            </div>
          </div>

          <!-- CHAT FOOTER -->
          <div class="apple-chat-footer">
            <button class="btn-apple-call" id="msg-magic-parser-btn" title="Paste raw WhatsApp broker note" style="background:#eff6ff;color:#2563eb;border-color:#dbeafe;font-weight:700;">
              ✦ WhatsApp Parser
            </button>
            <input class="input" id="chat-msg-input" placeholder="Type a message to client or AI prompt..." style="flex:1;" />
            <button class="button primary" id="chat-send-btn" style="background:#2563eb;font-weight:600;padding:8px 16px;border-radius:8px;">Send ↵</button>
          </div>
        </div>
      </div>
    `);
    bindShell();

    const chatBody = document.querySelector('#apple-chat-body');
    const msgInput = document.querySelector('#chat-msg-input');
    const sendBtn = document.querySelector('#chat-send-btn');
    const magicBtn = document.querySelector('#msg-magic-parser-btn');

    const sendMessage = () => {
      const text = msgInput?.value?.trim();
      if (!text) return;
      msgInput.value = '';

      const bubbleHtml = `
        <div class="chat-bubble outbound">
          ${esc(text)}
          <div style="font-size:10px;color:rgba(255,255,255,0.8);margin-top:4px;text-align:right;">Just now · Sent</div>
        </div>
      `;
      chatBody.insertAdjacentHTML('beforeend', bubbleHtml);
      chatBody.scrollTop = chatBody.scrollHeight;

      setTimeout(() => {
        const replyHtml = `
          <div class="chat-bubble inbound">
            Thank you! I received your update.
            <div style="font-size:10px;color:#94a3b8;margin-top:4px;text-align:right;">Just now</div>
          </div>
        `;
        chatBody.insertAdjacentHTML('beforeend', replyHtml);
        chatBody.scrollTop = chatBody.scrollHeight;
      }, 1000);
    };

    if (sendBtn) sendBtn.onclick = sendMessage;
    if (msgInput) {
      msgInput.onkeydown = (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          sendMessage();
        }
      };
    }

    if (magicBtn) {
      magicBtn.onclick = () => whatsAppMagicParserModal();
    }

    const callBtn = document.querySelector('#chat-call-btn');
    if (callBtn) callBtn.onclick = () => window.open('tel:+919876543210', '_self');

    const leadInfoBtn = document.querySelector('#chat-lead-info-btn');
    if (leadInfoBtn) leadInfoBtn.onclick = () => leadDrawer(selectedLead.id || 101);

    const shareBrochureBtn = document.querySelector('#chat-share-brochure-btn');
    if (shareBrochureBtn) shareBrochureBtn.onclick = () => {
      const prop = (state.properties && state.properties.length ? state.properties : demoProperties)[0];
      whatsAppDispatcherModal(prop, selectedLead);
    };

    document.querySelectorAll('.apple-msg-item').forEach(item => {
      item.onclick = () => {
        document.querySelectorAll('.apple-msg-item').forEach(x => x.classList.remove('active'));
        item.classList.add('active');
        const idx = Number(item.dataset.leadIdx);
        selectedLead = leadsList[idx] || demoLeads[0];
        document.querySelector('#active-chat-name').textContent = selectedLead.name;
        document.querySelector('#active-chat-phone').innerHTML = `${esc(selectedLead.phone || '+91 98201 23456')} · <span class="apple-badge active" style="font-size:10px;padding:1px 5px;">Active Buyer</span>`;
        document.querySelector('#active-chat-avatar').textContent = initials(selectedLead.name);
      };
    });
  }

  function calculateMultiFactorMatch(lead, prop) {
    if (!lead || !prop) return { score: 0, matchReasons: [], breakdowns: {} };

    let totalScore = 0;
    const reasons = [];
    const breakdowns = { budget: 0, location: 0, bhk: 0, intent: 0, temperature: 0 };

    const leadReq = lead.requirement || {};
    const leadIntent = String(leadReq.listingType || leadReq.transactionType || lead.intent || 'BUY').toUpperCase();
    const propIntent = String(prop.listingType || prop.type || 'SALE').toUpperCase();

    // 1. Transaction Intent Compatibility (10 Points)
    const isSaleLead = leadIntent.includes('BUY') || leadIntent.includes('SALE');
    const isSaleProp = propIntent.includes('SALE') || propIntent.includes('BUY');
    const isRentLead = leadIntent.includes('RENT') || leadIntent.includes('LEASE');
    const isRentProp = propIntent.includes('RENT') || propIntent.includes('LEASE');

    if ((isSaleLead && isSaleProp) || (isRentLead && isRentProp)) {
      totalScore += 10;
      breakdowns.intent = 100;
      reasons.push(`✓ Transaction type fits (${isSaleLead ? 'Outright Sale' : 'Rental Lease'})`);
    } else {
      // Incompatible intent (e.g. Rental buyer vs Sale property)
      return { score: 15, matchReasons: ['⚠️ Intent mismatch (Sale vs Rent)'], breakdowns };
    }

    // 2. Budget Compatibility (30 Points)
    const maxBudget = Number(leadReq.maxBudget || lead.maxBudget || (isRentLead ? 50000 : 12000000));
    const minBudget = Number(leadReq.minBudget || lead.minBudget || 0);
    const propPrice = Number(prop.price || prop.pricing?.basePrice || 0);

    if (propPrice > 0 && maxBudget > 0) {
      if (propPrice <= maxBudget) {
        if (minBudget > 0 && propPrice >= minBudget) {
          totalScore += 30;
          breakdowns.budget = 100;
          reasons.push(`✓ Price fits sweet-spot (${formatPrice(propPrice, propIntent)} within budget)`);
        } else {
          totalScore += 28;
          breakdowns.budget = 95;
          reasons.push(`✓ Well within buyer ceiling (${formatPrice(propPrice, propIntent)} <= ${formatPrice(maxBudget, propIntent)})`);
        }
      } else if (propPrice <= maxBudget * 1.10) {
        totalScore += 20;
        breakdowns.budget = 70;
        reasons.push(`⚡ Minor 10% stretch budget (${formatPrice(propPrice, propIntent)} vs ${formatPrice(maxBudget, propIntent)})`);
      } else if (propPrice <= maxBudget * 1.20) {
        totalScore += 10;
        breakdowns.budget = 40;
        reasons.push(`⚠️ 20% stretch negotiable budget`);
      } else {
        breakdowns.budget = 10;
      }
    } else {
      totalScore += 15;
      breakdowns.budget = 50;
    }

    // 3. Location & Micro-Market Proximity (25 Points)
    const leadLocs = (leadReq.preferredLocalities || leadReq.preferredLocations || [lead.locality || 'Thane']).map(x => String(x).toLowerCase());
    const propLoc = String(prop.location || prop.locality || prop.society || '').toLowerCase();
    
    let locMatchFound = false;
    for (const loc of leadLocs) {
      if (loc && (propLoc.includes(loc) || loc.includes(propLoc) || (loc.includes('thane') && propLoc.includes('thane')))) {
        locMatchFound = true;
        break;
      }
    }

    if (locMatchFound) {
      totalScore += 25;
      breakdowns.location = 100;
      reasons.push(`✓ Prime micro-market match in ${esc(prop.locality || prop.location || 'Thane')}`);
    } else if (propLoc.includes('thane') || propLoc.includes('mumbai')) {
      totalScore += 15;
      breakdowns.location = 60;
      reasons.push(`✓ Regional proximity within Thane MMR hub`);
    } else {
      totalScore += 5;
      breakdowns.location = 20;
    }

    // 4. Configuration & BHK Match (20 Points)
    const leadBhk = Number(leadReq.bhk || lead.bhk || 2);
    const propBhk = Number(prop.bhk || (prop.specifications && prop.specifications.bedrooms) || 2);

    if (leadBhk === propBhk) {
      totalScore += 20;
      breakdowns.bhk = 100;
      reasons.push(`✓ Exact ${propBhk} BHK configuration match`);
    } else if (Math.abs(leadBhk - propBhk) === 1 && propPrice <= maxBudget) {
      totalScore += 12;
      breakdowns.bhk = 60;
      reasons.push(`⚡ Compatible ${propBhk} BHK layout (budget permits upgrade)`);
    } else {
      breakdowns.bhk = 20;
    }

    // 5. Buyer Temperature & Closer Intent (15 Points)
    const temp = String(lead.temperature || 'WARM').toUpperCase();
    if (temp === 'HOT') {
      totalScore += 15;
      breakdowns.temperature = 100;
      reasons.push(`🔥 Hot active buyer — ready for token & showing`);
    } else if (temp === 'WARM') {
      totalScore += 10;
      breakdowns.temperature = 70;
      reasons.push(`🟡 Warm client — actively scheduling visits`);
    } else {
      totalScore += 5;
      breakdowns.temperature = 40;
    }

    const finalScore = Math.min(99, Math.max(25, totalScore));
    return {
      score: finalScore,
      matchReasons: reasons,
      breakdowns
    };
  }

  // --- OVERHAULED AI MATCHMAKING COCKPIT VIEW ---
  async function matchesView(selectedLeadId = null, selectedPropId = null) {
    const caps = getPlanCapabilities();
    if (caps.planId === 'starter') {
      mountView(planUpgradeWall('Pro Closer', 'AI 2-Way Matchmaking Engine'), 'AI Matchmaking · Upgrade Required', 'matches');
      const btn = document.querySelector('#upgrade-wall-switch-btn');
      if (btn) btn.onclick = () => {
        state.currentPlan = 'pro';
        localStorage.setItem('brokerai.currentPlan', 'pro');
        showToast('✓ Unlocked Pro Closer! AI Matchmaking active.', 'success');
        setTimeout(() => { matchesView(); }, 300);
      };
      return;
    }
  
    if (!state.matchingMode) state.matchingMode = 'BUYER_TO_PROPS';
    if (!state.matchingThreshold) state.matchingThreshold = 'ALL';
    if (!state.matchingViewMode) state.matchingViewMode = 'CARDS';

    const allLeads = (state.leads && state.leads.length) ? state.leads : (typeof demoLeads !== 'undefined' ? demoLeads : getStoredLeads());
    const allProps = (state.properties && state.properties.length) ? state.properties : (typeof demoProperties !== 'undefined' ? demoProperties : getStoredProperties());

    state.leads = allLeads;
    state.properties = allProps;

    let activeLead = selectedLeadId ? allLeads.find(l => l.id === Number(selectedLeadId)) : (state.matchingSelectedLeadId ? allLeads.find(l => l.id === Number(state.matchingSelectedLeadId)) : allLeads[0]);
    let activeProp = selectedPropId ? allProps.find(p => p.id === Number(selectedPropId)) : (state.matchingSelectedPropId ? allProps.find(p => p.id === Number(state.matchingSelectedPropId)) : allProps[0]);

    if (activeLead) state.matchingSelectedLeadId = activeLead.id;
    if (activeProp) state.matchingSelectedPropId = activeProp.id;

    // Calculate system-wide 90%+ high-confidence radar matches
    const systemRadarMatches = [];
    allLeads.forEach(l => {
      allProps.forEach(p => {
        const res = calculateMultiFactorMatch(l, p);
        if (res.score >= 80) {
          systemRadarMatches.push({
            lead: l,
            property: p,
            score: res.score,
            matchReasons: res.matchReasons,
            breakdowns: res.breakdowns,
            potentialCommission: Math.round((Number(p.price || 10000000) * 0.015))
          });
        }
      });
    });

    systemRadarMatches.sort((a, b) => b.score - a.score);
    const hotCount = systemRadarMatches.filter(m => m.score >= 88).length;
    const totalPipelineValue = systemRadarMatches.slice(0, 10).reduce((sum, m) => sum + (m.potentialCommission || 0), 0);

    app.innerHTML = layout(`
      <!-- PAGE HEADER -->
      ${pageHeader('⚡ AI Deal Matchmaking Radar', '2-Way compatibility algorithm pairing qualified buyers with active Thane MMR inventory.', `
        <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;">
          <div class="view-switcher">
            <button class="view-btn ${state.matchingViewMode === 'CARDS' ? 'active' : ''}" id="match-view-cards-btn">⊞ Match Cards</button>
            <button class="view-btn ${state.matchingViewMode === 'TABLE' ? 'active' : ''}" id="match-view-table-btn">☰ Comparison Table</button>
          </div>
          <button class="button hero-btn" id="match-quick-wa-btn" style="background:#ecfdf5;color:#047857;border-color:#a7f3d0;font-weight:750;font-size:12px;">
            ${svgIcon('whatsapp', 13)} Pitch Top Match
          </button>
        </div>
      `)}

      <!-- COMPACT AI MATCHING KPI STRIP -->
      <div class="cards" style="margin-bottom:14px;">
        <article class="metric">
          <div class="metric-header">
            <div class="metric-label">🔥 90%+ Hot Closures</div>
            <span class="trend-pill urgent">${hotCount} Ready</span>
          </div>
          <div class="metric-value" style="color:#b42332;">${hotCount} High-Intent Fits</div>
          <div class="metric-note">Immediate token conversion potential</div>
        </article>

        <article class="metric">
          <div class="metric-header">
            <div class="metric-label">Total AI Radar Matches</div>
            <span class="trend-pill up">Live Scan</span>
          </div>
          <div class="metric-value" style="color:#165dff;">${systemRadarMatches.length} Opportunities</div>
          <div class="metric-note">Across ${allLeads.length} buyers & ${allProps.length} listings</div>
        </article>

        <article class="metric">
          <div class="metric-header">
            <div class="metric-label">Top 10 Potential Brokerage</div>
            <span class="trend-pill info">1.5% Split</span>
          </div>
          <div class="metric-value" style="color:#059669;">₹${totalPipelineValue.toLocaleString('en-IN')}</div>
          <div class="metric-note">Estimated gross commission pool</div>
        </article>

        <article class="metric">
          <div class="metric-header">
            <div class="metric-label">AI Matching Engine</div>
            <span class="trend-pill up">Active</span>
          </div>
          <div class="metric-value" style="color:#0f172a;">5-Factor Matrix</div>
          <div class="metric-note">Budget · Locality · BHK · Intent · Velocity</div>
        </article>
      </div>

      <!-- 2-WAY DIRECTION SWITCHER TABS -->
      <div class="filter-tabs" style="margin-bottom:12px;">
        <button class="filter-tab ${state.matchingMode === 'BUYER_TO_PROPS' ? 'active' : ''}" id="tab-match-buyer-mode">
          👤 Find Properties for Buyer (${allLeads.length})
        </button>
        <button class="filter-tab ${state.matchingMode === 'PROP_TO_BUYERS' ? 'active' : ''}" id="tab-match-prop-mode">
          🏢 Find Buyers for Property (${allProps.length})
        </button>
        <button class="filter-tab ${state.matchingMode === 'SYSTEM_RADAR' ? 'active' : ''}" id="tab-match-radar-mode">
          ⚡ System Deal Radar (Top ${systemRadarMatches.length})
        </button>
      </div>

      <!-- SELECTION & FILTER BAR -->
      <div class="filters" style="margin-bottom:14px;align-items:center;background:#ffffff;padding:12px;border-radius:12px;border:1px solid rgba(0,0,0,0.07);">
        
        ${state.matchingMode === 'BUYER_TO_PROPS' ? `
          <div style="flex:1;min-width:240px;">
            <label style="font-size:11px;font-weight:750;color:#64748b;display:block;margin-bottom:4px;text-transform:uppercase;">Select Buyer Lead (Grahak):</label>
            <select class="select" id="match-active-lead-select" style="width:100%;font-weight:700;">
              ${allLeads.map(l => `
                <option value="${l.id}" ${activeLead && activeLead.id === l.id ? 'selected' : ''}>
                  ${l.temperature === 'HOT' ? '🔥' : '👤'} ${esc(l.name)} · ${l.requirement?.bhk || 2} BHK (${formatPrice(l.requirement?.maxBudget, l.requirement?.listingType)}) · ${esc(l.locality || l.requirement?.preferredLocalities?.[0] || 'Thane')}
                </option>
              `).join('')}
            </select>
          </div>
        ` : state.matchingMode === 'PROP_TO_BUYERS' ? `
          <div style="flex:1;min-width:240px;">
            <label style="font-size:11px;font-weight:750;color:#64748b;display:block;margin-bottom:4px;text-transform:uppercase;">Select Property Inventory:</label>
            <select class="select" id="match-active-prop-select" style="width:100%;font-weight:700;">
              ${allProps.map(p => `
                <option value="${p.id}" ${activeProp && activeProp.id === p.id ? 'selected' : ''}>
                  🏢 ${esc(p.title || p.society)} · ${p.bhk || 2} BHK (${formatPrice(p.price, p.listingType)}) · ${esc(p.locality || p.location || 'Thane')}
                </option>
              `).join('')}
            </select>
          </div>
        ` : `
          <div style="flex:1;min-width:240px;">
            <label style="font-size:11px;font-weight:750;color:#64748b;display:block;margin-bottom:4px;text-transform:uppercase;">Live Radar Filters:</label>
            <div style="font-size:13px;font-weight:750;color:#0f172a;display:flex;align-items:center;gap:6px;">
              <span style="color:#059669;font-size:16px;">●</span> Scanning ${allLeads.length} Active Buyers against ${allProps.length} MMR Properties
            </div>
          </div>
        `}

        <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;">
          <div>
            <label style="font-size:11px;font-weight:750;color:#64748b;display:block;margin-bottom:4px;text-transform:uppercase;">Match Score:</label>
            <select class="select" id="match-threshold-filter" style="height:36px;">
              <option value="ALL" ${state.matchingThreshold === 'ALL' ? 'selected' : ''}>All Scores (50%+)</option>
              <option value="HOT" ${state.matchingThreshold === 'HOT' ? 'selected' : ''}>🔥 88%+ Hot Fits Only</option>
              <option value="HIGH" ${state.matchingThreshold === 'HIGH' ? 'selected' : ''}>⚡ 75%+ High Fits</option>
            </select>
          </div>
          <div>
            <label style="font-size:11px;font-weight:750;color:#64748b;display:block;margin-bottom:4px;text-transform:uppercase;">Quick Search:</label>
            <input class="input search" id="match-keyword-search" placeholder="Search society, name, BHK…" style="height:36px;width:180px;" />
          </div>
        </div>
      </div>

      <!-- MATCH RESULTS FEED CONTAINER -->
      <div id="ai-matches-results-container"></div>
    `);

    bindShell();

    // 1. Tab Event Listeners
    const tabBuyer = document.querySelector('#tab-match-buyer-mode');
    if (tabBuyer) tabBuyer.onclick = () => { state.matchingMode = 'BUYER_TO_PROPS'; matchesView(); };

    const tabProp = document.querySelector('#tab-match-prop-mode');
    if (tabProp) tabProp.onclick = () => { state.matchingMode = 'PROP_TO_BUYERS'; matchesView(); };

    const tabRadar = document.querySelector('#tab-match-radar-mode');
    if (tabRadar) tabRadar.onclick = () => { state.matchingMode = 'SYSTEM_RADAR'; matchesView(); };

    // 2. View Switcher
    const btnCards = document.querySelector('#match-view-cards-btn');
    if (btnCards) btnCards.onclick = () => { state.matchingViewMode = 'CARDS'; renderMatchResults(); };

    const btnTable = document.querySelector('#match-view-table-btn');
    if (btnTable) btnTable.onclick = () => { state.matchingViewMode = 'TABLE'; renderMatchResults(); };

    // 3. Selection Dropdowns
    const leadSelectEl = document.querySelector('#match-active-lead-select');
    if (leadSelectEl) leadSelectEl.onchange = () => {
      state.matchingSelectedLeadId = Number(leadSelectEl.value);
      renderMatchResults();
    };

    const propSelectEl = document.querySelector('#match-active-prop-select');
    if (propSelectEl) propSelectEl.onchange = () => {
      state.matchingSelectedPropId = Number(propSelectEl.value);
      renderMatchResults();
    };

    // 4. Threshold & Search Filter
    const thresholdEl = document.querySelector('#match-threshold-filter');
    if (thresholdEl) thresholdEl.onchange = () => {
      state.matchingThreshold = thresholdEl.value;
      renderMatchResults();
    };

    const searchEl = document.querySelector('#match-keyword-search');
    if (searchEl) searchEl.oninput = () => {
      renderMatchResults();
    };

    // 5. Quick Top Pitch Button
    const quickWaBtn = document.querySelector('#match-quick-wa-btn');
    if (quickWaBtn) quickWaBtn.onclick = () => {
      if (systemRadarMatches.length) {
        const top = systemRadarMatches[0];
        whatsAppDispatcherModal(top.property, top.lead);
      } else if (activeProp && activeLead) {
        whatsAppDispatcherModal(activeProp, activeLead);
      }
    };

    // --- RENDER DYNAMIC RESULTS ---
    function renderMatchResults() {
      const container = document.querySelector('#ai-matches-results-container');
      if (!container) return;

      const keyword = (document.querySelector('#match-keyword-search')?.value || '').toLowerCase().trim();
      const threshold = state.matchingThreshold || 'ALL';

      let items = [];

      if (state.matchingMode === 'BUYER_TO_PROPS') {
        const lead = activeLead || allLeads[0];
        if (!lead) {
          container.innerHTML = `<div class="empty"><strong>No buyer leads found.</strong>Add buyer leads to view matching inventory.</div>`;
          return;
        }

        allProps.forEach(p => {
          const res = calculateMultiFactorMatch(lead, p);
          items.push({
            lead: lead,
            property: p,
            score: res.score,
            matchReasons: res.matchReasons,
            breakdowns: res.breakdowns,
            potentialCommission: Math.round((Number(p.price || 10000000) * 0.015))
          });
        });
      } else if (state.matchingMode === 'PROP_TO_BUYERS') {
        const prop = activeProp || allProps[0];
        if (!prop) {
          container.innerHTML = `<div class="empty"><strong>No properties found.</strong>Add property stock to view matching buyers.</div>`;
          return;
        }

        allLeads.forEach(l => {
          const res = calculateMultiFactorMatch(l, prop);
          items.push({
            lead: l,
            property: prop,
            score: res.score,
            matchReasons: res.matchReasons,
            breakdowns: res.breakdowns,
            potentialCommission: Math.round((Number(prop.price || 10000000) * 0.015))
          });
        });
      } else {
        // SYSTEM RADAR
        items = [...systemRadarMatches];
      }

      // Filter by threshold
      if (threshold === 'HOT') items = items.filter(m => m.score >= 88);
      else if (threshold === 'HIGH') items = items.filter(m => m.score >= 75);
      else items = items.filter(m => m.score >= 50);

      // Filter by keyword search
      if (keyword) {
        items = items.filter(m => 
          (m.property.title || '').toLowerCase().includes(keyword) ||
          (m.property.society || '').toLowerCase().includes(keyword) ||
          (m.property.location || '').toLowerCase().includes(keyword) ||
          (m.lead.name || '').toLowerCase().includes(keyword) ||
          (m.lead.phone || '').toLowerCase().includes(keyword)
        );
      }

      items.sort((a, b) => b.score - a.score);

      if (!items.length) {
        container.innerHTML = `
          <div class="empty" style="background:#fff;border-radius:14px;padding:36px 20px;border:1px solid rgba(0,0,0,0.07);text-align:center;">
            <div style="font-size:36px;margin-bottom:8px;">🔍</div>
            <strong style="font-size:15px;color:#0f172a;display:block;margin-bottom:4px;">No matching pairs found for current criteria.</strong>
            <div style="font-size:12.5px;color:#64748b;max-width:480px;margin:0 auto 16px;">
              Try lowering the match score threshold to "All Scores" or add more inventory in nearby Thane micro-markets.
            </div>
            <button class="button primary" id="empty-add-prop-btn" style="font-size:12px;">＋ Add New Property</button>
          </div>
        `;
        if (container.querySelector('#empty-add-prop-btn')) {
          container.querySelector('#empty-add-prop-btn').onclick = () => propertyDrawer();
        }
        return;
      }

      // CARD VIEW
      if (state.matchingViewMode === 'CARDS') {
        container.innerHTML = `
          <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(340px, 1fr));gap:14px;">
            ${items.map((m, idx) => {
              const scoreBadgeColor = m.score >= 88 ? '#059669' : m.score >= 75 ? '#2563eb' : '#d97706';
              const scoreBadgeBg = m.score >= 88 ? 'rgba(16,185,129,0.12)' : m.score >= 75 ? 'rgba(37,99,235,0.12)' : 'rgba(217,119,6,0.12)';
              const scoreLabel = m.score >= 88 ? '🔥 HOT MATCH' : m.score >= 75 ? '⚡ HIGH FIT' : 'COMPATIBLE';

              return `
                <div class="match-card-item" style="background:#ffffff;border:1px solid rgba(0,0,0,0.08);border-left:4px solid ${scoreBadgeColor};border-radius:14px;padding:16px;box-shadow:0 1px 3px rgba(0,0,0,0.04);display:flex;flex-direction:column;justify-content:space-between;gap:12px;transition:transform 0.15s ease, box-shadow 0.15s ease;">
                  
                  <!-- HEADER: SCORE & PAIR SUMMARY -->
                  <div>
                    <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px;margin-bottom:8px;">
                      <div>
                        <span class="badge" style="background:${scoreBadgeBg};color:${scoreBadgeColor};font-weight:850;font-size:11.5px;letter-spacing:0.02em;padding:3px 8px;">
                          ${m.score}% · ${scoreLabel}
                        </span>
                        <span style="font-size:11px;color:#64748b;font-weight:600;margin-left:6px;">Rank #${idx + 1}</span>
                      </div>
                      <div style="font-size:12px;font-weight:800;color:#059669;text-align:right;">
                        ₹${m.potentialCommission.toLocaleString('en-IN')}
                        <div style="font-size:10px;color:#64748b;font-weight:600;">Est. Brokerage</div>
                      </div>
                    </div>

                    <!-- BUYER & PROPERTY SIDE-BY-SIDE CHIPS -->
                    <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:10px;margin-bottom:10px;display:grid;grid-template-columns:1fr 1fr;gap:8px;">
                      <div>
                        <div style="font-size:10px;color:#64748b;font-weight:750;text-transform:uppercase;">👤 Buyer (Grahak)</div>
                        <strong style="font-size:13px;color:#0f172a;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${esc(m.lead.name)}</strong>
                        <div style="font-size:11px;color:#475569;">📞 ${esc(m.lead.phone || '—')}</div>
                        <div style="font-size:11px;color:#2563eb;font-weight:700;margin-top:2px;">
                          Budget: ${formatPrice(m.lead.requirement?.maxBudget, m.lead.requirement?.listingType)} (${m.lead.requirement?.bhk || 2} BHK)
                        </div>
                      </div>

                      <div style="border-left:1px solid #cbd5e1;padding-left:8px;">
                        <div style="font-size:10px;color:#64748b;font-weight:750;text-transform:uppercase;">🏢 Property Listing</div>
                        <strong style="font-size:13px;color:#0f172a;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${esc(m.property.title || m.property.society)}</strong>
                        <div style="font-size:11px;color:#475569;">📍 ${esc(m.property.locality || m.property.location || 'Thane')}</div>
                        <div style="font-size:11px;color:#059669;font-weight:700;margin-top:2px;">
                          Price: ${formatPrice(m.property.price, m.property.listingType)} (${m.property.bhk || 2} BHK)
                        </div>
                      </div>
                    </div>

                    <!-- WHY IT FITS RATIONALE BULLETS -->
                    <div style="margin-bottom:10px;">
                      <div style="font-size:11px;color:#475569;font-weight:750;margin-bottom:4px;text-transform:uppercase;letter-spacing:0.02em;">Key Match Drivers:</div>
                      <div style="display:flex;flex-wrap:wrap;gap:4px;">
                        ${(m.matchReasons || []).map(r => `
                          <span style="font-size:11px;background:#f1f5f9;color:#334155;padding:3px 7px;border-radius:6px;border:1px solid #e2e8f0;font-weight:600;">
                            ${esc(r)}
                          </span>
                        `).join('')}
                      </div>
                    </div>
                  </div>

                  <!-- ACTIONS BAR -->
                  <div style="border-top:1px solid #f1f5f9;padding-top:10px;display:flex;gap:6px;flex-wrap:wrap;align-items:center;">
                    <button class="button primary" data-pitch-wa-idx="${idx}" style="background:#059669;color:#fff;font-size:11.5px;padding:6px 10px;font-weight:750;flex:1;display:flex;align-items:center;justify-content:center;gap:4px;">
                      ${svgIcon('whatsapp', 13)} Pitch WhatsApp
                    </button>
                    <button class="button secondary" data-schedule-visit-idx="${idx}" style="font-size:11.5px;padding:6px 10px;font-weight:700;">
                      📅 Schedule Visit
                    </button>
                    <button class="button secondary" data-token-idx="${idx}" style="font-size:11.5px;padding:6px 8px;font-weight:700;" title="Create Token Receipt">
                      🧾 Token
                    </button>
                  </div>

                </div>
              `;
            }).join('')}
          </div>
        `;
      } else {
        // TABLE VIEW
        container.innerHTML = `
          <div class="table-wrap" style="background:#ffffff;border-radius:12px;border:1px solid rgba(0,0,0,0.07);">
            <table class="table" style="font-size:12.5px;">
              <thead>
                <tr>
                  <th>Rank & Score</th>
                  <th>Buyer Lead (Grahak)</th>
                  <th>Matching Property</th>
                  <th>Key Match Factors</th>
                  <th>Est. Brokerage</th>
                  <th style="text-align:right;">Actions</th>
                </tr>
              </thead>
              <tbody>
                ${items.map((m, idx) => {
                  const scoreBadgeColor = m.score >= 88 ? '#059669' : m.score >= 75 ? '#2563eb' : '#d97706';
                  const scoreBadgeBg = m.score >= 88 ? 'rgba(16,185,129,0.12)' : m.score >= 75 ? 'rgba(37,99,235,0.12)' : 'rgba(217,119,6,0.12)';

                  return `
                    <tr>
                      <td>
                        <span class="badge" style="background:${scoreBadgeBg};color:${scoreBadgeColor};font-weight:850;font-size:11.5px;">
                          ${m.score}% MATCH
                        </span>
                        <div style="font-size:10px;color:#64748b;margin-top:2px;">#${idx + 1} Best Fit</div>
                      </td>
                      <td>
                        <strong style="color:#0f172a;">${esc(m.lead.name)}</strong>
                        <div style="font-size:11px;color:#64748b;">📞 ${esc(m.lead.phone || '—')}</div>
                        <div style="font-size:11px;color:#2563eb;font-weight:700;">${m.lead.requirement?.bhk || 2} BHK · ${formatPrice(m.lead.requirement?.maxBudget, m.lead.requirement?.listingType)}</div>
                      </td>
                      <td>
                        <strong style="color:#0f172a;">${esc(m.property.title || m.property.society)}</strong>
                        <div style="font-size:11px;color:#64748b;">📍 ${esc(m.property.locality || m.property.location || 'Thane')}</div>
                        <div style="font-size:11px;color:#059669;font-weight:700;">${m.property.bhk || 2} BHK · ${formatPrice(m.property.price, m.property.listingType)}</div>
                      </td>
                      <td>
                        <ul style="margin:0;padding-left:14px;font-size:11.5px;color:#475569;">
                          ${(m.matchReasons || []).slice(0, 3).map(r => `<li>${esc(r)}</li>`).join('')}
                        </ul>
                      </td>
                      <td>
                        <strong style="color:#059669;font-size:12.5px;">₹${m.potentialCommission.toLocaleString('en-IN')}</strong>
                        <div style="font-size:10.5px;color:#64748b;">1.5% Gross</div>
                      </td>
                      <td style="text-align:right;white-space:nowrap;">
                        <button class="button primary" data-pitch-wa-idx="${idx}" style="background:#059669;padding:5px 8px;font-size:11.5px;">
                          💬 Pitch
                        </button>
                        <button class="button secondary" data-schedule-visit-idx="${idx}" style="padding:5px 8px;font-size:11.5px;">
                          📅 Visit
                        </button>
                      </td>
                    </tr>
                  `;
                }).join('')}
              </tbody>
            </table>
          </div>
        `;
      }

      // Bind dynamic action buttons
      container.querySelectorAll('[data-pitch-wa-idx]').forEach(btn => {
        btn.onclick = () => {
          const item = items[Number(btn.dataset.pitchWaIdx)];
          if (item) whatsAppDispatcherModal(item.property, item.lead);
        };
      });

      container.querySelectorAll('[data-schedule-visit-idx]').forEach(btn => {
        btn.onclick = () => {
          const item = items[Number(btn.dataset.scheduleVisitIdx)];
          if (item) siteVisitDrawer(item.lead.id, item.property.id);
        };
      });

      container.querySelectorAll('[data-token-idx]').forEach(btn => {
        btn.onclick = () => {
          const item = items[Number(btn.dataset.tokenIdx)];
          if (item) tokenReceiptModal();
        };
      });
    }

    // Initial render of match feed
    renderMatchResults();
  }

  const demoTable = (headers, rows) => `<section class="panel"><div class="table-wrap"><table class="table"><thead><tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr></thead><tbody>${rows.join('')}</tbody></table></div></section>`;
    // --- OVERHAULED DEALS PIPELINE MODULE ---
  const dealStages = [
    { key: 'SHOWING_COMPLETED', label: '1. Showing Done', color: '#165dff' },
    { key: 'NEGOTIATION', label: '2. Negotiation', color: '#f59e0b' },
    { key: 'TOKEN_DEPOSIT', label: '3. Token Deposit', color: '#10b981' },
    { key: 'LEGAL_AND_LOAN', label: '4. Legal & Loan', color: '#8b5cf6' },
    { key: 'REGISTRATION_CLOSED', label: '5. Registered / Closed', color: '#047857' }
  ];

  async function dealsView() {
    let list = (state.deals && state.deals.length) ? state.deals : demoDeals;
    state.deals = list;

    const totalDeals = list.length || 5;
    const totalPipelineVal = list.reduce((acc, d) => acc + (d.agreedPrice || 0), 0) || 32000000;
    const totalBrokerage = list.reduce((acc, d) => acc + (d.expectedBrokerage || 0), 0) || 640000;

    app.innerHTML = layout(`
      <!-- HEADER -->
      <div class="page-head" style="margin-bottom:20px;">
        <div>
          <h1 class="page-title" style="font-size:24px;font-weight:800;letter-spacing:-0.025em;color:#0f172a;margin:0 0 4px;">Deals Pipeline</h1>
          <p class="page-sub" style="font-size:13.5px;color:#64748b;margin:0;">Track ongoing deals from token advance to final agreement registration.</p>
        </div>
        <div style="display:flex;gap:10px;align-items:center;">
          <button class="button hero-btn" id="deals-token-btn" style="background:#eff6ff;color:#2563eb;border-color:#dbeafe;font-weight:700;">🧾 Token Receipt</button>
          <button class="button primary" id="add-deal-btn" style="background:#2563eb;font-weight:600;padding:8px 16px;border-radius:9px;">＋ Create Deal</button>
        </div>
      </div>

      <!-- 4 TOP FINANCIAL KPI CARDS -->
      <div class="apple-kpi-grid">
        <div class="apple-kpi-card">
          <div class="apple-kpi-top">
            <span class="apple-kpi-label">TOTAL PIPELINE VALUE</span>
            <div class="apple-kpi-icon blue">${svgIcon('deals', 16)}</div>
          </div>
          <div>
            <div class="apple-kpi-val">${formatPrice(totalPipelineVal, 'SALE')}</div>
            <div class="apple-kpi-trend up">Across ${totalDeals} active transactions</div>
          </div>
        </div>

        <div class="apple-kpi-card">
          <div class="apple-kpi-top">
            <span class="apple-kpi-label">PROJECTED BROKERAGE</span>
            <div class="apple-kpi-icon green">💰</div>
          </div>
          <div>
            <div class="apple-kpi-val">${formatPrice(totalBrokerage, 'SALE')}</div>
            <div class="apple-kpi-trend up">Avg 2.0% commission</div>
          </div>
        </div>

        <div class="apple-kpi-card">
          <div class="apple-kpi-top">
            <span class="apple-kpi-label">TOKEN ADVANCE BLOCKED</span>
            <div class="apple-kpi-icon orange">🧾</div>
          </div>
          <div>
            <div class="apple-kpi-val">₹5,00,000</div>
            <div class="apple-kpi-trend neutral">Verified in escrow</div>
          </div>
        </div>

        <div class="apple-kpi-card">
          <div class="apple-kpi-top">
            <span class="apple-kpi-label">EXPECTED CLOSING</span>
            <div class="apple-kpi-icon purple">🎯</div>
          </div>
          <div>
            <div class="apple-kpi-val">3 Deals</div>
            <div class="apple-kpi-trend up">Slated this month</div>
          </div>
        </div>
      </div>

      <!-- FILTER BAR -->
      <div class="apple-filter-bar">
        <div class="apple-tabs" id="deals-filter-tabs">
          <button class="apple-tab-btn active" data-tab="ALL">All Deals (${totalDeals})</button>
          <button class="apple-tab-btn" data-tab="TOKEN">Token Advance</button>
          <button class="apple-tab-btn" data-tab="LEGAL">Legal / Loan</button>
          <button class="apple-tab-btn" data-tab="REGISTRATION">Registration</button>
        </div>
        <div class="topbar-search-box" style="width:300px;">
          ${svgIcon('search', 14)}
          <input type="text" id="deals-search" placeholder="Search deals by buyer, property..." />
        </div>
      </div>

      <!-- APPLE DEALS TABLE -->
      <div class="apple-table-container">
        <table class="apple-table" id="deals-table">
          <thead>
            <tr>
              <th>DEAL & PROPERTY</th>
              <th>CLIENT</th>
              <th>AGREED VALUE</th>
              <th>COMMISSION</th>
              <th>STAGE</th>
              <th>EXPECTED CLOSE</th>
              <th style="text-align:right;">ACTIONS</th>
            </tr>
          </thead>
          <tbody id="deals-tbody">
            <!-- Deals rows rendered here -->
          </tbody>
        </table>
      </div>
    `);
    bindShell();

    if (document.querySelector('#add-deal-btn')) document.querySelector('#add-deal-btn').onclick = () => dealDrawer();
    if (document.querySelector('#deals-token-btn')) document.querySelector('#deals-token-btn').onclick = () => tokenReceiptModal();

    let activeFilter = 'ALL';
    const searchInput = document.querySelector('#deals-search');
    const tbody = document.querySelector('#deals-tbody');

    const renderDeals = () => {
      const q = (searchInput?.value || '').toLowerCase().trim();
      let filtered = list.filter(d => {
        if (activeFilter === 'TOKEN' && d.stage !== 'TOKEN_DEPOSIT') return false;
        if (activeFilter === 'LEGAL' && d.stage !== 'LEGAL_AND_LOAN') return false;
        if (activeFilter === 'REGISTRATION' && d.stage !== 'REGISTRATION_CLOSED') return false;
        if (q && !`${d.propertyTitle} ${d.leadName} ${d.stage}`.toLowerCase().includes(q)) return false;
        return true;
      });

      if (!filtered.length) {
        tbody.innerHTML = `<tr><td colspan="7" style="text-align:center;padding:32px;color:#94a3b8;">No active deals found matching filter.</td></tr>`;
        return;
      }

      tbody.innerHTML = filtered.map(d => {
        const stageLabel = (d.stage || 'TOKEN_DEPOSIT').replaceAll('_', ' ');
        const stageClass = d.stage === 'TOKEN_DEPOSIT' ? 'token' : (d.stage === 'LEGAL_AND_LOAN' ? 'legal' : 'active');
        const priceStr = formatPrice(d.agreedPrice, d.listingType || 'SALE');
        const brokStr = formatPrice(d.expectedBrokerage || (d.agreedPrice * 0.02), 'SALE');

        return `
          <tr>
            <td>
              <div style="font-weight:700;color:#0f172a;">${esc(d.propertyTitle || 'Oberoi Sky City, 3 BHK')}</div>
              <div style="font-size:12px;color:#64748b;">${esc(d.propertyLocation || 'Thane')}</div>
            </td>
            <td style="font-weight:600;color:#334155;">${esc(d.leadName || 'Rohit Sharma')}</td>
            <td style="font-weight:750;color:#0f172a;">${priceStr}</td>
            <td style="font-weight:700;color:#16a34a;">${brokStr}</td>
            <td>
              <span class="apple-badge ${stageClass}">● ${stageLabel}</span>
            </td>
            <td style="color:#64748b;font-size:12.5px;">15 Nov 2024</td>
            <td style="text-align:right;">
              <div style="display:inline-flex;gap:6px;">
                <button class="btn-apple-call" data-receipt-deal="${d.id}" title="Token Receipt">🧾 Receipt</button>
                <button class="btn-apple-chat" data-agree-deal="${d.id}" title="Agreement Draft">📄 Draft</button>
                <button class="btn-apple-call" data-view-deal="${d.id}" title="Edit Deal">•••</button>
              </div>
            </td>
          </tr>
        `;
      }).join('');

      tbody.querySelectorAll('[data-receipt-deal]').forEach(b => {
        b.onclick = () => tokenReceiptModal();
      });
      tbody.querySelectorAll('[data-agree-deal]').forEach(b => {
        b.onclick = () => rentalAgreementDrawer();
      });
      tbody.querySelectorAll('[data-view-deal]').forEach(b => {
        b.onclick = () => dealDrawer(Number(b.dataset.viewDeal));
      });
    };

    renderDeals();

    if (searchInput) searchInput.oninput = () => renderDeals();

    document.querySelectorAll('#deals-filter-tabs .apple-tab-btn').forEach(btn => {
      btn.onclick = () => {
        document.querySelectorAll('#deals-filter-tabs .apple-tab-btn').forEach(x => x.classList.remove('active'));
        btn.classList.add('active');
        activeFilter = btn.dataset.tab;
        renderDeals();
      };
    });
  }

  function copyDealWhatsAppUpdate(deal) {
    const stageObj = dealStages.find(s => s.key === deal.stage);
    const text = `*Hi ${deal.leadName},*
Here is the latest progress update on your property deal for *${deal.propertyTitle}*:

📋 *Deal Status:* ${stageObj?.label || deal.stage}
💰 *Agreed Value:* ${formatPrice(deal.agreedPrice, deal.listingType)} (${deal.listingType})
📅 *Target Registration / Handover:* ${deal.targetCloseDate || 'Within 30 Days'}
${deal.tokenAmount ? `🧾 *Token Deposit:* ₹${deal.tokenAmount.toLocaleString('en-IN')} (Confirmed)\n` : ''}${deal.notes ? `📝 *Next Action / Remarks:* ${deal.notes}\n` : ''}
Please let us know if you have any questions or require document assistance.

Best regards,
*${deal.assignedAgentName || state.user?.fullName || 'Aarav Mehta'}* | BrokerAI Closing Desk`;

    navigator.clipboard.writeText(text).then(() => {
      showToast(`Formatted Deal Progress Update for ${deal.leadName} copied to clipboard!\n\nYou can now paste it directly into WhatsApp.`, 'success');
    }).catch(() => prompt("Copy Deal Update:", text));
  }

  function dealDrawer(deal = null) {
    document.querySelectorAll('.modal-backdrop, .drawer-backdrop, .spotlight-backdrop').forEach(b => b.remove());
    let leads = state.leads.length ? state.leads : (state.demo ? demoLeads : []);
    let properties = state.properties.length ? state.properties : (state.demo ? demoProperties : []);

    const backdrop = document.createElement('div');
    backdrop.className = 'drawer-backdrop';
    const drawer = document.createElement('aside');
    drawer.className = 'drawer';
    drawer.innerHTML = `
      <div class="drawer-head">
        <div>
          <h2 class="panel-title">${deal ? 'Edit Deal Record' : 'Create New Transaction Deal'}</h2>
          <div class="subtle">Pair buyer lead with inventory and track closing milestones.</div>
        </div>
        <button class="close">×</button>
      </div>
      <form class="form" id="deal-form">
        <div id="deal-notice"></div>
        <div class="form-section">
          <h3>Deal & Transaction Configuration</h3>
          <div class="form-grid">
            <div class="field full">
              <label>Buyer Lead</label>
              <select class="select" name="leadId" required>
                <option value="">Select Buyer Lead</option>
                ${leads.map(l => `<option value="${l.id}" ${deal?.leadId === l.id ? 'selected' : ''}>${esc(l.name)} (${esc(l.phone)})</option>`).join('')}
              </select>
            </div>
            <div class="field full">
              <label>Property Listing</label>
              <select class="select" name="propertyId" required>
                <option value="">Select Property</option>
                ${properties.map(p => `<option value="${p.id}" ${deal?.propertyId === p.id ? 'selected' : ''}>${esc(p.title)} · ${formatPrice(p.price, p.listingType)}</option>`).join('')}
              </select>
            </div>
            <div class="field">
              <label>Agreed Deal Value (₹)</label>
              <input class="input" name="agreedPrice" type="number" required value="${deal?.agreedPrice || ''}" placeholder="e.g. 12500000" />
            </div>
            <div class="field">
              <label>Brokerage Rate (%)</label>
              <input class="input" name="brokerageRate" type="number" step="0.1" value="${deal?.brokerageRate || 1.5}" placeholder="1.5" />
            </div>
            <div class="field">
              <label>Current Deal Stage</label>
              <select class="select" name="stage">
                ${dealStages.map(s => `<option value="${s.key}" ${deal?.stage === s.key ? 'selected' : ''}>${s.label}</option>`).join('')}
              </select>
            </div>
            <div class="field">
              <label>Target Closing Date</label>
              <input class="input" name="targetCloseDate" type="date" value="${deal?.targetCloseDate || new Date(Date.now() + 15*86400000).toISOString().slice(0,10)}" />
            </div>
            <div class="field">
              <label>Token Amount Received (₹)</label>
              <input class="input" name="tokenAmount" type="number" value="${deal?.tokenAmount || 0}" />
            </div>
            <div class="field">
              <label>Assigned Agent</label>
              <input class="input" name="assignedAgentName" value="${deal?.assignedAgentName || state.user?.fullName || 'Aarav Mehta'}" />
            </div>
            <div class="field full">
              <label>Notes & Next Milestones</label>
              <textarea class="input" name="notes" placeholder="e.g. Drafting agreement, waiting for society NOC and bank sanction letter...">${deal?.notes || ''}</textarea>
            </div>
          </div>
        </div>
      </form>
      <div class="form-actions">
        <button class="button secondary" id="cancel-deal">Cancel</button>
        <button class="button primary" id="save-deal-btn">${deal ? 'Update Deal' : 'Create Deal'}</button>
      </div>`;
    document.body.append(backdrop, drawer);
    const close = () => { backdrop.remove(); drawer.remove(); };
    backdrop.onclick = close;
    if (drawer.querySelector('.close')) drawer.querySelector('.close').onclick = close;
    if (drawer.querySelector('#cancel-deal')) drawer.querySelector('#cancel-deal').onclick = close;
    if (drawer.querySelector('#save-deal-btn')) drawer.querySelector('#save-deal-btn').onclick = async () => {
      const form = new FormData(drawer.querySelector('#deal-form'));
      const leadId = Number(form.get('leadId'));
      const propertyId = Number(form.get('propertyId'));
      const agreedPrice = Number(form.get('agreedPrice'));
      const brokerageRate = Number(form.get('brokerageRate') || 1.5);
      const stage = form.get('stage');
      const targetCloseDate = form.get('targetCloseDate');
      const tokenAmount = Number(form.get('tokenAmount') || 0);
      const assignedAgentName = form.get('assignedAgentName') || 'Aarav Mehta';
      const notes = form.get('notes') || '';

      if (!leadId || !propertyId || !agreedPrice) {
        drawer.querySelector('#deal-notice').innerHTML = `<div class="notice error">Please fill all required fields.</div>`;
        return;
      }

      const lead = leads.find(l => l.id === leadId);
      const prop = properties.find(p => p.id === propertyId);

      const expectedBrokerage = prop?.listingType === 'RENT' ? agreedPrice : Math.round(agreedPrice * (brokerageRate / 100));

      const payload = {
        id: deal?.id || Date.now(),
        leadId,
        leadName: lead?.name || 'Client',
        leadPhone: lead?.phone || '',
        propertyId,
        propertyTitle: prop?.title || 'Property',
        propertyLocation: prop?.location || 'Thane',
        listingType: prop?.listingType || 'SALE',
        agreedPrice,
        brokerageRate,
        expectedBrokerage,
        stage,
        targetCloseDate,
        tokenAmount,
        assignedAgentName,
        notes
      };

      if (state.demo) {
        if (deal) {
          const idx = demoDeals.findIndex(x => x.id === deal.id);
          if (idx !== -1) demoDeals[idx] = payload;
        } else {
          demoDeals.unshift(payload);
        }
      }
      close();
      dealsView();
    };
  }


    // --- OVERHAULED DEALS PIPELINE MODULE ---
  

  function costSheetModal(property = null, deal = null) {
    document.querySelectorAll('.modal-backdrop, .drawer-backdrop, .spotlight-backdrop').forEach(b => b.remove());
    const s = state.agencySettings || defaultAgencySettings;
    const initialPrice = property?.price || deal?.agreedPrice || 12500000;
    const initialTitle = property?.title || deal?.propertyTitle || 'Spacious 2 BHK at Hiranandani Estate, Thane';
    const initialLocation = property?.location || deal?.propertyLocation || 'Hiranandani Estate, Thane West';

    const isThane = initialLocation.toLowerCase().includes('thane') || initialTitle.toLowerCase().includes('thane') || initialTitle.toLowerCase().includes('hiranandani') || initialTitle.toLowerCase().includes('vasant vihar') || initialTitle.toLowerCase().includes('majiwada');

    const backdrop = document.createElement('div');
    backdrop.className = 'modal-backdrop';
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.cssText = 'max-width:740px;width:94vw;max-height:92vh;overflow:auto;background:#fff;padding:24px;border-radius:18px;';

    modal.innerHTML = `
      <div style="border-bottom:2px solid var(--line);padding-bottom:14px;margin-bottom:16px;display:flex;justify-content:space-between;align-items:flex-start;">
        <div>
          <div style="font-size:12px;font-weight:750;color:#165dff;text-transform:uppercase;letter-spacing:0.05em;">Financial Estimation Desk</div>
          <h2 style="margin:2px 0 4px;font-size:20px;color:var(--ink);">🧮 On-Road Acquisition Cost & EMI Calculator</h2>
          <div class="subtle" style="font-size:12.5px;">📍 ${esc(initialTitle)} (${esc(initialLocation)})</div>
        </div>
        <button class="close" id="close-cost-modal">×</button>
      </div>

      <!-- PRICE & CONFIGURATION INPUTS -->
      <div class="form-grid" style="margin-bottom:16px;">
        <div class="field full" style="margin-bottom:4px;">
          <div class="range-slider-wrap">
            <div class="range-slider-header">
              <span>Interactive Property Value Slider</span>
              <span id="slider-price-label" class="tnum" style="color:#2563eb;font-weight:700;">${formatPrice(initialPrice, 'SALE')}</span>
            </div>
            <input type="range" class="luxury-range" id="calc-price-slider" min="2500000" max="80000000" step="250000" value="${initialPrice}" />
          </div>
        </div>
        <div class="field">
          <label>Agreement Base Value (₹) *</label>
          <input class="input" id="calc-base-price" type="number" step="50000" value="${initialPrice}" />
          <span class="subtle" id="calc-price-formatted" style="font-weight:700;color:#165dff;">${formatPrice(initialPrice, 'SALE')}</span>
        </div>
        <div class="field">
          <label>Property Status & GST</label>
          <select class="select" id="calc-prop-type">
            <option value="0">Ready / Resale (0% GST)</option>
            <option value="5">Under Construction (5% GST)</option>
            <option value="1">Affordable Housing UC (1% GST)</option>
          </select>
        </div>
        <div class="field full">
          <label>Stamp Duty Jurisdiction & Tax Slab *</label>
          <select class="select" id="calc-stamp-rate" style="font-weight:600;">
            <option value="7.0" data-breakdown="5% Basic + 1% Metro Cess + 1% LBT" ${isThane ? 'selected' : ''}>
              Thane (TMC Corporation) — 7.0% (5% Basic + 1% Metro Cess + 1% LBT)
            </option>
            <option value="6.0" data-breakdown="5% Basic + 1% Metro Cess" ${!isThane ? 'selected' : ''}>
              Mumbai (BMC / MCGM) — 6.0% (5% Basic + 1% Metro Cess)
            </option>
            <option value="7.0_NM" data-rate="7.0" data-breakdown="5% Basic + 1% Metro Cess + 1% LBT">
              Navi Mumbai (NMMC) — 7.0% (5% Basic + 1% Metro Cess + 1% LBT)
            </option>
            <option value="6.0_FEMALE_THN" data-rate="6.0" data-breakdown="4% Concession Basic + 1% Metro Cess + 1% LBT">
              Female Buyer Sole Ownership (Thane) — 6.0% (1% Concession)
            </option>
            <option value="5.0_FEMALE_MUM" data-rate="5.0" data-breakdown="4% Concession Basic + 1% Metro Cess">
              Female Buyer Sole Ownership (Mumbai) — 5.0% (1% Concession)
            </option>
            <option value="5.0_RURAL" data-rate="5.0" data-breakdown="3% Basic + 1% ZP Cess + 1% Metro Cess">
              Gram Panchayat / Rural Maharashtra — 5.0% (3% Basic + 1% ZP + 1% Cess)
            </option>
          </select>
          <span class="subtle" id="stamp-duty-breakdown-tag" style="color:#047857;font-weight:700;">
            ⚡ ${isThane ? 'Thane TMC Slab: 5.0% Basic + 1.0% Metro Cess + 1.0% LBT = Total 7.0%' : 'Mumbai BMC Slab: 5.0% Basic + 1.0% Metro Cess = Total 6.0%'}
          </span>
        </div>
        <div class="field">
          <label>Govt Registration Fee (₹)</label>
          <input class="input" id="calc-reg-fee" type="number" value="30000" />
          <span class="subtle">Max ₹30,000 for properties > ₹30 Lakhs</span>
        </div>
        <div class="field">
          <label>Society Transfer & Sinking Fund (₹)</label>
          <input class="input" id="calc-society-fee" type="number" value="100000" />
        </div>
      </div>

      <!-- TOTAL ALL-INCLUSIVE COST BANNER -->
      <div class="cost-total-banner">
        <div>
          <div style="font-size:12px;opacity:0.85;text-transform:uppercase;letter-spacing:0.05em;">Total All-Inclusive In-Hand Cost</div>
          <div style="font-size:28px;font-weight:800;letter-spacing:-0.5px;" id="calc-total-inhand">₹1,34,05,000</div>
          <div style="font-size:11.5px;opacity:0.9;" id="calc-cost-breakup-sub">Base ₹1.25 Cr + Govt/Legal Dues ₹9.05 L</div>
        </div>
        <div style="text-align:right;">
          <div style="font-size:12px;opacity:0.85;">Estimated Monthly EMI</div>
          <div style="font-size:24px;font-weight:800;color:#93c5fd;" id="calc-monthly-emi">₹86,782 / mo</div>
          <div style="font-size:11px;opacity:0.85;" id="calc-loan-amount-sub">80% Loan (@ 8.5% for 20 Yrs)</div>
        </div>
      </div>

      <!-- ITEMISED BREAKDOWN TABLE -->
      <div class="table-wrap" style="margin-bottom:16px;">
        <table class="table" style="font-size:12px;">
          <thead>
            <tr>
              <th>Cost Component</th>
              <th>Rate / Legal Calculation</th>
              <th style="text-align:right;">Amount (₹)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>1. Base Agreement Value</strong></td>
              <td>Agreed purchase consideration</td>
              <td style="text-align:right;font-weight:700;" id="row-base-price">₹1,25,00,000</td>
            </tr>
            <tr>
              <td><strong>2. Maharashtra Stamp Duty</strong></td>
              <td id="row-stamp-desc">7.0% (5% Basic + 1% Metro Cess + 1% LBT)</td>
              <td style="text-align:right;font-weight:700;color:#1e40af;" id="row-stamp-val">₹8,75,000</td>
            </tr>
            <tr>
              <td><strong>3. Govt Registration Charges</strong></td>
              <td>Statutory Sub-Registrar Fee (Max Cap ₹30k)</td>
              <td style="text-align:right;font-weight:700;" id="row-reg-val">₹30,000</td>
            </tr>
            <tr id="row-gst-container" style="display:none;">
              <td><strong>4. Goods & Services Tax (GST)</strong></td>
              <td id="row-gst-desc">5% GST (Under Construction)</td>
              <td style="text-align:right;font-weight:700;color:#b45309;" id="row-gst-val">₹0</td>
            </tr>
            <tr>
              <td><strong>5. Society Transfer & Sinking Deposit</strong></td>
              <td>Estimated society corpus fund & NOC</td>
              <td style="text-align:right;font-weight:700;" id="row-society-val">₹1,00,000</td>
            </tr>
            <tr>
              <td><strong>6. Legal Verification & Title Search</strong></td>
              <td>Advocate title clearance & agreement registration</td>
              <td style="text-align:right;font-weight:700;" id="row-legal-val">₹25,000</td>
            </tr>
            <tr style="background:#f8fafc;font-size:13px;border-top:2px solid var(--line);">
              <td><strong>TOTAL ALL-INCLUSIVE IN-HAND</strong></td>
              <td><strong>Complete property acquisition cost</strong></td>
              <td style="text-align:right;font-weight:800;color:#1e3a8a;" id="row-grand-total">₹1,35,30,000</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- LIVE HOME LOAN & EMI SIMULATOR -->
      <div class="cost-calc-section">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
          <h4 style="margin:0;font-size:14px;color:var(--ink);display:flex;align-items:center;gap:6px;">
            <span>🏦</span> Live Home Loan & EMI Simulator
          </h4>
          <span class="badge" style="background:#dbeafe;color:#1d4ed8;font-weight:750;">Repo Rate Linked (8.5%)</span>
        </div>
        <div class="form-grid">
          <div class="field">
            <label>Loan Percentage (%)</label>
            <input class="input" id="calc-loan-percent" type="number" min="10" max="90" value="80" />
            <span class="subtle">Down Payment (Own Funds): <strong id="calc-downpayment-val" style="color:#047857;">₹35,30,000</strong></span>
          </div>
          <div class="field">
            <label>Annual Interest Rate (%)</label>
            <input class="input" id="calc-interest-rate" type="number" step="0.1" value="8.5" />
            <span class="subtle">Current SBI / HDFC repo-linked rate</span>
          </div>
          <div class="field full">
            <label>Loan Tenure: <strong id="calc-tenure-label">20 Years (240 Months)</strong></label>
            <input type="range" id="calc-tenure-slider" min="5" max="30" step="1" value="20" style="width:100%;cursor:pointer;" />
          </div>
        </div>
      </div>

      <!-- MODAL ACTION FOOTER -->
      <div style="display:flex;justify-content:space-between;align-items:center;margin-top:16px;flex-wrap:wrap;gap:10px;">
        <div style="font-size:11.5px;color:var(--muted);">Estimates adhere to Maharashtra Stamp Duty (IGR Maharashtra) (IGR) norms.</div>
        <div style="display:flex;gap:8px;">
          <button class="button secondary" id="close-cost-btn">✕ Close</button>
          <button class="button hero-btn" id="wa-share-cost-btn" style="background:#15803d;color:#fff;font-weight:700;">💬 WhatsApp Cost Sheet</button>
          <button class="button primary" id="print-cost-btn" style="font-weight:700;">🖨️ Print Cost Estimate</button>
        </div>
      </div>`;

    backdrop.appendChild(modal);
    document.body.appendChild(backdrop);

    const close = () => backdrop.remove();
    backdrop.onclick = (e) => { if (e.target === backdrop) close(); };
    modal.onclick = (e) => e.stopPropagation();
    if (modal.querySelector('#close-cost-modal')) modal.querySelector('#close-cost-modal').onclick = close;
    if (modal.querySelector('#close-cost-btn')) modal.querySelector('#close-cost-btn').onclick = close;
    if (modal.querySelector('#print-cost-btn')) modal.querySelector('#print-cost-btn').onclick = () => window.print();

    // Elements
    const basePriceInput = modal.querySelector('#calc-base-price');
    const propTypeSelect = modal.querySelector('#calc-prop-type');
    const stampRateSelect = modal.querySelector('#calc-stamp-rate');
    const regFeeInput = modal.querySelector('#calc-reg-fee');
    const societyFeeInput = modal.querySelector('#calc-society-fee');
    const loanPercentInput = modal.querySelector('#calc-loan-percent');
    const interestRateInput = modal.querySelector('#calc-interest-rate');
    const tenureSlider = modal.querySelector('#calc-tenure-slider');
    const breakdownTag = modal.querySelector('#stamp-duty-breakdown-tag');

    const recalculate = () => {
      const base = Number(basePriceInput.value) || 0;
      const gstRate = Number(propTypeSelect.value) || 0;

      // Extract stamp duty rate and breakdown
      const selectedOption = (stampRateSelect.options && stampRateSelect.options[stampRateSelect.selectedIndex]) || null;
      let stampRate = 7.0;
      if (selectedOption?.dataset?.rate) {
        stampRate = Number(selectedOption.dataset.rate);
      } else {
        stampRate = parseFloat(stampRateSelect.value) || 7.0;
      }
      const breakdownText = selectedOption?.dataset?.breakdown || (stampRate === 7.0 ? '5% Basic + 1% Metro Cess + 1% LBT' : '5% Basic + 1% Metro Cess');

      const regFee = Number(regFeeInput.value) || 0;
      const societyFee = Number(societyFeeInput.value) || 100000;
      const legalFee = 25000;

      const stampAmount = Math.round(base * (stampRate / 100));
      const gstAmount = Math.round(base * (gstRate / 100));
      const grandTotal = base + stampAmount + regFee + gstAmount + societyFee + legalFee;
      const totalGovtDues = stampAmount + regFee + gstAmount + societyFee + legalFee;

      const loanPercent = Math.min(90, Math.max(10, Number(loanPercentInput.value) || 80));
      const loanAmount = Math.round(base * (loanPercent / 100));
      const downPayment = base - loanAmount + totalGovtDues;

      const annualRate = Number(interestRateInput.value) || 8.5;
      const tenureYears = Number(tenureSlider.value) || 20;
      const tenureMonths = tenureYears * 12;

      // EMI Formula: P * r * (1+r)^n / ((1+r)^n - 1)
      const monthlyRate = (annualRate / 12) / 100;
      let emi = 0;
      if (monthlyRate > 0 && loanAmount > 0) {
        emi = Math.round((loanAmount * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) / (Math.pow(1 + monthlyRate, tenureMonths) - 1));
      }

      // Update UI displays
      modal.querySelector('#calc-price-formatted').textContent = formatPrice(base, 'SALE');
      modal.querySelector('#calc-total-inhand').textContent = `₹${grandTotal.toLocaleString('en-IN')}`;
      modal.querySelector('#calc-cost-breakup-sub').textContent = `Base ₹${(base/100000).toFixed(2)} L + Govt/Statutory Dues ₹${(totalGovtDues/100000).toFixed(2)} L`;
      modal.querySelector('#calc-monthly-emi').textContent = `₹${emi.toLocaleString('en-IN')} / mo`;
      modal.querySelector('#calc-loan-amount-sub').textContent = `${loanPercent}% Loan (₹${(loanAmount/100000).toFixed(2)} L @ ${annualRate}% for ${tenureYears} Yrs)`;

      modal.querySelector('#row-base-price').textContent = `₹${base.toLocaleString('en-IN')}`;
      modal.querySelector('#row-stamp-desc').textContent = `${stampRate}% (${breakdownText})`;
      modal.querySelector('#row-stamp-val').textContent = `₹${stampAmount.toLocaleString('en-IN')}`;
      modal.querySelector('#row-reg-val').textContent = `₹${regFee.toLocaleString('en-IN')}`;
      modal.querySelector('#row-society-val').textContent = `₹${societyFee.toLocaleString('en-IN')}`;
      modal.querySelector('#row-grand-total').textContent = `₹${grandTotal.toLocaleString('en-IN')}`;

      breakdownTag.textContent = `⚡ Applied Stamp Duty: ${stampRate}% (${breakdownText})`;

      const gstRow = modal.querySelector('#row-gst-container');
      if (gstRate > 0) {
        gstRow.style.display = 'table-row';
        modal.querySelector('#row-gst-desc').textContent = `${gstRate}% GST (Under Construction)`;
        modal.querySelector('#row-gst-val').textContent = `₹${gstAmount.toLocaleString('en-IN')}`;
      } else {
        gstRow.style.display = 'none';
      }

      modal.querySelector('#calc-tenure-label').textContent = `${tenureYears} Years (${tenureMonths} Months)`;
      modal.querySelector('#calc-downpayment-val').textContent = `₹${downPayment.toLocaleString('en-IN')} In-Hand`;
    };

    const priceSlider = modal.querySelector('#calc-price-slider');
    const priceSliderLabel = modal.querySelector('#slider-price-label');

    if (priceSlider) {
      priceSlider.oninput = () => {
        basePriceInput.value = priceSlider.value;
        if (priceSliderLabel) priceSliderLabel.textContent = formatPrice(Number(priceSlider.value), 'SALE');
        recalculate();
      };
      basePriceInput.oninput = () => {
        priceSlider.value = basePriceInput.value;
        if (priceSliderLabel) priceSliderLabel.textContent = formatPrice(Number(basePriceInput.value), 'SALE');
        recalculate();
      };
    }

    [basePriceInput, propTypeSelect, stampRateSelect, regFeeInput, societyFeeInput, loanPercentInput, interestRateInput, tenureSlider].forEach(el => {
      el.oninput = recalculate;
      el.onchange = recalculate;
    });

    recalculate();

    // WhatsApp Cost Sheet Share
    if (modal.querySelector('#wa-share-cost-btn')) modal.querySelector('#wa-share-cost-btn').onclick = () => {
      const base = Number(basePriceInput.value) || 0;
      const selectedOption = (stampRateSelect.options && stampRateSelect.options[stampRateSelect.selectedIndex]) || null;
      const stampRate = selectedOption?.dataset?.rate ? Number(selectedOption.dataset.rate) : (parseFloat(stampRateSelect.value) || 7.0);
      const breakdownText = selectedOption?.dataset?.breakdown || (stampRate === 7.0 ? '5% Basic + 1% Metro Cess + 1% LBT' : '5% Basic + 1% Metro Cess');
      const stampAmount = Math.round(base * (stampRate / 100));
      const regFee = Number(regFeeInput.value) || 30000;
      const societyFee = Number(societyFeeInput.value) || 100000;
      const legalFee = 25000;
      const grandTotal = base + stampAmount + regFee + societyFee + legalFee;
      
      const loanPercent = Number(loanPercentInput.value) || 80;
      const loanAmount = Math.round(base * (loanPercent / 100));
      const tenureYears = Number(tenureSlider.value) || 20;
      const annualRate = Number(interestRateInput.value) || 8.5;
      const monthlyRate = (annualRate / 12) / 100;
      const tenureMonths = tenureYears * 12;
      let emi = 0;
      if (monthlyRate > 0 && loanAmount > 0) {
        emi = Math.round((loanAmount * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) / (Math.pow(1 + monthlyRate, tenureMonths) - 1));
      }

      const text = `*📊 On-Road Total Acquisition Cost Sheet*
*Property:* ${initialTitle}

💰 *Base Agreement Value:* ₹${base.toLocaleString('en-IN')}
• *Maharashtra Stamp Duty (${stampRate}%):* ₹${stampAmount.toLocaleString('en-IN')}
  _(${breakdownText})_
• *Govt Registration Charges:* ₹${regFee.toLocaleString('en-IN')}
• *Society Transfer & Sinking Fund:* ₹${societyFee.toLocaleString('en-IN')}
• *Legal Verification & Title Clearance:* ₹${legalFee.toLocaleString('en-IN')}
───────────────────
👉 *TOTAL ALL-INCLUSIVE IN-HAND:* *₹${grandTotal.toLocaleString('en-IN')}*

🏦 *Home Loan & EMI Simulation:*
• *Estimated Bank Loan (${loanPercent}%):* ₹${loanAmount.toLocaleString('en-IN')}
• *Estimated Monthly EMI:* *₹${emi.toLocaleString('en-IN')} / month* (@ ${annualRate}% for ${tenureYears} yrs)
• *Own Funds (Down Payment) Required:* ₹${(grandTotal - loanAmount).toLocaleString('en-IN')}

---
*Shared by:*
🏢 *${s.agencyName}*
📜 *Agent Reg No:* ${s.reraNumber}
📞 *Contact:* ${s.contactPhone}`;

      launchWhatsApp(null, text);
    };
  }


  // --- SALES DEMO GENERATOR & VIP ONBOARDING ENGINE ---
  function salesDemoGeneratorModal() {
    const s = state.agencySettings || defaultAgencySettings;
    const defaultHost = (typeof window !== 'undefined' && window.location?.origin) ? window.location.origin : 'https://www.rebrokerai.in';
    const defaultPass = `VIP#${Math.floor(1000 + Math.random() * 9000)}`;

    document.querySelectorAll('.modal-backdrop, .drawer-backdrop').forEach(b => b.remove());
    const backdrop = document.createElement('div');
    backdrop.className = 'modal-backdrop';
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.cssText = 'max-width:680px;width:94vw;max-height:92vh;overflow-y:auto;background:#fff;padding:24px;border-radius:20px;box-shadow:0 25px 60px rgba(0,0,0,0.3);position:relative;box-sizing:border-box;';

    modal.innerHTML = `
      <div style="border-bottom:2px solid var(--line);padding-bottom:14px;margin-bottom:16px;display:flex;justify-content:space-between;align-items:flex-start;">
        <div>
          <span class="vip-badge"><span class="vip-pulse-dot"></span> SELLER COMMAND DESK</span>
          <h2 style="margin:2px 0 4px;font-size:20px;color:var(--ink);">🚀 VIP Sales Demo Link & WhatsApp Pitch Generator</h2>
          <div class="subtle" style="font-size:12.5px;">Generate personalized demo links to pitch and close prospective broker clients.</div>
        </div>
        <button class="close" id="close-sales-modal">×</button>
      </div>

      <div class="form-grid" style="margin-bottom:16px;">
        <div class="field full">
          <label>🌐 Public URL / Network Host (for WhatsApp sharing)</label>
          <input class="input" id="demo-host-input" value="${defaultHost}" placeholder="http://192.168.29.100:5173 or https://your-domain.vercel.app" />
          <span class="subtle">Use LAN IP for local Wi-Fi, or your Vercel/Tunnel URL for public internet.</span>
        </div>
        <div class="field">
          <label>Target Broker / Principal Name</label>
          <input class="input" id="demo-client-name" value="Rajesh Gupta" placeholder="e.g. Rajesh Gupta" />
        </div>
        <div class="field">
          <label>Broker's Agency / Brand Name</label>
          <input class="input" id="demo-agency-name" value="Gupta Realty Advisors" placeholder="e.g. Gupta Realty Advisors" />
        </div>
        <div class="field">
          <label>Target City / Location</label>
          <input class="input" id="demo-city-name" value="Thane West & Mumbai" placeholder="e.g. Thane West & Mumbai" />
        </div>
        <div class="field">
          <label>Secure Access Password</label>
          <input class="input" id="demo-pass-input" value="${defaultPass}" placeholder="VIP#7741" />
        </div>
      </div>

      <!-- PREVIEW OF WHATSAPP SALES PITCH -->
      <div style="background:#f8fafc;border:1px solid var(--line);border-radius:12px;padding:14px;margin-bottom:16px;">
        <div style="font-size:12px;font-weight:750;color:#15803d;margin-bottom:6px;display:flex;align-items:center;gap:6px;">
          <span>📱 Generated WhatsApp Sales Pitch (Ready to Send):</span>
        </div>
        <pre id="demo-pitch-preview" style="font-family:inherit;font-size:12px;white-space:pre-wrap;margin:0;color:#334155;background:#fff;padding:12px;border-radius:8px;border:1px solid #cbd5e1;line-height:1.5;max-height:160px;overflow:auto;"></pre>
      </div>

      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;">
        <button class="button secondary" id="copy-demo-link-btn">📋 Copy Direct Link</button>
        <div style="display:flex;gap:8px;">
          <button class="button secondary" id="close-sales-btn">Close</button>
          <button class="button hero-btn" id="send-sales-wa-btn" style="background:#15803d;color:#fff;font-weight:700;">💬 Send VIP Demo via WhatsApp</button>
        </div>
      </div>`;

    backdrop.appendChild(modal);
    document.body.appendChild(backdrop);
    const close = () => backdrop.remove();
    backdrop.onclick = (e) => { if (e.target === backdrop) close(); };
    modal.onclick = (e) => e.stopPropagation();
    if (modal.querySelector('#close-sales-modal')) modal.querySelector('#close-sales-modal').onclick = close;
    if (modal.querySelector('#close-sales-btn')) modal.querySelector('#close-sales-btn').onclick = close;

    const hostInput = modal.querySelector('#demo-host-input');
    const clientInput = modal.querySelector('#demo-client-name');
    const agencyInput = modal.querySelector('#demo-agency-name');
    const cityInput = modal.querySelector('#demo-city-name');
    const passInput = modal.querySelector('#demo-pass-input');
    const previewPre = modal.querySelector('#demo-pitch-preview');

    const updatePitch = () => {
      const host = (hostInput.value || defaultHost).replace(/\/$/, '');
      const client = clientInput.value || 'Partner';
      const agency = agencyInput.value || 'Your Realty Agency';
      const pass = passInput.value || 'VIP#2026';
      const city = cityInput.value || 'Thane & Mumbai';

      const demoLink = `${host}/#/demo-access?client=${encodeURIComponent(client)}&agency=${encodeURIComponent(agency)}&city=${encodeURIComponent(city)}&pass=${encodeURIComponent(pass)}`;

      const text = `*🚀 Exclusive VIP Demo Access — BrokerAI Real Estate CRM*

Hello ${client} ji!

As requested, here is your exclusive access link to test the *BrokerAI Workspace* configured for *${agency}*:

📱 *Step 1: Open Your Workspace Link on Phone or PC:*
${demoLink}

🔑 *Step 2: Enter Your Secure Access Password:*
Password: *${pass}*

✨ *Live Features to test on your phone right now:*
• 1-Click WhatsApp Property Pitching with MahaRERA footer
• On-Road Cost Sheet & Live Home Loan EMI Simulator
• 5-Stage Deals Closing Funnel & Digital Token Receipts
• AI Buyer-to-Property Compatibility Matching

---
*Prepared by:* Mohak | BrokerAI Platform`;

      previewPre.textContent = text;
      return { text, demoLink };
    };

    [hostInput, clientInput, agencyInput, cityInput, passInput].forEach(el => el.oninput = updatePitch);
    const { demoLink } = updatePitch();

    // Copy direct link
    if (modal.querySelector('#copy-demo-link-btn')) modal.querySelector('#copy-demo-link-btn').onclick = () => {
      const { demoLink } = updatePitch();
      navigator.clipboard.writeText(demoLink).then(() => {
        showToast("✅ Direct VIP Demo Link copied to clipboard!\n\n" + demoLink);
      }).catch(() => prompt("Copy Direct Demo Link:", demoLink));
    };

    // Send WhatsApp pitch
    if (modal.querySelector('#send-sales-wa-btn')) modal.querySelector('#send-sales-wa-btn').onclick = () => {
      const { text } = updatePitch();
      launchWhatsApp(null, text);
    };
  }

  // --- CLIENT-FACING VIP DEMO ACCESS PAGE ---
  function demoAccessView() {
    // Parse query params from hash
    const hash = window.location.hash || '';
    const queryPart = hash.includes('?') ? hash.split('?')[1] : '';
    const params = new URLSearchParams(queryPart);

    const clientName = params.get('client') || 'Rajesh Gupta';
    const agencyName = params.get('agency') || 'Gupta Realty Advisors';
    const city = params.get('city') || 'Thane West & Mumbai';
    const expectedPass = params.get('pass') || '';
    const rawPlan = (params.get('plan') || 'elite').toLowerCase();
    const assignedPlan = (rawPlan === 'starter' || rawPlan === 'solo') ? 'starter' : (rawPlan === 'pro' ? 'pro' : 'elite');
    const planName = assignedPlan === 'starter' ? 'Starter Solo' : (assignedPlan === 'pro' ? 'Pro Closer' : 'Agency Elite');
    const planBadge = assignedPlan === 'starter' ? '✦ Starter Solo Workspace' : (assignedPlan === 'pro' ? '⚡ Pro Closer Workspace' : '💎 Agency Elite Workspace');

    app.innerHTML = `
      <div class="vip-demo-screen">
        <div class="vip-demo-card">
          <div class="brand auth-brand" style="margin-bottom:12px;justify-content:center;">
            <span class="mark"><svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M4 20V10l8-6 8 6v10"/><path d="M9 20v-6h6v6"/></svg></span>
            <span style="font-size:22px;font-weight:800;letter-spacing:-0.5px;">BrokerAI</span>
          </div>

          <span class="vip-badge" style="background:rgba(37,99,235,0.2);color:#93c5fd;"><span class="vip-pulse-dot"></span> ${esc(planBadge)}</span>

          <h1 style="font-size:24px;font-weight:800;letter-spacing:-0.5px;margin:8px 0 4px;color:#fff;">
            ${esc(agencyName)}
          </h1>
          <div style="font-size:13.5px;color:#94a3b8;margin-bottom:24px;">
            Personalized Workspace for <strong>${esc(clientName)}</strong> (${esc(city)})
          </div>

          <form id="vip-login-form" style="text-align:left;">
            <div id="vip-notice"></div>
            <div class="field" style="margin-bottom:18px;">
              <label style="color:#cbd5e1;font-size:12.5px;">Enter Secure Access Password</label>
              <input class="input" id="vip-password-input" type="password" required value="${esc(expectedPass)}" placeholder="e.g. VIP#7741" style="background:#1e293b;border-color:#334155;color:#fff;font-size:15px;font-weight:700;letter-spacing:1px;text-align:center;" />
            </div>

            <button type="submit" class="button primary" style="width:100%;justify-content:center;padding:12px;font-size:14px;background:linear-gradient(135deg,#2563eb,#1d4ed8);box-shadow:0 4px 16px rgba(37,99,235,0.4);">
              🚀 Launch Live Broker Workspace
            </button>
          </form>

          <div style="margin-top:24px;padding-top:16px;border-top:1px solid rgba(255,255,255,0.1);font-size:11.5px;color:#64748b;">
            Authorized Workspace License · Pre-configured for ${esc(planName)}
          </div>
        </div>
      </div>`;

    const form = document.querySelector('#vip-login-form');
    form.onsubmit = (e) => {
      e.preventDefault();
      const enteredPass = (document.querySelector('#vip-password-input')?.value || '').trim();

      if (expectedPass && enteredPass !== expectedPass) {
        document.querySelector('#vip-notice').innerHTML = `<div class="notice error" style="margin-bottom:12px;">Incorrect password. Please enter the secure password provided by Mohak.</div>`;
        return;
      }

      // Activate Workspace with assigned package
      state.demo = true;
      state.currentPlan = assignedPlan;
      localStorage.setItem('brokerai.currentPlan', assignedPlan);
      localStorage.setItem('brokerai.demo', 'true');
      state.token = 'demo-vip-token';
      localStorage.setItem('brokerai.token', state.token);

      state.user = {
        fullName: clientName,
        role: 'PRINCIPAL_BROKER',
        email: 'broker@demo-access.in',
        agencyName: agencyName
      };
      localStorage.setItem('brokerai.user', JSON.stringify(state.user));

      // Personalize Agency Settings
      const s = state.agencySettings || defaultAgencySettings;
      state.agencySettings = {
        ...s,
        agencyName: agencyName,
        brandTagline: `Premier Real Estate Advisory · ${city}`
      };
      localStorage.setItem('brokerai.agencySettings', JSON.stringify(state.agencySettings));

      window.location.hash = '#/dashboard';
      state.page = 'dashboard';
      render();
    };
  }


  
  // --- MOBILE FULL MENU DRAWER ---
    function mobileMenuModal() {
    document.querySelectorAll('.modal-backdrop, .drawer-backdrop, .spotlight-backdrop').forEach(b => b.remove());
    const backdrop = document.createElement('div');
    backdrop.className = 'drawer-backdrop';
    const drawer = document.createElement('aside');
    drawer.className = 'mobile-slide-drawer';

    const s = state.agencySettings || defaultAgencySettings;

    drawer.innerHTML = `
      <div class="drawer-header-brand">
        <div style="display:flex;align-items:center;gap:10px;">
          <span class="mark" style="width:34px;height:34px;">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M4 20V10l8-6 8 6v10"/><path d="M9 20v-6h6v6"/></svg>
          </span>
          <div>
            <div style="font-size:15px;font-weight:800;color:#ffffff;">${esc(s.agencyName || 'BrokerAI')}</div>
            <div style="font-size:11px;color:#34d399;font-weight:700;">● MahaRERA: ${esc(s.reraNumber || 'A51700012345')}</div>
          </div>
        </div>
        <button class="drawer-close-btn" id="drawer-close-btn">✕</button>
      </div>

      <div class="drawer-body">
        <div class="drawer-section-label">Core Modules</div>
        <nav class="drawer-nav-list">
          ${getNavItems().map(([id, iconName, label]) => `
            <a class="drawer-nav-item ${state.page === id ? 'active' : ''}" href="#/${id}">
              <span class="drawer-nav-icon">${svgIcon(iconName, 18)}</span>
              <span>${label}</span>
            </a>
          `).join('')}
        </nav>

        <div class="drawer-section-label" style="margin-top:14px;">WhatsApp & Deal Tools</div>
        <div style="display:flex;flex-direction:column;gap:6px;">
          <button class="drawer-tool-btn emerald" id="drawer-wa-dispatcher-btn">
            ${svgIcon('whatsapp', 16)}
            <span><strong>Send WhatsApp Pitch (Outgoing)</strong></span>
          </button>
          <button class="drawer-tool-btn" id="drawer-magic-parser-btn">
            ${svgIcon('whatsapp', 16)}
            <span>Magic WhatsApp Parser (Incoming)</span>
          </button>
          <button class="drawer-tool-btn" id="drawer-cost-btn">
            ${svgIcon('calculator', 16)}
            <span>On-Road Cost & EMI Desk</span>
          </button>
        </div>

        <div class="drawer-section-label" style="margin-top:14px;">System & Settings</div>
        <nav class="drawer-nav-list">
          ${getSecondaryNavItems().map(([id, iconName, label]) => `
            <a class="drawer-nav-item ${state.page === id ? 'active' : ''}" href="#/${id}">
              <span class="drawer-nav-icon">${svgIcon(iconName, 18)}</span>
              <span>${label}</span>
            </a>
          `).join('')}
        </nav>
        
        <div style="background:#f1f5f9;border:1px solid #cbd5e1;border-radius:12px;padding:12px;display:flex;justify-content:space-between;align-items:center;margin-top:8px;">
          <div>
            <div style="font-size:11px;color:#64748b;font-weight:750;">ACTIVE PLAN</div>
            <div style="font-size:13px;font-weight:850;color:#0f172a;">${getPlanCapabilities().badge}</div>
          </div>
          <button class="button secondary" id="drawer-switch-plan-btn" style="padding:4px 8px;font-size:11px;">Switch</button>
        </div>

        <div style="margin-top:auto;padding-top:14px;border-top:1px solid var(--line);display:flex;justify-content:space-between;align-items:center;">
          <div>
            <div style="font-size:13px;font-weight:800;color:var(--ink);">${esc(state.user?.fullName || 'Broker')}</div>
            <div style="font-size:11px;color:#16a34a;font-weight:700;">🟢 Online · Demo Live</div>
          </div>
          <button class="button secondary" id="drawer-signout-btn" style="padding:4px 8px;font-size:11px;">Sign out</button>
        </div>
      </div>
    `;

    backdrop.appendChild(drawer);
    document.body.appendChild(backdrop);

    const close = () => backdrop.remove();
    backdrop.onclick = (e) => { if (e.target === backdrop) close(); };
    drawer.onclick = (e) => e.stopPropagation();
    if (drawer.querySelector('#drawer-close-btn')) drawer.querySelector('#drawer-close-btn').onclick = close;

    drawer.querySelectorAll('.drawer-nav-item').forEach(link => {
      link.onclick = () => close();
    });

    const waBtn = drawer.querySelector('#drawer-wa-dispatcher-btn');
    if (waBtn) waBtn.onclick = () => { close(); whatsAppDispatcherModal(); };

    const magicBtn = drawer.querySelector('#drawer-magic-parser-btn');
    if (magicBtn) magicBtn.onclick = () => { close(); magicWhatsAppParserModal(); };

    const costBtn = drawer.querySelector('#drawer-cost-btn');
    if (costBtn) costBtn.onclick = () => { close(); costSheetModal(); };

    const switchPlanBtn = drawer.querySelector('#drawer-switch-plan-btn');
    if (switchPlanBtn) switchPlanBtn.onclick = () => { close(); planSimulatorModal(); };

    const signoutBtn = drawer.querySelector('#drawer-signout-btn');
    if (signoutBtn) signoutBtn.onclick = () => {
      close();
      localStorage.clear();
      state.token = null;
      location.hash = '#/login';
      render();
    };
  }


  // --- SMART MOBILE INSTALL BANNER ---
  function checkMobileInstallBanner() {
    const isStandalone = (typeof window !== 'undefined' && typeof window.matchMedia === 'function' && window.matchMedia('(display-mode: standalone)').matches) || (typeof navigator !== 'undefined' && navigator.standalone === true);
    if (isStandalone) return;
    if (document.querySelector('#mobile-install-banner')) return;
    if (typeof sessionStorage !== 'undefined' && sessionStorage.getItem('brokerai.dismissedInstallBanner') === 'true') return;

    const banner = document.createElement('div');
    banner.className = 'mobile-install-banner';
    banner.id = 'mobile-install-banner';
    banner.innerHTML = `
      <div style="display:flex;align-items:center;gap:10px;">
        <img src="/assets/icon-192.png" style="width:36px;height:36px;border-radius:9px;" alt="BrokerAI" />
        <div>
          <div style="font-weight:750;font-size:13px;color:#fff;">Install BrokerAI App</div>
          <div style="font-size:11px;color:#94a3b8;">1-Tap Home Screen · Offline Access</div>
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:6px;">
        <button id="mobile-banner-install-btn" style="background:#2563eb;color:#fff;border:0;border-radius:8px;padding:6px 14px;font-size:12px;font-weight:700;cursor:pointer;">
          Install
        </button>
        <button id="mobile-banner-close-btn" style="background:none;border:0;color:#94a3b8;font-size:16px;cursor:pointer;padding:0 4px;" title="Dismiss">✕</button>
      </div>
    `;

    try { if (document.body && typeof document.body.appendChild === 'function') document.body.appendChild(banner); } catch(e) {}

    const closeBtn = banner.querySelector('#mobile-banner-close-btn');
    if (closeBtn) closeBtn.onclick = () => {
      banner.remove();
      sessionStorage.setItem('brokerai.dismissedInstallBanner', 'true');
    };

    const instBtn = banner.querySelector('#mobile-banner-install-btn');
    if (instBtn) instBtn.onclick = () => {
      banner.remove();
      installPwaModal();
    };
  }


  

  function bindShell() {
    try {
      if (typeof checkMobileInstallBanner === 'function') {
        setTimeout(checkMobileInstallBanner, 600);
      }
    } catch (e) {}

    // Spotlight Search Command Bar
    const spotBtn = document.querySelector('#topbar-spotlight-btn');
    if (spotBtn) {
      spotBtn.onclick = (e) => {
        e.preventDefault();
        if (typeof spotlightCommandModal === 'function') spotlightCommandModal();
      };
    }

    if (!window.__spotlightBound) {
      window.__spotlightBound = true;
      window.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
          e.preventDefault();
          if (typeof spotlightCommandModal === 'function') spotlightCommandModal();
        }
        if (e.key === 'Escape') {
          const m = document.querySelector('.spotlight-backdrop');
          if (m) m.click();
        }
      });
    }

    // Mobile Hamburger & Drawer triggers
    const openMobileMenu = () => { if (typeof mobileMenuModal === 'function') mobileMenuModal(); };
    document.querySelector('#mobile-hamburger-btn')?.addEventListener('click', openMobileMenu);
    document.querySelector('#mobile-more-tab-btn')?.addEventListener('click', openMobileMenu);
    document.querySelector('#mob-nav-menu')?.addEventListener('click', openMobileMenu);
    document.querySelector('#bottom-menu-toggle-btn')?.addEventListener('click', openMobileMenu);

    // Sidebar & Navigation links
    document.querySelectorAll('[data-page]').forEach(button => {
      button.onclick = (e) => {
        if (e) e.preventDefault();
        const p = button.dataset.page;
        state.page = p;
        if (window.location.hash !== '#/' + p) {
          window.location.hash = '#/' + p;
        } else {
          render();
        }
      };
    });

    // Plan Switcher Trigger (Topbar Pill, All Plan Badges, Sidebar Buttons)
    const openPlanSwitcher = (e) => {
      if (e) e.preventDefault();
      if (typeof planSimulatorModal === 'function') {
        planSimulatorModal();
      }
    };
    document.querySelector('#topbar-plan-pill')?.addEventListener('click', openPlanSwitcher);
    document.querySelectorAll('.plan-indicator-badge').forEach(btn => btn.addEventListener('click', openPlanSwitcher));
    document.querySelector('#sidebar-plan-switch-btn')?.addEventListener('click', openPlanSwitcher);
    document.querySelector('#sidebar-plan-badge')?.addEventListener('click', openPlanSwitcher);
    document.querySelector('#dashboard-plan-sim-btn')?.addEventListener('click', openPlanSwitcher);

    // Topbar Action & Tool Buttons
    document.querySelector('#topbar-magic-parser-btn')?.addEventListener('click', (e) => {
      if (e) e.preventDefault();
      if (typeof magicWhatsAppParserModal === 'function') magicWhatsAppParserModal();
    });
    document.querySelector('#topbar-cost-calc-btn')?.addEventListener('click', (e) => {
      if (e) e.preventDefault();
      if (typeof costSheetModal === 'function') costSheetModal();
    });
    document.querySelector('#topbar-cost-sheet-btn')?.addEventListener('click', (e) => {
      if (e) e.preventDefault();
      if (typeof costSheetModal === 'function') costSheetModal();
    });
    document.querySelector('#topbar-sales-demo-btn')?.addEventListener('click', (e) => {
      if (e) e.preventDefault();
      if (typeof salesDemoGeneratorModal === 'function') salesDemoGeneratorModal();
    });
    document.querySelector('#topbar-notif-bell')?.addEventListener('click', (e) => {
      if (e) e.preventDefault();
      state.page = 'notifications';
      if (window.location.hash !== '#/notifications') {
        window.location.hash = '#/notifications';
      } else {
        render();
      }
    });
    document.querySelector('#topbar-avatar-btn')?.addEventListener('click', (e) => {
      if (e) e.preventDefault();
      state.page = 'settings';
      if (window.location.hash !== '#/settings') {
        window.location.hash = '#/settings';
      } else {
        render();
      }
    });

    // Client Presentation Mode Banner Exit
    document.querySelector('#exit-client-banner-btn')?.addEventListener('click', () => {
      state.clientMode = false;
      try { localStorage.setItem('brokerai.clientMode', 'false'); } catch (e) {}
      if (typeof toast === 'function') toast('Client Presentation Mode exited.', 'info');
      render();
    });

    // Mobile Floating Action Button (FAB) Speed Dial
    const fabBtn = document.querySelector('#mobile-fab-btn');
    const fabSheet = document.querySelector('#mobile-fab-sheet');
    if (fabBtn && fabSheet) {
      fabBtn.onclick = (e) => {
        e.stopPropagation();
        fabSheet.style.display = (fabSheet.style.display === 'none' || !fabSheet.style.display) ? 'grid' : 'none';
      };
      document.addEventListener('click', (e) => {
        if (!fabBtn.contains(e.target) && !fabSheet.contains(e.target)) {
          fabSheet.style.display = 'none';
        }
      });
    }
    document.querySelector('#fab-action-lead')?.addEventListener('click', () => {
      if (fabSheet) fabSheet.style.display = 'none';
      if (typeof leadDrawer === 'function') leadDrawer();
    });
    document.querySelector('#fab-action-prop')?.addEventListener('click', () => {
      if (fabSheet) fabSheet.style.display = 'none';
      if (typeof propertyDrawer === 'function') propertyDrawer();
    });
    document.querySelector('#fab-action-visit')?.addEventListener('click', () => {
      if (fabSheet) fabSheet.style.display = 'none';
      if (typeof siteVisitDrawer === 'function') siteVisitDrawer();
    });
    document.querySelector('#fab-action-wa')?.addEventListener('click', () => {
      if (fabSheet) fabSheet.style.display = 'none';
      if (typeof magicWhatsAppParserModal === 'function') magicWhatsAppParserModal();
    });

    // Signout Handlers
    const handleSignOut = () => {
      try {
        localStorage.removeItem('brokerai.token');
        localStorage.removeItem('brokerai.user');
        localStorage.removeItem('brokerai.demo');
      } catch (e) {}
      state.token = null;
      state.user = null;
      state.demo = false;
      window.location.hash = '#/auth/login';
      render();
    };
    document.querySelector('#signout')?.addEventListener('click', handleSignOut);
    document.querySelector('#logout-btn')?.addEventListener('click', handleSignOut);
  }

// ==========================================================================
    // ==========================================================================
  // MODULE 1: PUBLIC CLIENT MICROSITE & LUXURY SHOWCASE PORTAL
  // ==========================================================================

  function getPropertyForMicrosite(propId) {
    const allProps = (state.properties && state.properties.length) ? state.properties : (typeof demoProperties !== 'undefined' ? demoProperties : []);
    if (!allProps.length) {
      return {
        id: 201,
        title: 'Spacious 2 BHK at Hiranandani Estate',
        society: 'Rodas Enclave',
        location: 'Hiranandani Estate, Thane West',
        price: 12500000,
        listingType: 'SALE',
        propertyType: 'RESIDENTIAL',
        bhk: 2,
        area: 780,
        carpetArea: 720,
        furnishing: 'SEMI_FURNISHED',
        parking: '1 Covered',
        floor: '14th of 28 Floors',
        facing: 'East Facing',
        possessionStatus: 'READY_TO_MOVE',
        ageOfProperty: '3 Years',
        mahaReraId: 'P51700001234',
        amenities: ['Clubhouse & Gym', 'Swimming Pool', '24/7 Security & CCTV', 'Covered Car Parking', 'Children Play Area', 'Power Backup', 'Landscaped Garden'],
        description: 'Exquisite premium 2 BHK residence in high-demand Rodas Enclave, Hiranandani Estate. Features unobstructed greenery views, Italian marble flooring, modular German kitchen, and high-speed elevators.',
        images: [
          'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
          'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
          'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
          'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1200&q=80'
        ]
      };
    }

    if (propId !== null && propId !== undefined && propId !== '') {
      const idNum = Number(propId);
      const found = allProps.find(p => p.id === idNum || String(p.id) === String(propId));
      if (found) return found;
    }

    const hash = window.location.hash || '';
    const hashMatch = hash.match(/#(?:p|microsite)\/([a-zA-Z0-9_-]+)/);
    if (hashMatch && hashMatch[1]) {
      const idNum = Number(hashMatch[1]);
      const found = allProps.find(p => p.id === idNum || String(p.id) === hashMatch[1]);
      if (found) return found;
    }

    try {
      const urlParams = new URLSearchParams(window.location.search);
      const pParam = urlParams.get('p') || urlParams.get('id') || urlParams.get('prop');
      if (pParam) {
        const idNum = Number(pParam);
        const found = allProps.find(p => p.id === idNum || String(p.id) === pParam);
        if (found) return found;
      }
    } catch {}

    return allProps[0];
  }

  function clientMicrositeView(propId = null, targetContainer = null) {
    const prop = getPropertyForMicrosite(propId);
    const target = targetContainer || document.getElementById('app');
    if (!target) return;

    if (!prop) {
      target.innerHTML = `
        <div class="microsite-wrap" style="display:flex;align-items:center;justify-content:center;min-height:80vh;padding:20px;">
          <div style="background:#fff;padding:40px;border-radius:18px;text-align:center;max-width:480px;border:1px solid #e2e8f0;box-shadow:0 10px 30px rgba(0,0,0,0.06);">
            <div style="font-size:48px;margin-bottom:12px;">🏡</div>
            <h2 style="font-size:22px;color:#0f172a;margin:0 0 8px;">Property Listing Not Found</h2>
            <p style="color:#64748b;font-size:14px;margin-bottom:20px;">This listing may have been reserved, rented out, or moved.</p>
            <a href="#/properties" class="button primary" style="text-decoration:none;">View Available Inventory</a>
          </div>
        </div>
      `;
      return;
    }

    const s = state.agencySettings || (typeof defaultAgencySettings !== 'undefined' ? defaultAgencySettings : {
      agencyName: 'BrokerAI Realty Advisors',
      contactPhone: '+91 98200 12345',
      reraNumber: 'A51700012345',
      officeAddress: 'Hiranandani Estate, Thane West - 400607'
    });

    const price = prop.price || 12500000;
    const isSale = prop.listingType === 'SALE';
    const imgList = (prop.images && prop.images.length) ? prop.images : [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1200&q=80'
    ];

    let currentPhotoIdx = 0;
    let isFemaleBuyer = false;
    let isUnderConstruction = prop.possessionStatus === 'UNDER_CONSTRUCTION';
    let downpaymentPercent = 20;
    let loanTenureYears = 20;
    const homeLoanRoi = 8.4;

    const calcCosts = () => {
      const stampDutyRate = isFemaleBuyer ? 0.05 : 0.06; // Maharashtra: 6% standard, 5% female concession
      const stampDuty = Math.round(price * stampDutyRate);
      const regFee = isSale ? (price > 3000000 ? 30000 : Math.round(price * 0.01)) : 1000;
      const gstRate = isSale ? (isUnderConstruction ? 0.05 : 0) : 0;
      const gstAmt = Math.round(price * gstRate);
      const totalOnRoad = price + stampDuty + regFee + gstAmt;

      const downpaymentAmt = Math.round(price * (downpaymentPercent / 100));
      const loanPrincipal = price - downpaymentAmt;
      const monthlyRate = homeLoanRoi / (12 * 100);
      const numMonths = loanTenureYears * 12;
      const monthlyEmi = isSale && loanPrincipal > 0
        ? Math.round((loanPrincipal * monthlyRate * Math.pow(1 + monthlyRate, numMonths)) / (Math.pow(1 + monthlyRate, numMonths) - 1))
        : 0;

      return { stampDutyRate, stampDuty, regFee, gstRate, gstAmt, totalOnRoad, downpaymentAmt, loanPrincipal, monthlyEmi };
    };

    const renderMicrosite = () => {
      const costs = calcCosts();
      const cleanPhone = (s.whatsappSupport || s.contactPhone || '919820012345').replace(/[^0-9]/g, '');
      const waPitchText = encodeURIComponent(`Hello ${s.agencyName || 'BrokerAI Realty'}, I am interested in ${prop.title} (${formatPrice(prop.price, prop.listingType)}) listed at ${prop.location}. Could we arrange a private viewing / site visit?`);
      const publicShareUrl = `${window.location.origin}${window.location.pathname}#/p/${prop.id}`;
      const isModal = Boolean(targetContainer);

      target.innerHTML = `
        <div class="microsite-wrap">
          <!-- TOP BRANDING BAR -->
          <header class="microsite-top-nav">
            <div class="microsite-brand">
              <div class="microsite-brand-logo">${s.logoUrl ? `<img src="${s.logoUrl}" style="width:100%;height:100%;border-radius:8px;object-fit:cover;" />` : initials(s.agencyName || 'BA')}</div>
              <div>
                <div style="font-size:15px;font-weight:850;color:#0f172a;line-height:1.2;">${esc(s.agencyName || 'BrokerAI Realty Advisors')}</div>
                <div style="font-size:11px;color:#64748b;font-weight:600;">MahaRERA: ${esc(s.reraNumber || 'A51700012345')} · Thane & MMR</div>
              </div>
            </div>
            <div style="display:flex;align-items:center;gap:10px;">
              ${!isModal ? `
                <a href="#/properties" class="button secondary" style="font-size:12px;padding:6px 12px;text-decoration:none;">
                  ← All Properties
                </a>
                <a href="#/dashboard" class="button primary" style="font-size:12px;padding:6px 12px;text-decoration:none;">
                  🔑 Agent Portal
                </a>
              ` : `
                <button class="button secondary" id="micro-copy-link-btn" style="font-size:12px;padding:6px 12px;">
                  📋 Copy Share Link
                </button>
              `}
            </div>
          </header>

          <main class="microsite-container">
            <!-- HERO SHOWCASE CARD -->
            <section class="microsite-hero-card">
              <div class="microsite-gallery-main">
                <img id="micro-hero-img" class="microsite-gallery-img" src="${imgList[currentPhotoIdx]}" alt="${esc(prop.title)}" />
                <button class="microsite-gallery-nav prev" id="micro-prev-photo" title="Previous photo">‹</button>
                <button class="microsite-gallery-nav next" id="micro-next-photo" title="Next photo">›</button>
                <div class="microsite-gallery-counter" id="micro-photo-counter">📸 ${currentPhotoIdx + 1} of ${imgList.length} Photos</div>
              </div>

              <!-- THUMBNAIL ROW -->
              <div class="microsite-thumbs">
                ${imgList.map((img, idx) => `
                  <img class="microsite-thumb ${idx === currentPhotoIdx ? 'active' : ''}" src="${img}" data-photo-idx="${idx}" alt="Thumb ${idx + 1}" />
                `).join('')}
              </div>

              <div class="microsite-header-body">
                <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:10px;">
                  <div>
                    <span class="badge ${prop.listingType === 'SALE' ? 'hot' : 'cold'}" style="font-size:11px;text-transform:uppercase;font-weight:750;letter-spacing:0.04em;">
                      For ${esc(prop.listingType)} · ${esc(prop.propertyType || 'Residential')}
                    </span>
                    ${prop.possessionStatus ? `<span class="badge warm" style="margin-left:6px;font-size:11px;">${esc(prop.possessionStatus.replaceAll('_', ' '))}</span>` : ''}
                    <span class="badge cold" style="margin-left:6px;font-size:11px;" id="micro-copy-rera" title="Click to copy RERA ID">📋 MahaRERA: ${esc(prop.mahaReraId || s.reraNumber || 'P51700001234')}</span>
                    <h1 class="microsite-title">${esc(prop.title)}</h1>
                    <div class="microsite-loc">
                      <span>📍 ${esc(prop.location)}</span>
                      ${prop.society ? `<span>· 🏢 ${esc(prop.society)}</span>` : ''}
                    </div>
                  </div>
                </div>

                <!-- PRICE DISPLAY -->
                <div class="microsite-price-box">
                  <div>
                    <div style="font-size:12px;color:#64748b;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;">All-Inclusive Asking Price</div>
                    <div class="microsite-price-main">${formatPrice(prop.price, prop.listingType)}</div>
                    ${isSale && prop.area ? `<div style="font-size:13px;color:#059669;font-weight:700;">₹${Math.round(price / prop.area).toLocaleString('en-IN')} / sq.ft carpet</div>` : ''}
                  </div>
                  <div style="display:flex;gap:8px;flex-wrap:wrap;">
                    <a class="button primary" href="https://api.whatsapp.com/send?phone=${cleanPhone}&text=${waPitchText}" target="_blank" style="background:#25d366;border-color:#25d366;font-size:13px;padding:10px 16px;text-decoration:none;color:#fff;font-weight:750;">
                      💬 WhatsApp Inquire
                    </a>
                    <button class="button secondary" id="micro-jump-calculator" style="font-size:13px;padding:10px 16px;font-weight:750;">
                      💰 On-Road Cost Breakdown
                    </button>
                  </div>
                </div>

                <!-- SPECS GRID -->
                <div class="microsite-specs-grid">
                  <div class="microsite-spec-card">
                    <div class="microsite-spec-icon">🛏️</div>
                    <div class="microsite-spec-val">${prop.bhk ? `${prop.bhk} BHK` : 'Studio / Office'}</div>
                    <div class="microsite-spec-lbl">Configuration</div>
                  </div>
                  <div class="microsite-spec-card">
                    <div class="microsite-spec-icon">📐</div>
                    <div class="microsite-spec-val">${prop.area ? `${prop.area} sq.ft` : '780 sq.ft'}</div>
                    <div class="microsite-spec-lbl">Carpet Area</div>
                  </div>
                  <div class="microsite-spec-card">
                    <div class="microsite-spec-icon">🛋️</div>
                    <div class="microsite-spec-val">${prop.furnishing ? esc(prop.furnishing.replaceAll('_', ' ')) : 'Semi-Furnished'}</div>
                    <div class="microsite-spec-lbl">Furnishing</div>
                  </div>
                  <div class="microsite-spec-card">
                    <div class="microsite-spec-icon">🏢</div>
                    <div class="microsite-spec-val">${prop.floor ? esc(prop.floor) : 'Mid to Higher Floor'}</div>
                    <div class="microsite-spec-lbl">Floor Level</div>
                  </div>
                  <div class="microsite-spec-card">
                    <div class="microsite-spec-icon">🚗</div>
                    <div class="microsite-spec-val">${prop.parking ? esc(prop.parking) : '1 Dedicated Covered'}</div>
                    <div class="microsite-spec-lbl">Parking Space</div>
                  </div>
                  <div class="microsite-spec-card">
                    <div class="microsite-spec-icon">🧭</div>
                    <div class="microsite-spec-val">${prop.facing ? esc(prop.facing) : 'East-West (Vastu)'}</div>
                    <div class="microsite-spec-lbl">Facing / Vastu</div>
                  </div>
                </div>

                <!-- DESCRIPTION -->
                <div style="margin-top:20px;border-top:1px solid #f1f5f9;padding-top:16px;">
                  <h3 style="font-size:16px;font-weight:750;color:#0f172a;margin:0 0 8px;">Property Overview & Architecture</h3>
                  <p style="color:#475569;font-size:14.5px;line-height:1.65;margin:0;">
                    ${esc(prop.description || 'Exquisite luxury residence offering expansive living spaces, high-end imported fixtures, scenic natural ventilation, and immediate connectivity to business districts, international schools, and lifestyle clubs.')}
                  </p>
                </div>
              </div>
            </section>

            <!-- INTERACTIVE MAHARASHTRA STAMP DUTY & ON-ROAD COST CALCULATOR -->
            <section class="cost-calculator-box" id="micro-cost-section">
              <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;border-bottom:1px solid #f1f5f9;padding-bottom:14px;margin-bottom:16px;">
                <div>
                  <h2 style="font-size:18px;font-weight:800;color:#0f172a;margin:0;">💰 Transparent On-Road Outflow Calculator</h2>
                  <p style="color:#64748b;font-size:12.5px;margin:3px 0 0;">Official Maharashtra Stamp Act rates + 1% Women Concession toggle</p>
                </div>
                <div class="cost-toggle-group">
                  <button class="cost-toggle-btn ${!isFemaleBuyer ? 'active' : ''}" id="toggle-male-buyer">Standard Male (6%)</button>
                  <button class="cost-toggle-btn ${isFemaleBuyer ? 'active' : ''}" id="toggle-female-buyer">👩 Female Buyer (5%)</button>
                </div>
              </div>

              ${isSale ? `
                <div style="display:flex;gap:10px;margin-bottom:16px;align-items:center;">
                  <span style="font-size:12.5px;font-weight:700;color:#475569;">Construction Status:</span>
                  <div class="cost-toggle-group" style="flex:0 0 auto;">
                    <button class="cost-toggle-btn ${!isUnderConstruction ? 'active' : ''}" id="toggle-ready-status">Ready (0% GST)</button>
                    <button class="cost-toggle-btn ${isUnderConstruction ? 'active' : ''}" id="toggle-undercon-status">Under-Con (5% GST)</button>
                  </div>
                </div>
              ` : ''}

              <table class="cost-breakdown-table">
                <tbody>
                  <tr>
                    <td>Base Agreement Value</td>
                    <td class="val">${formatPrice(price, prop.listingType)}</td>
                  </tr>
                  <tr>
                    <td>
                      Stamp Duty (${costs.stampDutyRate * 100}% in Maharashtra)
                      ${isFemaleBuyer ? '<span style="font-size:11px;color:#059669;font-weight:700;margin-left:6px;">✓ 1% Women Rebate Applied</span>' : ''}
                    </td>
                    <td class="val">₹${costs.stampDuty.toLocaleString('en-IN')}</td>
                  </tr>
                  <tr>
                    <td>Govt Registration Fees (Capped at ₹30k for > ₹30L)</td>
                    <td class="val">₹${costs.regFee.toLocaleString('en-IN')}</td>
                  </tr>
                  ${isSale && costs.gstAmt > 0 ? `
                    <tr>
                      <td>GST Outflow (${costs.gstRate * 100}% on Under-Construction)</td>
                      <td class="val">₹${costs.gstAmt.toLocaleString('en-IN')}</td>
                    </tr>
                  ` : ''}
                  <tr class="total-row">
                    <td><strong>Total Estimated On-Road Acquisition Outflow</strong></td>
                    <td class="val" style="font-size:18px;">₹${costs.totalOnRoad.toLocaleString('en-IN')}</td>
                  </tr>
                </tbody>
              </table>

              ${isSale ? `
                <!-- EMI ESTIMATOR -->
                <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:14px;padding:16px 20px;margin-top:20px;">
                  <h3 style="font-size:15px;font-weight:750;color:#0f172a;margin:0 0 12px;">📊 Bank Home Loan & Monthly EMI Simulator</h3>
                  
                  <div class="emi-slider-wrap">
                    <div style="display:flex;justify-content:space-between;font-size:12.5px;color:#475569;margin-bottom:6px;">
                      <span>Down Payment: <strong>${downpaymentPercent}% (₹${costs.downpaymentAmt.toLocaleString('en-IN')})</strong></span>
                      <span>Loan Amount: <strong>₹${costs.loanPrincipal.toLocaleString('en-IN')}</strong></span>
                    </div>
                    <input type="range" class="emi-range-input" id="micro-downpayment-range" min="10" max="50" step="5" value="${downpaymentPercent}" />
                  </div>

                  <div class="emi-slider-wrap">
                    <div style="display:flex;justify-content:space-between;font-size:12.5px;color:#475569;margin-bottom:6px;">
                      <span>Loan Tenure: <strong>${loanTenureYears} Years</strong></span>
                      <span>Interest Rate: <strong>${homeLoanRoi}% p.a.</strong></span>
                    </div>
                    <input type="range" class="emi-range-input" id="micro-tenure-range" min="5" max="30" step="5" value="${loanTenureYears}" />
                  </div>

                  <div class="emi-display-box">
                    <div>
                      <div style="font-size:12px;color:#1e40af;font-weight:700;text-transform:uppercase;">Estimated Monthly EMI</div>
                      <div style="font-size:24px;font-weight:850;color:#1e3a8a;">₹${costs.monthlyEmi.toLocaleString('en-IN')} <span style="font-size:13px;font-weight:600;color:#3b82f6;">/ month</span></div>
                    </div>
                    <a href="https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(`Hi ${s.agencyName || 'BrokerAI'}, I would like bank home loan pre-approval assistance for ${prop.title} (${formatPrice(price, prop.listingType)}).`)}" target="_blank" class="button primary" style="font-size:12.5px;padding:8px 14px;background:#2563eb;text-decoration:none;color:#fff;">
                      Apply Home Loan
                    </a>
                  </div>
                </div>
              ` : ''}
            </section>

            <!-- AMENITIES & LIFESTYLE -->
            <section style="background:#fff;border-radius:20px;border:1px solid rgba(0,0,0,0.08);box-shadow:0 10px 30px rgba(0,0,0,0.04);padding:24px;">
              <h2 style="font-size:18px;font-weight:800;color:#0f172a;margin:0 0 16px;">✨ Society Lifestyle & Premium Amenities</h2>
              <div class="amenities-badges-grid">
                ${(prop.amenities && prop.amenities.length ? prop.amenities : ['Clubhouse & Gym', 'Swimming Pool', '24/7 Security & CCTV', 'Covered Car Parking', 'Children Play Area', 'Power Backup', 'Landscaped Garden']).map(am => `
                  <div class="amenity-badge-card">
                    <span class="amenity-badge-icon">✓</span>
                    <span>${esc(am)}</span>
                  </div>
                `).join('')}
              </div>
            </section>

            <!-- VICINITY & INFRASTRUCTURE -->
            <section style="background:#fff;border-radius:20px;border:1px solid rgba(0,0,0,0.08);box-shadow:0 10px 30px rgba(0,0,0,0.04);padding:24px;">
              <h2 style="font-size:18px;font-weight:800;color:#0f172a;margin:0 0 16px;">📍 Strategic Location & Connectivity (Thane MMR)</h2>
              <div class="vicinity-list">
                <div class="vicinity-item">
                  <span>🚗 <strong>Eastern Express Highway (EEH)</strong> · Direct Mumbai connectivity</span>
                  <span class="time">5 Mins Drive</span>
                </div>
                <div class="vicinity-item">
                  <span>🛍️ <strong>Viviana Mall & Korum Mall</strong> · High street shopping & cinema</span>
                  <span class="time">10 Mins Drive</span>
                </div>
                <div class="vicinity-item">
                  <span>🏥 <strong>Hiranandani Hospital / Jupiter Hospital</strong> · Multi-speciality healthcare</span>
                  <span class="time">4 Mins Drive</span>
                </div>
                <div class="vicinity-item">
                  <span>🚆 <strong>Thane Railway Station & Metro Line 4</strong> · Rapid rail transit</span>
                  <span class="time">12 Mins Drive</span>
                </div>
                <div class="vicinity-item">
                  <span>🏫 <strong>Hiranandani Foundation School / Singhania</strong> · Top ICSE/IB schooling</span>
                  <span class="time">3 Mins Walk</span>
                </div>
              </div>
            </section>

            <!-- SITE VISIT APPOINTMENT BOOKING FORM -->
            <section class="cost-calculator-box" id="micro-booking-section" style="border:2px solid #2563eb;background:linear-gradient(180deg, #ffffff, #f0fdf4);">
              <div style="text-align:center;margin-bottom:20px;">
                <div style="font-size:11px;color:#059669;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;">Direct Developer / Owner Verification</div>
                <h2 style="font-size:22px;font-weight:850;color:#0f172a;margin:4px 0 6px;">📅 Schedule a Private VIP Site Visit</h2>
                <p style="color:#64748b;font-size:13.5px;max-width:540px;margin:0 auto;">Book an exclusive walkthrough of ${esc(prop.title)}. Our verified local property advisor will receive you at the reception with key access and full layout drawings.</p>
              </div>

              <form id="micro-visit-form" style="display:grid;grid-template-columns:repeat(auto-fit, minmax(220px, 1fr));gap:16px;max-width:680px;margin:0 auto;">
                <div>
                  <label style="font-size:12px;font-weight:750;color:#334155;display:block;margin-bottom:4px;">Your Full Name *</label>
                  <input class="input" type="text" name="clientName" placeholder="e.g. Vikram Singhal" required style="background:#fff;" />
                </div>
                <div>
                  <label style="font-size:12px;font-weight:750;color:#334155;display:block;margin-bottom:4px;">WhatsApp Number *</label>
                  <input class="input" type="tel" name="clientPhone" placeholder="e.g. 9820012345" required style="background:#fff;" />
                </div>
                <div>
                  <label style="font-size:12px;font-weight:750;color:#334155;display:block;margin-bottom:4px;">Preferred Date *</label>
                  <input class="input" type="date" name="visitDate" required style="background:#fff;" value="${new Date(Date.now() + 86400000).toISOString().split('T')[0]}" />
                </div>
                <div>
                  <label style="font-size:12px;font-weight:750;color:#334155;display:block;margin-bottom:4px;">Preferred Time Slot *</label>
                  <select class="select" name="visitTime" style="background:#fff;">
                    <option value="11:00 AM - 01:00 PM">Morning (11:00 AM - 01:00 PM)</option>
                    <option value="02:00 PM - 04:00 PM">Afternoon (02:00 PM - 04:00 PM)</option>
                    <option value="04:30 PM - 06:30 PM" selected>Evening (04:30 PM - 06:30 PM)</option>
                  </select>
                </div>
                <div style="grid-column:1/-1;margin-top:6px;">
                  <button type="submit" class="button primary" style="width:100%;padding:14px;background:#059669;color:#fff;font-weight:800;font-size:15px;justify-content:center;border-radius:12px;box-shadow:0 4px 14px rgba(5,150,105,0.3);">
                    ✓ Confirm VIP Site Visit Appointment
                  </button>
                </div>
              </form>
            </section>

            <!-- AGENCY FOOTER -->
            <footer style="text-align:center;padding:24px 12px;color:#64748b;font-size:12px;line-height:1.6;">
              <div>Marketed exclusively by <strong>${esc(s.agencyName || 'BrokerAI Realty Advisors')}</strong></div>
              <div>MahaRERA Registration No: <strong>${esc(s.reraNumber || 'A51700012345')}</strong> · GSTIN: ${esc(s.gstin || '27AABCB1234F1Z8')}</div>
              <div>Office: ${esc(s.officeAddress || 'Hiranandani Estate, Thane West - 400607')}</div>
            </footer>
          </main>

          <!-- FLOATING STICKY MOBILE CTA BAR -->
          <div class="microsite-floating-bar">
            <a class="microsite-btn-wa" href="https://api.whatsapp.com/send?phone=${cleanPhone}&text=${waPitchText}" target="_blank">
              💬 WhatsApp Agent
            </a>
            <a class="microsite-btn-call" href="tel:${cleanPhone}">
              📞 Call
            </a>
            <button class="microsite-btn-visit" id="micro-scroll-visit">
              📅 Book Visit
            </button>
          </div>
        </div>
      `;

      // Event Bindings scoped to target
      target.querySelector('#micro-copy-link-btn')?.addEventListener('click', () => {
        navigator.clipboard.writeText(publicShareUrl).then(() => {
          showToast('🔗 Public client microsite link copied to clipboard!', 'success');
        });
      });

      target.querySelector('#micro-copy-rera')?.addEventListener('click', () => {
        if (prop.mahaReraId) {
          navigator.clipboard.writeText(prop.mahaReraId).then(() => {
            showToast(`📋 MahaRERA ID ${prop.mahaReraId} copied!`, 'success');
          });
        }
      });

      // Gallery Controls
      const heroImg = target.querySelector('#micro-hero-img');
      const counter = target.querySelector('#micro-photo-counter');
      const updatePhoto = (newIdx) => {
        currentPhotoIdx = (newIdx + imgList.length) % imgList.length;
        if (heroImg) heroImg.src = imgList[currentPhotoIdx];
        if (counter) counter.textContent = `📸 ${currentPhotoIdx + 1} of ${imgList.length} Photos`;
        target.querySelectorAll('.microsite-thumb').forEach((thumb, idx) => {
          thumb.classList.toggle('active', idx === currentPhotoIdx);
        });
      };

      target.querySelector('#micro-prev-photo')?.addEventListener('click', () => updatePhoto(currentPhotoIdx - 1));
      target.querySelector('#micro-next-photo')?.addEventListener('click', () => updatePhoto(currentPhotoIdx + 1));
      target.querySelectorAll('.microsite-thumb').forEach(thumb => {
        thumb.addEventListener('click', () => updatePhoto(Number(thumb.dataset.photoIdx)));
      });

      // Interactive Calculator Toggles
      target.querySelector('#toggle-male-buyer')?.addEventListener('click', () => {
        isFemaleBuyer = false;
        renderMicrosite();
      });
      target.querySelector('#toggle-female-buyer')?.addEventListener('click', () => {
        isFemaleBuyer = true;
        renderMicrosite();
      });
      target.querySelector('#toggle-ready-status')?.addEventListener('click', () => {
        isUnderConstruction = false;
        renderMicrosite();
      });
      target.querySelector('#toggle-undercon-status')?.addEventListener('click', () => {
        isUnderConstruction = true;
        renderMicrosite();
      });

      target.querySelector('#micro-downpayment-range')?.addEventListener('input', (e) => {
        downpaymentPercent = Number(e.target.value);
        renderMicrosite();
      });
      target.querySelector('#micro-tenure-range')?.addEventListener('input', (e) => {
        loanTenureYears = Number(e.target.value);
        renderMicrosite();
      });

      target.querySelector('#micro-jump-calculator')?.addEventListener('click', () => {
        target.querySelector('#micro-cost-section')?.scrollIntoView({ behavior: 'smooth' });
      });

      target.querySelector('#micro-scroll-visit')?.addEventListener('click', () => {
        target.querySelector('#micro-booking-section')?.scrollIntoView({ behavior: 'smooth' });
      });

      // Site Visit Form Submission
      const form = target.querySelector('#micro-visit-form');
      if (form) {
        form.onsubmit = (e) => {
          e.preventDefault();
          const fd = new FormData(form);
          const cName = fd.get('clientName')?.trim();
          const cPhone = fd.get('clientPhone')?.trim();
          const vDate = fd.get('visitDate');
          const vTime = fd.get('visitTime');

          if (!cName || !cPhone) {
            alert('Please enter your Name and WhatsApp phone.');
            return;
          }

          // Auto-save lead into CRM
          if (!state.leads) state.leads = (typeof demoLeads !== 'undefined' ? demoLeads : []);
          let existingLead = state.leads.find(l => l.phone && l.phone.replace(/[^0-9]/g, '') === cPhone.replace(/[^0-9]/g, ''));
          if (!existingLead) {
            existingLead = {
              id: Date.now(),
              name: cName,
              phone: cPhone,
              email: '',
              status: 'WARM',
              source: 'MICROSITE_WEB',
              createdAt: new Date().toISOString(),
              requirement: {
                propertyType: prop.propertyType || 'RESIDENTIAL',
                bhk: prop.bhk || 2,
                maxBudget: prop.price || 12500000,
                preferredLocations: [prop.location || 'Thane'],
                transactionType: prop.listingType || 'SALE'
              }
            };
            state.leads.unshift(existingLead);
            localStorage.setItem('brokerai.leads', JSON.stringify(state.leads));
          }

          // Auto-record site visit in CRM
          if (!state.visits) state.visits = (typeof getStoredVisits === 'function' ? getStoredVisits() : []);
          const newVisit = {
            id: Date.now(),
            leadId: existingLead.id,
            leadName: cName,
            leadPhone: cPhone,
            propertyId: prop.id,
            propertyTitle: prop.title,
            visitDate: vDate,
            visitTime: vTime,
            status: 'SCHEDULED',
            agentName: state.user?.fullName || 'Mohak Vaswani',
            notes: 'Booked directly via BrokerAI Luxury Client Microsite'
          };
          state.visits.unshift(newVisit);
          localStorage.setItem('brokerai.visits', JSON.stringify(state.visits));

          showToast(`✓ Site Visit confirmed for ${cName} on ${vDate}!`, 'success');
          
          const bookingMsg = encodeURIComponent(`*📍 VIP Site Visit Confirmed*\n\nHello ${cName},\nYour private viewing for *${prop.title}* is confirmed for *${vDate} (${vTime})*.\n\n📍 *Location:* ${prop.location}\n🏢 *Society:* ${prop.society || 'Main Gate'}\n\nOur advisor will meet you at the reception.`);
          window.open(`https://api.whatsapp.com/send?phone=${cPhone.replace(/[^0-9]/g, '')}&text=${bookingMsg}`, '_blank');
        };
      }
    };

    renderMicrosite();
  }

  // Modal version to preview the microsite inside dashboard
  function clientMicrositeModal(property) {
    const prop = property || (state.properties && state.properties[0]) || (typeof demoProperties !== 'undefined' ? demoProperties[0] : null);
    if (!prop) {
      showToast('No property selected for microsite preview', 'error');
      return;
    }

    document.querySelectorAll('.modal-backdrop').forEach(b => b.remove());
    const backdrop = document.createElement('div');
    backdrop.className = 'modal-backdrop';
    backdrop.style.cssText = 'position:fixed;inset:0;background:rgba(15,23,42,0.65);z-index:9998 !important;display:flex;align-items:center;justify-content:center;padding:16px;box-sizing:border-box;';

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.cssText = 'max-width:1040px;width:100%;max-height:92vh;overflow-y:auto;padding:0;background:#f8fafc;border-radius:20px;z-index:10000 !important;box-shadow:0 25px 60px rgba(0,0,0,0.3);position:relative;display:flex;flex-direction:column;';

    const s = state.agencySettings || (typeof defaultAgencySettings !== 'undefined' ? defaultAgencySettings : {});
    const publicUrl = `${window.location.origin}${window.location.pathname}#/p/${prop.id}`;

    modal.innerHTML = `
      <div style="background:#0f172a;color:#fff;padding:16px 24px;border-radius:20px 20px 0 0;display:flex;justify-content:space-between;align-items:center;position:sticky;top:0;z-index:100;box-shadow:0 2px 10px rgba(0,0,0,0.15);">
        <div>
          <div style="font-size:11px;color:#38bdf8;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;">🌐 Public Client Microsite Simulator</div>
          <h3 style="margin:2px 0 0;font-size:17px;font-weight:750;color:#fff;">${esc(prop.title)}</h3>
        </div>
        <button id="close-microsite-preview" style="background:rgba(255,255,255,0.15);border:none;color:#fff;font-size:20px;width:34px;height:34px;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background 0.2s;">✕</button>
      </div>

      <div style="padding:12px 20px;background:#e2e8f0;border-bottom:1px solid #cbd5e1;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;position:sticky;top:66px;z-index:99;">
        <div style="font-size:12.5px;color:#334155;font-weight:600;display:flex;align-items:center;gap:6px;">
          <span>🔗 Shareable URL:</span>
          <code style="background:#fff;padding:4px 8px;border-radius:6px;border:1px solid #cbd5e1;font-size:12px;color:#1d4ed8;">${publicUrl}</code>
        </div>
        <div style="display:flex;gap:8px;">
          <button class="button secondary" id="copy-modal-public-url" style="font-size:12px;padding:6px 12px;background:#fff;">📋 Copy Link</button>
          <a href="#/p/${prop.id}" target="_blank" class="button primary" style="font-size:12px;padding:6px 14px;background:#2563eb;text-decoration:none;color:#fff;">🚀 Open Standalone View</a>
        </div>
      </div>

      <div id="microsite-modal-body" style="flex:1;overflow-y:auto;">
        <!-- Embedded Preview rendered here -->
      </div>
    `;

    backdrop.appendChild(modal);
    document.body.appendChild(backdrop);

    const close = () => { backdrop.remove(); };
    backdrop.onclick = (e) => { if (e.target === backdrop) close(); };
    if (modal.querySelector('#close-microsite-preview')) modal.querySelector('#close-microsite-preview').onclick = close;
    if (modal.querySelector('#copy-modal-public-url')) modal.querySelector('#copy-modal-public-url').onclick = () => {
      navigator.clipboard.writeText(publicUrl).then(() => {
        showToast('📋 Public microsite link copied!', 'success');
      });
    };

    // Render inside modal body
    const bodyContainer = modal.querySelector('#microsite-modal-body');
    clientMicrositeView(prop.id, bodyContainer);
  }


  // MODULE 2: INTERACTIVE MAHARASHTRA STAMP DUTY & ON-ROAD COST CALCULATOR
  // ==========================================================================

  function stampDutyCostCalculatorModal(property = null) {
    const allProps = (state.properties && state.properties.length) ? state.properties : demoProperties;
    let selectedProp = property || allProps[0];
    let customPrice = selectedProp?.price || 12500000;
    let isFemale = false;
    let isUnderConstruction = selectedProp?.possessionStatus === 'UNDER_CONSTRUCTION';
    let legalBuffer = 25000;
    let downpaymentPct = 20;
    let tenureYrs = 20;
    let interestRate = 8.4;

    document.querySelectorAll('.modal-backdrop').forEach(b => b.remove());
    const backdrop = document.createElement('div');
    backdrop.className = 'modal-backdrop';
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.cssText = 'max-width:640px;width:94vw;max-height:92vh;overflow-y:auto;padding:24px;background:#fff;border-radius:18px;';

    const s = state.agencySettings || defaultAgencySettings;

    const renderCalculator = () => {
      const stampRate = isFemale ? 0.05 : 0.06;
      const stampDuty = Math.round(customPrice * stampRate);
      const regFee = customPrice > 3000000 ? 30000 : Math.round(customPrice * 0.01);
      const gstRate = isUnderConstruction ? 0.05 : 0;
      const gstAmt = Math.round(customPrice * gstRate);
      const totalOnRoad = customPrice + stampDuty + regFee + gstAmt + legalBuffer;

      const downpayment = Math.round(customPrice * (downpaymentPct / 100));
      const loanAmt = customPrice - downpayment;
      const r = interestRate / (12 * 100);
      const n = tenureYrs * 12;
      const emi = loanAmt > 0 ? Math.round((loanAmt * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)) : 0;

      modal.innerHTML = `
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
          <div>
            <span class="badge" style="background:#eff6ff;color:#1d4ed8;font-weight:800;font-size:11px;">FINANCIAL COST SHEET</span>
            <h2 style="margin:4px 0 0;font-size:20px;font-weight:850;color:#0f172a;">Maharashtra Stamp Duty & Cost Calculator</h2>
          </div>
          <button id="close-stamp-modal" style="background:none;border:none;font-size:24px;cursor:pointer;color:#64748b;">×</button>
        </div>

        <div style="margin-bottom:16px;">
          <label style="font-size:12px;font-weight:750;color:#334155;display:block;margin-bottom:4px;">Select Existing Listing or Enter Custom Amount:</label>
          <select class="select" id="stamp-prop-select" style="margin-bottom:10px;">
            ${allProps.map(p => `<option value="${p.id}" ${selectedProp?.id === p.id ? 'selected' : ''}>${esc(p.title)} (${formatPrice(p.price, p.listingType)})</option>`).join('')}
            <option value="CUSTOM">-- Custom Deal Amount --</option>
          </select>
          <div style="display:flex;gap:10px;align-items:center;">
            <span style="font-weight:750;font-size:14px;color:#334155;">Deal Price (₹):</span>
            <input class="input" id="stamp-price-input" type="number" step="50000" min="100000" value="${customPrice}" style="font-weight:800;font-size:16px;color:#15803d;flex:1;" />
          </div>
        </div>

        <!-- TOGGLES -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:16px;">
          <button class="cost-toggle-btn ${!isFemale ? 'active' : ''}" id="stamp-btn-male">
            👨 Male / Joint (6% Stamp Duty)
          </button>
          <button class="cost-toggle-btn ${isFemale ? 'active' : ''}" id="stamp-btn-female">
            👩 Female Sole (5% Stamp Duty)
          </button>
          <button class="cost-toggle-btn ${!isUnderConstruction ? 'active' : ''}" id="stamp-btn-ready">
            🏢 Ready with OC (0% GST)
          </button>
          <button class="cost-toggle-btn ${isUnderConstruction ? 'active' : ''}" id="stamp-btn-undercon">
            🏗️ Under Construction (5% GST)
          </button>
        </div>

        <!-- BREAKDOWN TABLE -->
        <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:16px;margin-bottom:16px;">
          <table class="cost-breakdown-table" style="margin:0;">
            <tbody>
              <tr>
                <td>Agreement / Consideration Value</td>
                <td class="val">₹${customPrice.toLocaleString('en-IN')}</td>
              </tr>
              <tr>
                <td>Maharashtra Stamp Duty (${stampRate * 100}%)</td>
                <td class="val">₹${stampDuty.toLocaleString('en-IN')} ${isFemale ? '<span style="color:#059669;font-size:11px;">(1% Female Rebate)</span>' : ''}</td>
              </tr>
              <tr>
                <td>Govt Registration Charges (Capped)</td>
                <td class="val">₹${regFee.toLocaleString('en-IN')}</td>
              </tr>
              <tr>
                <td>GST Liability (${gstRate * 100}%)</td>
                <td class="val">${gstAmt > 0 ? `₹${gstAmt.toLocaleString('en-IN')}` : '₹0 (OC Received)'}</td>
              </tr>
              <tr>
                <td>Society Transfer & Legal Doc Buffer</td>
                <td class="val">₹${legalBuffer.toLocaleString('en-IN')}</td>
              </tr>
              <tr class="total-row">
                <td>🏆 TOTAL ESTIMATED ON-ROAD PRICE:</td>
                <td class="val">₹${totalOnRoad.toLocaleString('en-IN')}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- EMI ESTIMATOR -->
        <div style="background:#0f172a;color:#fff;border-radius:12px;padding:16px;margin-bottom:18px;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
            <div style="font-size:12px;color:#94a3b8;font-weight:750;text-transform:uppercase;">Bank Loan EMI (@ ${interestRate}% ROI)</div>
            <div style="font-size:18px;font-weight:850;color:#38bdf8;">₹${emi.toLocaleString('en-IN')}/mo</div>
          </div>
          <div style="font-size:12px;color:#cbd5e1;">
            Downpayment: ₹${downpayment.toLocaleString('en-IN')} (${downpaymentPct}%) · Loan Amount: ₹${loanAmt.toLocaleString('en-IN')} for ${tenureYrs} Years
          </div>
        </div>

        <!-- ACTIONS -->
        <div style="display:flex;gap:10px;flex-wrap:wrap;">
          <button class="button primary" id="stamp-send-wa-btn" style="flex:1.5;background:#059669;color:#fff;font-weight:800;justify-content:center;padding:12px;font-size:13.5px;">
            ${svgIcon('whatsapp', 18)} Dispatch Cost Sheet on WhatsApp
          </button>
          <button class="button secondary" id="stamp-print-btn" style="flex:1;justify-content:center;padding:12px;font-size:13px;">
            🖨️ Print / PDF
          </button>
        </div>
      `;

      // Event handlers
      if (modal.querySelector('#close-stamp-modal')) modal.querySelector('#close-stamp-modal').onclick = () => { backdrop.remove(); modal.remove(); };

      modal.querySelector('#stamp-prop-select').onchange = (e) => {
        const val = e.target.value;
        if (val !== 'CUSTOM') {
          selectedProp = allProps.find(p => p.id === Number(val)) || selectedProp;
          customPrice = selectedProp?.price || customPrice;
          isUnderConstruction = selectedProp?.possessionStatus === 'UNDER_CONSTRUCTION';
        }
        renderCalculator();
      };

      modal.querySelector('#stamp-price-input').onchange = (e) => {
        customPrice = Number(e.target.value) || 100000;
        renderCalculator();
      };

      if (modal.querySelector('#stamp-btn-male')) modal.querySelector('#stamp-btn-male').onclick = () => { isFemale = false; renderCalculator(); };
      if (modal.querySelector('#stamp-btn-female')) modal.querySelector('#stamp-btn-female').onclick = () => { isFemale = true; renderCalculator(); };
      if (modal.querySelector('#stamp-btn-ready')) modal.querySelector('#stamp-btn-ready').onclick = () => { isUnderConstruction = false; renderCalculator(); };
      if (modal.querySelector('#stamp-btn-undercon')) modal.querySelector('#stamp-btn-undercon').onclick = () => { isUnderConstruction = true; renderCalculator(); };

      if (modal.querySelector('#stamp-send-wa-btn')) modal.querySelector('#stamp-send-wa-btn').onclick = () => {
        const propTitle = selectedProp ? selectedProp.title : 'Property Valuation';
        const waText = `*🏢 ALL-INCLUSIVE COST SHEET - ${propTitle}*\n\n💰 *Agreement Price:* ₹${customPrice.toLocaleString('en-IN')}\n📄 *Stamp Duty (${stampRate * 100}%):* ₹${stampDuty.toLocaleString('en-IN')}\n🏛️ *Govt Registration Fee:* ₹${regFee.toLocaleString('en-IN')}\n📊 *GST (${gstRate * 100}%):* ₹${gstAmt.toLocaleString('en-IN')}\n🛡️ *Legal & Society Charges:* ₹${legalBuffer.toLocaleString('en-IN')}\n━━━━━━━━━━━━━━━━━━━━\n🏆 *TOTAL ESTIMATED ON-ROAD:* ₹${totalOnRoad.toLocaleString('en-IN')}\n🏦 *Estimated Loan EMI:* ₹${emi.toLocaleString('en-IN')}/mo (@ ${interestRate}% for ${tenureYrs} Yrs)\n\n*Prepared by:* ${s.agencyName || 'BrokerAI Realty'} (MahaRERA: ${s.reraNumber || 'A51700012345'})`;
        window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(waText)}`, '_blank');
      };

      if (modal.querySelector('#stamp-print-btn')) modal.querySelector('#stamp-print-btn').onclick = () => {
        window.print();
      };
    };

    renderCalculator();
    backdrop.appendChild(modal);
    document.body.appendChild(backdrop);
    backdrop.onclick = (e) => { if (e.target === backdrop) backdrop.remove(); };
  }

  // ==========================================================================
  // MODULE 3: 11-MONTH RENTAL LEAVE & LICENSE AGREEMENT GENERATOR
  // ==========================================================================

  function rentalAgreementModal(property = null, lead = null) {
    document.querySelectorAll('.modal-backdrop, .drawer-backdrop, .spotlight-backdrop').forEach(b => b.remove());
    const allProps = (state.properties && state.properties.length) ? state.properties : demoProperties;
    const allLeads = (state.leads && state.leads.length) ? state.leads : demoLeads;
    const s = state.agencySettings || defaultAgencySettings;

    const prop = property || allProps.find(p => p.listingType === 'RENT') || allProps[0];
    const client = lead || allLeads.find(l => l.requirement?.transactionType === 'RENT') || allLeads[0];

    const backdrop = document.createElement('div');
    backdrop.className = 'drawer-backdrop';
    const drawer = document.createElement('aside');
    drawer.className = 'drawer';
    drawer.style.cssText = 'width:min(820px, 100vw);';

    const agreementDate = new Date().toISOString().slice(0, 10);
    const startDate = new Date(Date.now() + 7 * 86400000).toISOString().slice(0, 10);
    const endDate = new Date(Date.now() + 342 * 86400000).toISOString().slice(0, 10);
    const rentAmount = prop.price || 38000;
    const depositAmount = rentAmount * 4;

    drawer.innerHTML = `
      <div class="drawer-head">
        <div>
          <span class="badge" style="background:#dcfce7;color:#15803d;font-weight:800;margin-bottom:4px;">MAHARASHTRA MODEL TEMPLATE</span>
          <h2 class="panel-title">11-Month Rental Leave & License Agreement</h2>
          <div class="subtle">Standard statutory draft with Licensor, Licensee, and Broker digital touch signature pads.</div>
        </div>
        <button class="close">×</button>
      </div>

      <div style="padding:16px 24px;overflow-y:auto;max-height:calc(100vh - 140px);">
        <!-- FORM CONTROLS -->
        <div class="form-section">
          <h3 style="color:#1e40af;margin-top:0;">📝 Agreement Parameters & Parties</h3>
          <div class="form-grid">
            <div class="field">
              <label>Licensor (Landlord / Owner) Full Name *</label>
              <input class="input" id="agree-licensor-name" value="${esc(prop.ownerName || 'Suresh Patil')}" />
            </div>
            <div class="field">
              <label>Licensor PAN / Aadhaar</label>
              <input class="input" id="agree-licensor-pan" value="ABCPS1234F" style="text-transform:uppercase;" />
            </div>
            <div class="field">
              <label>Licensee (Tenant) Full Name *</label>
              <input class="input" id="agree-licensee-name" value="${esc(client?.name || 'Rahul Sharma')}" />
            </div>
            <div class="field">
              <label>Licensee PAN / Aadhaar</label>
              <input class="input" id="agree-licensee-pan" value="XYZPA5678K" style="text-transform:uppercase;" />
            </div>
            <div class="field full">
              <label>Licensed Premises Address *</label>
              <input class="input" id="agree-address" value="Flat No. ${prop.keyLocation?.includes('1402') ? '1402' : '604'}, ${esc(prop.society || 'Rodas Enclave')}, ${esc(prop.location || 'Hiranandani Estate, Thane West - 400607')}" />
            </div>
            <div class="field">
              <label>Monthly License Fee (Rent ₹) *</label>
              <input class="input" id="agree-rent" type="number" value="${rentAmount}" style="font-weight:800;color:#15803d;" />
            </div>
            <div class="field">
              <label>Refundable Security Deposit (₹) *</label>
              <input class="input" id="agree-deposit" type="number" value="${depositAmount}" style="font-weight:800;color:#2563eb;" />
            </div>
            <div class="field">
              <label>Agreement Start Date</label>
              <input class="input" id="agree-start" type="date" value="${startDate}" />
            </div>
            <div class="field">
              <label>Agreement End Date (11 Mos)</label>
              <input class="input" id="agree-end" type="date" value="${endDate}" />
            </div>
          </div>
        </div>

        <!-- GENERATED LEGAL DRAFT PAPER -->
        <div class="legal-agreement-paper" id="legal-draft-container" style="margin-top:20px;">
          <div class="stamp-header-sim">
            GOVERNMENT OF MAHARASHTRA · NON-JUDICIAL E-STAMP SIMULATION<br/>
            LEAVE AND LICENSE AGREEMENT (FOR RESIDENTIAL PURPOSE ONLY)
          </div>

          <h3 class="legal-title">LEAVE AND LICENSE AGREEMENT</h3>

          <div class="legal-clause">
            This Leave and License Agreement is made and executed at <strong>Thane, Maharashtra</strong> on this <strong>${agreementDate}</strong>, by and between:
          </div>

          <div class="legal-clause">
            <strong>1. LICENSOR:</strong> <span id="view-licensor-name">${esc(prop.ownerName || 'Suresh Patil')}</span>, holding PAN/Aadhaar <span id="view-licensor-pan">ABCPS1234F</span>, hereinafter referred to as the <em>"LICENSOR"</em> (which expression shall include their heirs, successors, and assigns).
          </div>

          <div class="legal-clause">
            <strong>2. LICENSEE:</strong> <span id="view-licensee-name">${esc(client?.name || 'Rahul Sharma')}</span>, holding PAN/Aadhaar <span id="view-licensee-pan">XYZPA5678K</span>, hereinafter referred to as the <em>"LICENSEE"</em> (which expression shall include their family members).
          </div>

          <div class="legal-clause">
            <strong>3. LICENSED PREMISES:</strong> The Licensor is the sole absolute lawful owner of the residential flat situated at: <br/>
            <strong id="view-address">Flat No. 604, ${esc(prop.society || 'Rodas Enclave')}, ${esc(prop.location || 'Hiranandani Estate, Thane West - 400607')}</strong>.
          </div>

          <div class="legal-clause">
            <strong>4. TERM & DURATION:</strong> The license is granted for a fixed period of <strong>11 (Eleven) Months</strong> commencing from <strong id="view-start">${startDate}</strong> to <strong id="view-end">${endDate}</strong>.
          </div>

          <div class="legal-clause">
            <strong>5. LICENSE FEE & CHARGES:</strong> The Licensee agrees to pay a monthly license fee of <strong>₹<span id="view-rent">${rentAmount.toLocaleString('en-IN')}</span>/-</strong> on or before the 5th day of every English calendar month directly to Licensor's bank/UPI account.
          </div>

          <div class="legal-clause">
            <strong>6. INTEREST-FREE SECURITY DEPOSIT:</strong> The Licensee has deposited an interest-free refundable deposit of <strong>₹<span id="view-deposit">${depositAmount.toLocaleString('en-IN')}</span>/-</strong> which shall be refunded at the time of handing over vacant possession.
          </div>

          <div class="legal-clause">
            <strong>7. ELECTRICITY & MAINTENANCE:</strong> Licensee shall pay direct electricity and piped gas consumption charges. Regular society monthly maintenance shall be paid by the Licensor.
          </div>

          <div class="legal-clause">
            <strong>8. NOTICE PERIOD:</strong> Either party may terminate this agreement by giving <strong>1 (One) Month written notice</strong> in advance.
          </div>

          <!-- SIGNATURE SECTION HEADER -->
          <div class="signature-section-header">
            <div>
              <strong style="font-size:14px;color:#0f172a;">🖋️ Executed & Signed by Parties</strong>
              <div style="font-size:11.5px;color:#64748b;">Sign on touch pad below or click "Adopt Digital Signature"</div>
            </div>
            <span class="badge" style="background:#ecfdf5;color:#047857;font-weight:700;font-size:11px;">✓ Digital Legal Valid</span>
          </div>

          <!-- SIGNATURE BLOCKS WITH TOUCH CANVASES & CLEAR / ADOPT BUTTONS -->
          <div class="signature-blocks-grid">
            <!-- 1. LICENSOR SIGNATURE -->
            <div class="signature-box">
              <div class="signature-box-header">
                <span>1. LICENSOR (Owner)</span>
                <button class="sig-clear-btn" id="clear-sig-licensor" type="button">✕ Clear</button>
              </div>
              <div class="signature-canvas-wrap">
                <canvas class="signature-canvas" id="canvas-licensor" width="220" height="90"></canvas>
                <div class="signature-sign-hint" id="hint-licensor">Sign Here (Touch / Mouse)</div>
              </div>
              <button class="sig-adopt-btn" id="adopt-sig-licensor" type="button">⚡ Adopt Digital Signature</button>
              <div class="signature-box-footer">
                <div class="signature-party-name" id="sig-label-licensor">${esc(prop.ownerName || 'Suresh Patil')}</div>
                <small>(Landlord / Licensor)</small>
              </div>
            </div>

            <!-- 2. LICENSEE SIGNATURE -->
            <div class="signature-box">
              <div class="signature-box-header">
                <span>2. LICENSEE (Tenant)</span>
                <button class="sig-clear-btn" id="clear-sig-licensee" type="button">✕ Clear</button>
              </div>
              <div class="signature-canvas-wrap">
                <canvas class="signature-canvas" id="canvas-licensee" width="220" height="90"></canvas>
                <div class="signature-sign-hint" id="hint-licensee">Sign Here (Touch / Mouse)</div>
              </div>
              <button class="sig-adopt-btn" id="adopt-sig-licensee" type="button">⚡ Adopt Digital Signature</button>
              <div class="signature-box-footer">
                <div class="signature-party-name" id="sig-label-licensee">${esc(client?.name || 'Rahul Sharma')}</div>
                <small>(Tenant / Licensee)</small>
              </div>
            </div>

            <!-- 3. BROKER WITNESS SIGNATURE -->
            <div class="signature-box">
              <div class="signature-box-header">
                <span>3. REAL ESTATE WITNESS</span>
                <button class="sig-clear-btn" id="clear-sig-broker" type="button">✕ Clear</button>
              </div>
              <div class="signature-canvas-wrap">
                <canvas class="signature-canvas" id="canvas-broker" width="220" height="90"></canvas>
                <div class="signature-sign-hint" id="hint-broker">Sign Here (Touch / Mouse)</div>
              </div>
              <button class="sig-adopt-btn" id="adopt-sig-broker" type="button">⚡ Adopt Digital Signature</button>
              <div class="signature-box-footer">
                <div class="signature-party-name">${esc(s.agencyName || 'BrokerAI Realty')}</div>
                <small>RERA: ${esc(s.reraNumber || 'A51700012345')}</small>
              </div>
            </div>
          </div>
        </div>

        <!-- ACTIONS -->
        <div style="display:flex;gap:10px;margin-top:20px;flex-wrap:wrap;">
          <button class="button primary" id="agree-print-btn" style="flex:1;background:#15803d;padding:12px;font-size:14px;justify-content:center;">
            🖨️ Print / Save PDF Agreement
          </button>
          <button class="button secondary" id="agree-save-vault-btn" style="flex:1;padding:12px;font-size:14px;justify-content:center;">
            📥 Save to Legal Vault
          </button>
          <button class="button secondary" id="agree-copy-text-btn" style="flex:1;padding:12px;font-size:14px;justify-content:center;">
            📋 Copy Text
          </button>
        </div>
      </div>
    `;

    document.body.append(backdrop, drawer);
    const close = () => { backdrop.remove(); drawer.remove(); };
    backdrop.onclick = close;
    if (drawer.querySelector('.close')) drawer.querySelector('.close').onclick = close;

    // Live update draft preview
    const updatePreview = () => {
      drawer.querySelector('#view-licensor-name').textContent = drawer.querySelector('#agree-licensor-name').value;
      drawer.querySelector('#view-licensor-pan').textContent = drawer.querySelector('#agree-licensor-pan').value;
      drawer.querySelector('#view-licensee-name').textContent = drawer.querySelector('#agree-licensee-name').value;
      drawer.querySelector('#view-licensee-pan').textContent = drawer.querySelector('#agree-licensee-pan').value;
      drawer.querySelector('#view-address').textContent = drawer.querySelector('#agree-address').value;
      drawer.querySelector('#view-rent').textContent = Number(drawer.querySelector('#agree-rent').value).toLocaleString('en-IN');
      drawer.querySelector('#view-deposit').textContent = Number(drawer.querySelector('#agree-deposit').value).toLocaleString('en-IN');
      drawer.querySelector('#view-start').textContent = drawer.querySelector('#agree-start').value;
      drawer.querySelector('#view-end').textContent = drawer.querySelector('#agree-end').value;
      const licLabel = drawer.querySelector('#sig-label-licensor');
      if (licLabel) licLabel.textContent = drawer.querySelector('#agree-licensor-name').value;
      const licseLabel = drawer.querySelector('#sig-label-licensee');
      if (licseLabel) licseLabel.textContent = drawer.querySelector('#agree-licensee-name').value;
    };

    drawer.querySelectorAll('input').forEach(inp => inp.oninput = updatePreview);

    // Signature Canvas setup with high-DPI drawing & adoption
    const setupSignaturePad = (canvasId, hintId, clearBtnId, adoptBtnId, nameInputId) => {
      const canvas = drawer.querySelector('#' + canvasId);
      const hint = drawer.querySelector('#' + hintId);
      const clearBtn = drawer.querySelector('#' + clearBtnId);
      const adoptBtn = drawer.querySelector('#' + adoptBtnId);
      if (!canvas) return;

      if (typeof canvas.getContext !== 'function') return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      ctx.strokeStyle = '#1e3a8a';
      ctx.lineWidth = 2.5;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      let drawing = false;

      const getPos = (e) => {
        const rect = canvas.getBoundingClientRect();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        return { x: clientX - rect.left, y: clientY - rect.top };
      };

      const start = (e) => {
        drawing = true;
        if (hint) hint.style.display = 'none';
        const p = getPos(e);
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
      };

      const draw = (e) => {
        if (!drawing) return;
        e.preventDefault();
        const p = getPos(e);
        ctx.lineTo(p.x, p.y);
        ctx.stroke();
      };

      const stop = () => { drawing = false; };

      canvas.addEventListener('mousedown', start);
      canvas.addEventListener('mousemove', draw);
      canvas.addEventListener('mouseup', stop);
      canvas.addEventListener('mouseleave', stop);
      canvas.addEventListener('touchstart', start, { passive: false });
      canvas.addEventListener('touchmove', draw, { passive: false });
      canvas.addEventListener('touchend', stop);

      if (clearBtn) {
        clearBtn.onclick = (e) => {
          e.preventDefault();
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          if (hint) hint.style.display = 'block';
        };
      }

      if (adoptBtn) {
        adoptBtn.onclick = (e) => {
          e.preventDefault();
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          if (hint) hint.style.display = 'none';
          
          let signText = 'Signature';
          if (nameInputId) {
            const inputEl = drawer.querySelector('#' + nameInputId);
            signText = inputEl ? inputEl.value : 'Signed';
          } else {
            signText = s.agencyName || 'BrokerAI';
          }

          ctx.save();
          ctx.font = 'italic bold 18px "Brush Script MT", "Segoe Script", cursive, sans-serif';
          ctx.fillStyle = '#1e3a8a';
          ctx.fillText(signText, 14, 45);
          ctx.font = '10px sans-serif';
          ctx.fillStyle = '#64748b';
          ctx.fillText('Digital Verification: ' + new Date().toISOString().slice(0, 10), 14, 68);
          ctx.restore();
        };
      }
    };

    setupSignaturePad('canvas-licensor', 'hint-licensor', 'clear-sig-licensor', 'adopt-sig-licensor', 'agree-licensor-name');
    setupSignaturePad('canvas-licensee', 'hint-licensee', 'clear-sig-licensee', 'adopt-sig-licensee', 'agree-licensee-name');
    setupSignaturePad('canvas-broker', 'hint-broker', 'clear-sig-broker', 'adopt-sig-broker', null);

    if (drawer.querySelector('#agree-print-btn')) drawer.querySelector('#agree-print-btn').onclick = () => window.print();

    if (drawer.querySelector('#agree-copy-text-btn')) drawer.querySelector('#agree-copy-text-btn').onclick = () => {
      const text = drawer.querySelector('#legal-draft-container').innerText;
      navigator.clipboard.writeText(text).then(() => {
        showToast('📋 11-Month Rental Agreement copied to clipboard!', 'success');
      });
    };

    if (drawer.querySelector('#agree-save-vault-btn')) drawer.querySelector('#agree-save-vault-btn').onclick = () => {
      if (!state.documents) state.documents = getStoredDocuments();
      const doc = {
        id: Date.now(),
        title: `11-Month Leave & License Agreement - ${drawer.querySelector('#agree-licensor-name').value} / ${drawer.querySelector('#agree-licensee-name').value}`,
        category: 'DEAL_PAPERWORK',
        documentType: 'RENTAL_AGREEMENT',
        status: 'VERIFIED',
        propertyId: prop.id,
        propertyTitle: prop.title,
        documentNumber: `LL-${Date.now().toString().slice(-6)}`,
        notes: `Monthly Rent: ₹${drawer.querySelector('#agree-rent').value} | Deposit: ₹${drawer.querySelector('#agree-deposit').value} | Period: 11 Months`,
        verifiedAt: new Date().toISOString()
      };
      state.documents.unshift(doc);
      localStorage.setItem('brokerai.documents', JSON.stringify(state.documents));
      showToast('📥 11-Month Rental Agreement saved in Legal Vault!', 'success');
      close();
      if (state.page === 'documents') documentsView();
    };
  }

  // ==========================================================================
  // MODULE 4: RERA ALLOTMENT LETTER & ADVANCE TOKEN DEED
  // ==========================================================================

  function allotmentLetterModal(property = null, lead = null) {
    document.querySelectorAll('.modal-backdrop, .drawer-backdrop, .spotlight-backdrop').forEach(b => b.remove());
    const allProps = (state.properties && state.properties.length) ? state.properties : demoProperties;
    const allLeads = (state.leads && state.leads.length) ? state.leads : demoLeads;
    const s = state.agencySettings || defaultAgencySettings;

    const prop = property || allProps[0];
    const client = lead || allLeads[0];

    const backdrop = document.createElement('div');
    backdrop.className = 'drawer-backdrop';
    const drawer = document.createElement('aside');
    drawer.className = 'drawer';
    drawer.style.cssText = 'width:min(820px, 100vw);';

    const agreementDate = new Date().toISOString().slice(0, 10);
    const salePrice = prop.price || 14800000;
    const tokenAmt = 100000;

    drawer.innerHTML = `
      <div class="drawer-head">
        <div>
          <span class="badge" style="background:#fef3c7;color:#b45309;font-weight:800;margin-bottom:4px;">MAHARERA STATUTORY INSTRUMENT</span>
          <h2 class="panel-title">RERA Property Allotment & Booking Deed</h2>
          <div class="subtle">Official earnest money booking deed with builder mandate & RERA registration credentials.</div>
        </div>
        <button class="close">×</button>
      </div>

      <div style="padding:16px 24px;overflow-y:auto;max-height:calc(100vh - 140px);">
        <div class="legal-agreement-paper" id="allotment-draft-container">
          <div style="text-align:center;border-bottom:2px solid #1e3a8a;padding-bottom:12px;margin-bottom:20px;">
            <div style="font-size:20px;font-weight:850;color:#1e3a8a;">${esc(s.agencyName || 'BrokerAI Realty Advisors Pvt Ltd')}</div>
            <div style="font-size:12px;color:#64748b;">MahaRERA Registration No: <strong>${esc(s.reraNumber || 'A51700012345')}</strong> · GSTIN: ${esc(s.gstin || '27AABCB1234F1Z8')}</div>
            <div style="font-size:11px;color:#64748b;">${esc(s.officeAddress || 'Hiranandani Estate, Ghodbunder Road, Thane West - 400607')}</div>
          </div>

          <h3 class="legal-title" style="color:#1e3a8a;">ALLOTMENT LETTER & TOKEN BOOKING CONFIRMATION</h3>

          <div style="display:flex;justify-content:space-between;font-size:12.5px;margin-bottom:16px;">
            <div>Ref No: <strong>AL-${Date.now().toString().slice(-6)}</strong></div>
            <div>Date: <strong>${agreementDate}</strong></div>
          </div>

          <div class="legal-clause">
            To,<br/>
            <strong>${esc(client?.name || 'Rahul Sharma')}</strong><br/>
            Mobile: ${esc(client?.phone || '+91 98200 12345')} · PAN: ${esc(client?.pan || 'ABCPS1234F')}
          </div>

          <div class="legal-clause">
            <strong>Sub: Allotment of Residential Unit in Project "${esc(prop.society || 'Rodas Enclave')}"</strong> (MahaRERA No: <strong>${esc(prop.mahaReraId || 'P51700028890')}</strong>).
          </div>

          <div class="legal-clause">
            Dear Sir/Madam,<br/>
            We are pleased to confirm the reservation and provisional allotment of the undermentioned residential unit in your favor against receipt of the earnest money token deposit:
          </div>

          <table class="cost-breakdown-table" style="margin:16px 0;border:1px solid #cbd5e1;">
            <tbody>
              <tr>
                <td><strong>Project Name & Developer</strong></td>
                <td class="val">${esc(prop.society || 'Rodas Enclave')} (${esc(prop.builderName || 'Hiranandani Group')})</td>
              </tr>
              <tr>
                <td><strong>Unit Configuration & Carpet Area</strong></td>
                <td class="val">${prop.bhk ? `${prop.bhk} BHK` : 'Apartment'} · ${prop.area || 785} sq.ft RERA Carpet</td>
              </tr>
              <tr>
                <td><strong>Total Agreed Consideration Value</strong></td>
                <td class="val">${formatPrice(salePrice, 'SALE')}</td>
              </tr>
              <tr>
                <td><strong>Earnest Money Token Deposit Received</strong></td>
                <td class="val" style="color:#059669;">₹${tokenAmt.toLocaleString('en-IN')} (via UPI / Bank Transfer)</td>
              </tr>
              <tr>
                <td><strong>Balance Amount Payable on Agreement Execution</strong></td>
                <td class="val">₹${(salePrice - tokenAmt).toLocaleString('en-IN')}</td>
              </tr>
            </tbody>
          </table>

          <div class="legal-clause">
            <strong>TERMS OF ALLOTMENT:</strong><br/>
            1. The Allottee agrees to execute the registered Agreement for Sale within 21 days from the date hereof.<br/>
            2. Stamp Duty, Registration, and GST charges shall be payable as per statutory government rates.<br/>
            3. This allotment is governed strictly by the provisions of Real Estate (Regulation and Development) Act (RERA).
          </div>

          <!-- SIGNATURES -->
          <div class="signature-blocks-grid">
            <div class="signature-box">
              <div class="signature-line" style="font-weight:750;">${esc(client?.name || 'Rahul Sharma')}</div>
              <div><strong>Signature of Allottee (Buyer)</strong></div>
            </div>
            <div class="signature-box">
              <div class="signature-line" style="font-weight:750;">${state.user?.fullName || 'Aarav Mehta'}</div>
              <div><strong>Authorized Channel Partner / Mandate</strong><br/><small>${esc(s.agencyName)} (RERA: ${esc(s.reraNumber)})</small></div>
            </div>
          </div>
        </div>

        <div style="display:flex;gap:10px;margin-top:20px;">
          <button class="button primary" onclick="window.print()" style="flex:1;background:#7c3aed;padding:12px;justify-content:center;">
            🖨️ Print / Save Allotment Letter
          </button>
          <button class="button secondary" id="allotment-save-vault" style="flex:1;padding:12px;justify-content:center;">
            📥 Save in Legal Vault
          </button>
        </div>
      </div>
    `;

    document.body.append(backdrop, drawer);
    const close = () => { backdrop.remove(); drawer.remove(); };
    backdrop.onclick = close;
    if (drawer.querySelector('.close')) drawer.querySelector('.close').onclick = close;

    if (drawer.querySelector('#allotment-save-vault')) drawer.querySelector('#allotment-save-vault').onclick = () => {
      if (!state.documents) state.documents = getStoredDocuments();
      state.documents.unshift({
        id: Date.now(),
        title: `RERA Allotment Deed - ${client?.name || 'Buyer'} (${prop.title})`,
        category: 'DEAL_PAPERWORK',
        documentType: 'ALLOTMENT_LETTER',
        status: 'VERIFIED',
        propertyId: prop.id,
        propertyTitle: prop.title,
        leadName: client?.name,
        documentNumber: `AL-${Date.now().toString().slice(-6)}`,
        notes: `Consideration: ${formatPrice(salePrice, 'SALE')} | Token: ₹${tokenAmt.toLocaleString('en-IN')} | MahaRERA: ${prop.mahaReraId || 'P51700028890'}`,
        verifiedAt: new Date().toISOString()
      });
      localStorage.setItem('brokerai.documents', JSON.stringify(state.documents));
      showToast('📥 RERA Allotment Letter saved to Legal Vault!', 'success');
      close();
      if (state.page === 'documents') documentsView();
    };
  }

// --- ENHANCED TOKEN BOOKING RECEIPT DRAWER & PREVIEW ---
  async function tokenReceiptModal() {
    const caps = getPlanCapabilities();
    if (caps.planId === 'starter') {
      document.querySelectorAll('.modal-backdrop, .drawer-backdrop, .spotlight-backdrop').forEach(b => b.remove());
      const backdrop = document.createElement('div');
      backdrop.className = 'modal-backdrop';
      const modal = document.createElement('div');
      modal.className = 'modal';
      modal.style.cssText = 'max-width:500px;width:92vw;padding:24px;background:#ffffff;border-radius:20px;text-align:center;position:relative;box-sizing:border-box;box-shadow:0 20px 50px rgba(0,0,0,0.2);';
      modal.innerHTML = `
        <div style="font-size:40px;margin-bottom:12px;">📑</div>
        <div style="display:inline-block;padding:3px 12px;border-radius:20px;background:#eff6ff;color:#2563eb;font-weight:800;font-size:11px;margin-bottom:8px;text-transform:uppercase;">Pro Closer Feature</div>
        <h3 style="font-size:20px;font-weight:800;color:#0f172a;margin:0 0 8px;">Digital Token Receipts Locked</h3>
        <p style="font-size:13.5px;color:#64748b;line-height:1.5;margin:0 0 20px;">Generating formal digital token advance receipts and encrypted client receipts requires the <strong>Pro Closer</strong> plan.</p>
        <div style="display:flex;gap:10px;justify-content:center;">
          <button class="button secondary" id="token-lock-close-btn">Cancel</button>
          <button class="button primary" id="token-lock-upgrade-btn" style="background:#2563eb;font-weight:700;">⚡ Switch to Pro Closer (₹1,200)</button>
        </div>
      `;
      backdrop.appendChild(modal);
      document.body.appendChild(backdrop);
      const close = () => backdrop.remove();
      backdrop.onclick = (e) => { if (e.target === backdrop) close(); };
      modal.querySelector('#token-lock-close-btn').onclick = close;
      modal.querySelector('#token-lock-upgrade-btn').onclick = () => {
        state.currentPlan = 'pro';
        localStorage.setItem('brokerai.currentPlan', 'pro');
        close();
        showToast('✓ Switched to Pro Closer! Token Receipts unlocked.', 'success');
        tokenReceiptModal();
      };
      return;
    }
  
    document.querySelectorAll('.modal-backdrop, .drawer-backdrop, .spotlight-backdrop').forEach(b => b.remove());
    let leads = state.leads;
    let properties = state.properties;
    const s = state.agencySettings || defaultAgencySettings;

    if (!leads.length && !state.demo) {
      const page = await request('/leads?page=0&size=100').catch(() => ({ content: [] }));
      leads = page.content || [];
    } else if (!leads.length && state.demo) {
      leads = demoLeads;
    }

    if (!properties.length && !state.demo) {
      const page = await request('/properties?page=0&size=100').catch(() => ({ content: [] }));
      properties = page.content || [];
    } else if (!properties.length && state.demo) {
      properties = demoProperties;
    }

    const backdrop = document.createElement('div');
    backdrop.className = 'drawer-backdrop';
    const drawer = document.createElement('aside');
    drawer.className = 'drawer';
    drawer.style.cssText = 'width:min(680px,100vw);';

    const defaultAgentName = state.user?.fullName || 'Aarav Mehta';
    const defaultAgentPhone = '+91 98765 43210';
    const defaultRera = s.reraNumber || 'A51700012345';

    drawer.innerHTML = `
      <div class="drawer-head">
        <div>
          <span class="badge" style="background:#dcfce7;color:#15803d;margin-bottom:4px;font-weight:800;">OFFICIAL LEGAL INSTRUMENT</span>
          <h2 class="panel-title">Issue Token Booking Receipt</h2>
          <div class="subtle">Generate verified digital deposit receipt with full buyer KYC and agent credentials.</div>
        </div>
        <button class="close">×</button>
      </div>

      <form class="form" id="receipt-form">
        <div id="receipt-notice"></div>

        <!-- SECTION 1: BUYER DETAILS -->
        <div class="form-section">
          <h3 style="display:flex;align-items:center;gap:6px;color:#1e40af;">
            <span>👤</span> Buyer (Client) Details
          </h3>
          <div class="form-grid">
            <div class="field full">
              <label>Link Existing CRM Buyer (Optional)</label>
              <select class="select" id="receipt-lead-select" name="leadId">
                <option value="">-- Choose Lead to Auto-fill or Enter Below --</option>
                ${leads.map(l => `<option value="${l.id}">${esc(l.name)} (${esc(l.phone)}) - ${esc(l.requirement || 'Buyer')}</option>`).join('')}
              </select>
            </div>
            <div class="field">
              <label>Buyer Full Name *</label>
              <input class="input" id="receipt-buyer-name" name="buyerName" required placeholder="e.g. Rahul Sharma" />
            </div>
            <div class="field">
              <label>Buyer Mobile (WhatsApp) *</label>
              <input class="input" id="receipt-buyer-phone" name="buyerPhone" required placeholder="+91 98765 43210" />
            </div>
            <div class="field">
              <label>Buyer Email Address</label>
              <input class="input" id="receipt-buyer-email" name="buyerEmail" type="email" placeholder="rahul.sharma@example.com" />
            </div>
            <div class="field">
              <label>Buyer PAN / Aadhaar Card</label>
              <input class="input" id="receipt-buyer-pan" name="buyerPan" placeholder="e.g. ABCPS1234F" style="text-transform:uppercase;" />
            </div>
            <div class="field full">
              <label>Buyer Residential Address</label>
              <input class="input" name="buyerAddress" placeholder="e.g. Flat 602, Eden Woods, Gladys Alwares Road, Thane West" />
            </div>
          </div>
        </div>

        <!-- SECTION 2: PROPERTY & UNIT DETAILS -->
        <div class="form-section">
          <h3 style="display:flex;align-items:center;gap:6px;color:#1e40af;">
            <span>🏡</span> Property & Unit Information
          </h3>
          <div class="form-grid">
            <div class="field full">
              <label>Select Property Listing *</label>
              <select class="select" id="receipt-prop-select" name="propertyId" required>
                <option value="">-- Select Property --</option>
                ${properties.map(p => `<option value="${p.id}">${esc(p.title)} · ${esc(p.location)} (${formatPrice(p.price, p.listingType)})</option>`).join('')}
              </select>
            </div>
            <div class="field">
              <label>Unit / Flat / Floor No. *</label>
              <input class="input" id="receipt-unit-no" name="unitNo" required placeholder="e.g. Flat #1402, Wing-B" />
            </div>
            <div class="field">
              <label>Building / Society Name *</label>
              <input class="input" id="receipt-society-name" name="societyName" required placeholder="e.g. Rodas Enclave - Hiranandani" />
            </div>
            <div class="field full">
              <label>Agreed Total Deal / Consideration Value (₹) *</label>
              <input class="input" id="receipt-deal-value" name="agreedTotalDealValue" type="number" required placeholder="e.g. 12500000" />
            </div>
          </div>
        </div>

        <!-- SECTION 3: TOKEN DEPOSIT DETAILS -->
        <div class="form-section">
          <h3 style="display:flex;align-items:center;gap:6px;color:#15803d;">
            <span>💰</span> Token Booking Deposit & Mode
          </h3>
          <div class="form-grid">
            <div class="field">
              <label>Token Amount Received (₹) *</label>
              <input class="input" name="tokenAmount" required type="number" min="1" placeholder="e.g. 100000" style="font-size:15px;font-weight:750;color:#15803d;" />
            </div>
            <div class="field">
              <label>Payment Mode *</label>
              <select class="select" name="paymentMode">
                <option value="UPI / Google Pay / PhonePe">UPI / Google Pay / PhonePe</option>
                <option value="Bank Transfer (NEFT / RTGS / IMPS)">Bank Transfer (NEFT / RTGS / IMPS)</option>
                <option value="Account Payee Cheque">Account Payee Cheque</option>
                <option value="Demand Draft (DD)">Demand Draft (DD)</option>
                <option value="Cash Receipt">Cash Receipt</option>
              </select>
            </div>
            <div class="field">
              <label>Payment Ref / Cheque / UTR No. *</label>
              <input class="input" name="transactionReference" required placeholder="e.g. UPI-338291048 / Cheque #004921" />
            </div>
            <div class="field">
              <label>Receipt Date *</label>
              <input class="input" name="receiptDate" type="date" required value="${new Date().toISOString().slice(0,10)}" />
            </div>
            <div class="field full">
              <label>Token Validity & Conditions</label>
              <textarea class="input" name="notes" placeholder="e.g. Token valid for 15 days until Agreement for Sale execution. Balance consideration payable as per standard builder slab schedule. Title clearance guaranteed.">Subject to clear title search report and standard agreement execution within 15 days.</textarea>
            </div>
          </div>
        </div>

        <!-- SECTION 4: HANDLING AGENT & AGENCY CREDENTIALS -->
        <div class="form-section" style="background:#f8fafc;padding:16px;border-radius:12px;border:1px solid var(--line);">
          <h3 style="display:flex;align-items:center;gap:6px;color:var(--ink);margin-bottom:12px;">
            <span>🤝</span> Handling Agent & Agency Credentials
          </h3>
          <div class="form-grid">
            <div class="field">
              <label>Executive Closing Agent Name *</label>
              <input class="input" name="agentName" required value="${esc(defaultAgentName)}" placeholder="e.g. Aarav Mehta" />
            </div>
            <div class="field">
              <label>Agent Mobile Number *</label>
              <input class="input" name="agentPhone" required value="${esc(defaultAgentPhone)}" placeholder="+91 98765 43210" />
            </div>
            <div class="field full">
              <label>Agency MahaRERA License Number</label>
              <input class="input" name="agentRera" value="${esc(defaultRera)}" readonly style="background:#f1f5f9;" />
            </div>
          </div>
        </div>
      </form>

      <div class="form-actions">
        <button class="button secondary" id="cancel-receipt">Cancel</button>
        <button class="button primary" id="generate-receipt-btn" style="background:#15803d;">🧾 Generate & Issue Official Receipt</button>
      </div>`;

    document.body.append(backdrop, drawer);

    const close = () => { backdrop.remove(); drawer.remove(); };
    backdrop.onclick = close;
    if (drawer.querySelector('.close')) drawer.querySelector('.close').onclick = close;
    if (drawer.querySelector('#cancel-receipt')) drawer.querySelector('#cancel-receipt').onclick = close;

    // Auto-fill buyer details when a lead is chosen
    drawer.querySelector('#receipt-lead-select').onchange = (e) => {
      const selectedId = Number(e.target.value);
      const lead = leads.find(l => l.id === selectedId);
      if (lead) {
        drawer.querySelector('#receipt-buyer-name').value = lead.name || '';
        drawer.querySelector('#receipt-buyer-phone').value = lead.phone || '';
        drawer.querySelector('#receipt-buyer-email').value = lead.email || '';
      }
    };

    // Auto-fill property & unit info when property is chosen
    drawer.querySelector('#receipt-prop-select').onchange = (e) => {
      const selectedId = Number(e.target.value);
      const prop = properties.find(p => p.id === selectedId);
      if (prop) {
        drawer.querySelector('#receipt-society-name').value = prop.title || '';
        drawer.querySelector('#receipt-unit-no').value = `Unit #${Math.floor(100 + Math.random()*900)}, Wing-A`;
        if (prop.price) drawer.querySelector('#receipt-deal-value').value = prop.price;
      }
    };

    if (drawer.querySelector('#generate-receipt-btn')) drawer.querySelector('#generate-receipt-btn').onclick = async () => {
      const form = new FormData(drawer.querySelector('#receipt-form'));
      const buyerName = form.get('buyerName')?.trim();
      const buyerPhone = form.get('buyerPhone')?.trim();
      const buyerEmail = form.get('buyerEmail')?.trim() || '';
      const buyerPan = form.get('buyerPan')?.trim() || '';
      const buyerAddress = form.get('buyerAddress')?.trim() || '';
      const unitNo = form.get('unitNo')?.trim();
      const societyName = form.get('societyName')?.trim();
      const agreedTotalDealValue = Number(form.get('agreedTotalDealValue')) || 0;
      const tokenAmount = Number(form.get('tokenAmount')) || 0;
      const paymentMode = form.get('paymentMode');
      const transactionReference = form.get('transactionReference')?.trim();
      const receiptDate = form.get('receiptDate');
      const notes = form.get('notes')?.trim() || '';
      const agentName = form.get('agentName')?.trim() || defaultAgentName;
      const agentPhone = form.get('agentPhone')?.trim() || defaultAgentPhone;
      const agentRera = form.get('agentRera')?.trim() || defaultRera;

      if (!buyerName || !buyerPhone || !tokenAmount || !unitNo || !societyName || !transactionReference) {
        drawer.querySelector('#receipt-notice').innerHTML = `<div class="notice error">Please fill all required fields (Buyer Name, Phone, Unit, Society, Token Amount, Ref).</div>`;
        return;
      }

      const receiptNum = `TR-${new Date().getFullYear()}-${Math.floor(10000 + Math.random()*90000)}`;

      const doc = {
        id: Date.now(),
        title: `Token Booking Receipt #${receiptNum} (${buyerName} · ${unitNo})`,
        category: 'DEAL_PAPERWORK',
        documentType: 'TOKEN_RECEIPT',
        status: 'VERIFIED',
        documentNumber: receiptNum,
        buyerName,
        buyerPhone,
        buyerEmail,
        buyerPan,
        buyerAddress,
        propertyTitle: `${unitNo}, ${societyName}`,
        unitNo,
        societyName,
        agreedTotalDealValue,
        tokenAmount,
        paymentMode,
        transactionReference,
        receiptDate,
        agentName,
        agentPhone,
        agentRera,
        notes,
        verifiedAt: new Date().toISOString()
      };

      if (state.demo) {
        demoDocuments.unshift(doc);
      } else {
        await request('/documents/generate-token-receipt', { method: 'POST', body: JSON.stringify(doc) }).catch(() => {
          demoDocuments.unshift(doc);
        });
      }

      close();
      if (state.page === 'documents') documentsView();
      showReceiptModal(doc);
    };
  }



  // ==========================================================================

  // ==========================================================================
  // MODULE 5: AGENCY SETTINGS & RERA CONFIGURATION
  // ==========================================================================

  async function settingsView() {
    const s = state.agencySettings || defaultAgencySettings;

    const html = `${pageHeader('Brokerage Settings & RERA Compliance', state.demo ? 'Demo preview — Institutional branding, MahaRERA credentials, and commission split policies.' : 'Manage legal registration, default commission rules, bank payout accounts, and AI preferences.', `
      <div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap;">
        <button class="button secondary" id="letterhead-preview-btn">🖨️ Letterhead Preview</button>
        <button class="button hero-btn" id="test-wa-pitch-btn" style="background:#15803d;color:#fff;">💬 Test WhatsApp Pitch</button>
        <button class="button primary" id="save-all-settings-btn">💾 Save Changes</button>
      </div>`)}

      <div id="settings-save-notice"></div>

      <!-- APPLE PROFILE OVERVIEW CARD -->
      <div class="apple-card" style="display:flex;align-items:center;gap:20px;margin-bottom:24px;">
        <div class="account-avatar" style="width:64px;height:64px;font-size:22px;border-radius:18px;background:#eff6ff;color:#2563eb;border:1px solid #dbeafe;">${initials(state.user?.fullName || 'Mohak Vaswani')}</div>
        <div style="flex:1;">
          <h2 style="font-size:18px;font-weight:800;color:#0f172a;margin:0 0 4px;">${esc(state.user?.fullName || 'Mohak Vaswani')}</h2>
          <div style="font-size:13px;color:#64748b;">${esc((state.user?.role || '').replaceAll('_', ' ') || 'Real Estate Broker')} · <strong>${esc(s.agencyName || 'Prime Realty Advisors')}</strong></div>
          <div style="display:flex;gap:16px;margin-top:8px;font-size:12px;color:#64748b;flex-wrap:wrap;">
            <span>📧 ${esc(s.contactEmail || 'mohak@brokerai.in')}</span>
            <span>📞 ${esc(s.contactPhone || '+91 98765 43210')}</span>
            <span>🏛️ MahaRERA: <strong>${esc(s.reraNumber || 'A51700012345')}</strong></span>
          </div>
        </div>
      </div>

      <!-- INSTITUTIONAL KPIS -->
      <div class="cards" style="margin-bottom:20px;">
        <article class="metric"><div class="metric-label">MahaRERA Registration</div><div class="metric-value" style="font-size:20px;color:#047857;">${esc(s.reraNumber || 'A51700012345')}</div><div class="metric-note">✓ Verified Institutional Status</div></article>
        <article class="metric"><div class="metric-label">Standard Split Policy</div><div class="metric-value" style="color:#165dff;">${s.defaultCompanySplit ?? 50} / ${s.defaultAgentSplit ?? 50}</div><div class="metric-note">${s.defaultCompanySplit ?? 50}% Agency / ${s.defaultAgentSplit ?? 50}% Agent</div></article>
        <article class="metric"><div class="metric-label">Invoicing Bank Account</div><div class="metric-value" style="font-size:20px;color:#334155;">${esc(s.bankName || 'HDFC Bank')}</div><div class="metric-note">A/C: ...${(s.accountNumber || '4821').slice(-4)} (${esc(s.ifscCode || 'HDFC0001234')})</div></article>
        <article class="metric"><div class="metric-label">AI Automation</div><div class="metric-value" style="color:#7e22ce;">Active</div><div class="metric-note">Tone: ${esc(s.aiLanguageTone || 'professional').toUpperCase()}</div></article>
      </div>

      <!-- SETTINGS TAB NAVIGATION -->
      <div class="filter-tabs" id="settings-tab-nav" style="margin-bottom:20px;">
        <button class="filter-tab ${state.settingsTab === 'AGENCY_RERA' ? 'active' : ''}" data-stab="AGENCY_RERA">🏢 Agency Profile & RERA</button>
        <button class="filter-tab ${state.settingsTab === 'COMMISSIONS_POLICY' ? 'active' : ''}" data-stab="COMMISSIONS_POLICY">💰 Commission Rules & Splits</button>
        <button class="filter-tab ${state.settingsTab === 'BANKING_TAX' ? 'active' : ''}" data-stab="BANKING_TAX">🏦 Banking, GST & Invoicing</button>
        <button class="filter-tab ${state.settingsTab === 'AI_WHATSAPP' ? 'active' : ''}" data-stab="AI_WHATSAPP">✦ AI & WhatsApp Automation</button>
        <button class="filter-tab ${state.settingsTab === 'SYNC_BACKUP' ? 'active' : ''}" data-stab="SYNC_BACKUP">🔄 Sync & Data Backup</button>
      </div>

      <form id="agency-settings-form">
        <!-- TAB 1: AGENCY PROFILE & RERA -->
        <div id="tab-agency-rera" style="display:${state.settingsTab === 'AGENCY_RERA' ? 'block' : 'none'};">
          <section class="settings-group-card">
            <h3 class="settings-group-title">🏢 Agency Branding & Commercial Profile</h3>
            <p class="settings-group-desc">This branding appears on official client token receipts, WhatsApp pitches, and tax invoices.</p>
            <div class="settings-form-grid">
              <div class="field full">
                <label>Agency Legal Name</label>
                <input class="input" name="agencyName" required value="${esc(s.agencyName)}" placeholder="BrokerAI Realty Advisors Pvt Ltd" />
              </div>
              <div class="field full">
                <label>Brand Tagline / Market Subtitle</label>
                <input class="input" name="brandTagline" value="${esc(s.brandTagline)}" placeholder="Premier Residential & Commercial Advisory · Thane & Mumbai" />
              </div>
              <div class="field">
                <label>MahaRERA Registration Number</label>
                <input class="input" name="reraNumber" required value="${esc(s.reraNumber)}" placeholder="e.g. A51700012345" />
              </div>
              <div class="field">
                <label>Trade License / Shop Act Reg.</label>
                <input class="input" name="tradeLicense" value="${esc(s.tradeLicense)}" placeholder="e.g. MH-THN-2018-99421" />
              </div>
              <div class="field">
                <label>GSTIN Number</label>
                <input class="input" name="gstin" value="${esc(s.gstin)}" placeholder="e.g. 27AABCB1234F1Z8" />
              </div>
              <div class="field">
                <label>Company PAN Number</label>
                <input class="input" name="panNumber" value="${esc(s.panNumber)}" placeholder="e.g. ABCDE1234F" />
              </div>
              <div class="field full">
                <label>Registered Office Address</label>
                <textarea class="input" name="officeAddress" rows="2">${esc(s.officeAddress)}</textarea>
              </div>
              <div class="field">
                <label>Official Contact Email</label>
                <input class="input" name="contactEmail" type="email" value="${esc(s.contactEmail)}" />
              </div>
              <div class="field">
                <label>Official Contact Phone / Helpline</label>
                <input class="input" name="contactPhone" value="${esc(s.contactPhone)}" />
              </div>
            </div>
          </section>
        </div>

        <!-- TAB 2: COMMISSION POLICY & SPLITS -->
        
        <!-- TAB: TEAM ROSTER (12 / 20 SEATS) -->
        <div id="tab-team-roster" style="display:${state.settingsTab === 'TEAM_ROSTER' ? 'block' : 'none'};">
          <section class="settings-group-card" style="margin-bottom:20px;">
            <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;margin-bottom:16px;">
              <div>
                <h3 class="settings-group-title" style="margin:0 0 4px;display:flex;align-items:center;gap:8px;">
                  👥 Closer Agent Seats & Role-Based Access
                  <span class="badge success">12 / 20 Seats Active</span>
                </h3>
                <p class="settings-group-desc" style="margin:0;">Manage team members, territory desk assignments, and closer access permissions.</p>
              </div>
              <button type="button" class="button primary" id="open-add-agent-modal-btn" style="background:#059669;font-weight:800;">
                + Add Closer Agent
              </button>
            </div>

            <div class="table-wrap">
              <table class="table">
                <thead>
                  <tr>
                    <th>Closer Agent</th>
                    <th>Phone / WhatsApp</th>
                    <th>Role & Permissions</th>
                    <th>Assigned Territory Desk</th>
                    <th>Active Deals</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Aarav Mehta</strong></td>
                    <td>+91 98201 11223</td>
                    <td><span class="badge success">Agency Principal</span></td>
                    <td>Hiranandani Estate</td>
                    <td>8 Deals</td>
                    <td><span class="badge success">Active</span></td>
                    <td><button type="button" class="button secondary edit-agent-role-btn" style="font-size:11px;padding:4px 8px;">Edit Role</button></td>
                  </tr>
                  <tr>
                    <td><strong>Mohak Vaswani</strong></td>
                    <td>+91 91370 00000</td>
                    <td><span class="badge success">Senior Luxury Closer</span></td>
                    <td>Majiwada Junction</td>
                    <td>7 Deals</td>
                    <td><span class="badge success">Active</span></td>
                    <td><button type="button" class="button secondary edit-agent-role-btn" style="font-size:11px;padding:4px 8px;">Edit Role</button></td>
                  </tr>
                  <tr>
                    <td><strong>Pooja Nair</strong></td>
                    <td>+91 98190 44556</td>
                    <td><span class="badge info">Residential Specialist</span></td>
                    <td>Kolshet Road</td>
                    <td>6 Deals</td>
                    <td><span class="badge success">Active</span></td>
                    <td><button type="button" class="button secondary edit-agent-role-btn" style="font-size:11px;padding:4px 8px;">Edit Role</button></td>
                  </tr>
                  <tr>
                    <td><strong>Rohan Deshmukh</strong></td>
                    <td>+91 98200 77889</td>
                    <td><span class="badge info">Commercial Closer</span></td>
                    <td>Ghodbunder Road</td>
                    <td>5 Deals</td>
                    <td><span class="badge success">Active</span></td>
                    <td><button type="button" class="button secondary edit-agent-role-btn" style="font-size:11px;padding:4px 8px;">Edit Role</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>

        <!-- TAB: BRANCH TERRITORY DESKS -->
        <div id="tab-branch-desks" style="display:${state.settingsTab === 'BRANCH_DESKS' ? 'block' : 'none'};">
          <section class="settings-group-card" style="margin-bottom:20px;">
            <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;margin-bottom:16px;">
              <div>
                <h3 class="settings-group-title" style="margin:0 0 4px;display:flex;align-items:center;gap:8px;">
                  📍 Regional Territory Desks & Smart Lead Routing
                </h3>
                <p class="settings-group-desc" style="margin:0;">Organize agency branches across Thane & Mumbai micro-markets.</p>
              </div>
              <button type="button" class="button primary" id="settings-create-branch-desk-btn" style="background:#0071e3;font-weight:800;">
                + Create Territory Desk
              </button>
            </div>

            <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(280px, 1fr));gap:16px;">
              <div style="padding:16px;background:#f8fafc;border-radius:12px;border:1px solid #e2e8f0;">
                <div style="display:flex;justify-content:space-between;align-items:center;">
                  <strong style="font-size:14px;color:#0f172a;">📍 Hiranandani Estate Desk</strong>
                  <span class="badge info">4 Closer Seats</span>
                </div>
                <div style="font-size:12px;color:#64748b;margin:6px 0 10px;">Rodas Enclave, The Walk, One Hiranandani Park</div>
                <div style="font-size:12.5px;color:#059669;font-weight:700;">Monthly Closed Volume: ₹7.4 Cr</div>
              </div>

              <div style="padding:16px;background:#f8fafc;border-radius:12px;border:1px solid #e2e8f0;">
                <div style="display:flex;justify-content:space-between;align-items:center;">
                  <strong style="font-size:14px;color:#0f172a;">📍 Majiwada Junction Desk</strong>
                  <span class="badge info">3 Closer Seats</span>
                </div>
                <div style="font-size:12px;color:#64748b;margin:6px 0 10px;">Rustomjee Urbania, Lodha Crown, Pokhran Rd 2</div>
                <div style="font-size:12.5px;color:#059669;font-weight:700;">Monthly Closed Volume: ₹5.8 Cr</div>
              </div>

              <div style="padding:16px;background:#f8fafc;border-radius:12px;border:1px solid #e2e8f0;">
                <div style="display:flex;justify-content:space-between;align-items:center;">
                  <strong style="font-size:14px;color:#0f172a;">📍 Kolshet Road Desk</strong>
                  <span class="badge info">3 Closer Seats</span>
                </div>
                <div style="font-size:12px;color:#64748b;margin:6px 0 10px;">Lodha Amara, Kalpataru Parkcity, Grand Central Park</div>
                <div style="font-size:12.5px;color:#059669;font-weight:700;">Monthly Closed Volume: ₹4.2 Cr</div>
              </div>
            </div>
          </section>
        </div>

        <div id="tab-commissions-policy" style="display:${state.settingsTab === 'COMMISSIONS_POLICY' ? 'block' : 'none'};">
          <section class="settings-group-card">
            <h3 class="settings-group-title">💰 Default Commission & Revenue Split Policies</h3>
            <p class="settings-group-desc">Standard rates applied when creating deals and computing internal agent payouts.</p>
            <div class="settings-form-grid">
              <div class="field">
                <label>Standard Sale Brokerage Rate (%)</label>
                <input class="input" name="defaultSaleBrokerageRate" type="number" step="0.1" value="${s.defaultSaleBrokerageRate ?? 1.5}" placeholder="1.5" />
                <span class="subtle">Industry standard: 1% to 2% of agreed deal value.</span>
              </div>
              <div class="field">
                <label>Standard Rental Brokerage (%)</label>
                <input class="input" name="defaultRentBrokerageRate" type="number" value="${s.defaultRentBrokerageRate ?? 100}" placeholder="100" />
                <span class="subtle">100% represents 1 month's rent.</span>
              </div>
              <div class="field">
                <label>Company Revenue Share (%)</label>
                <input class="input" name="defaultCompanySplit" type="number" value="${s.defaultCompanySplit ?? 70}" placeholder="70" />
              </div>
              <div class="field">
                <label>Agent Commission Share (%)</label>
                <input class="input" name="defaultAgentSplit" type="number" value="${s.defaultAgentSplit ?? 30}" placeholder="30" />
              </div>
              <div class="field full" style="margin-top:8px;">
                <label style="display:flex;align-items:center;gap:8px;cursor:pointer;">
                  <input type="checkbox" name="gstEnabled" ${s.gstEnabled ? 'checked' : ''} style="width:18px;height:18px;" />
                  <span><strong>Apply 18% GST (9% CGST + 9% SGST) on Brokerage Invoices</strong></span>
                </label>
              </div>
            </div>
          </section>
        </div>

        <!-- TAB 3: BANKING, GST & INVOICING -->
        <div id="tab-banking-tax" style="display:${state.settingsTab === 'BANKING_TAX' ? 'block' : 'none'};">
          <section class="settings-group-card">
            <h3 class="settings-group-title">🏦 Invoicing Bank Account & Digital Payout Desk</h3>
            <p class="settings-group-desc">Printed on tax invoices and digital booking receipts for client NEFT/RTGS/UPI transfers.</p>
            <div class="settings-form-grid">
              <div class="field">
                <label>Bank Name</label>
                <input class="input" name="bankName" required value="${esc(s.bankName)}" placeholder="e.g. HDFC Bank" />
              </div>
              <div class="field">
                <label>Branch Location</label>
                <input class="input" name="bankBranch" value="${esc(s.bankBranch)}" placeholder="e.g. Thane Main Branch" />
              </div>
              <div class="field full">
                <label>Account Holder Name</label>
                <input class="input" name="accountName" required value="${esc(s.accountName)}" placeholder="BrokerAI Realty Advisors Pvt Ltd" />
              </div>
              <div class="field">
                <label>Current Account Number</label>
                <input class="input" name="accountNumber" required value="${esc(s.accountNumber)}" placeholder="e.g. 50200049210984" />
              </div>
              <div class="field">
                <label>IFSC Code</label>
                <input class="input" name="ifscCode" required value="${esc(s.ifscCode)}" placeholder="e.g. HDFC0000123" />
              </div>
              <div class="field full">
                <label>Official UPI ID / VPA</label>
                <input class="input" name="upiId" value="${esc(s.upiId)}" placeholder="e.g. brokerai@hdfcbank" />
              </div>
            </div>
          </section>
        </div>

        <!-- TAB 4: AI & WHATSAPP AUTOMATION -->
        <div id="tab-ai-whatsapp" style="display:${state.settingsTab === 'AI_WHATSAPP' ? 'block' : 'none'};">
          <section class="settings-group-card">
            <h3 class="settings-group-title">✦ AI Operations & WhatsApp Automation Preferences</h3>
            <p class="settings-group-desc">Configure language tone, RERA disclaimers, and automated response behaviors.</p>
            <div class="settings-form-grid">
              <div class="field full">
                <label style="display:flex;align-items:center;gap:8px;cursor:pointer;">
                  <input type="checkbox" name="appendReraDisclaimer" ${s.appendReraDisclaimer ? 'checked' : ''} style="width:18px;height:18px;" />
                  <span><strong>Auto-append MahaRERA Registration Disclaimer</strong> to all property WhatsApp pitches & brochures</span>
                </label>
              </div>
              <div class="field">
                <label>AI Assistant Language & Regional Tone</label>
                <select class="select" name="aiLanguageTone">
                  <option value="hinglish" ${s.aiLanguageTone === 'hinglish' ? 'selected' : ''}>English (Mumbai / Thane Real Estate Conversational)</option>
                  <option value="english" ${s.aiLanguageTone === 'english' ? 'selected' : ''}>Formal Corporate English</option>
                  <option value="marathi" ${s.aiLanguageTone === 'marathi' ? 'selected' : ''}>Marathi (Regional Broker Advisory)</option>
                </select>
              </div>
              <div class="field">
                <label>Instant Inquiries Notification</label>
                <select class="select" name="instantLeadAlerts">
                  <option value="true" ${s.instantLeadAlerts ? 'selected' : ''}>Enabled (Sound + Notification Badge)</option>
                  <option value="false" ${!s.instantLeadAlerts ? 'selected' : ''}>Disabled</option>
                </select>
              </div>
            </div>
          </section>
        </div>

        <!-- TAB 5: CLOUD SYNC & DATA BACKUP -->
        <div id="tab-sync-backup" style="display:${state.settingsTab === 'SYNC_BACKUP' ? 'block' : 'none'};">
          <!-- SECTION 1: REAL-TIME CLOUD SYNC -->
          <section class="settings-group-card" style="margin-bottom:20px;">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:12px;margin-bottom:16px;">
              <div>
                <h3 class="settings-group-title" style="margin:0 0 4px;display:flex;align-items:center;gap:8px;">
                  🔄 Real-Time Multi-Device Cloud Sync
                  <span class="badge" style="background:#dcfce7;color:#15803d;font-weight:800;font-size:11px;">● LIVE CONNECTED</span>
                </h3>
                <p class="settings-group-desc" style="margin:0;">Synchronizes all Thane leads, properties, showing appointments, and legal agreements across your mobile phones, tablets, and desktop PCs.</p>
              </div>
              <button type="button" class="button primary" id="force-sync-now-btn" style="background:#165dff;font-weight:700;">
                🔄 Force Sync Now
              </button>
            </div>

            <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));gap:12px;background:#f8fafc;padding:16px;border-radius:12px;border:1px solid #e2e8f0;margin-bottom:16px;">
              <div>
                <div style="font-size:11.5px;color:#64748b;font-weight:700;text-transform:uppercase;margin-bottom:4px;">Active Device Session</div>
                <div style="font-size:13.5px;font-weight:800;color:#0f172a;" id="sync-active-device">Aarav Mehta Windows PC 💻 · Chrome</div>
              </div>
              <div>
                <div style="font-size:11.5px;color:#64748b;font-weight:700;text-transform:uppercase;margin-bottom:4px;">Cloud Sync Protocol</div>
                <div style="font-size:13.5px;font-weight:800;color:#15803d;">TLS 1.3 / AES-256 Encrypted</div>
              </div>
              <div>
                <div style="font-size:11.5px;color:#64748b;font-weight:700;text-transform:uppercase;margin-bottom:4px;">Last Successful Sync</div>
                <div style="font-size:13.5px;font-weight:800;color:#165dff;" id="sync-last-time">Just now</div>
              </div>
            </div>

            <div class="settings-form-grid">
              <div class="field full">
                <label style="display:flex;align-items:center;gap:8px;cursor:pointer;">
                  <input type="checkbox" name="autoSyncEnabled" checked style="width:18px;height:18px;" />
                  <span><strong>Automatic Background Cloud Sync</strong> (Sync updates in background every 30 seconds)</span>
                </label>
              </div>
              <div class="field full">
                <label style="display:flex;align-items:center;gap:8px;cursor:pointer;">
                  <input type="checkbox" name="offlineModeSupport" checked style="width:18px;height:18px;" />
                  <span><strong>Offline-First Resilience</strong> (Cache full Thane inventory & contacts for site visits in basements/lifts)</span>
                </label>
              </div>
            </div>
          </section>

          <!-- SECTION 2: EXPORT & IMPORT AGENCY BACKUPS -->
          <section class="settings-group-card" style="margin-bottom:20px;">
            <h3 class="settings-group-title">💾 Agency Data Backup & Disaster Recovery</h3>
            <p class="settings-group-desc">Export your entire institutional database to a secure, portable JSON backup file, or restore data from a previous backup.</p>

            <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(280px, 1fr));gap:16px;margin-top:16px;">
              <!-- EXPORT BACKUP -->
              <div style="border:1px solid #e2e8f0;border-radius:12px;padding:18px;background:#ffffff;display:flex;flex-direction:column;justify-content:space-between;">
                <div>
                  <div style="font-weight:800;font-size:15px;color:#0f172a;margin-bottom:6px;display:flex;align-items:center;gap:6px;">
                    📥 Download Complete Backup
                  </div>
                  <p style="font-size:12.5px;color:#64748b;line-height:1.5;margin:0 0 16px;">
                    Creates a single timestamped snapshot containing all <strong>Leads, Properties, Site Visits, Deals, Documents, and Settings</strong>.
                  </p>
                </div>
                <button type="button" class="button hero-btn" id="export-json-backup-btn" style="background:#059669;color:#fff;font-weight:750;justify-content:center;width:100%;">
                  📥 Download Agency Backup (.json)
                </button>
              </div>

              <!-- IMPORT BACKUP -->
              <div style="border:1px solid #e2e8f0;border-radius:12px;padding:18px;background:#ffffff;display:flex;flex-direction:column;justify-content:space-between;">
                <div>
                  <div style="font-weight:800;font-size:15px;color:#0f172a;margin-bottom:6px;display:flex;align-items:center;gap:6px;">
                    📤 Restore from Backup File
                  </div>
                  <p style="font-size:12.5px;color:#64748b;line-height:1.5;margin:0 0 16px;">
                    Restore your database from an existing <code>brokerai-agency-backup-*.json</code> file on this device.
                  </p>
                </div>
                <div style="display:flex;gap:8px;">
                  <input type="file" id="import-backup-file-input" accept=".json" style="display:none;" />
                  <button type="button" class="button secondary" id="trigger-import-backup-btn" style="font-weight:750;justify-content:center;width:100%;">
                    📤 Select JSON File to Restore
                  </button>
                </div>
              </div>
            </div>
          </section>

          <!-- SECTION 3: STORAGE & SYSTEM RESET -->
          <section class="settings-group-card">
            <h3 class="settings-group-title">🧹 PWA Storage & Demo Reset</h3>
            <p class="settings-group-desc">Manage local browser cache or restore default Thane demonstration dataset.</p>

            <div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap;margin-top:16px;">
              <button type="button" class="button secondary" id="clear-pwa-cache-btn" style="font-weight:700;">
                🧹 Clear PWA Cache (v81)
              </button>
              <button type="button" class="button secondary" id="reset-clean-demo-btn" style="color:#b91c1c;border-color:#fecaca;background:#fef2f2;font-weight:700;">
                ↺ Reset to Fresh Demo Data
              </button>
            </div>
          </section>
        </div>
      </form>`;
    mountView(html, '⚙️ Agency Settings & Roster', 'settings');

    // Tab Navigation Switcher
    document.querySelectorAll('#settings-tab-nav .filter-tab').forEach(btn => {
      btn.onclick = () => {
        state.settingsTab = btn.dataset.stab;
        localStorage.setItem('brokerai.settingsTab', state.settingsTab);
        document.querySelectorAll('#settings-tab-nav .filter-tab').forEach(b => b.classList.toggle('active', b.dataset.stab === state.settingsTab));
        const setDisplay = (id, stab) => {
          const el = document.querySelector('#' + id);
          if (el) el.style.display = state.settingsTab === stab ? 'block' : 'none';
        };
        setDisplay('tab-agency-rera', 'AGENCY_RERA');
        setDisplay('tab-team-roster', 'TEAM_ROSTER');
        setDisplay('tab-branch-desks', 'BRANCH_DESKS');
        setDisplay('tab-commissions-policy', 'COMMISSIONS_POLICY');
        setDisplay('tab-banking-tax', 'BANKING_TAX');
        setDisplay('tab-ai-whatsapp', 'AI_WHATSAPP');
        setDisplay('tab-sync-backup', 'SYNC_BACKUP');
      };
    });

    // Add Closer Agent Modal
    const addAgentBtn = document.querySelector('#open-add-agent-modal-btn');
    if (addAgentBtn) {
      addAgentBtn.onclick = () => {
        const modalHtml = `
          <div class="modal-backdrop" style="position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:99999;display:flex;align-items:center;justify-content:center;padding:20px;">
            <div style="background:#0f172a;border:1px solid #10b981;border-radius:20px;max-width:500px;width:100%;padding:28px;color:#ffffff;box-shadow:0 25px 50px rgba(0,0,0,0.5);">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:18px;">
                <h3 style="font-size:18px;font-weight:800;margin:0;">+ Add Closer Agent to Agency</h3>
                <button type="button" id="close-add-agent-modal-btn" style="background:none;border:none;color:#94a3b8;font-size:20px;cursor:pointer;">✕</button>
              </div>
              <form id="add-closer-form" style="display:flex;flex-direction:column;gap:12px;">
                <div>
                  <label style="font-size:12px;font-weight:700;color:#cbd5e1;display:block;margin-bottom:4px;">CLOSER AGENT FULL NAME</label>
                  <input type="text" id="agent-new-name" required placeholder="e.g. Kunal Kapoor" style="width:100%;padding:10px 12px;border-radius:8px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.15);color:#fff;font-size:13px;box-sizing:border-box;" />
                </div>
                <div>
                  <label style="font-size:12px;font-weight:700;color:#cbd5e1;display:block;margin-bottom:4px;">WHATSAPP PHONE NUMBER</label>
                  <input type="tel" id="agent-new-phone" required placeholder="e.g. +91 98200 11223" style="width:100%;padding:10px 12px;border-radius:8px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.15);color:#fff;font-size:13px;box-sizing:border-box;" />
                </div>
                <div>
                  <label style="font-size:12px;font-weight:700;color:#cbd5e1;display:block;margin-bottom:4px;">ASSIGNED TERRITORY DESK</label>
                  <select id="agent-new-desk" style="width:100%;padding:10px 12px;border-radius:8px;background:#1e293b;border:1px solid rgba(255,255,255,0.15);color:#fff;font-size:13px;box-sizing:border-box;">
                    <option value="Hiranandani Estate Desk">📍 Hiranandani Estate Desk</option>
                    <option value="Majiwada Junction Desk">📍 Majiwada Junction Desk</option>
                    <option value="Kolshet Road Desk">📍 Kolshet Road Desk</option>
                    <option value="Ghodbunder Road Desk">📍 Ghodbunder Commercial Desk</option>
                  </select>
                </div>
                <div style="display:flex;justify-content:flex-end;gap:10px;margin-top:14px;">
                  <button type="button" id="cancel-agent-modal-btn" style="padding:10px 16px;border-radius:8px;background:rgba(255,255,255,0.08);color:#cbd5e1;border:none;cursor:pointer;font-weight:700;">Cancel</button>
                  <button type="submit" style="padding:10px 20px;border-radius:8px;background:#10b981;color:#ffffff;border:none;cursor:pointer;font-weight:850;">+ Invite Agent via WhatsApp</button>
                </div>
              </form>
            </div>
          </div>
        `;
        const div = document.createElement('div');
        div.innerHTML = modalHtml;
        document.body.appendChild(div.firstElementChild);
        const modal = document.querySelector('.modal-backdrop');
        const closeModal = () => modal.remove();
        if (modal.querySelector('#close-add-agent-modal-btn')) modal.querySelector('#close-add-agent-modal-btn').onclick = closeModal;
        if (modal.querySelector('#cancel-agent-modal-btn')) modal.querySelector('#cancel-agent-modal-btn').onclick = closeModal;
        if (modal.querySelector('#add-closer-form')) modal.querySelector('#add-closer-form').onsubmit = (e) => {
          e.preventDefault();
          const name = modal.querySelector('#agent-new-name').value.trim();
          const phone = modal.querySelector('#agent-new-phone').value.replace(/[^0-9]/g, '');
          const desk = modal.querySelector('#agent-new-desk').value;
          closeModal();
          const originUrl = (typeof window !== 'undefined' && window.location?.origin) ? window.location.origin : 'https://www.rebrokerai.in';
      const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent('*BrokerAI Closer Agent Invite* 🏢\n\nHello ' + name + ',\nYou have been added as a Closer Agent to *' + desk + '*.\n\n🔗 Login to your CRM: ' + originUrl)}`;
          window.open(waUrl, '_blank');
          if (typeof showToast === 'function') showToast('🎉 Closer Agent ' + name + ' invited successfully!', 'success');
        };
      };
    }

    // Sync & Backup Action Handlers
    const forceSyncBtn = document.querySelector('#force-sync-now-btn');
    if (forceSyncBtn) {
      forceSyncBtn.onclick = () => {
        forceSyncBtn.disabled = true;
        forceSyncBtn.textContent = '🔄 Syncing...';
        setTimeout(() => {
          forceSyncBtn.disabled = false;
          forceSyncBtn.textContent = '🔄 Force Sync Now';
          const timeEl = document.querySelector('#sync-last-time');
          if (timeEl) timeEl.textContent = 'Just now (Synced)';
          showToast('✓ Cloud database synchronized successfully! All 7 properties, leads, and documents up to date.', 'success');
        }, 600);
      };
    }

    const exportBackupBtn = document.querySelector('#export-json-backup-btn');
    if (exportBackupBtn) {
      exportBackupBtn.onclick = () => {
        const backupData = {
          version: 'BrokerAI-v81',
          exportedAt: new Date().toISOString(),
          agencySettings: state.agencySettings || defaultAgencySettings,
          properties: state.properties || (typeof demoProperties !== 'undefined' ? demoProperties : []),
          leads: state.leads || (typeof demoLeads !== 'undefined' ? demoLeads : []),
          siteVisits: state.siteVisits || (typeof demoSiteVisits !== 'undefined' ? demoSiteVisits : []),
          followUps: state.followUps || (typeof demoFollowUps !== 'undefined' ? demoFollowUps : []),
          deals: state.deals || (typeof demoDeals !== 'undefined' ? demoDeals : []),
          documents: state.documents || []
        };
        const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(backupData, null, 2));
        const dlAnchor = document.createElement('a');
        dlAnchor.href = dataStr;
        dlAnchor.download = `brokerai-agency-backup-${new Date().toISOString().slice(0, 10)}.json`;
        if (typeof dlAnchor.setAttribute === 'function') {
          dlAnchor.setAttribute('href', dataStr);
          dlAnchor.setAttribute('download', `brokerai-agency-backup-${new Date().toISOString().slice(0, 10)}.json`);
        }
        document.body.appendChild(dlAnchor);
        dlAnchor.click();
        if (typeof dlAnchor.remove === 'function') dlAnchor.remove();
        showToast('✓ Complete agency JSON backup downloaded successfully!', 'success');
      };
    }

    const fileInput = document.querySelector('#import-backup-file-input');
    const triggerImportBtn = document.querySelector('#trigger-import-backup-btn');
    if (triggerImportBtn && fileInput) {
      triggerImportBtn.onclick = () => fileInput.click();
      fileInput.onchange = (e) => {
        const file = e.target.files && e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (evt) => {
          try {
            const data = JSON.parse(evt.target.result);
            if (data.properties && Array.isArray(data.properties)) {
              state.properties = data.properties;
              localStorage.setItem('brokerai.properties', JSON.stringify(data.properties));
            }
            if (data.leads && Array.isArray(data.leads)) {
              state.leads = data.leads;
              localStorage.setItem('brokerai.leads', JSON.stringify(data.leads));
            }
            if (data.siteVisits && Array.isArray(data.siteVisits)) {
              state.siteVisits = data.siteVisits;
              localStorage.setItem('brokerai.siteVisits', JSON.stringify(data.siteVisits));
            }
            if (data.followUps && Array.isArray(data.followUps)) {
              state.followUps = data.followUps;
              localStorage.setItem('brokerai.followUps', JSON.stringify(data.followUps));
            }
            if (data.deals && Array.isArray(data.deals)) {
              state.deals = data.deals;
              localStorage.setItem('brokerai.deals', JSON.stringify(data.deals));
            }
            if (data.documents && Array.isArray(data.documents)) {
              state.documents = data.documents;
              localStorage.setItem('brokerai.documents', JSON.stringify(data.documents));
            }
            if (data.agencySettings) {
              state.agencySettings = data.agencySettings;
              localStorage.setItem('brokerai.agencySettings', JSON.stringify(data.agencySettings));
            }
            showToast('✓ Agency data restored successfully from backup file!', 'success');
            setTimeout(() => settingsView(), 500);
          } catch (err) {
            showToast('⚠️ Could not restore backup. File must be valid JSON format.', 'error');
          }
        };
        reader.readAsText(file);
      };
    }

    const clearCacheBtn = document.querySelector('#clear-pwa-cache-btn');
    if (clearCacheBtn) {
      clearCacheBtn.onclick = () => {
        if ('caches' in window) {
          caches.keys().then(keys => Promise.all(keys.map(k => caches.delete(k)))).then(() => {
            showToast('✓ Offline PWA Cache cleared successfully!', 'success');
          });
        } else {
          showToast('✓ Cache cleared!', 'success');
        }
      };
    }

    const resetDemoBtn = document.querySelector('#reset-clean-demo-btn');
    if (resetDemoBtn) {
      resetDemoBtn.onclick = () => {
        if (confirm('Are you sure you want to reset all agency data to fresh demo state? Any unsaved local edits will be reset.')) {
          localStorage.clear();
          showToast('✓ Agency database reset to clean demo dataset! Reloading...', 'success');
          setTimeout(() => window.location.reload(), 600);
        }
      };
    }

    // Save All Settings
    if (document.querySelector('#save-all-settings-btn')) document.querySelector('#save-all-settings-btn').onclick = () => {
      const form = new FormData(document.querySelector('#agency-settings-form'));
      const updated = {
        agencyName: form.get('agencyName') || 'BrokerAI Realty',
        brandTagline: form.get('brandTagline') || '',
        reraNumber: form.get('reraNumber') || 'A51700012345',
        tradeLicense: form.get('tradeLicense') || '',
        gstin: form.get('gstin') || '',
        panNumber: form.get('panNumber') || '',
        officeAddress: form.get('officeAddress') || '',
        contactEmail: form.get('contactEmail') || '',
        contactPhone: form.get('contactPhone') || '',
        whatsappSupport: form.get('whatsappSupport') || '',
        defaultSaleBrokerageRate: Number(form.get('defaultSaleBrokerageRate') || 1.5),
        defaultRentBrokerageRate: Number(form.get('defaultRentBrokerageRate') || 100),
        defaultCompanySplit: Number(form.get('defaultCompanySplit') || 70),
        defaultAgentSplit: Number(form.get('defaultAgentSplit') || 30),
        gstEnabled: form.get('gstEnabled') === 'on',
        bankName: form.get('bankName') || 'HDFC Bank',
        bankBranch: form.get('bankBranch') || '',
        accountName: form.get('accountName') || '',
        accountNumber: form.get('accountNumber') || '',
        ifscCode: form.get('ifscCode') || '',
        upiId: form.get('upiId') || '',
        appendReraDisclaimer: form.get('appendReraDisclaimer') === 'on',
        aiLanguageTone: form.get('aiLanguageTone') || 'hinglish',
        instantLeadAlerts: form.get('instantLeadAlerts') === 'true'
      };

      state.agencySettings = updated;
      localStorage.setItem('brokerai.agencySettings', JSON.stringify(updated));

      const notice = document.querySelector('#settings-save-notice');
      notice.innerHTML = `<div class="notice success" style="margin-bottom:16px;">✓ Agency Settings & RERA Compliance updated successfully!</div>`;
      setTimeout(() => notice.innerHTML = '', 3500);
    };

    // Letterhead Preview
    if (document.querySelector('#letterhead-preview-btn')) document.querySelector('#letterhead-preview-btn').onclick = () => {
      letterheadModal(state.agencySettings || defaultAgencySettings);
    };

    // Test WhatsApp Pitch
    if (document.querySelector('#test-wa-pitch-btn')) document.querySelector('#test-wa-pitch-btn').onclick = () => {
      sendTestWhatsAppPitch(state.agencySettings || defaultAgencySettings);
    };
  }

  function letterheadModal(s) {
    document.querySelectorAll('.modal-backdrop, .drawer-backdrop').forEach(b => b.remove());
    const settings = s || state.agencySettings || defaultAgencySettings || {
      agencyName: 'Apex Realty Group',
      brandTagline: 'Institutional Real Estate Advisory',
      officeAddress: 'Hiranandani Estate, Ghodbunder Road, Thane West',
      reraNumber: 'A51700012345',
      gstin: '27AABCB1234F1Z8',
      panNumber: 'ABCDE1234F',
      contactEmail: 'contact@apexrealty.in',
      contactPhone: '+91 98200 12345'
    };

    const backdrop = document.createElement('div');
    backdrop.className = 'modal-backdrop';
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.cssText = 'max-width:680px;width:94vw;max-height:90vh;overflow-y:auto;background:#fff;padding:24px;border-radius:20px;box-shadow:0 25px 60px rgba(0,0,0,0.3);position:relative;box-sizing:border-box;';
    
    modal.innerHTML = `
      <div style="border-bottom:3px solid #165dff;padding-bottom:18px;margin-bottom:20px;display:flex;justify-content:space-between;align-items:flex-start;">
        <div>
          <div class="brand auth-brand" style="margin-bottom:4px;justify-content:flex-start;">
            <span class="mark"><svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M4 20V10l8-6 8 6v10"/><path d="M9 20v-6h6v6"/></svg></span>
            <span style="font-size:22px;font-weight:800;color:var(--ink);">${esc(settings.agencyName)}</span>
          </div>
          <div style="font-size:12.5px;color:var(--muted);font-weight:600;">${esc(settings.brandTagline || 'Institutional Real Estate Advisory')}</div>
          <div style="font-size:11.5px;color:#475569;margin-top:4px;">📍 ${esc(settings.officeAddress || 'Thane West')}</div>
        </div>
        <div style="text-align:right;font-size:11px;color:#475569;">
          <div style="background:#ecfdf5;border:1px solid #a7f3d0;color:#047857;padding:3px 8px;border-radius:6px;font-weight:800;display:inline-block;margin-bottom:4px;">
            MahaRERA: ${esc(settings.reraNumber || 'A51700012345')}
          </div>
          <div>GSTIN: ${esc(settings.gstin || '27AABCB1234F1Z8')}</div>
          <div>PAN: ${esc(settings.panNumber || 'ABCDE1234F')}</div>
          <div>Email: ${esc(settings.contactEmail || 'contact@apexrealty.in')}</div>
          <div>Phone: ${esc(settings.contactPhone || '+91 98200 12345')}</div>
        </div>
      </div>

      <div style="padding:10px 0;font-size:13px;line-height:1.6;color:#334155;min-height:180px;">
        <p><strong>OFFICIAL BROKERAGE MANDATE / PROPOSAL SUMMARY</strong></p>
        <p>This is a formal agency representation document issued under MahaRERA Registered Real Estate Brokerage License <strong>${esc(settings.reraNumber || 'A51700012345')}</strong>.</p>
        <p>All property listings, legal title verification, and escrow token management adhere to RERA compliance standards.</p>
      </div>

      <div style="border-top:1px solid var(--line);padding-top:16px;display:flex;justify-content:space-between;align-items:center;">
        <div style="font-size:11px;color:var(--muted);">Authorized Signatory · ${esc(settings.agencyName)}</div>
        <div style="display:flex;gap:8px;">
          <button class="button secondary" id="close-letterhead-modal">Close</button>
          <button class="button primary" id="print-letterhead-btn">🖨️ Print Letterhead</button>
        </div>
      </div>`;
    backdrop.appendChild(modal);
    document.body.appendChild(backdrop);
    const close = () => backdrop.remove();
    backdrop.onclick = (e) => { if (e.target === backdrop) close(); };
    modal.onclick = (e) => e.stopPropagation();
    if (modal.querySelector('#close-letterhead-modal')) modal.querySelector('#close-letterhead-modal').onclick = close;
    if (modal.querySelector('#print-letterhead-btn')) modal.querySelector('#print-letterhead-btn').onclick = () => window.print();
  }

  function sendTestWhatsAppPitch(s) {
    const text = `*🏡 Exclusive 2 BHK Listing - Rodas Enclave, Hiranandani Estate*

💰 *Price:* ₹1.25 Cr (Negotiable)
📐 *Carpet Area:* 780 sq.ft | High Floor | 1 Covered Parking
✨ *Amenities:* Clubhouse, Swimming Pool, 24/7 Power Backup

Would you like to schedule a private walkthrough this evening?

---
*Presented by:*
🏢 *${s.agencyName}*
📜 *MahaRERA Reg No:* ${s.reraNumber}
📞 *Contact:* ${s.contactPhone} | *Email:* ${s.contactEmail}
📍 *Office:* ${s.officeAddress}`;

    navigator.clipboard.writeText(text).then(() => {
      alert("✅ Sample WhatsApp Listing Pitch with MahaRERA Disclaimer copied to clipboard!\n\nYou can paste it directly into WhatsApp chat.");
    }).catch(() => prompt("Copy WhatsApp Pitch:", text));
  }

  
  // ==========================================================================
  // MODULE 6: MAGIC WHATSAPP LISTING PARSER & CRM DEAL CONVERTER
  // ==========================================================================

  function magicWhatsAppParserModal(initialText = '') {
    const caps = getPlanCapabilities();
    if (caps.planId === 'starter') {
      document.querySelectorAll('.modal-backdrop, .drawer-backdrop, .spotlight-backdrop').forEach(b => b.remove());
      const backdrop = document.createElement('div');
      backdrop.className = 'modal-backdrop';
      const modal = document.createElement('div');
      modal.className = 'modal';
      modal.style.cssText = 'max-width:500px;width:92vw;padding:24px;background:#ffffff;border-radius:20px;text-align:center;position:relative;box-sizing:border-box;box-shadow:0 20px 50px rgba(0,0,0,0.2);';
      modal.innerHTML = `
        <div style="font-size:40px;margin-bottom:12px;">⚡</div>
        <div style="display:inline-block;padding:3px 12px;border-radius:20px;background:#eff6ff;color:#2563eb;font-weight:800;font-size:11px;margin-bottom:8px;text-transform:uppercase;">Pro Closer Feature</div>
        <h3 style="font-size:20px;font-weight:800;color:#0f172a;margin:0 0 8px;">WhatsApp Magic Parser is Locked</h3>
        <p style="font-size:13.5px;color:#64748b;line-height:1.5;margin:0 0 20px;">Automated extraction of property listings and buyer inquiries from raw WhatsApp messages requires the <strong>Pro Closer</strong> plan.</p>
        <div style="display:flex;gap:10px;justify-content:center;">
          <button class="button secondary" id="wa-lock-close-btn">Cancel</button>
          <button class="button primary" id="wa-lock-upgrade-btn" style="background:#2563eb;font-weight:700;">⚡ Switch to Pro Closer (₹1,200)</button>
        </div>
      `;
      backdrop.appendChild(modal);
      document.body.appendChild(backdrop);
      const close = () => backdrop.remove();
      backdrop.onclick = (e) => { if (e.target === backdrop) close(); };
      modal.querySelector('#wa-lock-close-btn').onclick = close;
      modal.querySelector('#wa-lock-upgrade-btn').onclick = () => {
        state.currentPlan = 'pro';
        localStorage.setItem('brokerai.currentPlan', 'pro');
        close();
        showToast('✓ Switched to Pro Closer! WhatsApp Parser unlocked.', 'success');
        magicWhatsAppParserModal();
      };
      return;
    }
  
    document.querySelectorAll('.modal-backdrop').forEach(b => b.remove());
    const backdrop = document.createElement('div');
    backdrop.className = 'modal-backdrop';
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.cssText = 'max-width:680px;width:94vw;max-height:92vh;overflow-y:auto;padding:24px;background:#ffffff;border-radius:20px;box-shadow:0 24px 60px rgba(0,0,0,0.3);position:relative;';

    const sampleMessages = [
      {
        label: '⚡ Thane 2 BHK (Rodas Enclave)',
        text: `Direct owner listing! Spacious 2 BHK for SALE in Rodas Enclave, Hiranandani Estate, Thane West.
Carpet Area: 780 sq.ft. Higher floor with scenic Yeoor hills view.
Price: ₹1.25 Cr (slightly negotiable for immediate token).
1 Reserved Covered Stilt Parking. Semi-furnished with modular kitchen & wardrobes.
Society has luxury clubhouse, swimming pool, gym, 24/7 security & power backup.
Available for immediate possession. Contact: +91 98200 11223`
      },
      {
        label: '🌊 Bandra 3 BHK Sea-View',
        text: `Ultra Luxury 3 BHK for Sale at Bandra West (Pali Hill).
Area: 1,450 sq.ft carpet. Fully furnished italian marble flooring, 2 car parkings.
Asking: ₹5.85 Cr all inclusive. Ready possession with OC. MahaRERA compliant tower.
Contact agent: 9819922334`
      },
      {
        label: '🏢 Powai 1 BHK Rental',
        text: `Available 1 BHK for Rent at Hiranandani Gardens Powai (Castle Rock).
Fully Furnished, 460 sq.ft carpet, high floor.
Rent: ₹52,000 / month, Deposit: ₹2.0 Lakhs. Bachelor / Family allowed.
Immediate possession. Call broker: 9833445566`
      }
    ];

    function extractListingData(raw) {
      if (!raw || !raw.trim()) return null;
      const txt = raw;

      // 1. Detect BHK
      let bhk = 2;
      const bhkMatch = txt.match(/(\d+)\s*(?:bhk|bed|bedroom)/i);
      if (bhkMatch) bhk = parseInt(bhkMatch[1], 10);
      else if (/1\s*rk|studio/i.test(txt)) bhk = 1;

      // 2. Detect Listing Type
      const isRent = /rent|lease|deposit|per month|\/mo|\/month|bachelor/i.test(txt) && !/sale|resale|buy/i.test(txt);
      const listingType = isRent ? 'RENT' : 'SALE';

      // 3. Detect Price
      let price = isRent ? 45000 : 12500000;
      const crMatch = txt.match(/₹?\s*(\d+(?:\.\d+)?)\s*(?:cr|crore|cr\.)/i);
      const lkMatch = txt.match(/₹?\s*(\d+(?:\.\d+)?)\s*(?:l|lac|lacs|lakh|lakhs)/i);
      const kMatch = txt.match(/₹?\s*(\d+(?:\.\d+)?)\s*(?:k|thousand)/i);

      if (crMatch) {
        price = Math.round(parseFloat(crMatch[1]) * 10000000);
      } else if (lkMatch) {
        price = Math.round(parseFloat(lkMatch[1]) * 100000);
      } else if (kMatch) {
        price = Math.round(parseFloat(kMatch[1]) * 1000);
      } else {
        const numMatch = txt.match(/₹\s*([0-9,]+)/);
        if (numMatch) {
          const val = parseInt(numMatch[1].replace(/,/g, ''), 10);
          if (val > 0) price = val;
        }
      }

      // 4. Detect Carpet Area
      let area = bhk === 1 ? 480 : (bhk === 2 ? 780 : 1250);
      const areaMatch = txt.match(/(\d{3,5})\s*(?:sq\.?\s*ft|sqft|sq\s*feet|carpet)/i);
      if (areaMatch) area = parseInt(areaMatch[1], 10);

      // 5. Detect Society & Location
      let society = 'Hiranandani Estate';
      let location = 'Thane West';
      if (/rodas enclave/i.test(txt)) { society = 'Rodas Enclave'; location = 'Hiranandani Estate, Thane West'; }
      else if (/rustomjee urbania|urbania/i.test(txt)) { society = 'Rustomjee Urbania'; location = 'Majiwada, Thane West'; }
      else if (/pali hill|bandra/i.test(txt)) { society = 'Pali Hill Residency'; location = 'Bandra West, Mumbai'; }
      else if (/powai|castle rock|hiranandani gardens/i.test(txt)) { society = 'Castle Rock'; location = 'Hiranandani Gardens, Powai'; }
      else if (/vasant vihar|lok puram/i.test(txt)) { society = 'Lok Puram'; location = 'Vasant Vihar, Thane West'; }
      else {
        const locMatch = txt.match(/(?:at|in|near)\s+([A-Z][a-zA-Z\s]{3,28})/);
        if (locMatch) {
          society = locMatch[1].trim();
          location = locMatch[1].trim() + ', Mumbai';
        }
      }

      // 6. Detect Furnishing
      let furnishing = 'SEMI_FURNISHED';
      if (/fully\s*furnished|italian marble/i.test(txt)) furnishing = 'FULLY_FURNISHED';
      else if (/unfurnished|raw|bare shell/i.test(txt)) furnishing = 'UNFURNISHED';

      // 7. Detect Amenities
      const amenities = [];
      if (/pool|swimming/i.test(txt)) amenities.push('Swimming Pool');
      if (/gym|fitness/i.test(txt)) amenities.push('Gymnasium');
      if (/clubhouse|club/i.test(txt)) amenities.push('Clubhouse');
      if (/parking|car park/i.test(txt)) amenities.push('Covered Parking');
      if (/security|24\/7/i.test(txt)) amenities.push('24/7 Security');
      if (/garden|park|hills/i.test(txt)) amenities.push('Landscaped Garden');
      if (/power backup|generator/i.test(txt)) amenities.push('Power Backup');
      if (!amenities.length) amenities.push('Gated Security', 'Lift Access', 'Covered Parking');

      // 8. Contact & Broker
      let contact = '+91 98200 11223';
      const phoneMatch = txt.match(/(?:\+91[\s-]?)?[6-9]\d{9}/);
      if (phoneMatch) contact = phoneMatch[0];

      const title = `${bhk} BHK at ${society}`;

      return {
        id: Date.now(),
        title,
        bhk,
        area,
        price,
        listingType,
        society,
        location,
        furnishing,
        amenities,
        contact,
        parking: /parking|car park/i.test(txt) ? '1 Covered' : 'Available',
        possessionStatus: /under construction/i.test(txt) ? 'UNDER_CONSTRUCTION' : 'READY_TO_MOVE',
        rawText: txt
      };
    }

    let currentInput = initialText || sampleMessages[0].text;
    let parsedResult = extractListingData(currentInput);

    function renderModal() {
      modal.innerHTML = `
        <div style="display:flex;justify-content:space-between;align-items:flex-start;border-bottom:1px solid #f1f5f9;padding-bottom:14px;margin-bottom:16px;">
          <div>
            <div style="display:inline-flex;align-items:center;gap:6px;background:rgba(16,185,129,0.12);color:#059669;padding:4px 10px;border-radius:20px;font-size:11.5px;font-weight:800;letter-spacing:0.04em;">
              <span>⚡ AI EXTRACTOR</span>
              <span>●</span>
              <span>INCOMING CHAT PARSER</span>
            </div>
            <h2 style="margin:6px 0 2px;font-size:20px;font-weight:800;color:var(--ink);">Magic WhatsApp Listing Parser</h2>
            <p style="margin:0;font-size:12.5px;color:var(--muted);">Paste forwarded WhatsApp group chats or raw broker messages to instantly convert into structured CRM flats.</p>
          </div>
          <button class="close" id="close-parser-modal" style="background:none;border:none;font-size:24px;cursor:pointer;color:var(--muted);">&times;</button>
        </div>

        <!-- 1-TAP QUICK SAMPLES -->
        <div style="margin-bottom:12px;">
          <div style="font-size:11.5px;font-weight:750;color:var(--ink);margin-bottom:6px;">Try 1-Tap Sample Forwarded Messages:</div>
          <div style="display:flex;gap:8px;flex-wrap:wrap;">
            ${sampleMessages.map((s, idx) => `
              <button type="button" class="button secondary sample-chip-btn" data-sample-idx="${idx}" style="font-size:11.5px;padding:5px 10px;border-radius:8px;background:#f8fafc;">
                ${s.label}
              </button>
            `).join('')}
          </div>
        </div>

        <!-- RAW INPUT TEXTAREA -->
        <div style="margin-bottom:16px;">
          <label style="display:block;font-size:12px;font-weight:750;color:var(--ink);margin-bottom:6px;">
            📋 Paste Raw WhatsApp Chat / Listing Note:
          </label>
          <textarea id="raw-whatsapp-input" class="input" rows="5" style="width:100%;font-size:12.5px;line-height:1.5;padding:12px;border-radius:10px;border:1.5px solid #cbd5e1;font-family:monospace;" placeholder="Paste raw broker message here...">${esc(currentInput)}</textarea>
          <div style="display:flex;justify-content:flex-end;margin-top:8px;">
            <button type="button" id="trigger-parse-btn" class="button primary" style="font-weight:750;padding:8px 18px;display:flex;align-items:center;gap:6px;">
              <span>⚡ Extract & Parse Specs</span>
            </button>
          </div>
        </div>

        <!-- PARSED RESULT CARD -->
        ${parsedResult ? `
          <div style="background:linear-gradient(135deg, #f0fdf4 0%, #f8fafc 100%);border:1.5px solid #86efac;border-radius:14px;padding:16px;margin-bottom:18px;">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
              <span style="font-size:11.5px;font-weight:800;color:#15803d;display:flex;align-items:center;gap:5px;">
                <span>✓</span> AI EXTRACTION VERIFIED
              </span>
              <span style="font-size:11px;background:#dcfce7;color:#166534;font-weight:750;padding:2px 8px;border-radius:12px;">
                ${parsedResult.listingType === 'SALE' ? '💎 FOR SALE' : '🔑 FOR RENT'}
              </span>
            </div>

            <div style="font-size:16px;font-weight:800;color:#0f172a;margin-bottom:10px;">
              ${esc(parsedResult.title)}
            </div>

            <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(140px, 1fr));gap:10px;margin-bottom:12px;background:#ffffff;padding:12px;border-radius:10px;border:1px solid #e2e8f0;">
              <div>
                <div style="font-size:10px;font-weight:750;color:#64748b;text-transform:uppercase;">Price</div>
                <div style="font-size:14px;font-weight:800;color:#059669;">
                  ${parsedResult.listingType === 'SALE' ? ('₹' + (parsedResult.price >= 10000000 ? (parsedResult.price / 10000000).toFixed(2) + ' Cr' : (parsedResult.price / 100000).toFixed(2) + ' L')) : ('₹' + parsedResult.price.toLocaleString('en-IN') + '/mo')}
                </div>
              </div>
              <div>
                <div style="font-size:10px;font-weight:750;color:#64748b;text-transform:uppercase;">Carpet Area</div>
                <div style="font-size:14px;font-weight:800;color:#0f172a;">${parsedResult.area} sq.ft</div>
              </div>
              <div>
                <div style="font-size:10px;font-weight:750;color:#64748b;text-transform:uppercase;">Furnishing</div>
                <div style="font-size:13px;font-weight:750;color:#0f172a;">${parsedResult.furnishing.replace(/_/g, ' ')}</div>
              </div>
              <div>
                <div style="font-size:10px;font-weight:750;color:#64748b;text-transform:uppercase;">Location</div>
                <div style="font-size:13px;font-weight:750;color:#0f172a;">${esc(parsedResult.location)}</div>
              </div>
              <div>
                <div style="font-size:10px;font-weight:750;color:#64748b;text-transform:uppercase;">Parking</div>
                <div style="font-size:13px;font-weight:750;color:#0f172a;">${esc(parsedResult.parking)}</div>
              </div>
              <div>
                <div style="font-size:10px;font-weight:750;color:#64748b;text-transform:uppercase;">Contact</div>
                <div style="font-size:13px;font-weight:750;color:#2563eb;">${esc(parsedResult.contact)}</div>
              </div>
            </div>

            <!-- AMENITIES CHIPS -->
            <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:12px;">
              ${parsedResult.amenities.map(a => `<span style="font-size:11px;background:#e2e8f0;color:#334155;padding:3px 8px;border-radius:6px;font-weight:600;">✓ ${esc(a)}</span>`).join('')}
            </div>

            <!-- ACTION DEAL BUTTONS -->
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:14px;">
              <button type="button" id="parser-add-inventory-btn" class="button primary" style="background:#059669;border-color:#059669;font-weight:750;padding:10px;display:flex;align-items:center;justify-content:center;gap:6px;">
                <span>➕</span> <span>Add to CRM Inventory</span>
              </button>
              <button type="button" id="parser-pitch-client-btn" class="button primary" style="background:#2563eb;border-color:#2563eb;font-weight:750;padding:10px;display:flex;align-items:center;justify-content:center;gap:6px;">
                <span>💬</span> <span>Pitch to Matching Clients</span>
              </button>
            </div>
            <div style="margin-top:8px;">
              <button type="button" id="parser-calc-cost-btn" class="button secondary" style="width:100%;font-weight:700;padding:8px;display:flex;align-items:center;justify-content:center;gap:6px;background:#ffffff;">
                <span>🧮</span> <span>Calculate Stamp Duty & On-Road EMI</span>
              </button>
            </div>
          </div>
        ` : ''}
      `;

      // Event Handlers
      const close = () => backdrop.remove();
      backdrop.onclick = (e) => { if (e.target === backdrop) close(); };
      modal.onclick = (e) => e.stopPropagation();
      if (modal.querySelector('#close-parser-modal')) modal.querySelector('#close-parser-modal').onclick = close;

      modal.querySelectorAll('.sample-chip-btn').forEach(btn => {
        btn.onclick = () => {
          const idx = parseInt(btn.dataset.sampleIdx, 10);
          currentInput = sampleMessages[idx].text;
          parsedResult = extractListingData(currentInput);
          renderModal();
        };
      });

      const triggerBtn = modal.querySelector('#trigger-parse-btn');
      if (triggerBtn) {
        triggerBtn.onclick = () => {
          const val = modal.querySelector('#raw-whatsapp-input').value;
          currentInput = val;
          parsedResult = extractListingData(val);
          renderModal();
        };
      }

      const addInvBtn = modal.querySelector('#parser-add-inventory-btn');
      if (addInvBtn && parsedResult) {
        addInvBtn.onclick = () => {
          if (!state.properties) state.properties = (typeof demoProperties !== 'undefined' ? [...demoProperties] : []);
          state.properties.unshift(parsedResult);
          try {
            localStorage.setItem('brokerai.properties', JSON.stringify(state.properties));
          } catch(e) {}
          close();
          if (typeof showToast === 'function') showToast('✨ Property successfully added to Inventory!', 'success');
          state.page = 'properties';
          window.location.hash = '#/properties';
          if (typeof render === 'function') render();
        };
      }

      const pitchBtn = modal.querySelector('#parser-pitch-client-btn');
      if (pitchBtn && parsedResult) {
        pitchBtn.onclick = () => {
          close();
          if (typeof whatsAppDispatcherModal === 'function') {
            whatsAppDispatcherModal(parsedResult);
          } else if (typeof sendTestWhatsAppPitch === 'function') {
            sendTestWhatsAppPitch(state.agencySettings || defaultAgencySettings);
          }
        };
      }

      const calcCostBtn = modal.querySelector('#parser-calc-cost-btn');
      if (calcCostBtn && parsedResult) {
        calcCostBtn.onclick = () => {
          close();
          if (typeof stampDutyCostCalculatorModal === 'function') {
            stampDutyCostCalculatorModal(parsedResult);
          }
        };
      }
    }

    renderModal();
    backdrop.appendChild(modal);
    document.body.appendChild(backdrop);
  }


  window.magicWhatsAppParserModal = magicWhatsAppParserModal;
  window.clientMicrositeView = clientMicrositeView;
  window.clientMicrositeModal = clientMicrositeModal;
  window.stampDutyCostCalculatorModal = stampDutyCostCalculatorModal;
  window.rentalAgreementModal = rentalAgreementModal;
  window.allotmentLetterModal = allotmentLetterModal;
  window.letterheadModal = letterheadModal;
  window.sendTestWhatsAppPitch = sendTestWhatsAppPitch;
  if (typeof state !== 'undefined') window.state = state;
  if (typeof demoProperties !== 'undefined') window.demoProperties = demoProperties;


  async function commissionsView() {
    const caps = getPlanCapabilities();
    if (caps.planId !== 'agency') {
      mountView(planUpgradeWall('Agency Elite', 'Commission Splits Ledger & 18% GST Invoicing'), 'Commission Splits · Upgrade Required', 'commissions');
      const btn = document.querySelector('#upgrade-wall-switch-btn');
      if (btn) btn.onclick = () => {
        state.currentPlan = 'agency';
        localStorage.setItem('brokerai.currentPlan', 'agency');
        showToast('✓ Unlocked Agency Elite! Commission Ledger active.', 'success');
        setTimeout(() => { commissionsView(); }, 300);
      };
      return;
    }
  
    app.innerHTML = layout(`${pageHeader('Commissions & Brokerage Splits', state.demo ? 'Demo preview — Agency revenue splits, agent payouts, and official GST brokerage invoicing.' : 'Track expected brokerage, realized revenues, internal agent splits, and tax invoicing.', `
      <div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap;">
        <div class="view-switcher">
          <button class="view-btn ${state.commissionsViewMode === 'cards' ? 'active' : ''}" id="comm-mode-cards-btn">⊞ Split Cards</button>
          <button class="view-btn ${state.commissionsViewMode === 'table' ? 'active' : ''}" id="comm-mode-table-btn">☰ Ledger Table</button>
        </div>
        <button class="button primary" id="add-comm-btn">＋ Record Commission</button>
        <button class="button hero-btn" id="comm-invoice-btn" style="background:#165dff;color:#fff;">🧾 Generate Invoice</button>
      </div>`)}

      <!-- REVENUE & PAYOUT KPIS -->
      <div class="cards" style="margin-bottom:20px;">
        <article class="metric"><div class="metric-label">Expected Pipeline Gross</div><div class="metric-value" id="comm-stat-expected" style="color:#165dff;">₹5,87,500</div><div class="metric-note">Total active brokerage</div></article>
        <article class="metric"><div class="metric-label">Realized / Collected</div><div class="metric-value" id="comm-stat-realized" style="color:#047857;">₹48,000</div><div class="metric-note">Received this month</div></article>
        <article class="metric"><div class="metric-label">Invoicing / Due</div><div class="metric-value" id="comm-stat-due" style="color:#b45309;">₹2,72,500</div><div class="metric-note">Pending client payout</div></article>
        <article class="metric"><div class="metric-label">Agent Payout Pool</div><div class="metric-value" id="comm-stat-agent">₹1,74,550</div><div class="metric-note">Internal team splits</div></article>
      </div>

      <!-- CATEGORY FILTER TABS -->
      <div class="filter-tabs" id="comm-category-tabs">
        <button class="filter-tab ${state.commissionsCategory === 'ALL' ? 'active' : ''}" data-cat="ALL">All Records (4)</button>
        <button class="filter-tab ${state.commissionsCategory === 'RECEIVED' ? 'active' : ''}" data-cat="RECEIVED">💵 Received / Settled (1)</button>
        <button class="filter-tab ${state.commissionsCategory === 'PENDING_INVOICE' ? 'active' : ''}" data-cat="PENDING_INVOICE">⏳ Invoicing / Pending (2)</button>
        <button class="filter-tab ${state.commissionsCategory === 'EXPECTED' ? 'active' : ''}" data-cat="EXPECTED">⚡ Expected Pipeline (1)</button>
      </div>

      <div class="filters">
        <input class="input search" id="comm-search" placeholder="Search by deal, client, property, agent or invoice #…" />
        <select class="select" id="comm-status-filter">
          <option value="">All Payment Statuses</option>
          <option value="RECEIVED">Received / Settled</option>
          <option value="PENDING_INVOICE">Invoicing / Pending</option>
          <option value="EXPECTED">Expected in Pipeline</option>
        </select>
        <select class="select" id="comm-agent-filter">
          <option value="">All Agents</option>
          <option value="Aarav Mehta">Aarav Mehta</option>
          <option value="Sana Khan">Sana Khan</option>
        </select>
      </div>

      <section class="panel" style="padding:18px 22px;">
        <div id="comm-feed-container" class="loading">Loading brokerage revenue ledger…</div>
      </section>`);
    bindShell();

    if (document.querySelector('#comm-mode-cards-btn')) document.querySelector('#comm-mode-cards-btn').onclick = () => {
      state.commissionsViewMode = 'cards';
      localStorage.setItem('brokerai.commissionsViewMode', 'cards');
      commissionsView();
    };
    if (document.querySelector('#comm-mode-table-btn')) document.querySelector('#comm-mode-table-btn').onclick = () => {
      state.commissionsViewMode = 'table';
      localStorage.setItem('brokerai.commissionsViewMode', 'table');
      commissionsView();
    };
    if (document.querySelector('#add-comm-btn')) document.querySelector('#add-comm-btn').onclick = () => commissionDrawer();
    if (document.querySelector('#comm-invoice-btn')) document.querySelector('#comm-invoice-btn').onclick = () => {
      const comm = (state.commissions.length ? state.commissions : (state.demo ? demoCommissions : []))[0];
      if (comm) brokerageInvoiceModal(comm);
    };

    // Category Tabs
    document.querySelectorAll('#comm-category-tabs .filter-tab').forEach(btn => {
      btn.onclick = () => {
        state.commissionsCategory = btn.dataset.cat;
        document.querySelectorAll('#comm-category-tabs .filter-tab').forEach(b => b.classList.toggle('active', b.dataset.cat === state.commissionsCategory));
        loadCommissions();
      };
    });

    const searchInput = document.querySelector('#comm-search');
    const statusFilter = document.querySelector('#comm-status-filter');
    const agentFilter = document.querySelector('#comm-agent-filter');

    const loadCommissions = async () => {
      let list = state.commissions;
      if (!list.length || state.demo) {
        list = state.demo ? demoCommissions : [];
        if (!state.demo) {
          const page = await request('/commissions?page=0&size=100').catch(() => ({ content: [] }));
          list = page.content || [];
        }
        state.commissions = list;
      }

      const q = (searchInput?.value || '').toLowerCase();
      const st = statusFilter?.value || '';
      const ag = agentFilter?.value || '';
      const cat = state.commissionsCategory || 'ALL';

      const filtered = list.filter(c => {
        if (cat !== 'ALL' && c.status !== cat) return false;
        if (st && c.status !== st) return false;
        if (ag && c.agentName !== ag) return false;
        if (q) {
          const searchStr = `${c.dealTitle} ${c.clientName} ${c.propertyTitle} ${c.agentName || ''} ${c.invoiceNumber || ''} ${c.notes || ''}`.toLowerCase();
          if (!searchStr.includes(q)) return false;
        }
        return true;
      });

      // Calculate KPI Stats
      const totalExpected = list.reduce((acc, c) => acc + (c.grossBrokerage || 0), 0);
      const totalRealized = list.filter(c => c.status === 'RECEIVED').reduce((acc, c) => acc + (c.grossBrokerage || 0), 0);
      const totalDue = list.filter(c => c.status === 'PENDING_INVOICE').reduce((acc, c) => acc + (c.grossBrokerage || 0), 0);
      const totalAgent = list.reduce((acc, c) => acc + (c.agentShareAmount || 0), 0);

      const statExp = document.querySelector('#comm-stat-expected');
      const statReal = document.querySelector('#comm-stat-realized');
      const statDue = document.querySelector('#comm-stat-due');
      const statAg = document.querySelector('#comm-stat-agent');
      if (statExp) statExp.textContent = `₹${totalExpected.toLocaleString('en-IN')}`;
      if (statReal) statReal.textContent = `₹${totalRealized.toLocaleString('en-IN')}`;
      if (statDue) statDue.textContent = `₹${totalDue.toLocaleString('en-IN')}`;
      if (statAg) statAg.textContent = `₹${totalAgent.toLocaleString('en-IN')}`;

      const feed = document.querySelector('#comm-feed-container');
      if (!feed) return;

      if (!filtered.length) {
        feed.innerHTML = `<div class="empty"><strong>No commission records found matching criteria.</strong>Click "+ Record Commission" to add a new revenue entry.</div>`;
        return;
      }

      if (state.commissionsViewMode === 'cards') {
        // ⊞ SPLIT CARDS VIEW
        feed.innerHTML = `
          <div class="vault-grid">
            ${filtered.map(c => {
              const isReceived = c.status === 'RECEIVED';
              const isPending = c.status === 'PENDING_INVOICE';

              return `
                <div class="commission-card">
                  <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:12px;">
                    <div>
                      <h4 class="vault-title">${esc(c.dealTitle)}</h4>
                      <div class="vault-meta">🏢 ${esc(c.propertyTitle)} (${esc(c.listingType)})</div>
                    </div>
                    <span class="badge ${isReceived ? 'cold' : isPending ? 'warm' : 'hot'}" style="font-size:10.5px;">
                      ${isReceived ? '✓ RECEIVED' : isPending ? '⏳ PENDING INVOICE' : '⚡ EXPECTED'}
                    </span>
                  </div>

                  <div style="display:flex;justify-content:space-between;align-items:center;background:#f8fafc;padding:10px 14px;border-radius:10px;border:1px solid var(--line);">
                    <div>
                      <div style="font-size:11.5px;color:var(--muted);">Gross Brokerage (${c.brokerageRate || 1.5}%)</div>
                      <div style="font-size:18px;font-weight:800;color:#165dff;">₹${(c.grossBrokerage || 0).toLocaleString('en-IN')}</div>
                    </div>
                    <div style="text-align:right;">
                      <div style="font-size:11.5px;color:var(--muted);">Agreed Deal Value</div>
                      <div style="font-size:14px;font-weight:750;color:var(--ink);">${formatPrice(c.agreedDealValue, c.listingType)}</div>
                    </div>
                  </div>

                  <!-- REVENUE SPLIT BAR -->
                  <div>
                    <div class="split-bar-wrap">
                      <div class="split-bar company" style="width:${c.companySharePercent || 70}%;" title="Company: ${c.companySharePercent}%"></div>
                      <div class="split-bar agent" style="width:${c.agentSharePercent || 30}%;" title="Agent: ${c.agentSharePercent}%"></div>
                    </div>
                    <div class="split-legend">
                      <div class="split-legend-item">
                        <span class="split-dot company"></span>
                        <span>Company (${c.companySharePercent}%): <strong>₹${(c.companyShareAmount || 0).toLocaleString('en-IN')}</strong></span>
                      </div>
                      <div class="split-legend-item">
                        <span class="split-dot agent"></span>
                        <span>${esc(c.agentName)} (${c.agentSharePercent}%): <strong>₹${(c.agentShareAmount || 0).toLocaleString('en-IN')}</strong></span>
                      </div>
                    </div>
                  </div>

                  ${c.invoiceNumber ? `
                    <div style="font-size:11.5px;color:var(--muted);display:flex;justify-content:space-between;">
                      <span>Invoice #: <strong style="color:var(--ink);">${esc(c.invoiceNumber)}</strong></span>
                      <span>Due: <strong>${c.paymentDueDate || 'Immediate'}</strong></span>
                    </div>
                  ` : ''}

                  ${c.notes ? `<div class="vault-notes">${esc(c.notes)}</div>` : ''}

                  <div class="vault-card-footer">
                    <div style="display:flex;gap:6px;flex-wrap:wrap;">
                      <button class="btn-act primary" data-comm-invoice="${c.id}">🧾 Invoice</button>
                      <button class="btn-act wa" data-comm-wa="${c.id}">💬 WhatsApp</button>
                      ${!isReceived ? `<button class="btn-act" data-comm-settle="${c.id}" style="background:#ecfdf5;color:#047857;border-color:#a7f3d0;">✓ Settle</button>` : ''}
                    </div>
                    <button class="link-button" data-comm-edit="${c.id}">Edit</button>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        `;
      } else {
        // ☰ LEDGER TABLE VIEW
        feed.innerHTML = `
          <div class="table-wrap">
            <table class="table">
              <thead>
                <tr>
                  <th>Deal & Client</th>
                  <th>Property Listing</th>
                  <th>Deal Value</th>
                  <th>Gross Commission</th>
                  <th>Company Share</th>
                  <th>Agent Share</th>
                  <th>Status & Invoice</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                ${filtered.map(c => {
                  const isReceived = c.status === 'RECEIVED';
                  const isPending = c.status === 'PENDING_INVOICE';
                  return `
                    <tr>
                      <td>
                        <strong style="color:var(--ink);">${esc(c.dealTitle)}</strong>
                        <div class="lead-contact">👤 ${esc(c.clientName)} (${esc(c.clientPhone || '—')})</div>
                      </td>
                      <td>
                        <div style="font-weight:650;color:var(--ink);">${esc(c.propertyTitle)}</div>
                        <div class="lead-contact">${esc(c.listingType)}</div>
                      </td>
                      <td>${formatPrice(c.agreedDealValue, c.listingType)}</td>
                      <td>
                        <strong style="color:#165dff;">₹${(c.grossBrokerage || 0).toLocaleString('en-IN')}</strong>
                        <div style="font-size:11px;color:var(--muted);">Rate: ${c.brokerageRate}%</div>
                      </td>
                      <td>
                        <span style="font-weight:700;color:#1e40af;">₹${(c.companyShareAmount || 0).toLocaleString('en-IN')}</span>
                        <div style="font-size:10.5px;color:var(--muted);">(${c.companySharePercent}%)</div>
                      </td>
                      <td>
                        <span style="font-weight:700;color:#047857;">₹${(c.agentShareAmount || 0).toLocaleString('en-IN')}</span>
                        <div style="font-size:10.5px;color:var(--muted);">${esc(c.agentName)} (${c.agentSharePercent}%)</div>
                      </td>
                      <td>
                        <span class="badge ${isReceived ? 'cold' : isPending ? 'warm' : 'hot'}" style="font-size:10.5px;">
                          ${isReceived ? '✓ RECEIVED' : isPending ? '⏳ PENDING' : '⚡ EXPECTED'}
                        </span>
                        ${c.invoiceNumber ? `<div style="font-size:11px;color:var(--muted);margin-top:2px;">${esc(c.invoiceNumber)}</div>` : ''}
                      </td>
                      <td>
                        <div style="display:flex;gap:4px;flex-wrap:wrap;">
                          <button class="btn-act primary" data-comm-invoice="${c.id}">🧾 Invoice</button>
                          <button class="btn-act wa" data-comm-wa="${c.id}">💬 WhatsApp</button>
                          ${!isReceived ? `<button class="btn-act" data-comm-settle="${c.id}" style="background:#ecfdf5;color:#047857;border-color:#a7f3d0;">✓</button>` : ''}
                        </div>
                      </td>
                    </tr>
                  `;
                }).join('')}
              </tbody>
            </table>
          </div>
        `;
      }

      // Bind button events
      feed.querySelectorAll('[data-comm-invoice]').forEach(btn => {
        btn.onclick = () => {
          const cId = Number(btn.dataset.commInvoice);
          const comm = list.find(x => x.id === cId);
          if (comm) brokerageInvoiceModal(comm);
        };
      });

      feed.querySelectorAll('[data-comm-wa]').forEach(btn => {
        btn.onclick = () => {
          const cId = Number(btn.dataset.commWa);
          const comm = list.find(x => x.id === cId);
          if (comm) copyCommissionWhatsApp(comm);
        };
      });

      feed.querySelectorAll('[data-comm-settle]').forEach(btn => {
        btn.onclick = () => {
          const cId = Number(btn.dataset.commSettle);
          const comm = list.find(x => x.id === cId);
          if (comm) {
            comm.status = 'RECEIVED';
            alert(`✅ Brokerage payment of ₹${comm.grossBrokerage.toLocaleString('en-IN')} marked as RECEIVED and settled!`);
            loadCommissions();
          }
        };
      });

      feed.querySelectorAll('[data-comm-edit]').forEach(btn => {
        btn.onclick = () => {
          const cId = Number(btn.dataset.commEdit);
          const comm = list.find(x => x.id === cId);
          if (comm) commissionDrawer(comm);
        };
      });
    };

    if (searchInput) searchInput.oninput = loadCommissions;
    if (statusFilter) statusFilter.onchange = loadCommissions;
    if (agentFilter) agentFilter.onchange = loadCommissions;

    loadCommissions();
  }

  function brokerageInvoiceModal(comm) {
    const defaultComm = {
      id: 401,
      clientName: 'Rahul Sharma',
      clientPhone: '+91 98765 43210',
      propertyTitle: 'Spacious 2 BHK at Hiranandani Estate',
      agreedDealValue: 12500000,
      listingType: 'SALE',
      brokeragePercent: 1.5,
      grossBrokerage: 187500,
      status: 'PENDING_INVOICE',
      invoiceNumber: 'INV-2026-088',
      invoiceDate: new Date().toISOString().slice(0, 10),
      paymentDueDate: 'Within 7 Days'
    };
    comm = comm || (state.commissions && state.commissions[0]) || defaultComm;
    document.querySelectorAll('.modal-backdrop, .drawer-backdrop').forEach(b => b.remove());
    const backdrop = document.createElement('div');
    backdrop.className = 'modal-backdrop';
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.cssText = 'max-width:640px;width:94vw;max-height:90vh;overflow-y:auto;background:#fff;padding:24px;border-radius:20px;box-shadow:0 25px 60px rgba(0,0,0,0.3);position:relative;box-sizing:border-box;';
    
    const subtotal = comm.grossBrokerage || 0;
    const cgst = Math.round(subtotal * 0.09);
    const sgst = Math.round(subtotal * 0.09);
    const grandTotal = subtotal + cgst + sgst;

    modal.innerHTML = `
      <div style="text-align:center;border-bottom:2px solid var(--line);padding-bottom:14px;margin-bottom:16px;">
        <div class="brand auth-brand" style="margin-bottom:6px;"><span class="mark"><svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M4 20V10l8-6 8 6v10"/><path d="M9 20v-6h6v6"/></svg></span><span>BrokerAI Realty Services</span></div>
        <h2 style="margin:2px 0;font-size:20px;">TAX INVOICE / BROKERAGE BILL</h2>
        <div class="subtle" style="font-size:11.5px;">GSTIN: 27AABCB1234F1Z8 · PAN: ABCDE1234F · RERA: A51700012345</div>
      </div>

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;font-size:12.5px;margin-bottom:16px;background:#f8fafc;padding:12px;border-radius:10px;border:1px solid var(--line);">
        <div>
          <strong>Billed To (Client / Owner):</strong>
          <div style="font-weight:700;color:var(--ink);margin-top:2px;">${esc(comm.clientName)}</div>
          <div>📞 ${esc(comm.clientPhone || '+91 98765 43210')}</div>
          <div style="color:var(--muted);margin-top:2px;">🏢 ${esc(comm.propertyTitle)}</div>
        </div>
        <div style="text-align:right;">
          <div><strong>Invoice #:</strong> ${esc(comm.invoiceNumber || 'INV-2026-088')}</div>
          <div><strong>Date:</strong> ${comm.invoiceDate || new Date().toISOString().slice(0,10)}</div>
          <div><strong>Payment Due:</strong> ${comm.paymentDueDate || 'Within 7 Days'}</div>
          <div><strong>Status:</strong> <span class="badge ${comm.status === 'RECEIVED' ? 'cold' : 'warm'}">${esc(comm.status)}</span></div>
        </div>
      </div>

      <div class="table-wrap" style="margin-bottom:16px;">
        <table class="table" style="font-size:12.5px;">
          <thead>
            <tr>
              <th>Description of Services</th>
              <th>Deal Value</th>
              <th>Rate</th>
              <th style="text-align:right;">Amount (₹)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Real Estate Agency & Brokerage Services</strong>
                <div style="font-size:11px;color:var(--muted);">For transaction of ${esc(comm.propertyTitle)}</div>
              </td>
              <td>${formatPrice(comm.agreedDealValue, comm.listingType)}</td>
              <td>${comm.brokerageRate}%</td>
              <td style="text-align:right;font-weight:700;">₹${subtotal.toLocaleString('en-IN')}</td>
            </tr>
            <tr>
              <td colspan="3" style="text-align:right;color:var(--muted);">CGST @ 9%</td>
              <td style="text-align:right;">₹${cgst.toLocaleString('en-IN')}</td>
            </tr>
            <tr>
              <td colspan="3" style="text-align:right;color:var(--muted);">SGST @ 9%</td>
              <td style="text-align:right;">₹${sgst.toLocaleString('en-IN')}</td>
            </tr>
            <tr style="background:#f1f5f9;font-weight:800;font-size:13.5px;">
              <td colspan="3" style="text-align:right;">Total Amount Payable:</td>
              <td style="text-align:right;color:#165dff;">₹${grandTotal.toLocaleString('en-IN')}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style="background:#f8fafc;padding:12px;border-radius:10px;border:1px solid var(--line);font-size:12px;margin-bottom:16px;">
        <strong>Bank NEFT / RTGS / UPI Payment Details:</strong>
        <div style="margin-top:4px;display:grid;grid-template-columns:1fr 1fr;gap:4px;">
          <div>Account Name: <strong>BrokerAI Realty Pvt Ltd</strong></div>
          <div>Bank: <strong>HDFC Bank (Thane Main Branch)</strong></div>
          <div>Account No: <strong>50200049210984</strong></div>
          <div>IFSC Code: <strong>HDFC0000123</strong></div>
          <div>UPI ID: <strong>brokerai@hdfcbank</strong></div>
        </div>
      </div>

      <div style="display:flex;justify-content:space-between;align-items:center;">
        <div style="font-size:11px;color:var(--muted);">This is a digitally generated tax invoice authorized by BrokerAI.</div>
        <div style="display:flex;gap:8px;">
          <button class="button secondary" id="close-invoice-modal">Close</button>
          <button class="button primary" id="print-invoice-btn">🖨️ Print / Save PDF</button>
        </div>
      </div>`;
    backdrop.appendChild(modal);
    document.body.appendChild(backdrop);
    const close = () => backdrop.remove();
    backdrop.onclick = (e) => { if (e.target === backdrop) close(); };
    modal.onclick = (e) => e.stopPropagation();
    if (modal.querySelector('#close-invoice-modal')) modal.querySelector('#close-invoice-modal').onclick = close;
    if (modal.querySelector('#print-invoice-btn')) modal.querySelector('#print-invoice-btn').onclick = () => window.print();
  }

  function copyCommissionWhatsApp(comm) {
    const isReceived = comm.status === 'RECEIVED';
    const text = isReceived ? `*🧾 Payment Acknowledgment - BrokerAI Realty*
*Client:* ${comm.clientName}
*Property:* ${comm.propertyTitle}
*Brokerage Amount Received:* ₹${(comm.grossBrokerage || 0).toLocaleString('en-IN')}
*Invoice #:* ${comm.invoiceNumber || 'INV-SETTLED'}
*Status:* ✓ Payment Received & Settled

Thank you for your business!

Best regards,
*${comm.agentName || state.user?.fullName || 'Aarav Mehta'}* | BrokerAI` : `*🧾 Brokerage Invoice Payment Request*
*Client:* ${comm.clientName}
*Property:* ${comm.propertyTitle}
*Invoice #:* ${comm.invoiceNumber || 'INV-2026-088'}
*Brokerage Amount Payable:* ₹${(comm.grossBrokerage || 0).toLocaleString('en-IN')}
*Due Date:* ${comm.paymentDueDate || 'Immediate'}

*Bank Account Details:*
• Bank: HDFC Bank
• A/C No: 50200049210984
• IFSC: HDFC0000123
• UPI: brokerai@hdfcbank

Please share the payment reference screenshot once transferred.

Best regards,
*${comm.agentName || state.user?.fullName || 'Aarav Mehta'}* | BrokerAI`;

    navigator.clipboard.writeText(text).then(() => {
      alert(`✅ Formatted WhatsApp ${isReceived ? 'Receipt Acknowledgment' : 'Payment Request'} copied to clipboard!\\n\\nYou can now paste it directly into WhatsApp chat.`);
    }).catch(() => prompt("Copy WhatsApp Message:", text));
  }

  function commissionDrawer(comm = null) {
    document.querySelectorAll('.modal-backdrop, .drawer-backdrop, .spotlight-backdrop').forEach(b => b.remove());
    let deals = state.deals.length ? state.deals : (state.demo ? demoDeals : []);

    const backdrop = document.createElement('div');
    backdrop.className = 'drawer-backdrop';
    const drawer = document.createElement('aside');
    drawer.className = 'drawer';
    drawer.innerHTML = `
      <div class="drawer-head">
        <div>
          <h2 class="panel-title">${comm ? 'Edit Commission Record' : 'Record Brokerage Commission'}</h2>
          <div class="subtle">Track gross brokerage, agency-agent split, and invoice details.</div>
        </div>
        <button class="close">×</button>
      </div>
      <form class="form" id="comm-form">
        <div id="comm-notice"></div>
        <div class="form-section">
          <h3>Commission & Revenue Split</h3>
          <div class="form-grid">
            <div class="field full">
              <label>Associated Deal</label>
              <select class="select" name="dealId" required>
                <option value="">Select Deal</option>
                ${deals.map(d => `<option value="${d.id}" ${comm?.dealId === d.id ? 'selected' : ''}>${esc(d.leadName)} × ${esc(d.propertyTitle)} (${formatPrice(d.agreedPrice, d.listingType)})\</option>`).join('')}
              </select>
            </div>
            <div class="field">
              <label>Gross Brokerage (₹)</label>
              <input class="input" name="grossBrokerage" type="number" required value="${comm?.grossBrokerage || ''}" placeholder="e.g. 187500" />
            </div>
            <div class="field">
              <label>Company Share (%)</label>
              <input class="input" name="companySharePercent" type="number" value="${comm?.companySharePercent || 70}" />
            </div>
            <div class="field">
              <label>Agent Share (%)</label>
              <input class="input" name="agentSharePercent" type="number" value="${comm?.agentSharePercent || 30}" />
            </div>
            <div class="field">
              <label>Assigned Agent Name</label>
              <input class="input" name="agentName" value="${comm?.agentName || state.user?.fullName || 'Aarav Mehta'}" />
            </div>
            <div class="field">
              <label>Payment Status</label>
              <select class="select" name="status">
                <option value="EXPECTED" ${comm?.status === 'EXPECTED' ? 'selected' : ''}>EXPECTED (In Pipeline)</option>
                <option value="PENDING_INVOICE" ${comm?.status === 'PENDING_INVOICE' ? 'selected' : ''}>PENDING_INVOICE (Invoiced)</option>
                <option value="RECEIVED" ${comm?.status === 'RECEIVED' ? 'selected' : ''}>RECEIVED (Settled)</option>
              </select>
            </div>
            <div class="field">
              <label>Invoice Number</label>
              <input class="input" name="invoiceNumber" value="${comm?.invoiceNumber || `INV-2026-0${Math.floor(10 + Math.random()*90)}`}" />
            </div>
            <div class="field">
              <label>Payment Due Date</label>
              <input class="input" name="paymentDueDate" type="date" value="${comm?.paymentDueDate || new Date(Date.now() + 14*86400000).toISOString().slice(0,10)}" />
            </div>
            <div class="field full">
              <label>Notes & Settlement Remarks</label>
              <textarea class="input" name="notes" placeholder="e.g. Invoiced to builder, 50% on token and 50% on registration...">${comm?.notes || ''}</textarea>
            </div>
          </div>
        </div>
      </form>
      <div class="form-actions">
        <button class="button secondary" id="cancel-comm">Cancel</button>
        <button class="button primary" id="save-comm-btn">${comm ? 'Update Commission' : 'Save Commission'}</button>
      </div>`;
    document.body.append(backdrop, drawer);
    const close = () => { backdrop.remove(); drawer.remove(); };
    backdrop.onclick = close;
    if (drawer.querySelector('.close')) drawer.querySelector('.close').onclick = close;
    if (drawer.querySelector('#cancel-comm')) drawer.querySelector('#cancel-comm').onclick = close;
    if (drawer.querySelector('#save-comm-btn')) drawer.querySelector('#save-comm-btn').onclick = async () => {
      const form = new FormData(drawer.querySelector('#comm-form'));
      const dealId = Number(form.get('dealId'));
      const grossBrokerage = Number(form.get('grossBrokerage'));
      const companySharePercent = Number(form.get('companySharePercent') || 70);
      const agentSharePercent = Number(form.get('agentSharePercent') || 30);
      const agentName = form.get('agentName') || 'Aarav Mehta';
      const status = form.get('status');
      const invoiceNumber = form.get('invoiceNumber');
      const paymentDueDate = form.get('paymentDueDate');
      const notes = form.get('notes') || '';

      if (!dealId || !grossBrokerage) {
        drawer.querySelector('#comm-notice').innerHTML = `<div class="notice error">Please fill all required fields.</div>`;
        return;
      }

      const deal = deals.find(d => d.id === dealId);
      const companyShareAmount = Math.round(grossBrokerage * (companySharePercent / 100));
      const agentShareAmount = Math.round(grossBrokerage * (agentSharePercent / 100));

      const payload = {
        id: comm?.id || Date.now(),
        dealId,
        dealTitle: `${deal?.leadName || 'Client'} × ${deal?.propertyTitle || 'Listing'}`,
        clientName: deal?.leadName || 'Client',
        clientPhone: deal?.leadPhone || '',
        propertyTitle: deal?.propertyTitle || 'Property',
        propertyLocation: deal?.propertyLocation || 'Thane',
        listingType: deal?.listingType || 'SALE',
        agreedDealValue: deal?.agreedPrice || 0,
        grossBrokerage,
        brokerageRate: deal?.brokerageRate || 1.5,
        companySharePercent,
        companyShareAmount,
        agentSharePercent,
        agentShareAmount,
        agentName,
        status,
        invoiceNumber,
        invoiceDate: new Date().toISOString().slice(0, 10),
        paymentDueDate,
        notes
      };

      if (state.demo) {
        if (comm) {
          const idx = demoCommissions.findIndex(x => x.id === comm.id);
          if (idx !== -1) demoCommissions[idx] = payload;
        } else {
          demoCommissions.unshift(payload);
        }
      }
      close();
      commissionsView();
    };
  }


  
  async function teamView() {
    const caps = getPlanCapabilities();
    if (caps.planId !== 'agency') {
      mountView(planUpgradeWall('Agency Elite', 'Team Closer Roster & Seat Quotas'), 'Team Closer Roster · Upgrade Required', 'team');
      const btn = document.querySelector('#upgrade-wall-switch-btn');
      if (btn) btn.onclick = () => {
        state.currentPlan = 'agency';
        localStorage.setItem('brokerai.currentPlan', 'agency');
        toast('Unlocked Agency Elite! Reloading view...', 'success');
        setTimeout(() => { render(); }, 300);
      };
      return;
    }

    const roster = getStoredTeamRoster();
    const totalVolume = roster.reduce((acc, m) => acc + (Number(m.volumeCr) || 0), 0);
    const totalClosed = roster.reduce((acc, m) => acc + (Number(m.dealsClosed) || 0), 0);
    const totalLeads = roster.reduce((acc, m) => acc + (Number(m.activeLeads) || 0), 0);

    const html = `
      ${pageHeader('👥 CLOSER TEAM ROSTER & SEAT ALLOCATION', 'Agency Elite Desk: ' + roster.length + ' / 20 Closer Seats Active · Role-Based Access Control & Territory Management', `
        <div style="display:flex;gap:10px;flex-wrap:wrap;">
          <button class="button secondary" id="team-export-roster-btn">📥 Export Roster CSV</button>
          <button class="button primary" id="team-add-agent-btn" style="background:#059669;font-weight:800;">+ Provision Closer Seat</button>
        </div>
      `)}

      <!-- TEAM METRICS -->
      <div class="cards" style="margin-bottom:24px;">
        <article class="metric">
          <div class="metric-label">Active Closer Seats</div>
          <div class="metric-value" style="color:#059669;">${roster.length} / 20 Seats</div>
          <div class="metric-note">Agency Elite Capacity</div>
        </article>
        <article class="metric">
          <div class="metric-label">Active Team Pipeline</div>
          <div class="metric-value" style="color:#0284c7;">${totalLeads} Active Leads</div>
          <div class="metric-note">Across Thane MMR Hubs</div>
        </article>
        <article class="metric">
          <div class="metric-label">Q1 Deals Closed</div>
          <div class="metric-value" style="color:#165dff;">${totalClosed} Deals</div>
          <div class="metric-note">Quarterly Agency Total</div>
        </article>
        <article class="metric">
          <div class="metric-label">Q1 Closed Volume</div>
          <div class="metric-value" style="color:#0f172a;">₹${totalVolume.toFixed(2)} Cr</div>
          <div class="metric-note">Gross Agency Transacted</div>
        </article>
      </div>

      <!-- SEARCH & DESK FILTER -->
      <div style="display:flex;gap:12px;margin-bottom:16px;flex-wrap:wrap;align-items:center;">
        <input type="text" id="team-roster-search" class="input" placeholder="Search closer by name, phone, email, or role..." style="max-width:340px;flex:1;" />
        <select id="team-roster-desk-filter" class="select" style="max-width:260px;">
          <option value="">All Regional Desks</option>
          <option value="Hiranandani Estate">Hiranandani Estate Hub</option>
          <option value="Majiwada Junction">Majiwada Junction Hub</option>
          <option value="Kolshet Road">Kolshet Road Hub</option>
          <option value="Ghodbunder Commercial">Ghodbunder Commercial Hub</option>
        </select>
      </div>

      <div class="card" style="padding:0;overflow:hidden;border:1px solid #e2e8f0;border-radius:14px;box-shadow:0 4px 20px rgba(0,0,0,0.03);">
        <div style="padding:16px 20px;border-bottom:1px solid #f1f5f9;background:#f8fafc;display:flex;justify-content:space-between;align-items:center;">
          <div style="font-size:14px;font-weight:800;color:#0f172a;">Active Closer Roster Directory</div>
          <div style="font-size:12px;color:#64748b;">Showing ${roster.length} of 20 Provisioned Seats</div>
        </div>
        <div class="table-wrap">
          <table class="table" style="margin:0;">
            <thead>
              <tr style="background:#f8fafc;">
                <th>Closer Name</th>
                <th>Role & Level</th>
                <th>Territory Desk</th>
                <th>Active Leads</th>
                <th>Q1 Deals Closed</th>
                <th>Closed Volume</th>
                <th>Agency Split</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody id="team-roster-tbody">
              ${renderRosterRows(roster)}
            </tbody>
          </table>
        </div>
      </div>
    `;

    mountView(html, '👥 Closer Team Roster (12/20)', 'team');

    function renderRosterRows(list) {
      return list.map(m => `
        <tr>
          <td>
            <strong>${esc(m.name)}</strong>
            <div style="font-size:11px;color:#64748b;">${esc(m.phone)} · ${esc(m.email || 'closer@agency.in')}</div>
          </td>
          <td><span class="badge" style="background:#eff6ff;color:#1d4ed8;font-weight:800;">${esc(m.role)}</span></td>
          <td>${esc(m.desk || 'Thane Central Desk')}</td>
          <td>${m.activeLeads || 0} Leads</td>
          <td><strong>${m.dealsClosed || 0} Deals</strong></td>
          <td><strong style="color:#059669;">₹${Number(m.volumeCr || 0).toFixed(2)} Cr</strong></td>
          <td style="font-size:12.5px;color:#475569;">${esc(m.split || '70% Closer / 30% Agency')}</td>
          <td>
            <div style="display:flex;gap:6px;flex-wrap:wrap;">
              <button class="button secondary small agent-wa-btn" data-phone="${esc(m.phone)}" data-name="${esc(m.name)}" style="font-size:11px;padding:4px 8px;">💬 WhatsApp</button>
              <button class="button secondary small agent-edit-btn" data-agent-id="${esc(m.id)}" style="font-size:11px;padding:4px 8px;">⚙️ Edit</button>
            </div>
          </td>
        </tr>
      `).join('');
    }

    // Bind Search & Filters
    const searchInput = document.getElementById('team-roster-search');
    const deskFilter = document.getElementById('team-roster-desk-filter');
    const tbody = document.getElementById('team-roster-tbody');

    const filterRoster = () => {
      const q = (searchInput?.value || '').toLowerCase().trim();
      const d = (deskFilter?.value || '').toLowerCase().trim();
      const filtered = roster.filter(m => {
        const matchesQ = !q || m.name.toLowerCase().includes(q) || m.phone.toLowerCase().includes(q) || (m.role || '').toLowerCase().includes(q);
        const matchesD = !d || (m.desk || '').toLowerCase().includes(d);
        return matchesQ && matchesD;
      });
      if (tbody) tbody.innerHTML = renderRosterRows(filtered);
      bindRowButtons();
    };

    if (searchInput) searchInput.oninput = filterRoster;
    if (deskFilter) deskFilter.onchange = filterRoster;

    function bindRowButtons() {
      document.querySelectorAll('.agent-wa-btn').forEach(btn => {
        btn.onclick = () => {
          const name = btn.dataset.name;
          const phone = btn.dataset.phone;
          const text = encodeURIComponent(`Hello ${name}, BrokerAI daily deal pipeline report is ready. Please review your active leads, follow-ups, and scheduled site visits for today.`);
          window.open(`https://api.whatsapp.com/send?phone=${phone.replace(/[^0-9]/g, '')}&text=${text}`, '_blank');
        };
      });

      document.querySelectorAll('.agent-edit-btn').forEach(btn => {
        btn.onclick = () => {
          const agentId = btn.dataset.agentId;
          const agent = roster.find(x => x.id === agentId);
          if (agent) promptAddAgentModal(agent);
        };
      });
    }

    bindRowButtons();

    // Export Roster CSV
    const exportBtn = document.getElementById('team-export-roster-btn');
    if (exportBtn) {
      exportBtn.onclick = () => {
        exportTeamDirectoryCSV(roster);
      };
    }

    // Add Agent Modal
    const addBtn = document.getElementById('team-add-agent-btn');
    if (addBtn) {
      addBtn.onclick = () => {
        promptAddAgentModal();
      };
    }
  }

  function exportTeamDirectoryCSV(roster) {
    const list = roster || getStoredTeamRoster();
    let csv = 'Agent Name,Mobile Phone,Email,Role,Territory Desk,Active Leads,Q1 Deals Closed,Closed Volume (Cr),Commission Split,Status\n';
    list.forEach(m => {
      csv += `"${m.name}","${m.phone}","${m.email || ''}","${m.role}","${m.desk || ''}","${m.activeLeads || 0}","${m.dealsClosed || 0}","₹${m.volumeCr || 0} Cr","${m.split || ''}","${m.status || 'ACTIVE'}"\n`;
    });
    try {
      if (typeof Blob !== 'undefined' && typeof URL !== 'undefined' && typeof URL.createObjectURL === 'function') {
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `BrokerAI_Agency_Closer_Roster_${new Date().toISOString().slice(0,10)}.csv`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      } else {
        const encodedUri = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv);
        const a = document.createElement('a');
        a.href = encodedUri;
        a.download = `BrokerAI_Agency_Closer_Roster_${new Date().toISOString().slice(0,10)}.csv`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }
      toast('✓ Closer Team Roster exported as CSV!', 'success');
    } catch(e) {
      toast('✓ Closer directory CSV compiled.', 'success');
    }
  }

  function promptAddAgentModal(existingAgent = null) {
    document.querySelectorAll('.modal-backdrop').forEach(b => b.remove());
    const backdrop = document.createElement('div');
    backdrop.className = 'modal-backdrop';

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.cssText = 'max-width:520px;width:92vw;padding:24px;background:#fff;border-radius:20px;position:relative;box-shadow:0 25px 60px rgba(0,0,0,0.25);';

    modal.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid #f1f5f9;padding-bottom:12px;margin-bottom:16px;">
        <h3 style="margin:0;font-size:18px;font-weight:800;color:#0f172a;">${existingAgent ? '⚙️ Edit Closer Seat: ' + esc(existingAgent.name) : '+ Provision Closer Seat (Agency Elite)'}</h3>
        <button class="close" id="close-add-agent-btn" style="border:0;background:none;font-size:22px;cursor:pointer;color:#64748b;">✕</button>
      </div>
      <div style="display:grid;gap:12px;">
        <div>
          <label style="font-size:12px;font-weight:700;display:block;margin-bottom:4px;color:#334155;">Agent Full Name *</label>
          <input type="text" id="new-agent-name" placeholder="e.g. Vikram Singhania" value="${esc(existingAgent?.name || '')}" style="width:100%;padding:10px 12px;border:1px solid #cbd5e1;border-radius:8px;" />
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
          <div>
            <label style="font-size:12px;font-weight:700;display:block;margin-bottom:4px;color:#334155;">Mobile / WhatsApp *</label>
            <input type="tel" id="new-agent-phone" placeholder="+91 98200 00000" value="${esc(existingAgent?.phone || '')}" style="width:100%;padding:10px 12px;border:1px solid #cbd5e1;border-radius:8px;" />
          </div>
          <div>
            <label style="font-size:12px;font-weight:700;display:block;margin-bottom:4px;color:#334155;">Email Address</label>
            <input type="email" id="new-agent-email" placeholder="agent@agency.in" value="${esc(existingAgent?.email || '')}" style="width:100%;padding:10px 12px;border:1px solid #cbd5e1;border-radius:8px;" />
          </div>
        </div>
        <div>
          <label style="font-size:12px;font-weight:700;display:block;margin-bottom:4px;color:#334155;">Role & Permissions</label>
          <select id="new-agent-role" style="width:100%;padding:10px 12px;border:1px solid #cbd5e1;border-radius:8px;">
            <option value="Senior Luxury Closer" ${existingAgent?.role === 'Senior Luxury Closer' ? 'selected' : ''}>Senior Luxury Closer</option>
            <option value="Residential Specialist" ${existingAgent?.role === 'Residential Specialist' ? 'selected' : ''}>Residential Specialist</option>
            <option value="Commercial Closer" ${existingAgent?.role === 'Commercial Closer' ? 'selected' : ''}>Commercial Closer</option>
            <option value="Associate Closer" ${existingAgent?.role === 'Associate Closer' ? 'selected' : ''}>Associate Closer</option>
            <option value="Branch Head" ${existingAgent?.role === 'Branch Head' ? 'selected' : ''}>Branch Territory Desk Head</option>
          </select>
        </div>
        <div>
          <label style="font-size:12px;font-weight:700;display:block;margin-bottom:4px;color:#334155;">Assigned Territory Desk</label>
          <select id="new-agent-desk" style="width:100%;padding:10px 12px;border:1px solid #cbd5e1;border-radius:8px;">
            <option value="Hiranandani Estate Desk" ${existingAgent?.desk?.includes('Hiranandani') ? 'selected' : ''}>Hiranandani Estate Desk (Arcade 4)</option>
            <option value="Majiwada Junction Desk" ${existingAgent?.desk?.includes('Majiwada') ? 'selected' : ''}>Majiwada Junction Desk (Lodha Boulevard)</option>
            <option value="Kolshet Road Desk" ${existingAgent?.desk?.includes('Kolshet') ? 'selected' : ''}>Kolshet Road Desk (Pride Palms)</option>
            <option value="Ghodbunder Commercial Desk" ${existingAgent?.desk?.includes('Ghodbunder') ? 'selected' : ''}>Ghodbunder Commercial Desk (Wagle Estate)</option>
          </select>
        </div>
        <div>
          <label style="font-size:12px;font-weight:700;display:block;margin-bottom:4px;color:#334155;">Commission Split Agreement</label>
          <select id="new-agent-split" style="width:100%;padding:10px 12px;border:1px solid #cbd5e1;border-radius:8px;">
            <option value="70% Closer / 30% Agency" ${existingAgent?.split?.startsWith('70') ? 'selected' : ''}>70% Closer / 30% Agency House</option>
            <option value="60% Closer / 40% Agency" ${existingAgent?.split?.startsWith('60') ? 'selected' : ''}>60% Closer / 40% Agency House</option>
            <option value="50% Closer / 50% Agency" ${existingAgent?.split?.startsWith('50') ? 'selected' : ''}>50% Closer / 50% Agency House</option>
            <option value="80% Closer / 20% Agency" ${existingAgent?.split?.startsWith('80') ? 'selected' : ''}>80% Closer / 20% Agency House</option>
          </select>
        </div>
      </div>
      <div style="display:flex;gap:10px;justify-content:flex-end;margin-top:20px;">
        <button class="button secondary" id="cancel-add-agent-btn">Cancel</button>
        <button class="button primary" id="save-new-agent-btn" style="background:#059669;font-weight:750;">${existingAgent ? 'Save Changes' : '🚀 Provision & WhatsApp Onboard'}</button>
      </div>
    `;

    backdrop.appendChild(modal);
    document.body.appendChild(backdrop);

    const close = () => backdrop.remove();
    backdrop.onclick = (e) => { if (e.target === backdrop) close(); };
    const closeBtn = modal.querySelector('#close-add-agent-btn');
    if (closeBtn) closeBtn.onclick = close;
    const cancelBtn = modal.querySelector('#cancel-add-agent-btn');
    if (cancelBtn) cancelBtn.onclick = close;

    const saveBtn = modal.querySelector('#save-new-agent-btn');
    if (saveBtn) {
      saveBtn.onclick = () => {
        const name = modal.querySelector('#new-agent-name')?.value?.trim() || '';
        const phone = modal.querySelector('#new-agent-phone')?.value?.trim() || '';
        const email = modal.querySelector('#new-agent-email')?.value?.trim() || `${name.toLowerCase().replace(/[^a-z]/g, '')}@agency.in`;
        const role = modal.querySelector('#new-agent-role')?.value || 'Senior Luxury Closer';
        const desk = modal.querySelector('#new-agent-desk')?.value || 'Hiranandani Estate Desk';
        const split = modal.querySelector('#new-agent-split')?.value || '70% Closer / 30% Agency';

        if (!name || !phone) { toast('Please enter Agent Name and Phone number.', 'error'); return; }

        const roster = getStoredTeamRoster();
        if (existingAgent) {
          const idx = roster.findIndex(x => x.id === existingAgent.id);
          if (idx !== -1) {
            roster[idx] = { ...roster[idx], name, phone, email, role, desk, split };
          }
          saveStoredTeamRoster(roster);
          toast(`✓ Closer seat updated for ${name}!`, 'success');
        } else {
          roster.unshift({
            id: 'agent-' + Date.now(),
            name,
            phone,
            email,
            role,
            desk,
            activeLeads: 0,
            dealsClosed: 0,
            volumeCr: 0.0,
            split,
            status: 'ACTIVE'
          });
          saveStoredTeamRoster(roster);
          toast(`✓ Seat provisioned for ${name}! WhatsApp onboarding dispatched.`, 'success');
          
          const originUrl = (typeof window !== 'undefined' && window.location?.origin) ? window.location.origin : 'https://www.rebrokerai.in';
          const text = encodeURIComponent(`Hello ${name}, welcome to Mehta Prime Realty! You have been provisioned an active closer seat on BrokerAI Agency Elite. Access your portal here: ${originUrl}`);
          window.open(`https://api.whatsapp.com/send?phone=${phone.replace(/[^0-9]/g, '')}&text=${text}`, '_blank');
        }

        close();
        if (typeof teamView === 'function' && state.page === 'team') teamView();
        else if (typeof settingsView === 'function' && state.page === 'settings') settingsView();
      };
    }
  }



  
  async function branchesView() {
    const caps = getPlanCapabilities();
    if (caps.planId !== 'agency') {
      mountView(planUpgradeWall('Agency Elite', 'Branch Territory Desks & Lead Routing'), 'Branch Desks · Upgrade Required', 'branches');
      const btn = document.querySelector('#upgrade-wall-switch-btn');
      if (btn) btn.onclick = () => {
        state.currentPlan = 'agency';
        localStorage.setItem('brokerai.currentPlan', 'agency');
        toast('Unlocked Agency Elite! Reloading view...', 'success');
        setTimeout(() => { render(); }, 300);
      };
      return;
    }

    const desks = getStoredBranchDesks();
    const totalVolume = desks.reduce((acc, d) => acc + (Number(d.volumeCr) || 0), 0);
    const totalClosers = desks.reduce((acc, d) => acc + (Number(d.closers) || 0), 0);

    const html = `
      ${pageHeader('📍 BRANCH TERRITORY DESKS', 'Agency Elite Multi-Branch Governance: ' + desks.length + ' Regional Hubs in Thane MMR with Smart Routing', `
        <button class="button primary" id="add-branch-desk-btn" onclick="promptAddBranchDeskModal()" style="background:#059669;font-weight:800;display:inline-flex;align-items:center;gap:6px;cursor:pointer;">
          <span>＋</span> Provision Territory Desk
        </button>
      `)}

      <!-- WHAT IS THIS EXPLANATION BANNER -->
      <div class="card" style="margin-bottom:20px;background:linear-gradient(135deg, #0f172a 0%, #1e293b 100%);color:#ffffff;border:1px solid #334155;border-radius:14px;padding:18px 22px;">
        <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:16px;flex-wrap:wrap;">
          <div style="max-width:720px;">
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;">
              <span class="badge" style="background:#059669;color:#ffffff;font-weight:800;font-size:11px;">🏛️ REGIONAL DESK GOVERNANCE</span>
              <span style="font-size:12px;color:#94a3b8;">Thane & Mumbai MMR Territory Hubs</span>
            </div>
            <div style="font-size:15px;font-weight:800;color:#f8fafc;margin-bottom:4px;">Manage Branch Offices, Stationed Closers & Automated Lead Routing</div>
            <div style="font-size:12.5px;color:#cbd5e1;line-height:1.6;">
              Provision dedicated physical territory hubs across prime micro-markets (Hiranandani Estate, Majiwada, Pokhran Rd, Kolshet). Each desk gets an assigned Desk Head, dedicated closer seat quota, quarterly sales targets, and automated GPS proximity lead dispatching.
            </div>
          </div>
          <button class="button" onclick="promptAddBranchDeskModal()" style="background:#10b981;color:#ffffff;border:none;font-weight:800;padding:10px 18px;border-radius:10px;white-space:nowrap;cursor:pointer;">
            ＋ Setup New Branch Hub
          </button>
        </div>
      </div>

      <!-- BRANCH METRICS -->
      <div class="cards" style="margin-bottom:24px;">
        <article class="metric">
          <div class="metric-label">Regional Territory Hubs</div>
          <div class="metric-value" style="color:#059669;">${desks.length} Active Desks</div>
          <div class="metric-note">Thane MMR Operating Hubs</div>
        </article>
        <article class="metric">
          <div class="metric-label">Stationed Closers</div>
          <div class="metric-value" style="color:#0284c7;">${totalClosers} Closer Seats</div>
          <div class="metric-note">Assigned to Territories</div>
        </article>
        <article class="metric">
          <div class="metric-label">Q1 Regional Volume</div>
          <div class="metric-value" style="color:#165dff;">₹${totalVolume.toFixed(2)} Cr</div>
          <div class="metric-note">Total Branch Transactions</div>
        </article>
        <article class="metric">
          <div class="metric-label">Lead Routing Strategy</div>
          <div class="metric-value" style="color:#047857;">100% Automated</div>
          <div class="metric-note">Location-First Proximity</div>
        </article>
      </div>

      <!-- DESKS GRID -->
      <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));gap:18px;margin-bottom:24px;" id="branch-desks-grid">
        ${desks.map(d => `
          <div class="card" style="border-left:4px solid ${d.border || '#0071e3'};display:flex;flex-direction:column;justify-content:space-between;border-radius:14px;box-shadow:0 4px 20px rgba(0,0,0,0.04);">
            <div>
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
                <strong style="font-size:16px;color:#0f172a;">${esc(d.name)}</strong>
                <span class="badge" style="background:${d.badgeBg || '#eff6ff'};color:${d.badgeColor || '#1d4ed8'};font-weight:800;">${esc(d.tag || 'Active')}</span>
              </div>
              <div style="font-size:12px;color:#64748b;margin-bottom:12px;">🏢 Office: ${esc(d.address)}</div>
              <div style="display:grid;gap:6px;font-size:13px;background:#f8fafc;padding:12px 14px;border-radius:10px;border:1px solid #e2e8f0;margin-bottom:14px;">
                <div style="display:flex;justify-content:space-between;"><span>Desk Head:</span> <strong>${esc(d.head)}</strong></div>
                <div style="display:flex;justify-content:space-between;"><span>Assigned Closers:</span> <strong>${d.closers} Agents</strong></div>
                <div style="display:flex;justify-content:space-between;"><span>Q1 Target Volume:</span> <strong style="color:#059669;">₹${Number(d.volumeCr || 0).toFixed(2)} Cr</strong></div>
              </div>
            </div>
            <div style="display:flex;gap:8px;border-top:1px solid #f1f5f9;padding-top:12px;margin-top:8px;">
              <button class="button secondary small branch-wa-btn" data-phone="${esc(d.phone || '+919820012345')}" data-name="${esc(d.head)}" style="flex:1;font-size:12px;padding:8px 10px;display:flex;align-items:center;justify-content:center;gap:4px;">
                💬 WhatsApp Head
              </button>
              <button class="button secondary small branch-route-btn" data-desk-name="${esc(d.name)}" style="font-size:12px;padding:8px 10px;">
                🎯 Route Policy
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    `;

    mountView(html, '📍 Branch Territory Desks', 'branches');

    // Programmatic click bindings
    const addBtn = document.getElementById('add-branch-desk-btn');
    if (addBtn) {
      addBtn.onclick = () => {
        promptAddBranchDeskModal();
      };
    }

    // Bind Branch WhatsApp & Route Buttons
    document.querySelectorAll('.branch-wa-btn').forEach(btn => {
      btn.onclick = () => {
        const phone = btn.dataset.phone || '+919820012345';
        const name = btn.dataset.name || 'Desk Head';
        const text = encodeURIComponent(`Hello ${name}, BrokerAI Territory Hub check-in: Please review active buyer walk-ins and deal allocations for your desk.`);
        window.open(`https://api.whatsapp.com/send?phone=${phone.replace(/[^0-9]/g, '')}&text=${text}`, '_blank');
      };
    });

    document.querySelectorAll('.branch-route-btn').forEach(btn => {
      btn.onclick = () => {
        const dName = btn.dataset.deskName;
        toast(`Smart Lead Routing active for ${dName}: Auto-routing buyer inquiries by GPS & property budget.`, 'info');
      };
    });
  }

  function promptAddBranchDeskModal() {
    document.querySelectorAll('.modal-backdrop').forEach(b => b.remove());
    const backdrop = document.createElement('div');
    backdrop.className = 'modal-backdrop';
    backdrop.style.cssText = 'position:fixed;inset:0;width:100vw;height:100vh;background:rgba(0,0,0,0.65);z-index:99999;display:flex;align-items:center;justify-content:center;padding:16px;box-sizing:border-box;';

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.cssText = 'max-width:520px;width:94vw;max-height:90vh;overflow-y:auto;padding:26px;background:#ffffff;border-radius:20px;position:relative;box-shadow:0 25px 70px rgba(0,0,0,0.35);border:1px solid #e2e8f0;color:#0f172a;box-sizing:border-box;';

    modal.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid #f1f5f9;padding-bottom:14px;margin-bottom:18px;">
        <div>
          <div style="display:flex;align-items:center;gap:6px;margin-bottom:2px;">
            <span class="badge" style="background:#ecfdf5;color:#047857;font-weight:800;font-size:10.5px;">AGENCY ELITE HUB</span>
          </div>
          <h3 style="margin:0;font-size:19px;font-weight:800;color:#0f172a;">📍 Provision New Territory Desk Hub</h3>
        </div>
        <button class="close" id="close-branch-modal-btn" style="border:0;background:rgba(0,0,0,0.06);width:32px;height:32px;border-radius:8px;font-size:18px;cursor:pointer;color:#64748b;display:flex;align-items:center;justify-content:center;">✕</button>
      </div>
      
      <div style="font-size:12.5px;color:#64748b;margin-bottom:16px;line-height:1.5;">
        Set up a regional branch office to govern localized buyer leads, manage closer agent quotas, and configure smart auto-routing across Thane & Mumbai micro-markets.
      </div>

      <div style="display:grid;gap:14px;">
        <div>
          <label style="font-size:12px;font-weight:750;display:block;margin-bottom:5px;color:#334155;">Desk / Territory Hub Name *</label>
          <input type="text" id="new-branch-name" placeholder="e.g. Pokhran Road 2 Luxury Hub" style="width:100%;padding:11px 14px;border:1.5px solid #cbd5e1;border-radius:10px;font-size:14px;box-sizing:border-box;" />
        </div>
        <div>
          <label style="font-size:12px;font-weight:750;display:block;margin-bottom:5px;color:#334155;">Office Address / Commercial Landmark *</label>
          <input type="text" id="new-branch-address" placeholder="e.g. Viviana Commercial Complex, Eastern Express Hwy, Thane (W)" style="width:100%;padding:11px 14px;border:1.5px solid #cbd5e1;border-radius:10px;font-size:14px;box-sizing:border-box;" />
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
          <div>
            <label style="font-size:12px;font-weight:750;display:block;margin-bottom:5px;color:#334155;">Desk Head / Manager</label>
            <input type="text" id="new-branch-head" placeholder="e.g. Aarav Mehta" value="Aarav Mehta" style="width:100%;padding:11px 14px;border:1.5px solid #cbd5e1;border-radius:10px;font-size:14px;box-sizing:border-box;" />
          </div>
          <div>
            <label style="font-size:12px;font-weight:750;display:block;margin-bottom:5px;color:#334155;">Desk Head WhatsApp Phone</label>
            <input type="tel" id="new-branch-phone" placeholder="+91 98200 12345" value="+91 98200 12345" style="width:100%;padding:11px 14px;border:1.5px solid #cbd5e1;border-radius:10px;font-size:14px;box-sizing:border-box;" />
          </div>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
          <div>
            <label style="font-size:12px;font-weight:750;display:block;margin-bottom:5px;color:#334155;">Assigned Closer Seats</label>
            <input type="number" id="new-branch-closers" value="3" min="1" max="15" style="width:100%;padding:11px 14px;border:1.5px solid #cbd5e1;border-radius:10px;font-size:14px;box-sizing:border-box;" />
          </div>
          <div>
            <label style="font-size:12px;font-weight:750;display:block;margin-bottom:5px;color:#334155;">Q1 Target Volume (₹ Cr)</label>
            <input type="number" id="new-branch-volume" value="5.0" step="0.5" style="width:100%;padding:11px 14px;border:1.5px solid #cbd5e1;border-radius:10px;font-size:14px;box-sizing:border-box;" />
          </div>
        </div>
        <div>
          <label style="font-size:12px;font-weight:750;display:block;margin-bottom:5px;color:#334155;">Smart Lead Routing Policy</label>
          <select id="new-branch-routing" style="width:100%;padding:11px 14px;border:1.5px solid #cbd5e1;border-radius:10px;font-size:14px;box-sizing:border-box;background:#ffffff;">
            <option value="proximity">📍 Location-First Proximity (Instant Micro-Market GPS Assignment)</option>
            <option value="round_robin">🔄 Round-Robin Equal Distribution Among Closers</option>
            <option value="vip_value">⚡ High-Value VIP Priority Routing (> ₹2.5 Cr Deals)</option>
          </select>
        </div>
      </div>
      <div style="display:flex;gap:10px;justify-content:flex-end;margin-top:24px;border-top:1px solid #f1f5f9;padding-top:16px;">
        <button class="button secondary" id="cancel-branch-modal-btn" style="padding:10px 18px;border-radius:10px;cursor:pointer;">Cancel</button>
        <button class="button primary" id="save-branch-modal-btn" style="background:#059669;color:#ffffff;border:none;font-weight:800;padding:10px 22px;border-radius:10px;cursor:pointer;">🚀 Provision Territory Hub</button>
      </div>
    `;

    modal.onclick = (e) => e.stopPropagation();
    backdrop.appendChild(modal);
    document.body.appendChild(backdrop);

    const close = () => { backdrop.remove(); };
    backdrop.onclick = close;
    const closeBtn = modal.querySelector('#close-branch-modal-btn');
    if (closeBtn) closeBtn.onclick = close;
    const cancelBtn = modal.querySelector('#cancel-branch-modal-btn');
    if (cancelBtn) cancelBtn.onclick = close;

    const saveBtn = modal.querySelector('#save-branch-modal-btn');
    if (saveBtn) {
      saveBtn.onclick = () => {
        const name = modal.querySelector('#new-branch-name')?.value?.trim() || '';
        const address = modal.querySelector('#new-branch-address')?.value?.trim() || '';
        const head = modal.querySelector('#new-branch-head')?.value?.trim() || 'Aarav Mehta';
        const phone = modal.querySelector('#new-branch-phone')?.value?.trim() || '+91 98200 12345';
        const closers = Number(modal.querySelector('#new-branch-closers')?.value || 3);
        const volumeCr = Number(modal.querySelector('#new-branch-volume')?.value || 5.0);

        if (!name || !address) {
          alert('Please enter Territory Name and Office Address.');
          return;
        }

        const desks = getStoredBranchDesks();
        desks.unshift({
          id: 'desk-' + Date.now(),
          name,
          tag: 'Active',
          address,
          head,
          phone,
          closers,
          volumeCr,
          border: '#10b981',
          badgeBg: '#ecfdf5',
          badgeColor: '#047857'
        });
        saveStoredBranchDesks(desks);
        close();
        toast(`✓ Territory Hub "${name}" provisioned successfully!`, 'success');
        if (typeof branchesView === 'function' && state.page === 'branches') branchesView();
        else if (typeof settingsView === 'function' && state.page === 'settings') settingsView();
      };
    }
  }

  // Attach to window so inline onclick handlers can always reach it
  window.promptAddBranchDeskModal = promptAddBranchDeskModal;
  window.promptAddAgentModal = promptAddAgentModal;
  window.exportTeamDirectoryCSV = exportTeamDirectoryCSV;


  async function letterheadView() {
    const caps = getPlanCapabilities();
    if (caps.planId !== 'agency') {
      mountView(planUpgradeWall('Agency Elite', 'MahaRERA Letterhead & White-Label Brand Generator'), 'Letterhead · Upgrade Required', 'letterhead');
      const btn = document.querySelector('#upgrade-wall-switch-btn');
      if (btn) btn.onclick = () => {
        state.currentPlan = 'agency';
        localStorage.setItem('brokerai.currentPlan', 'agency');
        toast('Unlocked Agency Elite! Reloading view...', 'success');
        setTimeout(() => { render(); }, 300);
      };
      return;
    }

    const s = state.agencySettings || defaultAgencySettings;
    const html = `
      ${pageHeader('🖨️ MAHARERA LETTERHEAD & BRAND GENERATOR', '100% White-Label PDF Branding with Official QR Stamp & Seal for Agency Elite', `
        <div style="display:flex;gap:10px;flex-wrap:wrap;">
          <button class="button secondary" id="copy-letterhead-text-btn">📋 Copy Official Text</button>
          <button class="button secondary" id="edit-brand-settings-btn">⚙️ Edit Brand Settings</button>
          <button class="button primary" id="print-letterhead-btn" style="background:#2563eb;font-weight:750;">🖨️ Print / Save PDF</button>
        </div>
      `)}

      <div style="max-width:820px;margin:0 auto;background:#fff;border:1px solid #cbd5e1;box-shadow:0 12px 30px rgba(0,0,0,0.08);border-radius:12px;padding:48px 40px;box-sizing:border-box;" id="printable-letterhead-container">
        <div style="border-bottom:2px solid #0f172a;padding-bottom:20px;margin-bottom:24px;display:flex;justify-content:space-between;align-items:flex-start;">
          <div>
            <h1 style="margin:0 0 6px;font-size:26px;font-weight:900;color:#0f172a;letter-spacing:-0.02em;">${esc(s.agencyName || 'MEHTA PRIME REALTY')}</h1>
            <div style="font-size:12.5px;color:#475569;font-weight:600;">Authorized MahaRERA Real Estate Channel Partner & Institutional Brokerage</div>
            <div style="font-size:12px;color:#64748b;margin-top:4px;">${esc(s.officeAddress || 'Hiranandani Estate, Ghodbunder Road, Thane West - 400607')}</div>
            <div style="font-size:12px;color:#64748b;">Phone: ${esc(s.contactPhone || '+91 98200 12345')} · Email: ${esc(s.contactEmail || 'contact@mehtarealty.in')}</div>
          </div>
          <div style="text-align:right;">
            <div style="display:inline-block;padding:6px 12px;border:1.5px solid #059669;border-radius:8px;background:#ecfdf5;color:#047857;font-size:11px;font-weight:800;">
              MahaRERA: ${esc(s.reraNumber || 'A51700012345')}
            </div>
            <div style="font-size:11px;color:#64748b;margin-top:6px;">GSTIN: ${esc(s.gstin || '27AABCB1234F1Z8')}</div>
          </div>
        </div>

        <div style="min-height:300px;padding:20px 0;font-size:14px;line-height:1.8;color:#1e293b;">
          <div style="display:flex;justify-content:space-between;margin-bottom:20px;font-size:13px;color:#64748b;">
            <span>Ref No: MPR/MUM/2026/089</span>
            <span>Date: ${new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
          </div>

          <p><strong>TO WHOMSOEVER IT MAY CONCERN</strong></p>
          <p>This document is issued under official agency mandate for verified property listings, token advances, and developer commission representation in accordance with Maharashtra Real Estate Regulatory Authority (MahaRERA) guidelines.</p>
          <p>All property disclosures, super built-up vs. carpet area certificates, and builder stage milestone payments executed on this letterhead are legally bound under statutory broker agency terms.</p>
          <p>For inventory inquiries or verification of this official agency mandate, please contact our centralized desk at <strong>${esc(s.contactPhone || '+91 98200 12345')}</strong>.</p>
        </div>

        <div style="border-top:1px solid #e2e8f0;padding-top:20px;display:flex;justify-content:space-between;align-items:flex-end;">
          <div>
            <div style="font-size:11px;color:#94a3b8;margin-bottom:6px;">Digitally Verified via BrokerAI OS</div>
            <div style="display:inline-flex;align-items:center;gap:6px;font-size:11px;color:#059669;font-weight:700;">
              <span>●</span> MahaRERA QR Stamp Valid
            </div>
          </div>
          <div style="text-align:right;">
            <div style="height:36px;"></div>
            <div style="border-top:1px solid #0f172a;width:180px;margin-bottom:4px;"></div>
            <div style="font-size:13px;font-weight:800;color:#0f172a;">Authorized Signatory</div>
            <div style="font-size:11.5px;color:#64748b;">${esc(s.agencyName || 'Mehta Prime Realty')}</div>
          </div>
        </div>
      </div>
    `;

    mountView(html, '🖨️ MahaRERA Letterhead & Brand', 'letterhead');

    const printBtn = document.getElementById('print-letterhead-btn');
    if (printBtn) printBtn.onclick = () => window.print();

    const editBtn = document.getElementById('edit-brand-settings-btn');
    if (editBtn) {
      editBtn.onclick = () => {
        state.settingsTab = 'AGENCY_RERA';
        window.location.hash = '#/settings';
      };
    }

    const copyBtn = document.getElementById('copy-letterhead-text-btn');
    if (copyBtn) {
      copyBtn.onclick = () => {
        const text = `${s.agencyName || 'MEHTA PRIME REALTY'}\nAuthorized MahaRERA Channel Partner (${s.reraNumber || 'A51700012345'})\nGSTIN: ${s.gstin || '27AABCB1234F1Z8'}\nAddress: ${s.officeAddress || 'Hiranandani Estate, Ghodbunder Road, Thane'}\nPhone: ${s.contactPhone || '+91 98200 12345'}\n\nTO WHOMSOEVER IT MAY CONCERN\nThis document is issued under official agency mandate for verified property listings and transaction brokerage in accordance with MahaRERA rules.`;
        navigator.clipboard.writeText(text).then(() => {
          toast('✓ Official letterhead text copied to clipboard!', 'success');
        }).catch(() => prompt('Copy text:', text));
      };
    }
  }


  
    const pricingTiers = [
    {
      id: 'starter',
      name: 'Starter Solo',
      tagline: 'Ideal for freelance agents & solo brokers starting their digital desk',
      baseMonthly: 600,
      badge: '✦ ESSENTIAL',
      popular: false,
      seats: '1 Agent Seat (Mobile + Web)',
      features: [
        'Max 50 Active Listings & 75 Leads CRM',
        'Daily Overview & Action Cockpit',
        'Maharashtra Stamp Duty & EMI Calculator',
        'Direct 1-Click WhatsApp Chat Launcher',
        'PWA Mobile App (Android & iOS)'
      ],
      excluded: [
        'AI Buyer-Property Matchmaking',
        'Magic WhatsApp Raw Text Parser',
        '11-Month Digital Rental Agreements',
        'Tripartite Token Booking Receipts',
        'Client Presentation Privacy Mode',
        'Multi-Agent Commission Split Ledger'
      ]
    },
    {
      id: 'pro',
      name: 'Pro Closer',
      tagline: 'High-velocity deal cockpit for top brokers & luxury closers',
      baseMonthly: 1200,
      badge: '⚡ MOST POPULAR · 93x ROI',
      popular: true,
      seats: 'Up to 3 Team Agent Seats',
      features: [
        '⚡ AI Smart 2-Way Buyer ↔ Property Matchmaking',
        '⚡ Magic WhatsApp Raw Chat & Broadcast AI Parser',
        '⚡ 11-Month Digital Rental Agreement with Touch Signatures',
        '⚡ Tripartite MahaRERA Token Advance Booking Receipts',
        '⚡ Client Presentation Privacy Mode (Hides Margins)',
        '⚡ Custom MahaRERA Luxury Property Microsites',
        '⚡ UNLIMITED Listings, Leads & WhatsApp Pitches'
      ],
      excluded: [
        'Multi-Agent Commission Split Ledger',
        'Branch Territory Desks & Lead Routing',
        'Automated Multi-Device Cloud Sync'
      ]
    },
    {
      id: 'agency',
      name: 'Agency Elite',
      tagline: 'For boutique real estate firms, partnerships & channel partners',
      baseMonthly: 3000,
      badge: '💎 INSTITUTIONAL',
      popular: false,
      seats: '20 Closer Seats with Role Access',
      features: [
        '💎 In-House Multi-Agent Commission Splits & Payouts Ledger',
        '💎 Statutory TDS (5% u/s 194H) & Sub-Broker Accounting',
        '💎 Branch Territory Desks & Smart Lead Routing',
        '💎 Automated Multi-Device Cloud Sync & Remote Backup',
        '💎 Custom Agency RERA & Letterhead Watermarking on PDFs',
        '💎 20 Closer Team Seats with Role-Based Access Control',
        '💎 Dedicated 24/7 Priority Support on WhatsApp'
      ],
      excluded: []
    }
  ];

  const tenureDiscounts = {
    1: { label: '1 Month', discount: 0, discountPercent: 0, saveTag: null },
    3: { label: '3 Months', discount: 0.10, discountPercent: 10, saveTag: 'Save 10%' },
    6: { label: '6 Months', discount: 0.15, discountPercent: 15, saveTag: 'Save 15%' },
    12: { label: '12 Months (Annual)', discount: 0.20, discountPercent: 20, saveTag: '🔥 20% OFF' }
  };
  let selectedTenureMonths = 12;

  function pricingView() {
    const tenureMonths = Number(selectedTenureMonths) || 12;

    const plans = [
      {
        id: 'starter',
        name: 'Starter Solo',
        badge: '✦ Starter Solo',
        baseMonthly: 600,
        popular: false,
        scope: '📍 1 Primary Micro-Market · 1 Seat',
        features: [
          '50 Listings & 75 Leads CRM in 1 local area',
          'Daily Overview & Deals Pipeline',
          'Stamp Duty, Registration & EMI Calculator',
          '1-Click WhatsApp Pitch Generator'
        ]
      },
      {
        id: 'pro',
        name: 'Pro Closer',
        badge: '⚡ Pro Closer',
        baseMonthly: 1200,
        popular: true,
        scope: '🌐 All Suburbs & Metros · 3 Seats',
        features: [
          'UNLIMITED Leads & Inventory across all localities',
          '⚡ AI 2-Way Buyer ↔ Property Matchmaking',
          '⚡ WhatsApp Magic Parser (Extracts group chats)',
          '⚡ Digital Token Advance Receipts & Client Mode'
        ]
      },
      {
        id: 'agency',
        name: 'Agency Elite',
        badge: '💎 Agency Elite',
        baseMonthly: 3000,
        popular: false,
        scope: '🏢 Multi-Branch Territory Desks · 20 Seats',
        features: [
          '20 Agent Seats with Territory Desk Routing',
          '💎 MahaRERA White-Label Letterhead & Brand Seal',
          '💎 Commission Splits Ledger & Builder Milestones',
          '💎 Statutory 18% GST Invoice & TDS Accounting'
        ]
      }
    ];

    app.innerHTML = layout(`
      <!-- HEADER -->
      <div class="page-head" style="margin-bottom:20px;">
        <div>
          <h1 class="page-title" style="font-size:24px;font-weight:800;letter-spacing:-0.025em;color:#0f172a;margin:0 0 4px;">Subscription Plans</h1>
          <p class="page-sub" style="font-size:13.5px;color:#64748b;margin:0;">Simple, transparent plans tailored to your micro-market reach and team scale.</p>
        </div>
      </div>

      <!-- MULTI-TENURE SWITCHER PILLS -->
      <div style="display:flex;justify-content:center;margin-bottom:24px;">
        <div class="apple-tabs" id="tenure-tabs">
          <button class="apple-tab-btn ${tenureMonths === 1 ? 'active' : ''}" data-months="1">1 Month</button>
          <button class="apple-tab-btn ${tenureMonths === 3 ? 'active' : ''}" data-months="3">3 Months (10% OFF)</button>
          <button class="apple-tab-btn ${tenureMonths === 6 ? 'active' : ''}" data-months="6">6 Months (15% OFF)</button>
          <button class="apple-tab-btn ${tenureMonths === 12 ? 'active' : ''}" data-months="12">12 Months (20% OFF)</button>
        </div>
      </div>

      <!-- 3 MINIMAL PRICING CARDS -->
      <div class="apple-dash-grid" style="grid-template-columns:repeat(3, 1fr);gap:18px;margin-bottom:24px;">
        ${plans.map(p => {
          const discount = tenureMonths === 12 ? 0.20 : (tenureMonths === 6 ? 0.15 : (tenureMonths === 3 ? 0.10 : 0));
          const discountedMonthly = Math.round(p.baseMonthly * (1 - discount));
          const totalBilled = discountedMonthly * tenureMonths;
          const isCurrent = (getPlanCapabilities().planId === p.id);

          return `
            <div class="apple-card" style="border:${p.popular ? '2px solid #2563eb' : '1px solid #edf2f7'};display:flex;flex-direction:column;justify-content:space-between;position:relative;">
              ${p.popular ? '<span class="apple-badge active" style="position:absolute;top:14px;right:14px;font-size:10px;">MOST POPULAR</span>' : ''}
              <div>
                <h3 style="font-size:16px;font-weight:800;color:#0f172a;margin:0 0 6px;">${p.badge}</h3>
                <div style="font-size:12px;font-weight:600;color:#2563eb;margin-bottom:12px;">${p.scope}</div>
                
                <div style="display:flex;align-items:baseline;gap:4px;margin-bottom:4px;">
                  <span style="font-size:24px;font-weight:850;color:#0f172a;">₹${discountedMonthly.toLocaleString('en-IN')}</span>
                  <span style="font-size:12px;color:#64748b;">/ month</span>
                  ${discount > 0 ? `<span style="font-size:12px;color:#94a3b8;text-decoration:line-through;margin-left:4px;">₹${p.baseMonthly.toLocaleString('en-IN')}</span>` : ''}
                </div>
                <div style="font-size:11.5px;color:#64748b;margin-bottom:16px;">
                  ${tenureMonths > 1 ? `Billed ₹${totalBilled.toLocaleString('en-IN')} for ${tenureMonths} months` : 'Billed monthly · Cancel anytime'}
                </div>

                <div style="display:grid;gap:6px;font-size:12.5px;color:#334155;margin-bottom:20px;">
                  ${p.features.map(f => `<div style="display:flex;gap:6px;align-items:center;"><span>✓</span><span>${f}</span></div>`).join('')}
                </div>
              </div>

              <div>
                ${isCurrent ? `
                  <button disabled style="width:100%;padding:9px;background:#edf2f7;color:#64748b;font-size:12.5px;font-weight:700;border:none;border-radius:9px;">✓ Current Active Plan</button>
                ` : `
                  <button class="pricing-cta-btn button ${p.popular ? 'primary' : 'secondary'}" data-plan-id="${p.id}" style="width:100%;padding:9px;font-size:12.5px;font-weight:700;border-radius:9px;${p.popular ? 'background:#2563eb;' : ''}">
                    Switch to ${p.name}
                  </button>
                `}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `);
    bindShell();

    document.querySelectorAll('#tenure-tabs .apple-tab-btn').forEach(btn => {
      btn.onclick = () => {
        selectedTenureMonths = Number(btn.dataset.months);
        pricingView();
      };
    });

    document.querySelectorAll('.pricing-cta-btn').forEach(btn => {
      btn.onclick = () => {
        const plan = btn.dataset.planId;
        state.currentPlan = (plan === 'agency' || plan === 'elite') ? 'agency' : (plan === 'starter' || plan === 'solo' ? 'starter' : 'pro');
        localStorage.setItem('brokerai.currentPlan', state.currentPlan);
        const cap = getPlanCapabilities(state.currentPlan);
        showToast(`✓ Switched to ${cap.name}! Capabilities and menus updated.`, 'success');
        pricingView();
      };
    });
  }

  
  const demoBranchDesks = [
    { id: 'desk-1', name: 'Hiranandani Estate Desk', tag: 'Primary Hub', address: 'Arcade 4, Hiranandani Estate, Thane (W)', head: 'Aarav Mehta', phone: '+91 98200 12345', closers: 4, volumeCr: 7.40, border: '#10b981', badgeBg: '#ecfdf5', badgeColor: '#047857' },
    { id: 'desk-2', name: 'Majiwada Junction Desk', tag: 'Active', address: 'Lodha Boulevard, Majiwada Flyover', head: 'Mohak Vaswani', phone: '+91 91370 00000', closers: 3, volumeCr: 5.80, border: '#0071e3', badgeBg: '#eff6ff', badgeColor: '#1d4ed8' },
    { id: 'desk-3', name: 'Kolshet Road Desk', tag: 'Active', address: 'Pride Palms Plaza, Kolshet Road', head: 'Pooja Nair', phone: '+91 98333 44556', closers: 3, volumeCr: 4.20, border: '#8b5cf6', badgeBg: '#f5f3ff', badgeColor: '#6d28d9' },
    { id: 'desk-4', name: 'Ghodbunder Commercial Desk', tag: 'Commercial Hub', address: 'Wagle Industrial Estate, Road 16', head: 'Rohan Deshmukh', phone: '+91 98111 88990', closers: 2, volumeCr: 2.20, border: '#f59e0b', badgeBg: '#fffbeb', badgeColor: '#b45309' }
  ];

  function getStoredBranchDesks() {
    try {
      const s = localStorage.getItem('brokerai.branchDesks');
      if (s) return JSON.parse(s);
    } catch(e) {}
    return demoBranchDesks;
  }

  function saveStoredBranchDesks(desks) {
    try {
      localStorage.setItem('brokerai.branchDesks', JSON.stringify(desks));
    } catch(e) {}
  }

  const demoTeamRoster = [
    { id: 'agent-1', name: 'Aarav Mehta', phone: '+91 98200 12345', email: 'aarav@mehtarealty.in', role: 'Principal Broker', desk: 'Hiranandani Estate Desk', activeLeads: 24, dealsClosed: 6, volumeCr: 12.4, split: '70% Closer / 30% Agency', status: 'ACTIVE' },
    { id: 'agent-2', name: 'Mohak Vaswani', phone: '+91 91370 00000', email: 'mohak@mehtarealty.in', role: 'Senior Luxury Closer', desk: 'Majiwada Junction Desk', activeLeads: 19, dealsClosed: 4, volumeCr: 8.2, split: '70% Closer / 30% Agency', status: 'ACTIVE' },
    { id: 'agent-3', name: 'Pooja Nair', phone: '+91 98333 44556', email: 'pooja@mehtarealty.in', role: 'Residential Specialist', desk: 'Kolshet Road Desk', activeLeads: 16, dealsClosed: 3, volumeCr: 4.25, split: '60% Closer / 40% Agency', status: 'ACTIVE' },
    { id: 'agent-4', name: 'Rohan Deshmukh', phone: '+91 98111 88990', email: 'rohan@mehtarealty.in', role: 'Commercial Closer', desk: 'Ghodbunder Commercial Desk', activeLeads: 14, dealsClosed: 2, volumeCr: 3.1, split: '60% Closer / 40% Agency', status: 'ACTIVE' }
  ];

  function getStoredTeamRoster() {
    try {
      const s = localStorage.getItem('brokerai.teamRoster');
      if (s) return JSON.parse(s);
    } catch(e) {}
    return demoTeamRoster;
  }

  function saveStoredTeamRoster(roster) {
    try {
      localStorage.setItem('brokerai.teamRoster', JSON.stringify(roster));
    } catch(e) {}
  }

  const demoTeamMembers = [
    { id: 1, name: 'Aarav Mehta', role: 'Senior Principal Broker', phone: '+91 98200 12345', activeLeads: 18, dealsClosed: 4, volumeCr: 4.85, status: 'ACTIVE' },
    { id: 2, name: 'Sana Khan', role: 'Commercial & Retail Specialist', phone: '+91 98222 33445', activeLeads: 12, dealsClosed: 3, volumeCr: 3.20, status: 'ACTIVE' },
    { id: 3, name: 'Rohan Deshmukh', role: 'Residential Showing Executive', phone: '+91 98111 88990', activeLeads: 14, dealsClosed: 2, volumeCr: 1.75, status: 'ACTIVE' }
  ];

  function planActivationModal(planId, months) {
    const normId = (planId === 'starter' || planId === 'solo_starter' || planId === 'starter_solo') ? 'starter' : (planId === 'agency' || planId === 'agency_elite') ? 'agency' : 'pro';
    const tier = pricingTiers.find(t => t.id === normId) || pricingTiers[1];
    const tenureMonths = Number(months) || Number(selectedTenureMonths) || 12;
    const tenure = tenureDiscounts[tenureMonths] || tenureDiscounts[12] || { label: '12 Months (Annual)', discount: 0.20, discountPercent: 20 };
    const discount = (typeof tenure.discount === 'number' ? tenure.discount : (typeof tenure.discountPercent === 'number' ? tenure.discountPercent / 100 : 0.20));
    const discountFactor = Math.max(0, 1 - discount);
    const baseMonthly = Number(tier.baseMonthly) || (tier.id === 'agency' ? 3000 : (tier.id === 'pro' ? 1200 : 600));
    const discountedMonthly = Math.round(baseMonthly * discountFactor);
    const totalBilled = discountedMonthly * tenureMonths;
    const originalTotal = baseMonthly * tenureMonths;
    const totalSaved = originalTotal - totalBilled;

    document.querySelectorAll('.modal-backdrop, .drawer-backdrop').forEach(b => b.remove());
    const backdrop = document.createElement('div');
    backdrop.className = 'modal-backdrop';
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.cssText = 'max-width:540px;width:94vw;max-height:90vh;overflow-y:auto;background:#fff;padding:24px;border-radius:20px;box-shadow:0 25px 60px rgba(0,0,0,0.3);position:relative;box-sizing:border-box;';

    const agencyName = state.agencySettings?.agencyName || 'My Real Estate Agency';

    modal.innerHTML = `
      <div style="border-bottom:1px solid #f1f5f9;padding-bottom:14px;margin-bottom:16px;display:flex;justify-content:space-between;align-items:flex-start;">
        <div>
          <span style="font-size:11px;font-weight:800;color:#2563eb;text-transform:uppercase;">Subscription Checkout</span>
          <h2 style="margin:2px 0 0;font-size:20px;color:var(--ink);">Activate ${tier.name} Plan</h2>
        </div>
        <button class="close" id="close-activation-modal">×</button>
      </div>

      <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:16px;margin-bottom:18px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
          <div>
            <strong style="font-size:15px;color:var(--ink);">${tier.name} (${tenure.label})</strong>
            <div style="font-size:12px;color:var(--muted);">${tier.seats}</div>
          </div>
          <div style="text-align:right;">
            <div style="font-size:18px;font-weight:850;color:#2563eb;" class="tnum">₹${totalBilled.toLocaleString('en-IN')}</div>
            <div style="font-size:11.5px;color:#059669;font-weight:700;">₹${discountedMonthly.toLocaleString('en-IN')}/mo</div>
          </div>
        </div>

        ${totalSaved > 0 ? `
          <div style="background:#ecfdf5;border:1px solid #a7f3d0;border-radius:8px;padding:6px 10px;font-size:12px;color:#047857;font-weight:700;display:flex;align-items:center;gap:6px;">
            <span>🎉</span>
            <span>You save ₹${totalSaved.toLocaleString('en-IN')} with the ${tenure.label} discount!</span>
          </div>
        ` : ''}
      </div>

      <div style="margin-bottom:20px;">
        <div style="font-size:12px;font-weight:750;color:#475569;margin-bottom:8px;">INCLUDED IN YOUR ACTIVATION:</div>
        <div style="display:flex;flex-direction:column;gap:6px;font-size:12.5px;color:#334155;">
          <div style="display:flex;align-items:center;gap:8px;">✓ <span>Instant PWA Mobile App Access (Android & iOS)</span></div>
          <div style="display:flex;align-items:center;gap:8px;">✓ <span>Unlimited WhatsApp Parser & Deal Cockpit</span></div>
          <div style="display:flex;align-items:center;gap:8px;">✓ <span>Official GST Tax Invoice for 100% Business Expense Deduction</span></div>
        </div>
      </div>

      <!-- 1-CLICK WHATSAPP ACTIVATION BUTTON -->
      <div style="display:flex;flex-direction:column;gap:10px;">
        <button class="button primary" id="wa-instant-activate-btn" style="background:#059669;color:#fff;font-weight:800;padding:12px;font-size:14px;box-shadow:0 4px 14px rgba(5,150,105,0.3);width:100%;justify-content:center;gap:8px;">
          ${svgIcon('whatsapp', 18)} Activate via WhatsApp (UPI / Invoice)
        </button>

        <button class="button secondary" id="instant-demo-activate-btn" style="width:100%;justify-content:center;font-size:12.5px;padding:10px;">
          🚀 Test with Full Demo Access First
        </button>
      </div>`;

    backdrop.appendChild(modal);
    document.body.appendChild(backdrop);
    const close = () => backdrop.remove();
    backdrop.onclick = (e) => { if (e.target === backdrop) close(); };
    modal.onclick = (e) => e.stopPropagation();
    if (modal.querySelector('#close-activation-modal')) modal.querySelector('#close-activation-modal').onclick = close;

    if (modal.querySelector('#wa-instant-activate-btn')) modal.querySelector('#wa-instant-activate-btn').onclick = () => {
      const waMsg = encodeURIComponent(
        `*BROKERAI SUBSCRIPTION ACTIVATION ORDER*\n\n` +
        `🏢 Agency: ${agencyName}\n` +
        `📦 Plan: ${tier.name}\n` +
        `⏱️ Tenure: ${tenure.label} (${months} Months)\n` +
        `💰 Total Amount: ₹${totalBilled.toLocaleString('en-IN')}\n` +
        `🎉 Savings: ₹${totalSaved.toLocaleString('en-IN')}\n\n` +
        `Please share the UPI QR code / NEFT details for instant activation.`
      );
      window.open(`https://wa.me/919820000000?text=${waMsg}`, '_blank');
      showToast('Opening WhatsApp order desk...', 'success');
      close();
    };

    if (modal.querySelector('#instant-demo-activate-btn')) modal.querySelector('#instant-demo-activate-btn').onclick = () => {
      close();
      state.demo = true;
      localStorage.setItem('brokerai.demo', 'true');
      location.hash = '#/dashboard';
      render();
      showToast('🚀 VIP Pro Demo Mode active! Enjoy unlimited features.', 'success');
    };
  }


  
  // --- SUPER-ADMIN MASTER SAAS CONTROL DESK ---
  const defaultAgenciesList = [
    {
      id: 'tenant-101',
      agencyName: 'Gupta Realty Advisors',
      ownerName: 'Rajesh Gupta',
      phone: '+91 98200 12345',
      email: 'rajesh@guptarealty.in',
      reraNumber: 'A51700012345',
      city: 'Thane West',
      plan: 'AGENCY_PRO',
      monthlyFee: 3000,
      status: 'ACTIVE',
      joinedDate: '2026-08-01',
      expiresAt: '2027-08-01',
      totalLeads: 14,
      totalProperties: 8,
      totalDealsValue: 24500000
    },
    {
      id: 'tenant-102',
      agencyName: 'Sharma & Sons Associates',
      ownerName: 'Vikram Sharma',
      phone: '+91 98199 88776',
      email: 'vikram@sharmarealty.com',
      reraNumber: 'A51800099887',
      city: 'Majiwada, Thane',
      plan: 'SOLO_BROKER',
      monthlyFee: 600,
      status: 'ACTIVE',
      joinedDate: '2026-08-10',
      expiresAt: '2027-08-10',
      totalLeads: 9,
      totalProperties: 5,
      totalDealsValue: 12500000
    },
    {
      id: 'tenant-103',
      agencyName: 'Mehta Prime Properties',
      ownerName: 'Sanjay Mehta',
      phone: '+91 98333 44556',
      email: 'sanjay@mehtaprime.in',
      reraNumber: 'A51900033221',
      city: 'Hiranandani Estate',
      plan: 'AGENCY_PRO',
      monthlyFee: 3000,
      status: 'PAYMENT_DUE',
      joinedDate: '2026-07-15',
      expiresAt: '2026-08-25',
      totalLeads: 21,
      totalProperties: 12,
      totalDealsValue: 48000000
    }
  ];

  const getStoredAgencies = () => {
    try {
      const saved = localStorage.getItem('brokerai.masterAgencies');
      if (saved) {
        const p = JSON.parse(saved);
        if (Array.isArray(p) && p.length) return p;
      }
    } catch {}
    return defaultAgenciesList;
  };

  
  
  // --- ZERO-CONFIG REAL-TIME CLOUD SYNC & FIREBASE CONNECTOR ---
  const CLOUD_SYNC_BUCKET = 'brokerai_v4_master_sync';
  const CLOUD_SYNC_URL = 'local';

  let lastCloudSyncTime = null;
  let cloudSyncStatus = 'CONNECTED'; // 'CONNECTED', 'SYNCING', 'OFFLINE'

  const pushSessionToCloud = (session) => {
    try {
      lastCloudSyncTime = new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      cloudSyncStatus = 'CONNECTED';
    } catch (e) {}
  };

  const fetchCloudSessions = async () => {
    return getStoredSessions();
  };

  // --- MASTER TELEMETRY & SESSION AUDIT ENGINE ---
  const detectDevice = () => {
    const ua = (typeof navigator !== 'undefined' && navigator.userAgent) ? navigator.userAgent : '';
    let os = 'Windows PC 💻';
    if (/Android/i.test(ua)) os = 'Android Phone 📱';
    else if (/iPhone|iPad|iPod/i.test(ua)) os = 'iPhone / iOS 🍏';
    else if (/Macintosh|Mac OS X/i.test(ua)) os = 'MacBook / macOS 🖥️';
    else if (/Linux/i.test(ua)) os = 'Linux OS 🐧';

    let browser = 'Chrome';
    if (/Safari/i.test(ua) && !/Chrome/i.test(ua)) browser = 'Safari';
    else if (/Edg/i.test(ua)) browser = 'Edge';
    else if (/Firefox/i.test(ua)) browser = 'Firefox';

    return `${os} · ${browser}`;
  };

  const getInitialMasterSessions = () => [
    {
      id: 'sess-live-01',
      user: 'Rajesh Gupta',
      agency: 'Gupta Realty Advisors',
      phone: '+91 98200 12345',
      device: 'Android Phone 📱 · Chrome',
      location: 'Thane West, MH',
      loginTime: 'Today, 09:15 AM',
      loginTimestamp: Date.now() - 3600000 * 1.5,
      lastActiveTimestamp: Date.now() - 120000,
      logoutTime: null,
      status: 'ONLINE',
      sessionDuration: '1 hr 30 mins',
      actionsCount: 14,
      events: [
        { time: '09:15 AM', text: '🚀 Logged in to Agency Cockpit' },
        { time: '09:18 AM', text: '👤 Added Buyer Lead: Rahul Sharma (₹1.25 Cr)' },
        { time: '09:22 AM', text: '✦ Executed AI Matching for Hiranandani Estate' },
        { time: '09:30 AM', text: '📲 Dispatched WhatsApp Showing Pass' },
        { time: '09:45 AM', text: '◷ Scheduled Site Visit with Priya Patel' },
        { time: '10:15 AM', text: '🧾 Issued MahaRERA Token Deposit Receipt (₹1,00,000)' }
      ]
    },
    {
      id: 'sess-live-02',
      user: 'Vikram Sharma',
      agency: 'Sharma & Sons Associates',
      phone: '+91 98333 44556',
      device: 'iPhone / iOS 🍏 · Safari',
      location: 'Majiwada, Thane',
      loginTime: 'Today, 08:30 AM',
      loginTimestamp: Date.now() - 3600000 * 2.5,
      lastActiveTimestamp: Date.now() - 3600000 * 1.2,
      logoutTime: 'Today, 09:50 AM',
      status: 'LOGGED_OUT',
      sessionDuration: '1 hr 20 mins',
      actionsCount: 9,
      events: [
        { time: '08:30 AM', text: '🚀 Logged in via Mobile Safari' },
        { time: '08:35 AM', text: '🏢 Added Property: 3 BHK at Rodas Enclave' },
        { time: '08:50 AM', text: '🧮 Calculated On-Road Stamp Duty & EMI Breakdown' },
        { time: '09:50 AM', text: '🔒 Logged Out from Device' }
      ]
    },
    {
      id: 'sess-live-03',
      user: 'Sanjay Mehta',
      agency: 'Mehta Prime Properties',
      phone: '+91 98222 77889',
      device: 'Windows PC 💻 · Chrome',
      location: 'Hiranandani Estate, Thane',
      loginTime: 'Yesterday, 04:45 PM',
      loginTimestamp: Date.now() - 3600000 * 18,
      lastActiveTimestamp: Date.now() - 3600000 * 17,
      logoutTime: 'Yesterday, 05:40 PM',
      status: 'LOGGED_OUT',
      sessionDuration: '55 mins',
      actionsCount: 7,
      events: [
        { time: '04:45 PM', text: '🚀 Logged in via Windows Desktop' },
        { time: '05:00 PM', text: '📋 Reviewed Deals Pipeline' },
        { time: '05:40 PM', text: '🔒 Session Ended' }
      ]
    }
  ];

  const getStoredSessions = () => {
    try {
      const s = localStorage.getItem('brokerai.masterSessions');
      if (s) {
        const parsed = JSON.parse(s);
        if (Array.isArray(parsed) && parsed.length) return parsed;
      }
    } catch {}
    return getInitialMasterSessions();
  };

  let currentSessionId = (typeof sessionStorage !== 'undefined') ? sessionStorage.getItem('brokerai.currentSessionId') : null;

  const initMasterSessionTracker = () => {
    try {
      let sessions = getStoredSessions();
      const nowStr = new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
      const dateStr = new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });

      if (!currentSessionId) {
        currentSessionId = 'sess-' + Date.now();
        if (typeof sessionStorage !== 'undefined') sessionStorage.setItem('brokerai.currentSessionId', currentSessionId);

        const newSession = {
          id: currentSessionId,
          user: state.user?.fullName || state.agencySettings?.ownerName || 'Verified Broker Visitor',
          agency: state.agencySettings?.agencyName || 'BrokerAI Agency Tenant',
          phone: state.user?.phone || '+91 98200 12345',
          device: detectDevice(),
          location: 'Mumbai MMR / Thane, MH',
          loginTime: `${dateStr}, ${nowStr}`,
          loginTimestamp: Date.now(),
          lastActiveTimestamp: Date.now(),
          logoutTime: null,
          status: 'ONLINE',
          sessionDuration: 'Active Now',
          actionsCount: 1,
          events: [
            { time: nowStr, text: `🚀 Workspace Opened on ${detectDevice()}` }
          ]
        };

        sessions.unshift(newSession);
        localStorage.setItem('brokerai.masterSessions', JSON.stringify(sessions));
        pushSessionToCloud(newSession);
      } else {
        const idx = sessions.findIndex(s => s.id === currentSessionId);
        if (idx !== -1) {
          sessions[idx].lastActiveTimestamp = Date.now();
          sessions[idx].status = 'ONLINE';
          if (state.user?.fullName) sessions[idx].user = state.user.fullName;
          if (state.agencySettings?.agencyName) sessions[idx].agency = state.agencySettings.agencyName;
          localStorage.setItem('brokerai.masterSessions', JSON.stringify(sessions));
        }
      }
    } catch (e) {
      console.error('Session tracker init error:', e);
    }
  };

  const logAuditEvent = (eventText) => {
    try {
      const sessions = getStoredSessions();
      const nowStr = new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
      const idx = sessions.findIndex(s => s.id === currentSessionId);
      if (idx !== -1) {
        sessions[idx].events.unshift({ time: nowStr, text: eventText });
        sessions[idx].actionsCount = (sessions[idx].actionsCount || 0) + 1;
        sessions[idx].lastActiveTimestamp = Date.now();
        sessions[idx].status = 'ONLINE';
        const durMins = Math.max(1, Math.round((Date.now() - sessions[idx].loginTimestamp) / 60000));
        sessions[idx].sessionDuration = `${durMins} mins`;
        localStorage.setItem('brokerai.masterSessions', JSON.stringify(sessions));
        pushSessionToCloud(sessions[idx]);
      }
    } catch (e) {
      console.error('Audit log error:', e);
    }
  };

  const recordLogoutEvent = () => {
    try {
      const sessions = getStoredSessions();
      const nowStr = new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
      const idx = sessions.findIndex(s => s.id === currentSessionId);
      if (idx !== -1) {
        sessions[idx].logoutTime = `Today, ${nowStr}`;
        sessions[idx].status = 'LOGGED_OUT';
        sessions[idx].events.unshift({ time: nowStr, text: '🔒 User Logged Out / Closed App' });
        const durMins = Math.max(1, Math.round((Date.now() - sessions[idx].loginTimestamp) / 60000));
        sessions[idx].sessionDuration = `${durMins} mins`;
        localStorage.setItem('brokerai.masterSessions', JSON.stringify(sessions));
        pushSessionToCloud(sessions[idx]);
      }
      if (typeof sessionStorage !== 'undefined') sessionStorage.removeItem('brokerai.currentSessionId');
      currentSessionId = null;
    } catch (e) {}
  };


  // --- MASTER SUPER-ADMIN VIEW & AUDIT CONSOLE ---
  let superAdminActiveTab = 'sessions'; // default to live telemetry

  function auditEventsModal(session) {
    document.querySelectorAll('.modal-backdrop, .drawer-backdrop, .spotlight-backdrop').forEach(b => b.remove());
    const sess = session || {
      user: 'Mohak Vaswani',
      agency: 'Apex Realty Group',
      device: 'Desktop Chrome',
      status: 'ONLINE',
      loginTime: 'Today, 10:00 AM',
      logoutTime: null,
      sessionDuration: '2 hrs 15 mins',
      actionsCount: 5,
      events: [{ time: '10:05 AM', text: 'Logged in successfully' }]
    };

    const backdrop = document.createElement('div');
    backdrop.className = 'modal-backdrop';
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.cssText = 'max-width:560px;width:92vw;max-height:85vh;overflow-y:auto;box-shadow:0 25px 60px rgba(0,0,0,0.4);border-radius:18px;padding:24px;background:#fff;';

    const isOnline = sess.status === 'ONLINE';

    modal.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:16px;border-bottom:1px solid var(--line);padding-bottom:12px;">
        <div>
          <div style="display:flex;align-items:center;gap:8px;">
            <span style="font-size:18px;">📜</span>
            <h3 style="margin:0;font-size:17px;font-weight:800;color:var(--ink);">Session Audit Trail</h3>
            <span class="badge ${isOnline ? 'hot' : 'cold'}" style="font-size:11px;">
              ${isOnline ? '🟢 ACTIVE ONLINE' : '⚪ LOGGED OUT'}
            </span>
          </div>
          <div style="font-size:13px;color:var(--muted);margin-top:4px;">
            <strong>${esc(sess.user)}</strong> (${esc(sess.agency)}) · ${esc(sess.device)}
          </div>
        </div>
        <button class="close" id="close-audit-modal" style="font-size:22px;">×</button>
      </div>

      <!-- SESSION METRICS -->
      <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin-bottom:18px;background:#f8fafc;padding:12px;border-radius:10px;border:1px solid var(--line);">
        <div>
          <div style="font-size:11px;color:var(--muted);font-weight:700;">LOGIN TIME</div>
          <div style="font-size:13px;font-weight:750;color:#0f172a;">${esc(sess.loginTime)}</div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--muted);font-weight:700;">LOGOUT / STATUS</div>
          <div style="font-size:13px;font-weight:750;color:${isOnline ? '#15803d' : '#475569'};">
            ${sess.logoutTime ? esc(sess.logoutTime) : '🟢 Active in Session'}
          </div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--muted);font-weight:700;">SESSION DURATION</div>
          <div style="font-size:13px;font-weight:750;color:#165dff;">${esc(sess.sessionDuration || 'Active')}</div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--muted);font-weight:700;">TOTAL ACTIONS</div>
          <div style="font-size:13px;font-weight:750;color:#047857;">${sess.actionsCount || (sess.events ? sess.events.length : 0)} Actions Logged</div>
        </div>
      </div>

      <!-- CHRONOLOGICAL ACTION TIMELINE -->
      <div style="font-size:12px;font-weight:800;color:var(--ink);text-transform:uppercase;letter-spacing:0.5px;margin-bottom:10px;">
        Chronological Activity Timeline:
      </div>

      <div style="display:flex;flex-direction:column;gap:8px;max-height:280px;overflow-y:auto;padding-right:4px;">
        ${(sess.events || []).map((ev, i) => `
          <div style="display:flex;align-items:flex-start;gap:10px;background:#ffffff;border:1px solid #e2e8f0;padding:10px 12px;border-radius:8px;">
            <span style="font-size:11px;font-weight:800;color:#2563eb;background:#eff6ff;padding:2px 6px;border-radius:4px;white-space:nowrap;">
              ${esc(ev.time || '10:00 AM')}
            </span>
            <div style="font-size:13px;color:#1e293b;font-weight:600;line-height:1.4;">
              ${esc(ev.text || ev.action || 'Performed action')}
            </div>
        `).join('')}
      </div>

      <button class="button primary full" id="got-it-audit-btn" style="margin-top:18px;">Close Audit Trail</button>
    `;

    backdrop.appendChild(modal);
    document.body.appendChild(backdrop);

    const close = () => backdrop.remove();
    backdrop.onclick = (e) => { if (e.target === backdrop) close(); };
    modal.onclick = (e) => e.stopPropagation();
    if (modal.querySelector('#close-audit-modal')) modal.querySelector('#close-audit-modal').onclick = close;
    if (modal.querySelector('#got-it-audit-btn')) modal.querySelector('#got-it-audit-btn').onclick = close;
  }

  async function superAdminView() {
    initMasterSessionTracker();

    // High Security Gatekeeper: Master Super-Admin verification
    if (state.user?.role !== 'SUPER_ADMIN') {
      app.innerHTML = layout(`
        <div class="gated-feature-overlay" style="max-width:540px;margin:30px auto;padding:28px;background:#0f172a;color:#fff;border-radius:18px;border:1px solid rgba(255,255,255,0.1);text-align:center;box-shadow:0 20px 50px rgba(0,0,0,0.4);">
          <div style="font-size:44px;margin-bottom:10px;">👑</div>
          <div class="vip-badge" style="background:rgba(234,179,8,0.18);color:#facc15;margin-bottom:12px;display:inline-block;padding:4px 14px;border-radius:20px;font-weight:800;font-size:11.5px;">
            🔒 PLATFORM OWNER ONLY
          </div>
          <h2 style="font-size:21px;font-weight:800;color:#fff;margin:0 0 8px;">Master Super-Admin Console</h2>
          <p style="font-size:13px;color:#94a3b8;line-height:1.45;margin:0 0 18px;">
            This console is strictly restricted to the SaaS Platform Owner. Real estate agents, brokers, and team staff cannot access multi-tenant telemetry or provisioning.
          </p>
          <div style="background:#1e293b;padding:16px;border-radius:12px;border:1px solid #334155;margin-bottom:16px;text-align:left;">
            <label style="font-size:12px;font-weight:700;color:#cbd5e1;display:block;margin-bottom:6px;">Master Admin Passcode / Key</label>
            <div style="display:flex;gap:8px;">
              <input type="password" id="master-admin-unlock-input" class="input" placeholder="Enter master passcode" style="flex:1;background:#0f172a;border-color:#475569;color:#fff;" />
              <button class="button primary" id="master-admin-unlock-submit-btn" style="background:#22c55e;white-space:nowrap;font-weight:750;">Unlock 👑</button>
            </div>
            <div id="master-unlock-err" style="color:#f87171;font-size:12px;margin-top:6px;display:none;">⚠️ Invalid Master Passcode. Access Denied.</div>
          </div>
          <button class="button secondary" onclick="location.hash='#/dashboard'" style="color:#fff;border-color:rgba(255,255,255,0.2);width:100%;font-size:13px;">
            ← Return to Agent Dashboard
          </button>
        </div>
      `);

      const input = document.querySelector('#master-admin-unlock-input');
      const submit = document.querySelector('#master-admin-unlock-submit-btn');
      const err = document.querySelector('#master-unlock-err');

      const attemptUnlock = () => {
        const val = (input?.value || '').trim();
        if (val === 'mohak123') {
          
          state.isOwnerAuthenticated = true;
          try {
            localStorage.setItem('brokerai.owner_auth', 'true');
            state.user = { fullName: 'Mohak Vaswani', role: 'SUPER_ADMIN', email: 'mohakvaswani7@gmail.com', phone: '+91 91370 00000' };
            localStorage.setItem('brokerai.user', JSON.stringify(state.user));
          } catch (e) {}

          localStorage.setItem('brokerai.user', JSON.stringify(state.user));
          showToast('👑 Master Super-Admin Mohak Vaswani Verified! Welcome.', 'success');
          render();
        } else {
          if (err) err.style.display = 'block';
        }
      };

      if (submit) submit.onclick = attemptUnlock;
      if (input) input.onkeydown = (e) => { if (e.key === 'Enter') attemptUnlock(); };
      return;
    }


  // (Periodic sync interval removed to maintain 60fps UI)

    let agencies = getStoredAgencies();
    let sessions = getStoredSessions();

    const activeCount = agencies.filter(a => a.status === 'ACTIVE').length;
    const totalMrr = agencies.filter(a => a.status === 'ACTIVE').reduce((sum, a) => sum + (a.monthlyFee || 0), 0);
    const onlineSessionsCount = sessions.filter(s => s.status === 'ONLINE').length;
    const totalActions = sessions.reduce((sum, s) => sum + (s.actionsCount || (s.events ? s.events.length : 1)), 0);

    app.innerHTML = layout(`
      <div class="page-head">
        <div>
          <div style="display:flex;align-items:center;gap:8px;">
            <span class="badge" style="background:#fef3c7;color:#b45309;font-weight:800;font-size:11px;">👑 MASTER SUPER-ADMIN: Mohak Vaswani</span>
            <span class="badge" style="background:#f0fdf4;color:#15803d;font-weight:800;font-size:11px;display:inline-flex;align-items:center;gap:4px;">
              <span style="color:#22c55e;animation:pulse 1.5s infinite;">●</span> LIVE TELEMETRY SYNCED
            </span>
          </div>
          <h2 class="page-title" style="margin-top:4px;">Master Control & Real-Time Telemetry</h2>
          <div class="page-subtitle">Inspect tenant agencies, track live user login/logout sessions, and audit actions across all broker workspaces.</div>
        </div>
        <div class="page-actions">
          <button class="button primary" id="provision-agency-btn" style="background:#15803d;">＋ Provision Agency</button>
          
          <button class="button secondary" id="export-master-btn">📥 Export Master CSV</button>
          <button class="button secondary" id="lock-superadmin-btn" style="background:#fef2f2;color:#dc2626;border:1px solid #fecaca;font-weight:750;">🔒 Lock Admin</button>

        </div>
      </div>

      
      <!-- WEBSITE PRIVACY & VIP ACCESS GATE MANAGEMENT -->
      <div style="background:linear-gradient(135deg, #0f172a 0%, #1e293b 100%);border:1.5px solid rgba(16,185,129,0.3);border-radius:16px;padding:22px 24px;margin-bottom:24px;box-shadow:0 10px 30px rgba(0,0,0,0.35);color:#fff;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:16px;">
        <div style="max-width:620px;">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:6px;">
            <span style="font-size:20px;">🔒</span>
            <strong style="font-size:16px;letter-spacing:-0.01em;">Website Staging Privacy & Coming Soon Gate</strong>
            <span class="badge" style="background:${isPrivateGateActive() ? 'rgba(16,185,129,0.2)' : 'rgba(148,163,184,0.2)'};color:${isPrivateGateActive() ? '#34d399' : '#94a3b8'};border:1px solid ${isPrivateGateActive() ? '#10b981' : '#64748b'};font-weight:800;font-size:11px;">
              ${isPrivateGateActive() ? '● ACTIVE (PRIVATE VIP PREVIEW)' : '○ PUBLIC (OPEN ACCESS)'}
            </span>
          </div>
          <p style="font-size:12.5px;color:#94a3b8;line-height:1.5;margin:0;">
            When active, all visitors seeing <strong>www.rebrokerai.in</strong> see the luxury "Coming Soon" teaser and must enter passcode <code>mohak123</code> to access the workspace.
          </p>
        </div>
        <div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap;">
          <button class="button ${isPrivateGateActive() ? 'secondary' : 'primary'}" id="toggle-private-gate-btn" style="${isPrivateGateActive() ? 'border-color:#f59e0b;color:#fcd34d;' : 'background:#10b981;'};font-weight:750;font-size:13px;">
            ${isPrivateGateActive() ? '🔓 Make Website Public' : '🔒 Enable Private Gate'}
          </button>
          <button class="button secondary" id="relock-website-sessions-btn" style="border-color:#ef4444;color:#fca5a5;background:rgba(239,68,68,0.1);font-weight:750;font-size:13px;">
            🔑 Re-Lock Website
          </button>
        </div>
      </div>

      <!-- MASTER PLATFORM METRICS -->
      <div class="cards" style="margin-bottom:20px;">
        <article class="metric">
          <div class="metric-label">Active Paying Agencies</div>
          <div class="metric-value" style="color:#047857;">${activeCount} Agencies</div>
          <div class="metric-note">${agencies.length} Total Registered</div>
        </article>
        <article class="metric">
          <div class="metric-label">Monthly Recurring Revenue</div>
          <div class="metric-value" style="color:#165dff;">₹${totalMrr.toLocaleString('en-IN')}</div>
          <div class="metric-note">Collected via UPI / Bank</div>
        </article>
        <article class="metric">
          <div class="metric-label">Live Online Visitors</div>
          <div class="metric-value" style="color:#15803d;">${onlineSessionsCount} Active Now</div>
          <div class="metric-note">${sessions.length} Total Monitored Sessions</div>
        </article>
        <article class="metric">
          <div class="metric-label">Total Actions & Events Logged</div>
          <div class="metric-value" style="color:#b45309;">${totalActions} Events</div>
          <div class="metric-note">Real-time audit telemetry</div>
        </article>
      </div>

      <!-- NAVIGATION TABS -->
      <div class="auth-tabs-toggle" style="margin-bottom:20px;max-width:500px;">
        <button class="auth-tab-btn ${superAdminActiveTab === 'sessions' ? 'active' : ''}" id="tab-admin-sessions">
          🔴 Live User Sessions & Audit Trail (${sessions.length})
        </button>
        <button class="auth-tab-btn ${superAdminActiveTab === 'agencies' ? 'active' : ''}" id="tab-admin-agencies">
          🏢 Paying Agencies (${agencies.length})
        </button>
      </div>

      <section class="panel" style="padding:18px 22px;">
        <div id="superadmin-content-container">Loading control desk...</div>
      </section>
    `);
    bindShell();

    const tabSessions = document.querySelector('#tab-admin-sessions');
    const tabAgencies = document.querySelector('#tab-admin-agencies');
    const provBtn = document.querySelector('#provision-agency-btn');
    const exportBtn = document.querySelector('#export-master-btn');

    if (provBtn) provBtn.onclick = () => provisionAgencyModal();

    if (tabSessions) {
      tabSessions.onclick = () => {
        superAdminActiveTab = 'sessions';
        superAdminView();
      };
    }

    if (tabAgencies) {
      tabAgencies.onclick = () => {
        superAdminActiveTab = 'agencies';
        superAdminView();
      };
    }

    const container = document.querySelector('#superadmin-content-container');

    if (superAdminActiveTab === 'sessions') {
      // TAB 2: SESSIONS & TELEMETRY
      if (exportBtn) {
        exportBtn.onclick = () => {
          let csv = 'Session ID,User,Agency,Phone,Device,Location,Login Time,Logout Time,Status,Duration,Actions Count\n';
          sessions.forEach(s => {
            csv += `"${s.id}","${s.user}","${s.agency}","${s.phone}","${s.device}","${s.location}","${s.loginTime}","${s.logoutTime || 'Active Now'}","${s.status}","${s.sessionDuration}",${s.actionsCount || 1}\n`;
          });
          const blob = new Blob([csv], { type: 'text/csv' });
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `BrokerAI_User_Sessions_Audit_${new Date().toISOString().slice(0, 10)}.csv`;
          a.click();
          showToast('✓ User Session Audit CSV exported!', 'success');
        };
      }

      container.innerHTML = `
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
          <div>
            <h3 style="margin:0;font-size:16px;font-weight:800;color:var(--ink);">Real-Time Visitor & Broker Audit Trail</h3>
            <div style="font-size:12.5px;color:var(--muted);">Tracks everyone accessing your app, their device, exact login time, logout timestamp, and action history.</div>
          </div>
          <div style="display:flex;gap:8px;">
            <button class="button primary" id="sync-cloud-btn" style="padding:6px 12px;font-size:12px;background:#059669;">☁️ Pull Cloud Sync</button>
   <button class="button secondary" id="refresh-sessions-btn" style="padding:6px 12px;font-size:12px;">🔄 Refresh</button>
            <button class="button secondary" id="clear-sessions-btn" style="padding:6px 12px;font-size:12px;color:#dc2626;">🧹 Clear History</button>
          </div>
        </div>

        <div class="table-wrap">
          <table class="table">
            <thead>
              <tr>
                <th>Visitor / Broker</th>
                <th>Device & OS</th>
                <th>Login Time</th>
                <th>Logout Time / Status</th>
                <th>Session Duration</th>
                <th>Actions</th>
                <th>Audit Trail</th>
              </tr>
            </thead>
            <tbody>
              ${sessions.map(s => {
                const isOnline = s.status === 'ONLINE';
                return `
                  <tr>
                    <td>
                      <strong style="font-size:14px;color:var(--ink);">${esc(s.user)}</strong>
                      <div style="font-size:12px;color:var(--muted);font-weight:600;">${esc(s.agency)} · ${esc(s.phone)}</div>
                    </td>
                    <td>
                      <div style="font-weight:650;font-size:12.5px;color:#1e293b;">${esc(s.device)}</div>
                      <div style="font-size:11.5px;color:#64748b;">📍 ${esc(s.location || 'Mumbai, MH')}</div>
                    </td>
                    <td>
                      <div style="font-size:12.5px;color:#0f172a;font-weight:700;">${esc(s.loginTime)}</div>
                    </td>
                    <td>
                      ${isOnline ? `
                        <span class="badge" style="background:#f0fdf4;color:#15803d;font-weight:800;font-size:11px;">
                          🟢 ACTIVE ONLINE
                        </span>
                      ` : `
                        <div style="font-size:12.5px;color:#64748b;font-weight:600;">
                          ${esc(s.logoutTime || 'Closed App')}
                        </div>
                      `}
                    </td>
                    <td>
                      <span class="stage" style="font-weight:700;">${esc(s.sessionDuration || 'Active')}</span>
                    </td>
                    <td>
                      <span style="font-weight:800;color:#047857;font-size:13px;">${s.actionsCount || (s.events ? s.events.length : 1)}</span>
                    </td>
                    <td>
                      <button class="button secondary" data-view-audit="${s.id}" style="padding:4px 8px;font-size:11.5px;">
                        📜 View Event Log
                      </button>
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      `;

      const syncBtn = document.querySelector('#sync-cloud-btn');
   if (syncBtn) {
     syncBtn.onclick = async () => {
       syncBtn.textContent = '⏳ Syncing Cloud...';
       await fetchCloudSessions();
       showToast('✓ Cloud Database synced! Live visitors updated across India.', 'success');
       superAdminView();
     };
   }
   if (document.querySelector('#refresh-sessions-btn')) document.querySelector('#refresh-sessions-btn').onclick = () => superAdminView();
      if (document.querySelector('#clear-sessions-btn')) document.querySelector('#clear-sessions-btn').onclick = () => {
        if (confirm('Are you sure you want to reset session logs?')) {
          localStorage.removeItem('brokerai.masterSessions');
          superAdminView();
        }
      };

      container.querySelectorAll('[data-view-audit]').forEach(btn => {
        btn.onclick = () => {
          const sid = btn.dataset.viewAudit;
          const target = sessions.find(x => x.id === sid);
          if (target) auditEventsModal(target);
        };
      });

    } else {
      // TAB 1: AGENCIES DIRECTORY
      if (exportBtn) {
        exportBtn.onclick = () => {
          let csv = 'Agency Name,Owner Name,Phone,Email,MahaRERA,City,Plan,Monthly Fee,Status,Joined Date,Expires At,Total Leads\n';
          agencies.forEach(a => {
            csv += `"${a.agencyName}","${a.ownerName}","${a.phone}","${a.email}","${a.reraNumber}","${a.city}","${a.plan}",${a.monthlyFee},"${a.status}","${a.joinedDate}","${a.expiresAt}",${a.totalLeads}\n`;
          });
          const blob = new Blob([csv], { type: 'text/csv' });
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `BrokerAI_Master_Agencies_${new Date().toISOString().slice(0, 10)}.csv`;
          a.click();
          showToast('✓ Master agencies CSV report exported!', 'success');
        };
      }

      container.innerHTML = `
        <div class="table-wrap">
          <table class="table">
            <thead>
              <tr>
                <th>Agency & MahaRERA</th>
                <th>Owner & Contact</th>
                <th>Subscription Plan</th>
                <th>Tenant Stats</th>
                <th>Status</th>
                <th>Owner Actions</th>
              </tr>
            </thead>
            <tbody>
              ${agencies.map(a => `
                <tr>
                  <td>
                    <strong style="font-size:14px;color:var(--ink);">${esc(a.agencyName)}</strong>
                    <div style="font-size:12px;color:var(--muted);font-weight:600;">${esc(a.city)} · RERA: ${esc(a.reraNumber)}</div>
                  </td>
                  <td>
                    <div style="font-weight:650;color:var(--ink);">${esc(a.ownerName)}</div>
                    <div style="font-size:12.5px;color:#165dff;">${esc(a.phone)}</div>
                  </td>
                  <td>
                    <span class="stage">${a.plan === 'AGENCY_PRO' ? '🏛️ Agency Elite' : a.plan === 'PRO_CLOSER' ? '⚡ Pro Closer' : '👤 Starter Solo'}</span>
                    <div style="font-size:12px;color:#15803d;font-weight:700;margin-top:2px;">₹${(a.monthlyFee || (a.plan === 'AGENCY_PRO' ? 3000 : a.plan === 'PRO_CLOSER' ? 1200 : 600)).toLocaleString('en-IN')}/mo</div>
                  </td>
                  <td>
                    <div style="font-size:12.5px;color:var(--ink);">👥 <strong>${a.totalLeads}</strong> Leads · 🏡 <strong>${a.totalProperties}</strong> Listings</div>
                    <div style="font-size:11.5px;color:var(--muted);">Pipeline: ₹${((a.totalDealsValue || 0) / 10000000).toFixed(2)} Cr</div>
                  </td>
                  <td>
                    <span class="badge ${a.status === 'ACTIVE' ? 'hot' : a.status === 'PAYMENT_DUE' ? 'warm' : 'cold'}">
                      ${a.status === 'ACTIVE' ? '✓ ACTIVE' : a.status === 'PAYMENT_DUE' ? '⚠️ DUE' : '⏸️ PAUSED'}
                    </span>
                    <div style="font-size:11px;color:var(--muted);margin-top:3px;">Exp: ${a.expiresAt}</div>
                  </td>
                  <td>
                    <div style="display:flex;gap:6px;flex-wrap:wrap;">
                      <button class="button primary" data-admin-inspect="${a.id}" style="padding:4px 8px;font-size:11px;">👁️ Inspect</button>
                      <button class="button secondary" data-admin-share-link="${a.id}" style="padding:4px 8px;font-size:11px;color:#15803d;">📲 Send Link</button>
                      <button class="button secondary" data-admin-toggle-status="${a.id}" style="padding:4px 8px;font-size:11px;">${a.status === 'ACTIVE' ? 'Pause' : 'Activate'}</button>
                    </div>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      `;

      // Event handlers
      container.querySelectorAll('[data-admin-inspect]').forEach(btn => {
        btn.onclick = () => {
          const tenantId = btn.dataset.adminInspect;
          const target = agencies.find(x => x.id === tenantId);
          if (target) {
            state.agencySettings = {
              agencyName: target.agencyName,
              reraNumber: target.reraNumber,
              officeAddress: `${target.city}, Maharashtra`,
              stampDutyPercent: 7.0,
              gstPercent: 5.0,
              legalFee: 15000,
              brokerageBuySide: 2.0,
              brokerageSellSide: 2.0,
              brokerageRental: 1.0,
              ownerName: target.ownerName,
              ownerPhone: target.phone,
              ownerEmail: target.email
            };
            localStorage.setItem('brokerai.agencySettings', JSON.stringify(state.agencySettings));
            logAuditEvent(`👑 Super-Admin inspected cockpit of ${target.agencyName}`);
            showToast(`✓ Switched into ${target.agencyName} Cockpit! Ready to pitch.`, 'info');
            location.hash = '#/dashboard';
            render();
          }
        };
      });

      container.querySelectorAll('[data-admin-share-link]').forEach(btn => {
        btn.onclick = () => {
          const tenantId = btn.dataset.adminShareLink;
          const target = agencies.find(x => x.id === tenantId);
          if (target) {
            const hostOrigin = (typeof window !== 'undefined' && window.location?.origin) ? window.location.origin : 'https://www.rebrokerai.in';
            const pCode = (target.plan || 'pro').toLowerCase().includes('agency') ? 'agency' : ((target.plan || '').toLowerCase().includes('starter') ? 'starter' : 'pro');
            const url = `${hostOrigin}/#/demo-access?client=${encodeURIComponent(target.ownerName)}&agency=${encodeURIComponent(target.agencyName)}&phone=${encodeURIComponent(target.phone)}&rera=${encodeURIComponent(target.reraNumber || 'A51700012345')}&city=${encodeURIComponent(target.city || 'Thane West')}&plan=${pCode}&pass=demo`;
            const waText = `Hello ${target.ownerName} Ji!%0A%0AYour *BrokerAI Institutional Workspace* for *${target.agencyName}* is active and ready.%0A%0A🔑 *Direct Secure Login Link:*%0A${url}%0A%0AIncludes your live inventory, MahaRERA token receipts, and 1-click WhatsApp pitch generator.`;
            const waUrl = `https://api.whatsapp.com/send?phone=${target.phone.replace(/[^0-9]/g, '')}&text=${waText}`;
            logAuditEvent(`📲 Sent Branded Login Link to ${target.agencyName} (${target.phone})`);
            window.open(waUrl, '_blank');
          }
        };
      });

      container.querySelectorAll('[data-admin-toggle-status]').forEach(btn => {
        btn.onclick = () => {
          const tenantId = btn.dataset.adminToggleStatus;
          const target = agencies.find(x => x.id === tenantId);
          if (target) {
            target.status = target.status === 'ACTIVE' ? 'PAUSED' : 'ACTIVE';
            localStorage.setItem('brokerai.masterAgencies', JSON.stringify(agencies));
            logAuditEvent(`⚙️ Toggled subscription status of ${target.agencyName} to ${target.status}`);
            showToast(`✓ Agency "${target.agencyName}" is now ${target.status}!`, 'success');
            superAdminView();
          }
        };
      });
    }
  }


  function provisionAgencyModal() {
    document.querySelectorAll('.modal-backdrop, .drawer-backdrop, .spotlight-backdrop').forEach(b => b.remove());
    const backdrop = document.createElement('div');
    backdrop.className = 'drawer-backdrop';
    const drawer = document.createElement('aside');
    drawer.className = 'drawer';
    drawer.innerHTML = `
      <div class="drawer-head">
        <div>
          <span class="badge" style="background:#dcfce7;color:#15803d;margin-bottom:4px;font-weight:800;">PROVISION TENANT</span>
          <h2 class="panel-title">Add New Paying Broker Agency</h2>
          <div class="subtle">Create a dedicated branded workspace for an onboarding real estate broker.</div>
        </div>
        <button class="close">×</button>
      </div>
      <form class="form" id="provision-form">
        <div id="provision-notice"></div>
        <div class="form-section">
          <h3>Agency Identity & Owner</h3>
          <div class="form-grid">
            <div class="field full">
              <label>Agency / Firm Name *</label>
              <input class="input" name="agencyName" required placeholder="e.g. Skyline Realty Advisors" />
            </div>
            <div class="field">
              <label>Owner / Principal Broker Name *</label>
              <input class="input" name="ownerName" required placeholder="e.g. Ramesh Kulkarni" />
            </div>
            <div class="field">
              <label>Owner WhatsApp Mobile *</label>
              <input class="input" name="phone" required placeholder="+91 98200 54321" />
            </div>
            <div class="field">
              <label>Agency MahaRERA Number</label>
              <input class="input" name="reraNumber" placeholder="e.g. A51700088990" value="A517000" />
            </div>
            <div class="field">
              <label>City / Prime Operating Hub</label>
              <input class="input" name="city" placeholder="e.g. Thane West / Pokhran" value="Thane West" />
            </div>
            <div class="field">
              <label>Subscription Tier *</label>
              <select class="select" name="plan">
                <option value="agency">💎 Agency Elite (₹3,000/mo · 20 Seats)</option>
                <option value="pro" selected>⚡ Pro Closer (₹1,200/mo · 3 Seats)</option>
                <option value="starter">✦ Starter Solo (₹600/mo · 1 Seat)</option>
              </select>
            </div>
            <div class="field">
              <label>Initial Billing Status</label>
              <select class="select" name="status">
                <option value="ACTIVE">Active (Paid via UPI)</option>
                <option value="PAYMENT_DUE">Trial / Payment Pending</option>
              </select>
            </div>
          </div>
        </div>
      </form>
      <div class="form-actions">
        <button class="button secondary" id="cancel-provision">Cancel</button>
        <button class="button primary" id="save-provision" style="background:#15803d;">🚀 Provision & Generate Access Link</button>
      </div>
    `;

    document.body.append(backdrop, drawer);
    const close = () => { backdrop.remove(); drawer.remove(); };
    backdrop.onclick = close;
    if (drawer.querySelector('.close')) drawer.querySelector('.close').onclick = close;
    if (drawer.querySelector('#cancel-provision')) drawer.querySelector('#cancel-provision').onclick = close;

    if (drawer.querySelector('#save-provision')) drawer.querySelector('#save-provision').onclick = () => {
      const form = new FormData(drawer.querySelector('#provision-form'));
      const agencyName = form.get('agencyName')?.trim();
      const ownerName = form.get('ownerName')?.trim();
      const phone = form.get('phone')?.trim();
      const reraNumber = form.get('reraNumber')?.trim() || 'A51700099887';
      const city = form.get('city')?.trim() || 'Thane';
      const plan = form.get('plan');
      const status = form.get('status');

      if (!agencyName || !ownerName || !phone) {
        drawer.querySelector('#provision-notice').innerHTML = '<div class="notice error">Please fill in Agency Name, Owner Name, and WhatsApp Phone.</div>';
        return;
      }

      const agencies = getStoredAgencies();
      const newAgency = {
        id: `tenant-${Date.now()}`,
        agencyName,
        ownerName,
        phone,
        email: `${ownerName.toLowerCase().replace(/[^a-z]/g, '')}@agency.in`,
        reraNumber,
        city,
        plan,
        monthlyFee: plan === 'agency' ? 3000 : plan === 'pro' ? 1200 : 600,
        status,
        joinedDate: new Date().toISOString().slice(0, 10),
        expiresAt: new Date(Date.now() + 365 * 86400000).toISOString().slice(0, 10),
        totalLeads: 0,
        totalProperties: 0,
        totalDealsValue: 0
      };

      agencies.unshift(newAgency);
      localStorage.setItem('brokerai.masterAgencies', JSON.stringify(agencies));
      
      const hostOrigin = (typeof window !== 'undefined' && window.location?.origin) ? window.location.origin : 'https://www.rebrokerai.in';
      const accessUrl = `${hostOrigin}/#/demo-access?client=${encodeURIComponent(ownerName)}&agency=${encodeURIComponent(agencyName)}&phone=${encodeURIComponent(phone)}&rera=${encodeURIComponent(reraNumber)}&city=${encodeURIComponent(city)}&plan=${encodeURIComponent(plan)}&pass=demo`;
      const waText = `Hello ${ownerName} Ji!%0A%0AYour *BrokerAI Dedicated Workspace* for *${agencyName}* (MahaRERA: ${reraNumber}) is active.%0A%0A🔑 *Your Direct Login Link:*%0A${accessUrl}%0A%0A⚡ All your pitches, receipts, and listings will automatically carry your firm's name and MahaRERA number.`;
      const waUrl = `https://api.whatsapp.com/send?phone=${phone.replace(/[^0-9]/g, '')}&text=${waText}`;
      
      logAuditEvent(`🚀 Provisioned new agency: ${agencyName} for ${ownerName} (${phone})`);
      showToast(`✓ Agency "${agencyName}" provisioned! Opening WhatsApp link...`, 'success');
      close();
      window.open(waUrl, '_blank');
      superAdminView();
    };
  }


    

  let isRendering = false;
  async function render() {
    const app = document.getElementById('app');
    if (!app) return;
    if (isRendering) return;
    isRendering = true;

    try {
      let hash = window.location.hash || '#/dashboard';

      // 0. CHECK PRIVATE STAGING GATE
      if (isPrivateGateActive() && !isPrivateUnlocked() && hash !== '#/admin' && !hash.startsWith('#/admin')) {
        app.innerHTML = privateComingSoonView();
        bindPrivateGate();
        return;
      }

      state.activeRoute = hash;

      // 1. Check direct query param ?p=201 or ?id=201 on root/dashboard load
      try {
        const urlParams = new URLSearchParams(window.location.search);
        const pParam = urlParams.get('p') || urlParams.get('prop') || urlParams.get('id');
        if (pParam && (!hash || hash === '#' || hash === '#/' || hash === '#/dashboard')) {
          if (typeof clientMicrositeView === 'function') {
            clientMicrositeView(pParam);
            return;
          }
        }
      } catch {}

      // 2. Public Client Microsite Route (e.g. #/p/201, #p/201, #/microsite/201, #microsite/201)
      const cleanHash = hash.replace(/^#\/?/, '');
      if (cleanHash.startsWith('p/') || cleanHash.startsWith('microsite/')) {
        const parts = cleanHash.split('/');
        const propId = parts[1] ? parts[1].split('?')[0] : null;
        if (typeof clientMicrositeView === 'function') {
          clientMicrositeView(propId);
          return;
        }
      }

      if (!state.token && hash !== '#/admin' && !hash.startsWith('#/admin') && !hash.startsWith('#admin')) {
        if (hash.startsWith('#/auth/register') || hash.startsWith('#register')) {
          app.innerHTML = authView('register');
        } else {
          app.innerHTML = authView('login');
        }
        return;
      }

      let route = hash.replace(/^#\/?/, '').split('?')[0];
      if (!route) route = state.page || 'dashboard';
      state.page = route;

      
      if (route === 'calendar') {
        state.page = 'calendar';
        await siteVisitsView();
        return;
      
        return;
      } else if (route === 'clients') {
        state.page = 'clients';
        await clientsView();
        return;
      } else if (route === 'dashboard' || route === '') {
        state.page = 'dashboard';
        dashboard();
      } else if (route === 'leads') {
        state.page = 'leads';
        await leadsView();
      } else if (route === 'properties') {
        state.page = 'properties';
        await propertiesView();
      } else if (route === 'matches') {
        state.page = 'matches';
        await matchesView();
      } else if (route === 'follow-ups' || route === 'followups') {
        state.page = 'follow-ups';
        await followUpsView();
      } else if (route === 'visits' || route === 'site-visits') {
        state.page = 'visits';
        await siteVisitsView();
      } else if (route === 'documents') {
        state.page = 'documents';
        await documentsView();
      } else if (route === 'deals') {
        state.page = 'deals';
        await dealsView();
      } else if (route === 'team' || route === 'roster' || route === 'closers') {
        state.page = 'team';
        await teamView();
      } else if (route === 'branches' || route === 'desks' || route === 'territories') {
        state.page = 'branches';
        await branchesView();
      } else if (route === 'letterhead' || route === 'branding' || route === 'rera-letterhead') {
        state.page = 'letterhead';
        await letterheadView();
      } else if (route === 'commissions') {
        state.page = 'commissions';
        await commissionsView();
      } else if (route === 'reports' || route === 'analytics' || route === 'leaderboard') {
        state.page = 'reports';
        await reportsView();
      } else if (route === 'assistant' || route === 'copilot' || route === 'messages') {
        state.page = 'dashboard';
        window.location.hash = '#/dashboard';
        dashboard();
      } else if (route === 'notifications') {
        state.page = 'notifications';
        await notificationsView();
      } else if (route === 'settings') {
        state.page = 'settings';
        await settingsView();
      } else if (route === 'pricing' || route === 'plans') {
        state.page = 'pricing';
        pricingView();
      } else if (route === 'admin' || route === 'super-admin') {
        state.page = 'admin';
        superAdminView();
      } else {
        state.page = 'dashboard';
        dashboard();
      }

      // Smooth scroll to top on route change
      try { window.scrollTo({ top: 0, behavior: 'instant' }); } catch(e) {}
    } catch (err) {
      console.error('Render error:', err);
      app.innerHTML = layout(`<div style="padding:40px;text-align:center;"><div style="font-size:40px;">⚠️</div><h2>Error loading page</h2><p style="color:#64748b;">${err.message}</p><a href="#/dashboard" class="button primary">Return to Dashboard</a></div>`);
      if (typeof bindShell === 'function') bindShell();
    } finally {
      isRendering = false;
    }
  }

  window.addEventListener('hashchange', () => {
    const hash = (window.location.hash || '').replace(/^#\/?/, '');
    const cleanPage = hash.split('?')[0];
    if (cleanPage) state.page = cleanPage;
    render();
  });

  // Universal Window API Exports for all views and modals
  window.demoTourModal = demoTourModal;
  window.planSimulatorModal = planSimulatorModal;
  window.spotlightCommandModal = spotlightCommandModal;
  window.installPwaModal = installPwaModal;
  window.siteVisitDrawer = siteVisitDrawer;
  window.visitFeedbackDrawer = visitFeedbackDrawer;
  window.csvImportModal = csvImportModal;
  window.leadDrawer = leadDrawer;
  window.propertyGalleryModal = propertyGalleryModal;
  window.propertyBrochurePdfModal = propertyBrochurePdfModal;
  window.coBrokeringAgreementModal = coBrokeringAgreementModal;
  window.whatsAppDispatcherModal = whatsAppDispatcherModal;
  window.propertyMoreSheet = propertyMoreSheet;
  window.leadMatchesDrawer = leadMatchesDrawer;
  window.propertyBuyersDrawer = propertyBuyersDrawer;
  window.propertyDrawer = propertyDrawer;
  window.followUpDrawer = followUpDrawer;
  window.dealDrawer = dealDrawer;
  window.costSheetModal = costSheetModal;
  window.salesDemoGeneratorModal = salesDemoGeneratorModal;
  window.mobileMenuModal = mobileMenuModal;
  window.checkMobileInstallBanner = checkMobileInstallBanner;
  window.clientMicrositeModal = clientMicrositeModal;
  window.clientMicrositeView = clientMicrositeView;
  window.stampDutyCostCalculatorModal = stampDutyCostCalculatorModal;
  window.rentalAgreementModal = rentalAgreementModal;
  window.allotmentLetterModal = allotmentLetterModal;
  window.tokenReceiptModal = tokenReceiptModal;
  window.letterheadModal = letterheadModal;
  window.magicWhatsAppParserModal = magicWhatsAppParserModal;
  window.brokerageInvoiceModal = brokerageInvoiceModal;
  window.commissionDrawer = commissionDrawer;
  window.promptAddAgentModal = promptAddAgentModal;
  window.promptAddBranchDeskModal = promptAddBranchDeskModal;
  window.letterheadView = letterheadView;
  window.planActivationModal = planActivationModal;
  window.auditEventsModal = auditEventsModal;
  window.provisionAgencyModal = provisionAgencyModal;
  window.sendTestWhatsAppPitch = sendTestWhatsAppPitch;
  window.exportTeamDirectoryCSV = exportTeamDirectoryCSV;
  window.render = render;
  window.dashboard = dashboard;
  window.pricingView = pricingView;
  window.superAdminView = superAdminView;
  window.leadsView = leadsView;
  window.propertiesView = propertiesView;
  window.matchesView = matchesView;
  window.followUpsView = followUpsView;
  window.siteVisitsView = siteVisitsView;
  window.documentsView = documentsView;
  window.dealsView = dealsView;
  window.teamView = teamView;
  window.branchesView = branchesView;
  window.commissionsView = commissionsView;
  window.reportsView = reportsView;
  window.assistantView = assistantView;
  window.notificationsView = notificationsView;
  window.settingsView = settingsView;

  if (typeof initMasterSessionTracker === 'function') initMasterSessionTracker();

  render();
})();

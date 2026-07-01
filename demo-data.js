// Demo seed data for the graph task-tracker.
// Loaded via <script src="demo-data.js"></script>; sets window.SEED and window.BOARD.

window.SEED = {
  version: 'demo-1',

  // Every project name used anywhere below — top-level parents AND subprojects.
  projects: [
    '🇪🇺 Europe Trip',
    'Paris',
    'Rome',
    'Barcelona',
    '🔬 Battery Research',
    'DFT Screening',
    'ML Potential',
    'Experiments',
    '🚀 Website Launch'
  ],

  people: [
    { id: 'alice', name: 'Alice Kim',   group: 'me',       role: 'Organizer / lead' },
    { id: 'bob',   name: 'Bob Lee',     group: 'internal', role: 'Frontend & travel buddy' },
    { id: 'carol', name: 'Carol Novak', group: 'internal', role: 'ML engineer' },
    { id: 'frank', name: 'Frank Yang',  group: 'internal', role: 'Lab technician' },
    { id: 'dave',  name: 'Dave Ruiz',   group: 'external', role: 'Travel agent / designer' },
    { id: 'erin',  name: 'Erin Park',   group: 'external', role: 'Advisor (PI)' }
  ],

  nodes: [
    // ---------- 🇪🇺 Europe Trip / Paris ----------
    { id: 'eu-visa', title: 'Apply for Schengen visa', desc: 'Not needed for our passports — kept for reference and canceled.', priority: 4, priorityLabel: 'Low', due: null, state: 'Canceled', project: 'Paris', children: [], assignees: [{ id: 'alice', type: 'me' }], eta: null, created: '2026-01-05' },
    { id: 'eu-flights', title: 'Book flights to Europe', desc: 'Round-trip ICN→CDG, return from BCN. Compare fares across airlines.', priority: 1, priorityLabel: 'Urgent', due: null, state: 'Done', project: 'Paris', children: [], assignees: [{ id: 'alice', type: 'me' }], eta: null, created: '2026-01-12' },
    { id: 'eu-hotel-paris', title: 'Reserve hotel in Paris', desc: '3 nights near Le Marais, walkable to a metro line.', priority: 2, priorityLabel: 'High', due: null, state: 'Done', project: 'Paris', children: [], assignees: [{ id: 'alice', type: 'me' }], eta: null, created: '2026-01-15' },
    { id: 'eu-hotel-rome', title: 'Reserve hotel in Rome', desc: '2 nights near Termini station.', priority: 2, priorityLabel: 'High', due: '2026-07-20', state: 'Todo', project: 'Rome', children: [], assignees: [{ id: 'dave', type: 'outsource' }], eta: null, created: '2026-02-01' },
    { id: 'eu-itinerary', title: 'Plan the full itinerary', desc: 'Day-by-day plan across the three cities, with buffer days.', priority: 3, priorityLabel: 'Medium', due: '2026-07-25', state: 'In Progress', project: 'Paris', children: [], assignees: [{ id: 'alice', type: 'me' }, { id: 'bob', type: 'peer' }], eta: null, created: '2026-02-05' },
    { id: 'eu-eiffel', title: 'Book Eiffel Tower tickets', desc: 'Summit access; sunset slot if available.', priority: 3, priorityLabel: 'Medium', due: '2026-08-02', state: 'Todo', project: 'Paris', children: [], assignees: [{ id: 'bob', type: 'peer' }], eta: null, created: '2026-02-10' },
    { id: 'eu-louvre', title: 'Louvre visit', desc: 'Timed entry, skip-the-line. See the big three then wander.', priority: 4, priorityLabel: 'Low', due: null, state: 'Ideas', project: 'Paris', children: [], assignees: [], eta: null, created: '2026-02-12' },
    { id: 'eu-montmartre', title: 'Montmartre & Sacré-Cœur walk', desc: 'Morning stroll, coffee, sketch artists on the square.', priority: 0, priorityLabel: 'No priority', due: null, state: 'Ideas', project: 'Paris', children: [], assignees: [], eta: null, created: '2026-02-14' },

    // ---------- 🇪🇺 Europe Trip / Rome ----------
    { id: 'eu-colosseum', title: 'Colosseum guided tour', desc: 'Underground + arena floor access.', priority: 2, priorityLabel: 'High', due: '2026-08-06', state: 'Todo', project: 'Rome', children: [], assignees: [{ id: 'alice', type: 'me' }], eta: null, created: '2026-02-18' },
    { id: 'eu-vatican', title: 'Vatican Museums & Sistine Chapel', desc: 'Early entry to beat the crowds.', priority: 3, priorityLabel: 'Medium', due: null, state: 'Ideas', project: 'Rome', children: [], assignees: [], eta: null, created: '2026-02-20' },
    { id: 'eu-trevi', title: 'Trevi Fountain at night', desc: 'Toss a coin. Gelato nearby.', priority: 0, priorityLabel: 'No priority', due: null, state: 'Ideas', project: 'Rome', children: [], assignees: [], eta: null, created: '2026-02-21' },

    // ---------- 🇪🇺 Europe Trip / Barcelona ----------
    { id: 'eu-sagrada', title: 'Sagrada Família tickets', desc: 'Tower access with audio guide.', priority: 2, priorityLabel: 'High', due: '2026-08-11', state: 'Todo', project: 'Barcelona', children: [], assignees: [{ id: 'bob', type: 'peer' }], eta: null, created: '2026-02-25' },
    { id: 'eu-tapas', title: 'Tapas crawl in El Born', desc: 'Hit 4-5 spots; patatas bravas mandatory.', priority: 4, priorityLabel: 'Low', due: null, state: 'Ideas', project: 'Barcelona', children: [], assignees: [], eta: null, created: '2026-02-27' },
    { id: 'eu-parkguell', title: 'Park Güell morning', desc: 'Gaudí mosaics; monumental zone ticket.', priority: 0, priorityLabel: 'No priority', due: null, state: 'Ideas', project: 'Barcelona', children: [], assignees: [], eta: null, created: '2026-03-01' },

    // ---------- 🇪🇺 Europe Trip (top-level) ----------
    { id: 'eu-pack', title: 'Pack bags', desc: 'Carry-on only. Adapters, meds, chargers, one nice outfit.', priority: 3, priorityLabel: 'Medium', due: '2026-08-14', state: 'Todo', project: '🇪🇺 Europe Trip', children: [], assignees: [{ id: 'alice', type: 'me' }], eta: null, created: '2026-03-02' },
    { id: 'eu-insurance', title: 'Buy travel insurance', desc: 'Medical + trip cancellation coverage.', priority: 1, priorityLabel: 'Urgent', due: null, state: 'Done', project: '🇪🇺 Europe Trip', children: [], assignees: [{ id: 'dave', type: 'outsource' }], eta: null, created: '2026-01-20' },

    // ---------- 🔬 Battery Research / DFT Screening ----------
    { id: 'br-litrev', title: 'Literature review', desc: 'Survey solid-state electrolyte candidates and known bottlenecks.', priority: 2, priorityLabel: 'High', due: null, state: 'Done', project: 'DFT Screening', children: [], assignees: [{ id: 'alice', type: 'me' }], eta: null, created: '2026-01-08' },
    { id: 'br-setup', title: 'Set up DFT environment', desc: 'VASP + a workflow manager on the cluster.', priority: 3, priorityLabel: 'Medium', due: null, state: 'Done', project: 'DFT Screening', children: [], assignees: [{ id: 'frank', type: 'help' }], eta: null, created: '2026-01-11' },
    { id: 'br-dft', title: 'Run DFT calculations', desc: 'Relax structures and compute formation energies for the candidate set.', priority: 1, priorityLabel: 'Urgent', due: '2026-07-10', state: 'In Progress', project: 'DFT Screening', children: [], assignees: [{ id: 'alice', type: 'me' }, { id: 'carol', type: 'peer' }], eta: null, created: '2026-01-25' },
    { id: 'br-screen', title: 'Screen candidate materials', desc: 'Filter by stability and conductivity descriptors.', priority: 2, priorityLabel: 'High', due: '2026-07-18', state: 'Todo', project: 'DFT Screening', children: [], assignees: [{ id: 'carol', type: 'peer' }], eta: null, created: '2026-02-02' },

    // ---------- 🔬 Battery Research / ML Potential ----------
    { id: 'br-mlip', title: 'Train MLIP model', desc: 'Fit an equivariant interatomic potential to the DFT dataset.', priority: 1, priorityLabel: 'Urgent', due: '2026-07-22', state: 'In Progress', project: 'ML Potential', children: [], assignees: [{ id: 'carol', type: 'peer' }], eta: null, created: '2026-02-08' },
    { id: 'br-validate', title: 'Validate against DFT', desc: 'Compare energies and forces on a held-out test set.', priority: 2, priorityLabel: 'High', due: '2026-07-30', state: 'Todo', project: 'ML Potential', children: [], assignees: [{ id: 'carol', type: 'peer' }, { id: 'erin', type: 'advisor' }], eta: null, created: '2026-02-15' },
    { id: 'br-al', title: 'Active learning loop', desc: 'Add high-uncertainty configurations to the training set and retrain.', priority: 3, priorityLabel: 'Medium', due: null, state: 'Ideas', project: 'ML Potential', children: [], assignees: [], eta: null, created: '2026-02-16' },

    // ---------- 🔬 Battery Research / Experiments ----------
    { id: 'br-synth', title: 'Synthesize top candidate', desc: 'Solid-state route for the best screened material.', priority: 2, priorityLabel: 'High', due: '2026-08-15', state: 'Todo', project: 'Experiments', children: [], assignees: [{ id: 'frank', type: 'help' }], eta: null, created: '2026-03-01' },
    { id: 'br-cycle', title: 'Cycle testing', desc: 'Galvanostatic cycling; measure capacity retention.', priority: 3, priorityLabel: 'Medium', due: null, state: 'Ideas', project: 'Experiments', children: [], assignees: [{ id: 'frank', type: 'help' }], eta: null, created: '2026-03-05' },

    // ---------- 🔬 Battery Research (top-level) ----------
    { id: 'br-manuscript', title: 'Write manuscript', desc: 'Draft text, build figures, submit to a materials journal.', priority: 4, priorityLabel: 'Low', due: null, state: 'Ideas', project: '🔬 Battery Research', children: [], assignees: [{ id: 'alice', type: 'me' }, { id: 'erin', type: 'advisor' }], eta: null, created: '2026-03-10' },

    // ---------- 🚀 Website Launch (top-level, no subprojects) ----------
    { id: 'wl-mockup', title: 'Design mockup', desc: 'Hi-fi Figma mockup of the landing page.', priority: 2, priorityLabel: 'High', due: null, state: 'Done', project: '🚀 Website Launch', children: [], assignees: [{ id: 'dave', type: 'outsource' }], eta: null, created: '2026-04-01' },
    { id: 'wl-frontend', title: 'Build frontend', desc: 'Implement the landing page; responsive down to mobile.', priority: 1, priorityLabel: 'Urgent', due: '2026-07-12', state: 'In Progress', project: '🚀 Website Launch', children: [], assignees: [{ id: 'bob', type: 'peer' }], eta: null, created: '2026-04-10' },
    { id: 'wl-copy', title: 'Write landing copy', desc: 'Headline, subhead, feature blurbs, and a clear CTA.', priority: 3, priorityLabel: 'Medium', due: '2026-07-14', state: 'Todo', project: '🚀 Website Launch', children: [], assignees: [{ id: 'alice', type: 'me' }, { id: 'dave', type: 'inbound' }], eta: null, created: '2026-04-12' },
    { id: 'wl-qa', title: 'QA & cross-browser testing', desc: 'Chrome / Safari / Firefox plus mobile checks.', priority: 2, priorityLabel: 'High', due: '2026-07-16', state: 'Todo', project: '🚀 Website Launch', children: [], assignees: [{ id: 'alice', type: 'me' }], eta: null, created: '2026-04-15' },
    { id: 'wl-deploy', title: 'Deploy to production', desc: 'Ship to Cloudflare Pages and wire up DNS.', priority: 1, priorityLabel: 'Urgent', due: '2026-07-18', state: 'Todo', project: '🚀 Website Launch', children: [], assignees: [{ id: 'bob', type: 'peer' }], eta: null, created: '2026-04-16' },

    // ---------- Text notes ----------
    { id: 'wl-note1', kind: 'text', text: 'Remember to buy the domain before launch — check .com and .io availability.', project: '🚀 Website Launch', created: '2026-04-02' },
    { id: 'wl-note2', kind: 'text', text: 'Ask the design team for the logo as an SVG (need it for the favicon + retina).', project: '🚀 Website Launch', created: '2026-04-03' }
  ],

  edges: [
    // Europe Trip: flights → hotels → itinerary → pack, with sub-tasks off the itinerary
    { id: 'e1', from: 'eu-flights', to: 'eu-hotel-paris', type: 'next' },
    { id: 'e2', from: 'eu-flights', to: 'eu-hotel-rome', type: 'next' },
    { id: 'e3', from: 'eu-hotel-paris', to: 'eu-itinerary', type: 'next' },
    { id: 'e4', from: 'eu-itinerary', to: 'eu-eiffel', type: 'sub' },
    { id: 'e5', from: 'eu-itinerary', to: 'eu-louvre', type: 'sub' },
    { id: 'e6', from: 'eu-itinerary', to: 'eu-pack', type: 'next' },

    // Battery Research pipeline with a success/fail branch off validation
    { id: 'e7', from: 'br-litrev', to: 'br-dft', type: 'next' },
    { id: 'e8', from: 'br-dft', to: 'br-screen', type: 'success' },
    { id: 'e9', from: 'br-dft', to: 'br-mlip', type: 'next' },
    { id: 'e10', from: 'br-mlip', to: 'br-validate', type: 'next' },
    { id: 'e11', from: 'br-validate', to: 'br-manuscript', type: 'success' },
    { id: 'e12', from: 'br-validate', to: 'br-al', type: 'fail' },
    { id: 'e13', from: 'br-al', to: 'br-mlip', type: 'next' },

    // Website Launch flow
    { id: 'e14', from: 'wl-mockup', to: 'wl-frontend', type: 'next' },
    { id: 'e15', from: 'wl-frontend', to: 'wl-qa', type: 'next' },
    { id: 'e16', from: 'wl-qa', to: 'wl-deploy', type: 'next' }
  ],

  codes: {
    'eu-visa': 'Visa',
    'eu-flights': 'Flights',
    'eu-hotel-paris': 'Hotel PAR',
    'eu-hotel-rome': 'Hotel ROM',
    'eu-itinerary': 'Itinerary',
    'eu-eiffel': 'Eiffel',
    'eu-louvre': 'Louvre',
    'eu-montmartre': 'Montmartre',
    'eu-colosseum': 'Colosseum',
    'eu-vatican': 'Vatican',
    'eu-trevi': 'Trevi',
    'eu-sagrada': 'Sagrada',
    'eu-tapas': 'Tapas',
    'eu-parkguell': 'Park Güell',
    'eu-pack': 'Pack',
    'eu-insurance': 'Insurance',
    'br-litrev': 'LitRev',
    'br-setup': 'Setup',
    'br-dft': 'DFT',
    'br-screen': 'Screen',
    'br-mlip': 'MLIP',
    'br-validate': 'Validate',
    'br-al': 'ActiveLearn',
    'br-synth': 'Synthesis',
    'br-cycle': 'Cycling',
    'br-manuscript': 'Manuscript',
    'wl-mockup': 'Mockup',
    'wl-frontend': 'Frontend',
    'wl-copy': 'Copy',
    'wl-qa': 'QA',
    'wl-deploy': 'Deploy',
    'wl-note1': 'Domain',
    'wl-note2': 'Logo'
  },

  projectMeta: {
    'Paris':         { parent: '🇪🇺 Europe Trip' },
    'Rome':          { parent: '🇪🇺 Europe Trip' },
    'Barcelona':     { parent: '🇪🇺 Europe Trip' },
    'DFT Screening': { parent: '🔬 Battery Research' },
    'ML Potential':  { parent: '🔬 Battery Research' },
    'Experiments':   { parent: '🔬 Battery Research' }
  }
};

window.BOARD = [];

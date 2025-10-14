// Mock Data
const mockData = {
    athlete: {
        timeline: [
            {
                date: '2024-01-15',
                type: 'Contract',
                title: 'Nike Endorsement Deal',
                status: 'Active',
                linkedItems: '3 Assets',
                actions: ['View', 'Renew']
            },
            {
                date: '2024-01-12',
                type: 'Asset',
                title: 'Training Video Series',
                status: 'Pending Approval',
                linkedItems: '1 Contract',
                actions: ['View', 'Share-disabled']
            },
            {
                date: '2024-01-10',
                type: 'Approval',
                title: 'Guardian Approval Required',
                status: 'Blocked',
                linkedItems: '2 Assets',
                actions: ['View', 'Resend']
            },
            {
                date: '2024-01-08',
                type: 'Contract',
                title: 'Gatorade Partnership',
                status: 'Expired',
                linkedItems: '1 Asset',
                actions: ['View', 'Renew']
            },
            {
                date: '2024-01-05',
                type: 'Asset',
                title: 'Social Media Content Package',
                status: 'Active',
                linkedItems: '2 Contracts',
                actions: ['View', 'Link', 'Share']
            }
        ],
        assets: [
            {
                name: 'Training Video Series',
                rights: 'Exclusive',
                expiration: '2025-12-31',
                guardianStatus: 'Required',
                linkedContracts: 1
            },
            {
                name: 'Social Media Content Package',
                rights: 'Shared',
                expiration: 'Indefinite',
                guardianStatus: 'Approved',
                linkedContracts: 2
            },
            {
                name: 'Podcast Interview',
                rights: 'Licensed',
                expiration: '2024-06-30',
                guardianStatus: 'N/A',
                linkedContracts: 1
            },
            {
                name: 'Photo Shoot Images',
                rights: 'Exclusive',
                expiration: '2026-01-01',
                guardianStatus: 'Required',
                linkedContracts: 3
            },
            {
                name: 'Merchandise Design',
                rights: 'Shared',
                expiration: 'Indefinite',
                guardianStatus: 'Approved',
                linkedContracts: 1
            }
        ],
        contracts: [
            {
                name: 'Nike Endorsement Deal',
                partner: 'Nike Inc.',
                termStart: '2023-01-01',
                termEnd: '2025-12-31',
                status: 'Active',
                linkedAssets: 3,
                nextAction: 'Renew by Dec 2025'
            },
            {
                name: 'Gatorade Partnership',
                partner: 'Gatorade',
                termStart: '2022-01-01',
                termEnd: '2023-12-31',
                status: 'Expired',
                linkedAssets: 1,
                nextAction: 'Link Assets'
            },
            {
                name: 'Under Armour Sponsorship',
                partner: 'Under Armour',
                termStart: '2024-01-01',
                termEnd: '2024-12-31',
                status: 'Pending',
                linkedAssets: 0,
                nextAction: 'Pending Metadata'
            },
            {
                name: 'ESPN Interview Rights',
                partner: 'ESPN',
                termStart: '2024-01-15',
                termEnd: '2024-06-15',
                status: 'Active',
                linkedAssets: 2,
                nextAction: 'Renew by May 2024'
            }
        ],
        approvals: [
            {
                asset: 'Training Video Series',
                submitted: '2024-01-12',
                expires: '2024-01-19',
                status: 'Pending'
            },
            {
                asset: 'Photo Shoot Images',
                submitted: '2024-01-08',
                expires: '2024-01-15',
                status: 'Blocked'
            },
            {
                contract: 'Under Armour Sponsorship',
                submitted: '2024-01-05',
                expires: '2024-01-12',
                status: 'Approved'
            }
        ],
        requests: [
            {
                vendor: 'Sports Illustrated',
                assetRequested: 'Training Video Series',
                rightsScope: 'Editorial Use',
                duration: '30 days',
                due: '2024-01-20',
                actions: ['Approve', 'Deny', 'View Vendor']
            },
            {
                vendor: 'ESPN',
                assetRequested: 'Photo Shoot Images',
                rightsScope: 'Digital Media',
                duration: '90 days',
                due: '2024-01-18',
                actions: ['Approve', 'Deny', 'View Vendor']
            },
            {
                vendor: 'NBC Sports',
                assetRequested: 'Podcast Interview',
                rightsScope: 'Broadcast Rights',
                duration: '60 days',
                due: '2024-01-22',
                actions: ['Approve', 'Deny', 'View Vendor']
            }
        ]
    },
    vendor: {
        requests: [
            {
                athlete: 'Alex Johnson',
                asset: 'Training Video Series',
                requestedRights: 'Editorial Use',
                duration: '30 days',
                status: 'Pending',
                slaCountdown: '3 days',
                actions: ['Edit Request', 'Withdraw']
            },
            {
                athlete: 'Sarah Williams',
                asset: 'Photo Shoot Images',
                requestedRights: 'Digital Media',
                duration: '90 days',
                status: 'Approved',
                slaCountdown: 'N/A',
                actions: ['View License']
            },
            {
                athlete: 'Mike Chen',
                asset: 'Social Media Content',
                requestedRights: 'Marketing Campaign',
                duration: '60 days',
                status: 'Denied',
                slaCountdown: 'N/A',
                actions: ['Resubmit']
            }
        ],
        licensedAssets: [
            {
                asset: 'Training Video Series',
                athlete: 'Alex Johnson',
                licenseType: 'Exclusive',
                start: '2024-01-15',
                end: '2024-02-15',
                watermark: true,
                complianceStatus: 'Compliant'
            },
            {
                asset: 'Photo Shoot Images',
                athlete: 'Sarah Williams',
                licenseType: 'Shared',
                start: '2024-01-10',
                end: '2024-04-10',
                watermark: true,
                complianceStatus: 'Compliant'
            },
            {
                asset: 'Podcast Interview',
                athlete: 'Mike Chen',
                licenseType: 'Licensed',
                start: '2023-12-01',
                end: '2024-01-01',
                watermark: false,
                complianceStatus: 'Expired'
            }
        ],
        vendorLibrary: [
            {
                logo: 'Company Logo',
                type: 'Brand Asset',
                ownershipVerified: 'Yes',
                approvedUses: 'Marketing, Advertising',
                linkedCampaigns: 5
            },
            {
                logo: 'Product Image',
                type: 'Product Visual',
                ownershipVerified: 'Yes',
                approvedUses: 'E-commerce, Social Media',
                linkedCampaigns: 3
            },
            {
                logo: 'Event Banner',
                type: 'Event Material',
                ownershipVerified: 'No',
                approvedUses: 'Event Promotion',
                linkedCampaigns: 1
            }
        ]
    }
};

// Application State
let currentRole = 'athlete';
let currentTab = 'timeline';
let alerts = [];

// DOM Elements
const roleSwitch = document.getElementById('roleSwitch');
const userRole = document.getElementById('userRole');
const athleteDashboard = document.getElementById('athleteDashboard');
const vendorDashboard = document.getElementById('vendorDashboard');
const athleteTabs = document.querySelector('.athlete-tabs');
const vendorTabs = document.querySelector('.vendor-tabs');
const fanGuardModal = document.getElementById('fanGuardModal');
const closeFanGuardModal = document.getElementById('closeFanGuardModal');
const alertsContainer = document.getElementById('alertsContainer');
const alertBadge = document.getElementById('alertBadge');
const detailDrawer = document.getElementById('detailDrawer');
const detailDrawerOverlay = document.getElementById('detailDrawerOverlay');
const detailDrawerClose = document.getElementById('detailDrawerClose');
const detailDrawerTitle = document.getElementById('detailDrawerTitle');
const detailDrawerSubtitle = document.getElementById('detailDrawerSubtitle');
const detailDrawerContent = document.getElementById('detailDrawerContent');

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    populateDashboard();
    initializeAlerts();
});

function initializeApp() {
    updateRoleDisplay();
    updateTabDisplay();
}

function initializeAlerts() {
    // Generate sample alerts based on mock data
    generateAlerts();
    renderAlerts();
}

function generateAlerts() {
    alerts = [];
    
    // Check for contract renewals
    mockData.athlete.contracts.forEach(contract => {
        if (contract.nextAction.includes('Renew by')) {
            alerts.push({
                id: `renewal-${contract.name}`,
                type: 'renewal',
                title: 'Contract Renewal Due',
                message: `${contract.name} expires soon and needs renewal.`,
                actions: [
                    { text: 'Renew Now', type: 'primary', action: 'renew' },
                    { text: 'View Details', type: 'secondary', action: 'view' }
                ],
                data: contract
            });
        }
    });
    
    // Check for rights conflicts
    if (mockData.athlete.assets.some(asset => asset.name.includes('Conflict'))) {
        alerts.push({
            id: 'rights-conflict',
            type: 'conflict',
            title: 'Rights Conflict Detected',
            message: 'One or more assets have conflicting rights assignments.',
            actions: [
                { text: 'Resolve Conflict', type: 'primary', action: 'resolve' },
                { text: 'View Assets', type: 'secondary', action: 'view' }
            ]
        });
    }
    
    // Check for missing metadata
    mockData.athlete.contracts.forEach(contract => {
        if (contract.nextAction.includes('Pending Metadata')) {
            alerts.push({
                id: `metadata-${contract.name}`,
                type: 'metadata',
                title: 'Missing Contract Metadata',
                message: `${contract.name} is missing required metadata fields.`,
                actions: [
                    { text: 'Complete Metadata', type: 'primary', action: 'complete' },
                    { text: 'View Contract', type: 'secondary', action: 'view' }
                ],
                data: contract
            });
        }
    });
    
    // Update alert badge
    updateAlertBadge();
}

function renderAlerts() {
    alertsContainer.innerHTML = '';
    
    alerts.forEach(alert => {
        const alertElement = document.createElement('div');
        alertElement.className = `alert ${alert.type}`;
        alertElement.innerHTML = `
            <div class="alert-header">
                <div class="alert-title">
                    <span class="alert-icon ${alert.type}">!</span>
                    ${alert.title}
                </div>
                <button class="alert-close" onclick="dismissAlert('${alert.id}')">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="alert-message">${alert.message}</div>
            <div class="alert-actions">
                ${alert.actions.map(action => 
                    `<button class="alert-btn ${action.type}" onclick="handleAlertAction('${alert.id}', '${action.action}')">${action.text}</button>`
                ).join('')}
            </div>
        `;
        alertsContainer.appendChild(alertElement);
    });
}

function dismissAlert(alertId) {
    alerts = alerts.filter(alert => alert.id !== alertId);
    renderAlerts();
    updateAlertBadge();
}

function handleAlertAction(alertId, action) {
    const alert = alerts.find(a => a.id === alertId);
    if (!alert) return;
    
    console.log(`Alert action: ${action}`, alert);
    
    switch (action) {
        case 'renew':
            // Handle contract renewal
            break;
        case 'resolve':
            // Handle rights conflict resolution
            break;
        case 'complete':
            // Handle metadata completion
            break;
        case 'view':
            // Handle view action
            break;
    }
    
    // Dismiss the alert after action
    dismissAlert(alertId);
}

function updateAlertBadge() {
    if (alerts.length > 0) {
        alertBadge.classList.remove('no-alerts');
    } else {
        alertBadge.classList.add('no-alerts');
    }
}

// Detail Drawer Functions
function openDetailDrawer(type, data) {
    detailDrawerTitle.textContent = `${type} Details`;
    detailDrawerSubtitle.textContent = `View and manage ${type.toLowerCase()} information`;
    
    if (type === 'Asset') {
        renderAssetDetails(data);
    } else if (type === 'Contract') {
        renderContractDetails(data);
    }
    
    detailDrawer.classList.add('active');
    detailDrawerOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeDetailDrawer() {
    detailDrawer.classList.remove('active');
    detailDrawerOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

function renderAssetDetails(asset) {
    const auditLog = [
        { action: 'Created', details: 'Asset uploaded and rights tagged', timestamp: '2024-01-05T10:30:00Z', type: 'created' },
        { action: 'Updated', details: 'Rights modified to Exclusive', timestamp: '2024-01-08T14:20:00Z', type: 'updated' },
        { action: 'Approved', details: 'Guardian approval received', timestamp: '2024-01-10T09:15:00Z', type: 'approved' },
        { action: 'Linked', details: 'Connected to Nike Endorsement Deal', timestamp: '2024-01-12T16:45:00Z', type: 'updated' }
    ];
    
    detailDrawerContent.innerHTML = `
        <div class="detail-section">
            <div class="detail-section-title">Asset Information</div>
            <div class="detail-grid">
                <div class="detail-item">
                    <div class="detail-label">Name</div>
                    <div class="detail-value large">${asset.name}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Rights Type</div>
                    <div class="detail-value"><span class="status-${asset.rights.toLowerCase()}">${asset.rights}</span></div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Expiration</div>
                    <div class="detail-value">${asset.expiration}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Guardian Status</div>
                    <div class="detail-value"><span class="status-${asset.guardianStatus.toLowerCase().replace(' ', '-')}">${asset.guardianStatus}</span></div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Linked Contracts</div>
                    <div class="detail-value">${asset.linkedContracts} contracts</div>
                </div>
            </div>
        </div>
        
        <div class="detail-section">
            <div class="detail-section-title">Preview</div>
            <div class="preview-section">
                <div class="preview-placeholder">
                    <i class="fas fa-image" style="font-size: 2rem; margin-bottom: 0.5rem;"></i>
                    <div>Asset Preview</div>
                </div>
                <div class="preview-actions">
                    <button class="btn btn-primary">Download</button>
                    <button class="btn btn-secondary">Share</button>
                </div>
            </div>
        </div>
        
        <div class="detail-section">
            <div class="detail-section-title">Linked Contracts</div>
            <div class="linked-items">
                <a href="#" class="linked-item">Nike Endorsement Deal</a>
                <a href="#" class="linked-item">ESPN Interview Rights</a>
            </div>
        </div>
        
        <div class="detail-section">
            <div class="detail-section-title">Audit Log</div>
            <div class="audit-log">
                ${auditLog.map(log => `
                    <div class="audit-log-item">
                        <div class="audit-log-icon ${log.type}">!</div>
                        <div class="audit-log-content">
                            <div class="audit-log-action">${log.action}</div>
                            <div class="audit-log-details">${log.details}</div>
                            <div class="audit-log-timestamp">${formatDate(log.timestamp)}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderContractDetails(contract) {
    const auditLog = [
        { action: 'Created', details: 'Contract uploaded and parsed', timestamp: '2023-12-15T10:30:00Z', type: 'created' },
        { action: 'Updated', details: 'Terms modified and approved', timestamp: '2023-12-20T14:20:00Z', type: 'updated' },
        { action: 'Approved', details: 'Guardian approval received', timestamp: '2023-12-22T09:15:00Z', type: 'approved' },
        { action: 'Linked', details: 'Connected to 3 assets', timestamp: '2024-01-01T16:45:00Z', type: 'updated' }
    ];
    
    detailDrawerContent.innerHTML = `
        <div class="detail-section">
            <div class="detail-section-title">Contract Information</div>
            <div class="detail-grid">
                <div class="detail-item">
                    <div class="detail-label">Contract Name</div>
                    <div class="detail-value large">${contract.name}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Partner</div>
                    <div class="detail-value">${contract.partner}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Term Period</div>
                    <div class="detail-value">${formatDate(contract.termStart)} - ${formatDate(contract.termEnd)}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Status</div>
                    <div class="detail-value"><span class="status-${contract.status.toLowerCase()}">${contract.status}</span></div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Linked Assets</div>
                    <div class="detail-value">${contract.linkedAssets} assets</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Next Action</div>
                    <div class="detail-value">${contract.nextAction}</div>
                </div>
            </div>
        </div>
        
        <div class="detail-section">
            <div class="detail-section-title">Terms Summary</div>
            <div class="detail-grid">
                <div class="detail-item">
                    <div class="detail-label">Compensation</div>
                    <div class="detail-value">$500,000 annually</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Usage Rights</div>
                    <div class="detail-value">Marketing & Advertising</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Territory</div>
                    <div class="detail-value">North America</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Exclusivity</div>
                    <div class="detail-value">Category Exclusive</div>
                </div>
            </div>
        </div>
        
        <div class="detail-section">
            <div class="detail-section-title">Linked Assets</div>
            <div class="linked-items">
                <a href="#" class="linked-item">Training Video Series</a>
                <a href="#" class="linked-item">Photo Shoot Images</a>
                <a href="#" class="linked-item">Social Media Content</a>
            </div>
        </div>
        
        <div class="detail-section">
            <div class="detail-section-title">Audit Log</div>
            <div class="audit-log">
                ${auditLog.map(log => `
                    <div class="audit-log-item">
                        <div class="audit-log-icon ${log.type}">!</div>
                        <div class="audit-log-content">
                            <div class="audit-log-action">${log.action}</div>
                            <div class="audit-log-details">${log.details}</div>
                            <div class="audit-log-timestamp">${formatDate(log.timestamp)}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function setupEventListeners() {
    // Role switching
    roleSwitch.addEventListener('click', toggleRole);
    
    // Tab switching
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', function() {
            const tabName = this.dataset.tab;
            switchTab(tabName);
        });
    });
    
    // Modal handling
    closeFanGuardModal.addEventListener('click', closeModal);
    fanGuardModal.addEventListener('click', function(e) {
        if (e.target === fanGuardModal) {
            closeModal();
        }
    });
    
    // Fan Guard Fund button
    const fanGuardFundBtn = document.getElementById('fanGuardFundBtn');
    if (fanGuardFundBtn) {
        fanGuardFundBtn.addEventListener('click', openModal);
    }
    
    // Timeline filtering
    document.querySelectorAll('.filter-select').forEach(select => {
        select.addEventListener('change', function() {
            filterTimeline();
        });
    });
    
    // Detail drawer
    detailDrawerClose.addEventListener('click', closeDetailDrawer);
    detailDrawerOverlay.addEventListener('click', closeDetailDrawer);
}

function toggleRole() {
    currentRole = currentRole === 'athlete' ? 'vendor' : 'athlete';
    updateRoleDisplay();
    updateTabDisplay();
    populateDashboard();
}

function updateRoleDisplay() {
    userRole.textContent = currentRole === 'athlete' ? 'Athlete' : 'Vendor';
    
    if (currentRole === 'athlete') {
        athleteDashboard.style.display = 'block';
        vendorDashboard.style.display = 'none';
        athleteTabs.style.display = 'flex';
        vendorTabs.style.display = 'none';
    } else {
        athleteDashboard.style.display = 'none';
        vendorDashboard.style.display = 'block';
        athleteTabs.style.display = 'none';
        vendorTabs.style.display = 'flex';
    }
}

function updateTabDisplay() {
    // Reset all tabs
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Set active tab based on role
    if (currentRole === 'athlete') {
        const activeTab = document.querySelector(`[data-tab="${currentTab}"]`);
        if (activeTab) {
            activeTab.classList.add('active');
        }
    } else {
        const vendorActiveTab = document.querySelector('.vendor-tabs .tab.active');
        if (vendorActiveTab) {
            vendorActiveTab.classList.add('active');
        }
    }
}

function switchTab(tabName) {
    currentTab = tabName;
    
    // Hide all widgets
    document.querySelectorAll('.widget').forEach(widget => {
        widget.style.display = 'none';
    });
    
    // Show selected widget
    const widgetId = tabName + 'Widget';
    const widget = document.getElementById(widgetId);
    if (widget) {
        widget.style.display = 'block';
    }
    
    // Update active tab
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    const activeTab = document.querySelector(`[data-tab="${tabName}"]`);
    if (activeTab) {
        activeTab.classList.add('active');
    }
    
    // Populate widget data
    populateWidget(tabName);
}

function populateDashboard() {
    if (currentRole === 'athlete') {
        populateWidget(currentTab);
    } else {
        populateWidget('vendor-requests');
    }
}

function populateWidget(widgetName) {
    switch (widgetName) {
        case 'timeline':
            populateTimeline();
            break;
        case 'assets':
            populateAssets();
            break;
        case 'contracts':
            populateContracts();
            break;
        case 'approvals':
            populateApprovals();
            break;
        case 'requests':
            populateRequests();
            break;
        case 'vendor-requests':
            populateVendorRequests();
            break;
        case 'licensed-assets':
            populateLicensedAssets();
            break;
        case 'vendor-library':
            populateVendorLibrary();
            break;
    }
}

function populateTimeline() {
    const tbody = document.getElementById('timelineTableBody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    mockData.athlete.timeline.forEach(item => {
        const row = document.createElement('tr');
        const actionButtons = item.actions.map(action => {
            const actionClass = action.toLowerCase().replace(' ', '-');
            return `<button class="action-btn ${actionClass}" data-action="${action}" data-item="${item.title}">${action}</button>`;
        }).join('');
        
        row.innerHTML = `
            <td>${formatDate(item.date)}</td>
            <td><span class="status-${item.type.toLowerCase()}">${item.type}</span></td>
            <td><strong>${item.title}</strong></td>
            <td><span class="status-${item.status.toLowerCase()}">${item.status}</span></td>
            <td><span class="text-gray-600">${item.linkedItems}</span></td>
            <td>
                <div class="action-buttons">${actionButtons}</div>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function filterTimeline() {
    const typeFilter = document.querySelector('.filter-select[data-filter="type"]')?.value || 'All Types';
    const statusFilter = document.querySelector('.filter-select[data-filter="status"]')?.value || 'All Status';
    
    const tbody = document.getElementById('timelineTableBody');
    if (!tbody) return;
    
    const rows = tbody.querySelectorAll('tr');
    
    rows.forEach(row => {
        const typeCell = row.querySelector('td:nth-child(2) span');
        const statusCell = row.querySelector('td:nth-child(4) span');
        
        const itemType = typeCell?.textContent || '';
        const itemStatus = statusCell?.textContent || '';
        
        const typeMatch = typeFilter === 'All Types' || itemType === typeFilter;
        const statusMatch = statusFilter === 'All Status' || itemStatus === statusFilter;
        
        if (typeMatch && statusMatch) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

function populateAssets() {
    const tbody = document.getElementById('assetsTableBody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    if (mockData.athlete.assets.length === 0) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td colspan="5">
                <div class="empty-state">
                    <div class="empty-state-icon">📁</div>
                    <div class="empty-state-title">No Assets Found</div>
                    <div class="empty-state-message">Start building your IP locker by uploading your first asset and tagging its rights.</div>
                    <a href="#" class="empty-state-cta">
                        <i class="fas fa-upload"></i>
                        Upload Your First Asset
                    </a>
                </div>
            </td>
        `;
        tbody.appendChild(row);
        return;
    }
    
    mockData.athlete.assets.forEach(asset => {
        const row = document.createElement('tr');
        const guardianStatusClass = asset.guardianStatus.toLowerCase().replace(' ', '-');
        
        row.innerHTML = `
            <td><strong>${asset.name}</strong></td>
            <td><span class="status-${asset.rights.toLowerCase()}">${asset.rights}</span></td>
            <td><span class="text-gray-600">${asset.expiration}</span></td>
            <td><span class="status-${guardianStatusClass}">${asset.guardianStatus}</span></td>
            <td><span class="text-gray-600">${asset.linkedContracts} contracts</span></td>
        `;
        tbody.appendChild(row);
    });
}

function populateContracts() {
    const tbody = document.getElementById('contractsTableBody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    if (mockData.athlete.contracts.length === 0) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td colspan="6">
                <div class="empty-state">
                    <div class="empty-state-icon">📄</div>
                    <div class="empty-state-title">No Contracts Found</div>
                    <div class="empty-state-message">Upload your first contract to start managing your partnerships and agreements.</div>
                    <a href="#" class="empty-state-cta">
                        <i class="fas fa-upload"></i>
                        Upload Your First Contract
                    </a>
                </div>
            </td>
        `;
        tbody.appendChild(row);
        return;
    }
    
    mockData.athlete.contracts.forEach(contract => {
        const row = document.createElement('tr');
        const metadataBadge = contract.nextAction.includes('Pending Metadata') 
            ? '<span class="metadata-badge pending-metadata">Pending Metadata</span>'
            : '<span class="metadata-badge complete">Complete</span>';
        
        const nextActionClass = contract.nextAction.includes('Renew by') 
            ? 'next-action warning'
            : contract.nextAction.includes('Link Assets')
            ? 'next-action urgent'
            : 'next-action';
        
        row.innerHTML = `
            <td>
                <strong>${contract.name}</strong>
                ${metadataBadge}
            </td>
            <td><span class="text-gray-600">${contract.partner}</span></td>
            <td><span class="text-gray-600">${formatDate(contract.termStart)} - ${formatDate(contract.termEnd)}</span></td>
            <td>
                <div class="contract-status">
                    <span class="status-indicator ${contract.status.toLowerCase()}"></span>
                    <span class="status-${contract.status.toLowerCase()}">${contract.status}</span>
                </div>
            </td>
            <td><span class="text-gray-600">${contract.linkedAssets} assets</span></td>
            <td><span class="${nextActionClass}">${contract.nextAction}</span></td>
        `;
        tbody.appendChild(row);
    });
}

function populateApprovals() {
    const container = document.getElementById('approvalsCards');
    if (!container) return;
    
    container.innerHTML = '';
    
    if (mockData.athlete.approvals.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">👥</div>
                <div class="empty-state-title">No Guardian Approvals Required</div>
                <div class="empty-state-message">All your assets and contracts are properly approved and ready for use.</div>
            </div>
        `;
        return;
    }
    
    mockData.athlete.approvals.forEach(approval => {
        const card = document.createElement('div');
        const assetOrContract = approval.asset || approval.contract;
        const statusClass = approval.status.toLowerCase();
        const isExpired = new Date(approval.expires) < new Date();
        
        const actionButtons = approval.status === 'Blocked' 
            ? '<button class="approval-action-btn resend">Resend Approval</button><button class="approval-action-btn edit">Edit Rights</button>'
            : approval.status === 'Pending'
            ? '<button class="approval-action-btn resend">Resend Approval</button>'
            : '<button class="approval-action-btn edit" disabled>Edit Rights</button>';
        
        card.className = `approval-card ${statusClass} ${isExpired ? 'expired' : ''}`;
        
        card.innerHTML = `
            <div class="approval-card-header">
                <div>
                    <div class="approval-card-title">${assetOrContract}</div>
                    <div class="approval-card-type">${approval.asset ? 'Asset' : 'Contract'}</div>
                </div>
                <div class="approval-card-status status-${statusClass}">${approval.status}</div>
            </div>
            <div class="approval-card-details">
                <div class="approval-detail-item">
                    <div class="approval-detail-label">Submitted</div>
                    <div class="approval-detail-value">${formatDate(approval.submitted)}</div>
                </div>
                <div class="approval-detail-item">
                    <div class="approval-detail-label">Expires</div>
                    <div class="approval-detail-value">${formatDate(approval.expires)}</div>
                </div>
            </div>
            <div class="approval-card-actions">
                ${actionButtons}
            </div>
        `;
        
        container.appendChild(card);
    });
}

function populateRequests() {
    const tbody = document.getElementById('requestsTableBody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    if (mockData.athlete.requests.length === 0) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td colspan="6">
                <div class="empty-state">
                    <div class="empty-state-icon">📬</div>
                    <div class="empty-state-title">No Requests Received</div>
                    <div class="empty-state-message">Vendors will appear here when they request access to your assets.</div>
                </div>
            </td>
        `;
        tbody.appendChild(row);
        return;
    }
    
    mockData.athlete.requests.forEach(request => {
        const row = document.createElement('tr');
        const dueDate = new Date(request.due);
        const today = new Date();
        const daysUntilDue = Math.ceil((dueDate - today) / (1000 * 60 * 60 * 24));
        
        let urgencyClass = 'normal';
        let urgencyText = 'Normal';
        
        if (daysUntilDue <= 1) {
            urgencyClass = 'urgent';
            urgencyText = 'Urgent';
        } else if (daysUntilDue <= 3) {
            urgencyClass = 'warning';
            urgencyText = 'Due Soon';
        }
        
        const actionButtons = request.actions.map(action => {
            const actionClass = action.toLowerCase().replace(' ', '-');
            return `<button class="request-action-btn ${actionClass}" data-action="${action}" data-vendor="${request.vendor}">${action}</button>`;
        }).join('');
        
        row.innerHTML = `
            <td>
                <strong>${request.vendor}</strong>
                <span class="request-urgency ${urgencyClass}">${urgencyText}</span>
            </td>
            <td><strong>${request.assetRequested}</strong></td>
            <td><span class="text-gray-600">${request.rightsScope}</span></td>
            <td><span class="text-gray-600">${request.duration}</span></td>
            <td><span class="text-gray-600">${formatDate(request.due)}</span></td>
            <td>
                <div class="action-buttons">${actionButtons}</div>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function populateVendorRequests() {
    const tbody = document.getElementById('vendorRequestsTableBody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    if (mockData.vendor.requests.length === 0) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td colspan="7">
                <div class="empty-state">
                    <div class="empty-state-icon">🔍</div>
                    <div class="empty-state-title">No Requests Found</div>
                    <div class="empty-state-message">Start by finding athletes and requesting access to their assets.</div>
                    <a href="#" class="empty-state-cta">
                        <i class="fas fa-search"></i>
                        Find Athlete & Request Asset
                    </a>
                </div>
            </td>
        `;
        tbody.appendChild(row);
        return;
    }
    
    mockData.vendor.requests.forEach(request => {
        const row = document.createElement('tr');
        
        let slaClass = 'normal';
        let slaText = request.slaCountdown;
        
        if (request.slaCountdown !== 'N/A') {
            const days = parseInt(request.slaCountdown.split(' ')[0]);
            if (days <= 1) {
                slaClass = 'urgent';
            } else if (days <= 3) {
                slaClass = 'warning';
            }
        }
        
        const actionButtons = request.actions.map(action => {
            const actionClass = action.toLowerCase().replace(' ', '-');
            return `<button class="vendor-action-btn ${actionClass}" data-action="${action}" data-request="${request.asset}">${action}</button>`;
        }).join('');
        
        row.innerHTML = `
            <td><strong>${request.athlete}</strong></td>
            <td><strong>${request.asset}</strong></td>
            <td><span class="text-gray-600">${request.requestedRights}</span></td>
            <td><span class="text-gray-600">${request.duration}</span></td>
            <td><span class="status-${request.status.toLowerCase()}">${request.status}</span></td>
            <td>
                <span class="sla-countdown ${slaClass}">${slaText}</span>
            </td>
            <td>
                <div class="action-buttons">${actionButtons}</div>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function populateLicensedAssets() {
    const tbody = document.getElementById('licensedAssetsTableBody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    if (mockData.vendor.licensedAssets.length === 0) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td colspan="6">
                <div class="empty-state">
                    <div class="empty-state-icon">📄</div>
                    <div class="empty-state-title">No Licensed Assets</div>
                    <div class="empty-state-message">Your approved asset requests will appear here as licensed assets.</div>
                </div>
            </td>
        `;
        tbody.appendChild(row);
        return;
    }
    
    mockData.vendor.licensedAssets.forEach(asset => {
        const row = document.createElement('tr');
        const watermarkStatus = asset.watermark ? 'Yes' : 'No';
        const complianceClass = asset.complianceStatus.toLowerCase();
        
        const actionButtons = asset.complianceStatus === 'Expired'
            ? '<button class="vendor-action-btn renew-license">Re-request Rights</button>'
            : '<button class="vendor-action-btn renew-license">Renew License</button><button class="vendor-action-btn replace-creative">Replace Creative</button>';
        
        row.innerHTML = `
            <td><strong>${asset.asset}</strong></td>
            <td><span class="text-gray-600">${asset.athlete}</span></td>
            <td><span class="status-${asset.licenseType.toLowerCase()}">${asset.licenseType}</span></td>
            <td><span class="text-gray-600">${formatDate(asset.start)} - ${formatDate(asset.end)}</span></td>
            <td><span class="text-gray-600">${watermarkStatus}</span></td>
            <td>
                <span class="compliance-status ${complianceClass}">${asset.complianceStatus}</span>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function populateVendorLibrary() {
    const tbody = document.getElementById('vendorLibraryTableBody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    if (mockData.vendor.vendorLibrary.length === 0) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td colspan="5">
                <div class="empty-state">
                    <div class="empty-state-icon">🏢</div>
                    <div class="empty-state-title">No Vendor Assets</div>
                    <div class="empty-state-message">Upload your company assets and verify ownership to use in campaigns.</div>
                    <a href="#" class="empty-state-cta">
                        <i class="fas fa-upload"></i>
                        Upload Your First Asset
                    </a>
                </div>
            </td>
        `;
        tbody.appendChild(row);
        return;
    }
    
    mockData.vendor.vendorLibrary.forEach(item => {
        const row = document.createElement('tr');
        const ownershipClass = item.ownershipVerified.toLowerCase();
        
        row.innerHTML = `
            <td><strong>${item.logo}</strong></td>
            <td><span class="text-gray-600">${item.type}</span></td>
            <td><span class="status-${ownershipClass}">${item.ownershipVerified}</span></td>
            <td><span class="text-gray-600">${item.approvedUses}</span></td>
            <td><span class="text-gray-600">${item.linkedCampaigns} campaigns</span></td>
        `;
        tbody.appendChild(row);
    });
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

function openModal() {
    fanGuardModal.classList.add('active');
}

function closeModal() {
    fanGuardModal.classList.remove('active');
}

// Utility functions for button actions
function handleAction(action, context) {
    console.log(`Action: ${action}`, context);
    
    switch (action) {
        case 'View':
            // Already handled by detail drawer
            break;
        case 'Renew':
            handleRenewalWorkflow(context);
            break;
        case 'Approve':
            handleApprovalWorkflow(context, true);
            break;
        case 'Deny':
            handleApprovalWorkflow(context, false);
            break;
        case 'Edit Request':
            handleEditRequestWorkflow(context);
            break;
        case 'Withdraw':
            handleWithdrawWorkflow(context);
            break;
        case 'Link':
            handleLinkingWorkflow(context);
            break;
        case 'Share':
            handleSharingWorkflow(context);
            break;
        case 'Resend':
            handleResendWorkflow(context);
            break;
        default:
            console.log('Unknown action:', action);
    }
}

function handleRenewalWorkflow(context) {
    const row = context.row;
    if (row) {
        const titleCell = row.querySelector('td:nth-child(3) strong');
        const title = titleCell ? titleCell.textContent : 'Unknown Contract';
        
        // Show renewal modal or redirect to renewal flow
        showNotification('success', `Starting renewal process for ${title}`);
        
        // In a real app, this would open a renewal form or redirect
        setTimeout(() => {
            showNotification('info', 'Renewal form would open here');
        }, 1000);
    }
}

function handleApprovalWorkflow(context, approved) {
    const row = context.row;
    if (row) {
        const vendorCell = row.querySelector('td:nth-child(1) strong');
        const assetCell = row.querySelector('td:nth-child(2) strong');
        const vendor = vendorCell ? vendorCell.textContent : 'Unknown Vendor';
        const asset = assetCell ? assetCell.textContent : 'Unknown Asset';
        
        const action = approved ? 'approved' : 'denied';
        showNotification('success', `${vendor}'s request for ${asset} has been ${action}`);
        
        // Update the row status
        const statusCell = row.querySelector('td:nth-child(5) span');
        if (statusCell) {
            statusCell.textContent = approved ? 'Approved' : 'Denied';
            statusCell.className = `status-${approved ? 'approved' : 'denied'}`;
        }
        
        // Remove urgency indicator
        const urgencySpan = row.querySelector('.request-urgency');
        if (urgencySpan) {
            urgencySpan.remove();
        }
    }
}

function handleEditRequestWorkflow(context) {
    const row = context.row;
    if (row) {
        const assetCell = row.querySelector('td:nth-child(2) strong');
        const asset = assetCell ? assetCell.textContent : 'Unknown Asset';
        
        showNotification('info', `Opening edit form for ${asset} request`);
        
        // In a real app, this would open an edit form
        setTimeout(() => {
            showNotification('success', 'Request updated successfully');
        }, 1500);
    }
}

function handleWithdrawWorkflow(context) {
    const row = context.row;
    if (row) {
        const assetCell = row.querySelector('td:nth-child(2) strong');
        const asset = assetCell ? assetCell.textContent : 'Unknown Asset';
        
        if (confirm(`Are you sure you want to withdraw the request for ${asset}?`)) {
            showNotification('success', `Request for ${asset} has been withdrawn`);
            
            // Remove the row
            row.style.opacity = '0.5';
            setTimeout(() => {
                row.remove();
            }, 500);
        }
    }
}

function handleLinkingWorkflow(context) {
    const row = context.row;
    if (row) {
        const titleCell = row.querySelector('td:nth-child(3) strong');
        const title = titleCell ? titleCell.textContent : 'Unknown Item';
        
        showNotification('info', `Opening linking interface for ${title}`);
        
        // In a real app, this would open a linking interface
        setTimeout(() => {
            showNotification('success', 'Items linked successfully');
        }, 1500);
    }
}

function handleSharingWorkflow(context) {
    const row = context.row;
    if (row) {
        const titleCell = row.querySelector('td:nth-child(3) strong');
        const title = titleCell ? titleCell.textContent : 'Unknown Item';
        
        showNotification('info', `Preparing ${title} for sharing`);
        
        // In a real app, this would open sharing options
        setTimeout(() => {
            showNotification('success', 'Share link generated');
        }, 1000);
    }
}

function handleResendWorkflow(context) {
    const card = context.card;
    if (card) {
        const titleCell = card.querySelector('.approval-card-title');
        const title = titleCell ? titleCell.textContent : 'Unknown Item';
        
        showNotification('info', `Resending approval request for ${title}`);
        
        // Update the card status
        const statusCell = card.querySelector('.approval-card-status');
        if (statusCell) {
            statusCell.textContent = 'Pending';
            statusCell.className = 'approval-card-status status-pending';
        }
        
        setTimeout(() => {
            showNotification('success', 'Approval request sent successfully');
        }, 1500);
    }
}

function showNotification(type, message) {
    // Create a temporary notification
    const notification = document.createElement('div');
    notification.className = `alert ${type}`;
    notification.style.position = 'fixed';
    notification.style.top = '20px';
    notification.style.left = '50%';
    notification.style.transform = 'translateX(-50%)';
    notification.style.zIndex = '3000';
    notification.style.maxWidth = '400px';
    notification.innerHTML = `
        <div class="alert-header">
            <div class="alert-title">
                <span class="alert-icon ${type}">!</span>
                ${type.charAt(0).toUpperCase() + type.slice(1)}
            </div>
            <button class="alert-close" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        </div>
        <div class="alert-message">${message}</div>
    `;
    
    document.body.appendChild(notification);
    
    // Auto-remove after 3 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 3000);
}

// Add click handlers for action buttons
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn') || e.target.classList.contains('action-btn')) {
        const action = e.target.textContent.trim();
        const row = e.target.closest('tr');
        const card = e.target.closest('.approval-card');
        
        if (row || card) {
            handleAction(action, { row, card });
        }
    }
    
    // Handle View action for detail drawer
    if (e.target.classList.contains('action-btn') && e.target.textContent.trim() === 'View') {
        const row = e.target.closest('tr');
        if (row) {
            const titleCell = row.querySelector('td:nth-child(3) strong');
            if (titleCell) {
                const title = titleCell.textContent;
                // Determine if it's an asset or contract based on context
                const typeCell = row.querySelector('td:nth-child(2) span');
                const type = typeCell ? typeCell.textContent : 'Asset';
                
                if (type === 'Contract') {
                    const contract = mockData.athlete.contracts.find(c => c.name === title);
                    if (contract) {
                        openDetailDrawer('Contract', contract);
                    }
                } else {
                    const asset = mockData.athlete.assets.find(a => a.name === title);
                    if (asset) {
                        openDetailDrawer('Asset', asset);
                    }
                }
            }
        }
    }
});

// Initialize with athlete dashboard
switchTab('timeline');

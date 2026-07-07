// Speech synthesis function
        let currentSpeech = null;
        function speakElement(elementName) {
            // Cancel any ongoing speech
            if (window.speechSynthesis.speaking) {
                window.speechSynthesis.cancel();
            }

            const pronunciation = elementPronunciations[elementName];
            const textToSpeak = pronunciation ? pronunciation.speak : elementName;

            const utterance = new SpeechSynthesisUtterance(textToSpeak);
            utterance.lang = 'en-US';
            utterance.rate = 0.85;
            utterance.pitch = 1;

            const speakBtn = document.getElementById('speakBtn');
            if (speakBtn) {
                speakBtn.classList.add('speaking');
                utterance.onend = () => speakBtn.classList.remove('speaking');
                utterance.onerror = () => speakBtn.classList.remove('speaking');
            }

            window.speechSynthesis.speak(utterance);
        }

        // DOM elements
        const periodicTable = document.getElementById('periodicTable');
        const modalOverlay = document.getElementById('modalOverlay');
        const modalClose = document.getElementById('modalClose');
        const searchInput = document.getElementById('searchInput');
        const filterBtns = document.querySelectorAll('.filter-btn');
        const legendItems = document.querySelectorAll('.legend-item');
        const loading = document.getElementById('loading');
        const particles = document.getElementById('particles');

        // Create particles
        function createParticles() {
            for (let i = 0; i < 30; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 15 + 's';
                particle.style.animationDuration = (15 + Math.random() * 10) + 's';
                const colors = ['#00f5ff', '#b829ff', '#ff29a8'];
                particle.style.background = colors[Math.floor(Math.random() * colors.length)];
                particles.appendChild(particle);
            }
        }

        // Build periodic table
        function buildPeriodicTable() {
            // Create grid with 11 rows (1 for group headers + 10 for elements)
            periodicTable.style.gridTemplateRows = '30px repeat(10, minmax(45px, 1fr))';

            // Group labels mapping (column number to group notation)
            // Columns 8-10 share group VIIIB, so we'll span it across 3 columns
            const groupLabels = {
                1: 'IA', 2: 'IIA', 3: 'IIIB', 4: 'IVB', 5: 'VB', 6: 'VIB', 7: 'VIIB',
                8: 'VIIIB', // This will span columns 8-10
                11: 'IB', 12: 'IIB',
                13: 'IIIA', 14: 'IVA', 15: 'VA', 16: 'VIA', 17: 'VIIA', 18: 'VIIIA'
            };

            // Add empty corner cell (top-left)
            const cornerCell = document.createElement('div');
            cornerCell.className = 'empty';
            cornerCell.style.gridRow = 1;
            cornerCell.style.gridColumn = 1;
            periodicTable.appendChild(cornerCell);

            // Add group labels (row 1, columns 2-19)
            for (let col = 1; col <= 18; col++) {
                // Skip columns 9 and 10 since VIIIB spans from column 8
                if (col === 9 || col === 10) continue;

                const groupLabel = document.createElement('div');
                groupLabel.className = 'group-label';
                groupLabel.textContent = groupLabels[col];
                groupLabel.style.gridRow = 1;

                if (col === 8) {
                    // VIIIB spans 3 columns (8, 9, 10)
                    groupLabel.style.gridColumn = '9 / 12';
                } else {
                    groupLabel.style.gridColumn = col + 1;
                }
                periodicTable.appendChild(groupLabel);
            }

            // Period labels for each row (only rows 1-7 have period labels)
            const periodForRow = {
                1: '1', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6', 7: '7'
            };

            // Add period labels and elements
            for (let row = 1; row <= 10; row++) {
                // Add period label only for rows 1-7 (column 1)
                if (periodForRow[row]) {
                    const periodLabel = document.createElement('div');
                    periodLabel.className = 'period-label';
                    periodLabel.textContent = periodForRow[row];
                    periodLabel.style.gridRow = row + 1;
                    periodLabel.style.gridColumn = 1;
                    periodicTable.appendChild(periodLabel);
                }

                // Add element cells (columns 2-19)
                for (let col = 1; col <= 18; col++) {
                    const position = gridPositions.find(p => p.row === row && p.col === col);

                    if (position) {
                        const element = elements.find(e => e.number === position.number);
                        if (element) {
                            const el = createElementCard(element);
                            el.style.gridRow = row + 1;
                            el.style.gridColumn = col + 1;
                            periodicTable.appendChild(el);
                        }
                    } else {
                        // Empty cell
                        const empty = document.createElement('div');
                        empty.className = 'empty';
                        empty.style.gridRow = row + 1;
                        empty.style.gridColumn = col + 1;
                        periodicTable.appendChild(empty);
                    }
                }
            }

            // Add series labels
            const lantLabel = document.createElement('div');
            lantLabel.className = 'series-label';
            lantLabel.textContent = 'Lantanit';
            lantLabel.style.gridRow = 10;
            lantLabel.style.gridColumn = '2 / 5';
            periodicTable.appendChild(lantLabel);

            const actLabel = document.createElement('div');
            actLabel.className = 'series-label';
            actLabel.textContent = 'Actinit';
            actLabel.style.gridRow = 11;
            actLabel.style.gridColumn = '2 / 5';
            periodicTable.appendChild(actLabel);
        }

        // Create element card
        function createElementCard(element) {
            const card = document.createElement('div');
            card.className = `element ${element.category}`;
            card.dataset.number = element.number;
            card.innerHTML = `
                <span class="number">${element.number}</span>
                <span class="symbol">${element.symbol}</span>
                <span class="name">${element.name}</span>
                <span class="mass">${element.mass}</span>
            `;

            card.addEventListener('click', () => showModal(element));

            // Add 3D tilt effect
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / 5;
                const rotateY = (centerX - x) / 5;

                card.style.transform = `translateZ(30px) scale(1.15) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
            });

            return card;
        }

        // Convert group number to A/B notation
        function getGroupNotation(group) {
            if (!group) return 'N/A';

            const groupMap = {
                1: { roman: 'I', type: 'A' },
                2: { roman: 'II', type: 'A' },
                3: { roman: 'III', type: 'B' },
                4: { roman: 'IV', type: 'B' },
                5: { roman: 'V', type: 'B' },
                6: { roman: 'VI', type: 'B' },
                7: { roman: 'VII', type: 'B' },
                8: { roman: 'VIII', type: 'B' },
                9: { roman: 'VIII', type: 'B' },
                10: { roman: 'VIII', type: 'B' },
                11: { roman: 'I', type: 'B' },
                12: { roman: 'II', type: 'B' },
                13: { roman: 'III', type: 'A' },
                14: { roman: 'IV', type: 'A' },
                15: { roman: 'V', type: 'A' },
                16: { roman: 'VI', type: 'A' },
                17: { roman: 'VII', type: 'A' },
                18: { roman: 'VIII', type: 'A' }
            };

            const info = groupMap[group];
            if (info) {
                return `${info.roman}${info.type}`;
            }
            return group.toString();
        }

        // Show modal
        function showModal(element) {
            document.getElementById('modalNumber').textContent = element.number;
            document.getElementById('modalSymbolText').textContent = element.symbol;
            document.getElementById('modalName').textContent = element.name;

            // Set IPA pronunciation
            const pronunciation = elementPronunciations[element.name];
            const ipaText = document.getElementById('modalIPA');
            if (ipaText && pronunciation) {
                ipaText.textContent = pronunciation.ipa;
            } else if (ipaText) {
                ipaText.textContent = '';
            }

            // Setup speak button
            const speakBtn = document.getElementById('speakBtn');
            if (speakBtn) {
                speakBtn.onclick = () => speakElement(element.name);
            }

            document.getElementById('modalCategory').textContent = categoryNames[element.category];
            document.getElementById('modalMass').textContent = element.mass + ' u';
            document.getElementById('modalElectronegativity').textContent = element.electronegativity || 'N/A';
            document.getElementById('modalPeriod').textContent = element.period;
            document.getElementById('modalGroup').textContent = getGroupNotation(element.group);
            document.getElementById('modalState').textContent = element.state;
            document.getElementById('modalYear').textContent = element.year;
            document.getElementById('modalConfig').textContent = element.config;
            document.getElementById('modalFact').textContent = element.fact;

            const modalSymbol = document.getElementById('modalSymbol');
            modalSymbol.className = `modal-symbol ${element.category}`;
            modalSymbol.style.setProperty('--element-color', `var(--${element.category})`);

            const modal = document.getElementById('elementModal');
            modal.style.borderColor = `var(--${element.category})`;

            // Create 3D atom model
            createAtomModel(element);

            modalOverlay.classList.add('active');
        }

        // Three.js 3D atom model variables
        let atomScene, atomCamera, atomRenderer, atomAnimationId;
        let nucleusGroup, electronGroups = [];

        // Create 3D atom model with Three.js
        function createAtomModel(element) {
            const container = document.getElementById('atomModel');
            container.innerHTML = '';

            // Clean up previous animation
            if (atomAnimationId) {
                cancelAnimationFrame(atomAnimationId);
            }
            if (atomRenderer) {
                atomRenderer.dispose();
            }

            // Setup scene
            atomScene = new THREE.Scene();

            // Setup camera
            atomCamera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
            atomCamera.position.z = 5;

            // Setup renderer
            atomRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
            atomRenderer.setSize(150, 150);
            atomRenderer.setPixelRatio(window.devicePixelRatio);
            container.appendChild(atomRenderer.domElement);

            // Lighting
            const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
            atomScene.add(ambientLight);

            const pointLight = new THREE.PointLight(0xffffff, 1, 100);
            pointLight.position.set(5, 5, 5);
            atomScene.add(pointLight);

            const pointLight2 = new THREE.PointLight(0x00f5ff, 0.5, 100);
            pointLight2.position.set(-5, -5, 5);
            atomScene.add(pointLight2);

            // Create nucleus group
            nucleusGroup = new THREE.Group();

            // Calculate protons and neutrons
            const protons = element.number;
            const neutrons = Math.round(element.mass) - protons;
            const totalNucleons = protons + neutrons;

            // Nucleus size based on nucleon count
            const nucleusRadius = Math.min(0.4 + totalNucleons * 0.008, 0.8);
            const nucleonSize = Math.max(0.08, nucleusRadius / (Math.cbrt(totalNucleons) * 1.2));

            // Create protons (red spheres)
            const protonGeometry = new THREE.SphereGeometry(nucleonSize, 16, 16);
            const protonMaterial = new THREE.MeshPhongMaterial({
                color: 0xff4444,
                emissive: 0x441111,
                shininess: 80,
                specular: 0xffaaaa
            });

            // Create neutrons (blue/gray spheres)
            const neutronGeometry = new THREE.SphereGeometry(nucleonSize, 16, 16);
            const neutronMaterial = new THREE.MeshPhongMaterial({
                color: 0x6688cc,
                emissive: 0x112244,
                shininess: 80,
                specular: 0xaaccff
            });

            // Arrange nucleons in nucleus
            const displayNucleons = Math.min(totalNucleons, 40); // Limit for performance
            const protonRatio = protons / totalNucleons;

            for (let i = 0; i < displayNucleons; i++) {
                const isProton = i < Math.round(displayNucleons * protonRatio);
                const nucleon = new THREE.Mesh(
                    isProton ? protonGeometry : neutronGeometry,
                    isProton ? protonMaterial : neutronMaterial
                );

                // Fibonacci sphere distribution for nucleons
                const phi = Math.acos(1 - 2 * (i + 0.5) / displayNucleons);
                const theta = Math.PI * (1 + Math.sqrt(5)) * i;
                const r = nucleusRadius * Math.cbrt((i + 1) / displayNucleons) * 0.9;

                nucleon.position.x = r * Math.sin(phi) * Math.cos(theta);
                nucleon.position.y = r * Math.sin(phi) * Math.sin(theta);
                nucleon.position.z = r * Math.cos(phi);

                // Add slight random offset for natural look
                nucleon.position.x += (Math.random() - 0.5) * nucleonSize * 0.3;
                nucleon.position.y += (Math.random() - 0.5) * nucleonSize * 0.3;
                nucleon.position.z += (Math.random() - 0.5) * nucleonSize * 0.3;

                nucleusGroup.add(nucleon);
            }

            atomScene.add(nucleusGroup);

            // Create electron shells
            electronGroups = [];
            const shells = getElectronShells(element.number);
            const orbitRadii = [1.2, 1.6, 2.0, 2.4, 2.8, 3.2, 3.6];

            // Electron material (cyan glowing spheres)
            const electronGeometry = new THREE.SphereGeometry(0.08, 16, 16);
            const electronMaterial = new THREE.MeshPhongMaterial({
                color: 0x00f5ff,
                emissive: 0x00aaaa,
                shininess: 100,
                specular: 0xffffff
            });

            shells.forEach((electronCount, shellIndex) => {
                if (electronCount > 0 && shellIndex < orbitRadii.length) {
                    const shellGroup = new THREE.Group();
                    const radius = orbitRadii[shellIndex];

                    // Create orbit ring
                    const orbitGeometry = new THREE.RingGeometry(radius - 0.01, radius + 0.01, 64);
                    const orbitMaterial = new THREE.MeshBasicMaterial({
                        color: 0x00f5ff,
                        transparent: true,
                        opacity: 0.2,
                        side: THREE.DoubleSide
                    });
                    const orbitRing = new THREE.Mesh(orbitGeometry, orbitMaterial);
                    orbitRing.rotation.x = Math.PI / 2;
                    shellGroup.add(orbitRing);

                    // Add electrons on this shell
                    const displayElectrons = Math.min(electronCount, 8);
                    for (let i = 0; i < displayElectrons; i++) {
                        const electron = new THREE.Mesh(electronGeometry, electronMaterial);
                        const angle = (2 * Math.PI / displayElectrons) * i;

                        electron.position.x = radius * Math.cos(angle);
                        electron.position.z = radius * Math.sin(angle);
                        electron.position.y = 0;

                        // Store initial angle for animation
                        electron.userData.initialAngle = angle;
                        electron.userData.radius = radius;
                        electron.userData.speed = 1 + shellIndex * 0.3;

                        shellGroup.add(electron);
                    }

                    // Tilt each shell differently
                    shellGroup.rotation.x = (shellIndex * 25 + 60) * Math.PI / 180;
                    shellGroup.rotation.y = (shellIndex * 40) * Math.PI / 180;

                    electronGroups.push(shellGroup);
                    atomScene.add(shellGroup);
                }
            });

            // Animation
            let time = 0;
            function animate() {
                atomAnimationId = requestAnimationFrame(animate);
                time += 0.016;

                // Rotate nucleus slowly
                nucleusGroup.rotation.x += 0.005;
                nucleusGroup.rotation.y += 0.008;

                // Animate electrons orbiting
                electronGroups.forEach((shellGroup, shellIndex) => {
                    shellGroup.children.forEach(child => {
                        if (child.userData.radius) {
                            const speed = child.userData.speed;
                            const angle = child.userData.initialAngle + time * speed;
                            const radius = child.userData.radius;

                            child.position.x = radius * Math.cos(angle);
                            child.position.z = radius * Math.sin(angle);
                        }
                    });

                    // Slight wobble for shells
                    shellGroup.rotation.z = Math.sin(time * 0.5 + shellIndex) * 0.05;
                });

                atomRenderer.render(atomScene, atomCamera);
            }

            animate();
        }

        // Get electron shells from atomic number
        function getElectronShells(atomicNumber) {
            const maxPerShell = [2, 8, 18, 32, 32, 18, 8];
            const shells = [];
            let remaining = atomicNumber;

            for (let i = 0; i < maxPerShell.length && remaining > 0; i++) {
                const electrons = Math.min(remaining, maxPerShell[i]);
                shells.push(electrons);
                remaining -= electrons;
            }

            return shells;
        }

        // Close modal
        function closeModal() {
            modalOverlay.classList.remove('active');
        }

        modalClose.addEventListener('click', closeModal);
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) closeModal();
        });

        // Search functionality
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            document.querySelectorAll('.element').forEach(el => {
                const element = elements.find(elem => elem.number == el.dataset.number);
                const matches = element.symbol.toLowerCase().includes(query) ||
                               element.name.toLowerCase().includes(query) ||
                               element.number.toString().includes(query);
                el.classList.toggle('hidden', !matches && query !== '');
            });
        });

        // Filter functionality
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filter = btn.dataset.filter;
                document.querySelectorAll('.element').forEach(el => {
                    const element = elements.find(elem => elem.number == el.dataset.number);
                    let show = true;

                    if (filter === 'metal') {
                        show = ['alkali', 'alkaline', 'transition', 'post-transition', 'lanthanide', 'actinide'].includes(element.category);
                    } else if (filter === 'nonmetal') {
                        show = ['nonmetal', 'halogen'].includes(element.category);
                    } else if (filter === 'gas') {
                        show = element.category === 'noble';
                    }

                    el.classList.toggle('hidden', !show);
                });
            });
        });

        // Legend click
        legendItems.forEach(item => {
            item.addEventListener('click', () => {
                const category = item.dataset.category;
                document.querySelectorAll('.element').forEach(el => {
                    const element = elements.find(elem => elem.number == el.dataset.number);
                    el.classList.toggle('hidden', element.category !== category);
                });

                // Reset filter buttons
                filterBtns.forEach(b => b.classList.remove('active'));
            });
        });

        // Dark mode detection
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.classList.add('dark');
        }
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
            if (event.matches) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        });

        // Add CSS for electron orbit animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes orbitElectron {
                from { transform: rotate(0deg) translateX(0) rotate(0deg); }
                to { transform: rotate(360deg) translateX(0) rotate(-360deg); }
            }
        `;
        document.head.appendChild(style);

        // Initialize
        window.addEventListener('load', () => {
            createParticles();
            buildPeriodicTable();

            setTimeout(() => {
                loading.classList.add('hidden');
            }, 1500);
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeModal();
        });

        // ==================== COMPARISON MODE ====================
        const comparisonState = {
            currentMode: 'none',
            // Approximate atomic radii in picometers (pm) for main group elements
            atomicRadii: {
                1: 53, 2: 31, 3: 167, 4: 112, 5: 87, 6: 77, 7: 75, 8: 73, 9: 71, 10: 69,
                11: 190, 12: 145, 13: 118, 14: 111, 15: 98, 16: 88, 17: 79, 18: 71,
                19: 243, 20: 194, 21: 184, 22: 176, 23: 171, 24: 166, 25: 161, 26: 156,
                27: 152, 28: 149, 29: 145, 30: 142, 31: 136, 32: 125, 33: 114, 34: 103,
                35: 94, 36: 88, 37: 265, 38: 219, 39: 212, 40: 206, 41: 198, 42: 190,
                43: 183, 44: 178, 45: 173, 46: 169, 47: 165, 48: 161, 49: 156, 50: 145,
                51: 133, 52: 123, 53: 115, 54: 108, 55: 298, 56: 253, 57: 195, 72: 208,
                73: 200, 74: 193, 75: 188, 76: 185, 77: 180, 78: 177, 79: 174, 80: 171,
                81: 156, 82: 154, 83: 143, 84: 135, 85: 127, 86: 120, 87: 348, 88: 283,
                89: 195, 104: 157, 105: 149, 106: 143, 107: 141, 108: 134, 109: 129,
                110: 128, 111: 121, 112: 122, 113: 136, 114: 143, 115: 162, 116: 175,
                117: 165, 118: 157
            }
        };

        // Calculate metallic character (higher = more metallic)
        function getMetallicCharacter(element) {
            // Metallic character increases down a group and decreases across a period
            // Formula: based on position (period increases, group 1 is most metallic)
            const periodFactor = element.period * 15;
            const groupFactor = (18 - element.group) * 5;

            // Bonus for actual metals
            const metalCategories = ['alkali', 'alkaline', 'transition', 'post-transition', 'lanthanide', 'actinide'];
            const isMetalBonus = metalCategories.includes(element.category) ? 20 : 0;

            return Math.min(100, periodFactor + groupFactor + isMetalBonus);
        }

        // Calculate non-metallic character (higher = more non-metallic)
        function getNonMetallicCharacter(element) {
            // Non-metallic character increases up a group and across a period
            const periodFactor = (8 - element.period) * 12;
            const groupFactor = element.group * 4;

            // Bonus for actual non-metals
            const nonMetalCategories = ['nonmetal', 'halogen', 'noble'];
            const isNonMetalBonus = nonMetalCategories.includes(element.category) ? 25 : 0;

            return Math.min(100, periodFactor + groupFactor + isNonMetalBonus);
        }

        // Get atomic radius for an element
        function getAtomicRadius(element) {
            return comparisonState.atomicRadii[element.number] || 150;
        }

        // Apply comparison mode to elements
        function applyComparisonMode(mode) {
            comparisonState.currentMode = mode;
            const elementCards = document.querySelectorAll('.element');
            const legendEl = document.getElementById('comparisonLegend');
            const infoEl = document.getElementById('comparisonInfo');

            // Reset all elements first
            elementCards.forEach(card => {
                card.classList.remove('compare-mode', 'radius-scale', 'electro-mode');
                card.style.transform = '';
                card.style.background = '';
                card.style.boxShadow = '';

                // Remove old indicators
                const oldIndicator = card.querySelector('.radius-indicator');
                if (oldIndicator) oldIndicator.remove();
                const oldPulse = card.querySelector('.electro-pulse');
                if (oldPulse) oldPulse.remove();
                const oldValue = card.querySelector('.compare-value');
                if (oldValue) oldValue.remove();
            });

            legendEl.innerHTML = '';
            legendEl.classList.remove('visible');
            infoEl.innerHTML = '';

            // Hide trend arrows by default
            var trendContainer = document.getElementById('trendArrowsContainer');
            if (trendContainer) trendContainer.classList.remove('visible');

            if (mode === 'none') return;

            legendEl.classList.add('visible');

            switch(mode) {
                case 'radius':
                    applyRadiusComparison(elementCards);
                    legendEl.innerHTML = '<div class="comp-legend-item"><div>' +
                        '<div class="comp-legend-bar" style="background: linear-gradient(90deg, #4ade80 0%, #fbbf24 50%, #ef4444 100%);"></div>' +
                        '<div class="comp-legend-labels"><span>Nhỏ</span><span>Trung bình</span><span>Lớn</span></div>' +
                        '</div></div>';
                    infoEl.innerHTML = '<strong>Quy luật:</strong> Bán kính nguyên tử <strong>tăng</strong> từ phải sang trái trong chu kỳ và <strong>tăng</strong> từ trên xuống dưới trong nhóm.<br>' +
                        '<em>Kích thước ô nguyên tố thể hiện tương đối bán kính của nguyên tử.</em>';
                    break;

                case 'electronegativity':
                    applyElectronegativityComparison(elementCards);
                    legendEl.innerHTML = '<div class="comp-legend-item"><div>' +
                        '<div class="comp-legend-bar" style="background: linear-gradient(90deg, #1e3a5f 0%, #3b82f6 25%, #8b5cf6 50%, #ec4899 75%, #ff0080 100%);"></div>' +
                        '<div class="comp-legend-labels"><span>Thấp (0.7)</span><span>TB</span><span>Cao (4.0)</span></div>' +
                        '</div></div>';
                    infoEl.innerHTML = '<strong>Quy luật:</strong> Độ âm điện <strong>tăng</strong> từ trái sang phải trong chu kỳ và <strong>tăng</strong> từ dưới lên trên trong nhóm.<br>' +
                        '<em>Vùng sáng và pulse thể hiện sức mạnh hút electron.</em>';
                    break;

                case 'metallic-nonmetallic':
                    applyMetallicNonMetallicComparison(elementCards);
                    // Show trend arrows
                    if (trendContainer) trendContainer.classList.add('visible');
                    legendEl.innerHTML = '<div class="comp-legend-item"><div>' +
                        '<div class="comp-legend-bar" style="background: linear-gradient(90deg, #ffd700 0%, #c0c0c0 30%, #6b7280 50%, #a78bfa 70%, #f472b6 100%);"></div>' +
                        '<div class="comp-legend-labels"><span>🔩 Kim loại mạnh</span><span>Trung tính</span><span>🧪 Phi kim mạnh</span></div>' +
                        '</div></div>';
                    infoEl.innerHTML = '<strong>Màu vàng/bạc:</strong> Tính kim loại mạnh | <strong>Màu hồng/tím:</strong> Tính phi kim mạnh | <strong>Màu xám:</strong> Á kim/trung tính';
                    break;
            }
        }

        // Apply radius comparison
        function applyRadiusComparison(elementCards) {
            const maxRadius = 350;
            const minRadius = 30;

            elementCards.forEach(card => {
                const elementNum = parseInt(card.dataset.number);
                const element = elements.find(e => e.number === elementNum);
                if (!element) return;

                card.classList.add('compare-mode', 'radius-scale');

                const radius = getAtomicRadius(element);
                const normalizedRadius = (radius - minRadius) / (maxRadius - minRadius);
                const scale = 0.6 + normalizedRadius * 0.6; // Scale from 0.6 to 1.2

                // Color based on radius
                const hue = (1 - normalizedRadius) * 120; // Green to Red
                const color = `hsl(${hue}, 70%, 50%)`;

                card.style.transform = `scale(${scale})`;
                card.style.background = `linear-gradient(145deg, ${color}88, ${color}44)`;
                card.style.borderColor = color;
                card.style.zIndex = Math.floor(normalizedRadius * 10);

                // Add value indicator
                const valueEl = document.createElement('span');
                valueEl.className = 'compare-value';
                valueEl.textContent = `${radius}pm`;
                card.appendChild(valueEl);
            });
        }

        // Apply electronegativity comparison
        function applyElectronegativityComparison(elementCards) {
            const maxEN = 4.0;
            const minEN = 0.7;

            elementCards.forEach(card => {
                const elementNum = parseInt(card.dataset.number);
                const element = elements.find(e => e.number === elementNum);
                if (!element || element.electronegativity === null) {
                    card.style.opacity = '0.4';
                    return;
                }

                card.classList.add('compare-mode', 'electro-mode');
                card.style.opacity = '1';

                const en = element.electronegativity;
                const normalized = (en - minEN) / (maxEN - minEN);

                // Color gradient from dark blue (low) to bright pink (high)
                let color;
                if (normalized < 0.25) {
                    color = `rgb(30, 58, 95)`;
                } else if (normalized < 0.5) {
                    const t = (normalized - 0.25) * 4;
                    color = `rgb(${30 + t * 89}, ${58 + t * 72}, ${95 + t * 151})`;
                } else if (normalized < 0.75) {
                    const t = (normalized - 0.5) * 4;
                    color = `rgb(${119 + t * 117}, ${130 - t * 38}, ${246 - t * 93})`;
                } else {
                    const t = (normalized - 0.75) * 4;
                    color = `rgb(${236 + t * 19}, ${92 - t * 92}, ${153 - t * 25})`;
                }

                card.style.background = `linear-gradient(145deg, ${color}, ${color}88)`;
                card.style.borderColor = color;

                // Add glow effect based on electronegativity
                const glowIntensity = normalized * 30;
                card.style.boxShadow = `0 0 ${glowIntensity}px ${color}, inset 0 0 ${glowIntensity/2}px rgba(255,255,255,0.2)`;

                // Add pulse effect for high electronegativity
                if (normalized > 0.6) {
                    const pulse = document.createElement('div');
                    pulse.className = 'electro-pulse';
                    pulse.style.width = `${30 + normalized * 40}px`;
                    pulse.style.height = `${30 + normalized * 40}px`;
                    pulse.style.border = `2px solid ${color}`;
                    pulse.style.animationDuration = `${2 - normalized}s`;
                    card.appendChild(pulse);
                }

                // Add value indicator
                const valueEl = document.createElement('span');
                valueEl.className = 'compare-value';
                valueEl.textContent = en.toFixed(2);
                card.appendChild(valueEl);
            });
        }

        // Apply combined metallic and non-metallic character comparison
        function applyMetallicNonMetallicComparison(elementCards) {
            elementCards.forEach(function(card) {
                var elementNum = parseInt(card.dataset.number);
                var element = elements.find(function(e) { return e.number === elementNum; });
                if (!element) return;

                card.classList.add('compare-mode');

                var metallic = getMetallicCharacter(element);
                var nonMetallic = getNonMetallicCharacter(element);

                // Calculate which character is dominant
                var metallicNorm = metallic / 100;
                var nonMetallicNorm = nonMetallic / 100;
                var balance = metallicNorm - nonMetallicNorm; // positive = metallic, negative = non-metallic

                var color;
                var glowColor;
                var label;

                if (balance > 0.3) {
                    // Strong metallic character - Gold/Silver
                    var intensity = Math.min(1, (balance - 0.3) / 0.7);
                    var r = Math.round(192 + intensity * 63);
                    var g = Math.round(169 + intensity * 46);
                    var b = Math.round(100 - intensity * 50);
                    color = 'rgb(' + r + ', ' + g + ', ' + b + ')';
                    glowColor = '#ffd700';
                    label = '🔩 ' + Math.round(metallic) + '%';
                } else if (balance > 0.1) {
                    // Moderate metallic - Silver
                    color = 'rgb(192, 192, 192)';
                    glowColor = '#c0c0c0';
                    label = '🔩 ' + Math.round(metallic) + '%';
                } else if (balance > -0.1) {
                    // Neutral/Metalloid - Gray with slight teal
                    color = 'rgb(107, 142, 148)';
                    glowColor = '#6b8e94';
                    label = '⚖️';
                } else if (balance > -0.3) {
                    // Moderate non-metallic - Purple
                    color = 'rgb(167, 139, 250)';
                    glowColor = '#a78bfa';
                    label = '💎 ' + Math.round(nonMetallic) + '%';
                } else {
                    // Strong non-metallic - Pink
                    var intensity2 = Math.min(1, (-balance - 0.3) / 0.7);
                    var r2 = Math.round(200 + intensity2 * 44);
                    var g2 = Math.round(100 + intensity2 * 14);
                    var b2 = Math.round(180 + intensity2 * 2);
                    color = 'rgb(' + r2 + ', ' + g2 + ', ' + b2 + ')';
                    glowColor = '#f472b6';
                    label = '💎 ' + Math.round(nonMetallic) + '%';
                }

                card.style.background = 'linear-gradient(145deg, ' + color + ', ' + color + '88)';
                card.style.borderColor = color;

                // Add glow effect
                var glowIntensity = Math.abs(balance) * 20 + 5;
                card.style.boxShadow = '0 0 ' + glowIntensity + 'px ' + glowColor;

                // Add metallic sheen for metals
                if (balance > 0.2) {
                    card.style.boxShadow = card.style.boxShadow + ', inset 0 -3px 8px rgba(255,255,255,0.3)';
                }

                // Add value indicator
                var valueEl = document.createElement('span');
                valueEl.className = 'compare-value';
                valueEl.textContent = label;
                valueEl.style.fontSize = '7px';
                card.appendChild(valueEl);
            });
        }

        // Initialize comparison controls
        function initComparisonControls() {
            const compareBtns = document.querySelectorAll('.compare-btn');

            compareBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    const mode = btn.dataset.compare;

                    // Toggle active state
                    compareBtns.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');

                    // Apply comparison mode
                    applyComparisonMode(mode);
                });
            });

            // Set default active
            document.querySelector('.compare-btn[data-compare="none"]')?.classList.add('active');
        }

        // ==================== TAB NAVIGATION ====================
        function initTabs() {
            const tabBtns = document.querySelectorAll('.tab-btn');
            const tabContents = document.querySelectorAll('.tab-content');

            tabBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    const tabId = btn.dataset.tab;

                    tabBtns.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');

                    tabContents.forEach(content => {
                        content.classList.remove('active');
                        if (content.id === tabId + 'Tab') {
                            content.classList.add('active');
                        }
                    });
                });
            });
        }

        // ==================== 3D SPIRAL PERIODIC TABLE ====================
        const spiralApp = {
            scene: null,
            camera: null,
            renderer: null,
            controls: null,
            elementMeshes: [],
            elementLabels: [],
            raycaster: null,
            mouse: null,
            hoveredElement: null,
            selectedCategory: null,
            viewMode: 'helix',
            rotationSpeed: 0.003,
            isInitialized: false,
            animationId: null,
            isDragging: false,
            previousMousePosition: { x: 0, y: 0 },
            cameraDistance: 60,
            targetRotation: { x: 0, y: 0 }
        };

        // Category colors for 3D
        const categoryColors = {
            'alkali': 0xff6b6b,
            'alkaline': 0xffa94d,
            'transition': 0xffd43b,
            'post-transition': 0x69db7c,
            'metalloid': 0x38d9a9,
            'nonmetal': 0x4dabf7,
            'halogen': 0x748ffc,
            'noble': 0xda77f2,
            'lanthanide': 0xf783ac,
            'actinide': 0xe599f7,
            'unknown': 0x868e96
        };

        function initSpiral3D() {
            const container = document.getElementById('spiral3DCanvas');
            if (!container || spiralApp.isInitialized) return;

            // Scene setup
            spiralApp.scene = new THREE.Scene();

            // Add fog for depth effect
            spiralApp.scene.fog = new THREE.FogExp2(0x0a0a1a, 0.008);

            // Camera setup
            const width = container.clientWidth;
            const height = container.clientHeight;
            spiralApp.camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
            spiralApp.camera.position.set(0, 30, spiralApp.cameraDistance);
            spiralApp.camera.lookAt(0, 0, 0);

            // Renderer setup
            spiralApp.renderer = new THREE.WebGLRenderer({
                antialias: true,
                alpha: true
            });
            spiralApp.renderer.setSize(width, height);
            spiralApp.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            spiralApp.renderer.setClearColor(0x0a0a1a, 0);
            container.appendChild(spiralApp.renderer.domElement);

            // Raycaster for mouse interaction
            spiralApp.raycaster = new THREE.Raycaster();
            spiralApp.mouse = new THREE.Vector2();

            // Lighting
            const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
            spiralApp.scene.add(ambientLight);

            const pointLight1 = new THREE.PointLight(0x00f5ff, 1, 200);
            pointLight1.position.set(50, 50, 50);
            spiralApp.scene.add(pointLight1);

            const pointLight2 = new THREE.PointLight(0xb829ff, 0.8, 200);
            pointLight2.position.set(-50, -50, -50);
            spiralApp.scene.add(pointLight2);

            const pointLight3 = new THREE.PointLight(0xff29a8, 0.6, 150);
            pointLight3.position.set(0, -80, 0);
            spiralApp.scene.add(pointLight3);

            // Create elements in spiral
            createSpiralElements();

            // Add starfield background
            createStarfield();

            // Add center glow
            createCenterGlow();

            // Event listeners
            container.addEventListener('mousemove', onSpiralMouseMove);
            container.addEventListener('mousedown', onSpiralMouseDown);
            container.addEventListener('mouseup', onSpiralMouseUp);
            container.addEventListener('mouseleave', onSpiralMouseLeave);
            container.addEventListener('wheel', onSpiralWheel, { passive: false });
            container.addEventListener('click', onSpiralClick);

            // Touch support
            container.addEventListener('touchstart', onSpiralTouchStart, { passive: false });
            container.addEventListener('touchmove', onSpiralTouchMove, { passive: false });
            container.addEventListener('touchend', onSpiralTouchEnd);

            window.addEventListener('resize', onSpiralResize);

            spiralApp.isInitialized = true;
            animateSpiral();
        }

        function createSpiralElements() {
            // Clear existing meshes
            spiralApp.elementMeshes.forEach(mesh => {
                spiralApp.scene.remove(mesh);
            });
            spiralApp.elementMeshes = [];

            const sortedElements = elements.slice().sort(function(a, b) { return a.number - b.number; });

            sortedElements.forEach(function(element, index) {
                var position;

                switch(spiralApp.viewMode) {
                    case 'helix':
                        position = getHelixPosition(element, index);
                        break;
                    case 'tower':
                        position = getTowerPosition(element, index);
                        break;
                    case 'galaxy':
                        position = getGalaxyPosition(element, index);
                        break;
                    default:
                        position = getHelixPosition(element, index);
                }

                // Create element sphere
                const geometry = new THREE.SphereGeometry(1.2, 32, 32);
                const color = categoryColors[element.category] || categoryColors.unknown;

                const material = new THREE.MeshPhongMaterial({
                    color: color,
                    emissive: color,
                    emissiveIntensity: 0.3,
                    shininess: 100,
                    transparent: true,
                    opacity: 0.9
                });

                const mesh = new THREE.Mesh(geometry, material);
                mesh.position.set(position.x, position.y, position.z);
                mesh.userData = { element: element, originalPosition: { x: position.x, y: position.y, z: position.z } };

                spiralApp.scene.add(mesh);
                spiralApp.elementMeshes.push(mesh);

                // Create text sprite for symbol
                const sprite = createTextSprite(element.symbol, color);
                sprite.position.set(position.x, position.y + 1.8, position.z);
                sprite.userData = { element: element };
                spiralApp.scene.add(sprite);
                spiralApp.elementMeshes.push(sprite);

                // Add glow effect
                const glowGeometry = new THREE.SphereGeometry(1.6, 32, 32);
                const glowMaterial = new THREE.MeshBasicMaterial({
                    color: color,
                    transparent: true,
                    opacity: 0.15
                });
                const glowMesh = new THREE.Mesh(glowGeometry, glowMaterial);
                glowMesh.position.copy(mesh.position);
                glowMesh.userData = { isGlow: true, parentMesh: mesh };
                spiralApp.scene.add(glowMesh);
                spiralApp.elementMeshes.push(glowMesh);
            });

            // Add connecting lines for periods
            createConnectionLines();
        }

        function getHelixPosition(element, index) {
            // Enhanced helix - spiral based on atomic number
            const angle = (element.number - 1) * 0.35;
            const radius = 15 + element.period * 3;
            const height = (element.number - 60) * 0.5;

            return {
                x: Math.cos(angle) * radius,
                y: height,
                z: Math.sin(angle) * radius
            };
        }

        function getTowerPosition(element, index) {
            // Tower - stacked by period with group spread
            const periodHeight = -element.period * 8 + 30;
            const groupAngle = (element.group - 1) * (Math.PI * 2 / 18);
            const radius = 12 + (element.period * 1.5);

            return {
                x: Math.cos(groupAngle) * radius,
                y: periodHeight,
                z: Math.sin(groupAngle) * radius
            };
        }

        function getGalaxyPosition(element, index) {
            // Galaxy spiral - like arms of a galaxy
            const arm = element.period % 4;
            const baseAngle = arm * (Math.PI / 2);
            const spiralAngle = baseAngle + (element.number * 0.15);
            const radius = 5 + element.number * 0.35;
            const height = (Math.random() - 0.5) * 10 + (element.period - 4) * 3;

            return {
                x: Math.cos(spiralAngle) * radius,
                y: height,
                z: Math.sin(spiralAngle) * radius
            };
        }

        function createTextSprite(text, color) {
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            canvas.width = 128;
            canvas.height = 64;

            context.fillStyle = 'transparent';
            context.fillRect(0, 0, canvas.width, canvas.height);

            context.font = 'Bold 40px Be Vietnam Pro, Arial, sans-serif';
            context.textAlign = 'center';
            context.textBaseline = 'middle';

            // Text shadow/glow
            context.shadowColor = '#' + color.toString(16).padStart(6, '0');
            context.shadowBlur = 10;
            context.fillStyle = '#ffffff';
            context.fillText(text, 64, 32);

            const texture = new THREE.CanvasTexture(canvas);
            const spriteMaterial = new THREE.SpriteMaterial({
                map: texture,
                transparent: true,
                depthTest: false
            });
            const sprite = new THREE.Sprite(spriteMaterial);
            sprite.scale.set(3, 1.5, 1);

            return sprite;
        }

        function createConnectionLines() {
            // Create subtle connection lines between consecutive elements
            const sortedElements = elements.slice().sort(function(a, b) { return a.number - b.number; });

            const linesMaterial = new THREE.LineBasicMaterial({
                color: 0x00f5ff,
                transparent: true,
                opacity: 0.15
            });

            for (let i = 0; i < sortedElements.length - 1; i++) {
                const mesh1 = spiralApp.elementMeshes.find(m =>
                    m.userData.element && m.userData.element.number === sortedElements[i].number &&
                    m.geometry && m.geometry.type === 'SphereGeometry'
                );
                const mesh2 = spiralApp.elementMeshes.find(m =>
                    m.userData.element && m.userData.element.number === sortedElements[i + 1].number &&
                    m.geometry && m.geometry.type === 'SphereGeometry'
                );

                if (mesh1 && mesh2) {
                    const points = [mesh1.position.clone(), mesh2.position.clone()];
                    const geometry = new THREE.BufferGeometry().setFromPoints(points);
                    const line = new THREE.Line(geometry, linesMaterial);
                    line.userData = { isLine: true };
                    spiralApp.scene.add(line);
                    spiralApp.elementMeshes.push(line);
                }
            }
        }

        function createStarfield() {
            const starsGeometry = new THREE.BufferGeometry();
            const starPositions = [];

            for (let i = 0; i < 2000; i++) {
                const x = (Math.random() - 0.5) * 400;
                const y = (Math.random() - 0.5) * 400;
                const z = (Math.random() - 0.5) * 400;
                starPositions.push(x, y, z);
            }

            starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starPositions, 3));

            const starsMaterial = new THREE.PointsMaterial({
                color: 0xffffff,
                size: 0.5,
                transparent: true,
                opacity: 0.8
            });

            const stars = new THREE.Points(starsGeometry, starsMaterial);
            stars.userData = { isStarfield: true };
            spiralApp.scene.add(stars);
        }

        function createCenterGlow() {
            // Central glowing orb
            const geometry = new THREE.SphereGeometry(3, 32, 32);
            const material = new THREE.MeshBasicMaterial({
                color: 0x00f5ff,
                transparent: true,
                opacity: 0.2
            });
            const glow = new THREE.Mesh(geometry, material);
            glow.userData = { isCenterGlow: true };
            spiralApp.scene.add(glow);

            // Outer glow
            const outerGeometry = new THREE.SphereGeometry(5, 32, 32);
            const outerMaterial = new THREE.MeshBasicMaterial({
                color: 0xb829ff,
                transparent: true,
                opacity: 0.08
            });
            const outerGlow = new THREE.Mesh(outerGeometry, outerMaterial);
            outerGlow.userData = { isCenterGlow: true };
            spiralApp.scene.add(outerGlow);
        }

        function animateSpiral() {
            spiralApp.animationId = requestAnimationFrame(animateSpiral);

            // Auto rotation
            if (!spiralApp.isDragging) {
                spiralApp.targetRotation.y += spiralApp.rotationSpeed;
            }

            // Smooth camera rotation
            const targetX = Math.sin(spiralApp.targetRotation.y) * spiralApp.cameraDistance;
            const targetZ = Math.cos(spiralApp.targetRotation.y) * spiralApp.cameraDistance;
            const targetY = Math.sin(spiralApp.targetRotation.x) * 30 + 30;

            spiralApp.camera.position.x += (targetX - spiralApp.camera.position.x) * 0.05;
            spiralApp.camera.position.z += (targetZ - spiralApp.camera.position.z) * 0.05;
            spiralApp.camera.position.y += (targetY - spiralApp.camera.position.y) * 0.05;
            spiralApp.camera.lookAt(0, 0, 0);

            // Animate elements
            spiralApp.elementMeshes.forEach(mesh => {
                if (mesh.userData && mesh.userData.element && mesh.geometry && mesh.geometry.type === 'SphereGeometry' && !mesh.userData.isGlow) {
                    // Gentle floating animation
                    const time = Date.now() * 0.001;
                    const offset = mesh.userData.element.number * 0.1;
                    mesh.position.y = mesh.userData.originalPosition.y + Math.sin(time + offset) * 0.3;
                }
            });

            // Update raycaster
            spiralApp.raycaster.setFromCamera(spiralApp.mouse, spiralApp.camera);
            const intersects = spiralApp.raycaster.intersectObjects(
                spiralApp.elementMeshes.filter(m => m.userData.element && m.geometry && m.geometry.type === 'SphereGeometry' && !m.userData.isGlow)
            );

            // Reset all elements
            spiralApp.elementMeshes.forEach(mesh => {
                if (mesh.userData && mesh.userData.element && mesh.material && !mesh.userData.isGlow) {
                    if (mesh.geometry && mesh.geometry.type === 'SphereGeometry') {
                        mesh.scale.setScalar(1);
                        mesh.material.emissiveIntensity = 0.3;
                    }
                }
            });

            // Highlight hovered element
            if (intersects.length > 0) {
                const hoveredMesh = intersects[0].object;
                hoveredMesh.scale.setScalar(1.5);
                hoveredMesh.material.emissiveIntensity = 0.8;

                if (spiralApp.hoveredElement !== hoveredMesh.userData.element) {
                    spiralApp.hoveredElement = hoveredMesh.userData.element;
                    showSpiralElementInfo(spiralApp.hoveredElement);
                }
            } else {
                if (spiralApp.hoveredElement) {
                    spiralApp.hoveredElement = null;
                    hideSpiralElementInfo();
                }
            }

            spiralApp.renderer.render(spiralApp.scene, spiralApp.camera);
        }

        function onSpiralMouseMove(event) {
            const container = document.getElementById('spiral3DCanvas');
            const rect = container.getBoundingClientRect();
            spiralApp.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
            spiralApp.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

            if (spiralApp.isDragging) {
                const deltaX = event.clientX - spiralApp.previousMousePosition.x;
                const deltaY = event.clientY - spiralApp.previousMousePosition.y;

                spiralApp.targetRotation.y += deltaX * 0.01;
                spiralApp.targetRotation.x += deltaY * 0.005;
                spiralApp.targetRotation.x = Math.max(-Math.PI / 3, Math.min(Math.PI / 3, spiralApp.targetRotation.x));

                spiralApp.previousMousePosition = { x: event.clientX, y: event.clientY };
            }
        }

        function onSpiralMouseDown(event) {
            spiralApp.isDragging = true;
            spiralApp.previousMousePosition = { x: event.clientX, y: event.clientY };
            document.getElementById('spiral3DCanvas').style.cursor = 'grabbing';
        }

        function onSpiralMouseUp() {
            spiralApp.isDragging = false;
            document.getElementById('spiral3DCanvas').style.cursor = 'grab';
        }

        function onSpiralMouseLeave() {
            spiralApp.isDragging = false;
        }

        function onSpiralWheel(event) {
            event.preventDefault();
            spiralApp.cameraDistance += event.deltaY * 0.05;
            spiralApp.cameraDistance = Math.max(20, Math.min(150, spiralApp.cameraDistance));

            // Update zoom slider
            const slider = document.getElementById('zoomLevel');
            if (slider) {
                slider.value = 170 - spiralApp.cameraDistance;
            }
        }

        function onSpiralClick(event) {
            if (spiralApp.hoveredElement) {
                showModal(spiralApp.hoveredElement);
            }
        }

        // Touch handlers
        let touchStartDistance = 0;
        let lastTouchPosition = { x: 0, y: 0 };

        function onSpiralTouchStart(event) {
            if (event.touches.length === 1) {
                spiralApp.isDragging = true;
                lastTouchPosition = {
                    x: event.touches[0].clientX,
                    y: event.touches[0].clientY
                };
            } else if (event.touches.length === 2) {
                touchStartDistance = Math.hypot(
                    event.touches[0].clientX - event.touches[1].clientX,
                    event.touches[0].clientY - event.touches[1].clientY
                );
            }
        }

        function onSpiralTouchMove(event) {
            event.preventDefault();

            if (event.touches.length === 1 && spiralApp.isDragging) {
                const deltaX = event.touches[0].clientX - lastTouchPosition.x;
                const deltaY = event.touches[0].clientY - lastTouchPosition.y;

                spiralApp.targetRotation.y += deltaX * 0.01;
                spiralApp.targetRotation.x += deltaY * 0.005;
                spiralApp.targetRotation.x = Math.max(-Math.PI / 3, Math.min(Math.PI / 3, spiralApp.targetRotation.x));

                lastTouchPosition = {
                    x: event.touches[0].clientX,
                    y: event.touches[0].clientY
                };
            } else if (event.touches.length === 2) {
                const currentDistance = Math.hypot(
                    event.touches[0].clientX - event.touches[1].clientX,
                    event.touches[0].clientY - event.touches[1].clientY
                );

                const delta = touchStartDistance - currentDistance;
                spiralApp.cameraDistance += delta * 0.1;
                spiralApp.cameraDistance = Math.max(20, Math.min(150, spiralApp.cameraDistance));
                touchStartDistance = currentDistance;
            }
        }

        function onSpiralTouchEnd() {
            spiralApp.isDragging = false;
        }

        function onSpiralResize() {
            const container = document.getElementById('spiral3DCanvas');
            if (!container || !spiralApp.renderer) return;

            const width = container.clientWidth;
            const height = container.clientHeight;

            spiralApp.camera.aspect = width / height;
            spiralApp.camera.updateProjectionMatrix();
            spiralApp.renderer.setSize(width, height);
        }

        function showSpiralElementInfo(element) {
            const infoPanel = document.getElementById('spiralElementInfo');
            if (!infoPanel) return;

            const color = categoryColors[element.category] || categoryColors.unknown;
            const colorHex = '#' + color.toString(16).padStart(6, '0');

            infoPanel.querySelector('.info-symbol').textContent = element.symbol;
            infoPanel.querySelector('.info-symbol').style.color = colorHex;
            infoPanel.querySelector('.info-name').textContent = element.name;
            infoPanel.querySelector('.info-details').innerHTML = `
                <div>Số nguyên tử: <strong>${element.number}</strong></div>
                <div>Chu kỳ: <strong>${element.period}</strong> | Nhóm: <strong>${element.group}</strong></div>
                <div>Khối lượng: <strong>${element.mass}</strong></div>
                <div>Trạng thái: <strong>${element.state}</strong></div>
            `;

            infoPanel.classList.add('visible');
        }

        function hideSpiralElementInfo() {
            const infoPanel = document.getElementById('spiralElementInfo');
            if (infoPanel) {
                infoPanel.classList.remove('visible');
            }
        }

        function changeSpiralView(mode) {
            spiralApp.viewMode = mode;
            createSpiralElements();
        }

        function resetSpiralView() {
            spiralApp.targetRotation = { x: 0, y: 0 };
            spiralApp.cameraDistance = 60;
            document.getElementById('zoomLevel').value = 60;
            document.getElementById('rotationSpeed').value = 30;
            spiralApp.rotationSpeed = 0.003;
        }

        function initSpiralControls() {
            // View mode buttons
            document.querySelectorAll('.spiral-btn[data-view]').forEach(btn => {
                btn.addEventListener('click', () => {
                    document.querySelectorAll('.spiral-btn[data-view]').forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    changeSpiralView(btn.dataset.view);
                });
            });

            // Rotation speed slider
            const rotationSlider = document.getElementById('rotationSpeed');
            if (rotationSlider) {
                rotationSlider.addEventListener('input', (e) => {
                    spiralApp.rotationSpeed = e.target.value * 0.0001;
                });
            }

            // Zoom slider
            const zoomSlider = document.getElementById('zoomLevel');
            if (zoomSlider) {
                zoomSlider.addEventListener('input', (e) => {
                    spiralApp.cameraDistance = 170 - e.target.value;
                });
            }

            // Reset button
            const resetBtn = document.getElementById('resetSpiralView');
            if (resetBtn) {
                resetBtn.addEventListener('click', resetSpiralView);
            }

            // Legend highlighting
            document.querySelectorAll('.spiral-legend-item').forEach(item => {
                item.addEventListener('click', () => {
                    const cat = item.dataset.cat;

                    if (spiralApp.selectedCategory === cat) {
                        // Deselect
                        spiralApp.selectedCategory = null;
                        document.querySelectorAll('.spiral-legend-item').forEach(i => i.classList.remove('highlighted'));

                        // Reset all opacities
                        spiralApp.elementMeshes.forEach(mesh => {
                            if (mesh.material && mesh.material.opacity !== undefined) {
                                mesh.material.opacity = mesh.userData.isGlow ? 0.15 : 0.9;
                            }
                        });
                    } else {
                        // Select category
                        spiralApp.selectedCategory = cat;
                        document.querySelectorAll('.spiral-legend-item').forEach(i => i.classList.remove('highlighted'));
                        item.classList.add('highlighted');

                        // Highlight matching elements
                        spiralApp.elementMeshes.forEach(mesh => {
                            if (mesh.userData && mesh.userData.element) {
                                if (mesh.userData.element.category === cat) {
                                    if (mesh.material) mesh.material.opacity = 1;
                                } else {
                                    if (mesh.material) mesh.material.opacity = 0.15;
                                }
                            }
                        });
                    }
                });
            });
        }

        // Initialize spiral when tab is switched
        function initSpiralOnTabSwitch() {
            const spiralTab = document.querySelector('[data-tab="spiral"]');
            if (spiralTab) {
                spiralTab.addEventListener('click', () => {
                    setTimeout(() => {
                        if (!spiralApp.isInitialized) {
                            initSpiral3D();
                            initSpiralControls();
                        } else {
                            onSpiralResize();
                        }
                    }, 100);
                });
            }
        }

        // Initialize all games when DOM is ready
        document.addEventListener('DOMContentLoaded', () => {
            initTabs();
            initMemoryGame();
            initQuizGame();
            initTriviaGame();
            initSpiralOnTabSwitch();
            initComparisonControls();
        });



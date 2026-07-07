// ==================== MEMORY GAME ====================
        const memoryGame = {
            cards: [],
            flippedCards: [],
            matchedPairs: 0,
            totalPairs: 6,
            moves: 0,
            score: 0,
            timer: null,
            seconds: 0,
            isPlaying: false,
            selectedElements: []
        };

        // Get elements by range
        function getElementsByRange(range) {
            switch(range) {
                case '1-20':
                    return elements.filter(e => e.number >= 1 && e.number <= 20);
                case '1-36':
                    return elements.filter(e => e.number >= 1 && e.number <= 36);
                case '1-54':
                    return elements.filter(e => e.number >= 1 && e.number <= 54);
                case 'alkali':
                    return elements.filter(e => e.category === 'alkali');
                case 'halogen':
                    return elements.filter(e => e.category === 'halogen');
                case 'noble':
                    return elements.filter(e => e.category === 'noble');
                case 'random':
                default:
                    return elements.slice().sort(function() { return Math.random() - 0.5; }).slice(0, 30);
            }
        }

        // Shuffle array
        function shuffleArray(array) {
            const shuffled = array.slice();
            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                const temp = shuffled[i];
                shuffled[i] = shuffled[j];
                shuffled[j] = temp;
            }
            return shuffled;
        }

        // Start memory game
        function startMemoryGame() {
            const range = document.getElementById('elementRange').value;
            const availableElements = getElementsByRange(range);

            if (availableElements.length < memoryGame.totalPairs) {
                showGameMessage('Không đủ nguyên tố! Vui lòng chọn phạm vi khác.', 'info');
                return;
            }

            // Reset game state
            memoryGame.cards = [];
            memoryGame.flippedCards = [];
            memoryGame.matchedPairs = 0;
            memoryGame.moves = 0;
            memoryGame.score = 0;
            memoryGame.seconds = 0;
            memoryGame.isPlaying = true;

            if (memoryGame.timer) clearInterval(memoryGame.timer);

            // Select random elements
            memoryGame.selectedElements = shuffleArray(availableElements).slice(0, memoryGame.totalPairs);

            // Create card pairs (symbol + name)
            const cardData = [];
            memoryGame.selectedElements.forEach(element => {
                cardData.push({
                    id: element.number,
                    type: 'symbol',
                    symbol: element.symbol,
                    number: element.number,
                    name: element.name
                });
                cardData.push({
                    id: element.number,
                    type: 'name',
                    symbol: element.symbol,
                    number: element.number,
                    name: element.name
                });
            });

            memoryGame.cards = shuffleArray(cardData);

            // Update UI
            updateMemoryStats();
            renderMemoryBoard();
            startMemoryTimer();
            showGameMessage('Lật thẻ để tìm cặp ký hiệu và tên nguyên tố!', 'info');
        }

        // Render memory board
        function renderMemoryBoard() {
            const board = document.getElementById('memoryBoard');
            board.innerHTML = '';

            // Calculate grid columns based on pairs
            const cols = memoryGame.totalPairs <= 6 ? 4 : memoryGame.totalPairs <= 10 ? 5 : 6;
            board.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

            memoryGame.cards.forEach((card, index) => {
                const cardEl = document.createElement('div');
                cardEl.className = 'memory-card';
                cardEl.dataset.index = index;

                cardEl.innerHTML = `
                    <div class="card-face card-back"></div>
                    <div class="card-face card-front ${card.type}-card">
                        ${card.type === 'symbol'
                            ? `<span class="card-number">${card.number}</span><span class="card-symbol">${card.symbol}</span>`
                            : `<span class="card-name">${card.name}</span>`
                        }
                    </div>
                `;

                cardEl.addEventListener('click', () => flipCard(index));
                board.appendChild(cardEl);
            });
        }

        // Flip card
        function flipCard(index) {
            if (!memoryGame.isPlaying) return;

            const card = memoryGame.cards[index];
            const cardEl = document.querySelectorAll('.memory-card')[index];

            // Can't flip if already flipped or matched
            if (cardEl.classList.contains('flipped') || cardEl.classList.contains('matched')) return;

            // Can't flip more than 2 cards
            if (memoryGame.flippedCards.length >= 2) return;

            // Flip the card
            cardEl.classList.add('flipped');
            memoryGame.flippedCards.push({ index: index, card: card, element: cardEl });

            // Check for match when 2 cards are flipped
            if (memoryGame.flippedCards.length === 2) {
                memoryGame.moves++;
                updateMemoryStats();
                checkMemoryMatch();
            }
        }

        // Check for match
        function checkMemoryMatch() {
            var first = memoryGame.flippedCards[0];
            var second = memoryGame.flippedCards[1];

            if (first.card.id === second.card.id && first.card.type !== second.card.type) {
                // Match found!
                setTimeout(() => {
                    first.element.classList.add('matched');
                    second.element.classList.add('matched');
                    memoryGame.matchedPairs++;
                    memoryGame.score += Math.max(100 - memoryGame.moves * 2, 10);
                    updateMemoryStats();
                    memoryGame.flippedCards = [];

                    showGameMessage(`✅ Đúng rồi! ${first.card.symbol} = ${first.card.name}`, 'success');

                    // Check for win
                    if (memoryGame.matchedPairs === memoryGame.totalPairs) {
                        endMemoryGame();
                    }
                }, 500);
            } else {
                // No match
                setTimeout(() => {
                    first.element.classList.remove('flipped');
                    second.element.classList.remove('flipped');
                    memoryGame.flippedCards = [];
                    showGameMessage('❌ Chưa đúng, thử lại nhé!', 'info');
                }, 1000);
            }
        }

        // Update memory stats
        function updateMemoryStats() {
            const movesEl = document.getElementById('memoryMoves');
            const matchesEl = document.getElementById('memoryMatches');
            const totalEl = document.getElementById('memoryTotal');
            const scoreEl = document.getElementById('memoryScore');

            if (movesEl) movesEl.textContent = memoryGame.moves;
            if (matchesEl) matchesEl.textContent = memoryGame.matchedPairs;
            if (totalEl) totalEl.textContent = memoryGame.totalPairs;
            if (scoreEl) scoreEl.textContent = memoryGame.score;
        }

        // Start timer
        function startMemoryTimer() {
            memoryGame.timer = setInterval(() => {
                memoryGame.seconds++;
                const mins = Math.floor(memoryGame.seconds / 60).toString().padStart(2, '0');
                const secs = (memoryGame.seconds % 60).toString().padStart(2, '0');
                const timerEl = document.getElementById('memoryTimer');
                if (timerEl) timerEl.textContent = `${mins}:${secs}`;
            }, 1000);
        }

        async function awardMemoryExperience(container) {
            const rewardEl = container ? container.querySelector('.exp-reward-status') : null;

            if (!window.AuthState || !window.AuthState.getAuthToken()) {
                if (rewardEl) rewardEl.textContent = 'Dang nhap de nhan +100 EXP.';
                return;
            }

            try {
                const data = await window.AuthState.addExperience(100);
                const levelText = data.leveledUp > 0 ? ` Len ${data.leveledUp} level!` : '';
                if (rewardEl) rewardEl.textContent = `Da nhan +${data.expGained} EXP.${levelText}`;
            } catch (err) {
                console.error(err);
                if (rewardEl) rewardEl.textContent = err.message || 'Khong the cong EXP.';
            }
        }

        // End game
        function endMemoryGame() {
            memoryGame.isPlaying = false;
            clearInterval(memoryGame.timer);

            const mins = Math.floor(memoryGame.seconds / 60);
            const secs = memoryGame.seconds % 60;

            // Create victory overlay
            const overlay = document.createElement('div');
            overlay.className = 'victory-overlay';
            overlay.innerHTML = `
                <div class="victory-content">
                    <div class="victory-icon">🎉</div>
                    <h2 class="victory-title">Xuất Sắc!</h2>
                    <div class="victory-stats">
                        <p class="victory-stat">⏱️ Thời gian: <span>${mins}:${secs.toString().padStart(2, '0')}</span></p>
                        <p class="victory-stat">🎯 Số lượt lật: <span>${memoryGame.moves}</span></p>
                        <p class="victory-stat">⭐ Điểm số: <span>${memoryGame.score}</span></p>
                        <p class="victory-stat">EXP: <span class="exp-reward-status">Dang cong +100 EXP...</span></p>
                    </div>
                    <div class="learned-elements">
                        <p style="margin-bottom: 10px; color: var(--text-secondary);">Bạn đã học được:</p>
                        <div style="display: flex; flex-wrap: wrap; gap: 8px; justify-content: center;">
                            ${memoryGame.selectedElements.map(e =>
                                `<span style="background: rgba(0,245,255,0.2); padding: 5px 10px; border-radius: 15px; font-size: 0.9rem;">
                                    <strong>${e.symbol}</strong> ${e.name}
                                </span>`
                            ).join('')}
                        </div>
                    </div>
                    <div style="margin-top: 20px;">
                        <button class="victory-btn" onclick="this.closest('.victory-overlay').remove(); startMemoryGame();">🔄 Chơi Lại</button>
                        <button class="victory-btn" onclick="this.closest('.victory-overlay').remove();">✕ Đóng</button>
                    </div>
                </div>
            `;
            document.body.appendChild(overlay);
            awardMemoryExperience(overlay);
        }

        // Show game message
        function showGameMessage(msg, type) {
            const msgEl = document.getElementById('memoryMessage');
            if (msgEl) {
                msgEl.textContent = msg;
                msgEl.className = `game-message ${type}`;
            }
        }

        // Memory game event listeners
        function initMemoryGame() {
            const startBtn = document.getElementById('startMemory');
            if (startBtn) {
                startBtn.addEventListener('click', startMemoryGame);
            }

            document.querySelectorAll('.diff-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    document.querySelectorAll('.diff-btn').forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    memoryGame.totalPairs = parseInt(btn.dataset.pairs);
                });
            });
        }
function createBackgroundParticles() {
    const particles = document.getElementById('particles');
    if (!particles || particles.dataset.ready === 'true') return;
    particles.dataset.ready = 'true';

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
document.addEventListener('DOMContentLoaded', () => {
    createBackgroundParticles();
    initMemoryGame();
});

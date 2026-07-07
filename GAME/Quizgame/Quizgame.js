
        // ==================== QUIZ GAME ====================
        const quizGame = {
            questions: [],
            currentQuestion: 0,
            totalQuestions: 10,
            correct: 0,
            score: 0,
            mode: 'symbol',
            timer: null,
            timeLeft: 10,
            isPlaying: false,
            answerLocked: false,
            advanceTimer: null
        };


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

        // Generate quiz questions
        function generateQuizQuestions() {
            const availableElements = elements.filter(e => e.number <= 36); // First 36 elements
            const questions = [];

            const shuffledElements = shuffleArray(availableElements);

            for (let i = 0; i < quizGame.totalQuestions; i++) {
                const element = shuffledElements[i % shuffledElements.length];
                const wrongAnswers = shuffleArray(availableElements.filter(e => e.number !== element.number)).slice(0, 3);

                let question;
                const mode = quizGame.mode === 'mixed'
                    ? ['symbol', 'name', 'config'][Math.floor(Math.random() * 3)]
                    : quizGame.mode;

                switch(mode) {
                    case 'symbol':
                        question = {
                            display: element.symbol,
                            question: 'Ký hiệu "' + element.symbol + '" là nguyên tố nào?',
                            answer: element.name,
                            options: shuffleArray([element.name].concat(wrongAnswers.map(function(e) { return e.name; }))),
                            element: element
                        };
                        break;
                    case 'name':
                        question = {
                            display: element.name,
                            question: 'Nguyên tố "' + element.name + '" có ký hiệu gì?',
                            answer: element.symbol,
                            options: shuffleArray([element.symbol].concat(wrongAnswers.map(function(e) { return e.symbol; }))),
                            element: element
                        };
                        break;
                    case 'config':
                        question = {
                            display: element.config,
                            question: 'Cấu hình electron này thuộc nguyên tố nào?',
                            answer: element.name,
                            options: shuffleArray([element.name].concat(wrongAnswers.map(function(e) { return e.name; }))),
                            element: element
                        };
                        break;
                }

                questions.push(question);
            }

            return questions;
        }

        // Start quiz
        function startQuiz() {
            quizGame.questions = generateQuizQuestions();
            quizGame.currentQuestion = 0;
            quizGame.correct = 0;
            quizGame.score = 0;
            quizGame.isPlaying = true;
            quizGame.answerLocked = false;
            if (quizGame.advanceTimer) clearTimeout(quizGame.advanceTimer);

            const quizArea = document.getElementById('quizArea');
            if (quizArea) quizArea.classList.add('is-playing');

            updateQuizStats();
            showQuestion();
        }

        // Show question
        function showQuestion() {
            if (quizGame.currentQuestion >= quizGame.totalQuestions) {
                endQuiz();
                return;
            }

            quizGame.answerLocked = false;

            const q = quizGame.questions[quizGame.currentQuestion];
            if (!q) return;

            const symbolEl = document.getElementById('questionSymbol');
            const textEl = document.getElementById('questionText');
            const feedbackEl = document.getElementById('quizFeedback');
            const optionsEl = document.getElementById('quizOptions');
            const timerEl = document.getElementById('quizTimer');
            const progressEl = document.getElementById('quizProgress');

            document.getElementById('quizQuestion')?.classList.remove('intro-card');
            if (symbolEl) symbolEl.textContent = q.display;
            if (textEl) textEl.textContent = q.question;
            if (feedbackEl) {
                feedbackEl.textContent = '';
                feedbackEl.className = 'quiz-feedback';
            }

            if (optionsEl) {
                optionsEl.innerHTML = '';
                q.options.forEach(option => {
                    const btn = document.createElement('button');
                    btn.className = 'quiz-option';
                    btn.textContent = option;
                    btn.addEventListener('click', () => selectAnswer(option, btn));
                    optionsEl.appendChild(btn);
                });
            }

            // Start timer
            quizGame.timeLeft = 10;
            if (timerEl) timerEl.textContent = quizGame.timeLeft;

            if (quizGame.timer) clearInterval(quizGame.timer);
            quizGame.timer = setInterval(() => {
                quizGame.timeLeft--;
                if (timerEl) timerEl.textContent = quizGame.timeLeft;

                if (quizGame.timeLeft <= 0) {
                    clearInterval(quizGame.timer);
                    timeOut();
                }
            }, 1000);

            // Update progress
            const progress = ((quizGame.currentQuestion) / quizGame.totalQuestions) * 100;
            if (progressEl) progressEl.style.width = progress + '%';
        }

        // Select answer
        function selectAnswer(answer, btnEl) {
            if (!quizGame.isPlaying || quizGame.answerLocked) return;
            quizGame.answerLocked = true;

            clearInterval(quizGame.timer);

            const q = quizGame.questions[quizGame.currentQuestion];
            if (!q) return;

            const isCorrect = answer === q.answer;
            const feedbackEl = document.getElementById('quizFeedback');

            // Disable all options
            document.querySelectorAll('.quiz-option').forEach(btn => {
                btn.classList.add('disabled');
                if (btn.textContent === q.answer) {
                    btn.classList.add('correct');
                }
            });

            if (isCorrect) {
                btnEl.classList.add('correct');
                quizGame.correct++;
                quizGame.score += 100 + quizGame.timeLeft * 10;
                if (feedbackEl) {
                    feedbackEl.textContent = `✅ Chính xác! ${q.element.symbol} = ${q.element.name}`;
                    feedbackEl.className = 'quiz-feedback correct';
                }
            } else {
                btnEl.classList.add('wrong');
                if (feedbackEl) {
                    feedbackEl.textContent = `❌ Sai rồi! Đáp án đúng là: ${q.answer}`;
                    feedbackEl.className = 'quiz-feedback wrong';
                }
            }

            updateQuizStats();

            // Next question after delay
            quizGame.advanceTimer = setTimeout(() => {
                quizGame.currentQuestion++;
                showQuestion();
            }, 2000);
        }

        // Time out
        function timeOut() {
            if (!quizGame.isPlaying || quizGame.answerLocked) return;
            quizGame.answerLocked = true;

            const q = quizGame.questions[quizGame.currentQuestion];
            if (!q) return;

            const feedbackEl = document.getElementById('quizFeedback');

            document.querySelectorAll('.quiz-option').forEach(btn => {
                btn.classList.add('disabled');
                if (btn.textContent === q.answer) {
                    btn.classList.add('correct');
                }
            });

            if (feedbackEl) {
                feedbackEl.textContent = `⏰ Hết giờ! Đáp án: ${q.answer}`;
                feedbackEl.className = 'quiz-feedback wrong';
            }

            quizGame.advanceTimer = setTimeout(() => {
                quizGame.currentQuestion++;
                showQuestion();
            }, 2000);
        }

        // Update quiz stats
        function updateQuizStats() {
            const currentEl = document.getElementById('quizCurrent');
            const correctEl = document.getElementById('quizCorrect');
            const scoreEl = document.getElementById('quizScore');

            if (currentEl) currentEl.textContent = quizGame.currentQuestion + 1;
            if (correctEl) correctEl.textContent = quizGame.correct;
            if (scoreEl) scoreEl.textContent = quizGame.score;
        }

        async function awardQuizExperience(container) {
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

        // End quiz
        function endQuiz() {
            quizGame.isPlaying = false;
            quizGame.answerLocked = true;
            if (quizGame.advanceTimer) clearTimeout(quizGame.advanceTimer);
            clearInterval(quizGame.timer);

            const percentage = Math.round((quizGame.correct / quizGame.totalQuestions) * 100);
            let grade, icon;

            if (percentage >= 90) { grade = 'Xuất sắc!'; icon = '🏆'; }
            else if (percentage >= 70) { grade = 'Giỏi!'; icon = '🎉'; }
            else if (percentage >= 50) { grade = 'Khá!'; icon = '👍'; }
            else { grade = 'Cần cố gắng!'; icon = '💪'; }

            const overlay = document.createElement('div');
            overlay.className = 'victory-overlay';
            overlay.innerHTML = `
                <div class="victory-content">
                    <div class="victory-icon">${icon}</div>
                    <h2 class="victory-title">${grade}</h2>
                    <div class="victory-stats">
                        <p class="victory-stat">✅ Đúng: <span>${quizGame.correct}/${quizGame.totalQuestions}</span></p>
                        <p class="victory-stat">📊 Tỷ lệ: <span>${percentage}%</span></p>
                        <p class="victory-stat">⭐ Điểm: <span>${quizGame.score}</span></p>
                        <p class="victory-stat">EXP: <span class="exp-reward-status">Dang cong +100 EXP...</span></p>
                    </div>
                    <div style="margin-top: 20px;">
                        <button class="victory-btn" onclick="this.closest('.victory-overlay').remove(); startQuiz();">🔄 Chơi Lại</button>
                        <button class="victory-btn" onclick="this.closest('.victory-overlay').remove();">✕ Đóng</button>
                    </div>
                </div>
            `;
            document.body.appendChild(overlay);
            awardQuizExperience(overlay);

            // Update progress bar to 100%
            const progressEl = document.getElementById('quizProgress');
            if (progressEl) progressEl.style.width = '100%';
        }

        // Quiz event listeners
        function initQuizGame() {
            const startBtn = document.getElementById('startQuiz');
            if (startBtn) {
                startBtn.addEventListener('click', startQuiz);
            }

            document.querySelectorAll('.mode-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    quizGame.mode = btn.dataset.mode;
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
    initQuizGame();
});

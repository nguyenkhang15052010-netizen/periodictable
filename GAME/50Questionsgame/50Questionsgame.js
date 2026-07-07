       // ==================== TRIVIA 50 QUESTIONS GAME ====================
        const triviaGame = {
            questions: [],
            currentQuestion: 0,
            totalQuestions: 50,
            correct: 0,
            wrong: 0,
            skipped: 0,
            score: 0,
            difficulty: 'easy',
            category: 'all',
            isPlaying: false,
            hintUsed: false,
            answerLocked: false,
            advanceTimer: null,
            questionResults: []
        };

        // 50 câu hỏi về nguyên tố hóa học
        const triviaQuestionsBank = [
            // === LỊCH SỬ & NGUỒN GỐC (History) ===
            {
                category: 'history',
                difficulty: 'easy',
                question: 'Tên "Oxygen" (Oxy) có nguồn gốc từ tiếng Hy Lạp, nghĩa là gì?',
                options: ['Tạo ra axit', 'Không khí', 'Lửa', 'Nước'],
                answer: 'Tạo ra axit',
                hint: 'Lavoisier tin rằng nguyên tố này là thành phần thiết yếu của tất cả các axit',
                explanation: '"Oxygen" xuất phát từ tiếng Hy Lạp "oxys" (axit) và "genes" (tạo ra). Lavoisier đặt tên này vì ông tin rằng oxy là thành phần của tất cả các axit (dù điều này không hoàn toàn đúng).'
            },
            {
                category: 'history',
                difficulty: 'easy',
                question: 'Nguyên tố Helium (He) được phát hiện lần đầu ở đâu?',
                options: ['Trong nước biển', 'Trên Mặt Trời', 'Trong không khí', 'Trong đất'],
                answer: 'Trên Mặt Trời',
                hint: 'Tên của nó xuất phát từ thần Mặt Trời Hy Lạp - Helios',
                explanation: 'Helium được phát hiện năm 1868 khi phân tích quang phổ của Mặt Trời trong nhật thực. Tên "Helium" xuất phát từ "Helios" - thần Mặt Trời trong thần thoại Hy Lạp.'
            },
            {
                category: 'history',
                difficulty: 'medium',
                question: 'Ai là người đầu tiên tổng hợp thành công nguyên tố Plutonium (Pu)?',
                options: ['Marie Curie', 'Glenn T. Seaborg', 'Ernest Rutherford', 'Niels Bohr'],
                answer: 'Glenn T. Seaborg',
                hint: 'Ông nhận giải Nobel Hóa học năm 1951',
                explanation: 'Glenn T. Seaborg và nhóm của ông tổng hợp Plutonium năm 1940-1941 tại Đại học California, Berkeley. Ông nhận giải Nobel Hóa học 1951 cho công trình về các nguyên tố siêu uranium.'
            },
            {
                category: 'history',
                difficulty: 'medium',
                question: 'Nguyên tố nào được đặt tên theo hành tinh Uranus?',
                options: ['Uranium', 'Neptunium', 'Plutonium', 'Americium'],
                answer: 'Uranium',
                hint: 'Được phát hiện năm 1789, chỉ 8 năm sau khi hành tinh này được khám phá',
                explanation: 'Uranium được Martin Klaproth phát hiện năm 1789 và đặt tên theo hành tinh Uranus (được William Herschel phát hiện năm 1781). Neptunium và Plutonium cũng được đặt tên theo các hành tinh tương ứng.'
            },
            {
                category: 'history',
                difficulty: 'hard',
                question: 'Nguyên tố Technetium (Tc) có điều gì đặc biệt trong lịch sử hóa học?',
                options: ['Nguyên tố nhân tạo đầu tiên', 'Nguyên tố phóng xạ đầu tiên', 'Nguyên tố khí hiếm đầu tiên', 'Nguyên tố kim loại đầu tiên'],
                answer: 'Nguyên tố nhân tạo đầu tiên',
                hint: 'Tên của nó xuất phát từ tiếng Hy Lạp "technetos" nghĩa là "nhân tạo"',
                explanation: 'Technetium (Z=43) là nguyên tố đầu tiên được tổng hợp nhân tạo (1937). Tất cả các đồng vị của nó đều phóng xạ, không tồn tại tự nhiên trên Trái Đất. Tên từ "technetos" (Hy Lạp) = nhân tạo.'
            },
            {
                category: 'history',
                difficulty: 'easy',
                question: 'Nguyên tố Argentum (Ag) là tên Latin của kim loại nào?',
                options: ['Gold', 'Silver', 'Copper', 'Iron'],
                answer: 'Silver',
                hint: 'Argentina được đặt tên theo nguyên tố này',
                explanation: 'Argentum là tên Latin của Silver (Bạc), ký hiệu Ag. Quốc gia Argentina được đặt tên theo nguyên tố này vì người Tây Ban Nha tin rằng có nhiều bạc ở vùng đất này.'
            },
            {
                category: 'history',
                difficulty: 'medium',
                question: 'Marie Curie phát hiện ra hai nguyên tố nào?',
                options: ['Radium và Polonium', 'Uranium và Thorium', 'Francium và Actinium', 'Radon và Radium'],
                answer: 'Radium và Polonium',
                hint: 'Một trong hai nguyên tố được đặt tên theo quê hương của bà',
                explanation: 'Marie Curie phát hiện Polonium (đặt tên theo Ba Lan - quê hương bà) và Radium năm 1898. Bà nhận 2 giải Nobel: Vật lý (1903) và Hóa học (1911).'
            },
            {
                category: 'history',
                difficulty: 'hard',
                question: 'Nguyên tố Gallium (Ga) được phát hiện theo cách nào đặc biệt?',
                options: ['Mendeleev dự đoán trước khi phát hiện', 'Tìm thấy trong thiên thạch', 'Sản phẩm phụ của vũ khí hạt nhân', 'Phát hiện trong cơ thể người'],
                answer: 'Mendeleev dự đoán trước khi phát hiện',
                hint: 'Mendeleev gọi nó là "eka-aluminum" trong bảng tuần hoàn',
                explanation: 'Năm 1871, Mendeleev dự đoán tính chất của một nguyên tố chưa biết gọi là "eka-aluminum". Năm 1875, Paul Émile Lecoq de Boisbaudran phát hiện Gallium với tính chất gần đúng như dự đoán, chứng minh tính đúng đắn của bảng tuần hoàn.'
            },
            {
                category: 'history',
                difficulty: 'medium',
                question: 'Nguyên tố nào được đặt tên theo thần chiến tranh La Mã?',
                options: ['Iron', 'Mars (không tồn tại)', 'Titanium', 'Cobalt'],
                answer: 'Titanium',
                hint: 'Thực ra Titanium được đặt tên theo Titan trong thần thoại Hy Lạp',
                explanation: 'Đây là câu hỏi bẫy! Không có nguyên tố nào đặt tên theo Mars (thần chiến tranh). Titanium được đặt tên theo Titan (thần thoại Hy Lạp). Tuy nhiên, hành tinh Sao Hỏa (Mars) có màu đỏ do oxide sắt.'
            },
            {
                category: 'history',
                difficulty: 'hard',
                question: 'Nguyên tố Einsteinium (Es) được tạo ra trong sự kiện lịch sử nào?',
                options: ['Vụ nổ bom nguyên tử đầu tiên', 'Vụ thử bom hydro Ivy Mike', 'Thảm họa Chernobyl', 'Thí nghiệm CERN'],
                answer: 'Vụ thử bom hydro Ivy Mike',
                hint: 'Sự kiện này xảy ra năm 1952 tại Thái Bình Dương',
                explanation: 'Einsteinium được phát hiện trong bụi phóng xạ từ vụ thử bom hydro "Ivy Mike" năm 1952 tại đảo san hô Enewetak. Được đặt tên theo Albert Einstein và công bố năm 1955.'
            },

            // === TÍNH CHẤT VẬT LÝ (Physical) ===
            {
                category: 'physical',
                difficulty: 'easy',
                question: 'Kim loại nào có khả năng dẫn điện tốt nhất?',
                options: ['Gold', 'Silver', 'Copper', 'Aluminium'],
                answer: 'Silver',
                hint: 'Đây là kim loại quý được dùng nhiều trong trang sức',
                explanation: 'Silver (Ag) có độ dẫn điện cao nhất trong tất cả kim loại. Tuy nhiên, Copper thường được dùng phổ biến hơn vì rẻ hơn nhiều. Thứ tự: Ag > Cu > Au > Al.'
            },
            {
                category: 'physical',
                difficulty: 'easy',
                question: 'Nguyên tố nào là chất khí nhẹ nhất trong vũ trụ?',
                options: ['Helium', 'Hydrogen', 'Nitrogen', 'Oxygen'],
                answer: 'Hydrogen',
                hint: 'Nguyên tố đầu tiên trong bảng tuần hoàn',
                explanation: 'Hydrogen (H) là nguyên tố nhẹ nhất với khối lượng nguyên tử khoảng 1 u. Nó cũng là nguyên tố phổ biến nhất trong vũ trụ, chiếm khoảng 75% khối lượng vật chất thông thường.'
            },
            {
                category: 'physical',
                difficulty: 'medium',
                question: 'Kim loại nào có điểm nóng chảy cao nhất?',
                options: ['Iron', 'Tungsten', 'Titanium', 'Platinum'],
                answer: 'Tungsten',
                hint: 'Kim loại này được dùng làm dây tóc bóng đèn',
                explanation: 'Tungsten (W) có điểm nóng chảy 3422°C - cao nhất trong các kim loại. Vì vậy nó được dùng làm dây tóc bóng đèn sợi đốt và các ứng dụng chịu nhiệt cao.'
            },
            {
                category: 'physical',
                difficulty: 'medium',
                question: 'Nguyên tố phi kim nào tồn tại ở dạng lỏng ở nhiệt độ phòng?',
                options: ['Chlorine', 'Bromine', 'Iodine', 'Fluorine'],
                answer: 'Bromine',
                hint: 'Đây là halogen duy nhất ở trạng thái này',
                explanation: 'Bromine (Br) là một trong hai nguyên tố tồn tại ở dạng lỏng ở nhiệt độ phòng (cùng với Mercury). Nó có màu nâu đỏ và có mùi hăng đặc trưng.'
            },
            {
                category: 'physical',
                difficulty: 'hard',
                question: 'Kim loại nào có mật độ thấp nhất?',
                options: ['Sodium', 'Lithium', 'Potassium', 'Magnesium'],
                answer: 'Lithium',
                hint: 'Kim loại này có thể nổi trên dầu',
                explanation: 'Lithium (Li) có mật độ chỉ 0.534 g/cm³ - nhẹ nhất trong các kim loại. Nó có thể nổi trên dầu (nhưng phản ứng mạnh với nước nên không thể nổi trên nước an toàn).'
            },
            {
                category: 'physical',
                difficulty: 'easy',
                question: 'Nguyên tố kim loại nào mềm đến mức có thể cắt bằng dao?',
                options: ['Aluminium', 'Sodium', 'Iron', 'Copper'],
                answer: 'Sodium',
                hint: 'Kim loại kiềm này phản ứng mạnh với nước',
                explanation: 'Sodium (Na) và các kim loại kiềm khác rất mềm, có thể cắt bằng dao. Khi cắt, bề mặt sáng bóng nhưng nhanh chóng bị oxy hóa thành màu xám trong không khí.'
            },
            {
                category: 'physical',
                difficulty: 'medium',
                question: 'Nguyên tố nào có độ âm điện cao nhất?',
                options: ['Oxygen', 'Fluorine', 'Chlorine', 'Nitrogen'],
                answer: 'Fluorine',
                hint: 'Đây là halogen đầu tiên trong nhóm VIIA',
                explanation: 'Fluorine (F) có độ âm điện cao nhất (3.98 theo thang Pauling). Điều này khiến nó là nguyên tố phản ứng mạnh nhất, có thể phản ứng với hầu hết các nguyên tố khác.'
            },
            {
                category: 'physical',
                difficulty: 'hard',
                question: 'Kim loại nào có tính dẻo (ductility) cao nhất - có thể kéo thành sợi dài nhất?',
                options: ['Silver', 'Gold', 'Copper', 'Platinum'],
                answer: 'Gold',
                hint: '1 gram kim loại này có thể kéo thành sợi dài hơn 2 km',
                explanation: 'Gold (Au) có tính dẻo cao nhất. 1 gram Gold có thể kéo thành sợi dài hơn 2 km! Gold cũng có tính dát mỏng cao nhất - có thể dát thành lá mỏng chỉ vài nguyên tử.'
            },
            {
                category: 'physical',
                difficulty: 'medium',
                question: 'Nguyên tố nào có nhiệt độ sôi thấp nhất?',
                options: ['Hydrogen', 'Helium', 'Nitrogen', 'Oxygen'],
                answer: 'Helium',
                hint: 'Khí này được dùng trong nghiên cứu nhiệt độ cực thấp',
                explanation: 'Helium có nhiệt độ sôi thấp nhất: -268.93°C (4.22 K). Nó là chất duy nhất không thể đông đặc ở áp suất thường, cần áp suất rất cao để đông đặc.'
            },
            {
                category: 'physical',
                difficulty: 'hard',
                question: 'Nguyên tố nào có khả năng hấp thụ neutron tốt nhất, thường dùng trong thanh điều khiển lò phản ứng hạt nhân?',
                options: ['Boron', 'Carbon', 'Nitrogen', 'Uranium'],
                answer: 'Boron',
                hint: 'Nguyên tố này có số hiệu nguyên tử là 5',
                explanation: 'Boron (B), đặc biệt là đồng vị B-10, có khả năng hấp thụ neutron rất cao. Nó được dùng trong thanh điều khiển lò phản ứng hạt nhân và tấm chắn neutron.'
            },

            // === TÍNH CHẤT HÓA HỌC (Chemical) ===
            {
                category: 'chemical',
                difficulty: 'easy',
                question: 'Khi đốt cháy Sodium (Na) trong không khí, ngọn lửa có màu gì?',
                options: ['Red', 'Green', 'Yellow', 'Purple'],
                answer: 'Yellow',
                hint: 'Màu này thường thấy trong đèn đường sodium',
                explanation: 'Sodium cháy với ngọn lửa màu vàng (yellow) đặc trưng. Đây là cơ sở của thử nghiệm ngọn lửa để nhận biết Na. Đèn sodium phát ánh sáng vàng đơn sắc rất hiệu quả.'
            },
            {
                category: 'chemical',
                difficulty: 'easy',
                question: 'Nguyên tố nào phản ứng mạnh với nước tạo ra khí hydrogen và có thể bốc cháy?',
                options: ['Iron', 'Copper', 'Potassium', 'Aluminium'],
                answer: 'Potassium',
                hint: 'Kim loại kiềm thuộc nhóm IA',
                explanation: 'Potassium (K) phản ứng rất mạnh với nước: 2K + 2H₂O → 2KOH + H₂. Phản ứng tỏa nhiều nhiệt đến mức khí H₂ sinh ra bốc cháy với ngọn lửa màu tím đặc trưng của K.'
            },
            {
                category: 'chemical',
                difficulty: 'medium',
                question: 'Nguyên tố nào không phản ứng với acid HCl loãng ở điều kiện thường?',
                options: ['Zinc', 'Iron', 'Copper', 'Magnesium'],
                answer: 'Copper',
                hint: 'Kim loại này đứng sau Hydrogen trong dãy hoạt động hóa học',
                explanation: 'Copper (Cu) đứng sau H trong dãy hoạt động hóa học nên không phản ứng với acid HCl loãng. Cần acid có tính oxy hóa mạnh như HNO₃ hoặc H₂SO₄ đặc nóng để hòa tan Cu.'
            },
            {
                category: 'chemical',
                difficulty: 'medium',
                question: 'Khí nào được tạo ra khi cho đá vôi (CaCO₃) tác dụng với acid?',
                options: ['Oxygen', 'Hydrogen', 'Carbon dioxide', 'Nitrogen'],
                answer: 'Carbon dioxide',
                hint: 'Khí này làm đục nước vôi trong',
                explanation: 'CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂↑. Khí CO₂ sinh ra có thể nhận biết bằng cách dẫn qua nước vôi trong Ca(OH)₂, tạo kết tủa trắng CaCO₃.'
            },
            {
                category: 'chemical',
                difficulty: 'hard',
                question: 'Nguyên tố nào có nhiều trạng thái oxy hóa nhất trong các hợp chất của nó?',
                options: ['Sulfur', 'Manganese', 'Iron', 'Nitrogen'],
                answer: 'Manganese',
                hint: 'Nguyên tố này có thể có trạng thái oxy hóa từ -3 đến +7',
                explanation: 'Manganese (Mn) có thể có các trạng thái oxy hóa từ -3 đến +7, phổ biến nhất là +2, +4, +7. KMnO₄ (Mn⁺⁷) là chất oxy hóa mạnh, MnO₂ (Mn⁺⁴) dùng trong pin.'
            },
            {
                category: 'chemical',
                difficulty: 'easy',
                question: 'Hợp chất Fe₂O₃ có màu gì?',
                options: ['Trắng', 'Đen', 'Đỏ nâu', 'Xanh'],
                answer: 'Đỏ nâu',
                hint: 'Đây là thành phần chính của gỉ sắt',
                explanation: 'Fe₂O₃ (oxit sắt III) có màu đỏ nâu, là thành phần chính của gỉ sắt. Nó còn được gọi là hematit, được dùng làm chất màu (son môi đỏ), bột đánh bóng kim loại.'
            },
            {
                category: 'chemical',
                difficulty: 'medium',
                question: 'Nguyên tố halogen nào phản ứng mãnh liệt nhất?',
                options: ['Chlorine', 'Bromine', 'Fluorine', 'Iodine'],
                answer: 'Fluorine',
                hint: 'Nguyên tố đầu tiên trong nhóm halogen',
                explanation: 'Fluorine (F₂) là halogen phản ứng mạnh nhất. Nó có thể phản ứng với hầu hết các nguyên tố, kể cả khí hiếm Xenon. Phản ứng thường xảy ra ngay ở nhiệt độ thường và tỏa nhiều nhiệt.'
            },
            {
                category: 'chemical',
                difficulty: 'hard',
                question: 'Hiện tượng thù hình là gì?',
                options: ['Một nguyên tố tồn tại ở nhiều dạng đơn chất khác nhau', 'Nguyên tố có nhiều đồng vị', 'Nguyên tố phóng xạ', 'Nguyên tố có nhiều trạng thái oxy hóa'],
                answer: 'Một nguyên tố tồn tại ở nhiều dạng đơn chất khác nhau',
                hint: 'Kim cương và than chì là ví dụ',
                explanation: 'Thù hình là hiện tượng một nguyên tố tồn tại ở nhiều dạng đơn chất khác nhau. Ví dụ: Carbon có kim cương, than chì, fullerene; Oxygen có O₂ và O₃ (ozone); Sulfur có nhiều dạng tinh thể.'
            },
            {
                category: 'chemical',
                difficulty: 'medium',
                question: 'Ion nào tạo màu xanh lam đặc trưng trong dung dịch?',
                options: ['Fe²⁺', 'Cu²⁺', 'Zn²⁺', 'Ag⁺'],
                answer: 'Cu²⁺',
                hint: 'Dung dịch CuSO₄ có màu này',
                explanation: 'Ion Cu²⁺ tạo màu xanh lam đặc trưng trong dung dịch. CuSO₄.5H₂O (đồng sunfat ngậm nước) có màu xanh đẹp, được dùng trong phòng thí nghiệm và nông nghiệp.'
            },
            {
                category: 'chemical',
                difficulty: 'hard',
                question: 'Phản ứng nhiệt nhôm (thermite reaction) sử dụng nhôm để khử oxide của kim loại nào?',
                options: ['Copper', 'Iron', 'Zinc', 'Lead'],
                answer: 'Iron',
                hint: 'Phản ứng này tạo ra nhiệt độ rất cao, dùng để hàn đường ray',
                explanation: '2Al + Fe₂O₃ → Al₂O₃ + 2Fe + nhiệt. Phản ứng thermite tỏa nhiệt rất lớn (khoảng 2500°C), đủ để làm nóng chảy sắt. Được dùng để hàn đường ray xe lửa tại chỗ.'
            },

            // === ỨNG DỤNG (Application) ===
            {
                category: 'application',
                difficulty: 'easy',
                question: 'Nguyên tố nào được dùng phổ biến trong bóng đèn huỳnh quang?',
                options: ['Argon', 'Neon', 'Mercury', 'Helium'],
                answer: 'Mercury',
                hint: 'Nguyên tố kim loại lỏng duy nhất ở nhiệt độ phòng',
                explanation: 'Thủy ngân (Mercury/Hg) được dùng trong đèn huỳnh quang. Khi điện đi qua, hơi Hg phát ra tia UV, kích thích lớp phosphor trên thành ống phát sáng trắng.'
            },
            {
                category: 'application',
                difficulty: 'easy',
                question: 'Khí nào được bơm vào bóng bay để bay lên?',
                options: ['Oxygen', 'Nitrogen', 'Helium', 'Carbon dioxide'],
                answer: 'Helium',
                hint: 'Khí hiếm nhẹ hơn không khí và an toàn',
                explanation: 'Helium được dùng bơm bóng bay vì nhẹ hơn không khí (mật độ 0.164 g/L so với không khí 1.225 g/L) và không cháy như Hydrogen, nên an toàn hơn.'
            },
            {
                category: 'application',
                difficulty: 'medium',
                question: 'Nguyên tố nào được dùng trong pin Lithium-ion của điện thoại?',
                options: ['Sodium', 'Lithium', 'Potassium', 'Calcium'],
                answer: 'Lithium',
                hint: 'Kim loại nhẹ nhất',
                explanation: 'Lithium (Li) được dùng trong pin Li-ion vì có thế điện cực thấp nhất (-3.04V) và khối lượng nguyên tử nhỏ, giúp pin có mật độ năng lượng cao và nhẹ.'
            },
            {
                category: 'application',
                difficulty: 'medium',
                question: 'Silicon được ứng dụng chủ yếu trong lĩnh vực nào?',
                options: ['Công nghiệp thực phẩm', 'Công nghệ bán dẫn', 'Y tế', 'Xây dựng'],
                answer: 'Công nghệ bán dẫn',
                hint: 'Thung lũng Silicon (Silicon Valley) được đặt tên theo ứng dụng này',
                explanation: 'Silicon là vật liệu bán dẫn chủ yếu trong chip máy tính, pin mặt trời. Silicon tinh khiết được "pha tạp" để tạo bán dẫn loại n và p, cơ sở của transistor.'
            },
            {
                category: 'application',
                difficulty: 'hard',
                question: 'Nguyên tố nào được dùng trong đầu dò khói (smoke detector)?',
                options: ['Radon', 'Americium', 'Plutonium', 'Uranium'],
                answer: 'Americium',
                hint: 'Đây là nguyên tố siêu uranium nhân tạo',
                explanation: 'Americium-241 được dùng trong đầu dò khói ion hóa. Nó phát ra hạt alpha ion hóa không khí. Khi khói vào, dòng ion bị gián đoạn, kích hoạt báo động.'
            },
            {
                category: 'application',
                difficulty: 'easy',
                question: 'Nguyên tố nào là thành phần chính của phân bón NPK?',
                options: ['Nitrogen, Phosphorus, Potassium', 'Nitrogen, Platinum, Krypton', 'Nickel, Palladium, Potassium', 'Sodium, Phosphorus, Potassium'],
                answer: 'Nitrogen, Phosphorus, Potassium',
                hint: 'N, P, K là ký hiệu hóa học của 3 nguyên tố',
                explanation: 'NPK là Nitrogen (N), Phosphorus (P), Potassium (K-Kalium). Đây là 3 nguyên tố dinh dưỡng đa lượng thiết yếu cho cây trồng.'
            },
            {
                category: 'application',
                difficulty: 'medium',
                question: 'Nguyên tố Xenon được ứng dụng trong lĩnh vực nào?',
                options: ['Đèn pha xe hơi', 'Bảo quản thực phẩm', 'Sản xuất phân bón', 'Làm chất tẩy rửa'],
                answer: 'Đèn pha xe hơi',
                hint: 'Loại đèn này phát ra ánh sáng rất trắng và sáng',
                explanation: 'Đèn Xenon (HID - High Intensity Discharge) phát ánh sáng trắng xanh rất sáng, hiệu quả hơn đèn halogen. Xenon cũng dùng trong đèn flash, đèn chiếu phim.'
            },
            {
                category: 'application',
                difficulty: 'hard',
                question: 'Nguyên tố Technetium-99m được sử dụng trong lĩnh vực nào?',
                options: ['Sản xuất điện hạt nhân', 'Chẩn đoán hình ảnh y tế', 'Chế tạo vũ khí', 'Xử lý nước thải'],
                answer: 'Chẩn đoán hình ảnh y tế',
                hint: 'Đây là đồng vị phóng xạ được dùng nhiều nhất trong y học',
                explanation: 'Tc-99m là đồng vị phóng xạ dùng nhiều nhất trong y học hạt nhân (80% các thủ thuật). Nó phát tia gamma để chụp hình các cơ quan, có thời gian bán rã ngắn (6h) nên an toàn cho bệnh nhân.'
            },
            {
                category: 'application',
                difficulty: 'medium',
                question: 'Titan (Titanium) được dùng nhiều trong ngành nào nhờ tính chất nhẹ và bền?',
                options: ['Công nghiệp thực phẩm', 'Hàng không vũ trụ', 'Dệt may', 'Nông nghiệp'],
                answer: 'Hàng không vũ trụ',
                hint: 'Ngành này cần vật liệu nhẹ nhưng cực kỳ bền',
                explanation: 'Titanium có tỷ lệ độ bền/khối lượng cao, chống ăn mòn tốt, chịu nhiệt cao. Được dùng trong khung máy bay, động cơ phản lực, tàu vũ trụ, và cả implant y tế.'
            },
            {
                category: 'application',
                difficulty: 'hard',
                question: 'Nguyên tố nào được dùng trong detector của máy đếm Geiger-Müller?',
                options: ['Helium', 'Argon', 'Xenon', 'Krypton'],
                answer: 'Argon',
                hint: 'Khí hiếm phổ biến và rẻ nhất',
                explanation: 'Máy đếm Geiger-Müller thường chứa hỗn hợp Argon và một ít khí hữu cơ hoặc halogen. Khi tia phóng xạ đi qua, nó ion hóa Ar tạo xung điện đếm được.'
            },

            // === PHÁT HIỆN & NHÀ KHOA HỌC (Discovery) ===
            {
                category: 'discovery',
                difficulty: 'easy',
                question: 'Ai là người phát triển bảng tuần hoàn các nguyên tố hóa học?',
                options: ['Albert Einstein', 'Dmitri Mendeleev', 'Marie Curie', 'Isaac Newton'],
                answer: 'Dmitri Mendeleev',
                hint: 'Nhà hóa học người Nga thế kỷ 19',
                explanation: 'Dmitri Mendeleev công bố bảng tuần hoàn năm 1869, sắp xếp các nguyên tố theo khối lượng nguyên tử tăng dần và tính chất hóa học tuần hoàn. Ông còn dự đoán được các nguyên tố chưa biết.'
            },
            {
                category: 'discovery',
                difficulty: 'easy',
                question: 'Nguyên tố Curium (Cm) được đặt tên theo ai?',
                options: ['Marie Curie và Pierre Curie', 'Albert Einstein', 'Niels Bohr', 'Ernest Rutherford'],
                answer: 'Marie Curie và Pierre Curie',
                hint: 'Cặp vợ chồng nhà khoa học nổi tiếng về phóng xạ',
                explanation: 'Curium (Cm, Z=96) được đặt tên theo Marie và Pierre Curie, những người tiên phong nghiên cứu phóng xạ. Marie Curie là người phụ nữ đầu tiên nhận giải Nobel và duy nhất nhận 2 giải Nobel ở 2 lĩnh vực khác nhau.'
            },
            {
                category: 'discovery',
                difficulty: 'medium',
                question: 'Henry Cavendish nổi tiếng với việc phát hiện và nghiên cứu nguyên tố nào?',
                options: ['Oxygen', 'Hydrogen', 'Nitrogen', 'Chlorine'],
                answer: 'Hydrogen',
                hint: 'Ông gọi nó là "không khí dễ cháy"',
                explanation: 'Henry Cavendish phát hiện Hydrogen năm 1766, gọi nó là "inflammable air" (không khí dễ cháy). Ông cũng xác định thành phần của nước là H và O, và phát hiện Argon trong không khí.'
            },
            {
                category: 'discovery',
                difficulty: 'medium',
                question: 'Nguyên tố nào được đặt tên theo nhà vật lý Niels Bohr?',
                options: ['Bohrium', 'Boron', 'Berkelium', 'Bromine'],
                answer: 'Bohrium',
                hint: 'Nguyên tố siêu nặng có số hiệu 107',
                explanation: 'Bohrium (Bh, Z=107) được đặt tên theo Niels Bohr - nhà vật lý Đan Mạch, người đề xuất mô hình nguyên tử Bohr và nhận giải Nobel Vật lý 1922.'
            },
            {
                category: 'discovery',
                difficulty: 'hard',
                question: 'Ai là người đầu tiên cô lập được nguyên tố Fluorine?',
                options: ['Antoine Lavoisier', 'Henri Moissan', 'Humphry Davy', 'Carl Wilhelm Scheele'],
                answer: 'Henri Moissan',
                hint: 'Nhà hóa học Pháp nhận Nobel năm 1906',
                explanation: 'Henri Moissan cô lập được Fluorine năm 1886 bằng điện phân KF trong HF. Nhiều nhà khoa học trước đó đã bị thương hoặc tử vong khi cố gắng cô lập nguyên tố phản ứng mạnh này.'
            },
            {
                category: 'discovery',
                difficulty: 'easy',
                question: 'Nguyên tố Mendelevium (Md) được đặt tên theo ai?',
                options: ['Marie Curie', 'Dmitri Mendeleev', 'Albert Einstein', 'Ernest Rutherford'],
                answer: 'Dmitri Mendeleev',
                hint: 'Cha đẻ của bảng tuần hoàn',
                explanation: 'Mendelevium (Md, Z=101) được đặt tên theo Dmitri Mendeleev để vinh danh công lao của ông trong việc phát triển bảng tuần hoàn các nguyên tố hóa học.'
            },
            {
                category: 'discovery',
                difficulty: 'medium',
                question: 'Nguyên tố nào được William Ramsay phát hiện trong không khí?',
                options: ['Oxygen', 'Nitrogen', 'Argon', 'Carbon dioxide'],
                answer: 'Argon',
                hint: 'Tên của nó có nghĩa là "lười biếng" trong tiếng Hy Lạp',
                explanation: 'William Ramsay và Lord Rayleigh phát hiện Argon năm 1894. Tên "Argon" từ tiếng Hy Lạp "argos" = lười biếng, vì nó không phản ứng với các nguyên tố khác.'
            },
            {
                category: 'discovery',
                difficulty: 'hard',
                question: 'Nguyên tố Seaborgium (Sg) được đặt tên khi người được vinh danh còn sống. Đây là trường hợp đặc biệt vì thường nguyên tố chỉ được đặt tên theo người đã mất. Ai là người đó?',
                options: ['Glenn T. Seaborg', 'Niels Bohr', 'Ernest Rutherford', 'Lise Meitner'],
                answer: 'Glenn T. Seaborg',
                hint: 'Ông tổng hợp được nhiều nguyên tố siêu uranium',
                explanation: 'Glenn T. Seaborg là một trong số ít người được đặt tên nguyên tố khi còn sống (Seaborgium, Sg, Z=106). Ông tham gia tổng hợp 10 nguyên tố siêu uranium và nhận Nobel Hóa học 1951.'
            },
            {
                category: 'discovery',
                difficulty: 'medium',
                question: 'Ernest Rutherford phát hiện ra loại hạt nào trong hạt nhân nguyên tử?',
                options: ['Electron', 'Proton', 'Neutron', 'Positron'],
                answer: 'Proton',
                hint: 'Hạt mang điện dương trong hạt nhân',
                explanation: 'Ernest Rutherford phát hiện proton năm 1917 qua thí nghiệm bắn phá nitrogen bằng hạt alpha. Ông cũng đề xuất mô hình hạt nhân nguyên tử qua thí nghiệm lá vàng nổi tiếng.'
            },
            {
                category: 'discovery',
                difficulty: 'hard',
                question: 'Nguyên tố Oganesson (Og, Z=118) được đặt tên theo nhà khoa học nào?',
                options: ['Yuri Oganessian', 'Dmitri Mendeleev', 'Glenn Seaborg', 'Marie Curie'],
                answer: 'Yuri Oganessian',
                hint: 'Nhà vật lý hạt nhân người Nga-Armenia còn sống',
                explanation: 'Oganesson được đặt tên theo Yuri Oganessian - nhà vật lý hạt nhân người Nga gốc Armenia. Ông là người thứ hai còn sống được đặt tên nguyên tố, sau Seaborg. Ông đóng góp lớn trong tổng hợp các nguyên tố siêu nặng.'
            },

            // === Thêm câu hỏi bổ sung để đủ 50 ===
            {
                category: 'physical',
                difficulty: 'easy',
                question: 'Ở điều kiện thường, kim loại duy nhất tồn tại ở dạng lỏng là gì?',
                options: ['Gallium', 'Mercury', 'Cesium', 'Sodium'],
                answer: 'Mercury',
                hint: 'Kim loại này còn được gọi là thủy ngân',
                explanation: 'Mercury (Hg) là kim loại duy nhất ở dạng lỏng ở nhiệt độ phòng (điểm nóng chảy -38.83°C). Gallium nóng chảy ở 29.76°C nên cũng có thể lỏng khi cầm trong tay.'
            },
            {
                category: 'chemical',
                difficulty: 'easy',
                question: 'Khí gì chiếm tỷ lệ lớn nhất trong không khí?',
                options: ['Oxygen', 'Nitrogen', 'Carbon dioxide', 'Argon'],
                answer: 'Nitrogen',
                hint: 'Chiếm khoảng 78% thể tích không khí',
                explanation: 'Nitrogen (N₂) chiếm khoảng 78% thể tích không khí, Oxygen chiếm khoảng 21%, còn lại là Argon, CO₂ và các khí khác.'
            },
            {
                category: 'application',
                difficulty: 'easy',
                question: 'Nguyên tố nào được dùng để khử trùng nước?',
                options: ['Fluorine', 'Chlorine', 'Bromine', 'Iodine'],
                answer: 'Chlorine',
                hint: 'Được sử dụng phổ biến trong bể bơi',
                explanation: 'Chlorine (Cl₂) hoặc các hợp chất chứa chlorine được dùng khử trùng nước uống và nước bể bơi. Nó tiêu diệt vi khuẩn bằng cách phá vỡ màng tế bào của chúng.'
            },
            {
                category: 'history',
                difficulty: 'easy',
                question: 'Nguyên tố Americium được đặt tên theo quốc gia nào?',
                options: ['Argentina', 'Australia', 'Mỹ (America)', 'Armenia'],
                answer: 'Mỹ (America)',
                hint: 'Nguyên tố này được tổng hợp tại Mỹ trong WWII',
                explanation: 'Americium (Am, Z=95) được đặt tên theo châu Mỹ/nước Mỹ, tương tự như Europium đặt tên theo châu Âu. Nó được tổng hợp năm 1944 bởi nhóm Glenn Seaborg.'
            },
            {
                category: 'chemical',
                difficulty: 'medium',
                question: 'Phản ứng giữa acid và base tạo ra sản phẩm gì?',
                options: ['Salt và Water', 'Gas và Water', 'Oxide và Hydrogen', 'Salt và Hydrogen'],
                answer: 'Salt và Water',
                hint: 'Đây gọi là phản ứng trung hòa',
                explanation: 'Phản ứng trung hòa: Acid + Base → Salt + Water. Ví dụ: HCl + NaOH → NaCl + H₂O. Đây là phản ứng cơ bản trong hóa học.'
            },
            {
                category: 'physical',
                difficulty: 'medium',
                question: 'Carbon tồn tại ở dạng thù hình nào có độ cứng cao nhất?',
                options: ['Graphite', 'Diamond', 'Fullerene', 'Coal'],
                answer: 'Diamond',
                hint: 'Vật liệu tự nhiên cứng nhất',
                explanation: 'Diamond là dạng thù hình cứng nhất của Carbon, cũng là vật liệu tự nhiên cứng nhất (10 trên thang Mohs). Cấu trúc tứ diện 3D của liên kết C-C tạo nên độ cứng này.'
            },
            {
                category: 'application',
                difficulty: 'medium',
                question: 'Iodine được bổ sung vào muối ăn để phòng ngừa bệnh gì?',
                options: ['Anemia', 'Goiter', 'Rickets', 'Osteoporosis'],
                answer: 'Goiter',
                hint: 'Bệnh liên quan đến tuyến giáp (thyroid)',
                explanation: 'Iodine cần cho tuyến giáp (thyroid) sản xuất hormone. Thiếu iodine gây Goiter (bướu cổ - tuyến giáp phình to). Muối iod hóa giúp cung cấp đủ iodine cho cơ thể.'
            },
            {
                category: 'discovery',
                difficulty: 'medium',
                question: 'James Chadwick phát hiện ra loại hạt nào năm 1932?',
                options: ['Electron', 'Proton', 'Neutron', 'Positron'],
                answer: 'Neutron',
                hint: 'Hạt không mang điện trong hạt nhân',
                explanation: 'James Chadwick phát hiện neutron năm 1932 và nhận Nobel Vật lý 1935. Neutron không mang điện, có khối lượng xấp xỉ proton, và số neutron xác định đồng vị của nguyên tố.'
            },
            {
                category: 'chemical',
                difficulty: 'hard',
                question: 'Nguyên tố nào có thể tạo chuỗi liên kết dài nhất với chính nó?',
                options: ['Silicon', 'Carbon', 'Nitrogen', 'Sulfur'],
                answer: 'Carbon',
                hint: 'Cơ sở của hóa học hữu cơ',
                explanation: 'Carbon có khả năng tạo chuỗi dài và phức tạp nhất với chính nó (gọi là catenation). Liên kết C-C rất bền, đây là cơ sở của hóa học hữu cơ và sự sống.'
            },
            {
                category: 'application',
                difficulty: 'hard',
                question: 'Nguyên tố nào được dùng trong nhiệt kế do có hệ số giãn nở nhiệt đều?',
                options: ['Mercury', 'Alcohol', 'Water', 'Gallium'],
                answer: 'Mercury',
                hint: 'Kim loại lỏng ở nhiệt độ phòng',
                explanation: 'Mercury (Hg) được dùng trong nhiệt kế vì có hệ số giãn nở nhiệt đều đặn trong khoảng nhiệt độ rộng, không dính thành ống, và dễ nhìn. Tuy nhiên, do độc tính, đang được thay thế dần.'
            }
        ];

        // Shuffle trivia questions
        function shuffleTriviaQuestions(questions) {
            const shuffled = questions.slice();
            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                const temp = shuffled[i];
                shuffled[i] = shuffled[j];
                shuffled[j] = temp;
            }
            return shuffled;
        }

        // Filter questions by category and difficulty
        function filterTriviaQuestions() {
            let filtered = triviaQuestionsBank.slice();

            if (triviaGame.category !== 'all') {
                filtered = filtered.filter(q => q.category === triviaGame.category);
            }

            if (triviaGame.difficulty !== 'all') {
                // Include easier difficulties for medium/hard
                if (triviaGame.difficulty === 'easy') {
                    filtered = filtered.filter(q => q.difficulty === 'easy');
                } else if (triviaGame.difficulty === 'medium') {
                    filtered = filtered.filter(q => q.difficulty === 'easy' || q.difficulty === 'medium');
                }
                // 'hard' includes all difficulties
            }

            return shuffleTriviaQuestions(filtered).slice(0, 50);
        }

        // Start trivia game
        function startTriviaGame() {
            triviaGame.questions = filterTriviaQuestions();
            triviaGame.currentQuestion = 0;
            triviaGame.correct = 0;
            triviaGame.wrong = 0;
            triviaGame.skipped = 0;
            triviaGame.score = 0;
            triviaGame.isPlaying = true;
            triviaGame.hintUsed = false;
            triviaGame.answerLocked = false;
            if (triviaGame.advanceTimer) clearTimeout(triviaGame.advanceTimer);
            triviaGame.questionResults = [];

            // Create progress dots
            createTriviaProgressDots();
            updateTriviaStats();
            showTriviaQuestion();

            // Enable buttons
            document.getElementById('triviaHintBtn').disabled = false;
            document.getElementById('triviaSkipBtn').disabled = false;
        }

        // Create progress dots
        function createTriviaProgressDots() {
            const dotsContainer = document.getElementById('triviaProgressDots');
            dotsContainer.innerHTML = '';

            const totalToShow = Math.min(triviaGame.questions.length, 50);
            for (let i = 0; i < totalToShow; i++) {
                const dot = document.createElement('div');
                dot.className = 'trivia-dot';
                dot.dataset.index = i;
                dotsContainer.appendChild(dot);
            }
        }

        // Update progress dots
        function updateTriviaProgressDots() {
            const dots = document.querySelectorAll('.trivia-dot');
            dots.forEach((dot, index) => {
                dot.classList.remove('current', 'correct', 'wrong', 'skipped');

                if (index < triviaGame.questionResults.length) {
                    dot.classList.add(triviaGame.questionResults[index]);
                }

                if (index === triviaGame.currentQuestion) {
                    dot.classList.add('current');
                }
            });
        }

        // Show trivia question
        function showTriviaQuestion() {
            if (triviaGame.currentQuestion >= triviaGame.questions.length) {
                endTriviaGame();
                return;
            }

            const q = triviaGame.questions[triviaGame.currentQuestion];
            triviaGame.hintUsed = false;
            triviaGame.answerLocked = false;

            // Update UI elements
            document.getElementById('triviaCategoryBadge').textContent = getCategoryName(q.category);

            const diffBadge = document.getElementById('triviaDifficultyBadge');
            diffBadge.textContent = getDifficultyName(q.difficulty);
            diffBadge.className = 'trivia-difficulty-badge ' + q.difficulty;

            document.getElementById('triviaQuestionText').textContent = q.question;

            // Hide hint and explanation
            const hintEl = document.getElementById('triviaHint');
            hintEl.classList.remove('visible');
            hintEl.textContent = '';

            const explanationEl = document.getElementById('triviaExplanation');
            explanationEl.classList.remove('visible');
            explanationEl.textContent = '';

            const feedbackEl = document.getElementById('triviaFeedback');
            feedbackEl.className = 'trivia-feedback';
            feedbackEl.textContent = '';

            // Shuffle and render options
            const shuffledOptions = shuffleTriviaQuestions(q.options.slice());
            const optionsContainer = document.getElementById('triviaOptions');
            optionsContainer.innerHTML = '';

            shuffledOptions.forEach(option => {
                const btn = document.createElement('button');
                btn.className = 'trivia-option';
                btn.textContent = option;
                btn.addEventListener('click', () => selectTriviaAnswer(option, btn, q));
                optionsContainer.appendChild(btn);
            });

            // Update progress
            updateTriviaStats();
            updateTriviaProgressDots();

            const progress = (triviaGame.currentQuestion / triviaGame.questions.length) * 100;
            document.getElementById('triviaProgressFill').style.width = progress + '%';

            // Enable buttons
            document.getElementById('triviaHintBtn').disabled = false;
            document.getElementById('triviaSkipBtn').disabled = false;
        }

        // Get category display name
        function getCategoryName(category) {
            const names = {
                'history': '📜 Lịch sử & Nguồn gốc',
                'physical': '⚗️ Tính chất Vật lý',
                'chemical': '🧪 Tính chất Hóa học',
                'application': '🔧 Ứng dụng',
                'discovery': '🔬 Phát hiện & Khoa học'
            };
            return names[category] || category;
        }

        // Get difficulty display name
        function getDifficultyName(difficulty) {
            const names = {
                'easy': 'Dễ',
                'medium': 'Trung bình',
                'hard': 'Khó'
            };
            return names[difficulty] || difficulty;
        }

        // Select answer
        function selectTriviaAnswer(answer, btnEl, question) {
            if (!triviaGame.isPlaying || triviaGame.answerLocked) return;
            triviaGame.answerLocked = true;

            const isCorrect = answer === question.answer;
            const feedbackEl = document.getElementById('triviaFeedback');
            const explanationEl = document.getElementById('triviaExplanation');

            // Disable all options
            document.querySelectorAll('.trivia-option').forEach(btn => {
                btn.classList.add('disabled');
                if (btn.textContent === question.answer) {
                    btn.classList.add('correct');
                }
            });

            // Calculate score based on difficulty and hint usage
            let pointsEarned = 0;
            const difficultyMultiplier = { 'easy': 1, 'medium': 2, 'hard': 3 };

            if (isCorrect) {
                btnEl.classList.add('correct');
                triviaGame.correct++;
                pointsEarned = 100 * difficultyMultiplier[question.difficulty];
                if (triviaGame.hintUsed) pointsEarned = Math.floor(pointsEarned * 0.5);
                triviaGame.score += pointsEarned;
                triviaGame.questionResults.push('correct');

                feedbackEl.textContent = `✅ Chính xác! +${pointsEarned} điểm`;
                feedbackEl.className = 'trivia-feedback correct';
            } else {
                btnEl.classList.add('wrong');
                triviaGame.wrong++;
                triviaGame.questionResults.push('wrong');

                feedbackEl.textContent = `❌ Sai rồi! Đáp án đúng: ${question.answer}`;
                feedbackEl.className = 'trivia-feedback wrong';
            }

            // Show explanation
            explanationEl.textContent = '💡 ' + question.explanation;
            explanationEl.classList.add('visible');

            // Disable action buttons
            document.getElementById('triviaHintBtn').disabled = true;
            document.getElementById('triviaSkipBtn').disabled = true;

            updateTriviaStats();
            updateTriviaProgressDots();

            // Next question after delay
            triviaGame.advanceTimer = setTimeout(() => {
                triviaGame.currentQuestion++;
                showTriviaQuestion();
            }, 3500);
        }

        // Show hint
        function showTriviaHint() {
            if (!triviaGame.isPlaying || triviaGame.hintUsed) return;

            const q = triviaGame.questions[triviaGame.currentQuestion];
            const hintEl = document.getElementById('triviaHint');

            hintEl.textContent = '💡 Gợi ý: ' + q.hint;
            hintEl.classList.add('visible');
            triviaGame.hintUsed = true;

            document.getElementById('triviaHintBtn').disabled = true;
        }

                // Skip question
        function skipTriviaQuestion() {
            if (!triviaGame.isPlaying || triviaGame.answerLocked) return;
            triviaGame.answerLocked = true;

            triviaGame.skipped++;
            triviaGame.questionResults.push('skipped');
            updateTriviaStats();
            updateTriviaProgressDots();

            const feedbackEl = document.getElementById('triviaFeedback');
            if (feedbackEl) {
                feedbackEl.textContent = '⏭️ Đã bỏ qua câu này. Đang chuyển sang câu tiếp theo...';
                feedbackEl.className = 'trivia-feedback wrong';
            }

            document.getElementById('triviaHintBtn').disabled = true;
            document.getElementById('triviaSkipBtn').disabled = true;

            triviaGame.advanceTimer = setTimeout(() => {
                triviaGame.currentQuestion++;
                showTriviaQuestion();
            }, 700);
        }

        // Update trivia stats
        function updateTriviaStats() {
            document.getElementById('triviaCurrent').textContent = triviaGame.currentQuestion + 1;
            document.getElementById('triviaCorrect').textContent = triviaGame.correct;
            document.getElementById('triviaWrong').textContent = triviaGame.wrong;
            document.getElementById('triviaScore').textContent = triviaGame.score;
        }

        async function awardTriviaExperience(container) {
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

        // End trivia game
        function endTriviaGame() {
            triviaGame.isPlaying = false;
            triviaGame.answerLocked = true;
            if (triviaGame.advanceTimer) clearTimeout(triviaGame.advanceTimer);

            const total = triviaGame.correct + triviaGame.wrong + triviaGame.skipped;
            const percentage = total > 0 ? Math.round((triviaGame.correct / total) * 100) : 0;

            let grade, icon;
            if (percentage >= 90) { grade = 'Xuất Sắc!'; icon = '🏆'; }
            else if (percentage >= 80) { grade = 'Giỏi!'; icon = '🌟'; }
            else if (percentage >= 70) { grade = 'Khá!'; icon = '🎉'; }
            else if (percentage >= 50) { grade = 'Trung Bình'; icon = '👍'; }
            else { grade = 'Cần Cố Gắng!'; icon = '💪'; }

            const overlay = document.createElement('div');
            overlay.className = 'trivia-results-overlay';
            overlay.innerHTML = `
                <div class="trivia-results-content">
                    <div class="trivia-results-icon">${icon}</div>
                    <h2 class="trivia-results-title">Hoàn Thành!</h2>

                    <div class="trivia-results-stats">
                        <div class="trivia-result-stat">
                            <span class="trivia-result-stat-label">✅ Đúng</span>
                            <span class="trivia-result-stat-value">${triviaGame.correct}</span>
                        </div>
                        <div class="trivia-result-stat">
                            <span class="trivia-result-stat-label">❌ Sai</span>
                            <span class="trivia-result-stat-value">${triviaGame.wrong}</span>
                        </div>
                        <div class="trivia-result-stat">
                            <span class="trivia-result-stat-label">⏭️ Bỏ qua</span>
                            <span class="trivia-result-stat-value">${triviaGame.skipped}</span>
                        </div>
                        <div class="trivia-result-stat">
                            <span class="trivia-result-stat-label">⭐ Điểm</span>
                            <span class="trivia-result-stat-value">${triviaGame.score}</span>
                        </div>
                    </div>

                    <div class="trivia-results-grade">
                        <p class="trivia-grade-label">📊 Tỷ lệ đúng: ${percentage}%</p>
                        <p class="trivia-grade-value">${grade}</p>
                        <p class="trivia-grade-label exp-reward-status">Dang cong +100 EXP...</p>
                    </div>

                    <div class="trivia-results-actions">
                        <button class="victory-btn" onclick="this.closest('.trivia-results-overlay').remove(); startTriviaGame();">
                            🔄 Chơi Lại
                        </button>
                        <button class="victory-btn" onclick="this.closest('.trivia-results-overlay').remove();">
                            ✕ Đóng
                        </button>
                    </div>
                </div>
            `;

            document.body.appendChild(overlay);
            awardTriviaExperience(overlay);

            // Update progress to 100%
            document.getElementById('triviaProgressFill').style.width = '100%';
        }

        // Initialize trivia game
        function initTriviaGame() {
            const startBtn = document.getElementById('startTrivia');
            if (startBtn) {
                startBtn.addEventListener('click', startTriviaGame);
            }

            // Difficulty buttons
            document.querySelectorAll('.trivia-diff-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    document.querySelectorAll('.trivia-diff-btn').forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    triviaGame.difficulty = btn.dataset.difficulty;
                });
            });

            // Category selector
            const categorySelect = document.getElementById('triviaCategory');
            if (categorySelect) {
                categorySelect.addEventListener('change', (e) => {
                    triviaGame.category = e.target.value;
                });
            }

            // Hint button
            const hintBtn = document.getElementById('triviaHintBtn');
            if (hintBtn) {
                hintBtn.addEventListener('click', showTriviaHint);
            }

            // Skip button
            const skipBtn = document.getElementById('triviaSkipBtn');
            if (skipBtn) {
                skipBtn.addEventListener('click', skipTriviaQuestion);
            }
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
    initTriviaGame();
});

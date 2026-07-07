        // Element data
        const elements = [
            // Period 1
            { number: 1, symbol: "H", name: "Hydrogen", nameVi: "Hydrogen", mass: 1.008, category: "nonmetal", period: 1, group: 1, electronegativity: 2.20, state: "Khí", year: "1766", config: "1s¹", fact: "Nguyên tố phổ biến nhất trong vũ trụ, chiếm 75% khối lượng vật chất thông thường." },
            { number: 2, symbol: "He", name: "Helium", nameVi: "Helium", mass: 4.003, category: "noble", period: 1, group: 18, electronegativity: null, state: "Khí", year: "1868", config: "1s²", fact: "Khí nhẹ thứ hai, được dùng cho khinh khí cầu và làm mát thiết bị siêu dẫn." },

            // Period 2
            { number: 3, symbol: "Li", name: "Lithium", nameVi: "Lithium", mass: 6.941, category: "alkali", period: 2, group: 1, electronegativity: 0.98, state: "Rắn", year: "1817", config: "[He] 2s¹", fact: "Kim loại nhẹ nhất, được sử dụng rộng rãi trong pin lithium-ion." },
            { number: 4, symbol: "Be", name: "Beryllium", nameVi: "Beryllium", mass: 9.012, category: "alkaline", period: 2, group: 2, electronegativity: 1.57, state: "Rắn", year: "1798", config: "[He] 2s²", fact: "Kim loại cứng, nhẹ, được dùng trong hợp kim hàng không vũ trụ." },
            { number: 5, symbol: "B", name: "Boron", nameVi: "Boron", mass: 10.81, category: "metalloid", period: 2, group: 13, electronegativity: 2.04, state: "Rắn", year: "1808", config: "[He] 2s² 2p¹", fact: "Á kim quan trọng trong sản xuất thủy tinh borosilicate (Pyrex)." },
            { number: 6, symbol: "C", name: "Carbon", nameVi: "Carbon", mass: 12.01, category: "nonmetal", period: 2, group: 14, electronegativity: 2.55, state: "Rắn", year: "Cổ đại", config: "[He] 2s² 2p²", fact: "Cơ sở của sự sống, có thể tồn tại dưới nhiều dạng thù hình như kim cương, than chì." },
            { number: 7, symbol: "N", name: "Nitrogen", nameVi: "Nitrogen", mass: 14.01, category: "nonmetal", period: 2, group: 15, electronegativity: 3.04, state: "Khí", year: "1772", config: "[He] 2s² 2p³", fact: "Chiếm 78% khí quyển Trái Đất, cần thiết cho protein và DNA." },
            { number: 8, symbol: "O", name: "Oxygen", nameVi: "Oxygen", mass: 16.00, category: "nonmetal", period: 2, group: 16, electronegativity: 3.44, state: "Khí", year: "1774", config: "[He] 2s² 2p⁴", fact: "Nguyên tố thiết yếu cho hô hấp, chiếm 21% khí quyển Trái Đất." },
            { number: 9, symbol: "F", name: "Fluorine", nameVi: "Fluorine", mass: 19.00, category: "halogen", period: 2, group: 17, electronegativity: 3.98, state: "Khí", year: "1886", config: "[He] 2s² 2p⁵", fact: "Nguyên tố có độ âm điện cao nhất, dùng trong kem đánh răng." },
            { number: 10, symbol: "Ne", name: "Neon", nameVi: "Neon", mass: 20.18, category: "noble", period: 2, group: 18, electronegativity: null, state: "Khí", year: "1898", config: "[He] 2s² 2p⁶", fact: "Tạo ra ánh sáng đỏ-cam đặc trưng trong đèn neon." },

            // Period 3
            { number: 11, symbol: "Na", name: "Sodium", nameVi: "Sodium", mass: 22.99, category: "alkali", period: 3, group: 1, electronegativity: 0.93, state: "Rắn", year: "1807", config: "[Ne] 3s¹", fact: "Kim loại mềm, phản ứng mạnh với nước, thành phần của muối ăn." },
            { number: 12, symbol: "Mg", name: "Magnesium", nameVi: "Magnesium", mass: 24.31, category: "alkaline", period: 3, group: 2, electronegativity: 1.31, state: "Rắn", year: "1755", config: "[Ne] 3s²", fact: "Kim loại nhẹ, được dùng trong pháo hoa và hợp kim máy bay." },
            { number: 13, symbol: "Al", name: "Aluminium", nameVi: "Aluminium", mass: 26.98, category: "post-transition", period: 3, group: 13, electronegativity: 1.61, state: "Rắn", year: "1825", config: "[Ne] 3s² 3p¹", fact: "Kim loại phổ biến nhất trong vỏ Trái Đất, dùng làm lon nước ngọt." },
            { number: 14, symbol: "Si", name: "Silicon", nameVi: "Silicon", mass: 28.09, category: "metalloid", period: 3, group: 14, electronegativity: 1.90, state: "Rắn", year: "1824", config: "[Ne] 3s² 3p²", fact: "Nguyên liệu chính cho chip máy tính và pin mặt trời." },
            { number: 15, symbol: "P", name: "Phosphorus", nameVi: "Phosphorus", mass: 30.97, category: "nonmetal", period: 3, group: 15, electronegativity: 2.19, state: "Rắn", year: "1669", config: "[Ne] 3s² 3p³", fact: "Cần thiết cho DNA và ATP, được dùng trong diêm và pháo hoa." },
            { number: 16, symbol: "S", name: "Sulfur", nameVi: "Sulfur", mass: 32.07, category: "nonmetal", period: 3, group: 16, electronegativity: 2.58, state: "Rắn", year: "Cổ đại", config: "[Ne] 3s² 3p⁴", fact: "Có mùi đặc trưng (mùi trứng thối), dùng sản xuất axit sunfuric." },
            { number: 17, symbol: "Cl", name: "Chlorine", nameVi: "Chlorine", mass: 35.45, category: "halogen", period: 3, group: 17, electronegativity: 3.16, state: "Khí", year: "1774", config: "[Ne] 3s² 3p⁵", fact: "Dùng khử trùng nước uống và hồ bơi." },
            { number: 18, symbol: "Ar", name: "Argon", nameVi: "Argon", mass: 39.95, category: "noble", period: 3, group: 18, electronegativity: null, state: "Khí", year: "1894", config: "[Ne] 3s² 3p⁶", fact: "Khí trơ phổ biến nhất, dùng trong bóng đèn và hàn." },

            // Period 4
            { number: 19, symbol: "K", name: "Potassium", nameVi: "Potassium", mass: 39.10, category: "alkali", period: 4, group: 1, electronegativity: 0.82, state: "Rắn", year: "1807", config: "[Ar] 4s¹", fact: "Cần thiết cho hoạt động cơ và thần kinh, có trong chuối." },
            { number: 20, symbol: "Ca", name: "Calcium", nameVi: "Calcium", mass: 40.08, category: "alkaline", period: 4, group: 2, electronegativity: 1.00, state: "Rắn", year: "1808", config: "[Ar] 4s²", fact: "Thành phần chính của xương và răng, có nhiều trong sữa." },
            { number: 21, symbol: "Sc", name: "Scandium", nameVi: "Scandium", mass: 44.96, category: "transition", period: 4, group: 3, electronegativity: 1.36, state: "Rắn", year: "1879", config: "[Ar] 3d¹ 4s²", fact: "Kim loại chuyển tiếp đầu tiên, dùng trong đèn hồ quang." },
            { number: 22, symbol: "Ti", name: "Titanium", nameVi: "Titanium", mass: 47.87, category: "transition", period: 4, group: 4, electronegativity: 1.54, state: "Rắn", year: "1791", config: "[Ar] 3d² 4s²", fact: "Kim loại nhẹ, bền, dùng trong máy bay và cấy ghép y tế." },
            { number: 23, symbol: "V", name: "Vanadium", nameVi: "Vanadium", mass: 50.94, category: "transition", period: 4, group: 5, electronegativity: 1.63, state: "Rắn", year: "1801", config: "[Ar] 3d³ 4s²", fact: "Làm thép cứng hơn, dùng trong lò xo và công cụ." },
            { number: 24, symbol: "Cr", name: "Chromium", nameVi: "Chromium", mass: 52.00, category: "transition", period: 4, group: 6, electronegativity: 1.66, state: "Rắn", year: "1797", config: "[Ar] 3d⁵ 4s¹", fact: "Cho màu sáng bóng đặc trưng, dùng mạ kim loại." },
            { number: 25, symbol: "Mn", name: "Manganese", nameVi: "Manganese", mass: 54.94, category: "transition", period: 4, group: 7, electronegativity: 1.55, state: "Rắn", year: "1774", config: "[Ar] 3d⁵ 4s²", fact: "Dùng trong sản xuất thép và pin khô." },
            { number: 26, symbol: "Fe", name: "Iron", nameVi: "Iron", mass: 55.85, category: "transition", period: 4, group: 8, electronegativity: 1.83, state: "Rắn", year: "Cổ đại", config: "[Ar] 3d⁶ 4s²", fact: "Kim loại được sử dụng nhiều nhất, cần thiết cho hemoglobin máu." },
            { number: 27, symbol: "Co", name: "Cobalt", nameVi: "Cobalt", mass: 58.93, category: "transition", period: 4, group: 9, electronegativity: 1.88, state: "Rắn", year: "1735", config: "[Ar] 3d⁷ 4s²", fact: "Tạo màu xanh đặc trưng, dùng trong pin lithium-ion." },
            { number: 28, symbol: "Ni", name: "Nickel", nameVi: "Nickel", mass: 58.69, category: "transition", period: 4, group: 10, electronegativity: 1.91, state: "Rắn", year: "1751", config: "[Ar] 3d⁸ 4s²", fact: "Dùng trong tiền xu và thép không gỉ." },
            { number: 29, symbol: "Cu", name: "Copper", nameVi: "Copper", mass: 63.55, category: "transition", period: 4, group: 11, electronegativity: 1.90, state: "Rắn", year: "Cổ đại", config: "[Ar] 3d¹⁰ 4s¹", fact: "Dẫn điện tốt thứ hai sau bạc, dùng trong dây điện." },
            { number: 30, symbol: "Zn", name: "Zinc", nameVi: "Zinc", mass: 65.38, category: "transition", period: 4, group: 12, electronegativity: 1.65, state: "Rắn", year: "Cổ đại", config: "[Ar] 3d¹⁰ 4s²", fact: "Bảo vệ sắt khỏi gỉ, quan trọng cho hệ miễn dịch." },
            { number: 31, symbol: "Ga", name: "Gallium", nameVi: "Gallium", mass: 69.72, category: "post-transition", period: 4, group: 13, electronegativity: 1.81, state: "Rắn", year: "1875", config: "[Ar] 3d¹⁰ 4s² 4p¹", fact: "Nóng chảy trong lòng bàn tay, dùng trong LED." },
            { number: 32, symbol: "Ge", name: "Germanium", nameVi: "Germanium", mass: 72.63, category: "metalloid", period: 4, group: 14, electronegativity: 2.01, state: "Rắn", year: "1886", config: "[Ar] 3d¹⁰ 4s² 4p²", fact: "Chất bán dẫn quan trọng trong điện tử học." },
            { number: 33, symbol: "As", name: "Arsenic", nameVi: "Arsenic", mass: 74.92, category: "metalloid", period: 4, group: 15, electronegativity: 2.18, state: "Rắn", year: "Cổ đại", config: "[Ar] 3d¹⁰ 4s² 4p³", fact: "Chất độc nổi tiếng trong lịch sử, dùng trong bảo quản gỗ." },
            { number: 34, symbol: "Se", name: "Selenium", nameVi: "Selenium", mass: 78.97, category: "nonmetal", period: 4, group: 16, electronegativity: 2.55, state: "Rắn", year: "1817", config: "[Ar] 3d¹⁰ 4s² 4p⁴", fact: "Vi lượng cần thiết cho cơ thể, dùng trong dầu gội trị gàu." },
            { number: 35, symbol: "Br", name: "Bromine", nameVi: "Bromine", mass: 79.90, category: "halogen", period: 4, group: 17, electronegativity: 2.96, state: "Lỏng", year: "1826", config: "[Ar] 3d¹⁰ 4s² 4p⁵", fact: "Một trong hai nguyên tố lỏng ở nhiệt độ phòng." },
            { number: 36, symbol: "Kr", name: "Krypton", nameVi: "Krypton", mass: 83.80, category: "noble", period: 4, group: 18, electronegativity: 3.00, state: "Khí", year: "1898", config: "[Ar] 3d¹⁰ 4s² 4p⁶", fact: "Không liên quan đến kryptonite của Superman!" },

            // Period 5
            { number: 37, symbol: "Rb", name: "Rubidium", nameVi: "Rubidium", mass: 85.47, category: "alkali", period: 5, group: 1, electronegativity: 0.82, state: "Rắn", year: "1861", config: "[Kr] 5s¹", fact: "Dùng trong đồng hồ nguyên tử và pháo hoa màu tím." },
            { number: 38, symbol: "Sr", name: "Strontium", nameVi: "Strontium", mass: 87.62, category: "alkaline", period: 5, group: 2, electronegativity: 0.95, state: "Rắn", year: "1790", config: "[Kr] 5s²", fact: "Tạo màu đỏ trong pháo hoa." },
            { number: 39, symbol: "Y", name: "Yttrium", nameVi: "Yttrium", mass: 88.91, category: "transition", period: 5, group: 3, electronegativity: 1.22, state: "Rắn", year: "1794", config: "[Kr] 4d¹ 5s²", fact: "Dùng trong TV màu và LED trắng." },
            { number: 40, symbol: "Zr", name: "Zirconium", nameVi: "Zirconium", mass: 91.22, category: "transition", period: 5, group: 4, electronegativity: 1.33, state: "Rắn", year: "1789", config: "[Kr] 4d² 5s²", fact: "Dùng trong lò phản ứng hạt nhân và đá quý nhân tạo." },
            { number: 41, symbol: "Nb", name: "Niobium", nameVi: "Niobium", mass: 92.91, category: "transition", period: 5, group: 5, electronegativity: 1.6, state: "Rắn", year: "1801", config: "[Kr] 4d⁴ 5s¹", fact: "Dùng trong hợp kim siêu dẫn và trang sức." },
            { number: 42, symbol: "Mo", name: "Molybdenum", nameVi: "Molybdenum", mass: 95.95, category: "transition", period: 5, group: 6, electronegativity: 2.16, state: "Rắn", year: "1781", config: "[Kr] 4d⁵ 5s¹", fact: "Làm thép cứng và bền nhiệt, cần thiết cho enzyme." },
            { number: 43, symbol: "Tc", name: "Technetium", nameVi: "Technetium", mass: 98, category: "transition", period: 5, group: 7, electronegativity: 1.9, state: "Rắn", year: "1937", config: "[Kr] 4d⁵ 5s²", fact: "Nguyên tố đầu tiên được tổng hợp nhân tạo." },
            { number: 44, symbol: "Ru", name: "Ruthenium", nameVi: "Ruthenium", mass: 101.1, category: "transition", period: 5, group: 8, electronegativity: 2.2, state: "Rắn", year: "1844", config: "[Kr] 4d⁷ 5s¹", fact: "Kim loại quý hiếm, dùng trong đầu bút máy cao cấp." },
            { number: 45, symbol: "Rh", name: "Rhodium", nameVi: "Rhodium", mass: 102.9, category: "transition", period: 5, group: 9, electronegativity: 2.28, state: "Rắn", year: "1803", config: "[Kr] 4d⁸ 5s¹", fact: "Kim loại đắt nhất thế giới, dùng trong bộ chuyển đổi xúc tác ô tô." },
            { number: 46, symbol: "Pd", name: "Palladium", nameVi: "Palladium", mass: 106.4, category: "transition", period: 5, group: 10, electronegativity: 2.20, state: "Rắn", year: "1803", config: "[Kr] 4d¹⁰", fact: "Hấp thụ hydro gấp 900 lần thể tích, dùng trong xúc tác ô tô." },
            { number: 47, symbol: "Ag", name: "Silver", nameVi: "Silver", mass: 107.9, category: "transition", period: 5, group: 11, electronegativity: 1.93, state: "Rắn", year: "Cổ đại", config: "[Kr] 4d¹⁰ 5s¹", fact: "Dẫn điện tốt nhất, có tính kháng khuẩn tự nhiên." },
            { number: 48, symbol: "Cd", name: "Cadmium", nameVi: "Cadmium", mass: 112.4, category: "transition", period: 5, group: 12, electronegativity: 1.69, state: "Rắn", year: "1817", config: "[Kr] 4d¹⁰ 5s²", fact: "Dùng trong pin NiCd, độc hại với môi trường." },
            { number: 49, symbol: "In", name: "Indium", nameVi: "Indium", mass: 114.8, category: "post-transition", period: 5, group: 13, electronegativity: 1.78, state: "Rắn", year: "1863", config: "[Kr] 4d¹⁰ 5s² 5p¹", fact: "Dùng trong màn hình cảm ứng và TV phẳng." },
            { number: 50, symbol: "Sn", name: "Tin", nameVi: "Tin", mass: 118.7, category: "post-transition", period: 5, group: 14, electronegativity: 1.96, state: "Rắn", year: "Cổ đại", config: "[Kr] 4d¹⁰ 5s² 5p²", fact: "Dùng làm hộp đựng thực phẩm và hàn điện tử." },
            { number: 51, symbol: "Sb", name: "Antimony", nameVi: "Antimony", mass: 121.8, category: "metalloid", period: 5, group: 15, electronegativity: 2.05, state: "Rắn", year: "Cổ đại", config: "[Kr] 4d¹⁰ 5s² 5p³", fact: "Làm chì trong pin acid và chống cháy." },
            { number: 52, symbol: "Te", name: "Tellurium", nameVi: "Tellurium", mass: 127.6, category: "metalloid", period: 5, group: 16, electronegativity: 2.1, state: "Rắn", year: "1783", config: "[Kr] 4d¹⁰ 5s² 5p⁴", fact: "Dùng trong đĩa DVD-RW và pin mặt trời." },
            { number: 53, symbol: "I", name: "Iodine", nameVi: "Iodine", mass: 126.9, category: "halogen", period: 5, group: 17, electronegativity: 2.66, state: "Rắn", year: "1811", config: "[Kr] 4d¹⁰ 5s² 5p⁵", fact: "Cần thiết cho tuyến giáp, dùng sát trùng vết thương." },
            { number: 54, symbol: "Xe", name: "Xenon", nameVi: "Xenon", mass: 131.3, category: "noble", period: 5, group: 18, electronegativity: 2.60, state: "Khí", year: "1898", config: "[Kr] 4d¹⁰ 5s² 5p⁶", fact: "Dùng trong đèn pha ô tô và gây mê trong y tế." },

            // Period 6
            { number: 55, symbol: "Cs", name: "Cesium", nameVi: "Cesium", mass: 132.9, category: "alkali", period: 6, group: 1, electronegativity: 0.79, state: "Rắn", year: "1860", config: "[Xe] 6s¹", fact: "Kim loại có độ âm điện thấp nhất, dùng trong đồng hồ nguyên tử." },
            { number: 56, symbol: "Ba", name: "Barium", nameVi: "Barium", mass: 137.3, category: "alkaline", period: 6, group: 2, electronegativity: 0.89, state: "Rắn", year: "1808", config: "[Xe] 6s²", fact: "Tạo màu xanh lá trong pháo hoa, dùng chụp X-quang đường tiêu hóa." },
            // Lanthanides placeholder
            { number: 57, symbol: "La", name: "Lanthanum", nameVi: "Lanthanum", mass: 138.9, category: "lanthanide", period: 6, group: 3, electronegativity: 1.10, state: "Rắn", year: "1839", config: "[Xe] 5d¹ 6s²", fact: "Dùng trong pin hybrid và thấu kính máy ảnh." },
            { number: 72, symbol: "Hf", name: "Hafnium", nameVi: "Hafnium", mass: 178.5, category: "transition", period: 6, group: 4, electronegativity: 1.3, state: "Rắn", year: "1923", config: "[Xe] 4f¹⁴ 5d² 6s²", fact: "Dùng trong thanh điều khiển lò phản ứng hạt nhân." },
            { number: 73, symbol: "Ta", name: "Tantalum", nameVi: "Tantalum", mass: 180.9, category: "transition", period: 6, group: 5, electronegativity: 1.5, state: "Rắn", year: "1802", config: "[Xe] 4f¹⁴ 5d³ 6s²", fact: "Dùng trong tụ điện điện thoại và cấy ghép y tế." },
            { number: 74, symbol: "W", name: "Tungsten", nameVi: "Tungsten", mass: 183.8, category: "transition", period: 6, group: 6, electronegativity: 2.36, state: "Rắn", year: "1783", config: "[Xe] 4f¹⁴ 5d⁴ 6s²", fact: "Kim loại có nhiệt độ nóng chảy cao nhất (3422°C)." },
            { number: 75, symbol: "Re", name: "Rhenium", nameVi: "Rhenium", mass: 186.2, category: "transition", period: 6, group: 7, electronegativity: 1.9, state: "Rắn", year: "1925", config: "[Xe] 4f¹⁴ 5d⁵ 6s²", fact: "Nguyên tố hiếm, dùng trong động cơ phản lực." },
            { number: 76, symbol: "Os", name: "Osmium", nameVi: "Osmium", mass: 190.2, category: "transition", period: 6, group: 8, electronegativity: 2.2, state: "Rắn", year: "1803", config: "[Xe] 4f¹⁴ 5d⁶ 6s²", fact: "Nguyên tố có mật độ cao nhất trong các nguyên tố." },
            { number: 77, symbol: "Ir", name: "Iridium", nameVi: "Iridium", mass: 192.2, category: "transition", period: 6, group: 9, electronegativity: 2.20, state: "Rắn", year: "1803", config: "[Xe] 4f¹⁴ 5d⁷ 6s²", fact: "Kim loại chống ăn mòn tốt nhất, dùng trong bugi cao cấp." },
            { number: 78, symbol: "Pt", name: "Platinum", nameVi: "Platinum", mass: 195.1, category: "transition", period: 6, group: 10, electronegativity: 2.28, state: "Rắn", year: "1735", config: "[Xe] 4f¹⁴ 5d⁹ 6s¹", fact: "Kim loại quý, dùng trong trang sức và xúc tác ô tô." },
            { number: 79, symbol: "Au", name: "Gold", nameVi: "Gold", mass: 197.0, category: "transition", period: 6, group: 11, electronegativity: 2.54, state: "Rắn", year: "Cổ đại", config: "[Xe] 4f¹⁴ 5d¹⁰ 6s¹", fact: "Kim loại quý được ưa chuộng nhất, không bị oxy hóa trong không khí." },
            { number: 80, symbol: "Hg", name: "Mercury", nameVi: "Mercury", mass: 200.6, category: "transition", period: 6, group: 12, electronegativity: 2.00, state: "Lỏng", year: "Cổ đại", config: "[Xe] 4f¹⁴ 5d¹⁰ 6s²", fact: "Kim loại lỏng duy nhất ở nhiệt độ phòng." },
            { number: 81, symbol: "Tl", name: "Thallium", nameVi: "Thallium", mass: 204.4, category: "post-transition", period: 6, group: 13, electronegativity: 1.62, state: "Rắn", year: "1861", config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹", fact: "Rất độc, từng được dùng làm thuốc diệt chuột." },
            { number: 82, symbol: "Pb", name: "Lead", nameVi: "Lead", mass: 207.2, category: "post-transition", period: 6, group: 14, electronegativity: 1.87, state: "Rắn", year: "Cổ đại", config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²", fact: "Từng dùng trong xăng và sơn, nay hạn chế vì độc hại." },
            { number: 83, symbol: "Bi", name: "Bismuth", nameVi: "Bismuth", mass: 209.0, category: "post-transition", period: 6, group: 15, electronegativity: 2.02, state: "Rắn", year: "1753", config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³", fact: "Tạo tinh thể cầu vồng đẹp, dùng trong thuốc dạ dày." },
            { number: 84, symbol: "Po", name: "Polonium", nameVi: "Polonium", mass: 209, category: "metalloid", period: 6, group: 16, electronegativity: 2.0, state: "Rắn", year: "1898", config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴", fact: "Phóng xạ mạnh, được Marie Curie phát hiện." },
            { number: 85, symbol: "At", name: "Astatine", nameVi: "Astatine", mass: 210, category: "halogen", period: 6, group: 17, electronegativity: 2.2, state: "Rắn", year: "1940", config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵", fact: "Nguyên tố tự nhiên hiếm nhất trên Trái Đất." },
            { number: 86, symbol: "Rn", name: "Radon", nameVi: "Radon", mass: 222, category: "noble", period: 6, group: 18, electronegativity: 2.2, state: "Khí", year: "1900", config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶", fact: "Khí phóng xạ, có thể tích tụ trong tầng hầm nhà." },

            // Period 7
            { number: 87, symbol: "Fr", name: "Francium", nameVi: "Francium", mass: 223, category: "alkali", period: 7, group: 1, electronegativity: 0.7, state: "Rắn", year: "1939", config: "[Rn] 7s¹", fact: "Kim loại hoạt động mạnh nhất, cực kỳ hiếm và phóng xạ." },
            { number: 88, symbol: "Ra", name: "Radium", nameVi: "Radium", mass: 226, category: "alkaline", period: 7, group: 2, electronegativity: 0.9, state: "Rắn", year: "1898", config: "[Rn] 7s²", fact: "Phát sáng trong bóng tối, từng dùng trong đồng hồ dạ quang." },
            { number: 89, symbol: "Ac", name: "Actinium", nameVi: "Actinium", mass: 227, category: "actinide", period: 7, group: 3, electronegativity: 1.1, state: "Rắn", year: "1899", config: "[Rn] 6d¹ 7s²", fact: "Nguyên tố đầu tiên của họ actinide, phát sáng xanh nhạt." },
            { number: 104, symbol: "Rf", name: "Rutherfordium", nameVi: "Rutherfordium", mass: 267, category: "transition", period: 7, group: 4, electronegativity: null, state: "Rắn", year: "1969", config: "[Rn] 5f¹⁴ 6d² 7s²", fact: "Đặt theo tên Ernest Rutherford, cha đẻ vật lý hạt nhân." },
            { number: 105, symbol: "Db", name: "Dubnium", nameVi: "Dubnium", mass: 268, category: "transition", period: 7, group: 5, electronegativity: null, state: "Rắn", year: "1970", config: "[Rn] 5f¹⁴ 6d³ 7s²", fact: "Đặt theo tên thành phố Dubna, Nga." },
            { number: 106, symbol: "Sg", name: "Seaborgium", nameVi: "Seaborgium", mass: 269, category: "transition", period: 7, group: 6, electronegativity: null, state: "Rắn", year: "1974", config: "[Rn] 5f¹⁴ 6d⁴ 7s²", fact: "Đặt theo tên Glenn Seaborg khi ông còn sống." },
            { number: 107, symbol: "Bh", name: "Bohrium", nameVi: "Bohrium", mass: 270, category: "transition", period: 7, group: 7, electronegativity: null, state: "Rắn", year: "1981", config: "[Rn] 5f¹⁴ 6d⁵ 7s²", fact: "Đặt theo tên Niels Bohr, cha đẻ cơ học lượng tử." },
            { number: 108, symbol: "Hs", name: "Hassium", nameVi: "Hassium", mass: 277, category: "transition", period: 7, group: 8, electronegativity: null, state: "Rắn", year: "1984", config: "[Rn] 5f¹⁴ 6d⁶ 7s²", fact: "Đặt theo tên tiểu bang Hesse, Đức." },
            { number: 109, symbol: "Mt", name: "Meitnerium", nameVi: "Meitnerium", mass: 278, category: "unknown", period: 7, group: 9, electronegativity: null, state: "Rắn", year: "1982", config: "[Rn] 5f¹⁴ 6d⁷ 7s²", fact: "Đặt theo tên Lise Meitner, người đồng phát hiện phân hạch." },
            { number: 110, symbol: "Ds", name: "Darmstadtium", nameVi: "Darmstadtium", mass: 281, category: "unknown", period: 7, group: 10, electronegativity: null, state: "Rắn", year: "1994", config: "[Rn] 5f¹⁴ 6d⁸ 7s²", fact: "Đặt theo tên thành phố Darmstadt, Đức." },
            { number: 111, symbol: "Rg", name: "Roentgenium", nameVi: "Roentgenium", mass: 282, category: "unknown", period: 7, group: 11, electronegativity: null, state: "Rắn", year: "1994", config: "[Rn] 5f¹⁴ 6d⁹ 7s²", fact: "Đặt theo tên Wilhelm Röntgen, người phát hiện tia X." },
            { number: 112, symbol: "Cn", name: "Copernicium", nameVi: "Copernicium", mass: 285, category: "unknown", period: 7, group: 12, electronegativity: null, state: "Khí?", year: "1996", config: "[Rn] 5f¹⁴ 6d¹⁰ 7s²", fact: "Đặt theo tên Nicolaus Copernicus." },
            { number: 113, symbol: "Nh", name: "Nihonium", nameVi: "Nihonium", mass: 286, category: "unknown", period: 7, group: 13, electronegativity: null, state: "Rắn", year: "2004", config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹", fact: "Nguyên tố đầu tiên được đặt tên bởi châu Á (Nhật Bản)." },
            { number: 114, symbol: "Fl", name: "Flerovium", nameVi: "Flerovium", mass: 289, category: "unknown", period: 7, group: 14, electronegativity: null, state: "Rắn", year: "1998", config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²", fact: "Đặt theo tên Georgy Flyorov, nhà vật lý Liên Xô." },
            { number: 115, symbol: "Mc", name: "Moscovium", nameVi: "Moscovium", mass: 290, category: "unknown", period: 7, group: 15, electronegativity: null, state: "Rắn", year: "2003", config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³", fact: "Đặt theo tên vùng Moscow, Nga." },
            { number: 116, symbol: "Lv", name: "Livermorium", nameVi: "Livermorium", mass: 293, category: "unknown", period: 7, group: 16, electronegativity: null, state: "Rắn", year: "2000", config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴", fact: "Đặt theo tên phòng thí nghiệm Lawrence Livermore." },
            { number: 117, symbol: "Ts", name: "Tennessine", nameVi: "Tennessine", mass: 294, category: "unknown", period: 7, group: 17, electronegativity: null, state: "Rắn", year: "2010", config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵", fact: "Đặt theo tên tiểu bang Tennessee, Mỹ." },
            { number: 118, symbol: "Og", name: "Oganesson", nameVi: "Oganesson", mass: 294, category: "unknown", period: 7, group: 18, electronegativity: null, state: "Rắn", year: "2006", config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶", fact: "Nguyên tố nặng nhất, đặt theo tên Yuri Oganessian." },

            // Lanthanides (58-71)
            { number: 58, symbol: "Ce", name: "Cerium", nameVi: "Cerium", mass: 140.1, category: "lanthanide", period: 6, group: null, electronegativity: 1.12, state: "Rắn", year: "1803", config: "[Xe] 4f¹ 5d¹ 6s²", fact: "Dùng trong kính ô tô tự làm sạch và bật lửa." },
            { number: 59, symbol: "Pr", name: "Praseodymium", nameVi: "Praseodymium", mass: 140.9, category: "lanthanide", period: 6, group: null, electronegativity: 1.13, state: "Rắn", year: "1885", config: "[Xe] 4f³ 6s²", fact: "Tạo màu xanh lá cho thủy tinh và gốm sứ." },
            { number: 60, symbol: "Nd", name: "Neodymium", nameVi: "Neodymium", mass: 144.2, category: "lanthanide", period: 6, group: null, electronegativity: 1.14, state: "Rắn", year: "1885", config: "[Xe] 4f⁴ 6s²", fact: "Dùng làm nam châm mạnh nhất thế giới." },
            { number: 61, symbol: "Pm", name: "Promethium", nameVi: "Promethium", mass: 145, category: "lanthanide", period: 6, group: null, electronegativity: 1.13, state: "Rắn", year: "1945", config: "[Xe] 4f⁵ 6s²", fact: "Lanthanide phóng xạ duy nhất, dùng trong pin hạt nhân." },
            { number: 62, symbol: "Sm", name: "Samarium", nameVi: "Samarium", mass: 150.4, category: "lanthanide", period: 6, group: null, electronegativity: 1.17, state: "Rắn", year: "1879", config: "[Xe] 4f⁶ 6s²", fact: "Dùng trong nam châm SmCo và điều trị ung thư." },
            { number: 63, symbol: "Eu", name: "Europium", nameVi: "Europium", mass: 152.0, category: "lanthanide", period: 6, group: null, electronegativity: 1.2, state: "Rắn", year: "1901", config: "[Xe] 4f⁷ 6s²", fact: "Dùng trong đèn huỳnh quang và tiền giấy chống giả." },
            { number: 64, symbol: "Gd", name: "Gadolinium", nameVi: "Gadolinium", mass: 157.3, category: "lanthanide", period: 6, group: null, electronegativity: 1.2, state: "Rắn", year: "1880", config: "[Xe] 4f⁷ 5d¹ 6s²", fact: "Dùng làm chất tương phản MRI trong y tế." },
            { number: 65, symbol: "Tb", name: "Terbium", nameVi: "Terbium", mass: 158.9, category: "lanthanide", period: 6, group: null, electronegativity: 1.2, state: "Rắn", year: "1843", config: "[Xe] 4f⁹ 6s²", fact: "Dùng trong đèn huỳnh quang xanh lá và TV." },
            { number: 66, symbol: "Dy", name: "Dysprosium", nameVi: "Dysprosium", mass: 162.5, category: "lanthanide", period: 6, group: null, electronegativity: 1.22, state: "Rắn", year: "1886", config: "[Xe] 4f¹⁰ 6s²", fact: "Dùng trong động cơ xe điện và tuabin gió." },
            { number: 67, symbol: "Ho", name: "Holmium", nameVi: "Holmium", mass: 164.9, category: "lanthanide", period: 6, group: null, electronegativity: 1.23, state: "Rắn", year: "1878", config: "[Xe] 4f¹¹ 6s²", fact: "Có từ tính mạnh nhất trong các nguyên tố." },
            { number: 68, symbol: "Er", name: "Erbium", nameVi: "Erbium", mass: 167.3, category: "lanthanide", period: 6, group: null, electronegativity: 1.24, state: "Rắn", year: "1843", config: "[Xe] 4f¹² 6s²", fact: "Dùng trong cáp quang và laser y tế." },
            { number: 69, symbol: "Tm", name: "Thulium", nameVi: "Thulium", mass: 168.9, category: "lanthanide", period: 6, group: null, electronegativity: 1.25, state: "Rắn", year: "1879", config: "[Xe] 4f¹³ 6s²", fact: "Lanthanide hiếm nhất, dùng trong laser phẫu thuật." },
            { number: 70, symbol: "Yb", name: "Ytterbium", nameVi: "Ytterbium", mass: 173.0, category: "lanthanide", period: 6, group: null, electronegativity: 1.1, state: "Rắn", year: "1878", config: "[Xe] 4f¹⁴ 6s²", fact: "Dùng trong đồng hồ nguyên tử siêu chính xác." },
            { number: 71, symbol: "Lu", name: "Lutetium", nameVi: "Lutetium", mass: 175.0, category: "lanthanide", period: 6, group: null, electronegativity: 1.27, state: "Rắn", year: "1907", config: "[Xe] 4f¹⁴ 5d¹ 6s²", fact: "Dùng trong xúc tác lọc dầu và PET scan." },

            // Actinides (90-103)
            { number: 90, symbol: "Th", name: "Thorium", nameVi: "Thorium", mass: 232.0, category: "actinide", period: 7, group: null, electronegativity: 1.3, state: "Rắn", year: "1829", config: "[Rn] 6d² 7s²", fact: "Nhiên liệu hạt nhân tiềm năng, từng dùng trong vỏ đèn gas." },
            { number: 91, symbol: "Pa", name: "Protactinium", nameVi: "Protactinium", mass: 231.0, category: "actinide", period: 7, group: null, electronegativity: 1.5, state: "Rắn", year: "1913", config: "[Rn] 5f² 6d¹ 7s²", fact: "Một trong những nguyên tố hiếm nhất và đắt nhất." },
            { number: 92, symbol: "U", name: "Uranium", nameVi: "Uranium", mass: 238.0, category: "actinide", period: 7, group: null, electronegativity: 1.38, state: "Rắn", year: "1789", config: "[Rn] 5f³ 6d¹ 7s²", fact: "Nhiên liệu nhà máy điện hạt nhân và vũ khí nguyên tử." },
            { number: 93, symbol: "Np", name: "Neptunium", nameVi: "Neptunium", mass: 237, category: "actinide", period: 7, group: null, electronegativity: 1.36, state: "Rắn", year: "1940", config: "[Rn] 5f⁴ 6d¹ 7s²", fact: "Nguyên tố siêu urani đầu tiên được tổng hợp." },
            { number: 94, symbol: "Pu", name: "Plutonium", nameVi: "Plutonium", mass: 244, category: "actinide", period: 7, group: null, electronegativity: 1.28, state: "Rắn", year: "1940", config: "[Rn] 5f⁶ 7s²", fact: "Dùng trong vũ khí hạt nhân và nguồn điện tàu vũ trụ." },
            { number: 95, symbol: "Am", name: "Americium", nameVi: "Americium", mass: 243, category: "actinide", period: 7, group: null, electronegativity: 1.13, state: "Rắn", year: "1944", config: "[Rn] 5f⁷ 7s²", fact: "Dùng trong đầu dò khói gia đình." },
            { number: 96, symbol: "Cm", name: "Curium", nameVi: "Curium", mass: 247, category: "actinide", period: 7, group: null, electronegativity: 1.28, state: "Rắn", year: "1944", config: "[Rn] 5f⁷ 6d¹ 7s²", fact: "Đặt theo tên vợ chồng Pierre và Marie Curie." },
            { number: 97, symbol: "Bk", name: "Berkelium", nameVi: "Berkelium", mass: 247, category: "actinide", period: 7, group: null, electronegativity: 1.3, state: "Rắn", year: "1949", config: "[Rn] 5f⁹ 7s²", fact: "Đặt theo tên thành phố Berkeley, California." },
            { number: 98, symbol: "Cf", name: "Californium", nameVi: "Californium", mass: 251, category: "actinide", period: 7, group: null, electronegativity: 1.3, state: "Rắn", year: "1950", config: "[Rn] 5f¹⁰ 7s²", fact: "Một gram có giá 27 triệu USD, dùng trong y tế và khai mỏ." },
            { number: 99, symbol: "Es", name: "Einsteinium", nameVi: "Einsteinium", mass: 252, category: "actinide", period: 7, group: null, electronegativity: 1.3, state: "Rắn", year: "1952", config: "[Rn] 5f¹¹ 7s²", fact: "Được phát hiện trong bụi phóng xạ của bom H đầu tiên." },
            { number: 100, symbol: "Fm", name: "Fermium", nameVi: "Fermium", mass: 257, category: "actinide", period: 7, group: null, electronegativity: 1.3, state: "Rắn", year: "1952", config: "[Rn] 5f¹² 7s²", fact: "Đặt theo tên Enrico Fermi, cha đẻ lò phản ứng hạt nhân." },
            { number: 101, symbol: "Md", name: "Mendelevium", nameVi: "Mendelevium", mass: 258, category: "actinide", period: 7, group: null, electronegativity: 1.3, state: "Rắn", year: "1955", config: "[Rn] 5f¹³ 7s²", fact: "Đặt theo tên Dmitri Mendeleev, cha đẻ bảng tuần hoàn." },
            { number: 102, symbol: "No", name: "Nobelium", nameVi: "Nobelium", mass: 259, category: "actinide", period: 7, group: null, electronegativity: 1.3, state: "Rắn", year: "1958", config: "[Rn] 5f¹⁴ 7s²", fact: "Đặt theo tên Alfred Nobel, người sáng lập giải Nobel." },
            { number: 103, symbol: "Lr", name: "Lawrencium", nameVi: "Lawrencium", mass: 266, category: "actinide", period: 7, group: null, electronegativity: 1.3, state: "Rắn", year: "1961", config: "[Rn] 5f¹⁴ 7s² 7p¹", fact: "Actinide cuối cùng, đặt theo tên Ernest Lawrence." }
        ];

        // Grid position mapping
        const gridPositions = [
            // Period 1
            { number: 1, row: 1, col: 1 },
            { number: 2, row: 1, col: 18 },
            // Period 2
            { number: 3, row: 2, col: 1 },
            { number: 4, row: 2, col: 2 },
            { number: 5, row: 2, col: 13 },
            { number: 6, row: 2, col: 14 },
            { number: 7, row: 2, col: 15 },
            { number: 8, row: 2, col: 16 },
            { number: 9, row: 2, col: 17 },
            { number: 10, row: 2, col: 18 },
            // Period 3
            { number: 11, row: 3, col: 1 },
            { number: 12, row: 3, col: 2 },
            { number: 13, row: 3, col: 13 },
            { number: 14, row: 3, col: 14 },
            { number: 15, row: 3, col: 15 },
            { number: 16, row: 3, col: 16 },
            { number: 17, row: 3, col: 17 },
            { number: 18, row: 3, col: 18 },
            // Period 4
            { number: 19, row: 4, col: 1 },
            { number: 20, row: 4, col: 2 },
            { number: 21, row: 4, col: 3 },
            { number: 22, row: 4, col: 4 },
            { number: 23, row: 4, col: 5 },
            { number: 24, row: 4, col: 6 },
            { number: 25, row: 4, col: 7 },
            { number: 26, row: 4, col: 8 },
            { number: 27, row: 4, col: 9 },
            { number: 28, row: 4, col: 10 },
            { number: 29, row: 4, col: 11 },
            { number: 30, row: 4, col: 12 },
            { number: 31, row: 4, col: 13 },
            { number: 32, row: 4, col: 14 },
            { number: 33, row: 4, col: 15 },
            { number: 34, row: 4, col: 16 },
            { number: 35, row: 4, col: 17 },
            { number: 36, row: 4, col: 18 },
            // Period 5
            { number: 37, row: 5, col: 1 },
            { number: 38, row: 5, col: 2 },
            { number: 39, row: 5, col: 3 },
            { number: 40, row: 5, col: 4 },
            { number: 41, row: 5, col: 5 },
            { number: 42, row: 5, col: 6 },
            { number: 43, row: 5, col: 7 },
            { number: 44, row: 5, col: 8 },
            { number: 45, row: 5, col: 9 },
            { number: 46, row: 5, col: 10 },
            { number: 47, row: 5, col: 11 },
            { number: 48, row: 5, col: 12 },
            { number: 49, row: 5, col: 13 },
            { number: 50, row: 5, col: 14 },
            { number: 51, row: 5, col: 15 },
            { number: 52, row: 5, col: 16 },
            { number: 53, row: 5, col: 17 },
            { number: 54, row: 5, col: 18 },
            // Period 6
            { number: 55, row: 6, col: 1 },
            { number: 56, row: 6, col: 2 },
            { number: 57, row: 6, col: 3 }, // La placeholder
            { number: 72, row: 6, col: 4 },
            { number: 73, row: 6, col: 5 },
            { number: 74, row: 6, col: 6 },
            { number: 75, row: 6, col: 7 },
            { number: 76, row: 6, col: 8 },
            { number: 77, row: 6, col: 9 },
            { number: 78, row: 6, col: 10 },
            { number: 79, row: 6, col: 11 },
            { number: 80, row: 6, col: 12 },
            { number: 81, row: 6, col: 13 },
            { number: 82, row: 6, col: 14 },
            { number: 83, row: 6, col: 15 },
            { number: 84, row: 6, col: 16 },
            { number: 85, row: 6, col: 17 },
            { number: 86, row: 6, col: 18 },
            // Period 7
            { number: 87, row: 7, col: 1 },
            { number: 88, row: 7, col: 2 },
            { number: 89, row: 7, col: 3 }, // Ac placeholder
            { number: 104, row: 7, col: 4 },
            { number: 105, row: 7, col: 5 },
            { number: 106, row: 7, col: 6 },
            { number: 107, row: 7, col: 7 },
            { number: 108, row: 7, col: 8 },
            { number: 109, row: 7, col: 9 },
            { number: 110, row: 7, col: 10 },
            { number: 111, row: 7, col: 11 },
            { number: 112, row: 7, col: 12 },
            { number: 113, row: 7, col: 13 },
            { number: 114, row: 7, col: 14 },
            { number: 115, row: 7, col: 15 },
            { number: 116, row: 7, col: 16 },
            { number: 117, row: 7, col: 17 },
            { number: 118, row: 7, col: 18 },
            // Lanthanides (row 9)
            { number: 58, row: 9, col: 4 },
            { number: 59, row: 9, col: 5 },
            { number: 60, row: 9, col: 6 },
            { number: 61, row: 9, col: 7 },
            { number: 62, row: 9, col: 8 },
            { number: 63, row: 9, col: 9 },
            { number: 64, row: 9, col: 10 },
            { number: 65, row: 9, col: 11 },
            { number: 66, row: 9, col: 12 },
            { number: 67, row: 9, col: 13 },
            { number: 68, row: 9, col: 14 },
            { number: 69, row: 9, col: 15 },
            { number: 70, row: 9, col: 16 },
            { number: 71, row: 9, col: 17 },
            // Actinides (row 10)
            { number: 90, row: 10, col: 4 },
            { number: 91, row: 10, col: 5 },
            { number: 92, row: 10, col: 6 },
            { number: 93, row: 10, col: 7 },
            { number: 94, row: 10, col: 8 },
            { number: 95, row: 10, col: 9 },
            { number: 96, row: 10, col: 10 },
            { number: 97, row: 10, col: 11 },
            { number: 98, row: 10, col: 12 },
            { number: 99, row: 10, col: 13 },
            { number: 100, row: 10, col: 14 },
            { number: 101, row: 10, col: 15 },
            { number: 102, row: 10, col: 16 },
            { number: 103, row: 10, col: 17 }
        ];

        // Category names in Vietnamese
        const categoryNames = {
            'alkali': 'Kim loại kiềm',
            'alkaline': 'Kim loại kiềm thổ',
            'transition': 'Kim loại chuyển tiếp',
            'post-transition': 'Kim loại yếu',
            'metalloid': 'Á kim',
            'nonmetal': 'Phi kim',
            'halogen': 'Halogen',
            'noble': 'Khí hiếm',
            'lanthanide': 'Lantanit',
            'actinide': 'Actinit',
            'unknown': 'Chưa xác định'
        };

        // IPA Pronunciations for all elements
        const elementPronunciations = {
            "Hydrogen": { ipa: "/ˈhaɪdrədʒən/", speak: "Hydrogen" },
            "Helium": { ipa: "/ˈhiːliəm/", speak: "Helium" },
            "Lithium": { ipa: "/ˈlɪθiəm/", speak: "Lithium" },
            "Beryllium": { ipa: "/bəˈrɪliəm/", speak: "Beryllium" },
            "Boron": { ipa: "/ˈbɔːrɒn/", speak: "Boron" },
            "Carbon": { ipa: "/ˈkɑːbən/", speak: "Carbon" },
            "Nitrogen": { ipa: "/ˈnaɪtrədʒən/", speak: "Nitrogen" },
            "Oxygen": { ipa: "/ˈɒksɪdʒən/", speak: "Oxygen" },
            "Fluorine": { ipa: "/ˈflʊəriːn/", speak: "Fluorine" },
            "Neon": { ipa: "/ˈniːɒn/", speak: "Neon" },
            "Sodium": { ipa: "/ˈsəʊdiəm/", speak: "Sodium" },
            "Magnesium": { ipa: "/mæɡˈniːziəm/", speak: "Magnesium" },
            "Aluminium": { ipa: "/ˌæljʊˈmɪniəm/", speak: "Aluminium" },
            "Silicon": { ipa: "/ˈsɪlɪkən/", speak: "Silicon" },
            "Phosphorus": { ipa: "/ˈfɒsfərəs/", speak: "Phosphorus" },
            "Sulfur": { ipa: "/ˈsʌlfər/", speak: "Sulfur" },
            "Chlorine": { ipa: "/ˈklɔːriːn/", speak: "Chlorine" },
            "Argon": { ipa: "/ˈɑːɡɒn/", speak: "Argon" },
            "Potassium": { ipa: "/pəˈtæsiəm/", speak: "Potassium" },
            "Calcium": { ipa: "/ˈkælsiəm/", speak: "Calcium" },
            "Scandium": { ipa: "/ˈskændiəm/", speak: "Scandium" },
            "Titanium": { ipa: "/taɪˈteɪniəm/", speak: "Titanium" },
            "Vanadium": { ipa: "/vəˈneɪdiəm/", speak: "Vanadium" },
            "Chromium": { ipa: "/ˈkrəʊmiəm/", speak: "Chromium" },
            "Manganese": { ipa: "/ˈmæŋɡəniːz/", speak: "Manganese" },
            "Iron": { ipa: "/ˈaɪən/", speak: "Iron" },
            "Cobalt": { ipa: "/ˈkəʊbɔːlt/", speak: "Cobalt" },
            "Nickel": { ipa: "/ˈnɪkəl/", speak: "Nickel" },
            "Copper": { ipa: "/ˈkɒpər/", speak: "Copper" },
            "Zinc": { ipa: "/zɪŋk/", speak: "Zinc" },
            "Gallium": { ipa: "/ˈɡæliəm/", speak: "Gallium" },
            "Germanium": { ipa: "/dʒɜːˈmeɪniəm/", speak: "Germanium" },
            "Arsenic": { ipa: "/ˈɑːsnɪk/", speak: "Arsenic" },
            "Selenium": { ipa: "/sɪˈliːniəm/", speak: "Selenium" },
            "Bromine": { ipa: "/ˈbrəʊmiːn/", speak: "Bromine" },
            "Krypton": { ipa: "/ˈkrɪptɒn/", speak: "Krypton" },
            "Rubidium": { ipa: "/ruːˈbɪdiəm/", speak: "Rubidium" },
            "Strontium": { ipa: "/ˈstrɒntiəm/", speak: "Strontium" },
            "Yttrium": { ipa: "/ˈɪtriəm/", speak: "Yttrium" },
            "Zirconium": { ipa: "/zɜːˈkəʊniəm/", speak: "Zirconium" },
            "Niobium": { ipa: "/naɪˈəʊbiəm/", speak: "Niobium" },
            "Molybdenum": { ipa: "/məˈlɪbdənəm/", speak: "Molybdenum" },
            "Technetium": { ipa: "/tekˈniːʃiəm/", speak: "Technetium" },
            "Ruthenium": { ipa: "/ruːˈθiːniəm/", speak: "Ruthenium" },
            "Rhodium": { ipa: "/ˈrəʊdiəm/", speak: "Rhodium" },
            "Palladium": { ipa: "/pəˈleɪdiəm/", speak: "Palladium" },
            "Silver": { ipa: "/ˈsɪlvər/", speak: "Silver" },
            "Cadmium": { ipa: "/ˈkædmiəm/", speak: "Cadmium" },
            "Indium": { ipa: "/ˈɪndiəm/", speak: "Indium" },
            "Tin": { ipa: "/tɪn/", speak: "Tin" },
            "Antimony": { ipa: "/ˈæntɪməni/", speak: "Antimony" },
            "Tellurium": { ipa: "/tɪˈljʊəriəm/", speak: "Tellurium" },
            "Iodine": { ipa: "/ˈaɪədiːn/", speak: "Iodine" },
            "Xenon": { ipa: "/ˈziːnɒn/", speak: "Xenon" },
            "Cesium": { ipa: "/ˈsiːziəm/", speak: "Cesium" },
            "Barium": { ipa: "/ˈbeəriəm/", speak: "Barium" },
            "Lanthanum": { ipa: "/ˈlænθənəm/", speak: "Lanthanum" },
            "Cerium": { ipa: "/ˈsɪəriəm/", speak: "Cerium" },
            "Praseodymium": { ipa: "/ˌpreɪziəʊˈdɪmiəm/", speak: "Praseodymium" },
            "Neodymium": { ipa: "/ˌniːəʊˈdɪmiəm/", speak: "Neodymium" },
            "Promethium": { ipa: "/prəˈmiːθiəm/", speak: "Promethium" },
            "Samarium": { ipa: "/səˈmeəriəm/", speak: "Samarium" },
            "Europium": { ipa: "/jʊˈrəʊpiəm/", speak: "Europium" },
            "Gadolinium": { ipa: "/ˌɡædəˈlɪniəm/", speak: "Gadolinium" },
            "Terbium": { ipa: "/ˈtɜːbiəm/", speak: "Terbium" },
            "Dysprosium": { ipa: "/dɪsˈprəʊziəm/", speak: "Dysprosium" },
            "Holmium": { ipa: "/ˈhəʊlmiəm/", speak: "Holmium" },
            "Erbium": { ipa: "/ˈɜːbiəm/", speak: "Erbium" },
            "Thulium": { ipa: "/ˈθjuːliəm/", speak: "Thulium" },
            "Ytterbium": { ipa: "/ɪˈtɜːbiəm/", speak: "Ytterbium" },
            "Lutetium": { ipa: "/luːˈtiːʃiəm/", speak: "Lutetium" },
            "Hafnium": { ipa: "/ˈhæfniəm/", speak: "Hafnium" },
            "Tantalum": { ipa: "/ˈtæntələm/", speak: "Tantalum" },
            "Tungsten": { ipa: "/ˈtʌŋstən/", speak: "Tungsten" },
            "Rhenium": { ipa: "/ˈriːniəm/", speak: "Rhenium" },
            "Osmium": { ipa: "/ˈɒzmiəm/", speak: "Osmium" },
            "Iridium": { ipa: "/ɪˈrɪdiəm/", speak: "Iridium" },
            "Platinum": { ipa: "/ˈplætɪnəm/", speak: "Platinum" },
            "Gold": { ipa: "/ɡəʊld/", speak: "Gold" },
            "Mercury": { ipa: "/ˈmɜːkjʊri/", speak: "Mercury" },
            "Thallium": { ipa: "/ˈθæliəm/", speak: "Thallium" },
            "Lead": { ipa: "/led/", speak: "Lead" },
            "Bismuth": { ipa: "/ˈbɪzməθ/", speak: "Bismuth" },
            "Polonium": { ipa: "/pəˈləʊniəm/", speak: "Polonium" },
            "Astatine": { ipa: "/ˈæstətiːn/", speak: "Astatine" },
            "Radon": { ipa: "/ˈreɪdɒn/", speak: "Radon" },
            "Francium": { ipa: "/ˈfrænsiəm/", speak: "Francium" },
            "Radium": { ipa: "/ˈreɪdiəm/", speak: "Radium" },
            "Actinium": { ipa: "/ækˈtɪniəm/", speak: "Actinium" },
            "Thorium": { ipa: "/ˈθɔːriəm/", speak: "Thorium" },
            "Protactinium": { ipa: "/ˌprəʊtækˈtɪniəm/", speak: "Protactinium" },
            "Uranium": { ipa: "/jʊˈreɪniəm/", speak: "Uranium" },
            "Neptunium": { ipa: "/nepˈtjuːniəm/", speak: "Neptunium" },
            "Plutonium": { ipa: "/pluːˈtəʊniəm/", speak: "Plutonium" },
            "Americium": { ipa: "/ˌæməˈrɪsiəm/", speak: "Americium" },
            "Curium": { ipa: "/ˈkjʊəriəm/", speak: "Curium" },
            "Berkelium": { ipa: "/bɜːˈkiːliəm/", speak: "Berkelium" },
            "Californium": { ipa: "/ˌkælɪˈfɔːniəm/", speak: "Californium" },
            "Einsteinium": { ipa: "/aɪnˈstaɪniəm/", speak: "Einsteinium" },
            "Fermium": { ipa: "/ˈfɜːmiəm/", speak: "Fermium" },
            "Mendelevium": { ipa: "/ˌmendəˈliːviəm/", speak: "Mendelevium" },
            "Nobelium": { ipa: "/nəʊˈbiːliəm/", speak: "Nobelium" },
            "Lawrencium": { ipa: "/lɔːˈrensiəm/", speak: "Lawrencium" },
            "Rutherfordium": { ipa: "/ˌrʌðəˈfɔːdiəm/", speak: "Rutherfordium" },
            "Dubnium": { ipa: "/ˈdʌbniəm/", speak: "Dubnium" },
            "Seaborgium": { ipa: "/siːˈbɔːɡiəm/", speak: "Seaborgium" },
            "Bohrium": { ipa: "/ˈbɔːriəm/", speak: "Bohrium" },
            "Hassium": { ipa: "/ˈhæsiəm/", speak: "Hassium" },
            "Meitnerium": { ipa: "/maɪtˈnɪəriəm/", speak: "Meitnerium" },
            "Darmstadtium": { ipa: "/dɑːmˈʃtætiəm/", speak: "Darmstadtium" },
            "Roentgenium": { ipa: "/rɒntˈɡiːniəm/", speak: "Roentgenium" },
            "Copernicium": { ipa: "/ˌkəʊpərˈnɪsiəm/", speak: "Copernicium" },
            "Nihonium": { ipa: "/nɪˈhəʊniəm/", speak: "Nihonium" },
            "Flerovium": { ipa: "/flɪˈrɒviəm/", speak: "Flerovium" },
            "Moscovium": { ipa: "/mɒsˈkəʊviəm/", speak: "Moscovium" },
            "Livermorium": { ipa: "/ˌlɪvərˈmɔːriəm/", speak: "Livermorium" },
            "Tennessine": { ipa: "/ˈtenəsiːn/", speak: "Tennessine" },
            "Oganesson": { ipa: "/ˌɒɡəˈnesɒn/", speak: "Oganesson" },
        };

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
                // Delay âm giúp các ngôi sao phân bố sẵn trên màn hình khi mở trang,
                // thay vì đứng chờ thành một hàng ở mép trên.
                particle.style.animationDelay = -(Math.random() * 15) + 's';
                particle.style.animationDuration = (15 + Math.random() * 10) + 's';
                const size = 5 + Math.random() * 5;
                particle.style.width = size + 'px';
                particle.style.height = size + 'px';
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
                if (typeof comparisonState !== 'undefined' && comparisonState.currentMode !== 'none') {
                    return;
                }

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
                if (typeof comparisonState !== 'undefined' && comparisonState.currentMode !== 'none') {
                    return;
                }

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

            // Camera cũ được cố định ở z = 5, nên từ lớp electron thứ 4
            // (bắt đầu ở Cu, Z = 29) quỹ đạo bị cắt khỏi khung hình.
            // Tính khoảng cách theo bán kính lớp ngoài cùng và góc nhìn
            // để toàn bộ mô hình luôn nằm trong camera, kể cả nguyên tố 118.
            const outerShellIndex = Math.min(shells.length, orbitRadii.length) - 1;
            const outerRadius = outerShellIndex >= 0 ? orbitRadii[outerShellIndex] : 1.2;
            const halfFov = THREE.MathUtils.degToRad(atomCamera.fov / 2);
            const cameraDistance = (outerRadius + 0.35) / Math.sin(halfFov);
            atomCamera.position.z = Math.max(5, cameraDistance);
            atomCamera.lookAt(0, 0, 0);
            atomCamera.updateProjectionMatrix();

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
                if (loading) loading.classList.add('hidden');
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

            if (!legendEl || !infoEl) return;

            // Reset all elements first
            elementCards.forEach(card => {
                card.classList.remove('compare-mode', 'radius-scale', 'electro-mode');
                card.style.transform = '';
                card.style.background = '';
                card.style.boxShadow = '';
                card.style.borderColor = '';
                card.style.zIndex = '';
                card.style.opacity = '';

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
            const tabBtns = document.querySelectorAll('[data-tab]');
            const tabContents = document.querySelectorAll('.tab-content');
            const spiralContent = document.getElementById('spiralTab');
            const tableContainer = document.querySelector('.table-container');

            if (spiralContent && tableContainer && !tableContainer.contains(spiralContent)) {
                tableContainer.appendChild(spiralContent);
            }

            tabBtns.forEach(btn => {
                btn.addEventListener('click', (event) => {
                    event.preventDefault();
                    const tabId = btn.dataset.tab;
                    if (!tabId) return;

                    tabBtns.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');

                    document.body.classList.toggle('spiral-view', tabId === 'spiral');

                    tabContents.forEach(content => {
                        content.classList.remove('active');
                        if (content.id === tabId + 'Tab') {
                            content.classList.add('active');
                        }
                    });

                    if (tabId === 'spiral') {
                        document.getElementById('tableTab')?.classList.add('active');
                    }
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
            initComparisonControls();
            initSpiralOnTabSwitch();

            // Các trò chơi có thể nằm ở trang/file JavaScript khác.
            // Chỉ khởi tạo khi hàm tương ứng thực sự tồn tại để không làm
            // gián đoạn các chức năng chính của bảng tuần hoàn.
            if (typeof initMemoryGame === 'function') initMemoryGame();
            if (typeof initQuizGame === 'function') initQuizGame();
            if (typeof initTriviaGame === 'function') initTriviaGame();
        });



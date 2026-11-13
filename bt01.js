// Khai báo class SinhVien
class SinhVien {
    constructor(ma, hoTen, tuoi, diem) {
        this.ma = ma;
        this.hoTen = hoTen;
        this.tuoi = tuoi;
        this.diem = diem;
    }
}

// Khai báo danh sách 5 sinh viên
const danhSachSinhVien = [
    new SinhVien("SV01", "Nguyễn Hoàng Hải", 20, 8.5),
    new SinhVien("SV02", "Phạm Hoàng Hải", 21, 4.5),
    new SinhVien("SV03", "Phạm Hoàng Anh Tiên", 20, 7.0),
    new SinhVien("SV04", "Vo Kim Trúc", 22, 3.5),
    new SinhVien("SV05", "Trần Quốc Huy", 21, 6.5)
];

// Sử dụng arrow function để lọc sinh viên có điểm từ 5 trở lên
const sinhVienDat = danhSachSinhVien.filter(
    sinhVien => sinhVien.diem >= 5
);

// Hiển thị danh sách sinh viên đạt yêu cầu
console.log("DANH SACH SINH VIEN DAT YEU CAU:");
console.log(sinhVienDat);